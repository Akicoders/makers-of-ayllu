var as=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function H0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function W0(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var o=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:function(){return t[n]}})}),r}var Dn=TypeError;const j0={},G0=Object.freeze(Object.defineProperty({__proto__:null,default:j0},Symbol.toStringTag,{value:"Module"})),Ua=W0(G0);var Js=typeof Map=="function"&&Map.prototype,yi=Object.getOwnPropertyDescriptor&&Js?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,ua=Js&&yi&&typeof yi.get=="function"?yi.get:null,jl=Js&&Map.prototype.forEach,el=typeof Set=="function"&&Set.prototype,xi=Object.getOwnPropertyDescriptor&&el?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,fa=el&&xi&&typeof xi.get=="function"?xi.get:null,Gl=el&&Set.prototype.forEach,q0=typeof WeakMap=="function"&&WeakMap.prototype,eo=q0?WeakMap.prototype.has:null,Y0=typeof WeakSet=="function"&&WeakSet.prototype,to=Y0?WeakSet.prototype.has:null,X0=typeof WeakRef=="function"&&WeakRef.prototype,ql=X0?WeakRef.prototype.deref:null,Q0=Boolean.prototype.valueOf,Z0=Object.prototype.toString,J0=Function.prototype.toString,eh=String.prototype.match,tl=String.prototype.slice,mr=String.prototype.replace,th=String.prototype.toUpperCase,Yl=String.prototype.toLowerCase,Hu=RegExp.prototype.test,Xl=Array.prototype.concat,Kt=Array.prototype.join,rh=Array.prototype.slice,Ql=Math.floor,is=typeof BigInt=="function"?BigInt.prototype.valueOf:null,Ci=Object.getOwnPropertySymbols,ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,Cn=typeof Symbol=="function"&&typeof Symbol.iterator=="object",ro=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===Cn||!0)?Symbol.toStringTag:null,Wu=Object.prototype.propertyIsEnumerable,Zl=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null);function Jl(t,e){if(t===1/0||t===-1/0||t!==t||t&&t>-1e3&&t<1e3||Hu.call(/e/,e))return e;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof t=="number"){var n=t<0?-Ql(-t):Ql(t);if(n!==t){var o=String(n),a=tl.call(e,o.length+1);return mr.call(o,r,"$&_")+"."+mr.call(mr.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return mr.call(e,r,"$&_")}var ls=Ua,ec=ls.custom,tc=qu(ec)?ec:null,ju={__proto__:null,double:'"',single:"'"},nh={__proto__:null,double:/(["\\])/g,single:/(['\\])/g},Va=function t(e,r,n,o){var a=r||{};if(or(a,"quoteStyle")&&!or(ju,a.quoteStyle))throw new TypeError('option "quoteStyle" must be "single" or "double"');if(or(a,"maxStringLength")&&(typeof a.maxStringLength=="number"?a.maxStringLength<0&&a.maxStringLength!==1/0:a.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var i=or(a,"customInspect")?a.customInspect:!0;if(typeof i!="boolean"&&i!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(or(a,"indent")&&a.indent!==null&&a.indent!=="	"&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(or(a,"numericSeparator")&&typeof a.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var s=a.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return Xu(e,a);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var l=String(e);return s?Jl(e,l):l}if(typeof e=="bigint"){var c=String(e)+"n";return s?Jl(e,c):c}var d=typeof a.depth>"u"?5:a.depth;if(typeof n>"u"&&(n=0),n>=d&&d>0&&typeof e=="object")return cs(e)?"[Array]":"[Object]";var u=Ch(a,n);if(typeof o>"u")o=[];else if(Yu(o,e)>=0)return"[Circular]";function f(j,H,G){if(H&&(o=rh.call(o),o.push(H)),G){var Q={depth:a.depth};return or(a,"quoteStyle")&&(Q.quoteStyle=a.quoteStyle),t(j,Q,n+1,o)}return t(j,a,n+1,o)}if(typeof e=="function"&&!rc(e)){var p=fh(e),h=$o(e,f);return"[Function"+(p?": "+p:" (anonymous)")+"]"+(h.length>0?" { "+Kt.call(h,", ")+" }":"")}if(qu(e)){var g=Cn?mr.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):ss.call(e);return typeof e=="object"&&!Cn?$n(g):g}if(vh(e)){for(var b="<"+Yl.call(String(e.nodeName)),x=e.attributes||[],C=0;C<x.length;C++)b+=" "+x[C].name+"="+Gu(oh(x[C].value),"double",a);return b+=">",e.childNodes&&e.childNodes.length&&(b+="..."),b+="</"+Yl.call(String(e.nodeName))+">",b}if(cs(e)){if(e.length===0)return"[]";var k=$o(e,f);return u&&!xh(k)?"["+ds(k,u)+"]":"[ "+Kt.call(k,", ")+" ]"}if(ih(e)){var B=$o(e,f);return!("cause"in Error.prototype)&&"cause"in e&&!Wu.call(e,"cause")?"{ ["+String(e)+"] "+Kt.call(Xl.call("[cause]: "+f(e.cause),B),", ")+" }":B.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+Kt.call(B,", ")+" }"}if(typeof e=="object"&&i){if(tc&&typeof e[tc]=="function"&&ls)return ls(e,{depth:d-n});if(i!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(ph(e)){var _=[];return jl&&jl.call(e,function(j,H){_.push(f(H,e,!0)+" => "+f(j,e))}),nc("Map",ua.call(e),_,u)}if(bh(e)){var T=[];return Gl&&Gl.call(e,function(j){T.push(f(j,e))}),nc("Set",fa.call(e),T,u)}if(hh(e))return ki("WeakMap");if(mh(e))return ki("WeakSet");if(gh(e))return ki("WeakRef");if(lh(e))return $n(f(Number(e)));if(dh(e))return $n(f(is.call(e)));if(ch(e))return $n(Q0.call(e));if(sh(e))return $n(f(String(e)));if(typeof window<"u"&&e===window)return"{ [object Window] }";if(typeof globalThis<"u"&&e===globalThis||typeof as<"u"&&e===as)return"{ [object globalThis] }";if(!ah(e)&&!rc(e)){var R=$o(e,f),D=Zl?Zl(e)===Object.prototype:e instanceof Object||e.constructor===Object,O=e instanceof Object?"":"null prototype",U=!D&&ro&&Object(e)===e&&ro in e?tl.call(Lr(e),8,-1):O?"Object":"",K=D||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",q=K+(U||O?"["+Kt.call(Xl.call([],U||[],O||[]),": ")+"] ":"");return R.length===0?q+"{}":u?q+"{"+ds(R,u)+"}":q+"{ "+Kt.call(R,", ")+" }"}return String(e)};function Gu(t,e,r){var n=r.quoteStyle||e,o=ju[n];return o+t+o}function oh(t){return mr.call(String(t),/"/g,"&quot;")}function rn(t){return!ro||!(typeof t=="object"&&(ro in t||typeof t[ro]<"u"))}function cs(t){return Lr(t)==="[object Array]"&&rn(t)}function ah(t){return Lr(t)==="[object Date]"&&rn(t)}function rc(t){return Lr(t)==="[object RegExp]"&&rn(t)}function ih(t){return Lr(t)==="[object Error]"&&rn(t)}function sh(t){return Lr(t)==="[object String]"&&rn(t)}function lh(t){return Lr(t)==="[object Number]"&&rn(t)}function ch(t){return Lr(t)==="[object Boolean]"&&rn(t)}function qu(t){if(Cn)return t&&typeof t=="object"&&t instanceof Symbol;if(typeof t=="symbol")return!0;if(!t||typeof t!="object"||!ss)return!1;try{return ss.call(t),!0}catch{}return!1}function dh(t){if(!t||typeof t!="object"||!is)return!1;try{return is.call(t),!0}catch{}return!1}var uh=Object.prototype.hasOwnProperty||function(t){return t in this};function or(t,e){return uh.call(t,e)}function Lr(t){return Z0.call(t)}function fh(t){if(t.name)return t.name;var e=eh.call(J0.call(t),/^function\s*([\w$]+)/);return e?e[1]:null}function Yu(t,e){if(t.indexOf)return t.indexOf(e);for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1}function ph(t){if(!ua||!t||typeof t!="object")return!1;try{ua.call(t);try{fa.call(t)}catch{return!0}return t instanceof Map}catch{}return!1}function hh(t){if(!eo||!t||typeof t!="object")return!1;try{eo.call(t,eo);try{to.call(t,to)}catch{return!0}return t instanceof WeakMap}catch{}return!1}function gh(t){if(!ql||!t||typeof t!="object")return!1;try{return ql.call(t),!0}catch{}return!1}function bh(t){if(!fa||!t||typeof t!="object")return!1;try{fa.call(t);try{ua.call(t)}catch{return!0}return t instanceof Set}catch{}return!1}function mh(t){if(!to||!t||typeof t!="object")return!1;try{to.call(t,to);try{eo.call(t,eo)}catch{return!0}return t instanceof WeakSet}catch{}return!1}function vh(t){return!t||typeof t!="object"?!1:typeof HTMLElement<"u"&&t instanceof HTMLElement?!0:typeof t.nodeName=="string"&&typeof t.getAttribute=="function"}function Xu(t,e){if(t.length>e.maxStringLength){var r=t.length-e.maxStringLength,n="... "+r+" more character"+(r>1?"s":"");return Xu(tl.call(t,0,e.maxStringLength),e)+n}var o=nh[e.quoteStyle||"single"];o.lastIndex=0;var a=mr.call(mr.call(t,o,"\\$1"),/[\x00-\x1f]/g,yh);return Gu(a,"single",e)}function yh(t){var e=t.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return r?"\\"+r:"\\x"+(e<16?"0":"")+th.call(e.toString(16))}function $n(t){return"Object("+t+")"}function ki(t){return t+" { ? }"}function nc(t,e,r,n){var o=n?ds(r,n):Kt.call(r,", ");return t+" ("+e+") {"+o+"}"}function xh(t){for(var e=0;e<t.length;e++)if(Yu(t[e],`
`)>=0)return!1;return!0}function Ch(t,e){var r;if(t.indent==="	")r="	";else if(typeof t.indent=="number"&&t.indent>0)r=Kt.call(Array(t.indent+1)," ");else return null;return{base:r,prev:Kt.call(Array(e+1),r)}}function ds(t,e){if(t.length===0)return"";var r=`
`+e.prev+e.base;return r+Kt.call(t,","+r)+`
`+e.prev}function $o(t,e){var r=cs(t),n=[];if(r){n.length=t.length;for(var o=0;o<t.length;o++)n[o]=or(t,o)?e(t[o],t):""}var a=typeof Ci=="function"?Ci(t):[],i;if(Cn){i={};for(var s=0;s<a.length;s++)i["$"+a[s]]=a[s]}for(var l in t)or(t,l)&&(r&&String(Number(l))===l&&l<t.length||Cn&&i["$"+l]instanceof Symbol||(Hu.call(/[^\w$]/,l)?n.push(e(l,t)+": "+e(t[l],t)):n.push(l+": "+e(t[l],t))));if(typeof Ci=="function")for(var c=0;c<a.length;c++)Wu.call(t,a[c])&&n.push("["+e(a[c])+"]: "+e(t[a[c]],t));return n}var kh=Va,wh=Dn,Ka=function(t,e,r){for(var n=t,o;(o=n.next)!=null;n=o)if(o.key===e)return n.next=o.next,r||(o.next=t.next,t.next=o),o},Sh=function(t,e){if(t){var r=Ka(t,e);return r&&r.value}},Eh=function(t,e,r){var n=Ka(t,e);n?n.value=r:t.next={key:e,next:t.next,value:r}},_h=function(t,e){return t?!!Ka(t,e):!1},Th=function(t,e){if(t)return Ka(t,e,!0)},Bh=function(){var e,r={assert:function(n){if(!r.has(n))throw new wh("Side channel does not contain "+kh(n))},delete:function(n){var o=e&&e.next,a=Th(e,n);return a&&o&&o===a&&(e=void 0),!!a},get:function(n){return Sh(e,n)},has:function(n){return _h(e,n)},set:function(n,o){e||(e={next:void 0}),Eh(e,n,o)}};return r},Qu=Object,Ah=Error,Ih=EvalError,Rh=RangeError,Dh=ReferenceError,Lh=SyntaxError,Nh=URIError,Ph=Math.abs,Oh=Math.floor,Mh=Math.max,$h=Math.min,Fh=Math.pow,zh=Math.round,Uh=Number.isNaN||function(e){return e!==e},Vh=Uh,Kh=function(e){return Vh(e)||e===0?e:e<0?-1:1},Hh=Object.getOwnPropertyDescriptor,ra=Hh;if(ra)try{ra([],"length")}catch{ra=null}var Zu=ra,na=Object.defineProperty||!1;if(na)try{na({},"a",{value:1})}catch{na=!1}var Wh=na,wi,oc;function jh(){return oc||(oc=1,wi=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},r=Symbol("test"),n=Object(r);if(typeof r=="string"||Object.prototype.toString.call(r)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var o=42;e[r]=o;for(var a in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var i=Object.getOwnPropertySymbols(e);if(i.length!==1||i[0]!==r||!Object.prototype.propertyIsEnumerable.call(e,r))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var s=Object.getOwnPropertyDescriptor(e,r);if(s.value!==o||s.enumerable!==!0)return!1}return!0}),wi}var Si,ac;function Gh(){if(ac)return Si;ac=1;var t=typeof Symbol<"u"&&Symbol,e=jh();return Si=function(){return typeof t!="function"||typeof Symbol!="function"||typeof t("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:e()},Si}var Ei,ic;function Ju(){return ic||(ic=1,Ei=typeof Reflect<"u"&&Reflect.getPrototypeOf||null),Ei}var _i,sc;function ef(){if(sc)return _i;sc=1;var t=Qu;return _i=t.getPrototypeOf||null,_i}var qh="Function.prototype.bind called on incompatible ",Yh=Object.prototype.toString,Xh=Math.max,Qh="[object Function]",lc=function(e,r){for(var n=[],o=0;o<e.length;o+=1)n[o]=e[o];for(var a=0;a<r.length;a+=1)n[a+e.length]=r[a];return n},Zh=function(e,r){for(var n=[],o=r,a=0;o<e.length;o+=1,a+=1)n[a]=e[o];return n},Jh=function(t,e){for(var r="",n=0;n<t.length;n+=1)r+=t[n],n+1<t.length&&(r+=e);return r},eg=function(e){var r=this;if(typeof r!="function"||Yh.apply(r)!==Qh)throw new TypeError(qh+r);for(var n=Zh(arguments,1),o,a=function(){if(this instanceof o){var d=r.apply(this,lc(n,arguments));return Object(d)===d?d:this}return r.apply(e,lc(n,arguments))},i=Xh(0,r.length-n.length),s=[],l=0;l<i;l++)s[l]="$"+l;if(o=Function("binder","return function ("+Jh(s,",")+"){ return binder.apply(this,arguments); }")(a),r.prototype){var c=function(){};c.prototype=r.prototype,o.prototype=new c,c.prototype=null}return o},tg=eg,Ha=Function.prototype.bind||tg,rl=Function.prototype.call,Ti,cc;function tf(){return cc||(cc=1,Ti=Function.prototype.apply),Ti}var rg=typeof Reflect<"u"&&Reflect&&Reflect.apply,ng=Ha,og=tf(),ag=rl,ig=rg,sg=ig||ng.call(ag,og),lg=Ha,cg=Dn,dg=rl,ug=sg,rf=function(e){if(e.length<1||typeof e[0]!="function")throw new cg("a function is required");return ug(lg,dg,e)},Bi,dc;function fg(){if(dc)return Bi;dc=1;var t=rf,e=Zu,r;try{r=[].__proto__===Array.prototype}catch(i){if(!i||typeof i!="object"||!("code"in i)||i.code!=="ERR_PROTO_ACCESS")throw i}var n=!!r&&e&&e(Object.prototype,"__proto__"),o=Object,a=o.getPrototypeOf;return Bi=n&&typeof n.get=="function"?t([n.get]):typeof a=="function"?function(s){return a(s==null?s:o(s))}:!1,Bi}var Ai,uc;function pg(){if(uc)return Ai;uc=1;var t=Ju(),e=ef(),r=fg();return Ai=t?function(o){return t(o)}:e?function(o){if(!o||typeof o!="object"&&typeof o!="function")throw new TypeError("getProto: not an object");return e(o)}:r?function(o){return r(o)}:null,Ai}var Ii,fc;function hg(){if(fc)return Ii;fc=1;var t=Function.prototype.call,e=Object.prototype.hasOwnProperty,r=Ha;return Ii=r.call(t,e),Ii}var re,gg=Qu,bg=Ah,mg=Ih,vg=Rh,yg=Dh,kn=Lh,xn=Dn,xg=Nh,Cg=Ph,kg=Oh,wg=Mh,Sg=$h,Eg=Fh,_g=zh,Tg=Kh,nf=Function,Ri=function(t){try{return nf('"use strict"; return ('+t+").constructor;")()}catch{}},go=Zu,Bg=Wh,Di=function(){throw new xn},Ag=go?function(){try{return arguments.callee,Di}catch{try{return go(arguments,"callee").get}catch{return Di}}}():Di,dn=Gh()(),tt=pg(),Ig=ef(),Rg=Ju(),of=tf(),So=rl,hn={},Dg=typeof Uint8Array>"u"||!tt?re:tt(Uint8Array),jr={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?re:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?re:ArrayBuffer,"%ArrayIteratorPrototype%":dn&&tt?tt([][Symbol.iterator]()):re,"%AsyncFromSyncIteratorPrototype%":re,"%AsyncFunction%":hn,"%AsyncGenerator%":hn,"%AsyncGeneratorFunction%":hn,"%AsyncIteratorPrototype%":hn,"%Atomics%":typeof Atomics>"u"?re:Atomics,"%BigInt%":typeof BigInt>"u"?re:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?re:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?re:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?re:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":bg,"%eval%":eval,"%EvalError%":mg,"%Float16Array%":typeof Float16Array>"u"?re:Float16Array,"%Float32Array%":typeof Float32Array>"u"?re:Float32Array,"%Float64Array%":typeof Float64Array>"u"?re:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?re:FinalizationRegistry,"%Function%":nf,"%GeneratorFunction%":hn,"%Int8Array%":typeof Int8Array>"u"?re:Int8Array,"%Int16Array%":typeof Int16Array>"u"?re:Int16Array,"%Int32Array%":typeof Int32Array>"u"?re:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":dn&&tt?tt(tt([][Symbol.iterator]())):re,"%JSON%":typeof JSON=="object"?JSON:re,"%Map%":typeof Map>"u"?re:Map,"%MapIteratorPrototype%":typeof Map>"u"||!dn||!tt?re:tt(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":gg,"%Object.getOwnPropertyDescriptor%":go,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?re:Promise,"%Proxy%":typeof Proxy>"u"?re:Proxy,"%RangeError%":vg,"%ReferenceError%":yg,"%Reflect%":typeof Reflect>"u"?re:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?re:Set,"%SetIteratorPrototype%":typeof Set>"u"||!dn||!tt?re:tt(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?re:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":dn&&tt?tt(""[Symbol.iterator]()):re,"%Symbol%":dn?Symbol:re,"%SyntaxError%":kn,"%ThrowTypeError%":Ag,"%TypedArray%":Dg,"%TypeError%":xn,"%Uint8Array%":typeof Uint8Array>"u"?re:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?re:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?re:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?re:Uint32Array,"%URIError%":xg,"%WeakMap%":typeof WeakMap>"u"?re:WeakMap,"%WeakRef%":typeof WeakRef>"u"?re:WeakRef,"%WeakSet%":typeof WeakSet>"u"?re:WeakSet,"%Function.prototype.call%":So,"%Function.prototype.apply%":of,"%Object.defineProperty%":Bg,"%Object.getPrototypeOf%":Ig,"%Math.abs%":Cg,"%Math.floor%":kg,"%Math.max%":wg,"%Math.min%":Sg,"%Math.pow%":Eg,"%Math.round%":_g,"%Math.sign%":Tg,"%Reflect.getPrototypeOf%":Rg};if(tt)try{null.error}catch(t){var Lg=tt(tt(t));jr["%Error.prototype%"]=Lg}var Ng=function t(e){var r;if(e==="%AsyncFunction%")r=Ri("async function () {}");else if(e==="%GeneratorFunction%")r=Ri("function* () {}");else if(e==="%AsyncGeneratorFunction%")r=Ri("async function* () {}");else if(e==="%AsyncGenerator%"){var n=t("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var o=t("%AsyncGenerator%");o&&tt&&(r=tt(o.prototype))}return jr[e]=r,r},pc={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Eo=Ha,pa=hg(),Pg=Eo.call(So,Array.prototype.concat),Og=Eo.call(of,Array.prototype.splice),hc=Eo.call(So,String.prototype.replace),ha=Eo.call(So,String.prototype.slice),Mg=Eo.call(So,RegExp.prototype.exec),$g=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Fg=/\\(\\)?/g,zg=function(e){var r=ha(e,0,1),n=ha(e,-1);if(r==="%"&&n!=="%")throw new kn("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&r!=="%")throw new kn("invalid intrinsic syntax, expected opening `%`");var o=[];return hc(e,$g,function(a,i,s,l){o[o.length]=s?hc(l,Fg,"$1"):i||a}),o},Ug=function(e,r){var n=e,o;if(pa(pc,n)&&(o=pc[n],n="%"+o[0]+"%"),pa(jr,n)){var a=jr[n];if(a===hn&&(a=Ng(n)),typeof a>"u"&&!r)throw new xn("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:o,name:n,value:a}}throw new kn("intrinsic "+e+" does not exist!")},nl=function(e,r){if(typeof e!="string"||e.length===0)throw new xn("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof r!="boolean")throw new xn('"allowMissing" argument must be a boolean');if(Mg(/^%?[^%]*%?$/,e)===null)throw new kn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=zg(e),o=n.length>0?n[0]:"",a=Ug("%"+o+"%",r),i=a.name,s=a.value,l=!1,c=a.alias;c&&(o=c[0],Og(n,Pg([0,1],c)));for(var d=1,u=!0;d<n.length;d+=1){var f=n[d],p=ha(f,0,1),h=ha(f,-1);if((p==='"'||p==="'"||p==="`"||h==='"'||h==="'"||h==="`")&&p!==h)throw new kn("property names with quotes must have matching quotes");if((f==="constructor"||!u)&&(l=!0),o+="."+f,i="%"+o+"%",pa(jr,i))s=jr[i];else if(s!=null){if(!(f in s)){if(!r)throw new xn("base intrinsic for "+e+" exists, but the property is not available.");return}if(go&&d+1>=n.length){var g=go(s,f);u=!!g,u&&"get"in g&&!("originalValue"in g.get)?s=g.get:s=s[f]}else u=pa(s,f),s=s[f];u&&!l&&(jr[i]=s)}}return s},af=nl,sf=rf,Vg=sf([af("%String.prototype.indexOf%")]),lf=function(e,r){var n=af(e,!!r);return typeof n=="function"&&Vg(e,".prototype.")>-1?sf([n]):n},Kg=nl,_o=lf,Hg=Va,Wg=Dn,gc=Kg("%Map%",!0),jg=_o("Map.prototype.get",!0),Gg=_o("Map.prototype.set",!0),qg=_o("Map.prototype.has",!0),Yg=_o("Map.prototype.delete",!0),Xg=_o("Map.prototype.size",!0),cf=!!gc&&function(){var e,r={assert:function(n){if(!r.has(n))throw new Wg("Side channel does not contain "+Hg(n))},delete:function(n){if(e){var o=Yg(e,n);return Xg(e)===0&&(e=void 0),o}return!1},get:function(n){if(e)return jg(e,n)},has:function(n){return e?qg(e,n):!1},set:function(n,o){e||(e=new gc),Gg(e,n,o)}};return r},Qg=nl,Wa=lf,Zg=Va,Fo=cf,Jg=Dn,un=Qg("%WeakMap%",!0),eb=Wa("WeakMap.prototype.get",!0),tb=Wa("WeakMap.prototype.set",!0),rb=Wa("WeakMap.prototype.has",!0),nb=Wa("WeakMap.prototype.delete",!0),ob=un?function(){var e,r,n={assert:function(o){if(!n.has(o))throw new Jg("Side channel does not contain "+Zg(o))},delete:function(o){if(un&&o&&(typeof o=="object"||typeof o=="function")){if(e)return nb(e,o)}else if(Fo&&r)return r.delete(o);return!1},get:function(o){return un&&o&&(typeof o=="object"||typeof o=="function")&&e?eb(e,o):r&&r.get(o)},has:function(o){return un&&o&&(typeof o=="object"||typeof o=="function")&&e?rb(e,o):!!r&&r.has(o)},set:function(o,a){un&&o&&(typeof o=="object"||typeof o=="function")?(e||(e=new un),tb(e,o,a)):Fo&&(r||(r=Fo()),r.set(o,a))}};return n}:Fo,ab=Dn,ib=Va,sb=Bh,lb=cf,cb=ob,db=cb||lb||sb,ub=function(){var e,r={assert:function(n){if(!r.has(n))throw new ab("Side channel does not contain "+ib(n))},delete:function(n){return!!e&&e.delete(n)},get:function(n){return e&&e.get(n)},has:function(n){return!!e&&e.has(n)},set:function(n,o){e||(e=db()),e.set(n,o)}};return r},fb=String.prototype.replace,pb=/%20/g,Li={RFC1738:"RFC1738",RFC3986:"RFC3986"},ol={default:Li.RFC3986,formatters:{RFC1738:function(t){return fb.call(t,pb,"+")},RFC3986:function(t){return String(t)}},RFC1738:Li.RFC1738,RFC3986:Li.RFC3986},hb=ol,Ni=Object.prototype.hasOwnProperty,zr=Array.isArray,Ft=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),gb=function(e){for(;e.length>1;){var r=e.pop(),n=r.obj[r.prop];if(zr(n)){for(var o=[],a=0;a<n.length;++a)typeof n[a]<"u"&&o.push(n[a]);r.obj[r.prop]=o}}},df=function(e,r){for(var n=r&&r.plainObjects?{__proto__:null}:{},o=0;o<e.length;++o)typeof e[o]<"u"&&(n[o]=e[o]);return n},bb=function t(e,r,n){if(!r)return e;if(typeof r!="object"&&typeof r!="function"){if(zr(e))e.push(r);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!Ni.call(Object.prototype,r))&&(e[r]=!0);else return[e,r];return e}if(!e||typeof e!="object")return[e].concat(r);var o=e;return zr(e)&&!zr(r)&&(o=df(e,n)),zr(e)&&zr(r)?(r.forEach(function(a,i){if(Ni.call(e,i)){var s=e[i];s&&typeof s=="object"&&a&&typeof a=="object"?e[i]=t(s,a,n):e.push(a)}else e[i]=a}),e):Object.keys(r).reduce(function(a,i){var s=r[i];return Ni.call(a,i)?a[i]=t(a[i],s,n):a[i]=s,a},o)},mb=function(e,r){return Object.keys(r).reduce(function(n,o){return n[o]=r[o],n},e)},vb=function(t,e,r){var n=t.replace(/\+/g," ");if(r==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},Pi=1024,yb=function(e,r,n,o,a){if(e.length===0)return e;var i=e;if(typeof e=="symbol"?i=Symbol.prototype.toString.call(e):typeof e!="string"&&(i=String(e)),n==="iso-8859-1")return escape(i).replace(/%u[0-9a-f]{4}/gi,function(p){return"%26%23"+parseInt(p.slice(2),16)+"%3B"});for(var s="",l=0;l<i.length;l+=Pi){for(var c=i.length>=Pi?i.slice(l,l+Pi):i,d=[],u=0;u<c.length;++u){var f=c.charCodeAt(u);if(f===45||f===46||f===95||f===126||f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122||a===hb.RFC1738&&(f===40||f===41)){d[d.length]=c.charAt(u);continue}if(f<128){d[d.length]=Ft[f];continue}if(f<2048){d[d.length]=Ft[192|f>>6]+Ft[128|f&63];continue}if(f<55296||f>=57344){d[d.length]=Ft[224|f>>12]+Ft[128|f>>6&63]+Ft[128|f&63];continue}u+=1,f=65536+((f&1023)<<10|c.charCodeAt(u)&1023),d[d.length]=Ft[240|f>>18]+Ft[128|f>>12&63]+Ft[128|f>>6&63]+Ft[128|f&63]}s+=d.join("")}return s},xb=function(e){for(var r=[{obj:{o:e},prop:"o"}],n=[],o=0;o<r.length;++o)for(var a=r[o],i=a.obj[a.prop],s=Object.keys(i),l=0;l<s.length;++l){var c=s[l],d=i[c];typeof d=="object"&&d!==null&&n.indexOf(d)===-1&&(r.push({obj:i,prop:c}),n.push(d))}return gb(r),e},Cb=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},kb=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},wb=function(e,r){return[].concat(e,r)},Sb=function(e,r){if(zr(e)){for(var n=[],o=0;o<e.length;o+=1)n.push(r(e[o]));return n}return r(e)},uf={arrayToObject:df,assign:mb,combine:wb,compact:xb,decode:vb,encode:yb,isBuffer:kb,isRegExp:Cb,maybeMap:Sb,merge:bb},ff=ub,oa=uf,no=ol,Eb=Object.prototype.hasOwnProperty,pf={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},Vt=Array.isArray,_b=Array.prototype.push,hf=function(t,e){_b.apply(t,Vt(e)?e:[e])},Tb=Date.prototype.toISOString,bc=no.default,Ue={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,commaRoundTrip:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:oa.encode,encodeValuesOnly:!1,filter:void 0,format:bc,formatter:no.formatters[bc],indices:!1,serializeDate:function(e){return Tb.call(e)},skipNulls:!1,strictNullHandling:!1},Bb=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Oi={},Ab=function t(e,r,n,o,a,i,s,l,c,d,u,f,p,h,g,b,x,C){for(var k=e,B=C,_=0,T=!1;(B=B.get(Oi))!==void 0&&!T;){var R=B.get(e);if(_+=1,typeof R<"u"){if(R===_)throw new RangeError("Cyclic object value");T=!0}typeof B.get(Oi)>"u"&&(_=0)}if(typeof d=="function"?k=d(r,k):k instanceof Date?k=p(k):n==="comma"&&Vt(k)&&(k=oa.maybeMap(k,function(de){return de instanceof Date?p(de):de})),k===null){if(i)return c&&!b?c(r,Ue.encoder,x,"key",h):r;k=""}if(Bb(k)||oa.isBuffer(k)){if(c){var D=b?r:c(r,Ue.encoder,x,"key",h);return[g(D)+"="+g(c(k,Ue.encoder,x,"value",h))]}return[g(r)+"="+g(String(k))]}var O=[];if(typeof k>"u")return O;var U;if(n==="comma"&&Vt(k))b&&c&&(k=oa.maybeMap(k,c)),U=[{value:k.length>0?k.join(",")||null:void 0}];else if(Vt(d))U=d;else{var K=Object.keys(k);U=u?K.sort(u):K}var q=l?String(r).replace(/\./g,"%2E"):String(r),j=o&&Vt(k)&&k.length===1?q+"[]":q;if(a&&Vt(k)&&k.length===0)return j+"[]";for(var H=0;H<U.length;++H){var G=U[H],Q=typeof G=="object"&&G&&typeof G.value<"u"?G.value:k[G];if(!(s&&Q===null)){var F=f&&l?String(G).replace(/\./g,"%2E"):String(G),Ke=Vt(k)?typeof n=="function"?n(j,F):j:j+(f?"."+F:"["+F+"]");C.set(e,_);var He=ff();He.set(Oi,C),hf(O,t(Q,Ke,n,o,a,i,s,l,n==="comma"&&b&&Vt(k)?null:c,d,u,f,p,h,g,b,x,He))}}return O},Ib=function(e){if(!e)return Ue;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.encodeDotInKeys<"u"&&typeof e.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=e.charset||Ue.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=no.default;if(typeof e.format<"u"){if(!Eb.call(no.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var o=no.formatters[n],a=Ue.filter;(typeof e.filter=="function"||Vt(e.filter))&&(a=e.filter);var i;if(e.arrayFormat in pf?i=e.arrayFormat:"indices"in e?i=e.indices?"indices":"repeat":i=Ue.arrayFormat,"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var s=typeof e.allowDots>"u"?e.encodeDotInKeys===!0?!0:Ue.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:Ue.addQueryPrefix,allowDots:s,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:Ue.allowEmptyArrays,arrayFormat:i,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:Ue.charsetSentinel,commaRoundTrip:!!e.commaRoundTrip,delimiter:typeof e.delimiter>"u"?Ue.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:Ue.encode,encodeDotInKeys:typeof e.encodeDotInKeys=="boolean"?e.encodeDotInKeys:Ue.encodeDotInKeys,encoder:typeof e.encoder=="function"?e.encoder:Ue.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:Ue.encodeValuesOnly,filter:a,format:n,formatter:o,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:Ue.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:Ue.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:Ue.strictNullHandling}},Rb=function(t,e){var r=t,n=Ib(e),o,a;typeof n.filter=="function"?(a=n.filter,r=a("",r)):Vt(n.filter)&&(a=n.filter,o=a);var i=[];if(typeof r!="object"||r===null)return"";var s=pf[n.arrayFormat],l=s==="comma"&&n.commaRoundTrip;o||(o=Object.keys(r)),n.sort&&o.sort(n.sort);for(var c=ff(),d=0;d<o.length;++d){var u=o[d],f=r[u];n.skipNulls&&f===null||hf(i,Ab(f,u,s,l,n.allowEmptyArrays,n.strictNullHandling,n.skipNulls,n.encodeDotInKeys,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,c))}var p=i.join(n.delimiter),h=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),p.length>0?h+p:""},Xr=uf,us=Object.prototype.hasOwnProperty,mc=Array.isArray,Ne={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:Xr.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictNullHandling:!1,throwOnLimitExceeded:!1},Db=function(t){return t.replace(/&#(\d+);/g,function(e,r){return String.fromCharCode(parseInt(r,10))})},gf=function(t,e,r){if(t&&typeof t=="string"&&e.comma&&t.indexOf(",")>-1)return t.split(",");if(e.throwOnLimitExceeded&&r>=e.arrayLimit)throw new RangeError("Array limit exceeded. Only "+e.arrayLimit+" element"+(e.arrayLimit===1?"":"s")+" allowed in an array.");return t},Lb="utf8=%26%2310003%3B",Nb="utf8=%E2%9C%93",Pb=function(e,r){var n={__proto__:null},o=r.ignoreQueryPrefix?e.replace(/^\?/,""):e;o=o.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var a=r.parameterLimit===1/0?void 0:r.parameterLimit,i=o.split(r.delimiter,r.throwOnLimitExceeded?a+1:a);if(r.throwOnLimitExceeded&&i.length>a)throw new RangeError("Parameter limit exceeded. Only "+a+" parameter"+(a===1?"":"s")+" allowed.");var s=-1,l,c=r.charset;if(r.charsetSentinel)for(l=0;l<i.length;++l)i[l].indexOf("utf8=")===0&&(i[l]===Nb?c="utf-8":i[l]===Lb&&(c="iso-8859-1"),s=l,l=i.length);for(l=0;l<i.length;++l)if(l!==s){var d=i[l],u=d.indexOf("]="),f=u===-1?d.indexOf("="):u+1,p,h;f===-1?(p=r.decoder(d,Ne.decoder,c,"key"),h=r.strictNullHandling?null:""):(p=r.decoder(d.slice(0,f),Ne.decoder,c,"key"),h=Xr.maybeMap(gf(d.slice(f+1),r,mc(n[p])?n[p].length:0),function(b){return r.decoder(b,Ne.decoder,c,"value")})),h&&r.interpretNumericEntities&&c==="iso-8859-1"&&(h=Db(String(h))),d.indexOf("[]=")>-1&&(h=mc(h)?[h]:h);var g=us.call(n,p);g&&r.duplicates==="combine"?n[p]=Xr.combine(n[p],h):(!g||r.duplicates==="last")&&(n[p]=h)}return n},Ob=function(t,e,r,n){var o=0;if(t.length>0&&t[t.length-1]==="[]"){var a=t.slice(0,-1).join("");o=Array.isArray(e)&&e[a]?e[a].length:0}for(var i=n?e:gf(e,r,o),s=t.length-1;s>=0;--s){var l,c=t[s];if(c==="[]"&&r.parseArrays)l=r.allowEmptyArrays&&(i===""||r.strictNullHandling&&i===null)?[]:Xr.combine([],i);else{l=r.plainObjects?{__proto__:null}:{};var d=c.charAt(0)==="["&&c.charAt(c.length-1)==="]"?c.slice(1,-1):c,u=r.decodeDotInKeys?d.replace(/%2E/g,"."):d,f=parseInt(u,10);!r.parseArrays&&u===""?l={0:i}:!isNaN(f)&&c!==u&&String(f)===u&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(l=[],l[f]=i):u!=="__proto__"&&(l[u]=i)}i=l}return i},Mb=function(e,r,n,o){if(e){var a=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,l=n.depth>0&&i.exec(a),c=l?a.slice(0,l.index):a,d=[];if(c){if(!n.plainObjects&&us.call(Object.prototype,c)&&!n.allowPrototypes)return;d.push(c)}for(var u=0;n.depth>0&&(l=s.exec(a))!==null&&u<n.depth;){if(u+=1,!n.plainObjects&&us.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;d.push(l[1])}if(l){if(n.strictDepth===!0)throw new RangeError("Input depth exceeded depth option of "+n.depth+" and strictDepth is true");d.push("["+a.slice(l.index)+"]")}return Ob(d,r,n,o)}},$b=function(e){if(!e)return Ne;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.decodeDotInKeys<"u"&&typeof e.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(e.decoder!==null&&typeof e.decoder<"u"&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");if(typeof e.throwOnLimitExceeded<"u"&&typeof e.throwOnLimitExceeded!="boolean")throw new TypeError("`throwOnLimitExceeded` option must be a boolean");var r=typeof e.charset>"u"?Ne.charset:e.charset,n=typeof e.duplicates>"u"?Ne.duplicates:e.duplicates;if(n!=="combine"&&n!=="first"&&n!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var o=typeof e.allowDots>"u"?e.decodeDotInKeys===!0?!0:Ne.allowDots:!!e.allowDots;return{allowDots:o,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:Ne.allowEmptyArrays,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:Ne.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:Ne.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:Ne.arrayLimit,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:Ne.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:Ne.comma,decodeDotInKeys:typeof e.decodeDotInKeys=="boolean"?e.decodeDotInKeys:Ne.decodeDotInKeys,decoder:typeof e.decoder=="function"?e.decoder:Ne.decoder,delimiter:typeof e.delimiter=="string"||Xr.isRegExp(e.delimiter)?e.delimiter:Ne.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:Ne.depth,duplicates:n,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:Ne.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:Ne.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:Ne.plainObjects,strictDepth:typeof e.strictDepth=="boolean"?!!e.strictDepth:Ne.strictDepth,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:Ne.strictNullHandling,throwOnLimitExceeded:typeof e.throwOnLimitExceeded=="boolean"?e.throwOnLimitExceeded:!1}},Fb=function(t,e){var r=$b(e);if(t===""||t===null||typeof t>"u")return r.plainObjects?{__proto__:null}:{};for(var n=typeof t=="string"?Pb(t,r):t,o=r.plainObjects?{__proto__:null}:{},a=Object.keys(n),i=0;i<a.length;++i){var s=a[i],l=Mb(s,n[s],r,typeof t=="string");o=Xr.merge(o,l,r)}return r.allowSparse===!0?o:Xr.compact(o)},zb=Rb,Ub=Fb,Vb=ol,wD={formats:Vb,parse:Ub,stringify:zb},bf=typeof global=="object"&&global&&global.Object===Object&&global,Kb=typeof self=="object"&&self&&self.Object===Object&&self,Mt=bf||Kb||Function("return this")(),Xt=Mt.Symbol,mf=Object.prototype,Hb=mf.hasOwnProperty,Wb=mf.toString,Fn=Xt?Xt.toStringTag:void 0;function jb(t){var e=Hb.call(t,Fn),r=t[Fn];try{t[Fn]=void 0;var n=!0}catch{}var o=Wb.call(t);return n&&(e?t[Fn]=r:delete t[Fn]),o}var Gb=Object.prototype,qb=Gb.toString;function Yb(t){return qb.call(t)}var Xb="[object Null]",Qb="[object Undefined]",vc=Xt?Xt.toStringTag:void 0;function Ln(t){return t==null?t===void 0?Qb:Xb:vc&&vc in Object(t)?jb(t):Yb(t)}function Tr(t){return t!=null&&typeof t=="object"}var Zb="[object Symbol]";function ja(t){return typeof t=="symbol"||Tr(t)&&Ln(t)==Zb}function Jb(t,e){for(var r=-1,n=t==null?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}var dr=Array.isArray,yc=Xt?Xt.prototype:void 0,xc=yc?yc.toString:void 0;function vf(t){if(typeof t=="string")return t;if(dr(t))return Jb(t,vf)+"";if(ja(t))return xc?xc.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}var em=/\s/;function tm(t){for(var e=t.length;e--&&em.test(t.charAt(e)););return e}var rm=/^\s+/;function nm(t){return t&&t.slice(0,tm(t)+1).replace(rm,"")}function ur(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Cc=NaN,om=/^[-+]0x[0-9a-f]+$/i,am=/^0b[01]+$/i,im=/^0o[0-7]+$/i,sm=parseInt;function kc(t){if(typeof t=="number")return t;if(ja(t))return Cc;if(ur(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=ur(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=nm(t);var r=am.test(t);return r||im.test(t)?sm(t.slice(2),r?2:8):om.test(t)?Cc:+t}var lm="[object AsyncFunction]",cm="[object Function]",dm="[object GeneratorFunction]",um="[object Proxy]";function yf(t){if(!ur(t))return!1;var e=Ln(t);return e==cm||e==dm||e==lm||e==um}var Mi=Mt["__core-js_shared__"],wc=function(){var t=/[^.]+$/.exec(Mi&&Mi.keys&&Mi.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function fm(t){return!!wc&&wc in t}var pm=Function.prototype,hm=pm.toString;function nn(t){if(t!=null){try{return hm.call(t)}catch{}try{return t+""}catch{}}return""}var gm=/[\\^$.*+?()[\]{}|]/g,bm=/^\[object .+?Constructor\]$/,mm=Function.prototype,vm=Object.prototype,ym=mm.toString,xm=vm.hasOwnProperty,Cm=RegExp("^"+ym.call(xm).replace(gm,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function km(t){if(!ur(t)||fm(t))return!1;var e=yf(t)?Cm:bm;return e.test(nn(t))}function wm(t,e){return t==null?void 0:t[e]}function on(t,e){var r=wm(t,e);return km(r)?r:void 0}var fs=on(Mt,"WeakMap"),Sc=Object.create,Sm=function(){function t(){}return function(e){if(!ur(e))return{};if(Sc)return Sc(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),Ec=function(){try{var t=on(Object,"defineProperty");return t({},"",{}),t}catch{}}();function Em(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var _m=9007199254740991,Tm=/^(?:0|[1-9]\d*)$/;function al(t,e){var r=typeof t;return e=e??_m,!!e&&(r=="number"||r!="symbol"&&Tm.test(t))&&t>-1&&t%1==0&&t<e}function Bm(t,e,r){e=="__proto__"&&Ec?Ec(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function il(t,e){return t===e||t!==t&&e!==e}var Am=Object.prototype,Im=Am.hasOwnProperty;function xf(t,e,r){var n=t[e];(!(Im.call(t,e)&&il(n,r))||r===void 0&&!(e in t))&&Bm(t,e,r)}var Rm=9007199254740991;function sl(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Rm}function Dm(t){return t!=null&&sl(t.length)&&!yf(t)}var Lm=Object.prototype;function Cf(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||Lm;return t===r}function Nm(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var Pm="[object Arguments]";function _c(t){return Tr(t)&&Ln(t)==Pm}var kf=Object.prototype,Om=kf.hasOwnProperty,Mm=kf.propertyIsEnumerable,wf=_c(function(){return arguments}())?_c:function(t){return Tr(t)&&Om.call(t,"callee")&&!Mm.call(t,"callee")};function $m(){return!1}var Sf=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Tc=Sf&&typeof module=="object"&&module&&!module.nodeType&&module,Fm=Tc&&Tc.exports===Sf,Bc=Fm?Mt.Buffer:void 0,zm=Bc?Bc.isBuffer:void 0,ga=zm||$m,Um="[object Arguments]",Vm="[object Array]",Km="[object Boolean]",Hm="[object Date]",Wm="[object Error]",jm="[object Function]",Gm="[object Map]",qm="[object Number]",Ym="[object Object]",Xm="[object RegExp]",Qm="[object Set]",Zm="[object String]",Jm="[object WeakMap]",ev="[object ArrayBuffer]",tv="[object DataView]",rv="[object Float32Array]",nv="[object Float64Array]",ov="[object Int8Array]",av="[object Int16Array]",iv="[object Int32Array]",sv="[object Uint8Array]",lv="[object Uint8ClampedArray]",cv="[object Uint16Array]",dv="[object Uint32Array]",Ee={};Ee[rv]=Ee[nv]=Ee[ov]=Ee[av]=Ee[iv]=Ee[sv]=Ee[lv]=Ee[cv]=Ee[dv]=!0;Ee[Um]=Ee[Vm]=Ee[ev]=Ee[Km]=Ee[tv]=Ee[Hm]=Ee[Wm]=Ee[jm]=Ee[Gm]=Ee[qm]=Ee[Ym]=Ee[Xm]=Ee[Qm]=Ee[Zm]=Ee[Jm]=!1;function uv(t){return Tr(t)&&sl(t.length)&&!!Ee[Ln(t)]}function ll(t){return function(e){return t(e)}}var Ef=typeof exports=="object"&&exports&&!exports.nodeType&&exports,oo=Ef&&typeof module=="object"&&module&&!module.nodeType&&module,fv=oo&&oo.exports===Ef,$i=fv&&bf.process,wn=function(){try{var t=oo&&oo.require&&oo.require("util").types;return t||$i&&$i.binding&&$i.binding("util")}catch{}}(),Ac=wn&&wn.isTypedArray,_f=Ac?ll(Ac):uv,pv=Object.prototype,hv=pv.hasOwnProperty;function gv(t,e){var r=dr(t),n=!r&&wf(t),o=!r&&!n&&ga(t),a=!r&&!n&&!o&&_f(t),i=r||n||o||a,s=i?Nm(t.length,String):[],l=s.length;for(var c in t)hv.call(t,c)&&!(i&&(c=="length"||o&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||al(c,l)))&&s.push(c);return s}function Tf(t,e){return function(r){return t(e(r))}}var bv=Tf(Object.keys,Object),mv=Object.prototype,vv=mv.hasOwnProperty;function yv(t){if(!Cf(t))return bv(t);var e=[];for(var r in Object(t))vv.call(t,r)&&r!="constructor"&&e.push(r);return e}function xv(t){return Dm(t)?gv(t):yv(t)}var Cv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,kv=/^\w*$/;function wv(t,e){if(dr(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||ja(t)?!0:kv.test(t)||!Cv.test(t)||e!=null&&t in Object(e)}var bo=on(Object,"create");function Sv(){this.__data__=bo?bo(null):{},this.size=0}function Ev(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var _v="__lodash_hash_undefined__",Tv=Object.prototype,Bv=Tv.hasOwnProperty;function Av(t){var e=this.__data__;if(bo){var r=e[t];return r===_v?void 0:r}return Bv.call(e,t)?e[t]:void 0}var Iv=Object.prototype,Rv=Iv.hasOwnProperty;function Dv(t){var e=this.__data__;return bo?e[t]!==void 0:Rv.call(e,t)}var Lv="__lodash_hash_undefined__";function Nv(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=bo&&e===void 0?Lv:e,this}function Qr(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Qr.prototype.clear=Sv;Qr.prototype.delete=Ev;Qr.prototype.get=Av;Qr.prototype.has=Dv;Qr.prototype.set=Nv;function Pv(){this.__data__=[],this.size=0}function Ga(t,e){for(var r=t.length;r--;)if(il(t[r][0],e))return r;return-1}var Ov=Array.prototype,Mv=Ov.splice;function $v(t){var e=this.__data__,r=Ga(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():Mv.call(e,r,1),--this.size,!0}function Fv(t){var e=this.__data__,r=Ga(e,t);return r<0?void 0:e[r][1]}function zv(t){return Ga(this.__data__,t)>-1}function Uv(t,e){var r=this.__data__,n=Ga(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function fr(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}fr.prototype.clear=Pv;fr.prototype.delete=$v;fr.prototype.get=Fv;fr.prototype.has=zv;fr.prototype.set=Uv;var mo=on(Mt,"Map");function Vv(){this.size=0,this.__data__={hash:new Qr,map:new(mo||fr),string:new Qr}}function Kv(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function qa(t,e){var r=t.__data__;return Kv(e)?r[typeof e=="string"?"string":"hash"]:r.map}function Hv(t){var e=qa(this,t).delete(t);return this.size-=e?1:0,e}function Wv(t){return qa(this,t).get(t)}function jv(t){return qa(this,t).has(t)}function Gv(t,e){var r=qa(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function pr(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}pr.prototype.clear=Vv;pr.prototype.delete=Hv;pr.prototype.get=Wv;pr.prototype.has=jv;pr.prototype.set=Gv;var qv="Expected a function";function cl(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(qv);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(cl.Cache||pr),r}cl.Cache=pr;var Yv=500;function Xv(t){var e=cl(t,function(n){return r.size===Yv&&r.clear(),n}),r=e.cache;return e}var Qv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zv=/\\(\\)?/g,Jv=Xv(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Qv,function(r,n,o,a){e.push(o?a.replace(Zv,"$1"):n||r)}),e});function Bf(t){return t==null?"":vf(t)}function dl(t,e){return dr(t)?t:wv(t,e)?[t]:Jv(Bf(t))}function ul(t){if(typeof t=="string"||ja(t))return t;var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function ey(t,e){e=dl(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[ul(e[r++])];return r&&r==n?t:void 0}function SD(t,e,r){var n=t==null?void 0:ey(t,e);return n===void 0?r:n}function ty(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}var ry=Tf(Object.getPrototypeOf,Object);function ny(t){return function(e){return t==null?void 0:t[e]}}function oy(){this.__data__=new fr,this.size=0}function ay(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function iy(t){return this.__data__.get(t)}function sy(t){return this.__data__.has(t)}var ly=200;function cy(t,e){var r=this.__data__;if(r instanceof fr){var n=r.__data__;if(!mo||n.length<ly-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new pr(n)}return r.set(t,e),this.size=r.size,this}function lr(t){var e=this.__data__=new fr(t);this.size=e.size}lr.prototype.clear=oy;lr.prototype.delete=ay;lr.prototype.get=iy;lr.prototype.has=sy;lr.prototype.set=cy;var Af=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ic=Af&&typeof module=="object"&&module&&!module.nodeType&&module,dy=Ic&&Ic.exports===Af,Rc=dy?Mt.Buffer:void 0;Rc&&Rc.allocUnsafe;function uy(t,e){return t.slice()}function fy(t,e){for(var r=-1,n=t==null?0:t.length,o=0,a=[];++r<n;){var i=t[r];e(i,r,t)&&(a[o++]=i)}return a}function py(){return[]}var hy=Object.prototype,gy=hy.propertyIsEnumerable,Dc=Object.getOwnPropertySymbols,by=Dc?function(t){return t==null?[]:(t=Object(t),fy(Dc(t),function(e){return gy.call(t,e)}))}:py;function my(t,e,r){var n=e(t);return dr(t)?n:ty(n,r(t))}function ps(t){return my(t,xv,by)}var hs=on(Mt,"DataView"),gs=on(Mt,"Promise"),bs=on(Mt,"Set"),Lc="[object Map]",vy="[object Object]",Nc="[object Promise]",Pc="[object Set]",Oc="[object WeakMap]",Mc="[object DataView]",yy=nn(hs),xy=nn(mo),Cy=nn(gs),ky=nn(bs),wy=nn(fs),Dt=Ln;(hs&&Dt(new hs(new ArrayBuffer(1)))!=Mc||mo&&Dt(new mo)!=Lc||gs&&Dt(gs.resolve())!=Nc||bs&&Dt(new bs)!=Pc||fs&&Dt(new fs)!=Oc)&&(Dt=function(t){var e=Ln(t),r=e==vy?t.constructor:void 0,n=r?nn(r):"";if(n)switch(n){case yy:return Mc;case xy:return Lc;case Cy:return Nc;case ky:return Pc;case wy:return Oc}return e});var Sy=Object.prototype,Ey=Sy.hasOwnProperty;function _y(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&Ey.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var ba=Mt.Uint8Array;function fl(t){var e=new t.constructor(t.byteLength);return new ba(e).set(new ba(t)),e}function Ty(t,e){var r=fl(t.buffer);return new t.constructor(r,t.byteOffset,t.byteLength)}var By=/\w*$/;function Ay(t){var e=new t.constructor(t.source,By.exec(t));return e.lastIndex=t.lastIndex,e}var $c=Xt?Xt.prototype:void 0,Fc=$c?$c.valueOf:void 0;function Iy(t){return Fc?Object(Fc.call(t)):{}}function Ry(t,e){var r=fl(t.buffer);return new t.constructor(r,t.byteOffset,t.length)}var Dy="[object Boolean]",Ly="[object Date]",Ny="[object Map]",Py="[object Number]",Oy="[object RegExp]",My="[object Set]",$y="[object String]",Fy="[object Symbol]",zy="[object ArrayBuffer]",Uy="[object DataView]",Vy="[object Float32Array]",Ky="[object Float64Array]",Hy="[object Int8Array]",Wy="[object Int16Array]",jy="[object Int32Array]",Gy="[object Uint8Array]",qy="[object Uint8ClampedArray]",Yy="[object Uint16Array]",Xy="[object Uint32Array]";function Qy(t,e,r){var n=t.constructor;switch(e){case zy:return fl(t);case Dy:case Ly:return new n(+t);case Uy:return Ty(t);case Vy:case Ky:case Hy:case Wy:case jy:case Gy:case qy:case Yy:case Xy:return Ry(t);case Ny:return new n;case Py:case $y:return new n(t);case Oy:return Ay(t);case My:return new n;case Fy:return Iy(t)}}function Zy(t){return typeof t.constructor=="function"&&!Cf(t)?Sm(ry(t)):{}}var Jy="[object Map]";function ex(t){return Tr(t)&&Dt(t)==Jy}var zc=wn&&wn.isMap,tx=zc?ll(zc):ex,rx="[object Set]";function nx(t){return Tr(t)&&Dt(t)==rx}var Uc=wn&&wn.isSet,ox=Uc?ll(Uc):nx,If="[object Arguments]",ax="[object Array]",ix="[object Boolean]",sx="[object Date]",lx="[object Error]",Rf="[object Function]",cx="[object GeneratorFunction]",dx="[object Map]",ux="[object Number]",Df="[object Object]",fx="[object RegExp]",px="[object Set]",hx="[object String]",gx="[object Symbol]",bx="[object WeakMap]",mx="[object ArrayBuffer]",vx="[object DataView]",yx="[object Float32Array]",xx="[object Float64Array]",Cx="[object Int8Array]",kx="[object Int16Array]",wx="[object Int32Array]",Sx="[object Uint8Array]",Ex="[object Uint8ClampedArray]",_x="[object Uint16Array]",Tx="[object Uint32Array]",Ce={};Ce[If]=Ce[ax]=Ce[mx]=Ce[vx]=Ce[ix]=Ce[sx]=Ce[yx]=Ce[xx]=Ce[Cx]=Ce[kx]=Ce[wx]=Ce[dx]=Ce[ux]=Ce[Df]=Ce[fx]=Ce[px]=Ce[hx]=Ce[gx]=Ce[Sx]=Ce[Ex]=Ce[_x]=Ce[Tx]=!0;Ce[lx]=Ce[Rf]=Ce[bx]=!1;function aa(t,e,r,n,o,a){var i;if(i!==void 0)return i;if(!ur(t))return t;var s=dr(t);if(s)i=_y(t);else{var l=Dt(t),c=l==Rf||l==cx;if(ga(t))return uy(t);if(l==Df||l==If||c&&!o)i=c?{}:Zy(t);else{if(!Ce[l])return o?t:{};i=Qy(t,l)}}a||(a=new lr);var d=a.get(t);if(d)return d;a.set(t,i),ox(t)?t.forEach(function(p){i.add(aa(p,e,r,p,t,a))}):tx(t)&&t.forEach(function(p,h){i.set(h,aa(p,e,r,h,t,a))});var u=ps,f=s?void 0:u(t);return Em(f||t,function(p,h){f&&(h=p,p=t[h]),xf(i,h,aa(p,e,r,h,t,a))}),i}var Bx=1,Ax=4;function ED(t){return aa(t,Bx|Ax)}var Ix="__lodash_hash_undefined__";function Rx(t){return this.__data__.set(t,Ix),this}function Dx(t){return this.__data__.has(t)}function ma(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new pr;++e<r;)this.add(t[e])}ma.prototype.add=ma.prototype.push=Rx;ma.prototype.has=Dx;function Lx(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function Nx(t,e){return t.has(e)}var Px=1,Ox=2;function Lf(t,e,r,n,o,a){var i=r&Px,s=t.length,l=e.length;if(s!=l&&!(i&&l>s))return!1;var c=a.get(t),d=a.get(e);if(c&&d)return c==e&&d==t;var u=-1,f=!0,p=r&Ox?new ma:void 0;for(a.set(t,e),a.set(e,t);++u<s;){var h=t[u],g=e[u];if(n)var b=i?n(g,h,u,e,t,a):n(h,g,u,t,e,a);if(b!==void 0){if(b)continue;f=!1;break}if(p){if(!Lx(e,function(x,C){if(!Nx(p,C)&&(h===x||o(h,x,r,n,a)))return p.push(C)})){f=!1;break}}else if(!(h===g||o(h,g,r,n,a))){f=!1;break}}return a.delete(t),a.delete(e),f}function Mx(t){var e=-1,r=Array(t.size);return t.forEach(function(n,o){r[++e]=[o,n]}),r}function $x(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var Fx=1,zx=2,Ux="[object Boolean]",Vx="[object Date]",Kx="[object Error]",Hx="[object Map]",Wx="[object Number]",jx="[object RegExp]",Gx="[object Set]",qx="[object String]",Yx="[object Symbol]",Xx="[object ArrayBuffer]",Qx="[object DataView]",Vc=Xt?Xt.prototype:void 0,Fi=Vc?Vc.valueOf:void 0;function Zx(t,e,r,n,o,a,i){switch(r){case Qx:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Xx:return!(t.byteLength!=e.byteLength||!a(new ba(t),new ba(e)));case Ux:case Vx:case Wx:return il(+t,+e);case Kx:return t.name==e.name&&t.message==e.message;case jx:case qx:return t==e+"";case Hx:var s=Mx;case Gx:var l=n&Fx;if(s||(s=$x),t.size!=e.size&&!l)return!1;var c=i.get(t);if(c)return c==e;n|=zx,i.set(t,e);var d=Lf(s(t),s(e),n,o,a,i);return i.delete(t),d;case Yx:if(Fi)return Fi.call(t)==Fi.call(e)}return!1}var Jx=1,e1=Object.prototype,t1=e1.hasOwnProperty;function r1(t,e,r,n,o,a){var i=r&Jx,s=ps(t),l=s.length,c=ps(e),d=c.length;if(l!=d&&!i)return!1;for(var u=l;u--;){var f=s[u];if(!(i?f in e:t1.call(e,f)))return!1}var p=a.get(t),h=a.get(e);if(p&&h)return p==e&&h==t;var g=!0;a.set(t,e),a.set(e,t);for(var b=i;++u<l;){f=s[u];var x=t[f],C=e[f];if(n)var k=i?n(C,x,f,e,t,a):n(x,C,f,t,e,a);if(!(k===void 0?x===C||o(x,C,r,n,a):k)){g=!1;break}b||(b=f=="constructor")}if(g&&!b){var B=t.constructor,_=e.constructor;B!=_&&"constructor"in t&&"constructor"in e&&!(typeof B=="function"&&B instanceof B&&typeof _=="function"&&_ instanceof _)&&(g=!1)}return a.delete(t),a.delete(e),g}var n1=1,Kc="[object Arguments]",Hc="[object Array]",zo="[object Object]",o1=Object.prototype,Wc=o1.hasOwnProperty;function a1(t,e,r,n,o,a){var i=dr(t),s=dr(e),l=i?Hc:Dt(t),c=s?Hc:Dt(e);l=l==Kc?zo:l,c=c==Kc?zo:c;var d=l==zo,u=c==zo,f=l==c;if(f&&ga(t)){if(!ga(e))return!1;i=!0,d=!1}if(f&&!d)return a||(a=new lr),i||_f(t)?Lf(t,e,r,n,o,a):Zx(t,e,l,r,n,o,a);if(!(r&n1)){var p=d&&Wc.call(t,"__wrapped__"),h=u&&Wc.call(e,"__wrapped__");if(p||h){var g=p?t.value():t,b=h?e.value():e;return a||(a=new lr),o(g,b,r,n,a)}}return f?(a||(a=new lr),r1(t,e,r,n,o,a)):!1}function Nf(t,e,r,n,o){return t===e?!0:t==null||e==null||!Tr(t)&&!Tr(e)?t!==t&&e!==e:a1(t,e,r,n,Nf,o)}function i1(t,e,r){e=dl(e,t);for(var n=-1,o=e.length,a=!1;++n<o;){var i=ul(e[n]);if(!(a=t!=null&&r(t,i)))break;t=t[i]}return a||++n!=o?a:(o=t==null?0:t.length,!!o&&sl(o)&&al(i,o)&&(dr(t)||wf(t)))}var zi=function(){return Mt.Date.now()},s1="Expected a function",l1=Math.max,c1=Math.min;function _D(t,e,r){var n,o,a,i,s,l,c=0,d=!1,u=!1,f=!0;if(typeof t!="function")throw new TypeError(s1);e=kc(e)||0,ur(r)&&(d=!!r.leading,u="maxWait"in r,a=u?l1(kc(r.maxWait)||0,e):a,f="trailing"in r?!!r.trailing:f);function p(T){var R=n,D=o;return n=o=void 0,c=T,i=t.apply(D,R),i}function h(T){return c=T,s=setTimeout(x,e),d?p(T):i}function g(T){var R=T-l,D=T-c,O=e-R;return u?c1(O,a-D):O}function b(T){var R=T-l,D=T-c;return l===void 0||R>=e||R<0||u&&D>=a}function x(){var T=zi();if(b(T))return C(T);s=setTimeout(x,g(T))}function C(T){return s=void 0,f&&n?p(T):(n=o=void 0,i)}function k(){s!==void 0&&clearTimeout(s),c=0,n=l=o=s=void 0}function B(){return s===void 0?i:C(zi())}function _(){var T=zi(),R=b(T);if(n=arguments,o=this,l=T,R){if(s===void 0)return h(l);if(u)return clearTimeout(s),s=setTimeout(x,e),p(l)}return s===void 0&&(s=setTimeout(x,e)),i}return _.cancel=k,_.flush=B,_}var d1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},u1=ny(d1),Pf=/[&<>"']/g,f1=RegExp(Pf.source);function TD(t){return t=Bf(t),t&&f1.test(t)?t.replace(Pf,u1):t}var p1=Object.prototype,h1=p1.hasOwnProperty;function g1(t,e){return t!=null&&h1.call(t,e)}function BD(t,e){return t!=null&&i1(t,e,g1)}function AD(t,e){return Nf(t,e)}function b1(t,e,r,n){if(!ur(t))return t;e=dl(e,t);for(var o=-1,a=e.length,i=a-1,s=t;s!=null&&++o<a;){var l=ul(e[o]),c=r;if(l==="__proto__"||l==="constructor"||l==="prototype")return t;if(o!=i){var d=s[l];c=void 0,c===void 0&&(c=ur(d)?d:al(e[o+1])?[]:{})}xf(s,l,c),s=s[l]}return t}function ID(t,e,r){return t==null?t:b1(t,e,r)}function m1(...t){if(t){let e=[];for(let r=0;r<t.length;r++){let n=t[r];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")e.push(n);else if(o==="object"){let a=Array.isArray(n)?[m1(...n)]:Object.entries(n).map(([i,s])=>s?i:void 0);e=a.length?e.concat(a.filter(i=>!!i)):e}}return e.join(" ").trim()}}function v1(t,e){return t?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}function jc(t,e){if(t&&e){let r=n=>{v1(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[e].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(r))}}function y1(){return window.innerWidth-document.documentElement.offsetWidth}function RD(t){typeof t=="string"?jc(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,y1()+"px"),jc(document.body,(t==null?void 0:t.className)||"p-overflow-hidden"))}function x1(t){if(t){let e=document.createElement("a");if(e.download!==void 0){let{name:r,src:n}=t;return e.setAttribute("href",n),e.setAttribute("download",r),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e),!0}}return!1}function DD(t,e){let r=new Blob([t],{type:"application/csv;charset=utf-8;"});window.navigator.msSaveOrOpenBlob?navigator.msSaveOrOpenBlob(r,e+".csv"):x1({name:e+".csv",src:URL.createObjectURL(r)})||(t="data:text/csv;charset=utf-8,"+t,window.open(encodeURI(t)))}function Gc(t,e){if(t&&e){let r=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(r))}}function LD(t){typeof t=="string"?Gc(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),Gc(document.body,(t==null?void 0:t.className)||"p-overflow-hidden"))}function ms(t){for(let e of document==null?void 0:document.styleSheets)try{for(let r of e==null?void 0:e.cssRules)for(let n of r==null?void 0:r.style)if(t.test(n))return{name:n,value:r.style.getPropertyValue(n).trim()}}catch{}return null}function Of(t){let e={width:0,height:0};if(t){let[r,n]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display=n,t.style.visibility=r}return e}function Mf(){let t=window,e=document,r=e.documentElement,n=e.getElementsByTagName("body")[0],o=t.innerWidth||r.clientWidth||n.clientWidth,a=t.innerHeight||r.clientHeight||n.clientHeight;return{width:o,height:a}}function vs(t){return t?Math.abs(t.scrollLeft):0}function C1(){let t=document.documentElement;return(window.pageXOffset||vs(t))-(t.clientLeft||0)}function k1(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function w1(t){return t?getComputedStyle(t).direction==="rtl":!1}function ND(t,e,r=!0){var n,o,a,i;if(t){let s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Of(t),l=s.height,c=s.width,d=e.offsetHeight,u=e.offsetWidth,f=e.getBoundingClientRect(),p=k1(),h=C1(),g=Mf(),b,x,C="top";f.top+d+l>g.height?(b=f.top+p-l,C="bottom",b<0&&(b=p)):b=d+f.top+p,f.left+c>g.width?x=Math.max(0,f.left+h+u-c):x=f.left+h,w1(t)?t.style.insetInlineEnd=x+"px":t.style.insetInlineStart=x+"px",t.style.top=b+"px",t.style.transformOrigin=C,r&&(t.style.marginTop=C==="bottom"?`calc(${(o=(n=ms(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(i=(a=ms(/-anchor-gutter$/))==null?void 0:a.value)!=null?i:"")}}function PD(t,e){t&&(typeof e=="string"?t.style.cssText=e:Object.entries(e||{}).forEach(([r,n])=>t.style[r]=n))}function OD(t,e){return t instanceof HTMLElement?t.offsetWidth:0}function MD(t,e,r=!0,n=void 0){var o;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Of(t),i=e.offsetHeight,s=e.getBoundingClientRect(),l=Mf(),c,d,u=n??"top";if(!n&&s.top+i+a.height>l.height?(c=-1*a.height,u="bottom",s.top+c<0&&(c=-1*s.top)):c=i,a.width>l.width?d=s.left*-1:s.left+a.width>l.width?d=(s.left+a.width-l.width)*-1:d=0,t.style.top=c+"px",t.style.insetInlineStart=d+"px",t.style.transformOrigin=u,r){let f=(o=ms(/-anchor-gutter$/))==null?void 0:o.value;t.style.marginTop=u==="bottom"?`calc(${f??"2px"} * -1)`:f??""}}}function pl(t){if(t){let e=t.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function S1(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&pl(t))}function an(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function E1(t){let e=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?e=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?e=t.el.nativeElement:e=t.el)),an(e)?e:void 0}function $D(t,e){var r,n,o;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return e==null?void 0:e.nextElementSibling;case"@prev":return e==null?void 0:e.previousElementSibling;case"@first":return e==null?void 0:e.firstElementChild;case"@last":return e==null?void 0:e.lastElementChild;case"@child":return(r=e==null?void 0:e.children)==null?void 0:r[0];case"@parent":return e==null?void 0:e.parentElement;case"@grandparent":return(n=e==null?void 0:e.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let s=t.match(/^@child\[(\d+)]/);return s?((o=e==null?void 0:e.children)==null?void 0:o[parseInt(s[1],10)])||null:document.querySelector(t)||null}let a=(s=>typeof s=="function"&&"call"in s&&"apply"in s)(t)?t():t,i=E1(a);return S1(i)?i:(a==null?void 0:a.nodeType)===9?a:void 0}}}function FD(){if(window.getSelection){let t=window.getSelection()||{};t.empty?t.empty():t.removeAllRanges&&t.rangeCount>0&&t.getRangeAt(0).getClientRects().length>0&&t.removeAllRanges()}}function $f(t,e={}){if(an(t)){let r=(n,o)=>{var a,i;let s=(a=t==null?void 0:t.$attrs)!=null&&a[n]?[(i=t==null?void 0:t.$attrs)==null?void 0:i[n]]:[];return[o].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let u=Array.isArray(c)?r(n,c):Object.entries(c).map(([f,p])=>n==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);l=u.length?l.concat(u.filter(f=>!!f)):l}}return l},s)};Object.entries(e).forEach(([n,o])=>{if(o!=null){let a=n.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?$f(t,o):(o=n==="class"?[...new Set(r("class",o))].join(" ").trim():n==="style"?r("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=o),t.setAttribute(n,o))}})}}function zD(t,e={},...r){if(t){let n=document.createElement(t);return $f(n,e),n.append(...r),n}}function UD(t,e){if(t){t.style.opacity="0";let r=+new Date,n="0",o=function(){n=`${+t.style.opacity+(new Date().getTime()-r)/e}`,t.style.opacity=n,r=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(o):setTimeout(o,16))};o()}}function _1(t,e){return an(t)?Array.from(t.querySelectorAll(e)):[]}function T1(t,e){return an(t)?t.matches(e)?t:t.querySelector(e):null}function VD(t,e){t&&document.activeElement!==t&&t.focus(e)}function KD(t,e){if(an(t)){let r=t.getAttribute(e);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}function Ff(t,e=""){let r=_1(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),n=[];for(let o of r)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function HD(t,e){let r=Ff(t,e);return r.length>0?r[0]:null}function WD(t){if(t){let e=t.offsetHeight,r=getComputedStyle(t);return e-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),e}return 0}function jD(t){if(t){let[e,r]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display=r,t.style.visibility=e,n}return 0}function GD(t){if(t){let[e,r]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display=r,t.style.visibility=e,n}return 0}function qD(t){var e;if(t){let r=(e=pl(t))==null?void 0:e.childNodes,n=0;if(r)for(let o=0;o<r.length;o++){if(r[o]===t)return n;r[o].nodeType===1&&n++}}return-1}function YD(t,e){let r=Ff(t,e);return r.length>0?r[r.length-1]:null}function XD(t,e){let r=t.nextElementSibling;for(;r;){if(r.matches(e))return r;r=r.nextElementSibling}return null}function QD(t){if(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||vs(document.documentElement)||vs(document.body)||0)}}return{top:"auto",left:"auto"}}function ZD(t,e){return t?t.offsetHeight:0}function zf(t,e=[]){let r=pl(t);return r===null?e:zf(r,e.concat([r]))}function JD(t,e){let r=t.previousElementSibling;for(;r;){if(r.matches(e))return r;r=r.previousElementSibling}return null}function eL(t){let e=[];if(t){let r=zf(t),n=/(auto|scroll)/,o=a=>{try{let i=window.getComputedStyle(a,null);return n.test(i.getPropertyValue("overflow"))||n.test(i.getPropertyValue("overflowX"))||n.test(i.getPropertyValue("overflowY"))}catch{return!1}};for(let a of r){let i=a.nodeType===1&&a.dataset.scrollselectors;if(i){let s=i.split(",");for(let l of s){let c=T1(a,l);c&&o(c)&&e.push(c)}}a.nodeType!==9&&o(a)&&e.push(a)}}return e}function tL(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function rL(t){if(t){let e=t.offsetWidth,r=getComputedStyle(t);return e-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),e}return 0}function nL(t,e,r){let n=t[e];typeof n=="function"&&n.apply(t,[])}function oL(){return/(android)/i.test(navigator.userAgent)}function aL(t){if(t){let e=t.nodeName,r=t.parentElement&&t.parentElement.nodeName;return e==="INPUT"||e==="TEXTAREA"||e==="BUTTON"||e==="A"||r==="INPUT"||r==="TEXTAREA"||r==="BUTTON"||r==="A"||!!t.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1}function iL(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function sL(t,e=""){return an(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}function lL(t){return!!(t&&t.offsetParent!=null)}function cL(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function dL(t,e="",r){an(t)&&r!==null&&r!==void 0&&t.setAttribute(e,r)}function B1(){let t=new Map;return{on(e,r){let n=t.get(e);return n?n.push(r):n=[r],t.set(e,n),this},off(e,r){let n=t.get(e);return n&&n.splice(n.indexOf(r)>>>0,1),this},emit(e,r){let n=t.get(e);n&&n.forEach(o=>{o(r)})},clear(){t.clear()}}}var A1=Object.defineProperty,qc=Object.getOwnPropertySymbols,I1=Object.prototype.hasOwnProperty,R1=Object.prototype.propertyIsEnumerable,Yc=(t,e,r)=>e in t?A1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,D1=(t,e)=>{for(var r in e||(e={}))I1.call(e,r)&&Yc(t,r,e[r]);if(qc)for(var r of qc(e))R1.call(e,r)&&Yc(t,r,e[r]);return t};function Zr(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function L1(t,e,r,n=1){let o=-1,a=Zr(t),i=Zr(e);return a&&i?o=0:a?o=n:i?o=-n:typeof t=="string"&&typeof e=="string"?o=r(t,e):o=t<e?-1:t>e?1:0,o}function ys(t,e,r=new WeakSet){if(t===e)return!0;if(!t||!e||typeof t!="object"||typeof e!="object"||r.has(t)||r.has(e))return!1;r.add(t).add(e);let n=Array.isArray(t),o=Array.isArray(e),a,i,s;if(n&&o){if(i=t.length,i!=e.length)return!1;for(a=i;a--!==0;)if(!ys(t[a],e[a],r))return!1;return!0}if(n!=o)return!1;let l=t instanceof Date,c=e instanceof Date;if(l!=c)return!1;if(l&&c)return t.getTime()==e.getTime();let d=t instanceof RegExp,u=e instanceof RegExp;if(d!=u)return!1;if(d&&u)return t.toString()==e.toString();let f=Object.keys(t);if(i=f.length,i!==Object.keys(e).length)return!1;for(a=i;a--!==0;)if(!Object.prototype.hasOwnProperty.call(e,f[a]))return!1;for(a=i;a--!==0;)if(s=f[a],!ys(t[s],e[s],r))return!1;return!0}function N1(t,e){return ys(t,e)}function Uf(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Me(t){return!Zr(t)}function Xc(t,e){if(!t||!e)return null;try{let r=t[e];if(Me(r))return r}catch{}if(Object.keys(t).length){if(Uf(e))return e(t);if(e.indexOf(".")===-1)return t[e];{let r=e.split("."),n=t;for(let o=0,a=r.length;o<a;++o){if(n==null)return null;n=n[r[o]]}return n}}return null}function P1(t,e,r){return r?Xc(t,r)===Xc(e,r):N1(t,e)}function uL(t,e){if(t!=null&&e&&e.length){for(let r of e)if(P1(t,r))return!0}return!1}function Er(t,e=!0){return t instanceof Object&&t.constructor===Object&&(e||Object.keys(t).length!==0)}function Vf(t={},e={}){let r=D1({},t);return Object.keys(e).forEach(n=>{let o=n;Er(e[o])&&o in t&&Er(t[o])?r[o]=Vf(t[o],e[o]):r[o]=e[o]}),r}function O1(...t){return t.reduce((e,r,n)=>n===0?r:Vf(e,r),{})}function fL(t,e){let r=-1;if(e){for(let n=0;n<e.length;n++)if(e[n]===t){r=n;break}}return r}function pL(t,e){let r=-1;if(Me(t))try{r=t.findLastIndex(e)}catch{r=t.lastIndexOf([...t].reverse().find(e))}return r}function vr(t,...e){return Uf(t)?t(...e):t}function Br(t,e=!0){return typeof t=="string"&&(e||t!=="")}function Qc(t){return Br(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function M1(t,e="",r={}){let n=Qc(e).split("."),o=n.shift();if(o){if(Er(t)){let a=Object.keys(t).find(i=>Qc(i)===o)||"";return M1(vr(t[a],r),n.join("."),r)}return}return vr(t,r)}function hL(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}function $1(t){return Me(t)&&!isNaN(t)}function gL(t=""){return Me(t)&&t.length===1&&!!t.match(/\S| /)}function bL(){return new Intl.Collator(void 0,{numeric:!0}).compare}function Gr(t,e){if(e){let r=e.test(t);return e.lastIndex=0,r}return!1}function mL(...t){return O1(...t)}function Zc(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function vL(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let r in e)t=t.replace(e[r],r)}return t}function yL(t,e,r){t&&e!==r&&(r>=t.length&&(r%=t.length,e%=t.length),t.splice(r,0,t.splice(e,1)[0]))}function xL(t,e,r=1,n,o=1){let a=L1(t,e,n,r),i=r;return(Zr(t)||Zr(e))&&(i=o===1?r:o),i*a}function CL(t){return Br(t,!1)?t[0].toUpperCase()+t.slice(1):t}function Kf(t){return Br(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,r)=>r===0?e:"-"+e.toLowerCase()).toLowerCase():t}var Uo={};function kL(t="pui_id_"){return Object.hasOwn(Uo,t)||(Uo[t]=0),Uo[t]++,`${t}${Uo[t]}`}function F1(){let t=[],e=(i,s,l=999)=>{let c=o(i,s,l),d=c.value+(c.key===i?0:l)+1;return t.push({key:i,value:d}),d},r=i=>{t=t.filter(s=>s.value!==i)},n=(i,s)=>o(i).value,o=(i,s,l=0)=>[...t].reverse().find(c=>!0)||{key:i,value:l},a=i=>i&&parseInt(i.style.zIndex,10)||0;return{get:a,set:(i,s,l)=>{s&&(s.style.zIndex=String(e(i,!0,l)))},clear:i=>{i&&(r(a(i)),i.style.zIndex="")},getCurrent:i=>n(i)}}var wL=F1(),z1=Object.defineProperty,U1=Object.defineProperties,V1=Object.getOwnPropertyDescriptors,va=Object.getOwnPropertySymbols,Hf=Object.prototype.hasOwnProperty,Wf=Object.prototype.propertyIsEnumerable,Jc=(t,e,r)=>e in t?z1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Lt=(t,e)=>{for(var r in e||(e={}))Hf.call(e,r)&&Jc(t,r,e[r]);if(va)for(var r of va(e))Wf.call(e,r)&&Jc(t,r,e[r]);return t},Ui=(t,e)=>U1(t,V1(e)),Jt=(t,e)=>{var r={};for(var n in t)Hf.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&va)for(var n of va(t))e.indexOf(n)<0&&Wf.call(t,n)&&(r[n]=t[n]);return r},K1=B1(),Pr=K1,vo=/{([^}]*)}/g,jf=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Gf=/var\([^)]+\)/g;function ed(t){return Br(t)?t.replace(/[A-Z]/g,(e,r)=>r===0?e:"."+e.toLowerCase()).toLowerCase():t}function H1(t){return Er(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function W1(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function xs(t="",e=""){return W1(`${Br(t,!1)&&Br(e,!1)?`${t}-`:t}${e}`)}function qf(t="",e=""){return`--${xs(t,e)}`}function j1(t=""){let e=(t.match(/{/g)||[]).length,r=(t.match(/}/g)||[]).length;return(e+r)%2!==0}function Yf(t,e="",r="",n=[],o){if(Br(t)){let a=t.trim();if(j1(a))return;if(Gr(a,vo)){let i=a.replaceAll(vo,s=>{let l=s.replace(/{|}/g,"").split(".").filter(c=>!n.some(d=>Gr(c,d)));return`var(${qf(r,Kf(l.join("-")))}${Me(o)?`, ${o}`:""})`});return Gr(i.replace(Gf,"0"),jf)?`calc(${i})`:i}return a}else if($1(t))return t}function G1(t,e,r){Br(e,!1)&&t.push(`${e}:${r};`)}function gn(t,e){return t?`${t}{${e}}`:""}function Xf(t,e){if(t.indexOf("dt(")===-1)return t;function r(i,s){let l=[],c=0,d="",u=null,f=0;for(;c<=i.length;){let p=i[c];if((p==='"'||p==="'"||p==="`")&&i[c-1]!=="\\"&&(u=u===p?null:p),!u&&(p==="("&&f++,p===")"&&f--,(p===","||c===i.length)&&f===0)){let h=d.trim();h.startsWith("dt(")?l.push(Xf(h,s)):l.push(n(h)),d="",c++;continue}p!==void 0&&(d+=p),c++}return l}function n(i){let s=i[0];if((s==='"'||s==="'"||s==="`")&&i[i.length-1]===s)return i.slice(1,-1);let l=Number(i);return isNaN(l)?i:l}let o=[],a=[];for(let i=0;i<t.length;i++)if(t[i]==="d"&&t.slice(i,i+3)==="dt(")a.push(i),i+=2;else if(t[i]===")"&&a.length>0){let s=a.pop();a.length===0&&o.push([s,i])}if(!o.length)return t;for(let i=o.length-1;i>=0;i--){let[s,l]=o[i],c=t.slice(s+3,l),d=r(c,e),u=e(...d);t=t.slice(0,s)+u+t.slice(l+1)}return t}var SL=t=>{var e;let r=yo.getTheme(),n=Cs(r,t,void 0,"variable"),o=(e=n==null?void 0:n.match(/--[\w-]+/g))==null?void 0:e[0],a=Cs(r,t,void 0,"value");return{name:o,variable:n,value:a}},ao=(...t)=>Cs(yo.getTheme(),...t),Cs=(t={},e,r,n)=>{if(e){let{variable:o,options:a}=yo.defaults||{},{prefix:i,transform:s}=(t==null?void 0:t.options)||a||{},l=Gr(e,vo)?e:`{${e}}`;return n==="value"||Zr(n)&&s==="strict"?yo.getTokenValue(e):Yf(l,void 0,i,[o.excludedKeyRegex],r)}return""};function EL(t,...e){if(t instanceof Array){let r=t.reduce((n,o,a)=>{var i;return n+o+((i=vr(e[a],{dt:ao}))!=null?i:"")},"");return Xf(r,ao)}return vr(t,{dt:ao})}function q1(t,e={}){let r=yo.defaults.variable,{prefix:n=r.prefix,selector:o=r.selector,excludedKeyRegex:a=r.excludedKeyRegex}=e,i=[],s=[],l=[{node:t,path:n}];for(;l.length;){let{node:d,path:u}=l.pop();for(let f in d){let p=d[f],h=H1(p),g=Gr(f,a)?xs(u):xs(u,Kf(f));if(Er(h))l.push({node:h,path:g});else{let b=qf(g),x=Yf(h,g,n,[a]);G1(s,b,x);let C=g;n&&C.startsWith(n+"-")&&(C=C.slice(n.length+1)),i.push(C.replace(/-/g,"."))}}}let c=s.join("");return{value:s,tokens:i,declarations:c,css:gn(o,c)}}var At={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let e=Object.keys(this.rules).filter(r=>r!=="custom").map(r=>this.rules[r]);return[t].flat().map(r=>{var n;return(n=e.map(o=>o.resolve(r)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(r)})}},_toVariables(t,e){return q1(t,{prefix:e==null?void 0:e.prefix})},getCommon({name:t="",theme:e={},params:r,set:n,defaults:o}){var a,i,s,l,c,d,u;let{preset:f,options:p}=e,h,g,b,x,C,k,B;if(Me(f)&&p.transform!=="strict"){let{primitive:_,semantic:T,extend:R}=f,D=T||{},{colorScheme:O}=D,U=Jt(D,["colorScheme"]),K=R||{},{colorScheme:q}=K,j=Jt(K,["colorScheme"]),H=O||{},{dark:G}=H,Q=Jt(H,["dark"]),F=q||{},{dark:Ke}=F,He=Jt(F,["dark"]),de=Me(_)?this._toVariables({primitive:_},p):{},ge=Me(U)?this._toVariables({semantic:U},p):{},he=Me(Q)?this._toVariables({light:Q},p):{},Ie=Me(G)?this._toVariables({dark:G},p):{},Re=Me(j)?this._toVariables({semantic:j},p):{},De=Me(He)?this._toVariables({light:He},p):{},Le=Me(Ke)?this._toVariables({dark:Ke},p):{},[We,je]=[(a=de.declarations)!=null?a:"",de.tokens],[Ge,qe]=[(i=ge.declarations)!=null?i:"",ge.tokens||[]],[Ye,Xe]=[(s=he.declarations)!=null?s:"",he.tokens||[]],[Qe,Ze]=[(l=Ie.declarations)!=null?l:"",Ie.tokens||[]],[Je,P0]=[(c=Re.declarations)!=null?c:"",Re.tokens||[]],[O0,M0]=[(d=De.declarations)!=null?d:"",De.tokens||[]],[$0,F0]=[(u=Le.declarations)!=null?u:"",Le.tokens||[]];h=this.transformCSS(t,We,"light","variable",p,n,o),g=je;let z0=this.transformCSS(t,`${Ge}${Ye}`,"light","variable",p,n,o),U0=this.transformCSS(t,`${Qe}`,"dark","variable",p,n,o);b=`${z0}${U0}`,x=[...new Set([...qe,...Xe,...Ze])];let V0=this.transformCSS(t,`${Je}${O0}color-scheme:light`,"light","variable",p,n,o),K0=this.transformCSS(t,`${$0}color-scheme:dark`,"dark","variable",p,n,o);C=`${V0}${K0}`,k=[...new Set([...P0,...M0,...F0])],B=vr(f.css,{dt:ao})}return{primitive:{css:h,tokens:g},semantic:{css:b,tokens:x},global:{css:C,tokens:k},style:B}},getPreset({name:t="",preset:e={},options:r,params:n,set:o,defaults:a,selector:i}){var s,l,c;let d,u,f;if(Me(e)&&r.transform!=="strict"){let p=t.replace("-directive",""),h=e,{colorScheme:g,extend:b,css:x}=h,C=Jt(h,["colorScheme","extend","css"]),k=b||{},{colorScheme:B}=k,_=Jt(k,["colorScheme"]),T=g||{},{dark:R}=T,D=Jt(T,["dark"]),O=B||{},{dark:U}=O,K=Jt(O,["dark"]),q=Me(C)?this._toVariables({[p]:Lt(Lt({},C),_)},r):{},j=Me(D)?this._toVariables({[p]:Lt(Lt({},D),K)},r):{},H=Me(R)?this._toVariables({[p]:Lt(Lt({},R),U)},r):{},[G,Q]=[(s=q.declarations)!=null?s:"",q.tokens||[]],[F,Ke]=[(l=j.declarations)!=null?l:"",j.tokens||[]],[He,de]=[(c=H.declarations)!=null?c:"",H.tokens||[]],ge=this.transformCSS(p,`${G}${F}`,"light","variable",r,o,a,i),he=this.transformCSS(p,He,"dark","variable",r,o,a,i);d=`${ge}${he}`,u=[...new Set([...Q,...Ke,...de])],f=vr(x,{dt:ao})}return{css:d,tokens:u,style:f}},getPresetC({name:t="",theme:e={},params:r,set:n,defaults:o}){var a;let{preset:i,options:s}=e,l=(a=i==null?void 0:i.components)==null?void 0:a[t];return this.getPreset({name:t,preset:l,options:s,params:r,set:n,defaults:o})},getPresetD({name:t="",theme:e={},params:r,set:n,defaults:o}){var a,i;let s=t.replace("-directive",""),{preset:l,options:c}=e,d=((a=l==null?void 0:l.components)==null?void 0:a[s])||((i=l==null?void 0:l.directives)==null?void 0:i[s]);return this.getPreset({name:s,preset:d,options:c,params:r,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,e){var r;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?e.options.darkModeSelector:(r=t.darkModeSelector)!=null?r:e.options.darkModeSelector):[]},getLayerOrder(t,e={},r,n){let{cssLayer:o}=e;return o?`@layer ${vr(o.order||o.name||"primeui",r)}`:""},getCommonStyleSheet({name:t="",theme:e={},params:r,props:n={},set:o,defaults:a}){let i=this.getCommon({name:t,theme:e,params:r,set:o,defaults:a}),s=Object.entries(n).reduce((l,[c,d])=>l.push(`${c}="${d}"`)&&l,[]).join(" ");return Object.entries(i||{}).reduce((l,[c,d])=>{if(Er(d)&&Object.hasOwn(d,"css")){let u=Zc(d.css),f=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${s}>${u}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:e={},params:r,props:n={},set:o,defaults:a}){var i;let s={name:t,theme:e,params:r,set:o,defaults:a},l=(i=t.includes("-directive")?this.getPresetD(s):this.getPresetC(s))==null?void 0:i.css,c=Object.entries(n).reduce((d,[u,f])=>d.push(`${u}="${f}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${Zc(l)}</style>`:""},createTokens(t={},e,r="",n="",o={}){let a=function(s,l={},c=[]){if(c.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:s,path:this.path,paths:l,value:void 0};c.push(this.path),l.name=this.path,l.binding||(l.binding={});let d=this.value;if(typeof this.value=="string"&&vo.test(this.value)){let u=this.value.trim().replace(vo,f=>{var p;let h=f.slice(1,-1),g=this.tokens[h];if(!g)return console.warn(`Token not found for path: ${h}`),"__UNRESOLVED__";let b=g.computed(s,l,c);return Array.isArray(b)&&b.length===2?`light-dark(${b[0].value},${b[1].value})`:(p=b==null?void 0:b.value)!=null?p:"__UNRESOLVED__"});d=jf.test(u.replace(Gf,"0"))?`calc(${u})`:u}return Zr(l.binding)&&delete l.binding,c.pop(),{colorScheme:s,path:this.path,paths:l,value:d.includes("__UNRESOLVED__")?void 0:d}},i=(s,l,c)=>{Object.entries(s).forEach(([d,u])=>{let f=Gr(d,e.variable.excludedKeyRegex)?l:l?`${l}.${ed(d)}`:ed(d),p=c?`${c}.${d}`:d;Er(u)?i(u,f,p):(o[f]||(o[f]={paths:[],computed:(h,g={},b=[])=>{if(o[f].paths.length===1)return o[f].paths[0].computed(o[f].paths[0].scheme,g.binding,b);if(h&&h!=="none")for(let x=0;x<o[f].paths.length;x++){let C=o[f].paths[x];if(C.scheme===h)return C.computed(h,g.binding,b)}return o[f].paths.map(x=>x.computed(x.scheme,g[x.scheme],b))}}),o[f].paths.push({path:p,value:u,scheme:p.includes("colorScheme.light")?"light":p.includes("colorScheme.dark")?"dark":"none",computed:a,tokens:o}))})};return i(t,r,n),o},getTokenValue(t,e,r){var n;let o=(s=>s.split(".").filter(l=>!Gr(l.toLowerCase(),r.variable.excludedKeyRegex)).join("."))(e),a=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,i=[(n=t[o])==null?void 0:n.computed(a)].flat().filter(s=>s);return i.length===1?i[0].value:i.reduce((s={},l)=>{let c=l,{colorScheme:d}=c,u=Jt(c,["colorScheme"]);return s[d]=u,s},void 0)},getSelectorRule(t,e,r,n){return r==="class"||r==="attr"?gn(Me(e)?`${t}${e},${t} ${e}`:t,n):gn(t,gn(e??":root",n))},transformCSS(t,e,r,n,o={},a,i,s){if(Me(e)){let{cssLayer:l}=o;if(n!=="style"){let c=this.getColorSchemeOption(o,i);e=r==="dark"?c.reduce((d,{type:u,selector:f})=>(Me(f)&&(d+=f.includes("[CSS]")?f.replace("[CSS]",e):this.getSelectorRule(f,s,u,e)),d),""):gn(s??":root",e)}if(l){let c={name:"primeui"};Er(l)&&(c.name=vr(l.name,{name:t,type:n})),Me(c.name)&&(e=gn(`@layer ${c.name}`,e),a==null||a.layerNames(c.name))}return e}return""}},yo={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:e}=t;e&&(this._theme=Ui(Lt({},e),{options:Lt(Lt({},this.defaults.options),e.options)}),this._tokens=At.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),Pr.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Ui(Lt({},this.theme),{preset:t}),this._tokens=At.createTokens(t,this.defaults),this.clearLoadedStyleNames(),Pr.emit("preset:change",t),Pr.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Ui(Lt({},this.theme),{options:t}),this.clearLoadedStyleNames(),Pr.emit("options:change",t),Pr.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return At.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",e){return At.getCommon({name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",e){let r={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return At.getPresetC(r)},getDirective(t="",e){let r={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return At.getPresetD(r)},getCustomPreset(t="",e,r,n){let o={name:t,preset:e,options:this.options,selector:r,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return At.getPreset(o)},getLayerOrderCSS(t=""){return At.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",e,r="style",n){return At.transformCSS(t,e,n,r,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",e,r={}){return At.getCommonStyleSheet({name:t,theme:this.theme,params:e,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,e,r={}){return At.getStyleSheet({name:t,theme:this.theme,params:e,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),Pr.emit(`theme:${e}:load`,t),!this._loadingStyles.size&&Pr.emit("theme:load"))}},_L=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`,TL=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`,BL=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,AL=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`,IL=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border: 1px solid dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-from,
    .p-drawer-left .p-drawer-leave-to {
        transform: translateX(-100%);
    }

    .p-drawer-right .p-drawer-enter-from,
    .p-drawer-right .p-drawer-leave-to {
        transform: translateX(100%);
    }

    .p-drawer-top .p-drawer-enter-from,
    .p-drawer-top .p-drawer-leave-to {
        transform: translateY(-100%);
    }

    .p-drawer-bottom .p-drawer-enter-from,
    .p-drawer-bottom .p-drawer-leave-to {
        transform: translateY(100%);
    }

    .p-drawer-full .p-drawer-enter-from,
    .p-drawer-full .p-drawer-leave-to {
        opacity: 0;
    }

    .p-drawer-full .p-drawer-enter-active,
    .p-drawer-full .p-drawer-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }
`,RL=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`,DL=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,LL=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,NL=`
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }

    .p-dialog-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .p-dialog-enter-from,
    .p-dialog-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 0.75rem;
        transform: translate3d(0px, 0px, 0px);
    }

    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-top .p-dialog-leave-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-leave-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-left .p-dialog-leave-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-right .p-dialog-leave-active,
    .p-dialog-topleft .p-dialog-enter-active,
    .p-dialog-topleft .p-dialog-leave-active,
    .p-dialog-topright .p-dialog-enter-active,
    .p-dialog-topright .p-dialog-leave-active,
    .p-dialog-bottomleft .p-dialog-enter-active,
    .p-dialog-bottomleft .p-dialog-leave-active,
    .p-dialog-bottomright .p-dialog-enter-active,
    .p-dialog-bottomright .p-dialog-leave-active {
        transition: all 0.3s ease-out;
    }

    .p-dialog-top .p-dialog-enter-from,
    .p-dialog-top .p-dialog-leave-to {
        transform: translate3d(0px, -100%, 0px);
    }

    .p-dialog-bottom .p-dialog-enter-from,
    .p-dialog-bottom .p-dialog-leave-to {
        transform: translate3d(0px, 100%, 0px);
    }

    .p-dialog-left .p-dialog-enter-from,
    .p-dialog-left .p-dialog-leave-to,
    .p-dialog-topleft .p-dialog-enter-from,
    .p-dialog-topleft .p-dialog-leave-to,
    .p-dialog-bottomleft .p-dialog-enter-from,
    .p-dialog-bottomleft .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-right .p-dialog-enter-from,
    .p-dialog-right .p-dialog-leave-to,
    .p-dialog-topright .p-dialog-enter-from,
    .p-dialog-topright .p-dialog-leave-to,
    .p-dialog-bottomright .p-dialog-enter-from,
    .p-dialog-bottomright .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-left:dir(rtl) .p-dialog-enter-from,
    .p-dialog-left:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-right:dir(rtl) .p-dialog-enter-from,
    .p-dialog-right:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topright:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }

    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }
`,PL=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`,OL=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,ML=`
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        margin: 0 0 1rem 0;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: -25% 0 0 0;
        right: -25%;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        margin: -25% 0 0 auto;
        left: -25%;
        right: auto;
    }

    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }

    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }

    .p-toast-message-enter-from {
        opacity: 0;
        transform: translateY(50%);
    }

    .p-toast-message-leave-from {
        max-height: 1000px;
    }

    .p-toast .p-toast-message.p-toast-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin-bottom: 0;
        overflow: hidden;
    }

    .p-toast-message-enter-active {
        transition:
            transform 0.3s,
            opacity 0.3s;
    }

    .p-toast-message-leave-active {
        transition:
            max-height 0.45s cubic-bezier(0, 1, 0, 1),
            opacity 0.3s,
            margin-bottom 0.3s;
    }
`,$L=`
    .p-paginator {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background: dt('paginator.background');
        color: dt('paginator.color');
        padding: dt('paginator.padding');
        border-radius: dt('paginator.border.radius');
        gap: dt('paginator.gap');
    }

    .p-paginator-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: dt('paginator.gap');
    }

    .p-paginator-content-start {
        margin-inline-end: auto;
    }

    .p-paginator-content-end {
        margin-inline-start: auto;
    }

    .p-paginator-page,
    .p-paginator-next,
    .p-paginator-last,
    .p-paginator-first,
    .p-paginator-prev {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        user-select: none;
        overflow: hidden;
        position: relative;
        background: dt('paginator.nav.button.background');
        border: 0 none;
        color: dt('paginator.nav.button.color');
        min-width: dt('paginator.nav.button.width');
        height: dt('paginator.nav.button.height');
        transition:
            background dt('paginator.transition.duration'),
            color dt('paginator.transition.duration'),
            outline-color dt('paginator.transition.duration'),
            box-shadow dt('paginator.transition.duration');
        border-radius: dt('paginator.nav.button.border.radius');
        padding: 0;
        margin: 0;
    }

    .p-paginator-page:focus-visible,
    .p-paginator-next:focus-visible,
    .p-paginator-last:focus-visible,
    .p-paginator-first:focus-visible,
    .p-paginator-prev:focus-visible {
        box-shadow: dt('paginator.nav.button.focus.ring.shadow');
        outline: dt('paginator.nav.button.focus.ring.width') dt('paginator.nav.button.focus.ring.style') dt('paginator.nav.button.focus.ring.color');
        outline-offset: dt('paginator.nav.button.focus.ring.offset');
    }

    .p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,
    .p-paginator-first:not(.p-disabled):hover,
    .p-paginator-prev:not(.p-disabled):hover,
    .p-paginator-next:not(.p-disabled):hover,
    .p-paginator-last:not(.p-disabled):hover {
        background: dt('paginator.nav.button.hover.background');
        color: dt('paginator.nav.button.hover.color');
    }

    .p-paginator-page.p-paginator-page-selected {
        background: dt('paginator.nav.button.selected.background');
        color: dt('paginator.nav.button.selected.color');
    }

    .p-paginator-current {
        color: dt('paginator.current.page.report.color');
    }

    .p-paginator-pages {
        display: flex;
        align-items: center;
        gap: dt('paginator.gap');
    }

    .p-paginator-jtp-input .p-inputtext {
        max-width: dt('paginator.jump.to.page.input.max.width');
    }

    .p-paginator-first:dir(rtl),
    .p-paginator-prev:dir(rtl),
    .p-paginator-next:dir(rtl),
    .p-paginator-last:dir(rtl) {
        transform: rotate(180deg);
    }
`,FL=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`,zL=`
    .p-virtualscroller-loader {
        background: dt('virtualscroller.loader.mask.background');
        color: dt('virtualscroller.loader.mask.color');
    }

    .p-virtualscroller-loading-icon {
        font-size: dt('virtualscroller.loader.icon.size');
        width: dt('virtualscroller.loader.icon.size');
        height: dt('virtualscroller.loader.icon.size');
    }
`,UL=`
    .p-select {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('select.background');
        border: 1px solid dt('select.border.color');
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            outline-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration');
        border-radius: dt('select.border.radius');
        outline-color: transparent;
        box-shadow: dt('select.shadow');
    }

    .p-select:not(.p-disabled):hover {
        border-color: dt('select.hover.border.color');
    }

    .p-select:not(.p-disabled).p-focus {
        border-color: dt('select.focus.border.color');
        box-shadow: dt('select.focus.ring.shadow');
        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');
        outline-offset: dt('select.focus.ring.offset');
    }

    .p-select.p-variant-filled {
        background: dt('select.filled.background');
    }

    .p-select.p-variant-filled:not(.p-disabled):hover {
        background: dt('select.filled.hover.background');
    }

    .p-select.p-variant-filled:not(.p-disabled).p-focus {
        background: dt('select.filled.focus.background');
    }

    .p-select.p-invalid {
        border-color: dt('select.invalid.border.color');
    }

    .p-select.p-disabled {
        opacity: 1;
        background: dt('select.disabled.background');
    }

    .p-select-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        color: dt('select.clear.icon.color');
        inset-inline-end: dt('select.dropdown.width');
    }

    .p-select-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('select.dropdown.color');
        width: dt('select.dropdown.width');
        border-start-end-radius: dt('select.border.radius');
        border-end-end-radius: dt('select.border.radius');
    }

    .p-select-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        padding: dt('select.padding.y') dt('select.padding.x');
        text-overflow: ellipsis;
        cursor: pointer;
        color: dt('select.color');
        background: transparent;
        border: 0 none;
        outline: 0 none;
        font-size: 1rem;
    }

    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.p-invalid .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }

    .p-select:has(.p-select-clear-icon) .p-select-label {
        padding-inline-end: calc(1rem + dt('select.padding.x'));
    }

    .p-select.p-disabled .p-select-label {
        color: dt('select.disabled.color');
    }

    .p-select-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-select-label {
        cursor: default;
    }

    .p-select-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('select.overlay.background');
        color: dt('select.overlay.color');
        border: 1px solid dt('select.overlay.border.color');
        border-radius: dt('select.overlay.border.radius');
        box-shadow: dt('select.overlay.shadow');
        min-width: 100%;
    }

    .p-select-header {
        padding: dt('select.list.header.padding');
    }

    .p-select-filter {
        width: 100%;
    }

    .p-select-list-container {
        overflow: auto;
    }

    .p-select-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('select.option.group.padding');
        background: dt('select.option.group.background');
        color: dt('select.option.group.color');
        font-weight: dt('select.option.group.font.weight');
    }

    .p-select-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('select.list.padding');
        gap: dt('select.list.gap');
        display: flex;
        flex-direction: column;
    }

    .p-select-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('select.option.padding');
        border: 0 none;
        color: dt('select.option.color');
        background: transparent;
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration'),
            outline-color dt('select.transition.duration');
        border-radius: dt('select.option.border.radius');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option.p-select-option-selected {
        background: dt('select.option.selected.background');
        color: dt('select.option.selected.color');
    }

    .p-select-option.p-select-option-selected.p-focus {
        background: dt('select.option.selected.focus.background');
        color: dt('select.option.selected.focus.color');
    }

    .p-select-option-blank-icon {
        flex-shrink: 0;
    }

    .p-select-option-check-icon {
        position: relative;
        flex-shrink: 0;
        margin-inline-start: dt('select.checkmark.gutter.start');
        margin-inline-end: dt('select.checkmark.gutter.end');
        color: dt('select.checkmark.color');
    }

    .p-select-empty-message {
        padding: dt('select.empty.message.padding');
    }

    .p-select-fluid {
        display: flex;
        width: 100%;
    }

    .p-select-sm .p-select-label {
        font-size: dt('select.sm.font.size');
        padding-block: dt('select.sm.padding.y');
        padding-inline: dt('select.sm.padding.x');
    }

    .p-select-sm .p-select-dropdown .p-icon {
        font-size: dt('select.sm.font.size');
        width: dt('select.sm.font.size');
        height: dt('select.sm.font.size');
    }

    .p-select-lg .p-select-label {
        font-size: dt('select.lg.font.size');
        padding-block: dt('select.lg.padding.y');
        padding-inline: dt('select.lg.padding.x');
    }

    .p-select-lg .p-select-dropdown .p-icon {
        font-size: dt('select.lg.font.size');
        width: dt('select.lg.font.size');
        height: dt('select.lg.font.size');
    }
`,VL=`
    .p-inputnumber {
        display: inline-flex;
        position: relative;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        cursor: pointer;
        background: dt('inputnumber.button.background');
        color: dt('inputnumber.button.color');
        width: dt('inputnumber.button.width');
        transition:
            background dt('inputnumber.transition.duration'),
            color dt('inputnumber.transition.duration'),
            border-color dt('inputnumber.transition.duration'),
            outline-color dt('inputnumber.transition.duration');
    }

    .p-inputnumber-button:disabled {
        cursor: auto;
    }

    .p-inputnumber-button:not(:disabled):hover {
        background: dt('inputnumber.button.hover.background');
        color: dt('inputnumber.button.hover.color');
    }

    .p-inputnumber-button:not(:disabled):active {
        background: dt('inputnumber.button.active.background');
        color: dt('inputnumber.button.active.color');
    }

    .p-inputnumber-stacked .p-inputnumber-button {
        position: relative;
        flex: 1 1 auto;
        border: 0 none;
    }

    .p-inputnumber-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
        position: absolute;
        inset-block-start: 1px;
        inset-inline-end: 1px;
        height: calc(100% - 2px);
        z-index: 1;
    }

    .p-inputnumber-stacked .p-inputnumber-increment-button {
        padding: 0;
        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-decrement-button {
        padding: 0;
        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-horizontal .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-increment-button {
        order: 3;
        border-start-end-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        border-inline-start: 0 none;
    }

    .p-inputnumber-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-horizontal .p-inputnumber-decrement-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-inline-end: 0 none;
    }

    .p-floatlabel:has(.p-inputnumber-horizontal) label {
        margin-inline-start: dt('inputnumber.button.width');
    }

    .p-inputnumber-vertical {
        flex-direction: column;
    }

    .p-inputnumber-vertical .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
        padding: dt('inputnumber.button.vertical.padding');
    }

    .p-inputnumber-vertical .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-increment-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-start-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-end: 0 none;
    }

    .p-inputnumber-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-vertical .p-inputnumber-decrement-button {
        order: 3;
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-start: 0 none;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-inputnumber-fluid {
        width: 100%;
    }

    .p-inputnumber-fluid .p-inputnumber-input {
        width: 1%;
    }

    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
        width: 100%;
    }

    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-inputnumber-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-inputnumber-stacked .p-inputnumber-clear-icon, 
    .p-inputnumber-horizontal .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }
`,KL=`
    .p-datatable {
        position: relative;
    }

    .p-datatable-table {
        border-spacing: 0;
        border-collapse: separate;
        width: 100%;
    }

    .p-datatable-scrollable > .p-datatable-table-container {
        position: relative;
    }

    .p-datatable-scrollable-table > .p-datatable-thead {
        inset-block-start: 0;
        z-index: 1;
    }

    .p-datatable-scrollable-table > .p-datatable-frozen-tbody {
        position: sticky;
        z-index: 1;
    }

    .p-datatable-scrollable-table > .p-datatable-tfoot {
        inset-block-end: 0;
        z-index: 1;
    }

    .p-datatable-scrollable .p-datatable-frozen-column {
        position: sticky;
        background: dt('datatable.header.cell.background');
    }

    .p-datatable-scrollable th.p-datatable-frozen-column {
        z-index: 1;
    }

    .p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-thead,
    .p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {
        background: dt('datatable.header.cell.background');
    }

    .p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-tfoot,
    .p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
        background: dt('datatable.footer.cell.background');
    }

    .p-datatable-flex-scrollable {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .p-datatable-flex-scrollable > .p-datatable-table-container {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
    }

    .p-datatable-scrollable-table > .p-datatable-tbody > .p-datatable-row-group-header {
        position: sticky;
        z-index: 1;
    }

    .p-datatable-resizable-table > .p-datatable-thead > tr > th,
    .p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
    .p-datatable-resizable-table > .p-datatable-tbody > tr > td {
        overflow: hidden;
        white-space: nowrap;
    }

    .p-datatable-resizable-table > .p-datatable-thead > tr > th.p-datatable-resizable-column:not(.p-datatable-frozen-column) {
        background-clip: padding-box;
        position: relative;
    }

    .p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-datatable-resizable-column:last-child .p-datatable-column-resizer {
        display: none;
    }

    .p-datatable-column-resizer {
        display: block;
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        margin: 0;
        width: dt('datatable.column.resizer.width');
        height: 100%;
        padding: 0;
        cursor: col-resize;
        border: 1px solid transparent;
    }

    .p-datatable-column-header-content {
        display: flex;
        align-items: center;
        gap: dt('datatable.header.cell.gap');
    }

    .p-datatable-column-resize-indicator {
        width: dt('datatable.resize.indicator.width');
        position: absolute;
        z-index: 10;
        display: none;
        background: dt('datatable.resize.indicator.color');
    }

    .p-datatable-row-reorder-indicator-up,
    .p-datatable-row-reorder-indicator-down {
        position: absolute;
        display: none;
    }

    .p-datatable-reorderable-column,
    .p-datatable-reorderable-row-handle {
        cursor: move;
    }

    .p-datatable-mask {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }

    .p-datatable-inline-filter {
        display: flex;
        align-items: center;
        width: 100%;
        gap: dt('datatable.filter.inline.gap');
    }

    .p-datatable-inline-filter .p-datatable-filter-element-container {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-datatable-filter-overlay {
        background: dt('datatable.filter.overlay.select.background');
        color: dt('datatable.filter.overlay.select.color');
        border: 1px solid dt('datatable.filter.overlay.select.border.color');
        border-radius: dt('datatable.filter.overlay.select.border.radius');
        box-shadow: dt('datatable.filter.overlay.select.shadow');
        min-width: 12.5rem;
    }

    .p-datatable-filter-constraint-list {
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: dt('datatable.filter.constraint.list.padding');
        gap: dt('datatable.filter.constraint.list.gap');
    }

    .p-datatable-filter-constraint {
        padding: dt('datatable.filter.constraint.padding');
        color: dt('datatable.filter.constraint.color');
        border-radius: dt('datatable.filter.constraint.border.radius');
        cursor: pointer;
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
    }

    .p-datatable-filter-constraint-selected {
        background: dt('datatable.filter.constraint.selected.background');
        color: dt('datatable.filter.constraint.selected.color');
    }

    .p-datatable-filter-constraint:not(.p-datatable-filter-constraint-selected):not(.p-disabled):hover {
        background: dt('datatable.filter.constraint.focus.background');
        color: dt('datatable.filter.constraint.focus.color');
    }

    .p-datatable-filter-constraint:focus-visible {
        outline: 0 none;
        background: dt('datatable.filter.constraint.focus.background');
        color: dt('datatable.filter.constraint.focus.color');
    }

    .p-datatable-filter-constraint-selected:focus-visible {
        outline: 0 none;
        background: dt('datatable.filter.constraint.selected.focus.background');
        color: dt('datatable.filter.constraint.selected.focus.color');
    }

    .p-datatable-filter-constraint-separator {
        border-block-start: 1px solid dt('datatable.filter.constraint.separator.border.color');
    }

    .p-datatable-popover-filter {
        display: inline-flex;
        margin-inline-start: auto;
    }

    .p-datatable-filter-overlay-popover {
        background: dt('datatable.filter.overlay.popover.background');
        color: dt('datatable.filter.overlay.popover.color');
        border: 1px solid dt('datatable.filter.overlay.popover.border.color');
        border-radius: dt('datatable.filter.overlay.popover.border.radius');
        box-shadow: dt('datatable.filter.overlay.popover.shadow');
        min-width: 12.5rem;
        padding: dt('datatable.filter.overlay.popover.padding');
        display: flex;
        flex-direction: column;
        gap: dt('datatable.filter.overlay.popover.gap');
    }

    .p-datatable-filter-operator-dropdown {
        width: 100%;
    }

    .p-datatable-filter-rule-list,
    .p-datatable-filter-rule {
        display: flex;
        flex-direction: column;
        gap: dt('datatable.filter.overlay.popover.gap');
    }

    .p-datatable-filter-rule {
        border-block-end: 1px solid dt('datatable.filter.rule.border.color');
        padding-bottom: dt('datatable.filter.overlay.popover.gap');
    }

    .p-datatable-filter-rule:last-child {
        border-block-end: 0 none;
        padding-bottom: 0;
    }

    .p-datatable-filter-add-rule-button {
        width: 100%;
    }

    .p-datatable-filter-remove-rule-button {
        width: 100%;
    }

    .p-datatable-filter-buttonbar {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-datatable-virtualscroller-spacer {
        display: flex;
    }

    .p-datatable .p-virtualscroller .p-virtualscroller-loading {
        transform: none !important;
        min-height: 0;
        position: sticky;
        inset-block-start: 0;
        inset-inline-start: 0;
    }

    .p-datatable-paginator-top {
        border-color: dt('datatable.paginator.top.border.color');
        border-style: solid;
        border-width: dt('datatable.paginator.top.border.width');
    }

    .p-datatable-paginator-bottom {
        border-color: dt('datatable.paginator.bottom.border.color');
        border-style: solid;
        border-width: dt('datatable.paginator.bottom.border.width');
    }

    .p-datatable-header {
        background: dt('datatable.header.background');
        color: dt('datatable.header.color');
        border-color: dt('datatable.header.border.color');
        border-style: solid;
        border-width: dt('datatable.header.border.width');
        padding: dt('datatable.header.padding');
    }

    .p-datatable-footer {
        background: dt('datatable.footer.background');
        color: dt('datatable.footer.color');
        border-color: dt('datatable.footer.border.color');
        border-style: solid;
        border-width: dt('datatable.footer.border.width');
        padding: dt('datatable.footer.padding');
    }

    .p-datatable-header-cell {
        padding: dt('datatable.header.cell.padding');
        background: dt('datatable.header.cell.background');
        border-color: dt('datatable.header.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        color: dt('datatable.header.cell.color');
        font-weight: normal;
        text-align: start;
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            outline-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
    }

    .p-datatable-column-title {
        font-weight: dt('datatable.column.title.font.weight');
    }

    .p-datatable-tbody > tr {
        outline-color: transparent;
        background: dt('datatable.row.background');
        color: dt('datatable.row.color');
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            outline-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
    }

    .p-datatable-tbody > tr > td {
        text-align: start;
        border-color: dt('datatable.body.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        padding: dt('datatable.body.cell.padding');
    }

    .p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {
        background: dt('datatable.row.hover.background');
        color: dt('datatable.row.hover.color');
    }

    .p-datatable-tbody > tr.p-datatable-row-selected {
        background: dt('datatable.row.selected.background');
        color: dt('datatable.row.selected.color');
    }

    .p-datatable-tbody > tr:has(+ .p-datatable-row-selected) > td {
        border-block-end-color: dt('datatable.body.cell.selected.border.color');
    }

    .p-datatable-tbody > tr.p-datatable-row-selected > td {
        border-block-end-color: dt('datatable.body.cell.selected.border.color');
    }

    .p-datatable-tbody > tr:focus-visible,
    .p-datatable-tbody > tr.p-datatable-contextmenu-row-selected {
        box-shadow: dt('datatable.row.focus.ring.shadow');
        outline: dt('datatable.row.focus.ring.width') dt('datatable.row.focus.ring.style') dt('datatable.row.focus.ring.color');
        outline-offset: dt('datatable.row.focus.ring.offset');
    }

    .p-datatable-tfoot > tr > td {
        text-align: start;
        padding: dt('datatable.footer.cell.padding');
        border-color: dt('datatable.footer.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        color: dt('datatable.footer.cell.color');
        background: dt('datatable.footer.cell.background');
    }

    .p-datatable-column-footer {
        font-weight: dt('datatable.column.footer.font.weight');
    }

    .p-datatable-sortable-column {
        cursor: pointer;
        user-select: none;
        outline-color: transparent;
    }

    .p-datatable-column-title,
    .p-datatable-sort-icon,
    .p-datatable-sort-badge {
        vertical-align: middle;
    }

    .p-datatable-sort-icon {
        color: dt('datatable.sort.icon.color');
        font-size: dt('datatable.sort.icon.size');
        width: dt('datatable.sort.icon.size');
        height: dt('datatable.sort.icon.size');
        transition: color dt('datatable.transition.duration');
    }

    .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover {
        background: dt('datatable.header.cell.hover.background');
        color: dt('datatable.header.cell.hover.color');
    }

    .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover .p-datatable-sort-icon {
        color: dt('datatable.sort.icon.hover.color');
    }

    .p-datatable-column-sorted {
        background: dt('datatable.header.cell.selected.background');
        color: dt('datatable.header.cell.selected.color');
    }

    .p-datatable-column-sorted .p-datatable-sort-icon {
        color: dt('datatable.header.cell.selected.color');
    }

    .p-datatable-sortable-column:focus-visible {
        box-shadow: dt('datatable.header.cell.focus.ring.shadow');
        outline: dt('datatable.header.cell.focus.ring.width') dt('datatable.header.cell.focus.ring.style') dt('datatable.header.cell.focus.ring.color');
        outline-offset: dt('datatable.header.cell.focus.ring.offset');
    }

    .p-datatable-hoverable .p-datatable-selectable-row {
        cursor: pointer;
    }

    .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
        box-shadow: inset 0 2px 0 0 dt('datatable.drop.point.color');
    }

    .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
        box-shadow: inset 0 -2px 0 0 dt('datatable.drop.point.color');
    }

    .p-datatable-loading-icon {
        font-size: dt('datatable.loading.icon.size');
        width: dt('datatable.loading.icon.size');
        height: dt('datatable.loading.icon.size');
    }

    .p-datatable-gridlines .p-datatable-header {
        border-width: 1px 1px 0 1px;
    }

    .p-datatable-gridlines .p-datatable-footer {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-paginator-top {
        border-width: 1px 1px 0 1px;
    }

    .p-datatable-gridlines .p-datatable-paginator-bottom {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-thead > tr > th {
        border-width: 1px 0 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-thead > tr > th:last-child {
        border-width: 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr > td {
        border-width: 1px 0 0 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
        border-width: 1px 1px 0 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {
        border-width: 1px 0 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {
        border-width: 1px;
    }

    .p-datatable-gridlines .p-datatable-tfoot > tr > td {
        border-width: 1px 0 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {
        border-width: 1px 1px 1px 1px;
    }

    .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {
        border-width: 0 0 1px 1px;
    }

    .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
        border-width: 0 0 1px 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {
        border-width: 0 0 0 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {
        border-width: 0 1px 0 1px;
    }

    .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {
        background: dt('datatable.row.striped.background');
    }

    .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-datatable-row-selected {
        background: dt('datatable.row.selected.background');
        color: dt('datatable.row.selected.color');
    }

    .p-datatable-striped.p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {
        background: dt('datatable.row.hover.background');
        color: dt('datatable.row.hover.color');
    }

    .p-datatable.p-datatable-sm .p-datatable-header {
        padding: dt('datatable.header.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
        padding: dt('datatable.header.cell.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
        padding: dt('datatable.body.cell.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
        padding: dt('datatable.footer.cell.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-footer {
        padding: dt('datatable.footer.sm.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-header {
        padding: dt('datatable.header.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
        padding: dt('datatable.header.cell.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
        padding: dt('datatable.body.cell.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {
        padding: dt('datatable.footer.cell.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-footer {
        padding: dt('datatable.footer.lg.padding');
    }

    .p-datatable-row-toggle-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('datatable.row.toggle.button.size');
        height: dt('datatable.row.toggle.button.size');
        color: dt('datatable.row.toggle.button.color');
        border: 0 none;
        background: transparent;
        cursor: pointer;
        border-radius: dt('datatable.row.toggle.button.border.radius');
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            outline-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
        outline-color: transparent;
        user-select: none;
    }

    .p-datatable-row-toggle-button:enabled:hover {
        color: dt('datatable.row.toggle.button.hover.color');
        background: dt('datatable.row.toggle.button.hover.background');
    }

    .p-datatable-tbody > tr.p-datatable-row-selected .p-datatable-row-toggle-button:hover {
        background: dt('datatable.row.toggle.button.selected.hover.background');
        color: dt('datatable.row.toggle.button.selected.hover.color');
    }

    .p-datatable-row-toggle-button:focus-visible {
        box-shadow: dt('datatable.row.toggle.button.focus.ring.shadow');
        outline: dt('datatable.row.toggle.button.focus.ring.width') dt('datatable.row.toggle.button.focus.ring.style') dt('datatable.row.toggle.button.focus.ring.color');
        outline-offset: dt('datatable.row.toggle.button.focus.ring.offset');
    }

    .p-datatable-row-toggle-icon:dir(rtl) {
        transform: rotate(180deg);
    }
`,HL=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`,WL=`
    .p-radiobutton {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
    }

    .p-radiobutton-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: 50%;
    }

    .p-radiobutton-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid dt('radiobutton.border.color');
        background: dt('radiobutton.background');
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
        transition:
            background dt('radiobutton.transition.duration'),
            color dt('radiobutton.transition.duration'),
            border-color dt('radiobutton.transition.duration'),
            box-shadow dt('radiobutton.transition.duration'),
            outline-color dt('radiobutton.transition.duration');
        outline-color: transparent;
        box-shadow: dt('radiobutton.shadow');
    }

    .p-radiobutton-icon {
        transition-duration: dt('radiobutton.transition.duration');
        background: transparent;
        font-size: dt('radiobutton.icon.size');
        width: dt('radiobutton.icon.size');
        height: dt('radiobutton.icon.size');
        border-radius: 50%;
        backface-visibility: hidden;
        transform: translateZ(0) scale(0.1);
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.hover.border.color');
    }

    .p-radiobutton-checked .p-radiobutton-box {
        border-color: dt('radiobutton.checked.border.color');
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.color');
        transform: translateZ(0) scale(1, 1);
        visibility: visible;
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.hover.border.color');
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.hover.color');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.focus.border.color');
        box-shadow: dt('radiobutton.focus.ring.shadow');
        outline: dt('radiobutton.focus.ring.width') dt('radiobutton.focus.ring.style') dt('radiobutton.focus.ring.color');
        outline-offset: dt('radiobutton.focus.ring.offset');
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.focus.border.color');
    }

    .p-radiobutton.p-invalid > .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }

    .p-radiobutton.p-variant-filled .p-radiobutton-box {
        background: dt('radiobutton.filled.background');
    }

    .p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton.p-disabled {
        opacity: 1;
    }

    .p-radiobutton.p-disabled .p-radiobutton-box {
        background: dt('radiobutton.disabled.background');
        border-color: dt('radiobutton.checked.disabled.border.color');
    }

    .p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.disabled.color');
    }

    .p-radiobutton-sm,
    .p-radiobutton-sm .p-radiobutton-box {
        width: dt('radiobutton.sm.width');
        height: dt('radiobutton.sm.height');
    }

    .p-radiobutton-sm .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.sm.size');
        width: dt('radiobutton.icon.sm.size');
        height: dt('radiobutton.icon.sm.size');
    }

    .p-radiobutton-lg,
    .p-radiobutton-lg .p-radiobutton-box {
        width: dt('radiobutton.lg.width');
        height: dt('radiobutton.lg.height');
    }

    .p-radiobutton-lg .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.lg.size');
        width: dt('radiobutton.icon.lg.size');
        height: dt('radiobutton.icon.lg.size');
    }
`,jL=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`,GL=`
    .p-password {
        display: inline-flex;
        position: relative;
    }

    .p-password .p-password-overlay {
        min-width: 100%;
    }

    .p-password-meter {
        height: dt('password.meter.height');
        background: dt('password.meter.background');
        border-radius: dt('password.meter.border.radius');
    }

    .p-password-meter-label {
        height: 100%;
        width: 0;
        transition: width 1s ease-in-out;
        border-radius: dt('password.meter.border.radius');
    }

    .p-password-meter-weak {
        background: dt('password.strength.weak.background');
    }

    .p-password-meter-medium {
        background: dt('password.strength.medium.background');
    }

    .p-password-meter-strong {
        background: dt('password.strength.strong.background');
    }

    .p-password-fluid {
        display: flex;
    }

    .p-password-fluid .p-password-input {
        width: 100%;
    }

    .p-password-input::-ms-reveal,
    .p-password-input::-ms-clear {
        display: none;
    }

    .p-password-overlay {
        padding: dt('password.overlay.padding');
        background: dt('password.overlay.background');
        color: dt('password.overlay.color');
        border: 1px solid dt('password.overlay.border.color');
        box-shadow: dt('password.overlay.shadow');
        border-radius: dt('password.overlay.border.radius');
    }

    .p-password-content {
        display: flex;
        flex-direction: column;
        gap: dt('password.content.gap');
    }

    .p-password-toggle-mask-icon {
        inset-inline-end: dt('form.field.padding.x');
        color: dt('password.icon.color');
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * calc(dt('icon.size') / 2));
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-password-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-password:has(.p-password-toggle-mask-icon) .p-password-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-password:has(.p-password-toggle-mask-icon) .p-password-clear-icon {
        inset-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }
`,qL=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,YL=`
    .p-inputotp {
        display: flex;
        align-items: center;
        gap: dt('inputotp.gap');
    }

    .p-inputotp-input {
        text-align: center;
        width: dt('inputotp.input.width');
    }

    .p-inputotp-input.p-inputtext-sm {
        text-align: center;
        width: dt('inputotp.input.sm.width');
    }

    .p-inputotp-input.p-inputtext-lg {
        text-align: center;
        width: dt('inputotp.input.lg.width');
    }
`,XL=`
    .p-message {
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
        height: 100%;
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition:
            max-height 0.45s cubic-bezier(0, 1, 0, 1),
            opacity 0.3s,
            margin 0.3s;
    }

    .p-message-leave-active .p-message-close-button {
        opacity: 0;
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }
`,QL=`
    .p-steplist {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow-x: auto;
    }

    .p-step {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        gap: dt('stepper.step.gap');
        padding: dt('stepper.step.padding');
    }

    .p-step:last-of-type {
        flex: initial;
    }

    .p-step-header {
        border: 0 none;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration');
        border-radius: dt('stepper.step.header.border.radius');
        outline-color: transparent;
        background: transparent;
        padding: dt('stepper.step.header.padding');
        gap: dt('stepper.step.header.gap');
    }

    .p-step-header:focus-visible {
        box-shadow: dt('stepper.step.header.focus.ring.shadow');
        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');
        outline-offset: dt('stepper.step.header.focus.ring.offset');
    }

    .p-stepper.p-stepper-readonly .p-step {
        cursor: auto;
    }

    .p-step-title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        color: dt('stepper.step.title.color');
        font-weight: dt('stepper.step.title.font.weight');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        color: dt('stepper.step.number.color');
        border: 2px solid dt('stepper.step.number.border.color');
        background: dt('stepper.step.number.background');
        min-width: dt('stepper.step.number.size');
        height: dt('stepper.step.number.size');
        line-height: dt('stepper.step.number.size');
        font-size: dt('stepper.step.number.font.size');
        z-index: 1;
        border-radius: dt('stepper.step.number.border.radius');
        position: relative;
        font-weight: dt('stepper.step.number.font.weight');
    }

    .p-step-number::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('stepper.step.number.border.radius');
        box-shadow: dt('stepper.step.number.shadow');
    }

    .p-step-active .p-step-header {
        cursor: default;
    }

    .p-step-active .p-step-number {
        background: dt('stepper.step.number.active.background');
        border-color: dt('stepper.step.number.active.border.color');
        color: dt('stepper.step.number.active.color');
    }

    .p-step-active .p-step-title {
        color: dt('stepper.step.title.active.color');
    }

    .p-step:not(.p-disabled):focus-visible {
        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('focus.ring.offset');
    }

    .p-step:has(~ .p-step-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepper-separator {
        flex: 1 1 0;
        background: dt('stepper.separator.background');
        width: 100%;
        height: dt('stepper.separator.size');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-steppanels {
        padding: dt('stepper.steppanels.padding');
    }

    .p-steppanel {
        background: dt('stepper.steppanel.background');
        color: dt('stepper.steppanel.color');
    }

    .p-stepper:has(.p-stepitem) {
        display: flex;
        flex-direction: column;
    }

    .p-stepitem {
        display: flex;
        flex-direction: column;
        flex: initial;
    }

    .p-stepitem.p-stepitem-active {
        flex: 1 1 auto;
    }

    .p-stepitem .p-step {
        flex: initial;
    }

    .p-stepitem .p-steppanel-content {
        width: 100%;
        padding: dt('stepper.steppanel.padding');
        margin-inline-start: 1rem;
    }

    .p-stepitem .p-steppanel {
        display: flex;
        flex: 1 1 auto;
    }

    .p-stepitem .p-stepper-separator {
        flex: 0 0 auto;
        width: dt('stepper.separator.size');
        height: auto;
        margin: dt('stepper.separator.margin');
        position: relative;
        left: calc(-1 * dt('stepper.separator.size'));
    }

    .p-stepitem .p-stepper-separator:dir(rtl) {
        left: calc(-9 * dt('stepper.separator.size'));
    }

    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepitem:last-of-type .p-steppanel {
        padding-inline-start: dt('stepper.step.number.size');
    }
`,ZL=`
    .p-datepicker {
        display: inline-flex;
        max-width: 100%;
    }

    .p-datepicker-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-datepicker-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('datepicker.dropdown.width');
        border-start-end-radius: dt('datepicker.dropdown.border.radius');
        border-end-end-radius: dt('datepicker.dropdown.border.radius');
        background: dt('datepicker.dropdown.background');
        border: 1px solid dt('datepicker.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('datepicker.dropdown.color');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        outline-color: transparent;
    }

    .p-datepicker-dropdown:not(:disabled):hover {
        background: dt('datepicker.dropdown.hover.background');
        border-color: dt('datepicker.dropdown.hover.border.color');
        color: dt('datepicker.dropdown.hover.color');
    }

    .p-datepicker-dropdown:not(:disabled):active {
        background: dt('datepicker.dropdown.active.background');
        border-color: dt('datepicker.dropdown.active.border.color');
        color: dt('datepicker.dropdown.active.color');
    }

    .p-datepicker-dropdown:focus-visible {
        box-shadow: dt('datepicker.dropdown.focus.ring.shadow');
        outline: dt('datepicker.dropdown.focus.ring.width') dt('datepicker.dropdown.focus.ring.style') dt('datepicker.dropdown.focus.ring.color');
        outline-offset: dt('datepicker.dropdown.focus.ring.offset');
    }

    .p-datepicker:has(.p-datepicker-input-icon-container) {
        position: relative;
    }

    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-datepicker-input-icon-container {
        cursor: pointer;
        position: absolute;
        top: 50%;
        inset-inline-end: dt('form.field.padding.x');
        margin-block-start: calc(-1 * (dt('icon.size') / 2));
        color: dt('datepicker.input.icon.color');
        line-height: 1;
    }

    .p-datepicker-fluid {
        display: flex;
    }

    .p-datepicker-fluid .p-datepicker-input {
        width: 1%;
    }

    .p-datepicker .p-datepicker-panel {
        min-width: 100%;
    }

    .p-datepicker-panel {
        width: auto;
        padding: dt('datepicker.panel.padding');
        background: dt('datepicker.panel.background');
        color: dt('datepicker.panel.color');
        border: 1px solid dt('datepicker.panel.border.color');
        border-radius: dt('datepicker.panel.border.radius');
        box-shadow: dt('datepicker.panel.shadow');
    }

    .p-datepicker-panel-inline {
        display: inline-block;
        overflow-x: auto;
        box-shadow: none;
    }

    .p-datepicker-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('datepicker.header.padding');
        background: dt('datepicker.header.background');
        color: dt('datepicker.header.color');
        border-block-end: 1px solid dt('datepicker.header.border.color');
    }

    .p-datepicker-next-button:dir(rtl) {
        order: -1;
    }

    .p-datepicker-prev-button:dir(rtl) {
        order: 1;
    }

    .p-datepicker-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: dt('datepicker.title.gap');
        font-weight: dt('datepicker.title.font.weight');
    }

    .p-datepicker-select-year,
    .p-datepicker-select-month {
        border: none;
        background: transparent;
        margin: 0;
        cursor: pointer;
        font-weight: inherit;
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration');
    }

    .p-datepicker-select-month {
        padding: dt('datepicker.select.month.padding');
        color: dt('datepicker.select.month.color');
        border-radius: dt('datepicker.select.month.border.radius');
    }

    .p-datepicker-select-year {
        padding: dt('datepicker.select.year.padding');
        color: dt('datepicker.select.year.color');
        border-radius: dt('datepicker.select.year.border.radius');
    }

    .p-datepicker-select-month:enabled:hover {
        background: dt('datepicker.select.month.hover.background');
        color: dt('datepicker.select.month.hover.color');
    }

    .p-datepicker-select-year:enabled:hover {
        background: dt('datepicker.select.year.hover.background');
        color: dt('datepicker.select.year.hover.color');
    }

    .p-datepicker-select-month:focus-visible,
    .p-datepicker-select-year:focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-calendar-container {
        display: flex;
    }

    .p-datepicker-calendar-container .p-datepicker-calendar {
        flex: 1 1 auto;
        border-inline-start: 1px solid dt('datepicker.group.border.color');
        padding-inline-end: dt('datepicker.group.gap');
        padding-inline-start: dt('datepicker.group.gap');
    }

    .p-datepicker-calendar-container .p-datepicker-calendar:first-child {
        padding-inline-start: 0;
        border-inline-start: 0 none;
    }

    .p-datepicker-calendar-container .p-datepicker-calendar:last-child {
        padding-inline-end: 0;
    }

    .p-datepicker-day-view {
        width: 100%;
        border-collapse: collapse;
        font-size: 1rem;
        margin: dt('datepicker.day.view.margin');
    }

    .p-datepicker-weekday-cell {
        padding: dt('datepicker.week.day.padding');
    }

    .p-datepicker-weekday {
        font-weight: dt('datepicker.week.day.font.weight');
        color: dt('datepicker.week.day.color');
    }

    .p-datepicker-day-cell {
        padding: dt('datepicker.date.padding');
    }

    .p-datepicker-day {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        width: dt('datepicker.date.width');
        height: dt('datepicker.date.height');
        border-radius: dt('datepicker.date.border.radius');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        border: 1px solid transparent;
        outline-color: transparent;
        color: dt('datepicker.date.color');
    }

    .p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {
        background: dt('datepicker.date.hover.background');
        color: dt('datepicker.date.hover.color');
    }

    .p-datepicker-day:focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-day-selected {
        background: dt('datepicker.date.selected.background');
        color: dt('datepicker.date.selected.color');
    }

    .p-datepicker-day-selected-range {
        background: dt('datepicker.date.range.selected.background');
        color: dt('datepicker.date.range.selected.color');
    }

    .p-datepicker-today > .p-datepicker-day {
        background: dt('datepicker.today.background');
        color: dt('datepicker.today.color');
    }

    .p-datepicker-today > .p-datepicker-day-selected {
        background: dt('datepicker.date.selected.background');
        color: dt('datepicker.date.selected.color');
    }

    .p-datepicker-today > .p-datepicker-day-selected-range {
        background: dt('datepicker.date.range.selected.background');
        color: dt('datepicker.date.range.selected.color');
    }

    .p-datepicker-weeknumber {
        text-align: center;
    }

    .p-datepicker-month-view {
        margin: dt('datepicker.month.view.margin');
    }

    .p-datepicker-month {
        width: 33.3%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        padding: dt('datepicker.month.padding');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        border-radius: dt('datepicker.month.border.radius');
        outline-color: transparent;
        color: dt('datepicker.date.color');
    }

    .p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {
        color: dt('datepicker.date.hover.color');
        background: dt('datepicker.date.hover.background');
    }

    .p-datepicker-month-selected {
        color: dt('datepicker.date.selected.color');
        background: dt('datepicker.date.selected.background');
    }

    .p-datepicker-month:not(.p-disabled):focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-year-view {
        margin: dt('datepicker.year.view.margin');
    }

    .p-datepicker-year {
        width: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        padding: dt('datepicker.year.padding');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        border-radius: dt('datepicker.year.border.radius');
        outline-color: transparent;
        color: dt('datepicker.date.color');
    }

    .p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {
        color: dt('datepicker.date.hover.color');
        background: dt('datepicker.date.hover.background');
    }

    .p-datepicker-year-selected {
        color: dt('datepicker.date.selected.color');
        background: dt('datepicker.date.selected.background');
    }

    .p-datepicker-year:not(.p-disabled):focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-buttonbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('datepicker.buttonbar.padding');
        border-block-start: 1px solid dt('datepicker.buttonbar.border.color');
    }

    .p-datepicker-buttonbar .p-button {
        width: auto;
    }

    .p-datepicker-time-picker {
        display: flex;
        justify-content: center;
        align-items: center;
        border-block-start: 1px solid dt('datepicker.time.picker.border.color');
        padding: 0;
        gap: dt('datepicker.time.picker.gap');
    }

    .p-datepicker-calendar-container + .p-datepicker-time-picker {
        padding: dt('datepicker.time.picker.padding');
    }

    .p-datepicker-time-picker > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: dt('datepicker.time.picker.button.gap');
    }

    .p-datepicker-time-picker span {
        font-size: 1rem;
    }

    .p-datepicker-timeonly .p-datepicker-time-picker {
        border-block-start: 0 none;
    }

    .p-datepicker-time-picker:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown {
        width: dt('datepicker.dropdown.sm.width');
    }

    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown .p-icon,
    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-input-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown {
        width: dt('datepicker.dropdown.lg.width');
    }

    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown .p-icon,
    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-input-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-clear-icon,
    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-clear-icon {
        inset-inline-end: calc(dt('datepicker.dropdown.width') + dt('form.field.padding.x'));
    }

    .p-datepicker-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('form.field.padding.x');
    }
`,JL=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,eN=`
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
        min-width: 100%;
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete-input-multiple.p-disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete.p-disabled .p-autocomplete-input-multiple {
        opacity: 1;
        background: dt('autocomplete.disabled.background');
        color: dt('autocomplete.disabled.color');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-autocomplete-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('autocomplete.dropdown.color');
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));
    }
`,tN=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,rN=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,nN=`
    .p-rating {
        position: relative;
        display: flex;
        align-items: center;
        gap: dt('rating.gap');
    }

    .p-rating-option {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        outline-color: transparent;
        border-radius: 50%;
        transition:
            background dt('rating.transition.duration'),
            color dt('rating.transition.duration'),
            border-color dt('rating.transition.duration'),
            outline-color dt('rating.transition.duration'),
            box-shadow dt('rating.transition.duration');
    }

    .p-rating-option.p-focus-visible {
        box-shadow: dt('rating.focus.ring.shadow');
        outline: dt('rating.focus.ring.width') dt('rating.focus.ring.style') dt('rating.focus.ring.color');
        outline-offset: dt('rating.focus.ring.offset');
    }

    .p-rating-icon {
        color: dt('rating.icon.color');
        transition:
            background dt('rating.transition.duration'),
            color dt('rating.transition.duration'),
            border-color dt('rating.transition.duration'),
            outline-color dt('rating.transition.duration'),
            box-shadow dt('rating.transition.duration');
        font-size: dt('rating.icon.size');
        width: dt('rating.icon.size');
        height: dt('rating.icon.size');
    }

    .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {
        color: dt('rating.icon.hover.color');
    }

    .p-rating-option-active .p-rating-icon {
        color: dt('rating.icon.active.color');
    }

    .p-rating-icon.p-invalid {
        /* @todo */
        stroke: dt('rating.invalid.icon.color');
    }

    .p-rating.p-readonly .p-rating-option {
        cursor: not-allowed;
    }
`,oN=`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`,aN=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`,Y1={transitionDuration:"{transition.duration}"},X1={borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},Q1={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},Z1={borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"},J1={root:Y1,panel:X1,header:Q1,content:Z1},eC={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},tC={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},rC={padding:"{list.padding}",gap:"{list.gap}"},nC={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},oC={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},aC={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},iC={borderRadius:"{border.radius.sm}"},sC={padding:"{list.option.padding}"},lC={light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},cC={root:eC,overlay:tC,list:rC,option:nC,optionGroup:oC,dropdown:aC,chip:iC,emptyMessage:sC,colorScheme:lC},dC={width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},uC={size:"1rem"},fC={borderColor:"{content.background}",offset:"-0.75rem"},pC={width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},hC={width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}},gC={root:dC,icon:uC,group:fC,lg:pC,xl:hC},bC={borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},mC={size:"0.5rem"},vC={fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},yC={fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xC={fontSize:"1rem",minWidth:"2rem",height:"2rem"},CC={light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},kC={root:bC,dot:mC,sm:vC,lg:yC,xl:xC,colorScheme:CC},wC={borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},SC={transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}},EC={primitive:wC,semantic:SC},_C={borderRadius:"{content.border.radius}"},TC={root:_C},BC={padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},AC={color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},IC={color:"{navigation.item.icon.color}"},RC={root:BC,item:AC,separator:IC},DC={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}",iconOnlyWidth:"2rem"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}",iconOnlyWidth:"3rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},LC={light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},NC={root:DC,colorScheme:LC},PC={background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},OC={padding:"1.25rem",gap:"0.5rem"},MC={gap:"0.5rem"},$C={fontSize:"1.25rem",fontWeight:"500"},FC={color:"{text.muted.color}"},zC={root:PC,body:OC,caption:MC,title:$C,subtitle:FC},UC={transitionDuration:"{transition.duration}"},VC={gap:"0.25rem"},KC={padding:"1rem",gap:"0.5rem"},HC={width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},WC={light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},jC={root:UC,content:VC,indicatorList:KC,indicator:HC,colorScheme:WC},GC={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},qC={width:"2.5rem",color:"{form.field.icon.color}"},YC={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},XC={padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},QC={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},ZC={color:"{form.field.icon.color}"},JC={root:GC,dropdown:qC,overlay:YC,list:XC,option:QC,clearIcon:ZC},ek={borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},tk={size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},rk={root:ek,icon:tk},nk={borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},ok={width:"2rem",height:"2rem"},ak={size:"1rem"},ik={size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},sk={light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}},lk={root:nk,image:ok,icon:ak,removeIcon:ik,colorScheme:sk},ck={transitionDuration:"{transition.duration}"},dk={width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},uk={shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},fk={light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}},pk={root:ck,preview:dk,panel:uk,colorScheme:fk},hk={size:"2rem",color:"{overlay.modal.color}"},gk={gap:"1rem"},bk={icon:hk,content:gk},mk={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},vk={padding:"{overlay.popover.padding}",gap:"1rem"},yk={size:"1.5rem",color:"{overlay.popover.color}"},xk={gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"},Ck={root:mk,content:vk,icon:yk,footer:xk},kk={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},wk={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},Sk={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},Ek={mobileIndent:"1rem"},_k={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},Tk={borderColor:"{content.border.color}"},Bk={root:kk,list:wk,item:Sk,submenu:Ek,submenuIcon:_k,separator:Tk},Ak={transitionDuration:"{transition.duration}"},Ik={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Rk={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Dk={fontWeight:"600"},Lk={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Nk={borderColor:"{datatable.border.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Pk={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Ok={fontWeight:"600"},Mk={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},$k={color:"{primary.color}"},Fk={width:"0.5rem"},zk={width:"1px",color:"{primary.color}"},Uk={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},Vk={size:"2rem"},Kk={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Hk={inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},Wk={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},jk={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},Gk={light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},qk={root:Ak,header:Ik,headerCell:Rk,columnTitle:Dk,row:Lk,bodyCell:Nk,footerCell:Pk,columnFooter:Ok,footer:Mk,dropPoint:$k,columnResizer:Fk,resizeIndicator:zk,sortIcon:Uk,loadingIcon:Vk,rowToggleButton:Kk,filter:Hk,paginatorTop:Wk,paginatorBottom:jk,colorScheme:Gk},Yk={borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},Xk={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},Qk={background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},Zk={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},Jk={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},ew={borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"},tw={root:Yk,header:Xk,content:Qk,footer:Zk,paginatorTop:Jk,paginatorBottom:ew},rw={transitionDuration:"{transition.duration}"},nw={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},ow={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},aw={gap:"0.5rem",fontWeight:"500"},iw={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},sw={color:"{form.field.icon.color}"},lw={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},cw={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},dw={borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},uw={margin:"0.5rem 0 0 0"},fw={padding:"0.25rem",fontWeight:"500",color:"{content.color}"},pw={hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},hw={margin:"0.5rem 0 0 0"},gw={padding:"0.375rem",borderRadius:"{content.border.radius}"},bw={margin:"0.5rem 0 0 0"},mw={padding:"0.375rem",borderRadius:"{content.border.radius}"},vw={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},yw={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},xw={light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},Cw={root:rw,panel:nw,header:ow,title:aw,dropdown:iw,inputIcon:sw,selectMonth:lw,selectYear:cw,group:dw,dayView:uw,weekDay:fw,date:pw,monthView:hw,month:gw,yearView:bw,year:mw,buttonbar:vw,timePicker:yw,colorScheme:xw},kw={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},ww={padding:"{overlay.modal.padding}",gap:"0.5rem"},Sw={fontSize:"1.25rem",fontWeight:"600"},Ew={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},_w={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"},Tw={root:kw,header:ww,title:Sw,content:Ew,footer:_w},Bw={borderColor:"{content.border.color}"},Aw={background:"{content.background}",color:"{text.color}"},Iw={margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},Rw={margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}},Dw={root:Bw,content:Aw,horizontal:Iw,vertical:Rw},Lw={background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},Nw={borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Pw={root:Lw,item:Nw},Ow={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},Mw={padding:"{overlay.modal.padding}"},$w={fontSize:"1.5rem",fontWeight:"600"},Fw={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},zw={padding:"{overlay.modal.padding}"},Uw={root:Ow,header:Mw,title:$w,content:Fw,footer:zw},Vw={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},Kw={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},Hw={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},Ww={focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},jw={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Gw={toolbar:Vw,toolbarItem:Kw,overlay:Hw,overlayOption:Ww,content:jw},qw={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},Yw={background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Xw={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},Qw={padding:"0"},Zw={root:qw,legend:Yw,toggleIcon:Xw,content:Qw},Jw={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},e2={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},t2={highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},r2={padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},n2={gap:"0.5rem"},o2={height:"0.25rem"},a2={gap:"0.5rem"},i2={root:Jw,header:e2,content:t2,file:r2,fileList:n2,progressbar:o2,basic:a2},s2={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},l2={active:{top:"-1.25rem"}},c2={input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},d2={borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}},u2={root:s2,over:l2,in:c2,on:d2},f2={borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},p2={background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},h2={size:"1.5rem"},g2={background:"{content.background}",padding:"1rem 0.25rem"},b2={size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},m2={size:"1rem"},v2={background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},y2={gap:"0.5rem",padding:"1rem"},x2={width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},C2={background:"rgba(0, 0, 0, 0.5)"},k2={background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},w2={size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},S2={size:"1.5rem"},E2={light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}},_2={root:f2,navButton:p2,navIcon:h2,thumbnailsContent:g2,thumbnailNavButton:b2,thumbnailNavButtonIcon:m2,caption:v2,indicatorList:y2,indicatorButton:x2,insetIndicatorList:C2,insetIndicatorButton:k2,closeButton:w2,closeButtonIcon:S2,colorScheme:E2},T2={color:"{form.field.icon.color}"},B2={icon:T2},A2={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},I2={paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},R2={root:A2,input:I2},D2={transitionDuration:"{transition.duration}"},L2={icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},N2={position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},P2={hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},O2={root:D2,preview:L2,toolbar:N2,action:P2},M2={size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},$2={handle:M2},F2={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},z2={fontWeight:"500"},U2={size:"1rem"},V2={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}},K2={root:F2,text:z2,icon:U2,colorScheme:V2},H2={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},W2={hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"},j2={root:H2,display:W2},G2={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},q2={borderRadius:"{border.radius.sm}"},Y2={light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}},X2={root:G2,chip:q2,colorScheme:Y2},Q2={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"},Z2={addon:Q2},J2={transitionDuration:"{transition.duration}"},eS={width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},tS={light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},rS={root:J2,button:eS,colorScheme:tS},nS={gap:"0.5rem"},oS={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}},aS={root:nS,input:oS},iS={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},sS={root:iS},lS={transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},cS={background:"{primary.color}"},dS={background:"{content.border.color}"},uS={color:"{text.muted.color}"},fS={root:lS,value:cS,range:dS,text:uS},pS={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},hS={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},gS={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},bS={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},mS={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},vS={padding:"{list.option.padding}"},yS={light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},xS={root:pS,list:hS,option:gS,optionGroup:bS,checkmark:mS,emptyMessage:vS,colorScheme:yS},CS={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},kS={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},wS={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},SS={padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},ES={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},_S={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},TS={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},BS={borderColor:"{content.border.color}"},AS={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},IS={root:CS,baseItem:kS,item:wS,overlay:SS,submenu:ES,submenuLabel:_S,submenuIcon:TS,separator:BS,mobileButton:AS},RS={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},DS={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},LS={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},NS={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},PS={borderColor:"{content.border.color}"},OS={root:RS,list:DS,item:LS,submenuLabel:NS,separator:PS},MS={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},$S={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},FS={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},zS={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},US={borderColor:"{content.border.color}"},VS={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},KS={root:MS,baseItem:$S,item:FS,submenu:zS,separator:US,mobileButton:VS},HS={borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},WS={padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},jS={fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},GS={size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},qS={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},YS={size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},XS={root:{borderWidth:"1px"}},QS={content:{padding:"0"}},ZS={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}},JS={root:HS,content:WS,text:jS,icon:GS,closeButton:qS,closeIcon:YS,outlined:XS,simple:QS,colorScheme:ZS},eE={borderRadius:"{content.border.radius}",gap:"1rem"},tE={background:"{content.border.color}",size:"0.5rem"},rE={gap:"0.5rem"},nE={size:"0.5rem"},oE={size:"1rem"},aE={verticalGap:"0.5rem",horizontalGap:"1rem"},iE={root:eE,meters:tE,label:rE,labelMarker:nE,labelIcon:oE,labelList:aE},sE={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},lE={width:"2.5rem",color:"{form.field.icon.color}"},cE={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},dE={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},uE={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},fE={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},pE={color:"{form.field.icon.color}"},hE={borderRadius:"{border.radius.sm}"},gE={padding:"{list.option.padding}"},bE={root:sE,dropdown:lE,overlay:cE,list:dE,option:uE,optionGroup:fE,chip:hE,clearIcon:pE,emptyMessage:gE},mE={gap:"1.125rem"},vE={gap:"0.5rem"},yE={root:mE,controls:vE},xE={gutter:"0.75rem",transitionDuration:"{transition.duration}"},CE={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},kE={background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},wE={color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"},SE={root:xE,node:CE,nodeToggleButton:kE,connector:wE},EE={outline:{width:"2px",color:"{content.background}"}},_E={root:EE},TE={padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},BE={background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},AE={color:"{text.muted.color}"},IE={maxWidth:"2.5rem"},RE={root:TE,navButton:BE,currentPageReport:AE,jumpToPageInput:IE},DE={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},LE={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},NE={padding:"0.375rem 1.125rem"},PE={fontWeight:"600"},OE={padding:"0 1.125rem 1.125rem 1.125rem"},ME={padding:"0 1.125rem 1.125rem 1.125rem"},$E={root:DE,header:LE,toggleableHeader:NE,title:PE,content:OE,footer:ME},FE={gap:"0.5rem",transitionDuration:"{transition.duration}"},zE={background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},UE={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},VE={indent:"1rem"},KE={color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},HE={root:FE,panel:zE,item:UE,submenu:VE,submenuIcon:KE},WE={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},jE={color:"{form.field.icon.color}"},GE={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},qE={gap:"0.5rem"},YE={light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}},XE={meter:WE,icon:jE,overlay:GE,content:qE,colorScheme:YE},QE={gap:"1.125rem"},ZE={gap:"0.5rem"},JE={root:QE,controls:ZE},e_={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},t_={padding:"{overlay.popover.padding}"},r_={root:e_,content:t_},n_={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},o_={background:"{primary.color}"},a_={color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"},i_={root:n_,value:o_,label:a_},s_={light:{root:{colorOne:"{red.500}",colorTwo:"{blue.500}",colorThree:"{green.500}",colorFour:"{yellow.500}"}},dark:{root:{colorOne:"{red.400}",colorTwo:"{blue.400}",colorThree:"{green.400}",colorFour:"{yellow.400}"}}},l_={colorScheme:s_},c_={width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},d_={size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}},u_={root:c_,icon:d_},f_={gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},p_={size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},h_={root:f_,icon:p_},g_={light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}},b_={colorScheme:g_},m_={transitionDuration:"{transition.duration}"},v_={size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},y_={light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}},x_={root:m_,bar:v_,colorScheme:y_},C_={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},k_={width:"2.5rem",color:"{form.field.icon.color}"},w_={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},S_={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},E_={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},__={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},T_={color:"{form.field.icon.color}"},B_={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},A_={padding:"{list.option.padding}"},I_={root:C_,dropdown:k_,overlay:w_,list:S_,option:E_,optionGroup:__,clearIcon:T_,checkmark:B_,emptyMessage:A_},R_={borderRadius:"{form.field.border.radius}"},D_={light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}},L_={root:R_,colorScheme:D_},N_={borderRadius:"{content.border.radius}"},P_={light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}},O_={root:N_,colorScheme:P_},M_={transitionDuration:"{transition.duration}"},$_={background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},F_={background:"{primary.color}"},z_={width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},U_={light:{handle:{content:{background:"{surface.0}"}}},dark:{handle:{content:{background:"{surface.950}"}}}},V_={root:M_,track:$_,range:F_,handle:z_,colorScheme:U_},K_={gap:"0.5rem",transitionDuration:"{transition.duration}"},H_={root:K_},W_={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"},j_={root:W_},G_={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},q_={background:"{content.border.color}"},Y_={size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},X_={root:G_,gutter:q_,handle:Y_},Q_={transitionDuration:"{transition.duration}"},Z_={background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},J_={padding:"0.5rem",gap:"1rem"},e5={padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},t5={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},r5={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},n5={padding:"0.875rem 0.5rem 1.125rem 0.5rem"},o5={background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},a5={root:Q_,separator:Z_,step:J_,stepHeader:e5,stepTitle:t5,stepNumber:r5,steppanels:n5,steppanel:o5},i5={transitionDuration:"{transition.duration}"},s5={background:"{content.border.color}"},l5={borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},c5={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},d5={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},u5={root:i5,separator:s5,itemLink:l5,itemLabel:c5,itemNumber:d5},f5={transitionDuration:"{transition.duration}"},p5={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},h5={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},g5={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},b5={height:"1px",bottom:"-1px",background:"{primary.color}"},m5={root:f5,tablist:p5,item:h5,itemIcon:g5,activeBar:b5},v5={transitionDuration:"{transition.duration}"},y5={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},x5={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},C5={background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},k5={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},w5={height:"1px",bottom:"-1px",background:"{primary.color}"},S5={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},E5={root:v5,tablist:y5,tab:x5,tabpanel:C5,navButton:k5,activeBar:w5,colorScheme:S5},_5={transitionDuration:"{transition.duration}"},T5={background:"{content.background}",borderColor:"{content.border.color}"},B5={borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},A5={background:"{content.background}",color:"{content.color}"},I5={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},R5={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},D5={root:_5,tabList:T5,tab:B5,tabPanel:A5,navButton:I5,colorScheme:R5},L5={fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},N5={size:"0.75rem"},P5={light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},O5={root:L5,icon:N5,colorScheme:P5},M5={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},$5={gap:"0.25rem"},F5={margin:"2px 0"},z5={root:M5,prompt:$5,commandResponse:F5},U5={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},V5={root:U5},K5={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},H5={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},W5={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},j5={mobileIndent:"1rem"},G5={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},q5={borderColor:"{content.border.color}"},Y5={root:K5,list:H5,item:W5,submenu:j5,submenuIcon:G5,separator:q5},X5={minHeight:"5rem"},Q5={eventContent:{padding:"1rem 0"}},Z5={eventContent:{padding:"0 1rem"}},J5={size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},eT={color:"{content.border.color}",size:"2px"},tT={event:X5,horizontal:Q5,vertical:Z5,eventMarker:J5,eventConnector:eT},rT={width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},nT={size:"1.125rem"},oT={padding:"{overlay.popover.padding}",gap:"0.5rem"},aT={gap:"0.5rem"},iT={fontWeight:"500",fontSize:"1rem"},sT={fontWeight:"500",fontSize:"0.875rem"},lT={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},cT={size:"1rem"},dT={light:{root:{blur:"1.5px"},info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{root:{blur:"10px"},info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}},uT={root:rT,icon:nT,content:oT,text:aT,summary:iT,detail:sT,closeButton:lT,closeIcon:cT,colorScheme:dT},fT={padding:"0.25rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.25rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.25rem"}},pT={disabledColor:"{form.field.disabled.color}"},hT={padding:"0.25rem 0.75rem",borderRadius:"{content.border.radius}",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",sm:{padding:"0.25rem 0.75rem"},lg:{padding:"0.25rem 0.75rem"}},gT={light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}},bT={root:fT,icon:pT,content:hT,colorScheme:gT},mT={width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},vT={borderRadius:"50%",size:"1rem"},yT={light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}},xT={root:mT,handle:vT,colorScheme:yT},CT={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"},kT={root:CT},wT={maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},ST={light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}},ET={root:wT,colorScheme:ST},_T={background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},TT={padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},BT={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},AT={borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},IT={size:"2rem"},RT={margin:"0 0 0.5rem 0"},DT={root:_T,node:TT,nodeIcon:BT,nodeToggleButton:AT,loadingIcon:IT,filter:RT},LT={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},NT={width:"2.5rem",color:"{form.field.icon.color}"},PT={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},OT={padding:"{list.padding}"},MT={padding:"{list.option.padding}"},$T={borderRadius:"{border.radius.sm}"},FT={color:"{form.field.icon.color}"},zT={root:LT,dropdown:NT,overlay:PT,tree:OT,emptyMessage:MT,chip:$T,clearIcon:FT},UT={transitionDuration:"{transition.duration}"},VT={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},KT={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},HT={fontWeight:"600"},WT={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},jT={borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},GT={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},qT={fontWeight:"600"},YT={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},XT={width:"0.5rem"},QT={width:"1px",color:"{primary.color}"},ZT={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},JT={size:"2rem"},eB={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},tB={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},rB={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},nB={light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},oB={root:UT,header:VT,headerCell:KT,columnTitle:HT,row:WT,bodyCell:jT,footerCell:GT,columnFooter:qT,footer:YT,columnResizer:XT,resizeIndicator:QT,sortIcon:ZT,loadingIcon:JT,nodeToggleButton:eB,paginatorTop:tB,paginatorBottom:rB,colorScheme:nB},aB={mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}},iB={loader:aB},sB=Object.defineProperty,lB=Object.defineProperties,cB=Object.getOwnPropertyDescriptors,td=Object.getOwnPropertySymbols,dB=Object.prototype.hasOwnProperty,uB=Object.prototype.propertyIsEnumerable,rd=(t,e,r)=>e in t?sB(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,nd,iN=(nd=((t,e)=>{for(var r in e||(e={}))dB.call(e,r)&&rd(t,r,e[r]);if(td)for(var r of td(e))uB.call(e,r)&&rd(t,r,e[r]);return t})({},EC),lB(nd,cB({components:{accordion:J1,autocomplete:cC,avatar:gC,badge:kC,blockui:TC,breadcrumb:RC,button:NC,card:zC,carousel:jC,cascadeselect:JC,checkbox:rk,chip:lk,colorpicker:pk,confirmdialog:bk,confirmpopup:Ck,contextmenu:Bk,datatable:qk,dataview:tw,datepicker:Cw,dialog:Tw,divider:Dw,dock:Pw,drawer:Uw,editor:Gw,fieldset:Zw,fileupload:i2,floatlabel:u2,galleria:_2,iconfield:B2,iftalabel:R2,image:O2,imagecompare:$2,inlinemessage:K2,inplace:j2,inputchips:X2,inputgroup:Z2,inputnumber:rS,inputotp:aS,inputtext:sS,knob:fS,listbox:xS,megamenu:IS,menu:OS,menubar:KS,message:JS,metergroup:iE,multiselect:bE,orderlist:yE,organizationchart:SE,overlaybadge:_E,paginator:RE,panel:$E,panelmenu:HE,password:XE,picklist:JE,popover:r_,progressbar:i_,progressspinner:l_,radiobutton:u_,rating:h_,ripple:b_,scrollpanel:x_,select:I_,selectbutton:L_,skeleton:O_,slider:V_,speeddial:H_,splitbutton:j_,splitter:X_,stepper:a5,steps:u5,tabmenu:m5,tabs:E5,tabview:D5,tag:O5,terminal:z5,textarea:V5,tieredmenu:Y5,timeline:tT,toast:uT,togglebutton:bT,toggleswitch:xT,toolbar:kT,tooltip:ET,tree:DT,treeselect:zT,treetable:oB,virtualscroller:iB}}))),te={options:{usePureJavaScript:!1}},hl={},fB=hl,od={};hl.encode=function(t,e,r){if(typeof e!="string")throw new TypeError('"alphabet" must be a string.');if(r!==void 0&&typeof r!="number")throw new TypeError('"maxline" must be a number.');var n="";if(!(t instanceof Uint8Array))n=pB(t,e);else{var o=0,a=e.length,i=e.charAt(0),s=[0];for(o=0;o<t.length;++o){for(var l=0,c=t[o];l<s.length;++l)c+=s[l]<<8,s[l]=c%a,c=c/a|0;for(;c>0;)s.push(c%a),c=c/a|0}for(o=0;t[o]===0&&o<t.length-1;++o)n+=i;for(o=s.length-1;o>=0;--o)n+=e[s[o]]}if(r){var d=new RegExp(".{1,"+r+"}","g");n=n.match(d).join(`\r
`)}return n};hl.decode=function(t,e){if(typeof t!="string")throw new TypeError('"input" must be a string.');if(typeof e!="string")throw new TypeError('"alphabet" must be a string.');var r=od[e];if(!r){r=od[e]=[];for(var n=0;n<e.length;++n)r[e.charCodeAt(n)]=n}t=t.replace(/\s/g,"");for(var o=e.length,a=e.charAt(0),i=[0],n=0;n<t.length;n++){var s=r[t.charCodeAt(n)];if(s===void 0)return;for(var l=0,c=s;l<i.length;++l)c+=i[l]*o,i[l]=c&255,c>>=8;for(;c>0;)i.push(c&255),c>>=8}for(var d=0;t[d]===a&&d<t.length-1;++d)i.push(0);return typeof Buffer<"u"?Buffer.from(i.reverse()):new Uint8Array(i.reverse())};function pB(t,e){var r=0,n=e.length,o=e.charAt(0),a=[0];for(r=0;r<t.length();++r){for(var i=0,s=t.at(r);i<a.length;++i)s+=a[i]<<8,a[i]=s%n,s=s/n|0;for(;s>0;)a.push(s%n),s=s/n|0}var l="";for(r=0;t.at(r)===0&&r<t.length()-1;++r)l+=o;for(r=a.length-1;r>=0;--r)l+=e[a[r]];return l}var ad=te,id=fB,E=ad.util=ad.util||{};(function(){if(typeof process<"u"&&process.nextTick&&!process.browser){E.nextTick=process.nextTick,typeof setImmediate=="function"?E.setImmediate=setImmediate:E.setImmediate=E.nextTick;return}if(typeof setImmediate=="function"){E.setImmediate=function(){return setImmediate.apply(void 0,arguments)},E.nextTick=function(i){return setImmediate(i)};return}if(E.setImmediate=function(i){setTimeout(i,0)},typeof window<"u"&&typeof window.postMessage=="function"){let i=function(s){if(s.source===window&&s.data===t){s.stopPropagation();var l=e.slice();e.length=0,l.forEach(function(c){c()})}};var t="forge.setImmediate",e=[];E.setImmediate=function(s){e.push(s),e.length===1&&window.postMessage(t,"*")},window.addEventListener("message",i,!0)}if(typeof MutationObserver<"u"){var r=Date.now(),n=!0,o=document.createElement("div"),e=[];new MutationObserver(function(){var s=e.slice();e.length=0,s.forEach(function(l){l()})}).observe(o,{attributes:!0});var a=E.setImmediate;E.setImmediate=function(s){Date.now()-r>15?(r=Date.now(),a(s)):(e.push(s),e.length===1&&o.setAttribute("a",n=!n))}}E.nextTick=E.setImmediate})();E.isNodejs=typeof process<"u"&&process.versions&&process.versions.node;E.globalScope=function(){return E.isNodejs?as:typeof self>"u"?window:self}();E.isArray=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};E.isArrayBuffer=function(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer};E.isArrayBufferView=function(t){return t&&E.isArrayBuffer(t.buffer)&&t.byteLength!==void 0};function To(t){if(!(t===8||t===16||t===24||t===32))throw new Error("Only 8, 16, 24, or 32 bits supported: "+t)}E.ByteBuffer=gl;function gl(t){if(this.data="",this.read=0,typeof t=="string")this.data=t;else if(E.isArrayBuffer(t)||E.isArrayBufferView(t))if(typeof Buffer<"u"&&t instanceof Buffer)this.data=t.toString("binary");else{var e=new Uint8Array(t);try{this.data=String.fromCharCode.apply(null,e)}catch{for(var r=0;r<e.length;++r)this.putByte(e[r])}}else(t instanceof gl||typeof t=="object"&&typeof t.data=="string"&&typeof t.read=="number")&&(this.data=t.data,this.read=t.read);this._constructedStringLength=0}E.ByteStringBuffer=gl;var hB=4096;E.ByteStringBuffer.prototype._optimizeConstructedString=function(t){this._constructedStringLength+=t,this._constructedStringLength>hB&&(this.data.substr(0,1),this._constructedStringLength=0)};E.ByteStringBuffer.prototype.length=function(){return this.data.length-this.read};E.ByteStringBuffer.prototype.isEmpty=function(){return this.length()<=0};E.ByteStringBuffer.prototype.putByte=function(t){return this.putBytes(String.fromCharCode(t))};E.ByteStringBuffer.prototype.fillWithByte=function(t,e){t=String.fromCharCode(t);for(var r=this.data;e>0;)e&1&&(r+=t),e>>>=1,e>0&&(t+=t);return this.data=r,this._optimizeConstructedString(e),this};E.ByteStringBuffer.prototype.putBytes=function(t){return this.data+=t,this._optimizeConstructedString(t.length),this};E.ByteStringBuffer.prototype.putString=function(t){return this.putBytes(E.encodeUtf8(t))};E.ByteStringBuffer.prototype.putInt16=function(t){return this.putBytes(String.fromCharCode(t>>8&255)+String.fromCharCode(t&255))};E.ByteStringBuffer.prototype.putInt24=function(t){return this.putBytes(String.fromCharCode(t>>16&255)+String.fromCharCode(t>>8&255)+String.fromCharCode(t&255))};E.ByteStringBuffer.prototype.putInt32=function(t){return this.putBytes(String.fromCharCode(t>>24&255)+String.fromCharCode(t>>16&255)+String.fromCharCode(t>>8&255)+String.fromCharCode(t&255))};E.ByteStringBuffer.prototype.putInt16Le=function(t){return this.putBytes(String.fromCharCode(t&255)+String.fromCharCode(t>>8&255))};E.ByteStringBuffer.prototype.putInt24Le=function(t){return this.putBytes(String.fromCharCode(t&255)+String.fromCharCode(t>>8&255)+String.fromCharCode(t>>16&255))};E.ByteStringBuffer.prototype.putInt32Le=function(t){return this.putBytes(String.fromCharCode(t&255)+String.fromCharCode(t>>8&255)+String.fromCharCode(t>>16&255)+String.fromCharCode(t>>24&255))};E.ByteStringBuffer.prototype.putInt=function(t,e){To(e);var r="";do e-=8,r+=String.fromCharCode(t>>e&255);while(e>0);return this.putBytes(r)};E.ByteStringBuffer.prototype.putSignedInt=function(t,e){return t<0&&(t+=2<<e-1),this.putInt(t,e)};E.ByteStringBuffer.prototype.putBuffer=function(t){return this.putBytes(t.getBytes())};E.ByteStringBuffer.prototype.getByte=function(){return this.data.charCodeAt(this.read++)};E.ByteStringBuffer.prototype.getInt16=function(){var t=this.data.charCodeAt(this.read)<<8^this.data.charCodeAt(this.read+1);return this.read+=2,t};E.ByteStringBuffer.prototype.getInt24=function(){var t=this.data.charCodeAt(this.read)<<16^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2);return this.read+=3,t};E.ByteStringBuffer.prototype.getInt32=function(){var t=this.data.charCodeAt(this.read)<<24^this.data.charCodeAt(this.read+1)<<16^this.data.charCodeAt(this.read+2)<<8^this.data.charCodeAt(this.read+3);return this.read+=4,t};E.ByteStringBuffer.prototype.getInt16Le=function(){var t=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8;return this.read+=2,t};E.ByteStringBuffer.prototype.getInt24Le=function(){var t=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2)<<16;return this.read+=3,t};E.ByteStringBuffer.prototype.getInt32Le=function(){var t=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2)<<16^this.data.charCodeAt(this.read+3)<<24;return this.read+=4,t};E.ByteStringBuffer.prototype.getInt=function(t){To(t);var e=0;do e=(e<<8)+this.data.charCodeAt(this.read++),t-=8;while(t>0);return e};E.ByteStringBuffer.prototype.getSignedInt=function(t){var e=this.getInt(t),r=2<<t-2;return e>=r&&(e-=r<<1),e};E.ByteStringBuffer.prototype.getBytes=function(t){var e;return t?(t=Math.min(this.length(),t),e=this.data.slice(this.read,this.read+t),this.read+=t):t===0?e="":(e=this.read===0?this.data:this.data.slice(this.read),this.clear()),e};E.ByteStringBuffer.prototype.bytes=function(t){return typeof t>"u"?this.data.slice(this.read):this.data.slice(this.read,this.read+t)};E.ByteStringBuffer.prototype.at=function(t){return this.data.charCodeAt(this.read+t)};E.ByteStringBuffer.prototype.setAt=function(t,e){return this.data=this.data.substr(0,this.read+t)+String.fromCharCode(e)+this.data.substr(this.read+t+1),this};E.ByteStringBuffer.prototype.last=function(){return this.data.charCodeAt(this.data.length-1)};E.ByteStringBuffer.prototype.copy=function(){var t=E.createBuffer(this.data);return t.read=this.read,t};E.ByteStringBuffer.prototype.compact=function(){return this.read>0&&(this.data=this.data.slice(this.read),this.read=0),this};E.ByteStringBuffer.prototype.clear=function(){return this.data="",this.read=0,this};E.ByteStringBuffer.prototype.truncate=function(t){var e=Math.max(0,this.length()-t);return this.data=this.data.substr(this.read,e),this.read=0,this};E.ByteStringBuffer.prototype.toHex=function(){for(var t="",e=this.read;e<this.data.length;++e){var r=this.data.charCodeAt(e);r<16&&(t+="0"),t+=r.toString(16)}return t};E.ByteStringBuffer.prototype.toString=function(){return E.decodeUtf8(this.bytes())};function gB(t,e){e=e||{},this.read=e.readOffset||0,this.growSize=e.growSize||1024;var r=E.isArrayBuffer(t),n=E.isArrayBufferView(t);if(r||n){r?this.data=new DataView(t):this.data=new DataView(t.buffer,t.byteOffset,t.byteLength),this.write="writeOffset"in e?e.writeOffset:this.data.byteLength;return}this.data=new DataView(new ArrayBuffer(0)),this.write=0,t!=null&&this.putBytes(t),"writeOffset"in e&&(this.write=e.writeOffset)}E.DataBuffer=gB;E.DataBuffer.prototype.length=function(){return this.write-this.read};E.DataBuffer.prototype.isEmpty=function(){return this.length()<=0};E.DataBuffer.prototype.accommodate=function(t,e){if(this.length()>=t)return this;e=Math.max(e||this.growSize,t);var r=new Uint8Array(this.data.buffer,this.data.byteOffset,this.data.byteLength),n=new Uint8Array(this.length()+e);return n.set(r),this.data=new DataView(n.buffer),this};E.DataBuffer.prototype.putByte=function(t){return this.accommodate(1),this.data.setUint8(this.write++,t),this};E.DataBuffer.prototype.fillWithByte=function(t,e){this.accommodate(e);for(var r=0;r<e;++r)this.data.setUint8(t);return this};E.DataBuffer.prototype.putBytes=function(t,e){if(E.isArrayBufferView(t)){var r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength),n=r.byteLength-r.byteOffset;this.accommodate(n);var o=new Uint8Array(this.data.buffer,this.write);return o.set(r),this.write+=n,this}if(E.isArrayBuffer(t)){var r=new Uint8Array(t);this.accommodate(r.byteLength);var o=new Uint8Array(this.data.buffer);return o.set(r,this.write),this.write+=r.byteLength,this}if(t instanceof E.DataBuffer||typeof t=="object"&&typeof t.read=="number"&&typeof t.write=="number"&&E.isArrayBufferView(t.data)){var r=new Uint8Array(t.data.byteLength,t.read,t.length());this.accommodate(r.byteLength);var o=new Uint8Array(t.data.byteLength,this.write);return o.set(r),this.write+=r.byteLength,this}if(t instanceof E.ByteStringBuffer&&(t=t.data,e="binary"),e=e||"binary",typeof t=="string"){var a;if(e==="hex")return this.accommodate(Math.ceil(t.length/2)),a=new Uint8Array(this.data.buffer,this.write),this.write+=E.binary.hex.decode(t,a,this.write),this;if(e==="base64")return this.accommodate(Math.ceil(t.length/4)*3),a=new Uint8Array(this.data.buffer,this.write),this.write+=E.binary.base64.decode(t,a,this.write),this;if(e==="utf8"&&(t=E.encodeUtf8(t),e="binary"),e==="binary"||e==="raw")return this.accommodate(t.length),a=new Uint8Array(this.data.buffer,this.write),this.write+=E.binary.raw.decode(a),this;if(e==="utf16")return this.accommodate(t.length*2),a=new Uint16Array(this.data.buffer,this.write),this.write+=E.text.utf16.encode(a),this;throw new Error("Invalid encoding: "+e)}throw Error("Invalid parameter: "+t)};E.DataBuffer.prototype.putBuffer=function(t){return this.putBytes(t),t.clear(),this};E.DataBuffer.prototype.putString=function(t){return this.putBytes(t,"utf16")};E.DataBuffer.prototype.putInt16=function(t){return this.accommodate(2),this.data.setInt16(this.write,t),this.write+=2,this};E.DataBuffer.prototype.putInt24=function(t){return this.accommodate(3),this.data.setInt16(this.write,t>>8&65535),this.data.setInt8(this.write,t>>16&255),this.write+=3,this};E.DataBuffer.prototype.putInt32=function(t){return this.accommodate(4),this.data.setInt32(this.write,t),this.write+=4,this};E.DataBuffer.prototype.putInt16Le=function(t){return this.accommodate(2),this.data.setInt16(this.write,t,!0),this.write+=2,this};E.DataBuffer.prototype.putInt24Le=function(t){return this.accommodate(3),this.data.setInt8(this.write,t>>16&255),this.data.setInt16(this.write,t>>8&65535,!0),this.write+=3,this};E.DataBuffer.prototype.putInt32Le=function(t){return this.accommodate(4),this.data.setInt32(this.write,t,!0),this.write+=4,this};E.DataBuffer.prototype.putInt=function(t,e){To(e),this.accommodate(e/8);do e-=8,this.data.setInt8(this.write++,t>>e&255);while(e>0);return this};E.DataBuffer.prototype.putSignedInt=function(t,e){return To(e),this.accommodate(e/8),t<0&&(t+=2<<e-1),this.putInt(t,e)};E.DataBuffer.prototype.getByte=function(){return this.data.getInt8(this.read++)};E.DataBuffer.prototype.getInt16=function(){var t=this.data.getInt16(this.read);return this.read+=2,t};E.DataBuffer.prototype.getInt24=function(){var t=this.data.getInt16(this.read)<<8^this.data.getInt8(this.read+2);return this.read+=3,t};E.DataBuffer.prototype.getInt32=function(){var t=this.data.getInt32(this.read);return this.read+=4,t};E.DataBuffer.prototype.getInt16Le=function(){var t=this.data.getInt16(this.read,!0);return this.read+=2,t};E.DataBuffer.prototype.getInt24Le=function(){var t=this.data.getInt8(this.read)^this.data.getInt16(this.read+1,!0)<<8;return this.read+=3,t};E.DataBuffer.prototype.getInt32Le=function(){var t=this.data.getInt32(this.read,!0);return this.read+=4,t};E.DataBuffer.prototype.getInt=function(t){To(t);var e=0;do e=(e<<8)+this.data.getInt8(this.read++),t-=8;while(t>0);return e};E.DataBuffer.prototype.getSignedInt=function(t){var e=this.getInt(t),r=2<<t-2;return e>=r&&(e-=r<<1),e};E.DataBuffer.prototype.getBytes=function(t){var e;return t?(t=Math.min(this.length(),t),e=this.data.slice(this.read,this.read+t),this.read+=t):t===0?e="":(e=this.read===0?this.data:this.data.slice(this.read),this.clear()),e};E.DataBuffer.prototype.bytes=function(t){return typeof t>"u"?this.data.slice(this.read):this.data.slice(this.read,this.read+t)};E.DataBuffer.prototype.at=function(t){return this.data.getUint8(this.read+t)};E.DataBuffer.prototype.setAt=function(t,e){return this.data.setUint8(t,e),this};E.DataBuffer.prototype.last=function(){return this.data.getUint8(this.write-1)};E.DataBuffer.prototype.copy=function(){return new E.DataBuffer(this)};E.DataBuffer.prototype.compact=function(){if(this.read>0){var t=new Uint8Array(this.data.buffer,this.read),e=new Uint8Array(t.byteLength);e.set(t),this.data=new DataView(e),this.write-=this.read,this.read=0}return this};E.DataBuffer.prototype.clear=function(){return this.data=new DataView(new ArrayBuffer(0)),this.read=this.write=0,this};E.DataBuffer.prototype.truncate=function(t){return this.write=Math.max(0,this.length()-t),this.read=Math.min(this.read,this.write),this};E.DataBuffer.prototype.toHex=function(){for(var t="",e=this.read;e<this.data.byteLength;++e){var r=this.data.getUint8(e);r<16&&(t+="0"),t+=r.toString(16)}return t};E.DataBuffer.prototype.toString=function(t){var e=new Uint8Array(this.data,this.read,this.length());if(t=t||"utf8",t==="binary"||t==="raw")return E.binary.raw.encode(e);if(t==="hex")return E.binary.hex.encode(e);if(t==="base64")return E.binary.base64.encode(e);if(t==="utf8")return E.text.utf8.decode(e);if(t==="utf16")return E.text.utf16.decode(e);throw new Error("Invalid encoding: "+t)};E.createBuffer=function(t,e){return e=e||"raw",t!==void 0&&e==="utf8"&&(t=E.encodeUtf8(t)),new E.ByteBuffer(t)};E.fillString=function(t,e){for(var r="";e>0;)e&1&&(r+=t),e>>>=1,e>0&&(t+=t);return r};E.xorBytes=function(t,e,r){for(var n="",o="",a="",i=0,s=0;r>0;--r,++i)o=t.charCodeAt(i)^e.charCodeAt(i),s>=10&&(n+=a,a="",s=0),a+=String.fromCharCode(o),++s;return n+=a,n};E.hexToBytes=function(t){var e="",r=0;for(t.length&!0&&(r=1,e+=String.fromCharCode(parseInt(t[0],16)));r<t.length;r+=2)e+=String.fromCharCode(parseInt(t.substr(r,2),16));return e};E.bytesToHex=function(t){return E.createBuffer(t).toHex()};E.int32ToBytes=function(t){return String.fromCharCode(t>>24&255)+String.fromCharCode(t>>16&255)+String.fromCharCode(t>>8&255)+String.fromCharCode(t&255)};var yr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",xr=[62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,64,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],Qf="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";E.encode64=function(t,e){for(var r="",n="",o,a,i,s=0;s<t.length;)o=t.charCodeAt(s++),a=t.charCodeAt(s++),i=t.charCodeAt(s++),r+=yr.charAt(o>>2),r+=yr.charAt((o&3)<<4|a>>4),isNaN(a)?r+="==":(r+=yr.charAt((a&15)<<2|i>>6),r+=isNaN(i)?"=":yr.charAt(i&63)),e&&r.length>e&&(n+=r.substr(0,e)+`\r
`,r=r.substr(e));return n+=r,n};E.decode64=function(t){t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var e="",r,n,o,a,i=0;i<t.length;)r=xr[t.charCodeAt(i++)-43],n=xr[t.charCodeAt(i++)-43],o=xr[t.charCodeAt(i++)-43],a=xr[t.charCodeAt(i++)-43],e+=String.fromCharCode(r<<2|n>>4),o!==64&&(e+=String.fromCharCode((n&15)<<4|o>>2),a!==64&&(e+=String.fromCharCode((o&3)<<6|a)));return e};E.encodeUtf8=function(t){return unescape(encodeURIComponent(t))};E.decodeUtf8=function(t){return decodeURIComponent(escape(t))};E.binary={raw:{},hex:{},base64:{},base58:{},baseN:{encode:id.encode,decode:id.decode}};E.binary.raw.encode=function(t){return String.fromCharCode.apply(null,t)};E.binary.raw.decode=function(t,e,r){var n=e;n||(n=new Uint8Array(t.length)),r=r||0;for(var o=r,a=0;a<t.length;++a)n[o++]=t.charCodeAt(a);return e?o-r:n};E.binary.hex.encode=E.bytesToHex;E.binary.hex.decode=function(t,e,r){var n=e;n||(n=new Uint8Array(Math.ceil(t.length/2))),r=r||0;var o=0,a=r;for(t.length&1&&(o=1,n[a++]=parseInt(t[0],16));o<t.length;o+=2)n[a++]=parseInt(t.substr(o,2),16);return e?a-r:n};E.binary.base64.encode=function(t,e){for(var r="",n="",o,a,i,s=0;s<t.byteLength;)o=t[s++],a=t[s++],i=t[s++],r+=yr.charAt(o>>2),r+=yr.charAt((o&3)<<4|a>>4),isNaN(a)?r+="==":(r+=yr.charAt((a&15)<<2|i>>6),r+=isNaN(i)?"=":yr.charAt(i&63)),e&&r.length>e&&(n+=r.substr(0,e)+`\r
`,r=r.substr(e));return n+=r,n};E.binary.base64.decode=function(t,e,r){var n=e;n||(n=new Uint8Array(Math.ceil(t.length/4)*3)),t=t.replace(/[^A-Za-z0-9\+\/\=]/g,""),r=r||0;for(var o,a,i,s,l=0,c=r;l<t.length;)o=xr[t.charCodeAt(l++)-43],a=xr[t.charCodeAt(l++)-43],i=xr[t.charCodeAt(l++)-43],s=xr[t.charCodeAt(l++)-43],n[c++]=o<<2|a>>4,i!==64&&(n[c++]=(a&15)<<4|i>>2,s!==64&&(n[c++]=(i&3)<<6|s));return e?c-r:n.subarray(0,c)};E.binary.base58.encode=function(t,e){return E.binary.baseN.encode(t,Qf,e)};E.binary.base58.decode=function(t,e){return E.binary.baseN.decode(t,Qf,e)};E.text={utf8:{},utf16:{}};E.text.utf8.encode=function(t,e,r){t=E.encodeUtf8(t);var n=e;n||(n=new Uint8Array(t.length)),r=r||0;for(var o=r,a=0;a<t.length;++a)n[o++]=t.charCodeAt(a);return e?o-r:n};E.text.utf8.decode=function(t){return E.decodeUtf8(String.fromCharCode.apply(null,t))};E.text.utf16.encode=function(t,e,r){var n=e;n||(n=new Uint8Array(t.length*2));var o=new Uint16Array(n.buffer);r=r||0;for(var a=r,i=r,s=0;s<t.length;++s)o[i++]=t.charCodeAt(s),a+=2;return e?a-r:n};E.text.utf16.decode=function(t){return String.fromCharCode.apply(null,new Uint16Array(t.buffer))};E.deflate=function(t,e,r){if(e=E.decode64(t.deflate(E.encode64(e)).rval),r){var n=2,o=e.charCodeAt(1);o&32&&(n=6),e=e.substring(n,e.length-4)}return e};E.inflate=function(t,e,r){var n=t.inflate(E.encode64(e)).rval;return n===null?null:E.decode64(n)};var bl=function(t,e,r){if(!t)throw new Error("WebStorage not available.");var n;if(r===null?n=t.removeItem(e):(r=E.encode64(JSON.stringify(r)),n=t.setItem(e,r)),typeof n<"u"&&n.rval!==!0){var o=new Error(n.error.message);throw o.id=n.error.id,o.name=n.error.name,o}},ml=function(t,e){if(!t)throw new Error("WebStorage not available.");var r=t.getItem(e);if(t.init)if(r.rval===null){if(r.error){var n=new Error(r.error.message);throw n.id=r.error.id,n.name=r.error.name,n}r=null}else r=r.rval;return r!==null&&(r=JSON.parse(E.decode64(r))),r},bB=function(t,e,r,n){var o=ml(t,e);o===null&&(o={}),o[r]=n,bl(t,e,o)},mB=function(t,e,r){var n=ml(t,e);return n!==null&&(n=r in n?n[r]:null),n},vB=function(t,e,r){var n=ml(t,e);if(n!==null&&r in n){delete n[r];var o=!0;for(var a in n){o=!1;break}o&&(n=null),bl(t,e,n)}},yB=function(t,e){bl(t,e,null)},Ya=function(t,e,r){var n=null;typeof r>"u"&&(r=["web","flash"]);var o,a=!1,i=null;for(var s in r){o=r[s];try{if(o==="flash"||o==="both"){if(e[0]===null)throw new Error("Flash local storage not available.");n=t.apply(this,e),a=o==="flash"}(o==="web"||o==="both")&&(e[0]=localStorage,n=t.apply(this,e),a=!0)}catch(l){i=l}if(a)break}if(!a)throw i;return n};E.setItem=function(t,e,r,n,o){Ya(bB,arguments,o)};E.getItem=function(t,e,r,n){return Ya(mB,arguments,n)};E.removeItem=function(t,e,r,n){Ya(vB,arguments,n)};E.clearItems=function(t,e,r){Ya(yB,arguments,r)};E.isEmpty=function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0};E.format=function(t){for(var e=/%./g,r,n,o=0,a=[],i=0;r=e.exec(t);){n=t.substring(i,e.lastIndex-2),n.length>0&&a.push(n),i=e.lastIndex;var s=r[0][1];switch(s){case"s":case"o":o<arguments.length?a.push(arguments[o+++1]):a.push("<?>");break;case"%":a.push("%");break;default:a.push("<%"+s+"?>")}}return a.push(t.substring(i)),a.join("")};E.formatNumber=function(t,e,r,n){var o=t,a=isNaN(e=Math.abs(e))?2:e,i=r===void 0?",":r,s=n===void 0?".":n,l=o<0?"-":"",c=parseInt(o=Math.abs(+o||0).toFixed(a),10)+"",d=c.length>3?c.length%3:0;return l+(d?c.substr(0,d)+s:"")+c.substr(d).replace(/(\d{3})(?=\d)/g,"$1"+s)+(a?i+Math.abs(o-c).toFixed(a).slice(2):"")};E.formatSize=function(t){return t>=1073741824?t=E.formatNumber(t/1073741824,2,".","")+" GiB":t>=1048576?t=E.formatNumber(t/1048576,2,".","")+" MiB":t>=1024?t=E.formatNumber(t/1024,0)+" KiB":t=E.formatNumber(t,0)+" bytes",t};E.bytesFromIP=function(t){return t.indexOf(".")!==-1?E.bytesFromIPv4(t):t.indexOf(":")!==-1?E.bytesFromIPv6(t):null};E.bytesFromIPv4=function(t){if(t=t.split("."),t.length!==4)return null;for(var e=E.createBuffer(),r=0;r<t.length;++r){var n=parseInt(t[r],10);if(isNaN(n))return null;e.putByte(n)}return e.getBytes()};E.bytesFromIPv6=function(t){var e=0;t=t.split(":").filter(function(i){return i.length===0&&++e,!0});for(var r=(8-t.length+e)*2,n=E.createBuffer(),o=0;o<8;++o){if(!t[o]||t[o].length===0){n.fillWithByte(0,r),r=0;continue}var a=E.hexToBytes(t[o]);a.length<2&&n.putByte(0),n.putBytes(a)}return n.getBytes()};E.bytesToIP=function(t){return t.length===4?E.bytesToIPv4(t):t.length===16?E.bytesToIPv6(t):null};E.bytesToIPv4=function(t){if(t.length!==4)return null;for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e.join(".")};E.bytesToIPv6=function(t){if(t.length!==16)return null;for(var e=[],r=[],n=0,o=0;o<t.length;o+=2){for(var a=E.bytesToHex(t[o]+t[o+1]);a[0]==="0"&&a!=="0";)a=a.substr(1);if(a==="0"){var i=r[r.length-1],s=e.length;!i||s!==i.end+1?r.push({start:s,end:s}):(i.end=s,i.end-i.start>r[n].end-r[n].start&&(n=r.length-1))}e.push(a)}if(r.length>0){var l=r[n];l.end-l.start>0&&(e.splice(l.start,l.end-l.start+1,""),l.start===0&&e.unshift(""),l.end===7&&e.push(""))}return e.join(":")};E.estimateCores=function(t,e){if(typeof t=="function"&&(e=t,t={}),t=t||{},"cores"in E&&!t.update)return e(null,E.cores);if(typeof navigator<"u"&&"hardwareConcurrency"in navigator&&navigator.hardwareConcurrency>0)return E.cores=navigator.hardwareConcurrency,e(null,E.cores);if(typeof Worker>"u")return E.cores=1,e(null,E.cores);if(typeof Blob>"u")return E.cores=2,e(null,E.cores);var r=URL.createObjectURL(new Blob(["(",(function(){self.addEventListener("message",function(i){var s=Date.now(),l=s+4;self.postMessage({st:s,et:l})})}).toString(),")()"],{type:"application/javascript"}));n([],5,16);function n(i,s,l){if(s===0){var c=Math.floor(i.reduce(function(d,u){return d+u},0)/i.length);return E.cores=Math.max(1,c),URL.revokeObjectURL(r),e(null,E.cores)}o(l,function(d,u){i.push(a(l,u)),n(i,s-1,l)})}function o(i,s){for(var l=[],c=[],d=0;d<i;++d){var u=new Worker(r);u.addEventListener("message",function(f){if(c.push(f.data),c.length===i){for(var p=0;p<i;++p)l[p].terminate();s(null,c)}}),l.push(u)}for(var d=0;d<i;++d)l[d].postMessage(d)}function a(i,s){for(var l=[],c=0;c<i;++c)for(var d=s[c],u=l[c]=[],f=0;f<i;++f)if(c!==f){var p=s[f];(d.st>p.st&&d.st<p.et||p.st>d.st&&p.st<d.et)&&u.push(f)}return l.reduce(function(h,g){return Math.max(h,g.length)},0)}};var ot=te;ot.cipher=ot.cipher||{};ot.cipher.algorithms=ot.cipher.algorithms||{};ot.cipher.createCipher=function(t,e){var r=t;if(typeof r=="string"&&(r=ot.cipher.getAlgorithm(r),r&&(r=r())),!r)throw new Error("Unsupported algorithm: "+t);return new ot.cipher.BlockCipher({algorithm:r,key:e,decrypt:!1})};ot.cipher.createDecipher=function(t,e){var r=t;if(typeof r=="string"&&(r=ot.cipher.getAlgorithm(r),r&&(r=r())),!r)throw new Error("Unsupported algorithm: "+t);return new ot.cipher.BlockCipher({algorithm:r,key:e,decrypt:!0})};ot.cipher.registerAlgorithm=function(t,e){t=t.toUpperCase(),ot.cipher.algorithms[t]=e};ot.cipher.getAlgorithm=function(t){return t=t.toUpperCase(),t in ot.cipher.algorithms?ot.cipher.algorithms[t]:null};var vl=ot.cipher.BlockCipher=function(t){this.algorithm=t.algorithm,this.mode=this.algorithm.mode,this.blockSize=this.mode.blockSize,this._finish=!1,this._input=null,this.output=null,this._op=t.decrypt?this.mode.decrypt:this.mode.encrypt,this._decrypt=t.decrypt,this.algorithm.initialize(t)};vl.prototype.start=function(t){t=t||{};var e={};for(var r in t)e[r]=t[r];e.decrypt=this._decrypt,this._finish=!1,this._input=ot.util.createBuffer(),this.output=t.output||ot.util.createBuffer(),this.mode.start(e)};vl.prototype.update=function(t){for(t&&this._input.putBuffer(t);!this._op.call(this.mode,this._input,this.output,this._finish)&&!this._finish;);this._input.compact()};vl.prototype.finish=function(t){t&&(this.mode.name==="ECB"||this.mode.name==="CBC")&&(this.mode.pad=function(r){return t(this.blockSize,r,!1)},this.mode.unpad=function(r){return t(this.blockSize,r,!0)});var e={};return e.decrypt=this._decrypt,e.overflow=this._input.length()%this.blockSize,!(!this._decrypt&&this.mode.pad&&!this.mode.pad(this._input,e)||(this._finish=!0,this.update(),this._decrypt&&this.mode.unpad&&!this.mode.unpad(this.output,e))||this.mode.afterFinish&&!this.mode.afterFinish(this.output,e))};var nt=te;nt.cipher=nt.cipher||{};var ae=nt.cipher.modes=nt.cipher.modes||{};ae.ecb=function(t){t=t||{},this.name="ECB",this.cipher=t.cipher,this.blockSize=t.blockSize||16,this._ints=this.blockSize/4,this._inBlock=new Array(this._ints),this._outBlock=new Array(this._ints)};ae.ecb.prototype.start=function(t){};ae.ecb.prototype.encrypt=function(t,e,r){if(t.length()<this.blockSize&&!(r&&t.length()>0))return!0;for(var n=0;n<this._ints;++n)this._inBlock[n]=t.getInt32();this.cipher.encrypt(this._inBlock,this._outBlock);for(var n=0;n<this._ints;++n)e.putInt32(this._outBlock[n])};ae.ecb.prototype.decrypt=function(t,e,r){if(t.length()<this.blockSize&&!(r&&t.length()>0))return!0;for(var n=0;n<this._ints;++n)this._inBlock[n]=t.getInt32();this.cipher.decrypt(this._inBlock,this._outBlock);for(var n=0;n<this._ints;++n)e.putInt32(this._outBlock[n])};ae.ecb.prototype.pad=function(t,e){var r=t.length()===this.blockSize?this.blockSize:this.blockSize-t.length();return t.fillWithByte(r,r),!0};ae.ecb.prototype.unpad=function(t,e){if(e.overflow>0)return!1;var r=t.length(),n=t.at(r-1);return n>this.blockSize<<2?!1:(t.truncate(n),!0)};ae.cbc=function(t){t=t||{},this.name="CBC",this.cipher=t.cipher,this.blockSize=t.blockSize||16,this._ints=this.blockSize/4,this._inBlock=new Array(this._ints),this._outBlock=new Array(this._ints)};ae.cbc.prototype.start=function(t){if(t.iv===null){if(!this._prev)throw new Error("Invalid IV parameter.");this._iv=this._prev.slice(0)}else if("iv"in t)this._iv=Xa(t.iv,this.blockSize),this._prev=this._iv.slice(0);else throw new Error("Invalid IV parameter.")};ae.cbc.prototype.encrypt=function(t,e,r){if(t.length()<this.blockSize&&!(r&&t.length()>0))return!0;for(var n=0;n<this._ints;++n)this._inBlock[n]=this._prev[n]^t.getInt32();this.cipher.encrypt(this._inBlock,this._outBlock);for(var n=0;n<this._ints;++n)e.putInt32(this._outBlock[n]);this._prev=this._outBlock};ae.cbc.prototype.decrypt=function(t,e,r){if(t.length()<this.blockSize&&!(r&&t.length()>0))return!0;for(var n=0;n<this._ints;++n)this._inBlock[n]=t.getInt32();this.cipher.decrypt(this._inBlock,this._outBlock);for(var n=0;n<this._ints;++n)e.putInt32(this._prev[n]^this._outBlock[n]);this._prev=this._inBlock.slice(0)};ae.cbc.prototype.pad=function(t,e){var r=t.length()===this.blockSize?this.blockSize:this.blockSize-t.length();return t.fillWithByte(r,r),!0};ae.cbc.prototype.unpad=function(t,e){if(e.overflow>0)return!1;var r=t.length(),n=t.at(r-1);return n>this.blockSize<<2?!1:(t.truncate(n),!0)};ae.cfb=function(t){t=t||{},this.name="CFB",this.cipher=t.cipher,this.blockSize=t.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=new Array(this._ints),this._partialBlock=new Array(this._ints),this._partialOutput=nt.util.createBuffer(),this._partialBytes=0};ae.cfb.prototype.start=function(t){if(!("iv"in t))throw new Error("Invalid IV parameter.");this._iv=Xa(t.iv,this.blockSize),this._inBlock=this._iv.slice(0),this._partialBytes=0};ae.cfb.prototype.encrypt=function(t,e,r){var n=t.length();if(n===0)return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),this._partialBytes===0&&n>=this.blockSize){for(var o=0;o<this._ints;++o)this._inBlock[o]=t.getInt32()^this._outBlock[o],e.putInt32(this._inBlock[o]);return}var a=(this.blockSize-n)%this.blockSize;a>0&&(a=this.blockSize-a),this._partialOutput.clear();for(var o=0;o<this._ints;++o)this._partialBlock[o]=t.getInt32()^this._outBlock[o],this._partialOutput.putInt32(this._partialBlock[o]);if(a>0)t.read-=this.blockSize;else for(var o=0;o<this._ints;++o)this._inBlock[o]=this._partialBlock[o];if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),a>0&&!r)return e.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=a,!0;e.putBytes(this._partialOutput.getBytes(n-this._partialBytes)),this._partialBytes=0};ae.cfb.prototype.decrypt=function(t,e,r){var n=t.length();if(n===0)return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),this._partialBytes===0&&n>=this.blockSize){for(var o=0;o<this._ints;++o)this._inBlock[o]=t.getInt32(),e.putInt32(this._inBlock[o]^this._outBlock[o]);return}var a=(this.blockSize-n)%this.blockSize;a>0&&(a=this.blockSize-a),this._partialOutput.clear();for(var o=0;o<this._ints;++o)this._partialBlock[o]=t.getInt32(),this._partialOutput.putInt32(this._partialBlock[o]^this._outBlock[o]);if(a>0)t.read-=this.blockSize;else for(var o=0;o<this._ints;++o)this._inBlock[o]=this._partialBlock[o];if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),a>0&&!r)return e.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=a,!0;e.putBytes(this._partialOutput.getBytes(n-this._partialBytes)),this._partialBytes=0};ae.ofb=function(t){t=t||{},this.name="OFB",this.cipher=t.cipher,this.blockSize=t.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=new Array(this._ints),this._partialOutput=nt.util.createBuffer(),this._partialBytes=0};ae.ofb.prototype.start=function(t){if(!("iv"in t))throw new Error("Invalid IV parameter.");this._iv=Xa(t.iv,this.blockSize),this._inBlock=this._iv.slice(0),this._partialBytes=0};ae.ofb.prototype.encrypt=function(t,e,r){var n=t.length();if(t.length()===0)return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),this._partialBytes===0&&n>=this.blockSize){for(var o=0;o<this._ints;++o)e.putInt32(t.getInt32()^this._outBlock[o]),this._inBlock[o]=this._outBlock[o];return}var a=(this.blockSize-n)%this.blockSize;a>0&&(a=this.blockSize-a),this._partialOutput.clear();for(var o=0;o<this._ints;++o)this._partialOutput.putInt32(t.getInt32()^this._outBlock[o]);if(a>0)t.read-=this.blockSize;else for(var o=0;o<this._ints;++o)this._inBlock[o]=this._outBlock[o];if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),a>0&&!r)return e.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=a,!0;e.putBytes(this._partialOutput.getBytes(n-this._partialBytes)),this._partialBytes=0};ae.ofb.prototype.decrypt=ae.ofb.prototype.encrypt;ae.ctr=function(t){t=t||{},this.name="CTR",this.cipher=t.cipher,this.blockSize=t.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=new Array(this._ints),this._partialOutput=nt.util.createBuffer(),this._partialBytes=0};ae.ctr.prototype.start=function(t){if(!("iv"in t))throw new Error("Invalid IV parameter.");this._iv=Xa(t.iv,this.blockSize),this._inBlock=this._iv.slice(0),this._partialBytes=0};ae.ctr.prototype.encrypt=function(t,e,r){var n=t.length();if(n===0)return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),this._partialBytes===0&&n>=this.blockSize)for(var o=0;o<this._ints;++o)e.putInt32(t.getInt32()^this._outBlock[o]);else{var a=(this.blockSize-n)%this.blockSize;a>0&&(a=this.blockSize-a),this._partialOutput.clear();for(var o=0;o<this._ints;++o)this._partialOutput.putInt32(t.getInt32()^this._outBlock[o]);if(a>0&&(t.read-=this.blockSize),this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),a>0&&!r)return e.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=a,!0;e.putBytes(this._partialOutput.getBytes(n-this._partialBytes)),this._partialBytes=0}Qa(this._inBlock)};ae.ctr.prototype.decrypt=ae.ctr.prototype.encrypt;ae.gcm=function(t){t=t||{},this.name="GCM",this.cipher=t.cipher,this.blockSize=t.blockSize||16,this._ints=this.blockSize/4,this._inBlock=new Array(this._ints),this._outBlock=new Array(this._ints),this._partialOutput=nt.util.createBuffer(),this._partialBytes=0,this._R=3774873600};ae.gcm.prototype.start=function(t){if(!("iv"in t))throw new Error("Invalid IV parameter.");var e=nt.util.createBuffer(t.iv);this._cipherLength=0;var r;if("additionalData"in t?r=nt.util.createBuffer(t.additionalData):r=nt.util.createBuffer(),"tagLength"in t?this._tagLength=t.tagLength:this._tagLength=128,this._tag=null,t.decrypt&&(this._tag=nt.util.createBuffer(t.tag).getBytes(),this._tag.length!==this._tagLength/8))throw new Error("Authentication tag does not match tag length.");this._hashBlock=new Array(this._ints),this.tag=null,this._hashSubkey=new Array(this._ints),this.cipher.encrypt([0,0,0,0],this._hashSubkey),this.componentBits=4,this._m=this.generateHashTable(this._hashSubkey,this.componentBits);var n=e.length();if(n===12)this._j0=[e.getInt32(),e.getInt32(),e.getInt32(),1];else{for(this._j0=[0,0,0,0];e.length()>0;)this._j0=this.ghash(this._hashSubkey,this._j0,[e.getInt32(),e.getInt32(),e.getInt32(),e.getInt32()]);this._j0=this.ghash(this._hashSubkey,this._j0,[0,0].concat(ks(n*8)))}this._inBlock=this._j0.slice(0),Qa(this._inBlock),this._partialBytes=0,r=nt.util.createBuffer(r),this._aDataLength=ks(r.length()*8);var o=r.length()%this.blockSize;for(o&&r.fillWithByte(0,this.blockSize-o),this._s=[0,0,0,0];r.length()>0;)this._s=this.ghash(this._hashSubkey,this._s,[r.getInt32(),r.getInt32(),r.getInt32(),r.getInt32()])};ae.gcm.prototype.encrypt=function(t,e,r){var n=t.length();if(n===0)return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),this._partialBytes===0&&n>=this.blockSize){for(var o=0;o<this._ints;++o)e.putInt32(this._outBlock[o]^=t.getInt32());this._cipherLength+=this.blockSize}else{var a=(this.blockSize-n)%this.blockSize;a>0&&(a=this.blockSize-a),this._partialOutput.clear();for(var o=0;o<this._ints;++o)this._partialOutput.putInt32(t.getInt32()^this._outBlock[o]);if(a<=0||r){if(r){var i=n%this.blockSize;this._cipherLength+=i,this._partialOutput.truncate(this.blockSize-i)}else this._cipherLength+=this.blockSize;for(var o=0;o<this._ints;++o)this._outBlock[o]=this._partialOutput.getInt32();this._partialOutput.read-=this.blockSize}if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),a>0&&!r)return t.read-=this.blockSize,e.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=a,!0;e.putBytes(this._partialOutput.getBytes(n-this._partialBytes)),this._partialBytes=0}this._s=this.ghash(this._hashSubkey,this._s,this._outBlock),Qa(this._inBlock)};ae.gcm.prototype.decrypt=function(t,e,r){var n=t.length();if(n<this.blockSize&&!(r&&n>0))return!0;this.cipher.encrypt(this._inBlock,this._outBlock),Qa(this._inBlock),this._hashBlock[0]=t.getInt32(),this._hashBlock[1]=t.getInt32(),this._hashBlock[2]=t.getInt32(),this._hashBlock[3]=t.getInt32(),this._s=this.ghash(this._hashSubkey,this._s,this._hashBlock);for(var o=0;o<this._ints;++o)e.putInt32(this._outBlock[o]^this._hashBlock[o]);n<this.blockSize?this._cipherLength+=n%this.blockSize:this._cipherLength+=this.blockSize};ae.gcm.prototype.afterFinish=function(t,e){var r=!0;e.decrypt&&e.overflow&&t.truncate(this.blockSize-e.overflow),this.tag=nt.util.createBuffer();var n=this._aDataLength.concat(ks(this._cipherLength*8));this._s=this.ghash(this._hashSubkey,this._s,n);var o=[];this.cipher.encrypt(this._j0,o);for(var a=0;a<this._ints;++a)this.tag.putInt32(this._s[a]^o[a]);return this.tag.truncate(this.tag.length()%(this._tagLength/8)),e.decrypt&&this.tag.bytes()!==this._tag&&(r=!1),r};ae.gcm.prototype.multiply=function(t,e){for(var r=[0,0,0,0],n=e.slice(0),o=0;o<128;++o){var a=t[o/32|0]&1<<31-o%32;a&&(r[0]^=n[0],r[1]^=n[1],r[2]^=n[2],r[3]^=n[3]),this.pow(n,n)}return r};ae.gcm.prototype.pow=function(t,e){for(var r=t[3]&1,n=3;n>0;--n)e[n]=t[n]>>>1|(t[n-1]&1)<<31;e[0]=t[0]>>>1,r&&(e[0]^=this._R)};ae.gcm.prototype.tableMultiply=function(t){for(var e=[0,0,0,0],r=0;r<32;++r){var n=r/8|0,o=t[n]>>>(7-r%8)*4&15,a=this._m[r][o];e[0]^=a[0],e[1]^=a[1],e[2]^=a[2],e[3]^=a[3]}return e};ae.gcm.prototype.ghash=function(t,e,r){return e[0]^=r[0],e[1]^=r[1],e[2]^=r[2],e[3]^=r[3],this.tableMultiply(e)};ae.gcm.prototype.generateHashTable=function(t,e){for(var r=8/e,n=4*r,o=16*r,a=new Array(o),i=0;i<o;++i){var s=[0,0,0,0],l=i/n|0,c=(n-1-i%n)*e;s[l]=1<<e-1<<c,a[i]=this.generateSubHashTable(this.multiply(s,t),e)}return a};ae.gcm.prototype.generateSubHashTable=function(t,e){var r=1<<e,n=r>>>1,o=new Array(r);o[n]=t.slice(0);for(var a=n>>>1;a>0;)this.pow(o[2*a],o[a]=[]),a>>=1;for(a=2;a<n;){for(var i=1;i<a;++i){var s=o[a],l=o[i];o[a+i]=[s[0]^l[0],s[1]^l[1],s[2]^l[2],s[3]^l[3]]}a*=2}for(o[0]=[0,0,0,0],a=n+1;a<r;++a){var c=o[a^n];o[a]=[t[0]^c[0],t[1]^c[1],t[2]^c[2],t[3]^c[3]]}return o};function Xa(t,e){if(typeof t=="string"&&(t=nt.util.createBuffer(t)),nt.util.isArray(t)&&t.length>4){var r=t;t=nt.util.createBuffer();for(var n=0;n<r.length;++n)t.putByte(r[n])}if(t.length()<e)throw new Error("Invalid IV length; got "+t.length()+" bytes and expected "+e+" bytes.");if(!nt.util.isArray(t)){for(var o=[],a=e/4,n=0;n<a;++n)o.push(t.getInt32());t=o}return t}function Qa(t){t[t.length-1]=t[t.length-1]+1&4294967295}function ks(t){return[t/4294967296|0,t&4294967295]}var Se=te;Se.aes=Se.aes||{};Se.aes.startEncrypting=function(t,e,r,n){var o=Za({key:t,output:r,decrypt:!1,mode:n});return o.start(e),o};Se.aes.createEncryptionCipher=function(t,e){return Za({key:t,output:null,decrypt:!1,mode:e})};Se.aes.startDecrypting=function(t,e,r,n){var o=Za({key:t,output:r,decrypt:!0,mode:n});return o.start(e),o};Se.aes.createDecryptionCipher=function(t,e){return Za({key:t,output:null,decrypt:!0,mode:e})};Se.aes.Algorithm=function(t,e){yl||Jf();var r=this;r.name=t,r.mode=new e({blockSize:16,cipher:{encrypt:function(n,o){return Ss(r._w,n,o,!1)},decrypt:function(n,o){return Ss(r._w,n,o,!0)}}}),r._init=!1};Se.aes.Algorithm.prototype.initialize=function(t){if(!this._init){var e=t.key,r;if(typeof e=="string"&&(e.length===16||e.length===24||e.length===32))e=Se.util.createBuffer(e);else if(Se.util.isArray(e)&&(e.length===16||e.length===24||e.length===32)){r=e,e=Se.util.createBuffer();for(var n=0;n<r.length;++n)e.putByte(r[n])}if(!Se.util.isArray(e)){r=e,e=[];var o=r.length();if(o===16||o===24||o===32){o=o>>>2;for(var n=0;n<o;++n)e.push(r.getInt32())}}if(!Se.util.isArray(e)||!(e.length===4||e.length===6||e.length===8))throw new Error("Invalid key parameter.");var a=this.mode.name,i=["CFB","OFB","CTR","GCM"].indexOf(a)!==-1;this._w=ep(e,t.decrypt&&!i),this._init=!0}};Se.aes._expandKey=function(t,e){return yl||Jf(),ep(t,e)};Se.aes._updateBlock=Ss;Nn("AES-ECB",Se.cipher.modes.ecb);Nn("AES-CBC",Se.cipher.modes.cbc);Nn("AES-CFB",Se.cipher.modes.cfb);Nn("AES-OFB",Se.cipher.modes.ofb);Nn("AES-CTR",Se.cipher.modes.ctr);Nn("AES-GCM",Se.cipher.modes.gcm);function Nn(t,e){var r=function(){return new Se.aes.Algorithm(t,e)};Se.cipher.registerAlgorithm(t,r)}var yl=!1,fn=4,ct,ws,Zf,Hr,Nt;function Jf(){yl=!0,Zf=[0,1,2,4,8,16,32,64,128,27,54];for(var t=new Array(256),e=0;e<128;++e)t[e]=e<<1,t[e+128]=e+128<<1^283;ct=new Array(256),ws=new Array(256),Hr=new Array(4),Nt=new Array(4);for(var e=0;e<4;++e)Hr[e]=new Array(256),Nt[e]=new Array(256);for(var r=0,n=0,o,a,i,s,l,c,d,e=0;e<256;++e){s=n^n<<1^n<<2^n<<3^n<<4,s=s>>8^s&255^99,ct[r]=s,ws[s]=r,l=t[s],o=t[r],a=t[o],i=t[a],c=l<<24^s<<16^s<<8^(s^l),d=(o^a^i)<<24^(r^i)<<16^(r^a^i)<<8^(r^o^i);for(var u=0;u<4;++u)Hr[u][r]=c,Nt[u][s]=d,c=c<<24|c>>>8,d=d<<24|d>>>8;r===0?r=n=1:(r=o^t[t[t[o^i]]],n^=t[t[n]])}}function ep(t,e){for(var r=t.slice(0),n,o=1,a=r.length,i=a+6+1,s=fn*i,l=a;l<s;++l)n=r[l-1],l%a===0?(n=ct[n>>>16&255]<<24^ct[n>>>8&255]<<16^ct[n&255]<<8^ct[n>>>24]^Zf[o]<<24,o++):a>6&&l%a===4&&(n=ct[n>>>24]<<24^ct[n>>>16&255]<<16^ct[n>>>8&255]<<8^ct[n&255]),r[l]=r[l-a]^n;if(e){var c,d=Nt[0],u=Nt[1],f=Nt[2],p=Nt[3],h=r.slice(0);s=r.length;for(var l=0,g=s-fn;l<s;l+=fn,g-=fn)if(l===0||l===s-fn)h[l]=r[g],h[l+1]=r[g+3],h[l+2]=r[g+2],h[l+3]=r[g+1];else for(var b=0;b<fn;++b)c=r[g+b],h[l+(3&-b)]=d[ct[c>>>24]]^u[ct[c>>>16&255]]^f[ct[c>>>8&255]]^p[ct[c&255]];r=h}return r}function Ss(t,e,r,n){var o=t.length/4-1,a,i,s,l,c;n?(a=Nt[0],i=Nt[1],s=Nt[2],l=Nt[3],c=ws):(a=Hr[0],i=Hr[1],s=Hr[2],l=Hr[3],c=ct);var d,u,f,p,h,g,b;d=e[0]^t[0],u=e[n?3:1]^t[1],f=e[2]^t[2],p=e[n?1:3]^t[3];for(var x=3,C=1;C<o;++C)h=a[d>>>24]^i[u>>>16&255]^s[f>>>8&255]^l[p&255]^t[++x],g=a[u>>>24]^i[f>>>16&255]^s[p>>>8&255]^l[d&255]^t[++x],b=a[f>>>24]^i[p>>>16&255]^s[d>>>8&255]^l[u&255]^t[++x],p=a[p>>>24]^i[d>>>16&255]^s[u>>>8&255]^l[f&255]^t[++x],d=h,u=g,f=b;r[0]=c[d>>>24]<<24^c[u>>>16&255]<<16^c[f>>>8&255]<<8^c[p&255]^t[++x],r[n?3:1]=c[u>>>24]<<24^c[f>>>16&255]<<16^c[p>>>8&255]<<8^c[d&255]^t[++x],r[2]=c[f>>>24]<<24^c[p>>>16&255]<<16^c[d>>>8&255]<<8^c[u&255]^t[++x],r[n?1:3]=c[p>>>24]<<24^c[d>>>16&255]<<16^c[u>>>8&255]<<8^c[f&255]^t[++x]}function Za(t){t=t||{};var e=(t.mode||"CBC").toUpperCase(),r="AES-"+e,n;t.decrypt?n=Se.cipher.createDecipher(r,t.key):n=Se.cipher.createCipher(r,t.key);var o=n.start;return n.start=function(a,i){var s=null;i instanceof Se.util.ByteBuffer&&(s=i,i={}),i=i||{},i.output=s,i.iv=a,o.call(n,i)},n}var io=te;io.pki=io.pki||{};var Es=io.pki.oids=io.oids=io.oids||{};function P(t,e){Es[t]=e,Es[e]=t}function me(t,e){Es[t]=e}P("1.2.840.113549.1.1.1","rsaEncryption");P("1.2.840.113549.1.1.4","md5WithRSAEncryption");P("1.2.840.113549.1.1.5","sha1WithRSAEncryption");P("1.2.840.113549.1.1.7","RSAES-OAEP");P("1.2.840.113549.1.1.8","mgf1");P("1.2.840.113549.1.1.9","pSpecified");P("1.2.840.113549.1.1.10","RSASSA-PSS");P("1.2.840.113549.1.1.11","sha256WithRSAEncryption");P("1.2.840.113549.1.1.12","sha384WithRSAEncryption");P("1.2.840.113549.1.1.13","sha512WithRSAEncryption");P("1.3.101.112","EdDSA25519");P("1.2.840.10040.4.3","dsa-with-sha1");P("1.3.14.3.2.7","desCBC");P("1.3.14.3.2.26","sha1");P("1.3.14.3.2.29","sha1WithRSASignature");P("2.16.840.1.101.3.4.2.1","sha256");P("2.16.840.1.101.3.4.2.2","sha384");P("2.16.840.1.101.3.4.2.3","sha512");P("2.16.840.1.101.3.4.2.4","sha224");P("2.16.840.1.101.3.4.2.5","sha512-224");P("2.16.840.1.101.3.4.2.6","sha512-256");P("1.2.840.113549.2.2","md2");P("1.2.840.113549.2.5","md5");P("1.2.840.113549.1.7.1","data");P("1.2.840.113549.1.7.2","signedData");P("1.2.840.113549.1.7.3","envelopedData");P("1.2.840.113549.1.7.4","signedAndEnvelopedData");P("1.2.840.113549.1.7.5","digestedData");P("1.2.840.113549.1.7.6","encryptedData");P("1.2.840.113549.1.9.1","emailAddress");P("1.2.840.113549.1.9.2","unstructuredName");P("1.2.840.113549.1.9.3","contentType");P("1.2.840.113549.1.9.4","messageDigest");P("1.2.840.113549.1.9.5","signingTime");P("1.2.840.113549.1.9.6","counterSignature");P("1.2.840.113549.1.9.7","challengePassword");P("1.2.840.113549.1.9.8","unstructuredAddress");P("1.2.840.113549.1.9.14","extensionRequest");P("1.2.840.113549.1.9.20","friendlyName");P("1.2.840.113549.1.9.21","localKeyId");P("1.2.840.113549.1.9.22.1","x509Certificate");P("1.2.840.113549.1.12.10.1.1","keyBag");P("1.2.840.113549.1.12.10.1.2","pkcs8ShroudedKeyBag");P("1.2.840.113549.1.12.10.1.3","certBag");P("1.2.840.113549.1.12.10.1.4","crlBag");P("1.2.840.113549.1.12.10.1.5","secretBag");P("1.2.840.113549.1.12.10.1.6","safeContentsBag");P("1.2.840.113549.1.5.13","pkcs5PBES2");P("1.2.840.113549.1.5.12","pkcs5PBKDF2");P("1.2.840.113549.1.12.1.1","pbeWithSHAAnd128BitRC4");P("1.2.840.113549.1.12.1.2","pbeWithSHAAnd40BitRC4");P("1.2.840.113549.1.12.1.3","pbeWithSHAAnd3-KeyTripleDES-CBC");P("1.2.840.113549.1.12.1.4","pbeWithSHAAnd2-KeyTripleDES-CBC");P("1.2.840.113549.1.12.1.5","pbeWithSHAAnd128BitRC2-CBC");P("1.2.840.113549.1.12.1.6","pbewithSHAAnd40BitRC2-CBC");P("1.2.840.113549.2.7","hmacWithSHA1");P("1.2.840.113549.2.8","hmacWithSHA224");P("1.2.840.113549.2.9","hmacWithSHA256");P("1.2.840.113549.2.10","hmacWithSHA384");P("1.2.840.113549.2.11","hmacWithSHA512");P("1.2.840.113549.3.7","des-EDE3-CBC");P("2.16.840.1.101.3.4.1.2","aes128-CBC");P("2.16.840.1.101.3.4.1.22","aes192-CBC");P("2.16.840.1.101.3.4.1.42","aes256-CBC");P("2.5.4.3","commonName");P("2.5.4.4","surname");P("2.5.4.5","serialNumber");P("2.5.4.6","countryName");P("2.5.4.7","localityName");P("2.5.4.8","stateOrProvinceName");P("2.5.4.9","streetAddress");P("2.5.4.10","organizationName");P("2.5.4.11","organizationalUnitName");P("2.5.4.12","title");P("2.5.4.13","description");P("2.5.4.15","businessCategory");P("2.5.4.17","postalCode");P("2.5.4.42","givenName");P("1.3.6.1.4.1.311.60.2.1.2","jurisdictionOfIncorporationStateOrProvinceName");P("1.3.6.1.4.1.311.60.2.1.3","jurisdictionOfIncorporationCountryName");P("2.16.840.1.113730.1.1","nsCertType");P("2.16.840.1.113730.1.13","nsComment");me("2.5.29.1","authorityKeyIdentifier");me("2.5.29.2","keyAttributes");me("2.5.29.3","certificatePolicies");me("2.5.29.4","keyUsageRestriction");me("2.5.29.5","policyMapping");me("2.5.29.6","subtreesConstraint");me("2.5.29.7","subjectAltName");me("2.5.29.8","issuerAltName");me("2.5.29.9","subjectDirectoryAttributes");me("2.5.29.10","basicConstraints");me("2.5.29.11","nameConstraints");me("2.5.29.12","policyConstraints");me("2.5.29.13","basicConstraints");P("2.5.29.14","subjectKeyIdentifier");P("2.5.29.15","keyUsage");me("2.5.29.16","privateKeyUsagePeriod");P("2.5.29.17","subjectAltName");P("2.5.29.18","issuerAltName");P("2.5.29.19","basicConstraints");me("2.5.29.20","cRLNumber");me("2.5.29.21","cRLReason");me("2.5.29.22","expirationDate");me("2.5.29.23","instructionCode");me("2.5.29.24","invalidityDate");me("2.5.29.25","cRLDistributionPoints");me("2.5.29.26","issuingDistributionPoint");me("2.5.29.27","deltaCRLIndicator");me("2.5.29.28","issuingDistributionPoint");me("2.5.29.29","certificateIssuer");me("2.5.29.30","nameConstraints");P("2.5.29.31","cRLDistributionPoints");P("2.5.29.32","certificatePolicies");me("2.5.29.33","policyMappings");me("2.5.29.34","policyConstraints");P("2.5.29.35","authorityKeyIdentifier");me("2.5.29.36","policyConstraints");P("2.5.29.37","extKeyUsage");me("2.5.29.46","freshestCRL");me("2.5.29.54","inhibitAnyPolicy");P("1.3.6.1.4.1.11129.2.4.2","timestampList");P("1.3.6.1.5.5.7.1.1","authorityInfoAccess");P("1.3.6.1.5.5.7.3.1","serverAuth");P("1.3.6.1.5.5.7.3.2","clientAuth");P("1.3.6.1.5.5.7.3.3","codeSigning");P("1.3.6.1.5.5.7.3.4","emailProtection");P("1.3.6.1.5.5.7.3.8","timeStamping");var _e=te,z=_e.asn1=_e.asn1||{};z.Class={UNIVERSAL:0,APPLICATION:64,CONTEXT_SPECIFIC:128,PRIVATE:192};z.Type={NONE:0,BOOLEAN:1,INTEGER:2,BITSTRING:3,OCTETSTRING:4,NULL:5,OID:6,ODESC:7,EXTERNAL:8,REAL:9,ENUMERATED:10,EMBEDDED:11,UTF8:12,ROID:13,SEQUENCE:16,SET:17,PRINTABLESTRING:19,IA5STRING:22,UTCTIME:23,GENERALIZEDTIME:24,BMPSTRING:30};z.create=function(t,e,r,n,o){if(_e.util.isArray(n)){for(var a=[],i=0;i<n.length;++i)n[i]!==void 0&&a.push(n[i]);n=a}var s={tagClass:t,type:e,constructed:r,composed:r||_e.util.isArray(n),value:n};return o&&"bitStringContents"in o&&(s.bitStringContents=o.bitStringContents,s.original=z.copy(s)),s};z.copy=function(t,e){var r;if(_e.util.isArray(t)){r=[];for(var n=0;n<t.length;++n)r.push(z.copy(t[n],e));return r}return typeof t=="string"?t:(r={tagClass:t.tagClass,type:t.type,constructed:t.constructed,composed:t.composed,value:z.copy(t.value,e)},e&&!e.excludeBitStringContents&&(r.bitStringContents=t.bitStringContents),r)};z.equals=function(t,e,r){if(_e.util.isArray(t)){if(!_e.util.isArray(e)||t.length!==e.length)return!1;for(var n=0;n<t.length;++n)if(!z.equals(t[n],e[n]))return!1;return!0}if(typeof t!=typeof e)return!1;if(typeof t=="string")return t===e;var o=t.tagClass===e.tagClass&&t.type===e.type&&t.constructed===e.constructed&&t.composed===e.composed&&z.equals(t.value,e.value);return r&&r.includeBitStringContents&&(o=o&&t.bitStringContents===e.bitStringContents),o};z.getBerValueLength=function(t){var e=t.getByte();if(e!==128){var r,n=e&128;return n?r=t.getInt((e&127)<<3):r=e,r}};function qn(t,e,r){if(r>e){var n=new Error("Too few bytes to parse DER.");throw n.available=t.length(),n.remaining=e,n.requested=r,n}}var xB=function(t,e){var r=t.getByte();if(e--,r!==128){var n,o=r&128;if(!o)n=r;else{var a=r&127;qn(t,e,a),n=t.getInt(a<<3)}if(n<0)throw new Error("Negative length: "+n);return n}};z.fromDer=function(t,e){e===void 0&&(e={strict:!0,parseAllBytes:!0,decodeBitStrings:!0}),typeof e=="boolean"&&(e={strict:e,parseAllBytes:!0,decodeBitStrings:!0}),"strict"in e||(e.strict=!0),"parseAllBytes"in e||(e.parseAllBytes=!0),"decodeBitStrings"in e||(e.decodeBitStrings=!0),typeof t=="string"&&(t=_e.util.createBuffer(t));var r=t.length(),n=ia(t,t.length(),0,e);if(e.parseAllBytes&&t.length()!==0){var o=new Error("Unparsed DER bytes remain after ASN.1 parsing.");throw o.byteCount=r,o.remaining=t.length(),o}return n};function ia(t,e,r,n){var o;qn(t,e,2);var a=t.getByte();e--;var i=a&192,s=a&31;o=t.length();var l=xB(t,e);if(e-=o-t.length(),l!==void 0&&l>e){if(n.strict){var c=new Error("Too few bytes to read ASN.1 value.");throw c.available=t.length(),c.remaining=e,c.requested=l,c}l=e}var d,u,f=(a&32)===32;if(f)if(d=[],l===void 0)for(;;){if(qn(t,e,2),t.bytes(2)==="\0\0"){t.getBytes(2),e-=2;break}o=t.length(),d.push(ia(t,e,r+1,n)),e-=o-t.length()}else for(;l>0;)o=t.length(),d.push(ia(t,l,r+1,n)),e-=o-t.length(),l-=o-t.length();if(d===void 0&&i===z.Class.UNIVERSAL&&s===z.Type.BITSTRING&&(u=t.bytes(l)),d===void 0&&n.decodeBitStrings&&i===z.Class.UNIVERSAL&&s===z.Type.BITSTRING&&l>1){var p=t.read,h=e,g=0;if(s===z.Type.BITSTRING&&(qn(t,e,1),g=t.getByte(),e--),g===0)try{o=t.length();var b={strict:!0,decodeBitStrings:!0},x=ia(t,e,r+1,b),C=o-t.length();e-=C,s==z.Type.BITSTRING&&C++;var k=x.tagClass;C===l&&(k===z.Class.UNIVERSAL||k===z.Class.CONTEXT_SPECIFIC)&&(d=[x])}catch{}d===void 0&&(t.read=p,e=h)}if(d===void 0){if(l===void 0){if(n.strict)throw new Error("Non-constructed ASN.1 object of indefinite length.");l=e}if(s===z.Type.BMPSTRING)for(d="";l>0;l-=2)qn(t,e,2),d+=String.fromCharCode(t.getInt16()),e-=2;else d=t.getBytes(l),e-=l}var B=u===void 0?null:{bitStringContents:u};return z.create(i,s,f,d,B)}z.toDer=function(t){var e=_e.util.createBuffer(),r=t.tagClass|t.type,n=_e.util.createBuffer(),o=!1;if("bitStringContents"in t&&(o=!0,t.original&&(o=z.equals(t,t.original))),o)n.putBytes(t.bitStringContents);else if(t.composed){t.constructed?r|=32:n.putByte(0);for(var a=0;a<t.value.length;++a)t.value[a]!==void 0&&n.putBuffer(z.toDer(t.value[a]))}else if(t.type===z.Type.BMPSTRING)for(var a=0;a<t.value.length;++a)n.putInt16(t.value.charCodeAt(a));else t.type===z.Type.INTEGER&&t.value.length>1&&(t.value.charCodeAt(0)===0&&!(t.value.charCodeAt(1)&128)||t.value.charCodeAt(0)===255&&(t.value.charCodeAt(1)&128)===128)?n.putBytes(t.value.substr(1)):n.putBytes(t.value);if(e.putByte(r),n.length()<=127)e.putByte(n.length()&127);else{var i=n.length(),s="";do s+=String.fromCharCode(i&255),i=i>>>8;while(i>0);e.putByte(s.length|128);for(var a=s.length-1;a>=0;--a)e.putByte(s.charCodeAt(a))}return e.putBuffer(n),e};z.oidToDer=function(t){var e=t.split("."),r=_e.util.createBuffer();r.putByte(40*parseInt(e[0],10)+parseInt(e[1],10));for(var n,o,a,i,s=2;s<e.length;++s){n=!0,o=[],a=parseInt(e[s],10);do i=a&127,a=a>>>7,n||(i|=128),o.push(i),n=!1;while(a>0);for(var l=o.length-1;l>=0;--l)r.putByte(o[l])}return r};z.derToOid=function(t){var e;typeof t=="string"&&(t=_e.util.createBuffer(t));var r=t.getByte();e=Math.floor(r/40)+"."+r%40;for(var n=0;t.length()>0;)r=t.getByte(),n=n<<7,r&128?n+=r&127:(e+="."+(n+r),n=0);return e};z.utcTimeToDate=function(t){var e=new Date,r=parseInt(t.substr(0,2),10);r=r>=50?1900+r:2e3+r;var n=parseInt(t.substr(2,2),10)-1,o=parseInt(t.substr(4,2),10),a=parseInt(t.substr(6,2),10),i=parseInt(t.substr(8,2),10),s=0;if(t.length>11){var l=t.charAt(10),c=10;l!=="+"&&l!=="-"&&(s=parseInt(t.substr(10,2),10),c+=2)}if(e.setUTCFullYear(r,n,o),e.setUTCHours(a,i,s,0),c&&(l=t.charAt(c),l==="+"||l==="-")){var d=parseInt(t.substr(c+1,2),10),u=parseInt(t.substr(c+4,2),10),f=d*60+u;f*=6e4,l==="+"?e.setTime(+e-f):e.setTime(+e+f)}return e};z.generalizedTimeToDate=function(t){var e=new Date,r=parseInt(t.substr(0,4),10),n=parseInt(t.substr(4,2),10)-1,o=parseInt(t.substr(6,2),10),a=parseInt(t.substr(8,2),10),i=parseInt(t.substr(10,2),10),s=parseInt(t.substr(12,2),10),l=0,c=0,d=!1;t.charAt(t.length-1)==="Z"&&(d=!0);var u=t.length-5,f=t.charAt(u);if(f==="+"||f==="-"){var p=parseInt(t.substr(u+1,2),10),h=parseInt(t.substr(u+4,2),10);c=p*60+h,c*=6e4,f==="+"&&(c*=-1),d=!0}return t.charAt(14)==="."&&(l=parseFloat(t.substr(14),10)*1e3),d?(e.setUTCFullYear(r,n,o),e.setUTCHours(a,i,s,l),e.setTime(+e+c)):(e.setFullYear(r,n,o),e.setHours(a,i,s,l)),e};z.dateToUtcTime=function(t){if(typeof t=="string")return t;var e="",r=[];r.push((""+t.getUTCFullYear()).substr(2)),r.push(""+(t.getUTCMonth()+1)),r.push(""+t.getUTCDate()),r.push(""+t.getUTCHours()),r.push(""+t.getUTCMinutes()),r.push(""+t.getUTCSeconds());for(var n=0;n<r.length;++n)r[n].length<2&&(e+="0"),e+=r[n];return e+="Z",e};z.dateToGeneralizedTime=function(t){if(typeof t=="string")return t;var e="",r=[];r.push(""+t.getUTCFullYear()),r.push(""+(t.getUTCMonth()+1)),r.push(""+t.getUTCDate()),r.push(""+t.getUTCHours()),r.push(""+t.getUTCMinutes()),r.push(""+t.getUTCSeconds());for(var n=0;n<r.length;++n)r[n].length<2&&(e+="0"),e+=r[n];return e+="Z",e};z.integerToDer=function(t){var e=_e.util.createBuffer();if(t>=-128&&t<128)return e.putSignedInt(t,8);if(t>=-32768&&t<32768)return e.putSignedInt(t,16);if(t>=-8388608&&t<8388608)return e.putSignedInt(t,24);if(t>=-2147483648&&t<2147483648)return e.putSignedInt(t,32);var r=new Error("Integer too large; max is 32-bits.");throw r.integer=t,r};z.derToInteger=function(t){typeof t=="string"&&(t=_e.util.createBuffer(t));var e=t.length()*8;if(e>32)throw new Error("Integer too large; max is 32-bits.");return t.getSignedInt(e)};z.validate=function(t,e,r,n){var o=!1;if((t.tagClass===e.tagClass||typeof e.tagClass>"u")&&(t.type===e.type||typeof e.type>"u"))if(t.constructed===e.constructed||typeof e.constructed>"u"){if(o=!0,e.value&&_e.util.isArray(e.value))for(var a=0,i=0;o&&i<e.value.length;++i)o=e.value[i].optional||!1,t.value[a]&&(o=z.validate(t.value[a],e.value[i],r,n),o?++a:e.value[i].optional&&(o=!0)),!o&&n&&n.push("["+e.name+'] Tag class "'+e.tagClass+'", type "'+e.type+'" expected value length "'+e.value.length+'", got "'+t.value.length+'"');if(o&&r&&(e.capture&&(r[e.capture]=t.value),e.captureAsn1&&(r[e.captureAsn1]=t),e.captureBitStringContents&&"bitStringContents"in t&&(r[e.captureBitStringContents]=t.bitStringContents),e.captureBitStringValue&&"bitStringContents"in t))if(t.bitStringContents.length<2)r[e.captureBitStringValue]="";else{var s=t.bitStringContents.charCodeAt(0);if(s!==0)throw new Error("captureBitStringValue only supported for zero unused bits");r[e.captureBitStringValue]=t.bitStringContents.slice(1)}}else n&&n.push("["+e.name+'] Expected constructed "'+e.constructed+'", got "'+t.constructed+'"');else n&&(t.tagClass!==e.tagClass&&n.push("["+e.name+'] Expected tag class "'+e.tagClass+'", got "'+t.tagClass+'"'),t.type!==e.type&&n.push("["+e.name+'] Expected type "'+e.type+'", got "'+t.type+'"'));return o};var sd=/[^\\u0000-\\u00ff]/;z.prettyPrint=function(t,e,r){var n="";e=e||0,r=r||2,e>0&&(n+=`
`);for(var o="",a=0;a<e*r;++a)o+=" ";switch(n+=o+"Tag: ",t.tagClass){case z.Class.UNIVERSAL:n+="Universal:";break;case z.Class.APPLICATION:n+="Application:";break;case z.Class.CONTEXT_SPECIFIC:n+="Context-Specific:";break;case z.Class.PRIVATE:n+="Private:";break}if(t.tagClass===z.Class.UNIVERSAL)switch(n+=t.type,t.type){case z.Type.NONE:n+=" (None)";break;case z.Type.BOOLEAN:n+=" (Boolean)";break;case z.Type.INTEGER:n+=" (Integer)";break;case z.Type.BITSTRING:n+=" (Bit string)";break;case z.Type.OCTETSTRING:n+=" (Octet string)";break;case z.Type.NULL:n+=" (Null)";break;case z.Type.OID:n+=" (Object Identifier)";break;case z.Type.ODESC:n+=" (Object Descriptor)";break;case z.Type.EXTERNAL:n+=" (External or Instance of)";break;case z.Type.REAL:n+=" (Real)";break;case z.Type.ENUMERATED:n+=" (Enumerated)";break;case z.Type.EMBEDDED:n+=" (Embedded PDV)";break;case z.Type.UTF8:n+=" (UTF8)";break;case z.Type.ROID:n+=" (Relative Object Identifier)";break;case z.Type.SEQUENCE:n+=" (Sequence)";break;case z.Type.SET:n+=" (Set)";break;case z.Type.PRINTABLESTRING:n+=" (Printable String)";break;case z.Type.IA5String:n+=" (IA5String (ASCII))";break;case z.Type.UTCTIME:n+=" (UTC time)";break;case z.Type.GENERALIZEDTIME:n+=" (Generalized time)";break;case z.Type.BMPSTRING:n+=" (BMP String)";break}else n+=t.type;if(n+=`
`,n+=o+"Constructed: "+t.constructed+`
`,t.composed){for(var i=0,s="",a=0;a<t.value.length;++a)t.value[a]!==void 0&&(i+=1,s+=z.prettyPrint(t.value[a],e+1,r),a+1<t.value.length&&(s+=","));n+=o+"Sub values: "+i+s}else{if(n+=o+"Value: ",t.type===z.Type.OID){var l=z.derToOid(t.value);n+=l,_e.pki&&_e.pki.oids&&l in _e.pki.oids&&(n+=" ("+_e.pki.oids[l]+") ")}if(t.type===z.Type.INTEGER)try{n+=z.derToInteger(t.value)}catch{n+="0x"+_e.util.bytesToHex(t.value)}else if(t.type===z.Type.BITSTRING){if(t.value.length>1?n+="0x"+_e.util.bytesToHex(t.value.slice(1)):n+="(none)",t.value.length>0){var c=t.value.charCodeAt(0);c==1?n+=" (1 unused bit shown)":c>1&&(n+=" ("+c+" unused bits shown)")}}else if(t.type===z.Type.OCTETSTRING)sd.test(t.value)||(n+="("+t.value+") "),n+="0x"+_e.util.bytesToHex(t.value);else if(t.type===z.Type.UTF8)try{n+=_e.util.decodeUtf8(t.value)}catch(d){if(d.message==="URI malformed")n+="0x"+_e.util.bytesToHex(t.value)+" (malformed UTF8)";else throw d}else t.type===z.Type.PRINTABLESTRING||t.type===z.Type.IA5String?n+=t.value:sd.test(t.value)?n+="0x"+_e.util.bytesToHex(t.value):t.value.length===0?n+="[null]":n+=t.value}return n};var ya=te;ya.md=ya.md||{};ya.md.algorithms=ya.md.algorithms||{};var ar=te,CB=ar.hmac=ar.hmac||{};CB.create=function(){var t=null,e=null,r=null,n=null,o={};return o.start=function(a,i){if(a!==null)if(typeof a=="string")if(a=a.toLowerCase(),a in ar.md.algorithms)e=ar.md.algorithms[a].create();else throw new Error('Unknown hash algorithm "'+a+'"');else e=a;if(i===null)i=t;else{if(typeof i=="string")i=ar.util.createBuffer(i);else if(ar.util.isArray(i)){var s=i;i=ar.util.createBuffer();for(var l=0;l<s.length;++l)i.putByte(s[l])}var c=i.length();c>e.blockLength&&(e.start(),e.update(i.bytes()),i=e.digest()),r=ar.util.createBuffer(),n=ar.util.createBuffer(),c=i.length();for(var l=0;l<c;++l){var s=i.at(l);r.putByte(54^s),n.putByte(92^s)}if(c<e.blockLength)for(var s=e.blockLength-c,l=0;l<s;++l)r.putByte(54),n.putByte(92);t=i,r=r.bytes(),n=n.bytes()}e.start(),e.update(r)},o.update=function(a){e.update(a)},o.getMac=function(){var a=e.digest().bytes();return e.start(),e.update(n),e.update(a),e.digest()},o.digest=o.getMac,o};var jt=te,tp=jt.md5=jt.md5||{};jt.md.md5=jt.md.algorithms.md5=tp;tp.create=function(){rp||kB();var t=null,e=jt.util.createBuffer(),r=new Array(16),n={algorithm:"md5",blockLength:64,digestLength:16,messageLength:0,fullMessageLength:null,messageLengthSize:8};return n.start=function(){n.messageLength=0,n.fullMessageLength=n.messageLength64=[];for(var o=n.messageLengthSize/4,a=0;a<o;++a)n.fullMessageLength.push(0);return e=jt.util.createBuffer(),t={h0:1732584193,h1:4023233417,h2:2562383102,h3:271733878},n},n.start(),n.update=function(o,a){a==="utf8"&&(o=jt.util.encodeUtf8(o));var i=o.length;n.messageLength+=i,i=[i/4294967296>>>0,i>>>0];for(var s=n.fullMessageLength.length-1;s>=0;--s)n.fullMessageLength[s]+=i[1],i[1]=i[0]+(n.fullMessageLength[s]/4294967296>>>0),n.fullMessageLength[s]=n.fullMessageLength[s]>>>0,i[0]=i[1]/4294967296>>>0;return e.putBytes(o),ld(t,r,e),(e.read>2048||e.length()===0)&&e.compact(),n},n.digest=function(){var o=jt.util.createBuffer();o.putBytes(e.bytes());var a=n.fullMessageLength[n.fullMessageLength.length-1]+n.messageLengthSize,i=a&n.blockLength-1;o.putBytes(_s.substr(0,n.blockLength-i));for(var s,l=0,c=n.fullMessageLength.length-1;c>=0;--c)s=n.fullMessageLength[c]*8+l,l=s/4294967296>>>0,o.putInt32Le(s>>>0);var d={h0:t.h0,h1:t.h1,h2:t.h2,h3:t.h3};ld(d,r,o);var u=jt.util.createBuffer();return u.putInt32Le(d.h0),u.putInt32Le(d.h1),u.putInt32Le(d.h2),u.putInt32Le(d.h3),u},n};var _s=null,sa=null,Yn=null,mn=null,rp=!1;function kB(){_s="",_s+=jt.util.fillString("\0",64),sa=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,6,11,0,5,10,15,4,9,14,3,8,13,2,7,12,5,8,11,14,1,4,7,10,13,0,3,6,9,12,15,2,0,7,14,5,12,3,10,1,8,15,6,13,4,11,2,9],Yn=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],mn=new Array(64);for(var t=0;t<64;++t)mn[t]=Math.floor(Math.abs(Math.sin(t+1))*4294967296);rp=!0}function ld(t,e,r){for(var n,o,a,i,s,l,c,d,u=r.length();u>=64;){for(o=t.h0,a=t.h1,i=t.h2,s=t.h3,d=0;d<16;++d)e[d]=r.getInt32Le(),l=s^a&(i^s),n=o+l+mn[d]+e[d],c=Yn[d],o=s,s=i,i=a,a+=n<<c|n>>>32-c;for(;d<32;++d)l=i^s&(a^i),n=o+l+mn[d]+e[sa[d]],c=Yn[d],o=s,s=i,i=a,a+=n<<c|n>>>32-c;for(;d<48;++d)l=a^i^s,n=o+l+mn[d]+e[sa[d]],c=Yn[d],o=s,s=i,i=a,a+=n<<c|n>>>32-c;for(;d<64;++d)l=i^(a|~s),n=o+l+mn[d]+e[sa[d]],c=Yn[d],o=s,s=i,i=a,a+=n<<c|n>>>32-c;t.h0=t.h0+o|0,t.h1=t.h1+a|0,t.h2=t.h2+i|0,t.h3=t.h3+s|0,u-=64}}var xa=te,np=xa.pem=xa.pem||{};np.encode=function(t,e){e=e||{};var r="-----BEGIN "+t.type+`-----\r
`,n;if(t.procType&&(n={name:"Proc-Type",values:[String(t.procType.version),t.procType.type]},r+=Vo(n)),t.contentDomain&&(n={name:"Content-Domain",values:[t.contentDomain]},r+=Vo(n)),t.dekInfo&&(n={name:"DEK-Info",values:[t.dekInfo.algorithm]},t.dekInfo.parameters&&n.values.push(t.dekInfo.parameters),r+=Vo(n)),t.headers)for(var o=0;o<t.headers.length;++o)r+=Vo(t.headers[o]);return t.procType&&(r+=`\r
`),r+=xa.util.encode64(t.body,e.maxline||64)+`\r
`,r+="-----END "+t.type+`-----\r
`,r};np.decode=function(t){for(var e=[],r=/\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g,n=/([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/,o=/\r?\n/,a;a=r.exec(t),!!a;){var i=a[1];i==="NEW CERTIFICATE REQUEST"&&(i="CERTIFICATE REQUEST");var s={type:i,procType:null,contentDomain:null,dekInfo:null,headers:[],body:xa.util.decode64(a[3])};if(e.push(s),!!a[2]){for(var l=a[2].split(o),c=0;a&&c<l.length;){for(var d=l[c].replace(/\s+$/,""),u=c+1;u<l.length;++u){var f=l[u];if(!/\s/.test(f[0]))break;d+=f,c=u}if(a=d.match(n),a){for(var p={name:a[1],values:[]},h=a[2].split(","),g=0;g<h.length;++g)p.values.push(wB(h[g]));if(s.procType)if(!s.contentDomain&&p.name==="Content-Domain")s.contentDomain=h[0]||"";else if(!s.dekInfo&&p.name==="DEK-Info"){if(p.values.length===0)throw new Error('Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.');s.dekInfo={algorithm:h[0],parameters:h[1]||null}}else s.headers.push(p);else{if(p.name!=="Proc-Type")throw new Error('Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".');if(p.values.length!==2)throw new Error('Invalid PEM formatted message. The "Proc-Type" header must have two subfields.');s.procType={version:h[0],type:h[1]}}}++c}if(s.procType==="ENCRYPTED"&&!s.dekInfo)throw new Error('Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".')}}if(e.length===0)throw new Error("Invalid PEM formatted message.");return e};function Vo(t){for(var e=t.name+": ",r=[],n=function(l,c){return" "+c},o=0;o<t.values.length;++o)r.push(t.values[o].replace(/^(\S+\r\n)/,n));e+=r.join(",")+`\r
`;for(var a=0,i=-1,o=0;o<e.length;++o,++a)if(a>65&&i!==-1){var s=e[i];s===","?(++i,e=e.substr(0,i)+`\r
 `+e.substr(i)):e=e.substr(0,i)+`\r
`+s+e.substr(i+1),a=o-i-1,i=-1,++o}else(e[o]===" "||e[o]==="	"||e[o]===",")&&(i=o);return e}function wB(t){return t.replace(/^\s+/,"")}var Ae=te;Ae.des=Ae.des||{};Ae.des.startEncrypting=function(t,e,r,n){var o=Ja({key:t,output:r,decrypt:!1,mode:n||(e===null?"ECB":"CBC")});return o.start(e),o};Ae.des.createEncryptionCipher=function(t,e){return Ja({key:t,output:null,decrypt:!1,mode:e})};Ae.des.startDecrypting=function(t,e,r,n){var o=Ja({key:t,output:r,decrypt:!0,mode:n||(e===null?"ECB":"CBC")});return o.start(e),o};Ae.des.createDecryptionCipher=function(t,e){return Ja({key:t,output:null,decrypt:!0,mode:e})};Ae.des.Algorithm=function(t,e){var r=this;r.name=t,r.mode=new e({blockSize:8,cipher:{encrypt:function(n,o){return cd(r._keys,n,o,!1)},decrypt:function(n,o){return cd(r._keys,n,o,!0)}}}),r._init=!1};Ae.des.Algorithm.prototype.initialize=function(t){if(!this._init){var e=Ae.util.createBuffer(t.key);if(this.name.indexOf("3DES")===0&&e.length()!==24)throw new Error("Invalid Triple-DES key size: "+e.length()*8);this._keys=DB(e),this._init=!0}};Qt("DES-ECB",Ae.cipher.modes.ecb);Qt("DES-CBC",Ae.cipher.modes.cbc);Qt("DES-CFB",Ae.cipher.modes.cfb);Qt("DES-OFB",Ae.cipher.modes.ofb);Qt("DES-CTR",Ae.cipher.modes.ctr);Qt("3DES-ECB",Ae.cipher.modes.ecb);Qt("3DES-CBC",Ae.cipher.modes.cbc);Qt("3DES-CFB",Ae.cipher.modes.cfb);Qt("3DES-OFB",Ae.cipher.modes.ofb);Qt("3DES-CTR",Ae.cipher.modes.ctr);function Qt(t,e){var r=function(){return new Ae.des.Algorithm(t,e)};Ae.cipher.registerAlgorithm(t,r)}var SB=[16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,1028,66564,16843776,1028,16778240,16778240,0,65540,66560,0,16842756],EB=[-2146402272,-2147450880,32768,1081376,1048576,32,-2146435040,-2147450848,-2147483616,-2146402272,-2146402304,-2147483648,-2147450880,1048576,32,-2146435040,1081344,1048608,-2147450848,0,-2147483648,32768,1081376,-2146435072,1048608,-2147483616,0,1081344,32800,-2146402304,-2146435072,32800,0,1081376,-2146435040,1048576,-2147450848,-2146435072,-2146402304,32768,-2146435072,-2147450880,32,-2146402272,1081376,32,32768,-2147483648,32800,-2146402304,1048576,-2147483616,1048608,-2147450848,-2147483616,1048608,1081344,0,-2147450880,32800,-2147483648,-2146435040,-2146402272,1081344],_B=[520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,134349320,8,131592,131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584],TB=[8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928],BB=[256,34078976,34078720,1107296512,524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,33554688,1073742080,524288,0,1074266112,34078976,1073742080],AB=[536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,4210704,16384,4194320,536887312,0,541081600,536870912,4194320,536887312],IB=[2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,69206016,2048,67108866,67110912,2048,2097154],RB=[268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,4160,4160,262208,268435456,268701696];function DB(t){for(var e=[0,4,536870912,536870916,65536,65540,536936448,536936452,512,516,536871424,536871428,66048,66052,536936960,536936964],r=[0,1,1048576,1048577,67108864,67108865,68157440,68157441,256,257,1048832,1048833,67109120,67109121,68157696,68157697],n=[0,8,2048,2056,16777216,16777224,16779264,16779272,0,8,2048,2056,16777216,16777224,16779264,16779272],o=[0,2097152,134217728,136314880,8192,2105344,134225920,136323072,131072,2228224,134348800,136445952,139264,2236416,134356992,136454144],a=[0,262144,16,262160,0,262144,16,262160,4096,266240,4112,266256,4096,266240,4112,266256],i=[0,1024,32,1056,0,1024,32,1056,33554432,33555456,33554464,33555488,33554432,33555456,33554464,33555488],s=[0,268435456,524288,268959744,2,268435458,524290,268959746,0,268435456,524288,268959744,2,268435458,524290,268959746],l=[0,65536,2048,67584,536870912,536936448,536872960,536938496,131072,196608,133120,198656,537001984,537067520,537004032,537069568],c=[0,262144,0,262144,2,262146,2,262146,33554432,33816576,33554432,33816576,33554434,33816578,33554434,33816578],d=[0,268435456,8,268435464,0,268435456,8,268435464,1024,268436480,1032,268436488,1024,268436480,1032,268436488],u=[0,32,0,32,1048576,1048608,1048576,1048608,8192,8224,8192,8224,1056768,1056800,1056768,1056800],f=[0,16777216,512,16777728,2097152,18874368,2097664,18874880,67108864,83886080,67109376,83886592,69206016,85983232,69206528,85983744],p=[0,4096,134217728,134221824,524288,528384,134742016,134746112,16,4112,134217744,134221840,524304,528400,134742032,134746128],h=[0,4,256,260,0,4,256,260,1,5,257,261,1,5,257,261],g=t.length()>8?3:1,b=[],x=[0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0],C=0,k,B=0;B<g;B++){var _=t.getInt32(),T=t.getInt32();k=(_>>>4^T)&252645135,T^=k,_^=k<<4,k=(T>>>-16^_)&65535,_^=k,T^=k<<-16,k=(_>>>2^T)&858993459,T^=k,_^=k<<2,k=(T>>>-16^_)&65535,_^=k,T^=k<<-16,k=(_>>>1^T)&1431655765,T^=k,_^=k<<1,k=(T>>>8^_)&16711935,_^=k,T^=k<<8,k=(_>>>1^T)&1431655765,T^=k,_^=k<<1,k=_<<8|T>>>20&240,_=T<<24|T<<8&16711680|T>>>8&65280|T>>>24&240,T=k;for(var R=0;R<x.length;++R){x[R]?(_=_<<2|_>>>26,T=T<<2|T>>>26):(_=_<<1|_>>>27,T=T<<1|T>>>27),_&=-15,T&=-15;var D=e[_>>>28]|r[_>>>24&15]|n[_>>>20&15]|o[_>>>16&15]|a[_>>>12&15]|i[_>>>8&15]|s[_>>>4&15],O=l[T>>>28]|c[T>>>24&15]|d[T>>>20&15]|u[T>>>16&15]|f[T>>>12&15]|p[T>>>8&15]|h[T>>>4&15];k=(O>>>16^D)&65535,b[C++]=D^k,b[C++]=O^k<<16}}return b}function cd(t,e,r,n){var o=t.length===32?3:9,a;o===3?a=n?[30,-2,-2]:[0,32,2]:a=n?[94,62,-2,32,64,2,30,-2,-2]:[0,32,2,62,30,-2,64,96,2];var i,s=e[0],l=e[1];i=(s>>>4^l)&252645135,l^=i,s^=i<<4,i=(s>>>16^l)&65535,l^=i,s^=i<<16,i=(l>>>2^s)&858993459,s^=i,l^=i<<2,i=(l>>>8^s)&16711935,s^=i,l^=i<<8,i=(s>>>1^l)&1431655765,l^=i,s^=i<<1,s=s<<1|s>>>31,l=l<<1|l>>>31;for(var c=0;c<o;c+=3){for(var d=a[c+1],u=a[c+2],f=a[c];f!=d;f+=u){var p=l^t[f],h=(l>>>4|l<<28)^t[f+1];i=s,s=l,l=i^(EB[p>>>24&63]|TB[p>>>16&63]|AB[p>>>8&63]|RB[p&63]|SB[h>>>24&63]|_B[h>>>16&63]|BB[h>>>8&63]|IB[h&63])}i=s,s=l,l=i}s=s>>>1|s<<31,l=l>>>1|l<<31,i=(s>>>1^l)&1431655765,l^=i,s^=i<<1,i=(l>>>8^s)&16711935,s^=i,l^=i<<8,i=(l>>>2^s)&858993459,s^=i,l^=i<<2,i=(s>>>16^l)&65535,l^=i,s^=i<<16,i=(s>>>4^l)&252645135,l^=i,s^=i<<4,r[0]=s,r[1]=l}function Ja(t){t=t||{};var e=(t.mode||"CBC").toUpperCase(),r="DES-"+e,n;t.decrypt?n=Ae.cipher.createDecipher(r,t.key):n=Ae.cipher.createCipher(r,t.key);var o=n.start;return n.start=function(a,i){var s=null;i instanceof Ae.util.ByteBuffer&&(s=i,i={}),i=i||{},i.output=s,i.iv=a,o.call(n,i)},n}var dt=te,LB=dt.pkcs5=dt.pkcs5||{},tr;dt.util.isNodejs&&!dt.options.usePureJavaScript&&(tr=Ua);dt.pbkdf2=LB.pbkdf2=function(t,e,r,n,o,a){if(typeof o=="function"&&(a=o,o=null),dt.util.isNodejs&&!dt.options.usePureJavaScript&&tr.pbkdf2&&(o===null||typeof o!="object")&&(tr.pbkdf2Sync.length>4||!o||o==="sha1"))return typeof o!="string"&&(o="sha1"),t=Buffer.from(t,"binary"),e=Buffer.from(e,"binary"),a?tr.pbkdf2Sync.length===4?tr.pbkdf2(t,e,r,n,function(k,B){if(k)return a(k);a(null,B.toString("binary"))}):tr.pbkdf2(t,e,r,n,o,function(k,B){if(k)return a(k);a(null,B.toString("binary"))}):tr.pbkdf2Sync.length===4?tr.pbkdf2Sync(t,e,r,n).toString("binary"):tr.pbkdf2Sync(t,e,r,n,o).toString("binary");if((typeof o>"u"||o===null)&&(o="sha1"),typeof o=="string"){if(!(o in dt.md.algorithms))throw new Error("Unknown hash algorithm: "+o);o=dt.md[o].create()}var i=o.digestLength;if(n>4294967295*i){var s=new Error("Derived key is too long.");if(a)return a(s);throw s}var l=Math.ceil(n/i),c=n-(l-1)*i,d=dt.hmac.create();d.start(o,t);var u="",f,p,h;if(!a){for(var g=1;g<=l;++g){d.start(null,null),d.update(e),d.update(dt.util.int32ToBytes(g)),f=h=d.digest().getBytes();for(var b=2;b<=r;++b)d.start(null,null),d.update(h),p=d.digest().getBytes(),f=dt.util.xorBytes(f,p,i),h=p;u+=g<l?f:f.substr(0,c)}return u}var g=1,b;function x(){if(g>l)return a(null,u);d.start(null,null),d.update(e),d.update(dt.util.int32ToBytes(g)),f=h=d.digest().getBytes(),b=2,C()}function C(){if(b<=r)return d.start(null,null),d.update(h),p=d.digest().getBytes(),f=dt.util.xorBytes(f,p,i),h=p,++b,dt.util.setImmediate(C);u+=g<l?f:f.substr(0,c),++g,x()}x()};var Gt=te,op=Gt.sha256=Gt.sha256||{};Gt.md.sha256=Gt.md.algorithms.sha256=op;op.create=function(){ap||NB();var t=null,e=Gt.util.createBuffer(),r=new Array(64),n={algorithm:"sha256",blockLength:64,digestLength:32,messageLength:0,fullMessageLength:null,messageLengthSize:8};return n.start=function(){n.messageLength=0,n.fullMessageLength=n.messageLength64=[];for(var o=n.messageLengthSize/4,a=0;a<o;++a)n.fullMessageLength.push(0);return e=Gt.util.createBuffer(),t={h0:1779033703,h1:3144134277,h2:1013904242,h3:2773480762,h4:1359893119,h5:2600822924,h6:528734635,h7:1541459225},n},n.start(),n.update=function(o,a){a==="utf8"&&(o=Gt.util.encodeUtf8(o));var i=o.length;n.messageLength+=i,i=[i/4294967296>>>0,i>>>0];for(var s=n.fullMessageLength.length-1;s>=0;--s)n.fullMessageLength[s]+=i[1],i[1]=i[0]+(n.fullMessageLength[s]/4294967296>>>0),n.fullMessageLength[s]=n.fullMessageLength[s]>>>0,i[0]=i[1]/4294967296>>>0;return e.putBytes(o),dd(t,r,e),(e.read>2048||e.length()===0)&&e.compact(),n},n.digest=function(){var o=Gt.util.createBuffer();o.putBytes(e.bytes());var a=n.fullMessageLength[n.fullMessageLength.length-1]+n.messageLengthSize,i=a&n.blockLength-1;o.putBytes(Ts.substr(0,n.blockLength-i));for(var s,l,c=n.fullMessageLength[0]*8,d=0;d<n.fullMessageLength.length-1;++d)s=n.fullMessageLength[d+1]*8,l=s/4294967296>>>0,c+=l,o.putInt32(c>>>0),c=s>>>0;o.putInt32(c);var u={h0:t.h0,h1:t.h1,h2:t.h2,h3:t.h3,h4:t.h4,h5:t.h5,h6:t.h6,h7:t.h7};dd(u,r,o);var f=Gt.util.createBuffer();return f.putInt32(u.h0),f.putInt32(u.h1),f.putInt32(u.h2),f.putInt32(u.h3),f.putInt32(u.h4),f.putInt32(u.h5),f.putInt32(u.h6),f.putInt32(u.h7),f},n};var Ts=null,ap=!1,ip=null;function NB(){Ts="",Ts+=Gt.util.fillString("\0",64),ip=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],ap=!0}function dd(t,e,r){for(var n,o,a,i,s,l,c,d,u,f,p,h,g,b,x,C=r.length();C>=64;){for(c=0;c<16;++c)e[c]=r.getInt32();for(;c<64;++c)n=e[c-2],n=(n>>>17|n<<15)^(n>>>19|n<<13)^n>>>10,o=e[c-15],o=(o>>>7|o<<25)^(o>>>18|o<<14)^o>>>3,e[c]=n+e[c-7]+o+e[c-16]|0;for(d=t.h0,u=t.h1,f=t.h2,p=t.h3,h=t.h4,g=t.h5,b=t.h6,x=t.h7,c=0;c<64;++c)i=(h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7),s=b^h&(g^b),a=(d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),l=d&u|f&(d^u),n=x+i+s+ip[c]+e[c],o=a+l,x=b,b=g,g=h,h=p+n>>>0,p=f,f=u,u=d,d=n+o>>>0;t.h0=t.h0+d|0,t.h1=t.h1+u|0,t.h2=t.h2+f|0,t.h3=t.h3+p|0,t.h4=t.h4+h|0,t.h5=t.h5+g|0,t.h6=t.h6+b|0,t.h7=t.h7+x|0,C-=64}}var Ht=te,la=null;Ht.util.isNodejs&&!Ht.options.usePureJavaScript&&!process.versions["node-webkit"]&&(la=Ua);var PB=Ht.prng=Ht.prng||{};PB.create=function(t){for(var e={plugin:t,key:null,seed:null,time:null,reseeds:0,generated:0,keyBytes:""},r=t.md,n=new Array(32),o=0;o<32;++o)n[o]=r.create();e.pools=n,e.pool=0,e.generate=function(c,d){if(!d)return e.generateSync(c);var u=e.plugin.cipher,f=e.plugin.increment,p=e.plugin.formatKey,h=e.plugin.formatSeed,g=Ht.util.createBuffer();e.key=null,b();function b(x){if(x)return d(x);if(g.length()>=c)return d(null,g.getBytes(c));if(e.generated>1048575&&(e.key=null),e.key===null)return Ht.util.nextTick(function(){a(b)});var C=u(e.key,e.seed);e.generated+=C.length,g.putBytes(C),e.key=p(u(e.key,f(e.seed))),e.seed=h(u(e.key,e.seed)),Ht.util.setImmediate(b)}},e.generateSync=function(c){var d=e.plugin.cipher,u=e.plugin.increment,f=e.plugin.formatKey,p=e.plugin.formatSeed;e.key=null;for(var h=Ht.util.createBuffer();h.length()<c;){e.generated>1048575&&(e.key=null),e.key===null&&i();var g=d(e.key,e.seed);e.generated+=g.length,h.putBytes(g),e.key=f(d(e.key,u(e.seed))),e.seed=p(d(e.key,e.seed))}return h.getBytes(c)};function a(c){if(e.pools[0].messageLength>=32)return s(),c();var d=32-e.pools[0].messageLength<<5;e.seedFile(d,function(u,f){if(u)return c(u);e.collect(f),s(),c()})}function i(){if(e.pools[0].messageLength>=32)return s();var c=32-e.pools[0].messageLength<<5;e.collect(e.seedFileSync(c)),s()}function s(){e.reseeds=e.reseeds===4294967295?0:e.reseeds+1;var c=e.plugin.md.create();c.update(e.keyBytes);for(var d=1,u=0;u<32;++u)e.reseeds%d===0&&(c.update(e.pools[u].digest().getBytes()),e.pools[u].start()),d=d<<1;e.keyBytes=c.digest().getBytes(),c.start(),c.update(e.keyBytes);var f=c.digest().getBytes();e.key=e.plugin.formatKey(e.keyBytes),e.seed=e.plugin.formatSeed(f),e.generated=0}function l(c){var d=null,u=Ht.util.globalScope,f=u.crypto||u.msCrypto;f&&f.getRandomValues&&(d=function(_){return f.getRandomValues(_)});var p=Ht.util.createBuffer();if(d)for(;p.length()<c;){var h=Math.max(1,Math.min(c-p.length(),65536)/4),g=new Uint32Array(Math.floor(h));try{d(g);for(var b=0;b<g.length;++b)p.putInt32(g[b])}catch(_){if(!(typeof QuotaExceededError<"u"&&_ instanceof QuotaExceededError))throw _}}if(p.length()<c)for(var x,C,k,B=Math.floor(Math.random()*65536);p.length()<c;){C=16807*(B&65535),x=16807*(B>>16),C+=(x&32767)<<16,C+=x>>15,C=(C&2147483647)+(C>>31),B=C&4294967295;for(var b=0;b<3;++b)k=B>>>(b<<3),k^=Math.floor(Math.random()*256),p.putByte(k&255)}return p.getBytes(c)}return la?(e.seedFile=function(c,d){la.randomBytes(c,function(u,f){if(u)return d(u);d(null,f.toString())})},e.seedFileSync=function(c){return la.randomBytes(c).toString()}):(e.seedFile=function(c,d){try{d(null,l(c))}catch(u){d(u)}},e.seedFileSync=l),e.collect=function(c){for(var d=c.length,u=0;u<d;++u)e.pools[e.pool].update(c.substr(u,1)),e.pool=e.pool===31?0:e.pool+1},e.collectInt=function(c,d){for(var u="",f=0;f<d;f+=8)u+=String.fromCharCode(c>>f&255);e.collect(u)},e.registerWorker=function(c){if(c===self)e.seedFile=function(u,f){function p(h){var g=h.data;g.forge&&g.forge.prng&&(self.removeEventListener("message",p),f(g.forge.prng.err,g.forge.prng.bytes))}self.addEventListener("message",p),self.postMessage({forge:{prng:{needed:u}}})};else{var d=function(u){var f=u.data;f.forge&&f.forge.prng&&e.seedFile(f.forge.prng.needed,function(p,h){c.postMessage({forge:{prng:{err:p,bytes:h}}})})};c.addEventListener("message",d)}},e};var et=te;(function(){if(et.random&&et.random.getBytes){et.random;return}(function(t){var e={},r=new Array(4),n=et.util.createBuffer();e.formatKey=function(u){var f=et.util.createBuffer(u);return u=new Array(4),u[0]=f.getInt32(),u[1]=f.getInt32(),u[2]=f.getInt32(),u[3]=f.getInt32(),et.aes._expandKey(u,!1)},e.formatSeed=function(u){var f=et.util.createBuffer(u);return u=new Array(4),u[0]=f.getInt32(),u[1]=f.getInt32(),u[2]=f.getInt32(),u[3]=f.getInt32(),u},e.cipher=function(u,f){return et.aes._updateBlock(u,f,r,!1),n.putInt32(r[0]),n.putInt32(r[1]),n.putInt32(r[2]),n.putInt32(r[3]),n.getBytes()},e.increment=function(u){return++u[3],u},e.md=et.md.sha256;function o(){var u=et.prng.create(e);return u.getBytes=function(f,p){return u.generate(f,p)},u.getBytesSync=function(f){return u.generate(f)},u}var a=o(),i=null,s=et.util.globalScope,l=s.crypto||s.msCrypto;if(l&&l.getRandomValues&&(i=function(u){return l.getRandomValues(u)}),et.options.usePureJavaScript||!et.util.isNodejs&&!i){if(a.collectInt(+new Date,32),typeof navigator<"u"){var c="";for(var d in navigator)try{typeof navigator[d]=="string"&&(c+=navigator[d])}catch{}a.collect(c),c=null}t&&(t().mousemove(function(u){a.collectInt(u.clientX,16),a.collectInt(u.clientY,16)}),t().keypress(function(u){a.collectInt(u.charCode,8)}))}if(!et.random)et.random=a;else for(var d in a)et.random[d]=a[d];et.random.createInstance=o,et.random})(typeof jQuery<"u"?jQuery:null)})();var gt=te,Vi=[217,120,249,196,25,221,181,237,40,233,253,121,74,160,216,157,198,126,55,131,43,118,83,142,98,76,100,136,68,139,251,162,23,154,89,245,135,179,79,19,97,69,109,141,9,129,125,50,189,143,64,235,134,183,123,11,240,149,33,34,92,107,78,130,84,214,101,147,206,96,178,28,115,86,192,20,167,140,241,220,18,117,202,31,59,190,228,209,66,61,212,48,163,60,182,38,111,191,14,218,70,105,7,87,39,242,29,155,188,148,67,3,248,17,199,246,144,239,62,231,6,195,213,47,200,102,30,215,8,232,234,222,128,82,238,247,132,170,114,172,53,77,106,42,150,26,210,113,90,21,73,116,75,159,208,94,4,24,164,236,194,224,65,110,15,81,203,204,36,145,175,80,161,244,112,57,153,124,58,133,35,184,180,122,252,2,54,91,37,85,151,49,45,93,250,152,227,138,146,174,5,223,41,16,103,108,186,201,211,0,230,207,225,158,168,44,99,22,1,63,88,226,137,169,13,56,52,27,171,51,255,176,187,72,12,95,185,177,205,46,197,243,219,71,229,165,156,119,10,166,32,104,254,127,193,173],ud=[1,2,3,5],OB=function(t,e){return t<<e&65535|(t&65535)>>16-e},MB=function(t,e){return(t&65535)>>e|t<<16-e&65535};gt.rc2=gt.rc2||{};gt.rc2.expandKey=function(t,e){typeof t=="string"&&(t=gt.util.createBuffer(t)),e=e||128;var r=t,n=t.length(),o=e,a=Math.ceil(o/8),i=255>>(o&7),s;for(s=n;s<128;s++)r.putByte(Vi[r.at(s-1)+r.at(s-n)&255]);for(r.setAt(128-a,Vi[r.at(128-a)&i]),s=127-a;s>=0;s--)r.setAt(s,Vi[r.at(s+1)^r.at(s+a)]);return r};var sp=function(t,e,r){var n=!1,o=null,a=null,i=null,s,l,c,d,u=[];for(t=gt.rc2.expandKey(t,e),c=0;c<64;c++)u.push(t.getInt16Le());r?(s=function(h){for(c=0;c<4;c++)h[c]+=u[d]+(h[(c+3)%4]&h[(c+2)%4])+(~h[(c+3)%4]&h[(c+1)%4]),h[c]=OB(h[c],ud[c]),d++},l=function(h){for(c=0;c<4;c++)h[c]+=u[h[(c+3)%4]&63]}):(s=function(h){for(c=3;c>=0;c--)h[c]=MB(h[c],ud[c]),h[c]-=u[d]+(h[(c+3)%4]&h[(c+2)%4])+(~h[(c+3)%4]&h[(c+1)%4]),d--},l=function(h){for(c=3;c>=0;c--)h[c]-=u[h[(c+3)%4]&63]});var f=function(h){var g=[];for(c=0;c<4;c++){var b=o.getInt16Le();i!==null&&(r?b^=i.getInt16Le():i.putInt16Le(b)),g.push(b&65535)}d=r?0:63;for(var x=0;x<h.length;x++)for(var C=0;C<h[x][0];C++)h[x][1](g);for(c=0;c<4;c++)i!==null&&(r?i.putInt16Le(g[c]):g[c]^=i.getInt16Le()),a.putInt16Le(g[c])},p=null;return p={start:function(h,g){h&&typeof h=="string"&&(h=gt.util.createBuffer(h)),n=!1,o=gt.util.createBuffer(),a=g||new gt.util.createBuffer,i=h,p.output=a},update:function(h){for(n||o.putBuffer(h);o.length()>=8;)f([[5,s],[1,l],[6,s],[1,l],[5,s]])},finish:function(h){var g=!0;if(r)if(h)g=h(8,o,!r);else{var b=o.length()===8?8:8-o.length();o.fillWithByte(b,b)}if(g&&(n=!0,p.update()),!r&&(g=o.length()===0,g))if(h)g=h(8,a,!r);else{var x=a.length(),C=a.at(x-1);C>x?g=!1:a.truncate(C)}return g}},p};gt.rc2.startEncrypting=function(t,e,r){var n=gt.rc2.createEncryptionCipher(t,128);return n.start(e,r),n};gt.rc2.createEncryptionCipher=function(t,e){return sp(t,e,!0)};gt.rc2.startDecrypting=function(t,e,r){var n=gt.rc2.createDecryptionCipher(t,128);return n.start(e,r),n};gt.rc2.createDecryptionCipher=function(t,e){return sp(t,e,!1)};var Bs=te;Bs.jsbn=Bs.jsbn||{};var ir;function N(t,e,r){this.data=[],t!=null&&(typeof t=="number"?this.fromNumber(t,e,r):e==null&&typeof t!="string"?this.fromString(t,256):this.fromString(t,e))}Bs.jsbn.BigInteger=N;function pe(){return new N(null)}function $B(t,e,r,n,o,a){for(;--a>=0;){var i=e*this.data[t++]+r.data[n]+o;o=Math.floor(i/67108864),r.data[n++]=i&67108863}return o}function FB(t,e,r,n,o,a){for(var i=e&32767,s=e>>15;--a>=0;){var l=this.data[t]&32767,c=this.data[t++]>>15,d=s*l+c*i;l=i*l+((d&32767)<<15)+r.data[n]+(o&1073741823),o=(l>>>30)+(d>>>15)+s*c+(o>>>30),r.data[n++]=l&1073741823}return o}function fd(t,e,r,n,o,a){for(var i=e&16383,s=e>>14;--a>=0;){var l=this.data[t]&16383,c=this.data[t++]>>14,d=s*l+c*i;l=i*l+((d&16383)<<14)+r.data[n]+o,o=(l>>28)+(d>>14)+s*c,r.data[n++]=l&268435455}return o}typeof navigator>"u"?(N.prototype.am=fd,ir=28):navigator.appName=="Microsoft Internet Explorer"?(N.prototype.am=FB,ir=30):navigator.appName!="Netscape"?(N.prototype.am=$B,ir=26):(N.prototype.am=fd,ir=28);N.prototype.DB=ir;N.prototype.DM=(1<<ir)-1;N.prototype.DV=1<<ir;var xl=52;N.prototype.FV=Math.pow(2,xl);N.prototype.F1=xl-ir;N.prototype.F2=2*ir-xl;var zB="0123456789abcdefghijklmnopqrstuvwxyz",ei=new Array,Pn,St;Pn=48;for(St=0;St<=9;++St)ei[Pn++]=St;Pn=97;for(St=10;St<36;++St)ei[Pn++]=St;Pn=65;for(St=10;St<36;++St)ei[Pn++]=St;function pd(t){return zB.charAt(t)}function lp(t,e){var r=ei[t.charCodeAt(e)];return r??-1}function UB(t){for(var e=this.t-1;e>=0;--e)t.data[e]=this.data[e];t.t=this.t,t.s=this.s}function VB(t){this.t=1,this.s=t<0?-1:0,t>0?this.data[0]=t:t<-1?this.data[0]=t+this.DV:this.t=0}function Cr(t){var e=pe();return e.fromInt(t),e}function KB(t,e){var r;if(e==16)r=4;else if(e==8)r=3;else if(e==256)r=8;else if(e==2)r=1;else if(e==32)r=5;else if(e==4)r=2;else{this.fromRadix(t,e);return}this.t=0,this.s=0;for(var n=t.length,o=!1,a=0;--n>=0;){var i=r==8?t[n]&255:lp(t,n);if(i<0){t.charAt(n)=="-"&&(o=!0);continue}o=!1,a==0?this.data[this.t++]=i:a+r>this.DB?(this.data[this.t-1]|=(i&(1<<this.DB-a)-1)<<a,this.data[this.t++]=i>>this.DB-a):this.data[this.t-1]|=i<<a,a+=r,a>=this.DB&&(a-=this.DB)}r==8&&t[0]&128&&(this.s=-1,a>0&&(this.data[this.t-1]|=(1<<this.DB-a)-1<<a)),this.clamp(),o&&N.ZERO.subTo(this,this)}function HB(){for(var t=this.s&this.DM;this.t>0&&this.data[this.t-1]==t;)--this.t}function WB(t){if(this.s<0)return"-"+this.negate().toString(t);var e;if(t==16)e=4;else if(t==8)e=3;else if(t==2)e=1;else if(t==32)e=5;else if(t==4)e=2;else return this.toRadix(t);var r=(1<<e)-1,n,o=!1,a="",i=this.t,s=this.DB-i*this.DB%e;if(i-- >0)for(s<this.DB&&(n=this.data[i]>>s)>0&&(o=!0,a=pd(n));i>=0;)s<e?(n=(this.data[i]&(1<<s)-1)<<e-s,n|=this.data[--i]>>(s+=this.DB-e)):(n=this.data[i]>>(s-=e)&r,s<=0&&(s+=this.DB,--i)),n>0&&(o=!0),o&&(a+=pd(n));return o?a:"0"}function jB(){var t=pe();return N.ZERO.subTo(this,t),t}function GB(){return this.s<0?this.negate():this}function qB(t){var e=this.s-t.s;if(e!=0)return e;var r=this.t;if(e=r-t.t,e!=0)return this.s<0?-e:e;for(;--r>=0;)if((e=this.data[r]-t.data[r])!=0)return e;return 0}function ti(t){var e=1,r;return(r=t>>>16)!=0&&(t=r,e+=16),(r=t>>8)!=0&&(t=r,e+=8),(r=t>>4)!=0&&(t=r,e+=4),(r=t>>2)!=0&&(t=r,e+=2),(r=t>>1)!=0&&(t=r,e+=1),e}function YB(){return this.t<=0?0:this.DB*(this.t-1)+ti(this.data[this.t-1]^this.s&this.DM)}function XB(t,e){var r;for(r=this.t-1;r>=0;--r)e.data[r+t]=this.data[r];for(r=t-1;r>=0;--r)e.data[r]=0;e.t=this.t+t,e.s=this.s}function QB(t,e){for(var r=t;r<this.t;++r)e.data[r-t]=this.data[r];e.t=Math.max(this.t-t,0),e.s=this.s}function ZB(t,e){var r=t%this.DB,n=this.DB-r,o=(1<<n)-1,a=Math.floor(t/this.DB),i=this.s<<r&this.DM,s;for(s=this.t-1;s>=0;--s)e.data[s+a+1]=this.data[s]>>n|i,i=(this.data[s]&o)<<r;for(s=a-1;s>=0;--s)e.data[s]=0;e.data[a]=i,e.t=this.t+a+1,e.s=this.s,e.clamp()}function JB(t,e){e.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t){e.t=0;return}var n=t%this.DB,o=this.DB-n,a=(1<<n)-1;e.data[0]=this.data[r]>>n;for(var i=r+1;i<this.t;++i)e.data[i-r-1]|=(this.data[i]&a)<<o,e.data[i-r]=this.data[i]>>n;n>0&&(e.data[this.t-r-1]|=(this.s&a)<<o),e.t=this.t-r,e.clamp()}function eA(t,e){for(var r=0,n=0,o=Math.min(t.t,this.t);r<o;)n+=this.data[r]-t.data[r],e.data[r++]=n&this.DM,n>>=this.DB;if(t.t<this.t){for(n-=t.s;r<this.t;)n+=this.data[r],e.data[r++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;r<t.t;)n-=t.data[r],e.data[r++]=n&this.DM,n>>=this.DB;n-=t.s}e.s=n<0?-1:0,n<-1?e.data[r++]=this.DV+n:n>0&&(e.data[r++]=n),e.t=r,e.clamp()}function tA(t,e){var r=this.abs(),n=t.abs(),o=r.t;for(e.t=o+n.t;--o>=0;)e.data[o]=0;for(o=0;o<n.t;++o)e.data[o+r.t]=r.am(0,n.data[o],e,o,0,r.t);e.s=0,e.clamp(),this.s!=t.s&&N.ZERO.subTo(e,e)}function rA(t){for(var e=this.abs(),r=t.t=2*e.t;--r>=0;)t.data[r]=0;for(r=0;r<e.t-1;++r){var n=e.am(r,e.data[r],t,2*r,0,1);(t.data[r+e.t]+=e.am(r+1,2*e.data[r],t,2*r+1,n,e.t-r-1))>=e.DV&&(t.data[r+e.t]-=e.DV,t.data[r+e.t+1]=1)}t.t>0&&(t.data[t.t-1]+=e.am(r,e.data[r],t,2*r,0,1)),t.s=0,t.clamp()}function nA(t,e,r){var n=t.abs();if(!(n.t<=0)){var o=this.abs();if(o.t<n.t){e!=null&&e.fromInt(0),r!=null&&this.copyTo(r);return}r==null&&(r=pe());var a=pe(),i=this.s,s=t.s,l=this.DB-ti(n.data[n.t-1]);l>0?(n.lShiftTo(l,a),o.lShiftTo(l,r)):(n.copyTo(a),o.copyTo(r));var c=a.t,d=a.data[c-1];if(d!=0){var u=d*(1<<this.F1)+(c>1?a.data[c-2]>>this.F2:0),f=this.FV/u,p=(1<<this.F1)/u,h=1<<this.F2,g=r.t,b=g-c,x=e??pe();for(a.dlShiftTo(b,x),r.compareTo(x)>=0&&(r.data[r.t++]=1,r.subTo(x,r)),N.ONE.dlShiftTo(c,x),x.subTo(a,a);a.t<c;)a.data[a.t++]=0;for(;--b>=0;){var C=r.data[--g]==d?this.DM:Math.floor(r.data[g]*f+(r.data[g-1]+h)*p);if((r.data[g]+=a.am(0,C,r,b,0,c))<C)for(a.dlShiftTo(b,x),r.subTo(x,r);r.data[g]<--C;)r.subTo(x,r)}e!=null&&(r.drShiftTo(c,e),i!=s&&N.ZERO.subTo(e,e)),r.t=c,r.clamp(),l>0&&r.rShiftTo(l,r),i<0&&N.ZERO.subTo(r,r)}}}function oA(t){var e=pe();return this.abs().divRemTo(t,null,e),this.s<0&&e.compareTo(N.ZERO)>0&&t.subTo(e,e),e}function sn(t){this.m=t}function aA(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}function iA(t){return t}function sA(t){t.divRemTo(this.m,null,t)}function lA(t,e,r){t.multiplyTo(e,r),this.reduce(r)}function cA(t,e){t.squareTo(e),this.reduce(e)}sn.prototype.convert=aA;sn.prototype.revert=iA;sn.prototype.reduce=sA;sn.prototype.mulTo=lA;sn.prototype.sqrTo=cA;function dA(){if(this.t<1)return 0;var t=this.data[0];if(!(t&1))return 0;var e=t&3;return e=e*(2-(t&15)*e)&15,e=e*(2-(t&255)*e)&255,e=e*(2-((t&65535)*e&65535))&65535,e=e*(2-t*e%this.DV)%this.DV,e>0?this.DV-e:-e}function ln(t){this.m=t,this.mp=t.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function uA(t){var e=pe();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(N.ZERO)>0&&this.m.subTo(e,e),e}function fA(t){var e=pe();return t.copyTo(e),this.reduce(e),e}function pA(t){for(;t.t<=this.mt2;)t.data[t.t++]=0;for(var e=0;e<this.m.t;++e){var r=t.data[e]&32767,n=r*this.mpl+((r*this.mph+(t.data[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(r=e+this.m.t,t.data[r]+=this.m.am(0,n,t,e,0,this.m.t);t.data[r]>=t.DV;)t.data[r]-=t.DV,t.data[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function hA(t,e){t.squareTo(e),this.reduce(e)}function gA(t,e,r){t.multiplyTo(e,r),this.reduce(r)}ln.prototype.convert=uA;ln.prototype.revert=fA;ln.prototype.reduce=pA;ln.prototype.mulTo=gA;ln.prototype.sqrTo=hA;function bA(){return(this.t>0?this.data[0]&1:this.s)==0}function mA(t,e){if(t>4294967295||t<1)return N.ONE;var r=pe(),n=pe(),o=e.convert(this),a=ti(t)-1;for(o.copyTo(r);--a>=0;)if(e.sqrTo(r,n),(t&1<<a)>0)e.mulTo(n,o,r);else{var i=r;r=n,n=i}return e.revert(r)}function vA(t,e){var r;return t<256||e.isEven()?r=new sn(e):r=new ln(e),this.exp(t,r)}N.prototype.copyTo=UB;N.prototype.fromInt=VB;N.prototype.fromString=KB;N.prototype.clamp=HB;N.prototype.dlShiftTo=XB;N.prototype.drShiftTo=QB;N.prototype.lShiftTo=ZB;N.prototype.rShiftTo=JB;N.prototype.subTo=eA;N.prototype.multiplyTo=tA;N.prototype.squareTo=rA;N.prototype.divRemTo=nA;N.prototype.invDigit=dA;N.prototype.isEven=bA;N.prototype.exp=mA;N.prototype.toString=WB;N.prototype.negate=jB;N.prototype.abs=GB;N.prototype.compareTo=qB;N.prototype.bitLength=YB;N.prototype.mod=oA;N.prototype.modPowInt=vA;N.ZERO=Cr(0);N.ONE=Cr(1);function yA(){var t=pe();return this.copyTo(t),t}function xA(){if(this.s<0){if(this.t==1)return this.data[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this.data[0];if(this.t==0)return 0}return(this.data[1]&(1<<32-this.DB)-1)<<this.DB|this.data[0]}function CA(){return this.t==0?this.s:this.data[0]<<24>>24}function kA(){return this.t==0?this.s:this.data[0]<<16>>16}function wA(t){return Math.floor(Math.LN2*this.DB/Math.log(t))}function SA(){return this.s<0?-1:this.t<=0||this.t==1&&this.data[0]<=0?0:1}function EA(t){if(t==null&&(t=10),this.signum()==0||t<2||t>36)return"0";var e=this.chunkSize(t),r=Math.pow(t,e),n=Cr(r),o=pe(),a=pe(),i="";for(this.divRemTo(n,o,a);o.signum()>0;)i=(r+a.intValue()).toString(t).substr(1)+i,o.divRemTo(n,o,a);return a.intValue().toString(t)+i}function _A(t,e){this.fromInt(0),e==null&&(e=10);for(var r=this.chunkSize(e),n=Math.pow(e,r),o=!1,a=0,i=0,s=0;s<t.length;++s){var l=lp(t,s);if(l<0){t.charAt(s)=="-"&&this.signum()==0&&(o=!0);continue}i=e*i+l,++a>=r&&(this.dMultiply(n),this.dAddOffset(i,0),a=0,i=0)}a>0&&(this.dMultiply(Math.pow(e,a)),this.dAddOffset(i,0)),o&&N.ZERO.subTo(this,this)}function TA(t,e,r){if(typeof e=="number")if(t<2)this.fromInt(1);else for(this.fromNumber(t,r),this.testBit(t-1)||this.bitwiseTo(N.ONE.shiftLeft(t-1),Cl,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(e);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(N.ONE.shiftLeft(t-1),this);else{var n=new Array,o=t&7;n.length=(t>>3)+1,e.nextBytes(n),o>0?n[0]&=(1<<o)-1:n[0]=0,this.fromString(n,256)}}function BA(){var t=this.t,e=new Array;e[0]=this.s;var r=this.DB-t*this.DB%8,n,o=0;if(t-- >0)for(r<this.DB&&(n=this.data[t]>>r)!=(this.s&this.DM)>>r&&(e[o++]=n|this.s<<this.DB-r);t>=0;)r<8?(n=(this.data[t]&(1<<r)-1)<<8-r,n|=this.data[--t]>>(r+=this.DB-8)):(n=this.data[t]>>(r-=8)&255,r<=0&&(r+=this.DB,--t)),n&128&&(n|=-256),o==0&&(this.s&128)!=(n&128)&&++o,(o>0||n!=this.s)&&(e[o++]=n);return e}function AA(t){return this.compareTo(t)==0}function IA(t){return this.compareTo(t)<0?this:t}function RA(t){return this.compareTo(t)>0?this:t}function DA(t,e,r){var n,o,a=Math.min(t.t,this.t);for(n=0;n<a;++n)r.data[n]=e(this.data[n],t.data[n]);if(t.t<this.t){for(o=t.s&this.DM,n=a;n<this.t;++n)r.data[n]=e(this.data[n],o);r.t=this.t}else{for(o=this.s&this.DM,n=a;n<t.t;++n)r.data[n]=e(o,t.data[n]);r.t=t.t}r.s=e(this.s,t.s),r.clamp()}function LA(t,e){return t&e}function NA(t){var e=pe();return this.bitwiseTo(t,LA,e),e}function Cl(t,e){return t|e}function PA(t){var e=pe();return this.bitwiseTo(t,Cl,e),e}function cp(t,e){return t^e}function OA(t){var e=pe();return this.bitwiseTo(t,cp,e),e}function dp(t,e){return t&~e}function MA(t){var e=pe();return this.bitwiseTo(t,dp,e),e}function $A(){for(var t=pe(),e=0;e<this.t;++e)t.data[e]=this.DM&~this.data[e];return t.t=this.t,t.s=~this.s,t}function FA(t){var e=pe();return t<0?this.rShiftTo(-t,e):this.lShiftTo(t,e),e}function zA(t){var e=pe();return t<0?this.lShiftTo(-t,e):this.rShiftTo(t,e),e}function UA(t){if(t==0)return-1;var e=0;return t&65535||(t>>=16,e+=16),t&255||(t>>=8,e+=8),t&15||(t>>=4,e+=4),t&3||(t>>=2,e+=2),t&1||++e,e}function VA(){for(var t=0;t<this.t;++t)if(this.data[t]!=0)return t*this.DB+UA(this.data[t]);return this.s<0?this.t*this.DB:-1}function KA(t){for(var e=0;t!=0;)t&=t-1,++e;return e}function HA(){for(var t=0,e=this.s&this.DM,r=0;r<this.t;++r)t+=KA(this.data[r]^e);return t}function WA(t){var e=Math.floor(t/this.DB);return e>=this.t?this.s!=0:(this.data[e]&1<<t%this.DB)!=0}function jA(t,e){var r=N.ONE.shiftLeft(t);return this.bitwiseTo(r,e,r),r}function GA(t){return this.changeBit(t,Cl)}function qA(t){return this.changeBit(t,dp)}function YA(t){return this.changeBit(t,cp)}function XA(t,e){for(var r=0,n=0,o=Math.min(t.t,this.t);r<o;)n+=this.data[r]+t.data[r],e.data[r++]=n&this.DM,n>>=this.DB;if(t.t<this.t){for(n+=t.s;r<this.t;)n+=this.data[r],e.data[r++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;r<t.t;)n+=t.data[r],e.data[r++]=n&this.DM,n>>=this.DB;n+=t.s}e.s=n<0?-1:0,n>0?e.data[r++]=n:n<-1&&(e.data[r++]=this.DV+n),e.t=r,e.clamp()}function QA(t){var e=pe();return this.addTo(t,e),e}function ZA(t){var e=pe();return this.subTo(t,e),e}function JA(t){var e=pe();return this.multiplyTo(t,e),e}function eI(t){var e=pe();return this.divRemTo(t,e,null),e}function tI(t){var e=pe();return this.divRemTo(t,null,e),e}function rI(t){var e=pe(),r=pe();return this.divRemTo(t,e,r),new Array(e,r)}function nI(t){this.data[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()}function oI(t,e){if(t!=0){for(;this.t<=e;)this.data[this.t++]=0;for(this.data[e]+=t;this.data[e]>=this.DV;)this.data[e]-=this.DV,++e>=this.t&&(this.data[this.t++]=0),++this.data[e]}}function Bo(){}function up(t){return t}function aI(t,e,r){t.multiplyTo(e,r)}function iI(t,e){t.squareTo(e)}Bo.prototype.convert=up;Bo.prototype.revert=up;Bo.prototype.mulTo=aI;Bo.prototype.sqrTo=iI;function sI(t){return this.exp(t,new Bo)}function lI(t,e,r){var n=Math.min(this.t+t.t,e);for(r.s=0,r.t=n;n>0;)r.data[--n]=0;var o;for(o=r.t-this.t;n<o;++n)r.data[n+this.t]=this.am(0,t.data[n],r,n,0,this.t);for(o=Math.min(t.t,e);n<o;++n)this.am(0,t.data[n],r,n,0,e-n);r.clamp()}function cI(t,e,r){--e;var n=r.t=this.t+t.t-e;for(r.s=0;--n>=0;)r.data[n]=0;for(n=Math.max(e-this.t,0);n<t.t;++n)r.data[this.t+n-e]=this.am(e-n,t.data[n],r,0,0,this.t+n-e);r.clamp(),r.drShiftTo(1,r)}function On(t){this.r2=pe(),this.q3=pe(),N.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}function dI(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var e=pe();return t.copyTo(e),this.reduce(e),e}function uI(t){return t}function fI(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)}function pI(t,e){t.squareTo(e),this.reduce(e)}function hI(t,e,r){t.multiplyTo(e,r),this.reduce(r)}On.prototype.convert=dI;On.prototype.revert=uI;On.prototype.reduce=fI;On.prototype.mulTo=hI;On.prototype.sqrTo=pI;function gI(t,e){var r=t.bitLength(),n,o=Cr(1),a;if(r<=0)return o;r<18?n=1:r<48?n=3:r<144?n=4:r<768?n=5:n=6,r<8?a=new sn(e):e.isEven()?a=new On(e):a=new ln(e);var i=new Array,s=3,l=n-1,c=(1<<n)-1;if(i[1]=a.convert(this),n>1){var d=pe();for(a.sqrTo(i[1],d);s<=c;)i[s]=pe(),a.mulTo(d,i[s-2],i[s]),s+=2}var u=t.t-1,f,p=!0,h=pe(),g;for(r=ti(t.data[u])-1;u>=0;){for(r>=l?f=t.data[u]>>r-l&c:(f=(t.data[u]&(1<<r+1)-1)<<l-r,u>0&&(f|=t.data[u-1]>>this.DB+r-l)),s=n;!(f&1);)f>>=1,--s;if((r-=s)<0&&(r+=this.DB,--u),p)i[f].copyTo(o),p=!1;else{for(;s>1;)a.sqrTo(o,h),a.sqrTo(h,o),s-=2;s>0?a.sqrTo(o,h):(g=o,o=h,h=g),a.mulTo(h,i[f],o)}for(;u>=0&&!(t.data[u]&1<<r);)a.sqrTo(o,h),g=o,o=h,h=g,--r<0&&(r=this.DB-1,--u)}return a.revert(o)}function bI(t){var e=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();if(e.compareTo(r)<0){var n=e;e=r,r=n}var o=e.getLowestSetBit(),a=r.getLowestSetBit();if(a<0)return e;for(o<a&&(a=o),a>0&&(e.rShiftTo(a,e),r.rShiftTo(a,r));e.signum()>0;)(o=e.getLowestSetBit())>0&&e.rShiftTo(o,e),(o=r.getLowestSetBit())>0&&r.rShiftTo(o,r),e.compareTo(r)>=0?(e.subTo(r,e),e.rShiftTo(1,e)):(r.subTo(e,r),r.rShiftTo(1,r));return a>0&&r.lShiftTo(a,r),r}function mI(t){if(t<=0)return 0;var e=this.DV%t,r=this.s<0?t-1:0;if(this.t>0)if(e==0)r=this.data[0]%t;else for(var n=this.t-1;n>=0;--n)r=(e*r+this.data[n])%t;return r}function vI(t){var e=t.isEven();if(this.isEven()&&e||t.signum()==0)return N.ZERO;for(var r=t.clone(),n=this.clone(),o=Cr(1),a=Cr(0),i=Cr(0),s=Cr(1);r.signum()!=0;){for(;r.isEven();)r.rShiftTo(1,r),e?((!o.isEven()||!a.isEven())&&(o.addTo(this,o),a.subTo(t,a)),o.rShiftTo(1,o)):a.isEven()||a.subTo(t,a),a.rShiftTo(1,a);for(;n.isEven();)n.rShiftTo(1,n),e?((!i.isEven()||!s.isEven())&&(i.addTo(this,i),s.subTo(t,s)),i.rShiftTo(1,i)):s.isEven()||s.subTo(t,s),s.rShiftTo(1,s);r.compareTo(n)>=0?(r.subTo(n,r),e&&o.subTo(i,o),a.subTo(s,a)):(n.subTo(r,n),e&&i.subTo(o,i),s.subTo(a,s))}if(n.compareTo(N.ONE)!=0)return N.ZERO;if(s.compareTo(t)>=0)return s.subtract(t);if(s.signum()<0)s.addTo(t,s);else return s;return s.signum()<0?s.add(t):s}var It=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509],yI=(1<<26)/It[It.length-1];function xI(t){var e,r=this.abs();if(r.t==1&&r.data[0]<=It[It.length-1]){for(e=0;e<It.length;++e)if(r.data[0]==It[e])return!0;return!1}if(r.isEven())return!1;for(e=1;e<It.length;){for(var n=It[e],o=e+1;o<It.length&&n<yI;)n*=It[o++];for(n=r.modInt(n);e<o;)if(n%It[e++]==0)return!1}return r.millerRabin(t)}function CI(t){var e=this.subtract(N.ONE),r=e.getLowestSetBit();if(r<=0)return!1;for(var n=e.shiftRight(r),o=kI(),a,i=0;i<t;++i){do a=new N(this.bitLength(),o);while(a.compareTo(N.ONE)<=0||a.compareTo(e)>=0);var s=a.modPow(n,this);if(s.compareTo(N.ONE)!=0&&s.compareTo(e)!=0){for(var l=1;l++<r&&s.compareTo(e)!=0;)if(s=s.modPowInt(2,this),s.compareTo(N.ONE)==0)return!1;if(s.compareTo(e)!=0)return!1}}return!0}function kI(){return{nextBytes:function(t){for(var e=0;e<t.length;++e)t[e]=Math.floor(Math.random()*256)}}}N.prototype.chunkSize=wA;N.prototype.toRadix=EA;N.prototype.fromRadix=_A;N.prototype.fromNumber=TA;N.prototype.bitwiseTo=DA;N.prototype.changeBit=jA;N.prototype.addTo=XA;N.prototype.dMultiply=nI;N.prototype.dAddOffset=oI;N.prototype.multiplyLowerTo=lI;N.prototype.multiplyUpperTo=cI;N.prototype.modInt=mI;N.prototype.millerRabin=CI;N.prototype.clone=yA;N.prototype.intValue=xA;N.prototype.byteValue=CA;N.prototype.shortValue=kA;N.prototype.signum=SA;N.prototype.toByteArray=BA;N.prototype.equals=AA;N.prototype.min=IA;N.prototype.max=RA;N.prototype.and=NA;N.prototype.or=PA;N.prototype.xor=OA;N.prototype.andNot=MA;N.prototype.not=$A;N.prototype.shiftLeft=FA;N.prototype.shiftRight=zA;N.prototype.getLowestSetBit=VA;N.prototype.bitCount=HA;N.prototype.testBit=WA;N.prototype.setBit=GA;N.prototype.clearBit=qA;N.prototype.flipBit=YA;N.prototype.add=QA;N.prototype.subtract=ZA;N.prototype.multiply=JA;N.prototype.divide=eI;N.prototype.remainder=tI;N.prototype.divideAndRemainder=rI;N.prototype.modPow=gI;N.prototype.modInverse=vI;N.prototype.pow=sI;N.prototype.gcd=bI;N.prototype.isProbablePrime=xI;var qt=te,fp=qt.sha1=qt.sha1||{};qt.md.sha1=qt.md.algorithms.sha1=fp;fp.create=function(){pp||wI();var t=null,e=qt.util.createBuffer(),r=new Array(80),n={algorithm:"sha1",blockLength:64,digestLength:20,messageLength:0,fullMessageLength:null,messageLengthSize:8};return n.start=function(){n.messageLength=0,n.fullMessageLength=n.messageLength64=[];for(var o=n.messageLengthSize/4,a=0;a<o;++a)n.fullMessageLength.push(0);return e=qt.util.createBuffer(),t={h0:1732584193,h1:4023233417,h2:2562383102,h3:271733878,h4:3285377520},n},n.start(),n.update=function(o,a){a==="utf8"&&(o=qt.util.encodeUtf8(o));var i=o.length;n.messageLength+=i,i=[i/4294967296>>>0,i>>>0];for(var s=n.fullMessageLength.length-1;s>=0;--s)n.fullMessageLength[s]+=i[1],i[1]=i[0]+(n.fullMessageLength[s]/4294967296>>>0),n.fullMessageLength[s]=n.fullMessageLength[s]>>>0,i[0]=i[1]/4294967296>>>0;return e.putBytes(o),hd(t,r,e),(e.read>2048||e.length()===0)&&e.compact(),n},n.digest=function(){var o=qt.util.createBuffer();o.putBytes(e.bytes());var a=n.fullMessageLength[n.fullMessageLength.length-1]+n.messageLengthSize,i=a&n.blockLength-1;o.putBytes(As.substr(0,n.blockLength-i));for(var s,l,c=n.fullMessageLength[0]*8,d=0;d<n.fullMessageLength.length-1;++d)s=n.fullMessageLength[d+1]*8,l=s/4294967296>>>0,c+=l,o.putInt32(c>>>0),c=s>>>0;o.putInt32(c);var u={h0:t.h0,h1:t.h1,h2:t.h2,h3:t.h3,h4:t.h4};hd(u,r,o);var f=qt.util.createBuffer();return f.putInt32(u.h0),f.putInt32(u.h1),f.putInt32(u.h2),f.putInt32(u.h3),f.putInt32(u.h4),f},n};var As=null,pp=!1;function wI(){As="",As+=qt.util.fillString("\0",64),pp=!0}function hd(t,e,r){for(var n,o,a,i,s,l,c,d,u=r.length();u>=64;){for(o=t.h0,a=t.h1,i=t.h2,s=t.h3,l=t.h4,d=0;d<16;++d)n=r.getInt32(),e[d]=n,c=s^a&(i^s),n=(o<<5|o>>>27)+c+l+1518500249+n,l=s,s=i,i=(a<<30|a>>>2)>>>0,a=o,o=n;for(;d<20;++d)n=e[d-3]^e[d-8]^e[d-14]^e[d-16],n=n<<1|n>>>31,e[d]=n,c=s^a&(i^s),n=(o<<5|o>>>27)+c+l+1518500249+n,l=s,s=i,i=(a<<30|a>>>2)>>>0,a=o,o=n;for(;d<32;++d)n=e[d-3]^e[d-8]^e[d-14]^e[d-16],n=n<<1|n>>>31,e[d]=n,c=a^i^s,n=(o<<5|o>>>27)+c+l+1859775393+n,l=s,s=i,i=(a<<30|a>>>2)>>>0,a=o,o=n;for(;d<40;++d)n=e[d-6]^e[d-16]^e[d-28]^e[d-32],n=n<<2|n>>>30,e[d]=n,c=a^i^s,n=(o<<5|o>>>27)+c+l+1859775393+n,l=s,s=i,i=(a<<30|a>>>2)>>>0,a=o,o=n;for(;d<60;++d)n=e[d-6]^e[d-16]^e[d-28]^e[d-32],n=n<<2|n>>>30,e[d]=n,c=a&i|s&(a^i),n=(o<<5|o>>>27)+c+l+2400959708+n,l=s,s=i,i=(a<<30|a>>>2)>>>0,a=o,o=n;for(;d<80;++d)n=e[d-6]^e[d-16]^e[d-28]^e[d-32],n=n<<2|n>>>30,e[d]=n,c=a^i^s,n=(o<<5|o>>>27)+c+l+3395469782+n,l=s,s=i,i=(a<<30|a>>>2)>>>0,a=o,o=n;t.h0=t.h0+o|0,t.h1=t.h1+a|0,t.h2=t.h2+i|0,t.h3=t.h3+s|0,t.h4=t.h4+l|0,u-=64}}var Yt=te,hp=Yt.pkcs1=Yt.pkcs1||{};hp.encode_rsa_oaep=function(t,e,r){var n,o,a,i;typeof r=="string"?(n=r,o=arguments[3]||void 0,a=arguments[4]||void 0):r&&(n=r.label||void 0,o=r.seed||void 0,a=r.md||void 0,r.mgf1&&r.mgf1.md&&(i=r.mgf1.md)),a?a.start():a=Yt.md.sha1.create(),i||(i=a);var s=Math.ceil(t.n.bitLength()/8),l=s-2*a.digestLength-2;if(e.length>l){var c=new Error("RSAES-OAEP input message length is too long.");throw c.length=e.length,c.maxLength=l,c}n||(n=""),a.update(n,"raw");for(var d=a.digest(),u="",f=l-e.length,p=0;p<f;p++)u+="\0";var h=d.getBytes()+u+""+e;if(!o)o=Yt.random.getBytes(a.digestLength);else if(o.length!==a.digestLength){var c=new Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.");throw c.seedLength=o.length,c.digestLength=a.digestLength,c}var g=Ca(o,s-a.digestLength-1,i),b=Yt.util.xorBytes(h,g,h.length),x=Ca(b,a.digestLength,i),C=Yt.util.xorBytes(o,x,o.length);return"\0"+C+b};hp.decode_rsa_oaep=function(t,e,r){var n,o,a;typeof r=="string"?(n=r,o=arguments[3]||void 0):r&&(n=r.label||void 0,o=r.md||void 0,r.mgf1&&r.mgf1.md&&(a=r.mgf1.md));var i=Math.ceil(t.n.bitLength()/8);if(e.length!==i){var b=new Error("RSAES-OAEP encoded message length is invalid.");throw b.length=e.length,b.expectedLength=i,b}if(o===void 0?o=Yt.md.sha1.create():o.start(),a||(a=o),i<2*o.digestLength+2)throw new Error("RSAES-OAEP key is too short for the hash function.");n||(n=""),o.update(n,"raw");for(var s=o.digest().getBytes(),l=e.charAt(0),c=e.substring(1,o.digestLength+1),d=e.substring(1+o.digestLength),u=Ca(d,o.digestLength,a),f=Yt.util.xorBytes(c,u,c.length),p=Ca(f,i-o.digestLength-1,a),h=Yt.util.xorBytes(d,p,d.length),g=h.substring(0,o.digestLength),b=l!=="\0",x=0;x<o.digestLength;++x)b|=s.charAt(x)!==g.charAt(x);for(var C=1,k=o.digestLength,B=o.digestLength;B<h.length;B++){var _=h.charCodeAt(B),T=_&1^1,R=C?65534:0;b|=_&R,C=C&T,k+=C}if(b||h.charCodeAt(k)!==1)throw new Error("Invalid RSAES-OAEP padding.");return h.substring(k+1)};function Ca(t,e,r){r||(r=Yt.md.sha1.create());for(var n="",o=Math.ceil(e/r.digestLength),a=0;a<o;++a){var i=String.fromCharCode(a>>24&255,a>>16&255,a>>8&255,a&255);r.start(),r.update(t+i),n+=r.digest().getBytes()}return n.substring(0,e)}var hr=te;(function(){if(hr.prime){hr.prime;return}var t=hr.prime=hr.prime||{},e=hr.jsbn.BigInteger,r=[6,4,2,4,2,4,6,2],n=new e(null);n.fromInt(30);var o=function(u,f){return u|f};t.generateProbablePrime=function(u,f,p){typeof f=="function"&&(p=f,f={}),f=f||{};var h=f.algorithm||"PRIMEINC";typeof h=="string"&&(h={name:h}),h.options=h.options||{};var g=f.prng||hr.random,b={nextBytes:function(x){for(var C=g.getBytesSync(x.length),k=0;k<x.length;++k)x[k]=C.charCodeAt(k)}};if(h.name==="PRIMEINC")return a(u,b,h.options,p);throw new Error("Invalid prime generation algorithm: "+h.name)};function a(u,f,p,h){return"workers"in p?l(u,f,p,h):i(u,f,p,h)}function i(u,f,p,h){var g=c(u,f),b=0,x=d(g.bitLength());"millerRabinTests"in p&&(x=p.millerRabinTests);var C=10;"maxBlockTime"in p&&(C=p.maxBlockTime),s(g,u,f,b,x,C,h)}function s(u,f,p,h,g,b,x){var C=+new Date;do{if(u.bitLength()>f&&(u=c(f,p)),u.isProbablePrime(g))return x(null,u);u.dAddOffset(r[h++%8],0)}while(b<0||+new Date-C<b);hr.util.setImmediate(function(){s(u,f,p,h,g,b,x)})}function l(u,f,p,h){if(typeof Worker>"u")return i(u,f,p,h);var g=c(u,f),b=p.workers,x=p.workLoad||100,C=x*30/8,k=p.workerScript||"forge/prime.worker.js";if(b===-1)return hr.util.estimateCores(function(_,T){_&&(T=2),b=T-1,B()});B();function B(){b=Math.max(1,b);for(var _=[],T=0;T<b;++T)_[T]=new Worker(k);for(var T=0;T<b;++T)_[T].addEventListener("message",D);var R=!1;function D(O){if(!R){var U=O.data;if(U.found){for(var K=0;K<_.length;++K)_[K].terminate();return R=!0,h(null,new e(U.prime,16))}g.bitLength()>u&&(g=c(u,f));var q=g.toString(16);O.target.postMessage({hex:q,workLoad:x}),g.dAddOffset(C,0)}}}}function c(u,f){var p=new e(u,f),h=u-1;return p.testBit(h)||p.bitwiseTo(e.ONE.shiftLeft(h),o,p),p.dAddOffset(31-p.mod(n).byteValue(),0),p}function d(u){return u<=100?27:u<=150?18:u<=200?15:u<=250?12:u<=300?9:u<=350?8:u<=400?7:u<=500?6:u<=600?5:u<=800?4:u<=1250?3:2}})();var Y=te;if(typeof ue>"u")var ue=Y.jsbn.BigInteger;var Is=Y.util.isNodejs?Ua:null,A=Y.asn1,Et=Y.util;Y.pki=Y.pki||{};Y.pki.rsa=Y.rsa=Y.rsa||{};var J=Y.pki,SI=[6,4,2,4,2,4,6,2],EI={name:"PrivateKeyInfo",tagClass:A.Class.UNIVERSAL,type:A.Type.SEQUENCE,constructed:!0,value:[{name:"PrivateKeyInfo.version",tagClass:A.Class.UNIVERSAL,type:A.Type.INTEGER,constructed:!1,capture:"privateKeyVersion"},{name:"PrivateKeyInfo.privateKeyAlgorithm",tagClass:A.Class.UNIVERSAL,type:A.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:A.Class.UNIVERSAL,type:A.Type.OID,constructed:!1,capture:"privateKeyOid"}]},{name:"PrivateKeyInfo",tagClass:A.Class.UNIVERSAL,type:A.Type.OCTETSTRING,constructed:!1,capture:"privateKey"}]},_I={name:"RSAPrivateKey",tagClass:A.Class.UNIVERSAL,type:A.Type.SEQUENCE,constructed:!0,value:[{name:"RSAPrivateKey.version",tagClass:A.Class.UNIVERSAL,type:A.Type.INTEGER,constructed:!1,capture:"privateKeyVersion"},{name:"RSAPrivateKey.modulus",tagClass:A.Class.UNIVERSAL,type:A.Type.INTEGER,constructed:!1,capture:"privateKeyModulus"},{name:"RSAPrivateKey.publicExponent",tagClass:A.Class.UNIVERSAL,type:A.Type.INTEGER,constructed:!1,capture:"privateKeyPublicExponent"},{name:"RSAPrivateKey.privateExponent",tagClass:A.Class.UNIVERSAL,type:A.Type.INTEGER,constructed:!1,capture:"privateKeyPrivateExponent"},{name:"RSAPrivateKey.prime1",tagClass:A.Class.UNIVERSAL,type:A.Type.INTEGER,constructed:!1,capture:"privateKeyPrime1"},{name:"RSAPrivateKey.prime2",tagClass:A.Class.UNIVERSAL,type:A.Type.INTEGER,constructed:!1,capture:"privateKeyPrime2"},{name:"RSAPrivateKey.exponent1",tagClass:A.Class.UNIVERSAL,type:A.Type.INTEGER,constructed:!1,capture:"privateKeyExponent1"},{name:"RSAPrivateKey.exponent2",tagClass:A.Class.UNIVERSAL,type:A.Type.INTEGER,constructed:!1,capture:"privateKeyExponent2"},{name:"RSAPrivateKey.coefficient",tagClass:A.Class.UNIVERSAL,type:A.Type.INTEGER,constructed:!1,capture:"privateKeyCoefficient"}]},TI={name:"RSAPublicKey",tagClass:A.Class.UNIVERSAL,type:A.Type.SEQUENCE,constructed:!0,value:[{name:"RSAPublicKey.modulus",tagClass:A.Class.UNIVERSAL,type:A.Type.INTEGER,constructed:!1,capture:"publicKeyModulus"},{name:"RSAPublicKey.exponent",tagClass:A.Class.UNIVERSAL,type:A.Type.INTEGER,constructed:!1,capture:"publicKeyExponent"}]},BI=Y.pki.rsa.publicKeyValidator={name:"SubjectPublicKeyInfo",tagClass:A.Class.UNIVERSAL,type:A.Type.SEQUENCE,constructed:!0,captureAsn1:"subjectPublicKeyInfo",value:[{name:"SubjectPublicKeyInfo.AlgorithmIdentifier",tagClass:A.Class.UNIVERSAL,type:A.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:A.Class.UNIVERSAL,type:A.Type.OID,constructed:!1,capture:"publicKeyOid"}]},{name:"SubjectPublicKeyInfo.subjectPublicKey",tagClass:A.Class.UNIVERSAL,type:A.Type.BITSTRING,constructed:!1,value:[{name:"SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",tagClass:A.Class.UNIVERSAL,type:A.Type.SEQUENCE,constructed:!0,optional:!0,captureAsn1:"rsaPublicKey"}]}]},AI={name:"DigestInfo",tagClass:A.Class.UNIVERSAL,type:A.Type.SEQUENCE,constructed:!0,value:[{name:"DigestInfo.DigestAlgorithm",tagClass:A.Class.UNIVERSAL,type:A.Type.SEQUENCE,constructed:!0,value:[{name:"DigestInfo.DigestAlgorithm.algorithmIdentifier",tagClass:A.Class.UNIVERSAL,type:A.Type.OID,constructed:!1,capture:"algorithmIdentifier"},{name:"DigestInfo.DigestAlgorithm.parameters",tagClass:A.Class.UNIVERSAL,type:A.Type.NULL,capture:"parameters",optional:!0,constructed:!1}]},{name:"DigestInfo.digest",tagClass:A.Class.UNIVERSAL,type:A.Type.OCTETSTRING,constructed:!1,capture:"digest"}]},II=function(t){var e;if(t.algorithm in J.oids)e=J.oids[t.algorithm];else{var r=new Error("Unknown message digest algorithm.");throw r.algorithm=t.algorithm,r}var n=A.oidToDer(e).getBytes(),o=A.create(A.Class.UNIVERSAL,A.Type.SEQUENCE,!0,[]),a=A.create(A.Class.UNIVERSAL,A.Type.SEQUENCE,!0,[]);a.value.push(A.create(A.Class.UNIVERSAL,A.Type.OID,!1,n)),a.value.push(A.create(A.Class.UNIVERSAL,A.Type.NULL,!1,""));var i=A.create(A.Class.UNIVERSAL,A.Type.OCTETSTRING,!1,t.digest().getBytes());return o.value.push(a),o.value.push(i),A.toDer(o).getBytes()},gp=function(t,e,r){if(r)return t.modPow(e.e,e.n);if(!e.p||!e.q)return t.modPow(e.d,e.n);e.dP||(e.dP=e.d.mod(e.p.subtract(ue.ONE))),e.dQ||(e.dQ=e.d.mod(e.q.subtract(ue.ONE))),e.qInv||(e.qInv=e.q.modInverse(e.p));var n;do n=new ue(Y.util.bytesToHex(Y.random.getBytes(e.n.bitLength()/8)),16);while(n.compareTo(e.n)>=0||!n.gcd(e.n).equals(ue.ONE));t=t.multiply(n.modPow(e.e,e.n)).mod(e.n);for(var o=t.mod(e.p).modPow(e.dP,e.p),a=t.mod(e.q).modPow(e.dQ,e.q);o.compareTo(a)<0;)o=o.add(e.p);var i=o.subtract(a).multiply(e.qInv).mod(e.p).multiply(e.q).add(a);return i=i.multiply(n.modInverse(e.n)).mod(e.n),i};J.rsa.encrypt=function(t,e,r){var n=r,o,a=Math.ceil(e.n.bitLength()/8);r!==!1&&r!==!0?(n=r===2,o=bp(t,e,r)):(o=Y.util.createBuffer(),o.putBytes(t));for(var i=new ue(o.toHex(),16),s=gp(i,e,n),l=s.toString(16),c=Y.util.createBuffer(),d=a-Math.ceil(l.length/2);d>0;)c.putByte(0),--d;return c.putBytes(Y.util.hexToBytes(l)),c.getBytes()};J.rsa.decrypt=function(t,e,r,n){var o=Math.ceil(e.n.bitLength()/8);if(t.length!==o){var a=new Error("Encrypted message length is invalid.");throw a.length=t.length,a.expected=o,a}var i=new ue(Y.util.createBuffer(t).toHex(),16);if(i.compareTo(e.n)>=0)throw new Error("Encrypted message is invalid.");for(var s=gp(i,e,r),l=s.toString(16),c=Y.util.createBuffer(),d=o-Math.ceil(l.length/2);d>0;)c.putByte(0),--d;return c.putBytes(Y.util.hexToBytes(l)),n!==!1?ka(c.getBytes(),e,r):c.getBytes()};J.rsa.createKeyPairGenerationState=function(t,e,r){typeof t=="string"&&(t=parseInt(t,10)),t=t||2048,r=r||{};var n=r.prng||Y.random,o={nextBytes:function(s){for(var l=n.getBytesSync(s.length),c=0;c<s.length;++c)s[c]=l.charCodeAt(c)}},a=r.algorithm||"PRIMEINC",i;if(a==="PRIMEINC")i={algorithm:a,state:0,bits:t,rng:o,eInt:e||65537,e:new ue(null),p:null,q:null,qBits:t>>1,pBits:t-(t>>1),pqState:0,num:null,keys:null},i.e.fromInt(i.eInt);else throw new Error("Invalid key generation algorithm: "+a);return i};J.rsa.stepKeyPairGenerationState=function(t,e){"algorithm"in t||(t.algorithm="PRIMEINC");var r=new ue(null);r.fromInt(30);for(var n=0,o=function(u,f){return u|f},a=+new Date,i,s=0;t.keys===null&&(e<=0||s<e);){if(t.state===0){var l=t.p===null?t.pBits:t.qBits,c=l-1;t.pqState===0?(t.num=new ue(l,t.rng),t.num.testBit(c)||t.num.bitwiseTo(ue.ONE.shiftLeft(c),o,t.num),t.num.dAddOffset(31-t.num.mod(r).byteValue(),0),n=0,++t.pqState):t.pqState===1?t.num.bitLength()>l?t.pqState=0:t.num.isProbablePrime(DI(t.num.bitLength()))?++t.pqState:t.num.dAddOffset(SI[n++%8],0):t.pqState===2?t.pqState=t.num.subtract(ue.ONE).gcd(t.e).compareTo(ue.ONE)===0?3:0:t.pqState===3&&(t.pqState=0,t.p===null?t.p=t.num:t.q=t.num,t.p!==null&&t.q!==null&&++t.state,t.num=null)}else if(t.state===1)t.p.compareTo(t.q)<0&&(t.num=t.p,t.p=t.q,t.q=t.num),++t.state;else if(t.state===2)t.p1=t.p.subtract(ue.ONE),t.q1=t.q.subtract(ue.ONE),t.phi=t.p1.multiply(t.q1),++t.state;else if(t.state===3)t.phi.gcd(t.e).compareTo(ue.ONE)===0?++t.state:(t.p=null,t.q=null,t.state=0);else if(t.state===4)t.n=t.p.multiply(t.q),t.n.bitLength()===t.bits?++t.state:(t.q=null,t.state=0);else if(t.state===5){var d=t.e.modInverse(t.phi);t.keys={privateKey:J.rsa.setPrivateKey(t.n,t.e,d,t.p,t.q,d.mod(t.p1),d.mod(t.q1),t.q.modInverse(t.p)),publicKey:J.rsa.setPublicKey(t.n,t.e)}}i=+new Date,s+=i-a,a=i}return t.keys!==null};J.rsa.generateKeyPair=function(t,e,r,n){if(arguments.length===1?typeof t=="object"?(r=t,t=void 0):typeof t=="function"&&(n=t,t=void 0):arguments.length===2?typeof t=="number"?typeof e=="function"?(n=e,e=void 0):typeof e!="number"&&(r=e,e=void 0):(r=t,n=e,t=void 0,e=void 0):arguments.length===3&&(typeof e=="number"?typeof r=="function"&&(n=r,r=void 0):(n=r,r=e,e=void 0)),r=r||{},t===void 0&&(t=r.bits||2048),e===void 0&&(e=r.e||65537),!Y.options.usePureJavaScript&&!r.prng&&t>=256&&t<=16384&&(e===65537||e===3)){if(n){if(gd("generateKeyPair"))return Is.generateKeyPair("rsa",{modulusLength:t,publicExponent:e,publicKeyEncoding:{type:"spki",format:"pem"},privateKeyEncoding:{type:"pkcs8",format:"pem"}},function(s,l,c){if(s)return n(s);n(null,{privateKey:J.privateKeyFromPem(c),publicKey:J.publicKeyFromPem(l)})});if(bd("generateKey")&&bd("exportKey"))return Et.globalScope.crypto.subtle.generateKey({name:"RSASSA-PKCS1-v1_5",modulusLength:t,publicExponent:vd(e),hash:{name:"SHA-256"}},!0,["sign","verify"]).then(function(s){return Et.globalScope.crypto.subtle.exportKey("pkcs8",s.privateKey)}).then(void 0,function(s){n(s)}).then(function(s){if(s){var l=J.privateKeyFromAsn1(A.fromDer(Y.util.createBuffer(s)));n(null,{privateKey:l,publicKey:J.setRsaPublicKey(l.n,l.e)})}});if(md("generateKey")&&md("exportKey")){var o=Et.globalScope.msCrypto.subtle.generateKey({name:"RSASSA-PKCS1-v1_5",modulusLength:t,publicExponent:vd(e),hash:{name:"SHA-256"}},!0,["sign","verify"]);o.oncomplete=function(s){var l=s.target.result,c=Et.globalScope.msCrypto.subtle.exportKey("pkcs8",l.privateKey);c.oncomplete=function(d){var u=d.target.result,f=J.privateKeyFromAsn1(A.fromDer(Y.util.createBuffer(u)));n(null,{privateKey:f,publicKey:J.setRsaPublicKey(f.n,f.e)})},c.onerror=function(d){n(d)}},o.onerror=function(s){n(s)};return}}else if(gd("generateKeyPairSync")){var a=Is.generateKeyPairSync("rsa",{modulusLength:t,publicExponent:e,publicKeyEncoding:{type:"spki",format:"pem"},privateKeyEncoding:{type:"pkcs8",format:"pem"}});return{privateKey:J.privateKeyFromPem(a.privateKey),publicKey:J.publicKeyFromPem(a.publicKey)}}}var i=J.rsa.createKeyPairGenerationState(t,e,r);if(!n)return J.rsa.stepKeyPairGenerationState(i,0),i.keys;RI(i,r,n)};J.setRsaPublicKey=J.rsa.setPublicKey=function(t,e){var r={n:t,e};return r.encrypt=function(n,o,a){if(typeof o=="string"?o=o.toUpperCase():o===void 0&&(o="RSAES-PKCS1-V1_5"),o==="RSAES-PKCS1-V1_5")o={encode:function(s,l,c){return bp(s,l,2).getBytes()}};else if(o==="RSA-OAEP"||o==="RSAES-OAEP")o={encode:function(s,l){return Y.pkcs1.encode_rsa_oaep(l,s,a)}};else if(["RAW","NONE","NULL",null].indexOf(o)!==-1)o={encode:function(s){return s}};else if(typeof o=="string")throw new Error('Unsupported encryption scheme: "'+o+'".');var i=o.encode(n,r,!0);return J.rsa.encrypt(i,r,!0)},r.verify=function(n,o,a,i){typeof a=="string"?a=a.toUpperCase():a===void 0&&(a="RSASSA-PKCS1-V1_5"),i===void 0&&(i={_parseAllDigestBytes:!0}),"_parseAllDigestBytes"in i||(i._parseAllDigestBytes=!0),a==="RSASSA-PKCS1-V1_5"?a={verify:function(l,c){c=ka(c,r,!0);var d=A.fromDer(c,{parseAllBytes:i._parseAllDigestBytes}),u={},f=[];if(!A.validate(d,AI,u,f)){var p=new Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value.");throw p.errors=f,p}var h=A.derToOid(u.algorithmIdentifier);if(!(h===Y.oids.md2||h===Y.oids.md5||h===Y.oids.sha1||h===Y.oids.sha224||h===Y.oids.sha256||h===Y.oids.sha384||h===Y.oids.sha512||h===Y.oids["sha512-224"]||h===Y.oids["sha512-256"])){var p=new Error("Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier.");throw p.oid=h,p}if((h===Y.oids.md2||h===Y.oids.md5)&&!("parameters"in u))throw new Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifer NULL parameters.");return l===u.digest}}:(a==="NONE"||a==="NULL"||a===null)&&(a={verify:function(l,c){return c=ka(c,r,!0),l===c}});var s=J.rsa.decrypt(o,r,!0,!1);return a.verify(n,s,r.n.bitLength())},r};J.setRsaPrivateKey=J.rsa.setPrivateKey=function(t,e,r,n,o,a,i,s){var l={n:t,e,d:r,p:n,q:o,dP:a,dQ:i,qInv:s};return l.decrypt=function(c,d,u){typeof d=="string"?d=d.toUpperCase():d===void 0&&(d="RSAES-PKCS1-V1_5");var f=J.rsa.decrypt(c,l,!1,!1);if(d==="RSAES-PKCS1-V1_5")d={decode:ka};else if(d==="RSA-OAEP"||d==="RSAES-OAEP")d={decode:function(p,h){return Y.pkcs1.decode_rsa_oaep(h,p,u)}};else if(["RAW","NONE","NULL",null].indexOf(d)!==-1)d={decode:function(p){return p}};else throw new Error('Unsupported encryption scheme: "'+d+'".');return d.decode(f,l,!1)},l.sign=function(c,d){var u=!1;typeof d=="string"&&(d=d.toUpperCase()),d===void 0||d==="RSASSA-PKCS1-V1_5"?(d={encode:II},u=1):(d==="NONE"||d==="NULL"||d===null)&&(d={encode:function(){return c}},u=1);var f=d.encode(c,l.n.bitLength());return J.rsa.encrypt(f,l,u)},l};J.wrapRsaPrivateKey=function(t){return A.create(A.Class.UNIVERSAL,A.Type.SEQUENCE,!0,[A.create(A.Class.UNIVERSAL,A.Type.INTEGER,!1,A.integerToDer(0).getBytes()),A.create(A.Class.UNIVERSAL,A.Type.SEQUENCE,!0,[A.create(A.Class.UNIVERSAL,A.Type.OID,!1,A.oidToDer(J.oids.rsaEncryption).getBytes()),A.create(A.Class.UNIVERSAL,A.Type.NULL,!1,"")]),A.create(A.Class.UNIVERSAL,A.Type.OCTETSTRING,!1,A.toDer(t).getBytes())])};J.privateKeyFromAsn1=function(t){var e={},r=[];if(A.validate(t,EI,e,r)&&(t=A.fromDer(Y.util.createBuffer(e.privateKey))),e={},r=[],!A.validate(t,_I,e,r)){var n=new Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.");throw n.errors=r,n}var o,a,i,s,l,c,d,u;return o=Y.util.createBuffer(e.privateKeyModulus).toHex(),a=Y.util.createBuffer(e.privateKeyPublicExponent).toHex(),i=Y.util.createBuffer(e.privateKeyPrivateExponent).toHex(),s=Y.util.createBuffer(e.privateKeyPrime1).toHex(),l=Y.util.createBuffer(e.privateKeyPrime2).toHex(),c=Y.util.createBuffer(e.privateKeyExponent1).toHex(),d=Y.util.createBuffer(e.privateKeyExponent2).toHex(),u=Y.util.createBuffer(e.privateKeyCoefficient).toHex(),J.setRsaPrivateKey(new ue(o,16),new ue(a,16),new ue(i,16),new ue(s,16),new ue(l,16),new ue(c,16),new ue(d,16),new ue(u,16))};J.privateKeyToAsn1=J.privateKeyToRSAPrivateKey=function(t){return A.create(A.Class.UNIVERSAL,A.Type.SEQUENCE,!0,[A.create(A.Class.UNIVERSAL,A.Type.INTEGER,!1,A.integerToDer(0).getBytes()),A.create(A.Class.UNIVERSAL,A.Type.INTEGER,!1,Ut(t.n)),A.create(A.Class.UNIVERSAL,A.Type.INTEGER,!1,Ut(t.e)),A.create(A.Class.UNIVERSAL,A.Type.INTEGER,!1,Ut(t.d)),A.create(A.Class.UNIVERSAL,A.Type.INTEGER,!1,Ut(t.p)),A.create(A.Class.UNIVERSAL,A.Type.INTEGER,!1,Ut(t.q)),A.create(A.Class.UNIVERSAL,A.Type.INTEGER,!1,Ut(t.dP)),A.create(A.Class.UNIVERSAL,A.Type.INTEGER,!1,Ut(t.dQ)),A.create(A.Class.UNIVERSAL,A.Type.INTEGER,!1,Ut(t.qInv))])};J.publicKeyFromAsn1=function(t){var e={},r=[];if(A.validate(t,BI,e,r)){var n=A.derToOid(e.publicKeyOid);if(n!==J.oids.rsaEncryption){var o=new Error("Cannot read public key. Unknown OID.");throw o.oid=n,o}t=e.rsaPublicKey}if(r=[],!A.validate(t,TI,e,r)){var o=new Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.");throw o.errors=r,o}var a=Y.util.createBuffer(e.publicKeyModulus).toHex(),i=Y.util.createBuffer(e.publicKeyExponent).toHex();return J.setRsaPublicKey(new ue(a,16),new ue(i,16))};J.publicKeyToAsn1=J.publicKeyToSubjectPublicKeyInfo=function(t){return A.create(A.Class.UNIVERSAL,A.Type.SEQUENCE,!0,[A.create(A.Class.UNIVERSAL,A.Type.SEQUENCE,!0,[A.create(A.Class.UNIVERSAL,A.Type.OID,!1,A.oidToDer(J.oids.rsaEncryption).getBytes()),A.create(A.Class.UNIVERSAL,A.Type.NULL,!1,"")]),A.create(A.Class.UNIVERSAL,A.Type.BITSTRING,!1,[J.publicKeyToRSAPublicKey(t)])])};J.publicKeyToRSAPublicKey=function(t){return A.create(A.Class.UNIVERSAL,A.Type.SEQUENCE,!0,[A.create(A.Class.UNIVERSAL,A.Type.INTEGER,!1,Ut(t.n)),A.create(A.Class.UNIVERSAL,A.Type.INTEGER,!1,Ut(t.e))])};function bp(t,e,r){var n=Y.util.createBuffer(),o=Math.ceil(e.n.bitLength()/8);if(t.length>o-11){var a=new Error("Message is too long for PKCS#1 v1.5 padding.");throw a.length=t.length,a.max=o-11,a}n.putByte(0),n.putByte(r);var i=o-3-t.length,s;if(r===0||r===1){s=r===0?0:255;for(var l=0;l<i;++l)n.putByte(s)}else for(;i>0;){for(var c=0,d=Y.random.getBytes(i),l=0;l<i;++l)s=d.charCodeAt(l),s===0?++c:n.putByte(s);i=c}return n.putByte(0),n.putBytes(t),n}function ka(t,e,r,n){var o=Math.ceil(e.n.bitLength()/8),a=Y.util.createBuffer(t),i=a.getByte(),s=a.getByte();if(i!==0||r&&s!==0&&s!==1||!r&&s!=2||r&&s===0&&typeof n>"u")throw new Error("Encryption block is invalid.");var l=0;if(s===0){l=o-3-n;for(var c=0;c<l;++c)if(a.getByte()!==0)throw new Error("Encryption block is invalid.")}else if(s===1)for(l=0;a.length()>1;){if(a.getByte()!==255){--a.read;break}++l}else if(s===2)for(l=0;a.length()>1;){if(a.getByte()===0){--a.read;break}++l}var d=a.getByte();if(d!==0||l!==o-3-a.length())throw new Error("Encryption block is invalid.");return a.getBytes()}function RI(t,e,r){typeof e=="function"&&(r=e,e={}),e=e||{};var n={algorithm:{name:e.algorithm||"PRIMEINC",options:{workers:e.workers||2,workLoad:e.workLoad||100,workerScript:e.workerScript}}};"prng"in e&&(n.prng=e.prng),o();function o(){a(t.pBits,function(s,l){if(s)return r(s);if(t.p=l,t.q!==null)return i(s,t.q);a(t.qBits,i)})}function a(s,l){Y.prime.generateProbablePrime(s,n,l)}function i(s,l){if(s)return r(s);if(t.q=l,t.p.compareTo(t.q)<0){var c=t.p;t.p=t.q,t.q=c}if(t.p.subtract(ue.ONE).gcd(t.e).compareTo(ue.ONE)!==0){t.p=null,o();return}if(t.q.subtract(ue.ONE).gcd(t.e).compareTo(ue.ONE)!==0){t.q=null,a(t.qBits,i);return}if(t.p1=t.p.subtract(ue.ONE),t.q1=t.q.subtract(ue.ONE),t.phi=t.p1.multiply(t.q1),t.phi.gcd(t.e).compareTo(ue.ONE)!==0){t.p=t.q=null,o();return}if(t.n=t.p.multiply(t.q),t.n.bitLength()!==t.bits){t.q=null,a(t.qBits,i);return}var d=t.e.modInverse(t.phi);t.keys={privateKey:J.rsa.setPrivateKey(t.n,t.e,d,t.p,t.q,d.mod(t.p1),d.mod(t.q1),t.q.modInverse(t.p)),publicKey:J.rsa.setPublicKey(t.n,t.e)},r(null,t.keys)}}function Ut(t){var e=t.toString(16);e[0]>="8"&&(e="00"+e);var r=Y.util.hexToBytes(e);return r.length>1&&(r.charCodeAt(0)===0&&!(r.charCodeAt(1)&128)||r.charCodeAt(0)===255&&(r.charCodeAt(1)&128)===128)?r.substr(1):r}function DI(t){return t<=100?27:t<=150?18:t<=200?15:t<=250?12:t<=300?9:t<=350?8:t<=400?7:t<=500?6:t<=600?5:t<=800?4:t<=1250?3:2}function gd(t){return Y.util.isNodejs&&typeof Is[t]=="function"}function bd(t){return typeof Et.globalScope<"u"&&typeof Et.globalScope.crypto=="object"&&typeof Et.globalScope.crypto.subtle=="object"&&typeof Et.globalScope.crypto.subtle[t]=="function"}function md(t){return typeof Et.globalScope<"u"&&typeof Et.globalScope.msCrypto=="object"&&typeof Et.globalScope.msCrypto.subtle=="object"&&typeof Et.globalScope.msCrypto.subtle[t]=="function"}function vd(t){for(var e=Y.util.hexToBytes(t.toString(16)),r=new Uint8Array(e.length),n=0;n<e.length;++n)r[n]=e.charCodeAt(n);return r}var W=te;if(typeof LI>"u")var LI=W.jsbn.BigInteger;var I=W.asn1,ee=W.pki=W.pki||{};ee.pbe=W.pbe=W.pbe||{};var Or=ee.oids,NI={name:"EncryptedPrivateKeyInfo",tagClass:I.Class.UNIVERSAL,type:I.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedPrivateKeyInfo.encryptionAlgorithm",tagClass:I.Class.UNIVERSAL,type:I.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:I.Class.UNIVERSAL,type:I.Type.OID,constructed:!1,capture:"encryptionOid"},{name:"AlgorithmIdentifier.parameters",tagClass:I.Class.UNIVERSAL,type:I.Type.SEQUENCE,constructed:!0,captureAsn1:"encryptionParams"}]},{name:"EncryptedPrivateKeyInfo.encryptedData",tagClass:I.Class.UNIVERSAL,type:I.Type.OCTETSTRING,constructed:!1,capture:"encryptedData"}]},PI={name:"PBES2Algorithms",tagClass:I.Class.UNIVERSAL,type:I.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.keyDerivationFunc",tagClass:I.Class.UNIVERSAL,type:I.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.keyDerivationFunc.oid",tagClass:I.Class.UNIVERSAL,type:I.Type.OID,constructed:!1,capture:"kdfOid"},{name:"PBES2Algorithms.params",tagClass:I.Class.UNIVERSAL,type:I.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.params.salt",tagClass:I.Class.UNIVERSAL,type:I.Type.OCTETSTRING,constructed:!1,capture:"kdfSalt"},{name:"PBES2Algorithms.params.iterationCount",tagClass:I.Class.UNIVERSAL,type:I.Type.INTEGER,constructed:!1,capture:"kdfIterationCount"},{name:"PBES2Algorithms.params.keyLength",tagClass:I.Class.UNIVERSAL,type:I.Type.INTEGER,constructed:!1,optional:!0,capture:"keyLength"},{name:"PBES2Algorithms.params.prf",tagClass:I.Class.UNIVERSAL,type:I.Type.SEQUENCE,constructed:!0,optional:!0,value:[{name:"PBES2Algorithms.params.prf.algorithm",tagClass:I.Class.UNIVERSAL,type:I.Type.OID,constructed:!1,capture:"prfOid"}]}]}]},{name:"PBES2Algorithms.encryptionScheme",tagClass:I.Class.UNIVERSAL,type:I.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.encryptionScheme.oid",tagClass:I.Class.UNIVERSAL,type:I.Type.OID,constructed:!1,capture:"encOid"},{name:"PBES2Algorithms.encryptionScheme.iv",tagClass:I.Class.UNIVERSAL,type:I.Type.OCTETSTRING,constructed:!1,capture:"encIv"}]}]},OI={name:"pkcs-12PbeParams",tagClass:I.Class.UNIVERSAL,type:I.Type.SEQUENCE,constructed:!0,value:[{name:"pkcs-12PbeParams.salt",tagClass:I.Class.UNIVERSAL,type:I.Type.OCTETSTRING,constructed:!1,capture:"salt"},{name:"pkcs-12PbeParams.iterations",tagClass:I.Class.UNIVERSAL,type:I.Type.INTEGER,constructed:!1,capture:"iterations"}]};ee.encryptPrivateKeyInfo=function(t,e,r){r=r||{},r.saltSize=r.saltSize||8,r.count=r.count||2048,r.algorithm=r.algorithm||"aes128",r.prfAlgorithm=r.prfAlgorithm||"sha1";var n=W.random.getBytesSync(r.saltSize),o=r.count,a=I.integerToDer(o),i,s,l;if(r.algorithm.indexOf("aes")===0||r.algorithm==="des"){var c,d,u;switch(r.algorithm){case"aes128":i=16,c=16,d=Or["aes128-CBC"],u=W.aes.createEncryptionCipher;break;case"aes192":i=24,c=16,d=Or["aes192-CBC"],u=W.aes.createEncryptionCipher;break;case"aes256":i=32,c=16,d=Or["aes256-CBC"],u=W.aes.createEncryptionCipher;break;case"des":i=8,c=8,d=Or.desCBC,u=W.des.createEncryptionCipher;break;default:var f=new Error("Cannot encrypt private key. Unknown encryption algorithm.");throw f.algorithm=r.algorithm,f}var p="hmacWith"+r.prfAlgorithm.toUpperCase(),h=vp(p),g=W.pkcs5.pbkdf2(e,n,o,i,h),b=W.random.getBytesSync(c),x=u(g);x.start(b),x.update(I.toDer(t)),x.finish(),l=x.output.getBytes();var C=MI(n,a,i,p);s=I.create(I.Class.UNIVERSAL,I.Type.SEQUENCE,!0,[I.create(I.Class.UNIVERSAL,I.Type.OID,!1,I.oidToDer(Or.pkcs5PBES2).getBytes()),I.create(I.Class.UNIVERSAL,I.Type.SEQUENCE,!0,[I.create(I.Class.UNIVERSAL,I.Type.SEQUENCE,!0,[I.create(I.Class.UNIVERSAL,I.Type.OID,!1,I.oidToDer(Or.pkcs5PBKDF2).getBytes()),C]),I.create(I.Class.UNIVERSAL,I.Type.SEQUENCE,!0,[I.create(I.Class.UNIVERSAL,I.Type.OID,!1,I.oidToDer(d).getBytes()),I.create(I.Class.UNIVERSAL,I.Type.OCTETSTRING,!1,b)])])])}else if(r.algorithm==="3des"){i=24;var k=new W.util.ByteBuffer(n),g=ee.pbe.generatePkcs12Key(e,k,1,o,i),b=ee.pbe.generatePkcs12Key(e,k,2,o,i),x=W.des.createEncryptionCipher(g);x.start(b),x.update(I.toDer(t)),x.finish(),l=x.output.getBytes(),s=I.create(I.Class.UNIVERSAL,I.Type.SEQUENCE,!0,[I.create(I.Class.UNIVERSAL,I.Type.OID,!1,I.oidToDer(Or["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()),I.create(I.Class.UNIVERSAL,I.Type.SEQUENCE,!0,[I.create(I.Class.UNIVERSAL,I.Type.OCTETSTRING,!1,n),I.create(I.Class.UNIVERSAL,I.Type.INTEGER,!1,a.getBytes())])])}else{var f=new Error("Cannot encrypt private key. Unknown encryption algorithm.");throw f.algorithm=r.algorithm,f}var B=I.create(I.Class.UNIVERSAL,I.Type.SEQUENCE,!0,[s,I.create(I.Class.UNIVERSAL,I.Type.OCTETSTRING,!1,l)]);return B};ee.decryptPrivateKeyInfo=function(t,e){var r=null,n={},o=[];if(!I.validate(t,NI,n,o)){var a=new Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");throw a.errors=o,a}var i=I.derToOid(n.encryptionOid),s=ee.pbe.getCipher(i,n.encryptionParams,e),l=W.util.createBuffer(n.encryptedData);return s.update(l),s.finish()&&(r=I.fromDer(s.output)),r};ee.encryptedPrivateKeyToPem=function(t,e){var r={type:"ENCRYPTED PRIVATE KEY",body:I.toDer(t).getBytes()};return W.pem.encode(r,{maxline:e})};ee.encryptedPrivateKeyFromPem=function(t){var e=W.pem.decode(t)[0];if(e.type!=="ENCRYPTED PRIVATE KEY"){var r=new Error('Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".');throw r.headerType=e.type,r}if(e.procType&&e.procType.type==="ENCRYPTED")throw new Error("Could not convert encrypted private key from PEM; PEM is encrypted.");return I.fromDer(e.body)};ee.encryptRsaPrivateKey=function(t,e,r){if(r=r||{},!r.legacy){var n=ee.wrapRsaPrivateKey(ee.privateKeyToAsn1(t));return n=ee.encryptPrivateKeyInfo(n,e,r),ee.encryptedPrivateKeyToPem(n)}var o,a,i,s;switch(r.algorithm){case"aes128":o="AES-128-CBC",i=16,a=W.random.getBytesSync(16),s=W.aes.createEncryptionCipher;break;case"aes192":o="AES-192-CBC",i=24,a=W.random.getBytesSync(16),s=W.aes.createEncryptionCipher;break;case"aes256":o="AES-256-CBC",i=32,a=W.random.getBytesSync(16),s=W.aes.createEncryptionCipher;break;case"3des":o="DES-EDE3-CBC",i=24,a=W.random.getBytesSync(8),s=W.des.createEncryptionCipher;break;case"des":o="DES-CBC",i=8,a=W.random.getBytesSync(8),s=W.des.createEncryptionCipher;break;default:var l=new Error('Could not encrypt RSA private key; unsupported encryption algorithm "'+r.algorithm+'".');throw l.algorithm=r.algorithm,l}var c=W.pbe.opensslDeriveBytes(e,a.substr(0,8),i),d=s(c);d.start(a),d.update(I.toDer(ee.privateKeyToAsn1(t))),d.finish();var u={type:"RSA PRIVATE KEY",procType:{version:"4",type:"ENCRYPTED"},dekInfo:{algorithm:o,parameters:W.util.bytesToHex(a).toUpperCase()},body:d.output.getBytes()};return W.pem.encode(u)};ee.decryptRsaPrivateKey=function(t,e){var r=null,n=W.pem.decode(t)[0];if(n.type!=="ENCRYPTED PRIVATE KEY"&&n.type!=="PRIVATE KEY"&&n.type!=="RSA PRIVATE KEY"){var o=new Error('Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".');throw o.headerType=o,o}if(n.procType&&n.procType.type==="ENCRYPTED"){var a,i;switch(n.dekInfo.algorithm){case"DES-CBC":a=8,i=W.des.createDecryptionCipher;break;case"DES-EDE3-CBC":a=24,i=W.des.createDecryptionCipher;break;case"AES-128-CBC":a=16,i=W.aes.createDecryptionCipher;break;case"AES-192-CBC":a=24,i=W.aes.createDecryptionCipher;break;case"AES-256-CBC":a=32,i=W.aes.createDecryptionCipher;break;case"RC2-40-CBC":a=5,i=function(u){return W.rc2.createDecryptionCipher(u,40)};break;case"RC2-64-CBC":a=8,i=function(u){return W.rc2.createDecryptionCipher(u,64)};break;case"RC2-128-CBC":a=16,i=function(u){return W.rc2.createDecryptionCipher(u,128)};break;default:var o=new Error('Could not decrypt private key; unsupported encryption algorithm "'+n.dekInfo.algorithm+'".');throw o.algorithm=n.dekInfo.algorithm,o}var s=W.util.hexToBytes(n.dekInfo.parameters),l=W.pbe.opensslDeriveBytes(e,s.substr(0,8),a),c=i(l);if(c.start(s),c.update(W.util.createBuffer(n.body)),c.finish())r=c.output.getBytes();else return r}else r=n.body;return n.type==="ENCRYPTED PRIVATE KEY"?r=ee.decryptPrivateKeyInfo(I.fromDer(r),e):r=I.fromDer(r),r!==null&&(r=ee.privateKeyFromAsn1(r)),r};ee.pbe.generatePkcs12Key=function(t,e,r,n,o,a){var i,s;if(typeof a>"u"||a===null){if(!("sha1"in W.md))throw new Error('"sha1" hash algorithm unavailable.');a=W.md.sha1.create()}var l=a.digestLength,c=a.blockLength,d=new W.util.ByteBuffer,u=new W.util.ByteBuffer;if(t!=null){for(s=0;s<t.length;s++)u.putInt16(t.charCodeAt(s));u.putInt16(0)}var f=u.length(),p=e.length(),h=new W.util.ByteBuffer;h.fillWithByte(r,c);var g=c*Math.ceil(p/c),b=new W.util.ByteBuffer;for(s=0;s<g;s++)b.putByte(e.at(s%p));var x=c*Math.ceil(f/c),C=new W.util.ByteBuffer;for(s=0;s<x;s++)C.putByte(u.at(s%f));var k=b;k.putBuffer(C);for(var B=Math.ceil(o/l),_=1;_<=B;_++){var T=new W.util.ByteBuffer;T.putBytes(h.bytes()),T.putBytes(k.bytes());for(var R=0;R<n;R++)a.start(),a.update(T.getBytes()),T=a.digest();var D=new W.util.ByteBuffer;for(s=0;s<c;s++)D.putByte(T.at(s%l));var O=Math.ceil(p/c)+Math.ceil(f/c),U=new W.util.ByteBuffer;for(i=0;i<O;i++){var K=new W.util.ByteBuffer(k.getBytes(c)),q=511;for(s=D.length()-1;s>=0;s--)q=q>>8,q+=D.at(s)+K.at(s),K.setAt(s,q&255);U.putBuffer(K)}k=U,d.putBuffer(T)}return d.truncate(d.length()-o),d};ee.pbe.getCipher=function(t,e,r){switch(t){case ee.oids.pkcs5PBES2:return ee.pbe.getCipherForPBES2(t,e,r);case ee.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:case ee.oids["pbewithSHAAnd40BitRC2-CBC"]:return ee.pbe.getCipherForPKCS12PBE(t,e,r);default:var n=new Error("Cannot read encrypted PBE data block. Unsupported OID.");throw n.oid=t,n.supportedOids=["pkcs5PBES2","pbeWithSHAAnd3-KeyTripleDES-CBC","pbewithSHAAnd40BitRC2-CBC"],n}};ee.pbe.getCipherForPBES2=function(t,e,r){var n={},o=[];if(!I.validate(e,PI,n,o)){var a=new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");throw a.errors=o,a}if(t=I.derToOid(n.kdfOid),t!==ee.oids.pkcs5PBKDF2){var a=new Error("Cannot read encrypted private key. Unsupported key derivation function OID.");throw a.oid=t,a.supportedOids=["pkcs5PBKDF2"],a}if(t=I.derToOid(n.encOid),t!==ee.oids["aes128-CBC"]&&t!==ee.oids["aes192-CBC"]&&t!==ee.oids["aes256-CBC"]&&t!==ee.oids["des-EDE3-CBC"]&&t!==ee.oids.desCBC){var a=new Error("Cannot read encrypted private key. Unsupported encryption scheme OID.");throw a.oid=t,a.supportedOids=["aes128-CBC","aes192-CBC","aes256-CBC","des-EDE3-CBC","desCBC"],a}var i=n.kdfSalt,s=W.util.createBuffer(n.kdfIterationCount);s=s.getInt(s.length()<<3);var l,c;switch(ee.oids[t]){case"aes128-CBC":l=16,c=W.aes.createDecryptionCipher;break;case"aes192-CBC":l=24,c=W.aes.createDecryptionCipher;break;case"aes256-CBC":l=32,c=W.aes.createDecryptionCipher;break;case"des-EDE3-CBC":l=24,c=W.des.createDecryptionCipher;break;case"desCBC":l=8,c=W.des.createDecryptionCipher;break}var d=mp(n.prfOid),u=W.pkcs5.pbkdf2(r,i,s,l,d),f=n.encIv,p=c(u);return p.start(f),p};ee.pbe.getCipherForPKCS12PBE=function(t,e,r){var n={},o=[];if(!I.validate(e,OI,n,o)){var a=new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");throw a.errors=o,a}var i=W.util.createBuffer(n.salt),s=W.util.createBuffer(n.iterations);s=s.getInt(s.length()<<3);var l,c,d;switch(t){case ee.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:l=24,c=8,d=W.des.startDecrypting;break;case ee.oids["pbewithSHAAnd40BitRC2-CBC"]:l=5,c=8,d=function(g,b){var x=W.rc2.createDecryptionCipher(g,40);return x.start(b,null),x};break;default:var a=new Error("Cannot read PKCS #12 PBE data block. Unsupported OID.");throw a.oid=t,a}var u=mp(n.prfOid),f=ee.pbe.generatePkcs12Key(r,i,1,s,l,u);u.start();var p=ee.pbe.generatePkcs12Key(r,i,2,s,c,u);return d(f,p)};ee.pbe.opensslDeriveBytes=function(t,e,r,n){if(typeof n>"u"||n===null){if(!("md5"in W.md))throw new Error('"md5" hash algorithm unavailable.');n=W.md.md5.create()}e===null&&(e="");for(var o=[yd(n,t+e)],a=16,i=1;a<r;++i,a+=16)o.push(yd(n,o[i-1]+t+e));return o.join("").substr(0,r)};function yd(t,e){return t.start().update(e).digest().getBytes()}function mp(t){var e;if(!t)e="hmacWithSHA1";else if(e=ee.oids[I.derToOid(t)],!e){var r=new Error("Unsupported PRF OID.");throw r.oid=t,r.supported=["hmacWithSHA1","hmacWithSHA224","hmacWithSHA256","hmacWithSHA384","hmacWithSHA512"],r}return vp(e)}function vp(t){var e=W.md;switch(t){case"hmacWithSHA224":e=W.md.sha512;case"hmacWithSHA1":case"hmacWithSHA256":case"hmacWithSHA384":case"hmacWithSHA512":t=t.substr(8).toLowerCase();break;default:var r=new Error("Unsupported PRF algorithm.");throw r.algorithm=t,r.supported=["hmacWithSHA1","hmacWithSHA224","hmacWithSHA256","hmacWithSHA384","hmacWithSHA512"],r}if(!e||!(t in e))throw new Error("Unknown hash algorithm: "+t);return e[t].create()}function MI(t,e,r,n){var o=I.create(I.Class.UNIVERSAL,I.Type.SEQUENCE,!0,[I.create(I.Class.UNIVERSAL,I.Type.OCTETSTRING,!1,t),I.create(I.Class.UNIVERSAL,I.Type.INTEGER,!1,e.getBytes())]);return n!=="hmacWithSHA1"&&o.value.push(I.create(I.Class.UNIVERSAL,I.Type.INTEGER,!1,W.util.hexToBytes(r.toString(16))),I.create(I.Class.UNIVERSAL,I.Type.SEQUENCE,!0,[I.create(I.Class.UNIVERSAL,I.Type.OID,!1,I.oidToDer(ee.oids[n]).getBytes()),I.create(I.Class.UNIVERSAL,I.Type.NULL,!1,"")])),o}var Sn=te,V=Sn.asn1,Mn=Sn.pkcs7asn1=Sn.pkcs7asn1||{};Sn.pkcs7=Sn.pkcs7||{};Sn.pkcs7.asn1=Mn;var yp={name:"ContentInfo",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,value:[{name:"ContentInfo.ContentType",tagClass:V.Class.UNIVERSAL,type:V.Type.OID,constructed:!1,capture:"contentType"},{name:"ContentInfo.content",tagClass:V.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,captureAsn1:"content"}]};Mn.contentInfoValidator=yp;var xp={name:"EncryptedContentInfo",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedContentInfo.contentType",tagClass:V.Class.UNIVERSAL,type:V.Type.OID,constructed:!1,capture:"contentType"},{name:"EncryptedContentInfo.contentEncryptionAlgorithm",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",tagClass:V.Class.UNIVERSAL,type:V.Type.OID,constructed:!1,capture:"encAlgorithm"},{name:"EncryptedContentInfo.contentEncryptionAlgorithm.parameter",tagClass:V.Class.UNIVERSAL,captureAsn1:"encParameter"}]},{name:"EncryptedContentInfo.encryptedContent",tagClass:V.Class.CONTEXT_SPECIFIC,type:0,capture:"encryptedContent",captureAsn1:"encryptedContentAsn1"}]};Mn.envelopedDataValidator={name:"EnvelopedData",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,value:[{name:"EnvelopedData.Version",tagClass:V.Class.UNIVERSAL,type:V.Type.INTEGER,constructed:!1,capture:"version"},{name:"EnvelopedData.RecipientInfos",tagClass:V.Class.UNIVERSAL,type:V.Type.SET,constructed:!0,captureAsn1:"recipientInfos"}].concat(xp)};Mn.encryptedDataValidator={name:"EncryptedData",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedData.Version",tagClass:V.Class.UNIVERSAL,type:V.Type.INTEGER,constructed:!1,capture:"version"}].concat(xp)};var $I={name:"SignerInfo",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.version",tagClass:V.Class.UNIVERSAL,type:V.Type.INTEGER,constructed:!1},{name:"SignerInfo.issuerAndSerialNumber",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.issuerAndSerialNumber.issuer",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,captureAsn1:"issuer"},{name:"SignerInfo.issuerAndSerialNumber.serialNumber",tagClass:V.Class.UNIVERSAL,type:V.Type.INTEGER,constructed:!1,capture:"serial"}]},{name:"SignerInfo.digestAlgorithm",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.digestAlgorithm.algorithm",tagClass:V.Class.UNIVERSAL,type:V.Type.OID,constructed:!1,capture:"digestAlgorithm"},{name:"SignerInfo.digestAlgorithm.parameter",tagClass:V.Class.UNIVERSAL,constructed:!1,captureAsn1:"digestParameter",optional:!0}]},{name:"SignerInfo.authenticatedAttributes",tagClass:V.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,capture:"authenticatedAttributes"},{name:"SignerInfo.digestEncryptionAlgorithm",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,capture:"signatureAlgorithm"},{name:"SignerInfo.encryptedDigest",tagClass:V.Class.UNIVERSAL,type:V.Type.OCTETSTRING,constructed:!1,capture:"signature"},{name:"SignerInfo.unauthenticatedAttributes",tagClass:V.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,optional:!0,capture:"unauthenticatedAttributes"}]};Mn.signedDataValidator={name:"SignedData",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,value:[{name:"SignedData.Version",tagClass:V.Class.UNIVERSAL,type:V.Type.INTEGER,constructed:!1,capture:"version"},{name:"SignedData.DigestAlgorithms",tagClass:V.Class.UNIVERSAL,type:V.Type.SET,constructed:!0,captureAsn1:"digestAlgorithms"},yp,{name:"SignedData.Certificates",tagClass:V.Class.CONTEXT_SPECIFIC,type:0,optional:!0,captureAsn1:"certificates"},{name:"SignedData.CertificateRevocationLists",tagClass:V.Class.CONTEXT_SPECIFIC,type:1,optional:!0,captureAsn1:"crls"},{name:"SignedData.SignerInfos",tagClass:V.Class.UNIVERSAL,type:V.Type.SET,capture:"signerInfos",optional:!0,value:[$I]}]};Mn.recipientInfoValidator={name:"RecipientInfo",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.version",tagClass:V.Class.UNIVERSAL,type:V.Type.INTEGER,constructed:!1,capture:"version"},{name:"RecipientInfo.issuerAndSerial",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.issuerAndSerial.issuer",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,captureAsn1:"issuer"},{name:"RecipientInfo.issuerAndSerial.serialNumber",tagClass:V.Class.UNIVERSAL,type:V.Type.INTEGER,constructed:!1,capture:"serial"}]},{name:"RecipientInfo.keyEncryptionAlgorithm",tagClass:V.Class.UNIVERSAL,type:V.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.keyEncryptionAlgorithm.algorithm",tagClass:V.Class.UNIVERSAL,type:V.Type.OID,constructed:!1,capture:"encAlgorithm"},{name:"RecipientInfo.keyEncryptionAlgorithm.parameter",tagClass:V.Class.UNIVERSAL,constructed:!1,captureAsn1:"encParameter",optional:!0}]},{name:"RecipientInfo.encryptedKey",tagClass:V.Class.UNIVERSAL,type:V.Type.OCTETSTRING,constructed:!1,capture:"encKey"}]};var qr=te;qr.mgf=qr.mgf||{};var FI=qr.mgf.mgf1=qr.mgf1=qr.mgf1||{};FI.create=function(t){var e={generate:function(r,n){for(var o=new qr.util.ByteBuffer,a=Math.ceil(n/t.digestLength),i=0;i<a;i++){var s=new qr.util.ByteBuffer;s.putInt32(i),t.start(),t.update(r+s.getBytes()),o.putBuffer(t.digest())}return o.truncate(o.length()-n),o.getBytes()}};return e};var wa=te;wa.mgf=wa.mgf||{};wa.mgf.mgf1=wa.mgf1;var Ur=te,zI=Ur.pss=Ur.pss||{};zI.create=function(t){arguments.length===3&&(t={md:arguments[0],mgf:arguments[1],saltLength:arguments[2]});var e=t.md,r=t.mgf,n=e.digestLength,o=t.salt||null;typeof o=="string"&&(o=Ur.util.createBuffer(o));var a;if("saltLength"in t)a=t.saltLength;else if(o!==null)a=o.length();else throw new Error("Salt length not specified or specific salt not given.");if(o!==null&&o.length()!==a)throw new Error("Given salt length does not match length of given salt.");var i=t.prng||Ur.random,s={};return s.encode=function(l,c){var d,u=c-1,f=Math.ceil(u/8),p=l.digest().getBytes();if(f<n+a+2)throw new Error("Message is too long to encrypt.");var h;o===null?h=i.getBytesSync(a):h=o.bytes();var g=new Ur.util.ByteBuffer;g.fillWithByte(0,8),g.putBytes(p),g.putBytes(h),e.start(),e.update(g.getBytes());var b=e.digest().getBytes(),x=new Ur.util.ByteBuffer;x.fillWithByte(0,f-a-n-2),x.putByte(1),x.putBytes(h);var C=x.getBytes(),k=f-n-1,B=r.generate(b,k),_="";for(d=0;d<k;d++)_+=String.fromCharCode(C.charCodeAt(d)^B.charCodeAt(d));var T=65280>>8*f-u&255;return _=String.fromCharCode(_.charCodeAt(0)&~T)+_.substr(1),_+b+"¼"},s.verify=function(l,c,d){var u,f=d-1,p=Math.ceil(f/8);if(c=c.substr(-p),p<n+a+2)throw new Error("Inconsistent parameters to PSS signature verification.");if(c.charCodeAt(p-1)!==188)throw new Error("Encoded message does not end in 0xBC.");var h=p-n-1,g=c.substr(0,h),b=c.substr(h,n),x=65280>>8*p-f&255;if(g.charCodeAt(0)&x)throw new Error("Bits beyond keysize not zero as expected.");var C=r.generate(b,h),k="";for(u=0;u<h;u++)k+=String.fromCharCode(g.charCodeAt(u)^C.charCodeAt(u));k=String.fromCharCode(k.charCodeAt(0)&~x)+k.substr(1);var B=p-n-a-2;for(u=0;u<B;u++)if(k.charCodeAt(u)!==0)throw new Error("Leftmost octets not zero as expected");if(k.charCodeAt(B)!==1)throw new Error("Inconsistent PSS signature, 0x01 marker not found");var _=k.substr(-a),T=new Ur.util.ByteBuffer;T.fillWithByte(0,8),T.putBytes(l),T.putBytes(_),e.start(),e.update(T.getBytes());var R=e.digest().getBytes();return b===R},s};var X=te,m=X.asn1,M=X.pki=X.pki||{},le=M.oids,Pe={};Pe.CN=le.commonName;Pe.commonName="CN";Pe.C=le.countryName;Pe.countryName="C";Pe.L=le.localityName;Pe.localityName="L";Pe.ST=le.stateOrProvinceName;Pe.stateOrProvinceName="ST";Pe.O=le.organizationName;Pe.organizationName="O";Pe.OU=le.organizationalUnitName;Pe.organizationalUnitName="OU";Pe.E=le.emailAddress;Pe.emailAddress="E";var Cp=X.pki.rsa.publicKeyValidator,UI={name:"Certificate",tagClass:m.Class.UNIVERSAL,type:m.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate",tagClass:m.Class.UNIVERSAL,type:m.Type.SEQUENCE,constructed:!0,captureAsn1:"tbsCertificate",value:[{name:"Certificate.TBSCertificate.version",tagClass:m.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.version.integer",tagClass:m.Class.UNIVERSAL,type:m.Type.INTEGER,constructed:!1,capture:"certVersion"}]},{name:"Certificate.TBSCertificate.serialNumber",tagClass:m.Class.UNIVERSAL,type:m.Type.INTEGER,constructed:!1,capture:"certSerialNumber"},{name:"Certificate.TBSCertificate.signature",tagClass:m.Class.UNIVERSAL,type:m.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate.signature.algorithm",tagClass:m.Class.UNIVERSAL,type:m.Type.OID,constructed:!1,capture:"certinfoSignatureOid"},{name:"Certificate.TBSCertificate.signature.parameters",tagClass:m.Class.UNIVERSAL,optional:!0,captureAsn1:"certinfoSignatureParams"}]},{name:"Certificate.TBSCertificate.issuer",tagClass:m.Class.UNIVERSAL,type:m.Type.SEQUENCE,constructed:!0,captureAsn1:"certIssuer"},{name:"Certificate.TBSCertificate.validity",tagClass:m.Class.UNIVERSAL,type:m.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate.validity.notBefore (utc)",tagClass:m.Class.UNIVERSAL,type:m.Type.UTCTIME,constructed:!1,optional:!0,capture:"certValidity1UTCTime"},{name:"Certificate.TBSCertificate.validity.notBefore (generalized)",tagClass:m.Class.UNIVERSAL,type:m.Type.GENERALIZEDTIME,constructed:!1,optional:!0,capture:"certValidity2GeneralizedTime"},{name:"Certificate.TBSCertificate.validity.notAfter (utc)",tagClass:m.Class.UNIVERSAL,type:m.Type.UTCTIME,constructed:!1,optional:!0,capture:"certValidity3UTCTime"},{name:"Certificate.TBSCertificate.validity.notAfter (generalized)",tagClass:m.Class.UNIVERSAL,type:m.Type.GENERALIZEDTIME,constructed:!1,optional:!0,capture:"certValidity4GeneralizedTime"}]},{name:"Certificate.TBSCertificate.subject",tagClass:m.Class.UNIVERSAL,type:m.Type.SEQUENCE,constructed:!0,captureAsn1:"certSubject"},Cp,{name:"Certificate.TBSCertificate.issuerUniqueID",tagClass:m.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.issuerUniqueID.id",tagClass:m.Class.UNIVERSAL,type:m.Type.BITSTRING,constructed:!1,captureBitStringValue:"certIssuerUniqueId"}]},{name:"Certificate.TBSCertificate.subjectUniqueID",tagClass:m.Class.CONTEXT_SPECIFIC,type:2,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.subjectUniqueID.id",tagClass:m.Class.UNIVERSAL,type:m.Type.BITSTRING,constructed:!1,captureBitStringValue:"certSubjectUniqueId"}]},{name:"Certificate.TBSCertificate.extensions",tagClass:m.Class.CONTEXT_SPECIFIC,type:3,constructed:!0,captureAsn1:"certExtensions",optional:!0}]},{name:"Certificate.signatureAlgorithm",tagClass:m.Class.UNIVERSAL,type:m.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.signatureAlgorithm.algorithm",tagClass:m.Class.UNIVERSAL,type:m.Type.OID,constructed:!1,capture:"certSignatureOid"},{name:"Certificate.TBSCertificate.signature.parameters",tagClass:m.Class.UNIVERSAL,optional:!0,captureAsn1:"certSignatureParams"}]},{name:"Certificate.signatureValue",tagClass:m.Class.UNIVERSAL,type:m.Type.BITSTRING,constructed:!1,captureBitStringValue:"certSignature"}]},VI={name:"rsapss",tagClass:m.Class.UNIVERSAL,type:m.Type.SEQUENCE,constructed:!0,value:[{name:"rsapss.hashAlgorithm",tagClass:m.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,value:[{name:"rsapss.hashAlgorithm.AlgorithmIdentifier",tagClass:m.Class.UNIVERSAL,type:m.Class.SEQUENCE,constructed:!0,optional:!0,value:[{name:"rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",tagClass:m.Class.UNIVERSAL,type:m.Type.OID,constructed:!1,capture:"hashOid"}]}]},{name:"rsapss.maskGenAlgorithm",tagClass:m.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier",tagClass:m.Class.UNIVERSAL,type:m.Class.SEQUENCE,constructed:!0,optional:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",tagClass:m.Class.UNIVERSAL,type:m.Type.OID,constructed:!1,capture:"maskGenOid"},{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",tagClass:m.Class.UNIVERSAL,type:m.Type.SEQUENCE,constructed:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",tagClass:m.Class.UNIVERSAL,type:m.Type.OID,constructed:!1,capture:"maskGenHashOid"}]}]}]},{name:"rsapss.saltLength",tagClass:m.Class.CONTEXT_SPECIFIC,type:2,optional:!0,value:[{name:"rsapss.saltLength.saltLength",tagClass:m.Class.UNIVERSAL,type:m.Class.INTEGER,constructed:!1,capture:"saltLength"}]},{name:"rsapss.trailerField",tagClass:m.Class.CONTEXT_SPECIFIC,type:3,optional:!0,value:[{name:"rsapss.trailer.trailer",tagClass:m.Class.UNIVERSAL,type:m.Class.INTEGER,constructed:!1,capture:"trailer"}]}]},KI={name:"CertificationRequestInfo",tagClass:m.Class.UNIVERSAL,type:m.Type.SEQUENCE,constructed:!0,captureAsn1:"certificationRequestInfo",value:[{name:"CertificationRequestInfo.integer",tagClass:m.Class.UNIVERSAL,type:m.Type.INTEGER,constructed:!1,capture:"certificationRequestInfoVersion"},{name:"CertificationRequestInfo.subject",tagClass:m.Class.UNIVERSAL,type:m.Type.SEQUENCE,constructed:!0,captureAsn1:"certificationRequestInfoSubject"},Cp,{name:"CertificationRequestInfo.attributes",tagClass:m.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,capture:"certificationRequestInfoAttributes",value:[{name:"CertificationRequestInfo.attributes",tagClass:m.Class.UNIVERSAL,type:m.Type.SEQUENCE,constructed:!0,value:[{name:"CertificationRequestInfo.attributes.type",tagClass:m.Class.UNIVERSAL,type:m.Type.OID,constructed:!1},{name:"CertificationRequestInfo.attributes.value",tagClass:m.Class.UNIVERSAL,type:m.Type.SET,constructed:!0}]}]}]},HI={name:"CertificationRequest",tagClass:m.Class.UNIVERSAL,type:m.Type.SEQUENCE,constructed:!0,captureAsn1:"csr",value:[KI,{name:"CertificationRequest.signatureAlgorithm",tagClass:m.Class.UNIVERSAL,type:m.Type.SEQUENCE,constructed:!0,value:[{name:"CertificationRequest.signatureAlgorithm.algorithm",tagClass:m.Class.UNIVERSAL,type:m.Type.OID,constructed:!1,capture:"csrSignatureOid"},{name:"CertificationRequest.signatureAlgorithm.parameters",tagClass:m.Class.UNIVERSAL,optional:!0,captureAsn1:"csrSignatureParams"}]},{name:"CertificationRequest.signature",tagClass:m.Class.UNIVERSAL,type:m.Type.BITSTRING,constructed:!1,captureBitStringValue:"csrSignature"}]};M.RDNAttributesAsArray=function(t,e){for(var r=[],n,o,a,i=0;i<t.value.length;++i){n=t.value[i];for(var s=0;s<n.value.length;++s)a={},o=n.value[s],a.type=m.derToOid(o.value[0].value),a.value=o.value[1].value,a.valueTagClass=o.value[1].type,a.type in le&&(a.name=le[a.type],a.name in Pe&&(a.shortName=Pe[a.name])),e&&(e.update(a.type),e.update(a.value)),r.push(a)}return r};M.CRIAttributesAsArray=function(t){for(var e=[],r=0;r<t.length;++r)for(var n=t[r],o=m.derToOid(n.value[0].value),a=n.value[1].value,i=0;i<a.length;++i){var s={};if(s.type=o,s.value=a[i].value,s.valueTagClass=a[i].type,s.type in le&&(s.name=le[s.type],s.name in Pe&&(s.shortName=Pe[s.name])),s.type===le.extensionRequest){s.extensions=[];for(var l=0;l<s.value.length;++l)s.extensions.push(M.certificateExtensionFromAsn1(s.value[l]))}e.push(s)}return e};function Ar(t,e){typeof e=="string"&&(e={shortName:e});for(var r=null,n,o=0;r===null&&o<t.attributes.length;++o)n=t.attributes[o],(e.type&&e.type===n.type||e.name&&e.name===n.name||e.shortName&&e.shortName===n.shortName)&&(r=n);return r}var Sa=function(t,e,r){var n={};if(t!==le["RSASSA-PSS"])return n;r&&(n={hash:{algorithmOid:le.sha1},mgf:{algorithmOid:le.mgf1,hash:{algorithmOid:le.sha1}},saltLength:20});var o={},a=[];if(!m.validate(e,VI,o,a)){var i=new Error("Cannot read RSASSA-PSS parameter block.");throw i.errors=a,i}return o.hashOid!==void 0&&(n.hash=n.hash||{},n.hash.algorithmOid=m.derToOid(o.hashOid)),o.maskGenOid!==void 0&&(n.mgf=n.mgf||{},n.mgf.algorithmOid=m.derToOid(o.maskGenOid),n.mgf.hash=n.mgf.hash||{},n.mgf.hash.algorithmOid=m.derToOid(o.maskGenHashOid)),o.saltLength!==void 0&&(n.saltLength=o.saltLength.charCodeAt(0)),n},ri=function(t){switch(le[t.signatureOid]){case"sha1WithRSAEncryption":case"sha1WithRSASignature":return X.md.sha1.create();case"md5WithRSAEncryption":return X.md.md5.create();case"sha256WithRSAEncryption":return X.md.sha256.create();case"sha384WithRSAEncryption":return X.md.sha384.create();case"sha512WithRSAEncryption":return X.md.sha512.create();case"RSASSA-PSS":return X.md.sha256.create();default:var e=new Error("Could not compute "+t.type+" digest. Unknown signature OID.");throw e.signatureOid=t.signatureOid,e}},kp=function(t){var e=t.certificate,r;switch(e.signatureOid){case le.sha1WithRSAEncryption:case le.sha1WithRSASignature:break;case le["RSASSA-PSS"]:var n,o;if(n=le[e.signatureParameters.mgf.hash.algorithmOid],n===void 0||X.md[n]===void 0){var a=new Error("Unsupported MGF hash function.");throw a.oid=e.signatureParameters.mgf.hash.algorithmOid,a.name=n,a}if(o=le[e.signatureParameters.mgf.algorithmOid],o===void 0||X.mgf[o]===void 0){var a=new Error("Unsupported MGF function.");throw a.oid=e.signatureParameters.mgf.algorithmOid,a.name=o,a}if(o=X.mgf[o].create(X.md[n].create()),n=le[e.signatureParameters.hash.algorithmOid],n===void 0||X.md[n]===void 0){var a=new Error("Unsupported RSASSA-PSS hash function.");throw a.oid=e.signatureParameters.hash.algorithmOid,a.name=n,a}r=X.pss.create(X.md[n].create(),o,e.signatureParameters.saltLength);break}return e.publicKey.verify(t.md.digest().getBytes(),t.signature,r)};M.certificateFromPem=function(t,e,r){var n=X.pem.decode(t)[0];if(n.type!=="CERTIFICATE"&&n.type!=="X509 CERTIFICATE"&&n.type!=="TRUSTED CERTIFICATE"){var o=new Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');throw o.headerType=n.type,o}if(n.procType&&n.procType.type==="ENCRYPTED")throw new Error("Could not convert certificate from PEM; PEM is encrypted.");var a=m.fromDer(n.body,r);return M.certificateFromAsn1(a,e)};M.certificateToPem=function(t,e){var r={type:"CERTIFICATE",body:m.toDer(M.certificateToAsn1(t)).getBytes()};return X.pem.encode(r,{maxline:e})};M.publicKeyFromPem=function(t){var e=X.pem.decode(t)[0];if(e.type!=="PUBLIC KEY"&&e.type!=="RSA PUBLIC KEY"){var r=new Error('Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');throw r.headerType=e.type,r}if(e.procType&&e.procType.type==="ENCRYPTED")throw new Error("Could not convert public key from PEM; PEM is encrypted.");var n=m.fromDer(e.body);return M.publicKeyFromAsn1(n)};M.publicKeyToPem=function(t,e){var r={type:"PUBLIC KEY",body:m.toDer(M.publicKeyToAsn1(t)).getBytes()};return X.pem.encode(r,{maxline:e})};M.publicKeyToRSAPublicKeyPem=function(t,e){var r={type:"RSA PUBLIC KEY",body:m.toDer(M.publicKeyToRSAPublicKey(t)).getBytes()};return X.pem.encode(r,{maxline:e})};M.getPublicKeyFingerprint=function(t,e){e=e||{};var r=e.md||X.md.sha1.create(),n=e.type||"RSAPublicKey",o;switch(n){case"RSAPublicKey":o=m.toDer(M.publicKeyToRSAPublicKey(t)).getBytes();break;case"SubjectPublicKeyInfo":o=m.toDer(M.publicKeyToAsn1(t)).getBytes();break;default:throw new Error('Unknown fingerprint type "'+e.type+'".')}r.start(),r.update(o);var a=r.digest();if(e.encoding==="hex"){var i=a.toHex();return e.delimiter?i.match(/.{2}/g).join(e.delimiter):i}else{if(e.encoding==="binary")return a.getBytes();if(e.encoding)throw new Error('Unknown encoding "'+e.encoding+'".')}return a};M.certificationRequestFromPem=function(t,e,r){var n=X.pem.decode(t)[0];if(n.type!=="CERTIFICATE REQUEST"){var o=new Error('Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".');throw o.headerType=n.type,o}if(n.procType&&n.procType.type==="ENCRYPTED")throw new Error("Could not convert certification request from PEM; PEM is encrypted.");var a=m.fromDer(n.body,r);return M.certificationRequestFromAsn1(a,e)};M.certificationRequestToPem=function(t,e){var r={type:"CERTIFICATE REQUEST",body:m.toDer(M.certificationRequestToAsn1(t)).getBytes()};return X.pem.encode(r,{maxline:e})};M.createCertificate=function(){var t={};return t.version=2,t.serialNumber="00",t.signatureOid=null,t.signature=null,t.siginfo={},t.siginfo.algorithmOid=null,t.validity={},t.validity.notBefore=new Date,t.validity.notAfter=new Date,t.issuer={},t.issuer.getField=function(e){return Ar(t.issuer,e)},t.issuer.addField=function(e){_t([e]),t.issuer.attributes.push(e)},t.issuer.attributes=[],t.issuer.hash=null,t.subject={},t.subject.getField=function(e){return Ar(t.subject,e)},t.subject.addField=function(e){_t([e]),t.subject.attributes.push(e)},t.subject.attributes=[],t.subject.hash=null,t.extensions=[],t.publicKey=null,t.md=null,t.setSubject=function(e,r){_t(e),t.subject.attributes=e,delete t.subject.uniqueId,r&&(t.subject.uniqueId=r),t.subject.hash=null},t.setIssuer=function(e,r){_t(e),t.issuer.attributes=e,delete t.issuer.uniqueId,r&&(t.issuer.uniqueId=r),t.issuer.hash=null},t.setExtensions=function(e){for(var r=0;r<e.length;++r)wp(e[r],{cert:t});t.extensions=e},t.getExtension=function(e){typeof e=="string"&&(e={name:e});for(var r=null,n,o=0;r===null&&o<t.extensions.length;++o)n=t.extensions[o],(e.id&&n.id===e.id||e.name&&n.name===e.name)&&(r=n);return r},t.sign=function(e,r){t.md=r||X.md.sha1.create();var n=le[t.md.algorithm+"WithRSAEncryption"];if(!n){var o=new Error("Could not compute certificate digest. Unknown message digest algorithm OID.");throw o.algorithm=t.md.algorithm,o}t.signatureOid=t.siginfo.algorithmOid=n,t.tbsCertificate=M.getTBSCertificate(t);var a=m.toDer(t.tbsCertificate);t.md.update(a.getBytes()),t.signature=e.sign(t.md)},t.verify=function(e){var r=!1;if(!t.issued(e)){var n=e.issuer,o=t.subject,a=new Error("The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.");throw a.expectedIssuer=o.attributes,a.actualIssuer=n.attributes,a}var i=e.md;if(i===null){i=ri({signatureOid:e.signatureOid,type:"certificate"});var s=e.tbsCertificate||M.getTBSCertificate(e),l=m.toDer(s);i.update(l.getBytes())}return i!==null&&(r=kp({certificate:t,md:i,signature:e.signature})),r},t.isIssuer=function(e){var r=!1,n=t.issuer,o=e.subject;if(n.hash&&o.hash)r=n.hash===o.hash;else if(n.attributes.length===o.attributes.length){r=!0;for(var a,i,s=0;r&&s<n.attributes.length;++s)a=n.attributes[s],i=o.attributes[s],(a.type!==i.type||a.value!==i.value)&&(r=!1)}return r},t.issued=function(e){return e.isIssuer(t)},t.generateSubjectKeyIdentifier=function(){return M.getPublicKeyFingerprint(t.publicKey,{type:"RSAPublicKey"})},t.verifySubjectKeyIdentifier=function(){for(var e=le.subjectKeyIdentifier,r=0;r<t.extensions.length;++r){var n=t.extensions[r];if(n.id===e){var o=t.generateSubjectKeyIdentifier().getBytes();return X.util.hexToBytes(n.subjectKeyIdentifier)===o}}return!1},t};M.certificateFromAsn1=function(t,e){var r={},n=[];if(!m.validate(t,UI,r,n)){var o=new Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.");throw o.errors=n,o}var a=m.derToOid(r.publicKeyOid);if(a!==M.oids.rsaEncryption)throw new Error("Cannot read public key. OID is not RSA.");var i=M.createCertificate();i.version=r.certVersion?r.certVersion.charCodeAt(0):0;var s=X.util.createBuffer(r.certSerialNumber);i.serialNumber=s.toHex(),i.signatureOid=X.asn1.derToOid(r.certSignatureOid),i.signatureParameters=Sa(i.signatureOid,r.certSignatureParams,!0),i.siginfo.algorithmOid=X.asn1.derToOid(r.certinfoSignatureOid),i.siginfo.parameters=Sa(i.siginfo.algorithmOid,r.certinfoSignatureParams,!1),i.signature=r.certSignature;var l=[];if(r.certValidity1UTCTime!==void 0&&l.push(m.utcTimeToDate(r.certValidity1UTCTime)),r.certValidity2GeneralizedTime!==void 0&&l.push(m.generalizedTimeToDate(r.certValidity2GeneralizedTime)),r.certValidity3UTCTime!==void 0&&l.push(m.utcTimeToDate(r.certValidity3UTCTime)),r.certValidity4GeneralizedTime!==void 0&&l.push(m.generalizedTimeToDate(r.certValidity4GeneralizedTime)),l.length>2)throw new Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");if(l.length<2)throw new Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");if(i.validity.notBefore=l[0],i.validity.notAfter=l[1],i.tbsCertificate=r.tbsCertificate,e){i.md=ri({signatureOid:i.signatureOid,type:"certificate"});var c=m.toDer(i.tbsCertificate);i.md.update(c.getBytes())}var d=X.md.sha1.create(),u=m.toDer(r.certIssuer);d.update(u.getBytes()),i.issuer.getField=function(h){return Ar(i.issuer,h)},i.issuer.addField=function(h){_t([h]),i.issuer.attributes.push(h)},i.issuer.attributes=M.RDNAttributesAsArray(r.certIssuer),r.certIssuerUniqueId&&(i.issuer.uniqueId=r.certIssuerUniqueId),i.issuer.hash=d.digest().toHex();var f=X.md.sha1.create(),p=m.toDer(r.certSubject);return f.update(p.getBytes()),i.subject.getField=function(h){return Ar(i.subject,h)},i.subject.addField=function(h){_t([h]),i.subject.attributes.push(h)},i.subject.attributes=M.RDNAttributesAsArray(r.certSubject),r.certSubjectUniqueId&&(i.subject.uniqueId=r.certSubjectUniqueId),i.subject.hash=f.digest().toHex(),r.certExtensions?i.extensions=M.certificateExtensionsFromAsn1(r.certExtensions):i.extensions=[],i.publicKey=M.publicKeyFromAsn1(r.subjectPublicKeyInfo),i};M.certificateExtensionsFromAsn1=function(t){for(var e=[],r=0;r<t.value.length;++r)for(var n=t.value[r],o=0;o<n.value.length;++o)e.push(M.certificateExtensionFromAsn1(n.value[o]));return e};M.certificateExtensionFromAsn1=function(t){var e={};if(e.id=m.derToOid(t.value[0].value),e.critical=!1,t.value[1].type===m.Type.BOOLEAN?(e.critical=t.value[1].value.charCodeAt(0)!==0,e.value=t.value[2].value):e.value=t.value[1].value,e.id in le){if(e.name=le[e.id],e.name==="keyUsage"){var r=m.fromDer(e.value),n=0,o=0;r.value.length>1&&(n=r.value.charCodeAt(1),o=r.value.length>2?r.value.charCodeAt(2):0),e.digitalSignature=(n&128)===128,e.nonRepudiation=(n&64)===64,e.keyEncipherment=(n&32)===32,e.dataEncipherment=(n&16)===16,e.keyAgreement=(n&8)===8,e.keyCertSign=(n&4)===4,e.cRLSign=(n&2)===2,e.encipherOnly=(n&1)===1,e.decipherOnly=(o&128)===128}else if(e.name==="basicConstraints"){var r=m.fromDer(e.value);r.value.length>0&&r.value[0].type===m.Type.BOOLEAN?e.cA=r.value[0].value.charCodeAt(0)!==0:e.cA=!1;var a=null;r.value.length>0&&r.value[0].type===m.Type.INTEGER?a=r.value[0].value:r.value.length>1&&(a=r.value[1].value),a!==null&&(e.pathLenConstraint=m.derToInteger(a))}else if(e.name==="extKeyUsage")for(var r=m.fromDer(e.value),i=0;i<r.value.length;++i){var s=m.derToOid(r.value[i].value);s in le?e[le[s]]=!0:e[s]=!0}else if(e.name==="nsCertType"){var r=m.fromDer(e.value),n=0;r.value.length>1&&(n=r.value.charCodeAt(1)),e.client=(n&128)===128,e.server=(n&64)===64,e.email=(n&32)===32,e.objsign=(n&16)===16,e.reserved=(n&8)===8,e.sslCA=(n&4)===4,e.emailCA=(n&2)===2,e.objCA=(n&1)===1}else if(e.name==="subjectAltName"||e.name==="issuerAltName"){e.altNames=[];for(var l,r=m.fromDer(e.value),c=0;c<r.value.length;++c){l=r.value[c];var d={type:l.type,value:l.value};switch(e.altNames.push(d),l.type){case 1:case 2:case 6:break;case 7:d.ip=X.util.bytesToIP(l.value);break;case 8:d.oid=m.derToOid(l.value);break}}}else if(e.name==="subjectKeyIdentifier"){var r=m.fromDer(e.value);e.subjectKeyIdentifier=X.util.bytesToHex(r.value)}}return e};M.certificationRequestFromAsn1=function(t,e){var r={},n=[];if(!m.validate(t,HI,r,n)){var o=new Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.");throw o.errors=n,o}var a=m.derToOid(r.publicKeyOid);if(a!==M.oids.rsaEncryption)throw new Error("Cannot read public key. OID is not RSA.");var i=M.createCertificationRequest();if(i.version=r.csrVersion?r.csrVersion.charCodeAt(0):0,i.signatureOid=X.asn1.derToOid(r.csrSignatureOid),i.signatureParameters=Sa(i.signatureOid,r.csrSignatureParams,!0),i.siginfo.algorithmOid=X.asn1.derToOid(r.csrSignatureOid),i.siginfo.parameters=Sa(i.siginfo.algorithmOid,r.csrSignatureParams,!1),i.signature=r.csrSignature,i.certificationRequestInfo=r.certificationRequestInfo,e){i.md=ri({signatureOid:i.signatureOid,type:"certification request"});var s=m.toDer(i.certificationRequestInfo);i.md.update(s.getBytes())}var l=X.md.sha1.create();return i.subject.getField=function(c){return Ar(i.subject,c)},i.subject.addField=function(c){_t([c]),i.subject.attributes.push(c)},i.subject.attributes=M.RDNAttributesAsArray(r.certificationRequestInfoSubject,l),i.subject.hash=l.digest().toHex(),i.publicKey=M.publicKeyFromAsn1(r.subjectPublicKeyInfo),i.getAttribute=function(c){return Ar(i,c)},i.addAttribute=function(c){_t([c]),i.attributes.push(c)},i.attributes=M.CRIAttributesAsArray(r.certificationRequestInfoAttributes||[]),i};M.createCertificationRequest=function(){var t={};return t.version=0,t.signatureOid=null,t.signature=null,t.siginfo={},t.siginfo.algorithmOid=null,t.subject={},t.subject.getField=function(e){return Ar(t.subject,e)},t.subject.addField=function(e){_t([e]),t.subject.attributes.push(e)},t.subject.attributes=[],t.subject.hash=null,t.publicKey=null,t.attributes=[],t.getAttribute=function(e){return Ar(t,e)},t.addAttribute=function(e){_t([e]),t.attributes.push(e)},t.md=null,t.setSubject=function(e){_t(e),t.subject.attributes=e,t.subject.hash=null},t.setAttributes=function(e){_t(e),t.attributes=e},t.sign=function(e,r){t.md=r||X.md.sha1.create();var n=le[t.md.algorithm+"WithRSAEncryption"];if(!n){var o=new Error("Could not compute certification request digest. Unknown message digest algorithm OID.");throw o.algorithm=t.md.algorithm,o}t.signatureOid=t.siginfo.algorithmOid=n,t.certificationRequestInfo=M.getCertificationRequestInfo(t);var a=m.toDer(t.certificationRequestInfo);t.md.update(a.getBytes()),t.signature=e.sign(t.md)},t.verify=function(){var e=!1,r=t.md;if(r===null){r=ri({signatureOid:t.signatureOid,type:"certification request"});var n=t.certificationRequestInfo||M.getCertificationRequestInfo(t),o=m.toDer(n);r.update(o.getBytes())}return r!==null&&(e=kp({certificate:t,md:r,signature:t.signature})),e},t};function En(t){for(var e=m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[]),r,n,o=t.attributes,a=0;a<o.length;++a){r=o[a];var i=r.value,s=m.Type.PRINTABLESTRING;"valueTagClass"in r&&(s=r.valueTagClass,s===m.Type.UTF8&&(i=X.util.encodeUtf8(i))),n=m.create(m.Class.UNIVERSAL,m.Type.SET,!0,[m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[m.create(m.Class.UNIVERSAL,m.Type.OID,!1,m.oidToDer(r.type).getBytes()),m.create(m.Class.UNIVERSAL,s,!1,i)])]),e.value.push(n)}return e}function _t(t){for(var e,r=0;r<t.length;++r){if(e=t[r],typeof e.name>"u"&&(e.type&&e.type in M.oids?e.name=M.oids[e.type]:e.shortName&&e.shortName in Pe&&(e.name=M.oids[Pe[e.shortName]])),typeof e.type>"u")if(e.name&&e.name in M.oids)e.type=M.oids[e.name];else{var n=new Error("Attribute type not specified.");throw n.attribute=e,n}if(typeof e.shortName>"u"&&e.name&&e.name in Pe&&(e.shortName=Pe[e.name]),e.type===le.extensionRequest&&(e.valueConstructed=!0,e.valueTagClass=m.Type.SEQUENCE,!e.value&&e.extensions)){e.value=[];for(var o=0;o<e.extensions.length;++o)e.value.push(M.certificateExtensionToAsn1(wp(e.extensions[o])))}if(typeof e.value>"u"){var n=new Error("Attribute value not specified.");throw n.attribute=e,n}}}function wp(t,e){if(e=e||{},typeof t.name>"u"&&t.id&&t.id in M.oids&&(t.name=M.oids[t.id]),typeof t.id>"u")if(t.name&&t.name in M.oids)t.id=M.oids[t.name];else{var r=new Error("Extension ID not specified.");throw r.extension=t,r}if(typeof t.value<"u")return t;if(t.name==="keyUsage"){var n=0,o=0,a=0;t.digitalSignature&&(o|=128,n=7),t.nonRepudiation&&(o|=64,n=6),t.keyEncipherment&&(o|=32,n=5),t.dataEncipherment&&(o|=16,n=4),t.keyAgreement&&(o|=8,n=3),t.keyCertSign&&(o|=4,n=2),t.cRLSign&&(o|=2,n=1),t.encipherOnly&&(o|=1,n=0),t.decipherOnly&&(a|=128,n=7);var i=String.fromCharCode(n);a!==0?i+=String.fromCharCode(o)+String.fromCharCode(a):o!==0&&(i+=String.fromCharCode(o)),t.value=m.create(m.Class.UNIVERSAL,m.Type.BITSTRING,!1,i)}else if(t.name==="basicConstraints")t.value=m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[]),t.cA&&t.value.value.push(m.create(m.Class.UNIVERSAL,m.Type.BOOLEAN,!1,"ÿ")),"pathLenConstraint"in t&&t.value.value.push(m.create(m.Class.UNIVERSAL,m.Type.INTEGER,!1,m.integerToDer(t.pathLenConstraint).getBytes()));else if(t.name==="extKeyUsage"){t.value=m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[]);var s=t.value.value;for(var l in t)t[l]===!0&&(l in le?s.push(m.create(m.Class.UNIVERSAL,m.Type.OID,!1,m.oidToDer(le[l]).getBytes())):l.indexOf(".")!==-1&&s.push(m.create(m.Class.UNIVERSAL,m.Type.OID,!1,m.oidToDer(l).getBytes())))}else if(t.name==="nsCertType"){var n=0,o=0;t.client&&(o|=128,n=7),t.server&&(o|=64,n=6),t.email&&(o|=32,n=5),t.objsign&&(o|=16,n=4),t.reserved&&(o|=8,n=3),t.sslCA&&(o|=4,n=2),t.emailCA&&(o|=2,n=1),t.objCA&&(o|=1,n=0);var i=String.fromCharCode(n);o!==0&&(i+=String.fromCharCode(o)),t.value=m.create(m.Class.UNIVERSAL,m.Type.BITSTRING,!1,i)}else if(t.name==="subjectAltName"||t.name==="issuerAltName"){t.value=m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[]);for(var c,d=0;d<t.altNames.length;++d){c=t.altNames[d];var i=c.value;if(c.type===7&&c.ip){if(i=X.util.bytesFromIP(c.ip),i===null){var r=new Error('Extension "ip" value is not a valid IPv4 or IPv6 address.');throw r.extension=t,r}}else c.type===8&&(c.oid?i=m.oidToDer(m.oidToDer(c.oid)):i=m.oidToDer(i));t.value.value.push(m.create(m.Class.CONTEXT_SPECIFIC,c.type,!1,i))}}else if(t.name==="nsComment"&&e.cert){if(!/^[\x00-\x7F]*$/.test(t.comment)||t.comment.length<1||t.comment.length>128)throw new Error('Invalid "nsComment" content.');t.value=m.create(m.Class.UNIVERSAL,m.Type.IA5STRING,!1,t.comment)}else if(t.name==="subjectKeyIdentifier"&&e.cert){var u=e.cert.generateSubjectKeyIdentifier();t.subjectKeyIdentifier=u.toHex(),t.value=m.create(m.Class.UNIVERSAL,m.Type.OCTETSTRING,!1,u.getBytes())}else if(t.name==="authorityKeyIdentifier"&&e.cert){t.value=m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[]);var s=t.value.value;if(t.keyIdentifier){var f=t.keyIdentifier===!0?e.cert.generateSubjectKeyIdentifier().getBytes():t.keyIdentifier;s.push(m.create(m.Class.CONTEXT_SPECIFIC,0,!1,f))}if(t.authorityCertIssuer){var p=[m.create(m.Class.CONTEXT_SPECIFIC,4,!0,[En(t.authorityCertIssuer===!0?e.cert.issuer:t.authorityCertIssuer)])];s.push(m.create(m.Class.CONTEXT_SPECIFIC,1,!0,p))}if(t.serialNumber){var h=X.util.hexToBytes(t.serialNumber===!0?e.cert.serialNumber:t.serialNumber);s.push(m.create(m.Class.CONTEXT_SPECIFIC,2,!1,h))}}else if(t.name==="cRLDistributionPoints"){t.value=m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[]);for(var s=t.value.value,g=m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[]),b=m.create(m.Class.CONTEXT_SPECIFIC,0,!0,[]),c,d=0;d<t.altNames.length;++d){c=t.altNames[d];var i=c.value;if(c.type===7&&c.ip){if(i=X.util.bytesFromIP(c.ip),i===null){var r=new Error('Extension "ip" value is not a valid IPv4 or IPv6 address.');throw r.extension=t,r}}else c.type===8&&(c.oid?i=m.oidToDer(m.oidToDer(c.oid)):i=m.oidToDer(i));b.value.push(m.create(m.Class.CONTEXT_SPECIFIC,c.type,!1,i))}g.value.push(m.create(m.Class.CONTEXT_SPECIFIC,0,!0,[b])),s.push(g)}if(typeof t.value>"u"){var r=new Error("Extension value not specified.");throw r.extension=t,r}return t}function kl(t,e){switch(t){case le["RSASSA-PSS"]:var r=[];return e.hash.algorithmOid!==void 0&&r.push(m.create(m.Class.CONTEXT_SPECIFIC,0,!0,[m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[m.create(m.Class.UNIVERSAL,m.Type.OID,!1,m.oidToDer(e.hash.algorithmOid).getBytes()),m.create(m.Class.UNIVERSAL,m.Type.NULL,!1,"")])])),e.mgf.algorithmOid!==void 0&&r.push(m.create(m.Class.CONTEXT_SPECIFIC,1,!0,[m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[m.create(m.Class.UNIVERSAL,m.Type.OID,!1,m.oidToDer(e.mgf.algorithmOid).getBytes()),m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[m.create(m.Class.UNIVERSAL,m.Type.OID,!1,m.oidToDer(e.mgf.hash.algorithmOid).getBytes()),m.create(m.Class.UNIVERSAL,m.Type.NULL,!1,"")])])])),e.saltLength!==void 0&&r.push(m.create(m.Class.CONTEXT_SPECIFIC,2,!0,[m.create(m.Class.UNIVERSAL,m.Type.INTEGER,!1,m.integerToDer(e.saltLength).getBytes())])),m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,r);default:return m.create(m.Class.UNIVERSAL,m.Type.NULL,!1,"")}}function WI(t){var e=m.create(m.Class.CONTEXT_SPECIFIC,0,!0,[]);if(t.attributes.length===0)return e;for(var r=t.attributes,n=0;n<r.length;++n){var o=r[n],a=o.value,i=m.Type.UTF8;"valueTagClass"in o&&(i=o.valueTagClass),i===m.Type.UTF8&&(a=X.util.encodeUtf8(a));var s=!1;"valueConstructed"in o&&(s=o.valueConstructed);var l=m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[m.create(m.Class.UNIVERSAL,m.Type.OID,!1,m.oidToDer(o.type).getBytes()),m.create(m.Class.UNIVERSAL,m.Type.SET,!0,[m.create(m.Class.UNIVERSAL,i,s,a)])]);e.value.push(l)}return e}var jI=new Date("1950-01-01T00:00:00Z"),GI=new Date("2050-01-01T00:00:00Z");function xd(t){return t>=jI&&t<GI?m.create(m.Class.UNIVERSAL,m.Type.UTCTIME,!1,m.dateToUtcTime(t)):m.create(m.Class.UNIVERSAL,m.Type.GENERALIZEDTIME,!1,m.dateToGeneralizedTime(t))}M.getTBSCertificate=function(t){var e=xd(t.validity.notBefore),r=xd(t.validity.notAfter),n=m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[m.create(m.Class.CONTEXT_SPECIFIC,0,!0,[m.create(m.Class.UNIVERSAL,m.Type.INTEGER,!1,m.integerToDer(t.version).getBytes())]),m.create(m.Class.UNIVERSAL,m.Type.INTEGER,!1,X.util.hexToBytes(t.serialNumber)),m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[m.create(m.Class.UNIVERSAL,m.Type.OID,!1,m.oidToDer(t.siginfo.algorithmOid).getBytes()),kl(t.siginfo.algorithmOid,t.siginfo.parameters)]),En(t.issuer),m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[e,r]),En(t.subject),M.publicKeyToAsn1(t.publicKey)]);return t.issuer.uniqueId&&n.value.push(m.create(m.Class.CONTEXT_SPECIFIC,1,!0,[m.create(m.Class.UNIVERSAL,m.Type.BITSTRING,!1,"\0"+t.issuer.uniqueId)])),t.subject.uniqueId&&n.value.push(m.create(m.Class.CONTEXT_SPECIFIC,2,!0,[m.create(m.Class.UNIVERSAL,m.Type.BITSTRING,!1,"\0"+t.subject.uniqueId)])),t.extensions.length>0&&n.value.push(M.certificateExtensionsToAsn1(t.extensions)),n};M.getCertificationRequestInfo=function(t){var e=m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[m.create(m.Class.UNIVERSAL,m.Type.INTEGER,!1,m.integerToDer(t.version).getBytes()),En(t.subject),M.publicKeyToAsn1(t.publicKey),WI(t)]);return e};M.distinguishedNameToAsn1=function(t){return En(t)};M.certificateToAsn1=function(t){var e=t.tbsCertificate||M.getTBSCertificate(t);return m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[e,m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[m.create(m.Class.UNIVERSAL,m.Type.OID,!1,m.oidToDer(t.signatureOid).getBytes()),kl(t.signatureOid,t.signatureParameters)]),m.create(m.Class.UNIVERSAL,m.Type.BITSTRING,!1,"\0"+t.signature)])};M.certificateExtensionsToAsn1=function(t){var e=m.create(m.Class.CONTEXT_SPECIFIC,3,!0,[]),r=m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[]);e.value.push(r);for(var n=0;n<t.length;++n)r.value.push(M.certificateExtensionToAsn1(t[n]));return e};M.certificateExtensionToAsn1=function(t){var e=m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[]);e.value.push(m.create(m.Class.UNIVERSAL,m.Type.OID,!1,m.oidToDer(t.id).getBytes())),t.critical&&e.value.push(m.create(m.Class.UNIVERSAL,m.Type.BOOLEAN,!1,"ÿ"));var r=t.value;return typeof t.value!="string"&&(r=m.toDer(r).getBytes()),e.value.push(m.create(m.Class.UNIVERSAL,m.Type.OCTETSTRING,!1,r)),e};M.certificationRequestToAsn1=function(t){var e=t.certificationRequestInfo||M.getCertificationRequestInfo(t);return m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[e,m.create(m.Class.UNIVERSAL,m.Type.SEQUENCE,!0,[m.create(m.Class.UNIVERSAL,m.Type.OID,!1,m.oidToDer(t.signatureOid).getBytes()),kl(t.signatureOid,t.signatureParameters)]),m.create(m.Class.UNIVERSAL,m.Type.BITSTRING,!1,"\0"+t.signature)])};M.createCaStore=function(t){var e={certs:{}};e.getIssuer=function(i){var s=r(i.issuer);return s},e.addCertificate=function(i){if(typeof i=="string"&&(i=X.pki.certificateFromPem(i)),n(i.subject),!e.hasCertificate(i))if(i.subject.hash in e.certs){var s=e.certs[i.subject.hash];X.util.isArray(s)||(s=[s]),s.push(i),e.certs[i.subject.hash]=s}else e.certs[i.subject.hash]=i},e.hasCertificate=function(i){typeof i=="string"&&(i=X.pki.certificateFromPem(i));var s=r(i.subject);if(!s)return!1;X.util.isArray(s)||(s=[s]);for(var l=m.toDer(M.certificateToAsn1(i)).getBytes(),c=0;c<s.length;++c){var d=m.toDer(M.certificateToAsn1(s[c])).getBytes();if(l===d)return!0}return!1},e.listAllCertificates=function(){var i=[];for(var s in e.certs)if(e.certs.hasOwnProperty(s)){var l=e.certs[s];if(!X.util.isArray(l))i.push(l);else for(var c=0;c<l.length;++c)i.push(l[c])}return i},e.removeCertificate=function(i){var s;if(typeof i=="string"&&(i=X.pki.certificateFromPem(i)),n(i.subject),!e.hasCertificate(i))return null;var l=r(i.subject);if(!X.util.isArray(l))return s=e.certs[i.subject.hash],delete e.certs[i.subject.hash],s;for(var c=m.toDer(M.certificateToAsn1(i)).getBytes(),d=0;d<l.length;++d){var u=m.toDer(M.certificateToAsn1(l[d])).getBytes();c===u&&(s=l[d],l.splice(d,1))}return l.length===0&&delete e.certs[i.subject.hash],s};function r(i){return n(i),e.certs[i.hash]||null}function n(i){if(!i.hash){var s=X.md.sha1.create();i.attributes=M.RDNAttributesAsArray(En(i),s),i.hash=s.digest().toHex()}}if(t)for(var o=0;o<t.length;++o){var a=t[o];e.addCertificate(a)}return e};M.certificateError={bad_certificate:"forge.pki.BadCertificate",unsupported_certificate:"forge.pki.UnsupportedCertificate",certificate_revoked:"forge.pki.CertificateRevoked",certificate_expired:"forge.pki.CertificateExpired",certificate_unknown:"forge.pki.CertificateUnknown",unknown_ca:"forge.pki.UnknownCertificateAuthority"};M.verifyCertificateChain=function(t,e,r){typeof r=="function"&&(r={verify:r}),r=r||{},e=e.slice(0);var n=e.slice(0),o=r.validityCheckDate;typeof o>"u"&&(o=new Date);var a=!0,i=null,s=0;do{var l=e.shift(),c=null,d=!1;if(o&&(o<l.validity.notBefore||o>l.validity.notAfter)&&(i={message:"Certificate is not valid yet or has expired.",error:M.certificateError.certificate_expired,notBefore:l.validity.notBefore,notAfter:l.validity.notAfter,now:o}),i===null){if(c=e[0]||t.getIssuer(l),c===null&&l.isIssuer(l)&&(d=!0,c=l),c){var u=c;X.util.isArray(u)||(u=[u]);for(var f=!1;!f&&u.length>0;){c=u.shift();try{f=c.verify(l)}catch{}}f||(i={message:"Certificate signature is invalid.",error:M.certificateError.bad_certificate})}i===null&&(!c||d)&&!t.hasCertificate(l)&&(i={message:"Certificate is not trusted.",error:M.certificateError.unknown_ca})}if(i===null&&c&&!l.isIssuer(c)&&(i={message:"Certificate issuer is invalid.",error:M.certificateError.bad_certificate}),i===null)for(var p={keyUsage:!0,basicConstraints:!0},h=0;i===null&&h<l.extensions.length;++h){var g=l.extensions[h];g.critical&&!(g.name in p)&&(i={message:"Certificate has an unsupported critical extension.",error:M.certificateError.unsupported_certificate})}if(i===null&&(!a||e.length===0&&(!c||d))){var b=l.getExtension("basicConstraints"),x=l.getExtension("keyUsage");if(x!==null&&(!x.keyCertSign||b===null)&&(i={message:"Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",error:M.certificateError.bad_certificate}),i===null&&b!==null&&!b.cA&&(i={message:"Certificate basicConstraints indicates the certificate is not a CA.",error:M.certificateError.bad_certificate}),i===null&&x!==null&&"pathLenConstraint"in b){var C=s-1;C>b.pathLenConstraint&&(i={message:"Certificate basicConstraints pathLenConstraint violated.",error:M.certificateError.bad_certificate})}}var k=i===null?!0:i.error,B=r.verify?r.verify(k,s,n):k;if(B===!0)i=null;else throw k===!0&&(i={message:"The application rejected the certificate.",error:M.certificateError.bad_certificate}),(B||B===0)&&(typeof B=="object"&&!X.util.isArray(B)?(B.message&&(i.message=B.message),B.error&&(i.error=B.error)):typeof B=="string"&&(i.error=B)),i;a=!1,++s}while(e.length>0);return!0};var we=te,w=we.asn1,ne=we.pki,xo=we.pkcs12=we.pkcs12||{},Sp={name:"ContentInfo",tagClass:w.Class.UNIVERSAL,type:w.Type.SEQUENCE,constructed:!0,value:[{name:"ContentInfo.contentType",tagClass:w.Class.UNIVERSAL,type:w.Type.OID,constructed:!1,capture:"contentType"},{name:"ContentInfo.content",tagClass:w.Class.CONTEXT_SPECIFIC,constructed:!0,captureAsn1:"content"}]},qI={name:"PFX",tagClass:w.Class.UNIVERSAL,type:w.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.version",tagClass:w.Class.UNIVERSAL,type:w.Type.INTEGER,constructed:!1,capture:"version"},Sp,{name:"PFX.macData",tagClass:w.Class.UNIVERSAL,type:w.Type.SEQUENCE,constructed:!0,optional:!0,captureAsn1:"mac",value:[{name:"PFX.macData.mac",tagClass:w.Class.UNIVERSAL,type:w.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.macData.mac.digestAlgorithm",tagClass:w.Class.UNIVERSAL,type:w.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.macData.mac.digestAlgorithm.algorithm",tagClass:w.Class.UNIVERSAL,type:w.Type.OID,constructed:!1,capture:"macAlgorithm"},{name:"PFX.macData.mac.digestAlgorithm.parameters",tagClass:w.Class.UNIVERSAL,captureAsn1:"macAlgorithmParameters"}]},{name:"PFX.macData.mac.digest",tagClass:w.Class.UNIVERSAL,type:w.Type.OCTETSTRING,constructed:!1,capture:"macDigest"}]},{name:"PFX.macData.macSalt",tagClass:w.Class.UNIVERSAL,type:w.Type.OCTETSTRING,constructed:!1,capture:"macSalt"},{name:"PFX.macData.iterations",tagClass:w.Class.UNIVERSAL,type:w.Type.INTEGER,constructed:!1,optional:!0,capture:"macIterations"}]}]},YI={name:"SafeBag",tagClass:w.Class.UNIVERSAL,type:w.Type.SEQUENCE,constructed:!0,value:[{name:"SafeBag.bagId",tagClass:w.Class.UNIVERSAL,type:w.Type.OID,constructed:!1,capture:"bagId"},{name:"SafeBag.bagValue",tagClass:w.Class.CONTEXT_SPECIFIC,constructed:!0,captureAsn1:"bagValue"},{name:"SafeBag.bagAttributes",tagClass:w.Class.UNIVERSAL,type:w.Type.SET,constructed:!0,optional:!0,capture:"bagAttributes"}]},XI={name:"Attribute",tagClass:w.Class.UNIVERSAL,type:w.Type.SEQUENCE,constructed:!0,value:[{name:"Attribute.attrId",tagClass:w.Class.UNIVERSAL,type:w.Type.OID,constructed:!1,capture:"oid"},{name:"Attribute.attrValues",tagClass:w.Class.UNIVERSAL,type:w.Type.SET,constructed:!0,capture:"values"}]},QI={name:"CertBag",tagClass:w.Class.UNIVERSAL,type:w.Type.SEQUENCE,constructed:!0,value:[{name:"CertBag.certId",tagClass:w.Class.UNIVERSAL,type:w.Type.OID,constructed:!1,capture:"certId"},{name:"CertBag.certValue",tagClass:w.Class.CONTEXT_SPECIFIC,constructed:!0,value:[{name:"CertBag.certValue[0]",tagClass:w.Class.UNIVERSAL,type:w.Class.OCTETSTRING,constructed:!1,capture:"cert"}]}]};function zn(t,e,r,n){for(var o=[],a=0;a<t.length;a++)for(var i=0;i<t[a].safeBags.length;i++){var s=t[a].safeBags[i];if(!(n!==void 0&&s.type!==n)){if(e===null){o.push(s);continue}s.attributes[e]!==void 0&&s.attributes[e].indexOf(r)>=0&&o.push(s)}}return o}xo.pkcs12FromAsn1=function(t,e,r){typeof e=="string"?(r=e,e=!0):e===void 0&&(e=!0);var n={},o=[];if(!w.validate(t,qI,n,o)){var a=new Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.");throw a.errors=a,a}var i={version:n.version.charCodeAt(0),safeContents:[],getBags:function(b){var x={},C;return"localKeyId"in b?C=b.localKeyId:"localKeyIdHex"in b&&(C=we.util.hexToBytes(b.localKeyIdHex)),C===void 0&&!("friendlyName"in b)&&"bagType"in b&&(x[b.bagType]=zn(i.safeContents,null,null,b.bagType)),C!==void 0&&(x.localKeyId=zn(i.safeContents,"localKeyId",C,b.bagType)),"friendlyName"in b&&(x.friendlyName=zn(i.safeContents,"friendlyName",b.friendlyName,b.bagType)),x},getBagsByFriendlyName:function(b,x){return zn(i.safeContents,"friendlyName",b,x)},getBagsByLocalKeyId:function(b,x){return zn(i.safeContents,"localKeyId",b,x)}};if(n.version.charCodeAt(0)!==3){var a=new Error("PKCS#12 PFX of version other than 3 not supported.");throw a.version=n.version.charCodeAt(0),a}if(w.derToOid(n.contentType)!==ne.oids.data){var a=new Error("Only PKCS#12 PFX in password integrity mode supported.");throw a.oid=w.derToOid(n.contentType),a}var s=n.content.value[0];if(s.tagClass!==w.Class.UNIVERSAL||s.type!==w.Type.OCTETSTRING)throw new Error("PKCS#12 authSafe content data is not an OCTET STRING.");if(s=wl(s),n.mac){var l=null,c=0,d=w.derToOid(n.macAlgorithm);switch(d){case ne.oids.sha1:l=we.md.sha1.create(),c=20;break;case ne.oids.sha256:l=we.md.sha256.create(),c=32;break;case ne.oids.sha384:l=we.md.sha384.create(),c=48;break;case ne.oids.sha512:l=we.md.sha512.create(),c=64;break;case ne.oids.md5:l=we.md.md5.create(),c=16;break}if(l===null)throw new Error("PKCS#12 uses unsupported MAC algorithm: "+d);var u=new we.util.ByteBuffer(n.macSalt),f="macIterations"in n?parseInt(we.util.bytesToHex(n.macIterations),16):1,p=xo.generateKey(r,u,3,f,c,l),h=we.hmac.create();h.start(l,p),h.update(s.value);var g=h.getMac();if(g.getBytes()!==n.macDigest)throw new Error("PKCS#12 MAC could not be verified. Invalid password?")}return ZI(i,s.value,e,r),i};function wl(t){if(t.composed||t.constructed){for(var e=we.util.createBuffer(),r=0;r<t.value.length;++r)e.putBytes(t.value[r].value);t.composed=t.constructed=!1,t.value=e.getBytes()}return t}function ZI(t,e,r,n){if(e=w.fromDer(e,r),e.tagClass!==w.Class.UNIVERSAL||e.type!==w.Type.SEQUENCE||e.constructed!==!0)throw new Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");for(var o=0;o<e.value.length;o++){var a=e.value[o],i={},s=[];if(!w.validate(a,Sp,i,s)){var l=new Error("Cannot read ContentInfo.");throw l.errors=s,l}var c={encrypted:!1},d=null,u=i.content.value[0];switch(w.derToOid(i.contentType)){case ne.oids.data:if(u.tagClass!==w.Class.UNIVERSAL||u.type!==w.Type.OCTETSTRING)throw new Error("PKCS#12 SafeContents Data is not an OCTET STRING.");d=wl(u).value;break;case ne.oids.encryptedData:d=JI(u,n),c.encrypted=!0;break;default:var l=new Error("Unsupported PKCS#12 contentType.");throw l.contentType=w.derToOid(i.contentType),l}c.safeBags=e4(d,r,n),t.safeContents.push(c)}}function JI(t,e){var r={},n=[];if(!w.validate(t,we.pkcs7.asn1.encryptedDataValidator,r,n)){var o=new Error("Cannot read EncryptedContentInfo.");throw o.errors=n,o}var a=w.derToOid(r.contentType);if(a!==ne.oids.data){var o=new Error("PKCS#12 EncryptedContentInfo ContentType is not Data.");throw o.oid=a,o}a=w.derToOid(r.encAlgorithm);var i=ne.pbe.getCipher(a,r.encParameter,e),s=wl(r.encryptedContentAsn1),l=we.util.createBuffer(s.value);if(i.update(l),!i.finish())throw new Error("Failed to decrypt PKCS#12 SafeContents.");return i.output.getBytes()}function e4(t,e,r){if(!e&&t.length===0)return[];if(t=w.fromDer(t,e),t.tagClass!==w.Class.UNIVERSAL||t.type!==w.Type.SEQUENCE||t.constructed!==!0)throw new Error("PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.");for(var n=[],o=0;o<t.value.length;o++){var a=t.value[o],i={},s=[];if(!w.validate(a,YI,i,s)){var l=new Error("Cannot read SafeBag.");throw l.errors=s,l}var c={type:w.derToOid(i.bagId),attributes:t4(i.bagAttributes)};n.push(c);var d,u,f=i.bagValue.value[0];switch(c.type){case ne.oids.pkcs8ShroudedKeyBag:if(f=ne.decryptPrivateKeyInfo(f,r),f===null)throw new Error("Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?");case ne.oids.keyBag:try{c.key=ne.privateKeyFromAsn1(f)}catch{c.key=null,c.asn1=f}continue;case ne.oids.certBag:d=QI,u=function(){if(w.derToOid(i.certId)!==ne.oids.x509Certificate){var h=new Error("Unsupported certificate type, only X.509 supported.");throw h.oid=w.derToOid(i.certId),h}var g=w.fromDer(i.cert,e);try{c.cert=ne.certificateFromAsn1(g,!0)}catch{c.cert=null,c.asn1=g}};break;default:var l=new Error("Unsupported PKCS#12 SafeBag type.");throw l.oid=c.type,l}if(d!==void 0&&!w.validate(f,d,i,s)){var l=new Error("Cannot read PKCS#12 "+d.name);throw l.errors=s,l}u()}return n}function t4(t){var e={};if(t!==void 0)for(var r=0;r<t.length;++r){var n={},o=[];if(!w.validate(t[r],XI,n,o)){var a=new Error("Cannot read PKCS#12 BagAttribute.");throw a.errors=o,a}var i=w.derToOid(n.oid);if(ne.oids[i]!==void 0){e[ne.oids[i]]=[];for(var s=0;s<n.values.length;++s)e[ne.oids[i]].push(n.values[s].value)}}return e}xo.toPkcs12Asn1=function(t,e,r,n){n=n||{},n.saltSize=n.saltSize||8,n.count=n.count||2048,n.algorithm=n.algorithm||n.encAlgorithm||"aes128","useMac"in n||(n.useMac=!0),"localKeyId"in n||(n.localKeyId=null),"generateLocalKeyId"in n||(n.generateLocalKeyId=!0);var o=n.localKeyId,a;if(o!==null)o=we.util.hexToBytes(o);else if(n.generateLocalKeyId)if(e){var i=we.util.isArray(e)?e[0]:e;typeof i=="string"&&(i=ne.certificateFromPem(i));var s=we.md.sha1.create();s.update(w.toDer(ne.certificateToAsn1(i)).getBytes()),o=s.digest().getBytes()}else o=we.random.getBytes(20);var l=[];o!==null&&l.push(w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,[w.create(w.Class.UNIVERSAL,w.Type.OID,!1,w.oidToDer(ne.oids.localKeyId).getBytes()),w.create(w.Class.UNIVERSAL,w.Type.SET,!0,[w.create(w.Class.UNIVERSAL,w.Type.OCTETSTRING,!1,o)])])),"friendlyName"in n&&l.push(w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,[w.create(w.Class.UNIVERSAL,w.Type.OID,!1,w.oidToDer(ne.oids.friendlyName).getBytes()),w.create(w.Class.UNIVERSAL,w.Type.SET,!0,[w.create(w.Class.UNIVERSAL,w.Type.BMPSTRING,!1,n.friendlyName)])])),l.length>0&&(a=w.create(w.Class.UNIVERSAL,w.Type.SET,!0,l));var c=[],d=[];e!==null&&(we.util.isArray(e)?d=e:d=[e]);for(var u=[],f=0;f<d.length;++f){e=d[f],typeof e=="string"&&(e=ne.certificateFromPem(e));var p=f===0?a:void 0,h=ne.certificateToAsn1(e),g=w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,[w.create(w.Class.UNIVERSAL,w.Type.OID,!1,w.oidToDer(ne.oids.certBag).getBytes()),w.create(w.Class.CONTEXT_SPECIFIC,0,!0,[w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,[w.create(w.Class.UNIVERSAL,w.Type.OID,!1,w.oidToDer(ne.oids.x509Certificate).getBytes()),w.create(w.Class.CONTEXT_SPECIFIC,0,!0,[w.create(w.Class.UNIVERSAL,w.Type.OCTETSTRING,!1,w.toDer(h).getBytes())])])]),p]);u.push(g)}if(u.length>0){var b=w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,u),x=w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,[w.create(w.Class.UNIVERSAL,w.Type.OID,!1,w.oidToDer(ne.oids.data).getBytes()),w.create(w.Class.CONTEXT_SPECIFIC,0,!0,[w.create(w.Class.UNIVERSAL,w.Type.OCTETSTRING,!1,w.toDer(b).getBytes())])]);c.push(x)}var C=null;if(t!==null){var k=ne.wrapRsaPrivateKey(ne.privateKeyToAsn1(t));r===null?C=w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,[w.create(w.Class.UNIVERSAL,w.Type.OID,!1,w.oidToDer(ne.oids.keyBag).getBytes()),w.create(w.Class.CONTEXT_SPECIFIC,0,!0,[k]),a]):C=w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,[w.create(w.Class.UNIVERSAL,w.Type.OID,!1,w.oidToDer(ne.oids.pkcs8ShroudedKeyBag).getBytes()),w.create(w.Class.CONTEXT_SPECIFIC,0,!0,[ne.encryptPrivateKeyInfo(k,r,n)]),a]);var B=w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,[C]),_=w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,[w.create(w.Class.UNIVERSAL,w.Type.OID,!1,w.oidToDer(ne.oids.data).getBytes()),w.create(w.Class.CONTEXT_SPECIFIC,0,!0,[w.create(w.Class.UNIVERSAL,w.Type.OCTETSTRING,!1,w.toDer(B).getBytes())])]);c.push(_)}var T=w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,c),R;if(n.useMac){var s=we.md.sha1.create(),D=new we.util.ByteBuffer(we.random.getBytes(n.saltSize)),O=n.count,t=xo.generateKey(r,D,3,O,20),U=we.hmac.create();U.start(s,t),U.update(w.toDer(T).getBytes());var K=U.getMac();R=w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,[w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,[w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,[w.create(w.Class.UNIVERSAL,w.Type.OID,!1,w.oidToDer(ne.oids.sha1).getBytes()),w.create(w.Class.UNIVERSAL,w.Type.NULL,!1,"")]),w.create(w.Class.UNIVERSAL,w.Type.OCTETSTRING,!1,K.getBytes())]),w.create(w.Class.UNIVERSAL,w.Type.OCTETSTRING,!1,D.getBytes()),w.create(w.Class.UNIVERSAL,w.Type.INTEGER,!1,w.integerToDer(O).getBytes())])}return w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,[w.create(w.Class.UNIVERSAL,w.Type.INTEGER,!1,w.integerToDer(3).getBytes()),w.create(w.Class.UNIVERSAL,w.Type.SEQUENCE,!0,[w.create(w.Class.UNIVERSAL,w.Type.OID,!1,w.oidToDer(ne.oids.data).getBytes()),w.create(w.Class.CONTEXT_SPECIFIC,0,!0,[w.create(w.Class.UNIVERSAL,w.Type.OCTETSTRING,!1,w.toDer(T).getBytes())])]),R])};xo.generateKey=we.pbe.generatePkcs12Key;var Ir=te,Sl=Ir.asn1,_n=Ir.pki=Ir.pki||{};_n.pemToDer=function(t){var e=Ir.pem.decode(t)[0];if(e.procType&&e.procType.type==="ENCRYPTED")throw new Error("Could not convert PEM to DER; PEM is encrypted.");return Ir.util.createBuffer(e.body)};_n.privateKeyFromPem=function(t){var e=Ir.pem.decode(t)[0];if(e.type!=="PRIVATE KEY"&&e.type!=="RSA PRIVATE KEY"){var r=new Error('Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".');throw r.headerType=e.type,r}if(e.procType&&e.procType.type==="ENCRYPTED")throw new Error("Could not convert private key from PEM; PEM is encrypted.");var n=Sl.fromDer(e.body);return _n.privateKeyFromAsn1(n)};_n.privateKeyToPem=function(t,e){var r={type:"RSA PRIVATE KEY",body:Sl.toDer(_n.privateKeyToAsn1(t)).getBytes()};return Ir.pem.encode(r,{maxline:e})};_n.privateKeyInfoToPem=function(t,e){var r={type:"PRIVATE KEY",body:Sl.toDer(t).getBytes()};return Ir.pem.encode(r,{maxline:e})};var L=te,ni=function(t,e,r,n){var o=L.util.createBuffer(),a=t.length>>1,i=a+(t.length&1),s=t.substr(0,i),l=t.substr(a,i),c=L.util.createBuffer(),d=L.hmac.create();r=e+r;var u=Math.ceil(n/16),f=Math.ceil(n/20);d.start("MD5",s);var p=L.util.createBuffer();c.putBytes(r);for(var h=0;h<u;++h)d.start(null,null),d.update(c.getBytes()),c.putBuffer(d.digest()),d.start(null,null),d.update(c.bytes()+r),p.putBuffer(d.digest());d.start("SHA1",l);var g=L.util.createBuffer();c.clear(),c.putBytes(r);for(var h=0;h<f;++h)d.start(null,null),d.update(c.getBytes()),c.putBuffer(d.digest()),d.start(null,null),d.update(c.bytes()+r),g.putBuffer(d.digest());return o.putBytes(L.util.xorBytes(p.getBytes(),g.getBytes(),n)),o},r4=function(t,e,r){var n=L.hmac.create();n.start("SHA1",t);var o=L.util.createBuffer();return o.putInt32(e[0]),o.putInt32(e[1]),o.putByte(r.type),o.putByte(r.version.major),o.putByte(r.version.minor),o.putInt16(r.length),o.putBytes(r.fragment.bytes()),n.update(o.getBytes()),n.digest().getBytes()},n4=function(t,e,r){var n=!1;try{var o=t.deflate(e.fragment.getBytes());e.fragment=L.util.createBuffer(o),e.length=o.length,n=!0}catch{}return n},o4=function(t,e,r){var n=!1;try{var o=t.inflate(e.fragment.getBytes());e.fragment=L.util.createBuffer(o),e.length=o.length,n=!0}catch{}return n},vt=function(t,e){var r=0;switch(e){case 1:r=t.getByte();break;case 2:r=t.getInt16();break;case 3:r=t.getInt24();break;case 4:r=t.getInt32();break}return L.util.createBuffer(t.getBytes(r))},kt=function(t,e,r){t.putInt(r.length(),e<<3),t.putBuffer(r)},y={};y.Versions={TLS_1_0:{major:3,minor:1},TLS_1_1:{major:3,minor:2},TLS_1_2:{major:3,minor:3}};y.SupportedVersions=[y.Versions.TLS_1_1,y.Versions.TLS_1_0];y.Version=y.SupportedVersions[0];y.MaxFragment=15360;y.ConnectionEnd={server:0,client:1};y.PRFAlgorithm={tls_prf_sha256:0};y.BulkCipherAlgorithm={none:null,rc4:0,des3:1,aes:2};y.CipherType={stream:0,block:1,aead:2};y.MACAlgorithm={none:null,hmac_md5:0,hmac_sha1:1,hmac_sha256:2,hmac_sha384:3,hmac_sha512:4};y.CompressionMethod={none:0,deflate:1};y.ContentType={change_cipher_spec:20,alert:21,handshake:22,application_data:23,heartbeat:24};y.HandshakeType={hello_request:0,client_hello:1,server_hello:2,certificate:11,server_key_exchange:12,certificate_request:13,server_hello_done:14,certificate_verify:15,client_key_exchange:16,finished:20};y.Alert={};y.Alert.Level={warning:1,fatal:2};y.Alert.Description={close_notify:0,unexpected_message:10,bad_record_mac:20,decryption_failed:21,record_overflow:22,decompression_failure:30,handshake_failure:40,bad_certificate:42,unsupported_certificate:43,certificate_revoked:44,certificate_expired:45,certificate_unknown:46,illegal_parameter:47,unknown_ca:48,access_denied:49,decode_error:50,decrypt_error:51,export_restriction:60,protocol_version:70,insufficient_security:71,internal_error:80,user_canceled:90,no_renegotiation:100};y.HeartbeatMessageType={heartbeat_request:1,heartbeat_response:2};y.CipherSuites={};y.getCipherSuite=function(t){var e=null;for(var r in y.CipherSuites){var n=y.CipherSuites[r];if(n.id[0]===t.charCodeAt(0)&&n.id[1]===t.charCodeAt(1)){e=n;break}}return e};y.handleUnexpected=function(t,e){var r=!t.open&&t.entity===y.ConnectionEnd.client;r||t.error(t,{message:"Unexpected message. Received TLS record out of order.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.unexpected_message}})};y.handleHelloRequest=function(t,e,r){!t.handshaking&&t.handshakes>0&&(y.queue(t,y.createAlert(t,{level:y.Alert.Level.warning,description:y.Alert.Description.no_renegotiation})),y.flush(t)),t.process()};y.parseHelloMessage=function(t,e,r){var n=null,o=t.entity===y.ConnectionEnd.client;if(r<38)t.error(t,{message:o?"Invalid ServerHello message. Message too short.":"Invalid ClientHello message. Message too short.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.illegal_parameter}});else{var a=e.fragment,i=a.length();if(n={version:{major:a.getByte(),minor:a.getByte()},random:L.util.createBuffer(a.getBytes(32)),session_id:vt(a,1),extensions:[]},o?(n.cipher_suite=a.getBytes(2),n.compression_method=a.getByte()):(n.cipher_suites=vt(a,2),n.compression_methods=vt(a,1)),i=r-(i-a.length()),i>0){for(var s=vt(a,2);s.length()>0;)n.extensions.push({type:[s.getByte(),s.getByte()],data:vt(s,2)});if(!o)for(var l=0;l<n.extensions.length;++l){var c=n.extensions[l];if(c.type[0]===0&&c.type[1]===0)for(var d=vt(c.data,2);d.length()>0;){var u=d.getByte();if(u!==0)break;t.session.extensions.server_name.serverNameList.push(vt(d,2).getBytes())}}}if(t.session.version&&(n.version.major!==t.session.version.major||n.version.minor!==t.session.version.minor))return t.error(t,{message:"TLS version change is disallowed during renegotiation.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.protocol_version}});if(o)t.session.cipherSuite=y.getCipherSuite(n.cipher_suite);else for(var f=L.util.createBuffer(n.cipher_suites.bytes());f.length()>0&&(t.session.cipherSuite=y.getCipherSuite(f.getBytes(2)),t.session.cipherSuite===null););if(t.session.cipherSuite===null)return t.error(t,{message:"No cipher suites in common.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.handshake_failure},cipherSuite:L.util.bytesToHex(n.cipher_suite)});o?t.session.compressionMethod=n.compression_method:t.session.compressionMethod=y.CompressionMethod.none}return n};y.createSecurityParameters=function(t,e){var r=t.entity===y.ConnectionEnd.client,n=e.random.bytes(),o=r?t.session.sp.client_random:n,a=r?n:y.createRandom().getBytes();t.session.sp={entity:t.entity,prf_algorithm:y.PRFAlgorithm.tls_prf_sha256,bulk_cipher_algorithm:null,cipher_type:null,enc_key_length:null,block_length:null,fixed_iv_length:null,record_iv_length:null,mac_algorithm:null,mac_length:null,mac_key_length:null,compression_algorithm:t.session.compressionMethod,pre_master_secret:null,master_secret:null,client_random:o,server_random:a}};y.handleServerHello=function(t,e,r){var n=y.parseHelloMessage(t,e,r);if(!t.fail){if(n.version.minor<=t.version.minor)t.version.minor=n.version.minor;else return t.error(t,{message:"Incompatible TLS version.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.protocol_version}});t.session.version=t.version;var o=n.session_id.bytes();o.length>0&&o===t.session.id?(t.expect=Ep,t.session.resuming=!0,t.session.sp.server_random=n.random.bytes()):(t.expect=i4,t.session.resuming=!1,y.createSecurityParameters(t,n)),t.session.id=o,t.process()}};y.handleClientHello=function(t,e,r){var n=y.parseHelloMessage(t,e,r);if(!t.fail){var o=n.session_id.bytes(),a=null;if(t.sessionCache&&(a=t.sessionCache.getSession(o),a===null?o="":(a.version.major!==n.version.major||a.version.minor>n.version.minor)&&(a=null,o="")),o.length===0&&(o=L.random.getBytes(32)),t.session.id=o,t.session.clientHelloVersion=n.version,t.session.sp={},a)t.version=t.session.version=a.version,t.session.sp=a.sp;else{for(var i,s=1;s<y.SupportedVersions.length&&(i=y.SupportedVersions[s],!(i.minor<=n.version.minor));++s);t.version={major:i.major,minor:i.minor},t.session.version=t.version}a!==null?(t.expect=El,t.session.resuming=!0,t.session.sp.client_random=n.random.bytes()):(t.expect=t.verifyClient!==!1?p4:Rs,t.session.resuming=!1,y.createSecurityParameters(t,n)),t.open=!0,y.queue(t,y.createRecord(t,{type:y.ContentType.handshake,data:y.createServerHello(t)})),t.session.resuming?(y.queue(t,y.createRecord(t,{type:y.ContentType.change_cipher_spec,data:y.createChangeCipherSpec()})),t.state.pending=y.createConnectionState(t),t.state.current.write=t.state.pending.write,y.queue(t,y.createRecord(t,{type:y.ContentType.handshake,data:y.createFinished(t)}))):(y.queue(t,y.createRecord(t,{type:y.ContentType.handshake,data:y.createCertificate(t)})),t.fail||(y.queue(t,y.createRecord(t,{type:y.ContentType.handshake,data:y.createServerKeyExchange(t)})),t.verifyClient!==!1&&y.queue(t,y.createRecord(t,{type:y.ContentType.handshake,data:y.createCertificateRequest(t)})),y.queue(t,y.createRecord(t,{type:y.ContentType.handshake,data:y.createServerHelloDone(t)})))),y.flush(t),t.process()}};y.handleCertificate=function(t,e,r){if(r<3)return t.error(t,{message:"Invalid Certificate message. Message too short.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.illegal_parameter}});var n=e.fragment,o={certificate_list:vt(n,3)},a,i,s=[];try{for(;o.certificate_list.length()>0;)a=vt(o.certificate_list,3),i=L.asn1.fromDer(a),a=L.pki.certificateFromAsn1(i,!0),s.push(a)}catch(c){return t.error(t,{message:"Could not parse certificate list.",cause:c,send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.bad_certificate}})}var l=t.entity===y.ConnectionEnd.client;(l||t.verifyClient===!0)&&s.length===0?t.error(t,{message:l?"No server certificate provided.":"No client certificate provided.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.illegal_parameter}}):s.length===0?t.expect=l?Cd:Rs:(l?t.session.serverCertificate=s[0]:t.session.clientCertificate=s[0],y.verifyCertificateChain(t,s)&&(t.expect=l?Cd:Rs)),t.process()};y.handleServerKeyExchange=function(t,e,r){if(r>0)return t.error(t,{message:"Invalid key parameters. Only RSA is supported.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.unsupported_certificate}});t.expect=s4,t.process()};y.handleClientKeyExchange=function(t,e,r){if(r<48)return t.error(t,{message:"Invalid key parameters. Only RSA is supported.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.unsupported_certificate}});var n=e.fragment,o={enc_pre_master_secret:vt(n,2).getBytes()},a=null;if(t.getPrivateKey)try{a=t.getPrivateKey(t,t.session.serverCertificate),a=L.pki.privateKeyFromPem(a)}catch(l){t.error(t,{message:"Could not get private key.",cause:l,send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.internal_error}})}if(a===null)return t.error(t,{message:"No private key set.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.internal_error}});try{var i=t.session.sp;i.pre_master_secret=a.decrypt(o.enc_pre_master_secret);var s=t.session.clientHelloVersion;if(s.major!==i.pre_master_secret.charCodeAt(0)||s.minor!==i.pre_master_secret.charCodeAt(1))throw new Error("TLS version rollback attack detected.")}catch{i.pre_master_secret=L.random.getBytes(48)}t.expect=El,t.session.clientCertificate!==null&&(t.expect=h4),t.process()};y.handleCertificateRequest=function(t,e,r){if(r<3)return t.error(t,{message:"Invalid CertificateRequest. Message too short.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.illegal_parameter}});var n=e.fragment,o={certificate_types:vt(n,1),certificate_authorities:vt(n,2)};t.session.certificateRequest=o,t.expect=l4,t.process()};y.handleCertificateVerify=function(t,e,r){if(r<2)return t.error(t,{message:"Invalid CertificateVerify. Message too short.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.illegal_parameter}});var n=e.fragment;n.read-=4;var o=n.bytes();n.read+=4;var a={signature:vt(n,2).getBytes()},i=L.util.createBuffer();i.putBuffer(t.session.md5.digest()),i.putBuffer(t.session.sha1.digest()),i=i.getBytes();try{var s=t.session.clientCertificate;if(!s.publicKey.verify(i,a.signature,"NONE"))throw new Error("CertificateVerify signature does not match.");t.session.md5.update(o),t.session.sha1.update(o)}catch{return t.error(t,{message:"Bad signature in CertificateVerify.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.handshake_failure}})}t.expect=El,t.process()};y.handleServerHelloDone=function(t,e,r){if(r>0)return t.error(t,{message:"Invalid ServerHelloDone message. Invalid length.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.record_overflow}});if(t.serverCertificate===null){var n={message:"No server certificate provided. Not enough security.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.insufficient_security}},o=0,a=t.verify(t,n.alert.description,o,[]);if(a!==!0)return(a||a===0)&&(typeof a=="object"&&!L.util.isArray(a)?(a.message&&(n.message=a.message),a.alert&&(n.alert.description=a.alert)):typeof a=="number"&&(n.alert.description=a)),t.error(t,n)}t.session.certificateRequest!==null&&(e=y.createRecord(t,{type:y.ContentType.handshake,data:y.createCertificate(t)}),y.queue(t,e)),e=y.createRecord(t,{type:y.ContentType.handshake,data:y.createClientKeyExchange(t)}),y.queue(t,e),t.expect=u4;var i=function(s,l){s.session.certificateRequest!==null&&s.session.clientCertificate!==null&&y.queue(s,y.createRecord(s,{type:y.ContentType.handshake,data:y.createCertificateVerify(s,l)})),y.queue(s,y.createRecord(s,{type:y.ContentType.change_cipher_spec,data:y.createChangeCipherSpec()})),s.state.pending=y.createConnectionState(s),s.state.current.write=s.state.pending.write,y.queue(s,y.createRecord(s,{type:y.ContentType.handshake,data:y.createFinished(s)})),s.expect=Ep,y.flush(s),s.process()};if(t.session.certificateRequest===null||t.session.clientCertificate===null)return i(t,null);y.getClientSignature(t,i)};y.handleChangeCipherSpec=function(t,e){if(e.fragment.getByte()!==1)return t.error(t,{message:"Invalid ChangeCipherSpec message received.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.illegal_parameter}});var r=t.entity===y.ConnectionEnd.client;(t.session.resuming&&r||!t.session.resuming&&!r)&&(t.state.pending=y.createConnectionState(t)),t.state.current.read=t.state.pending.read,(!t.session.resuming&&r||t.session.resuming&&!r)&&(t.state.pending=null),t.expect=r?c4:g4,t.process()};y.handleFinished=function(t,e,r){var n=e.fragment;n.read-=4;var o=n.bytes();n.read+=4;var a=e.fragment.getBytes();n=L.util.createBuffer(),n.putBuffer(t.session.md5.digest()),n.putBuffer(t.session.sha1.digest());var i=t.entity===y.ConnectionEnd.client,s=i?"server finished":"client finished",l=t.session.sp,c=12,d=ni;if(n=d(l.master_secret,s,n.getBytes(),c),n.getBytes()!==a)return t.error(t,{message:"Invalid verify_data in Finished message.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.decrypt_error}});t.session.md5.update(o),t.session.sha1.update(o),(t.session.resuming&&i||!t.session.resuming&&!i)&&(y.queue(t,y.createRecord(t,{type:y.ContentType.change_cipher_spec,data:y.createChangeCipherSpec()})),t.state.current.write=t.state.pending.write,t.state.pending=null,y.queue(t,y.createRecord(t,{type:y.ContentType.handshake,data:y.createFinished(t)}))),t.expect=i?d4:b4,t.handshaking=!1,++t.handshakes,t.peerCertificate=i?t.session.serverCertificate:t.session.clientCertificate,y.flush(t),t.isConnected=!0,t.connected(t),t.process()};y.handleAlert=function(t,e){var r=e.fragment,n={level:r.getByte(),description:r.getByte()},o;switch(n.description){case y.Alert.Description.close_notify:o="Connection closed.";break;case y.Alert.Description.unexpected_message:o="Unexpected message.";break;case y.Alert.Description.bad_record_mac:o="Bad record MAC.";break;case y.Alert.Description.decryption_failed:o="Decryption failed.";break;case y.Alert.Description.record_overflow:o="Record overflow.";break;case y.Alert.Description.decompression_failure:o="Decompression failed.";break;case y.Alert.Description.handshake_failure:o="Handshake failure.";break;case y.Alert.Description.bad_certificate:o="Bad certificate.";break;case y.Alert.Description.unsupported_certificate:o="Unsupported certificate.";break;case y.Alert.Description.certificate_revoked:o="Certificate revoked.";break;case y.Alert.Description.certificate_expired:o="Certificate expired.";break;case y.Alert.Description.certificate_unknown:o="Certificate unknown.";break;case y.Alert.Description.illegal_parameter:o="Illegal parameter.";break;case y.Alert.Description.unknown_ca:o="Unknown certificate authority.";break;case y.Alert.Description.access_denied:o="Access denied.";break;case y.Alert.Description.decode_error:o="Decode error.";break;case y.Alert.Description.decrypt_error:o="Decrypt error.";break;case y.Alert.Description.export_restriction:o="Export restriction.";break;case y.Alert.Description.protocol_version:o="Unsupported protocol version.";break;case y.Alert.Description.insufficient_security:o="Insufficient security.";break;case y.Alert.Description.internal_error:o="Internal error.";break;case y.Alert.Description.user_canceled:o="User canceled.";break;case y.Alert.Description.no_renegotiation:o="Renegotiation not supported.";break;default:o="Unknown error.";break}if(n.description===y.Alert.Description.close_notify)return t.close();t.error(t,{message:o,send:!1,origin:t.entity===y.ConnectionEnd.client?"server":"client",alert:n}),t.process()};y.handleHandshake=function(t,e){var r=e.fragment,n=r.getByte(),o=r.getInt24();if(o>r.length())return t.fragmented=e,e.fragment=L.util.createBuffer(),r.read-=4,t.process();t.fragmented=null,r.read-=4;var a=r.bytes(o+4);r.read+=4,n in Ea[t.entity][t.expect]?(t.entity===y.ConnectionEnd.server&&!t.open&&!t.fail&&(t.handshaking=!0,t.session={version:null,extensions:{server_name:{serverNameList:[]}},cipherSuite:null,compressionMethod:null,serverCertificate:null,clientCertificate:null,md5:L.md.md5.create(),sha1:L.md.sha1.create()}),n!==y.HandshakeType.hello_request&&n!==y.HandshakeType.certificate_verify&&n!==y.HandshakeType.finished&&(t.session.md5.update(a),t.session.sha1.update(a)),Ea[t.entity][t.expect][n](t,e,o)):y.handleUnexpected(t,e)};y.handleApplicationData=function(t,e){t.data.putBuffer(e.fragment),t.dataReady(t),t.process()};y.handleHeartbeat=function(t,e){var r=e.fragment,n=r.getByte(),o=r.getInt16(),a=r.getBytes(o);if(n===y.HeartbeatMessageType.heartbeat_request){if(t.handshaking||o>a.length)return t.process();y.queue(t,y.createRecord(t,{type:y.ContentType.heartbeat,data:y.createHeartbeat(y.HeartbeatMessageType.heartbeat_response,a)})),y.flush(t)}else if(n===y.HeartbeatMessageType.heartbeat_response){if(a!==t.expectedHeartbeatPayload)return t.process();t.heartbeatReceived&&t.heartbeatReceived(t,L.util.createBuffer(a))}t.process()};var a4=0,i4=1,Cd=2,s4=3,l4=4,Ep=5,c4=6,d4=7,u4=8,f4=0,p4=1,Rs=2,h4=3,El=4,g4=5,b4=6,v=y.handleUnexpected,_p=y.handleChangeCipherSpec,at=y.handleAlert,ut=y.handleHandshake,Tp=y.handleApplicationData,it=y.handleHeartbeat,_l=[];_l[y.ConnectionEnd.client]=[[v,at,ut,v,it],[v,at,ut,v,it],[v,at,ut,v,it],[v,at,ut,v,it],[v,at,ut,v,it],[_p,at,v,v,it],[v,at,ut,v,it],[v,at,ut,Tp,it],[v,at,ut,v,it]];_l[y.ConnectionEnd.server]=[[v,at,ut,v,it],[v,at,ut,v,it],[v,at,ut,v,it],[v,at,ut,v,it],[_p,at,v,v,it],[v,at,ut,v,it],[v,at,ut,Tp,it],[v,at,ut,v,it]];var gr=y.handleHelloRequest,m4=y.handleServerHello,Bp=y.handleCertificate,kd=y.handleServerKeyExchange,Ki=y.handleCertificateRequest,Ko=y.handleServerHelloDone,Ap=y.handleFinished,Ea=[];Ea[y.ConnectionEnd.client]=[[v,v,m4,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v],[gr,v,v,v,v,v,v,v,v,v,v,Bp,kd,Ki,Ko,v,v,v,v,v,v],[gr,v,v,v,v,v,v,v,v,v,v,v,kd,Ki,Ko,v,v,v,v,v,v],[gr,v,v,v,v,v,v,v,v,v,v,v,v,Ki,Ko,v,v,v,v,v,v],[gr,v,v,v,v,v,v,v,v,v,v,v,v,v,Ko,v,v,v,v,v,v],[gr,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v],[gr,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,Ap],[gr,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v],[gr,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v]];var v4=y.handleClientHello,y4=y.handleClientKeyExchange,x4=y.handleCertificateVerify;Ea[y.ConnectionEnd.server]=[[v,v4,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v],[v,v,v,v,v,v,v,v,v,v,v,Bp,v,v,v,v,v,v,v,v,v],[v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,y4,v,v,v,v],[v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,x4,v,v,v,v,v],[v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v],[v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,Ap],[v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v],[v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v]];y.generateKeys=function(t,e){var r=ni,n=e.client_random+e.server_random;t.session.resuming||(e.master_secret=r(e.pre_master_secret,"master secret",n,48).bytes(),e.pre_master_secret=null),n=e.server_random+e.client_random;var o=2*e.mac_key_length+2*e.enc_key_length,a=t.version.major===y.Versions.TLS_1_0.major&&t.version.minor===y.Versions.TLS_1_0.minor;a&&(o+=2*e.fixed_iv_length);var i=r(e.master_secret,"key expansion",n,o),s={client_write_MAC_key:i.getBytes(e.mac_key_length),server_write_MAC_key:i.getBytes(e.mac_key_length),client_write_key:i.getBytes(e.enc_key_length),server_write_key:i.getBytes(e.enc_key_length)};return a&&(s.client_write_IV=i.getBytes(e.fixed_iv_length),s.server_write_IV=i.getBytes(e.fixed_iv_length)),s};y.createConnectionState=function(t){var e=t.entity===y.ConnectionEnd.client,r=function(){var a={sequenceNumber:[0,0],macKey:null,macLength:0,macFunction:null,cipherState:null,cipherFunction:function(i){return!0},compressionState:null,compressFunction:function(i){return!0},updateSequenceNumber:function(){a.sequenceNumber[1]===4294967295?(a.sequenceNumber[1]=0,++a.sequenceNumber[0]):++a.sequenceNumber[1]}};return a},n={read:r(),write:r()};if(n.read.update=function(a,i){return n.read.cipherFunction(i,n.read)?n.read.compressFunction(a,i,n.read)||a.error(a,{message:"Could not decompress record.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.decompression_failure}}):a.error(a,{message:"Could not decrypt record or bad MAC.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.bad_record_mac}}),!a.fail},n.write.update=function(a,i){return n.write.compressFunction(a,i,n.write)?n.write.cipherFunction(i,n.write)||a.error(a,{message:"Could not encrypt record.",send:!1,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.internal_error}}):a.error(a,{message:"Could not compress record.",send:!1,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.internal_error}}),!a.fail},t.session){var o=t.session.sp;switch(t.session.cipherSuite.initSecurityParameters(o),o.keys=y.generateKeys(t,o),n.read.macKey=e?o.keys.server_write_MAC_key:o.keys.client_write_MAC_key,n.write.macKey=e?o.keys.client_write_MAC_key:o.keys.server_write_MAC_key,t.session.cipherSuite.initConnectionState(n,t,o),o.compression_algorithm){case y.CompressionMethod.none:break;case y.CompressionMethod.deflate:n.read.compressFunction=o4,n.write.compressFunction=n4;break;default:throw new Error("Unsupported compression algorithm.")}}return n};y.createRandom=function(){var t=new Date,e=+t+t.getTimezoneOffset()*6e4,r=L.util.createBuffer();return r.putInt32(e),r.putBytes(L.random.getBytes(28)),r};y.createRecord=function(t,e){if(!e.data)return null;var r={type:e.type,version:{major:t.version.major,minor:t.version.minor},length:e.data.length(),fragment:e.data};return r};y.createAlert=function(t,e){var r=L.util.createBuffer();return r.putByte(e.level),r.putByte(e.description),y.createRecord(t,{type:y.ContentType.alert,data:r})};y.createClientHello=function(t){t.session.clientHelloVersion={major:t.version.major,minor:t.version.minor};for(var e=L.util.createBuffer(),r=0;r<t.cipherSuites.length;++r){var n=t.cipherSuites[r];e.putByte(n.id[0]),e.putByte(n.id[1])}var o=e.length(),a=L.util.createBuffer();a.putByte(y.CompressionMethod.none);var i=a.length(),s=L.util.createBuffer();if(t.virtualHost){var l=L.util.createBuffer();l.putByte(0),l.putByte(0);var c=L.util.createBuffer();c.putByte(0),kt(c,2,L.util.createBuffer(t.virtualHost));var d=L.util.createBuffer();kt(d,2,c),kt(l,2,d),s.putBuffer(l)}var u=s.length();u>0&&(u+=2);var f=t.session.id,p=f.length+1+2+4+28+2+o+1+i+u,h=L.util.createBuffer();return h.putByte(y.HandshakeType.client_hello),h.putInt24(p),h.putByte(t.version.major),h.putByte(t.version.minor),h.putBytes(t.session.sp.client_random),kt(h,1,L.util.createBuffer(f)),kt(h,2,e),kt(h,1,a),u>0&&kt(h,2,s),h};y.createServerHello=function(t){var e=t.session.id,r=e.length+1+2+4+28+2+1,n=L.util.createBuffer();return n.putByte(y.HandshakeType.server_hello),n.putInt24(r),n.putByte(t.version.major),n.putByte(t.version.minor),n.putBytes(t.session.sp.server_random),kt(n,1,L.util.createBuffer(e)),n.putByte(t.session.cipherSuite.id[0]),n.putByte(t.session.cipherSuite.id[1]),n.putByte(t.session.compressionMethod),n};y.createCertificate=function(t){var e=t.entity===y.ConnectionEnd.client,r=null;if(t.getCertificate){var n;e?n=t.session.certificateRequest:n=t.session.extensions.server_name.serverNameList,r=t.getCertificate(t,n)}var o=L.util.createBuffer();if(r!==null)try{L.util.isArray(r)||(r=[r]);for(var a=null,i=0;i<r.length;++i){var s=L.pem.decode(r[i])[0];if(s.type!=="CERTIFICATE"&&s.type!=="X509 CERTIFICATE"&&s.type!=="TRUSTED CERTIFICATE"){var l=new Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');throw l.headerType=s.type,l}if(s.procType&&s.procType.type==="ENCRYPTED")throw new Error("Could not convert certificate from PEM; PEM is encrypted.");var c=L.util.createBuffer(s.body);a===null&&(a=L.asn1.fromDer(c.bytes(),!1));var d=L.util.createBuffer();kt(d,3,c),o.putBuffer(d)}r=L.pki.certificateFromAsn1(a),e?t.session.clientCertificate=r:t.session.serverCertificate=r}catch(p){return t.error(t,{message:"Could not send certificate list.",cause:p,send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.bad_certificate}})}var u=3+o.length(),f=L.util.createBuffer();return f.putByte(y.HandshakeType.certificate),f.putInt24(u),kt(f,3,o),f};y.createClientKeyExchange=function(t){var e=L.util.createBuffer();e.putByte(t.session.clientHelloVersion.major),e.putByte(t.session.clientHelloVersion.minor),e.putBytes(L.random.getBytes(46));var r=t.session.sp;r.pre_master_secret=e.getBytes();var n=t.session.serverCertificate.publicKey;e=n.encrypt(r.pre_master_secret);var o=e.length+2,a=L.util.createBuffer();return a.putByte(y.HandshakeType.client_key_exchange),a.putInt24(o),a.putInt16(e.length),a.putBytes(e),a};y.createServerKeyExchange=function(t){var e=L.util.createBuffer();return e};y.getClientSignature=function(t,e){var r=L.util.createBuffer();r.putBuffer(t.session.md5.digest()),r.putBuffer(t.session.sha1.digest()),r=r.getBytes(),t.getSignature=t.getSignature||function(n,o,a){var i=null;if(n.getPrivateKey)try{i=n.getPrivateKey(n,n.session.clientCertificate),i=L.pki.privateKeyFromPem(i)}catch(s){n.error(n,{message:"Could not get private key.",cause:s,send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.internal_error}})}i===null?n.error(n,{message:"No private key set.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.internal_error}}):o=i.sign(o,null),a(n,o)},t.getSignature(t,r,e)};y.createCertificateVerify=function(t,e){var r=e.length+2,n=L.util.createBuffer();return n.putByte(y.HandshakeType.certificate_verify),n.putInt24(r),n.putInt16(e.length),n.putBytes(e),n};y.createCertificateRequest=function(t){var e=L.util.createBuffer();e.putByte(1);var r=L.util.createBuffer();for(var n in t.caStore.certs){var o=t.caStore.certs[n],a=L.pki.distinguishedNameToAsn1(o.subject),i=L.asn1.toDer(a);r.putInt16(i.length()),r.putBuffer(i)}var s=1+e.length()+2+r.length(),l=L.util.createBuffer();return l.putByte(y.HandshakeType.certificate_request),l.putInt24(s),kt(l,1,e),kt(l,2,r),l};y.createServerHelloDone=function(t){var e=L.util.createBuffer();return e.putByte(y.HandshakeType.server_hello_done),e.putInt24(0),e};y.createChangeCipherSpec=function(){var t=L.util.createBuffer();return t.putByte(1),t};y.createFinished=function(t){var e=L.util.createBuffer();e.putBuffer(t.session.md5.digest()),e.putBuffer(t.session.sha1.digest());var r=t.entity===y.ConnectionEnd.client,n=t.session.sp,o=12,a=ni,i=r?"client finished":"server finished";e=a(n.master_secret,i,e.getBytes(),o);var s=L.util.createBuffer();return s.putByte(y.HandshakeType.finished),s.putInt24(e.length()),s.putBuffer(e),s};y.createHeartbeat=function(t,e,r){typeof r>"u"&&(r=e.length);var n=L.util.createBuffer();n.putByte(t),n.putInt16(r),n.putBytes(e);var o=n.length(),a=Math.max(16,o-r-3);return n.putBytes(L.random.getBytes(a)),n};y.queue=function(t,e){if(e&&!(e.fragment.length()===0&&(e.type===y.ContentType.handshake||e.type===y.ContentType.alert||e.type===y.ContentType.change_cipher_spec))){if(e.type===y.ContentType.handshake){var r=e.fragment.bytes();t.session.md5.update(r),t.session.sha1.update(r),r=null}var n;if(e.fragment.length()<=y.MaxFragment)n=[e];else{n=[];for(var o=e.fragment.bytes();o.length>y.MaxFragment;)n.push(y.createRecord(t,{type:e.type,data:L.util.createBuffer(o.slice(0,y.MaxFragment))})),o=o.slice(y.MaxFragment);o.length>0&&n.push(y.createRecord(t,{type:e.type,data:L.util.createBuffer(o)}))}for(var a=0;a<n.length&&!t.fail;++a){var i=n[a],s=t.state.current.write;s.update(t,i)&&t.records.push(i)}}};y.flush=function(t){for(var e=0;e<t.records.length;++e){var r=t.records[e];t.tlsData.putByte(r.type),t.tlsData.putByte(r.version.major),t.tlsData.putByte(r.version.minor),t.tlsData.putInt16(r.fragment.length()),t.tlsData.putBuffer(t.records[e].fragment)}return t.records=[],t.tlsDataReady(t)};var Hi=function(t){switch(t){case!0:return!0;case L.pki.certificateError.bad_certificate:return y.Alert.Description.bad_certificate;case L.pki.certificateError.unsupported_certificate:return y.Alert.Description.unsupported_certificate;case L.pki.certificateError.certificate_revoked:return y.Alert.Description.certificate_revoked;case L.pki.certificateError.certificate_expired:return y.Alert.Description.certificate_expired;case L.pki.certificateError.certificate_unknown:return y.Alert.Description.certificate_unknown;case L.pki.certificateError.unknown_ca:return y.Alert.Description.unknown_ca;default:return y.Alert.Description.bad_certificate}},C4=function(t){switch(t){case!0:return!0;case y.Alert.Description.bad_certificate:return L.pki.certificateError.bad_certificate;case y.Alert.Description.unsupported_certificate:return L.pki.certificateError.unsupported_certificate;case y.Alert.Description.certificate_revoked:return L.pki.certificateError.certificate_revoked;case y.Alert.Description.certificate_expired:return L.pki.certificateError.certificate_expired;case y.Alert.Description.certificate_unknown:return L.pki.certificateError.certificate_unknown;case y.Alert.Description.unknown_ca:return L.pki.certificateError.unknown_ca;default:return L.pki.certificateError.bad_certificate}};y.verifyCertificateChain=function(t,e){try{var r={};for(var n in t.verifyOptions)r[n]=t.verifyOptions[n];r.verify=function(a,i,s){var l=Hi(a),c=t.verify(t,a,i,s);if(c!==!0){if(typeof c=="object"&&!L.util.isArray(c)){var d=new Error("The application rejected the certificate.");throw d.send=!0,d.alert={level:y.Alert.Level.fatal,description:y.Alert.Description.bad_certificate},c.message&&(d.message=c.message),c.alert&&(d.alert.description=c.alert),d}c!==a&&(c=C4(c))}return c},L.pki.verifyCertificateChain(t.caStore,e,r)}catch(a){var o=a;(typeof o!="object"||L.util.isArray(o))&&(o={send:!0,alert:{level:y.Alert.Level.fatal,description:Hi(a)}}),"send"in o||(o.send=!0),"alert"in o||(o.alert={level:y.Alert.Level.fatal,description:Hi(o.error)}),t.error(t,o)}return!t.fail};y.createSessionCache=function(t,e){var r=null;if(t&&t.getSession&&t.setSession&&t.order)r=t;else{r={},r.cache=t||{},r.capacity=Math.max(e||100,1),r.order=[];for(var n in t)r.order.length<=e?r.order.push(n):delete t[n];r.getSession=function(o){var a=null,i=null;if(o?i=L.util.bytesToHex(o):r.order.length>0&&(i=r.order[0]),i!==null&&i in r.cache){a=r.cache[i],delete r.cache[i];for(var s in r.order)if(r.order[s]===i){r.order.splice(s,1);break}}return a},r.setSession=function(o,a){if(r.order.length===r.capacity){var i=r.order.shift();delete r.cache[i]}var i=L.util.bytesToHex(o);r.order.push(i),r.cache[i]=a}}return r};y.createConnection=function(t){var e=null;t.caStore?L.util.isArray(t.caStore)?e=L.pki.createCaStore(t.caStore):e=t.caStore:e=L.pki.createCaStore();var r=t.cipherSuites||null;if(r===null){r=[];for(var n in y.CipherSuites)r.push(y.CipherSuites[n])}var o=t.server?y.ConnectionEnd.server:y.ConnectionEnd.client,a=t.sessionCache?y.createSessionCache(t.sessionCache):null,i={version:{major:y.Version.major,minor:y.Version.minor},entity:o,sessionId:t.sessionId,caStore:e,sessionCache:a,cipherSuites:r,connected:t.connected,virtualHost:t.virtualHost||null,verifyClient:t.verifyClient||!1,verify:t.verify||function(d,u,f,p){return u},verifyOptions:t.verifyOptions||{},getCertificate:t.getCertificate||null,getPrivateKey:t.getPrivateKey||null,getSignature:t.getSignature||null,input:L.util.createBuffer(),tlsData:L.util.createBuffer(),data:L.util.createBuffer(),tlsDataReady:t.tlsDataReady,dataReady:t.dataReady,heartbeatReceived:t.heartbeatReceived,closed:t.closed,error:function(d,u){u.origin=u.origin||(d.entity===y.ConnectionEnd.client?"client":"server"),u.send&&(y.queue(d,y.createAlert(d,u.alert)),y.flush(d));var f=u.fatal!==!1;f&&(d.fail=!0),t.error(d,u),f&&d.close(!1)},deflate:t.deflate||null,inflate:t.inflate||null};i.reset=function(d){i.version={major:y.Version.major,minor:y.Version.minor},i.record=null,i.session=null,i.peerCertificate=null,i.state={pending:null,current:null},i.expect=i.entity===y.ConnectionEnd.client?a4:f4,i.fragmented=null,i.records=[],i.open=!1,i.handshakes=0,i.handshaking=!1,i.isConnected=!1,i.fail=!(d||typeof d>"u"),i.input.clear(),i.tlsData.clear(),i.data.clear(),i.state.current=y.createConnectionState(i)},i.reset();var s=function(d,u){var f=u.type-y.ContentType.change_cipher_spec,p=_l[d.entity][d.expect];f in p?p[f](d,u):y.handleUnexpected(d,u)},l=function(d){var u=0,f=d.input,p=f.length();if(p<5)u=5-p;else{d.record={type:f.getByte(),version:{major:f.getByte(),minor:f.getByte()},length:f.getInt16(),fragment:L.util.createBuffer(),ready:!1};var h=d.record.version.major===d.version.major;h&&d.session&&d.session.version&&(h=d.record.version.minor===d.version.minor),h||d.error(d,{message:"Incompatible TLS version.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.protocol_version}})}return u},c=function(d){var u=0,f=d.input,p=f.length();if(p<d.record.length)u=d.record.length-p;else{d.record.fragment.putBytes(f.getBytes(d.record.length)),f.compact();var h=d.state.current.read;h.update(d,d.record)&&(d.fragmented!==null&&(d.fragmented.type===d.record.type?(d.fragmented.fragment.putBuffer(d.record.fragment),d.record=d.fragmented):d.error(d,{message:"Invalid fragmented record.",send:!0,alert:{level:y.Alert.Level.fatal,description:y.Alert.Description.unexpected_message}})),d.record.ready=!0)}return u};return i.handshake=function(d){if(i.entity!==y.ConnectionEnd.client)i.error(i,{message:"Cannot initiate handshake as a server.",fatal:!1});else if(i.handshaking)i.error(i,{message:"Handshake already in progress.",fatal:!1});else{i.fail&&!i.open&&i.handshakes===0&&(i.fail=!1),i.handshaking=!0,d=d||"";var u=null;d.length>0&&(i.sessionCache&&(u=i.sessionCache.getSession(d)),u===null&&(d="")),d.length===0&&i.sessionCache&&(u=i.sessionCache.getSession(),u!==null&&(d=u.id)),i.session={id:d,version:null,cipherSuite:null,compressionMethod:null,serverCertificate:null,certificateRequest:null,clientCertificate:null,sp:{},md5:L.md.md5.create(),sha1:L.md.sha1.create()},u&&(i.version=u.version,i.session.sp=u.sp),i.session.sp.client_random=y.createRandom().getBytes(),i.open=!0,y.queue(i,y.createRecord(i,{type:y.ContentType.handshake,data:y.createClientHello(i)})),y.flush(i)}},i.process=function(d){var u=0;return d&&i.input.putBytes(d),i.fail||(i.record!==null&&i.record.ready&&i.record.fragment.isEmpty()&&(i.record=null),i.record===null&&(u=l(i)),!i.fail&&i.record!==null&&!i.record.ready&&(u=c(i)),!i.fail&&i.record!==null&&i.record.ready&&s(i,i.record)),u},i.prepare=function(d){return y.queue(i,y.createRecord(i,{type:y.ContentType.application_data,data:L.util.createBuffer(d)})),y.flush(i)},i.prepareHeartbeatRequest=function(d,u){return d instanceof L.util.ByteBuffer&&(d=d.bytes()),typeof u>"u"&&(u=d.length),i.expectedHeartbeatPayload=d,y.queue(i,y.createRecord(i,{type:y.ContentType.heartbeat,data:y.createHeartbeat(y.HeartbeatMessageType.heartbeat_request,d,u)})),y.flush(i)},i.close=function(d){if(!i.fail&&i.sessionCache&&i.session){var u={id:i.session.id,version:i.session.version,sp:i.session.sp};u.sp.keys=null,i.sessionCache.setSession(u.id,u)}i.open&&(i.open=!1,i.input.clear(),(i.isConnected||i.handshaking)&&(i.isConnected=i.handshaking=!1,y.queue(i,y.createAlert(i,{level:y.Alert.Level.warning,description:y.Alert.Description.close_notify})),y.flush(i)),i.closed(i)),i.reset(d)},i};L.tls=L.tls||{};for(var Wi in y)typeof y[Wi]!="function"&&(L.tls[Wi]=y[Wi]);L.tls.prf_tls1=ni;L.tls.hmac_sha1=r4;L.tls.createSessionCache=y.createSessionCache;L.tls.createConnection=y.createConnection;var _r=te,Tt=_r.tls;Tt.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA={id:[0,47],name:"TLS_RSA_WITH_AES_128_CBC_SHA",initSecurityParameters:function(t){t.bulk_cipher_algorithm=Tt.BulkCipherAlgorithm.aes,t.cipher_type=Tt.CipherType.block,t.enc_key_length=16,t.block_length=16,t.fixed_iv_length=16,t.record_iv_length=16,t.mac_algorithm=Tt.MACAlgorithm.hmac_sha1,t.mac_length=20,t.mac_key_length=20},initConnectionState:Ip};Tt.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA={id:[0,53],name:"TLS_RSA_WITH_AES_256_CBC_SHA",initSecurityParameters:function(t){t.bulk_cipher_algorithm=Tt.BulkCipherAlgorithm.aes,t.cipher_type=Tt.CipherType.block,t.enc_key_length=32,t.block_length=16,t.fixed_iv_length=16,t.record_iv_length=16,t.mac_algorithm=Tt.MACAlgorithm.hmac_sha1,t.mac_length=20,t.mac_key_length=20},initConnectionState:Ip};function Ip(t,e,r){var n=e.entity===_r.tls.ConnectionEnd.client;t.read.cipherState={init:!1,cipher:_r.cipher.createDecipher("AES-CBC",n?r.keys.server_write_key:r.keys.client_write_key),iv:n?r.keys.server_write_IV:r.keys.client_write_IV},t.write.cipherState={init:!1,cipher:_r.cipher.createCipher("AES-CBC",n?r.keys.client_write_key:r.keys.server_write_key),iv:n?r.keys.client_write_IV:r.keys.server_write_IV},t.read.cipherFunction=E4,t.write.cipherFunction=k4,t.read.macLength=t.write.macLength=r.mac_length,t.read.macFunction=t.write.macFunction=Tt.hmac_sha1}function k4(t,e){var r=!1,n=e.macFunction(e.macKey,e.sequenceNumber,t);t.fragment.putBytes(n),e.updateSequenceNumber();var o;t.version.minor===Tt.Versions.TLS_1_0.minor?o=e.cipherState.init?null:e.cipherState.iv:o=_r.random.getBytesSync(16),e.cipherState.init=!0;var a=e.cipherState.cipher;return a.start({iv:o}),t.version.minor>=Tt.Versions.TLS_1_1.minor&&a.output.putBytes(o),a.update(t.fragment),a.finish(w4)&&(t.fragment=a.output,t.length=t.fragment.length(),r=!0),r}function w4(t,e,r){if(!r){var n=t-e.length()%t;e.fillWithByte(n-1,n)}return!0}function S4(t,e,r){var n=!0;if(r){for(var o=e.length(),a=e.last(),i=o-1-a;i<o-1;++i)n=n&&e.at(i)==a;n&&e.truncate(a+1)}return n}function E4(t,e){var r=!1,n;t.version.minor===Tt.Versions.TLS_1_0.minor?n=e.cipherState.init?null:e.cipherState.iv:n=t.fragment.getBytes(16),e.cipherState.init=!0;var o=e.cipherState.cipher;o.start({iv:n}),o.update(t.fragment),r=o.finish(S4);var a=e.macLength,i=_r.random.getBytesSync(a),s=o.output.length();s>=a?(t.fragment=o.output.getBytes(s-a),i=o.output.getBytes(a)):t.fragment=o.output.getBytes(),t.fragment=_r.util.createBuffer(t.fragment),t.length=t.fragment.length();var l=e.macFunction(e.macKey,e.sequenceNumber,t);return e.updateSequenceNumber(),r=_4(e.macKey,i,l)&&r,r}function _4(t,e,r){var n=_r.hmac.create();return n.start("SHA1",t),n.update(e),e=n.digest().getBytes(),n.start(null,null),n.update(r),r=n.digest().getBytes(),e===r}var Te=te,Ao=Te.sha512=Te.sha512||{};Te.md.sha512=Te.md.algorithms.sha512=Ao;var Rp=Te.sha384=Te.sha512.sha384=Te.sha512.sha384||{};Rp.create=function(){return Ao.create("SHA-384")};Te.md.sha384=Te.md.algorithms.sha384=Rp;Te.sha512.sha256=Te.sha512.sha256||{create:function(){return Ao.create("SHA-512/256")}};Te.md["sha512/256"]=Te.md.algorithms["sha512/256"]=Te.sha512.sha256;Te.sha512.sha224=Te.sha512.sha224||{create:function(){return Ao.create("SHA-512/224")}};Te.md["sha512/224"]=Te.md.algorithms["sha512/224"]=Te.sha512.sha224;Ao.create=function(t){if(Dp||T4(),typeof t>"u"&&(t="SHA-512"),!(t in Vr))throw new Error("Invalid SHA-512 algorithm: "+t);for(var e=Vr[t],r=null,n=Te.util.createBuffer(),o=new Array(80),a=0;a<80;++a)o[a]=new Array(2);var i=64;switch(t){case"SHA-384":i=48;break;case"SHA-512/256":i=32;break;case"SHA-512/224":i=28;break}var s={algorithm:t.replace("-","").toLowerCase(),blockLength:128,digestLength:i,messageLength:0,fullMessageLength:null,messageLengthSize:16};return s.start=function(){s.messageLength=0,s.fullMessageLength=s.messageLength128=[];for(var l=s.messageLengthSize/4,c=0;c<l;++c)s.fullMessageLength.push(0);n=Te.util.createBuffer(),r=new Array(e.length);for(var c=0;c<e.length;++c)r[c]=e[c].slice(0);return s},s.start(),s.update=function(l,c){c==="utf8"&&(l=Te.util.encodeUtf8(l));var d=l.length;s.messageLength+=d,d=[d/4294967296>>>0,d>>>0];for(var u=s.fullMessageLength.length-1;u>=0;--u)s.fullMessageLength[u]+=d[1],d[1]=d[0]+(s.fullMessageLength[u]/4294967296>>>0),s.fullMessageLength[u]=s.fullMessageLength[u]>>>0,d[0]=d[1]/4294967296>>>0;return n.putBytes(l),wd(r,o,n),(n.read>2048||n.length()===0)&&n.compact(),s},s.digest=function(){var l=Te.util.createBuffer();l.putBytes(n.bytes());var c=s.fullMessageLength[s.fullMessageLength.length-1]+s.messageLengthSize,d=c&s.blockLength-1;l.putBytes(Ds.substr(0,s.blockLength-d));for(var u,f,p=s.fullMessageLength[0]*8,h=0;h<s.fullMessageLength.length-1;++h)u=s.fullMessageLength[h+1]*8,f=u/4294967296>>>0,p+=f,l.putInt32(p>>>0),p=u>>>0;l.putInt32(p);for(var g=new Array(r.length),h=0;h<r.length;++h)g[h]=r[h].slice(0);wd(g,o,l);var b=Te.util.createBuffer(),x;t==="SHA-512"?x=g.length:t==="SHA-384"?x=g.length-2:x=g.length-4;for(var h=0;h<x;++h)b.putInt32(g[h][0]),(h!==x-1||t!=="SHA-512/224")&&b.putInt32(g[h][1]);return b},s};var Ds=null,Dp=!1,Ls=null,Vr=null;function T4(){Ds="",Ds+=Te.util.fillString("\0",128),Ls=[[1116352408,3609767458],[1899447441,602891725],[3049323471,3964484399],[3921009573,2173295548],[961987163,4081628472],[1508970993,3053834265],[2453635748,2937671579],[2870763221,3664609560],[3624381080,2734883394],[310598401,1164996542],[607225278,1323610764],[1426881987,3590304994],[1925078388,4068182383],[2162078206,991336113],[2614888103,633803317],[3248222580,3479774868],[3835390401,2666613458],[4022224774,944711139],[264347078,2341262773],[604807628,2007800933],[770255983,1495990901],[1249150122,1856431235],[1555081692,3175218132],[1996064986,2198950837],[2554220882,3999719339],[2821834349,766784016],[2952996808,2566594879],[3210313671,3203337956],[3336571891,1034457026],[3584528711,2466948901],[113926993,3758326383],[338241895,168717936],[666307205,1188179964],[773529912,1546045734],[1294757372,1522805485],[1396182291,2643833823],[1695183700,2343527390],[1986661051,1014477480],[2177026350,1206759142],[2456956037,344077627],[2730485921,1290863460],[2820302411,3158454273],[3259730800,3505952657],[3345764771,106217008],[3516065817,3606008344],[3600352804,1432725776],[4094571909,1467031594],[275423344,851169720],[430227734,3100823752],[506948616,1363258195],[659060556,3750685593],[883997877,3785050280],[958139571,3318307427],[1322822218,3812723403],[1537002063,2003034995],[1747873779,3602036899],[1955562222,1575990012],[2024104815,1125592928],[2227730452,2716904306],[2361852424,442776044],[2428436474,593698344],[2756734187,3733110249],[3204031479,2999351573],[3329325298,3815920427],[3391569614,3928383900],[3515267271,566280711],[3940187606,3454069534],[4118630271,4000239992],[116418474,1914138554],[174292421,2731055270],[289380356,3203993006],[460393269,320620315],[685471733,587496836],[852142971,1086792851],[1017036298,365543100],[1126000580,2618297676],[1288033470,3409855158],[1501505948,4234509866],[1607167915,987167468],[1816402316,1246189591]],Vr={},Vr["SHA-512"]=[[1779033703,4089235720],[3144134277,2227873595],[1013904242,4271175723],[2773480762,1595750129],[1359893119,2917565137],[2600822924,725511199],[528734635,4215389547],[1541459225,327033209]],Vr["SHA-384"]=[[3418070365,3238371032],[1654270250,914150663],[2438529370,812702999],[355462360,4144912697],[1731405415,4290775857],[2394180231,1750603025],[3675008525,1694076839],[1203062813,3204075428]],Vr["SHA-512/256"]=[[573645204,4230739756],[2673172387,3360449730],[596883563,1867755857],[2520282905,1497426621],[2519219938,2827943907],[3193839141,1401305490],[721525244,746961066],[246885852,2177182882]],Vr["SHA-512/224"]=[[2352822216,424955298],[1944164710,2312950998],[502970286,855612546],[1738396948,1479516111],[258812777,2077511080],[2011393907,79989058],[1067287976,1780299464],[286451373,2446758561]],Dp=!0}function wd(t,e,r){for(var n,o,a,i,s,l,c,d,u,f,p,h,g,b,x,C,k,B,_,T,R,D,O,U,K,q,j,H,G,Q,F,Ke,He,de,ge,he=r.length();he>=128;){for(G=0;G<16;++G)e[G][0]=r.getInt32()>>>0,e[G][1]=r.getInt32()>>>0;for(;G<80;++G)Ke=e[G-2],Q=Ke[0],F=Ke[1],n=((Q>>>19|F<<13)^(F>>>29|Q<<3)^Q>>>6)>>>0,o=((Q<<13|F>>>19)^(F<<3|Q>>>29)^(Q<<26|F>>>6))>>>0,de=e[G-15],Q=de[0],F=de[1],a=((Q>>>1|F<<31)^(Q>>>8|F<<24)^Q>>>7)>>>0,i=((Q<<31|F>>>1)^(Q<<24|F>>>8)^(Q<<25|F>>>7))>>>0,He=e[G-7],ge=e[G-16],F=o+He[1]+i+ge[1],e[G][0]=n+He[0]+a+ge[0]+(F/4294967296>>>0)>>>0,e[G][1]=F>>>0;for(g=t[0][0],b=t[0][1],x=t[1][0],C=t[1][1],k=t[2][0],B=t[2][1],_=t[3][0],T=t[3][1],R=t[4][0],D=t[4][1],O=t[5][0],U=t[5][1],K=t[6][0],q=t[6][1],j=t[7][0],H=t[7][1],G=0;G<80;++G)c=((R>>>14|D<<18)^(R>>>18|D<<14)^(D>>>9|R<<23))>>>0,d=((R<<18|D>>>14)^(R<<14|D>>>18)^(D<<23|R>>>9))>>>0,u=(K^R&(O^K))>>>0,f=(q^D&(U^q))>>>0,s=((g>>>28|b<<4)^(b>>>2|g<<30)^(b>>>7|g<<25))>>>0,l=((g<<4|b>>>28)^(b<<30|g>>>2)^(b<<25|g>>>7))>>>0,p=(g&x|k&(g^x))>>>0,h=(b&C|B&(b^C))>>>0,F=H+d+f+Ls[G][1]+e[G][1],n=j+c+u+Ls[G][0]+e[G][0]+(F/4294967296>>>0)>>>0,o=F>>>0,F=l+h,a=s+p+(F/4294967296>>>0)>>>0,i=F>>>0,j=K,H=q,K=O,q=U,O=R,U=D,F=T+o,R=_+n+(F/4294967296>>>0)>>>0,D=F>>>0,_=k,T=B,k=x,B=C,x=g,C=b,F=o+i,g=n+a+(F/4294967296>>>0)>>>0,b=F>>>0;F=t[0][1]+b,t[0][0]=t[0][0]+g+(F/4294967296>>>0)>>>0,t[0][1]=F>>>0,F=t[1][1]+C,t[1][0]=t[1][0]+x+(F/4294967296>>>0)>>>0,t[1][1]=F>>>0,F=t[2][1]+B,t[2][0]=t[2][0]+k+(F/4294967296>>>0)>>>0,t[2][1]=F>>>0,F=t[3][1]+T,t[3][0]=t[3][0]+_+(F/4294967296>>>0)>>>0,t[3][1]=F>>>0,F=t[4][1]+D,t[4][0]=t[4][0]+R+(F/4294967296>>>0)>>>0,t[4][1]=F>>>0,F=t[5][1]+U,t[5][0]=t[5][0]+O+(F/4294967296>>>0)>>>0,t[5][1]=F>>>0,F=t[6][1]+q,t[6][0]=t[6][0]+K+(F/4294967296>>>0)>>>0,t[6][1]=F>>>0,F=t[7][1]+H,t[7][0]=t[7][0]+j+(F/4294967296>>>0)>>>0,t[7][1]=F>>>0,he-=128}}var Tl={},B4=te,rt=B4.asn1;Tl.privateKeyValidator={name:"PrivateKeyInfo",tagClass:rt.Class.UNIVERSAL,type:rt.Type.SEQUENCE,constructed:!0,value:[{name:"PrivateKeyInfo.version",tagClass:rt.Class.UNIVERSAL,type:rt.Type.INTEGER,constructed:!1,capture:"privateKeyVersion"},{name:"PrivateKeyInfo.privateKeyAlgorithm",tagClass:rt.Class.UNIVERSAL,type:rt.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:rt.Class.UNIVERSAL,type:rt.Type.OID,constructed:!1,capture:"privateKeyOid"}]},{name:"PrivateKeyInfo",tagClass:rt.Class.UNIVERSAL,type:rt.Type.OCTETSTRING,constructed:!1,capture:"privateKey"}]};Tl.publicKeyValidator={name:"SubjectPublicKeyInfo",tagClass:rt.Class.UNIVERSAL,type:rt.Type.SEQUENCE,constructed:!0,captureAsn1:"subjectPublicKeyInfo",value:[{name:"SubjectPublicKeyInfo.AlgorithmIdentifier",tagClass:rt.Class.UNIVERSAL,type:rt.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:rt.Class.UNIVERSAL,type:rt.Type.OID,constructed:!1,capture:"publicKeyOid"}]},{tagClass:rt.Class.UNIVERSAL,type:rt.Type.BITSTRING,constructed:!1,composed:!0,captureBitStringValue:"ed25519PublicKey"}]};var st=te,Lp=Tl,A4=Lp.publicKeyValidator,I4=Lp.privateKeyValidator;if(typeof R4>"u")var R4=st.jsbn.BigInteger;var Ns=st.util.ByteBuffer,mt=typeof Buffer>"u"?Uint8Array:Buffer;st.pki=st.pki||{};st.pki.ed25519=st.ed25519=st.ed25519||{};var oe=st.ed25519;oe.constants={};oe.constants.PUBLIC_KEY_BYTE_LENGTH=32;oe.constants.PRIVATE_KEY_BYTE_LENGTH=64;oe.constants.SEED_BYTE_LENGTH=32;oe.constants.SIGN_BYTE_LENGTH=64;oe.constants.HASH_BYTE_LENGTH=64;oe.generateKeyPair=function(t){t=t||{};var e=t.seed;if(e===void 0)e=st.random.getBytesSync(oe.constants.SEED_BYTE_LENGTH);else if(typeof e=="string"){if(e.length!==oe.constants.SEED_BYTE_LENGTH)throw new TypeError('"seed" must be '+oe.constants.SEED_BYTE_LENGTH+" bytes in length.")}else if(!(e instanceof Uint8Array))throw new TypeError('"seed" must be a node.js Buffer, Uint8Array, or a binary string.');e=cr({message:e,encoding:"binary"});for(var r=new mt(oe.constants.PUBLIC_KEY_BYTE_LENGTH),n=new mt(oe.constants.PRIVATE_KEY_BYTE_LENGTH),o=0;o<32;++o)n[o]=e[o];return P4(r,n),{publicKey:r,privateKey:n}};oe.privateKeyFromAsn1=function(t){var e={},r=[],n=st.asn1.validate(t,I4,e,r);if(!n){var o=new Error("Invalid Key.");throw o.errors=r,o}var a=st.asn1.derToOid(e.privateKeyOid),i=st.oids.EdDSA25519;if(a!==i)throw new Error('Invalid OID "'+a+'"; OID must be "'+i+'".');var s=e.privateKey,l=cr({message:st.asn1.fromDer(s).value,encoding:"binary"});return{privateKeyBytes:l}};oe.publicKeyFromAsn1=function(t){var e={},r=[],n=st.asn1.validate(t,A4,e,r);if(!n){var o=new Error("Invalid Key.");throw o.errors=r,o}var a=st.asn1.derToOid(e.publicKeyOid),i=st.oids.EdDSA25519;if(a!==i)throw new Error('Invalid OID "'+a+'"; OID must be "'+i+'".');var s=e.ed25519PublicKey;if(s.length!==oe.constants.PUBLIC_KEY_BYTE_LENGTH)throw new Error("Key length is invalid.");return cr({message:s,encoding:"binary"})};oe.publicKeyFromPrivateKey=function(t){t=t||{};var e=cr({message:t.privateKey,encoding:"binary"});if(e.length!==oe.constants.PRIVATE_KEY_BYTE_LENGTH)throw new TypeError('"options.privateKey" must have a byte length of '+oe.constants.PRIVATE_KEY_BYTE_LENGTH);for(var r=new mt(oe.constants.PUBLIC_KEY_BYTE_LENGTH),n=0;n<r.length;++n)r[n]=e[32+n];return r};oe.sign=function(t){t=t||{};var e=cr(t),r=cr({message:t.privateKey,encoding:"binary"});if(r.length===oe.constants.SEED_BYTE_LENGTH){var n=oe.generateKeyPair({seed:r});r=n.privateKey}else if(r.length!==oe.constants.PRIVATE_KEY_BYTE_LENGTH)throw new TypeError('"options.privateKey" must have a byte length of '+oe.constants.SEED_BYTE_LENGTH+" or "+oe.constants.PRIVATE_KEY_BYTE_LENGTH);var o=new mt(oe.constants.SIGN_BYTE_LENGTH+e.length);O4(o,e,e.length,r);for(var a=new mt(oe.constants.SIGN_BYTE_LENGTH),i=0;i<a.length;++i)a[i]=o[i];return a};oe.verify=function(t){t=t||{};var e=cr(t);if(t.signature===void 0)throw new TypeError('"options.signature" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a binary string.');var r=cr({message:t.signature,encoding:"binary"});if(r.length!==oe.constants.SIGN_BYTE_LENGTH)throw new TypeError('"options.signature" must have a byte length of '+oe.constants.SIGN_BYTE_LENGTH);var n=cr({message:t.publicKey,encoding:"binary"});if(n.length!==oe.constants.PUBLIC_KEY_BYTE_LENGTH)throw new TypeError('"options.publicKey" must have a byte length of '+oe.constants.PUBLIC_KEY_BYTE_LENGTH);var o=new mt(oe.constants.SIGN_BYTE_LENGTH+e.length),a=new mt(oe.constants.SIGN_BYTE_LENGTH+e.length),i;for(i=0;i<oe.constants.SIGN_BYTE_LENGTH;++i)o[i]=r[i];for(i=0;i<e.length;++i)o[i+oe.constants.SIGN_BYTE_LENGTH]=e[i];return M4(a,o,o.length,n)>=0};function cr(t){var e=t.message;if(e instanceof Uint8Array||e instanceof mt)return e;var r=t.encoding;if(e===void 0)if(t.md)e=t.md.digest().getBytes(),r="binary";else throw new TypeError('"options.message" or "options.md" not specified.');if(typeof e=="string"&&!r)throw new TypeError('"options.encoding" must be "binary" or "utf8".');if(typeof e=="string"){if(typeof Buffer<"u")return Buffer.from(e,r);e=new Ns(e,r)}else if(!(e instanceof Ns))throw new TypeError('"options.message" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a string with "options.encoding" specifying its encoding.');for(var n=new mt(e.length()),o=0;o<n.length;++o)n[o]=e.at(o);return n}var Ps=Z(),_a=Z([1]),D4=Z([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),L4=Z([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),Sd=Z([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),Ed=Z([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),ji=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]),N4=Z([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function so(t,e){var r=st.md.sha512.create(),n=new Ns(t);r.update(n.getBytes(e),"binary");var o=r.digest().getBytes();if(typeof Buffer<"u")return Buffer.from(o,"binary");for(var a=new mt(oe.constants.HASH_BYTE_LENGTH),i=0;i<64;++i)a[i]=o.charCodeAt(i);return a}function P4(t,e){var r=[Z(),Z(),Z(),Z()],n,o=so(e,32);for(o[0]&=248,o[31]&=127,o[31]|=64,Al(r,o),Bl(t,r),n=0;n<32;++n)e[n+32]=t[n];return 0}function O4(t,e,r,n){var o,a,i=new Float64Array(64),s=[Z(),Z(),Z(),Z()],l=so(n,32);l[0]&=248,l[31]&=127,l[31]|=64;var c=r+64;for(o=0;o<r;++o)t[64+o]=e[o];for(o=0;o<32;++o)t[32+o]=l[32+o];var d=so(t.subarray(32),r+32);for(Os(d),Al(s,d),Bl(t,s),o=32;o<64;++o)t[o]=n[o];var u=so(t,r+64);for(Os(u),o=32;o<64;++o)i[o]=0;for(o=0;o<32;++o)i[o]=d[o];for(o=0;o<32;++o)for(a=0;a<32;a++)i[o+a]+=u[o]*l[a];return Np(t.subarray(32),i),c}function M4(t,e,r,n){var o,a,i=new mt(32),s=[Z(),Z(),Z(),Z()],l=[Z(),Z(),Z(),Z()];if(a=-1,r<64||$4(l,n))return-1;for(o=0;o<r;++o)t[o]=e[o];for(o=0;o<32;++o)t[o+32]=n[o];var c=so(t,r);if(Os(c),Mp(s,l,c),Al(l,e.subarray(32)),Ms(s,l),Bl(i,s),r-=64,Pp(e,0,i,0)){for(o=0;o<r;++o)t[o]=0;return-1}for(o=0;o<r;++o)t[o]=e[o+64];return a=r,a}function Np(t,e){var r,n,o,a;for(n=63;n>=32;--n){for(r=0,o=n-32,a=n-12;o<a;++o)e[o]+=r-16*e[n]*ji[o-(n-32)],r=e[o]+128>>8,e[o]-=r*256;e[o]+=r,e[n]=0}for(r=0,o=0;o<32;++o)e[o]+=r-(e[31]>>4)*ji[o],r=e[o]>>8,e[o]&=255;for(o=0;o<32;++o)e[o]-=r*ji[o];for(n=0;n<32;++n)e[n+1]+=e[n]>>8,t[n]=e[n]&255}function Os(t){for(var e=new Float64Array(64),r=0;r<64;++r)e[r]=t[r],t[r]=0;Np(t,e)}function Ms(t,e){var r=Z(),n=Z(),o=Z(),a=Z(),i=Z(),s=Z(),l=Z(),c=Z(),d=Z();vn(r,t[1],t[0]),vn(d,e[1],e[0]),ye(r,r,d),bn(n,t[0],t[1]),bn(d,e[0],e[1]),ye(n,n,d),ye(o,t[3],e[3]),ye(o,o,L4),ye(a,t[2],e[2]),bn(a,a,a),vn(i,n,r),vn(s,a,o),bn(l,a,o),bn(c,n,r),ye(t[0],i,s),ye(t[1],c,l),ye(t[2],l,s),ye(t[3],i,c)}function _d(t,e,r){for(var n=0;n<4;++n)$p(t[n],e[n],r)}function Bl(t,e){var r=Z(),n=Z(),o=Z();V4(o,e[2]),ye(r,e[0],o),ye(n,e[1],o),Ta(t,n),t[31]^=Op(r)<<7}function Ta(t,e){var r,n,o,a=Z(),i=Z();for(r=0;r<16;++r)i[r]=e[r];for(Gi(i),Gi(i),Gi(i),n=0;n<2;++n){for(a[0]=i[0]-65517,r=1;r<15;++r)a[r]=i[r]-65535-(a[r-1]>>16&1),a[r-1]&=65535;a[15]=i[15]-32767-(a[14]>>16&1),o=a[15]>>16&1,a[14]&=65535,$p(i,a,1-o)}for(r=0;r<16;r++)t[2*r]=i[r]&255,t[2*r+1]=i[r]>>8}function $4(t,e){var r=Z(),n=Z(),o=Z(),a=Z(),i=Z(),s=Z(),l=Z();return kr(t[2],_a),F4(t[1],e),Kr(o,t[1]),ye(a,o,D4),vn(o,o,t[2]),bn(a,t[2],a),Kr(i,a),Kr(s,i),ye(l,s,i),ye(r,l,o),ye(r,r,a),z4(r,r),ye(r,r,o),ye(r,r,a),ye(r,r,a),ye(t[0],r,a),Kr(n,t[0]),ye(n,n,a),Td(n,o)&&ye(t[0],t[0],N4),Kr(n,t[0]),ye(n,n,a),Td(n,o)?-1:(Op(t[0])===e[31]>>7&&vn(t[0],Ps,t[0]),ye(t[3],t[0],t[1]),0)}function F4(t,e){var r;for(r=0;r<16;++r)t[r]=e[2*r]+(e[2*r+1]<<8);t[15]&=32767}function z4(t,e){var r=Z(),n;for(n=0;n<16;++n)r[n]=e[n];for(n=250;n>=0;--n)Kr(r,r),n!==1&&ye(r,r,e);for(n=0;n<16;++n)t[n]=r[n]}function Td(t,e){var r=new mt(32),n=new mt(32);return Ta(r,t),Ta(n,e),Pp(r,0,n,0)}function Pp(t,e,r,n){return U4(t,e,r,n,32)}function U4(t,e,r,n,o){var a,i=0;for(a=0;a<o;++a)i|=t[e+a]^r[n+a];return(1&i-1>>>8)-1}function Op(t){var e=new mt(32);return Ta(e,t),e[0]&1}function Mp(t,e,r){var n,o;for(kr(t[0],Ps),kr(t[1],_a),kr(t[2],_a),kr(t[3],Ps),o=255;o>=0;--o)n=r[o/8|0]>>(o&7)&1,_d(t,e,n),Ms(e,t),Ms(t,t),_d(t,e,n)}function Al(t,e){var r=[Z(),Z(),Z(),Z()];kr(r[0],Sd),kr(r[1],Ed),kr(r[2],_a),ye(r[3],Sd,Ed),Mp(t,r,e)}function kr(t,e){var r;for(r=0;r<16;r++)t[r]=e[r]|0}function V4(t,e){var r=Z(),n;for(n=0;n<16;++n)r[n]=e[n];for(n=253;n>=0;--n)Kr(r,r),n!==2&&n!==4&&ye(r,r,e);for(n=0;n<16;++n)t[n]=r[n]}function Gi(t){var e,r,n=1;for(e=0;e<16;++e)r=t[e]+n+65535,n=Math.floor(r/65536),t[e]=r-n*65536;t[0]+=n-1+37*(n-1)}function $p(t,e,r){for(var n,o=~(r-1),a=0;a<16;++a)n=o&(t[a]^e[a]),t[a]^=n,e[a]^=n}function Z(t){var e,r=new Float64Array(16);if(t)for(e=0;e<t.length;++e)r[e]=t[e];return r}function bn(t,e,r){for(var n=0;n<16;++n)t[n]=e[n]+r[n]}function vn(t,e,r){for(var n=0;n<16;++n)t[n]=e[n]-r[n]}function Kr(t,e){ye(t,e,e)}function ye(t,e,r){var n,o,a=0,i=0,s=0,l=0,c=0,d=0,u=0,f=0,p=0,h=0,g=0,b=0,x=0,C=0,k=0,B=0,_=0,T=0,R=0,D=0,O=0,U=0,K=0,q=0,j=0,H=0,G=0,Q=0,F=0,Ke=0,He=0,de=r[0],ge=r[1],he=r[2],Ie=r[3],Re=r[4],De=r[5],Le=r[6],We=r[7],je=r[8],Ge=r[9],qe=r[10],Ye=r[11],Xe=r[12],Qe=r[13],Ze=r[14],Je=r[15];n=e[0],a+=n*de,i+=n*ge,s+=n*he,l+=n*Ie,c+=n*Re,d+=n*De,u+=n*Le,f+=n*We,p+=n*je,h+=n*Ge,g+=n*qe,b+=n*Ye,x+=n*Xe,C+=n*Qe,k+=n*Ze,B+=n*Je,n=e[1],i+=n*de,s+=n*ge,l+=n*he,c+=n*Ie,d+=n*Re,u+=n*De,f+=n*Le,p+=n*We,h+=n*je,g+=n*Ge,b+=n*qe,x+=n*Ye,C+=n*Xe,k+=n*Qe,B+=n*Ze,_+=n*Je,n=e[2],s+=n*de,l+=n*ge,c+=n*he,d+=n*Ie,u+=n*Re,f+=n*De,p+=n*Le,h+=n*We,g+=n*je,b+=n*Ge,x+=n*qe,C+=n*Ye,k+=n*Xe,B+=n*Qe,_+=n*Ze,T+=n*Je,n=e[3],l+=n*de,c+=n*ge,d+=n*he,u+=n*Ie,f+=n*Re,p+=n*De,h+=n*Le,g+=n*We,b+=n*je,x+=n*Ge,C+=n*qe,k+=n*Ye,B+=n*Xe,_+=n*Qe,T+=n*Ze,R+=n*Je,n=e[4],c+=n*de,d+=n*ge,u+=n*he,f+=n*Ie,p+=n*Re,h+=n*De,g+=n*Le,b+=n*We,x+=n*je,C+=n*Ge,k+=n*qe,B+=n*Ye,_+=n*Xe,T+=n*Qe,R+=n*Ze,D+=n*Je,n=e[5],d+=n*de,u+=n*ge,f+=n*he,p+=n*Ie,h+=n*Re,g+=n*De,b+=n*Le,x+=n*We,C+=n*je,k+=n*Ge,B+=n*qe,_+=n*Ye,T+=n*Xe,R+=n*Qe,D+=n*Ze,O+=n*Je,n=e[6],u+=n*de,f+=n*ge,p+=n*he,h+=n*Ie,g+=n*Re,b+=n*De,x+=n*Le,C+=n*We,k+=n*je,B+=n*Ge,_+=n*qe,T+=n*Ye,R+=n*Xe,D+=n*Qe,O+=n*Ze,U+=n*Je,n=e[7],f+=n*de,p+=n*ge,h+=n*he,g+=n*Ie,b+=n*Re,x+=n*De,C+=n*Le,k+=n*We,B+=n*je,_+=n*Ge,T+=n*qe,R+=n*Ye,D+=n*Xe,O+=n*Qe,U+=n*Ze,K+=n*Je,n=e[8],p+=n*de,h+=n*ge,g+=n*he,b+=n*Ie,x+=n*Re,C+=n*De,k+=n*Le,B+=n*We,_+=n*je,T+=n*Ge,R+=n*qe,D+=n*Ye,O+=n*Xe,U+=n*Qe,K+=n*Ze,q+=n*Je,n=e[9],h+=n*de,g+=n*ge,b+=n*he,x+=n*Ie,C+=n*Re,k+=n*De,B+=n*Le,_+=n*We,T+=n*je,R+=n*Ge,D+=n*qe,O+=n*Ye,U+=n*Xe,K+=n*Qe,q+=n*Ze,j+=n*Je,n=e[10],g+=n*de,b+=n*ge,x+=n*he,C+=n*Ie,k+=n*Re,B+=n*De,_+=n*Le,T+=n*We,R+=n*je,D+=n*Ge,O+=n*qe,U+=n*Ye,K+=n*Xe,q+=n*Qe,j+=n*Ze,H+=n*Je,n=e[11],b+=n*de,x+=n*ge,C+=n*he,k+=n*Ie,B+=n*Re,_+=n*De,T+=n*Le,R+=n*We,D+=n*je,O+=n*Ge,U+=n*qe,K+=n*Ye,q+=n*Xe,j+=n*Qe,H+=n*Ze,G+=n*Je,n=e[12],x+=n*de,C+=n*ge,k+=n*he,B+=n*Ie,_+=n*Re,T+=n*De,R+=n*Le,D+=n*We,O+=n*je,U+=n*Ge,K+=n*qe,q+=n*Ye,j+=n*Xe,H+=n*Qe,G+=n*Ze,Q+=n*Je,n=e[13],C+=n*de,k+=n*ge,B+=n*he,_+=n*Ie,T+=n*Re,R+=n*De,D+=n*Le,O+=n*We,U+=n*je,K+=n*Ge,q+=n*qe,j+=n*Ye,H+=n*Xe,G+=n*Qe,Q+=n*Ze,F+=n*Je,n=e[14],k+=n*de,B+=n*ge,_+=n*he,T+=n*Ie,R+=n*Re,D+=n*De,O+=n*Le,U+=n*We,K+=n*je,q+=n*Ge,j+=n*qe,H+=n*Ye,G+=n*Xe,Q+=n*Qe,F+=n*Ze,Ke+=n*Je,n=e[15],B+=n*de,_+=n*ge,T+=n*he,R+=n*Ie,D+=n*Re,O+=n*De,U+=n*Le,K+=n*We,q+=n*je,j+=n*Ge,H+=n*qe,G+=n*Ye,Q+=n*Xe,F+=n*Qe,Ke+=n*Ze,He+=n*Je,a+=38*_,i+=38*T,s+=38*R,l+=38*D,c+=38*O,d+=38*U,u+=38*K,f+=38*q,p+=38*j,h+=38*H,g+=38*G,b+=38*Q,x+=38*F,C+=38*Ke,k+=38*He,o=1,n=a+o+65535,o=Math.floor(n/65536),a=n-o*65536,n=i+o+65535,o=Math.floor(n/65536),i=n-o*65536,n=s+o+65535,o=Math.floor(n/65536),s=n-o*65536,n=l+o+65535,o=Math.floor(n/65536),l=n-o*65536,n=c+o+65535,o=Math.floor(n/65536),c=n-o*65536,n=d+o+65535,o=Math.floor(n/65536),d=n-o*65536,n=u+o+65535,o=Math.floor(n/65536),u=n-o*65536,n=f+o+65535,o=Math.floor(n/65536),f=n-o*65536,n=p+o+65535,o=Math.floor(n/65536),p=n-o*65536,n=h+o+65535,o=Math.floor(n/65536),h=n-o*65536,n=g+o+65535,o=Math.floor(n/65536),g=n-o*65536,n=b+o+65535,o=Math.floor(n/65536),b=n-o*65536,n=x+o+65535,o=Math.floor(n/65536),x=n-o*65536,n=C+o+65535,o=Math.floor(n/65536),C=n-o*65536,n=k+o+65535,o=Math.floor(n/65536),k=n-o*65536,n=B+o+65535,o=Math.floor(n/65536),B=n-o*65536,a+=o-1+37*(o-1),o=1,n=a+o+65535,o=Math.floor(n/65536),a=n-o*65536,n=i+o+65535,o=Math.floor(n/65536),i=n-o*65536,n=s+o+65535,o=Math.floor(n/65536),s=n-o*65536,n=l+o+65535,o=Math.floor(n/65536),l=n-o*65536,n=c+o+65535,o=Math.floor(n/65536),c=n-o*65536,n=d+o+65535,o=Math.floor(n/65536),d=n-o*65536,n=u+o+65535,o=Math.floor(n/65536),u=n-o*65536,n=f+o+65535,o=Math.floor(n/65536),f=n-o*65536,n=p+o+65535,o=Math.floor(n/65536),p=n-o*65536,n=h+o+65535,o=Math.floor(n/65536),h=n-o*65536,n=g+o+65535,o=Math.floor(n/65536),g=n-o*65536,n=b+o+65535,o=Math.floor(n/65536),b=n-o*65536,n=x+o+65535,o=Math.floor(n/65536),x=n-o*65536,n=C+o+65535,o=Math.floor(n/65536),C=n-o*65536,n=k+o+65535,o=Math.floor(n/65536),k=n-o*65536,n=B+o+65535,o=Math.floor(n/65536),B=n-o*65536,a+=o-1+37*(o-1),t[0]=a,t[1]=i,t[2]=s,t[3]=l,t[4]=c,t[5]=d,t[6]=u,t[7]=f,t[8]=p,t[9]=h,t[10]=g,t[11]=b,t[12]=x,t[13]=C,t[14]=k,t[15]=B}var yt=te;yt.kem=yt.kem||{};var Bd=yt.jsbn.BigInteger;yt.kem.rsa={};yt.kem.rsa.create=function(t,e){e=e||{};var r=e.prng||yt.random,n={};return n.encrypt=function(o,a){var i=Math.ceil(o.n.bitLength()/8),s;do s=new Bd(yt.util.bytesToHex(r.getBytesSync(i)),16).mod(o.n);while(s.compareTo(Bd.ONE)<=0);s=yt.util.hexToBytes(s.toString(16));var l=i-s.length;l>0&&(s=yt.util.fillString("\0",l)+s);var c=o.encrypt(s,"NONE"),d=t.generate(s,a);return{encapsulation:c,key:d}},n.decrypt=function(o,a,i){var s=o.decrypt(a,"NONE");return t.generate(s,i)},n};yt.kem.kdf1=function(t,e){Fp(this,t,0,e||t.digestLength)};yt.kem.kdf2=function(t,e){Fp(this,t,1,e||t.digestLength)};function Fp(t,e,r,n){t.generate=function(o,a){for(var i=new yt.util.ByteBuffer,s=Math.ceil(a/n)+r,l=new yt.util.ByteBuffer,c=r;c<s;++c){l.putInt32(c),e.start(),e.update(o+l.getBytes());var d=e.digest();i.putBytes(d.getBytes(n))}return i.truncate(i.length()-a),i.getBytes()}}var se=te;se.log=se.log||{};se.log.levels=["none","error","warning","info","debug","verbose","max"];var Ba={},$s=[],lo=null;se.log.LEVEL_LOCKED=2;se.log.NO_LEVEL_CHECK=4;se.log.INTERPOLATE=8;for(var wr=0;wr<se.log.levels.length;++wr){var Ad=se.log.levels[wr];Ba[Ad]={index:wr,name:Ad.toUpperCase()}}se.log.logMessage=function(t){for(var e=Ba[t.level].index,r=0;r<$s.length;++r){var n=$s[r];if(n.flags&se.log.NO_LEVEL_CHECK)n.f(t);else{var o=Ba[n.level].index;e<=o&&n.f(n,t)}}};se.log.prepareStandard=function(t){"standard"in t||(t.standard=Ba[t.level].name+" ["+t.category+"] "+t.message)};se.log.prepareFull=function(t){if(!("full"in t)){var e=[t.message];e=e.concat([]),t.full=se.util.format.apply(this,e)}};se.log.prepareStandardFull=function(t){"standardFull"in t||(se.log.prepareStandard(t),t.standardFull=t.standard)};for(var Id=["error","warning","info","debug","verbose"],wr=0;wr<Id.length;++wr)(function(e){se.log[e]=function(r,n){var o=Array.prototype.slice.call(arguments).slice(2),a={timestamp:new Date,level:e,category:r,message:n,arguments:o};se.log.logMessage(a)}})(Id[wr]);se.log.makeLogger=function(t){var e={flags:0,f:t};return se.log.setLevel(e,"none"),e};se.log.setLevel=function(t,e){var r=!1;if(t&&!(t.flags&se.log.LEVEL_LOCKED))for(var n=0;n<se.log.levels.length;++n){var o=se.log.levels[n];if(e==o){t.level=e,r=!0;break}}return r};se.log.lock=function(t,e){typeof e>"u"||e?t.flags|=se.log.LEVEL_LOCKED:t.flags&=~se.log.LEVEL_LOCKED};se.log.addLogger=function(t){$s.push(t)};if(typeof console<"u"&&"log"in console){var Un;if(console.error&&console.warn&&console.info&&console.debug){var K4={error:console.error,warning:console.warn,info:console.info,debug:console.debug,verbose:console.debug},Il=function(t,e){se.log.prepareStandard(e);var r=K4[e.level],n=[e.standard];n=n.concat(e.arguments.slice()),r.apply(console,n)};Un=se.log.makeLogger(Il)}else{var Il=function(e,r){se.log.prepareStandardFull(r),console.log(r.standardFull)};Un=se.log.makeLogger(Il)}se.log.setLevel(Un,"debug"),se.log.addLogger(Un),lo=Un}else console={log:function(){}};if(lo!==null&&typeof window<"u"&&window.location){var Ho=new URL(window.location.href).searchParams;if(Ho.has("console.level")&&se.log.setLevel(lo,Ho.get("console.level").slice(-1)[0]),Ho.has("console.lock")){var H4=Ho.get("console.lock").slice(-1)[0];H4=="true"&&se.log.lock(lo)}}se.log.consoleLogger=lo;var $=te,S=$.asn1,ft=$.pkcs7=$.pkcs7||{};ft.messageFromPem=function(t){var e=$.pem.decode(t)[0];if(e.type!=="PKCS7"){var r=new Error('Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".');throw r.headerType=e.type,r}if(e.procType&&e.procType.type==="ENCRYPTED")throw new Error("Could not convert PKCS#7 message from PEM; PEM is encrypted.");var n=S.fromDer(e.body);return ft.messageFromAsn1(n)};ft.messageToPem=function(t,e){var r={type:"PKCS7",body:S.toDer(t.toAsn1()).getBytes()};return $.pem.encode(r,{maxline:e})};ft.messageFromAsn1=function(t){var e={},r=[];if(!S.validate(t,ft.asn1.contentInfoValidator,e,r)){var n=new Error("Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.");throw n.errors=r,n}var o=S.derToOid(e.contentType),a;switch(o){case $.pki.oids.envelopedData:a=ft.createEnvelopedData();break;case $.pki.oids.encryptedData:a=ft.createEncryptedData();break;case $.pki.oids.signedData:a=ft.createSignedData();break;default:throw new Error("Cannot read PKCS#7 message. ContentType with OID "+o+" is not (yet) supported.")}return a.fromAsn1(e.content.value[0]),a};ft.createSignedData=function(){var t=null;return t={type:$.pki.oids.signedData,version:1,certificates:[],crls:[],signers:[],digestAlgorithmIdentifiers:[],contentInfo:null,signerInfos:[],fromAsn1:function(n){if(Rl(t,n,ft.asn1.signedDataValidator),t.certificates=[],t.crls=[],t.digestAlgorithmIdentifiers=[],t.contentInfo=null,t.signerInfos=[],t.rawCapture.certificates)for(var o=t.rawCapture.certificates.value,a=0;a<o.length;++a)t.certificates.push($.pki.certificateFromAsn1(o[a]))},toAsn1:function(){t.contentInfo||t.sign();for(var n=[],o=0;o<t.certificates.length;++o)n.push($.pki.certificateToAsn1(t.certificates[o]));var a=[],i=S.create(S.Class.CONTEXT_SPECIFIC,0,!0,[S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[S.create(S.Class.UNIVERSAL,S.Type.INTEGER,!1,S.integerToDer(t.version).getBytes()),S.create(S.Class.UNIVERSAL,S.Type.SET,!0,t.digestAlgorithmIdentifiers),t.contentInfo])]);return n.length>0&&i.value[0].value.push(S.create(S.Class.CONTEXT_SPECIFIC,0,!0,n)),a.length>0&&i.value[0].value.push(S.create(S.Class.CONTEXT_SPECIFIC,1,!0,a)),i.value[0].value.push(S.create(S.Class.UNIVERSAL,S.Type.SET,!0,t.signerInfos)),S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[S.create(S.Class.UNIVERSAL,S.Type.OID,!1,S.oidToDer(t.type).getBytes()),i])},addSigner:function(n){var o=n.issuer,a=n.serialNumber;if(n.certificate){var i=n.certificate;typeof i=="string"&&(i=$.pki.certificateFromPem(i)),o=i.issuer.attributes,a=i.serialNumber}var s=n.key;if(!s)throw new Error("Could not add PKCS#7 signer; no private key specified.");typeof s=="string"&&(s=$.pki.privateKeyFromPem(s));var l=n.digestAlgorithm||$.pki.oids.sha1;switch(l){case $.pki.oids.sha1:case $.pki.oids.sha256:case $.pki.oids.sha384:case $.pki.oids.sha512:case $.pki.oids.md5:break;default:throw new Error("Could not add PKCS#7 signer; unknown message digest algorithm: "+l)}var c=n.authenticatedAttributes||[];if(c.length>0){for(var d=!1,u=!1,f=0;f<c.length;++f){var p=c[f];if(!d&&p.type===$.pki.oids.contentType){if(d=!0,u)break;continue}if(!u&&p.type===$.pki.oids.messageDigest){if(u=!0,d)break;continue}}if(!d||!u)throw new Error("Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.")}t.signers.push({key:s,version:1,issuer:o,serialNumber:a,digestAlgorithm:l,signatureAlgorithm:$.pki.oids.rsaEncryption,signature:null,authenticatedAttributes:c,unauthenticatedAttributes:[]})},sign:function(n){if(n=n||{},(typeof t.content!="object"||t.contentInfo===null)&&(t.contentInfo=S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[S.create(S.Class.UNIVERSAL,S.Type.OID,!1,S.oidToDer($.pki.oids.data).getBytes())]),"content"in t)){var o;t.content instanceof $.util.ByteBuffer?o=t.content.bytes():typeof t.content=="string"&&(o=$.util.encodeUtf8(t.content)),n.detached?t.detachedContent=S.create(S.Class.UNIVERSAL,S.Type.OCTETSTRING,!1,o):t.contentInfo.value.push(S.create(S.Class.CONTEXT_SPECIFIC,0,!0,[S.create(S.Class.UNIVERSAL,S.Type.OCTETSTRING,!1,o)]))}if(t.signers.length!==0){var a=e();r(a)}},verify:function(){throw new Error("PKCS#7 signature verification not yet implemented.")},addCertificate:function(n){typeof n=="string"&&(n=$.pki.certificateFromPem(n)),t.certificates.push(n)},addCertificateRevokationList:function(n){throw new Error("PKCS#7 CRL support not yet implemented.")}},t;function e(){for(var n={},o=0;o<t.signers.length;++o){var a=t.signers[o],i=a.digestAlgorithm;i in n||(n[i]=$.md[$.pki.oids[i]].create()),a.authenticatedAttributes.length===0?a.md=n[i]:a.md=$.md[$.pki.oids[i]].create()}t.digestAlgorithmIdentifiers=[];for(var i in n)t.digestAlgorithmIdentifiers.push(S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[S.create(S.Class.UNIVERSAL,S.Type.OID,!1,S.oidToDer(i).getBytes()),S.create(S.Class.UNIVERSAL,S.Type.NULL,!1,"")]));return n}function r(n){var o;if(t.detachedContent?o=t.detachedContent:(o=t.contentInfo.value[1],o=o.value[0]),!o)throw new Error("Could not sign PKCS#7 message; there is no content to sign.");var a=S.derToOid(t.contentInfo.value[0].value),i=S.toDer(o);i.getByte(),S.getBerValueLength(i),i=i.getBytes();for(var s in n)n[s].start().update(i);for(var l=new Date,c=0;c<t.signers.length;++c){var d=t.signers[c];if(d.authenticatedAttributes.length===0){if(a!==$.pki.oids.data)throw new Error("Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data.")}else{d.authenticatedAttributesAsn1=S.create(S.Class.CONTEXT_SPECIFIC,0,!0,[]);for(var u=S.create(S.Class.UNIVERSAL,S.Type.SET,!0,[]),f=0;f<d.authenticatedAttributes.length;++f){var p=d.authenticatedAttributes[f];p.type===$.pki.oids.messageDigest?p.value=n[d.digestAlgorithm].digest():p.type===$.pki.oids.signingTime&&(p.value||(p.value=l)),u.value.push(Fs(p)),d.authenticatedAttributesAsn1.value.push(Fs(p))}i=S.toDer(u).getBytes(),d.md.start().update(i)}d.signature=d.key.sign(d.md,"RSASSA-PKCS1-V1_5")}t.signerInfos=X4(t.signers)}};ft.createEncryptedData=function(){var t=null;return t={type:$.pki.oids.encryptedData,version:0,encryptedContent:{algorithm:$.pki.oids["aes256-CBC"]},fromAsn1:function(e){Rl(t,e,ft.asn1.encryptedDataValidator)},decrypt:function(e){e!==void 0&&(t.encryptedContent.key=e),zp(t)}},t};ft.createEnvelopedData=function(){var t=null;return t={type:$.pki.oids.envelopedData,version:0,recipients:[],encryptedContent:{algorithm:$.pki.oids["aes256-CBC"]},fromAsn1:function(e){var r=Rl(t,e,ft.asn1.envelopedDataValidator);t.recipients=G4(r.recipientInfos.value)},toAsn1:function(){return S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[S.create(S.Class.UNIVERSAL,S.Type.OID,!1,S.oidToDer(t.type).getBytes()),S.create(S.Class.CONTEXT_SPECIFIC,0,!0,[S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[S.create(S.Class.UNIVERSAL,S.Type.INTEGER,!1,S.integerToDer(t.version).getBytes()),S.create(S.Class.UNIVERSAL,S.Type.SET,!0,q4(t.recipients)),S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,Q4(t.encryptedContent))])])])},findRecipient:function(e){for(var r=e.issuer.attributes,n=0;n<t.recipients.length;++n){var o=t.recipients[n],a=o.issuer;if(o.serialNumber===e.serialNumber&&a.length===r.length){for(var i=!0,s=0;s<r.length;++s)if(a[s].type!==r[s].type||a[s].value!==r[s].value){i=!1;break}if(i)return o}}return null},decrypt:function(e,r){if(t.encryptedContent.key===void 0&&e!==void 0&&r!==void 0)switch(e.encryptedContent.algorithm){case $.pki.oids.rsaEncryption:case $.pki.oids.desCBC:var n=r.decrypt(e.encryptedContent.content);t.encryptedContent.key=$.util.createBuffer(n);break;default:throw new Error("Unsupported asymmetric cipher, OID "+e.encryptedContent.algorithm)}zp(t)},addRecipient:function(e){t.recipients.push({version:0,issuer:e.issuer.attributes,serialNumber:e.serialNumber,encryptedContent:{algorithm:$.pki.oids.rsaEncryption,key:e.publicKey}})},encrypt:function(e,r){if(t.encryptedContent.content===void 0){r=r||t.encryptedContent.algorithm,e=e||t.encryptedContent.key;var n,o,a;switch(r){case $.pki.oids["aes128-CBC"]:n=16,o=16,a=$.aes.createEncryptionCipher;break;case $.pki.oids["aes192-CBC"]:n=24,o=16,a=$.aes.createEncryptionCipher;break;case $.pki.oids["aes256-CBC"]:n=32,o=16,a=$.aes.createEncryptionCipher;break;case $.pki.oids["des-EDE3-CBC"]:n=24,o=8,a=$.des.createEncryptionCipher;break;default:throw new Error("Unsupported symmetric cipher, OID "+r)}if(e===void 0)e=$.util.createBuffer($.random.getBytes(n));else if(e.length()!=n)throw new Error("Symmetric key has wrong length; got "+e.length()+" bytes, expected "+n+".");t.encryptedContent.algorithm=r,t.encryptedContent.key=e,t.encryptedContent.parameter=$.util.createBuffer($.random.getBytes(o));var i=a(e);if(i.start(t.encryptedContent.parameter.copy()),i.update(t.content),!i.finish())throw new Error("Symmetric encryption failed.");t.encryptedContent.content=i.output}for(var s=0;s<t.recipients.length;++s){var l=t.recipients[s];if(l.encryptedContent.content===void 0)switch(l.encryptedContent.algorithm){case $.pki.oids.rsaEncryption:l.encryptedContent.content=l.encryptedContent.key.encrypt(t.encryptedContent.key.data);break;default:throw new Error("Unsupported asymmetric cipher, OID "+l.encryptedContent.algorithm)}}}},t};function W4(t){var e={},r=[];if(!S.validate(t,ft.asn1.recipientInfoValidator,e,r)){var n=new Error("Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.");throw n.errors=r,n}return{version:e.version.charCodeAt(0),issuer:$.pki.RDNAttributesAsArray(e.issuer),serialNumber:$.util.createBuffer(e.serial).toHex(),encryptedContent:{algorithm:S.derToOid(e.encAlgorithm),parameter:e.encParameter?e.encParameter.value:void 0,content:e.encKey}}}function j4(t){return S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[S.create(S.Class.UNIVERSAL,S.Type.INTEGER,!1,S.integerToDer(t.version).getBytes()),S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[$.pki.distinguishedNameToAsn1({attributes:t.issuer}),S.create(S.Class.UNIVERSAL,S.Type.INTEGER,!1,$.util.hexToBytes(t.serialNumber))]),S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[S.create(S.Class.UNIVERSAL,S.Type.OID,!1,S.oidToDer(t.encryptedContent.algorithm).getBytes()),S.create(S.Class.UNIVERSAL,S.Type.NULL,!1,"")]),S.create(S.Class.UNIVERSAL,S.Type.OCTETSTRING,!1,t.encryptedContent.content)])}function G4(t){for(var e=[],r=0;r<t.length;++r)e.push(W4(t[r]));return e}function q4(t){for(var e=[],r=0;r<t.length;++r)e.push(j4(t[r]));return e}function Y4(t){var e=S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[S.create(S.Class.UNIVERSAL,S.Type.INTEGER,!1,S.integerToDer(t.version).getBytes()),S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[$.pki.distinguishedNameToAsn1({attributes:t.issuer}),S.create(S.Class.UNIVERSAL,S.Type.INTEGER,!1,$.util.hexToBytes(t.serialNumber))]),S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[S.create(S.Class.UNIVERSAL,S.Type.OID,!1,S.oidToDer(t.digestAlgorithm).getBytes()),S.create(S.Class.UNIVERSAL,S.Type.NULL,!1,"")])]);if(t.authenticatedAttributesAsn1&&e.value.push(t.authenticatedAttributesAsn1),e.value.push(S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[S.create(S.Class.UNIVERSAL,S.Type.OID,!1,S.oidToDer(t.signatureAlgorithm).getBytes()),S.create(S.Class.UNIVERSAL,S.Type.NULL,!1,"")])),e.value.push(S.create(S.Class.UNIVERSAL,S.Type.OCTETSTRING,!1,t.signature)),t.unauthenticatedAttributes.length>0){for(var r=S.create(S.Class.CONTEXT_SPECIFIC,1,!0,[]),n=0;n<t.unauthenticatedAttributes.length;++n){var o=t.unauthenticatedAttributes[n];r.values.push(Fs(o))}e.value.push(r)}return e}function X4(t){for(var e=[],r=0;r<t.length;++r)e.push(Y4(t[r]));return e}function Fs(t){var e;if(t.type===$.pki.oids.contentType)e=S.create(S.Class.UNIVERSAL,S.Type.OID,!1,S.oidToDer(t.value).getBytes());else if(t.type===$.pki.oids.messageDigest)e=S.create(S.Class.UNIVERSAL,S.Type.OCTETSTRING,!1,t.value.bytes());else if(t.type===$.pki.oids.signingTime){var r=new Date("1950-01-01T00:00:00Z"),n=new Date("2050-01-01T00:00:00Z"),o=t.value;if(typeof o=="string"){var a=Date.parse(o);isNaN(a)?o.length===13?o=S.utcTimeToDate(o):o=S.generalizedTimeToDate(o):o=new Date(a)}o>=r&&o<n?e=S.create(S.Class.UNIVERSAL,S.Type.UTCTIME,!1,S.dateToUtcTime(o)):e=S.create(S.Class.UNIVERSAL,S.Type.GENERALIZEDTIME,!1,S.dateToGeneralizedTime(o))}return S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[S.create(S.Class.UNIVERSAL,S.Type.OID,!1,S.oidToDer(t.type).getBytes()),S.create(S.Class.UNIVERSAL,S.Type.SET,!0,[e])])}function Q4(t){return[S.create(S.Class.UNIVERSAL,S.Type.OID,!1,S.oidToDer($.pki.oids.data).getBytes()),S.create(S.Class.UNIVERSAL,S.Type.SEQUENCE,!0,[S.create(S.Class.UNIVERSAL,S.Type.OID,!1,S.oidToDer(t.algorithm).getBytes()),t.parameter?S.create(S.Class.UNIVERSAL,S.Type.OCTETSTRING,!1,t.parameter.getBytes()):void 0]),S.create(S.Class.CONTEXT_SPECIFIC,0,!0,[S.create(S.Class.UNIVERSAL,S.Type.OCTETSTRING,!1,t.content.getBytes())])]}function Rl(t,e,r){var n={},o=[];if(!S.validate(e,r,n,o)){var a=new Error("Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.");throw a.errors=a,a}var i=S.derToOid(n.contentType);if(i!==$.pki.oids.data)throw new Error("Unsupported PKCS#7 message. Only wrapped ContentType Data supported.");if(n.encryptedContent){var s="";if($.util.isArray(n.encryptedContent))for(var l=0;l<n.encryptedContent.length;++l){if(n.encryptedContent[l].type!==S.Type.OCTETSTRING)throw new Error("Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.");s+=n.encryptedContent[l].value}else s=n.encryptedContent;t.encryptedContent={algorithm:S.derToOid(n.encAlgorithm),parameter:$.util.createBuffer(n.encParameter.value),content:$.util.createBuffer(s)}}if(n.content){var s="";if($.util.isArray(n.content))for(var l=0;l<n.content.length;++l){if(n.content[l].type!==S.Type.OCTETSTRING)throw new Error("Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.");s+=n.content[l].value}else s=n.content;t.content=$.util.createBuffer(s)}return t.version=n.version.charCodeAt(0),t.rawCapture=n,n}function zp(t){if(t.encryptedContent.key===void 0)throw new Error("Symmetric key not available.");if(t.content===void 0){var e;switch(t.encryptedContent.algorithm){case $.pki.oids["aes128-CBC"]:case $.pki.oids["aes192-CBC"]:case $.pki.oids["aes256-CBC"]:e=$.aes.createDecryptionCipher(t.encryptedContent.key);break;case $.pki.oids.desCBC:case $.pki.oids["des-EDE3-CBC"]:e=$.des.createDecryptionCipher(t.encryptedContent.key);break;default:throw new Error("Unsupported symmetric cipher, OID "+t.encryptedContent.algorithm)}if(e.start(t.encryptedContent.parameter),e.update(t.encryptedContent.content),!e.finish())throw new Error("Symmetric decryption failed.");t.content=e.output}}var ze=te,oi=ze.ssh=ze.ssh||{};oi.privateKeyToPutty=function(t,e,r){r=r||"",e=e||"";var n="ssh-rsa",o=e===""?"none":"aes256-cbc",a="PuTTY-User-Key-File-2: "+n+`\r
`;a+="Encryption: "+o+`\r
`,a+="Comment: "+r+`\r
`;var i=ze.util.createBuffer();yn(i,n),Wt(i,t.e),Wt(i,t.n);var s=ze.util.encode64(i.bytes(),64),l=Math.floor(s.length/66)+1;a+="Public-Lines: "+l+`\r
`,a+=s;var c=ze.util.createBuffer();Wt(c,t.d),Wt(c,t.p),Wt(c,t.q),Wt(c,t.qInv);var d;if(!e)d=ze.util.encode64(c.bytes(),64);else{var u=c.length()+16-1;u-=u%16;var f=Wo(c.bytes());f.truncate(f.length()-u+c.length()),c.putBuffer(f);var p=ze.util.createBuffer();p.putBuffer(Wo("\0\0\0\0",e)),p.putBuffer(Wo("\0\0\0",e));var h=ze.aes.createEncryptionCipher(p.truncate(8),"CBC");h.start(ze.util.createBuffer().fillWithByte(0,16)),h.update(c.copy()),h.finish();var g=h.output;g.truncate(16),d=ze.util.encode64(g.bytes(),64)}l=Math.floor(d.length/66)+1,a+=`\r
Private-Lines: `+l+`\r
`,a+=d;var b=Wo("putty-private-key-file-mac-key",e),x=ze.util.createBuffer();yn(x,n),yn(x,o),yn(x,r),x.putInt32(i.length()),x.putBuffer(i),x.putInt32(c.length()),x.putBuffer(c);var C=ze.hmac.create();return C.start("sha1",b),C.update(x.bytes()),a+=`\r
Private-MAC: `+C.digest().toHex()+`\r
`,a};oi.publicKeyToOpenSSH=function(t,e){var r="ssh-rsa";e=e||"";var n=ze.util.createBuffer();return yn(n,r),Wt(n,t.e),Wt(n,t.n),r+" "+ze.util.encode64(n.bytes())+" "+e};oi.privateKeyToOpenSSH=function(t,e){return e?ze.pki.encryptRsaPrivateKey(t,e,{legacy:!0,algorithm:"aes128"}):ze.pki.privateKeyToPem(t)};oi.getPublicKeyFingerprint=function(t,e){e=e||{};var r=e.md||ze.md.md5.create(),n="ssh-rsa",o=ze.util.createBuffer();yn(o,n),Wt(o,t.e),Wt(o,t.n),r.start(),r.update(o.getBytes());var a=r.digest();if(e.encoding==="hex"){var i=a.toHex();return e.delimiter?i.match(/.{2}/g).join(e.delimiter):i}else{if(e.encoding==="binary")return a.getBytes();if(e.encoding)throw new Error('Unknown encoding "'+e.encoding+'".')}return a};function Wt(t,e){var r=e.toString(16);r[0]>="8"&&(r="00"+r);var n=ze.util.hexToBytes(r);t.putInt32(n.length),t.putBytes(n)}function yn(t,e){t.putInt32(e.length),t.putString(e)}function Wo(){for(var t=ze.md.sha1.create(),e=arguments.length,r=0;r<e;++r)t.update(arguments[r]);return t.digest()}var Z4=te;const sN=H0(Z4);/*!
 * Chart.js v3.3.2
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */const Up=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function Vp(t,e,r){const n=r||(i=>Array.prototype.slice.call(i));let o=!1,a=[];return function(...i){a=n(i),o||(o=!0,Up.call(window,()=>{o=!1,t.apply(e,a)}))}}function J4(t,e){let r;return function(){return e?(clearTimeout(r),r=setTimeout(t,e)):t(),e}}const Dl=t=>t==="start"?"left":t==="end"?"right":"center",lt=(t,e,r)=>t==="start"?e:t==="end"?r:(e+r)/2,eR=(t,e,r)=>t==="right"?r:t==="center"?(e+r)/2:e;function er(){}const tR=function(){let t=0;return function(){return t++}}();function fe(t){return t===null||typeof t>"u"}function Be(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.substr(0,7)==="[object"&&e.substr(-6)==="Array]"}function be(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}const Fe=t=>(typeof t=="number"||t instanceof Number)&&isFinite(+t);function Ct(t,e){return Fe(t)?t:e}function ie(t,e){return typeof t>"u"?e:t}const rR=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100:t/e,zs=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function ke(t,e,r){if(t&&typeof t.call=="function")return t.apply(r,e)}function ve(t,e,r,n){let o,a,i;if(Be(t))for(a=t.length,o=0;o<a;o++)e.call(r,t[o],o);else if(be(t))for(i=Object.keys(t),a=i.length,o=0;o<a;o++)e.call(r,t[i[o]],i[o])}function Aa(t,e){let r,n,o,a;if(!t||!e||t.length!==e.length)return!1;for(r=0,n=t.length;r<n;++r)if(o=t[r],a=e[r],o.datasetIndex!==a.datasetIndex||o.index!==a.index)return!1;return!0}function Ia(t){if(Be(t))return t.map(Ia);if(be(t)){const e=Object.create(null),r=Object.keys(t),n=r.length;let o=0;for(;o<n;++o)e[r[o]]=Ia(t[r[o]]);return e}return t}function Kp(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function nR(t,e,r,n){if(!Kp(t))return;const o=e[t],a=r[t];be(o)&&be(a)?Co(o,a,n):e[t]=Ia(a)}function Co(t,e,r){const n=Be(e)?e:[e],o=n.length;if(!be(t))return t;r=r||{};const a=r.merger||nR;for(let i=0;i<o;++i){if(e=n[i],!be(e))continue;const s=Object.keys(e);for(let l=0,c=s.length;l<c;++l)a(s[l],t,e,r)}return t}function co(t,e){return Co(t,e,{merger:oR})}function oR(t,e,r){if(!Kp(t))return;const n=e[t],o=r[t];be(n)&&be(o)?co(n,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Ia(o))}const aR="",iR=".";function Rd(t,e){const r=t.indexOf(iR,e);return r===-1?t.length:r}function Rr(t,e){if(e===aR)return t;let r=0,n=Rd(e,r);for(;t&&n>r;)t=t[e.substr(r,n-r)],r=n+1,n=Rd(e,r);return t}function Ll(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Ot=t=>typeof t<"u",Tn=t=>typeof t=="function",sR=(t,e)=>{if(t.size!==e.size)return!1;for(const r of t)if(!e.has(r))return!1;return!0},Oe=Math.PI,xe=2*Oe,lR=xe+Oe,Ra=Number.POSITIVE_INFINITY,cR=Oe/180,$e=Oe/2,Vn=Oe/4,Dd=Oe*2/3,wt=Math.log10,Dr=Math.sign;function Ld(t){const e=Math.pow(10,Math.floor(wt(t))),r=t/e;return(r<=1?1:r<=2?2:r<=5?5:10)*e}function dR(t){const e=[],r=Math.sqrt(t);let n;for(n=1;n<r;n++)t%n===0&&(e.push(n),e.push(t/n));return r===(r|0)&&e.push(r),e.sort((o,a)=>o-a).pop(),e}function Bn(t){return!isNaN(parseFloat(t))&&isFinite(t)}function ca(t,e,r){return Math.abs(t-e)<r}function uR(t,e){const r=Math.round(t);return r-e<=t&&r+e>=t}function Hp(t,e,r){let n,o,a;for(n=0,o=t.length;n<o;n++)a=t[n][r],isNaN(a)||(e.min=Math.min(e.min,a),e.max=Math.max(e.max,a))}function Pt(t){return t*(Oe/180)}function Us(t){return t*(180/Oe)}function Nd(t){if(!Fe(t))return;let e=1,r=0;for(;Math.round(t*e)/e!==t;)e*=10,r++;return r}function fR(t,e){const r=e.x-t.x,n=e.y-t.y,o=Math.sqrt(r*r+n*n);let a=Math.atan2(n,r);return a<-.5*Oe&&(a+=xe),{angle:a,distance:o}}function Vs(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function pR(t,e){return(t-e+lR)%xe-Oe}function Rt(t){return(t%xe+xe)%xe}function Da(t,e,r,n){const o=Rt(t),a=Rt(e),i=Rt(r),s=Rt(a-o),l=Rt(i-o),c=Rt(o-a),d=Rt(o-i);return o===a||o===i||n&&a===i||s>l&&c<d}function bt(t,e,r){return Math.max(e,Math.min(r,t))}function hR(t){return bt(t,-32768,32767)}const jo=t=>t===0||t===1,Pd=(t,e,r)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*xe/r)),Od=(t,e,r)=>Math.pow(2,-10*t)*Math.sin((t-e)*xe/r)+1,uo={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*$e)+1,easeOutSine:t=>Math.sin(t*$e),easeInOutSine:t=>-.5*(Math.cos(Oe*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>jo(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>jo(t)?t:Pd(t,.075,.3),easeOutElastic:t=>jo(t)?t:Od(t,.075,.3),easeInOutElastic(t){return jo(t)?t:t<.5?.5*Pd(t*2,.1125,.45):.5+.5*Od(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-uo.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?uo.easeInBounce(t*2)*.5:uo.easeOutBounce(t*2-1)*.5+.5};/*!
 * @kurkle/color v0.1.9
 * https://github.com/kurkle/color#readme
 * (c) 2020 Jukka Kurkela
 * Released under the MIT License
 */const xt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ks="0123456789ABCDEF",gR=t=>Ks[t&15],bR=t=>Ks[(t&240)>>4]+Ks[t&15],Go=t=>(t&240)>>4===(t&15);function mR(t){return Go(t.r)&&Go(t.g)&&Go(t.b)&&Go(t.a)}function vR(t){var e=t.length,r;return t[0]==="#"&&(e===4||e===5?r={r:255&xt[t[1]]*17,g:255&xt[t[2]]*17,b:255&xt[t[3]]*17,a:e===5?xt[t[4]]*17:255}:(e===7||e===9)&&(r={r:xt[t[1]]<<4|xt[t[2]],g:xt[t[3]]<<4|xt[t[4]],b:xt[t[5]]<<4|xt[t[6]],a:e===9?xt[t[7]]<<4|xt[t[8]]:255})),r}function yR(t){var e=mR(t)?gR:bR;return t&&"#"+e(t.r)+e(t.g)+e(t.b)+(t.a<255?e(t.a):"")}function Io(t){return t+.5|0}const ai=(t,e,r)=>Math.max(Math.min(t,r),e);function Xn(t){return ai(Io(t*2.55),0,255)}function ko(t){return ai(Io(t*255),0,255)}function Nl(t){return ai(Io(t/2.55)/100,0,1)}function Md(t){return ai(Io(t*100),0,100)}const xR=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function CR(t){const e=xR.exec(t);let r=255,n,o,a;if(e){if(e[7]!==n){const i=+e[7];r=255&(e[8]?Xn(i):i*255)}return n=+e[1],o=+e[3],a=+e[5],n=255&(e[2]?Xn(n):n),o=255&(e[4]?Xn(o):o),a=255&(e[6]?Xn(a):a),{r:n,g:o,b:a,a:r}}}function kR(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Nl(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const wR=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Wp(t,e,r){const n=e*Math.min(r,1-r),o=(a,i=(a+t/30)%12)=>r-n*Math.max(Math.min(i-3,9-i,1),-1);return[o(0),o(8),o(4)]}function SR(t,e,r){const n=(o,a=(o+t/60)%6)=>r-r*e*Math.max(Math.min(a,4-a,1),0);return[n(5),n(3),n(1)]}function ER(t,e,r){const n=Wp(t,1,.5);let o;for(e+r>1&&(o=1/(e+r),e*=o,r*=o),o=0;o<3;o++)n[o]*=1-e-r,n[o]+=e;return n}function Pl(t){const r=t.r/255,n=t.g/255,o=t.b/255,a=Math.max(r,n,o),i=Math.min(r,n,o),s=(a+i)/2;let l,c,d;return a!==i&&(d=a-i,c=s>.5?d/(2-a-i):d/(a+i),l=a===r?(n-o)/d+(n<o?6:0):a===n?(o-r)/d+2:(r-n)/d+4,l=l*60+.5),[l|0,c||0,s]}function Ol(t,e,r,n){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,r,n)).map(ko)}function Ml(t,e,r){return Ol(Wp,t,e,r)}function _R(t,e,r){return Ol(ER,t,e,r)}function TR(t,e,r){return Ol(SR,t,e,r)}function jp(t){return(t%360+360)%360}function BR(t){const e=wR.exec(t);let r=255,n;if(!e)return;e[5]!==n&&(r=e[6]?Xn(+e[5]):ko(+e[5]));const o=jp(+e[2]),a=+e[3]/100,i=+e[4]/100;return e[1]==="hwb"?n=_R(o,a,i):e[1]==="hsv"?n=TR(o,a,i):n=Ml(o,a,i),{r:n[0],g:n[1],b:n[2],a:r}}function AR(t,e){var r=Pl(t);r[0]=jp(r[0]+e),r=Ml(r),t.r=r[0],t.g=r[1],t.b=r[2]}function IR(t){if(!t)return;const e=Pl(t),r=e[0],n=Md(e[1]),o=Md(e[2]);return t.a<255?`hsla(${r}, ${n}%, ${o}%, ${Nl(t.a)})`:`hsl(${r}, ${n}%, ${o}%)`}const $d={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Fd={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function RR(){const t={},e=Object.keys(Fd),r=Object.keys($d);let n,o,a,i,s;for(n=0;n<e.length;n++){for(i=s=e[n],o=0;o<r.length;o++)a=r[o],s=s.replace(a,$d[a]);a=parseInt(Fd[i],16),t[s]=[a>>16&255,a>>8&255,a&255]}return t}let qo;function DR(t){qo||(qo=RR(),qo.transparent=[0,0,0,0]);const e=qo[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}function Yo(t,e,r){if(t){let n=Pl(t);n[e]=Math.max(0,Math.min(n[e]+n[e]*r,e===0?360:1)),n=Ml(n),t.r=n[0],t.g=n[1],t.b=n[2]}}function Gp(t,e){return t&&Object.assign(e||{},t)}function zd(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=ko(t[3]))):(e=Gp(t,{r:0,g:0,b:0,a:1}),e.a=ko(e.a)),e}function LR(t){return t.charAt(0)==="r"?CR(t):BR(t)}class La{constructor(e){if(e instanceof La)return e;const r=typeof e;let n;r==="object"?n=zd(e):r==="string"&&(n=vR(e)||DR(e)||LR(e)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var e=Gp(this._rgb);return e&&(e.a=Nl(e.a)),e}set rgb(e){this._rgb=zd(e)}rgbString(){return this._valid?kR(this._rgb):this._rgb}hexString(){return this._valid?yR(this._rgb):this._rgb}hslString(){return this._valid?IR(this._rgb):this._rgb}mix(e,r){const n=this;if(e){const o=n.rgb,a=e.rgb;let i;const s=r===i?.5:r,l=2*s-1,c=o.a-a.a,d=((l*c===-1?l:(l+c)/(1+l*c))+1)/2;i=1-d,o.r=255&d*o.r+i*a.r+.5,o.g=255&d*o.g+i*a.g+.5,o.b=255&d*o.b+i*a.b+.5,o.a=s*o.a+(1-s)*a.a,n.rgb=o}return n}clone(){return new La(this.rgb)}alpha(e){return this._rgb.a=ko(e),this}clearer(e){const r=this._rgb;return r.a*=1-e,this}greyscale(){const e=this._rgb,r=Io(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=r,this}opaquer(e){const r=this._rgb;return r.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Yo(this._rgb,2,e),this}darken(e){return Yo(this._rgb,2,-e),this}saturate(e){return Yo(this._rgb,1,e),this}desaturate(e){return Yo(this._rgb,1,-e),this}rotate(e){return AR(this._rgb,e),this}}function qp(t){return new La(t)}const Yp=t=>t instanceof CanvasGradient||t instanceof CanvasPattern;function Ud(t){return Yp(t)?t:qp(t)}function qi(t){return Yp(t)?t:qp(t).saturate(.5).darken(.1).hexString()}const Jr=Object.create(null),Hs=Object.create(null);function fo(t,e){if(!e)return t;const r=e.split(".");for(let n=0,o=r.length;n<o;++n){const a=r[n];t=t[a]||(t[a]=Object.create(null))}return t}function Yi(t,e,r){return typeof e=="string"?Co(fo(t,e),r):Co(fo(t,""),e)}class NR{constructor(e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,n)=>qi(n.backgroundColor),this.hoverBorderColor=(r,n)=>qi(n.borderColor),this.hoverColor=(r,n)=>qi(n.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.describe(e)}set(e,r){return Yi(this,e,r)}get(e){return fo(this,e)}describe(e,r){return Yi(Hs,e,r)}override(e,r){return Yi(Jr,e,r)}route(e,r,n,o){const a=fo(this,e),i=fo(this,n),s="_"+r;Object.defineProperties(a,{[s]:{value:a[r],writable:!0},[r]:{enumerable:!0,get(){const l=this[s],c=i[o];return be(l)?Object.assign({},c,l):ie(l,c)},set(l){this[s]=l}}})}}var ce=new NR({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function PR(t){return!t||fe(t.size)||fe(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Na(t,e,r,n,o){let a=e[o];return a||(a=e[o]=t.measureText(o).width,r.push(o)),a>n&&(n=a),n}function OR(t,e,r,n){n=n||{};let o=n.data=n.data||{},a=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(o=n.data={},a=n.garbageCollect=[],n.font=e),t.save(),t.font=e;let i=0;const s=r.length;let l,c,d,u,f;for(l=0;l<s;l++)if(u=r[l],u!=null&&Be(u)!==!0)i=Na(t,o,a,i,u);else if(Be(u))for(c=0,d=u.length;c<d;c++)f=u[c],f!=null&&!Be(f)&&(i=Na(t,o,a,i,f));t.restore();const p=a.length/2;if(p>r.length){for(l=0;l<p;l++)delete o[a[l]];a.splice(0,p)}return i}function Mr(t,e,r){const n=t.currentDevicePixelRatio,o=r!==0?Math.max(r/2,.5):0;return Math.round((e-o)*n)/n+o}function Vd(t,e){e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Pa(t,e,r,n){let o,a,i,s,l;const c=e.pointStyle,d=e.rotation,u=e.radius;let f=(d||0)*cR;if(c&&typeof c=="object"&&(o=c.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){t.save(),t.translate(r,n),t.rotate(f),t.drawImage(c,-c.width/2,-c.height/2,c.width,c.height),t.restore();return}if(!(isNaN(u)||u<=0)){switch(t.beginPath(),c){default:t.arc(r,n,u,0,xe),t.closePath();break;case"triangle":t.moveTo(r+Math.sin(f)*u,n-Math.cos(f)*u),f+=Dd,t.lineTo(r+Math.sin(f)*u,n-Math.cos(f)*u),f+=Dd,t.lineTo(r+Math.sin(f)*u,n-Math.cos(f)*u),t.closePath();break;case"rectRounded":l=u*.516,s=u-l,a=Math.cos(f+Vn)*s,i=Math.sin(f+Vn)*s,t.arc(r-a,n-i,l,f-Oe,f-$e),t.arc(r+i,n-a,l,f-$e,f),t.arc(r+a,n+i,l,f,f+$e),t.arc(r-i,n+a,l,f+$e,f+Oe),t.closePath();break;case"rect":if(!d){s=Math.SQRT1_2*u,t.rect(r-s,n-s,2*s,2*s);break}f+=Vn;case"rectRot":a=Math.cos(f)*u,i=Math.sin(f)*u,t.moveTo(r-a,n-i),t.lineTo(r+i,n-a),t.lineTo(r+a,n+i),t.lineTo(r-i,n+a),t.closePath();break;case"crossRot":f+=Vn;case"cross":a=Math.cos(f)*u,i=Math.sin(f)*u,t.moveTo(r-a,n-i),t.lineTo(r+a,n+i),t.moveTo(r+i,n-a),t.lineTo(r-i,n+a);break;case"star":a=Math.cos(f)*u,i=Math.sin(f)*u,t.moveTo(r-a,n-i),t.lineTo(r+a,n+i),t.moveTo(r+i,n-a),t.lineTo(r-i,n+a),f+=Vn,a=Math.cos(f)*u,i=Math.sin(f)*u,t.moveTo(r-a,n-i),t.lineTo(r+a,n+i),t.moveTo(r+i,n-a),t.lineTo(r-i,n+a);break;case"line":a=Math.cos(f)*u,i=Math.sin(f)*u,t.moveTo(r-a,n-i),t.lineTo(r+a,n+i);break;case"dash":t.moveTo(r,n),t.lineTo(r+Math.cos(f)*u,n+Math.sin(f)*u);break}t.fill(),e.borderWidth>0&&t.stroke()}}function An(t,e,r){return r=r||.5,t&&t.x>e.left-r&&t.x<e.right+r&&t.y>e.top-r&&t.y<e.bottom+r}function Ro(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Do(t){t.restore()}function MR(t,e,r,n,o){if(!e)return t.lineTo(r.x,r.y);if(o==="middle"){const a=(e.x+r.x)/2;t.lineTo(a,e.y),t.lineTo(a,r.y)}else o==="after"!=!!n?t.lineTo(e.x,r.y):t.lineTo(r.x,e.y);t.lineTo(r.x,r.y)}function $R(t,e,r,n){if(!e)return t.lineTo(r.x,r.y);t.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?r.cp2x:r.cp1x,n?r.cp2y:r.cp1y,r.x,r.y)}function en(t,e,r,n,o,a={}){const i=Be(e)?e:[e],s=a.strokeWidth>0&&a.strokeColor!=="";let l,c;for(t.save(),a.translation&&t.translate(a.translation[0],a.translation[1]),fe(a.rotation)||t.rotate(a.rotation),t.font=o.string,a.color&&(t.fillStyle=a.color),a.textAlign&&(t.textAlign=a.textAlign),a.textBaseline&&(t.textBaseline=a.textBaseline),l=0;l<i.length;++l){if(c=i[l],s&&(a.strokeColor&&(t.strokeStyle=a.strokeColor),fe(a.strokeWidth)||(t.lineWidth=a.strokeWidth),t.strokeText(c,r,n,a.maxWidth)),t.fillText(c,r,n,a.maxWidth),a.strikethrough||a.underline){const d=t.measureText(c),u=r-d.actualBoundingBoxLeft,f=r+d.actualBoundingBoxRight,p=n-d.actualBoundingBoxAscent,h=n+d.actualBoundingBoxDescent,g=a.strikethrough?(p+h)/2:h;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=a.decorationWidth||2,t.moveTo(u,g),t.lineTo(f,g),t.stroke()}n+=o.lineHeight}t.restore()}function Oa(t,e){const{x:r,y:n,w:o,h:a,radius:i}=e;t.arc(r+i.topLeft,n+i.topLeft,i.topLeft,-$e,Oe,!0),t.lineTo(r,n+a-i.bottomLeft),t.arc(r+i.bottomLeft,n+a-i.bottomLeft,i.bottomLeft,Oe,$e,!0),t.lineTo(r+o-i.bottomRight,n+a),t.arc(r+o-i.bottomRight,n+a-i.bottomRight,i.bottomRight,$e,0,!0),t.lineTo(r+o,n+i.topRight),t.arc(r+o-i.topRight,n+i.topRight,i.topRight,0,-$e,!0),t.lineTo(r+i.topLeft,n)}const FR=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),zR=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function UR(t,e){const r=(""+t).match(FR);if(!r||r[1]==="normal")return e*1.2;switch(t=+r[2],r[3]){case"px":return t;case"%":t/=100;break}return e*t}const VR=t=>+t||0;function $l(t,e){const r={},n=be(e),o=n?Object.keys(e):e,a=be(t)?n?i=>ie(t[i],t[e[i]]):i=>t[i]:()=>t;for(const i of o)r[i]=VR(a(i));return r}function Xp(t){return $l(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Fl(t){return $l(t,["topLeft","topRight","bottomLeft","bottomRight"])}function pt(t){const e=Xp(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Ve(t,e){t=t||{},e=e||ce.font;let r=ie(t.size,e.size);typeof r=="string"&&(r=parseInt(r,10));let n=ie(t.style,e.style);n&&!(""+n).match(zR)&&(console.warn('Invalid font style specified: "'+n+'"'),n="");const o={family:ie(t.family,e.family),lineHeight:UR(ie(t.lineHeight,e.lineHeight),r),size:r,style:n,weight:ie(t.weight,e.weight),string:""};return o.string=PR(o),o}function Qn(t,e,r,n){let o,a,i;for(o=0,a=t.length;o<a;++o)if(i=t[o],i!==void 0&&i!==void 0)return i}function KR(t,e){const{min:r,max:n}=t;return{min:r-Math.abs(zs(e,r)),max:n+zs(e,n)}}function ii(t,e,r){r=r||(i=>t[i]<e);let n=t.length-1,o=0,a;for(;n-o>1;)a=o+n>>1,r(a)?o=a:n=a;return{lo:o,hi:n}}const Wr=(t,e,r)=>ii(t,r,n=>t[n][e]<r),HR=(t,e,r)=>ii(t,r,n=>t[n][e]>=r);function WR(t,e,r){let n=0,o=t.length;for(;n<o&&t[n]<e;)n++;for(;o>n&&t[o-1]>r;)o--;return n>0||o<t.length?t.slice(n,o):t}const Qp=["push","pop","shift","splice","unshift"];function jR(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Qp.forEach(r=>{const n="_onData"+Ll(r),o=t[r];Object.defineProperty(t,r,{configurable:!0,enumerable:!1,value(...a){const i=o.apply(this,a);return t._chartjs.listeners.forEach(s=>{typeof s[n]=="function"&&s[n](...a)}),i}})})}function Kd(t,e){const r=t._chartjs;if(!r)return;const n=r.listeners,o=n.indexOf(e);o!==-1&&n.splice(o,1),!(n.length>0)&&(Qp.forEach(a=>{delete t[a]}),delete t._chartjs)}function Zp(t){const e=new Set;let r,n;for(r=0,n=t.length;r<n;++r)e.add(t[r]);if(e.size===n)return t;const o=[];return e.forEach(a=>{o.push(a)}),o}function zl(t,e=[""],r=t,n,o=()=>t[0]){Ot(n)||(n=n0("_fallback",t));const a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:r,_fallback:n,_getTarget:o,override:i=>zl([i,...t],e,r,n)};return new Proxy(a,{deleteProperty(i,s){return delete i[s],delete i._keys,delete t[0][s],!0},get(i,s){return t0(i,s,()=>e8(s,e,t,i))},getOwnPropertyDescriptor(i,s){return Reflect.getOwnPropertyDescriptor(i._scopes[0],s)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(i,s){return Wd(i).includes(s)},ownKeys(i){return Wd(i)},set(i,s,l){const c=i._storage||(i._storage=o());return c[s]=l,delete i[s],delete i._keys,!0}})}function In(t,e,r,n){const o={_cacheable:!1,_proxy:t,_context:e,_subProxy:r,_stack:new Set,_descriptors:Jp(t,n),setContext:a=>In(t,a,r,n),override:a=>In(t.override(a),e,r,n)};return new Proxy(o,{deleteProperty(a,i){return delete a[i],delete t[i],!0},get(a,i,s){return t0(a,i,()=>qR(a,i,s))},getOwnPropertyDescriptor(a,i){return a._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(a,i){return Reflect.has(t,i)},ownKeys(){return Reflect.ownKeys(t)},set(a,i,s){return t[i]=s,delete a[i],!0}})}function Jp(t,e={scriptable:!0,indexable:!0}){const{_scriptable:r=e.scriptable,_indexable:n=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:r,indexable:n,isScriptable:Tn(r)?r:()=>r,isIndexable:Tn(n)?n:()=>n}}const GR=(t,e)=>t?t+Ll(e):e,e0=(t,e)=>be(e)&&t!=="adapters";function t0(t,e,r){let n=t[e];return Ot(n)||(n=r(),Ot(n)&&(t[e]=n)),n}function qR(t,e,r){const{_proxy:n,_context:o,_subProxy:a,_descriptors:i}=t;let s=n[e];return Tn(s)&&i.isScriptable(e)&&(s=YR(e,s,t,r)),Be(s)&&s.length&&(s=XR(e,s,t,i.isIndexable)),e0(e,s)&&(s=In(s,o,a&&a[e],i)),s}function YR(t,e,r,n){const{_proxy:o,_context:a,_subProxy:i,_stack:s}=r;if(s.has(t))throw new Error("Recursion detected: "+[...s].join("->")+"->"+t);return s.add(t),e=e(a,i||n),s.delete(t),be(e)&&(e=Ul(o._scopes,o,t,e)),e}function XR(t,e,r,n){const{_proxy:o,_context:a,_subProxy:i,_descriptors:s}=r;if(Ot(a.index)&&n(t))e=e[a.index%e.length];else if(be(e[0])){const l=e,c=o._scopes.filter(d=>d!==l);e=[];for(const d of l){const u=Ul(c,o,t,d);e.push(In(u,a,i&&i[t],s))}}return e}function r0(t,e,r){return Tn(t)?t(e,r):t}const QR=(t,e)=>t===!0?e:typeof t=="string"?Rr(e,t):void 0;function ZR(t,e,r,n){for(const o of e){const a=QR(r,o);if(a){t.add(a);const i=r0(a._fallback,r,a);if(Ot(i)&&i!==r&&i!==n)return i}else if(a===!1&&Ot(n)&&r!==n)return null}return!1}function Ul(t,e,r,n){const o=e._rootScopes,a=r0(e._fallback,r,n),i=[...t,...o],s=new Set;s.add(n);let l=Hd(s,i,r,a||r);return l===null||Ot(a)&&a!==r&&(l=Hd(s,i,a,l),l===null)?!1:zl([...s],[""],o,a,()=>JR(e,r,n))}function Hd(t,e,r,n){for(;r;)r=ZR(t,e,r,n);return r}function JR(t,e,r){const n=t._getTarget();e in n||(n[e]={});const o=n[e];return Be(o)&&be(r)?r:o}function e8(t,e,r,n){let o;for(const a of e)if(o=n0(GR(a,t),r),Ot(o))return e0(t,o)?Ul(r,n,t,o):o}function n0(t,e){for(const r of e){if(!r)continue;const n=r[t];if(Ot(n))return n}}function Wd(t){let e=t._keys;return e||(e=t._keys=t8(t._scopes)),e}function t8(t){const e=new Set;for(const r of t)for(const n of Object.keys(r).filter(o=>!o.startsWith("_")))e.add(n);return[...e]}const r8=Number.EPSILON||1e-14,Rn=(t,e)=>e<t.length&&!t[e].skip&&t[e],o0=t=>t==="x"?"y":"x";function n8(t,e,r,n){const o=t.skip?e:t,a=e,i=r.skip?e:r,s=Vs(a,o),l=Vs(i,a);let c=s/(s+l),d=l/(s+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const u=n*c,f=n*d;return{previous:{x:a.x-u*(i.x-o.x),y:a.y-u*(i.y-o.y)},next:{x:a.x+f*(i.x-o.x),y:a.y+f*(i.y-o.y)}}}function o8(t,e,r){const n=t.length;let o,a,i,s,l,c=Rn(t,0);for(let d=0;d<n-1;++d)if(l=c,c=Rn(t,d+1),!(!l||!c)){if(ca(e[d],0,r8)){r[d]=r[d+1]=0;continue}o=r[d]/e[d],a=r[d+1]/e[d],s=Math.pow(o,2)+Math.pow(a,2),!(s<=9)&&(i=3/Math.sqrt(s),r[d]=o*i*e[d],r[d+1]=a*i*e[d])}}function a8(t,e,r="x"){const n=o0(r),o=t.length;let a,i,s,l=Rn(t,0);for(let c=0;c<o;++c){if(i=s,s=l,l=Rn(t,c+1),!s)continue;const d=s[r],u=s[n];i&&(a=(d-i[r])/3,s[`cp1${r}`]=d-a,s[`cp1${n}`]=u-a*e[c]),l&&(a=(l[r]-d)/3,s[`cp2${r}`]=d+a,s[`cp2${n}`]=u+a*e[c])}}function i8(t,e="x"){const r=o0(e),n=t.length,o=Array(n).fill(0),a=Array(n);let i,s,l,c=Rn(t,0);for(i=0;i<n;++i)if(s=l,l=c,c=Rn(t,i+1),!!l){if(c){const d=c[e]-l[e];o[i]=d!==0?(c[r]-l[r])/d:0}a[i]=s?c?Dr(o[i-1])!==Dr(o[i])?0:(o[i-1]+o[i])/2:o[i-1]:o[i]}o8(t,o,a),a8(t,a,e)}function Xo(t,e,r){return Math.max(Math.min(t,r),e)}function s8(t,e){let r,n,o,a,i,s=An(t[0],e);for(r=0,n=t.length;r<n;++r)i=a,a=s,s=r<n-1&&An(t[r+1],e),a&&(o=t[r],i&&(o.cp1x=Xo(o.cp1x,e.left,e.right),o.cp1y=Xo(o.cp1y,e.top,e.bottom)),s&&(o.cp2x=Xo(o.cp2x,e.left,e.right),o.cp2y=Xo(o.cp2y,e.top,e.bottom)))}function l8(t,e,r,n,o){let a,i,s,l;if(e.spanGaps&&(t=t.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")i8(t,o);else{let c=n?t[t.length-1]:t[0];for(a=0,i=t.length;a<i;++a)s=t[a],l=n8(c,s,t[Math.min(a+1,i-(n?0:1))%i],e.tension),s.cp1x=l.previous.x,s.cp1y=l.previous.y,s.cp2x=l.next.x,s.cp2y=l.next.y,c=s}e.capBezierPoints&&s8(t,r)}function tn(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Ma(t,e,r){let n;return typeof t=="string"?(n=parseInt(t,10),t.indexOf("%")!==-1&&(n=n/100*e.parentNode[r])):n=t,n}const si=t=>window.getComputedStyle(t,null);function c8(t,e){return si(t).getPropertyValue(e)}const d8=["top","right","bottom","left"];function Yr(t,e,r){const n={};r=r?"-"+r:"";for(let o=0;o<4;o++){const a=d8[o];n[a]=parseFloat(t[e+"-"+a+r])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const u8=(t,e,r)=>(t>0||e>0)&&(!r||!r.shadowRoot);function f8(t,e){const r=t.native||t,n=r.touches,o=n&&n.length?n[0]:r,{offsetX:a,offsetY:i}=o;let s=!1,l,c;if(u8(a,i,r.target))l=a,c=i;else{const d=e.getBoundingClientRect();l=o.clientX-d.left,c=o.clientY-d.top,s=!0}return{x:l,y:c,box:s}}function a0(t,e){const{canvas:r,currentDevicePixelRatio:n}=e,o=si(r),a=o.boxSizing==="border-box",i=Yr(o,"padding"),s=Yr(o,"border","width"),{x:l,y:c,box:d}=f8(t,r),u=i.left+(d&&s.left),f=i.top+(d&&s.top);let{width:p,height:h}=e;return a&&(p-=i.width+s.width,h-=i.height+s.height),{x:Math.round((l-u)/p*r.width/n),y:Math.round((c-f)/h*r.height/n)}}function p8(t,e,r){let n,o;if(e===void 0||r===void 0){const a=tn(t);if(!a)e=t.clientWidth,r=t.clientHeight;else{const i=a.getBoundingClientRect(),s=si(a),l=Yr(s,"border","width"),c=Yr(s,"padding");e=i.width-c.width-l.width,r=i.height-c.height-l.height,n=Ma(s.maxWidth,a,"clientWidth"),o=Ma(s.maxHeight,a,"clientHeight")}}return{width:e,height:r,maxWidth:n||Ra,maxHeight:o||Ra}}const Xi=t=>Math.round(t*10)/10;function h8(t,e,r,n){const o=si(t),a=Yr(o,"margin"),i=Ma(o.maxWidth,t,"clientWidth")||Ra,s=Ma(o.maxHeight,t,"clientHeight")||Ra,l=p8(t,e,r);let{width:c,height:d}=l;if(o.boxSizing==="content-box"){const u=Yr(o,"border","width"),f=Yr(o,"padding");c-=f.width+u.width,d-=f.height+u.height}return c=Math.max(0,c-a.width),d=Math.max(0,n?Math.floor(c/n):d-a.height),c=Xi(Math.min(c,i,l.maxWidth)),d=Xi(Math.min(d,s,l.maxHeight)),c&&!d&&(d=Xi(c/2)),{width:c,height:d}}function jd(t,e,r){const n=e||1,o=Math.floor(t.height*n),a=Math.floor(t.width*n);t.height=o/n,t.width=a/n;const i=t.canvas;return i.style&&(r||!i.style.height&&!i.style.width)&&(i.style.height=`${t.height}px`,i.style.width=`${t.width}px`),t.currentDevicePixelRatio!==n||i.height!==o||i.width!==a?(t.currentDevicePixelRatio=n,i.height=o,i.width=a,t.ctx.setTransform(n,0,0,n,0,0),!0):!1}const g8=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return t}();function Gd(t,e){const r=c8(t,e),n=r&&r.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function Fr(t,e,r,n){return{x:t.x+r*(e.x-t.x),y:t.y+r*(e.y-t.y)}}function b8(t,e,r,n){return{x:t.x+r*(e.x-t.x),y:n==="middle"?r<.5?t.y:e.y:n==="after"?r<1?t.y:e.y:r>0?e.y:t.y}}function m8(t,e,r,n){const o={x:t.cp2x,y:t.cp2y},a={x:e.cp1x,y:e.cp1y},i=Fr(t,o,r),s=Fr(o,a,r),l=Fr(a,e,r),c=Fr(i,s,r),d=Fr(s,l,r);return Fr(c,d,r)}const qd=new Map;function v8(t,e){e=e||{};const r=t+JSON.stringify(e);let n=qd.get(r);return n||(n=new Intl.NumberFormat(t,e),qd.set(r,n)),n}function Lo(t,e,r){return v8(e,r).format(t)}const y8=function(t,e){return{x(r){return t+t+e-r},setWidth(r){e=r},textAlign(r){return r==="center"?r:r==="right"?"left":"right"},xPlus(r,n){return r-n},leftForLtr(r,n){return r-n}}},x8=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function po(t,e,r){return t?y8(e,r):x8()}function i0(t,e){let r,n;(e==="ltr"||e==="rtl")&&(r=t.canvas.style,n=[r.getPropertyValue("direction"),r.getPropertyPriority("direction")],r.setProperty("direction",e,"important"),t.prevTextDirection=n)}function s0(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function l0(t){return t==="angle"?{between:Da,compare:pR,normalize:Rt}:{between:(e,r,n)=>e>=Math.min(r,n)&&e<=Math.max(n,r),compare:(e,r)=>e-r,normalize:e=>e}}function Yd({start:t,end:e,count:r,loop:n,style:o}){return{start:t%r,end:e%r,loop:n&&(e-t+1)%r===0,style:o}}function C8(t,e,r){const{property:n,start:o,end:a}=r,{between:i,normalize:s}=l0(n),l=e.length;let{start:c,end:d,loop:u}=t,f,p;if(u){for(c+=l,d+=l,f=0,p=l;f<p&&i(s(e[c%l][n]),o,a);++f)c--,d--;c%=l,d%=l}return d<c&&(d+=l),{start:c,end:d,loop:u,style:t.style}}function c0(t,e,r){if(!r)return[t];const{property:n,start:o,end:a}=r,i=e.length,{compare:s,between:l,normalize:c}=l0(n),{start:d,end:u,loop:f,style:p}=C8(t,e,r),h=[];let g=!1,b=null,x,C,k;const B=()=>l(o,k,x)&&s(o,k)!==0,_=()=>s(a,x)===0||l(a,k,x),T=()=>g||B(),R=()=>!g||_();for(let D=d,O=d;D<=u;++D)C=e[D%i],!C.skip&&(x=c(C[n]),x!==k&&(g=l(x,o,a),b===null&&T()&&(b=s(x,o)===0?D:O),b!==null&&R()&&(h.push(Yd({start:b,end:D,loop:f,count:i,style:p})),b=null),O=D,k=x));return b!==null&&h.push(Yd({start:b,end:u,loop:f,count:i,style:p})),h}function d0(t,e){const r=[],n=t.segments;for(let o=0;o<n.length;o++){const a=c0(n[o],t.points,e);a.length&&r.push(...a)}return r}function k8(t,e,r,n){let o=0,a=e-1;if(r&&!n)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,r&&(a+=o);a>o&&t[a%e].skip;)a--;return a%=e,{start:o,end:a}}function w8(t,e,r,n){const o=t.length,a=[];let i=e,s=t[e],l;for(l=e+1;l<=r;++l){const c=t[l%o];c.skip||c.stop?s.skip||(n=!1,a.push({start:e%o,end:(l-1)%o,loop:n}),e=i=c.stop?l:null):(i=l,s.skip&&(e=l)),s=c}return i!==null&&a.push({start:e%o,end:i%o,loop:n}),a}function S8(t,e){const r=t.points,n=t.options.spanGaps,o=r.length;if(!o)return[];const a=!!t._loop,{start:i,end:s}=k8(r,o,a,n);if(n===!0)return Xd([{start:i,end:s,loop:a}],r,e);const l=s<i?s+o:s,c=!!t._fullLoop&&i===0&&s===o-1;return Xd(w8(r,i,l,c),r,e)}function Xd(t,e,r){return!r||!r.setContext||!e?t:E8(t,e,r)}function E8(t,e,r){const n=e.length,o=[];let a=t[0].start,i=a;for(const s of t){let l,c,d=e[a%n];for(i=a+1;i<=s.end;i++){const u=e[i%n];c=_8(r.setContext({type:"segment",p0:d,p1:u})),T8(c,l)&&(o.push({start:a,end:i-1,loop:s.loop,style:l}),l=c,a=i-1),d=u,l=c}a<i-1&&(o.push({start:a,end:i-1,loop:s.loop,style:c}),a=i-1)}return o}function _8(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function T8(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}/*!
 * Chart.js v3.3.2
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */class B8{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,r,n,o){const a=r.listeners[o],i=r.duration;a.forEach(s=>s({chart:e,initial:r.initial,numSteps:i,currentStep:Math.min(n-r.start,i)}))}_refresh(){const e=this;e._request||(e._running=!0,e._request=Up.call(window,()=>{e._update(),e._request=null,e._running&&e._refresh()}))}_update(e=Date.now()){const r=this;let n=0;r._charts.forEach((o,a)=>{if(!o.running||!o.items.length)return;const i=o.items;let s=i.length-1,l=!1,c;for(;s>=0;--s)c=i[s],c._active?(c._total>o.duration&&(o.duration=c._total),c.tick(e),l=!0):(i[s]=i[i.length-1],i.pop());l&&(a.draw(),r._notify(a,o,e,"progress")),i.length||(o.running=!1,r._notify(a,o,e,"complete"),o.initial=!1),n+=i.length}),r._lastDate=e,n===0&&(r._running=!1)}_getAnims(e){const r=this._charts;let n=r.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},r.set(e,n)),n}listen(e,r,n){this._getAnims(e).listeners[r].push(n)}add(e,r){!r||!r.length||this._getAnims(e).items.push(...r)}has(e){return this._getAnims(e).items.length>0}start(e){const r=this._charts.get(e);r&&(r.running=!0,r.start=Date.now(),r.duration=r.items.reduce((n,o)=>Math.max(n,o._duration),0),this._refresh())}running(e){if(!this._running)return!1;const r=this._charts.get(e);return!(!r||!r.running||!r.items.length)}stop(e){const r=this._charts.get(e);if(!r||!r.items.length)return;const n=r.items;let o=n.length-1;for(;o>=0;--o)n[o].cancel();r.items=[],this._notify(e,r,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var rr=new B8;const Qd="transparent",A8={boolean(t,e,r){return r>.5?e:t},color(t,e,r){const n=Ud(t||Qd),o=n.valid&&Ud(e||Qd);return o&&o.valid?o.mix(n,r).hexString():e},number(t,e,r){return t+(e-t)*r}};class I8{constructor(e,r,n,o){const a=r[n];o=Qn([e.to,o,a,e.from]);const i=Qn([e.from,a,o]);this._active=!0,this._fn=e.fn||A8[e.type||typeof i],this._easing=uo[e.easing]||uo.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=r,this._prop=n,this._from=i,this._to=o,this._promises=void 0}active(){return this._active}update(e,r,n){const o=this;if(o._active){o._notify(!1);const a=o._target[o._prop],i=n-o._start,s=o._duration-i;o._start=n,o._duration=Math.floor(Math.max(s,e.duration)),o._total+=i,o._loop=!!e.loop,o._to=Qn([e.to,r,a,e.from]),o._from=Qn([e.from,a,r])}}cancel(){const e=this;e._active&&(e.tick(Date.now()),e._active=!1,e._notify(!1))}tick(e){const r=this,n=e-r._start,o=r._duration,a=r._prop,i=r._from,s=r._loop,l=r._to;let c;if(r._active=i!==l&&(s||n<o),!r._active){r._target[a]=l,r._notify(!0);return}if(n<0){r._target[a]=i;return}c=n/o%2,c=s&&c>1?2-c:c,c=r._easing(Math.min(1,Math.max(0,c))),r._target[a]=r._fn(i,l,c)}wait(){const e=this._promises||(this._promises=[]);return new Promise((r,n)=>{e.push({res:r,rej:n})})}_notify(e){const r=e?"res":"rej",n=this._promises||[];for(let o=0;o<n.length;o++)n[o][r]()}}const R8=["x","y","borderWidth","radius","tension"],D8=["color","borderColor","backgroundColor"];ce.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const L8=Object.keys(ce.animation);ce.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"});ce.set("animations",{colors:{type:"color",properties:D8},numbers:{type:"number",properties:R8}});ce.describe("animations",{_fallback:"animation"});ce.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}});class u0{constructor(e,r){this._chart=e,this._properties=new Map,this.configure(r)}configure(e){if(!be(e))return;const r=this._properties;Object.getOwnPropertyNames(e).forEach(n=>{const o=e[n];if(!be(o))return;const a={};for(const i of L8)a[i]=o[i];(Be(o.properties)&&o.properties||[n]).forEach(i=>{(i===n||!r.has(i))&&r.set(i,a)})})}_animateOptions(e,r){const n=r.options,o=P8(e,n);if(!o)return[];const a=this._createAnimations(o,n);return n.$shared&&N8(e.options.$animations,n).then(()=>{e.options=n},()=>{}),a}_createAnimations(e,r){const n=this._properties,o=[],a=e.$animations||(e.$animations={}),i=Object.keys(r),s=Date.now();let l;for(l=i.length-1;l>=0;--l){const c=i[l];if(c.charAt(0)==="$")continue;if(c==="options"){o.push(...this._animateOptions(e,r));continue}const d=r[c];let u=a[c];const f=n.get(c);if(u)if(f&&u.active()){u.update(f,d,s);continue}else u.cancel();if(!f||!f.duration){e[c]=d;continue}a[c]=u=new I8(f,e,c,d),o.push(u)}return o}update(e,r){if(this._properties.size===0){Object.assign(e,r);return}const n=this._createAnimations(e,r);if(n.length)return rr.add(this._chart,n),!0}}function N8(t,e){const r=[],n=Object.keys(e);for(let o=0;o<n.length;o++){const a=t[n[o]];a&&a.active()&&r.push(a.wait())}return Promise.all(r)}function P8(t,e){if(!e)return;let r=t.options;if(!r){t.options=e;return}return r.$shared&&(t.options=r=Object.assign({},r,{$shared:!1,$animations:{}})),r}function Zd(t,e){const r=t&&t.options||{},n=r.reverse,o=r.min===void 0?e:0,a=r.max===void 0?e:0;return{start:n?a:o,end:n?o:a}}function O8(t,e,r){if(r===!1)return!1;const n=Zd(t,r),o=Zd(e,r);return{top:o.end,right:n.end,bottom:o.start,left:n.start}}function M8(t){let e,r,n,o;return be(t)?(e=t.top,r=t.right,n=t.bottom,o=t.left):e=r=n=o=t,{top:e,right:r,bottom:n,left:o}}function Jd(t,e){const r=[],n=t._getSortedDatasetMetas(e);let o,a;for(o=0,a=n.length;o<a;++o)r.push(n[o].index);return r}function eu(t,e,r,n){const o=t.keys,a=n.mode==="single";let i,s,l,c;if(e!==null){for(i=0,s=o.length;i<s;++i){if(l=+o[i],l===r){if(n.all)continue;break}c=t.values[l],Fe(c)&&(a||e===0||Dr(e)===Dr(c))&&(e+=c)}return e}}function $8(t){const e=Object.keys(t),r=new Array(e.length);let n,o,a;for(n=0,o=e.length;n<o;++n)a=e[n],r[n]={x:a,y:t[a]};return r}function tu(t,e){const r=t&&t.options.stacked;return r||r===void 0&&e.stack!==void 0}function F8(t,e,r){return`${t.id}.${e.id}.${r.stack||r.type}`}function z8(t){const{min:e,max:r,minDefined:n,maxDefined:o}=t.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:o?r:Number.POSITIVE_INFINITY}}function U8(t,e,r){const n=t[e]||(t[e]={});return n[r]||(n[r]={})}function ru(t,e,r){for(const n of e.getMatchingVisibleMetas("bar").reverse()){const o=t[n.index];if(r&&o>0||!r&&o<0)return n.index}return null}function nu(t,e){const{chart:r,_cachedMeta:n}=t,o=r._stacks||(r._stacks={}),{iScale:a,vScale:i,index:s}=n,l=a.axis,c=i.axis,d=F8(a,i,n),u=e.length;let f;for(let p=0;p<u;++p){const h=e[p],{[l]:g,[c]:b}=h,x=h._stacks||(h._stacks={});f=x[c]=U8(o,d,g),f[s]=b,f._top=ru(f,i,!0),f._bottom=ru(f,i,!1)}}function Qi(t,e){const r=t.scales;return Object.keys(r).filter(n=>r[n].axis===e).shift()}function V8(t,e){return Object.assign(Object.create(t),{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function K8(t,e,r){return Object.assign(Object.create(t),{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:r,index:e,mode:"default",type:"data"})}function Kn(t,e){const r=t.vScale&&t.vScale.axis;if(r){e=e||t._parsed;for(const n of e){const o=n._stacks;if(!o||o[r]===void 0||o[r][t.index]===void 0)return;delete o[r][t.index]}}}const Zi=t=>t==="reset"||t==="none",ou=(t,e)=>e?t:Object.assign({},t);class Zt{constructor(e,r){this.chart=e,this._ctx=e.ctx,this.index=r,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const e=this,r=e._cachedMeta;e.configure(),e.linkScales(),r._stacked=tu(r.vScale,r),e.addElements()}updateIndex(e){this.index!==e&&Kn(this._cachedMeta),this.index=e}linkScales(){const e=this,r=e.chart,n=e._cachedMeta,o=e.getDataset(),a=(f,p,h,g)=>f==="x"?p:f==="r"?g:h,i=n.xAxisID=ie(o.xAxisID,Qi(r,"x")),s=n.yAxisID=ie(o.yAxisID,Qi(r,"y")),l=n.rAxisID=ie(o.rAxisID,Qi(r,"r")),c=n.indexAxis,d=n.iAxisID=a(c,i,s,l),u=n.vAxisID=a(c,s,i,l);n.xScale=e.getScaleForId(i),n.yScale=e.getScaleForId(s),n.rScale=e.getScaleForId(l),n.iScale=e.getScaleForId(d),n.vScale=e.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const r=this._cachedMeta;return e===r.iScale?r.vScale:r.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Kd(this._data,this),e._stacked&&Kn(e)}_dataCheck(){const e=this,r=e.getDataset(),n=r.data||(r.data=[]),o=e._data;if(be(n))e._data=$8(n);else if(o!==n){if(o){Kd(o,e);const a=e._cachedMeta;Kn(a),a._parsed=[]}n&&Object.isExtensible(n)&&jR(n,e),e._syncList=[],e._data=n}}addElements(){const e=this,r=e._cachedMeta;e._dataCheck(),e.datasetElementType&&(r.dataset=new e.datasetElementType)}buildOrUpdateElements(e){const r=this,n=r._cachedMeta,o=r.getDataset();let a=!1;r._dataCheck();const i=n._stacked;n._stacked=tu(n.vScale,n),n.stack!==o.stack&&(a=!0,Kn(n),n.stack=o.stack),r._resyncElements(e),(a||i!==n._stacked)&&nu(r,n._parsed)}configure(){const e=this,r=e.chart.config,n=r.datasetScopeKeys(e._type),o=r.getOptionScopes(e.getDataset(),n,!0);e.options=r.createResolver(o,e.getContext()),e._parsing=e.options.parsing}parse(e,r){const n=this,{_cachedMeta:o,_data:a}=n,{iScale:i,_stacked:s}=o,l=i.axis;let c=e===0&&r===a.length?!0:o._sorted,d=e>0&&o._parsed[e-1],u,f,p;if(n._parsing===!1)o._parsed=a,o._sorted=!0,p=a;else{Be(a[e])?p=n.parseArrayData(o,a,e,r):be(a[e])?p=n.parseObjectData(o,a,e,r):p=n.parsePrimitiveData(o,a,e,r);const h=()=>f[l]===null||d&&f[l]<d[l];for(u=0;u<r;++u)o._parsed[u+e]=f=p[u],c&&(h()&&(c=!1),d=f);o._sorted=c}s&&nu(n,p)}parsePrimitiveData(e,r,n,o){const{iScale:a,vScale:i}=e,s=a.axis,l=i.axis,c=a.getLabels(),d=a===i,u=new Array(o);let f,p,h;for(f=0,p=o;f<p;++f)h=f+n,u[f]={[s]:d||a.parse(c[h],h),[l]:i.parse(r[h],h)};return u}parseArrayData(e,r,n,o){const{xScale:a,yScale:i}=e,s=new Array(o);let l,c,d,u;for(l=0,c=o;l<c;++l)d=l+n,u=r[d],s[l]={x:a.parse(u[0],d),y:i.parse(u[1],d)};return s}parseObjectData(e,r,n,o){const{xScale:a,yScale:i}=e,{xAxisKey:s="x",yAxisKey:l="y"}=this._parsing,c=new Array(o);let d,u,f,p;for(d=0,u=o;d<u;++d)f=d+n,p=r[f],c[d]={x:a.parse(Rr(p,s),f),y:i.parse(Rr(p,l),f)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,r,n){const o=this.chart,a=this._cachedMeta,i=r[e.axis],s={keys:Jd(o,!0),values:r._stacks[e.axis]};return eu(s,i,a.index,{mode:n})}updateRangeFromParsed(e,r,n,o){const a=n[r.axis];let i=a===null?NaN:a;const s=o&&n._stacks[r.axis];o&&s&&(o.values=s,e.min=Math.min(e.min,i),e.max=Math.max(e.max,i),i=eu(o,a,this._cachedMeta.index,{all:!0})),e.min=Math.min(e.min,i),e.max=Math.max(e.max,i)}getMinMax(e,r){const n=this,o=n._cachedMeta,a=o._parsed,i=o._sorted&&e===o.iScale,s=a.length,l=n._getOtherScale(e),c=r&&o._stacked&&{keys:Jd(n.chart,!0),values:null},d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:f}=z8(l);let p,h,g,b;function x(){return g=a[p],h=g[e.axis],b=g[l.axis],!Fe(h)||u>b||f<b}for(p=0;p<s&&!(!x()&&(n.updateRangeFromParsed(d,e,g,c),i));++p);if(i){for(p=s-1;p>=0;--p)if(!x()){n.updateRangeFromParsed(d,e,g,c);break}}return d}getAllParsedValues(e){const r=this._cachedMeta._parsed,n=[];let o,a,i;for(o=0,a=r.length;o<a;++o)i=r[o][e.axis],Fe(i)&&n.push(i);return n}getMaxOverflow(){return!1}getLabelAndValue(e){const r=this,n=r._cachedMeta,o=n.iScale,a=n.vScale,i=r.getParsed(e);return{label:o?""+o.getLabelForValue(i[o.axis]):"",value:a?""+a.getLabelForValue(i[a.axis]):""}}_update(e){const r=this,n=r._cachedMeta;r.configure(),r._cachedDataOpts={},r.update(e||"default"),n._clip=M8(ie(r.options.clip,O8(n.xScale,n.yScale,r.getMaxOverflow())))}update(e){}draw(){const e=this,r=e._ctx,n=e.chart,o=e._cachedMeta,a=o.data||[],i=n.chartArea,s=[],l=e._drawStart||0,c=e._drawCount||a.length-l;let d;for(o.dataset&&o.dataset.draw(r,i,l,c),d=l;d<l+c;++d){const u=a[d];u.active?s.push(u):u.draw(r,i)}for(d=0;d<s.length;++d)s[d].draw(r,i)}getStyle(e,r){const n=r?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,r,n){const o=this,a=o.getDataset();let i;if(e>=0&&e<o._cachedMeta.data.length){const s=o._cachedMeta.data[e];i=s.$context||(s.$context=K8(o.getContext(),e,s)),i.parsed=o.getParsed(e),i.raw=a.data[e],i.index=i.dataIndex=e}else i=o.$context||(o.$context=V8(o.chart.getContext(),o.index)),i.dataset=a,i.index=i.datasetIndex=o.index;return i.active=!!r,i.mode=n,i}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,r){return this._resolveElementOptions(this.dataElementType.id,r,e)}_resolveElementOptions(e,r="default",n){const o=this,a=r==="active",i=o._cachedDataOpts,s=e+"-"+r,l=i[s],c=o.enableOptionSharing&&Ot(n);if(l)return ou(l,c);const d=o.chart.config,u=d.datasetElementScopeKeys(o._type,e),f=a?[`${e}Hover`,"hover",e,""]:[e,""],p=d.getOptionScopes(o.getDataset(),u),h=Object.keys(ce.elements[e]),g=()=>o.getContext(n,a),b=d.resolveNamedOptions(p,h,g,f);return b.$shared&&(b.$shared=c,i[s]=Object.freeze(ou(b,c))),b}_resolveAnimations(e,r,n){const o=this,a=o.chart,i=o._cachedDataOpts,s=`animation-${r}`,l=i[s];if(l)return l;let c;if(a.options.animation!==!1){const u=o.chart.config,f=u.datasetAnimationScopeKeys(o._type,r),p=u.getOptionScopes(o.getDataset(),f);c=u.createResolver(p,o.getContext(e,n,r))}const d=new u0(a,c&&c.animations);return c&&c._cacheable&&(i[s]=Object.freeze(d)),d}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,r){return!r||Zi(e)||this.chart._animationsDisabled}updateElement(e,r,n,o){Zi(o)?Object.assign(e,n):this._resolveAnimations(r,o).update(e,n)}updateSharedOptions(e,r,n){e&&!Zi(r)&&this._resolveAnimations(void 0,r).update(e,n)}_setStyle(e,r,n,o){e.active=o;const a=this.getStyle(r,o);this._resolveAnimations(r,n,o).update(e,{options:!o&&this.getSharedOptions(a)||a})}removeHoverStyle(e,r,n){this._setStyle(e,n,"active",!1)}setHoverStyle(e,r,n){this._setStyle(e,n,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const r=this,n=r._data,o=r._cachedMeta.data;for(const[l,c,d]of r._syncList)r[l](c,d);r._syncList=[];const a=o.length,i=n.length,s=Math.min(i,a);s&&r.parse(0,s),i>a?r._insertElements(a,i-a,e):i<a&&r._removeElements(i,a-i)}_insertElements(e,r,n=!0){const o=this,a=o._cachedMeta,i=a.data,s=e+r;let l;const c=d=>{for(d.length+=r,l=d.length-1;l>=s;l--)d[l]=d[l-r]};for(c(i),l=e;l<s;++l)i[l]=new o.dataElementType;o._parsing&&c(a._parsed),o.parse(e,r),n&&o.updateElements(i,e,r,"reset")}updateElements(e,r,n,o){}_removeElements(e,r){const n=this,o=n._cachedMeta;if(n._parsing){const a=o._parsed.splice(e,r);o._stacked&&Kn(o,a)}o.data.splice(e,r)}_onDataPush(){const e=arguments.length;this._syncList.push(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._syncList.push(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._syncList.push(["_removeElements",0,1])}_onDataSplice(e,r){this._syncList.push(["_removeElements",e,r]),this._syncList.push(["_insertElements",e,arguments.length-2])}_onDataUnshift(){this._syncList.push(["_insertElements",0,arguments.length])}}Zt.defaults={};Zt.prototype.datasetElementType=null;Zt.prototype.dataElementType=null;function H8(t){if(!t._cache.$bar){const e=t.getMatchingVisibleMetas("bar");let r=[];for(let n=0,o=e.length;n<o;n++)r=r.concat(e[n].controller.getAllParsedValues(t));t._cache.$bar=Zp(r.sort((n,o)=>n-o))}return t._cache.$bar}function W8(t){const e=H8(t);let r=t._length,n,o,a,i;const s=()=>{a===32767||a===-32768||(Ot(i)&&(r=Math.min(r,Math.abs(a-i)||r)),i=a)};for(n=0,o=e.length;n<o;++n)a=t.getPixelForValue(e[n]),s();for(i=void 0,n=0,o=t.ticks.length;n<o;++n)a=t.getPixelForTick(n),s();return r}function j8(t,e,r,n){const o=r.barThickness;let a,i;return fe(o)?(a=e.min*r.categoryPercentage,i=r.barPercentage):(a=o*n,i=1),{chunk:a/n,ratio:i,start:e.pixels[t]-a/2}}function G8(t,e,r,n){const o=e.pixels,a=o[t];let i=t>0?o[t-1]:null,s=t<o.length-1?o[t+1]:null;const l=r.categoryPercentage;i===null&&(i=a-(s===null?e.end-e.start:s-a)),s===null&&(s=a+a-i);const c=a-(a-Math.min(i,s))/2*l;return{chunk:Math.abs(s-i)/2*l/n,ratio:r.barPercentage,start:c}}function q8(t,e,r,n){const o=r.parse(t[0],n),a=r.parse(t[1],n),i=Math.min(o,a),s=Math.max(o,a);let l=i,c=s;Math.abs(i)>Math.abs(s)&&(l=s,c=i),e[r.axis]=c,e._custom={barStart:l,barEnd:c,start:o,end:a,min:i,max:s}}function f0(t,e,r,n){return Be(t)?q8(t,e,r,n):e[r.axis]=r.parse(t,n),e}function au(t,e,r,n){const o=t.iScale,a=t.vScale,i=o.getLabels(),s=o===a,l=[];let c,d,u,f;for(c=r,d=r+n;c<d;++c)f=e[c],u={},u[o.axis]=s||o.parse(i[c],c),l.push(f0(f,u,a,c));return l}function Ji(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}class li extends Zt{parsePrimitiveData(e,r,n,o){return au(e,r,n,o)}parseArrayData(e,r,n,o){return au(e,r,n,o)}parseObjectData(e,r,n,o){const{iScale:a,vScale:i}=e,{xAxisKey:s="x",yAxisKey:l="y"}=this._parsing,c=a.axis==="x"?s:l,d=i.axis==="x"?s:l,u=[];let f,p,h,g;for(f=n,p=n+o;f<p;++f)g=r[f],h={},h[a.axis]=a.parse(Rr(g,c),f),u.push(f0(Rr(g,d),h,i,f));return u}updateRangeFromParsed(e,r,n,o){super.updateRangeFromParsed(e,r,n,o);const a=n._custom;a&&r===this._cachedMeta.vScale&&(e.min=Math.min(e.min,a.min),e.max=Math.max(e.max,a.max))}getLabelAndValue(e){const r=this,n=r._cachedMeta,{iScale:o,vScale:a}=n,i=r.getParsed(e),s=i._custom,l=Ji(s)?"["+s.start+", "+s.end+"]":""+a.getLabelForValue(i[a.axis]);return{label:""+o.getLabelForValue(i[o.axis]),value:l}}initialize(){const e=this;e.enableOptionSharing=!0,super.initialize();const r=e._cachedMeta;r.stack=e.getDataset().stack}update(e){const r=this,n=r._cachedMeta;r.updateElements(n.data,0,n.data.length,e)}updateElements(e,r,n,o){const a=this,i=o==="reset",s=a._cachedMeta.vScale,l=s.getBasePixel(),c=s.isHorizontal(),d=a._getRuler(),u=a.resolveDataElementOptions(r,o),f=a.getSharedOptions(u),p=a.includeOptions(o,f);a.updateSharedOptions(f,o,u);for(let h=r;h<r+n;h++){const g=a.getParsed(h),b=i||fe(g[s.axis])?{base:l,head:l}:a._calculateBarValuePixels(h),x=a._calculateBarIndexPixels(h,d),C=(g._stacks||{})[s.axis],k={horizontal:c,base:b.base,enableBorderRadius:!C||Ji(g._custom)||a.index===C._top||a.index===C._bottom,x:c?b.head:x.center,y:c?x.center:b.head,height:c?x.size:void 0,width:c?void 0:x.size};p&&(k.options=f||a.resolveDataElementOptions(h,o)),a.updateElement(e[h],h,k,o)}}_getStacks(e,r){const n=this,a=n._cachedMeta.iScale,i=a.getMatchingVisibleMetas(n._type),s=a.options.stacked,l=i.length,c=[];let d,u;for(d=0;d<l;++d){if(u=i[d],typeof r<"u"){const f=u.controller.getParsed(r)[u.controller._cachedMeta.vScale.axis];if(fe(f)||isNaN(f))continue}if((s===!1||c.indexOf(u.stack)===-1||s===void 0&&u.stack===void 0)&&c.push(u.stack),u.index===e)break}return c.length||c.push(void 0),c}_getStackCount(e){return this._getStacks(void 0,e).length}_getStackIndex(e,r,n){const o=this._getStacks(e,n),a=r!==void 0?o.indexOf(r):-1;return a===-1?o.length-1:a}_getRuler(){const e=this,r=e.options,n=e._cachedMeta,o=n.iScale,a=[];let i,s;for(i=0,s=n.data.length;i<s;++i)a.push(o.getPixelForValue(e.getParsed(i)[o.axis],i));const l=r.barThickness;return{min:l||W8(o),pixels:a,start:o._startPixel,end:o._endPixel,stackCount:e._getStackCount(),scale:o,grouped:r.grouped,ratio:l?1:r.categoryPercentage*r.barPercentage}}_calculateBarValuePixels(e){const r=this,{vScale:n,_stacked:o}=r._cachedMeta,{base:a,minBarLength:i}=r.options,s=r.getParsed(e),l=s._custom,c=Ji(l);let d=s[n.axis],u=0,f=o?r.applyStack(n,s,o):d,p,h;f!==d&&(u=f-d,f=d),c&&(d=l.barStart,f=l.barEnd-l.barStart,d!==0&&Dr(d)!==Dr(l.barEnd)&&(u=0),u+=d);const g=!fe(a)&&!c?a:u;let b=n.getPixelForValue(g);this.chart.getDataVisibility(e)?p=n.getPixelForValue(u+f):p=b,h=p-b,i!==void 0&&Math.abs(h)<i&&(h=h<0?-i:i,d===0&&(b-=h/2),p=b+h);const x=a||0;if(b===n.getPixelForValue(x)){const C=n.getLineWidthForValue(x)/2;h>0?(b+=C,h-=C):h<0&&(b-=C,h+=C)}return{size:h,base:b,head:p,center:p+h/2}}_calculateBarIndexPixels(e,r){const n=this,o=r.scale,a=n.options,i=a.skipNull,s=ie(a.maxBarThickness,1/0);let l,c;if(r.grouped){const d=i?n._getStackCount(e):r.stackCount,u=a.barThickness==="flex"?G8(e,r,a,d):j8(e,r,a,d),f=n._getStackIndex(n.index,n._cachedMeta.stack,i?e:void 0);l=u.start+u.chunk*f+u.chunk/2,c=Math.min(s,u.chunk*u.ratio)}else l=o.getPixelForValue(n.getParsed(e)[o.axis],e),c=Math.min(s,r.min*r.ratio);return{base:l-c/2,head:l+c/2,center:l,size:c}}draw(){const e=this,r=e.chart,n=e._cachedMeta,o=n.vScale,a=n.data,i=a.length;let s=0;for(Ro(r.ctx,r.chartArea);s<i;++s)e.getParsed(s)[o.axis]!==null&&a[s].draw(e._ctx);Do(r.ctx)}}li.id="bar";li.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};li.overrides={interaction:{mode:"index"},scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class ci extends Zt{initialize(){this.enableOptionSharing=!0,super.initialize()}parseObjectData(e,r,n,o){const{xScale:a,yScale:i}=e,{xAxisKey:s="x",yAxisKey:l="y"}=this._parsing,c=[];let d,u,f;for(d=n,u=n+o;d<u;++d)f=r[d],c.push({x:a.parse(Rr(f,s),d),y:i.parse(Rr(f,l),d),_custom:f&&f.r&&+f.r});return c}getMaxOverflow(){const{data:e,_parsed:r}=this._cachedMeta;let n=0;for(let o=e.length-1;o>=0;--o)n=Math.max(n,e[o].size()/2,r[o]._custom);return n>0&&n}getLabelAndValue(e){const r=this,n=r._cachedMeta,{xScale:o,yScale:a}=n,i=r.getParsed(e),s=o.getLabelForValue(i.x),l=a.getLabelForValue(i.y),c=i._custom;return{label:n.label,value:"("+s+", "+l+(c?", "+c:"")+")"}}update(e){const r=this,n=r._cachedMeta.data;r.updateElements(n,0,n.length,e)}updateElements(e,r,n,o){const a=this,i=o==="reset",{iScale:s,vScale:l}=a._cachedMeta,c=a.resolveDataElementOptions(r,o),d=a.getSharedOptions(c),u=a.includeOptions(o,d),f=s.axis,p=l.axis;for(let h=r;h<r+n;h++){const g=e[h],b=!i&&a.getParsed(h),x={},C=x[f]=i?s.getPixelForDecimal(.5):s.getPixelForValue(b[f]),k=x[p]=i?l.getBasePixel():l.getPixelForValue(b[p]);x.skip=isNaN(C)||isNaN(k),u&&(x.options=a.resolveDataElementOptions(h,o),i&&(x.options.radius=0)),a.updateElement(g,h,x,o)}a.updateSharedOptions(d,o,c)}resolveDataElementOptions(e,r){const n=this.getParsed(e);let o=super.resolveDataElementOptions(e,r);o.$shared&&(o=Object.assign({},o,{$shared:!1}));const a=o.radius;return r!=="active"&&(o.radius=0),o.radius+=ie(n&&n._custom,a),o}}ci.id="bubble";ci.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};ci.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title(){return""}}}}};function Y8(t,e,r){let n=1,o=1,a=0,i=0;if(e<xe){const s=t,l=s+e,c=Math.cos(s),d=Math.sin(s),u=Math.cos(l),f=Math.sin(l),p=(k,B,_)=>Da(k,s,l,!0)?1:Math.max(B,B*r,_,_*r),h=(k,B,_)=>Da(k,s,l,!0)?-1:Math.min(B,B*r,_,_*r),g=p(0,c,u),b=p($e,d,f),x=h(Oe,c,u),C=h(Oe+$e,d,f);n=(g-x)/2,o=(b-C)/2,a=-(g+x)/2,i=-(b+C)/2}return{ratioX:n,ratioY:o,offsetX:a,offsetY:i}}class No extends Zt{constructor(e,r){super(e,r),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,r){const n=this.getDataset().data,o=this._cachedMeta;let a,i;for(a=e,i=e+r;a<i;++a)o._parsed[a]=+n[a]}_getRotation(){return Pt(this.options.rotation-90)}_getCircumference(){return Pt(this.options.circumference)}_getRotationExtents(){let e=xe,r=-xe;const n=this;for(let o=0;o<n.chart.data.datasets.length;++o)if(n.chart.isDatasetVisible(o)){const a=n.chart.getDatasetMeta(o).controller,i=a._getRotation(),s=a._getCircumference();e=Math.min(e,i),r=Math.max(r,i+s)}return{rotation:e,circumference:r-e}}update(e){const r=this,n=r.chart,{chartArea:o}=n,a=r._cachedMeta,i=a.data,s=r.getMaxBorderWidth()+r.getMaxOffset(i),l=Math.max((Math.min(o.width,o.height)-s)/2,0),c=Math.min(rR(r.options.cutout,l),1),d=r._getRingWeight(r.index),{circumference:u,rotation:f}=r._getRotationExtents(),{ratioX:p,ratioY:h,offsetX:g,offsetY:b}=Y8(f,u,c),x=(o.width-s)/p,C=(o.height-s)/h,k=Math.max(Math.min(x,C)/2,0),B=zs(r.options.radius,k),_=Math.max(B*c,0),T=(B-_)/r._getVisibleDatasetWeightTotal();r.offsetX=g*B,r.offsetY=b*B,a.total=r.calculateTotal(),r.outerRadius=B-T*r._getRingWeightOffset(r.index),r.innerRadius=Math.max(r.outerRadius-T*d,0),r.updateElements(i,0,i.length,e)}_circumference(e,r){const n=this,o=n.options,a=n._cachedMeta,i=n._getCircumference();return r&&o.animation.animateRotate||!this.chart.getDataVisibility(e)||a._parsed[e]===null?0:n.calculateCircumference(a._parsed[e]*i/xe)}updateElements(e,r,n,o){const a=this,i=o==="reset",s=a.chart,l=s.chartArea,d=s.options.animation,u=(l.left+l.right)/2,f=(l.top+l.bottom)/2,p=i&&d.animateScale,h=p?0:a.innerRadius,g=p?0:a.outerRadius,b=a.resolveDataElementOptions(r,o),x=a.getSharedOptions(b),C=a.includeOptions(o,x);let k=a._getRotation(),B;for(B=0;B<r;++B)k+=a._circumference(B,i);for(B=r;B<r+n;++B){const _=a._circumference(B,i),T=e[B],R={x:u+a.offsetX,y:f+a.offsetY,startAngle:k,endAngle:k+_,circumference:_,outerRadius:g,innerRadius:h};C&&(R.options=x||a.resolveDataElementOptions(B,o)),k+=_,a.updateElement(T,B,R,o)}a.updateSharedOptions(x,o,b)}calculateTotal(){const e=this._cachedMeta,r=e.data;let n=0,o;for(o=0;o<r.length;o++){const a=e._parsed[o];a!==null&&!isNaN(a)&&this.chart.getDataVisibility(o)&&(n+=Math.abs(a))}return n}calculateCircumference(e){const r=this._cachedMeta.total;return r>0&&!isNaN(e)?xe*(Math.abs(e)/r):0}getLabelAndValue(e){const r=this,n=r._cachedMeta,o=r.chart,a=o.data.labels||[],i=Lo(n._parsed[e],o.options.locale);return{label:a[e]||"",value:i}}getMaxBorderWidth(e){const r=this;let n=0;const o=r.chart;let a,i,s,l,c;if(!e){for(a=0,i=o.data.datasets.length;a<i;++a)if(o.isDatasetVisible(a)){s=o.getDatasetMeta(a),e=s.data,l=s.controller,l!==r&&l.configure();break}}if(!e)return 0;for(a=0,i=e.length;a<i;++a)c=l.resolveDataElementOptions(a),c.borderAlign!=="inner"&&(n=Math.max(n,c.borderWidth||0,c.hoverBorderWidth||0));return n}getMaxOffset(e){let r=0;for(let n=0,o=e.length;n<o;++n){const a=this.resolveDataElementOptions(n);r=Math.max(r,a.offset||0,a.hoverOffset||0)}return r}_getRingWeightOffset(e){let r=0;for(let n=0;n<e;++n)this.chart.isDatasetVisible(n)&&(r+=this._getRingWeight(n));return r}_getRingWeight(e){return Math.max(ie(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}No.id="doughnut";No.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",indexAxis:"r"};No.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((r,n)=>{const a=t.getDatasetMeta(0).controller.getStyle(n);return{text:r,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,lineWidth:a.borderWidth,hidden:!t.getDataVisibility(n),index:n}}):[]}},onClick(t,e,r){r.chart.toggleDataVisibility(e.index),r.chart.update()}},tooltip:{callbacks:{title(){return""},label(t){let e=t.label;const r=": "+t.formattedValue;return Be(e)?(e=e.slice(),e[0]+=r):e+=r,e}}}}};class Po extends Zt{initialize(){this.enableOptionSharing=!0,super.initialize()}update(e){const r=this,n=r._cachedMeta,{dataset:o,data:a=[],_dataset:i}=n,s=r.chart._animationsDisabled;let{start:l,count:c}=X8(n,a,s);r._drawStart=l,r._drawCount=c,Q8(n)&&(l=0,c=a.length),o._decimated=!!i._decimated,o.points=a;const d=r.resolveDatasetElementOptions(e);r.options.showLine||(d.borderWidth=0),d.segment=r.options.segment,r.updateElement(o,void 0,{animated:!s,options:d},e),r.updateElements(a,l,c,e)}updateElements(e,r,n,o){const a=this,i=o==="reset",{iScale:s,vScale:l,_stacked:c}=a._cachedMeta,d=a.resolveDataElementOptions(r,o),u=a.getSharedOptions(d),f=a.includeOptions(o,u),p=s.axis,h=l.axis,g=a.options.spanGaps,b=Bn(g)?g:Number.POSITIVE_INFINITY,x=a.chart._animationsDisabled||i||o==="none";let C=r>0&&a.getParsed(r-1);for(let k=r;k<r+n;++k){const B=e[k],_=a.getParsed(k),T=x?B:{},R=fe(_[h]),D=T[p]=s.getPixelForValue(_[p],k),O=T[h]=i||R?l.getBasePixel():l.getPixelForValue(c?a.applyStack(l,_,c):_[h],k);T.skip=isNaN(D)||isNaN(O)||R,T.stop=k>0&&_[p]-C[p]>b,T.parsed=_,f&&(T.options=u||a.resolveDataElementOptions(k,o)),x||a.updateElement(B,k,T,o),C=_}a.updateSharedOptions(u,o,d)}getMaxOverflow(){const e=this,r=e._cachedMeta,n=r.dataset,o=n.options&&n.options.borderWidth||0,a=r.data||[];if(!a.length)return o;const i=a[0].size(e.resolveDataElementOptions(0)),s=a[a.length-1].size(e.resolveDataElementOptions(a.length-1));return Math.max(o,i,s)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}Po.id="line";Po.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};Po.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};function X8(t,e,r){const n=e.length;let o=0,a=n;if(t._sorted){const{iScale:i,_parsed:s}=t,l=i.axis,{min:c,max:d,minDefined:u,maxDefined:f}=i.getUserBounds();u&&(o=bt(Math.min(Wr(s,i.axis,c).lo,r?n:Wr(e,l,i.getPixelForValue(c)).lo),0,n-1)),f?a=bt(Math.max(Wr(s,i.axis,d).hi+1,r?0:Wr(e,l,i.getPixelForValue(d)).hi+1),o,n)-o:a=n-o}return{start:o,count:a}}function Q8(t){const{xScale:e,yScale:r,_scaleRanges:n}=t,o={xmin:e.min,xmax:e.max,ymin:r.min,ymax:r.max};if(!n)return t._scaleRanges=o,!0;const a=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==r.min||n.ymax!==r.max;return Object.assign(n,o),a}class di extends Zt{constructor(e,r){super(e,r),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){const r=this,n=r._cachedMeta,o=r.chart,a=o.data.labels||[],i=Lo(n._parsed[e].r,o.options.locale);return{label:a[e]||"",value:i}}update(e){const r=this._cachedMeta.data;this._updateRadius(),this.updateElements(r,0,r.length,e)}_updateRadius(){const e=this,r=e.chart,n=r.chartArea,o=r.options,a=Math.min(n.right-n.left,n.bottom-n.top),i=Math.max(a/2,0),s=Math.max(o.cutoutPercentage?i/100*o.cutoutPercentage:1,0),l=(i-s)/r.getVisibleDatasetCount();e.outerRadius=i-l*e.index,e.innerRadius=e.outerRadius-l}updateElements(e,r,n,o){const a=this,i=o==="reset",s=a.chart,l=a.getDataset(),d=s.options.animation,u=a._cachedMeta.rScale,f=u.xCenter,p=u.yCenter,h=u.getIndexAngle(0)-.5*Oe;let g=h,b;const x=360/a.countVisibleElements();for(b=0;b<r;++b)g+=a._computeAngle(b,o,x);for(b=r;b<r+n;b++){const C=e[b];let k=g,B=g+a._computeAngle(b,o,x),_=s.getDataVisibility(b)?u.getDistanceFromCenterForValue(l.data[b]):0;g=B,i&&(d.animateScale&&(_=0),d.animateRotate&&(k=B=h));const T={x:f,y:p,innerRadius:0,outerRadius:_,startAngle:k,endAngle:B,options:a.resolveDataElementOptions(b,o)};a.updateElement(C,b,T,o)}}countVisibleElements(){const e=this.getDataset(),r=this._cachedMeta;let n=0;return r.data.forEach((o,a)=>{!isNaN(e.data[a])&&this.chart.getDataVisibility(a)&&n++}),n}_computeAngle(e,r,n){return this.chart.getDataVisibility(e)?Pt(this.resolveDataElementOptions(e,r).angle||n):0}}di.id="polarArea";di.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};di.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((r,n)=>{const a=t.getDatasetMeta(0).controller.getStyle(n);return{text:r,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,lineWidth:a.borderWidth,hidden:!t.getDataVisibility(n),index:n}}):[]}},onClick(t,e,r){r.chart.toggleDataVisibility(e.index),r.chart.update()}},tooltip:{callbacks:{title(){return""},label(t){return t.chart.data.labels[t.dataIndex]+": "+t.formattedValue}}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class Vl extends No{}Vl.id="pie";Vl.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class ui extends Zt{getLabelAndValue(e){const r=this,n=r._cachedMeta.vScale,o=r.getParsed(e);return{label:n.getLabels()[e],value:""+n.getLabelForValue(o[n.axis])}}update(e){const r=this,n=r._cachedMeta,o=n.dataset,a=n.data||[],i=n.iScale.getLabels();if(o.points=a,e!=="resize"){const s=r.resolveDatasetElementOptions(e);r.options.showLine||(s.borderWidth=0);const l={_loop:!0,_fullLoop:i.length===a.length,options:s};r.updateElement(o,void 0,l,e)}r.updateElements(a,0,a.length,e)}updateElements(e,r,n,o){const a=this,i=a.getDataset(),s=a._cachedMeta.rScale,l=o==="reset";for(let c=r;c<r+n;c++){const d=e[c],u=a.resolveDataElementOptions(c,o),f=s.getPointPositionForValue(c,i.data[c]),p=l?s.xCenter:f.x,h=l?s.yCenter:f.y,g={x:p,y:h,angle:f.angle,skip:isNaN(p)||isNaN(h),options:u};a.updateElement(d,c,g,o)}}}ui.id="radar";ui.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};ui.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class fi extends Po{}fi.id="scatter";fi.defaults={showLine:!1,fill:!1};fi.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title(){return""},label(t){return"("+t.label+", "+t.formattedValue+")"}}}},scales:{x:{type:"linear"},y:{type:"linear"}}};var Z8=Object.freeze({__proto__:null,BarController:li,BubbleController:ci,DoughnutController:No,LineController:Po,PolarAreaController:di,PieController:Vl,RadarController:ui,ScatterController:fi});function $r(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Ws{constructor(e){this.options=e||{}}formats(){return $r()}parse(e,r){return $r()}format(e,r){return $r()}add(e,r,n){return $r()}diff(e,r,n){return $r()}startOf(e,r,n){return $r()}endOf(e,r){return $r()}}Ws.override=function(t){Object.assign(Ws.prototype,t)};var J8={_date:Ws};function Zn(t,e){return"native"in t?{x:t.x,y:t.y}:a0(t,e)}function e3(t,e){const r=t.getSortedVisibleDatasetMetas();let n,o,a;for(let i=0,s=r.length;i<s;++i){({index:n,data:o}=r[i]);for(let l=0,c=o.length;l<c;++l)a=o[l],a.skip||e(a,n,l)}}function t3(t,e,r,n){const{controller:o,data:a,_sorted:i}=t,s=o._cachedMeta.iScale;if(s&&e===s.axis&&i&&a.length){const l=s._reversePixels?HR:Wr;if(n){if(o._sharedOptions){const c=a[0],d=typeof c.getRange=="function"&&c.getRange(e);if(d){const u=l(a,e,r-d),f=l(a,e,r+d);return{lo:u.lo,hi:f.hi}}}}else return l(a,e,r)}return{lo:0,hi:a.length-1}}function p0(t,e,r,n,o){const a=t.getSortedVisibleDatasetMetas(),i=r[e];for(let s=0,l=a.length;s<l;++s){const{index:c,data:d}=a[s],{lo:u,hi:f}=t3(a[s],e,i,o);for(let p=u;p<=f;++p){const h=d[p];h.skip||n(h,c,p)}}}function r3(t){const e=t.indexOf("x")!==-1,r=t.indexOf("y")!==-1;return function(n,o){const a=e?Math.abs(n.x-o.x):0,i=r?Math.abs(n.y-o.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(i,2))}}function es(t,e,r,n){const o=[];return An(e,t.chartArea,t._minPadding)&&p0(t,r,e,function(i,s,l){i.inRange(e.x,e.y,n)&&o.push({element:i,datasetIndex:s,index:l})},!0),o}function ts(t,e,r,n,o){const a=r3(r);let i=Number.POSITIVE_INFINITY,s=[];return An(e,t.chartArea,t._minPadding)&&p0(t,r,e,function(c,d,u){if(n&&!c.inRange(e.x,e.y,o))return;const f=c.getCenterPoint(o);if(!An(f,t.chartArea,t._minPadding))return;const p=a(e,f);p<i?(s=[{element:c,datasetIndex:d,index:u}],i=p):p===i&&s.push({element:c,datasetIndex:d,index:u})}),s}function iu(t,e,r,n){const o=Zn(e,t),a=[],i=r.axis,s=i==="x"?"inXRange":"inYRange";let l=!1;return e3(t,(c,d,u)=>{c[s](o[i],n)&&a.push({element:c,datasetIndex:d,index:u}),c.inRange(o.x,o.y,n)&&(l=!0)}),r.intersect&&!l?[]:a}var n3={modes:{index(t,e,r,n){const o=Zn(e,t),a=r.axis||"x",i=r.intersect?es(t,o,a,n):ts(t,o,a,!1,n),s=[];return i.length?(t.getSortedVisibleDatasetMetas().forEach(l=>{const c=i[0].index,d=l.data[c];d&&!d.skip&&s.push({element:d,datasetIndex:l.index,index:c})}),s):[]},dataset(t,e,r,n){const o=Zn(e,t),a=r.axis||"xy";let i=r.intersect?es(t,o,a,n):ts(t,o,a,!1,n);if(i.length>0){const s=i[0].datasetIndex,l=t.getDatasetMeta(s).data;i=[];for(let c=0;c<l.length;++c)i.push({element:l[c],datasetIndex:s,index:c})}return i},point(t,e,r,n){const o=Zn(e,t),a=r.axis||"xy";return es(t,o,a,n)},nearest(t,e,r,n){const o=Zn(e,t),a=r.axis||"xy";return ts(t,o,a,r.intersect,n)},x(t,e,r,n){return r.axis="x",iu(t,e,r,n)},y(t,e,r,n){return r.axis="y",iu(t,e,r,n)}}};const o3=["left","top","right","bottom"];function Hn(t,e){return t.filter(r=>r.pos===e)}function su(t,e){return t.filter(r=>o3.indexOf(r.pos)===-1&&r.box.axis===e)}function Wn(t,e){return t.sort((r,n)=>{const o=e?n:r,a=e?r:n;return o.weight===a.weight?o.index-a.index:o.weight-a.weight})}function a3(t){const e=[];let r,n,o;for(r=0,n=(t||[]).length;r<n;++r)o=t[r],e.push({index:r,box:o,pos:o.position,horizontal:o.isHorizontal(),weight:o.weight});return e}function i3(t,e){let r,n,o;for(r=0,n=t.length;r<n;++r)o=t[r],o.horizontal?(o.width=o.box.fullSize&&e.availableWidth,o.height=e.hBoxMaxHeight):(o.width=e.vBoxMaxWidth,o.height=o.box.fullSize&&e.availableHeight)}function s3(t){const e=a3(t),r=Wn(e.filter(c=>c.box.fullSize),!0),n=Wn(Hn(e,"left"),!0),o=Wn(Hn(e,"right")),a=Wn(Hn(e,"top"),!0),i=Wn(Hn(e,"bottom")),s=su(e,"x"),l=su(e,"y");return{fullSize:r,leftAndTop:n.concat(a),rightAndBottom:o.concat(l).concat(i).concat(s),chartArea:Hn(e,"chartArea"),vertical:n.concat(o).concat(l),horizontal:a.concat(i).concat(s)}}function lu(t,e,r,n){return Math.max(t[r],e[r])+Math.max(t[n],e[n])}function h0(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function l3(t,e,r){const n=r.box,o=t.maxPadding;be(r.pos)||(r.size&&(t[r.pos]-=r.size),r.size=r.horizontal?n.height:n.width,t[r.pos]+=r.size),n.getPadding&&h0(o,n.getPadding());const a=Math.max(0,e.outerWidth-lu(o,t,"left","right")),i=Math.max(0,e.outerHeight-lu(o,t,"top","bottom")),s=a!==t.w,l=i!==t.h;return t.w=a,t.h=i,r.horizontal?{same:s,other:l}:{same:l,other:s}}function c3(t){const e=t.maxPadding;function r(n){const o=Math.max(e[n]-t[n],0);return t[n]+=o,o}t.y+=r("top"),t.x+=r("left"),r("right"),r("bottom")}function d3(t,e){const r=e.maxPadding;function n(o){const a={left:0,top:0,right:0,bottom:0};return o.forEach(i=>{a[i]=Math.max(e[i],r[i])}),a}return n(t?["left","right"]:["top","bottom"])}function Jn(t,e,r){const n=[];let o,a,i,s,l,c;for(o=0,a=t.length,l=0;o<a;++o){i=t[o],s=i.box,s.update(i.width||e.w,i.height||e.h,d3(i.horizontal,e));const{same:d,other:u}=l3(e,r,i);l|=d&&n.length,c=c||u,s.fullSize||n.push(i)}return l&&Jn(n,e,r)||c}function cu(t,e,r){const n=r.padding;let o=e.x,a=e.y,i,s,l,c;for(i=0,s=t.length;i<s;++i)l=t[i],c=l.box,l.horizontal?(c.left=c.fullSize?n.left:e.left,c.right=c.fullSize?r.outerWidth-n.right:e.left+e.w,c.top=a,c.bottom=a+c.height,c.width=c.right-c.left,a=c.bottom):(c.left=o,c.right=o+c.width,c.top=c.fullSize?n.top:e.top,c.bottom=c.fullSize?r.outerHeight-n.right:e.top+e.h,c.height=c.bottom-c.top,o=c.right);e.x=o,e.y=a}ce.set("layout",{padding:{top:0,right:0,bottom:0,left:0}});var Bt={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(r){e.draw(r)}}]},t.boxes.push(e)},removeBox(t,e){const r=t.boxes?t.boxes.indexOf(e):-1;r!==-1&&t.boxes.splice(r,1)},configure(t,e,r){e.fullSize=r.fullSize,e.position=r.position,e.weight=r.weight},update(t,e,r,n){if(!t)return;const o=pt(t.options.layout.padding),a=Math.max(e-o.width,0),i=Math.max(r-o.height,0),s=s3(t.boxes),l=s.vertical,c=s.horizontal;ve(t.boxes,h=>{typeof h.beforeLayout=="function"&&h.beforeLayout()});const d=l.reduce((h,g)=>g.box.options&&g.box.options.display===!1?h:h+1,0)||1,u=Object.freeze({outerWidth:e,outerHeight:r,padding:o,availableWidth:a,availableHeight:i,vBoxMaxWidth:a/2/d,hBoxMaxHeight:i/2}),f=Object.assign({},o);h0(f,pt(n));const p=Object.assign({maxPadding:f,w:a,h:i,x:o.left,y:o.top},o);i3(l.concat(c),u),Jn(s.fullSize,p,u),Jn(l,p,u),Jn(c,p,u)&&Jn(l,p,u),c3(p),cu(s.leftAndTop,p,u),p.x+=p.w,p.y+=p.h,cu(s.rightAndBottom,p,u),t.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},ve(s.chartArea,h=>{const g=h.box;Object.assign(g,t.chartArea),g.update(p.w,p.h)})}};class g0{acquireContext(e,r){}releaseContext(e){return!1}addEventListener(e,r,n){}removeEventListener(e,r,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,r,n,o){return r=Math.max(0,r||e.width),n=n||e.height,{width:r,height:Math.max(0,o?Math.floor(r/o):n)}}isAttached(e){return!0}}class u3 extends g0{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}}const da="$chartjs",f3={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},du=t=>t===null||t==="";function p3(t,e){const r=t.style,n=t.getAttribute("height"),o=t.getAttribute("width");if(t[da]={initial:{height:n,width:o,style:{display:r.display,height:r.height,width:r.width}}},r.display=r.display||"block",r.boxSizing=r.boxSizing||"border-box",du(o)){const a=Gd(t,"width");a!==void 0&&(t.width=a)}if(du(n))if(t.style.height==="")t.height=t.width/(e||2);else{const a=Gd(t,"height");a!==void 0&&(t.height=a)}return t}const b0=g8?{passive:!0}:!1;function h3(t,e,r){t.addEventListener(e,r,b0)}function g3(t,e,r){t.canvas.removeEventListener(e,r,b0)}function b3(t,e){const r=f3[t.type]||t.type,{x:n,y:o}=a0(t,e);return{type:r,chart:e,native:t,x:n!==void 0?n:null,y:o!==void 0?o:null}}function m3(t,e,r){const n=t.canvas,a=n&&tn(n)||n,i=new MutationObserver(s=>{const l=tn(a);s.forEach(c=>{for(let d=0;d<c.addedNodes.length;d++){const u=c.addedNodes[d];(u===a||u===l)&&r(c.target)}})});return i.observe(document,{childList:!0,subtree:!0}),i}function v3(t,e,r){const n=t.canvas,o=n&&tn(n);if(!o)return;const a=new MutationObserver(i=>{i.forEach(s=>{for(let l=0;l<s.removedNodes.length;l++)if(s.removedNodes[l]===n){r();break}})});return a.observe(o,{childList:!0}),a}const wo=new Map;let uu=0;function m0(){const t=window.devicePixelRatio;t!==uu&&(uu=t,wo.forEach((e,r)=>{r.currentDevicePixelRatio!==t&&e()}))}function y3(t,e){wo.size||window.addEventListener("resize",m0),wo.set(t,e)}function x3(t){wo.delete(t),wo.size||window.removeEventListener("resize",m0)}function C3(t,e,r){const n=t.canvas,o=n&&tn(n);if(!o)return;const a=Vp((s,l)=>{const c=o.clientWidth;r(s,l),c<o.clientWidth&&r()},window),i=new ResizeObserver(s=>{const l=s[0],c=l.contentRect.width,d=l.contentRect.height;c===0&&d===0||a(c,d)});return i.observe(o),y3(t,a),i}function rs(t,e,r){r&&r.disconnect(),e==="resize"&&x3(t)}function k3(t,e,r){const n=t.canvas,o=Vp(a=>{t.ctx!==null&&r(b3(a,t))},t,a=>{const i=a[0];return[i,i.offsetX,i.offsetY]});return h3(n,e,o),o}class w3 extends g0{acquireContext(e,r){const n=e&&e.getContext&&e.getContext("2d");return n&&n.canvas===e?(p3(e,r),n):null}releaseContext(e){const r=e.canvas;if(!r[da])return!1;const n=r[da].initial;["height","width"].forEach(a=>{const i=n[a];fe(i)?r.removeAttribute(a):r.setAttribute(a,i)});const o=n.style||{};return Object.keys(o).forEach(a=>{r.style[a]=o[a]}),r.width=r.width,delete r[da],!0}addEventListener(e,r,n){this.removeEventListener(e,r);const o=e.$proxies||(e.$proxies={}),i={attach:m3,detach:v3,resize:C3}[r]||k3;o[r]=i(e,r,n)}removeEventListener(e,r){const n=e.$proxies||(e.$proxies={}),o=n[r];if(!o)return;({attach:rs,detach:rs,resize:rs}[r]||g3)(e,r,o),n[r]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,r,n,o){return h8(e,r,n,o)}isAttached(e){const r=tn(e);return!!(r&&tn(r))}}let $t=class{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(e){const{x:r,y:n}=this.getProps(["x","y"],e);return{x:r,y:n}}hasValue(){return Bn(this.x)&&Bn(this.y)}getProps(e,r){const n=this,o=this.$animations;if(!r||!o)return n;const a={};return e.forEach(i=>{a[i]=o[i]&&o[i].active()?o[i]._to:n[i]}),a}};$t.defaults={};$t.defaultRoutes=void 0;const v0={values(t){return Be(t)?t:""+t},numeric(t,e,r){if(t===0)return"0";const n=this.chart.options.locale;let o,a=t;if(r.length>1){const c=Math.max(Math.abs(r[0].value),Math.abs(r[r.length-1].value));(c<1e-4||c>1e15)&&(o="scientific"),a=S3(t,r)}const i=wt(Math.abs(a)),s=Math.max(Math.min(-1*Math.floor(i),20),0),l={notation:o,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(l,this.options.ticks.format),Lo(t,n,l)},logarithmic(t,e,r){if(t===0)return"0";const n=t/Math.pow(10,Math.floor(wt(t)));return n===1||n===2||n===5?v0.numeric.call(this,t,e,r):""}};function S3(t,e){let r=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(r)>=1&&t!==Math.floor(t)&&(r=t-Math.floor(t)),r}var pi={formatters:v0};ce.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:pi.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}});ce.route("scale.ticks","color","","color");ce.route("scale.grid","color","","borderColor");ce.route("scale.grid","borderColor","","borderColor");ce.route("scale.title","color","","color");ce.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"});ce.describe("scales",{_fallback:"scale"});function E3(t,e){const r=t.options.ticks,n=r.maxTicksLimit||_3(t),o=r.major.enabled?B3(e):[],a=o.length,i=o[0],s=o[a-1],l=[];if(a>n)return A3(e,l,o,a/n),l;const c=T3(o,e,n);if(a>0){let d,u;const f=a>1?Math.round((s-i)/(a-1)):null;for(Qo(e,l,c,fe(f)?0:i-f,i),d=0,u=a-1;d<u;d++)Qo(e,l,c,o[d],o[d+1]);return Qo(e,l,c,s,fe(f)?e.length:s+f),l}return Qo(e,l,c),l}function _3(t){const e=t.options.offset,r=t._tickSize(),n=t._length/r+(e?0:1),o=t._maxLength/r;return Math.floor(Math.min(n,o))}function T3(t,e,r){const n=I3(t),o=e.length/r;if(!n)return Math.max(o,1);const a=dR(n);for(let i=0,s=a.length-1;i<s;i++){const l=a[i];if(l>o)return l}return Math.max(o,1)}function B3(t){const e=[];let r,n;for(r=0,n=t.length;r<n;r++)t[r].major&&e.push(r);return e}function A3(t,e,r,n){let o=0,a=r[0],i;for(n=Math.ceil(n),i=0;i<t.length;i++)i===a&&(e.push(t[i]),o++,a=r[o*n])}function Qo(t,e,r,n,o){const a=ie(n,0),i=Math.min(ie(o,t.length),t.length);let s=0,l,c,d;for(r=Math.ceil(r),o&&(l=o-n,r=l/Math.floor(l/r)),d=a;d<0;)s++,d=Math.round(a+s*r);for(c=Math.max(a,0);c<i;c++)c===d&&(e.push(t[c]),s++,d=Math.round(a+s*r))}function I3(t){const e=t.length;let r,n;if(e<2)return!1;for(n=t[0],r=1;r<e;++r)if(t[r]-t[r-1]!==n)return!1;return n}const R3=t=>t==="left"?"right":t==="right"?"left":t,fu=(t,e,r)=>e==="top"||e==="left"?t[e]+r:t[e]-r;function pu(t,e){const r=[],n=t.length/e,o=t.length;let a=0;for(;a<o;a+=n)r.push(t[Math.floor(a)]);return r}function D3(t,e,r){const n=t.ticks.length,o=Math.min(e,n-1),a=t._startPixel,i=t._endPixel,s=1e-6;let l=t.getPixelForTick(o),c;if(!(r&&(n===1?c=Math.max(l-a,i-l):e===0?c=(t.getPixelForTick(1)-l)/2:c=(l-t.getPixelForTick(o-1))/2,l+=o<e?c:-c,l<a-s||l>i+s)))return l}function L3(t,e){ve(t,r=>{const n=r.gc,o=n.length/2;let a;if(o>e){for(a=0;a<o;++a)delete r.data[n[a]];n.splice(0,o)}})}function jn(t){return t.drawTicks?t.tickLength:0}function hu(t,e){if(!t.display)return 0;const r=Ve(t.font,e),n=pt(t.padding);return(Be(t.text)?t.text.length:1)*r.lineHeight+n.height}function N3(t,e){return Object.assign(Object.create(t),{scale:e,type:"scale"})}function P3(t,e,r){return Object.assign(Object.create(t),{tick:r,index:e,type:"tick"})}function O3(t,e,r){let n=Dl(t);return(r&&e!=="right"||!r&&e==="right")&&(n=R3(n)),n}function M3(t,e,r,n){const{top:o,left:a,bottom:i,right:s}=t;let l=0,c,d,u;return t.isHorizontal()?(d=lt(n,a,s),u=fu(t,r,e),c=s-a):(d=fu(t,r,e),u=lt(n,i,o),l=r==="left"?-$e:$e),{titleX:d,titleY:u,maxWidth:c,rotation:l}}class cn extends $t{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){const r=this;r.options=e.setContext(r.getContext()),r.axis=e.axis,r._userMin=r.parse(e.min),r._userMax=r.parse(e.max),r._suggestedMin=r.parse(e.suggestedMin),r._suggestedMax=r.parse(e.suggestedMax)}parse(e,r){return e}getUserBounds(){let{_userMin:e,_userMax:r,_suggestedMin:n,_suggestedMax:o}=this;return e=Ct(e,Number.POSITIVE_INFINITY),r=Ct(r,Number.NEGATIVE_INFINITY),n=Ct(n,Number.POSITIVE_INFINITY),o=Ct(o,Number.NEGATIVE_INFINITY),{min:Ct(e,n),max:Ct(r,o),minDefined:Fe(e),maxDefined:Fe(r)}}getMinMax(e){const r=this;let{min:n,max:o,minDefined:a,maxDefined:i}=r.getUserBounds(),s;if(a&&i)return{min:n,max:o};const l=r.getMatchingVisibleMetas();for(let c=0,d=l.length;c<d;++c)s=l[c].controller.getMinMax(r,e),a||(n=Math.min(n,s.min)),i||(o=Math.max(o,s.max));return{min:Ct(n,Ct(o,n)),max:Ct(o,Ct(n,o))}}getPadding(){const e=this;return{left:e.paddingLeft||0,top:e.paddingTop||0,right:e.paddingRight||0,bottom:e.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ke(this.options.beforeUpdate,[this])}update(e,r,n){const o=this,a=o.options.ticks,i=a.sampleSize;o.beforeUpdate(),o.maxWidth=e,o.maxHeight=r,o._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),o.ticks=null,o._labelSizes=null,o._gridLineItems=null,o._labelItems=null,o.beforeSetDimensions(),o.setDimensions(),o.afterSetDimensions(),o._maxLength=o.isHorizontal()?o.width+n.left+n.right:o.height+n.top+n.bottom,o._dataLimitsCached||(o.beforeDataLimits(),o.determineDataLimits(),o.afterDataLimits(),o._range=KR(o,o.options.grace),o._dataLimitsCached=!0),o.beforeBuildTicks(),o.ticks=o.buildTicks()||[],o.afterBuildTicks();const s=i<o.ticks.length;o._convertTicksToLabels(s?pu(o.ticks,i):o.ticks),o.configure(),o.beforeCalculateLabelRotation(),o.calculateLabelRotation(),o.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source==="auto")&&(o.ticks=E3(o,o.ticks),o._labelSizes=null),s&&o._convertTicksToLabels(o.ticks),o.beforeFit(),o.fit(),o.afterFit(),o.afterUpdate()}configure(){const e=this;let r=e.options.reverse,n,o;e.isHorizontal()?(n=e.left,o=e.right):(n=e.top,o=e.bottom,r=!r),e._startPixel=n,e._endPixel=o,e._reversePixels=r,e._length=o-n,e._alignToPixels=e.options.alignToPixels}afterUpdate(){ke(this.options.afterUpdate,[this])}beforeSetDimensions(){ke(this.options.beforeSetDimensions,[this])}setDimensions(){const e=this;e.isHorizontal()?(e.width=e.maxWidth,e.left=0,e.right=e.width):(e.height=e.maxHeight,e.top=0,e.bottom=e.height),e.paddingLeft=0,e.paddingTop=0,e.paddingRight=0,e.paddingBottom=0}afterSetDimensions(){ke(this.options.afterSetDimensions,[this])}_callHooks(e){const r=this;r.chart.notifyPlugins(e,r.getContext()),ke(r.options[e],[r])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ke(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const r=this,n=r.options.ticks;let o,a,i;for(o=0,a=e.length;o<a;o++)i=e[o],i.label=ke(n.callback,[i.value,o,e],r);for(o=0;o<a;o++)fe(e[o].label)&&(e.splice(o,1),a--,o--)}afterTickToLabelConversion(){ke(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ke(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this,r=e.options,n=r.ticks,o=e.ticks.length,a=n.minRotation||0,i=n.maxRotation;let s=a,l,c,d;if(!e._isVisible()||!n.display||a>=i||o<=1||!e.isHorizontal()){e.labelRotation=a;return}const u=e._getLabelSizes(),f=u.widest.width,p=u.highest.height,h=bt(e.chart.width-f,0,e.maxWidth);l=r.offset?e.maxWidth/o:h/(o-1),f+6>l&&(l=h/(o-(r.offset?.5:1)),c=e.maxHeight-jn(r.grid)-n.padding-hu(r.title,e.chart.options.font),d=Math.sqrt(f*f+p*p),s=Us(Math.min(Math.asin(Math.min((u.highest.height+6)/l,1)),Math.asin(Math.min(c/d,1))-Math.asin(p/d))),s=Math.max(a,Math.min(i,s))),e.labelRotation=s}afterCalculateLabelRotation(){ke(this.options.afterCalculateLabelRotation,[this])}beforeFit(){ke(this.options.beforeFit,[this])}fit(){const e=this,r={width:0,height:0},{chart:n,options:{ticks:o,title:a,grid:i}}=e,s=e._isVisible(),l=e.isHorizontal();if(s){const c=hu(a,n.options.font);if(l?(r.width=e.maxWidth,r.height=jn(i)+c):(r.height=e.maxHeight,r.width=jn(i)+c),o.display&&e.ticks.length){const{first:d,last:u,widest:f,highest:p}=e._getLabelSizes(),h=o.padding*2,g=Pt(e.labelRotation),b=Math.cos(g),x=Math.sin(g);if(l){const C=o.mirror?0:x*f.width+b*p.height;r.height=Math.min(e.maxHeight,r.height+C+h)}else{const C=o.mirror?0:b*f.width+x*p.height;r.width=Math.min(e.maxWidth,r.width+C+h)}e._calculatePadding(d,u,x,b)}}e._handleMargins(),l?(e.width=e._length=n.width-e._margins.left-e._margins.right,e.height=r.height):(e.width=r.width,e.height=e._length=n.height-e._margins.top-e._margins.bottom)}_calculatePadding(e,r,n,o){const a=this,{ticks:{align:i,padding:s},position:l}=a.options,c=a.labelRotation!==0,d=l!=="top"&&a.axis==="x";if(a.isHorizontal()){const u=a.getPixelForTick(0)-a.left,f=a.right-a.getPixelForTick(a.ticks.length-1);let p=0,h=0;c?d?(p=o*e.width,h=n*r.height):(p=n*e.height,h=o*r.width):i==="start"?h=r.width:i==="end"?p=e.width:(p=e.width/2,h=r.width/2),a.paddingLeft=Math.max((p-u+s)*a.width/(a.width-u),0),a.paddingRight=Math.max((h-f+s)*a.width/(a.width-f),0)}else{let u=r.height/2,f=e.height/2;i==="start"?(u=0,f=e.height):i==="end"&&(u=r.height,f=0),a.paddingTop=u+s,a.paddingBottom=f+s}}_handleMargins(){const e=this;e._margins&&(e._margins.left=Math.max(e.paddingLeft,e._margins.left),e._margins.top=Math.max(e.paddingTop,e._margins.top),e._margins.right=Math.max(e.paddingRight,e._margins.right),e._margins.bottom=Math.max(e.paddingBottom,e._margins.bottom))}afterFit(){ke(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:r}=this.options;return r==="top"||r==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){const r=this;r.beforeTickToLabelConversion(),r.generateTickLabels(e),r.afterTickToLabelConversion()}_getLabelSizes(){const e=this;let r=e._labelSizes;if(!r){const n=e.options.ticks.sampleSize;let o=e.ticks;n<o.length&&(o=pu(o,n)),e._labelSizes=r=e._computeLabelSizes(o,o.length)}return r}_computeLabelSizes(e,r){const{ctx:n,_longestTextCache:o}=this,a=[],i=[];let s=0,l=0,c,d,u,f,p,h,g,b,x,C,k;for(c=0;c<r;++c){if(f=e[c].label,p=this._resolveTickFontOptions(c),n.font=h=p.string,g=o[h]=o[h]||{data:{},gc:[]},b=p.lineHeight,x=C=0,!fe(f)&&!Be(f))x=Na(n,g.data,g.gc,x,f),C=b;else if(Be(f))for(d=0,u=f.length;d<u;++d)k=f[d],!fe(k)&&!Be(k)&&(x=Na(n,g.data,g.gc,x,k),C+=b);a.push(x),i.push(C),s=Math.max(x,s),l=Math.max(C,l)}L3(o,r);const B=a.indexOf(s),_=i.indexOf(l),T=R=>({width:a[R]||0,height:i[R]||0});return{first:T(0),last:T(r-1),widest:T(B),highest:T(_),widths:a,heights:i}}getLabelForValue(e){return e}getPixelForValue(e,r){return NaN}getValueForPixel(e){}getPixelForTick(e){const r=this.ticks;return e<0||e>r.length-1?null:this.getPixelForValue(r[e].value)}getPixelForDecimal(e){const r=this;r._reversePixels&&(e=1-e);const n=r._startPixel+e*r._length;return hR(r._alignToPixels?Mr(r.chart,n,0):n)}getDecimalForPixel(e){const r=(e-this._startPixel)/this._length;return this._reversePixels?1-r:r}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:r}=this;return e<0&&r<0?r:e>0&&r>0?e:0}getContext(e){const r=this,n=r.ticks||[];if(e>=0&&e<n.length){const o=n[e];return o.$context||(o.$context=P3(r.getContext(),e,o))}return r.$context||(r.$context=N3(r.chart.getContext(),r))}_tickSize(){const e=this,r=e.options.ticks,n=Pt(e.labelRotation),o=Math.abs(Math.cos(n)),a=Math.abs(Math.sin(n)),i=e._getLabelSizes(),s=r.autoSkipPadding||0,l=i?i.widest.width+s:0,c=i?i.highest.height+s:0;return e.isHorizontal()?c*o>l*a?l/o:c/a:c*a<l*o?c/o:l/a}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const r=this,n=r.axis,o=r.chart,a=r.options,{grid:i,position:s}=a,l=i.offset,c=r.isHorizontal(),u=r.ticks.length+(l?1:0),f=jn(i),p=[],h=i.setContext(r.getContext()),g=h.drawBorder?h.borderWidth:0,b=g/2,x=function(H){return Mr(o,H,g)};let C,k,B,_,T,R,D,O,U,K,q,j;if(s==="top")C=x(r.bottom),R=r.bottom-f,O=C-b,K=x(e.top)+b,j=e.bottom;else if(s==="bottom")C=x(r.top),K=e.top,j=x(e.bottom)-b,R=C+b,O=r.top+f;else if(s==="left")C=x(r.right),T=r.right-f,D=C-b,U=x(e.left)+b,q=e.right;else if(s==="right")C=x(r.left),U=e.left,q=x(e.right)-b,T=C+b,D=r.left+f;else if(n==="x"){if(s==="center")C=x((e.top+e.bottom)/2+.5);else if(be(s)){const H=Object.keys(s)[0],G=s[H];C=x(r.chart.scales[H].getPixelForValue(G))}K=e.top,j=e.bottom,R=C+b,O=R+f}else if(n==="y"){if(s==="center")C=x((e.left+e.right)/2);else if(be(s)){const H=Object.keys(s)[0],G=s[H];C=x(r.chart.scales[H].getPixelForValue(G))}T=C-b,D=T-f,U=e.left,q=e.right}for(k=0;k<u;++k){const H=i.setContext(r.getContext(k)),G=H.lineWidth,Q=H.color,F=i.borderDash||[],Ke=H.borderDashOffset,He=H.tickWidth,de=H.tickColor,ge=H.tickBorderDash||[],he=H.tickBorderDashOffset;B=D3(r,k,l),B!==void 0&&(_=Mr(o,B,G),c?T=D=U=q=_:R=O=K=j=_,p.push({tx1:T,ty1:R,tx2:D,ty2:O,x1:U,y1:K,x2:q,y2:j,width:G,color:Q,borderDash:F,borderDashOffset:Ke,tickWidth:He,tickColor:de,tickBorderDash:ge,tickBorderDashOffset:he}))}return r._ticksLength=u,r._borderValue=C,p}_computeLabelItems(e){const r=this,n=r.axis,o=r.options,{position:a,ticks:i}=o,s=r.isHorizontal(),l=r.ticks,{align:c,crossAlign:d,padding:u,mirror:f}=i,p=jn(o.grid),h=p+u,g=f?-u:h,b=-Pt(r.labelRotation),x=[];let C,k,B,_,T,R,D,O,U,K,q,j,H="middle";if(a==="top")R=r.bottom-g,D=r._getXAxisLabelAlignment();else if(a==="bottom")R=r.top+g,D=r._getXAxisLabelAlignment();else if(a==="left"){const Q=r._getYAxisLabelAlignment(p);D=Q.textAlign,T=Q.x}else if(a==="right"){const Q=r._getYAxisLabelAlignment(p);D=Q.textAlign,T=Q.x}else if(n==="x"){if(a==="center")R=(e.top+e.bottom)/2+h;else if(be(a)){const Q=Object.keys(a)[0],F=a[Q];R=r.chart.scales[Q].getPixelForValue(F)+h}D=r._getXAxisLabelAlignment()}else if(n==="y"){if(a==="center")T=(e.left+e.right)/2-h;else if(be(a)){const Q=Object.keys(a)[0],F=a[Q];T=r.chart.scales[Q].getPixelForValue(F)}D=r._getYAxisLabelAlignment(p).textAlign}n==="y"&&(c==="start"?H="top":c==="end"&&(H="bottom"));const G=r._getLabelSizes();for(C=0,k=l.length;C<k;++C){B=l[C],_=B.label;const Q=i.setContext(r.getContext(C));O=r.getPixelForTick(C)+i.labelOffset,U=r._resolveTickFontOptions(C),K=U.lineHeight,q=Be(_)?_.length:1;const F=q/2,Ke=Q.color,He=Q.textStrokeColor,de=Q.textStrokeWidth;s?(T=O,a==="top"?d==="near"||b!==0?j=-q*K+K/2:d==="center"?j=-G.highest.height/2-F*K+K:j=-G.highest.height+K/2:d==="near"||b!==0?j=K/2:d==="center"?j=G.highest.height/2-F*K:j=G.highest.height-q*K,f&&(j*=-1)):(R=O,j=(1-q)*K/2);let ge;if(Q.showLabelBackdrop){const he=pt(Q.backdropPadding),Ie=G.heights[C],Re=G.widths[C];let De=R+j-he.top,Le=T-he.left;switch(H){case"middle":De-=Ie/2;break;case"bottom":De-=Ie;break}switch(D){case"center":Le-=Re/2;break;case"right":Le-=Re;break}ge={left:Le,top:De,width:Re+he.width,height:Ie+he.height,color:Q.backdropColor}}x.push({rotation:b,label:_,font:U,color:Ke,strokeColor:He,strokeWidth:de,textOffset:j,textAlign:D,textBaseline:H,translation:[T,R],backdrop:ge})}return x}_getXAxisLabelAlignment(){const e=this,{position:r,ticks:n}=e.options;if(-Pt(e.labelRotation))return r==="top"?"left":"right";let a="center";return n.align==="start"?a="left":n.align==="end"&&(a="right"),a}_getYAxisLabelAlignment(e){const r=this,{position:n,ticks:{crossAlign:o,mirror:a,padding:i}}=r.options,s=r._getLabelSizes(),l=e+i,c=s.widest.width;let d,u;return n==="left"?a?(d="left",u=r.right+i):(u=r.right-l,o==="near"?d="right":o==="center"?(d="center",u-=c/2):(d="left",u=r.left)):n==="right"?a?(d="right",u=r.left+i):(u=r.left+l,o==="near"?d="left":o==="center"?(d="center",u+=c/2):(d="right",u=r.right)):d="right",{textAlign:d,x:u}}_computeLabelArea(){const e=this;if(e.options.ticks.mirror)return;const r=e.chart,n=e.options.position;if(n==="left"||n==="right")return{top:0,left:e.left,bottom:r.height,right:e.right};if(n==="top"||n==="bottom")return{top:e.top,left:0,bottom:e.bottom,right:r.width}}drawBackground(){const{ctx:e,options:{backgroundColor:r},left:n,top:o,width:a,height:i}=this;r&&(e.save(),e.fillStyle=r,e.fillRect(n,o,a,i),e.restore())}getLineWidthForValue(e){const r=this,n=r.options.grid;if(!r._isVisible()||!n.display)return 0;const a=r.ticks.findIndex(i=>i.value===e);return a>=0?n.setContext(r.getContext(a)).lineWidth:0}drawGrid(e){const r=this,n=r.options.grid,o=r.ctx,a=r._gridLineItems||(r._gridLineItems=r._computeGridLineItems(e));let i,s;const l=(c,d,u)=>{!u.width||!u.color||(o.save(),o.lineWidth=u.width,o.strokeStyle=u.color,o.setLineDash(u.borderDash||[]),o.lineDashOffset=u.borderDashOffset,o.beginPath(),o.moveTo(c.x,c.y),o.lineTo(d.x,d.y),o.stroke(),o.restore())};if(n.display)for(i=0,s=a.length;i<s;++i){const c=a[i];n.drawOnChartArea&&l({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),n.drawTicks&&l({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const e=this,{chart:r,ctx:n,options:{grid:o}}=e,a=o.setContext(e.getContext()),i=o.drawBorder?a.borderWidth:0;if(!i)return;const s=o.setContext(e.getContext(0)).lineWidth,l=e._borderValue;let c,d,u,f;e.isHorizontal()?(c=Mr(r,e.left,i)-i/2,d=Mr(r,e.right,s)+s/2,u=f=l):(u=Mr(r,e.top,i)-i/2,f=Mr(r,e.bottom,s)+s/2,c=d=l),n.save(),n.lineWidth=a.borderWidth,n.strokeStyle=a.borderColor,n.beginPath(),n.moveTo(c,u),n.lineTo(d,f),n.stroke(),n.restore()}drawLabels(e){const r=this;if(!r.options.ticks.display)return;const o=r.ctx,a=r._computeLabelArea();a&&Ro(o,a);const i=r._labelItems||(r._labelItems=r._computeLabelItems(e));let s,l;for(s=0,l=i.length;s<l;++s){const c=i[s],d=c.font,u=c.label;c.backdrop&&(o.fillStyle=c.backdrop.color,o.fillRect(c.backdrop.left,c.backdrop.top,c.backdrop.width,c.backdrop.height));let f=c.textOffset;en(o,u,0,f,d,c)}a&&Do(o)}drawTitle(){const{ctx:e,options:{position:r,title:n,reverse:o}}=this;if(!n.display)return;const a=Ve(n.font),i=pt(n.padding),s=n.align;let l=a.lineHeight/2;r==="bottom"?(l+=i.bottom,Be(n.text)&&(l+=a.lineHeight*(n.text.length-1))):l+=i.top;const{titleX:c,titleY:d,maxWidth:u,rotation:f}=M3(this,l,r,s);en(e,n.text,0,0,a,{color:n.color,maxWidth:u,rotation:f,textAlign:O3(s,r,o),textBaseline:"middle",translation:[c,d]})}draw(e){const r=this;r._isVisible()&&(r.drawBackground(),r.drawGrid(e),r.drawBorder(),r.drawTitle(),r.drawLabels(e))}_layers(){const e=this,r=e.options,n=r.ticks&&r.ticks.z||0,o=r.grid&&r.grid.z||0;return!e._isVisible()||e.draw!==cn.prototype.draw?[{z:n,draw(a){e.draw(a)}}]:[{z:o,draw(a){e.drawBackground(),e.drawGrid(a),e.drawTitle()}},{z:o+1,draw(){e.drawBorder()}},{z:n,draw(a){e.drawLabels(a)}}]}getMatchingVisibleMetas(e){const r=this,n=r.chart.getSortedVisibleDatasetMetas(),o=r.axis+"AxisID",a=[];let i,s;for(i=0,s=n.length;i<s;++i){const l=n[i];l[o]===r.id&&(!e||l.type===e)&&a.push(l)}return a}_resolveTickFontOptions(e){const r=this.options.ticks.setContext(this.getContext(e));return Ve(r.font)}_maxDigits(){const e=this,r=e._resolveTickFontOptions(0).lineHeight;return(e.isHorizontal()?e.width:e.height)/r}}class Zo{constructor(e,r,n){this.type=e,this.scope=r,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const r=this,n=Object.getPrototypeOf(e);let o;z3(n)&&(o=r.register(n));const a=r.items,i=e.id,s=r.scope+"."+i;if(!i)throw new Error("class does not have id: "+e);return i in a||(a[i]=e,$3(e,s,o),r.override&&ce.override(e.id,e.overrides)),s}get(e){return this.items[e]}unregister(e){const r=this.items,n=e.id,o=this.scope;n in r&&delete r[n],o&&n in ce[o]&&(delete ce[o][n],this.override&&delete Jr[n])}}function $3(t,e,r){const n=Co(Object.create(null),[r?ce.get(r):{},ce.get(e),t.defaults]);ce.set(e,n),t.defaultRoutes&&F3(e,t.defaultRoutes),t.descriptors&&ce.describe(e,t.descriptors)}function F3(t,e){Object.keys(e).forEach(r=>{const n=r.split("."),o=n.pop(),a=[t].concat(n).join("."),i=e[r].split("."),s=i.pop(),l=i.join(".");ce.route(a,o,l,s)})}function z3(t){return"id"in t&&"defaults"in t}class U3{constructor(){this.controllers=new Zo(Zt,"datasets",!0),this.elements=new Zo($t,"elements"),this.plugins=new Zo(Object,"plugins"),this.scales=new Zo(cn,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,r,n){const o=this;[...r].forEach(a=>{const i=n||o._getRegistryForType(a);n||i.isForType(a)||i===o.plugins&&a.id?o._exec(e,i,a):ve(a,s=>{const l=n||o._getRegistryForType(s);o._exec(e,l,s)})})}_exec(e,r,n){const o=Ll(e);ke(n["before"+o],[],n),r[e](n),ke(n["after"+o],[],n)}_getRegistryForType(e){for(let r=0;r<this._typedRegistries.length;r++){const n=this._typedRegistries[r];if(n.isForType(e))return n}return this.plugins}_get(e,r,n){const o=r.get(e);if(o===void 0)throw new Error('"'+e+'" is not a registered '+n+".");return o}}var sr=new U3;class V3{constructor(){this._init=[]}notify(e,r,n,o){const a=this;r==="beforeInit"&&(a._init=a._createDescriptors(e,!0),a._notify(a._init,e,"install"));const i=o?a._descriptors(e).filter(o):a._descriptors(e),s=a._notify(i,e,r,n);return r==="destroy"&&(a._notify(i,e,"stop"),a._notify(a._init,e,"uninstall")),s}_notify(e,r,n,o){o=o||{};for(const a of e){const i=a.plugin,s=i[n],l=[r,o,a.options];if(ke(s,l,i)===!1&&o.cancelable)return!1}return!0}invalidate(){fe(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const r=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),r}_createDescriptors(e,r){const n=e&&e.config,o=ie(n.options&&n.options.plugins,{}),a=K3(n);return o===!1&&!r?[]:W3(e,a,o,r)}_notifyStateChanges(e){const r=this._oldCache||[],n=this._cache,o=(a,i)=>a.filter(s=>!i.some(l=>s.plugin.id===l.plugin.id));this._notify(o(r,n),e,"stop"),this._notify(o(n,r),e,"start")}}function K3(t){const e=[],r=Object.keys(sr.plugins.items);for(let o=0;o<r.length;o++)e.push(sr.getPlugin(r[o]));const n=t.plugins||[];for(let o=0;o<n.length;o++){const a=n[o];e.indexOf(a)===-1&&e.push(a)}return e}function H3(t,e){return!e&&t===!1?null:t===!0?{}:t}function W3(t,e,r,n){const o=[],a=t.getContext();for(let i=0;i<e.length;i++){const s=e[i],l=s.id,c=H3(r[l],n);c!==null&&o.push({plugin:s,options:j3(t.config,s,c,a)})}return o}function j3(t,e,r,n){const o=t.pluginScopeKeys(e),a=t.getOptionScopes(r,o);return t.createResolver(a,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function js(t,e){const r=ce.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||r.indexAxis||"x"}function G3(t,e){let r=t;return t==="_index_"?r=e:t==="_value_"&&(r=e==="x"?"y":"x"),r}function q3(t,e){return t===e?"_index_":"_value_"}function Y3(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Gs(t,e){return t==="x"||t==="y"?t:e.axis||Y3(e.position)||t.charAt(0).toLowerCase()}function X3(t,e){const r=Jr[t.type]||{scales:{}},n=e.scales||{},o=js(t.type,e),a=Object.create(null),i=Object.create(null);return Object.keys(n).forEach(s=>{const l=n[s],c=Gs(s,l),d=q3(c,o),u=r.scales||{};a[c]=a[c]||s,i[s]=co(Object.create(null),[{axis:c},l,u[c],u[d]])}),t.data.datasets.forEach(s=>{const l=s.type||t.type,c=s.indexAxis||js(l,e),u=(Jr[l]||{}).scales||{};Object.keys(u).forEach(f=>{const p=G3(f,c),h=s[p+"AxisID"]||a[p]||p;i[h]=i[h]||Object.create(null),co(i[h],[{axis:p},n[h],u[f]])})}),Object.keys(i).forEach(s=>{const l=i[s];co(l,[ce.scales[l.type],ce.scale])}),i}function y0(t){const e=t.options||(t.options={});e.plugins=ie(e.plugins,{}),e.scales=X3(t,e)}function x0(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function Q3(t){return t=t||{},t.data=x0(t.data),y0(t),t}const gu=new Map,C0=new Set;function Jo(t,e){let r=gu.get(t);return r||(r=e(),gu.set(t,r),C0.add(r)),r}const Gn=(t,e,r)=>{const n=Rr(e,r);n!==void 0&&t.add(n)};class Z3{constructor(e){this._config=Q3(e),this._scopeCache=new Map,this._resolverCache=new Map}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=x0(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),y0(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Jo(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,r){return Jo(`${e}.transition.${r}`,()=>[[`datasets.${e}.transitions.${r}`,`transitions.${r}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,r){return Jo(`${e}-${r}`,()=>[[`datasets.${e}.elements.${r}`,`datasets.${e}`,`elements.${r}`,""]])}pluginScopeKeys(e){const r=e.id,n=this.type;return Jo(`${n}-plugin-${r}`,()=>[[`plugins.${r}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,r){const n=this._scopeCache;let o=n.get(e);return(!o||r)&&(o=new Map,n.set(e,o)),o}getOptionScopes(e,r,n){const{options:o,type:a}=this,i=this._cachedScopes(e,n),s=i.get(r);if(s)return s;const l=new Set;r.forEach(d=>{e&&(l.add(e),d.forEach(u=>Gn(l,e,u))),d.forEach(u=>Gn(l,o,u)),d.forEach(u=>Gn(l,Jr[a]||{},u)),d.forEach(u=>Gn(l,ce,u)),d.forEach(u=>Gn(l,Hs,u))});const c=[...l];return C0.has(r)&&i.set(r,c),c}chartOptionScopes(){const{options:e,type:r}=this;return[e,Jr[r]||{},ce.datasets[r]||{},{type:r},ce,Hs]}resolveNamedOptions(e,r,n,o=[""]){const a={$shared:!0},{resolver:i,subPrefixes:s}=bu(this._resolverCache,e,o);let l=i;if(J3(i,r)){a.$shared=!1,n=Tn(n)?n():n;const c=this.createResolver(e,n,s);l=In(i,n,c)}for(const c of r)a[c]=l[c];return a}createResolver(e,r,n=[""],o){const{resolver:a}=bu(this._resolverCache,e,n);return be(r)?In(a,r,void 0,o):a}}function bu(t,e,r){let n=t.get(e);n||(n=new Map,t.set(e,n));const o=r.join();let a=n.get(o);return a||(a={resolver:zl(e,r),subPrefixes:r.filter(s=>!s.toLowerCase().includes("hover"))},n.set(o,a)),a}function J3(t,e){const{isScriptable:r,isIndexable:n}=Jp(t);for(const o of e)if(r(o)&&Tn(t[o])||n(o)&&Be(t[o]))return!0;return!1}var e6="3.3.2";const t6=["top","bottom","left","right","chartArea"];function mu(t,e){return t==="top"||t==="bottom"||t6.indexOf(t)===-1&&e==="x"}function vu(t,e){return function(r,n){return r[t]===n[t]?r[e]-n[e]:r[t]-n[t]}}function yu(t){const e=t.chart,r=e.options.animation;e.notifyPlugins("afterRender"),ke(r&&r.onComplete,[t],e)}function r6(t){const e=t.chart,r=e.options.animation;ke(r&&r.onProgress,[t],e)}function k0(){return typeof window<"u"&&typeof document<"u"}function w0(t){return k0()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const $a={},S0=t=>{const e=w0(t);return Object.values($a).filter(r=>r.canvas===e).pop()};class hi{constructor(e,r){const n=this;this.config=r=new Z3(r);const o=w0(e),a=S0(o);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas can be reused.");const i=r.createResolver(r.chartOptionScopes(),n.getContext());this.platform=n._initializePlatform(o,r);const s=n.platform.acquireContext(o,i.aspectRatio),l=s&&s.canvas,c=l&&l.height,d=l&&l.width;if(this.id=tR(),this.ctx=s,this.canvas=l,this.width=d,this.height=c,this._options=i,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this.scale=void 0,this._plugins=new V3,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=J4(()=>this.update("resize"),i.resizeDelay||0),$a[n.id]=n,!s||!l){console.error("Failed to create chart: can't acquire context from the given item");return}rr.listen(n,"complete",yu),rr.listen(n,"progress",r6),n._initialize(),n.attached&&n.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:r},width:n,height:o,_aspectRatio:a}=this;return fe(e)?r&&a?a:o?n/o:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}_initialize(){const e=this;return e.notifyPlugins("beforeInit"),e.options.responsive?e.resize():jd(e,e.options.devicePixelRatio),e.bindEvents(),e.notifyPlugins("afterInit"),e}_initializePlatform(e,r){return r.platform?new r.platform:!k0()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?new u3:new w3}clear(){return Vd(this.canvas,this.ctx),this}stop(){return rr.stop(this),this}resize(e,r){rr.running(this)?this._resizeBeforeDraw={width:e,height:r}:this._resize(e,r)}_resize(e,r){const n=this,o=n.options,a=n.canvas,i=o.maintainAspectRatio&&n.aspectRatio,s=n.platform.getMaximumSize(a,e,r,i),l=o.devicePixelRatio||n.platform.getDevicePixelRatio();n.width=s.width,n.height=s.height,n._aspectRatio=n.aspectRatio,jd(n,l,!0)&&(n.notifyPlugins("resize",{size:s}),ke(o.onResize,[n,s],n),n.attached&&n._doResize()&&n.render())}ensureScalesHaveIDs(){const r=this.options.scales||{};ve(r,(n,o)=>{n.id=o})}buildOrUpdateScales(){const e=this,r=e.options,n=r.scales,o=e.scales,a=Object.keys(o).reduce((s,l)=>(s[l]=!1,s),{});let i=[];n&&(i=i.concat(Object.keys(n).map(s=>{const l=n[s],c=Gs(s,l),d=c==="r",u=c==="x";return{options:l,dposition:d?"chartArea":u?"bottom":"left",dtype:d?"radialLinear":u?"category":"linear"}}))),ve(i,s=>{const l=s.options,c=l.id,d=Gs(c,l),u=ie(l.type,s.dtype);(l.position===void 0||mu(l.position,d)!==mu(s.dposition))&&(l.position=s.dposition),a[c]=!0;let f=null;if(c in o&&o[c].type===u)f=o[c];else{const p=sr.getScale(u);f=new p({id:c,type:u,ctx:e.ctx,chart:e}),o[f.id]=f}f.init(l,r)}),ve(a,(s,l)=>{s||delete o[l]}),ve(o,s=>{Bt.configure(e,s,s.options),Bt.addBox(e,s)})}_updateMetasets(){const e=this,r=e._metasets,n=e.data.datasets.length,o=r.length;if(r.sort((a,i)=>a.index-i.index),o>n){for(let a=n;a<o;++a)e._destroyDatasetMeta(a);r.splice(n,o-n)}e._sortedMetasets=r.slice(0).sort(vu("order","index"))}_removeUnreferencedMetasets(){const e=this,{_metasets:r,data:{datasets:n}}=e;r.length>n.length&&delete e._stacks,r.forEach((o,a)=>{n.filter(i=>i===o._dataset).length===0&&e._destroyDatasetMeta(a)})}buildOrUpdateControllers(){const e=this,r=[],n=e.data.datasets;let o,a;for(e._removeUnreferencedMetasets(),o=0,a=n.length;o<a;o++){const i=n[o];let s=e.getDatasetMeta(o);const l=i.type||e.config.type;if(s.type&&s.type!==l&&(e._destroyDatasetMeta(o),s=e.getDatasetMeta(o)),s.type=l,s.indexAxis=i.indexAxis||js(l,e.options),s.order=i.order||0,s.index=o,s.label=""+i.label,s.visible=e.isDatasetVisible(o),s.controller)s.controller.updateIndex(o),s.controller.linkScales();else{const c=sr.getController(l),{datasetElementType:d,dataElementType:u}=ce.datasets[l];Object.assign(c.prototype,{dataElementType:sr.getElement(u),datasetElementType:d&&sr.getElement(d)}),s.controller=new c(e,o),r.push(s.controller)}}return e._updateMetasets(),r}_resetElements(){const e=this;ve(e.data.datasets,(r,n)=>{e.getDatasetMeta(n).controller.reset()},e)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const r=this,n=r.config;n.update(),r._options=n.createResolver(n.chartOptionScopes(),r.getContext()),ve(r.scales,c=>{Bt.removeBox(r,c)});const o=r._animationsDisabled=!r.options.animation;r.ensureScalesHaveIDs(),r.buildOrUpdateScales();const a=new Set(Object.keys(r._listeners)),i=new Set(r.options.events);if((!sR(a,i)||!!this._responsiveListeners!==r.options.responsive)&&(r.unbindEvents(),r.bindEvents()),r._plugins.invalidate(),r.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=r.buildOrUpdateControllers();r.notifyPlugins("beforeElementsUpdate");let l=0;for(let c=0,d=r.data.datasets.length;c<d;c++){const{controller:u}=r.getDatasetMeta(c),f=!o&&s.indexOf(u)===-1;u.buildOrUpdateElements(f),l=Math.max(+u.getMaxOverflow(),l)}r._minPadding=l,r._updateLayout(l),o||ve(s,c=>{c.reset()}),r._updateDatasets(e),r.notifyPlugins("afterUpdate",{mode:e}),r._layers.sort(vu("z","_idx")),r._lastEvent&&r._eventHandler(r._lastEvent,!0),r.render()}_updateLayout(e){const r=this;if(r.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Bt.update(r,r.width,r.height,e);const n=r.chartArea,o=n.width<=0||n.height<=0;r._layers=[],ve(r.boxes,a=>{o&&a.position==="chartArea"||(a.configure&&a.configure(),r._layers.push(...a._layers()))},r),r._layers.forEach((a,i)=>{a._idx=i}),r.notifyPlugins("afterLayout")}_updateDatasets(e){const r=this,n=typeof e=="function";if(r.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let o=0,a=r.data.datasets.length;o<a;++o)r._updateDataset(o,n?e({datasetIndex:o}):e);r.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,r){const n=this,o=n.getDatasetMeta(e),a={meta:o,index:e,mode:r,cancelable:!0};n.notifyPlugins("beforeDatasetUpdate",a)!==!1&&(o.controller._update(r),a.cancelable=!1,n.notifyPlugins("afterDatasetUpdate",a))}render(){const e=this;e.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(rr.has(e)?e.attached&&!rr.running(e)&&rr.start(e):(e.draw(),yu({chart:e})))}draw(){const e=this;let r;if(e._resizeBeforeDraw){const{width:o,height:a}=e._resizeBeforeDraw;e._resize(o,a),e._resizeBeforeDraw=null}if(e.clear(),e.width<=0||e.height<=0||e.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=e._layers;for(r=0;r<n.length&&n[r].z<=0;++r)n[r].draw(e.chartArea);for(e._drawDatasets();r<n.length;++r)n[r].draw(e.chartArea);e.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,o=[];let a,i;for(a=0,i=n.length;a<i;++a){const s=n[a];(!e||s.visible)&&o.push(s)}return o}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){const e=this;if(e.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const r=e.getSortedVisibleDatasetMetas();for(let n=r.length-1;n>=0;--n)e._drawDataset(r[n]);e.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const r=this,n=r.ctx,o=e._clip,a=r.chartArea,i={meta:e,index:e.index,cancelable:!0};r.notifyPlugins("beforeDatasetDraw",i)!==!1&&(Ro(n,{left:o.left===!1?0:a.left-o.left,right:o.right===!1?r.width:a.right+o.right,top:o.top===!1?0:a.top-o.top,bottom:o.bottom===!1?r.height:a.bottom+o.bottom}),e.controller.draw(),Do(n),i.cancelable=!1,r.notifyPlugins("afterDatasetDraw",i))}getElementsAtEventForMode(e,r,n,o){const a=n3.modes[r];return typeof a=="function"?a(this,e,n,o):[]}getDatasetMeta(e){const r=this,n=r.data.datasets[e],o=r._metasets;let a=o.filter(i=>i&&i._dataset===n).pop();return a||(a={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},o.push(a)),a}getContext(){return this.$context||(this.$context={chart:this,type:"chart"})}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const r=this.data.datasets[e];if(!r)return!1;const n=this.getDatasetMeta(e);return typeof n.hidden=="boolean"?!n.hidden:!r.hidden}setDatasetVisibility(e,r){const n=this.getDatasetMeta(e);n.hidden=!r}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateDatasetVisibility(e,r){const n=this,o=r?"show":"hide",a=n.getDatasetMeta(e),i=a.controller._resolveAnimations(void 0,o);n.setDatasetVisibility(e,r),i.update(a,{visible:r}),n.update(s=>s.datasetIndex===e?o:void 0)}hide(e){this._updateDatasetVisibility(e,!1)}show(e){this._updateDatasetVisibility(e,!0)}_destroyDatasetMeta(e){const r=this,n=r._metasets&&r._metasets[e];n&&n.controller&&(n.controller._destroy(),delete r._metasets[e])}destroy(){const e=this,{canvas:r,ctx:n}=e;let o,a;for(e.stop(),rr.remove(e),o=0,a=e.data.datasets.length;o<a;++o)e._destroyDatasetMeta(o);e.config.clearCache(),r&&(e.unbindEvents(),Vd(r,n),e.platform.releaseContext(n),e.canvas=null,e.ctx=null),e.notifyPlugins("destroy"),delete $a[e.id]}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this,r=e._listeners,n=e.platform,o=(i,s)=>{n.addEventListener(e,i,s),r[i]=s},a=function(i,s,l){i.offsetX=s,i.offsetY=l,e._eventHandler(i)};ve(e.options.events,i=>o(i,a))}bindResponsiveEvents(){const e=this;e._responsiveListeners||(e._responsiveListeners={});const r=e._responsiveListeners,n=e.platform,o=(c,d)=>{n.addEventListener(e,c,d),r[c]=d},a=(c,d)=>{r[c]&&(n.removeEventListener(e,c,d),delete r[c])},i=(c,d)=>{e.canvas&&e.resize(c,d)};let s;const l=()=>{a("attach",l),e.attached=!0,e.resize(),o("resize",i),o("detach",s)};s=()=>{e.attached=!1,a("resize",i),o("attach",l)},n.isAttached(e.canvas)?l():s()}unbindEvents(){const e=this;ve(e._listeners,(r,n)=>{e.platform.removeEventListener(e,n,r)}),e._listeners={},ve(e._responsiveListeners,(r,n)=>{e.platform.removeEventListener(e,n,r)}),e._responsiveListeners=void 0}updateHoverStyle(e,r,n){const o=n?"set":"remove";let a,i,s,l;for(r==="dataset"&&(a=this.getDatasetMeta(e[0].datasetIndex),a.controller["_"+o+"DatasetHoverStyle"]()),s=0,l=e.length;s<l;++s){i=e[s];const c=i&&this.getDatasetMeta(i.datasetIndex).controller;c&&c[o+"HoverStyle"](i.element,i.datasetIndex,i.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const r=this,n=r._active||[],o=e.map(({datasetIndex:i,index:s})=>{const l=r.getDatasetMeta(i);if(!l)throw new Error("No dataset found at index "+i);return{datasetIndex:i,element:l.data[s],index:s}});!Aa(o,n)&&(r._active=o,r._updateHoverStyles(o,n))}notifyPlugins(e,r,n){return this._plugins.notify(this,e,r,n)}_updateHoverStyles(e,r,n){const o=this,a=o.options.hover,i=(c,d)=>c.filter(u=>!d.some(f=>u.datasetIndex===f.datasetIndex&&u.index===f.index)),s=i(r,e),l=n?e:i(e,r);s.length&&o.updateHoverStyle(s,a.mode,!1),l.length&&a.mode&&o.updateHoverStyle(l,a.mode,!0)}_eventHandler(e,r){const n=this,o={event:e,replay:r,cancelable:!0},a=s=>(s.options.events||this.options.events).includes(e.type);if(n.notifyPlugins("beforeEvent",o,a)===!1)return;const i=n._handleEvent(e,r);return o.cancelable=!1,n.notifyPlugins("afterEvent",o,a),(i||o.changed)&&n.render(),n}_handleEvent(e,r){const n=this,{_active:o=[],options:a}=n,i=a.hover,s=r;let l=[],c=!1,d=null;return e.type!=="mouseout"&&(l=n.getElementsAtEventForMode(e,i.mode,i,s),d=e.type==="click"?n._lastEvent:e),n._lastEvent=null,An(e,n.chartArea,n._minPadding)&&(ke(a.onHover,[e,l,n],n),(e.type==="mouseup"||e.type==="click"||e.type==="contextmenu")&&ke(a.onClick,[e,l,n],n)),c=!Aa(l,o),(c||r)&&(n._active=l,n._updateHoverStyles(l,o,r)),n._lastEvent=d,c}}const xu=()=>ve(hi.instances,t=>t._plugins.invalidate()),br=!0;Object.defineProperties(hi,{defaults:{enumerable:br,value:ce},instances:{enumerable:br,value:$a},overrides:{enumerable:br,value:Jr},registry:{enumerable:br,value:sr},version:{enumerable:br,value:e6},getChart:{enumerable:br,value:S0},register:{enumerable:br,value:(...t)=>{sr.add(...t),xu()}},unregister:{enumerable:br,value:(...t)=>{sr.remove(...t),xu()}}});function E0(t,e,r){const{startAngle:n,pixelMargin:o,x:a,y:i,outerRadius:s,innerRadius:l}=e;let c=o/s;t.beginPath(),t.arc(a,i,s,n-c,r+c),l>o?(c=o/l,t.arc(a,i,l,r+c,n-c,!0)):t.arc(a,i,o,r+$e,n-$e),t.closePath(),t.clip()}function n6(t){return $l(t,["outerStart","outerEnd","innerStart","innerEnd"])}function o6(t,e,r,n){const o=n6(t.options.borderRadius),a=(r-e)/2,i=Math.min(a,n*e/2),s=l=>{const c=(r-Math.min(a,l))*n/2;return bt(l,0,Math.min(a,c))};return{outerStart:s(o.outerStart),outerEnd:s(o.outerEnd),innerStart:bt(o.innerStart,0,i),innerEnd:bt(o.innerEnd,0,i)}}function pn(t,e,r,n){return{x:r+t*Math.cos(e),y:n+t*Math.sin(e)}}function qs(t,e,r,n){const{x:o,y:a,startAngle:i,pixelMargin:s,innerRadius:l}=e,c=Math.max(e.outerRadius+r-s,0),d=l>0?l+r+s:0,u=n-i,f=Math.max(.001,u*c-r/Oe)/c,p=(u-f)/2,h=i+p,g=n-p,{outerStart:b,outerEnd:x,innerStart:C,innerEnd:k}=o6(e,d,c,g-h),B=c-b,_=c-x,T=h+b/B,R=g-x/_,D=d+C,O=d+k,U=h+C/D,K=g-k/O;if(t.beginPath(),t.arc(o,a,c,T,R),x>0){const H=pn(_,R,o,a);t.arc(H.x,H.y,x,R,g+$e)}const q=pn(O,g,o,a);if(t.lineTo(q.x,q.y),k>0){const H=pn(O,K,o,a);t.arc(H.x,H.y,k,g+$e,K+Math.PI)}if(t.arc(o,a,d,g-k/d,h+C/d,!0),C>0){const H=pn(D,U,o,a);t.arc(H.x,H.y,C,U+Math.PI,h-$e)}const j=pn(B,h,o,a);if(t.lineTo(j.x,j.y),b>0){const H=pn(B,T,o,a);t.arc(H.x,H.y,b,h-$e,T)}t.closePath()}function a6(t,e,r){const{fullCircles:n,startAngle:o,circumference:a}=e;let i=e.endAngle;if(n){qs(t,e,r,o+xe);for(let s=0;s<n;++s)t.fill();isNaN(a)||(i=o+a%xe,a%xe===0&&(i+=xe))}return qs(t,e,r,i),t.fill(),i}function i6(t,e,r){const{x:n,y:o,startAngle:a,pixelMargin:i,fullCircles:s}=e,l=Math.max(e.outerRadius-i,0),c=e.innerRadius+i;let d;for(r&&E0(t,e,a+xe),t.beginPath(),t.arc(n,o,c,a+xe,a,!0),d=0;d<s;++d)t.stroke();for(t.beginPath(),t.arc(n,o,l,a,a+xe),d=0;d<s;++d)t.stroke()}function s6(t,e,r,n){const{options:o}=e,a=o.borderAlign==="inner";o.borderWidth&&(a?(t.lineWidth=o.borderWidth*2,t.lineJoin="round"):(t.lineWidth=o.borderWidth,t.lineJoin="bevel"),e.fullCircles&&i6(t,e,a),a&&E0(t,e,n),qs(t,e,r,n),t.stroke())}class gi extends $t{constructor(e){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,r,n){const o=this.getProps(["x","y"],n),{angle:a,distance:i}=fR(o,{x:e,y:r}),{startAngle:s,endAngle:l,innerRadius:c,outerRadius:d,circumference:u}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),f=u>=xe||Da(a,s,l),p=i>=c&&i<=d;return f&&p}getCenterPoint(e){const{x:r,y:n,startAngle:o,endAngle:a,innerRadius:i,outerRadius:s}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],e),l=(o+a)/2,c=(i+s)/2;return{x:r+Math.cos(l)*c,y:n+Math.sin(l)*c}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const r=this,{options:n,circumference:o}=r,a=(n.offset||0)/2;if(r.pixelMargin=n.borderAlign==="inner"?.33:0,r.fullCircles=o>xe?Math.floor(o/xe):0,o===0||r.innerRadius<0||r.outerRadius<0)return;e.save();let i=0;if(a){i=a/2;const l=(r.startAngle+r.endAngle)/2;e.translate(Math.cos(l)*i,Math.sin(l)*i),r.circumference>=Oe&&(i=a)}e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor;const s=a6(e,r,i);s6(e,r,i,s),e.restore()}}gi.id="arc";gi.defaults={borderAlign:"center",borderColor:"#fff",borderRadius:0,borderWidth:2,offset:0,angle:void 0};gi.defaultRoutes={backgroundColor:"backgroundColor"};function _0(t,e,r=e){t.lineCap=ie(r.borderCapStyle,e.borderCapStyle),t.setLineDash(ie(r.borderDash,e.borderDash)),t.lineDashOffset=ie(r.borderDashOffset,e.borderDashOffset),t.lineJoin=ie(r.borderJoinStyle,e.borderJoinStyle),t.lineWidth=ie(r.borderWidth,e.borderWidth),t.strokeStyle=ie(r.borderColor,e.borderColor)}function l6(t,e,r){t.lineTo(r.x,r.y)}function c6(t){return t.stepped?MR:t.tension||t.cubicInterpolationMode==="monotone"?$R:l6}function T0(t,e,r={}){const n=t.length,{start:o=0,end:a=n-1}=r,{start:i,end:s}=e,l=Math.max(o,i),c=Math.min(a,s),d=o<i&&a<i||o>s&&a>s;return{count:n,start:l,loop:e.loop,ilen:c<l&&!d?n+c-l:c-l}}function d6(t,e,r,n){const{points:o,options:a}=e,{count:i,start:s,loop:l,ilen:c}=T0(o,r,n),d=c6(a);let{move:u=!0,reverse:f}=n||{},p,h,g;for(p=0;p<=c;++p)h=o[(s+(f?c-p:p))%i],!h.skip&&(u?(t.moveTo(h.x,h.y),u=!1):d(t,g,h,f,a.stepped),g=h);return l&&(h=o[(s+(f?c:0))%i],d(t,g,h,f,a.stepped)),!!l}function u6(t,e,r,n){const o=e.points,{count:a,start:i,ilen:s}=T0(o,r,n),{move:l=!0,reverse:c}=n||{};let d=0,u=0,f,p,h,g,b,x;const C=B=>(i+(c?s-B:B))%a,k=()=>{g!==b&&(t.lineTo(d,b),t.lineTo(d,g),t.lineTo(d,x))};for(l&&(p=o[C(0)],t.moveTo(p.x,p.y)),f=0;f<=s;++f){if(p=o[C(f)],p.skip)continue;const B=p.x,_=p.y,T=B|0;T===h?(_<g?g=_:_>b&&(b=_),d=(u*d+B)/++u):(k(),t.lineTo(B,_),h=T,u=0,g=b=_),x=_}k()}function Ys(t){const e=t.options,r=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!r?u6:d6}function f6(t){return t.stepped?b8:t.tension||t.cubicInterpolationMode==="monotone"?m8:Fr}function p6(t,e,r,n){let o=e._path;o||(o=e._path=new Path2D,e.path(o,r,n)&&o.closePath()),_0(t,e.options),t.stroke(o)}function h6(t,e,r,n){const{segments:o,options:a}=e,i=Ys(e);for(const s of o)_0(t,a,s.style),t.beginPath(),i(t,e,s,{start:r,end:r+n-1})&&t.closePath(),t.stroke()}const g6=typeof Path2D=="function";function b6(t,e,r,n){g6&&e.segments.length===1?p6(t,e,r,n):h6(t,e,r,n)}class Nr extends $t{constructor(e){super(),this.animated=!0,this.options=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,e&&Object.assign(this,e)}updateControlPoints(e,r){const n=this,o=n.options;if((o.tension||o.cubicInterpolationMode==="monotone")&&!o.stepped&&!n._pointsUpdated){const a=o.spanGaps?n._loop:n._fullLoop;l8(n._points,o,e,a,r),n._pointsUpdated=!0}}set points(e){const r=this;r._points=e,delete r._segments,delete r._path,r._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=S8(this,this.options.segment))}first(){const e=this.segments,r=this.points;return e.length&&r[e[0].start]}last(){const e=this.segments,r=this.points,n=e.length;return n&&r[e[n-1].end]}interpolate(e,r){const n=this,o=n.options,a=e[r],i=n.points,s=d0(n,{property:r,start:a,end:a});if(!s.length)return;const l=[],c=f6(o);let d,u;for(d=0,u=s.length;d<u;++d){const{start:f,end:p}=s[d],h=i[f],g=i[p];if(h===g){l.push(h);continue}const b=Math.abs((a-h[r])/(g[r]-h[r])),x=c(h,g,b,o.stepped);x[r]=e[r],l.push(x)}return l.length===1?l[0]:l}pathSegment(e,r,n){return Ys(this)(e,this,r,n)}path(e,r,n){const o=this,a=o.segments,i=Ys(o);let s=o._loop;r=r||0,n=n||o.points.length-r;for(const l of a)s&=i(e,o,l,{start:r,end:r+n-1});return!!s}draw(e,r,n,o){const a=this,i=a.options||{};!(a.points||[]).length||!i.borderWidth||(e.save(),b6(e,a,n,o),e.restore(),a.animated&&(a._pointsUpdated=!1,a._path=void 0))}}Nr.id="line";Nr.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};Nr.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};Nr.descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"};function Cu(t,e,r,n){const o=t.options,{[r]:a}=t.getProps([r],n);return Math.abs(e-a)<o.radius+o.hitRadius}class bi extends $t{constructor(e){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,r,n){const o=this.options,{x:a,y:i}=this.getProps(["x","y"],n);return Math.pow(e-a,2)+Math.pow(r-i,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(e,r){return Cu(this,e,"x",r)}inYRange(e,r){return Cu(this,e,"y",r)}getCenterPoint(e){const{x:r,y:n}=this.getProps(["x","y"],e);return{x:r,y:n}}size(e){e=e||this.options||{};let r=e.radius||0;r=Math.max(r,r&&e.hoverRadius||0);const n=r&&e.borderWidth||0;return(r+n)*2}draw(e){const r=this,n=r.options;r.skip||n.radius<.1||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,Pa(e,n,r.x,r.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}bi.id="point";bi.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};bi.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};function B0(t,e){const{x:r,y:n,base:o,width:a,height:i}=t.getProps(["x","y","base","width","height"],e);let s,l,c,d,u;return t.horizontal?(u=i/2,s=Math.min(r,o),l=Math.max(r,o),c=n-u,d=n+u):(u=a/2,s=r-u,l=r+u,c=Math.min(n,o),d=Math.max(n,o)),{left:s,top:c,right:l,bottom:d}}function A0(t){let e=t.options.borderSkipped;const r={};return e&&(e=t.horizontal?ku(e,"left","right",t.base>t.x):ku(e,"bottom","top",t.base<t.y),r[e]=!0),r}function ku(t,e,r,n){return n?(t=m6(t,e,r),t=wu(t,r,e)):t=wu(t,e,r),t}function m6(t,e,r){return t===e?r:t===r?e:t}function wu(t,e,r){return t==="start"?e:t==="end"?r:t}function Sr(t,e,r,n){return t?0:Math.max(Math.min(e,n),r)}function v6(t,e,r){const n=t.options.borderWidth,o=A0(t),a=Xp(n);return{t:Sr(o.top,a.top,0,r),r:Sr(o.right,a.right,0,e),b:Sr(o.bottom,a.bottom,0,r),l:Sr(o.left,a.left,0,e)}}function y6(t,e,r){const{enableBorderRadius:n}=t.getProps(["enableBorderRadius"]),o=t.options.borderRadius,a=Fl(o),i=Math.min(e,r),s=A0(t),l=n||be(o);return{topLeft:Sr(!l||s.top||s.left,a.topLeft,0,i),topRight:Sr(!l||s.top||s.right,a.topRight,0,i),bottomLeft:Sr(!l||s.bottom||s.left,a.bottomLeft,0,i),bottomRight:Sr(!l||s.bottom||s.right,a.bottomRight,0,i)}}function x6(t){const e=B0(t),r=e.right-e.left,n=e.bottom-e.top,o=v6(t,r/2,n/2),a=y6(t,r/2,n/2);return{outer:{x:e.left,y:e.top,w:r,h:n,radius:a},inner:{x:e.left+o.l,y:e.top+o.t,w:r-o.l-o.r,h:n-o.t-o.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,a.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(o.b,o.r))}}}}function ns(t,e,r,n){const o=e===null,a=r===null,s=t&&!(o&&a)&&B0(t,n);return s&&(o||e>=s.left&&e<=s.right)&&(a||r>=s.top&&r<=s.bottom)}function C6(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function k6(t,e){t.rect(e.x,e.y,e.w,e.h)}class mi extends $t{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,e&&Object.assign(this,e)}draw(e){const r=this.options,{inner:n,outer:o}=x6(this),a=C6(o.radius)?Oa:k6;e.save(),(o.w!==n.w||o.h!==n.h)&&(e.beginPath(),a(e,o),e.clip(),a(e,n),e.fillStyle=r.borderColor,e.fill("evenodd")),e.beginPath(),a(e,n),e.fillStyle=r.backgroundColor,e.fill(),e.restore()}inRange(e,r,n){return ns(this,e,r,n)}inXRange(e,r){return ns(this,e,null,r)}inYRange(e,r){return ns(this,null,e,r)}getCenterPoint(e){const{x:r,y:n,base:o,horizontal:a}=this.getProps(["x","y","base","horizontal"],e);return{x:a?(r+o)/2:r,y:a?n:(n+o)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}mi.id="bar";mi.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,enableBorderRadius:!0,pointStyle:void 0};mi.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};var w6=Object.freeze({__proto__:null,ArcElement:gi,LineElement:Nr,PointElement:bi,BarElement:mi});function S6(t,e,r,n,o){const a=o.samples||n;if(a>=r)return t.slice(e,e+r);const i=[],s=(r-2)/(a-2);let l=0;const c=e+r-1;let d=e,u,f,p,h,g;for(i[l++]=t[d],u=0;u<a-2;u++){let b=0,x=0,C;const k=Math.floor((u+1)*s)+1+e,B=Math.min(Math.floor((u+2)*s)+1,r)+e,_=B-k;for(C=k;C<B;C++)b+=t[C].x,x+=t[C].y;b/=_,x/=_;const T=Math.floor(u*s)+1+e,R=Math.floor((u+1)*s)+1+e,{x:D,y:O}=t[d];for(p=h=-1,C=T;C<R;C++)h=.5*Math.abs((D-b)*(t[C].y-O)-(D-t[C].x)*(x-O)),h>p&&(p=h,f=t[C],g=C);i[l++]=f,d=g}return i[l++]=t[c],i}function E6(t,e,r,n){let o=0,a=0,i,s,l,c,d,u,f,p,h,g;const b=[],x=e+r-1,C=t[e].x,B=t[x].x-C;for(i=e;i<e+r;++i){s=t[i],l=(s.x-C)/B*n,c=s.y;const _=l|0;if(_===d)c<h?(h=c,u=i):c>g&&(g=c,f=i),o=(a*o+s.x)/++a;else{const T=i-1;if(!fe(u)&&!fe(f)){const R=Math.min(u,f),D=Math.max(u,f);R!==p&&R!==T&&b.push({...t[R],x:o}),D!==p&&D!==T&&b.push({...t[D],x:o})}i>0&&T!==p&&b.push(t[T]),b.push(s),d=_,a=0,h=g=c,u=f=p=i}}return b}function I0(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{value:e})}}function Su(t){t.data.datasets.forEach(e=>{I0(e)})}function _6(t,e){const r=e.length;let n=0,o;const{iScale:a}=t,{min:i,max:s,minDefined:l,maxDefined:c}=a.getUserBounds();return l&&(n=bt(Wr(e,a.axis,i).lo,0,r-1)),c?o=bt(Wr(e,a.axis,s).hi+1,n,r)-n:o=r-n,{start:n,count:o}}var T6={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,r)=>{if(!r.enabled){Su(t);return}const n=t.width;t.data.datasets.forEach((o,a)=>{const{_data:i,indexAxis:s}=o,l=t.getDatasetMeta(a),c=i||o.data;if(Qn([s,t.options.indexAxis])==="y"||l.type!=="line")return;const d=t.scales[l.xAxisID];if(d.type!=="linear"&&d.type!=="time"||t.options.parsing)return;let{start:u,count:f}=_6(l,c);if(f<=4*n){I0(o);return}fe(i)&&(o._data=c,delete o.data,Object.defineProperty(o,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(h){this._data=h}}));let p;switch(r.algorithm){case"lttb":p=S6(c,u,f,n,r);break;case"min-max":p=E6(c,u,f,n);break;default:throw new Error(`Unsupported decimation algorithm '${r.algorithm}'`)}o._decimated=p})},destroy(t){Su(t)}};function B6(t,e){const r=t.getDatasetMeta(e);return r&&t.isDatasetVisible(e)?r.dataset:null}function A6(t){const e=t.options,r=e.fill;let n=ie(r&&r.target,r);return n===void 0&&(n=!!e.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function I6(t,e,r){const n=A6(t);if(be(n))return isNaN(n.value)?!1:n;let o=parseFloat(n);return Fe(o)&&Math.floor(o)===o?((n[0]==="-"||n[0]==="+")&&(o=e+o),o===e||o<0||o>=r?!1:o):["origin","start","end","stack"].indexOf(n)>=0&&n}function R6(t){const{scale:e={},fill:r}=t;let n=null,o;return r==="start"?n=e.bottom:r==="end"?n=e.top:be(r)?n=e.getPixelForValue(r.value):e.getBasePixel&&(n=e.getBasePixel()),Fe(n)?(o=e.isHorizontal(),{x:o?n:null,y:o?null:n}):null}class R0{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,r,n){const{x:o,y:a,radius:i}=this;return r=r||{start:0,end:xe},e.arc(o,a,i,r.end,r.start,!0),!n.bounds}interpolate(e){const{x:r,y:n,radius:o}=this,a=e.angle;return{x:r+Math.cos(a)*o,y:n+Math.sin(a)*o,angle:a}}}function D6(t){const{scale:e,fill:r}=t,n=e.options,o=e.getLabels().length,a=[],i=n.reverse?e.max:e.min,s=n.reverse?e.min:e.max;let l,c,d;if(r==="start"?d=i:r==="end"?d=s:be(r)?d=r.value:d=e.getBaseValue(),n.grid.circular)return c=e.getPointPositionForValue(0,i),new R0({x:c.x,y:c.y,radius:e.getDistanceFromCenterForValue(d)});for(l=0;l<o;++l)a.push(e.getPointPositionForValue(l,d));return a}function L6(t){return(t.scale||{}).getPointPositionForValue?D6(t):R6(t)}function N6(t,e){const{x:r=null,y:n=null}=t||{},o=e.points,a=[];return e.segments.forEach(i=>{const s=o[i.start],l=o[i.end];n!==null?(a.push({x:s.x,y:n}),a.push({x:l.x,y:n})):r!==null&&(a.push({x:r,y:s.y}),a.push({x:r,y:l.y}))}),a}function P6(t){const{chart:e,scale:r,index:n,line:o}=t,a=[],i=o.segments,s=o.points,l=M6(e,n);l.push(D0({x:null,y:r.bottom},o));for(let c=0;c<i.length;c++){const d=i[c];for(let u=d.start;u<=d.end;u++)$6(a,s[u],l)}return new Nr({points:a,options:{}})}const O6=t=>t.type==="line"&&!t.hidden;function M6(t,e){const r=[],n=t.getSortedVisibleDatasetMetas();for(let o=0;o<n.length;o++){const a=n[o];if(a.index===e)break;O6(a)&&r.unshift(a.dataset)}return r}function $6(t,e,r){const n=[];for(let o=0;o<r.length;o++){const a=r[o],{first:i,last:s,point:l}=F6(a,e,"x");if(!(!l||i&&s)){if(i)n.unshift(l);else if(t.push(l),!s)break}}t.push(...n)}function F6(t,e,r){const n=t.interpolate(e,r);if(!n)return{};const o=n[r],a=t.segments,i=t.points;let s=!1,l=!1;for(let c=0;c<a.length;c++){const d=a[c],u=i[d.start][r],f=i[d.end][r];if(o>=u&&o<=f){s=o===u,l=o===f;break}}return{first:s,last:l,point:n}}function z6(t){const{chart:e,fill:r,line:n}=t;if(Fe(r))return B6(e,r);if(r==="stack")return P6(t);const o=L6(t);return o instanceof R0?o:D0(o,n)}function D0(t,e){let r=[],n=!1;return Be(t)?(n=!0,r=t):r=N6(t,e),r.length?new Nr({points:r,options:{tension:0},_loop:n,_fullLoop:n}):null}function U6(t,e,r){let o=t[e].fill;const a=[e];let i;if(!r)return o;for(;o!==!1&&a.indexOf(o)===-1;){if(!Fe(o))return o;if(i=t[o],!i)return!1;if(i.visible)return o;a.push(o),o=i.fill}return!1}function Eu(t,e,r){t.beginPath(),e.path(t),t.lineTo(e.last().x,r),t.lineTo(e.first().x,r),t.closePath(),t.clip()}function Xs(t,e,r,n){if(n)return;let o=e[t],a=r[t];return t==="angle"&&(o=Rt(o),a=Rt(a)),{property:t,start:o,end:a}}function _u(t,e,r,n){return t&&e?n(t[r],e[r]):t?t[r]:e?e[r]:0}function V6(t,e,r){const n=t.segments,o=t.points,a=e.points,i=[];for(const s of n){const l=Xs(r,o[s.start],o[s.end],s.loop);if(!e.segments){i.push({source:s,target:l,start:o[s.start],end:o[s.end]});continue}const c=d0(e,l);for(const d of c){const u=Xs(r,a[d.start],a[d.end],d.loop),f=c0(s,o,u);for(const p of f)i.push({source:p,target:d,start:{[r]:_u(l,u,"start",Math.max)},end:{[r]:_u(l,u,"end",Math.min)}})}}return i}function K6(t,e,r){const{top:n,bottom:o}=e.chart.chartArea,{property:a,start:i,end:s}=r||{};a==="x"&&(t.beginPath(),t.rect(i,n,s-i,o-n),t.clip())}function Tu(t,e,r,n){const o=e.interpolate(r,n);o&&t.lineTo(o.x,o.y)}function Bu(t,e){const{line:r,target:n,property:o,color:a,scale:i}=e,s=V6(r,n,o);for(const{source:l,target:c,start:d,end:u}of s){const{style:{backgroundColor:f=a}={}}=l;t.save(),t.fillStyle=f,K6(t,i,Xs(o,d,u)),t.beginPath();const p=!!r.pathSegment(t,l);p?t.closePath():Tu(t,n,u,o);const h=!!n.pathSegment(t,c,{move:p,reverse:!0}),g=p&&h;g||Tu(t,n,d,o),t.closePath(),t.fill(g?"evenodd":"nonzero"),t.restore()}}function H6(t,e){const{line:r,target:n,above:o,below:a,area:i,scale:s}=e,l=r._loop?"angle":e.axis;t.save(),l==="x"&&a!==o&&(Eu(t,n,i.top),Bu(t,{line:r,target:n,color:o,scale:s,property:l}),t.restore(),t.save(),Eu(t,n,i.bottom)),Bu(t,{line:r,target:n,color:a,scale:s,property:l}),t.restore()}function os(t,e,r){const n=z6(e),{line:o,scale:a,axis:i}=e,s=o.options,l=s.fill,c=s.backgroundColor,{above:d=c,below:u=c}=l||{};n&&o.points.length&&(Ro(t,r),H6(t,{line:o,target:n,above:d,below:u,area:r,scale:a,axis:i}),Do(t))}var W6={id:"filler",afterDatasetsUpdate(t,e,r){const n=(t.data.datasets||[]).length,o=[];let a,i,s,l;for(i=0;i<n;++i)a=t.getDatasetMeta(i),s=a.dataset,l=null,s&&s.options&&s instanceof Nr&&(l={visible:t.isDatasetVisible(i),index:i,fill:I6(s,i,n),chart:t,axis:a.controller.options.indexAxis,scale:a.vScale,line:s}),a.$filler=l,o.push(l);for(i=0;i<n;++i)l=o[i],!(!l||l.fill===!1)&&(l.fill=U6(o,i,r.propagate))},beforeDraw(t,e,r){const n=r.drawTime==="beforeDraw",o=t.getSortedVisibleDatasetMetas(),a=t.chartArea;for(let i=o.length-1;i>=0;--i){const s=o[i].$filler;s&&(s.line.updateControlPoints(a,s.axis),n&&os(t.ctx,s,a))}},beforeDatasetsDraw(t,e,r){if(r.drawTime!=="beforeDatasetsDraw")return;const n=t.getSortedVisibleDatasetMetas();for(let o=n.length-1;o>=0;--o){const a=n[o].$filler;a&&os(t.ctx,a,t.chartArea)}},beforeDatasetDraw(t,e,r){const n=e.meta.$filler;!n||n.fill===!1||r.drawTime!=="beforeDatasetDraw"||os(t.ctx,n,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Au=(t,e)=>{let{boxHeight:r=e,boxWidth:n=e}=t;return t.usePointStyle&&(r=Math.min(r,e),n=Math.min(n,e)),{boxWidth:n,boxHeight:r,itemHeight:Math.max(e,r)}},j6=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class Iu extends $t{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,r,n){const o=this;o.maxWidth=e,o.maxHeight=r,o._margins=n,o.setDimensions(),o.buildLabels(),o.fit()}setDimensions(){const e=this;e.isHorizontal()?(e.width=e.maxWidth,e.left=0,e.right=e.width):(e.height=e.maxHeight,e.top=0,e.bottom=e.height)}buildLabels(){const e=this,r=e.options.labels||{};let n=ke(r.generateLabels,[e.chart],e)||[];r.filter&&(n=n.filter(o=>r.filter(o,e.chart.data))),r.sort&&(n=n.sort((o,a)=>r.sort(o,a,e.chart.data))),e.options.reverse&&n.reverse(),e.legendItems=n}fit(){const e=this,{options:r,ctx:n}=e;if(!r.display){e.width=e.height=0;return}const o=r.labels,a=Ve(o.font),i=a.size,s=e._computeTitleHeight(),{boxWidth:l,itemHeight:c}=Au(o,i);let d,u;n.font=a.string,e.isHorizontal()?(d=e.maxWidth,u=e._fitRows(s,i,l,c)+10):(u=e.maxHeight,d=e._fitCols(s,i,l,c)+10),e.width=Math.min(d,r.maxWidth||e.maxWidth),e.height=Math.min(u,r.maxHeight||e.maxHeight)}_fitRows(e,r,n,o){const a=this,{ctx:i,maxWidth:s,options:{labels:{padding:l}}}=a,c=a.legendHitBoxes=[],d=a.lineWidths=[0],u=o+l;let f=e;i.textAlign="left",i.textBaseline="middle";let p=-1,h=-u;return a.legendItems.forEach((g,b)=>{const x=n+r/2+i.measureText(g.text).width;(b===0||d[d.length-1]+x+2*l>s)&&(f+=u,d[d.length-(b>0?0:1)]=0,h+=u,p++),c[b]={left:0,top:h,row:p,width:x,height:o},d[d.length-1]+=x+l}),f}_fitCols(e,r,n,o){const a=this,{ctx:i,maxHeight:s,options:{labels:{padding:l}}}=a,c=a.legendHitBoxes=[],d=a.columnSizes=[],u=s-e;let f=l,p=0,h=0,g=0,b=0,x=0;return a.legendItems.forEach((C,k)=>{const B=n+r/2+i.measureText(C.text).width;k>0&&h+r+2*l>u&&(f+=p+l,d.push({width:p,height:h}),g+=p+l,x++,b=0,p=h=0),p=Math.max(p,B),h+=r+l,c[k]={left:g,top:b,col:x,width:B,height:o},b+=o+l}),f+=p,d.push({width:p,height:h}),f}adjustHitBoxes(){const e=this;if(!e.options.display)return;const r=e._computeTitleHeight(),{legendHitBoxes:n,options:{align:o,labels:{padding:a}}}=e;if(this.isHorizontal()){let i=0,s=lt(o,e.left+a,e.right-e.lineWidths[i]);for(const l of n)i!==l.row&&(i=l.row,s=lt(o,e.left+a,e.right-e.lineWidths[i])),l.top+=e.top+r+a,l.left=s,s+=l.width+a}else{let i=0,s=lt(o,e.top+r+a,e.bottom-e.columnSizes[i].height);for(const l of n)l.col!==i&&(i=l.col,s=lt(o,e.top+r+a,e.bottom-e.columnSizes[i].height)),l.top=s,l.left+=e.left+a,s+=l.height+a}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){const e=this;if(e.options.display){const r=e.ctx;Ro(r,e),e._draw(),Do(r)}}_draw(){const e=this,{options:r,columnSizes:n,lineWidths:o,ctx:a}=e,{align:i,labels:s}=r,l=ce.color,c=po(r.rtl,e.left,e.width),d=Ve(s.font),{color:u,padding:f}=s,p=d.size,h=p/2;let g;e.drawTitle(),a.textAlign=c.textAlign("left"),a.textBaseline="middle",a.lineWidth=.5,a.font=d.string;const{boxWidth:b,boxHeight:x,itemHeight:C}=Au(s,p),k=function(D,O,U){if(isNaN(b)||b<=0||isNaN(x)||x<0)return;a.save();const K=ie(U.lineWidth,1);if(a.fillStyle=ie(U.fillStyle,l),a.lineCap=ie(U.lineCap,"butt"),a.lineDashOffset=ie(U.lineDashOffset,0),a.lineJoin=ie(U.lineJoin,"miter"),a.lineWidth=K,a.strokeStyle=ie(U.strokeStyle,l),a.setLineDash(ie(U.lineDash,[])),s.usePointStyle){const q={radius:b*Math.SQRT2/2,pointStyle:U.pointStyle,rotation:U.rotation,borderWidth:K},j=c.xPlus(D,b/2),H=O+h;Pa(a,q,j,H)}else{const q=O+Math.max((p-x)/2,0),j=c.leftForLtr(D,b),H=Fl(U.borderRadius);a.beginPath(),Object.values(H).some(G=>G!==0)?Oa(a,{x:j,y:q,w:b,h:x,radius:H}):a.rect(j,q,b,x),a.fill(),K!==0&&a.stroke()}a.restore()},B=function(D,O,U){en(a,U.text,D,O+C/2,d,{strikethrough:U.hidden,textAlign:U.textAlign})},_=e.isHorizontal(),T=this._computeTitleHeight();_?g={x:lt(i,e.left+f,e.right-o[0]),y:e.top+f+T,line:0}:g={x:e.left+f,y:lt(i,e.top+T+f,e.bottom-n[0].height),line:0},i0(e.ctx,r.textDirection);const R=C+f;e.legendItems.forEach((D,O)=>{a.strokeStyle=D.fontColor||u,a.fillStyle=D.fontColor||u;const U=a.measureText(D.text).width,K=c.textAlign(D.textAlign||(D.textAlign=s.textAlign)),q=b+p/2+U;let j=g.x,H=g.y;c.setWidth(e.width),_?O>0&&j+q+f>e.right&&(H=g.y+=R,g.line++,j=g.x=lt(i,e.left+f,e.right-o[g.line])):O>0&&H+R>e.bottom&&(j=g.x=j+n[g.line].width+f,g.line++,H=g.y=lt(i,e.top+T+f,e.bottom-n[g.line].height));const G=c.x(j);k(G,H,D),j=eR(K,j+b+h,e.right),B(c.x(j),H,D),_?g.x+=q+f:g.y+=R}),s0(e.ctx,r.textDirection)}drawTitle(){const e=this,r=e.options,n=r.title,o=Ve(n.font),a=pt(n.padding);if(!n.display)return;const i=po(r.rtl,e.left,e.width),s=e.ctx,l=n.position,c=o.size/2,d=a.top+c;let u,f=e.left,p=e.width;if(this.isHorizontal())p=Math.max(...e.lineWidths),u=e.top+d,f=lt(r.align,f,e.right-p);else{const g=e.columnSizes.reduce((b,x)=>Math.max(b,x.height),0);u=d+lt(r.align,e.top,e.bottom-g-r.labels.padding-e._computeTitleHeight())}const h=lt(l,f,f+p);s.textAlign=i.textAlign(Dl(l)),s.textBaseline="middle",s.strokeStyle=n.color,s.fillStyle=n.color,s.font=o.string,en(s,n.text,h,u,o)}_computeTitleHeight(){const e=this.options.title,r=Ve(e.font),n=pt(e.padding);return e.display?r.lineHeight+n.height:0}_getLegendItemAt(e,r){const n=this;let o,a,i;if(e>=n.left&&e<=n.right&&r>=n.top&&r<=n.bottom){for(i=n.legendHitBoxes,o=0;o<i.length;++o)if(a=i[o],e>=a.left&&e<=a.left+a.width&&r>=a.top&&r<=a.top+a.height)return n.legendItems[o]}return null}handleEvent(e){const r=this,n=r.options;if(!G6(e.type,n))return;const o=r._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"){const a=r._hoveredItem,i=j6(a,o);a&&!i&&ke(n.onLeave,[e,a,r],r),r._hoveredItem=o,o&&!i&&ke(n.onHover,[e,o,r],r)}else o&&ke(n.onClick,[e,o,r],r)}}function G6(t,e){return!!(t==="mousemove"&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var q6={id:"legend",_element:Iu,start(t,e,r){const n=t.legend=new Iu({ctx:t.ctx,options:r,chart:t});Bt.configure(t,n,r),Bt.addBox(t,n)},stop(t){Bt.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,r){const n=t.legend;Bt.configure(t,n,r),n.options=r},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,r){const n=e.datasetIndex,o=r.chart;o.isDatasetVisible(n)?(o.hide(n),e.hidden=!0):(o.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:r,pointStyle:n,textAlign:o,color:a}}=t.legend.options;return t._getSortedDatasetMetas().map(i=>{const s=i.controller.getStyle(r?0:void 0),l=pt(s.borderWidth);return{text:e[i.index].label,fillStyle:s.backgroundColor,fontColor:a,hidden:!i.visible,lineCap:s.borderCapStyle,lineDash:s.borderDash,lineDashOffset:s.borderDashOffset,lineJoin:s.borderJoinStyle,lineWidth:(l.width+l.height)/4,strokeStyle:s.borderColor,pointStyle:n||s.pointStyle,rotation:s.rotation,textAlign:o||s.textAlign,borderRadius:0,datasetIndex:i.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class L0 extends $t{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,r){const n=this,o=n.options;if(n.left=0,n.top=0,!o.display){n.width=n.height=n.right=n.bottom=0;return}n.width=n.right=e,n.height=n.bottom=r;const a=Be(o.text)?o.text.length:1;n._padding=pt(o.padding);const i=a*Ve(o.font).lineHeight+n._padding.height;n.isHorizontal()?n.height=i:n.width=i}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:r,left:n,bottom:o,right:a,options:i}=this,s=i.align;let l=0,c,d,u;return this.isHorizontal()?(d=lt(s,n,a),u=r+e,c=a-n):(i.position==="left"?(d=n+e,u=lt(s,o,r),l=Oe*-.5):(d=a-e,u=lt(s,r,o),l=Oe*.5),c=o-r),{titleX:d,titleY:u,maxWidth:c,rotation:l}}draw(){const e=this,r=e.ctx,n=e.options;if(!n.display)return;const o=Ve(n.font),i=o.lineHeight/2+e._padding.top,{titleX:s,titleY:l,maxWidth:c,rotation:d}=e._drawArgs(i);en(r,n.text,0,0,o,{color:n.color,maxWidth:c,rotation:d,textAlign:Dl(n.align),textBaseline:"middle",translation:[s,l]})}}function Y6(t,e){const r=new L0({ctx:t.ctx,options:e,chart:t});Bt.configure(t,r,e),Bt.addBox(t,r),t.titleBlock=r}var X6={id:"title",_element:L0,start(t,e,r){Y6(t,r)},stop(t){const e=t.titleBlock;Bt.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,r){const n=t.titleBlock;Bt.configure(t,n,r),n.options=r},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ho={average(t){if(!t.length)return!1;let e,r,n=0,o=0,a=0;for(e=0,r=t.length;e<r;++e){const i=t[e].element;if(i&&i.hasValue()){const s=i.tooltipPosition();n+=s.x,o+=s.y,++a}}return{x:n/a,y:o/a}},nearest(t,e){if(!t.length)return!1;let r=e.x,n=e.y,o=Number.POSITIVE_INFINITY,a,i,s;for(a=0,i=t.length;a<i;++a){const l=t[a].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),d=Vs(e,c);d<o&&(o=d,s=l)}}if(s){const l=s.tooltipPosition();r=l.x,n=l.y}return{x:r,y:n}}};function zt(t,e){return e&&(Be(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function nr(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function Q6(t,e){const{element:r,datasetIndex:n,index:o}=e,a=t.getDatasetMeta(n).controller,{label:i,value:s}=a.getLabelAndValue(o);return{chart:t,label:i,parsed:a.getParsed(o),raw:t.data.datasets[n].data[o],formattedValue:s,dataset:a.getDataset(),dataIndex:o,datasetIndex:n,element:r}}function Ru(t,e){const r=t._chart.ctx,{body:n,footer:o,title:a}=t,{boxWidth:i,boxHeight:s}=e,l=Ve(e.bodyFont),c=Ve(e.titleFont),d=Ve(e.footerFont),u=a.length,f=o.length,p=n.length,h=pt(e.padding);let g=h.height,b=0,x=n.reduce((B,_)=>B+_.before.length+_.lines.length+_.after.length,0);if(x+=t.beforeBody.length+t.afterBody.length,u&&(g+=u*c.lineHeight+(u-1)*e.titleSpacing+e.titleMarginBottom),x){const B=e.displayColors?Math.max(s,l.lineHeight):l.lineHeight;g+=p*B+(x-p)*l.lineHeight+(x-1)*e.bodySpacing}f&&(g+=e.footerMarginTop+f*d.lineHeight+(f-1)*e.footerSpacing);let C=0;const k=function(B){b=Math.max(b,r.measureText(B).width+C)};return r.save(),r.font=c.string,ve(t.title,k),r.font=l.string,ve(t.beforeBody.concat(t.afterBody),k),C=e.displayColors?i+2:0,ve(n,B=>{ve(B.before,k),ve(B.lines,k),ve(B.after,k)}),C=0,r.font=d.string,ve(t.footer,k),r.restore(),b+=h.width,{width:b,height:g}}function Z6(t,e){const{y:r,height:n}=e;return r<n/2?"top":r>t.height-n/2?"bottom":"center"}function J6(t,e,r,n){const{x:o,width:a}=n,i=r.caretSize+r.caretPadding;if(t==="left"&&o+a+i>e.width||t==="right"&&o-a-i<0)return!0}function eD(t,e,r,n){const{x:o,width:a}=r,{width:i,chartArea:{left:s,right:l}}=t;let c="center";return n==="center"?c=o<=(s+l)/2?"left":"right":o<=a/2?c="left":o>=i-a/2&&(c="right"),J6(c,t,e,r)&&(c="center"),c}function Du(t,e,r){const n=e.yAlign||Z6(t,r);return{xAlign:e.xAlign||eD(t,e,r,n),yAlign:n}}function tD(t,e){let{x:r,width:n}=t;return e==="right"?r-=n:e==="center"&&(r-=n/2),r}function rD(t,e,r){let{y:n,height:o}=t;return e==="top"?n+=r:e==="bottom"?n-=o+r:n-=o/2,n}function Lu(t,e,r,n){const{caretSize:o,caretPadding:a,cornerRadius:i}=t,{xAlign:s,yAlign:l}=r,c=o+a,d=i+a;let u=tD(e,s);const f=rD(e,l,c);return l==="center"?s==="left"?u+=c:s==="right"&&(u-=c):s==="left"?u-=d:s==="right"&&(u+=d),{x:bt(u,0,n.width-e.width),y:bt(f,0,n.height-e.height)}}function ea(t,e,r){const n=pt(r.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-n.right:t.x+n.left}function Nu(t){return zt([],nr(t))}function nD(t,e,r){return Object.assign(Object.create(t),{tooltip:e,tooltipItems:r,type:"tooltip"})}function Pu(t,e){const r=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return r?t.override(r):t}class Qs extends $t{constructor(e){super(),this.opacity=0,this._active=[],this._chart=e._chart,this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this,r=e._cachedAnimations;if(r)return r;const n=e._chart,o=e.options.setContext(e.getContext()),a=o.enabled&&n.options.animation&&o.animations,i=new u0(e._chart,a);return a._cacheable&&(e._cachedAnimations=Object.freeze(i)),i}getContext(){const e=this;return e.$context||(e.$context=nD(e._chart.getContext(),e,e._tooltipItems))}getTitle(e,r){const n=this,{callbacks:o}=r,a=o.beforeTitle.apply(n,[e]),i=o.title.apply(n,[e]),s=o.afterTitle.apply(n,[e]);let l=[];return l=zt(l,nr(a)),l=zt(l,nr(i)),l=zt(l,nr(s)),l}getBeforeBody(e,r){return Nu(r.callbacks.beforeBody.apply(this,[e]))}getBody(e,r){const n=this,{callbacks:o}=r,a=[];return ve(e,i=>{const s={before:[],lines:[],after:[]},l=Pu(o,i);zt(s.before,nr(l.beforeLabel.call(n,i))),zt(s.lines,l.label.call(n,i)),zt(s.after,nr(l.afterLabel.call(n,i))),a.push(s)}),a}getAfterBody(e,r){return Nu(r.callbacks.afterBody.apply(this,[e]))}getFooter(e,r){const n=this,{callbacks:o}=r,a=o.beforeFooter.apply(n,[e]),i=o.footer.apply(n,[e]),s=o.afterFooter.apply(n,[e]);let l=[];return l=zt(l,nr(a)),l=zt(l,nr(i)),l=zt(l,nr(s)),l}_createItems(e){const r=this,n=r._active,o=r._chart.data,a=[],i=[],s=[];let l=[],c,d;for(c=0,d=n.length;c<d;++c)l.push(Q6(r._chart,n[c]));return e.filter&&(l=l.filter((u,f,p)=>e.filter(u,f,p,o))),e.itemSort&&(l=l.sort((u,f)=>e.itemSort(u,f,o))),ve(l,u=>{const f=Pu(e.callbacks,u);a.push(f.labelColor.call(r,u)),i.push(f.labelPointStyle.call(r,u)),s.push(f.labelTextColor.call(r,u))}),r.labelColors=a,r.labelPointStyles=i,r.labelTextColors=s,r.dataPoints=l,l}update(e,r){const n=this,o=n.options.setContext(n.getContext()),a=n._active;let i,s=[];if(!a.length)n.opacity!==0&&(i={opacity:0});else{const l=ho[o.position].call(n,a,n._eventPosition);s=n._createItems(o),n.title=n.getTitle(s,o),n.beforeBody=n.getBeforeBody(s,o),n.body=n.getBody(s,o),n.afterBody=n.getAfterBody(s,o),n.footer=n.getFooter(s,o);const c=n._size=Ru(n,o),d=Object.assign({},l,c),u=Du(n._chart,o,d),f=Lu(o,d,u,n._chart);n.xAlign=u.xAlign,n.yAlign=u.yAlign,i={opacity:1,x:f.x,y:f.y,width:c.width,height:c.height,caretX:l.x,caretY:l.y}}n._tooltipItems=s,n.$context=void 0,i&&n._resolveAnimations().update(n,i),e&&o.external&&o.external.call(n,{chart:n._chart,tooltip:n,replay:r})}drawCaret(e,r,n,o){const a=this.getCaretPosition(e,n,o);r.lineTo(a.x1,a.y1),r.lineTo(a.x2,a.y2),r.lineTo(a.x3,a.y3)}getCaretPosition(e,r,n){const{xAlign:o,yAlign:a}=this,{cornerRadius:i,caretSize:s}=n,{x:l,y:c}=e,{width:d,height:u}=r;let f,p,h,g,b,x;return a==="center"?(b=c+u/2,o==="left"?(f=l,p=f-s,g=b+s,x=b-s):(f=l+d,p=f+s,g=b-s,x=b+s),h=f):(o==="left"?p=l+i+s:o==="right"?p=l+d-i-s:p=this.caretX,a==="top"?(g=c,b=g-s,f=p-s,h=p+s):(g=c+u,b=g+s,f=p+s,h=p-s),x=g),{x1:f,x2:p,x3:h,y1:g,y2:b,y3:x}}drawTitle(e,r,n){const o=this,a=o.title,i=a.length;let s,l,c;if(i){const d=po(n.rtl,o.x,o.width);for(e.x=ea(o,n.titleAlign,n),r.textAlign=d.textAlign(n.titleAlign),r.textBaseline="middle",s=Ve(n.titleFont),l=n.titleSpacing,r.fillStyle=n.titleColor,r.font=s.string,c=0;c<i;++c)r.fillText(a[c],d.x(e.x),e.y+s.lineHeight/2),e.y+=s.lineHeight+l,c+1===i&&(e.y+=n.titleMarginBottom-l)}}_drawColorBox(e,r,n,o,a){const i=this,s=i.labelColors[n],l=i.labelPointStyles[n],{boxHeight:c,boxWidth:d}=a,u=Ve(a.bodyFont),f=ea(i,"left",a),p=o.x(f),h=c<u.lineHeight?(u.lineHeight-c)/2:0,g=r.y+h;if(a.usePointStyle){const b={radius:Math.min(d,c)/2,pointStyle:l.pointStyle,rotation:l.rotation,borderWidth:1},x=o.leftForLtr(p,d)+d/2,C=g+c/2;e.strokeStyle=a.multiKeyBackground,e.fillStyle=a.multiKeyBackground,Pa(e,b,x,C),e.strokeStyle=s.borderColor,e.fillStyle=s.backgroundColor,Pa(e,b,x,C)}else{e.lineWidth=s.borderWidth||1,e.strokeStyle=s.borderColor,e.setLineDash(s.borderDash||[]),e.lineDashOffset=s.borderDashOffset||0;const b=o.leftForLtr(p,d),x=o.leftForLtr(o.xPlus(p,1),d-2),C=Fl(s.borderRadius);Object.values(C).some(k=>k!==0)?(e.beginPath(),e.fillStyle=a.multiKeyBackground,Oa(e,{x:b,y:g,w:d,h:c,radius:C}),e.fill(),e.stroke(),e.fillStyle=s.backgroundColor,e.beginPath(),Oa(e,{x,y:g+1,w:d-2,h:c-2,radius:C}),e.fill()):(e.fillStyle=a.multiKeyBackground,e.fillRect(b,g,d,c),e.strokeRect(b,g,d,c),e.fillStyle=s.backgroundColor,e.fillRect(x,g+1,d-2,c-2))}e.fillStyle=i.labelTextColors[n]}drawBody(e,r,n){const o=this,{body:a}=o,{bodySpacing:i,bodyAlign:s,displayColors:l,boxHeight:c,boxWidth:d}=n,u=Ve(n.bodyFont);let f=u.lineHeight,p=0;const h=po(n.rtl,o.x,o.width),g=function(D){r.fillText(D,h.x(e.x+p),e.y+f/2),e.y+=f+i},b=h.textAlign(s);let x,C,k,B,_,T,R;for(r.textAlign=s,r.textBaseline="middle",r.font=u.string,e.x=ea(o,b,n),r.fillStyle=n.bodyColor,ve(o.beforeBody,g),p=l&&b!=="right"?s==="center"?d/2+1:d+2:0,B=0,T=a.length;B<T;++B){for(x=a[B],C=o.labelTextColors[B],r.fillStyle=C,ve(x.before,g),k=x.lines,l&&k.length&&(o._drawColorBox(r,e,B,h,n),f=Math.max(u.lineHeight,c)),_=0,R=k.length;_<R;++_)g(k[_]),f=u.lineHeight;ve(x.after,g)}p=0,f=u.lineHeight,ve(o.afterBody,g),e.y-=i}drawFooter(e,r,n){const o=this,a=o.footer,i=a.length;let s,l;if(i){const c=po(n.rtl,o.x,o.width);for(e.x=ea(o,n.footerAlign,n),e.y+=n.footerMarginTop,r.textAlign=c.textAlign(n.footerAlign),r.textBaseline="middle",s=Ve(n.footerFont),r.fillStyle=n.footerColor,r.font=s.string,l=0;l<i;++l)r.fillText(a[l],c.x(e.x),e.y+s.lineHeight/2),e.y+=s.lineHeight+n.footerSpacing}}drawBackground(e,r,n,o){const{xAlign:a,yAlign:i}=this,{x:s,y:l}=e,{width:c,height:d}=n,u=o.cornerRadius;r.fillStyle=o.backgroundColor,r.strokeStyle=o.borderColor,r.lineWidth=o.borderWidth,r.beginPath(),r.moveTo(s+u,l),i==="top"&&this.drawCaret(e,r,n,o),r.lineTo(s+c-u,l),r.quadraticCurveTo(s+c,l,s+c,l+u),i==="center"&&a==="right"&&this.drawCaret(e,r,n,o),r.lineTo(s+c,l+d-u),r.quadraticCurveTo(s+c,l+d,s+c-u,l+d),i==="bottom"&&this.drawCaret(e,r,n,o),r.lineTo(s+u,l+d),r.quadraticCurveTo(s,l+d,s,l+d-u),i==="center"&&a==="left"&&this.drawCaret(e,r,n,o),r.lineTo(s,l+u),r.quadraticCurveTo(s,l,s+u,l),r.closePath(),r.fill(),o.borderWidth>0&&r.stroke()}_updateAnimationTarget(e){const r=this,n=r._chart,o=r.$animations,a=o&&o.x,i=o&&o.y;if(a||i){const s=ho[e.position].call(r,r._active,r._eventPosition);if(!s)return;const l=r._size=Ru(r,e),c=Object.assign({},s,r._size),d=Du(n,e,c),u=Lu(e,c,d,n);(a._to!==u.x||i._to!==u.y)&&(r.xAlign=d.xAlign,r.yAlign=d.yAlign,r.width=l.width,r.height=l.height,r.caretX=s.x,r.caretY=s.y,r._resolveAnimations().update(r,u))}}draw(e){const r=this,n=r.options.setContext(r.getContext());let o=r.opacity;if(!o)return;r._updateAnimationTarget(n);const a={width:r.width,height:r.height},i={x:r.x,y:r.y};o=Math.abs(o)<.001?0:o;const s=pt(n.padding),l=r.title.length||r.beforeBody.length||r.body.length||r.afterBody.length||r.footer.length;n.enabled&&l&&(e.save(),e.globalAlpha=o,r.drawBackground(i,e,a,n),i0(e,n.textDirection),i.y+=s.top,r.drawTitle(i,e,n),r.drawBody(i,e,n),r.drawFooter(i,e,n),s0(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,r){const n=this,o=n._active,a=e.map(({datasetIndex:l,index:c})=>{const d=n._chart.getDatasetMeta(l);if(!d)throw new Error("Cannot find a dataset at index "+l);return{datasetIndex:l,element:d.data[c],index:c}}),i=!Aa(o,a),s=n._positionChanged(a,r);(i||s)&&(n._active=a,n._eventPosition=r,n.update(!0))}handleEvent(e,r){const n=this,o=n.options,a=n._active||[];let i=!1,s=[];e.type!=="mouseout"&&(s=n._chart.getElementsAtEventForMode(e,o.mode,o,r),o.reverse&&s.reverse());const l=n._positionChanged(s,e);return i=r||!Aa(s,a)||l,i&&(n._active=s,(o.enabled||o.external)&&(n._eventPosition={x:e.x,y:e.y},n.update(!0,r))),i}_positionChanged(e,r){const{caretX:n,caretY:o,options:a}=this,i=ho[a.position].call(this,e,r);return i!==!1&&(n!==i.x||o!==i.y)}}Qs.positioners=ho;var oD={id:"tooltip",_element:Qs,positioners:ho,afterInit(t,e,r){r&&(t.tooltip=new Qs({_chart:t,options:r}))},beforeUpdate(t,e,r){t.tooltip&&t.tooltip.initialize(r)},reset(t,e,r){t.tooltip&&t.tooltip.initialize(r)},afterDraw(t){const e=t.tooltip,r={tooltip:e};t.notifyPlugins("beforeTooltipDraw",r)!==!1&&(e&&e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",r))},afterEvent(t,e){if(t.tooltip){const r=e.replay;t.tooltip.handleEvent(e.event,r)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:er,title(t){if(t.length>0){const e=t[0],r=e.chart.data.labels,n=r?r.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return r[e.dataIndex]}return""},afterTitle:er,beforeBody:er,beforeLabel:er,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const r=t.formattedValue;return fe(r)||(e+=r),e},labelColor(t){const r=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:r.borderColor,backgroundColor:r.backgroundColor,borderWidth:r.borderWidth,borderDash:r.borderDash,borderDashOffset:r.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const r=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:r.pointStyle,rotation:r.rotation}},afterLabel:er,afterBody:er,beforeFooter:er,footer:er,afterFooter:er}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},aD=Object.freeze({__proto__:null,Decimation:T6,Filler:W6,Legend:q6,Title:X6,Tooltip:oD});const iD=(t,e,r)=>typeof e=="string"?t.push(e)-1:isNaN(e)?null:r;function sD(t,e,r){const n=t.indexOf(e);if(n===-1)return iD(t,e,r);const o=t.lastIndexOf(e);return n!==o?r:n}const lD=(t,e)=>t===null?null:bt(Math.round(t),0,e);class Fa extends cn{constructor(e){super(e),this._startValue=void 0,this._valueRange=0}parse(e,r){if(fe(e))return null;const n=this.getLabels();return r=isFinite(r)&&n[r]===e?r:sD(n,e,ie(r,e)),lD(r,n.length-1)}determineDataLimits(){const e=this,{minDefined:r,maxDefined:n}=e.getUserBounds();let{min:o,max:a}=e.getMinMax(!0);e.options.bounds==="ticks"&&(r||(o=0),n||(a=e.getLabels().length-1)),e.min=o,e.max=a}buildTicks(){const e=this,r=e.min,n=e.max,o=e.options.offset,a=[];let i=e.getLabels();i=r===0&&n===i.length-1?i:i.slice(r,n+1),e._valueRange=Math.max(i.length-(o?0:1),1),e._startValue=e.min-(o?.5:0);for(let s=r;s<=n;s++)a.push({value:s});return a}getLabelForValue(e){const n=this.getLabels();return e>=0&&e<n.length?n[e]:e}configure(){const e=this;super.configure(),e.isHorizontal()||(e._reversePixels=!e._reversePixels)}getPixelForValue(e){const r=this;return typeof e!="number"&&(e=r.parse(e)),e===null?NaN:r.getPixelForDecimal((e-r._startValue)/r._valueRange)}getPixelForTick(e){const r=this,n=r.ticks;return e<0||e>n.length-1?null:r.getPixelForValue(n[e].value)}getValueForPixel(e){const r=this;return Math.round(r._startValue+r.getDecimalForPixel(e)*r._valueRange)}getBasePixel(){return this.bottom}}Fa.id="category";Fa.defaults={ticks:{callback:Fa.prototype.getLabelForValue}};function cD(t,e){const r=[],{bounds:o,step:a,min:i,max:s,precision:l,count:c,maxTicks:d,maxDigits:u,includeBounds:f}=t,p=a||1,h=d-1,{min:g,max:b}=e,x=!fe(i),C=!fe(s),k=!fe(c),B=(b-g)/(u+1);let _=Ld((b-g)/h/p)*p,T,R,D,O;if(_<1e-14&&!x&&!C)return[{value:g},{value:b}];O=Math.ceil(b/_)-Math.floor(g/_),O>h&&(_=Ld(O*_/h/p)*p),fe(l)||(T=Math.pow(10,l),_=Math.ceil(_*T)/T),o==="ticks"?(R=Math.floor(g/_)*_,D=Math.ceil(b/_)*_):(R=g,D=b),x&&C&&a&&uR((s-i)/a,_/1e3)?(O=Math.min((s-i)/_,d),_=(s-i)/O,R=i,D=s):k?(R=x?i:R,D=C?s:D,O=c-1,_=(D-R)/O):(O=(D-R)/_,ca(O,Math.round(O),_/1e3)?O=Math.round(O):O=Math.ceil(O));const U=Math.max(Nd(_),Nd(R));T=Math.pow(10,fe(l)?U:l),R=Math.round(R*T)/T,D=Math.round(D*T)/T;let K=0;for(x&&(f&&R!==i?(r.push({value:i}),R<i&&K++,ca(Math.round((R+K*_)*T)/T,i,Ou(i,B,t))&&K++):R<i&&K++);K<O;++K)r.push({value:Math.round((R+K*_)*T)/T});return C&&f&&D!==s?ca(r[r.length-1].value,s,Ou(s,B,t))?r[r.length-1].value=s:r.push({value:s}):(!C||D===s)&&r.push({value:D}),r}function Ou(t,e,{horizontal:r,minRotation:n}){const o=Pt(n),a=(r?Math.sin(o):Math.cos(o))||.001,i=.75*e*(""+t).length;return Math.min(e/a,i)}class za extends cn{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,r){return fe(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const e=this,{beginAtZero:r}=e.options,{minDefined:n,maxDefined:o}=e.getUserBounds();let{min:a,max:i}=e;const s=c=>a=n?a:c,l=c=>i=o?i:c;if(r){const c=Dr(a),d=Dr(i);c<0&&d<0?l(0):c>0&&d>0&&s(0)}a===i&&(l(i+1),r||s(a-1)),e.min=a,e.max=i}getTickLimit(){const e=this,r=e.options.ticks;let{maxTicksLimit:n,stepSize:o}=r,a;return o?a=Math.ceil(e.max/o)-Math.floor(e.min/o)+1:(a=e.computeTickLimit(),n=n||11),n&&(a=Math.min(n,a)),a}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this,r=e.options,n=r.ticks;let o=e.getTickLimit();o=Math.max(2,o);const a={maxTicks:o,bounds:r.bounds,min:r.min,max:r.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:e._maxDigits(),horizontal:e.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},i=e._range||e,s=cD(a,i);return r.bounds==="ticks"&&Hp(s,e,"value"),r.reverse?(s.reverse(),e.start=e.max,e.end=e.min):(e.start=e.min,e.end=e.max),s}configure(){const e=this,r=e.ticks;let n=e.min,o=e.max;if(super.configure(),e.options.offset&&r.length){const a=(o-n)/Math.max(r.length-1,1)/2;n-=a,o+=a}e._startValue=n,e._endValue=o,e._valueRange=o-n}getLabelForValue(e){return Lo(e,this.chart.options.locale)}}class Kl extends za{determineDataLimits(){const e=this,{min:r,max:n}=e.getMinMax(!0);e.min=Fe(r)?r:0,e.max=Fe(n)?n:1,e.handleTickRangeOptions()}computeTickLimit(){const e=this,r=e.isHorizontal(),n=r?e.width:e.height,o=Pt(e.options.ticks.minRotation),a=(r?Math.sin(o):Math.cos(o))||.001,i=e._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,i.lineHeight/a))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}Kl.id="linear";Kl.defaults={ticks:{callback:pi.formatters.numeric}};function Mu(t){return t/Math.pow(10,Math.floor(wt(t)))===1}function dD(t,e){const r=Math.floor(wt(e.max)),n=Math.ceil(e.max/Math.pow(10,r)),o=[];let a=Ct(t.min,Math.pow(10,Math.floor(wt(e.min)))),i=Math.floor(wt(a)),s=Math.floor(a/Math.pow(10,i)),l=i<0?Math.pow(10,Math.abs(i)):1;do o.push({value:a,major:Mu(a)}),++s,s===10&&(s=1,++i,l=i>=0?1:l),a=Math.round(s*Math.pow(10,i)*l)/l;while(i<r||i===r&&s<n);const c=Ct(t.max,a);return o.push({value:c,major:Mu(a)}),o}class Hl extends cn{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,r){const n=za.prototype.parse.apply(this,[e,r]);if(n===0){this._zero=!0;return}return Fe(n)&&n>0?n:null}determineDataLimits(){const e=this,{min:r,max:n}=e.getMinMax(!0);e.min=Fe(r)?Math.max(0,r):null,e.max=Fe(n)?Math.max(0,n):null,e.options.beginAtZero&&(e._zero=!0),e.handleTickRangeOptions()}handleTickRangeOptions(){const e=this,{minDefined:r,maxDefined:n}=e.getUserBounds();let o=e.min,a=e.max;const i=c=>o=r?o:c,s=c=>a=n?a:c,l=(c,d)=>Math.pow(10,Math.floor(wt(c))+d);o===a&&(o<=0?(i(1),s(10)):(i(l(o,-1)),s(l(a,1)))),o<=0&&i(l(a,-1)),a<=0&&s(l(o,1)),e._zero&&e.min!==e._suggestedMin&&o===l(e.min,0)&&i(l(o,-1)),e.min=o,e.max=a}buildTicks(){const e=this,r=e.options,n={min:e._userMin,max:e._userMax},o=dD(n,e);return r.bounds==="ticks"&&Hp(o,e,"value"),r.reverse?(o.reverse(),e.start=e.max,e.end=e.min):(e.start=e.min,e.end=e.max),o}getLabelForValue(e){return e===void 0?"0":Lo(e,this.chart.options.locale)}configure(){const e=this,r=e.min;super.configure(),e._startValue=wt(r),e._valueRange=wt(e.max)-wt(r)}getPixelForValue(e){const r=this;return(e===void 0||e===0)&&(e=r.min),e===null||isNaN(e)?NaN:r.getPixelForDecimal(e===r.min?0:(wt(e)-r._startValue)/r._valueRange)}getValueForPixel(e){const r=this,n=r.getDecimalForPixel(e);return Math.pow(10,r._startValue+n*r._valueRange)}}Hl.id="logarithmic";Hl.defaults={ticks:{callback:pi.formatters.logarithmic,major:{enabled:!0}}};function Zs(t){const e=t.ticks;if(e.display&&t.display){const r=pt(e.backdropPadding);return ie(e.font&&e.font.size,ce.font.size)+r.height}return 0}function uD(t,e,r){return Be(r)?{w:OR(t,t.font,r),h:r.length*e}:{w:t.measureText(r).width,h:e}}function $u(t,e,r,n,o){return t===n||t===o?{start:e-r/2,end:e+r/2}:t<n||t>o?{start:e-r,end:e}:{start:e,end:e+r}}function fD(t){const e={l:0,r:t.width,t:0,b:t.height-t.paddingTop},r={};let n,o,a;const i=[],s=[],l=t.getLabels().length;for(n=0;n<l;n++){const f=t.options.pointLabels.setContext(t.getContext(n));s[n]=f.padding,a=t.getPointPosition(n,t.drawingArea+s[n]);const p=Ve(f.font);t.ctx.font=p.string,o=uD(t.ctx,p.lineHeight,t._pointLabels[n]),i[n]=o;const h=t.getIndexAngle(n),g=Us(h),b=$u(g,a.x,o.w,0,180),x=$u(g,a.y,o.h,90,270);b.start<e.l&&(e.l=b.start,r.l=h),b.end>e.r&&(e.r=b.end,r.r=h),x.start<e.t&&(e.t=x.start,r.t=h),x.end>e.b&&(e.b=x.end,r.b=h)}t._setReductions(t.drawingArea,e,r),t._pointLabelItems=[];const c=t.options,d=Zs(c),u=t.getDistanceFromCenterForValue(c.ticks.reverse?t.min:t.max);for(n=0;n<l;n++){const f=n===0?d/2:0,p=t.getPointPosition(n,u+f+s[n]),h=Us(t.getIndexAngle(n)),g=i[n];hD(h,g,p);const b=pD(h);let x;b==="left"?x=p.x:b==="center"?x=p.x-g.w/2:x=p.x-g.w;const C=x+g.w;t._pointLabelItems[n]={x:p.x,y:p.y,textAlign:b,left:x,top:p.y,right:C,bottom:p.y+g.h}}}function pD(t){return t===0||t===180?"center":t<180?"left":"right"}function hD(t,e,r){t===90||t===270?r.y-=e.h/2:(t>270||t<90)&&(r.y-=e.h)}function gD(t,e){const{ctx:r,options:{pointLabels:n}}=t;for(let o=e-1;o>=0;o--){const a=n.setContext(t.getContext(o)),i=Ve(a.font),{x:s,y:l,textAlign:c,left:d,top:u,right:f,bottom:p}=t._pointLabelItems[o],{backdropColor:h}=a;if(!fe(h)){const g=pt(a.backdropPadding);r.fillStyle=h,r.fillRect(d-g.left,u-g.top,f-d+g.width,p-u+g.height)}en(r,t._pointLabels[o],s,l+i.lineHeight/2,i,{color:a.color,textAlign:c,textBaseline:"middle"})}}function N0(t,e,r,n){const{ctx:o}=t;if(r)o.arc(t.xCenter,t.yCenter,e,0,xe);else{let a=t.getPointPosition(0,e);o.moveTo(a.x,a.y);for(let i=1;i<n;i++)a=t.getPointPosition(i,e),o.lineTo(a.x,a.y)}}function bD(t,e,r,n){const o=t.ctx,a=e.circular,{color:i,lineWidth:s}=e;!a&&!n||!i||!s||r<0||(o.save(),o.strokeStyle=i,o.lineWidth=s,o.setLineDash(e.borderDash),o.lineDashOffset=e.borderDashOffset,o.beginPath(),N0(t,r,a,n),o.closePath(),o.stroke(),o.restore())}function ta(t){return Bn(t)?t:0}class Oo extends za{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this;e.width=e.maxWidth,e.height=e.maxHeight,e.paddingTop=Zs(e.options)/2,e.xCenter=Math.floor(e.width/2),e.yCenter=Math.floor((e.height-e.paddingTop)/2),e.drawingArea=Math.min(e.height-e.paddingTop,e.width)/2}determineDataLimits(){const e=this,{min:r,max:n}=e.getMinMax(!1);e.min=Fe(r)&&!isNaN(r)?r:0,e.max=Fe(n)&&!isNaN(n)?n:0,e.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Zs(this.options))}generateTickLabels(e){const r=this;za.prototype.generateTickLabels.call(r,e),r._pointLabels=r.getLabels().map((n,o)=>{const a=ke(r.options.pointLabels.callback,[n,o],r);return a||a===0?a:""})}fit(){const e=this,r=e.options;r.display&&r.pointLabels.display?fD(e):e.setCenterPoint(0,0,0,0)}_setReductions(e,r,n){const o=this;let a=r.l/Math.sin(n.l),i=Math.max(r.r-o.width,0)/Math.sin(n.r),s=-r.t/Math.cos(n.t),l=-Math.max(r.b-(o.height-o.paddingTop),0)/Math.cos(n.b);a=ta(a),i=ta(i),s=ta(s),l=ta(l),o.drawingArea=Math.max(e/2,Math.min(Math.floor(e-(a+i)/2),Math.floor(e-(s+l)/2))),o.setCenterPoint(a,i,s,l)}setCenterPoint(e,r,n,o){const a=this,i=a.width-r-a.drawingArea,s=e+a.drawingArea,l=n+a.drawingArea,c=a.height-a.paddingTop-o-a.drawingArea;a.xCenter=Math.floor((s+i)/2+a.left),a.yCenter=Math.floor((l+c)/2+a.top+a.paddingTop)}getIndexAngle(e){const r=xe/this.getLabels().length,n=this.options.startAngle||0;return Rt(e*r+Pt(n))}getDistanceFromCenterForValue(e){const r=this;if(fe(e))return NaN;const n=r.drawingArea/(r.max-r.min);return r.options.reverse?(r.max-e)*n:(e-r.min)*n}getValueForDistanceFromCenter(e){if(fe(e))return NaN;const r=this,n=e/(r.drawingArea/(r.max-r.min));return r.options.reverse?r.max-n:r.min+n}getPointPosition(e,r){const n=this,o=n.getIndexAngle(e)-$e;return{x:Math.cos(o)*r+n.xCenter,y:Math.sin(o)*r+n.yCenter,angle:o}}getPointPositionForValue(e,r){return this.getPointPosition(e,this.getDistanceFromCenterForValue(r))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:r,top:n,right:o,bottom:a}=this._pointLabelItems[e];return{left:r,top:n,right:o,bottom:a}}drawBackground(){const e=this,{backgroundColor:r,grid:{circular:n}}=e.options;if(r){const o=e.ctx;o.save(),o.beginPath(),N0(e,e.getDistanceFromCenterForValue(e._endValue),n,e.getLabels().length),o.closePath(),o.fillStyle=r,o.fill(),o.restore()}}drawGrid(){const e=this,r=e.ctx,n=e.options,{angleLines:o,grid:a}=n,i=e.getLabels().length;let s,l,c;if(n.pointLabels.display&&gD(e,i),a.display&&e.ticks.forEach((d,u)=>{if(u!==0){l=e.getDistanceFromCenterForValue(d.value);const f=a.setContext(e.getContext(u-1));bD(e,f,l,i)}}),o.display){for(r.save(),s=e.getLabels().length-1;s>=0;s--){const d=o.setContext(e.getContext(s)),{color:u,lineWidth:f}=d;!f||!u||(r.lineWidth=f,r.strokeStyle=u,r.setLineDash(d.borderDash),r.lineDashOffset=d.borderDashOffset,l=e.getDistanceFromCenterForValue(n.ticks.reverse?e.min:e.max),c=e.getPointPosition(s,l),r.beginPath(),r.moveTo(e.xCenter,e.yCenter),r.lineTo(c.x,c.y),r.stroke())}r.restore()}}drawBorder(){}drawLabels(){const e=this,r=e.ctx,n=e.options,o=n.ticks;if(!o.display)return;const a=e.getIndexAngle(0);let i,s;r.save(),r.translate(e.xCenter,e.yCenter),r.rotate(a),r.textAlign="center",r.textBaseline="middle",e.ticks.forEach((l,c)=>{if(c===0&&!n.reverse)return;const d=o.setContext(e.getContext(c)),u=Ve(d.font);if(i=e.getDistanceFromCenterForValue(e.ticks[c].value),d.showLabelBackdrop){s=r.measureText(l.label).width,r.fillStyle=d.backdropColor;const f=pt(d.backdropPadding);r.fillRect(-s/2-f.left,-i-u.size/2-f.top,s+f.width,u.size+f.height)}en(r,l.label,0,-i,u,{color:d.color})}),r.restore()}drawTitle(){}}Oo.id="radialLinear";Oo.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:pi.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5}};Oo.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};Oo.descriptors={angleLines:{_fallback:"grid"}};const vi={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},ht=Object.keys(vi);function mD(t,e){return t-e}function Fu(t,e){if(fe(e))return null;const r=t._adapter,{parser:n,round:o,isoWeekday:a}=t._parseOpts;let i=e;return typeof n=="function"&&(i=n(i)),Fe(i)||(i=typeof n=="string"?r.parse(i,n):r.parse(i)),i===null?null:(o&&(i=o==="week"&&(Bn(a)||a===!0)?r.startOf(i,"isoWeek",a):r.startOf(i,o)),+i)}function zu(t,e,r,n){const o=ht.length;for(let a=ht.indexOf(t);a<o-1;++a){const i=vi[ht[a]],s=i.steps?i.steps:Number.MAX_SAFE_INTEGER;if(i.common&&Math.ceil((r-e)/(s*i.size))<=n)return ht[a]}return ht[o-1]}function vD(t,e,r,n,o){for(let a=ht.length-1;a>=ht.indexOf(r);a--){const i=ht[a];if(vi[i].common&&t._adapter.diff(o,n,i)>=e-1)return i}return ht[r?ht.indexOf(r):0]}function yD(t){for(let e=ht.indexOf(t)+1,r=ht.length;e<r;++e)if(vi[ht[e]].common)return ht[e]}function Uu(t,e,r){if(!r)t[e]=!0;else if(r.length){const{lo:n,hi:o}=ii(r,e),a=r[n]>=e?r[n]:r[o];t[a]=!0}}function xD(t,e,r,n){const o=t._adapter,a=+o.startOf(e[0].value,n),i=e[e.length-1].value;let s,l;for(s=a;s<=i;s=+o.add(s,1,n))l=r[s],l>=0&&(e[l].major=!0);return e}function Vu(t,e,r){const n=[],o={},a=e.length;let i,s;for(i=0;i<a;++i)s=e[i],o[s]=i,n.push({value:s,major:!1});return a===0||!r?n:xD(t,n,o,r)}class Mo extends cn{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,r){const n=e.time||(e.time={}),o=this._adapter=new J8._date(e.adapters.date);co(n.displayFormats,o.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=r.normalized}parse(e,r){return e===void 0?null:Fu(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this,r=e.options,n=e._adapter,o=r.time.unit||"day";let{min:a,max:i,minDefined:s,maxDefined:l}=e.getUserBounds();function c(d){!s&&!isNaN(d.min)&&(a=Math.min(a,d.min)),!l&&!isNaN(d.max)&&(i=Math.max(i,d.max))}(!s||!l)&&(c(e._getLabelBounds()),(r.bounds!=="ticks"||r.ticks.source!=="labels")&&c(e.getMinMax(!1))),a=Fe(a)&&!isNaN(a)?a:+n.startOf(Date.now(),o),i=Fe(i)&&!isNaN(i)?i:+n.endOf(Date.now(),o)+1,e.min=Math.min(a,i-1),e.max=Math.max(a+1,i)}_getLabelBounds(){const e=this.getLabelTimestamps();let r=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return e.length&&(r=e[0],n=e[e.length-1]),{min:r,max:n}}buildTicks(){const e=this,r=e.options,n=r.time,o=r.ticks,a=o.source==="labels"?e.getLabelTimestamps():e._generate();r.bounds==="ticks"&&a.length&&(e.min=e._userMin||a[0],e.max=e._userMax||a[a.length-1]);const i=e.min,s=e.max,l=WR(a,i,s);return e._unit=n.unit||(o.autoSkip?zu(n.minUnit,e.min,e.max,e._getLabelCapacity(i)):vD(e,l.length,n.minUnit,e.min,e.max)),e._majorUnit=!o.major.enabled||e._unit==="year"?void 0:yD(e._unit),e.initOffsets(a),r.reverse&&l.reverse(),Vu(e,l,e._majorUnit)}initOffsets(e){const r=this;let n=0,o=0,a,i;r.options.offset&&e.length&&(a=r.getDecimalForValue(e[0]),e.length===1?n=1-a:n=(r.getDecimalForValue(e[1])-a)/2,i=r.getDecimalForValue(e[e.length-1]),e.length===1?o=i:o=(i-r.getDecimalForValue(e[e.length-2]))/2);const s=e.length<3?.5:.25;n=bt(n,0,s),o=bt(o,0,s),r._offsets={start:n,end:o,factor:1/(n+1+o)}}_generate(){const e=this,r=e._adapter,n=e.min,o=e.max,a=e.options,i=a.time,s=i.unit||zu(i.minUnit,n,o,e._getLabelCapacity(n)),l=ie(i.stepSize,1),c=s==="week"?i.isoWeekday:!1,d=Bn(c)||c===!0,u={};let f=n,p,h;if(d&&(f=+r.startOf(f,"isoWeek",c)),f=+r.startOf(f,d?"day":s),r.diff(o,n,s)>1e5*l)throw new Error(n+" and "+o+" are too far apart with stepSize of "+l+" "+s);const g=a.ticks.source==="data"&&e.getDataTimestamps();for(p=f,h=0;p<o;p=+r.add(p,l,s),h++)Uu(u,p,g);return(p===o||a.bounds==="ticks"||h===1)&&Uu(u,p,g),Object.keys(u).sort((b,x)=>b-x).map(b=>+b)}getLabelForValue(e){const r=this,n=r._adapter,o=r.options.time;return o.tooltipFormat?n.format(e,o.tooltipFormat):n.format(e,o.displayFormats.datetime)}_tickFormatFunction(e,r,n,o){const a=this,i=a.options,s=i.time.displayFormats,l=a._unit,c=a._majorUnit,d=l&&s[l],u=c&&s[c],f=n[r],p=c&&u&&f&&f.major,h=a._adapter.format(e,o||(p?u:d)),g=i.ticks.callback;return g?ke(g,[h,r,n],a):h}generateTickLabels(e){let r,n,o;for(r=0,n=e.length;r<n;++r)o=e[r],o.label=this._tickFormatFunction(o.value,r,e)}getDecimalForValue(e){const r=this;return e===null?NaN:(e-r.min)/(r.max-r.min)}getPixelForValue(e){const r=this,n=r._offsets,o=r.getDecimalForValue(e);return r.getPixelForDecimal((n.start+o)*n.factor)}getValueForPixel(e){const r=this,n=r._offsets,o=r.getDecimalForPixel(e)/n.factor-n.end;return r.min+o*(r.max-r.min)}_getLabelSize(e){const r=this,n=r.options.ticks,o=r.ctx.measureText(e).width,a=Pt(r.isHorizontal()?n.maxRotation:n.minRotation),i=Math.cos(a),s=Math.sin(a),l=r._resolveTickFontOptions(0).size;return{w:o*i+l*s,h:o*s+l*i}}_getLabelCapacity(e){const r=this,n=r.options.time,o=n.displayFormats,a=o[n.unit]||o.millisecond,i=r._tickFormatFunction(e,0,Vu(r,[e],r._majorUnit),a),s=r._getLabelSize(i),l=Math.floor(r.isHorizontal()?r.width/s.w:r.height/s.h)-1;return l>0?l:1}getDataTimestamps(){const e=this;let r=e._cache.data||[],n,o;if(r.length)return r;const a=e.getMatchingVisibleMetas();if(e._normalized&&a.length)return e._cache.data=a[0].controller.getAllParsedValues(e);for(n=0,o=a.length;n<o;++n)r=r.concat(a[n].controller.getAllParsedValues(e));return e._cache.data=e.normalize(r)}getLabelTimestamps(){const e=this,r=e._cache.labels||[];let n,o;if(r.length)return r;const a=e.getLabels();for(n=0,o=a.length;n<o;++n)r.push(Fu(e,a[n]));return e._cache.labels=e._normalized?r:e.normalize(r)}normalize(e){return Zp(e.sort(mD))}}Mo.id="time";Mo.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};function Ku(t,e,r){let n,o,a,i;if(r)n=Math.floor(e),o=Math.ceil(e),a=t[n],i=t[o];else{const l=ii(t,e);a=l.lo,i=l.hi,n=t[a],o=t[i]}const s=o-n;return s?a+(i-a)*(e-n)/s:a}class Wl extends Mo{constructor(e){super(e),this._table=[],this._maxIndex=void 0}initOffsets(){const e=this,r=e._getTimestampsForTable();e._table=e.buildLookupTable(r),e._maxIndex=e._table.length-1,super.initOffsets(r)}buildLookupTable(e){const r=this,{min:n,max:o}=r;if(!e.length)return[{time:n,pos:0},{time:o,pos:1}];const a=[n];let i,s,l;for(i=0,s=e.length;i<s;++i)l=e[i],l>n&&l<o&&a.push(l);return a.push(o),a}_getTimestampsForTable(){const e=this;let r=e._cache.all||[];if(r.length)return r;const n=e.getDataTimestamps(),o=e.getLabelTimestamps();return n.length&&o.length?r=e.normalize(n.concat(o)):r=n.length?n:o,r=e._cache.all=r,r}getPixelForValue(e,r){const n=this,o=n._offsets,a=n._normalized&&n._maxIndex>0&&!fe(r)?r/n._maxIndex:n.getDecimalForValue(e);return n.getPixelForDecimal((o.start+a)*o.factor)}getDecimalForValue(e){return Ku(this._table,e)/this._maxIndex}getValueForPixel(e){const r=this,n=r._offsets,o=r.getDecimalForPixel(e)/n.factor-n.end;return Ku(r._table,o*this._maxIndex,!0)}}Wl.id="timeseries";Wl.defaults=Mo.defaults;var CD=Object.freeze({__proto__:null,CategoryScale:Fa,LinearScale:Kl,LogarithmicScale:Hl,RadialLinearScale:Oo,TimeScale:Mo,TimeSeriesScale:Wl});const kD=[Z8,w6,aD,CD];hi.register(...kD);const cN=Object.freeze(Object.defineProperty({__proto__:null,default:hi},Symbol.toStringTag,{value:"Module"}));export{RL as $,$f as A,WD as B,OD as C,ZD as D,ao as E,M1 as F,Zc as G,QD as H,AL as I,VD as J,dL as K,YD as L,HD as M,Pr as N,Gc as O,sL as P,KD as Q,rL as R,yo as S,S1 as T,zD as U,LD as V,jc as W,SL as X,RD as Y,IL as Z,wL as _,_L as a,$D as a$,DL as a0,LL as a1,NL as a2,Mf as a3,PD as a4,eL as a5,PL as a6,v1 as a7,C1 as a8,k1 as a9,yL as aA,qD as aB,GD as aC,jD as aD,w1 as aE,DD as aF,fL as aG,aL as aH,bL as aI,xL as aJ,XD as aK,JD as aL,nL as aM,jL as aN,GL as aO,qL as aP,YL as aQ,XL as aR,QL as aS,ZL as aT,JL as aU,eN as aV,tN as aW,rN as aX,nN as aY,oN as aZ,aN as a_,UD as aa,cL as ab,OL as ac,ND as ad,_1 as ae,ML as af,P1 as ag,vL as ah,Xc as ai,$L as aj,FL as ak,zL as al,lL as am,UL as an,pL as ao,Ff as ap,MD as aq,oL as ar,gL as as,VL as at,FD as au,tL as av,KL as aw,HL as ax,uL as ay,WL as az,EL as b,mL as b0,_D as b1,iN as b2,sN as b3,cN as b4,ED as c,Me as d,TD as e,hL as f,SD as g,BD as h,AD as i,Qc as j,Uf as k,wD as l,vr as m,an as n,Zr as o,Br as p,TL as q,m1 as r,ID as s,iL as t,B1 as u,kL as v,CL as w,Er as x,BL as y,T1 as z};
