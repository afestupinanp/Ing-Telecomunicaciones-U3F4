(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function y(){}function at(t,e){for(const n in e)t[n]=e[n];return t}function Ot(t){return t()}function mt(){return Object.create(null)}function q(t){t.forEach(Ot)}function tt(t){return typeof t=="function"}function $(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let nt;function _t(t,e){return nt||(nt=document.createElement("a")),nt.href=e,t===nt.href}function qt(t){return Object.keys(t).length===0}function $t(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function be(t,e,n,r){if(t){const o=Lt(t,e,n,r);return t[0](o)}}function Lt(t,e,n,r){return t[1]&&r?at(n.ctx.slice(),t[1](r(e))):n.ctx}function ye(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const s=[],a=Math.max(e.dirty.length,o.length);for(let c=0;c<a;c+=1)s[c]=e.dirty[c]|o[c];return s}return e.dirty|o}return e.dirty}function we(t,e,n,r,o,s){if(o){const a=Lt(e,n,r,s);t.p(a,o)}}function ve(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function F(t){return t&&tt(t.destroy)?t.destroy:y}function h(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function ke(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function j(){return W(" ")}function ut(){return W("")}function Mt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ft(t){return Array.from(t.childNodes)}function Ut(t,e){e=""+e,t.data!==e&&(t.data=e)}function pt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Vt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,r,e),o}function ot(t,e){return new t(e)}let Z;function Q(t){Z=t}function it(){if(!Z)throw new Error("Function called outside component initialization");return Z}function Ee(t){it().$$.on_mount.push(t)}function Ht(t){it().$$.after_update.push(t)}function Yt(t){it().$$.on_destroy.push(t)}function zt(){const t=it();return(e,n,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[e];if(o){const s=Vt(e,n,{cancelable:r});return o.slice().forEach(a=>{a.call(t,s)}),!s.defaultPrevented}return!0}}function gt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const X=[],bt=[];let G=[];const yt=[],jt=Promise.resolve();let lt=!1;function Pt(){lt||(lt=!0,jt.then(At))}function Bt(){return Pt(),jt}function ct(t){G.push(t)}const st=new Set;let U=0;function At(){if(U!==0)return;const t=Z;do{try{for(;U<X.length;){const e=X[U];U++,Q(e),Xt(e.$$)}}catch(e){throw X.length=0,U=0,e}for(Q(null),X.length=0,U=0;bt.length;)bt.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];st.has(n)||(st.add(n),n())}G.length=0}while(X.length);for(;yt.length;)yt.pop()();lt=!1,st.clear(),Q(t)}function Xt(t){if(t.fragment!==null){t.update(),q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ct)}}function Wt(t){const e=[],n=[];G.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),G=e}const rt=new Set;let N;function ft(){N={r:0,c:[],p:N}}function dt(){N.r||q(N.c),N=N.p}function O(t,e){t&&t.i&&(rt.delete(t),t.i(e))}function P(t,e,n,r){if(t&&t.o){if(rt.has(t))return;rt.add(t),N.c.push(()=>{rt.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function St(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const l in a)l in c||(r[l]=1);for(const l in c)o[l]||(n[l]=c[l],o[l]=1);t[s]=c}else for(const l in a)o[l]=1}for(const a in r)a in n||(n[a]=void 0);return n}function Tt(t){return typeof t=="object"&&t!==null?t:{}}function R(t){t&&t.c()}function T(t,e,n,r){const{fragment:o,after_update:s}=t.$$;o&&o.m(e,n),r||ct(()=>{const a=t.$$.on_mount.map(Ot).filter(tt);t.$$.on_destroy?t.$$.on_destroy.push(...a):q(a),t.$$.on_mount=[]}),s.forEach(ct)}function D(t,e){const n=t.$$;n.fragment!==null&&(Wt(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gt(t,e){t.$$.dirty[0]===-1&&(X.push(t),Pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,n,r,o,s,a,c=[-1]){const l=Z;Q(t);const i=t.$$={fragment:null,ctx:[],props:s,update:y,not_equal:o,bound:mt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:mt(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};a&&a(i.root);let u=!1;if(i.ctx=n?n(t,e.props||{},(m,w,...b)=>{const k=b.length?b[0]:w;return i.ctx&&o(i.ctx[m],i.ctx[m]=k)&&(!i.skip_bound&&i.bound[m]&&i.bound[m](k),u&&Gt(t,m)),w}):[],i.update(),u=!0,q(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const m=Ft(e.target);i.fragment&&i.fragment.l(m),m.forEach(L)}else i.fragment&&i.fragment.c();e.intro&&O(t.$$.fragment),T(t,e.target,e.anchor,e.customElement),At()}Q(l)}class J{$destroy(){D(this,1),this.$destroy=y}$on(e,n){if(!tt(n))return y;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!qt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function V(t){if(!t)throw Error("Parameter args is required");if(!t.component==!t.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(t.component&&(t.asyncComponent=()=>Promise.resolve(t.component)),typeof t.asyncComponent!="function")throw Error("Parameter asyncComponent must be a function");if(t.conditions){Array.isArray(t.conditions)||(t.conditions=[t.conditions]);for(let n=0;n<t.conditions.length;n++)if(!t.conditions[n]||typeof t.conditions[n]!="function")throw Error("Invalid parameter conditions["+n+"]")}return t.loadingComponent&&(t.asyncComponent.loading=t.loadingComponent,t.asyncComponent.loadingParams=t.loadingParams||void 0),{component:t.asyncComponent,userData:t.userData,conditions:t.conditions&&t.conditions.length?t.conditions:void 0,props:t.props&&Object.keys(t.props).length?t.props:{},_sveltesparouter:!0}}const H=[];function Dt(t,e){return{subscribe:Rt(t,e).subscribe}}function Rt(t,e=y){let n;const r=new Set;function o(c){if($(t,c)&&(t=c,n)){const l=!H.length;for(const i of r)i[1](),H.push(i,t);if(l){for(let i=0;i<H.length;i+=2)H[i][0](H[i+1]);H.length=0}}}function s(c){o(c(t))}function a(c,l=y){const i=[c,l];return r.add(i),r.size===1&&(n=e(o)||y),c(t),()=>{r.delete(i),r.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:a}}function It(t,e,n){const r=!Array.isArray(t),o=r?[t]:t,s=e.length<2;return Dt(n,a=>{let c=!1;const l=[];let i=0,u=y;const m=()=>{if(i)return;u();const b=e(r?l[0]:l,a);s?a(b):u=tt(b)?b:y},w=o.map((b,k)=>$t(b,S=>{l[k]=S,i&=~(1<<k),c&&m()},()=>{i|=1<<k}));return c=!0,m(),function(){q(w),u(),c=!1}})}function Kt(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,o,s,a=[],c="",l=t.split("/");for(l[0]||l.shift();o=l.shift();)n=o[0],n==="*"?(a.push("wild"),c+="/(.*)"):n===":"?(r=o.indexOf("?",1),s=o.indexOf(".",1),a.push(o.substring(1,~r?r:~s?s:o.length)),c+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~r?"?":"")+"\\"+o.substring(s))):c+="/"+o;return{keys:a,pattern:new RegExp("^"+c+(e?"(?=$|/)":"/?$"),"i")}}function Jt(t){let e,n,r;const o=[t[2]];var s=t[0];function a(c){let l={};for(let i=0;i<o.length;i+=1)l=at(l,o[i]);return{props:l}}return s&&(e=ot(s,a()),e.$on("routeEvent",t[7])),{c(){e&&R(e.$$.fragment),n=ut()},m(c,l){e&&T(e,c,l),A(c,n,l),r=!0},p(c,l){const i=l&4?St(o,[Tt(c[2])]):{};if(l&1&&s!==(s=c[0])){if(e){ft();const u=e;P(u.$$.fragment,1,0,()=>{D(u,1)}),dt()}s?(e=ot(s,a()),e.$on("routeEvent",c[7]),R(e.$$.fragment),O(e.$$.fragment,1),T(e,n.parentNode,n)):e=null}else s&&e.$set(i)},i(c){r||(e&&O(e.$$.fragment,c),r=!0)},o(c){e&&P(e.$$.fragment,c),r=!1},d(c){c&&L(n),e&&D(e,c)}}}function Qt(t){let e,n,r;const o=[{params:t[1]},t[2]];var s=t[0];function a(c){let l={};for(let i=0;i<o.length;i+=1)l=at(l,o[i]);return{props:l}}return s&&(e=ot(s,a()),e.$on("routeEvent",t[6])),{c(){e&&R(e.$$.fragment),n=ut()},m(c,l){e&&T(e,c,l),A(c,n,l),r=!0},p(c,l){const i=l&6?St(o,[l&2&&{params:c[1]},l&4&&Tt(c[2])]):{};if(l&1&&s!==(s=c[0])){if(e){ft();const u=e;P(u.$$.fragment,1,0,()=>{D(u,1)}),dt()}s?(e=ot(s,a()),e.$on("routeEvent",c[6]),R(e.$$.fragment),O(e.$$.fragment,1),T(e,n.parentNode,n)):e=null}else s&&e.$set(i)},i(c){r||(e&&O(e.$$.fragment,c),r=!0)},o(c){e&&P(e.$$.fragment,c),r=!1},d(c){c&&L(n),e&&D(e,c)}}}function Zt(t){let e,n,r,o;const s=[Qt,Jt],a=[];function c(l,i){return l[1]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=ut()},m(l,i){a[e].m(l,i),A(l,r,i),o=!0},p(l,[i]){let u=e;e=c(l),e===u?a[e].p(l,i):(ft(),P(a[u],1,1,()=>{a[u]=null}),dt(),n=a[e],n?n.p(l,i):(n=a[e]=s[e](l),n.c()),O(n,1),n.m(r.parentNode,r))},i(l){o||(O(n),o=!0)},o(l){P(n),o=!1},d(l){a[e].d(l),l&&L(r)}}}function wt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const ht=Dt(null,function(e){e(wt());const n=()=>{e(wt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});It(ht,t=>t.location);It(ht,t=>t.querystring);const vt=Rt(void 0);function Y(t,e){if(e=Et(e),!t||!t.tagName||t.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return kt(t,e),{update(n){n=Et(n),kt(t,n)}}}function te(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function kt(t,e){let n=e.href||t.getAttribute("href");if(n&&n.charAt(0)=="/")n="#"+n;else if(!n||n.length<2||n.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",r=>{r.preventDefault(),e.disabled||ee(r.currentTarget.getAttribute("href"))})}function Et(t){return t&&typeof t=="string"?{href:t}:t||{}}function ee(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=t}function ne(t,e,n){let{routes:r={}}=e,{prefix:o=""}=e,{restoreScrollState:s=!1}=e;class a{constructor(d,_){if(!_||typeof _!="function"&&(typeof _!="object"||_._sveltesparouter!==!0))throw Error("Invalid component object");if(!d||typeof d=="string"&&(d.length<1||d.charAt(0)!="/"&&d.charAt(0)!="*")||typeof d=="object"&&!(d instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:E,keys:v}=Kt(d);this.path=d,typeof _=="object"&&_._sveltesparouter===!0?(this.component=_.component,this.conditions=_.conditions||[],this.userData=_.userData,this.props=_.props||{}):(this.component=()=>Promise.resolve(_),this.conditions=[],this.props={}),this._pattern=E,this._keys=v}match(d){if(o){if(typeof o=="string")if(d.startsWith(o))d=d.substr(o.length)||"/";else return null;else if(o instanceof RegExp){const x=d.match(o);if(x&&x[0])d=d.substr(x[0].length)||"/";else return null}}const _=this._pattern.exec(d);if(_===null)return null;if(this._keys===!1)return _;const E={};let v=0;for(;v<this._keys.length;){try{E[this._keys[v]]=decodeURIComponent(_[v+1]||"")||null}catch{E[this._keys[v]]=null}v++}return E}async checkConditions(d){for(let _=0;_<this.conditions.length;_++)if(!await this.conditions[_](d))return!1;return!0}}const c=[];r instanceof Map?r.forEach((p,d)=>{c.push(new a(d,p))}):Object.keys(r).forEach(p=>{c.push(new a(p,r[p]))});let l=null,i=null,u={};const m=zt();async function w(p,d){await Bt(),m(p,d)}let b=null,k=null;s&&(k=p=>{p.state&&(p.state.__svelte_spa_router_scrollY||p.state.__svelte_spa_router_scrollX)?b=p.state:b=null},window.addEventListener("popstate",k),Ht(()=>{te(b)}));let S=null,C=null;const et=ht.subscribe(async p=>{S=p;let d=0;for(;d<c.length;){const _=c[d].match(p.location);if(!_){d++;continue}const E={route:c[d].path,location:p.location,querystring:p.querystring,userData:c[d].userData,params:_&&typeof _=="object"&&Object.keys(_).length?_:null};if(!await c[d].checkConditions(E)){n(0,l=null),C=null,w("conditionsFailed",E);return}w("routeLoading",Object.assign({},E));const v=c[d].component;if(C!=v){v.loading?(n(0,l=v.loading),C=v,n(1,i=v.loadingParams),n(2,u={}),w("routeLoaded",Object.assign({},E,{component:l,name:l.name,params:i}))):(n(0,l=null),C=null);const x=await v();if(p!=S)return;n(0,l=x&&x.default||x),C=v}_&&typeof _=="object"&&Object.keys(_).length?n(1,i=_):n(1,i=null),n(2,u=c[d].props),w("routeLoaded",Object.assign({},E,{component:l,name:l.name,params:i})).then(()=>{vt.set(i)});return}n(0,l=null),C=null,vt.set(void 0)});Yt(()=>{et(),k&&window.removeEventListener("popstate",k)});function M(p){gt.call(this,t,p)}function I(p){gt.call(this,t,p)}return t.$$set=p=>{"routes"in p&&n(3,r=p.routes),"prefix"in p&&n(4,o=p.prefix),"restoreScrollState"in p&&n(5,s=p.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=s?"manual":"auto")},[l,i,u,r,o,s,M,I]}class re extends J{constructor(e){super(),K(this,e,ne,Zt,$,{routes:3,prefix:4,restoreScrollState:5})}}const oe="modulepreload",ie=function(t){return"/"+t},Ct={},z=function(e,n,r){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=ie(s),s in Ct)return;Ct[s]=!0;const a=s.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let u=o.length-1;u>=0;u--){const m=o[u];if(m.href===s&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":oe,a||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),a)return new Promise((u,m)=>{i.addEventListener("load",u),i.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function se(t){let e;return{c(){e=g("div"),e.innerHTML='<div class="spinner-border" role="status"><span class="visually-hidden">Cargando...</span></div>',f(e,"class","text-center")},m(n,r){A(n,e,r)},p:y,i:y,o:y,d(n){n&&L(e)}}}class B extends J{constructor(e){super(),K(this,e,null,se,$,{})}}const le={"/":V({asyncComponent:()=>z(()=>import("./Home-1731ab6a.js"),[]),loadingComponent:B}),"/teleasistencia":V({asyncComponent:()=>z(()=>import("./Teleasistencia-feb3821e.js"),["assets/Teleasistencia-feb3821e.js","assets/Referencias-8cf09552.js"]),loadingComponent:B}),"/teletrabajo":V({asyncComponent:()=>z(()=>import("./Teletrabajo-d8d7de42.js"),["assets/Teletrabajo-d8d7de42.js","assets/Referencias-8cf09552.js"]),loadingComponent:B}),"/telemedicina":V({asyncComponent:()=>z(()=>import("./Telemedicina-7e84b884.js"),["assets/Telemedicina-7e84b884.js","assets/Referencias-8cf09552.js"]),loadingComponent:B}),"/teleeducacion":V({asyncComponent:()=>z(()=>import("./Teleeducacion-f8bc6689.js"),[]),loadingComponent:B}),"/comercio-electronico":V({asyncComponent:()=>z(()=>import("./ComercioElectronico-92a13c4b.js"),[]),loadingComponent:B})};function ce(t){let e,n,r,o,s,a,c,l,i,u,m,w,b,k,S,C,et,M,I,p,d,_,E,v;return{c(){e=g("nav"),n=g("div"),r=g("a"),r.textContent="Unidad 3 Fase 4",o=j(),s=g("button"),s.innerHTML='<span class="navbar-toggler-icon"></span>',a=j(),c=g("div"),l=g("ul"),i=g("li"),u=g("a"),u.textContent="Teleasistencia",m=j(),w=g("li"),b=g("a"),b.textContent="Teletrabajo",k=j(),S=g("li"),C=g("a"),C.textContent="Telemedicina",et=j(),M=g("li"),I=g("a"),I.textContent="Teleeducación",p=j(),d=g("li"),_=g("a"),_.textContent="Comercio electrónico",f(r,"class","navbar-brand"),f(s,"class","navbar-toggler"),f(s,"type","button"),f(s,"data-bs-toggle","collapse"),f(s,"data-bs-target","#navbarMenu"),f(s,"aria-controls","navbarMenu"),f(s,"aria-expanded","false"),f(s,"aria-label","Toggle navigation"),f(u,"class","nav-link"),f(i,"class","nav-item"),f(b,"class","nav-link"),f(w,"class","nav-item"),f(C,"class","nav-link"),f(S,"class","nav-item"),f(I,"class","nav-link"),f(M,"class","nav-item"),f(_,"class","nav-link"),f(d,"class","nav-item"),f(l,"class","navbar-nav me-auto mb-2 mb-lg-0"),f(c,"class","collapse navbar-collapse"),f(c,"id","navbarMenu"),f(n,"class","container-fluid"),f(e,"class","navbar fixed-top navbar-expand-lg navbar-dark bg-primary")},m(x,Nt){A(x,e,Nt),h(e,n),h(n,r),h(n,o),h(n,s),h(n,a),h(n,c),h(c,l),h(l,i),h(i,u),h(l,m),h(l,w),h(w,b),h(l,k),h(l,S),h(S,C),h(l,et),h(l,M),h(M,I),h(l,p),h(l,d),h(d,_),E||(v=[F(Y.call(null,r,{href:"/"})),F(Y.call(null,u,{href:"/teleasistencia"})),F(Y.call(null,b,{href:"/teletrabajo"})),F(Y.call(null,C,{href:"/telemedicina"})),F(Y.call(null,I,{href:"/teleeducacion"})),F(Y.call(null,_,{href:"/comercio-electronico"}))],E=!0)},p:y,i:y,o:y,d(x){x&&L(e),E=!1,q(v)}}}class ae extends J{constructor(e){super(),K(this,e,null,ce,$,{})}}function xt(t){let e,n,r;return{c(){e=g("div"),n=g("small"),r=W(t[4]),f(e,"class","col-12 text-center py-3")},m(o,s){A(o,e,s),h(e,n),h(n,r)},p(o,s){s&16&&Ut(r,o[4])},d(o){o&&L(e)}}}function ue(t){let e,n,r,o,s,a,c,l,i=t[4]&&xt(t);return{c(){e=g("div"),n=g("div"),r=g("img"),a=j(),i&&i.c(),f(r,"width",t[2]),f(r,"height",t[3]),_t(r.src,o=t[0])||f(r,"src",o),f(r,"alt",t[1]),f(r,"class",s="img-fluid "+(t[6]?"shadow-sm":"")+" "+(t[5]?"clickeable":"")),f(n,"class","col-12"),f(e,"class","row")},m(u,m){A(u,e,m),h(e,n),h(n,r),h(e,a),i&&i.m(e,null),c||(l=Mt(r,"click",function(){tt(t[5])&&t[5].apply(this,arguments)}),c=!0)},p(u,[m]){t=u,m&4&&f(r,"width",t[2]),m&8&&f(r,"height",t[3]),m&1&&!_t(r.src,o=t[0])&&f(r,"src",o),m&2&&f(r,"alt",t[1]),m&96&&s!==(s="img-fluid "+(t[6]?"shadow-sm":"")+" "+(t[5]?"clickeable":""))&&f(r,"class",s),t[4]?i?i.p(t,m):(i=xt(t),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i:y,o:y,d(u){u&&L(e),i&&i.d(),c=!1,l()}}}function fe(t,e,n){let{url:r}=e,{alt:o}=e,{width:s=""}=e,{height:a=""}=e,{subtitulo:c}=e,{click:l=null}=e,{shadow:i=!0}=e;return t.$$set=u=>{"url"in u&&n(0,r=u.url),"alt"in u&&n(1,o=u.alt),"width"in u&&n(2,s=u.width),"height"in u&&n(3,a=u.height),"subtitulo"in u&&n(4,c=u.subtitulo),"click"in u&&n(5,l=u.click),"shadow"in u&&n(6,i=u.shadow)},[r,o,s,a,c,l,i]}class de extends J{constructor(e){super(),K(this,e,fe,ue,$,{url:0,alt:1,width:2,height:3,subtitulo:4,click:5,shadow:6})}}function he(t){let e,n,r,o,s,a,c,l,i,u,m,w;return o=new de({props:{shadow:!1,width:"100",height:"100",click:t[1],url:"https://upload.wikimedia.org/wikipedia/commons/9/90/Logo_de_la_UNAD.svg"}}),{c(){e=g("footer"),n=g("div"),r=g("div"),R(o.$$.fragment),s=W(`
            Andrés Felipe Estupiñán Peláez`),a=g("br"),c=W(`
            Universidad Nacional Abierta y a Distancia, `),l=W(t[0]),i=g("br"),u=j(),m=g("a"),m.textContent="Volver a GitHub",f(m,"href","https://https://github.com/afestupinanp/Ing-Telecomunicaciones-U3F4"),f(r,"class","col-12 text-center"),f(n,"class","row"),f(e,"class","footer")},m(b,k){A(b,e,k),h(e,n),h(n,r),T(o,r,null),h(r,s),h(r,a),h(r,c),h(r,l),h(r,i),h(r,u),h(r,m),w=!0},p:y,i(b){w||(O(o.$$.fragment,b),w=!0)},o(b){P(o.$$.fragment,b),w=!1},d(b){b&&L(e),D(o)}}}function me(t){return[new Date().getFullYear(),()=>window.open("https://www.unad.edu.co","_blank")]}class _e extends J{constructor(e){super(),K(this,e,me,he,$,{})}}function pe(t){let e,n,r,o,s,a,c,l;return e=new ae({}),s=new re({props:{routes:le}}),c=new _e({}),{c(){R(e.$$.fragment),n=j(),r=g("main"),o=g("div"),R(s.$$.fragment),a=j(),R(c.$$.fragment),pt(o,"padding-top","80px"),pt(o,"padding-bottom","80px"),f(r,"class","container-fluid")},m(i,u){T(e,i,u),A(i,n,u),A(i,r,u),h(r,o),T(s,o,null),h(r,a),T(c,r,null),l=!0},p:y,i(i){l||(O(e.$$.fragment,i),O(s.$$.fragment,i),O(c.$$.fragment,i),l=!0)},o(i){P(e.$$.fragment,i),P(s.$$.fragment,i),P(c.$$.fragment,i),l=!1},d(i){D(e,i),i&&L(n),i&&L(r),D(s),D(c)}}}class ge extends J{constructor(e){super(),K(this,e,null,pe,$,{})}}new ge({target:document.querySelector("#app")});export{de as I,J as S,f as a,A as b,R as c,L as d,g as e,h as f,P as g,D as h,K as i,j,be as k,W as l,T as m,y as n,Ee as o,Ut as p,ve as q,ye as r,$ as s,O as t,we as u,ft as v,dt as w,ke as x};