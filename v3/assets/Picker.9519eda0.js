import{c as J,u as me,f as q,m as G,D as U,e as Q,b as fe,E as de}from"./use-translate.43484c14.js";import{d as _,u as he,a as ge,n as W,b as X,c as p,m as ve,t as xe}from"./with-install.d47ea1a2.js";import{a as be,H as Z}from"./constant.80c6de18.js";import{u as ee}from"./use-expose.f4ec549a.js";import{L as Ce}from"./index.da11a5bc.js";import{d as te}from"./deep-clone.3c541604.js";import{u as Te}from"./use-touch.8e5a0907.js";import{z as ne,C as oe,G as ye,x as Y,e as r,B as ae}from"./vue-libs.f710b8ed.js";const se=200,ie=300,Ie=15,[le,F]=J("picker-column");function we(t){const{transform:x}=window.getComputedStyle(t),l=x.slice(7,x.length-1).split(", ")[5];return Number(l)}const ce=Symbol(le),z=t=>q(t)&&t.disabled;var Oe=ne({name:le,props:{textKey:_(String),readonly:Boolean,allowHtml:Boolean,className:he,itemHeight:_(Number),defaultIndex:ge(0),swipeDuration:_(W),initialOptions:X(),visibleItemCount:_(W)},emits:["change"],setup(t,{emit:x,slots:l}){let d,I,b,u,m;const E=oe(),a=ye({index:t.defaultIndex,offset:0,duration:0,options:te(t.initialOptions)}),f=Te(),w=()=>a.options.length,D=()=>t.itemHeight*(+t.visibleItemCount-1)/2,S=n=>{n=U(n,0,w());for(let s=n;s<w();s++)if(!z(a.options[s]))return s;for(let s=n-1;s>=0;s--)if(!z(a.options[s]))return s},h=(n,s)=>{n=S(n)||0;const c=-n*t.itemHeight,g=()=>{n!==a.index&&(a.index=n,s&&x("change",n))};d&&c!==a.offset?m=g:g(),a.offset=c},O=n=>{JSON.stringify(n)!==JSON.stringify(a.options)&&(a.options=te(n),h(t.defaultIndex))},T=n=>{d||t.readonly||(m=null,a.duration=se,h(n,!0))},N=n=>q(n)&&t.textKey in n?n[t.textKey]:n,k=n=>U(Math.round(-n/t.itemHeight),0,w()-1),H=(n,s)=>{const c=Math.abs(n/s);n=a.offset+c/.003*(n<0?-1:1);const g=k(n);a.duration=+t.swipeDuration,h(g,!0)},M=()=>{d=!1,a.duration=0,m&&(m(),m=null)},$=n=>{if(!t.readonly){if(f.start(n),d){const s=we(E.value);a.offset=Math.min(0,s-D()),I=a.offset}else I=a.offset;a.duration=0,b=Date.now(),u=I,m=null}},P=n=>{if(t.readonly)return;f.move(n),f.isVertical()&&(d=!0,G(n,!0)),a.offset=U(I+f.deltaY.value,-(w()*t.itemHeight),t.itemHeight);const s=Date.now();s-b>ie&&(b=s,u=a.offset)},B=()=>{if(t.readonly)return;const n=a.offset-u,s=Date.now()-b;if(s<ie&&Math.abs(n)>Ie){H(n,s);return}const g=k(a.offset);a.duration=se,h(g,!0),setTimeout(()=>{d=!1},0)},A=()=>{const n={height:`${t.itemHeight}px`};return a.options.map((s,c)=>{const g=N(s),V=z(s),K={role:"button",style:n,tabindex:V?-1:0,class:F("item",{disabled:V,selected:c===a.index}),onClick:()=>T(c)},R={class:"van-ellipsis",[t.allowHtml?"innerHTML":"textContent"]:g};return r("li",K,[l.option?l.option(s):r("div",R,null)])})},j=n=>{const{options:s}=a;for(let c=0;c<s.length;c++)if(N(s[c])===n)return h(c)},L=()=>a.options[a.index];return h(a.index),me(ce),ee({state:a,setIndex:h,getValue:L,setValue:j,setOptions:O,stopMomentum:M}),Y(()=>t.initialOptions,O),Y(()=>t.defaultIndex,n=>h(n)),()=>r("div",{class:[F(),t.className],onTouchstart:$,onTouchmove:P,onTouchend:B,onTouchcancel:B},[r("ul",{ref:E,style:{transform:`translate3d(0, ${a.offset+D()}px, 0)`,transitionDuration:`${a.duration}ms`,transitionProperty:a.duration?"all":"none"},class:F("wrapper"),onTransitionend:M},[A()])])}});const[Ne,C,ue]=J("picker"),Se={title:String,loading:Boolean,readonly:Boolean,allowHtml:Boolean,itemHeight:p(44),showToolbar:xe,swipeDuration:p(1e3),visibleItemCount:p(6),cancelButtonText:String,confirmButtonText:String},ke=Q({},Se,{columns:X(),valueKey:String,defaultIndex:p(0),toolbarPosition:ve("top"),columnsFieldNames:Object});var Ke=ne({name:Ne,props:ke,emits:["confirm","cancel","change"],setup(t,{emit:x,slots:l}){const d=oe([]),{text:I,values:b,children:u}=Q({text:t.valueKey||"text",values:"values",children:"children"},t.columnsFieldNames),{children:m,linkChildren:E}=fe(ce);E();const a=ae(()=>de(t.itemHeight)),f=ae(()=>{const e=t.columns[0];if(typeof e=="object"){if(u in e)return"cascade";if(b in e)return"object"}return"plain"}),w=()=>{var i;const e=[];let o={[u]:t.columns};for(;o&&o[u];){const v=o[u];let y=(i=o.defaultIndex)!=null?i:+t.defaultIndex;for(;v[y]&&v[y].disabled;)if(y<v.length-1)y++;else{y=0;break}e.push({[b]:o[u],className:o.className,defaultIndex:y}),o=v[y]}d.value=e},D=()=>{const{columns:e}=t;f.value==="plain"?d.value=[{[b]:e}]:f.value==="cascade"?w():d.value=e},S=()=>m.map(e=>e.state.index),h=(e,o)=>{const i=m[e];i&&i.setOptions(o)},O=e=>{let o={[u]:t.columns};const i=S();for(let v=0;v<=e;v++)o=o[u][i[v]];for(;o&&o[u];)e++,h(e,o[u]),o=o[u][o.defaultIndex||0]},T=e=>m[e],N=e=>{const o=T(e);if(o)return o.getValue()},k=(e,o)=>{const i=T(e);i&&(i.setValue(o),f.value==="cascade"&&O(e))},H=e=>{const o=T(e);if(o)return o.state.index},M=(e,o)=>{const i=T(e);i&&(i.setIndex(o),f.value==="cascade"&&O(e))},$=e=>{const o=T(e);if(o)return o.state.options},P=()=>m.map(e=>e.getValue()),B=e=>{e.forEach((o,i)=>{k(i,o)})},A=e=>{e.forEach((o,i)=>{M(i,o)})},j=e=>{f.value==="plain"?x(e,N(0),H(0)):x(e,P(),S())},L=e=>{f.value==="cascade"&&O(e),f.value==="plain"?x("change",N(0),H(0)):x("change",P(),e)},n=()=>{m.forEach(e=>e.stopMomentum()),j("confirm")},s=()=>j("cancel"),c=()=>{if(l.title)return l.title();if(t.title)return r("div",{class:[C("title"),"van-ellipsis"]},[t.title])},g=()=>{const e=t.cancelButtonText||ue("cancel");return r("button",{type:"button",class:[C("cancel"),Z],onClick:s},[l.cancel?l.cancel():e])},V=()=>{const e=t.confirmButtonText||ue("confirm");return r("button",{type:"button",class:[C("confirm"),Z],onClick:n},[l.confirm?l.confirm():e])},K=()=>{if(t.showToolbar){const e=l.toolbar||l.default;return r("div",{class:C("toolbar")},[e?e():[g(),c(),V()]])}},R=()=>d.value.map((e,o)=>{var i;return r(Oe,{textKey:I,readonly:t.readonly,allowHtml:t.allowHtml,className:e.className,itemHeight:a.value,defaultIndex:(i=e.defaultIndex)!=null?i:+t.defaultIndex,swipeDuration:t.swipeDuration,initialOptions:e[b],visibleItemCount:t.visibleItemCount,onChange:()=>L(o)},{option:l.option})}),re=()=>{const e=a.value*+t.visibleItemCount,o={height:`${a.value}px`},i={height:`${e}px`},v={backgroundSize:`100% ${(e-a.value)/2}px`};return r("div",{class:C("columns"),style:i,onTouchmove:G},[R(),r("div",{class:C("mask"),style:v},null),r("div",{class:[be,C("frame")],style:o},null)])};return Y(()=>t.columns,D,{immediate:!0}),ee({confirm:n,getValues:P,setValues:B,getIndexes:S,setIndexes:A,getColumnIndex:H,setColumnIndex:M,getColumnValue:N,setColumnValue:k,getColumnValues:$,setColumnValues:h}),()=>{var e,o;return r("div",{class:C()},[t.toolbarPosition==="top"?K():null,t.loading?r(Ce,{class:C("loading")},null):null,(e=l["columns-top"])==null?void 0:e.call(l),re(),(o=l["columns-bottom"])==null?void 0:o.call(l),t.toolbarPosition==="bottom"?K():null])}}});export{Ke as _,Se as p};
