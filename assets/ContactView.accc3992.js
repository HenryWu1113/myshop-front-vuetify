import{i as E,Z as M,r as p,_ as B,$ as F,a0 as L,E as A,d as e,a1 as H,a2 as N,o as T,A as k,N as I,C as R,a as U,c as j,b as t,w as s,V as $,a3 as q,F as D,t as i,f,a4 as v,a5 as O,a6 as Y,H as z,P as W,W as Z,a7 as G,a8 as J,g as K,a9 as Q,S as y}from"./index.790d3547.js";import{_ as X}from"./Logo.567c4b90.js";import{V as tt}from"./VTextarea.2bba5e16.js";function et(r){return Math.floor(Math.abs(r))*Math.sign(r)}const at=E({name:"VParallax",props:{scale:{type:[Number,String],default:1.3}},setup(r,d){let{slots:u}=d;const{intersectionRef:c,isIntersecting:m}=M(),_=p();B(()=>{var l;c.value=(l=_.value)==null?void 0:l.$el});let a;F(m,l=>{l?(a=N(c.value),a=a===document.scrollingElement?document:a,a.addEventListener("scroll",o,{passive:!0}),o()):a.removeEventListener("scroll",o)}),L(()=>{var l;(l=a)==null||l.removeEventListener("scroll",o)});let n=-1;function o(){!m.value||(cancelAnimationFrame(n),n=requestAnimationFrame(()=>{var l,g,b;const V=((l=_.value)==null?void 0:l.$el).querySelector(".v-img__img");if(!V)return;const h=c.value.getBoundingClientRect(),w=(g=a.clientHeight)!=null?g:window.innerHeight,x=(b=a.scrollTop)!=null?b:window.scrollY,C=h.top+x,P=(x+w-C)/(h.height+w),S=et((h.height*+r.scale-h.height)*(-P+.5));V.style.setProperty("transform",`translateY(${S}px) scale(${r.scale})`)}))}return A(()=>e(H,{class:["v-parallax",{"v-parallax--active":m.value}],ref:_,cover:!0,onLoadstart:o,onLoad:o},u)),{}}}),ot={id:"contact_view"},st={class:"d-flex flex-column fill-height justify-center align-center text-white"},nt={class:"text-h1 mb-4 pt-6 pb-6 ps-6 pe-6 font-weight-bold contact_bg w-100 text-center animate__animated animate__flip"},lt={class:"MyContainer"},ct={href:"tel:0910968708"},rt={class:"contact_box1"},it={class:""},dt=t("span",{class:""},"0911222333",-1),ut=t("h1",{class:""},"Line",-1),mt=t("span",{class:""},"id : goodtoeat123",-1),_t={href:"mailto:service@wlsfarm.com.tw"},ft={class:"contact_box3"},ht={class:""},vt=t("span",{class:""},"aaaa@gmail.com",-1),pt={class:"MyContainer"},gt={class:"text-h2 text-brown font-weight-bold","data-aos":"fade-down","data-aos-duration":"1000","data-aos-offset":"150","data-aos-once":"true"},bt={class:"text-brown","data-aos":"fade","data-aos-duration":"1000","data-aos-offset":"150","data-aos-once":"true"},Vt={class:"contact_btn_group"},wt=t("img",{src:X,style:{width:"300px"}},null,-1),Ct={__name:"ContactView",setup(r){T(()=>{k.init()});const d=p(!1),u=p(!1),c=I({comment:""}),m=R(()=>c.comment.length>0),_=async()=>{if(!!d.value)try{await Q.post("/feedbacks",c),y.fire({icon:"success",title:"\u6210\u529F",text:"\u8A0A\u606F\u5DF2\u50B3\u9001"}),c.comment=""}catch{y.fire({icon:"error",title:"\u5931\u6557",text:"\u9001\u51FA\u8A0A\u606F\u5931\u6557"})}};return(a,n)=>(U(),j(D,null,[t("div",ot,[e(at,{class:"mb-15",src:"https://shoplineimg.com/60e7f216ed3d3c0024770f58/610d117bbbb7ce0026b0af3b/800x.jpg?",cover:"",height:"600"},{default:s(()=>[t("div",st,[t("h1",nt,i(a.$t("contact")),1)])]),_:1}),t("div",lt,[e($,{class:"mt-7","data-aos":"fade-down","data-aos-duration":"1000","data-aos-offset":"150"},{default:s(()=>[e(f,{cols:"12",lg:"4"},{default:s(()=>[t("a",ct,[t("div",rt,[e(v,{class:"contact_icon",icon:"mdi-phone"}),t("h1",it,i(a.$t("phone")),1),dt])])]),_:1}),e(f,{cols:"12",lg:"4"},{default:s(()=>[t("div",{class:"contact_box2",onClick:n[0]||(n[0]=o=>u.value=!0)},[e(v,{class:"contact_icon",icon:"mdi-chat-outline"}),ut,mt])]),_:1}),e(f,{cols:"12",lg:"4"},{default:s(()=>[t("a",_t,[t("div",ft,[e(v,{class:"contact_icon",icon:"mdi-email-outline"}),t("h1",ht,i(a.$t("mail")),1),vt])])]),_:1})]),_:1})]),t("div",pt,[e($,null,{default:s(()=>[e(f,{class:"text-center mt-10",cols:"12"},{default:s(()=>[t("h1",gt,i(a.$t("message")),1),t("span",bt,i(a.$t("messagehint")),1)]),_:1}),e(f,{cols:"12",class:"text-center"},{default:s(()=>[e(O,{modelValue:d.value,"onUpdate:modelValue":n[2]||(n[2]=o=>d.value=o),onSubmit:Y(_,["prevent"])},{default:s(()=>[e(tt,{modelValue:c.comment,"onUpdate:modelValue":n[1]||(n[1]=o=>c.comment=o),name:"\u56DE\u994B\u8A0A\u606F",label:"\u56DE\u994B\u8A0A\u606F",counter:"",maxlength:"500",placeholder:"\u8F38\u5165\u8A0A\u606F",variant:"outlined","prepend-inner-icon":"mdi-comment",clearable:"","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-offset":"150","data-aos-once":"true"},null,8,["modelValue"]),t("div",Vt,[e(z,{variant:"outlined",color:"orange",type:"submit",disabled:!W(m)},{default:s(()=>[Z(i(a.$t("send")),1)]),_:1},8,["disabled"])])]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),e(q,{modelValue:u.value,"onUpdate:modelValue":n[3]||(n[3]=o=>u.value=o)},{default:s(()=>[e(G,null,{default:s(()=>[e(J,null,{default:s(()=>[wt]),_:1})]),_:1})]),_:1},8,["modelValue"])]),e(K)],64))}};export{Ct as default};