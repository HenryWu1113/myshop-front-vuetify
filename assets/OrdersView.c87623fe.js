import{aA as G,M as J,r as h,N as v,C as K,a as _,c as p,b as n,d as e,w as s,ax as Y,Q as g,R as $,F as q,ab as B,T as F,V as m,f as o,aC as P,e as S,O as D,P as V,t as c,H as b,a6 as O,a5 as A,a9 as E,aw as M,aa as L,ay as R,a7 as Z,a8 as ee,aH as I,W as N,X as te,aE as se,aF as le}from"./index.7f18be1d.js";import{_ as ae}from"./isMobilePhone.1f4ee56f.js";import"./assertString.31c1207f.js";const i=k=>(se("data-v-8537809a"),k=k(),le(),k),ne={id:"back_order_view"},oe=i(()=>n("h1",{class:"text-h2 text-center mt-15 font-weight-bold"},"\u8A02\u55AE\u7BA1\u7406",-1)),de=i(()=>n("span",null,"\u8A02\u55AE\u7DE8\u865F",-1)),ie=i(()=>n("span",null,"\u8A02\u8CFC\u65E5\u671F",-1)),re=i(()=>n("span",null,"\u8A02\u55AE\u72C0\u614B",-1)),ce=i(()=>n("span",null,"\u7E3D\u50F9",-1)),ue=i(()=>n("span",null,"\u8A73\u7D30\u8CC7\u8A0A",-1)),_e=i(()=>n("span",null,"\u8A02\u55AE\u8CC7\u8A0A",-1)),pe={class:"order_panel"},me=["onClick"],fe=["onClick"],xe=i(()=>n("span",{class:"d-lg-none"},"\u8A02\u8CFC\u65E5\u671F : ",-1)),he=i(()=>n("span",{class:"d-lg-none"},"\u8A02\u55AE\u72C0\u614B : ",-1)),ve={key:0},ge={key:1},Ve={key:2},be=i(()=>n("span",{class:"d-lg-none"},"\u7E3D\u50F9 : ",-1)),ke=i(()=>n("span",{class:"d-lg-none"},"\u8A73\u7D30\u8CC7\u8A0A : ",-1)),we=i(()=>n("span",{class:"d-lg-none"},"\u8A02\u55AE\u8CC7\u8A0A : ",-1)),ye=i(()=>n("h1",null,"\u6C92\u6709\u8A02\u55AE\u54E6",-1)),Ce={class:"text-center mt-4 text-brown"},Se=i(()=>n("span",{class:"text-brown"},"\u7522\u54C1",-1)),Te=i(()=>n("span",{class:"text-brown"},"\u55AE\u50F9",-1)),qe=i(()=>n("span",{class:"text-brown"},"\u6578\u91CF",-1)),Fe=i(()=>n("span",{class:"text-brown"},"\u7E3D\u50F9",-1)),Ie=["onClick"],Ne=["onClick"],Ue=i(()=>n("span",{class:"d-md-none text-brown"},"\u55AE\u50F9 : ",-1)),$e={class:"text-deep-orange"},Be=i(()=>n("span",{class:"d-md-none text-brown"},"\u6578\u91CF : ",-1)),Pe={class:"text-brown"},De=i(()=>n("span",{class:"d-md-none text-brown"},"\u7E3D\u50F9 : ",-1)),Oe={class:"text-deep-orange"},Ae=N("\u95DC\u9589"),Ee={class:"text-center mt-4 text-brown"},Me={class:"text-center text-brown mb-4"},Le={class:"text-center text-brown mb-4"},Re=N("\u95DC\u9589"),He=N(" \u78BA\u8A8D\u66F4\u6539 "),We={__name:"OrdersView",setup(k){const w=J(),T=h(!1),U=h(!1),y=h(!1),f=h(!1),x=h("\u5168\u90E8"),d=v([]),a=v({_id:"",account:"",nickname:"",cellphone:"",address:"",receiver:"",state:0,idx:0,valid:!1,submitting:!1}),C=v({required(r){return!!r||"\u5FC5\u586B"},isMobilePhone(r){return ae(r,"zh-TW")||"\u624B\u6A5F\u865F\u78BC\u683C\u5F0F\u932F\u8AA4"}}),H=v(["\u5168\u90E8","\u672A\u4ED8\u6B3E","\u8A02\u55AE\u6210\u7ACB","\u8A02\u55AE\u53D6\u6D88"]),W=v([{opt:"\u672A\u4ED8\u6B3E",value:0},{opt:"\u8A02\u55AE\u6210\u7ACB",value:1},{opt:"\u8A02\u55AE\u53D6\u6D88",value:2}]),j=K(()=>x.value==="\u5168\u90E8"?d:x.value==="\u672A\u4ED8\u6B3E"?d.filter(r=>r.state===0):x.value==="\u8A02\u55AE\u6210\u7ACB"?d.filter(r=>r.state===1):d.filter(r=>r.state===2)),z=r=>{const l=d.findIndex(t=>t._id===r);a._id=d[l]._id,a.idx=l,y.value=!0},Q=r=>{const l=d.findIndex(t=>t._id===r);a._id=d[l]._id,a.account=d[l].user.account,a.nickname=d[l].user.nickname,a.cellphone=d[l].cellphone,a.receiver=d[l].receiver,a.address=d[l].address,a.state=d[l].state,a.idx=l,f.value=!0},X=async()=>{if(!a.valid)return;a.submitting=!0;const r={receiver:a.receiver,cellphone:a.cellphone,address:a.address,state:a.state};try{const{data:l}=await B.patch("/orders/"+a._id,r);d[a.idx]=l.result,d[a.idx].totalPrice=d[a.idx].products.reduce((t,u)=>t+u.product.price*u.quantity,0),console.log(d),F.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}catch(l){console.log(l),F.fire({icon:"error",title:"\u5931\u6557",text:l.isAxiosError?l.response.data.message:l.message})}f.value=!1,a.submitting=!1};return(async()=>{try{T.value=!0;const{data:r}=await B.get("/orders/all");d.push(...r.result.map(l=>(l.totalPrice=l.products.reduce((t,u)=>t+u.product.price*u.quantity,0),l))),U.value=!0,T.value=!1}catch{F.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(r,l)=>(_(),p(q,null,[n("div",ne,[e(Y,null,{default:s(()=>[oe,e(m,{class:"mt-5"},{default:s(()=>[e(o,{cols:"12",md:"3",sm:"4"},{default:s(()=>[e(P,{modelValue:x.value,"onUpdate:modelValue":l[0]||(l[0]=t=>x.value=t),variant:"outlined",items:H,"append-inner-icon":"mdi-pistol"},null,8,["modelValue","items"])]),_:1})]),_:1}),e(m,{class:"d-none d-lg-flex"},{default:s(()=>[e(o,{class:"text-h6"},{default:s(()=>[de]),_:1}),e(o,{class:"text-h6"},{default:s(()=>[ie]),_:1}),e(o,{class:"text-h6"},{default:s(()=>[re]),_:1}),e(o,{class:"text-h6"},{default:s(()=>[ce]),_:1}),e(o,{class:"text-h6"},{default:s(()=>[ue]),_:1}),e(o,{class:"text-h6"},{default:s(()=>[_e]),_:1})]),_:1}),e(S,{class:"mb-10 d-none d-lg-block"}),n("div",pe,[d.length>0?(_(!0),p(q,{key:0},D(V(j),t=>(_(),g(m,{key:t._id,class:"pt-3 pb-3 mt-10",style:{"border-left":"3px solid #FFEB3B"}},{default:s(()=>[e(o,{cols:"12",lg:"",class:"d-flex align-center"},{default:s(()=>[n("span",{class:"d-lg-none",onClick:u=>V(w).push("/order/"+t._id),style:{cursor:"pointer"}},"\u8A02\u55AE\u7DE8\u865F : ",8,me),n("span",{onClick:u=>V(w).push("/order/"+t._id),style:{cursor:"pointer"},class:"order_id"},c(t._id),9,fe)]),_:2},1024),e(o,{cols:"12",lg:"",class:"d-flex align-center"},{default:s(()=>[xe,n("span",null,c(new Date(t.date).toLocaleString()),1)]),_:2},1024),e(o,{cols:"12",sm:"3",lg:"",class:"d-flex align-center"},{default:s(()=>[he,t.state===0?(_(),p("span",ve,"\u672A\u4ED8\u6B3E")):t.state===1?(_(),p("span",ge,"\u8A02\u55AE\u6210\u7ACB")):(_(),p("span",Ve,"\u8A02\u55AE\u53D6\u6D88"))]),_:2},1024),e(o,{cols:"12",sm:"3",lg:"",class:"d-flex align-center"},{default:s(()=>[be,n("span",null,"NT. "+c(t.totalPrice),1)]),_:2},1024),e(o,{cols:"12",sm:"3",lg:""},{default:s(()=>[ke,e(b,{icon:"",variant:"text",onClick:u=>z(t._id)},{default:s(()=>[e(O,{icon:"mdi-plus"})]),_:2},1032,["onClick"])]),_:2},1024),e(o,{cols:"12",sm:"3",lg:""},{default:s(()=>[we,e(b,{icon:"",variant:"text",onClick:u=>Q(t._id)},{default:s(()=>[e(O,{icon:"mdi-pen"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)):(_(),g(m,{key:1},{default:s(()=>[U.value?(_(),g(o,{key:0,cols:"12",class:"text-center mt-10"},{default:s(()=>[ye]),_:1})):$("",!0)]),_:1})),e(A,{modelValue:y.value,"onUpdate:modelValue":l[2]||(l[2]=t=>y.value=t)},{default:s(()=>[e(E,null,{default:s(()=>[e(M,null,{default:s(()=>[n("h3",Ce,"~~~~~ \u8A02\u55AE\u7DE8\u865F :"+c(a._id)+" ~~~~~",1)]),_:1}),e(L,null,{default:s(()=>[e(m,{class:"d-none d-md-flex"},{default:s(()=>[e(o,{cols:"12",md:"5"},{default:s(()=>[Se]),_:1}),e(o,{cols:"12",md:"2"},{default:s(()=>[Te]),_:1}),e(o,{cols:"12",md:"2"},{default:s(()=>[qe]),_:1}),e(o,{cols:"12",md:"3"},{default:s(()=>[Fe]),_:1})]),_:1}),e(S,{class:"d-none d-md-block mb-1"}),(_(!0),p(q,null,D(d[a.idx].products,t=>(_(),g(m,{key:t._id},{default:s(()=>[e(o,{cols:"12",md:"5"},{default:s(()=>[n("span",{class:"d-none d-md-block text-brown",onClick:u=>V(w).push("/product/"+t.product._id),style:{cursor:"pointer"}},c(t.product.name),9,Ie),n("span",{class:"d-md-none text-h6 text-brown",onClick:u=>V(w).push("/product/"+t.product._id),style:{cursor:"pointer"}},[n("b",null,c(t.product.name),1)],8,Ne)]),_:2},1024),e(o,{cols:"4",md:"2"},{default:s(()=>[Ue,n("span",$e,"NT. "+c(t.product.price),1)]),_:2},1024),e(o,{cols:"4",md:"2"},{default:s(()=>[Be,n("span",Pe,c(t.quantity),1)]),_:2},1024),e(o,{cols:"4",md:"3"},{default:s(()=>[De,n("span",Oe,"NT. "+c(t.product.price*t.quantity),1)]),_:2},1024),e(S,{class:"d-md-none"})]),_:2},1024))),128)),e(S,{class:"d-none d-md-block"})]),_:1}),e(R,null,{default:s(()=>[e(b,{color:"brown",block:"",onClick:l[1]||(l[1]=t=>y.value=!1)},{default:s(()=>[Ae]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(A,{modelValue:f.value,"onUpdate:modelValue":l[9]||(l[9]=t=>f.value=t),persistent:""},{default:s(()=>[e(Z,{onSubmit:ee(X,["prevent"]),modelValue:a.valid,"onUpdate:modelValue":l[8]||(l[8]=t=>a.valid=t)},{default:s(()=>[e(E,null,{default:s(()=>[e(M,null,{default:s(()=>[n("h3",Ee,"~~~~~ \u8A02\u55AE\u7DE8\u865F :"+c(a._id)+" ~~~~~",1)]),_:1}),e(L,null,{default:s(()=>[n("h2",Me,"\u5E33\u865F : "+c(a.account),1),n("h2",Le,"\u6703\u54E1 : "+c(a.nickname),1),e(I,{modelValue:a.receiver,"onUpdate:modelValue":l[3]||(l[3]=t=>a.receiver=t),type:"text",label:"\u6536\u4EF6\u8005\u59D3\u540D",placeholder:"\u8ACB\u8F38\u5165\u6536\u4EF6\u8005\u59D3\u540D",counter:"10",maxlength:"10",rules:[C.required],variant:"outlined"},null,8,["modelValue","rules"]),e(I,{modelValue:a.cellphone,"onUpdate:modelValue":l[4]||(l[4]=t=>a.cellphone=t),type:"text",label:"\u6536\u4EF6\u8005\u96FB\u8A71",placeholder:"\u8ACB\u8F38\u5165\u6536\u4EF6\u8005\u96FB\u8A71",rules:[C.required,C.isMobilePhone],variant:"outlined"},null,8,["modelValue","rules"]),e(I,{modelValue:a.address,"onUpdate:modelValue":l[5]||(l[5]=t=>a.address=t),type:"text",label:"\u6536\u4EF6\u5730\u5740",placeholder:"\u8ACB\u8F38\u5165\u6536\u4EF6\u5730\u5740",rules:[C.required],variant:"outlined"},null,8,["modelValue","rules"]),e(P,{modelValue:a.state,"onUpdate:modelValue":l[6]||(l[6]=t=>a.state=t),items:W,"item-title":"opt","item-value":"value",variant:"outlined"},null,8,["modelValue","items"])]),_:1}),e(R,{class:"d-flex justify-center mb-3"},{default:s(()=>[e(b,{color:"brown",variant:"outlined",onClick:l[7]||(l[7]=t=>f.value=!1)},{default:s(()=>[Re]),_:1}),e(b,{color:"warning",variant:"outlined",type:"submit",loading:a.submitting},{default:s(()=>[He]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","modelValue"])]),_:1},8,["modelValue"])])]),_:1})]),T.value?(_(),g(te,{key:0})):$("",!0)],64))}};var Ge=G(We,[["__scopeId","data-v-8537809a"]]);export{Ge as default};
