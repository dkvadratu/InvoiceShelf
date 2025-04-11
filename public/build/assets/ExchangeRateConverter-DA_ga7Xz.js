import{H as V,F,e as v,j as i,P as l,aE as D,r as d,aO as N,K as j,L as x,o as p,w as h,a as C,b as E,l as s,t as P,c as A,ae as G,M as L}from"./main-DlOnIu1m.js";import{u as O}from"./exchange-rate-Bw5Yo9us.js";const U={key:0},q={class:"text-gray-500 sm:text-sm"},z={class:"text-gray-400 text-xs mt-2 font-light"},M={__name:"ExchangeRateConverter",props:{v:{type:Object,default:null},isLoading:{type:Boolean,default:!1},store:{type:Object,default:null},storeProp:{type:String,default:""},isEdit:{type:Boolean,default:!1},customerCurrency:{type:[String,Number],default:null}},setup(r){const e=r,g=V(),B=F(),m=O(),f=v(!1);let n=v(!1);g.fetchCurrencies();const o=i(()=>B.selectedCompanyCurrency),c=i(()=>g.currencies.find(t=>t.id===e.store[e.storeProp].currency_id)),b=i(()=>o.value.id!==e.customerCurrency);l(()=>e.store[e.storeProp].customer,t=>{w(t)},{deep:!0}),l(()=>e.store[e.storeProp].currency_id,t=>{$(t)},{immediate:!0}),l(()=>e.customerCurrency,t=>{t&&e.isEdit&&R()},{immediate:!0});function R(){b.value&&m.checkForActiveProvider(e.customerCurrency).then(t=>{t.data.success&&(f.value=!0)})}function w(t){t?e.store[e.storeProp].currency_id=t.currency.id:e.store[e.storeProp].currency_id=o.value.id}async function $(t){t!==o.value.id?(!e.isEdit&&t&&await y(t),e.store.showExchangeRate=!0):e.store.showExchangeRate=!1}function y(t){n.value=!0,m.getCurrentExchangeRate(t).then(a=>{a.data&&!a.data.error?e.store[e.storeProp].exchange_rate=a.data.exchangeRate[0]:e.store[e.storeProp].exchange_rate="",n.value=!1}).catch(a=>{n.value=!1})}return D(()=>{e.store.showExchangeRate=!1}),(t,a)=>{const S=d("BaseIcon"),k=d("BaseInput"),I=d("BaseInputGroup"),_=N("tooltip");return r.store.showExchangeRate&&c.value?(p(),j(I,{key:0,"content-loading":s(n)&&!r.isEdit,label:t.$t("settings.exchange_rate.exchange_rate"),error:r.v.exchange_rate.$error&&r.v.exchange_rate.$errors[0].$message,required:""},{labelRight:h(()=>[f.value&&r.isEdit?(p(),A("div",U,[G(C(S,{name:"RefreshIcon",class:L(`h-4 w-4 text-primary-500 cursor-pointer outline-none ${s(n)?" animate-spin rotate-180 cursor-not-allowed pointer-events-none ":""}`),onClick:a[0]||(a[0]=u=>y(r.customerCurrency))},null,8,["class"]),[[_,{content:"Fetch Latest Exchange rate"}]])])):x("",!0)]),default:h(()=>[C(k,{modelValue:r.store[r.storeProp].exchange_rate,"onUpdate:modelValue":a[1]||(a[1]=u=>r.store[r.storeProp].exchange_rate=u),"content-loading":s(n)&&!r.isEdit,addon:`1 ${c.value.code} =`,disabled:s(n),onInput:a[2]||(a[2]=u=>r.v.exchange_rate.$touch())},{right:h(()=>[E("span",q,P(o.value.code),1)]),_:1},8,["modelValue","content-loading","addon","disabled"]),E("span",z,P(t.$t("settings.exchange_rate.exchange_help_text",{currency:c.value.code,baseCurrency:o.value.code})),1)]),_:1},8,["content-loading","label","error"])):x("",!0)}}};export{M as _};
