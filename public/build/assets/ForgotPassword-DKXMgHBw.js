import{u as k,v as I,I as V,e as _,f,h as x,g as S,i as q,c as l,a as i,b as N,w as u,l as n,m as M,r,o as m,t as d,q as E,s as C,a3 as D}from"./main-DlOnIu1m.js";const F={key:0},G={key:1},j={class:"mt-4 mb-4 text-sm"},T={__name:"ForgotPassword",setup(L){const g=k(),{t:c}=I.useI18n(),o=V({email:""}),p=_(!1),t=_(!1),y={email:{required:f.withMessage(c("validation.required"),S),email:f.withMessage(c("validation.email_incorrect"),x)}},a=q(y,o);async function $(s){if(a.value.$touch(),!a.value.$invalid)try{t.value=!0,(await C.post("/api/v1/auth/password/email",o)).data&&g.showNotification({type:"success",message:"Mail sent successfully"}),p.value=!0,t.value=!1}catch(e){D(e),t.value=!1}}return(s,e)=>{const h=r("BaseInput"),b=r("BaseInputGroup"),B=r("BaseButton"),w=r("router-link");return m(),l("form",{id:"loginForm",onSubmit:M($,["prevent"])},[i(b,{error:n(a).email.$error&&n(a).email.$errors[0].$message,label:s.$t("login.enter_email"),class:"mb-4",required:""},{default:u(()=>[i(h,{modelValue:o.email,"onUpdate:modelValue":e[0]||(e[0]=v=>o.email=v),invalid:n(a).email.$error,focus:"",type:"email",name:"email",onInput:e[1]||(e[1]=v=>n(a).email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["error","label"]),i(B,{loading:t.value,disabled:t.value,type:"submit",variant:"primary"},{default:u(()=>[p.value?(m(),l("div",G,d(s.$t("validation.not_yet")),1)):(m(),l("div",F,d(s.$t("validation.send_reset_link")),1))]),_:1},8,["loading","disabled"]),N("div",j,[i(w,{to:"/login",class:"text-sm text-primary-400 hover:text-gray-700"},{default:u(()=>[E(d(s.$t("general.back_to_login")),1)]),_:1})])],32)}}};export{T as default};
