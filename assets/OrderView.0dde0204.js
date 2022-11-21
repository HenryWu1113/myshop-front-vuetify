import{r as k,o as T,A as B,M as F,N as y,C as L,Z as p,a as r,c as f,b as o,t,d as a,w as s,V as v,e as w,F as V,O as A,P as m,Q as h,a6 as I,R as U,ac as P,T as x,f as i,aD as q,H as D,a7 as M,W as E,aa as R,ax as z,ab as W,az as j,X as H}from"./index.1dc33c45.js";const J={id:"front_order_view"},Q={class:"MyContainer"},X={class:"text-h2 text-center mt-15 text-brown font-weight-bold","data-aos":"fade-down","data-aos-duration":"1000","data-aos-offset":"150"},Z={class:"order_panel"},G=["onClick"],K=["onClick"],Y={class:"d-lg-none"},ee={key:0},le={key:1},te={key:2},ae={class:"d-lg-none"},se={key:0},ne={key:1},oe={key:2},de={class:"d-lg-none"},ie={class:"d-lg-none"},re={class:"text-center mt-4 text-brown"},ue={class:"text-brown"},ce={class:"text-brown"},fe={class:"text-brown"},_e={class:"text-brown"},pe=["onClick"],ve=["onClick"],me={class:"d-md-none text-brown"},he={class:"text-deep-orange"},ge={class:"d-md-none text-brown"},be={class:"text-brown"},$e={class:"d-md-none text-brown"},ke={class:"text-deep-orange"},Ve={__name:"OrderView",setup(we){const C=k(!1),O=k(!1);T(()=>{B.init()});const g=F(),b=k(!1),e=k(""),c=y([]),$=y({_id:"",idx:0}),d=y(["\u5168\u90E8","\u672A\u4ED8\u6B3E","\u8A02\u55AE\u6210\u7ACB","\u8A02\u55AE\u53D6\u6D88"]),N=L(()=>e.value==="\u5168\u90E8"||e.value==="All"?c:e.value==="\u672A\u4ED8\u6B3E"||e.value==="Unpaid"||e.value==="\u672A\u6255\u3044"?c.filter(l=>l.state===0):e.value==="\u8A02\u55AE\u6210\u7ACB"||e.value==="Order Established"||e.value==="\u6CE8\u6587\u78BA\u5B9A"?c.filter(l=>l.state===1):c.filter(l=>l.state===2)),S=l=>{const u=c.findIndex(n=>n._id===l);$._id=c[u]._id,$.idx=u,b.value=!0};return setInterval(()=>{p.global.locale==="tw"?(e.value==="All"?e.value="\u5168\u90E8":e.value==="Unpaid"||e.value==="\u672A\u6255\u3044"?e.value="\u672A\u4ED8\u6B3E":e.value==="Order Established"||e.value==="\u6CE8\u6587\u78BA\u5B9A"?e.value="\u8A02\u55AE\u6210\u7ACB":(e.value==="Order Canceled"||e.value==="\u6CE8\u6587\u3092\u53D6\u308A\u6D88\u3059")&&(e.value="\u8A02\u55AE\u53D6\u6D88"),d[0]="\u5168\u90E8",d[1]="\u672A\u4ED8\u6B3E",d[2]="\u8A02\u55AE\u6210\u7ACB",d[3]="\u8A02\u55AE\u53D6\u6D88"):p.global.locale==="en"?(e.value==="\u5168\u90E8"?e.value="All":e.value==="\u672A\u4ED8\u6B3E"||e.value==="\u672A\u6255\u3044"?e.value="Unpaid":e.value==="\u8A02\u55AE\u6210\u7ACB"||e.value==="\u6CE8\u6587\u78BA\u5B9A"?e.value="Order Established":(e.value==="\u8A02\u55AE\u53D6\u6D88"||e.value==="\u6CE8\u6587\u3092\u53D6\u308A\u6D88\u3059")&&(e.value="Order Canceled"),d[0]="All",d[1]="Unpaid",d[2]="Order Established",d[3]="Order Canceled"):(e.value==="All"?e.value="\u5168\u90E8":e.value==="\u672A\u4ED8\u6B3E"||e.value==="Unpaid"?e.value="\u672A\u6255\u3044":e.value==="\u8A02\u55AE\u6210\u7ACB"||e.value==="Order Established"?e.value="\u6CE8\u6587\u78BA\u5B9A":(e.value==="\u8A02\u55AE\u53D6\u6D88"||e.value==="Order Canceled")&&(e.value="\u6CE8\u6587\u3092\u53D6\u308A\u6D88\u3059"),d[0]="\u5168\u90E8",d[1]="\u672A\u6255\u3044",d[2]="\u6CE8\u6587\u78BA\u5B9A",d[3]="\u6CE8\u6587\u3092\u53D6\u308A\u6D88\u3059")},100),(async()=>{try{p.global.locale==="tw"?(e.value="\u5168\u90E8",d[0]="\u5168\u90E8",d[1]="\u672A\u4ED8\u6B3E",d[2]="\u8A02\u55AE\u6210\u7ACB",d[3]="\u8A02\u55AE\u53D6\u6D88"):p.global.locale==="en"?(e.value="All",d[0]="All",d[1]="Unpaid",d[2]="Order Established",d[3]="Order Canceled"):(e.value="\u5168\u90E8",d[0]="\u5168\u90E8",d[1]="\u672A\u6255\u3044",d[2]="\u6CE8\u6587\u78BA\u5B9A",d[3]="\u6CE8\u6587\u3092\u53D6\u308A\u6D88\u3059"),C.value=!0;const{data:l}=await P.get("/orders");c.push(...l.result.map(u=>(u.totalPrice=u.products.reduce((n,_)=>n+_.product.price*_.quantity,0),u))),C.value=!1,O.value=!0}catch(l){console.log(l),p.global.locale==="tw"?x.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"}):p.global.locale==="en"?x.fire({icon:"error",title:"Failed",text:"Unable to get order"}):x.fire({icon:"error",title:"\u5931\u6557",text:"\u6CE8\u6587\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093"})}})(),(l,u)=>(r(),f(V,null,[o("div",J,[o("div",Q,[o("h1",X,t(l.$t("orderrecord")),1),a(v,{class:"mt-5"},{default:s(()=>[a(i,{cols:"12",md:"3"},{default:s(()=>[a(q,{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=n=>e.value=n),variant:"outlined",items:d,"append-inner-icon":"mdi-filter-menu-outline"},null,8,["modelValue","items"])]),_:1})]),_:1}),a(v,{class:"d-none d-lg-flex"},{default:s(()=>[a(i,{class:"text-h6"},{default:s(()=>[o("span",null,t(l.$t("orderid")),1)]),_:1}),a(i,{class:"text-h6"},{default:s(()=>[o("span",null,t(l.$t("orderdate")),1)]),_:1}),a(i,{class:"text-h6"},{default:s(()=>[o("span",null,t(l.$t("orderstate")),1)]),_:1}),a(i,{class:"text-h6"},{default:s(()=>[o("span",null,t(l.$t("totalprice")),1)]),_:1}),a(i,{class:"text-h6"},{default:s(()=>[o("span",null,t(l.$t("detail")),1)]),_:1})]),_:1}),a(w,{class:"mb-10 d-none d-lg-block"}),o("div",Z,[c.length>0?(r(!0),f(V,{key:0},A(m(N),n=>(r(),h(v,{key:n._id,class:"pt-3 pb-3 mt-10",style:{"border-left":"3px solid #FFEB3B"}},{default:s(()=>[a(i,{cols:"12",lg:"",class:"d-flex align-center"},{default:s(()=>[o("span",{class:"d-lg-none",onClick:_=>m(g).push("/order/"+n._id),style:{cursor:"pointer"}},t(l.$t("orderid"))+" : ",9,G),o("span",{onClick:_=>m(g).push("/order/"+n._id),style:{cursor:"pointer"},class:"order_id"},t(n._id),9,K)]),_:2},1024),a(i,{cols:"12",lg:"",class:"d-flex align-center"},{default:s(()=>[o("span",Y,t(l.$t("orderdate"))+" : ",1),l.$i18n.locale==="tw"?(r(),f("span",ee,t(new Date(n.date).toLocaleString("zh-TW")),1)):l.$i18n.locale==="en"?(r(),f("span",le,t(new Date(n.date).toLocaleString("en-US")),1)):(r(),f("span",te,t(new Date(n.date).toLocaleString("ja-JP")),1))]),_:2},1024),a(i,{cols:"12",md:"4",lg:"",class:"d-flex align-center"},{default:s(()=>[o("span",ae,t(l.$t("orderstate"))+" : ",1),n.state===0?(r(),f("span",se,t(l.$t("unpaid")),1)):n.state===1?(r(),f("span",ne,t(l.$t("orderestablished")),1)):(r(),f("span",oe,t(l.$t("ordercancel")),1))]),_:2},1024),a(i,{cols:"12",md:"4",lg:"",class:"d-flex align-center"},{default:s(()=>[o("span",de,t(l.$t("totalprice"))+" : ",1),o("span",null,"NT. "+t(n.totalPrice),1)]),_:2},1024),a(i,{cols:"12",md:"4",lg:""},{default:s(()=>[o("span",ie,t(l.$t("detail"))+" : ",1),a(D,{icon:"",variant:"text",onClick:_=>S(n._id)},{default:s(()=>[a(M,{icon:"mdi-plus"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)):(r(),h(v,{key:1},{default:s(()=>[O.value?(r(),h(i,{key:0,cols:"12",class:"text-center text-h3 mt-10 font-weight-bold"},{default:s(()=>[E(t(l.$t("noorder")),1)]),_:1})):U("",!0)]),_:1})),a(I,{modelValue:b.value,"onUpdate:modelValue":u[2]||(u[2]=n=>b.value=n)},{default:s(()=>[a(R,null,{default:s(()=>[a(z,null,{default:s(()=>[o("h3",re,"~~~~~ "+t(l.$t("orderid"))+" :"+t($._id)+" ~~~~~",1)]),_:1}),a(W,null,{default:s(()=>[a(v,{class:"d-none d-md-flex"},{default:s(()=>[a(i,{cols:"12",md:"5"},{default:s(()=>[o("span",ue,t(l.$t("product")),1)]),_:1}),a(i,{cols:"12",md:"2"},{default:s(()=>[o("span",ce,t(l.$t("singleprice")),1)]),_:1}),a(i,{cols:"12",md:"2"},{default:s(()=>[o("span",fe,t(l.$t("amount")),1)]),_:1}),a(i,{cols:"12",md:"3"},{default:s(()=>[o("span",_e,t(l.$t("totalprice")),1)]),_:1})]),_:1}),a(w,{class:"d-none d-md-block mb-1"}),(r(!0),f(V,null,A(c[$.idx].products,n=>(r(),h(v,{key:n._id},{default:s(()=>[a(i,{cols:"12",md:"5"},{default:s(()=>[o("span",{class:"d-none d-md-block text-brown",onClick:_=>m(g).push("/product/"+n.product._id),style:{cursor:"pointer"}},t(n.product.name),9,pe),o("span",{class:"d-md-none text-h6 text-brown",onClick:_=>m(g).push("/product/"+n.product._id),style:{cursor:"pointer"}},[o("b",null,t(n.product.name),1)],8,ve)]),_:2},1024),a(i,{cols:"4",md:"2"},{default:s(()=>[o("span",me,t(l.$t("singleprice"))+" : ",1),o("span",he,"NT. "+t(n.product.price),1)]),_:2},1024),a(i,{cols:"4",md:"2"},{default:s(()=>[o("span",ge,t(l.$t("amount"))+" : ",1),o("span",be,t(n.quantity),1)]),_:2},1024),a(i,{cols:"4",md:"3"},{default:s(()=>[o("span",$e,t(l.$t("totalprice"))+" : ",1),o("span",ke,"NT. "+t(n.product.price*n.quantity),1)]),_:2},1024),a(w,{class:"d-md-none"})]),_:2},1024))),128)),a(w,{class:"d-none d-md-block"})]),_:1}),a(j,null,{default:s(()=>[a(D,{color:"brown",block:"",onClick:u[1]||(u[1]=n=>b.value=!1)},{default:s(()=>[E(t(l.$t("close")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),C.value?(r(),h(H,{key:0})):U("",!0)],64))}};export{Ve as default};