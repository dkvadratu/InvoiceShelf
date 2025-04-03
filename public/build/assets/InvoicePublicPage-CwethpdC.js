import{r as c,c as m,o as n,b as t,t as o,L as f,a as i,w as u,e as k,s as I,N as L,j as v,l as d,q as h,n as S,K as j}from"./main-DlOnIu1m.js";const C={class:"bg-white shadow overflow-hidden rounded-lg mt-6"},P={class:"px-4 py-5 sm:px-6"},N={class:"text-lg leading-6 font-medium text-gray-900"},T={key:0,class:"border-t border-gray-200 px-4 py-5 sm:p-0"},D={class:"sm:divide-y sm:divide-gray-200"},H={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},M={class:"text-sm font-medium text-gray-500"},V={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},R={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},U={class:"text-sm font-medium text-gray-500"},q={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},z={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},F={class:"text-sm font-medium text-gray-500 capitalize"},A={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},E={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},K={class:"text-sm font-medium text-gray-500"},O={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Z={key:0,class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},G={class:"text-sm font-medium text-gray-500"},J={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Q=["innerHTML"],W={key:1,class:"w-full flex items-center justify-center p-5"},X={__name:"InvoiceInformationCard",props:{invoice:{type:[Object,null],required:!0}},setup(e){return(s,r)=>{const p=c("BaseInvoiceStatusLabel"),_=c("BaseInvoiceStatusBadge"),y=c("BaseFormatMoney"),g=c("BaseSpinner");return n(),m("div",C,[t("div",P,[t("h3",N,o(s.$t("invoices.invoice_information")),1)]),e.invoice?(n(),m("div",T,[t("dl",D,[t("div",H,[t("dt",M,o(s.$t("general.from")),1),t("dd",V,o(e.invoice.company.name),1)]),t("div",R,[t("dt",U,o(s.$t("general.to")),1),t("dd",q,o(e.invoice.customer.name),1)]),t("div",z,[t("dt",F,o(s.$t("invoices.paid_status").toLowerCase()),1),t("dd",A,[i(_,{status:e.invoice.paid_status,class:"px-3 py-1"},{default:u(()=>[i(p,{status:e.invoice.paid_status},null,8,["status"])]),_:1},8,["status"])])]),t("div",E,[t("dt",K,o(s.$t("invoices.total")),1),t("dd",O,[i(y,{currency:e.invoice.currency,amount:e.invoice.total},null,8,["currency","amount"])])]),e.invoice.formatted_notes?(n(),m("div",Z,[t("dt",G,o(s.$t("invoices.notes")),1),t("dd",J,[t("span",{innerHTML:e.invoice.formatted_notes},null,8,Q)])])):f("",!0)])])):(n(),m("div",W,[i(g,{class:"text-primary-500 h-10 w-10"})]))])}}},Y={class:"h-screen overflow-y-auto min-h-0"},tt={class:"relative p-6 pb-28 px-4 md:px-6 w-full md:w-auto md:max-w-xl mx-auto"},st={class:"flex flex-col md:flex-row absolute md:relative bottom-2 left-0 px-4 md:px-0 w-full md:space-x-4 md:space-y-0 space-y-2"},et=["href"],ot={key:0,class:"flex items-center justify-center mt-4 text-gray-500 font-normal"},at={href:"https://invoiceshelf.com",target:"_blank"},nt=["src"],ct={__name:"InvoicePublicPage",setup(e){let s=k(null);const r=L(),p=S();_();async function _(){let a=await I.get(`/customer/invoices/${r.params.hash}`);s.value=a.data.data}const y=v(()=>r.path+"?pdf");function g(){return new URL("/build/assets/logo-gray-DmcZTzo8.png",import.meta.url)}const w=v(()=>window.customer_logo?window.customer_logo:!1),b=v(()=>{var a;return(a=s.value)==null?void 0:a.invoice_number});function B(){p.push({name:"invoice.pay",params:{hash:r.params.hash,company:s.value.company.slug}})}return(a,l)=>{const x=c("BaseButton"),$=c("BasePageHeader");return n(),m("div",Y,[l[1]||(l[1]=t("div",{class:"bg-gradient-to-r from-primary-500 to-primary-400 h-5"},null,-1)),t("div",tt,[i($,{title:b.value||""},{actions:u(()=>[t("div",st,[t("a",{href:y.value,target:"_blank",class:"block w-full"},[i(x,{variant:"primary-outline",class:"justify-center w-full"},{default:u(()=>[h(o(a.$t("general.download_pdf")),1)]),_:1})],8,et),d(s)&&d(s).paid_status!=="PAID"&&d(s).payment_module_enabled?(n(),j(x,{key:0,variant:"primary",class:"justify-center",onClick:B},{default:u(()=>[h(o(a.$t("general.pay_invoice")),1)]),_:1})):f("",!0)])]),_:1},8,["title"]),i(X,{invoice:d(s)},null,8,["invoice"]),w.value?f("",!0):(n(),m("div",ot,[l[0]||(l[0]=h(" Powered by ")),t("a",at,[t("img",{src:g(),class:"h-4 ml-1 mb-1"},null,8,nt)])]))])])}}};export{ct as default};
