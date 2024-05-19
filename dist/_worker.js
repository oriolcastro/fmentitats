var De=Object.defineProperty;var Be=(e,s,a)=>s in e?De(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a;var g=(e,s,a)=>(Be(e,typeof s!="symbol"?s+"":s,a),a),ne=(e,s,a)=>{if(!s.has(e))throw TypeError("Cannot "+a)};var h=(e,s,a)=>(ne(e,s,"read from private field"),a?a.call(e):s.get(e)),R=(e,s,a)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,a)},f=(e,s,a,i)=>(ne(e,s,"write to private field"),i?i.call(e,a):s.set(e,a),a);var Le={Stringify:1,BeforeStream:2,Stream:3},ae=(e,s)=>{const a=new String(e);return a.isEscaped=!0,a.callbacks=s,a},Te=/[&<>'"]/,we=async e=>{let s="";const a=[];for(let i=e.length-1;s+=e[i],i--,!(i<0);i--){let r=await e[i];typeof r=="object"&&a.push(...r.callbacks||[]);const l=r.isEscaped;if(r=await(typeof r=="object"?r.toString():r),typeof r=="object"&&a.push(...r.callbacks||[]),r.isEscaped??l)s+=r;else{const c=[s];S(r,c),s=c[0]}}return ae(s,a)},S=(e,s)=>{const a=e.search(Te);if(a===-1){s[0]+=e;return}let i,r,l=0;for(r=a;r<e.length;r++){switch(e.charCodeAt(r)){case 34:i="&quot;";break;case 39:i="&#39;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}s[0]+=e.substring(l,r)+i,l=r+1}s[0]+=e.substring(l,r)},be=async(e,s,a,i,r)=>{const l=e.callbacks;return l!=null&&l.length?(r?r[0]+=e:r=[e],Promise.all(l.map(o=>o({phase:s,buffer:r,context:i}))).then(o=>Promise.all(o.filter(Boolean).map(n=>be(n,s,!1,i,r))).then(()=>r[0]))):Promise.resolve(e)},Q=(e,...s)=>{const a=[""];for(let i=0,r=e.length-1;i<r;i++){a[0]+=e[i];const l=s[i]instanceof Array?s[i].flat(1/0):[s[i]];for(let c=0,o=l.length;c<o;c++){const n=l[c];if(typeof n=="string")S(n,a);else if(typeof n=="number")a[0]+=n;else{if(typeof n=="boolean"||n===null||n===void 0)continue;if(typeof n=="object"&&n.isEscaped)if(n.callbacks)a.unshift("",n);else{const d=n.toString();d instanceof Promise?a.unshift("",d):a[0]+=d}else n instanceof Promise?a.unshift("",n):S(n.toString(),a)}}}return a[0]+=e[e.length-1],a.length===1?ae(a[0]):we(a)},He=e=>{e&&"className"in e&&(e.class=e.className,delete e.className)},$e=(e,s)=>{for(const[a,i]of Object.entries(e))s(a[0]==="-"?a:a.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`),i==null?null:typeof i=="number"?i+"px":i)},le=[],Ie=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],qe=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],ye=(e,s)=>{for(let a=0,i=e.length;a<i;a++){const r=e[a];if(typeof r=="string")S(r,s);else{if(typeof r=="boolean"||r===null||r===void 0)continue;r instanceof I?r.toStringToBuffer(s):typeof r=="number"||r.isEscaped?s[0]+=r:r instanceof Promise?s.unshift("",r):ye(r,s)}}},I=class{constructor(e,s,a){g(this,"tag");g(this,"props");g(this,"key");g(this,"children");g(this,"isEscaped",!0);g(this,"localContexts");this.tag=e,this.props=s,this.children=a}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){var s,a;const e=[""];(s=this.localContexts)==null||s.forEach(([i,r])=>{i.values.push(r)});try{this.toStringToBuffer(e)}finally{(a=this.localContexts)==null||a.forEach(([i])=>{i.values.pop()})}return e.length===1?e[0]:we(e)}toStringToBuffer(e){const s=this.tag,a=this.props;let{children:i}=this;e[0]+=`<${s}`;const r=Object.keys(a||{});for(let l=0,c=r.length;l<c;l++){const o=r[l],n=a[o];if(o!=="children"){if(o==="style"&&typeof n=="object"){let d="";$e(n,(p,u)=>{u!=null&&(d+=`${d?";":""}${p}:${u}`)}),e[0]+=' style="',S(d,e),e[0]+='"'}else if(typeof n=="string")e[0]+=` ${o}="`,S(n,e),e[0]+='"';else if(n!=null)if(typeof n=="number"||n.isEscaped)e[0]+=` ${o}="${n}"`;else if(typeof n=="boolean"&&qe.includes(o))n&&(e[0]+=` ${o}=""`);else if(o==="dangerouslySetInnerHTML"){if(i.length>0)throw"Can only set one of `children` or `props.dangerouslySetInnerHTML`.";i=[ae(n.__html)]}else if(n instanceof Promise)e[0]+=` ${o}="`,e.unshift('"',n);else if(typeof n=="function"){if(!o.startsWith("on"))throw`Invalid prop '${o}' of type 'function' supplied to '${s}'.`}else e[0]+=` ${o}="`,S(n.toString(),e),e[0]+='"'}}if(Ie.includes(s)&&i.length===0){e[0]+="/>";return}e[0]+=">",ye(i,e),e[0]+=`</${s}>`}},Ne=class extends I{toStringToBuffer(e){const{children:s}=this,a=this.tag.call(null,{...this.props,children:s.length<=1?s[0]:s});if(a instanceof Promise)if(le.length===0)e.unshift("",a);else{const i=le.map(r=>[r,r.values.at(-1)]);e.unshift("",a.then(r=>(r instanceof I&&(r.localContexts=i),r)))}else a instanceof I?a.toStringToBuffer(e):typeof a=="number"||a.isEscaped?e[0]+=a:S(a,e)}},Y=(e,s,a)=>typeof e=="function"?new Ne(e,s,a):(He(s),new I(e,s,a));function t(e,s,a){let i;if(!s||!("children"in s))i=Y(e,s,[]);else{const r=s.children;i=Array.isArray(r)?Y(e,s,r):Y(e,s,[r])}return i.key=a,i}var Ve="text/plain; charset=UTF-8",Z=(e,s={})=>(Object.entries(s).forEach(([a,i])=>e.set(a,i)),e),A,P,w,y,E,C,ue,K=(ue=class{constructor(e,s){g(this,"req");g(this,"env",{});g(this,"_var",{});g(this,"finalized",!1);g(this,"error");R(this,A,200);R(this,P,void 0);R(this,w,void 0);R(this,y,void 0);R(this,E,void 0);R(this,C,!0);g(this,"layout");g(this,"renderer",e=>this.html(e));g(this,"notFoundHandler",()=>new Response);g(this,"render",(...e)=>this.renderer(...e));g(this,"setLayout",e=>this.layout=e);g(this,"getLayout",()=>this.layout);g(this,"setRenderer",e=>{this.renderer=e});g(this,"header",(e,s,a)=>{if(s===void 0){h(this,w)?h(this,w).delete(e):h(this,y)&&delete h(this,y)[e.toLocaleLowerCase()],this.finalized&&this.res.headers.delete(e);return}a!=null&&a.append?(h(this,w)||(f(this,C,!1),f(this,w,new Headers(h(this,y))),f(this,y,{})),h(this,w).append(e,s)):h(this,w)?h(this,w).set(e,s):(h(this,y)??f(this,y,{}),h(this,y)[e.toLowerCase()]=s),this.finalized&&(a!=null&&a.append?this.res.headers.append(e,s):this.res.headers.set(e,s))});g(this,"status",e=>{f(this,C,!1),f(this,A,e)});g(this,"set",(e,s)=>{this._var??(this._var={}),this._var[e]=s});g(this,"get",e=>this._var?this._var[e]:void 0);g(this,"newResponse",(e,s,a)=>{if(h(this,C)&&!a&&!s&&h(this,A)===200)return new Response(e,{headers:h(this,y)});if(s&&typeof s!="number"){const r=new Headers(s.headers);h(this,w)&&h(this,w).forEach((c,o)=>{r.set(o,c)});const l=Z(r,h(this,y));return new Response(e,{headers:l,status:s.status??h(this,A)})}const i=typeof s=="number"?s:h(this,A);h(this,y)??f(this,y,{}),h(this,w)??f(this,w,new Headers),Z(h(this,w),h(this,y)),h(this,E)&&(h(this,E).headers.forEach((r,l)=>{var c,o;l==="set-cookie"?(c=h(this,w))==null||c.append(l,r):(o=h(this,w))==null||o.set(l,r)}),Z(h(this,w),h(this,y))),a??(a={});for(const[r,l]of Object.entries(a))if(typeof l=="string")h(this,w).set(r,l);else{h(this,w).delete(r);for(const c of l)h(this,w).append(r,c)}return new Response(e,{status:i,headers:h(this,w)})});g(this,"body",(e,s,a)=>typeof s=="number"?this.newResponse(e,s,a):this.newResponse(e,s));g(this,"text",(e,s,a)=>{if(!h(this,y)){if(h(this,C)&&!a&&!s)return new Response(e);f(this,y,{})}return h(this,y)["content-type"]=Ve,typeof s=="number"?this.newResponse(e,s,a):this.newResponse(e,s)});g(this,"json",(e,s,a)=>{const i=JSON.stringify(e);return h(this,y)??f(this,y,{}),h(this,y)["content-type"]="application/json; charset=UTF-8",typeof s=="number"?this.newResponse(i,s,a):this.newResponse(i,s)});g(this,"html",(e,s,a)=>(h(this,y)??f(this,y,{}),h(this,y)["content-type"]="text/html; charset=UTF-8",typeof e=="object"&&(e instanceof Promise||(e=e.toString()),e instanceof Promise)?e.then(i=>be(i,Le.Stringify,!1,{})).then(i=>typeof s=="number"?this.newResponse(i,s,a):this.newResponse(i,s)):typeof s=="number"?this.newResponse(e,s,a):this.newResponse(e,s)));g(this,"redirect",(e,s=302)=>(h(this,w)??f(this,w,new Headers),h(this,w).set("Location",e),this.newResponse(null,s)));g(this,"notFound",()=>this.notFoundHandler(this));this.req=e,s&&(f(this,P,s.executionCtx),this.env=s.env,s.notFoundHandler&&(this.notFoundHandler=s.notFoundHandler))}get event(){if(h(this,P)&&"respondWith"in h(this,P))return h(this,P);throw Error("This context has no FetchEvent")}get executionCtx(){if(h(this,P))return h(this,P);throw Error("This context has no ExecutionContext")}get res(){return f(this,C,!1),h(this,E)||f(this,E,new Response("404 Not Found",{status:404}))}set res(e){if(f(this,C,!1),h(this,E)&&e){h(this,E).headers.delete("content-type");for(const[s,a]of h(this,E).headers.entries())if(s==="set-cookie"){const i=h(this,E).headers.getSetCookie();e.headers.delete("set-cookie");for(const r of i)e.headers.append("set-cookie",r)}else e.headers.set(s,a)}f(this,E,e),this.finalized=!0}get var(){return{...this._var}}},A=new WeakMap,P=new WeakMap,w=new WeakMap,y=new WeakMap,E=new WeakMap,C=new WeakMap,ue),oe=(e,s,a)=>(i,r)=>{let l=-1;return c(0);async function c(o){if(o<=l)throw new Error("next() called multiple times");l=o;let n,d=!1,p;if(e[o]?(p=e[o][0][0],i instanceof K&&(i.req.routeIndex=o)):p=o===e.length&&r||void 0,!p)i instanceof K&&i.finalized===!1&&a&&(n=await a(i));else try{n=await p(i,()=>c(o+1))}catch(u){if(u instanceof Error&&i instanceof K&&s)i.error=u,n=await s(u,i),d=!0;else throw u}return n&&(i.finalized===!1||d)&&(i.res=n),i}},Ge=class extends Error{constructor(s=500,a){super(a==null?void 0:a.message,{cause:a==null?void 0:a.cause});g(this,"res");g(this,"status");this.res=a==null?void 0:a.res,this.status=s}getResponse(){return this.res?this.res:new Response(this.message,{status:this.status})}},Ue=async(e,s={all:!1})=>{const i=(e instanceof Ee?e.raw.headers:e.headers).get("Content-Type");return i!==null&&i.startsWith("multipart/form-data")||i!==null&&i.startsWith("application/x-www-form-urlencoded")?Ke(e,s):{}};async function Ke(e,s){const a=await e.formData();return a?Je(a,s):{}}function Je(e,s){const a={};return e.forEach((i,r)=>{s.all||r.endsWith("[]")?We(a,r,i):a[r]=i}),a}var We=(e,s,a)=>{const i=e[s];i&&Array.isArray(i)?e[s].push(a):i?e[s]=[i,a]:e[s]=a},xe=e=>{const s=e.split("/");return s[0]===""&&s.shift(),s},Qe=e=>{const{groups:s,path:a}=Xe(e),i=xe(a);return Ye(i,s)},Xe=e=>{const s=[];return e=e.replace(/\{[^}]+\}/g,(a,i)=>{const r=`@${i}`;return s.push([r,a]),r}),{groups:s,path:e}},Ye=(e,s)=>{for(let a=s.length-1;a>=0;a--){const[i]=s[a];for(let r=e.length-1;r>=0;r--)if(e[r].includes(i)){e[r]=e[r].replace(i,s[a][1]);break}}return e},U={},ce=e=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);return s?(U[e]||(s[2]?U[e]=[e,s[1],new RegExp("^"+s[2]+"$")]:U[e]=[e,s[1],!0]),U[e]):null},ve=e=>{const s=e.url,a=s.indexOf("?",8);return s.slice(s.indexOf("/",8),a===-1?void 0:a)},Ze=e=>{const s=e.indexOf("?",8);return s===-1?"":"?"+e.slice(s+1)},et=e=>{const s=ve(e);return s.length>1&&s[s.length-1]==="/"?s.slice(0,-1):s},H=(...e)=>{let s="",a=!1;for(let i of e)s[s.length-1]==="/"&&(s=s.slice(0,-1),a=!0),i[0]!=="/"&&(i=`/${i}`),i==="/"&&a?s=`${s}/`:i!=="/"&&(s=`${s}${i}`),i==="/"&&s===""&&(s="/");return s},_e=e=>{if(!e.match(/\:.+\?$/))return null;const s=e.split("/"),a=[];let i="";return s.forEach(r=>{if(r!==""&&!/\:/.test(r))i+="/"+r;else if(/\:/.test(r))if(/\?/.test(r)){a.length===0&&i===""?a.push("/"):a.push(i);const l=r.replace("?","");i+="/"+l,a.push(i)}else i+="/"+r}),a.filter((r,l,c)=>c.indexOf(r)===l)},ee=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),/%/.test(e)?te(e):e):e,je=(e,s,a)=>{let i;if(!a&&s&&!/[%+]/.test(s)){let c=e.indexOf(`?${s}`,8);for(c===-1&&(c=e.indexOf(`&${s}`,8));c!==-1;){const o=e.charCodeAt(c+s.length+1);if(o===61){const n=c+s.length+2,d=e.indexOf("&",n);return ee(e.slice(n,d===-1?void 0:d))}else if(o==38||isNaN(o))return"";c=e.indexOf(`&${s}`,c+1)}if(i=/[%+]/.test(e),!i)return}const r={};i??(i=/[%+]/.test(e));let l=e.indexOf("?",8);for(;l!==-1;){const c=e.indexOf("&",l+1);let o=e.indexOf("=",l);o>c&&c!==-1&&(o=-1);let n=e.slice(l+1,o===-1?c===-1?void 0:c:o);if(i&&(n=ee(n)),l=c,n==="")continue;let d;o===-1?d="":(d=e.slice(o+1,c===-1?void 0:c),i&&(d=ee(d))),a?(r[n]&&Array.isArray(r[n])||(r[n]=[]),r[n].push(d)):r[n]??(r[n]=d)}return s?r[s]:r},tt=je,st=(e,s)=>je(e,s,!0),te=decodeURIComponent,L,z,me,Ee=(me=class{constructor(e,s="/",a=[[]]){g(this,"raw");R(this,L,void 0);R(this,z,void 0);g(this,"routeIndex",0);g(this,"path");g(this,"bodyCache",{});g(this,"cachedBody",e=>{const{bodyCache:s,raw:a}=this,i=s[e];if(i)return i;if(!s[e]){for(const r of Object.keys(s))if(r!=="parsedBody")return(async()=>{let l=await s[r];return r==="json"&&(l=JSON.stringify(l)),await new Response(l)[e]()})()}return s[e]=a[e]()});this.raw=e,this.path=s,f(this,z,a),f(this,L,{})}param(e){return e?this.getDecodedParam(e):this.getAllDecodedParams()}getDecodedParam(e){const s=h(this,z)[0][this.routeIndex][1][e],a=this.getParamValue(s);return a?/\%/.test(a)?te(a):a:void 0}getAllDecodedParams(){const e={},s=Object.keys(h(this,z)[0][this.routeIndex][1]);for(const a of s){const i=this.getParamValue(h(this,z)[0][this.routeIndex][1][a]);i&&typeof i=="string"&&(e[a]=/\%/.test(i)?te(i):i)}return e}getParamValue(e){return h(this,z)[1]?h(this,z)[1][e]:e}query(e){return tt(this.url,e)}queries(e){return st(this.url,e)}header(e){if(e)return this.raw.headers.get(e.toLowerCase())??void 0;const s={};return this.raw.headers.forEach((a,i)=>{s[i]=a}),s}async parseBody(e){if(this.bodyCache.parsedBody)return this.bodyCache.parsedBody;const s=await Ue(this,e);return this.bodyCache.parsedBody=s,s}json(){return this.cachedBody("json")}text(){return this.cachedBody("text")}arrayBuffer(){return this.cachedBody("arrayBuffer")}blob(){return this.cachedBody("blob")}formData(){return this.cachedBody("formData")}addValidatedData(e,s){h(this,L)[e]=s}valid(e){return h(this,L)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get matchedRoutes(){return h(this,z)[0].map(([[,e]])=>e)}get routePath(){return h(this,z)[0].map(([[,e]])=>e)[this.routeIndex].path}},L=new WeakMap,z=new WeakMap,me),x="ALL",at="all",it=["get","post","put","delete","options","patch"],ze="Can not add a route since the matcher is already built.",ke=class extends Error{},rt=Symbol("composedHandler");function nt(){return class{}}var lt=e=>e.text("404 Not Found",404),pe=(e,s)=>e instanceof Ge?e.getResponse():(console.error(e),s.text("Internal Server Error",500)),k,fe,Oe=(fe=class extends nt(){constructor(a={}){super();g(this,"router");g(this,"getPath");g(this,"_basePath","/");R(this,k,"/");g(this,"routes",[]);g(this,"notFoundHandler",lt);g(this,"errorHandler",pe);g(this,"onError",a=>(this.errorHandler=a,this));g(this,"notFound",a=>(this.notFoundHandler=a,this));g(this,"fetch",(a,...i)=>this.dispatch(a,i[1],i[0],a.method));g(this,"request",(a,i,r,l)=>{if(a instanceof Request)return i!==void 0&&(a=new Request(a,i)),this.fetch(a,r,l);a=a.toString();const c=/^https?:\/\//.test(a)?a:`http://localhost${H("/",a)}`,o=new Request(c,i);return this.fetch(o,r,l)});g(this,"fire",()=>{addEventListener("fetch",a=>{a.respondWith(this.dispatch(a.request,a,void 0,a.request.method))})});[...it,at].forEach(l=>{this[l]=(c,...o)=>(typeof c=="string"?f(this,k,c):this.addRoute(l,h(this,k),c),o.forEach(n=>{typeof n!="string"&&this.addRoute(l,h(this,k),n)}),this)}),this.on=(l,c,...o)=>{if(!l)return this;for(const n of[c].flat()){f(this,k,n);for(const d of[l].flat())o.map(p=>{this.addRoute(d.toUpperCase(),h(this,k),p)})}return this},this.use=(l,...c)=>(typeof l=="string"?f(this,k,l):(f(this,k,"*"),c.unshift(l)),c.forEach(o=>{this.addRoute(x,h(this,k),o)}),this);const r=a.strict??!0;delete a.strict,Object.assign(this,a),this.getPath=r?a.getPath??ve:et}clone(){const a=new Oe({router:this.router,getPath:this.getPath});return a.routes=this.routes,a}route(a,i){const r=this.basePath(a);return i?(i.routes.map(l=>{let c;i.errorHandler===pe?c=l.handler:(c=async(o,n)=>(await oe([],i.errorHandler)(o,()=>l.handler(o,n))).res,c[rt]=l.handler),r.addRoute(l.method,l.path,c)}),this):r}basePath(a){const i=this.clone();return i._basePath=H(this._basePath,a),i}mount(a,i,r){const l=H(this._basePath,a),c=l==="/"?0:l.length,o=async(n,d)=>{let p;try{p=n.executionCtx}catch{}const u=r?r(n):[n.env,p],b=Array.isArray(u)?u:[u],_=Ze(n.req.url),m=await i(new Request(new URL((n.req.path.slice(c)||"/")+_,n.req.url),n.req.raw),...b);if(m)return m;await d()};return this.addRoute(x,H(a,"*"),o),this}addRoute(a,i,r){a=a.toUpperCase(),i=H(this._basePath,i);const l={path:i,method:a,handler:r};this.router.add(a,i,[r,l]),this.routes.push(l)}matchRoute(a,i){return this.router.match(a,i)}handleError(a,i){if(a instanceof Error)return this.errorHandler(a,i);throw a}dispatch(a,i,r,l){if(l==="HEAD")return(async()=>new Response(null,await this.dispatch(a,i,r,"GET")))();const c=this.getPath(a,{env:r}),o=this.matchRoute(l,c),n=new K(new Ee(a,c,o),{env:r,executionCtx:i,notFoundHandler:this.notFoundHandler});if(o[0].length===1){let p;try{p=o[0][0][0][0](n,async()=>{n.res=await this.notFoundHandler(n)})}catch(u){return this.handleError(u,n)}return p instanceof Promise?p.then(u=>u||(n.finalized?n.res:this.notFoundHandler(n))).catch(u=>this.handleError(u,n)):p}const d=oe(o[0],this.errorHandler,this.notFoundHandler);return(async()=>{try{const p=await d(n);if(!p.finalized)throw new Error("Context is not finalized. You may forget returning Response object or `await next()`");return p.res}catch(p){return this.handleError(p,n)}})()}},k=new WeakMap,fe),W="[^/]+",q=".*",N="(?:|/.*)",$=Symbol(),ot=new Set(".\\+*[^]$()");function ct(e,s){return e.length===1?s.length===1?e<s?-1:1:-1:s.length===1||e===q||e===N?1:s===q||s===N?-1:e===W?1:s===W?-1:e.length===s.length?e<s?-1:1:s.length-e.length}var se=class{constructor(){g(this,"index");g(this,"varIndex");g(this,"children",Object.create(null))}insert(s,a,i,r,l){if(s.length===0){if(this.index!==void 0)throw $;if(l)return;this.index=a;return}const[c,...o]=s,n=c==="*"?o.length===0?["","",q]:["","",W]:c==="/*"?["","",N]:c.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(n){const p=n[1];let u=n[2]||W;if(p&&n[2]&&(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u)))throw $;if(d=this.children[u],!d){if(Object.keys(this.children).some(b=>b!==q&&b!==N))throw $;if(l)return;d=this.children[u]=new se,p!==""&&(d.varIndex=r.varIndex++)}!l&&p!==""&&i.push([p,d.varIndex])}else if(d=this.children[c],!d){if(Object.keys(this.children).some(p=>p.length>1&&p!==q&&p!==N))throw $;if(l)return;d=this.children[c]=new se}d.insert(o,a,i,r,l)}buildRegExpStr(){const a=Object.keys(this.children).sort(ct).map(i=>{const r=this.children[i];return(typeof r.varIndex=="number"?`(${i})@${r.varIndex}`:ot.has(i)?`\\${i}`:i)+r.buildRegExpStr()});return typeof this.index=="number"&&a.unshift(`#${this.index}`),a.length===0?"":a.length===1?a[0]:"(?:"+a.join("|")+")"}},pt=class{constructor(){g(this,"context",{varIndex:0});g(this,"root",new se)}insert(e,s,a){const i=[],r=[];for(let c=0;;){let o=!1;if(e=e.replace(/\{[^}]+\}/g,n=>{const d=`@\\${c}`;return r[c]=[d,n],c++,o=!0,d}),!o)break}const l=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let c=r.length-1;c>=0;c--){const[o]=r[c];for(let n=l.length-1;n>=0;n--)if(l[n].indexOf(o)!==-1){l[n]=l[n].replace(o,r[c][1]);break}}return this.root.insert(l,s,i,this.context,a),i}buildRegExp(){let e=this.root.buildRegExpStr();if(e==="")return[/^$/,[],[]];let s=0;const a=[],i=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(r,l,c)=>typeof l<"u"?(a[++s]=Number(l),"$()"):(typeof c<"u"&&(i[Number(c)]=++s),"")),[new RegExp(`^${e}`),a,i]}},Re=[],dt=[/^$/,[],Object.create(null)],J=Object.create(null);function Fe(e){return J[e]??(J[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(s,a)=>a?`\\${a}`:"(?:|/.*)")}$`))}function gt(){J=Object.create(null)}function ht(e){var d;const s=new pt,a=[];if(e.length===0)return dt;const i=e.map(p=>[!/\*|\/:/.test(p[0]),...p]).sort(([p,u],[b,_])=>p?1:b?-1:u.length-_.length),r=Object.create(null);for(let p=0,u=-1,b=i.length;p<b;p++){const[_,m,v]=i[p];_?r[m]=[v.map(([O])=>[O,Object.create(null)]),Re]:u++;let j;try{j=s.insert(m,u,_)}catch(O){throw O===$?new ke(m):O}_||(a[u]=v.map(([O,M])=>{const F=Object.create(null);for(M-=1;M>=0;M--){const[V,G]=j[M];F[V]=G}return[O,F]}))}const[l,c,o]=s.buildRegExp();for(let p=0,u=a.length;p<u;p++)for(let b=0,_=a[p].length;b<_;b++){const m=(d=a[p][b])==null?void 0:d[1];if(!m)continue;const v=Object.keys(m);for(let j=0,O=v.length;j<O;j++)m[v[j]]=o[m[v[j]]]}const n=[];for(const p in c)n[p]=a[c[p]];return[l,n,r]}function B(e,s){if(e){for(const a of Object.keys(e).sort((i,r)=>r.length-i.length))if(Fe(a).test(s))return[...e[a]]}}var ut=class{constructor(){g(this,"name","RegExpRouter");g(this,"middleware");g(this,"routes");this.middleware={[x]:Object.create(null)},this.routes={[x]:Object.create(null)}}add(e,s,a){var o;const{middleware:i,routes:r}=this;if(!i||!r)throw new Error(ze);i[e]||[i,r].forEach(n=>{n[e]=Object.create(null),Object.keys(n[x]).forEach(d=>{n[e][d]=[...n[x][d]]})}),s==="/*"&&(s="*");const l=(s.match(/\/:/g)||[]).length;if(/\*$/.test(s)){const n=Fe(s);e===x?Object.keys(i).forEach(d=>{var p;(p=i[d])[s]||(p[s]=B(i[d],s)||B(i[x],s)||[])}):(o=i[e])[s]||(o[s]=B(i[e],s)||B(i[x],s)||[]),Object.keys(i).forEach(d=>{(e===x||e===d)&&Object.keys(i[d]).forEach(p=>{n.test(p)&&i[d][p].push([a,l])})}),Object.keys(r).forEach(d=>{(e===x||e===d)&&Object.keys(r[d]).forEach(p=>n.test(p)&&r[d][p].push([a,l]))});return}const c=_e(s)||[s];for(let n=0,d=c.length;n<d;n++){const p=c[n];Object.keys(r).forEach(u=>{var b;(e===x||e===u)&&((b=r[u])[p]||(b[p]=[...B(i[u],p)||B(i[x],p)||[]]),r[u][p].push([a,l-d+n+1]))})}}match(e,s){gt();const a=this.buildAllMatchers();return this.match=(i,r)=>{const l=a[i]||a[x],c=l[2][r];if(c)return c;const o=r.match(l[0]);if(!o)return[[],Re];const n=o.indexOf("",1);return[l[1][n],o]},this.match(e,s)}buildAllMatchers(){const e=Object.create(null);return[...Object.keys(this.routes),...Object.keys(this.middleware)].forEach(s=>{e[s]||(e[s]=this.buildMatcher(s))}),this.middleware=this.routes=void 0,e}buildMatcher(e){const s=[];let a=e===x;return[this.middleware,this.routes].forEach(i=>{const r=i[e]?Object.keys(i[e]).map(l=>[l,i[e][l]]):[];r.length!==0?(a||(a=!0),s.push(...r)):e!==x&&s.push(...Object.keys(i[x]).map(l=>[l,i[x][l]]))}),a?ht(s):null}},mt=class{constructor(e){g(this,"name","SmartRouter");g(this,"routers",[]);g(this,"routes",[]);Object.assign(this,e)}add(e,s,a){if(!this.routes)throw new Error(ze);this.routes.push([e,s,a])}match(e,s){if(!this.routes)throw new Error("Fatal error");const{routers:a,routes:i}=this,r=a.length;let l=0,c;for(;l<r;l++){const o=a[l];try{i.forEach(n=>{o.add(...n)}),c=o.match(e,s)}catch(n){if(n instanceof ke)continue;throw n}this.match=o.match.bind(o),this.routers=[o],this.routes=void 0;break}if(l===r)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,c}get activeRouter(){if(this.routes||this.routers.length!==1)throw new Error("No active router has been determined yet.");return this.routers[0]}},Pe=class{constructor(e,s,a){g(this,"methods");g(this,"children");g(this,"patterns");g(this,"order",0);g(this,"name");g(this,"params",Object.create(null));if(this.children=a||Object.create(null),this.methods=[],this.name="",e&&s){const i=Object.create(null);i[e]={handler:s,possibleKeys:[],score:0,name:this.name},this.methods=[i]}this.patterns=[]}insert(e,s,a){this.name=`${e} ${s}`,this.order=++this.order;let i=this;const r=Qe(s),l=[];for(let n=0,d=r.length;n<d;n++){const p=r[n];if(Object.keys(i.children).includes(p)){i=i.children[p];const b=ce(p);b&&l.push(b[1]);continue}i.children[p]=new Pe;const u=ce(p);u&&(i.patterns.push(u),l.push(u[1])),i=i.children[p]}i.methods.length||(i.methods=[]);const c=Object.create(null),o={handler:a,possibleKeys:l.filter((n,d,p)=>p.indexOf(n)===d),name:this.name,score:this.order};return c[e]=o,i.methods.push(c),i}gHSets(e,s,a,i){const r=[];for(let l=0,c=e.methods.length;l<c;l++){const o=e.methods[l],n=o[s]||o[x],d=Object.create(null);n!==void 0&&(n.params=Object.create(null),n.possibleKeys.forEach(p=>{const u=d[n.name];n.params[p]=i[p]&&!u?i[p]:a[p]??i[p],d[n.name]=!0}),r.push(n))}return r}search(e,s){const a=[];this.params=Object.create(null);let r=[this];const l=xe(s);for(let o=0,n=l.length;o<n;o++){const d=l[o],p=o===n-1,u=[];for(let b=0,_=r.length;b<_;b++){const m=r[b],v=m.children[d];v&&(v.params=m.params,p===!0?(v.children["*"]&&a.push(...this.gHSets(v.children["*"],e,m.params,Object.create(null))),a.push(...this.gHSets(v,e,m.params,Object.create(null)))):u.push(v));for(let j=0,O=m.patterns.length;j<O;j++){const M=m.patterns[j],F={...m.params};if(M==="*"){const X=m.children["*"];X&&(a.push(...this.gHSets(X,e,m.params,Object.create(null))),u.push(X));continue}if(d==="")continue;const[V,G,T]=M,D=m.children[V],re=l.slice(o).join("/");if(T instanceof RegExp&&T.test(re)){F[G]=re,a.push(...this.gHSets(D,e,m.params,F));continue}(T===!0||T instanceof RegExp&&T.test(d))&&typeof V=="string"&&(F[G]=d,p===!0?(a.push(...this.gHSets(D,e,F,m.params)),D.children["*"]&&a.push(...this.gHSets(D.children["*"],e,F,m.params))):(D.params=F,u.push(D)))}}r=u}return[a.sort((o,n)=>o.score-n.score).map(({handler:o,params:n})=>[o,n])]}},ft=class{constructor(){g(this,"name","TrieRouter");g(this,"node");this.node=new Pe}add(e,s,a){const i=_e(s);if(i){for(const r of i)this.node.insert(e,r,a);return}this.node.insert(e,s,a)}match(e,s){return this.node.search(e,s)}},Ce=class extends Oe{constructor(e={}){super(e),this.router=e.router??new mt({routers:[new ut,new ft]})}};const wt=()=>t("section",{id:"programa",class:"m-auto my-10 max-w-5xl px-4",style:"scroll-margin-top: 84px",children:[t("h2",{class:"my-2 text-center font-heading text-3xl uppercase",children:"Programa d'actes"}),t("p",{class:"my-4 text-center text-xl italic",children:"Això és tot el que us hem preparat per a aquesta FME."}),t("div",{class:"mb-10 grid grid-cols-1 gap-4 lg:grid-cols-2",children:[t("div",{class:"flex flex-col items-center justify-center",children:[t("div",{class:"mt-4 bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white",children:"Dimarts 30 de juliol"}),t("div",{class:"mt-4 bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white",children:"Dimecres 31 de juliol"}),t("div",{class:"mt-4 bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white",children:"Dijous 1 d'agost"}),t("div",{class:"mt-4 bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white",children:"Divendres 2 d'agost"})]}),t("div",{class:"flex flex-col items-center",children:[t("div",{class:"mt-4 bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white",children:"Dissabte 3 d'agost"}),t("div",{class:"mt-4 bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white",children:"Diumenge 4 d'agost"}),t("div",{class:"mt-4 bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white",children:"Dilluns 5 d'agost"})]})]}),t("div",{class:"mb-6 flex flex-row flex-wrap justify-center gap-4 lg:flex-nowrap",children:[t("div",{class:"flex-1",children:[t("h3",{class:"my-2 font-heading text-xl",children:"La música de la FME"}),t("p",{class:"prose mb-4 text-justify",children:"Teniu una llista de reproducció amb els èxits de tots els artistes que actuaran a la Festa Major d'Entitats d'aquest any."}),t("a",{href:"",target:"_blank",rel:"noopener",class:"mx-auto mb-8 flex w-[fit-content] flex-row items-center rounded-md bg-fme-green px-4 py-3 text-white",children:[t("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",class:"mr-2 fill-current text-white","fill-rule":"evenodd","clip-rule":"evenodd",children:t("path",{d:"M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"})}),"Llista FME 2024"]}),t("div",{class:"grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6"})]}),t("picture",{children:[t("source",{srcset:"images/cartell2024.avif",type:"image/avif"}),t("source",{srcset:"images/cartell2024.webp",type:"image/webp"}),t("img",{src:"images/cartell2024.jpg",loading:"lazy",alt:"Cartell dels concerts de l'edició 2024",width:"420",height:"525"})]})]})]}),bt=()=>t("section",{id:"collaboradors",class:"prose m-auto my-10 max-w-5xl px-4",style:"scroll-margin-top: 84px",children:[t("h2",{class:"my-2 text-center font-heading text-3xl uppercase",children:"Col·laboradors"}),t("p",{class:"mb-4 text-justify",children:"La Festa Major d'Entitats no seria possible sense el suport dels establiments i empreses locals que col·laboren amb el projecte."}),t("div",{class:"grid grid-cols-2 items-center justify-items-center gap-2 md:grid-cols-4",children:[t("picture",{children:[t("source",{srcset:"/static/images/esponsors/aperitius_tafaner.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/aperitius_tafaner.png",loading:"lazy",alt:"Aperitius Tafaner",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/estrella_galicia.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/estrella_galicia.png",loading:"lazy",alt:"Estrella Galicia",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/dvp.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/dvp.png",loading:"lazy",alt:"Distribucio i vending Penedes",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/gin_mg.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/gin_mg.png",loading:"lazy",alt:"Gin MG",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/aican.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/aican.jpg",loading:"lazy",alt:"Aican",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/paradistes_mercatt.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/paradistes_mercatt.jpg",loading:"lazy",alt:"Associacio Paradistes del Mercat",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/arcon_de_alba.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/arcon_de_alba.jpg",loading:"lazy",alt:"Arcon de Alba",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/bacallaneria_toni.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/bacallaneria_toni.png",loading:"lazy",alt:"Bacallaneria Toni",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/bar_del_mercat.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/bar_del_mercat.jpg",loading:"lazy",alt:"Bar del Mercat",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/cal_trajo.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/cal_trajo.png",loading:"lazy",alt:"Cal Trajo",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/can_batadet.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/can_batadet.png",loading:"lazy",alt:"Can Batadet",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/carpeta_moderna.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/carpeta_moderna.jpg",loading:"lazy",alt:"Carpeta Moderna",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/congelats_cadi.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/congelats_cadi.jpeg",loading:"lazy",alt:"Congelats Cadi",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/ferreteria_daumar.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/ferreteria_daumar.png",loading:"lazy",alt:"Ferreteria Daumar",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/fisio_lab.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/fisio_lab.png",loading:"lazy",alt:"Fisio Lab",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/freilka.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/freilka.png",loading:"lazy",alt:"Freilka",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/gelats_llorens.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/gelats_llorens.jpeg",loading:"lazy",alt:"Gelats Llorens",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/la_cava.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/la_cava.png",loading:"lazy",alt:"La Cava",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/lotus.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/lotus.png",loading:"lazy",alt:"Lotus",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/marta_carnisseria.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/marta_carnisseria.jpg",loading:"lazy",alt:"Marta Carnisseria",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/mon_petito.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/mon_petito.jpg",loading:"lazy",alt:"Mon Petito",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/padisgraf.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/padisgraf.png",loading:"lazy",alt:"Padisgraf",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/peixosdolors.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/peixosdolors.jpg",loading:"lazy",alt:"Peixos Dolors",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/solfico.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/solfico.png",loading:"lazy",alt:"Solfico",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/temps_de_recovery.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/temps_de_recovery.png",loading:"lazy",alt:"Temps de Recovery",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/el_rostit.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/el_rostit.png",loading:"lazy",alt:"El Rostit",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/ganiveteria_rodriguez.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/ganiveteria_rodriguez.png",loading:"lazy",alt:"Ganiveteria Rodriguez",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/bar_italia.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/bar_italia.png",loading:"lazy",alt:"Bar Italia",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/camanes.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/camanes.jpg",loading:"lazy",alt:"Camañes",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/el_celler.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/el_celler.png",loading:"lazy",alt:"El Celler ",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/la_gralla.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/la_gralla.png",loading:"lazy",alt:"La Gralla",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/la_lluna.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/la_lluna.png",loading:"lazy",alt:"La Lluna",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/la_tasca.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/la_tasca.png",loading:"lazy",alt:"La Tasca ",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/esponsors/supermercats_jr.webp",type:"image/webp"}),t("img",{src:"/static/images/esponsors/supermercats_jr.png",loading:"lazy",alt:"Supermercats JR ",width:"200",height:"200"})]})]})]});var de=Object.freeze,yt=Object.defineProperty,xt=(e,s)=>de(yt(e,"raw",{value:de(e.slice())})),ge;const Se=e=>Q(ge||(ge=xt([`<!doctype html>
    <html lang="ca">
      <head>
        <link href="/static/styles.css" rel="stylesheet" />
        <style>
          @font-face {
            font-family: Buchery;
            src:
              url('/static/fonts/Buchery.woff2') format('woff2'),
              url('/static/fonts/Buchery.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: Jost;
            src:
              url('/static/fonts/Jost.woff2') format('woff2'),
              url('/static/fonts/Jost.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: Artega;
            src:
              url('/static/fonts/Artega.woff2') format('woff2'),
              url('/static/fonts/Artega.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
        </style>
        <title>`,`</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Descobreix tota la programació de l'edició 2024" />
        <meta itemprop="name" content="`,`" />
        <meta itemprop="description" content="Descobreix tota la programació de l'edició 2024" />
        <!-- TODO: update social images -->
        <meta itemprop="image" content="/static/images/social_facebook.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/images/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
        <!-- TODO: update social images -->
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta property="og:title" content="`,`" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fme.cat" />
        <meta property="og:description" content="Descobreix tota la programació de l'edició 2024" />
        <!-- TODO: update social images -->
        <meta property="og:image" content="/static/images/social_facebook.webp" itemprop="image" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1692" />
        <meta property="og:image:alt" content="Cartell de la Festa Major d'Entitats 2024" />
        <meta property="og:locale" content="ca" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fme.cat/" />
        <meta property="twitter:title" content="`,`" />
        <meta property="twitter:description" content="Descobreix tota la programació de l'edició 2024" />
        <meta name="twitter:site" content="@fmentitats" />
        <meta name="twitter:creator" content="@fmentitats" />
        <!-- TODO: update social images -->
        <meta name="twitter:image" content="/static/images/social_twitter.webp" />
        <style>
          .dropdown:hover .dropdown-content {
            display: block;
          }
          .dropdown:hover .dropdown-trigger {
            background-color: hsl(2 63 55 / 100);
          }
        </style>
        <script>
          !(function (t, e) {
            var o, n, p, r
            e.__SV ||
              ((window.posthog = e),
              (e._i = []),
              (e.init = function (i, s, a) {
                function g(t, e) {
                  var o = e.split('.')
                  2 == o.length && ((t = t[o[0]]), (e = o[1])),
                    (t[e] = function () {
                      t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                    })
                }
                ;((p = t.createElement('script')).type = 'text/javascript'),
                  (p.async = !0),
                  (p.src = s.api_host.replace('.i.posthog.com', '-assets.i.posthog.com') + '/static/array.js'),
                  (r = t.getElementsByTagName('script')[0]).parentNode.insertBefore(p, r)
                var u = e
                for (
                  void 0 !== a ? (u = e[a] = []) : (a = 'posthog'),
                    u.people = u.people || [],
                    u.toString = function (t) {
                      var e = 'posthog'
                      return 'posthog' !== a && (e += '.' + a), t || (e += ' (stub)'), e
                    },
                    u.people.toString = function () {
                      return u.toString(1) + '.people (stub)'
                    },
                    o =
                      'capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId'.split(
                        ' ',
                      ),
                    n = 0;
                  n < o.length;
                  n++
                )
                  g(u, o[n])
                e._i.push([i, s, a])
              }),
              (e.__SV = 1))
          })(document, window.posthog || [])
          posthog.init('phc_Eb5TtlXxGYT5nesa65yyFhJ5GGrtWLGa1wDJRpzYrPx', { api_host: 'https://eu.i.posthog.com' })
        <\/script>
      </head>
      <body>
        <header
          class="sticky top-0 z-100 flex w-full flex-wrap items-center bg-fme-black px-6 py-2 shadow-md lg:px-16 lg:py-0"
        >
          <div class="flex flex-1 items-center justify-between py-2">
            <a href="/">
              <picture>
                <source srcset="/static/images/logo-fme.avif" type="image/avif" />
                <source srcset="/static/images/logo-fme.webp" type="image/webp" />
                <img
                  src="/static/images/logo-fme.png"
                  alt="Logo Festa Major d'Entitats"
                  loading="eager"
                  width="102"
                  height="40"
                />
              </picture>
            </a>
          </div>
          <button onclick="toggleMenu()" class="pointer-cursor block lg:hidden">
            <svg
              class="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
          <div
            class="fixed right-0 top-14 z-10 hidden w-full bg-fme-black px-6 lg:relative lg:right-auto lg:top-auto lg:flex lg:w-auto lg:items-center"
            id="menu"
          >
            <nav>
              <ul class="items-center justify-between pt-4 text-base text-white lg:flex lg:pt-0">
                <li>
                  <a
                    class="block border-b-4 border-transparent px-0 py-3 hover:border-fme-red lg:p-4"
                    href="#projecte"
                    onclick="toggleMenu()"
                    >Que és la FME?</a
                  >
                </li>
                <li>
                  <a
                    class="block border-b-4 border-transparent px-0 py-3 hover:border-fme-green lg:p-4"
                    href="#programa"
                    onclick="toggleMenu()"
                    >Programa d'actes</a
                  >
                </li>
                <li>
                  <a
                    class="block border-b-4 border-transparent px-0 py-3 hover:border-fme-yellow lg:p-4"
                    href="#collaboradors"
                    onclick="toggleMenu()"
                    >Col·laboradors</a
                  >
                </li>
                <li class="dropdown relative inline-block w-full lg:w-auto">
                  <div class="dropdown-trigger block w-full px-0 py-3 lg:p-4">Edicions anteriors</div>
                  <div class="dropdown-content w-full bg-fme-black pl-3 lg:absolute lg:hidden lg:pl-0">
                    <a href="edicio-2023" class="block px-0 py-3 hover:bg-fme-red lg:p-4">2023</a>
                    <a href="edicio-2022" class="block px-0 py-3 hover:bg-fme-red lg:p-4">2022</a>
                  </div>
                </li>
                <li class="mb-4 flex flex-row lg:mb-0">
                  <a href="https://twitter.com/fmentitats" target="_blank" rel="noopener" class="block p-3 lg:py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="fill-current text-white"
                    >
                      <path
                        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/fmentitats"
                    target="_blank"
                    rel="noopener"
                    class="block p-3 lg:py-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="fill-current text-white"
                    >
                      <path
                        d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"
                      />
                    </svg>
                  </a>
                  <!-- <a href="https://www.facebook.com/FMEntitatsVNG" target="_blank" rel="noopener" class="block p-3 lg:py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="fill-current text-white"
                >
                  <path
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                  />
                </svg>
              </a> -->
                  <a
                    href="https://open.spotify.com/user/cb44avwfmmjada7ccotzddckm?si=2b9ee626286e4dd4"
                    target="_blank"
                    rel="noopener"
                    class="block p-3 lg:py-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="fill-current text-white"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-12-7c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm3.21 10.096c-.125.207-.394.271-.6.146-1.643-1.005-3.712-1.232-6.149-.675-.235.053-.469-.094-.522-.328-.054-.235.092-.469.328-.523 2.666-.609 4.954-.347 6.799.78.205.126.27.395.144.6zm.857-1.906c-.158.257-.494.338-.751.18-1.881-1.156-4.75-1.491-6.975-.816-.289.088-.594-.075-.681-.363-.087-.289.076-.593.364-.681 2.542-.771 5.703-.398 7.863.93.257.158.338.494.18.75zm.074-1.984c-2.257-1.34-5.979-1.464-8.133-.81-.345.105-.711-.09-.816-.436-.105-.346.09-.712.436-.817 2.473-.75 6.583-.605 9.181.937.311.184.413.586.229.897-.185.311-.587.413-.897.229z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        `,`
        <footer>
          <p>Built with <a href="https://github.com/honojs/hono">Hono</a></p>
        </footer>
      </body>
      <script>
        function toggleMenu() {
          const element = document.getElementById('menu')
          element.classList.toggle('hidden')
        }
      <\/script>
    </html>`])),e.title,e.title,e.title,e.title,e.children),Me=()=>Q`
    <section id="projecte" class="m-auto my-10 max-w-5xl px-4" style="scroll-margin-top: 84px">
      <h2 class="my-2 text-center font-heading text-3xl uppercase">Que és la FME?</h2>
      <p class="my-4 text-center text-xl italic">
        Coneix l'origen, el projecte i les entitats que hi ha darrere de la FME
      </p>
      <div class="mb-6 flex flex-col-reverse flex-wrap items-center gap-8 lg:flex-row lg:flex-nowrap">
        <picture>
          <source srcset="/static/images/logo.avif" type="image/avif" />
          <source srcset="/static/images/logo.webp" type="image/webp" />
          <img
            src="/static/images/logo.png"
            loading="lazy"
            class="m-auto max-w-xs flex-1 rounded-full"
            alt="Logo Festa Major d'Entitats"
            width="320"
            height="320"
          />
        </picture>
        <div>
          <p class="flex-1 text-justify">
            La Festa Major d'Entitats neix l'any 2017 després que un grup d'entitats vinculades al teixit associatiu
            juvenil i cultural de la ciutat veiessin la necessitat d'implicar-se de forma més activa en la programació
            de la Festa Major.
          </p>
          <p class="flex-1 text-justify">
            A diferència del que passa en altres actes del cicle festiu de la ciutat, una part important de la gent viu
            la Festa Major com a espectadora. D'aquesta anàlisi sorgeix l'objectiu general del nou projecte de la FME
            2022:
            <span class="italic"
              >Oferir a la ciutat una programació cultural àmplia, popular i gratuïta emmarcada en la Festa Major a
              través de la participació directa de les entitats i la seva massa social.</span
            >
          </p>
          <p class="flex-1 text-justify">
            La FME pretén promoure la transformació del model cultural de la ciutat i oferir una alternativa a la festa
            major de Vilanova més participativa i accessible i alhora donar a conèixer el potencial i la riquesa de
            l'associacionisme a la ciutat.
          </p>
          <p class="flex-1 text-justify">
            A banda de les entitats que ja en formen part, la Festa Major d'Entitats pretén fer-se extensiva i
            interpel·lar progressivament a més entitats del teixit associatiu de la ciutat.
          </p>
        </div>
      </div>
      <p class="mb-4 text-center font-bold">Entitats organitzadores</p>
      <div class="flex flex-wrap justify-center gap-2 md:flex-nowrap lg:flex-nowrap lg:gap-8">
        <a
          href="https://www.instagram.com/launiovilanovina/"
          target="_blank"
          rel="noopener"
          aria-label="Enllaç a l'Instagram de La Unió"
        >
          <picture>
            <source srcset="/static/images/entitats/launio.avif" type="image/avif" />
            <source srcset="/static/images/entitats/launio.webp" type="image/webp" />
            <img
              src="/static/images/entitats/launio.jpg"
              loading="lazy"
              class="max-w-[75px] opacity-75 hover:opacity-100 lg:max-w-[120px]"
              alt="La Unió"
              width="240"
              height="264"
            />
          </picture>
        </a>
        <a
          href="https://www.instagram.com/diablesvng/"
          target="_blank"
          rel="noopener"
          aria-label="Enllaç a l'Instagram dels Diables de Vilanova"
        >
          <picture>
            <source srcset="/static/images/entitats/diables.avif" type="image/avif" />
            <source srcset="/static/images/entitats/diables.webp" type="image/webp" />
            <img
              src="/static/images/entitats/diables.jpg"
              loading="lazy"
              class="max-w-[75px] opacity-75 hover:opacity-100 lg:max-w-[120px]"
              alt="Ball de Diables de Vilanova"
              width="240"
              height="264"
            /> </picture
        ></a>
        <a
          href="https://www.instagram.com/festuc_vng/"
          target="_blank"
          rel="noopener"
          aria-label="Enllaç a l'Instagram de Festuc"
        >
          <picture>
            <source srcset="/static/images/entitats/festuc.avif" type="image/avif" />
            <source srcset="/static/images/entitats/festuc.webp" type="image/webp" />
            <img
              src="/static/images/entitats/festuc.jpg"
              loading="lazy"
              class="max-w-[75px] opacity-75 hover:opacity-100 lg:max-w-[120px]"
              alt="Festuc"
              width="240"
              height="264"
            /> </picture
        ></a>
        <a
          href="https://www.instagram.com/apollovng/"
          target="_blank"
          rel="noopener"
          aria-label="Enllaç a l'Instagram d'Apol·lo"
        >
          <picture>
            <source srcset="/static/images/entitats/apollo.avif" type="image/avif" />
            <source srcset="/static/images/entitats/apollo.webp" type="image/webp" />
            <img
              src="/static/images/entitats/apollo.jpg"
              loading="lazy"
              class="max-w-[75px] opacity-75 hover:opacity-100 lg:max-w-[120px]"
              alt="Apol·lo"
              width="240"
              height="264"
            /> </picture
        ></a>
        <a
          href="https://www.instagram.com/bordegassosvilanova/"
          target="_blank"
          rel="noopener"
          aria-label="Enllaç a l'Instagram dels Bordegassos de Vilanova"
          class="flex flex-col items-center justify-center"
        >
          <picture>
            <source srcset="/static/images/entitats/bordegassos.avif" type="image/avif" />
            <source srcset="/static/images/entitats/bordegassos.webp" type="image/webp" />
            <img
              src="/static/images/entitats/bordegassos.png"
              loading="lazy"
              class="max-w-[120px] opacity-75 hover:opacity-100 lg:max-w-[180px]"
              alt="Bordegassos"
              width="240"
              height="264"
            />
          </picture>
        </a>
        <a
          href="https://www.instagram.com/ateneuvilanovi/"
          target="_blank"
          rel="noopener"
          aria-label="Enllaç a l'Instagram del Ateneu Vilanovi"
          class="flex flex-col items-center justify-center"
        >
          <picture>
            <source srcset="/static/images/entitats/ateneu.avif" type="image/avif" />
            <source srcset="/static/images/entitats/ateneu.webp" type="image/webp" />
            <img
              src="/static/images/entitats/ateneu.png"
              loading="lazy"
              class="max-w-[120px] opacity-75 hover:opacity-100 lg:max-w-[180px]"
              alt="Ateneu Vilanovi"
              width="790"
              height="180"
            />
          </picture>
        </a>
      </div>
    </section>
  `,vt=()=>t(Se,{title:"Festa Major d'Entitats 2024",description:"Descobreix tota la programació de l'edició 2024",children:[t("section",{class:"relative h-[50vh] bg-fme-black md:h-[66vh] lg:h-screen",children:[t("div",{id:"video-container"}),t("video",{width:"720",height:"406",autoplay:!0,muted:!0,playsinline:!0,loop:!0,class:"z-1 absolute h-full w-full object-cover",style:"filter: blur(4px)",children:[t("source",{src:"https://media.fme.cat/video_fme_2023.mp4",srcset:"https://media.fme.cat/video_fme_2023.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),t("div",{class:"relative z-10 flex h-full flex-col items-center justify-center p-4",children:[t("h1",{class:"text-center font-heading text-4xl text-white md:text-6xl lg:text-7xl",children:"Festa Major d'Entitats"}),t("p",{class:"mb-4 text-center font-heading text-6xl text-white md:text-8xl lg:text-9xl",children:"2024"}),t("p",{class:"mb-10 text-center text-lg font-light uppercase text-white md:text-xl lg:text-2xl",children:"30 de juliol al 5 d'agost | Vilanova i la Geltrú"}),t("a",{href:"#programa",class:"relative flex cursor-pointer flex-row items-center rounded-md bg-white px-6 py-4 text-base text-fme-black no-underline shadow-xl md:text-lg lg:text-xl",children:"PROGRAMA D'ACTES"})]})]}),t(Me,{}),t("div",{class:"relative h-[500px] bg-gray-400 bg-divider-2-2023 bg-cover bg-center bg-no-repeat bg-blend-multiply backdrop-opacity-30 lg:bg-scroll"}),t(wt,{}),t("div",{class:"relative h-[500px] bg-gray-400 bg-divider-3 bg-cover bg-center bg-no-repeat bg-blend-multiply lg:bg-scroll"}),t(bt,{}),t("div",{class:"relative h-[500px] bg-gray-400 bg-divider-1 bg-cover bg-center bg-no-repeat bg-blend-multiply lg:bg-scroll"}),Q` <style>
        #video-container {
          height: 100%;
          width: 100%;
          background-image: url('/static/images/2023/video.mp4');
          background-color: transparent;
          position: absolute;
          background-size: cover;
          filter: blur(4px);
          z-index: 1;
        }
      </style>`]}),_t=()=>t("section",{id:"programa",class:"m-auto my-10 max-w-5xl px-4",style:"scroll-margin-top: 84px",children:[t("h2",{class:"my-2 text-center font-heading text-3xl uppercase",children:"Programa d'actes"}),t("p",{class:"my-4 text-center text-xl italic",children:"Això és tot el que us hem preparat per a aquesta FME."}),t("div",{class:"mb-10 grid grid-cols-1 gap-4 lg:grid-cols-2",children:[t("div",{class:"flex flex-col items-center justify-center",children:[t("div",{class:"mt-4 text-lg font-semibold text-fme-yellow",children:"Dijous 27 de juliol"}),t("p",{class:"text-center font-bold",children:"21:30h - Assaig especial de la Diada de les Neus"}),t("p",{class:"text-center",children:"Local de Bordegassos de Vilanova"}),t("p",{class:"text-center",children:"Organitza: Bordegassos de Vilanova"}),t("div",{class:"mt-4 text-lg font-semibold text-fme-yellow",children:"Divendres 28 de juliol"}),t("p",{class:"text-center font-bold",children:"17:00h - Ludoteca del Correfoc"}),t("p",{class:"text-center",children:"Plaça de les Casernes"}),t("p",{class:"text-center",children:"Organitza: Ball de Diables de Vilanova i el Drac de Vilanova i la Geltrú"}),t("p",{class:"mt-2 text-center font-bold",children:"20:00h - Sopar del Correfoc"}),t("p",{class:"text-center",children:"Plaça de les Casernes"}),t("p",{class:"text-center",children:"Organitza: Ball de Diables de Vilanova"}),t("p",{class:"mt-2 text-center font-bold",children:"22:30h - Ballem sota el foc del Correfoc"}),t("p",{class:"text-center",children:"Pels carrers de la vila"}),t("p",{class:"mt-2 text-center font-bold",children:"00:30h - Concerts amb Figa Flawas i DJ Casqui"}),t("p",{class:"text-center",children:"Plaça de les Casernes"}),t("p",{class:"text-center",children:"Organitza: FME"}),t("div",{class:"mt-4 text-lg font-semibold text-fme-yellow",children:"Dissabte 29 de juliol"}),t("p",{class:"text-center font-bold",children:"18:00h - Fem Pinya a la Diada de les Neus"}),t("p",{class:"text-center",children:"Plaça de la Vila"}),t("p",{class:"mt-2 text-center font-bold",children:"19:00h - Ruta Major d'Entitats"}),t("p",{class:"text-center",children:"Plaça del Mercat"}),t("p",{class:"text-center",children:"Organitza: Apol·lo"}),t("p",{class:"mt-2 text-center font-bold",children:"23:00h - Concerts amb Ketekalles, Awakate i Boom Boom Fighters"}),t("p",{class:"text-center",children:"Plaça de les Casernes"}),t("p",{class:"text-center",children:"Organitza: FME"}),t("div",{class:"mt-4 text-lg font-semibold text-fme-yellow",children:"Diumenge 30 de juliol"}),t("p",{class:"text-center font-bold",children:"19:00h - Vespre de Monòlegs amb Marc Sarrats, Gemma Ortis i Albert Roig."}),t("p",{class:"text-center",children:"Plaça de les Casernes"}),t("p",{class:"text-center",children:"Organitza: Festuc"})]}),t("div",{class:"flex flex-col items-center",children:[t("div",{class:"mt-4 text-lg font-semibold text-fme-yellow",children:"Dilluns 31 de juliol"}),t("p",{class:"text-center font-bold",children:"18:30h - Escalabirres"}),t("p",{class:"text-center",children:"Plaça de les Casernes"}),t("p",{class:"text-center",children:"Organitza: Bordegassos de Vilanova"}),t("p",{class:"mt-2 text-center font-bold",children:"20:30h - Botifarrada popular"}),t("p",{class:"text-center",children:"Plaça de les Casernes"}),t("p",{class:"text-center",children:"Organitza: Bordegassos de Vilanova i La Unió Vilanovina"}),t("p",{class:"mt-2 text-center font-bold",children:"21:00h - Ball de Gralles amb l'Havana Xica i Canya d'Or"}),t("p",{class:"text-center",children:"Plaça de les Casernes"}),t("p",{class:"text-center",children:"Organitza: La Unió Vilanovina"}),t("div",{class:"mt-4 text-lg font-semibold text-fme-yellow",children:"Dimarts 1 d'agost"}),t("p",{class:"text-center font-bold",children:"19:00h - Jornada antirrepresiva, xerrada i música en directe “Cultura i Carrer: A la reconquesta de l'espai públic”"}),t("p",{class:"text-center",children:"Plaça de les Casernes"}),t("p",{class:"text-center",children:"Organitza: Ateneu Vilanoví"}),t("div",{class:"mt-4 text-lg font-semibold text-fme-yellow",children:"Dimecres 2 d'agost"}),t("p",{class:"text-center font-bold",children:"18:00h - La petita FME: Tarda de jocs"}),t("p",{class:"text-center",children:"Plaça de les Casernes"}),t("p",{class:"text-center",children:"Organitza: FME"}),t("div",{class:"mt-4 text-lg font-semibold text-fme-yellow",children:"Divendres 4 d'agost"}),t("p",{class:"text-center font-bold",children:"13:30h - Vermut i dinar de la FME i sobretaula musical"}),t("p",{class:"text-center",children:"Plaça de les Casernes"}),t("p",{class:"text-center",children:"Organitza: FME"}),t("div",{class:"mt-4 text-lg font-semibold text-fme-yellow",children:"Dissabte 5 d'agost"}),t("p",{class:"text-center font-bold",children:"00:00h - Ball del Vot del Poble"}),t("p",{class:"text-center",children:"Plaça de la Peixeteria"}),t("p",{class:"text-center",children:"Organitza: Ateneu Vilanoví"})]})]}),t("div",{class:"mb-6 flex flex-row flex-wrap justify-center gap-4 lg:flex-nowrap",children:[t("div",{class:"flex-1",children:[t("h3",{class:"my-2 font-heading text-xl",children:"Descobreix la música de la FME"}),t("p",{class:"prose mb-4 text-justify",children:"Us hem preparat una llista de reproducció amb els millors èxits de tots els artistes que actuaran a la Festa Major d'Entitats d'aquest any."}),t("a",{href:"https://open.spotify.com/playlist/76ogOCN8Er0CTryn939UZ2?si=88c43e16805a445e",target:"_blank",rel:"noopener",class:"mx-auto mb-8 flex w-[fit-content] flex-row items-center rounded-md bg-fme-green px-4 py-3 text-white",children:[t("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",class:"mr-2 fill-current text-white","fill-rule":"evenodd","clip-rule":"evenodd",children:t("path",{d:"M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"})}),"Llista FME 2023"]}),t("div",{class:"grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6",children:[t("a",{href:"https://open.spotify.com/artist/2enhM5DK9oTxWiCVpFIDv3?si=OXNaQ68nTNOdBIO10tj_YQ",target:"_blank",rel:"noopener",class:"transform transition-transform duration-300 hover:scale-110","aria-label":"Enllaç a la pagina de Spotify de Figa Flawas",children:t("picture",{children:[t("source",{srcset:"/static/images/2023/grups/figaflawas.avif",type:"image/avif"}),t("source",{srcset:"/static/images/2023/grups/figaflawas.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/grups/figaflawas.png",loading:"lazy",alt:"Figa Flawas",width:"450",height:"450"})," "]})}),t("a",{href:"https://instagram.com/la.casqui",target:"_blank",rel:"noopener",class:"transform transition-transform duration-300 hover:scale-110","aria-label":"Enllaç a la pagina de Spotify de Djs Casqui",children:t("picture",{children:[t("source",{srcset:"/static/images/2023/grups/casqui.avif",type:"image/avif"}),t("source",{srcset:"/static/images/2023/grups/casqui.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/grups/casqui.png",loading:"lazy",alt:"Dj Casqui",width:"450",height:"450"})," "]})}),t("a",{href:"https://open.spotify.com/artist/32opeIbCeLG1LiAkmwiiof?si=ARIeUjZfQhi_f1AheV459Q",target:"_blank",rel:"noopener",class:"transform transition-transform duration-300 hover:scale-110","aria-label":"Enllaç a la pagina de Spotify de Ketekalles",children:t("picture",{children:[t("source",{srcset:"/static/images/2023/grups/ketekalles.avif",type:"image/avif"}),t("source",{srcset:"/static/images/2023/grups/ketekalles.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/grups/ketekalles.png",loading:"lazy",alt:"Ketekalles",width:"450",height:"450"})," "]})}),t("a",{href:"https://open.spotify.com/artist/48nizYtwPgaiGgp7rMmNCX?si=CFOxHujvTSqxfmvUEuEnAA",target:"_blank",rel:"noopener",class:"transform transition-transform duration-300 hover:scale-110","aria-label":"Enllaç a la pagina de Spotify de Awakate",children:t("picture",{children:[t("source",{srcset:"/static/images/2023/grups/awakate.avif",type:"image/avif"}),t("source",{srcset:"/static/images/2023/grups/awakate.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/grups/awakate.jpeg",loading:"lazy",alt:"Awakate",width:"450",height:"450"})," "]})}),t("a",{href:"https://open.spotify.com/artist/2bNKVXUVgZPjFR9VNYJNj6?si=onuJwHD8SIS2Exq5LqBCxQ",target:"_blank",rel:"noopener",class:"transform transition-transform duration-300 hover:scale-110","aria-label":"Enllaç a la pagina de Spotify de Boom Boom Fighters",children:t("picture",{children:[t("source",{srcset:"/static/images/2023/grups/boomboom.avif",type:"image/avif"}),t("source",{srcset:"/static/images/2023/grups/boomboom.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/grups/boomboom.png",loading:"lazy",alt:"Boom Boom Fighters",width:"450",height:"450"})," "]})})]})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/cartell2023.avif",type:"image/avif"}),t("source",{srcset:"/static/images/2023/cartell2023.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/cartell2023.jpg",loading:"lazy",alt:"Cartell dels concerts de l'edició 2023",width:"420",height:"525"})]})]})]}),jt=()=>t("section",{id:"collaboradors",class:"prose m-auto my-10 max-w-5xl px-4",style:"scroll-margin-top: 84px",children:[t("h2",{class:"my-2 text-center font-heading text-3xl uppercase",children:"Col·laboradors"}),t("p",{class:"mb-4 text-justify",children:"La Festa Major d'Entitats no seria possible sense el suport dels establiments i empreses locals que col·laboren amb el projecte."}),t("div",{class:"grid grid-cols-2 items-center justify-items-center gap-2 md:grid-cols-4",children:[t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/aperitius_tafaner.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/aperitius_tafaner.png",loading:"lazy",alt:"Aperitius Tafaner",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/estrella_galicia.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/estrella_galicia.png",loading:"lazy",alt:"Estrella Galicia",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/dvp.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/dvp.png",loading:"lazy",alt:"Distribucio i vending Penedes",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/gin_mg.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/gin_mg.png",loading:"lazy",alt:"Gin MG",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/aican.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/aican.jpg",loading:"lazy",alt:"Aican",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/paradistes_mercatt.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/paradistes_mercatt.jpg",loading:"lazy",alt:"Associacio Paradistes del Mercat",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/arcon_de_alba.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/arcon_de_alba.jpg",loading:"lazy",alt:"Arcon de Alba",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/bacallaneria_toni.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/bacallaneria_toni.png",loading:"lazy",alt:"Bacallaneria Toni",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/bar_del_mercat.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/bar_del_mercat.jpg",loading:"lazy",alt:"Bar del Mercat",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/cal_trajo.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/cal_trajo.png",loading:"lazy",alt:"Cal Trajo",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/can_batadet.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/can_batadet.png",loading:"lazy",alt:"Can Batadet",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/carpeta_moderna.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/carpeta_moderna.jpg",loading:"lazy",alt:"Carpeta Moderna",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/congelats_cadi.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/congelats_cadi.jpeg",loading:"lazy",alt:"Congelats Cadi",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/ferreteria_daumar.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/ferreteria_daumar.png",loading:"lazy",alt:"Ferreteria Daumar",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/fisio_lab.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/fisio_lab.png",loading:"lazy",alt:"Fisio Lab",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/freilka.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/freilka.png",loading:"lazy",alt:"Freilka",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/gelats_llorens.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/gelats_llorens.jpeg",loading:"lazy",alt:"Gelats Llorens",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/la_cava.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/la_cava.png",loading:"lazy",alt:"La Cava",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/lotus.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/lotus.png",loading:"lazy",alt:"Lotus",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/marta_carnisseria.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/marta_carnisseria.jpg",loading:"lazy",alt:"Marta Carnisseria",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/mon_petito.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/mon_petito.jpg",loading:"lazy",alt:"Mon Petito",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/padisgraf.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/padisgraf.png",loading:"lazy",alt:"Padisgraf",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/peixosdolors.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/peixosdolors.jpg",loading:"lazy",alt:"Peixos Dolors",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/solfico.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/solfico.png",loading:"lazy",alt:"Solfico",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/temps_de_recovery.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/temps_de_recovery.png",loading:"lazy",alt:"Temps de Recovery",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/el_rostit.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/el_rostit.png",loading:"lazy",alt:"El Rostit",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/ganiveteria_rodriguez.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/ganiveteria_rodriguez.png",loading:"lazy",alt:"Ganiveteria Rodriguez",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/bar_italia.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/bar_italia.png",loading:"lazy",alt:"Bar Italia",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/camanes.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/camanes.jpg",loading:"lazy",alt:"Camañes",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/el_celler.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/el_celler.png",loading:"lazy",alt:"El Celler ",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/la_gralla.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/la_gralla.png",loading:"lazy",alt:"La Gralla",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/la_lluna.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/la_lluna.png",loading:"lazy",alt:"La Lluna",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/la_tasca.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/la_tasca.png",loading:"lazy",alt:"La Tasca ",width:"200",height:"200"})]}),t("picture",{children:[t("source",{srcset:"/static/images/2023/esponsors/supermercats_jr.webp",type:"image/webp"}),t("img",{src:"/static/images/2023/esponsors/supermercats_jr.png",loading:"lazy",alt:"Supermercats JR ",width:"200",height:"200"})]})]})]}),Et=()=>t(Se,{title:"Festa Major d'Entitats 2023",description:"Descobreix tota la programació de l'edició 2023",children:[t("section",{class:"relative h-[50vh] bg-fme-black md:h-[66vh] lg:h-screen",children:[t("div",{id:"video-container"}),t("video",{width:"720",height:"406",autoplay:!0,muted:!0,playsinline:!0,loop:!0,class:"z-1 absolute h-full w-full object-cover",style:"filter: blur(4px)",children:[t("source",{src:"/static/images/2023/video.mp4",srcset:"/static/images/2023/video.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),t("div",{class:"relative z-10 flex h-full flex-col items-center justify-center p-4",children:[t("h1",{class:"text-center font-heading text-4xl text-white md:text-6xl lg:text-7xl",children:"Festa Major d'Entitats"}),t("p",{class:"mb-4 text-center font-heading text-6xl text-white md:text-8xl lg:text-9xl",children:"2023"}),t("p",{class:"mb-10 text-center text-lg font-light uppercase text-white md:text-xl lg:text-2xl",children:"27 de juliol al 5 d'agost | Vilanova i la Geltrú"}),t("a",{href:"#programa",class:"relative flex cursor-pointer flex-row items-center rounded-md bg-white px-6 py-4 text-base text-fme-black no-underline shadow-xl md:text-lg lg:text-xl",children:"PROGRAMA D'ACTES"})]})]}),t(Me,{}),t("div",{class:"relative h-[500px] bg-gray-400 bg-divider-2-2023 bg-cover bg-center bg-no-repeat bg-blend-multiply backdrop-opacity-30 lg:bg-scroll"}),t(_t,{}),t("div",{class:"relative h-[500px] bg-gray-400 bg-divider-3-2023 bg-cover bg-center bg-no-repeat bg-blend-multiply lg:bg-scroll"}),t(jt,{}),t("div",{class:"relative h-[500px] bg-gray-400 bg-divider-1-2023 bg-cover bg-center bg-no-repeat bg-blend-multiply lg:bg-scroll"}),Q` <style>
        #video-container {
          height: 100%;
          width: 100%;
          background-image: url('/static/images/2023/video.mp4');
          background-color: transparent;
          position: absolute;
          background-size: cover;
          filter: blur(4px);
          z-index: 1;
        }
      </style>`]}),ie=new Ce;ie.get("/",e=>e.html(t(vt,{})));ie.get("/edicio-2023",e=>e.html(t(Et,{})));const he=new Ce,zt=Object.assign({"/src/index.tsx":ie});let Ae=!1;for(const[,e]of Object.entries(zt))e&&(he.route("/",e),he.notFound(e.notFoundHandler),Ae=!0);if(!Ae)throw new Error("Can't import modules from ['/src/index.tsx','/app/server.ts']");export{he as default};
