import{v as S,e as v,j as w,i as k,c as C,a as r,b as $,w as l,l as e,m as M,r as u,n as j,N as E,f as p,g as y,h as N,o as L,q as D,t as _,M as T}from"./main-DlOnIu1m.js";import{u as G}from"./auth-nkwOYFvY.js";const O={class:"flex items-center justify-between"},z={__name:"Login",setup(P){const b=j(),B=E(),t=G(),{t:m}=S.useI18n();let i=v(!1);const d=v(!1),I=w(()=>d.value?"text":"password"),h=w(()=>({loginData:{email:{required:p.withMessage(m("validation.required"),y),email:p.withMessage(m("validation.email_incorrect"),N)},password:{required:p.withMessage(m("validation.required"),y)}}})),o=k(h,t);async function V(){if(o.value.loginData.$touch(),o.value.loginData.$invalid)return!0;i.value=!0;let n={...t.loginData,company:B.params.company};try{return await t.login(n),i.value=!1,b.push({name:"customer.dashboard"});t.$reset()}catch{i.value=!1}}return(n,a)=>{const c=u("BaseInput"),g=u("BaseInputGroup"),f=u("BaseIcon"),q=u("router-link"),x=u("BaseButton");return L(),C("form",{id:"loginForm",class:"space-y-6",action:"#",method:"POST",onSubmit:M(V,["prevent"])},[r(g,{error:e(o).loginData.email.$error&&e(o).loginData.email.$errors[0].$message,label:n.$t("login.email"),class:"mb-4",required:""},{default:l(()=>[r(c,{modelValue:e(t).loginData.email,"onUpdate:modelValue":a[0]||(a[0]=s=>e(t).loginData.email=s),type:"email",invalid:e(o).loginData.email.$error,onInput:a[1]||(a[1]=s=>e(o).loginData.email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["error","label"]),r(g,{error:e(o).loginData.password.$error&&e(o).loginData.password.$errors[0].$message,label:n.$t("login.password"),class:"mb-4",required:""},{default:l(()=>[r(c,{modelValue:e(t).loginData.password,"onUpdate:modelValue":a[3]||(a[3]=s=>e(t).loginData.password=s),type:I.value,invalid:e(o).loginData.password.$error,onInput:a[4]||(a[4]=s=>e(o).loginData.password.$touch())},{right:l(()=>[r(f,{name:d.value?"EyeIcon":"EyeOffIcon",class:"mr-1 text-gray-500 cursor-pointer",onClick:a[2]||(a[2]=s=>d.value=!d.value)},null,8,["name"])]),_:1},8,["modelValue","type","invalid"])]),_:1},8,["error","label"]),$("div",O,[r(q,{to:{name:"customer.forgot-password"},class:"text-sm text-primary-600 hover:text-gray-500"},{default:l(()=>[D(_(n.$t("login.forgot_password")),1)]),_:1})]),$("div",null,[r(x,{loading:e(i),disabled:e(i),type:"submit",class:"w-full justify-center"},{left:l(s=>[r(f,{name:"LockClosedIcon",class:T(s.class)},null,8,["class"])]),default:l(()=>[D(" "+_(n.$t("login.login")),1)]),_:1},8,["loading","disabled"])])],32)}}};export{z as default};
