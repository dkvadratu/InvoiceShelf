import{u as H}from"./exchange-rate-CGmKLSxr.js";import{v as K,e as k,G as Q,j as E,f as w,ai as le,aj as Y,g as F,i as se,P as G,S as ce,r as d,K as I,o as R,w as l,b as m,m as ie,a as o,L as S,l as e,q as B,t as _,M as X,F as ue,a9 as de,c as ve,Q as ge,a7 as pe,aB as he,aC as me,aD as fe,aE as ye,I as _e}from"./main-BYz-svJc.js";import xe from"./BaseTable-VDjrCOD8.js";const Ce={class:"flex justify-between w-full"},Ee={class:"px-4 md:px-8 py-8 overflow-y-auto sm:p-6"},$e={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid"},be={__name:"ExchangeRateProviderModal",setup(J){const{t:$}=K.useI18n();let c=k(!1),i=k(!1),x=k(!1),p=k([]),f=k([]);const y=Q(),t=H();let M=k([]);const U=E(()=>({currentExchangeRate:{key:{required:w.withMessage($("validation.required"),F)},driver:{required:w.withMessage($("validation.required"),F)},currencies:{required:w.withMessage($("validation.required"),F)}},currencyConverter:{type:{required:w.withMessage($("validation.required"),Y(s))},url:{required:w.withMessage($("validation.required"),Y(C)),url:w.withMessage($("validation.invalid_url"),le)}}})),j=E(()=>t.drivers.map(r=>Object.assign({},r,{key:$(r.key)}))),A=E(()=>y.active&&y.componentName==="ExchangeRateProviderModal");E(()=>y.title);const s=E(()=>t.currentExchangeRate.driver==="currency_converter"),C=E(()=>t.currencyConverter&&t.currencyConverter.type==="DEDICATED"),V=E(()=>{switch(t.currentExchangeRate.driver){case"currency_converter":return"https://www.currencyconverterapi.com";case"currency_freak":return"https://currencyfreaks.com";case"currency_layer":return"https://currencylayer.com";case"open_exchange_rate":return"https://openexchangerates.org";default:return""}}),n=se(U,E(()=>t));function D(){p.value=[]}function O(){const{currencies:r}=t.currentExchangeRate;p.value.forEach(a=>{r.forEach((g,h)=>{g===a&&r.splice(h,1)})}),p.value=[]}function q(){t.currentExchangeRate.key=null,t.currentExchangeRate.currencies=[],t.supportedCurrencies=[]}function v(){t.supportedCurrencies=[],f.value=[],t.currentExchangeRate={id:null,name:"",driver:"",key:"",active:!0,currencies:[]},t.currencyConverter={type:"",url:""},p.value=[]}async function z(){t.currentExchangeRate.driver="currency_converter";let r={};t.isEdit&&(r.provider_id=t.currentExchangeRate.id),i.value=!0,await t.fetchDefaultProviders(),await t.fetchActiveCurrency(r),f.value=t.currentExchangeRate.currencies,i.value=!1}G(()=>s.value,(r,a)=>{r&&ee()},{immediate:!0}),G(()=>t.currentExchangeRate.key,(r,a)=>{r&&P()}),G(()=>{var r;return(r=t==null?void 0:t.currencyConverter)==null?void 0:r.type},(r,a)=>{r&&P()}),P=ce.debounce(P,500);function W(){return n.value.$touch(),te(),!!(n.value.$invalid||p.value.length&&t.currentExchangeRate.active)}async function Z(){if(W())return!0;let r={...t.currentExchangeRate};s.value&&(r.driver_config={...t.currencyConverter},C.value||(r.driver_config.url=""));const a=t.isEdit?t.updateProvider:t.addProvider;c.value=!0,await a(r).then(g=>{c.value=!1,y.refreshData&&y.refreshData(),N()}).catch(g=>{c.value=!1})}async function ee(){let r=await t.getCurrencyConverterServers();M.value=r.data.currency_converter_servers,t.currencyConverter.type="FREE"}function P(){var g;const{driver:r,key:a}=t.currentExchangeRate;if(r&&a){x.value=!0;let h={driver:r,key:a};if(s.value&&!t.currencyConverter.type){x.value=!1;return}(g=t==null?void 0:t.currencyConverter)!=null&&g.type&&(h.type=t.currencyConverter.type),t.fetchCurrencies(h).then(b=>{x.value=!1}).catch(b=>{x.value=!1})}}function te(r=!0){var g;p.value=[];const{currencies:a}=t.currentExchangeRate;a.length&&((g=t.activeUsedCurrencies)!=null&&g.length)&&a.forEach(h=>{t.activeUsedCurrencies.includes(h)&&p.value.push(h)})}function N(){y.closeModal(),setTimeout(()=>{v(),n.value.$reset()},300)}return(r,a)=>{const g=d("BaseIcon"),h=d("BaseMultiselect"),b=d("BaseInputGroup"),L=d("BaseInput"),re=d("BaseSwitch"),ae=d("BaseInputGrid"),ne=d("BaseInfoAlert"),T=d("BaseButton"),oe=d("BaseModal");return R(),I(oe,{show:A.value,onClose:N,onOpen:z},{header:l(()=>[m("div",Ce,[B(_(e(y).title)+" ",1),o(g,{name:"XMarkIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:N})])]),default:l(()=>[m("form",{onSubmit:ie(Z,["prevent"])},[m("div",Ee,[o(ae,{layout:"one-column"},{default:l(()=>[o(b,{label:r.$t("settings.exchange_rate.driver"),"content-loading":e(i),required:"",error:e(n).currentExchangeRate.driver.$error&&e(n).currentExchangeRate.driver.$errors[0].$message,"help-text":V.value},{default:l(()=>[o(h,{modelValue:e(t).currentExchangeRate.driver,"onUpdate:modelValue":[a[0]||(a[0]=u=>e(t).currentExchangeRate.driver=u),q],options:j.value,"content-loading":e(i),"value-prop":"value","can-deselect":!0,label:"key",searchable:!0,invalid:e(n).currentExchangeRate.driver.$error,"track-by":"key",onInput:a[1]||(a[1]=u=>e(n).currentExchangeRate.driver.$touch())},null,8,["modelValue","options","content-loading","invalid"])]),_:1},8,["label","content-loading","error","help-text"]),s.value?(R(),I(b,{key:0,required:"",label:r.$t("settings.exchange_rate.server"),"content-loading":e(i),error:e(n).currencyConverter.type.$error&&e(n).currencyConverter.type.$errors[0].$message},{default:l(()=>[o(h,{modelValue:e(t).currencyConverter.type,"onUpdate:modelValue":[a[2]||(a[2]=u=>e(t).currencyConverter.type=u),q],"content-loading":e(i),"value-prop":"value",searchable:"",options:e(M),invalid:e(n).currencyConverter.type.$error,label:"value","track-by":"value"},null,8,["modelValue","content-loading","options","invalid"])]),_:1},8,["label","content-loading","error"])):S("",!0),o(b,{label:r.$t("settings.exchange_rate.key"),required:"","content-loading":e(i),error:e(n).currentExchangeRate.key.$error&&e(n).currentExchangeRate.key.$errors[0].$message},{default:l(()=>[o(L,{modelValue:e(t).currentExchangeRate.key,"onUpdate:modelValue":a[3]||(a[3]=u=>e(t).currentExchangeRate.key=u),"content-loading":e(i),type:"text",name:"key",loading:e(x),"loading-position":"right",invalid:e(n).currentExchangeRate.key.$error},null,8,["modelValue","content-loading","loading","invalid"])]),_:1},8,["label","content-loading","error"]),e(t).supportedCurrencies.length?(R(),I(b,{key:1,label:r.$t("settings.exchange_rate.currency"),"content-loading":e(i),error:e(n).currentExchangeRate.currencies.$error&&e(n).currentExchangeRate.currencies.$errors[0].$message,"help-text":r.$t("settings.exchange_rate.currency_help_text")},{default:l(()=>[o(h,{modelValue:e(t).currentExchangeRate.currencies,"onUpdate:modelValue":a[4]||(a[4]=u=>e(t).currentExchangeRate.currencies=u),"content-loading":e(i),"value-prop":"code",mode:"tags",searchable:"",options:e(t).supportedCurrencies,invalid:e(n).currentExchangeRate.currencies.$error,label:"code","track-by":"code","open-direction":"top",onInput:a[5]||(a[5]=u=>e(n).currentExchangeRate.currencies.$touch())},null,8,["modelValue","content-loading","options","invalid"])]),_:1},8,["label","content-loading","error","help-text"])):S("",!0),C.value?(R(),I(b,{key:2,label:r.$t("settings.exchange_rate.url"),"content-loading":e(i),error:e(n).currencyConverter.url.$error&&e(n).currencyConverter.url.$errors[0].$message},{default:l(()=>[o(L,{modelValue:e(t).currencyConverter.url,"onUpdate:modelValue":a[6]||(a[6]=u=>e(t).currencyConverter.url=u),"content-loading":e(i),type:"url",invalid:e(n).currencyConverter.url.$error,onInput:a[7]||(a[7]=u=>e(n).currencyConverter.url.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","error"])):S("",!0),o(re,{modelValue:e(t).currentExchangeRate.active,"onUpdate:modelValue":a[8]||(a[8]=u=>e(t).currentExchangeRate.active=u),class:"flex","label-right":r.$t("settings.exchange_rate.active")},null,8,["modelValue","label-right"])]),_:1}),e(p).length&&e(t).currentExchangeRate.active?(R(),I(ne,{key:0,class:"mt-5",title:r.$t("settings.exchange_rate.currency_in_used"),lists:[e(p).toString()],actions:["Remove"],onHide:D,onRemove:O},null,8,["title","lists"])):S("",!0)]),m("div",$e,[o(T,{class:"mr-3",variant:"primary-outline",type:"button",disabled:e(c),onClick:N},{default:l(()=>[B(_(r.$t("general.cancel")),1)]),_:1},8,["disabled"]),o(T,{loading:e(c),disabled:e(c)||e(x),variant:"primary",type:"submit"},{left:l(u=>[e(c)?S("",!0):(R(),I(g,{key:0,name:"ArrowDownOnSquareIcon",class:X(u.class)},null,8,["class"]))]),default:l(()=>[B(" "+_(e(t).isEdit?r.$t("general.update"):r.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],32)]),_:1},8,["show"])}}},ke={slot:"header",class:"flex flex-wrap justify-between lg:flex-nowrap"},Re={class:"text-lg font-medium text-left"},Be={class:"mt-2 text-sm leading-snug text-left text-gray-500",style:{"max-width":"680px"}},we={class:"mt-4 lg:mt-0 lg:ml-2"},Ie={class:"capitalize"},Ve={class:"inline-block"},qe={__name:"ExchangeRateProviderSetting",setup(J){const{tm:$,t:c}=K.useI18n();ue();const i=H(),x=Q(),p=de();let f=k("");const y=pe("utils"),t=E(()=>[{key:"driver",label:c("settings.exchange_rate.driver"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"key",label:c("settings.exchange_rate.key"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"active",label:c("settings.exchange_rate.active"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]);async function M({page:s,sort:C}){let V=_e({orderByField:C.fieldName||"created_at",orderBy:C.order||"desc",page:s}),n=await i.fetchProviders(V);return{data:n.data.data,pagination:{totalPages:n.data.meta.last_page,currentPage:s,totalCount:n.data.meta.total,limit:5}}}function U(){x.openModal({title:c("settings.exchange_rate.new_driver"),componentName:"ExchangeRateProviderModal",size:"md",refreshData:f.value&&f.value.refresh})}function j(s){i.fetchProvider(s),x.openModal({title:c("settings.exchange_rate.edit_driver"),componentName:"ExchangeRateProviderModal",size:"md",data:s,refreshData:f.value&&f.value.refresh})}function A(s){p.openDialog({title:c("general.are_you_sure"),message:c("settings.exchange_rate.exchange_rate_confirm_delete"),yesLabel:c("general.ok"),noLabel:c("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async C=>{C&&(await i.deleteExchangeRate(s),f.value&&f.value.refresh())})}return(s,C)=>{const V=d("BaseButton"),n=d("BaseBadge"),D=d("BaseDropdownItem"),O=d("BaseDropdown"),q=d("BaseCard");return R(),ve(ge,null,[o(be),o(q,null,{default:l(()=>[m("div",ke,[m("div",null,[m("h6",Re,_(s.$t("settings.menu_title.exchange_rate")),1),m("p",Be,_(s.$t("settings.exchange_rate.providers_description")),1)]),m("div",we,[o(V,{variant:"primary-outline",size:"lg",onClick:U},{left:l(v=>[o(e(he),{class:X(v.class)},null,8,["class"])]),default:l(()=>[B(" "+_(s.$t("settings.exchange_rate.new_driver")),1)]),_:1})])]),o(xe,{ref_key:"table",ref:f,class:"mt-16",data:M,columns:t.value},{"cell-driver":l(({row:v})=>[m("span",Ie,_(v.data.driver.replace("_"," ")),1)]),"cell-active":l(({row:v})=>[o(n,{"bg-color":e(y).getBadgeStatusColor(v.data.active?"YES":"NO").bgColor,color:e(y).getBadgeStatusColor(v.data.active?"YES":"NO").color},{default:l(()=>[B(_(v.data.active?"YES":"NO"),1)]),_:2},1032,["bg-color","color"])]),"cell-actions":l(({row:v})=>[o(O,null,{activator:l(()=>[m("div",Ve,[o(e(ye),{class:"w-5 text-gray-500"})])]),default:l(()=>[o(D,{onClick:z=>j(v.data.id)},{default:l(()=>[o(e(me),{class:"h-5 mr-3 text-gray-600"}),B(" "+_(s.$t("general.edit")),1)]),_:2},1032,["onClick"]),o(D,{onClick:z=>A(v.data.id)},{default:l(()=>[o(e(fe),{class:"h-5 mr-3 text-gray-600"}),B(" "+_(s.$t("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["columns"])]),_:1})],64)}}};export{qe as default};
