import{_ as A}from"./index-dda1ba02.js";import{a as g,b as B,d as D}from"./index-6a2f37d1.js";/* empty css              */import{d as I,r as N,b as z,c as E,x as M,A as i,B as r,E as a,C as m,aF as c,aD as d,aH as V,aG as U,aC as W,aK as v,aJ as x,bg as $,b3 as F,Z as H,bi as L,aV as G,bh as J,b4 as K,b5 as O}from"./arco-aadab653.js";import"./vue-c077373c.js";const k=u=>(K("data-v-01d12f8e"),u=u(),O(),u),P={class:"dash-container"},R=k(()=>a("div",{class:"dash-container-title"}," Dashboard ",-1)),Z={class:"dash-container-tabs"},j={class:"dash-container-tabs-header"},q={class:"dash-container-tabs-context"},Q={style:{"font-size":"20px"}},X={key:0},Y={key:1},ee={key:2},te={key:3},ae=k(()=>a("div",{class:"dash-container-footer"},[a("div",{class:"description"}," Stealth launch, follow our twitter, and turn on the fucking bell will you? "),a("div",{class:"title"},"OnlyUp")],-1)),se=I({__name:"index",setup(u){const o=N({loading:!1,weekly:[],daily:[]}),_=z(0),C=E(()=>(_.value===0?o.daily:o.weekly).sort((t,n)=>n.id-t.id));async function S(){o.loading=!0;try{const t=await g(),{address:n}=await B(),[s,p]=await Promise.all([t.currentWeek(),t.currentDays()]),f=await t.userHistory(n,[s,s-10n,s-20n]);o.weekly=[],o.daily=[];const h=[],y=[];f.forEach(b=>{const e=D(b);h.push(...e.filter(l=>l.id%10===0)),y.push(...e.filter(l=>l.id%10>0&&l.id<=Number(s+p)))}),o.weekly=h,o.daily=y}catch(t){console.error(t)}o.loading=!1}async function T(t){t.loading=!0;try{await(await g()).withdraw(t.id).then(s=>s.wait()),t.rewarded=!0}catch{console.log("")}t.rewarded=!0,t.loading=!1}return M(()=>{S()}),(t,n)=>{const s=$,p=F,f=H,h=L,y=G,b=J;return i(),r("div",P,[R,a("div",Z,[a("div",j,[a("div",{class:m(["tabs-item",_.value===0?"active":""]),onClick:n[0]||(n[0]=e=>_.value=0)}," Daily ",2),a("div",{class:m(["tabs-item",_.value===1?"active":""]),onClick:n[1]||(n[1]=e=>_.value=1)}," Weekly ",2)]),a("div",q,[a("div",null,[c(b,{"row-class":"context-row",style:{"margin-top":"60px"},data:C.value,bordered:!1,hoverable:!1,pagination:!1,loading:o.loading},{columns:d(()=>[c(s,{"data-index":"id",title:"ID","cell-class":"context-cell","header-cell-class":"context-header-cell"}),c(s,{"data-index":"number",title:"NUMBER","cell-class":"context-cell","header-cell-class":"context-header-cell"},{cell:d(({record:e})=>[c(p,{size:25},{default:d(()=>[(i(!0),r(V,null,U(e.bets,(l,w)=>(i(),W(p,{key:l,direction:"vertical",align:"center"},{default:d(()=>[a("div",{class:m(["cellnumber",e.number.includes(w)?"win":""])},v(w),3),a("div",Q,v(l),1)]),_:2},1024))),128))]),_:2},1024)]),_:1}),c(s,{title:"STATUS","cell-class":"context-cell","header-cell-class":"context-header-cell","cell-style":{color:"rgba(242, 244, 247, 0.50)"}},{cell:d(({record:e})=>[e.number[0]===-1?(i(),r("div",X,"downcount")):e.reward==="0.0"?(i(),r("div",Y,"pass")):e.rewarded?(i(),r("div",ee,[c(h,{color:"#00b42a",style:{"font-size":"25px",padding:"16px"}},{default:d(()=>[c(f),x(" "+v(Math.floor(Number(e.reward))),1)]),_:2},1024)])):(i(),r("div",te,[c(y,{style:{"font-size":"25px",padding:"10px"},loading:e.loading,onClick:l=>T(e)},{default:d(()=>[x(" + "+v(Math.floor(Number(e.reward))),1)]),_:2},1032,["loading","onClick"])]))]),_:1},8,["cell-style"])]),_:1},8,["data","loading"])])])]),ae])}}});const de=A(se,[["__scopeId","data-v-01d12f8e"]]);export{de as default};
