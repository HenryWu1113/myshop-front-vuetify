import{i as M,ab as T,I as U,aJ as q,ac as G,v as O,u as Q,C as r,aK as R,r as p,E as W,ad as X,ae as Y,af as Z,d as a,ag as ee,J as h,F as V,aL as le,ak as te,al as ae,am as ne,L as ue}from"./index.790d3547.js";const ie=M({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,hint:String,persistentHint:Boolean,placeholder:String,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...T(),prependIcon:{type:U,default:"$file"},modelValue:{type:Array,default:()=>[],validator:e=>q(e).every(f=>f!=null&&typeof f=="object")},...G({clearable:!0})},emits:{"click:clear":e=>!0,"click:control":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:w,emit:S,slots:n}=f;const{t:k}=O(),u=Q(e,"modelValue"),C=r(()=>typeof e.showSize!="boolean"?e.showSize:void 0),I=r(()=>{var l;return((l=u.value)!=null?l:[]).reduce((t,o)=>{let{size:d=0}=o;return t+d},0)}),F=r(()=>R(I.value,C.value)),g=r(()=>{var l;return((l=u.value)!=null?l:[]).map(t=>{const{name:o="",size:d=0}=t;return e.showSize?`${o} (${R(d,C.value)})`:o})}),_=r(()=>{var l,t;const o=(l=(t=u.value)==null?void 0:t.length)!=null?l:0;return e.showSize?k(e.counterSizeString,o,F.value):k(e.counterString,o)}),$=p(),b=p(),c=p(!1),s=p(),A=r(()=>e.messages.length?e.messages:e.persistentHint?e.hint:"");function y(){if(s.value!==document.activeElement){var l;(l=s.value)==null||l.focus()}c.value||(c.value=!0)}function z(l){var t;(t=s.value)==null||t.click(),S("click:control",l)}function N(l){l.stopPropagation(),y(),ue(()=>{u.value=[],s!=null&&s.value&&(s.value.value=""),S("click:clear",l)})}return W(()=>{const l=!!(n.counter||e.counter),t=!!(l||n.details),[o,d]=X(w),[{modelValue:oe,...D}]=Y(e),[L]=Z(e);return a(ae,h({ref:$,modelValue:u.value,"onUpdate:modelValue":v=>u.value=v,class:"v-file-input"},o,D,{"onClick:prepend":z,messages:A.value}),{...n,default:v=>{let{isDisabled:m,isDirty:P,isReadonly:j,isValid:x}=v;return a(ee,h({ref:b,"prepend-icon":e.prependIcon,"onClick:control":z,"onClick:clear":N},L,{active:P.value||c.value,dirty:P.value,focused:c.value,error:x.value===!1}),{...n,default:E=>{let{props:{class:H,...J}}=E;return a(V,null,[a("input",h({ref:s,type:"file",readonly:j.value,disabled:m.value,multiple:e.multiple,name:e.name,onClick:i=>{i.stopPropagation(),y()},onChange:i=>{var B;if(!i.target)return;const K=i.target;u.value=[...(B=K.files)!=null?B:[]]},onFocus:y,onBlur:()=>c.value=!1},J,d),null),u.value.length>0&&a("div",{class:H},[n.selection?n.selection({fileNames:g.value,totalBytes:I.value,totalBytesReadable:F.value}):e.chips?g.value.map(i=>a(le,{key:i,size:"small",color:e.color},{default:()=>[i]})):g.value.join(", ")])])}})},details:t?v=>{var m;return a(V,null,[(m=n.details)==null?void 0:m.call(n,v),l&&a(V,null,[a("span",null,null),a(te,{active:!!u.value.length,value:_.value},n.counter)])])}:void 0})}),ne({},$,b,s)}});export{ie as V};