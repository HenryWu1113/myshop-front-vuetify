import{J as T,ap as j,r as B,K as v,z as C,o as p,c as V,F,M as U,b as e,w as s,V as y,a2 as P,a1 as z,a as c,a5 as D,S as R,O as E,Z as I,N as m,e as o,L as d,D as f,a0 as b,d as L,aE as A,Q as J,aF as k,R as K}from"./index.d87cfa0f.js";import"./index.f2a52509.js";import{v as O}from"./index.882724bf.js";import"./isEmail.cc9a5211.js";const Q={class:"MyContainer"},W=c("h1",{class:"text-h2 text-center text-brown font-weight-bold mt-10"},"\u8CFC\u7269\u8ECA",-1),Z=["onClick"],G={class:"text-h6 text-deep-orange"},H={class:"ms-3 me-3 text-h6"},X={class:"text-h6 text-deep-orange"},Y={key:1,class:"text-h1 text-center mt-10"},ee={class:"text-h6 text-red"},te=K(" \u78BA\u8A8D\u4E26\u9001\u51FA "),ce={__name:"CartView",setup(se){const g=T(),w=j(),{updateCart:q,checkout:N}=w,_=B(!1),n=v([]),r=v({receiver:"",cellphone:"",address:""}),u=v({required(l){return!!l||"\u5FC5\u586B"},isMobilePhone(l){return O.exports.isMobilePhone(l,"zh-TW")||"\u624B\u6A5F\u865F\u78BC\u683C\u5F0F\u932F\u8AA4"}}),S=C(()=>n.reduce((l,a)=>l+a.product.price*a.quantity,0)),$=C(()=>n.length>0&&!n.some(l=>!l.product.sell)),h=async(l,a)=>{await q({product:n[l].product._id,quantity:a})&&(a===0?n.splice(l,1):n[l].quantity=a)},M=async()=>{!_.value||(N({receiver:r.receiver,cellphone:r.cellphone,address:r.address}),r.receiver="",r.cellphone="",r.address="")};return(async()=>{try{const{data:l}=await D.get("/users/cart");n.push(...l.result)}catch{R.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(l,a)=>(p(),V("div",Q,[W,n.length>0?(p(!0),V(F,{key:0},U(n,(t,x)=>(p(),E(y,{class:A(["mt-4",{"bg-error":!t.product.sell}]),key:t._id},{default:s(()=>[e(o,{cols:"12",md:""},{default:s(()=>[e(I,{src:t.product.image,onClick:i=>m(g).push(`/product/${t.product._id}`),style:{cursor:"pointer"}},null,8,["src","onClick"])]),_:2},1024),e(o,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:s(()=>[c("h2",{class:"text-brown",onClick:i=>m(g).push(`/product/${t.product._id}`),style:{cursor:"pointer"}},d(t.product.name),9,Z)]),_:2},1024),e(o,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:s(()=>[c("span",G,"NT. "+d(t.product.price),1)]),_:2},1024),e(o,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:s(()=>[e(f,{icon:"",variant:"text",onClick:i=>h(x,t.quantity-1),disabled:t.quantity<2},{default:s(()=>[e(b,{icon:"mdi-minus",color:"brown"})]),_:2},1032,["onClick","disabled"]),c("span",H,d(t.quantity),1),e(f,{icon:"",variant:"text",onClick:i=>h(x,t.quantity+1)},{default:s(()=>[e(b,{icon:"mdi-plus",color:"brown"})]),_:2},1032,["onClick"])]),_:2},1024),e(o,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:s(()=>[c("span",X,"NT. "+d(t.product.price*t.quantity),1)]),_:2},1024),e(o,{cols:"12",md:"",class:"d-flex align-center justify-center text-center"},{default:s(()=>[e(f,{icon:"",variant:"text",color:"red",onClick:i=>h(x,0)},{default:s(()=>[e(b,{icon:"mdi-trash-can-outline"})]),_:2},1032,["onClick"])]),_:2},1024),e(L,{class:"d-none d-md-block"})]),_:2},1032,["class"]))),128)):(p(),V("h1",Y,"\u6C92\u6709\u5546\u54C1\u54E6")),e(y,null,{default:s(()=>[e(J),e(o,{cols:"12",md:"3",class:"text-center mt-10"},{default:s(()=>[c("span",ee,"\u7E3D\u50F9 : NT."+d(m(S)),1)]),_:1})]),_:1}),e(z,{modelValue:_.value,"onUpdate:modelValue":a[3]||(a[3]=t=>_.value=t),onSubmit:P(M,["prevent"])},{default:s(()=>[e(y,null,{default:s(()=>[e(o,{cols:"12",md:"6"},{default:s(()=>[e(k,{modelValue:r.receiver,"onUpdate:modelValue":a[0]||(a[0]=t=>r.receiver=t),type:"text",label:"\u6536\u4EF6\u8005\u59D3\u540D",placeholder:"\u8ACB\u8F38\u5165\u6536\u4EF6\u8005\u59D3\u540D",counter:"10",maxlength:"10",rules:[u.required],variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12",md:"6"},{default:s(()=>[e(k,{modelValue:r.cellphone,"onUpdate:modelValue":a[1]||(a[1]=t=>r.cellphone=t),type:"text",label:"\u6536\u4EF6\u8005\u96FB\u8A71",placeholder:"\u8ACB\u8F38\u5165\u6536\u4EF6\u8005\u96FB\u8A71",rules:[u.required,u.isMobilePhone],variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:s(()=>[e(k,{modelValue:r.address,"onUpdate:modelValue":a[2]||(a[2]=t=>r.address=t),type:"text",label:"\u6536\u4EF6\u5730\u5740",placeholder:"\u8ACB\u8F38\u5165\u6536\u4EF6\u5730\u5740",rules:[u.required],variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12",md:"2",class:"ma-auto"},{default:s(()=>[e(f,{color:"warning",block:"",variant:"outlined",type:"submit",disabled:!m($)},{default:s(()=>[te]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]))}};export{ce as default};
