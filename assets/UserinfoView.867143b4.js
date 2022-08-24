import{ap as F,ay as z,r as x,K as m,o as D,c as T,a as i,b as a,w as n,V as w,$ as B,a5 as A,S as N,e as u,L as p,D as _,a1 as R,a2 as $,a3 as E,as as M,d as j,a4 as I,at as K,aF as f,au as L,Q,R as v}from"./index.d87cfa0f.js";import"./index.f2a52509.js";import{v as Z}from"./index.882724bf.js";import{V as q}from"./VFileInput.059cb2b6.js";import"./isEmail.cc9a5211.js";var G="./assets/mango_cartoon.ee6a11ae.png",H="./assets/grass_cartoon.7cae4f84.png";const J={id:"userinfo_view"},O={class:"MyContainer"},P=i("h1",{class:"text-h2 text-center text-brown font-weight-bold mt-10 mb-10"},"\u500B\u4EBA\u8CC7\u6599",-1),W={class:"user_info_card ps-5 pe-5"},X=i("img",{src:G,class:"mango d-none d-md-block"},null,-1),Y=i("img",{src:H,class:"grass d-none d-lg-block"},null,-1),ee=["src"],ae={class:"user_info"},le={class:"user_info"},te={class:"user_info"},ne=v("\u7DE8\u8F2F\u500B\u4EBA\u8CC7\u6599"),oe=i("h1",{class:"text-center mt-3 mb-3"},"\u500B\u4EBA\u8CC7\u6599",-1),se=v("\u53D6\u6D88"),ie=v("\u78BA\u5B9A"),fe={__name:"UserinfoView",setup(ue){const V=F(),{editUser:y}=V,{nickname:g,email:k,account:h,avatar:C}=z(V),r=x(!1),d=x(!1),s=m({account:"",email:"",nickname:"",avatar:[]}),o=m({account:"",email:"",nickname:"",avatar:[]}),c=m({account:[e=>!!e||"\u5E33\u865F\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],nickname:[e=>!!e||"\u66B1\u7A31\u5FC5\u586B",e=>e&&e.length<=10||"\u66B1\u7A31\u9577\u5EA6\u4E0D\u5F97\u8D85\u904E 10 \u500B\u5B57"],email:[e=>!!e||"\u96FB\u5B50\u4FE1\u7BB1\u5FC5\u586B",e=>Z.exports.isEmail(e)||"\u96FB\u5B50\u4FE1\u7BB1\u683C\u5F0F\u932F\u8AA4"],size:[e=>{var t,l,b;return!e||!e.length||((l=(t=e[0])==null?void 0:t.type)==null?void 0:l.includes("image"))&&((b=e[0])==null?void 0:b.size)<1024*1024||"\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26"}]}),U=()=>{r.value=!0,o.account=h.value,o.email=k.value,o.nickname=g.value,o.avatar=[]},S=async()=>{if(!d.value)return;const e=new FormData;for(const l in o)["account"].includes(l)||(l==="avatar"?e.append("image",o[l][0]):e.append(l,o[l]));const t=await y(e);console.log(e),t&&(s.account=h.value,s.email=k.value,s.nickname=g.value,s.avatar=C.value),r.value=!1};return(async()=>{try{const{data:e}=await A.get("/users");o.account=e.result.account,o.email=e.result.email,o.nickname=e.result.nickname,s.account=e.result.account,s.email=e.result.email,s.nickname=e.result.nickname,s.avatar=e.result.avatar,console.log(s)}catch(e){console.log(e),N.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u500B\u4EBA\u8CC7\u6599"})}})(),(e,t)=>(D(),T("div",J,[i("div",O,[P,i("div",W,[X,Y,a(w,null,{default:n(()=>[a(u,{cols:"12",md:"5",lg:"6"},{default:n(()=>[i("img",{src:s.avatar,class:"info_pic"},null,8,ee)]),_:1}),a(u,{cols:"12",md:"7",lg:"6",class:"d-flex flex-column justify-center"},{default:n(()=>[i("span",ae,"\u5E33\u865F : "+p(s.account),1),i("span",le,"\u66B1\u7A31 : "+p(s.nickname),1),i("span",te,"\u4FE1\u7BB1 : "+p(s.email),1)]),_:1}),a(u,{cols:"12",class:"text-center"},{default:n(()=>[a(_,{variant:"outlined",color:"deep-orange",onClick:U,class:"mb-5"},{default:n(()=>[ne]),_:1})]),_:1})]),_:1}),a(B,{modelValue:r.value,"onUpdate:modelValue":t[6]||(t[6]=l=>r.value=l),persistent:""},{default:n(()=>[a(R,{onSubmit:$(S,["prevent"]),modelValue:d.value,"onUpdate:modelValue":t[5]||(t[5]=l=>d.value=l)},{default:n(()=>[a(E,null,{default:n(()=>[a(M,null,{default:n(()=>[oe]),_:1}),a(j),a(I,null,{default:n(()=>[a(K,null,{default:n(()=>[a(w,null,{default:n(()=>[a(u,{cols:"12"},{default:n(()=>[a(f,{type:"account",label:"\u5E33\u865F",placeholder:"\u8ACB\u8F38\u5165\u5E33\u865F",counter:"20",maxlength:"20",modelValue:o.account,"onUpdate:modelValue":t[0]||(t[0]=l=>o.account=l),rules:c.account,"append-inner-icon":"mdi-account-outline",variant:"outlined",disabled:""},null,8,["modelValue","rules"])]),_:1}),a(u,{cols:"12"},{default:n(()=>[a(f,{label:"\u66B1\u7A31",placeholder:"\u8ACB\u8F38\u5165\u66B1\u7A31",counter:"10",maxlength:"10",modelValue:o.nickname,"onUpdate:modelValue":t[1]||(t[1]=l=>o.nickname=l),rules:c.nickname,"append-inner-icon":"mdi-emoticon-happy-outline",variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),a(u,{cols:"12"},{default:n(()=>[a(f,{type:"email",label:"\u96FB\u5B50\u4FE1\u7BB1",placeholder:"\u8ACB\u8F38\u5165\u96FB\u5B50\u4FE1\u7BB1",modelValue:o.email,"onUpdate:modelValue":t[2]||(t[2]=l=>o.email=l),rules:c.email,"append-inner-icon":"mdi-email-outline",variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),a(u,{cols:"12"},{default:n(()=>[a(q,{modelValue:o.avatar,"onUpdate:modelValue":t[3]||(t[3]=l=>o.avatar=l),"show-size":"",accept:"image/*",label:"\u5927\u982D\u8CBC",rules:c.size,variant:"outlined","prepend-icon":"","append-inner-icon":"mdi-link-variant"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1}),a(L,null,{default:n(()=>[a(Q),a(_,{color:"brown",onClick:t[4]||(t[4]=l=>r.value=!1)},{default:n(()=>[se]),_:1}),a(_,{type:"submit",color:"warning"},{default:n(()=>[ie]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit","modelValue"])]),_:1},8,["modelValue"])])])]))}};export{fe as default};
