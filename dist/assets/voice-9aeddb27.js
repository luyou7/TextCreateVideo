import{l as s,a as l}from"./url-25a5bb11.js";/* empty css                        *//* empty css                  *//* empty css                  *//* empty css                  */import"./el-tooltip-4ed993c7.js";import{d as B,C as n,D as N,o as v,b as h,f as a,w as r,F as T,i as F,g as b,e as L,G as P,S as $,K as j,I as A,L as D,N as G,c as I,T as K}from"./index-b6941629.js";const M=L("br",null,null,-1),X=B({__name:"voice",setup(O){const _=n(),p=n(1),d=n(10),u=n([]),c=n([]),m=n(),f=()=>{c.value.length>0?s(l.book_voice_download,"post",{id_list:c.value}).then(e=>{window.open(l.base+e.data.url)}):P({title:"下载失败",message:"未选中任何数据",type:"error"})},w=e=>{d.value=e},C=e=>{p.value=e},k=e=>{window.open(l.base+e.path)},z=e=>{s(l.book_voice,"get",{},{book_id:e}).then(t=>{u.value=t==null?void 0:t.data})},E=e=>{c.value=e.map(t=>t.id)};return N(()=>{s(l.book_voice,"get").then(e=>{u.value=e==null?void 0:e.data}),s(l.book_class,"get").then(e=>{m.value=e==null?void 0:e.data})}),(e,t)=>{const S=K,V=$,i=j,g=A,y=D,x=G;return v(),h("div",null,[a(V,{modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=o=>_.value=o),class:"m-2",placeholder:"Select",size:"large",onChange:t[1]||(t[1]=o=>z(_.value))},{default:r(()=>[(v(!0),h(T,null,F(m.value,o=>(v(),I(S,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),a(y,{onSelectionChange:E,data:u.value.slice((p.value-1)*d.value,p.value*d.value),border:"",style:{width:"100%"}},{default:r(()=>[a(i,{type:"selection",width:"55"}),a(i,{prop:"id",label:"编号",width:"55"}),a(i,{prop:"name","show-overflow-tooltip":"true",effect:"light",label:"书名"}),a(i,{prop:"index",label:"音频顺序"}),a(i,{label:"操作",width:"100"},{default:r(o=>[a(g,{size:"small",onClick:U=>k(o.row)},{default:r(()=>[b("下载")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),a(g,{type:"primary",onClick:f},{default:r(()=>[b("下载")]),_:1}),M,a(x,{"current-page":p.value,"page-size":d.value,layout:"total, sizes, prev, pager, next, jumper",total:u.value.length,onSizeChange:w,onCurrentChange:C},null,8,["current-page","page-size","total"])])}}});export{X as default};
