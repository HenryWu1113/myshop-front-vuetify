import{i as n,j as r,p as b,q as h,y as v,b1 as m,E as u,d as a,aq as f}from"./index.1dc33c45.js";const g=n({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],...r(),...b(),...h()},setup(t,s){let{slots:e}=s;const{themeClasses:i}=v(t),{densityClasses:d}=m(t);return u(()=>{var l,o;return a(t.tag,{class:["v-table",{"v-table--fixed-height":!!t.height,"v-table--fixed-header":t.fixedHeader,"v-table--fixed-footer":t.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom},i.value,d.value]},{default:()=>[(l=e.top)==null?void 0:l.call(e),e.default&&a("div",{class:"v-table__wrapper",style:{height:f(t.height)}},[a("table",null,[e.default()])]),(o=e.bottom)==null?void 0:o.call(e)]})}),{}}});export{g as V};