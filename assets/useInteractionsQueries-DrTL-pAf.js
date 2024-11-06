import{n as q,p,v as Q,o as F,q as D,s as A,t as g,w as j,x as m,y,z as I,A as f,E as x,H as h,j as n,G as c,I as b,i as w,r as K,C as E,d as R,e as G,L as M,J as $,K as N,M as _}from"./index-BVUbJ7Lz.js";import{D as O}from"./DataTable-DQPq8hUL.js";import{S as V}from"./SebraDialog-BySdJsEA.js";import{f as S,t as U}from"./date-CmwPcWLy.js";import{u as z,C as k}from"./index.esm-DxZzVQH1.js";import{u as W}from"./useContactsQueries-BOXpJhoa.js";import{S as P,D as H,A as J}from"./SebraForm-DP6K8exJ.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="adf22117-f7a4-4b00-8093-cbbcd57c1cd4",t._sentryDebugIdIdentifier="sentry-dbid-adf22117-f7a4-4b00-8093-cbbcd57c1cd4")}catch{}})();const B=async()=>{const e=(await g("SELECT * FROM interactions")).map(i=>({...i,contacts:[]})),a=j(e,"id"),s=await g("SELECT * FROM contacts"),d=j(s,"id");return(await g("SELECT * FROM interaction_contacts")).forEach(i=>{const o=a.get(i.interactionId),u=d.get(i.contactId);!o||!u||(o.contacts=o.contacts||[]).push(u)}),{Interactions:{docs:Array.from(a.values())}}},X=async t=>{const e=await q("interactions",p({...t,interactionId:Q()},["id","interactionType","interactionDate","notes"]));return await T({id:e.id,contacts:t.contacts}),{createInteraction:e}},Y=async t=>{const e=await F("interactions",p(t,["interactionType","interactionDate","notes"]),p(t,["id"]));return await tt(t),{updateInteraction:e}},Z=async({id:t})=>(await L({id:t}),await D("interactions",{id:t}),{deleteInteraction:{id:t}}),T=async t=>{await A("interaction_contacts",(t.contacts||[]).map(({id:e})=>({interactionId:t.id,contactId:e})))},tt=async t=>{await L(t),await T(t)},L=async({id:t})=>{await D("interaction_contacts",{interactionId:t})},et=()=>m(y(`
      query GetInteractions {
        Interactions(sort: "interactionDate:desc") {
          docs {
            id
            interactionType
            interactionDate
            notes
            createdAt
            updatedAt

            contacts {
              id
              contactName
              email
              phone
              jobTitle
              address
              createdAt
              updatedAt
            }
          }
        }
      }
    `))(),nt=t=>{var e;return m(y(`
      mutation CreateInteraction($data: mutationInteractionInput!) {
        createInteraction(data: $data) {
          id
        }
      }
    `))({data:p({...t,contacts:(e=t.contacts)==null?void 0:e.map(a=>a.id)},["interactionType","interactionDate","notes","contacts"])})},at=t=>{var e;return m(y(`
      mutation UpdateInteraction($id: String!, $data: mutationInteractionUpdateInput!) {
        updateInteraction(id: $id, data: $data) {
          id
        }
      }
    `))({id:t.id,data:p({...t,contacts:(e=t.contacts)==null?void 0:e.map(a=>a.id)},["interactionType","interactionDate","notes","contacts"])})},rt=t=>m(y(`
      mutation DeleteInteraction($id: String!) {
        deleteInteraction(id: $id) {
          id
        }
      }
    `))({id:t.id}),it=()=>{const[{isDemo:t}]=I(),e=f(),{showSnackbar:a}=x();return h({mutationFn:t?X:nt,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),a("Interaktion sparat!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle sparas.","error")}})},ot=()=>{const[{isDemo:t}]=I(),e=f(),{showSnackbar:a}=x();return h({mutationFn:t?Y:at,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),a("Interaktion uppdaterat!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle uppdateras.","error")}})},st=()=>{const[{isDemo:t}]=I(),e=f(),{showSnackbar:a}=x();return h({mutationFn:t?Z:rt,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),a("Interaktion borttaget!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle tas bort.","error")}})},ct=({formProps:t,...e})=>{const{data:a=[]}=W(),{control:s,handleSubmit:d,register:l,formState:{errors:r}}=z(t);return n.jsx(P,{...e,handleSubmit:d,children:n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:12,sm:6,children:n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:12,children:n.jsx(b,{fullWidth:!0,label:"Typ av interaktion",type:"text",margin:"none",...l("interactionType",{required:!0}),error:!!r.interactionType})}),n.jsx(c,{item:!0,xs:12,children:n.jsx(b,{multiline:!0,fullWidth:!0,minRows:4,label:"Noteringar",type:"text",margin:"none",...l("notes"),error:!!r.notes})})]})}),n.jsx(c,{item:!0,xs:12,sm:6,children:n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:12,children:n.jsx(k,{control:s,name:"interactionDate",rules:{required:!0},render:({field:i})=>n.jsx(H,{label:"Interaktionsdatum",value:w(i.value),inputRef:i.ref,onChange:o=>i.onChange(S(o))})})}),n.jsx(c,{item:!0,xs:12,children:n.jsx(k,{name:"contacts",control:s,render:({field:i})=>n.jsx(J,{multiple:!0,disableCloseOnSelect:!0,id:"multiple-contacts",options:a,getOptionKey:o=>o.id,getOptionLabel:o=>o.contactName,isOptionEqualToValue:(o,u)=>o.id===u.id,value:i.value||[],onChange:(o,u)=>i.onChange(u),renderInput:o=>n.jsx(b,{...o,label:"Kontakter",variant:"outlined",fullWidth:!0,error:!!r.contacts}),renderTags:(o,u)=>o.map((C,v)=>K.createElement(E,{...u({index:v}),key:C.id,label:C.contactName}))})})})]})})]})})},gt=({interactions:t,isLoading:e,defaultValues:a})=>{const{mutate:s}=it(),{mutate:d}=ot(),{mutate:l}=st();return n.jsx(O,{data:t,getRowId:r=>r.id,state:{isLoading:e},columns:[{accessorKey:"interactionType",header:"Typ",filterVariant:"multi-select"},{accessorKey:"contacts",header:"Kontakter",minSize:150,enableEditing:!1,Cell:({cell:r})=>n.jsx(R,{disablePadding:!0,children:r.getValue().map(i=>n.jsx(G,{sx:{py:.25},disableGutters:!0,children:n.jsx(E,{component:M,variant:"outlined",avatar:n.jsx($,{...N(i.contactName)}),label:i.contactName,to:`/home/contacts/${i.id}`,clickable:!0,size:"small"})},i.id))})},{accessorKey:"notes",header:"Noteringar"},{accessorFn:r=>w(r.interactionDate),header:"Interaktionsdatum",filterVariant:"date-range",enableEditing:!1,Cell:({cell:r})=>S(U(r.getValue()))}],renderEditRowDialogContent:({row:r,table:i})=>n.jsx(V,{table:i,row:r,titles:{creating:"Ny interaktion",editing:"Redigera interaktion"},FormComponent:ct,defaultValues:a}),onCreate:r=>s(r),onUpdate:r=>d(r),onDelete:r=>l(r)})},bt=()=>{const[{isDemo:t}]=I(),e=t?B:et;return _({queryKey:["interactions"],queryFn:()=>e(),select:a=>{var s,d;return((d=(s=a.Interactions)==null?void 0:s.docs)==null?void 0:d.filter(l=>!!l))||[]}})};export{gt as I,bt as u};
//# sourceMappingURL=useInteractionsQueries-DrTL-pAf.js.map
