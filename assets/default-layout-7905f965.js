import{w as I,c as D,I as A,_ as y,u as $,a as R,b as F,d as H}from"./index-0a83f947.js";import{d as h,b,c as k,x as w,aY as L,A as u,B as v,E as f,aF as o,aD as n,u as M,aJ as m,aC as r,aK as V,b2 as N,b3 as T,aV as z,b4 as C,b5 as B,b6 as P,b7 as K,b8 as U,b9 as x,ba as W,bb as j,w as q,p as J,bc as Y,bd as G,be as O}from"./arco-aadab653.js";import{f as E,g as Q,h as X}from"./vue-c077373c.js";/* empty css              */const Z=e=>(C("data-v-c17b33f2"),e=e(),B(),e),ee={class:"navbar"},te={class:"left-side"},oe={class:"center-side"},ne=Z(()=>f("div",{class:"logo"},null,-1)),se={class:"right-side"},ae={key:0},ce={key:1},ue=h({__name:"index",setup(e){const t=b(""),s=k(()=>{const c=t.value;return c.length===42?`0x${c.substring(2,4)}....${c.substring(38)}`:"0x...."});I(c=>{c.address?t.value=c.address:t.value=""});async function a(){await D({connector:new A})}const i=E();return w(()=>{a()}),(c,l)=>{const _=N,g=T,p=L("RouterLink"),d=z;return u(),v("div",ee,[f("div",te,[o(g,null,{default:n(()=>[o(_,{href:"https://twitter.com/onlyupdefi/",target:"_blank",class:"twitter"}),o(_,{href:"https://pancakeswap.finance/swap?chain=base&outputCurrency=0x35C7aabb90dea1bf2340213bE99373977F689c66&inputCurrency=ETH",class:"pancake",target:"_blank"})]),_:1})]),f("div",oe,[o(p,{to:{name:"Home"}},{default:n(()=>[ne]),_:1})]),f("ul",se,[M(i).currentRoute.value.name==="Home"?(u(),v("li",ae,[o(p,{to:{name:"Dashboard"}},{default:n(()=>[o(d,{style:{color:"#2e3c4a","font-weight":"bold"}},{default:n(()=>[m("Dashboard")]),_:1})]),_:1})])):(u(),v("li",ce,[o(p,{to:{name:"Home"}},{default:n(()=>[o(d,{style:{color:"#2e3c4a","font-weight":"bold"}},{default:n(()=>[m("Back")]),_:1})]),_:1})])),f("li",null,[t.value!==""?(u(),r(d,{key:0,class:"connect-btn"},{default:n(()=>[m(V(s.value),1)]),_:1})):(u(),r(d,{key:1,class:"connect-btn",onClick:a},{default:n(()=>[m(" Connect Wallet ")]),_:1}))])])])}}});const _e=y(ue,[["__scopeId","data-v-c17b33f2"]]);const re={},ie=e=>(C("data-v-863cfb79"),e=e(),B(),e),le=ie(()=>f("div",{class:"footer-logo"},null,-1));function de(e,t){const s=P;return u(),r(s,{class:"footer"},{default:n(()=>[le]),_:1})}const fe=y(re,[["render",de],["__scopeId","data-v-863cfb79"]]);function pe(e,t,s,a=!1){e.addEventListener&&typeof e.addEventListener=="function"&&e.addEventListener(t,s,a)}function me(e,t,s,a=!1){e.removeEventListener&&typeof e.removeEventListener=="function"&&e.removeEventListener(t,s,a)}const ve=992;function be(){return document.body.getBoundingClientRect().width-1<ve}function ye(e){const t=$();function s(){if(!document.hidden){const i=be();t.toggleDevice(i?"mobile":"desktop"),t.toggleMenu(i)}}const a=Q(s,100);w(()=>{e&&a()}),K(()=>{pe(window,"resize",a)}),U(()=>{me(window,"resize",a)})}const he=h({__name:"page-layout",setup(e){const t=R(),s=k(()=>t.getCacheList);return(a,i)=>{const c=L("router-view");return u(),r(c,null,{default:n(({Component:l,route:_})=>[o(j,{name:"fade",mode:"out-in",appear:""},{default:n(()=>[_.meta.ignoreCache?(u(),r(x(l),{key:_.fullPath})):(u(),r(W,{key:1,include:s.value},[(u(),r(x(l),{key:_.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})}}}),we=h({__name:"default-layout",setup(e){const t=b(!1),s=F(),a=E(),i=X(),c=H();ye(!0),q(()=>s.role,_=>{_&&!c.accessRouter(i)&&a.push({name:"notFound"})});const l=b(!1);return J("toggleDrawerMenu",()=>{l.value=!l.value}),w(()=>{t.value=!0}),(_,g)=>{const p=Y,d=G,S=O;return u(),r(S,{class:"layout"},{default:n(()=>[o(p,null,{default:n(()=>[o(_e)]),_:1}),o(d,null,{default:n(()=>[o(he)]),_:1}),o(fe)]),_:1})}}});const Ce=y(we,[["__scopeId","data-v-263fa503"]]);export{Ce as default};
