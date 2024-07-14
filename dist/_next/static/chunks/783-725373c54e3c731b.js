"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{8149:function(e,r,t){t.d(r,{M:function(){return n}});function n(e,r,{checkForDefaultPrevented:t=!0}={}){return function(n){if(e?.(n),!1===t||!n.defaultPrevented)return r?.(n)}}},1584:function(e,r,t){t.d(r,{F:function(){return o},e:function(){return l}});var n=t(2265);function o(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function l(...e){return n.useCallback(o(...e),e)}},8324:function(e,r,t){t.d(r,{b:function(){return i},k:function(){return l}});var n=t(2265),o=t(7437);function l(e,r){let t=n.createContext(r);function l(e){let{children:r,...l}=e,i=n.useMemo(()=>l,Object.values(l));return(0,o.jsx)(t.Provider,{value:i,children:r})}return l.displayName=e+"Provider",[l,function(o){let l=n.useContext(t);if(l)return l;if(void 0!==r)return r;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,r=[]){let t=[],l=()=>{let r=t.map(e=>n.createContext(e));return function(t){let o=t?.[e]||r;return n.useMemo(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return l.scopeName=e,[function(r,l){let i=n.createContext(l),s=t.length;function a(r){let{scope:t,children:l,...a}=r,c=t?.[e][s]||i,u=n.useMemo(()=>a,Object.values(a));return(0,o.jsx)(c.Provider,{value:u,children:l})}return t=[...t,l],a.displayName=r+"Provider",[a,function(t,o){let a=o?.[e][s]||i,c=n.useContext(a);if(c)return c;if(void 0!==l)return l;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((r,{useScope:t,scopeName:n})=>{let o=t(e)[`__scope${n}`];return{...r,...o}},{});return n.useMemo(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return t.scopeName=r.scopeName,t}(l,...r)]}},2358:function(e,r,t){t.d(r,{XB:function(){return p}});var n,o=t(2265),l=t(8149),i=t(5171),s=t(1584),a=t(5137),c=t(7437),u="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),p=o.forwardRef((e,r)=>{var t,p;let{disableOutsidePointerEvents:m=!1,onEscapeKeyDown:g,onPointerDownOutside:v,onFocusOutside:h,onInteractOutside:y,onDismiss:w,...x}=e,k=o.useContext(d),[E,j]=o.useState(null),C=null!==(p=null==E?void 0:E.ownerDocument)&&void 0!==p?p:null===(t=globalThis)||void 0===t?void 0:t.document,[,O]=o.useState({}),z=(0,s.e)(r,e=>j(e)),P=Array.from(k.layers),[S]=[...k.layersWithOutsidePointerEventsDisabled].slice(-1),N=P.indexOf(S),W=E?P.indexOf(E):-1,D=k.layersWithOutsidePointerEventsDisabled.size>0,R=W>=N,L=function(e){var r;let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(r=globalThis)||void 0===r?void 0:r.document,n=(0,a.W)(e),l=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!l.current){let r=function(){b("dismissableLayer.pointerDownOutside",n,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",i.current),i.current=r,t.addEventListener("click",i.current,{once:!0})):r()}else t.removeEventListener("click",i.current);l.current=!1},r=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(r),t.removeEventListener("pointerdown",e),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>l.current=!0}}(e=>{let r=e.target,t=[...k.branches].some(e=>e.contains(r));!R||t||(null==v||v(e),null==y||y(e),e.defaultPrevented||null==w||w())},C),M=function(e){var r;let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(r=globalThis)||void 0===r?void 0:r.document,n=(0,a.W)(e),l=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!l.current&&b("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>l.current=!0,onBlurCapture:()=>l.current=!1}}(e=>{let r=e.target;[...k.branches].some(e=>e.contains(r))||(null==h||h(e),null==y||y(e),e.defaultPrevented||null==w||w())},C);return!function(e,r=globalThis?.document){let t=(0,a.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&t(e)};return r.addEventListener("keydown",e,{capture:!0}),()=>r.removeEventListener("keydown",e,{capture:!0})},[t,r])}(e=>{W!==k.layers.size-1||(null==g||g(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},C),o.useEffect(()=>{if(E)return m&&(0===k.layersWithOutsidePointerEventsDisabled.size&&(n=C.body.style.pointerEvents,C.body.style.pointerEvents="none"),k.layersWithOutsidePointerEventsDisabled.add(E)),k.layers.add(E),f(),()=>{m&&1===k.layersWithOutsidePointerEventsDisabled.size&&(C.body.style.pointerEvents=n)}},[E,C,m,k]),o.useEffect(()=>()=>{E&&(k.layers.delete(E),k.layersWithOutsidePointerEventsDisabled.delete(E),f())},[E,k]),o.useEffect(()=>{let e=()=>O({});return document.addEventListener(u,e),()=>document.removeEventListener(u,e)},[]),(0,c.jsx)(i.WV.div,{...x,ref:z,style:{pointerEvents:D?R?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.M)(e.onFocusCapture,M.onFocusCapture),onBlurCapture:(0,l.M)(e.onBlurCapture,M.onBlurCapture),onPointerDownCapture:(0,l.M)(e.onPointerDownCapture,L.onPointerDownCapture)})});function f(){let e=new CustomEvent(u);document.dispatchEvent(e)}function b(e,r,t,n){let{discrete:o}=n,l=t.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});r&&l.addEventListener(e,r,{once:!0}),o?(0,i.jH)(l,s):l.dispatchEvent(s)}p.displayName="DismissableLayer",o.forwardRef((e,r)=>{let t=o.useContext(d),n=o.useRef(null),l=(0,s.e)(r,n);return o.useEffect(()=>{let e=n.current;if(e)return t.branches.add(e),()=>{t.branches.delete(e)}},[t.branches]),(0,c.jsx)(i.WV.div,{...e,ref:l})}).displayName="DismissableLayerBranch"},3201:function(e,r,t){t.d(r,{M:function(){return a}});var n,o=t(2265),l=t(1336),i=(n||(n=t.t(o,2)))["useId".toString()]||(()=>void 0),s=0;function a(e){let[r,t]=o.useState(i());return(0,l.b)(()=>{e||t(e=>e??String(s++))},[e]),e||(r?`radix-${r}`:"")}},6935:function(e,r,t){t.d(r,{h:function(){return a}});var n=t(2265),o=t(4887),l=t(5171),i=t(1336),s=t(7437),a=n.forwardRef((e,r)=>{var t,a;let{container:c,...u}=e,[d,p]=n.useState(!1);(0,i.b)(()=>p(!0),[]);let f=c||d&&(null===(a=globalThis)||void 0===a?void 0:null===(t=a.document)||void 0===t?void 0:t.body);return f?o.createPortal((0,s.jsx)(l.WV.div,{...u,ref:r}),f):null});a.displayName="Portal"},5171:function(e,r,t){t.d(r,{WV:function(){return s},jH:function(){return a}});var n=t(2265),o=t(4887),l=t(1538),i=t(7437),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=n.forwardRef((e,t)=>{let{asChild:n,...o}=e,s=n?l.g7:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(s,{...o,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function a(e,r){e&&o.flushSync(()=>e.dispatchEvent(r))}},1538:function(e,r,t){t.d(r,{A4:function(){return a},g7:function(){return i}});var n=t(2265),o=t(1584),l=t(7437),i=n.forwardRef((e,r)=>{let{children:t,...o}=e,i=n.Children.toArray(t),a=i.find(c);if(a){let e=a.props.children,t=i.map(r=>r!==a?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(s,{...o,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,l.jsx)(s,{...o,ref:r,children:t})});i.displayName="Slot";var s=n.forwardRef((e,r)=>{let{children:t,...l}=e;if(n.isValidElement(t)){let e,i;let s=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return n.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let o=e[n],l=r[n];/^on[A-Z]/.test(n)?o&&l?t[n]=(...e)=>{l(...e),o(...e)}:o&&(t[n]=o):"style"===n?t[n]={...o,...l}:"className"===n&&(t[n]=[o,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props),ref:r?(0,o.F)(r,s):s})}return n.Children.count(t)>1?n.Children.only(null):null});s.displayName="SlotClone";var a=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function c(e){return n.isValidElement(e)&&e.type===a}},5137:function(e,r,t){t.d(r,{W:function(){return o}});var n=t(2265);function o(e){let r=n.useRef(e);return n.useEffect(()=>{r.current=e}),n.useMemo(()=>(...e)=>r.current?.(...e),[])}},1715:function(e,r,t){t.d(r,{T:function(){return l}});var n=t(2265),o=t(5137);function l({prop:e,defaultProp:r,onChange:t=()=>{}}){let[l,i]=function({defaultProp:e,onChange:r}){let t=n.useState(e),[l]=t,i=n.useRef(l),s=(0,o.W)(r);return n.useEffect(()=>{i.current!==l&&(s(l),i.current=l)},[l,i,s]),t}({defaultProp:r,onChange:t}),s=void 0!==e,a=s?e:l,c=(0,o.W)(t);return[a,n.useCallback(r=>{if(s){let t="function"==typeof r?r(e):r;t!==e&&c(t)}else i(r)},[s,e,i,c])]}},1336:function(e,r,t){t.d(r,{b:function(){return o}});var n=t(2265),o=globalThis?.document?n.useLayoutEffect:()=>{}},4839:function(e,r,t){t.d(r,{W:function(){return n}});function n(){for(var e,r,t=0,n="",o=arguments.length;t<o;t++)(e=arguments[t])&&(r=function e(r){var t,n,o="";if("string"==typeof r||"number"==typeof r)o+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(n=e(r[t]))&&(o&&(o+=" "),o+=n)}else for(n in r)r[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(n&&(n+=" "),n+=r);return n}},1810:function(e,r,t){t.d(r,{w_:function(){return u}});var n=t(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),i=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach(function(r){var n,o;n=r,o=t[r],(n=function(e){var r=function(e,r){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:r+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function u(e){return r=>n.createElement(d,s({attr:c({},e.attr)},r),function e(r){return r&&r.map((r,t)=>n.createElement(r.tag,c({key:t},r.attr),e(r.child)))}(e.child))}function d(e){var r=r=>{var t,{attr:o,size:l,title:a}=e,u=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,i),d=l||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,u,{className:t,style:c(c({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==l?n.createElement(l.Consumer,null,e=>r(e)):r(o)}},6164:function(e,r,t){t.d(r,{m6:function(){return T}});let n=/^\[(.+)\]$/;function o(e,r){let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t}let l=/\s+/;function i(){let e,r,t=0,n="";for(;t<arguments.length;)(e=arguments[t++])&&(r=function e(r){let t;if("string"==typeof r)return r;let n="";for(let o=0;o<r.length;o++)r[o]&&(t=e(r[o]))&&(n&&(n+=" "),n+=t);return n}(e))&&(n&&(n+=" "),n+=r);return n}function s(e){let r=r=>r[e]||[];return r.isThemeGetter=!0,r}let a=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),d=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,p=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,f=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,b=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,m=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function g(e){return h(e)||u.has(e)||c.test(e)}function v(e){return W(e,"length",D)}function h(e){return!!e&&!Number.isNaN(Number(e))}function y(e){return W(e,"number",h)}function w(e){return!!e&&Number.isInteger(Number(e))}function x(e){return e.endsWith("%")&&h(e.slice(0,-1))}function k(e){return a.test(e)}function E(e){return d.test(e)}let j=new Set(["length","size","percentage"]);function C(e){return W(e,j,R)}function O(e){return W(e,"position",R)}let z=new Set(["image","url"]);function P(e){return W(e,z,M)}function S(e){return W(e,"",L)}function N(){return!0}function W(e,r,t){let n=a.exec(e);return!!n&&(n[1]?"string"==typeof r?n[1]===r:r.has(n[1]):t(n[2]))}function D(e){return p.test(e)&&!f.test(e)}function R(){return!1}function L(e){return b.test(e)}function M(e){return m.test(e)}let T=function(e,...r){let t,s,a;let c=function(l){var i;return s=(t={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,n=new Map;function o(o,l){t.set(o,l),++r>e&&(r=0,n=t,t=new Map)}return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=n.get(e))?(o(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):o(e,r)}}}((i=r.reduce((e,r)=>r(e),e())).cacheSize),parseClassName:function(e){let{separator:r,experimentalParseClassName:t}=e,n=1===r.length,o=r[0],l=r.length;function i(e){let t;let i=[],s=0,a=0;for(let c=0;c<e.length;c++){let u=e[c];if(0===s){if(u===o&&(n||e.slice(c,c+l)===r)){i.push(e.slice(a,c)),a=c+l;continue}if("/"===u){t=c;continue}}"["===u?s++:"]"===u&&s--}let c=0===i.length?e:e.substring(a),u=c.startsWith("!"),d=u?c.substring(1):c;return{modifiers:i,hasImportantModifier:u,baseClassName:d,maybePostfixModifierPosition:t&&t>a?t-a:void 0}}return t?function(e){return t({className:e,parseClassName:i})}:i}(i),...function(e){let r=function(e){var r;let{theme:t,prefix:n}=e,l={nextPart:new Map,validators:[]};return(r=Object.entries(e.classGroups),n?r.map(([e,r])=>[e,r.map(e=>"string"==typeof e?n+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,r])=>[n+e,r])):e)]):r).forEach(([e,r])=>{(function e(r,t,n,l){r.forEach(r=>{if("string"==typeof r){(""===r?t:o(t,r)).classGroupId=n;return}if("function"==typeof r){if(r.isThemeGetter){e(r(l),t,n,l);return}t.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([r,i])=>{e(i,o(t,r),n,l)})})})(r,l,e,t)}),l}(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:l}=e;return{getClassGroupId:function(e){let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),function e(r,t){if(0===r.length)return t.classGroupId;let n=r[0],o=t.nextPart.get(n),l=o?e(r.slice(1),o):void 0;if(l)return l;if(0===t.validators.length)return;let i=r.join("-");return t.validators.find(({validator:e})=>e(i))?.classGroupId}(t,r)||function(e){if(n.test(e)){let r=n.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(e,r){let n=t[e]||[];return r&&l[e]?[...n,...l[e]]:n}}}(i)}).cache.get,a=t.cache.set,c=u,u(l)};function u(e){let r=s(e);if(r)return r;let n=function(e,r){let{parseClassName:t,getClassGroupId:n,getConflictingClassGroupIds:o}=r,i=new Set;return e.trim().split(l).map(e=>{let{modifiers:r,hasImportantModifier:o,baseClassName:l,maybePostfixModifierPosition:i}=t(e),s=!!i,a=n(s?l.substring(0,i):l);if(!a){if(!s||!(a=n(l)))return{isTailwindClass:!1,originalClassName:e};s=!1}let c=(function(e){if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r})(r).join(":");return{isTailwindClass:!0,modifierId:o?c+"!":c,classGroupId:a,originalClassName:e,hasPostfixModifier:s}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:r,classGroupId:t,hasPostfixModifier:n}=e,l=r+t;return!i.has(l)&&(i.add(l),o(t,n).forEach(e=>i.add(r+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,t);return a(e,n),n}return function(){return c(i.apply(null,arguments))}}(function(){let e=s("colors"),r=s("spacing"),t=s("blur"),n=s("brightness"),o=s("borderColor"),l=s("borderRadius"),i=s("borderSpacing"),a=s("borderWidth"),c=s("contrast"),u=s("grayscale"),d=s("hueRotate"),p=s("invert"),f=s("gap"),b=s("gradientColorStops"),m=s("gradientColorStopPositions"),j=s("inset"),z=s("margin"),W=s("opacity"),D=s("padding"),R=s("saturate"),L=s("scale"),M=s("sepia"),T=s("skew"),$=s("space"),_=s("translate"),G=()=>["auto","contain","none"],I=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto",k,r],B=()=>[k,r],F=()=>["",g,v],A=()=>["auto",h,k],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],H=()=>["solid","dashed","dotted","double","none"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Z=()=>["start","end","center","between","around","evenly","stretch"],J=()=>["","0",k],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>[h,y],U=()=>[h,k];return{cacheSize:500,separator:":",theme:{colors:[N],spacing:[g,v],blur:["none","",E,k],brightness:Q(),borderColor:[e],borderRadius:["none","","full",E,k],borderSpacing:B(),borderWidth:F(),contrast:Q(),grayscale:J(),hueRotate:U(),invert:J(),gap:B(),gradientColorStops:[e],gradientColorStopPositions:[x,v],inset:V(),margin:V(),opacity:Q(),padding:B(),saturate:Q(),scale:Q(),sepia:J(),skew:U(),space:B(),translate:B()},classGroups:{aspect:[{aspect:["auto","square","video",k]}],container:["container"],columns:[{columns:[E]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),k]}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:G()}],"overscroll-x":[{"overscroll-x":G()}],"overscroll-y":[{"overscroll-y":G()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[j]}],"inset-x":[{"inset-x":[j]}],"inset-y":[{"inset-y":[j]}],start:[{start:[j]}],end:[{end:[j]}],top:[{top:[j]}],right:[{right:[j]}],bottom:[{bottom:[j]}],left:[{left:[j]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",w,k]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",k]}],grow:[{grow:J()}],shrink:[{shrink:J()}],order:[{order:["first","last","none",w,k]}],"grid-cols":[{"grid-cols":[N]}],"col-start-end":[{col:["auto",{span:["full",w,k]},k]}],"col-start":[{"col-start":A()}],"col-end":[{"col-end":A()}],"grid-rows":[{"grid-rows":[N]}],"row-start-end":[{row:["auto",{span:[w,k]},k]}],"row-start":[{"row-start":A()}],"row-end":[{"row-end":A()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",k]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",k]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...Z()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Z(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Z(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[D]}],px:[{px:[D]}],py:[{py:[D]}],ps:[{ps:[D]}],pe:[{pe:[D]}],pt:[{pt:[D]}],pr:[{pr:[D]}],pb:[{pb:[D]}],pl:[{pl:[D]}],m:[{m:[z]}],mx:[{mx:[z]}],my:[{my:[z]}],ms:[{ms:[z]}],me:[{me:[z]}],mt:[{mt:[z]}],mr:[{mr:[z]}],mb:[{mb:[z]}],ml:[{ml:[z]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",k,r]}],"min-w":[{"min-w":[k,r,"min","max","fit"]}],"max-w":[{"max-w":[k,r,"none","full","min","max","fit","prose",{screen:[E]},E]}],h:[{h:[k,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[k,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[k,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[k,r,"auto","min","max","fit"]}],"font-size":[{text:["base",E,v]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[N]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",k]}],"line-clamp":[{"line-clamp":["none",h,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",g,k]}],"list-image":[{"list-image":["none",k]}],"list-style-type":[{list:["none","disc","decimal",k]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[W]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[W]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...H(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",g,v]}],"underline-offset":[{"underline-offset":["auto",g,k]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",k]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[W]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),O]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",C]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},P]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[W]}],"border-style":[{border:[...H(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[W]}],"divide-style":[{divide:H()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...H()]}],"outline-offset":[{"outline-offset":[g,k]}],"outline-w":[{outline:[g,v]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[W]}],"ring-offset-w":[{"ring-offset":[g,v]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",E,S]}],"shadow-color":[{shadow:[N]}],opacity:[{opacity:[W]}],"mix-blend":[{"mix-blend":[...X(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":X()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",E,k]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[p]}],saturate:[{saturate:[R]}],sepia:[{sepia:[M]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[W]}],"backdrop-saturate":[{"backdrop-saturate":[R]}],"backdrop-sepia":[{"backdrop-sepia":[M]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",k]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",k]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",k]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[L]}],"scale-x":[{"scale-x":[L]}],"scale-y":[{"scale-y":[L]}],rotate:[{rotate:[w,k]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",k]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",k]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",k]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[g,v,y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);