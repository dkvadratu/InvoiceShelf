import{a9 as W,v as X,I as D,e as Y,u as Z,j as h,P as ee,S as te,N as ae,K as f,w as o,r as d,n as se,a7 as oe,o as m,a,b as l,L as B,l as n,q as L,t as y,bp as re,bq as k,c as S,Q as le,R as ne,M as ie}from"./main-BYz-svJc.js";import{u as de}from"./estimate-DRtcXHic.js";import{u as me}from"./global-Dio8Sxq7.js";import"./auth-CC6UYcBi.js";const ce={class:"mr-3 text-sm"},ue={class:"mr-3 text-sm"},_e={class:"fixed top-0 left-0 hidden h-full pt-16 pb-4 bg-white w-88 xl:block"},pe={class:"flex items-center justify-between px-4 pt-8 pb-6 border border-gray-200 border-solid"},fe={class:"flex ml-3",role:"group","aria-label":"First group"},ye={class:"px-4 py-1 pb-2 mb-2 text-sm border-b border-gray-200 border-solid"},be={class:"px-2"},ge={class:"px-2"},he={class:"px-2"},Be={class:"h-full pb-32 overflow-y-scroll border-l border-gray-200 border-solid sw-scroll"},ve={class:"flex-2"},xe={class:"mb-1 text-md not-italic font-medium leading-5 text-gray-500 capitalize"},Ee={class:"flex-1 whitespace-nowrap right"},we={class:"text-sm text-right text-gray-500 non-italic"},ke={key:0,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},Se={class:"flex flex-col min-h-0 mt-8 overflow-hidden",style:{height:"75vh"}},Ve=["src"],De={__name:"View",setup(Fe){const c=ae(),V=se(),i=de(),p=me(),F=W(),{tm:I,t:u}=X.useI18n();let v=D({}),t=D({orderBy:"",orderByField:"",estimate_number:""}),x=Y(!1);oe("utils"),Z();const R=h(()=>i.selectedViewEstimate),$=h(()=>t.orderBy==="asc"||t.orderBy==null);h(()=>$.value?I("general.ascending"):I("general.descending"));const j=h(()=>v.unique_hash?`/estimates/pdf/${v.unique_hash}`:!1);ee(c,()=>{C()}),T(),C(),_=te.debounce(_,500);function N(e){return c.params.id==e}async function T(){await i.fetchEstimate({limit:"all"},p.companySlug),setTimeout(()=>{z()},500)}async function C(){if(c&&c.params.id){let e=await i.fetchViewEstimate({id:c.params.id},p.companySlug);e.data&&Object.assign(v,e.data.data)}}function z(){const e=document.getElementById(`estimate-${c.params.id}`);e&&(e.scrollIntoView({behavior:"smooth"}),e.classList.add("shake"))}async function _(){let e={};t.estimate_number!==""&&t.estimate_number!==null&&t.estimate_number!==void 0&&(e.estimate_number=t.estimate_number),t.orderBy!==null&&t.orderBy!==void 0&&(e.orderBy=t.orderBy),t.orderByField!==null&&t.orderByField!==void 0&&(e.orderByField=t.orderByField),x.value=!0;try{let r=await i.searchEstimate(e,p.companySlug);x.value=!1,r.data.data&&(i.estimates=r.data.data)}catch{x.value=!1}}function A(){return t.orderBy==="asc"?(t.orderBy="desc",_(),!0):(t.orderBy="asc",_(),!0)}async function P(){F.openDialog({title:u("general.are_you_sure"),message:u("estimates.confirm_mark_as_accepted",1),yesLabel:u("general.ok"),noLabel:u("general.cancel"),variant:"primary",size:"lg",hideNoButton:!1}).then(async e=>{let r={slug:p.companySlug,id:c.params.id,status:"ACCEPTED"};e&&(i.acceptEstimate(r),V.push({name:"estimates.dashboard"}))})}async function U(){F.openDialog({title:u("general.are_you_sure"),message:u("estimates.confirm_mark_as_rejected",1),yesLabel:u("general.ok"),noLabel:u("general.cancel"),variant:"primary",size:"lg",hideNoButton:!1}).then(async e=>{let r={slug:p.companySlug,id:c.params.id,status:"REJECTED"};e&&(i.rejectEstimate(r),V.push({name:"estimates.dashboard"}))})}return(e,r)=>{const b=d("BaseButton"),q=d("BasePageHeader"),g=d("BaseIcon"),G=d("BaseInput"),E=d("BaseRadio"),w=d("BaseInputGroup"),M=d("BaseEstimateStatusLabel"),H=d("BaseEstimateStatusBadge"),O=d("BaseFormatMoney"),J=d("router-link"),K=d("BasePage");return m(),f(K,{class:"xl:pl-96"},{default:o(()=>[a(q,{title:R.value.estimate_number},{actions:o(()=>[l("div",ce,[n(i).selectedViewEstimate.status==="DRAFT"?(m(),f(b,{key:0,variant:"primary",onClick:P},{default:o(()=>[L(y(e.$t("estimates.accept_estimate")),1)]),_:1})):B("",!0)]),l("div",ue,[n(i).selectedViewEstimate.status==="DRAFT"?(m(),f(b,{key:0,variant:"primary-outline",onClick:U},{default:o(()=>[L(y(e.$t("estimates.reject_estimate")),1)]),_:1})):B("",!0)])]),_:1},8,["title"]),l("div",_e,[l("div",pe,[a(G,{modelValue:n(t).estimate_number,"onUpdate:modelValue":r[0]||(r[0]=s=>n(t).estimate_number=s),placeholder:e.$t("general.search"),type:"text",variant:"gray",onInput:_},{right:o(()=>[a(g,{name:"MagnifyingGlassIcon",class:"h-5 text-gray-400"})]),_:1},8,["modelValue","placeholder"]),l("div",fe,[a(re,{position:"bottom-start","width-class":"w-50","position-class":"left-0"},{activator:o(()=>[a(b,{variant:"gray"},{default:o(()=>[a(g,{name:"FunnelIcon",class:"h-5"})]),_:1})]),default:o(()=>[l("div",ye,y(e.$t("general.sort_by")),1),l("div",be,[a(k,{class:"rounded-md pt-3 hover:rounded-md"},{default:o(()=>[a(w,{class:"-mt-3 font-normal"},{default:o(()=>[a(E,{id:"filter_estimate_date",modelValue:n(t).orderByField,"onUpdate:modelValue":r[1]||(r[1]=s=>n(t).orderByField=s),label:e.$t("reports.estimates.estimate_date"),size:"sm",name:"filter",value:"estimate_date",onChange:_},null,8,["modelValue","label"])]),_:1})]),_:1})]),l("div",ge,[a(k,{class:"rounded-md pt-3 hover:rounded-md"},{default:o(()=>[a(w,{class:"-mt-3 font-normal"},{default:o(()=>[a(E,{id:"filter_due_date",modelValue:n(t).orderByField,"onUpdate:modelValue":[r[2]||(r[2]=s=>n(t).orderByField=s),_],label:e.$t("estimates.due_date"),value:"expiry_date",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1})]),l("div",he,[a(k,{class:"rounded-md pt-3 hover:rounded-md"},{default:o(()=>[a(w,{class:"-mt-3 font-normal"},{default:o(()=>[a(E,{id:"filter_estimate_number",modelValue:n(t).orderByField,"onUpdate:modelValue":[r[3]||(r[3]=s=>n(t).orderByField=s),_],label:e.$t("estimates.estimate_number"),value:"estimate_number",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1})])]),_:1}),a(b,{class:"ml-1",variant:"white",onClick:A},{default:o(()=>[$.value?(m(),f(g,{key:0,name:"SortAscendingIcon",class:"h-5"})):(m(),f(g,{key:1,name:"SortDescendingIcon",class:"h-5"}))]),_:1})])]),l("div",Be,[(m(!0),S(le,null,ne(n(i).estimates,(s,Q)=>(m(),f(J,{id:"estimate-"+s.id,key:Q,to:`/${n(p).companySlug}/customer/estimates/${s.id}/view`,class:ie(["flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-primary-500 border-solid":N(s.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:o(()=>[l("div",ve,[l("div",xe,y(s.estimate_number),1),a(H,{status:s.status},{default:o(()=>[a(M,{status:s.status},null,8,["status"])]),_:2},1032,["status"])]),l("div",Ee,[a(O,{class:"mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900 block",amount:s.total,currency:s.currency},null,8,["amount","currency"]),l("div",we,y(s.formatted_estimate_date),1)])]),_:2},1032,["id","to","class"]))),128)),n(i).estimates.length?B("",!0):(m(),S("p",ke,y(e.$t("estimates.no_matching_estimates")),1))])]),l("div",Se,[j.value?(m(),S("iframe",{key:0,src:j.value,class:"flex-1 border border-gray-400 border-solid rounded-md"},null,8,Ve)):B("",!0)])]),_:1})}}};export{De as default};
