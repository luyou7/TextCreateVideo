import{l as i,a as m}from"./url-25a5bb11.js";/* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                  *//* empty css                  */import{G as r,H as E,_ as v,r as y,o as F,b as B,f as t,w as s,e as d,F as g,P as x,g as n,p as h,k as A,T as S,S as k,I as C}from"./index-b6941629.js";const I={data(){return{form:{video_type:""},update:!0}},mounted(){i(m.config_system,"get").then(o=>{this.form=o.data.data})},methods:{onSubmit(o){i(m.config_system,"post",o).then(e=>{r({title:"保存成功",message:E("i",{style:"color: red"},e.data.message),type:"success"}),this.form=e.data.data}).catch(e=>{r({title:"错误",message:e.message,type:"error"})})}}};const V=o=>(h("data-v-87d6fb2c"),o=o(),A(),o),D={class:"box"},N={class:"minbox"},w=V(()=>d("br",null,null,-1));function T(o,e,G,H,u,c){const f=y("spen"),a=S,b=k,_=x,p=C;return F(),B(g,null,[t(f,null,{default:s(()=>[n("参数配置")]),_:1}),d("div",D,[d("div",N,[t(_,{label:"图片切换类型"},{default:s(()=>[t(b,{modelValue:u.form.video_type,"onUpdate:modelValue":e[0]||(e[0]=l=>u.form.video_type=l),disabled:u.update},{default:s(()=>[t(a,{label:"默认样式",value:"默认样式"}),t(a,{label:"向上移动",value:"向上移动"}),t(a,{label:"渐入渐出",value:"渐入渐出"})]),_:1},8,["modelValue","disabled"])]),_:1})]),w,t(_,null,{default:s(()=>[t(p,{type:"info",class:"my_button",onClick:e[1]||(e[1]=l=>u.update=!1)},{default:s(()=>[n("修改")]),_:1}),t(p,{type:"primary",class:"my_button",onClick:e[2]||(e[2]=l=>c.onSubmit(u.form))},{default:s(()=>[n("保存")]),_:1})]),_:1})])],64)}const J=v(I,[["render",T],["__scopeId","data-v-87d6fb2c"]]);export{J as default};
