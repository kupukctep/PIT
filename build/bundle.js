var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(n)}function l(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(t,n,o){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function c(e,t,n,o){if(e){const r=a(e,t,n,o);return e[0](r)}}function a(e,n,o,r){return e[1]&&r?t(o.ctx.slice(),e[1](r(n))):o.ctx}function u(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|r[o];return e}return t.dirty|r}return t.dirty}function d(e,t,n,o,r,l){if(r){const i=a(t,n,o,l);e.p(i,r)}}function p(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function f(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function h(e,t){const n={};t=new Set(t);for(const o in e)t.has(o)||"$"===o[0]||(n[o]=e[o]);return n}function k(e,t){e.appendChild(t)}function g(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function x(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function y(){return $(" ")}function v(){return $("")}function w(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function b(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function C(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const o in t)null==t[o]?e.removeAttribute(o):"style"===o?e.style.cssText=t[o]:"__value"===o?e.value=e[o]=t[o]:n[o]&&n[o].set?e[o]=t[o]:b(e,o,t[o])}function M(e){return""===e?null:+e}function j(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function z(e,t){e.value=null==t?"":t}let H;function T(e){H=e}function _(){const e=function(){if(!H)throw new Error("Function called outside component initialization");return H}();return(t,n,{cancelable:o=!1}={})=>{const r=e.$$.callbacks[t];if(r){const l=function(e,t,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,o,t),r}(t,n,{cancelable:o});return r.slice().forEach((t=>{t.call(e,l)})),!l.defaultPrevented}return!0}}function S(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const E=[],O=[],A=[],P=[],L=Promise.resolve();let N=!1;function I(e){A.push(e)}function Z(e){P.push(e)}const D=new Set;let B=0;function q(){const e=H;do{for(;B<E.length;){const e=E[B];B++,T(e),F(e.$$)}for(T(null),E.length=0,B=0;O.length;)O.pop()();for(let e=0;e<A.length;e+=1){const t=A[e];D.has(t)||(D.add(t),t())}A.length=0}while(E.length);for(;P.length;)P.pop()();N=!1,D.clear(),T(e)}function F(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const R=new Set;let U;function J(){U={r:0,c:[],p:U}}function V(){U.r||r(U.c),U=U.p}function K(e,t){e&&e.i&&(R.delete(e),e.i(t))}function Q(e,t,n,o){if(e&&e.o){if(R.has(e))return;R.add(e),U.c.push((()=>{R.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function W(e,t,n){const o=e.$$.props[t];void 0!==o&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function X(e){e&&e.c()}function Y(e,t,o,i){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=e.$$;s&&s.m(t,o),i||I((()=>{const t=c.map(n).filter(l);a?a.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(I)}function G(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(e,t){-1===e.$$.dirty[0]&&(E.push(e),N||(N=!0,L.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(t,n,l,i,s,c,a,u=[-1]){const d=H;T(t);const p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};a&&a(p.root);let f=!1;if(p.ctx=l?l(t,n.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&s(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),f&&ee(t,e)),n})):[],p.update(),f=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(m)}else p.fragment&&p.fragment.c();n.intro&&K(t.$$.fragment),Y(t,n.target,n.anchor,n.customElement),q()}T(d)}class ne{$destroy(){G(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const oe=e=>({}),re=e=>({}),le=e=>({}),ie=e=>({});function se(e){let t,n,o,l,i,s,a,f,h,v,C,M,z,H,T,_,S;const E=e[7].header,O=c(E,e,e[6],ie),A=e[7].default,P=c(A,e,e[6],null),L=e[7].footer,N=c(L,e,e[6],re),I=N||function(e){let t,n,o,r,l,i,s,c;return{c(){t=x("div"),n=x("button"),o=$(e[2]),r=y(),l=x("button"),i=$(e[1]),b(l,"type","submit"),b(t,"class","mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense")},m(a,u){g(a,t,u),k(t,n),k(n,o),k(t,r),k(t,l),k(l,i),s||(c=w(n,"click",e[4]),s=!0)},p(e,t){4&t&&j(o,e[2]),2&t&&j(i,e[1])},d(e){e&&m(t),s=!1,c()}}}(e);return{c(){t=x("form"),n=x("div"),o=x("div"),l=x("div"),i=y(),s=x("span"),s.textContent="​",a=y(),f=x("div"),h=x("div"),v=x("h3"),O&&O.c(),C=y(),M=x("div"),z=x("p"),P&&P.c(),H=y(),I&&I.c(),b(l,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"),b(l,"aria-hidden","true"),b(s,"class","hidden sm:inline-block sm:align-middle sm:h-screen"),b(s,"aria-hidden","true"),b(v,"class","text-lg leading-6 font-medium text-gray-900"),b(v,"id","modal-title"),b(z,"class","text-sm text-gray-500"),b(M,"class","mt-2"),b(h,"class","mt-3 text-left sm:mt-5"),b(f,"class","modal inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6"),b(f,"role","dialog"),b(f,"aria-modal","true"),b(o,"class","flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"),b(n,"class","fixed z-10 inset-0 overflow-y-auto"),b(n,"aria-labelledby","modal-title"),b(n,"role","dialog"),b(n,"aria-modal","true")},m(r,c){var u;g(r,t,c),k(t,n),k(n,o),k(o,l),k(o,i),k(o,s),k(o,a),k(o,f),k(f,h),k(h,v),O&&O.m(v,null),k(h,C),k(h,M),k(M,z),P&&P.m(z,null),k(f,H),I&&I.m(f,null),e[8](f),T=!0,_||(S=[w(l,"click",e[4]),w(t,"submit",(u=e[5],function(e){return e.preventDefault(),u.call(this,e)}))],_=!0)},p(e,t){O&&O.p&&(!T||64&t)&&d(O,E,e,e[6],T?u(E,e[6],t,le):p(e[6]),ie),P&&P.p&&(!T||64&t)&&d(P,A,e,e[6],T?u(A,e[6],t,null):p(e[6]),null),N?N.p&&(!T||64&t)&&d(N,L,e,e[6],T?u(L,e[6],t,oe):p(e[6]),re):I&&I.p&&(!T||6&t)&&I.p(e,T?t:-1)},i(e){T||(K(O,e),K(P,e),K(I,e),T=!0)},o(e){Q(O,e),Q(P,e),Q(I,e),T=!1},d(n){n&&m(t),O&&O.d(n),P&&P.d(n),I&&I.d(n),e[8](null),_=!1,r(S)}}}function ce(e){let t,n,o=e[0]&&se(e);return{c(){o&&o.c(),t=v()},m(e,r){o&&o.m(e,r),g(e,t,r),n=!0},p(e,[n]){e[0]?o?(o.p(e,n),1&n&&K(o,1)):(o=se(e),o.c(),K(o,1),o.m(t.parentNode,t)):o&&(J(),Q(o,1,1,(()=>{o=null})),V())},i(e){n||(K(o),n=!0)},o(e){Q(o),n=!1},d(e){o&&o.d(e),e&&m(t)}}}function ae(e,t,n){let{$$slots:o={},$$scope:r}=t,{show:l=!1}=t,{actionText:i}=t,{cancelText:s="Cancel"}=t;const c=_(),a=()=>{n(0,l=!1)};let u;return e.$$set=e=>{"show"in e&&n(0,l=e.show),"actionText"in e&&n(1,i=e.actionText),"cancelText"in e&&n(2,s=e.cancelText),"$$scope"in e&&n(6,r=e.$$scope)},[l,i,s,u,a,()=>{a(),c("action")},r,o,function(e){O[e?"unshift":"push"]((()=>{u=e,n(3,u)}))}]}class ue extends ne{constructor(e){super(),te(this,e,ae,ce,i,{show:0,actionText:1,cancelText:2})}}const de=[];const pe="PURCHASE",fe="DEPOSIT",he="TRANSACTIONS";const ke=function(){let t=JSON.parse(localStorage.getItem(he))||[];const{subscribe:n,set:o,update:r}=function(t,n=e){let o;const r=new Set;function l(e){if(i(t,e)&&(t=e,o)){const e=!de.length;for(const e of r)e[1](),de.push(e,t);if(e){for(let e=0;e<de.length;e+=2)de[e][0](de[e+1]);de.length=0}}}return{set:l,update:function(e){l(e(t))},subscribe:function(i,s=e){const c=[i,s];return r.add(c),1===r.size&&(o=n(l)||e),i(t),()=>{r.delete(c),0===r.size&&(o(),o=null)}}}}(t);return{subscribe:n,addPurchase:e=>r((t=>{let n={type:pe,payload:e};return t.push(n),localStorage.setItem(he,JSON.stringify(t)),t})),addDeposit:e=>r((t=>{let n={type:fe,payload:e};return t.push(n),localStorage.setItem(he,JSON.stringify(t)),t}))}}();function ge(e,t,n){const o=e.slice();return o[1]=t[n],o}function me(e){let t,n,o,r,l,i,s,c,a,u,d=e[1].payload.ticker+"",p=e[1].payload.amount+"",f=e[1].payload.price+"";return{c(){t=x("tr"),n=x("td"),o=$(d),r=y(),l=x("td"),i=$(p),s=y(),c=x("td"),a=$(f),u=y(),b(n,"class","px-6 py-2"),b(l,"class","px-6 py-2"),b(c,"class","px-6 py-2 text-right")},m(e,d){g(e,t,d),k(t,n),k(n,o),k(t,r),k(t,l),k(l,i),k(t,s),k(t,c),k(c,a),k(t,u)},p(e,t){1&t&&d!==(d=e[1].payload.ticker+"")&&j(o,d),1&t&&p!==(p=e[1].payload.amount+"")&&j(i,p),1&t&&f!==(f=e[1].payload.price+"")&&j(a,f)},d(e){e&&m(t)}}}function xe(t){let n,o,r,l,i=t[0],s=[];for(let e=0;e<i.length;e+=1)s[e]=me(ge(t,i,e));return{c(){n=x("table"),o=x("thead"),o.innerHTML='<tr><th scope="col" class="font-bold px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TICKER</th> \n        <th scope="col" class="font-bold px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QUANTITY</th> \n\n        <th scope="col" class="font-bold px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">VALUE</th></tr>',r=y(),l=x("tbody");for(let e=0;e<s.length;e+=1)s[e].c();b(o,"class","bg-white"),b(l,"class","bg-white divide-y divide-gray-200"),b(n,"class","min-w-full divide-y divide-gray-200")},m(e,t){g(e,n,t),k(n,o),k(n,r),k(n,l);for(let e=0;e<s.length;e+=1)s[e].m(l,null)},p(e,[t]){if(1&t){let n;for(i=e[0],n=0;n<i.length;n+=1){const o=ge(e,i,n);s[n]?s[n].p(o,t):(s[n]=me(o),s[n].c(),s[n].m(l,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=i.length}},i:e,o:e,d(e){e&&m(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(s,e)}}}function $e(e,t,n){let o=[];return ke.subscribe((e=>n(0,o=e.filter((e=>e.type===pe))))),[o]}class ye extends ne{constructor(e){super(),te(this,e,$e,xe,i,{})}}const ve={logomark:{box:256,svg:'<rect width="256" height="256" fill="none"></rect><path d="M128,200c16,0,42.45589-.1803,72.88973-17.75129s40.28225-39.5825,43.43363-50.85144a7.95859,7.95859,0,0,0-5.67818-9.83489c-7.38178-1.89206-20.12947-3.60238-36.52927.288" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M53.88184,121.84985c-16.39872-3.88969-29.14558-2.17944-36.527-.28747a7.95859,7.95859,0,0,0-5.67818,9.83489c3.15138,11.26894,12.99979,33.28046,43.43363,50.85144S112,200,128,200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M128,200s40-21.81818,40-80c0-45.58443-24.55378-68.84723-35.18644-76.78386a8.03282,8.03282,0,0,0-9.62712,0C112.55378,51.15277,88,74.41557,88,120,88,178.18182,128,200,128,200Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M128,200c11.99027-2.55021,44.33-20.78184,63.71281-54.35383S206.32158,85.26679,202.535,73.60781a7.99178,7.99178,0,0,0-9.27184-5.3531,77.437,77.437,0,0,0-31.35645,15.135" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M94.09282,83.38935a77.43686,77.43686,0,0,0-31.356-15.13464,7.99178,7.99178,0,0,0-9.27184,5.3531c-3.78659,11.659-8.56062,38.46637,10.82218,72.03836S116.00973,197.44979,128,200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>'},home:{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <polyline points="5 12 3 12 12 3 21 12 19 12" /> <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /> <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></g>'},"file-plus":{box:24,svg:'<g  stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 3v4a1 1 0 0 0 1 1h4" /> <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /> <line x1="12" y1="11" x2="12" y2="17" /> <line x1="9" y1="14" x2="15" y2="14" /> </g>'},"file-alert":{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 3v4a1 1 0 0 0 1 1h4" /> <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /> <line x1="12" y1="17" x2="12.01" y2="17" /> <line x1="12" y1="11" x2="12" y2="14" /> </g>'},briefcase:{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <rect x="3" y="7" width="18" height="13" rx="2" /> <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /> <line x1="12" y1="12" x2="12" y2="12.01" /> <path d="M3 13a20 20 0 0 0 18 0" /> </g>'},user:{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="12" cy="7" r="4" /> <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /> </g>'},users:{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="9" cy="7" r="4" /> <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /> <path d="M16 3.13a4 4 0 0 1 0 7.75" /> <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /> </g>'},"chevron-left":{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <polyline points="15 6 9 12 15 18" /> </g>'},"chevron-right":{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <polyline points="9 6 15 12 9 18" /> </g>'},"arrow-left":{box:24,svg:'<g  stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="5" y1="12" x2="19" y2="12" /> <line x1="5" y1="12" x2="11" y2="18" /> <line x1="5" y1="12" x2="11" y2="6" /> </g>'},plus:{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></g>'},"external-link":{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" /><line x1="10" y1="14" x2="20" y2="4" /><polyline points="15 4 20 4 20 9" /></g>'},"chevron-down":{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="6 9 12 15 18 9" /></g>'},"chevron-up":{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="6 15 12 9 18 15" /></g>'},clock:{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 15" /></g>'},check:{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></g>'},download:{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /> <polyline points="7 11 12 16 17 11" /> <line x1="12" y1="4" x2="12" y2="16" /> </g>'},printer:{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /> <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /> <rect x="7" y="13" width="10" height="8" rx="2" /> </g>'},hierarchy:{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="M6.5 17.5l5.5 -4.5l5.5 4.5" /><line x1="12" y1="7" x2="12" y2="13" /></g>'},tool:{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" /> </g>'},box:{box:24,svg:'<g  stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" /> <line x1="12" y1="12" x2="20" y2="7.5" /> <line x1="12" y1="12" x2="12" y2="21" /> <line x1="12" y1="12" x2="4" y2="7.5" /> <line x1="16" y1="5.25" x2="8" y2="9.75" /> </g>'},x:{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></g>'},"circle-dashed":{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" /><path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" /><path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" /><path d="M8.56 20.31a9 9 0 0 0 3.44 .69" /><path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" /><path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" /><path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" /><path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" /></g>'},electricity:{box:256,svg:'<rect width="256" height="256" fill="none"></rect><polygon points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon>'},gas:{box:256,svg:'<rect width="256" height="256" fill="none"></rect><path d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>'},"shield-check":{box:256,svg:'<g fill="currentColor"><rect width="256" height="256" fill="none"></rect><path d="M40,114.66667V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,226.51683,40,198.682,40,114.66667Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="172 104 113.333 160 84 132" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></g>'},"clock-counter-clockwise":{box:256,svg:'<rect width="256" height="256" fill="none"></rect><line x1="128" y1="80" x2="128" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="169.56922" y1="152" x2="128" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="71.833 99.716 31.833 99.716 31.833 59.716" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><path d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>'},"chart-line":{box:256,svg:'<rect width="256" height="256" fill="none"></rect><polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="224.002 96 160.002 152 96.002 104 32.002 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>'},"magnifying-glass":{box:256,svg:'<rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>'},"map-pin":{box:256,svg:'<rect width="256" height="256" fill="none"></rect><circle cx="128" cy="104" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>'},"list-checks":{box:256,svg:'<rect width="256" height="256" fill="none"></rect><line x1="128" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="64" x2="216" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="192" x2="216" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="92 48 57.3 80 40 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="92 112 57.3 144 40 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="92 176 57.3 208 40 192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>'},"funnel-simple":{box:256,svg:'<rect width="256" height="256" fill="none"></rect><line x1="64" y1="128" x2="192" y2="128" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="24" y1="80" x2="232" y2="80" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="104" y1="176" x2="152" y2="176" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>'},connect:{box:48,svg:'<rect width="48" height="48" fill="white" fill-opacity="0.01"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10 42C13.3137 42 16 39.3137 16 36C16 32.6863 13.3137 30 10 30C6.68629 30 4 32.6863 4 36C4 39.3137 6.68629 42 10 42Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38 44C41.3137 44 44 41.3137 44 38C44 34.6863 41.3137 32 38 32C34.6863 32 32 34.6863 32 38C32 41.3137 34.6863 44 38 44Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22 28C26.4183 28 30 24.4183 30 20C30 15.5817 26.4183 12 22 12C17.5817 12 14 15.5817 14 20C14 24.4183 17.5817 28 22 28Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M34 12C36.2091 12 38 10.2091 38 8C38 5.79086 36.2091 4 34 4C31.7909 4 30 5.79086 30 8C30 10.2091 31.7909 12 34 12Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 11L15 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 12L28 14" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 33.5L28 26" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 31L18 27" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'},"building-skyscraper":{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="3" y1="21" x2="21" y2="21" /> <path d="M5 21v-14l8 -4v18" /> <path d="M19 21v-10l-6 -4" /> <line x1="9" y1="9" x2="9" y2="9.01" /> <line x1="9" y1="12" x2="9" y2="12.01" /> <line x1="9" y1="15" x2="9" y2="15.01" /> <line x1="9" y1="18" x2="9" y2="18.01" /> </g>'},"trash-x":{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M4 7h16" /> <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /> <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /> <path d="M10 12l4 4m0 -4l-4 4" /> </g>'},"info-circle":{box:24,svg:'<g stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="12" cy="12" r="9" /> <line x1="12" y1="8" x2="12.01" y2="8" /> <polyline points="11 12 12 12 12 16 13 16" /> </g>'}};function we(t){let n,o,r,l=t[3].svg+"";return{c(){var e;e="svg",n=document.createElementNS("http://www.w3.org/2000/svg",e),b(n,"class",o=t[4].class+" icon-"+t[0]+" "+t[1]+" svelte-1qvktpj"),b(n,"fill","currentColor"),b(n,"focusable",t[2]),b(n,"viewBox",r="0 0 "+t[3].box+" "+t[3].box)},m(e,t){g(e,n,t),n.innerHTML=l},p(e,[t]){8&t&&l!==(l=e[3].svg+"")&&(n.innerHTML=l),19&t&&o!==(o=e[4].class+" icon-"+e[0]+" "+e[1]+" svelte-1qvktpj")&&b(n,"class",o),4&t&&b(n,"focusable",e[2]),8&t&&r!==(r="0 0 "+e[3].box+" "+e[3].box)&&b(n,"viewBox",r)},i:e,o:e,d(e){e&&m(n)}}}function be(e,n,o){let r,{name:l}=n,{sizeClass:i="icon-md"}=n,{focusable:s=!1}=n;return e.$$set=e=>{o(4,n=t(t({},n),f(e))),"name"in e&&o(0,l=e.name),"sizeClass"in e&&o(1,i=e.sizeClass),"focusable"in e&&o(2,s=e.focusable)},e.$$.update=()=>{1&e.$$.dirty&&o(3,r=ve[l])},n=f(n),[l,i,s,r,n]}class Ce extends ne{constructor(e){super(),te(this,e,be,we,i,{name:0,sizeClass:1,focusable:2})}}function Me(e){let t;const n=e[8].default,o=c(n,e,e[7],null);return{c(){o&&o.c()},m(e,n){o&&o.m(e,n),t=!0},p(e,r){o&&o.p&&(!t||128&r)&&d(o,n,e,e[7],t?u(n,e[7],r,null):p(e[7]),null)},i(e){t||(K(o,e),t=!0)},o(e){Q(o,e),t=!1},d(e){o&&o.d(e)}}}function je(e){let t,n,o,r;t=new Ce({props:{name:e[0],sizeClass:e[3]}});let l=!e[1]&&ze(e);return{c(){X(t.$$.fragment),n=y(),l&&l.c(),o=v()},m(e,i){Y(t,e,i),g(e,n,i),l&&l.m(e,i),g(e,o,i),r=!0},p(e,n){const r={};1&n&&(r.name=e[0]),8&n&&(r.sizeClass=e[3]),t.$set(r),e[1]?l&&(J(),Q(l,1,1,(()=>{l=null})),V()):l?(l.p(e,n),2&n&&K(l,1)):(l=ze(e),l.c(),K(l,1),l.m(o.parentNode,o))},i(e){r||(K(t.$$.fragment,e),K(l),r=!0)},o(e){Q(t.$$.fragment,e),Q(l),r=!1},d(e){G(t,e),e&&m(n),l&&l.d(e),e&&m(o)}}}function ze(e){let t,n;const o=e[8].default,r=c(o,e,e[7],null);return{c(){t=x("span"),r&&r.c()},m(e,o){g(e,t,o),r&&r.m(t,null),n=!0},p(e,t){r&&r.p&&(!n||128&t)&&d(r,o,e,e[7],n?u(o,e[7],t,null):p(e[7]),null)},i(e){n||(K(r,e),n=!0)},o(e){Q(r,e),n=!1},d(e){e&&m(t),r&&r.d(e)}}}function He(e){let n,o,r,l,i,s,c;const a=[je,Me],u=[];function d(e,t){return e[0]?0:1}o=d(e),r=u[o]=a[o](e);let p=[e[4],{class:l="btn "+(e[5].class??"btn-default")+" "+e[2]+" "+(e[0]?"btn-icon":"")+" "+(e[1]?"btn-circular":"")}],f={};for(let e=0;e<p.length;e+=1)f=t(f,p[e]);return{c(){n=x("button"),r.c(),C(n,f)},m(t,r){g(t,n,r),u[o].m(n,null),n.autofocus&&n.focus(),i=!0,s||(c=w(n,"click",e[9]),s=!0)},p(e,[t]){let s=o;o=d(e),o===s?u[o].p(e,t):(J(),Q(u[s],1,1,(()=>{u[s]=null})),V(),r=u[o],r?r.p(e,t):(r=u[o]=a[o](e),r.c()),K(r,1),r.m(n,null)),C(n,f=function(e,t){const n={},o={},r={$$scope:1};let l=e.length;for(;l--;){const i=e[l],s=t[l];if(s){for(const e in i)e in s||(o[e]=1);for(const e in s)r[e]||(n[e]=s[e],r[e]=1);e[l]=s}else for(const e in i)r[e]=1}for(const e in o)e in n||(n[e]=void 0);return n}(p,[16&t&&e[4],(!i||39&t&&l!==(l="btn "+(e[5].class??"btn-default")+" "+e[2]+" "+(e[0]?"btn-icon":"")+" "+(e[1]?"btn-circular":"")))&&{class:l}]))},i(e){i||(K(r),i=!0)},o(e){Q(r),i=!1},d(e){e&&m(n),u[o].d(),s=!1,c()}}}function Te(e,n,o){const r=["icon","size","circular"];let l=h(n,r),{$$slots:i={},$$scope:s}=n,{icon:c}=n,{size:a="normal"}=n,{circular:u=!1}=n,d="",p="";return"small"===a?(d=u?"w-8 h-8":"py-1.5 px-3 text-sm font-medium",p=u?"icon-sm":"icon-sm -ml-1 mr-1"):"normal"===a?(d=u?"h-10 w-10":"py-2 px-4 text-sm font-medium",p=u?"icon-md":"icon-md -ml-2 mr-1"):"large"===a&&(d=u?"h-12 w-12":"py-3 px-4 font-semibold shadow-md",p=u?"icon-lg":"icon-lg mr-2"),e.$$set=e=>{o(5,n=t(t({},n),f(e))),o(4,l=h(n,r)),"icon"in e&&o(0,c=e.icon),"size"in e&&o(6,a=e.size),"circular"in e&&o(1,u=e.circular),"$$scope"in e&&o(7,s=e.$$scope)},n=f(n),[c,u,d,p,l,n,a,s,i,function(t){S.call(this,e,t)}]}class _e extends ne{constructor(e){super(),te(this,e,Te,He,i,{icon:0,size:6,circular:1})}}function Se(e){let t,n,o,l,i,s,c,a,u,d,p,f,h,v,C,j,H,T,_;return{c(){t=x("div"),n=x("form"),o=x("label"),l=$("Ticker: "),i=x("input"),s=y(),c=x("label"),a=$("Amount: "),u=x("input"),d=y(),p=x("label"),f=$("Price: "),h=x("input"),v=y(),C=x("label"),j=$("Fee: "),H=x("input"),b(i,"type","text"),b(u,"type","number"),b(h,"type","number"),b(H,"type","number")},m(r,m){g(r,t,m),k(t,n),k(n,o),k(o,l),k(o,i),z(i,e[1].ticker),k(n,s),k(n,c),k(c,a),k(c,u),z(u,e[1].amount),k(n,d),k(n,p),k(p,f),k(p,h),z(h,e[1].price),k(n,v),k(n,C),k(C,j),k(C,H),z(H,e[1].fee),T||(_=[w(i,"input",e[3]),w(u,"input",e[4]),w(h,"input",e[5]),w(H,"input",e[6])],T=!0)},p(e,t){2&t&&i.value!==e[1].ticker&&z(i,e[1].ticker),2&t&&M(u.value)!==e[1].amount&&z(u,e[1].amount),2&t&&M(h.value)!==e[1].price&&z(h,e[1].price),2&t&&M(H.value)!==e[1].fee&&z(H,e[1].fee)},d(e){e&&m(t),T=!1,r(_)}}}function Ee(t){let n;return{c(){n=x("div"),n.textContent="Add a new option",b(n,"slot","header")},m(e,t){g(e,n,t)},p:e,d(e){e&&m(n)}}}function Oe(e){let t,n,o;function r(t){e[7](t)}let l={actionText:"Buy",$$slots:{header:[Ee],default:[Se]},$$scope:{ctx:e}};return void 0!==e[0]&&(l.show=e[0]),t=new ue({props:l}),O.push((()=>W(t,"show",r))),t.$on("action",e[2]),{c(){X(t.$$.fragment)},m(e,n){Y(t,e,n),o=!0},p(e,[o]){const r={};258&o&&(r.$$scope={dirty:o,ctx:e}),!n&&1&o&&(n=!0,r.show=e[0],Z((()=>n=!1))),t.$set(r)},i(e){o||(K(t.$$.fragment,e),o=!0)},o(e){Q(t.$$.fragment,e),o=!1},d(e){G(t,e)}}}function Ae(e,t,n){let o={ticker:"",amount:0,price:0,fee:0},{showOptionModal:r=!1}=t;return e.$$set=e=>{"showOptionModal"in e&&n(0,r=e.showOptionModal)},[r,o,function(){ke.addPurchase(o),n(1,o={ticker:"",amount:0,price:0,fee:0})},function(){o.ticker=this.value,n(1,o)},function(){o.amount=M(this.value),n(1,o)},function(){o.price=M(this.value),n(1,o)},function(){o.fee=M(this.value),n(1,o)},function(e){r=e,n(0,r)}]}class Pe extends ne{constructor(e){super(),te(this,e,Ae,Oe,i,{showOptionModal:0})}}function Le(t){let n,o,r;return{c(){n=x("div"),o=$(t[0]),r=$("€")},m(e,t){g(e,n,t),k(n,o),k(n,r)},p(e,[t]){1&t&&j(o,e[0])},i:e,o:e,d(e){e&&m(n)}}}function Ne(e,t,n){let o;s(e,ke,(e=>n(1,o=e)));let r=l(o);function l(e){let t=0;return e.forEach((e=>{e.type===pe&&(t-=e.payload.fee),e.type===fe&&(t+=e.payload.amount)})),t.toFixed(2)}return ke.subscribe((e=>n(0,r=l(e)))),[r]}class Ie extends ne{constructor(e){super(),te(this,e,Ne,Le,i,{})}}function Ze(t){let n,o,r;return{c(){n=x("div"),o=$(t[0]),r=$(" €")},m(e,t){g(e,n,t),k(n,o),k(n,r)},p(e,[t]){1&t&&j(o,e[0])},i:e,o:e,d(e){e&&m(n)}}}function De(e,t,n){let o;s(e,ke,(e=>n(1,o=e)));let r=l(o);function l(e){let t=0;return e.forEach((e=>{e.type===pe&&(t-=e.payload.price*e.payload.amount),e.type===fe&&(t+=e.payload.amount)})),t.toFixed(2)}return ke.subscribe((e=>n(0,r=l(e)))),[r]}class Be extends ne{constructor(e){super(),te(this,e,De,Ze,i,{})}}function qe(e){let t;return{c(){t=$("Deposit")},m(e,n){g(e,t,n)},d(e){e&&m(t)}}}function Fe(e){let t;return{c(){t=$("Withdraw")},m(e,n){g(e,t,n)},d(e){e&&m(t)}}}function Re(e){let t;return{c(){t=$("Sell")},m(e,n){g(e,t,n)},d(e){e&&m(t)}}}function Ue(e){let t;return{c(){t=$("Buy")},m(e,n){g(e,t,n)},d(e){e&&m(t)}}}function Je(e){let t,n,o,r,l;return{c(){t=x("div"),n=x("input"),o=$(" EUR"),b(n,"type","number"),b(n,"placeholder","0.00"),b(n,"min","0"),b(n,"step",".01"),n.required=!0},m(i,s){g(i,t,s),k(t,n),z(n,e[0]),k(t,o),r||(l=w(n,"input",e[7]),r=!0)},p(e,t){1&t&&M(n.value)!==e[0]&&z(n,e[0])},d(e){e&&m(t),r=!1,l()}}}function Ve(t){let n;return{c(){n=x("div"),n.textContent="Deposit amount",b(n,"slot","header")},m(e,t){g(e,n,t)},p:e,d(e){e&&m(n)}}}function Ke(e){let t,n,o,r,l,i,s,c,a,u,d,p,f,h,$,v,w,C,M,j,z,H,T,_,S,E,A,P,L,N,I,D,B,q,F,R;function U(t){e[8](t)}s=new Be({}),f=new Ie({}),M=new _e({props:{class:"btn-success",$$slots:{default:[qe]},$$scope:{ctx:e}}}),M.$on("click",e[3]),z=new _e({props:{class:"btn-danger w-100",$$slots:{default:[Fe]},$$scope:{ctx:e}}}),z.$on("click",e[4]),_=new _e({props:{class:"btn-primary",$$slots:{default:[Re]},$$scope:{ctx:e}}}),_.$on("click",e[5]),E=new _e({props:{class:"btn-primary",$$slots:{default:[Ue]},$$scope:{ctx:e}}}),E.$on("click",e[6]),P=new ye({});let J={actionText:"Continue",$$slots:{header:[Ve],default:[Je]},$$scope:{ctx:e}};function V(t){e[10](t)}void 0!==e[1]&&(J.show=e[1]),N=new ue({props:J}),O.push((()=>W(N,"show",U))),N.$on("action",e[9]);let ee={};return void 0!==e[2]&&(ee.showOptionModal=e[2]),q=new Pe({props:ee}),O.push((()=>W(q,"showOptionModal",V))),{c(){t=x("div"),n=x("div"),o=x("div"),r=x("div"),r.textContent="Available",l=y(),i=x("div"),X(s.$$.fragment),c=y(),a=x("div"),u=x("div"),u.textContent="NAV",d=y(),p=x("div"),X(f.$$.fragment),h=y(),$=x("div"),$.innerHTML='<img src="pit-logo.svg" height="48" width="48" alt="PIT logo"/>',v=y(),w=x("div"),C=x("div"),X(M.$$.fragment),j=y(),X(z.$$.fragment),H=y(),T=x("div"),X(_.$$.fragment),S=y(),X(E.$$.fragment),A=y(),X(P.$$.fragment),L=y(),X(N.$$.fragment),D=y(),B=x("div"),X(q.$$.fragment),b(r,"class","text-sm text-gray-500"),b(i,"class","text-xl font-bold"),b(u,"class","text-sm text-gray-500"),b(p,"class","text-xl font-bold"),b(n,"class","flex justify-between mb-5"),b(C,"class","grid grid-cols-2 gap-3"),b(T,"class","grid grid-cols-2 gap-3"),b(w,"class","space-y-2 mb-3")},m(e,m){g(e,t,m),k(t,n),k(n,o),k(o,r),k(o,l),k(o,i),Y(s,i,null),k(n,c),k(n,a),k(a,u),k(a,d),k(a,p),Y(f,p,null),k(n,h),k(n,$),k(t,v),k(t,w),k(w,C),Y(M,C,null),k(C,j),Y(z,C,null),k(w,H),k(w,T),Y(_,T,null),k(T,S),Y(E,T,null),k(t,A),Y(P,t,null),g(e,L,m),Y(N,e,m),g(e,D,m),g(e,B,m),Y(q,B,null),R=!0},p(e,[t]){const n={};2048&t&&(n.$$scope={dirty:t,ctx:e}),M.$set(n);const o={};2048&t&&(o.$$scope={dirty:t,ctx:e}),z.$set(o);const r={};2048&t&&(r.$$scope={dirty:t,ctx:e}),_.$set(r);const l={};2048&t&&(l.$$scope={dirty:t,ctx:e}),E.$set(l);const i={};2049&t&&(i.$$scope={dirty:t,ctx:e}),!I&&2&t&&(I=!0,i.show=e[1],Z((()=>I=!1))),N.$set(i);const s={};!F&&4&t&&(F=!0,s.showOptionModal=e[2],Z((()=>F=!1))),q.$set(s)},i(e){R||(K(s.$$.fragment,e),K(f.$$.fragment,e),K(M.$$.fragment,e),K(z.$$.fragment,e),K(_.$$.fragment,e),K(E.$$.fragment,e),K(P.$$.fragment,e),K(N.$$.fragment,e),K(q.$$.fragment,e),R=!0)},o(e){Q(s.$$.fragment,e),Q(f.$$.fragment,e),Q(M.$$.fragment,e),Q(z.$$.fragment,e),Q(_.$$.fragment,e),Q(E.$$.fragment,e),Q(P.$$.fragment,e),Q(N.$$.fragment,e),Q(q.$$.fragment,e),R=!1},d(e){e&&m(t),G(s),G(f),G(M),G(z),G(_),G(E),G(P),e&&m(L),G(N,e),e&&m(D),e&&m(B),G(q)}}}function Qe(e,t,n){let o=1200.5,r=!1,l=!1;return[o,r,l,function(){n(1,r=!0)},function(){n(1,r=!0)},function(){n(2,l=!0)},function(){n(2,l=!0)},function(){o=M(this.value),n(0,o)},function(e){r=e,n(1,r)},()=>ke.addDeposit({amount:o}),function(e){l=e,n(2,l)}]}class We extends ne{constructor(e){super(),te(this,e,Qe,Ke,i,{})}}function Xe(t){let n,o,r,l,i,s,c,a,u,d,p,f,h,$,v,w,C,M,j,z,H,T,_,S,E;return a=new Ce({props:{name:"check",class:"text-green-500"}}),$=new Ce({props:{name:"check",class:"text-green-500"}}),z=new Ce({props:{name:"check",class:"text-green-500"}}),{c(){var e,t,k,g;n=x("div"),o=x("div"),r=x("div"),l=x("h3"),l.textContent="Personal investments made easy",i=y(),s=x("div"),c=x("div"),X(a.$$.fragment),u=y(),d=x("span"),d.textContent="Track your recurring investments",p=y(),f=x("div"),h=x("div"),X($.$$.fragment),v=y(),w=x("span"),w.textContent="Consolidate all investments across different sources",C=y(),M=x("div"),j=x("div"),X(z.$$.fragment),H=y(),T=x("span"),T.textContent="Simplifies TAX reporting",_=y(),S=x("div"),S.innerHTML='<img src="pit-logo.svg" height="72" width="72" alt="PIT logo"/> \n            <span class="text-xs font-bold">Personal Investments Tracker</span>',b(l,"class","text-lg font-bold mb-2"),b(s,"class","flex items-center space-x-2"),b(f,"class","flex items-center space-x-2"),b(M,"class","flex items-center space-x-2"),b(S,"class","text-center flex items-center flex-col ml-auto"),b(o,"class","bg-amber-100 flex border border-amber-200 rounded-lg p-5"),e=o,t="width",null===(k="450px")?e.style.removeProperty(t):e.style.setProperty(t,k,g?"important":""),b(n,"class","fixed bottom-0 right-0 pb-6 pr-6")},m(e,t){g(e,n,t),k(n,o),k(o,r),k(r,l),k(r,i),k(r,s),k(s,c),Y(a,c,null),k(s,u),k(s,d),k(r,p),k(r,f),k(f,h),Y($,h,null),k(f,v),k(f,w),k(r,C),k(r,M),k(M,j),Y(z,j,null),k(M,H),k(M,T),k(o,_),k(o,S),E=!0},p:e,i(e){E||(K(a.$$.fragment,e),K($.$$.fragment,e),K(z.$$.fragment,e),E=!0)},o(e){Q(a.$$.fragment,e),Q($.$$.fragment,e),Q(z.$$.fragment,e),E=!1},d(e){e&&m(n),G(a),G($),G(z)}}}class Ye extends ne{constructor(e){super(),te(this,e,null,Xe,i,{})}}function Ge(t){let n,o,r,l,i,s,c,a,u,d,p,f,h;return a=new Ye({}),d=new We({}),f=new Pe({}),{c(){n=x("main"),o=x("section"),r=x("div"),l=x("div"),i=x("div"),s=x("div"),c=x("div"),X(a.$$.fragment),u=y(),X(d.$$.fragment),p=y(),X(f.$$.fragment),b(s,"class","sm:mx-auto sm:w-full sm:max-w-3xl"),b(i,"class","w-full mx-auto py-6 sm:px-0 lg:px-8"),b(l,"class","relative z-20 w-full"),b(r,"class","bg-white shadow sm:rounded-lg mt-8"),b(o,"class","relative flex items-center justify-between flex-col h-screen lg:overflow-hidden"),b(n,"class","min-h-screen bg-gray-100")},m(e,t){g(e,n,t),k(n,o),k(o,r),k(r,l),k(l,i),k(i,s),k(s,c),Y(a,c,null),k(c,u),Y(d,c,null),k(c,p),Y(f,c,null),h=!0},p:e,i(e){h||(K(a.$$.fragment,e),K(d.$$.fragment,e),K(f.$$.fragment,e),h=!0)},o(e){Q(a.$$.fragment,e),Q(d.$$.fragment,e),Q(f.$$.fragment,e),h=!1},d(e){e&&m(n),G(a),G(d),G(f)}}}return new class extends ne{constructor(e){super(),te(this,e,null,Ge,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map