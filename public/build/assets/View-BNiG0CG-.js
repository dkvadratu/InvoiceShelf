import{v as oe,I as Y,e as y,G as se,O as ne,j as B,P as le,S as re,a9 as de,N as ie,c as v,a as o,w as s,Q as A,r,ad as ce,o as i,b as l,K as F,L as w,l as n,V as ue,q as me,t as g,R as fe,M as pe}from"./main-BYz-svJc.js";import{u as _e}from"./payment-D5kbhBWm.js";import{_ as ye,a as ve}from"./SendPaymentModal-CUv68omZ.js";import{L as ge}from"./LoadingIcon-TpWUd6uz.js";import"./mail-driver-XqPuN3IP.js";const he={class:"fixed top-0 left-0 hidden h-full pt-16 pb-[6rem] ml-56 bg-white xl:ml-64 w-88 xl:block"},be={class:"flex items-center justify-between px-4 pt-8 pb-6 border border-gray-200 border-solid"},xe={class:"flex ml-3",role:"group","aria-label":"First group"},Be={class:"px-4 py-1 pb-2 mb-2 text-sm border-b border-gray-200 border-solid"},we={class:"px-2"},ke={class:"px-2"},Ie={class:"px-2"},Ve={class:"flex-2"},Fe={class:"mb-1 text-xs not-italic font-medium leading-5 text-gray-500 capitalize"},Pe={class:"mb-1 text-xs not-italic font-medium leading-5 text-gray-500 capitalize"},Te={class:"flex-1 whitespace-nowrap right"},Se={class:"text-sm text-right text-gray-500 non-italic"},De={key:0,class:"flex justify-center p-4 items-center"},$e={key:1,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},Le={class:"flex flex-col min-h-0 mt-8 overflow-hidden",style:{height:"75vh"}},Me=["src"],Ye={__name:"View",setup(je){const _=ie(),{t:P}=oe.useI18n();let f=Y({}),a=Y({orderBy:null,orderByField:null,searchText:null}),h=y(!1),k=y(!1);const b=_e(),G=se(),H=ne(),c=y(null),x=y(1),T=y(1),M=y(null),O=B(()=>f.payment_number||""),j=B(()=>a.orderBy==="asc"||a.orderBy==null);B(()=>j.value?P("general.ascending"):P("general.descending"));const z=B(()=>f.unique_hash?`/payments/pdf/${f.unique_hash}`:!1);B(()=>{var e;return ce((e=b==null?void 0:b.selectedPayment)==null?void 0:e.payment_date).format("YYYY/MM/DD")}),le(_,()=>{N()}),I(),N(),m=re.debounce(m,500);function R(e){return _.params.id==e}de();async function I(e,d=!1){if(h.value)return;let u={};a.searchText!==""&&a.searchText!==null&&a.searchText!==void 0&&(u.search=a.searchText),a.orderBy!==null&&a.orderBy!==void 0&&(u.orderBy=a.orderBy),a.orderByField!==null&&a.orderByField!==void 0&&(u.orderByField=a.orderByField),h.value=!0;let V=await b.fetchPayments({page:e,...u});h.value=!1,c.value=c.value?c.value:[],c.value=[...c.value,...V.data.data],x.value=e||1,T.value=V.data.meta.last_page;let p=c.value.find(S=>S.id==_.params.id);d==!1&&!p&&x.value<T.value&&Object.keys(u).length===0&&I(++x.value),p&&setTimeout(()=>{d==!1&&q()},500)}async function N(){if(!_.params.id)return;k.value=!0;let e=await b.fetchPayment(_.params.id);e.data&&(k.value=!1,Object.assign(f,e.data.data))}function q(){const e=document.getElementById(`payment-${_.params.id}`);e&&(e.scrollIntoView({behavior:"smooth"}),e.classList.add("shake"),K())}function K(){M.value.addEventListener("scroll",e=>{e.target.scrollTop>0&&e.target.scrollTop+e.target.clientHeight>e.target.scrollHeight-200&&x.value<T.value&&I(++x.value,!0)})}async function m(){c.value=[],I()}function Q(){return a.orderBy==="asc"?(a.orderBy="desc",m(),!0):(a.orderBy="asc",m(),!0)}async function J(){G.openModal({title:P("payments.send_payment"),componentName:"SendPaymentModal",id:f.id,data:f,variant:"lg"})}return(e,d)=>{const u=r("BaseButton"),V=r("BasePageHeader"),p=r("BaseIcon"),S=r("BaseInput"),D=r("BaseRadio"),$=r("BaseInputGroup"),L=r("BaseDropdownItem"),W=r("BaseDropdown"),X=r("BaseText"),Z=r("BaseFormatMoney"),ee=r("router-link"),te=r("BasePage");return i(),v(A,null,[o(ye),o(te,{class:"xl:pl-96"},{default:s(()=>{var E;return[o(V,{title:O.value},{actions:s(()=>[n(H).hasAbilities(n(ue).SEND_PAYMENT)?(i(),F(u,{key:0,"content-loading":n(k),variant:"primary",onClick:J},{default:s(()=>[me(g(e.$t("payments.send_payment_receipt")),1)]),_:1},8,["content-loading"])):w("",!0),o(ve,{"content-loading":n(k),class:"ml-3",row:n(f)},null,8,["content-loading","row"])]),_:1},8,["title"]),l("div",he,[l("div",be,[o(S,{modelValue:n(a).searchText,"onUpdate:modelValue":d[0]||(d[0]=t=>n(a).searchText=t),placeholder:e.$t("general.search"),type:"text",onInput:m},{default:s(()=>[o(p,{name:"MagnifyingGlassIcon",class:"h-5"})]),_:1},8,["modelValue","placeholder"]),l("div",xe,[o(W,{position:"bottom-start","width-class":"w-50","position-class":"left-0"},{activator:s(()=>[o(u,{variant:"gray"},{default:s(()=>[o(p,{name:"FunnelIcon"})]),_:1})]),default:s(()=>[l("div",Be,g(e.$t("general.sort_by")),1),l("div",we,[o(L,{class:"pt-3 rounded-md hover:rounded-md"},{default:s(()=>[o($,{class:"-mt-3 font-normal"},{default:s(()=>[o(D,{id:"filter_invoice_number",modelValue:n(a).orderByField,"onUpdate:modelValue":[d[1]||(d[1]=t=>n(a).orderByField=t),m],label:e.$t("invoices.title"),size:"sm",name:"filter",value:"invoice_number"},null,8,["modelValue","label"])]),_:1})]),_:1})]),l("div",ke,[o(L,{class:"pt-3 rounded-md hover:rounded-md"},{default:s(()=>[o($,{class:"-mt-3 font-normal"},{default:s(()=>[o(D,{modelValue:n(a).orderByField,"onUpdate:modelValue":[d[2]||(d[2]=t=>n(a).orderByField=t),m],label:e.$t("payments.date"),size:"sm",name:"filter",value:"payment_date"},null,8,["modelValue","label"])]),_:1})]),_:1})]),l("div",Ie,[o(L,{class:"pt-3 rounded-md hover:rounded-md"},{default:s(()=>[o($,{class:"-mt-3 font-normal"},{default:s(()=>[o(D,{id:"filter_payment_number",modelValue:n(a).orderByField,"onUpdate:modelValue":[d[3]||(d[3]=t=>n(a).orderByField=t),m],label:e.$t("payments.payment_number"),size:"sm",name:"filter",value:"payment_number"},null,8,["modelValue","label"])]),_:1})]),_:1})])]),_:1}),o(u,{class:"ml-1",size:"md",variant:"gray",onClick:Q},{default:s(()=>[j.value?(i(),F(p,{key:0,name:"SortAscendingIcon"})):(i(),F(p,{key:1,name:"SortDescendingIcon"}))]),_:1})])]),l("div",{ref_key:"paymentListSection",ref:M,class:"h-full overflow-y-scroll border-l border-gray-200 border-solid"},[(i(!0),v(A,null,fe(c.value,(t,ae)=>(i(),v("div",{key:ae},[t?(i(),F(ee,{key:0,id:"payment-"+t.id,to:`/admin/payments/${t.id}/view`,class:pe(["flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-primary-500 border-solid":R(t.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:s(()=>{var C,U;return[l("div",Ve,[o(X,{text:(C=t==null?void 0:t.customer)==null?void 0:C.name,class:"pr-2 mb-2 text-sm not-italic font-normal leading-5 text-black capitalize truncate"},null,8,["text"]),l("div",Fe,g(t==null?void 0:t.payment_number),1),l("div",Pe,g(t==null?void 0:t.invoice_number),1)]),l("div",Te,[o(Z,{class:"block mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900",amount:t==null?void 0:t.amount,currency:(U=t.customer)==null?void 0:U.currency},null,8,["amount","currency"]),l("div",Se,g(t.formatted_payment_date),1)])]}),_:2},1032,["id","to","class"])):w("",!0)]))),128)),n(h)?(i(),v("div",De,[o(ge,{class:"h-6 m-1 animate-spin text-primary-400"})])):w("",!0),!((E=c.value)!=null&&E.length)&&!n(h)?(i(),v("p",$e,g(e.$t("payments.no_matching_payments")),1)):w("",!0)],512)]),l("div",Le,[z.value?(i(),v("iframe",{key:0,src:z.value,class:"flex-1 border border-gray-400 border-solid rounded-md"},null,8,Me)):w("",!0)])]}),_:1})],64)}}};export{Ye as default};
