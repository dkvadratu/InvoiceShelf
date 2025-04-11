import{v as P,F,H as K,e as I,j as E,P as ne,ap as J,aq as ie,r as d,c as C,o as $,b as r,a as e,t as f,w as u,Q as G,R as oe,K as U,m as L,q as D,M,l as S,L as A,ar as le,a7 as T,I as k,f as Q,as as W,aj as Z,i as ee,at as me,au as ue,G as re,a9 as de}from"./main-BYz-svJc.js";import{D as ce,d as _e}from"./DragIcon-DgDIJ1YM.js";import{u as pe}from"./payment-D5kbhBWm.js";import{_ as ge}from"./ItemUnitModal-Ci8sQvUT.js";const ye={class:"text-gray-900 text-lg font-medium"},fe={class:"mt-1 text-sm text-gray-500"},ve={class:"overflow-x-auto"},be={class:"w-full mt-6 table-fixed"},Se={class:"px-5 py-3 text-sm not-italic font-medium leading-5 text-left text-gray-700 border-t border-b border-gray-200 border-solid"},$e={class:"px-5 py-3 text-sm not-italic font-medium leading-5 text-left text-gray-700 border-t border-b border-gray-200 border-solid"},Be={class:"relative"},ze={class:"text-gray-300 cursor-move handle align-middle"},Ie={class:"px-5 py-4"},he={class:"block text-sm not-italic font-medium text-primary-800 whitespace-nowrap mr-2 min-w-[200px]"},Ve={class:"text-xs text-gray-500 mt-1"},we={class:"px-5 py-4 text-left align-middle"},xe={class:"px-5 py-4 text-right align-middle pt-10"},Ce={colspan:"2",class:"px-5 py-4"},De={class:"px-5 py-4 text-right align-middle",colspan:"2"},X={__name:"NumberCustomizer",props:{type:{type:String,required:!0},typeStore:{type:Object,required:!0},defaultSeries:{type:String,default:"INV"}},setup(h){const m=h,{t:l}=P.useI18n(),_=F(),y=K(),o=I([]),s=I(!1),i=I([{label:l("settings.customization.series"),description:l("settings.customization.series_description"),name:"SERIES",paramLabel:l("settings.customization.series_param_label"),value:m.defaultSeries,inputDisabled:!1,inputType:"text",allowMultiple:!1},{label:l("settings.customization.sequence"),description:l("settings.customization.sequence_description"),name:"SEQUENCE",paramLabel:l("settings.customization.sequence_param_label"),value:"6",inputDisabled:!1,inputType:"number",allowMultiple:!1},{label:l("settings.customization.delimiter"),description:l("settings.customization.delimiter_description"),name:"DELIMITER",paramLabel:l("settings.customization.delimiter_param_label"),value:"-",inputDisabled:!1,inputType:"text",allowMultiple:!0},{label:l("settings.customization.customer_series"),description:l("settings.customization.customer_series_description"),name:"CUSTOMER_SERIES",paramLabel:"",value:"",inputDisabled:!0,inputType:"text",allowMultiple:!1},{label:l("settings.customization.customer_sequence"),description:l("settings.customization.customer_sequence_description"),name:"CUSTOMER_SEQUENCE",paramLabel:l("settings.customization.customer_sequence_param_label"),value:"6",inputDisabled:!1,inputType:"number",allowMultiple:!1},{label:l("settings.customization.date_format"),description:l("settings.customization.date_format_description"),name:"DATE_FORMAT",paramLabel:l("settings.customization.date_format_param_label"),value:"Y",inputDisabled:!1,inputType:"text",allowMultiple:!0},{label:l("settings.customization.random_sequence"),description:l("settings.customization.random_sequence_description"),name:"RANDOM_SEQUENCE",paramLabel:l("settings.customization.random_sequence_param_label"),value:"6",inputDisabled:!1,inputType:"number",allowMultiple:!1}]),t=E(()=>i.value.filter(function(g){return!o.value.some(function(b){return g.allowMultiple?!1:g.name==b.name})})),c=I(""),a=I(!1),n=I(!1),p=E(()=>{let g="";return o.value.forEach(b=>{let q=`{{${b.name}`;b.value&&(q+=`:${b.value}`),g+=`${q}}}`}),g});ne(o,g=>{N()}),B();async function B(){let g={format:_.selectedCompanySettings[`${m.type}_number_format`]};n.value=!0,(await y.fetchPlaceholders(g)).data.placeholders.forEach(q=>{let j=i.value.find(Y=>Y.name===q.name);const R=q.value??"";o.value.push({...j,value:R,id:J.raw()})}),n.value=!1,N()}function x(g){return o.value.find(b=>b.name===g.name)}function z(g){x(g)&&!g.allowMultiple||(o.value.push({...g,id:J.raw()}),N())}function v(g){o.value=o.value.filter(function(b){return g.id!==b.id})}function w(g,b){switch(b.name){case"SERIES":g.length>=6&&(g=g.substring(0,6));break;case"DELIMITER":g.length>=1&&(g=g.substring(0,1));break}setTimeout(()=>{b.value=g,N()},100)}const N=ie(()=>{H()},500);async function H(){if(!p.value){c.value="";return}let g={key:m.type,format:p.value};a.value=!0;let b=await m.typeStore.getNextNumber(g);a.value=!1,b.data&&(c.value=b.data.nextNumber)}async function te(){if(a.value||n.value)return;s.value=!0;let g={settings:{}};return g.settings[m.type+"_number_format"]=p.value,await _.updateCompanySettings({data:g,message:`settings.customization.${m.type}s.${m.type}_settings_updated`}),s.value=!1,!0}return(g,b)=>{const q=d("BaseInput"),j=d("BaseInputGroup"),R=d("BaseIcon"),Y=d("BaseButton"),se=d("BaseDropdownItem"),ae=d("BaseDropdown");return $(),C(G,null,[r("h6",ye,f(g.$t(`settings.customization.${h.type}s.${h.type}_number_format`)),1),r("p",fe,f(g.$t(`settings.customization.${h.type}s.${h.type}_number_format_description`)),1),r("div",ve,[r("table",be,[b[4]||(b[4]=r("colgroup",null,[r("col",{style:{width:"4%"}}),r("col",{style:{width:"45%"}}),r("col",{style:{width:"27%"}}),r("col",{style:{width:"24%"}})],-1)),r("thead",null,[r("tr",null,[b[2]||(b[2]=r("th",{class:"px-5 py-3 text-sm not-italic font-medium leading-5 text-left text-gray-700 border-t border-b border-gray-200 border-solid"},null,-1)),r("th",Se,f(g.$t("settings.customization.component")),1),r("th",$e,f(g.$t("settings.customization.Parameter")),1),b[3]||(b[3]=r("th",{class:"px-5 py-3 text-sm not-italic font-medium leading-5 text-left text-gray-700 border-t border-b border-gray-200 border-solid"},null,-1))])]),e(S(_e),{modelValue:o.value,"onUpdate:modelValue":b[1]||(b[1]=V=>o.value=V),class:"divide-y divide-gray-200","item-key":"id",tag:"tbody",handle:".handle",filter:".ignore-element"},{item:u(({element:V})=>[r("tr",Be,[r("td",ze,[e(ce)]),r("td",Ie,[r("label",he,f(V.label),1),r("p",Ve,f(V.description),1)]),r("td",we,[e(j,{label:V.paramLabel,class:"lg:col-span-3",required:""},{default:u(()=>[e(q,{modelValue:V.value,"onUpdate:modelValue":[O=>V.value=O,O=>w(O,V)],disabled:V.inputDisabled,type:V.inputType},null,8,["modelValue","onUpdate:modelValue","disabled","type"])]),_:2},1032,["label"])]),r("td",xe,[e(Y,{variant:"white",onClick:L(O=>v(V),["prevent"])},{left:u(O=>[e(R,{name:"XMarkIcon",class:M(["!sm:m-0",O.class])},null,8,["class"])]),default:u(()=>[D(f(g.$t("general.remove"))+" ",1)]),_:2},1032,["onClick"])])])]),footer:u(()=>[r("tr",null,[r("td",Ce,[e(j,{label:g.$t(`settings.customization.${h.type}s.preview_${h.type}_number`)},{default:u(()=>[e(q,{modelValue:c.value,"onUpdate:modelValue":b[0]||(b[0]=V=>c.value=V),disabled:"",loading:a.value},null,8,["modelValue","loading"])]),_:1},8,["label"])]),r("td",De,[e(ae,{"wrapper-class":"flex items-center justify-end mt-5"},{activator:u(()=>[e(Y,{variant:"primary-outline"},{left:u(V=>[e(R,{class:M(V.class),name:"PlusIcon"},null,8,["class"])]),default:u(()=>[D(" "+f(g.$t("settings.customization.add_new_component")),1)]),_:1})]),default:u(()=>[($(!0),C(G,null,oe(t.value,V=>($(),U(se,{key:V.label,onClick:L(O=>z(V),["prevent"])},{default:u(()=>[D(f(V.label),1)]),_:2},1032,["onClick"]))),128))]),_:1})])])]),_:1},8,["modelValue"])])]),e(Y,{loading:s.value,disabled:s.value,variant:"primary",type:"submit",class:"mt-4",onClick:te},{left:u(V=>[s.value?A("",!0):($(),U(R,{key:0,class:M(V.class),name:"ArrowDownOnSquareIcon"},null,8,["class"]))]),default:u(()=>[D(" "+f(g.$t("settings.customization.save")),1)]),_:1},8,["loading","disabled"])],64)}}},Ee={__name:"InvoicesTabInvoiceNumber",setup(h){const m=le();return(l,_)=>($(),U(X,{type:"invoice","type-store":S(m),"default-series":"INV"},null,8,["type-store"]))}},Ue={class:"text-gray-900 text-lg font-medium"},Fe={class:"mt-1 text-sm text-gray-500"},Te={__name:"InvoicesTabRetrospective",setup(h){const{t:m,tm:l}=P.useI18n(),_=F(),y=K(),o=T("utils"),s=k({retrospective_edits:null});o.mergeSettings(s,{..._.selectedCompanySettings}),E(()=>y.config.retrospective_edits.map(t=>(t.title=m(t.key),t)));async function i(){let t={settings:{...s}};return await _.updateCompanySettings({data:t,message:"settings.customization.invoices.invoice_settings_updated"}),!0}return(t,c)=>{const a=d("BaseRadio"),n=d("BaseInputGroup");return $(),C(G,null,[r("h6",Ue,f(t.$t("settings.customization.invoices.retrospective_edits")),1),r("p",Fe,f(t.$t("settings.customization.invoices.retrospective_edits_description")),1),e(n,{required:""},{default:u(()=>[e(a,{id:"allow",modelValue:s.retrospective_edits,"onUpdate:modelValue":[c[0]||(c[0]=p=>s.retrospective_edits=p),i],label:t.$t("settings.customization.invoices.allow"),size:"sm",name:"filter",value:"allow",class:"mt-2"},null,8,["modelValue","label"]),e(a,{id:"disable_on_invoice_partial_paid",modelValue:s.retrospective_edits,"onUpdate:modelValue":[c[1]||(c[1]=p=>s.retrospective_edits=p),i],label:t.$t("settings.customization.invoices.disable_on_invoice_partial_paid"),size:"sm",name:"filter",value:"disable_on_invoice_partial_paid",class:"mt-2"},null,8,["modelValue","label"]),e(a,{id:"disable_on_invoice_paid",modelValue:s.retrospective_edits,"onUpdate:modelValue":[c[2]||(c[2]=p=>s.retrospective_edits=p),i],label:t.$t("settings.customization.invoices.disable_on_invoice_paid"),size:"sm",name:"filter",value:"disable_on_invoice_paid",class:"my-2"},null,8,["modelValue","label"]),e(a,{id:"disable_on_invoice_sent",modelValue:s.retrospective_edits,"onUpdate:modelValue":[c[3]||(c[3]=p=>s.retrospective_edits=p),i],label:t.$t("settings.customization.invoices.disable_on_invoice_sent"),size:"sm",name:"filter",value:"disable_on_invoice_sent"},null,8,["modelValue","label"])]),_:1})],64)}}},ke={class:"text-gray-900 text-lg font-medium"},Ne={class:"mt-1 text-sm text-gray-500 mb-2"},Me={class:"w-full sm:w-1/2 md:w-1/4 lg:w-1/5"},qe={__name:"InvoicesTabDueDate",setup(h){const{t:m}=P.useI18n(),l=F(),_=T("utils");let y=I(!1);const o=k({invoice_set_due_date_automatically:null,invoice_due_date_days:null});_.mergeSettings(o,{...l.selectedCompanySettings});const s=E({get:()=>o.invoice_set_due_date_automatically==="YES",set:async a=>{const n=a?"YES":"NO";o.invoice_set_due_date_automatically=n}}),i=E(()=>({dueDateSettings:{invoice_due_date_days:{required:Q.withMessage(m("validation.required"),Z(s.value)),numeric:Q.withMessage(m("validation.numbers_only"),W)}}})),t=ee(i,{dueDateSettings:o});async function c(){if(t.value.dueDateSettings.$touch(),t.value.dueDateSettings.$invalid)return!1;y.value=!0;let a={settings:{...o}};return s.value||delete a.settings.invoice_due_date_days,await l.updateCompanySettings({data:a,message:"settings.customization.invoices.invoice_settings_updated"}),y.value=!1,!0}return(a,n)=>{const p=d("BaseSwitchSection"),B=d("BaseInput"),x=d("BaseInputGroup"),z=d("BaseIcon"),v=d("BaseButton");return $(),C("form",{onSubmit:L(c,["prevent"])},[r("h6",ke,f(a.$t("settings.customization.invoices.due_date")),1),r("p",Ne,f(a.$t("settings.customization.invoices.due_date_description")),1),e(p,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=w=>s.value=w),title:a.$t("settings.customization.invoices.set_due_date_automatically"),description:a.$t("settings.customization.invoices.set_due_date_automatically_description")},null,8,["modelValue","title","description"]),s.value?($(),U(x,{key:0,label:a.$t("settings.customization.invoices.due_date_days"),error:S(t).dueDateSettings.invoice_due_date_days.$error&&S(t).dueDateSettings.invoice_due_date_days.$errors[0].$message,class:"mt-2 mb-4"},{default:u(()=>[r("div",Me,[e(B,{modelValue:o.invoice_due_date_days,"onUpdate:modelValue":n[1]||(n[1]=w=>o.invoice_due_date_days=w),invalid:S(t).dueDateSettings.invoice_due_date_days.$error,type:"number",onInput:n[2]||(n[2]=w=>S(t).dueDateSettings.invoice_due_date_days.$touch())},null,8,["modelValue","invalid"])])]),_:1},8,["label","error"])):A("",!0),e(v,{loading:S(y),disabled:S(y),variant:"primary",type:"submit",class:"mt-4"},{left:u(w=>[S(y)?A("",!0):($(),U(z,{key:0,class:M(w.class),name:"ArrowDownOnSquareIcon"},null,8,["class"]))]),default:u(()=>[D(" "+f(a.$t("settings.customization.save")),1)]),_:1},8,["loading","disabled"])],32)}}},Ge={class:"text-gray-900 text-lg font-medium"},Ae={class:"mt-1 text-sm text-gray-500 mb-2"},Oe={__name:"InvoicesTabDefaultFormats",setup(h){const m=F(),l=T("utils"),_=I(["customer","customerCustom","invoice","invoiceCustom","company"]),y=I(["billing","customer","customerCustom","invoiceCustom"]),o=I(["shipping","customer","customerCustom","invoiceCustom"]),s=I(["company","invoiceCustom"]);let i=I(!1);const t=k({invoice_mail_body:null,invoice_company_address_format:null,invoice_shipping_address_format:null,invoice_billing_address_format:null});l.mergeSettings(t,{...m.selectedCompanySettings});async function c(){i.value=!0;let a={settings:{...t}};return await m.updateCompanySettings({data:a,message:"settings.customization.invoices.invoice_settings_updated"}),i.value=!1,!0}return(a,n)=>{const p=d("BaseCustomInput"),B=d("BaseInputGroup"),x=d("BaseIcon"),z=d("BaseButton");return $(),C("form",{onSubmit:L(c,["prevent"])},[r("h6",Ge,f(a.$t("settings.customization.invoices.default_formats")),1),r("p",Ae,f(a.$t("settings.customization.invoices.default_formats_description")),1),e(B,{label:a.$t("settings.customization.invoices.default_invoice_email_body"),class:"mt-6 mb-4"},{default:u(()=>[e(p,{modelValue:t.invoice_mail_body,"onUpdate:modelValue":n[0]||(n[0]=v=>t.invoice_mail_body=v),fields:_.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),e(B,{label:a.$t("settings.customization.invoices.company_address_format"),class:"mt-6 mb-4"},{default:u(()=>[e(p,{modelValue:t.invoice_company_address_format,"onUpdate:modelValue":n[1]||(n[1]=v=>t.invoice_company_address_format=v),fields:s.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),e(B,{label:a.$t("settings.customization.invoices.shipping_address_format"),class:"mt-6 mb-4"},{default:u(()=>[e(p,{modelValue:t.invoice_shipping_address_format,"onUpdate:modelValue":n[2]||(n[2]=v=>t.invoice_shipping_address_format=v),fields:o.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),e(B,{label:a.$t("settings.customization.invoices.billing_address_format"),class:"mt-6 mb-4"},{default:u(()=>[e(p,{modelValue:t.invoice_billing_address_format,"onUpdate:modelValue":n[3]||(n[3]=v=>t.invoice_billing_address_format=v),fields:y.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),e(z,{loading:S(i),disabled:S(i),variant:"primary",type:"submit",class:"mt-4"},{left:u(v=>[S(i)?A("",!0):($(),U(x,{key:0,class:M(v.class),name:"ArrowDownOnSquareIcon"},null,8,["class"]))]),default:u(()=>[D(" "+f(a.$t("settings.customization.save")),1)]),_:1},8,["loading","disabled"])],32)}}},Le={class:"divide-y divide-gray-200"},Pe={__name:"InvoicesTab",setup(h){const m=T("utils"),l=F(),_=k({invoice_email_attachment:null});m.mergeSettings(_,{...l.selectedCompanySettings});const y=E({get:()=>_.invoice_email_attachment==="YES",set:async o=>{const s=o?"YES":"NO";let i={settings:{invoice_email_attachment:s}};_.invoice_email_attachment=s,await l.updateCompanySettings({data:i,message:"general.setting_updated"})}});return(o,s)=>{const i=d("BaseDivider"),t=d("BaseSwitchSection");return $(),C(G,null,[e(Ee),e(i,{class:"my-8"}),e(qe),e(i,{class:"my-8"}),e(Te),e(i,{class:"my-8"}),e(Oe),e(i,{class:"mt-6 mb-2"}),r("ul",Le,[e(t,{modelValue:y.value,"onUpdate:modelValue":s[0]||(s[0]=c=>y.value=c),title:o.$t("settings.customization.invoices.invoice_email_attachment"),description:o.$t("settings.customization.invoices.invoice_email_attachment_setting_description")},null,8,["modelValue","title","description"])])],64)}}},Re={__name:"EstimatesTabEstimateNumber",setup(h){const m=me();return(l,_)=>($(),U(X,{type:"estimate","type-store":S(m),"default-series":"EST"},null,8,["type-store"]))}},Ye={class:"text-gray-900 text-lg font-medium"},je={class:"mt-1 text-sm text-gray-500 mb-2"},Qe={class:"w-full sm:w-1/2 md:w-1/4 lg:w-1/5"},He={__name:"EstimatesTabExpiryDate",setup(h){const{t:m}=P.useI18n(),l=F(),_=T("utils");let y=I(!1);const o=k({estimate_set_expiry_date_automatically:null,estimate_expiry_date_days:null});_.mergeSettings(o,{...l.selectedCompanySettings});const s=E({get:()=>o.estimate_set_expiry_date_automatically==="YES",set:async a=>{const n=a?"YES":"NO";o.estimate_set_expiry_date_automatically=n}}),i=E(()=>({expiryDateSettings:{estimate_expiry_date_days:{required:Q.withMessage(m("validation.required"),Z(s.value)),numeric:Q.withMessage(m("validation.numbers_only"),W)}}})),t=ee(i,{expiryDateSettings:o});async function c(){if(t.value.expiryDateSettings.$touch(),t.value.expiryDateSettings.$invalid)return!1;y.value=!0;let a={settings:{...o}};return s.value||delete a.settings.estimate_expiry_date_days,await l.updateCompanySettings({data:a,message:"settings.customization.estimates.estimate_settings_updated"}),y.value=!1,!0}return(a,n)=>{const p=d("BaseSwitchSection"),B=d("BaseInput"),x=d("BaseInputGroup"),z=d("BaseIcon"),v=d("BaseButton");return $(),C("form",{onSubmit:L(c,["prevent"])},[r("h6",Ye,f(a.$t("settings.customization.estimates.expiry_date")),1),r("p",je,f(a.$t("settings.customization.estimates.expiry_date_description")),1),e(p,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=w=>s.value=w),title:a.$t("settings.customization.estimates.set_expiry_date_automatically"),description:a.$t("settings.customization.estimates.set_expiry_date_automatically_description")},null,8,["modelValue","title","description"]),s.value?($(),U(x,{key:0,label:a.$t("settings.customization.estimates.expiry_date_days"),error:S(t).expiryDateSettings.estimate_expiry_date_days.$error&&S(t).expiryDateSettings.estimate_expiry_date_days.$errors[0].$message,class:"mt-2 mb-4"},{default:u(()=>[r("div",Qe,[e(B,{modelValue:o.estimate_expiry_date_days,"onUpdate:modelValue":n[1]||(n[1]=w=>o.estimate_expiry_date_days=w),invalid:S(t).expiryDateSettings.estimate_expiry_date_days.$error,type:"number",onInput:n[2]||(n[2]=w=>S(t).expiryDateSettings.estimate_expiry_date_days.$touch())},null,8,["modelValue","invalid"])])]),_:1},8,["label","error"])):A("",!0),e(v,{loading:S(y),disabled:S(y),variant:"primary",type:"submit",class:"mt-4"},{left:u(w=>[S(y)?A("",!0):($(),U(z,{key:0,class:M(w.class),name:"ArrowDownOnSquareIcon"},null,8,["class"]))]),default:u(()=>[D(" "+f(a.$t("settings.customization.save")),1)]),_:1},8,["loading","disabled"])],32)}}},Ke={class:"text-gray-900 text-lg font-medium"},Xe={class:"mt-1 text-sm text-gray-500 mb-2"},Je={__name:"EstimatesTabDefaultFormats",setup(h){const m=F(),l=T("utils"),_=I(["customer","customerCustom","estimate","estimateCustom","company"]),y=I(["billing","customer","customerCustom","estimateCustom"]),o=I(["shipping","customer","customerCustom","estimateCustom"]),s=I(["company","estimateCustom"]);let i=I(!1);const t=k({estimate_mail_body:null,estimate_company_address_format:null,estimate_shipping_address_format:null,estimate_billing_address_format:null});l.mergeSettings(t,{...m.selectedCompanySettings});async function c(){i.value=!0;let a={settings:{...t}};return await m.updateCompanySettings({data:a,message:"settings.customization.estimates.estimate_settings_updated"}),i.value=!1,!0}return(a,n)=>{const p=d("BaseCustomInput"),B=d("BaseInputGroup"),x=d("BaseIcon"),z=d("BaseButton");return $(),C("form",{onSubmit:L(c,["prevent"])},[r("h6",Ke,f(a.$t("settings.customization.estimates.default_formats")),1),r("p",Xe,f(a.$t("settings.customization.estimates.default_formats_description")),1),e(B,{label:a.$t("settings.customization.estimates.default_estimate_email_body"),class:"mt-6 mb-4"},{default:u(()=>[e(p,{modelValue:t.estimate_mail_body,"onUpdate:modelValue":n[0]||(n[0]=v=>t.estimate_mail_body=v),fields:_.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),e(B,{label:a.$t("settings.customization.estimates.company_address_format"),class:"mt-6 mb-4"},{default:u(()=>[e(p,{modelValue:t.estimate_company_address_format,"onUpdate:modelValue":n[1]||(n[1]=v=>t.estimate_company_address_format=v),fields:s.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),e(B,{label:a.$t("settings.customization.estimates.shipping_address_format"),class:"mt-6 mb-4"},{default:u(()=>[e(p,{modelValue:t.estimate_shipping_address_format,"onUpdate:modelValue":n[2]||(n[2]=v=>t.estimate_shipping_address_format=v),fields:o.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),e(B,{label:a.$t("settings.customization.estimates.billing_address_format"),class:"mt-6 mb-4"},{default:u(()=>[e(p,{modelValue:t.estimate_billing_address_format,"onUpdate:modelValue":n[3]||(n[3]=v=>t.estimate_billing_address_format=v),fields:y.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),e(z,{loading:S(i),disabled:S(i),variant:"primary",type:"submit",class:"mt-4"},{left:u(v=>[S(i)?A("",!0):($(),U(x,{key:0,class:M(v.class),name:"ArrowDownOnSquareIcon"},null,8,["class"]))]),default:u(()=>[D(" "+f(a.$t("settings.customization.save")),1)]),_:1},8,["loading","disabled"])],32)}}},We={class:"text-gray-900 text-lg font-medium"},Ze={class:"mt-1 text-sm text-gray-500"},et={__name:"EstimatesTabConvertEstimate",setup(h){const{t:m,tm:l}=P.useI18n(),_=F(),y=K(),o=T("utils"),s=k({estimate_convert_action:null});o.mergeSettings(s,{..._.selectedCompanySettings}),E(()=>y.config.estimate_convert_action.map(t=>(t.title=m(t.key),t)));async function i(){let t={settings:{...s}};return await _.updateCompanySettings({data:t,message:"settings.customization.estimates.estimate_settings_updated"}),!0}return(t,c)=>{const a=d("BaseRadio"),n=d("BaseInputGroup");return $(),C(G,null,[r("h6",We,f(t.$t("settings.customization.estimates.convert_estimate_options")),1),r("p",Ze,f(t.$t("settings.customization.estimates.convert_estimate_description")),1),e(n,{required:""},{default:u(()=>[e(a,{id:"no_action",modelValue:s.estimate_convert_action,"onUpdate:modelValue":[c[0]||(c[0]=p=>s.estimate_convert_action=p),i],label:t.$t("settings.customization.estimates.no_action"),size:"sm",name:"filter",value:"no_action",class:"mt-2"},null,8,["modelValue","label"]),e(a,{id:"delete_estimate",modelValue:s.estimate_convert_action,"onUpdate:modelValue":[c[1]||(c[1]=p=>s.estimate_convert_action=p),i],label:t.$t("settings.customization.estimates.delete_estimate"),size:"sm",name:"filter",value:"delete_estimate",class:"my-2"},null,8,["modelValue","label"]),e(a,{id:"mark_estimate_as_accepted",modelValue:s.estimate_convert_action,"onUpdate:modelValue":[c[2]||(c[2]=p=>s.estimate_convert_action=p),i],label:t.$t("settings.customization.estimates.mark_estimate_as_accepted"),size:"sm",name:"filter",value:"mark_estimate_as_accepted"},null,8,["modelValue","label"])]),_:1})],64)}}},tt={class:"divide-y divide-gray-200"},st={__name:"EstimatesTab",setup(h){const m=T("utils"),l=F(),_=k({estimate_email_attachment:null});m.mergeSettings(_,{...l.selectedCompanySettings});const y=E({get:()=>_.estimate_email_attachment==="YES",set:async o=>{const s=o?"YES":"NO";let i={settings:{estimate_email_attachment:s}};_.estimate_email_attachment=s,await l.updateCompanySettings({data:i,message:"general.setting_updated"})}});return(o,s)=>{const i=d("BaseDivider"),t=d("BaseSwitchSection");return $(),C(G,null,[e(Re),e(i,{class:"my-8"}),e(He),e(i,{class:"my-8"}),e(et),e(i,{class:"my-8"}),e(Je),e(i,{class:"mt-6 mb-2"}),r("ul",tt,[e(t,{modelValue:y.value,"onUpdate:modelValue":s[0]||(s[0]=c=>y.value=c),title:o.$t("settings.customization.estimates.estimate_email_attachment"),description:o.$t("settings.customization.estimates.estimate_email_attachment_setting_description")},null,8,["modelValue","title","description"])])],64)}}},at={__name:"PaymentsTabPaymentNumber",setup(h){const m=pe();return(l,_)=>($(),U(X,{type:"payment","type-store":S(m),"default-series":"PAY"},null,8,["type-store"]))}},nt={class:"text-gray-900 text-lg font-medium"},it={class:"mt-1 text-sm text-gray-500 mb-2"},ot={__name:"PaymentsTabDefaultFormats",setup(h){const m=F(),l=T("utils"),_=I(["customer","customerCustom","company","payment","paymentCustom"]),y=I(["billing","customer","customerCustom","paymentCustom"]),o=I(["company","paymentCustom"]);let s=I(!1);const i=k({payment_mail_body:null,payment_company_address_format:null,payment_from_customer_address_format:null});l.mergeSettings(i,{...m.selectedCompanySettings});async function t(){s.value=!0;let c={settings:{...i}};return await m.updateCompanySettings({data:c,message:"settings.customization.payments.payment_settings_updated"}),s.value=!1,!0}return(c,a)=>{const n=d("BaseCustomInput"),p=d("BaseInputGroup"),B=d("BaseIcon"),x=d("BaseButton");return $(),C("form",{onSubmit:L(t,["prevent"])},[r("h6",nt,f(c.$t("settings.customization.payments.default_formats")),1),r("p",it,f(c.$t("settings.customization.payments.default_formats_description")),1),e(p,{label:c.$t("settings.customization.payments.default_payment_email_body"),class:"mt-6 mb-4"},{default:u(()=>[e(n,{modelValue:i.payment_mail_body,"onUpdate:modelValue":a[0]||(a[0]=z=>i.payment_mail_body=z),fields:_.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),e(p,{label:c.$t("settings.customization.payments.company_address_format"),class:"mt-6 mb-4"},{default:u(()=>[e(n,{modelValue:i.payment_company_address_format,"onUpdate:modelValue":a[1]||(a[1]=z=>i.payment_company_address_format=z),fields:o.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),e(p,{label:c.$t("settings.customization.payments.from_customer_address_format"),class:"mt-6 mb-4"},{default:u(()=>[e(n,{modelValue:i.payment_from_customer_address_format,"onUpdate:modelValue":a[2]||(a[2]=z=>i.payment_from_customer_address_format=z),fields:y.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),e(x,{loading:S(s),disabled:S(s),variant:"primary",type:"submit",class:"mt-4"},{left:u(z=>[S(s)?A("",!0):($(),U(B,{key:0,class:M(z.class),name:"ArrowDownOnSquareIcon"},null,8,["class"]))]),default:u(()=>[D(" "+f(c.$t("settings.customization.save")),1)]),_:1},8,["loading","disabled"])],32)}}},lt={class:"divide-y divide-gray-200"},mt={__name:"PaymentsTab",setup(h){const m=T("utils"),l=F(),_=k({payment_email_attachment:null});m.mergeSettings(_,{...l.selectedCompanySettings});const y=E({get:()=>_.payment_email_attachment==="YES",set:async o=>{const s=o?"YES":"NO";let i={settings:{payment_email_attachment:s}};_.payment_email_attachment=s,await l.updateCompanySettings({data:i,message:"general.setting_updated"})}});return(o,s)=>{const i=d("BaseDivider"),t=d("BaseSwitchSection");return $(),C(G,null,[e(at),e(i,{class:"my-8"}),e(ot),e(i,{class:"mt-6 mb-2"}),r("ul",lt,[e(t,{modelValue:y.value,"onUpdate:modelValue":s[0]||(s[0]=c=>y.value=c),title:o.$t("settings.customization.payments.payment_email_attachment"),description:o.$t("settings.customization.payments.payment_email_attachment_setting_description")},null,8,["modelValue","title","description"])])],64)}}},ut={class:"flex flex-wrap justify-end mt-2 lg:flex-nowrap"},rt={class:"inline-block"},dt={__name:"ItemsTab",setup(h){const{t:m}=P.useI18n(),l=I(null),_=ue(),y=re(),o=de(),s=E(()=>[{key:"name",label:m("settings.customization.items.unit_name"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]);async function i({page:n,filter:p,sort:B}){let x={orderByField:B.fieldName||"created_at",orderBy:B.order||"desc",page:n},z=await _.fetchItemUnits(x);return{data:z.data.data,pagination:{totalPages:z.data.meta.last_page,currentPage:n,totalCount:z.data.meta.total,limit:5}}}async function t(){y.openModal({title:m("settings.customization.items.add_item_unit"),componentName:"ItemUnitModal",refreshData:l.value.refresh,size:"sm"})}async function c(n){_.fetchItemUnit(n.data.id),y.openModal({title:m("settings.customization.items.edit_item_unit"),componentName:"ItemUnitModal",id:n.data.id,data:n.data,refreshData:l.value&&l.value.refresh})}function a(n){o.openDialog({title:m("general.are_you_sure"),message:m("settings.customization.items.item_unit_confirm_delete"),yesLabel:m("general.yes"),noLabel:m("general.no"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async p=>{p&&(await _.deleteItemUnit(n.data.id),l.value&&l.value.refresh())})}return(n,p)=>{const B=d("BaseIcon"),x=d("BaseButton"),z=d("BaseDropdownItem"),v=d("BaseDropdown"),w=d("BaseTable");return $(),C(G,null,[e(ge),r("div",ut,[e(x,{variant:"primary-outline",onClick:t},{left:u(N=>[e(B,{class:M(N.class),name:"PlusIcon"},null,8,["class"])]),default:u(()=>[D(" "+f(n.$t("settings.customization.items.add_item_unit")),1)]),_:1})]),e(w,{ref_key:"table",ref:l,class:"mt-10",data:i,columns:s.value},{"cell-actions":u(({row:N})=>[e(v,null,{activator:u(()=>[r("div",rt,[e(B,{name:"EllipsisHorizontalIcon",class:"text-gray-500"})])]),default:u(()=>[e(z,{onClick:H=>c(N)},{default:u(()=>[e(B,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),D(" "+f(n.$t("general.edit")),1)]),_:2},1032,["onClick"]),e(z,{onClick:H=>a(N)},{default:u(()=>[e(B,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),D(" "+f(n.$t("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["columns"])],64)}}},ct={class:"relative"},ft={__name:"CustomizationSetting",setup(h){return(m,l)=>{const _=d("BaseTab"),y=d("BaseTabGroup"),o=d("BaseCard");return $(),C("div",ct,[e(o,{"container-class":"px-4 py-5 sm:px-8 sm:py-2"},{default:u(()=>[e(y,null,{default:u(()=>[e(_,{"tab-panel-container":"py-4 mt-px",title:m.$t("settings.customization.invoices.title")},{default:u(()=>[e(Pe)]),_:1},8,["title"]),e(_,{"tab-panel-container":"py-4 mt-px",title:m.$t("settings.customization.estimates.title")},{default:u(()=>[e(st)]),_:1},8,["title"]),e(_,{"tab-panel-container":"py-4 mt-px",title:m.$t("settings.customization.payments.title")},{default:u(()=>[e(mt)]),_:1},8,["title"]),e(_,{"tab-panel-container":"py-4 mt-px",title:m.$t("settings.customization.items.title")},{default:u(()=>[e(dt)]),_:1},8,["title"])]),_:1})]),_:1})])}}};export{ft as default};
