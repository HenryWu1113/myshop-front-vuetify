import{Y as d,N as r,a as l,c,b as o,d as a,a4 as _,t as e,w as h,H as u,a9 as m,S as f,W as p,X as v}from"./index.790d3547.js";const b={id:"payinfo_view"},w={class:"MyContainer"},g={class:"order_slogan"},$={class:"mt-2 font-weight-bold"},y={class:"mt-2"},V={class:"order_info"},k={class:"mb-5 order_info_title"},B={class:"order_info_content"},N=o("h1",null,"\u83EF\u5357\u9280\u884C",-1),S={class:"order_info_content"},D=o("h1",null,"777",-1),X={class:"order_info_content"},C={class:"order_info_content"},L=o("h1",null,"111111111111",-1),A={class:"order_info_content"},E={class:"home_button"},R={__name:"PayinfoView",setup(H){const s=v(),i=d(),n=r({_id:"",deadline:""});return(async()=>{try{s.show({color:"orange",loader:"bars",width:100,height:100});const{data:t}=await m.get("/orders/"+i.params.id);n._id=t.result._id,n.deadline=t.result.deadline,s.hide()}catch{f.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u8CFC\u55AE\u5931\u6557"}),router.go(-1)}})(),(t,M)=>(l(),c("div",b,[o("div",w,[o("div",g,[a(_,{icon:"mdi-thumb-up-outline"}),o("h1",$,e(t.$t("thanks")),1),o("p",y,e(t.$t("remind")),1)]),o("div",V,[o("h1",k,e(t.$t("painfo")),1),o("div",B,[o("h1",null,e(t.$t("bankname"))+" : ",1),N]),o("div",S,[o("h1",null,e(t.$t("banknumber"))+" : ",1),D]),o("div",X,[o("h1",null,e(t.$t("accountname"))+" : ",1),o("h1",null,"XX "+e(t.$t("company")),1)]),o("div",C,[o("h1",null,e(t.$t("accountnumber"))+" : ",1),L]),o("div",A,[o("h1",null,e(t.$t("deadline"))+" : ",1),o("h1",null,e(new Date(n.deadline).toLocaleDateString())+" 23:00:00",1)])]),o("div",E,[a(u,{"prepend-icon":"mdi-home",variant:"outlined",color:"brown",to:"/"},{default:h(()=>[p(e(t.$t("gohome")),1)]),_:1})])])]))}};export{R as default};