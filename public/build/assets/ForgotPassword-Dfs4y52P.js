import{v as w,I as V,e as f,j as S,i as q,c as u,a as r,b as x,w as m,l as n,m as N,r as i,N as M,f as g,h as j,g as C,o as d,t as c,q as D}from"./main-BYz-svJc.js";import{u as E}from"./auth-CC6UYcBi.js";const F={key:0},G={key:1},P={class:"mt-4 mb-4 text-sm"},T={__name:"ForgotPassword",setup(A){const $=E(),{t:p}=w.useI18n(),h=M(),s=V({email:"",company:""}),v=f(!1),t=f(!1),y=S(()=>({email:{required:g.withMessage(p("validation.required"),C),email:g.withMessage(p("validation.email_incorrect"),j)}})),e=q(y,s);function B(o){if(e.value.$touch(),e.value.$invalid)return!0;t.value=!0;let a={...s,company:h.params.company};$.forgotPassword(a).then(l=>{t.value=!1}).catch(l=>{t.value=!1}),v.value=!0}return(o,a)=>{const l=i("BaseInput"),b=i("BaseInputGroup"),k=i("BaseButton"),I=i("router-link");return d(),u("form",{id:"loginForm",onSubmit:N(B,["prevent"])},[r(b,{error:n(e).email.$error&&n(e).email.$errors[0].$message,label:o.$t("login.enter_email"),class:"mb-4",required:""},{default:m(()=>[r(l,{modelValue:s.email,"onUpdate:modelValue":a[0]||(a[0]=_=>s.email=_),type:"email",name:"email",invalid:n(e).email.$error,onInput:a[1]||(a[1]=_=>n(e).email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["error","label"]),r(k,{loading:t.value,disabled:t.value,type:"submit",variant:"primary"},{default:m(()=>[v.value?(d(),u("div",G,c(o.$t("validation.not_yet")),1)):(d(),u("div",F,c(o.$t("validation.send_reset_link")),1))]),_:1},8,["loading","disabled"]),x("div",P,[r(I,{to:"login",class:"text-sm text-primary-400 hover:text-gray-700"},{default:m(()=>[D(c(o.$t("general.back_to_login")),1)]),_:1})])],32)}}};export{T as default};
