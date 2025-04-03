import{F as q,e as E,v as F,I as M,j as m,i as h,K as y,w as u,r as a,f as w,h as Y,g as k,o as S,b as _,a as d,m as D,l as o,q as U,t as j,L as G,M as O}from"./main-DlOnIu1m.js";const z={class:"grid-cols-2 col-span-1 mt-14"},K={class:"divide-y divide-gray-200"},A={__name:"NotificationsSetting",setup(L){const s=q();let r=E(!1);const{t:v}=F.useI18n(),i=M({notify_invoice_viewed:s.selectedCompanySettings.notify_invoice_viewed,notify_estimate_viewed:s.selectedCompanySettings.notify_estimate_viewed,notification_email:s.selectedCompanySettings.notification_email}),B=m(()=>({notification_email:{required:w.withMessage(v("validation.required"),k),email:w.withMessage(v("validation.email_incorrect"),Y)}})),l=h(B,m(()=>i)),p=m({get:()=>i.notify_invoice_viewed==="YES",set:async e=>{const t=e?"YES":"NO";let c={settings:{notify_invoice_viewed:t}};i.notify_invoice_viewed=t,await s.updateCompanySettings({data:c,message:"general.setting_updated"})}}),f=m({get:()=>i.notify_estimate_viewed==="YES",set:async e=>{const t=e?"YES":"NO";let c={settings:{notify_estimate_viewed:t}};i.notify_estimate_viewed=t,await s.updateCompanySettings({data:c,message:"general.setting_updated"})}});async function $(){if(l.value.$touch(),l.value.$invalid)return!0;r.value=!0;const e={settings:{notification_email:i.notification_email}};await s.updateCompanySettings({data:e,message:"settings.notification.email_save_message"}),r.value=!1}return(e,t)=>{const c=a("BaseInput"),V=a("BaseInputGroup"),C=a("BaseIcon"),I=a("BaseButton"),b=a("BaseDivider"),g=a("BaseSwitchSection"),N=a("BaseSettingCard");return S(),y(N,{title:e.$t("settings.notification.title"),description:e.$t("settings.notification.description")},{default:u(()=>[_("form",{action:"",onSubmit:D($,["prevent"])},[_("div",z,[d(V,{error:o(l).notification_email.$error&&o(l).notification_email.$errors[0].$message,label:e.$t("settings.notification.email"),class:"my-2",required:""},{default:u(()=>[d(c,{modelValue:i.notification_email,"onUpdate:modelValue":t[0]||(t[0]=n=>i.notification_email=n),modelModifiers:{trim:!0},invalid:o(l).notification_email.$error,type:"email",onInput:t[1]||(t[1]=n=>o(l).notification_email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["error","label"]),d(I,{disabled:o(r),loading:o(r),variant:"primary",type:"submit",class:"mt-6"},{left:u(n=>[o(r)?G("",!0):(S(),y(C,{key:0,class:O(n.class),name:"SaveIcon"},null,8,["class"]))]),default:u(()=>[U(" "+j(e.$t("settings.notification.save")),1)]),_:1},8,["disabled","loading"])])],32),d(b,{class:"mt-6 mb-2"}),_("ul",K,[d(g,{modelValue:p.value,"onUpdate:modelValue":t[2]||(t[2]=n=>p.value=n),title:e.$t("settings.notification.invoice_viewed"),description:e.$t("settings.notification.invoice_viewed_desc")},null,8,["modelValue","title","description"]),d(g,{modelValue:f.value,"onUpdate:modelValue":t[3]||(t[3]=n=>f.value=n),title:e.$t("settings.notification.estimate_viewed"),description:e.$t("settings.notification.estimate_viewed_desc")},null,8,["modelValue","title","description"])])]),_:1},8,["title","description"])}}};export{A as default};
