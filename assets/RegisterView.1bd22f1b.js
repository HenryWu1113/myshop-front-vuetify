import{aA as h,M as y,r as m,N as _,a as k,Q as S,w as l,a8 as C,a7 as U,d as a,aw as $,b as V,t as f,aa as A,ax as R,V as T,f as d,aH as u,H as g,W as v,ay as B,U as I,a9 as N,S as E,T as w,aE as F,aF as z}from"./index.7f18be1d.js";import{_ as H}from"./Logo.567c4b90.js";import{d as M}from"./isEmail.8969ee39.js";import"./assertString.31c1207f.js";const Z=n=>(F("data-v-a543f3d8"),n=n(),z(),n),j=Z(()=>V("img",{class:"register-logo",src:H},null,-1)),D={class:"text-h4 text-brown font-weight-bold"},Q={class:"d-flex justify-center"},W={__name:"RegisterView",setup(n){const x=y(),r=m(!1),c=m(!1),p=m(!1),s=_({account:"",password:"",nickname:"",email:""}),i=_({account:[e=>!!e||"\u5E33\u865F\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[e=>!!e||"\u5BC6\u78BC\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],nickname:[e=>!!e||"\u66B1\u7A31\u5FC5\u586B",e=>e&&e.length<=10||"\u66B1\u7A31\u9577\u5EA6\u4E0D\u5F97\u8D85\u904E 10 \u500B\u5B57"],email:[e=>!!e||"\u96FB\u5B50\u4FE1\u7BB1\u5FC5\u586B",e=>M(e)||"\u96FB\u5B50\u4FE1\u7BB1\u683C\u5F0F\u932F\u8AA4"]}),b=async()=>{if(!!c.value){p.value=!0;try{await E.post("/users",s),await w.fire({icon:"success",title:"\u6210\u529F",text:"\u8A3B\u518A\u6210\u529F"}),x.push("/")}catch(e){w.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError&&e.response.data?e.response.data.message:"\u767C\u751F\u932F\u8AA4"})}p.value=!1}};return(e,t)=>(k(),S(U,{modelValue:c.value,"onUpdate:modelValue":t[5]||(t[5]=o=>c.value=o),onSubmit:C(b,["prevent"])},{default:l(()=>[a(N,{class:"ma-auto","max-width":"800"},{default:l(()=>[a($,{class:"text-center mt-5"},{default:l(()=>[j,V("p",D,f(e.$t("register")),1)]),_:1}),a(A,null,{default:l(()=>[a(R,null,{default:l(()=>[a(T,null,{default:l(()=>[a(d,{cols:"12"},{default:l(()=>[a(u,{type:"account",label:"\u5E33\u865F",placeholder:"\u8ACB\u8F38\u5165\u5E33\u865F",counter:"20",maxlength:"20",modelValue:s.account,"onUpdate:modelValue":t[0]||(t[0]=o=>s.account=o),rules:i.account,clearable:"","clear-icon":"mdi-delete","append-icon":"mdi-account-outline",variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12"},{default:l(()=>[a(u,{type:r.value?"text":"password",label:"\u5BC6\u78BC",placeholder:"\u8ACB\u8F38\u5165\u5E33\u865F",counter:"20",maxlength:"20",modelValue:s.password,"onUpdate:modelValue":t[1]||(t[1]=o=>s.password=o),rules:i.password,clearable:"","clear-icon":"mdi-delete","append-icon":r.value?"mdi-eye":"mdi-eye-off","onClick:append":t[2]||(t[2]=o=>r.value=!r.value),variant:"outlined"},null,8,["type","modelValue","rules","append-icon"])]),_:1}),a(d,{cols:"12"},{default:l(()=>[a(u,{label:"\u66B1\u7A31",placeholder:"\u8ACB\u8F38\u5165\u66B1\u7A31",counter:"10",maxlength:"10",modelValue:s.nickname,"onUpdate:modelValue":t[3]||(t[3]=o=>s.nickname=o),rules:i.nickname,clearable:"","clear-icon":"mdi-delete","append-icon":"mdi-emoticon-happy-outline",variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12"},{default:l(()=>[a(u,{type:"email",label:"\u96FB\u5B50\u4FE1\u7BB1",placeholder:"\u8ACB\u8F38\u5165\u96FB\u5B50\u4FE1\u7BB1",modelValue:s.email,"onUpdate:modelValue":t[4]||(t[4]=o=>s.email=o),rules:i.email,clearable:"","clear-icon":"mdi-delete","append-icon":"mdi-email-outline",variant:"outlined"},null,8,["modelValue","rules"])]),_:1})]),_:1}),V("div",Q,[a(g,{color:"orange",variant:"outlined",type:"submit",loading:p.value},{default:l(()=>[v(f(e.$t("register")),1)]),_:1},8,["loading"])])]),_:1})]),_:1}),a(B,null,{default:l(()=>[a(I),a(g,{color:"blue darken-3",to:"/login"},{default:l(()=>[v(f(e.$t("gotologin")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"]))}};var L=h(W,[["__scopeId","data-v-a543f3d8"]]);export{L as default};
