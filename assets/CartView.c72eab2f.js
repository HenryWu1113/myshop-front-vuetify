import{r as q,o as P,A as F,M as A,as as z,N as x,C as N,a as c,c as u,b as i,t as d,F as D,O as H,Q as V,w as s,V as f,d as e,a6 as I,a5 as L,a9 as O,S as R,a1 as W,P as _,f as r,H as h,a4 as b,e as E,aG as G,U as Q,T as X,aH as k,W as J,X as K}from"./index.790d3547.js";import"./index.d5f82810.js";import{v as Y}from"./index.882724bf.js";import"./isEmail.cbf882b7.js";var Z="./assets/nocarttw.4de2de5e.png",ee="./assets/nocarten.bd936760.png",te="./assets/nocartjp.6ddd5591.png";const se={id:"cart_view"},ae={class:"MyContainer"},oe={class:"text-h2 text-center text-brown font-weight-bold mt-10","data-aos":"fade-down","data-aos-duration":"1000","data-aos-offset":"150"},le=["onClick"],re={class:"text-h6 text-deep-orange"},ne={class:"ms-3 me-3 text-h6"},ce={class:"text-h6 text-deep-orange"},de={key:0,src:Z},ie={key:1,src:ee},ue={key:2,src:te},pe={class:"text-h6 text-red"},ye={__name:"CartView",setup(me){const w=K(),C=q(!1);P(()=>{F.init()});const $=A(),S=z(),{updateCart:M,checkout:T}=S,v=q(!1),n=x([]),l=x({receiver:"",cellphone:"",address:""}),p=x({required(a){return!!a||"\u5FC5\u586B"},isMobilePhone(a){return Y.exports.isMobilePhone(a,"zh-TW")||"\u624B\u6A5F\u865F\u78BC\u683C\u5F0F\u932F\u8AA4"}}),j=N(()=>n.reduce((a,o)=>a+o.product.price*o.quantity,0)),U=N(()=>n.length>0&&!n.some(a=>!a.product.sell)),g=async(a,o)=>{await M({product:n[a].product._id,quantity:o})&&(o===0?n.splice(a,1):n[a].quantity=o)},B=async()=>{!v.value||(T({receiver:l.receiver,cellphone:l.cellphone,address:l.address}),l.receiver="",l.cellphone="",l.address="")};return(async()=>{try{w.show({color:"orange",loader:"bars",width:100,height:100});const{data:a}=await O.get("/users/cart");n.push(...a.result),w.hide(),C.value=!0}catch{R.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(a,o)=>(c(),u("div",se,[i("div",ae,[i("h1",oe,d(a.$t("cart")),1),n.length>0?(c(!0),u(D,{key:0},H(n,(t,y)=>(c(),V(f,{class:G(["mt-4",{"bg-grey-lighten-1 ":!t.product.sell}]),key:t._id},{default:s(()=>[e(r,{cols:"12",md:""},{default:s(()=>[e(W,{src:t.product.image,onClick:m=>_($).push(`/product/${t.product._id}`),style:{cursor:"pointer"}},null,8,["src","onClick"])]),_:2},1024),e(r,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:s(()=>[i("h2",{class:"text-brown",onClick:m=>_($).push(`/product/${t.product._id}`),style:{cursor:"pointer"}},d(t.product.name),9,le)]),_:2},1024),e(r,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:s(()=>[i("span",re,"NT. "+d(t.product.price),1)]),_:2},1024),e(r,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:s(()=>[e(h,{icon:"",variant:"text",onClick:m=>g(y,t.quantity-1),disabled:t.quantity<2},{default:s(()=>[e(b,{icon:"mdi-minus",color:"brown"})]),_:2},1032,["onClick","disabled"]),i("span",ne,d(t.quantity),1),e(h,{icon:"",variant:"text",onClick:m=>g(y,t.quantity+1)},{default:s(()=>[e(b,{icon:"mdi-plus",color:"brown"})]),_:2},1032,["onClick"])]),_:2},1024),e(r,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:s(()=>[i("span",ce,"NT. "+d(t.product.price*t.quantity),1)]),_:2},1024),e(r,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:s(()=>[e(h,{icon:"",variant:"text",color:"red",onClick:m=>g(y,0)},{default:s(()=>[e(b,{icon:"mdi-trash-can-outline"})]),_:2},1032,["onClick"])]),_:2},1024),e(E,{class:"d-none d-md-block"})]),_:2},1032,["class"]))),128)):(c(),V(f,{key:1,class:"mt-15"},{default:s(()=>[C.value?(c(),V(r,{key:0,cols:"12",class:"text-center no_product_img"},{default:s(()=>[a.$i18n.locale==="tw"?(c(),u("img",de)):a.$i18n.locale==="en"?(c(),u("img",ie)):(c(),u("img",ue))]),_:1})):Q("",!0)]),_:1})),e(f,null,{default:s(()=>[e(X),e(r,{cols:"12",md:"3",class:"text-center mt-10"},{default:s(()=>[i("span",pe,d(a.$t("totalprice"))+" : NT."+d(_(j)),1)]),_:1})]),_:1}),e(L,{modelValue:v.value,"onUpdate:modelValue":o[3]||(o[3]=t=>v.value=t),onSubmit:I(B,["prevent"])},{default:s(()=>[e(f,null,{default:s(()=>[e(r,{cols:"12",md:"6"},{default:s(()=>[e(k,{modelValue:l.receiver,"onUpdate:modelValue":o[0]||(o[0]=t=>l.receiver=t),type:"text",label:"\u6536\u4EF6\u8005\u59D3\u540D",placeholder:"\u8ACB\u8F38\u5165\u6536\u4EF6\u8005\u59D3\u540D",counter:"10",maxlength:"10",rules:[p.required],variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:s(()=>[e(k,{modelValue:l.cellphone,"onUpdate:modelValue":o[1]||(o[1]=t=>l.cellphone=t),type:"text",label:"\u6536\u4EF6\u8005\u96FB\u8A71",placeholder:"\u8ACB\u8F38\u5165\u6536\u4EF6\u8005\u96FB\u8A71",rules:[p.required,p.isMobilePhone],variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:s(()=>[e(k,{modelValue:l.address,"onUpdate:modelValue":o[2]||(o[2]=t=>l.address=t),type:"text",label:"\u6536\u4EF6\u5730\u5740",placeholder:"\u8ACB\u8F38\u5165\u6536\u4EF6\u5730\u5740",rules:[p.required],variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"2",class:"ma-auto"},{default:s(()=>[e(h,{color:"warning",block:"",variant:"outlined",type:"submit",disabled:!_(U)},{default:s(()=>[J(d(a.$t("confirmandsend")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])])]))}};export{ye as default};
