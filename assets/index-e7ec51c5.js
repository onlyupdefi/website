import{_ as A}from"./index-96412d83.js";import{a as x,b as B,d as N}from"./index-275b62c3.js";/* empty css              */import{d as D,r as z,b as E,c as M,x as V,A as i,B as r,E as a,C as w,aF as l,aD as d,aH as U,aG as W,aC as $,aK as b,aJ as k,bg as F,b3 as H,Z as L,bi as G,aV as J,bh as K,b4 as O,b5 as P}from"./arco-aadab653.js";import"./vue-c077373c.js";const C=p=>(O("data-v-e24ac3d6"),p=p(),P(),p),R={class:"dash-container"},Z=C(()=>a("div",{class:"dash-container-title"}," Dashboard ",-1)),j={class:"dash-container-tabs"},q={class:"dash-container-tabs-header"},Q={class:"dash-container-tabs-context"},X={style:{"font-size":"20px"}},Y={key:0},ee={key:1},te={key:2},ae={key:3},se=C(()=>a("div",{class:"dash-container-footer"},[a("div",{class:"description"}," Stealth launch, follow our twitter, and turn on the fucking bell will you? "),a("div",{class:"title"},"OnlyUp")],-1)),oe=D({__name:"index",setup(p){const o=z({loading:!1,weekly:[],daily:[]}),_=E(0),S=M(()=>(_.value===0?o.daily:o.weekly).sort((t,n)=>n.id-t.id));async function I(){o.loading=!0;try{const t=await x(),{address:n}=await B(),[s,h,f]=await Promise.all([t.currentWeek(),t.currentDays(),t.startIdnex()]),g=await t.userHistory(n,[s,s-10n,s-20n].filter(e=>e>=f));o.weekly=[],o.daily=[];const y=[],m=[];g.forEach(e=>{const u=N(e),c=u.filter(v=>v.id%10===0);c[0].id===Number(s)&&(c[0].number=[-1,-1,-1,-1,-1]),y.push(...c),m.push(...u.filter(v=>v.id%10>0&&v.id<=Number(s+h)))}),o.weekly=y,o.daily=m}catch(t){console.error(t)}o.loading=!1}async function T(t){t.loading=!0;try{await(await x()).withdraw(t.id).then(s=>s.wait()),t.rewarded=!0}catch{console.log("")}t.loading=!1}return V(()=>{I()}),(t,n)=>{const s=F,h=H,f=L,g=G,y=J,m=K;return i(),r("div",R,[Z,a("div",j,[a("div",q,[a("div",{class:w(["tabs-item",_.value===0?"active":""]),onClick:n[0]||(n[0]=e=>_.value=0)}," Daily ",2),a("div",{class:w(["tabs-item",_.value===1?"active":""]),onClick:n[1]||(n[1]=e=>_.value=1)}," Weekly ",2)]),a("div",Q,[a("div",null,[l(m,{"row-class":"context-row",style:{"margin-top":"60px"},data:S.value,bordered:!1,hoverable:!1,pagination:!1,loading:o.loading},{columns:d(()=>[l(s,{"data-index":"id",title:"ID","cell-class":"context-cell","header-cell-class":"context-header-cell"}),l(s,{"data-index":"number",title:"NUMBER","cell-class":"context-cell","header-cell-class":"context-header-cell"},{cell:d(({record:e})=>[l(h,{size:25},{default:d(()=>[(i(!0),r(U,null,W(e.bets,(u,c)=>(i(),$(h,{key:c,direction:"vertical",align:"center"},{default:d(()=>[a("div",{class:w(["cellnumber",e.number.includes(c)?"win":""])},b(c),3),a("div",X,b(u),1)]),_:2},1024))),128))]),_:2},1024)]),_:1}),l(s,{title:"STATUS","cell-class":"context-cell","header-cell-class":"context-header-cell","cell-style":{color:"rgba(242, 244, 247, 0.50)"}},{cell:d(({record:e})=>[e.number[0]===-1?(i(),r("div",Y,"in progress")):e.reward==="0.0"?(i(),r("div",ee,"pass")):e.rewarded?(i(),r("div",te,[l(g,{color:"#00b42a",style:{"font-size":"25px",padding:"16px"}},{default:d(()=>[l(f),k(" "+b(Math.floor(Number(e.reward))),1)]),_:2},1024)])):(i(),r("div",ae,[l(y,{style:{"font-size":"25px",padding:"10px"},loading:e.loading,onClick:u=>T(e)},{default:d(()=>[k(" + "+b(Math.floor(Number(e.reward))),1)]),_:2},1032,["loading","onClick"])]))]),_:1},8,["cell-style"])]),_:1},8,["data","loading"])])])]),se])}}});const re=A(oe,[["__scopeId","data-v-e24ac3d6"]]);export{re as default};
