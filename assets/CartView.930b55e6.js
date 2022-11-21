import{r as V,o as R,A as z,M as D,a4 as E,N as k,C as S,a as c,c as u,b as d,t as i,F as B,O as H,Q as _,w as a,V as f,d as e,a9 as L,a8 as O,R as M,ac as W,Z as T,T as w,a2 as Q,P as h,f as o,H as g,a7 as C,e as X,aH as Z,U as G,aI as $,W as J,X as K}from"./index.1dc33c45.js";import{v as Y}from"./index.8d33bd44.js";import"./assertString.31c1207f.js";import"./isEmail.4c042827.js";import"./isMobilePhone.1f4ee56f.js";var ee="./assets/pngwingtw.f95cd9bd.png",te="./assets/pngwingen.7d11c938.png",ae="./assets/pngwingjp.227d60f4.png";const se={id:"cart_view"},le={class:"MyContainer"},re={class:"text-h2 text-center text-brown font-weight-bold mt-10","data-aos":"fade-down","data-aos-duration":"1000","data-aos-offset":"150"},oe=["onClick"],ne={class:"text-h6 text-deep-orange"},ce={class:"ms-3 me-3 text-h6"},de={class:"text-h6 text-deep-orange"},ie={key:0,src:ee,class:"animate__animated animate__rubberBand"},ue={key:1,src:te,class:"animate__animated animate__tada"},pe={key:2,src:ae,class:"animate__animated animate__heartBeat"},me={class:"text-h6 text-red"},be={__name:"CartView",setup(_e){const q=V(!1),v=V(!1);R(()=>{z.init()});const N=D(),j=E(),{updateCart:U,checkout:F}=j,y=V(!1),n=k([]),r=k({receiver:"",cellphone:"",address:""}),p=k({required(s){return!!s||"\u5FC5\u586B"},isMobilePhone(s){return Y.exports.isMobilePhone(s,"zh-TW")||"\u624B\u6A5F\u865F\u78BC\u683C\u5F0F\u932F\u8AA4"}}),P=S(()=>n.reduce((s,l)=>s+l.product.price*l.quantity,0)),I=S(()=>n.length>0&&!n.some(s=>!s.product.sell)),x=async(s,l)=>{await U({product:n[s].product._id,quantity:l})&&(l===0?n.splice(s,1):n[s].quantity=l)},A=async()=>{!y.value||F({receiver:r.receiver,cellphone:r.cellphone,address:r.address})};return(async()=>{try{r.receiver="",r.cellphone="",r.address="",v.value=!0;const{data:s}=await W.get("/users/cart");n.push(...s.result),v.value=!1,q.value=!0}catch{T.global.locale==="tw"?w.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"}):T.global.locale==="en"?w.fire({icon:"error",title:"Failed",text:"Server Error"}):w.fire({icon:"error",title:"\u5931\u6557",text:"\u30B5\u30FC\u30D0\u30FC\u30A8\u30E9\u30FC"})}})(),(s,l)=>(c(),u(B,null,[d("div",se,[d("div",le,[d("h1",re,i(s.$t("cart")),1),n.length>0?(c(!0),u(B,{key:0},H(n,(t,b)=>(c(),_(f,{class:Z(["mt-4",{"bg-grey-lighten-1 ":!t.product.sell}]),key:t._id},{default:a(()=>[e(o,{cols:"12",md:""},{default:a(()=>[e(Q,{src:t.product.image,onClick:m=>h(N).push(`/product/${t.product._id}`),style:{cursor:"pointer"}},null,8,["src","onClick"])]),_:2},1024),e(o,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:a(()=>[d("h2",{class:"text-brown",onClick:m=>h(N).push(`/product/${t.product._id}`),style:{cursor:"pointer"}},i(t.product.name),9,oe)]),_:2},1024),e(o,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:a(()=>[d("span",ne,"NT. "+i(t.product.price),1)]),_:2},1024),e(o,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:a(()=>[e(g,{icon:"",variant:"text",onClick:m=>x(b,t.quantity-1),disabled:t.quantity<2},{default:a(()=>[e(C,{icon:"mdi-minus",color:"brown"})]),_:2},1032,["onClick","disabled"]),d("span",ce,i(t.quantity),1),e(g,{icon:"",variant:"text",onClick:m=>x(b,t.quantity+1)},{default:a(()=>[e(C,{icon:"mdi-plus",color:"brown"})]),_:2},1032,["onClick"])]),_:2},1024),e(o,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:a(()=>[d("span",de,"NT. "+i(t.product.price*t.quantity),1)]),_:2},1024),e(o,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:a(()=>[e(g,{icon:"",variant:"text",color:"red",onClick:m=>x(b,0)},{default:a(()=>[e(C,{icon:"mdi-trash-can-outline"})]),_:2},1032,["onClick"])]),_:2},1024),e(X,{class:"d-none d-md-block"})]),_:2},1032,["class"]))),128)):(c(),_(f,{key:1,class:"mt-15"},{default:a(()=>[q.value?(c(),_(o,{key:0,cols:"12",class:"text-center no_product_img"},{default:a(()=>[s.$i18n.locale==="tw"?(c(),u("img",ie)):s.$i18n.locale==="en"?(c(),u("img",ue)):(c(),u("img",pe))]),_:1})):M("",!0)]),_:1})),e(f,null,{default:a(()=>[e(G),e(o,{cols:"12",md:"3",class:"text-center mt-10"},{default:a(()=>[d("span",me,i(s.$t("totalprice"))+" : NT."+i(h(P)),1)]),_:1})]),_:1}),e(O,{modelValue:y.value,"onUpdate:modelValue":l[3]||(l[3]=t=>y.value=t),onSubmit:L(A,["prevent"])},{default:a(()=>[e(f,null,{default:a(()=>[e(o,{cols:"12",md:"6"},{default:a(()=>[e($,{modelValue:r.receiver,"onUpdate:modelValue":l[0]||(l[0]=t=>r.receiver=t),type:"text",label:"\u6536\u4EF6\u8005\u59D3\u540D",placeholder:"\u8ACB\u8F38\u5165\u6536\u4EF6\u8005\u59D3\u540D",counter:"10",maxlength:"10",rules:[p.required],variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12",md:"6"},{default:a(()=>[e($,{modelValue:r.cellphone,"onUpdate:modelValue":l[1]||(l[1]=t=>r.cellphone=t),type:"text",label:"\u6536\u4EF6\u8005\u96FB\u8A71",placeholder:"\u8ACB\u8F38\u5165\u6536\u4EF6\u8005\u96FB\u8A71",rules:[p.required,p.isMobilePhone],variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:a(()=>[e($,{modelValue:r.address,"onUpdate:modelValue":l[2]||(l[2]=t=>r.address=t),type:"text",label:"\u6536\u4EF6\u5730\u5740",placeholder:"\u8ACB\u8F38\u5165\u6536\u4EF6\u5730\u5740",rules:[p.required],variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12",md:"2",class:"ma-auto"},{default:a(()=>[e(g,{color:"warning",block:"",variant:"outlined",type:"submit",disabled:!h(I)},{default:a(()=>[J(i(s.$t("confirmandsend")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])])]),v.value?(c(),_(K,{key:0})):M("",!0)],64))}};export{be as default};