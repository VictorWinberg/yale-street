import{Z as F,j as s,x as p,y as h,p as j,a2 as U,a3 as G,a4 as I,a5 as K,v as P,n as H,q as O,a6 as L,a7 as $,z as m,A as w,E as x,H as g,a8 as Q,a9 as z,M as S,aa as B,h as C,r as D,B as q,u as J,G as y,I as k,ab as V}from"./index-BVUbJ7Lz.js";import{u as N,C as R}from"./index.esm-DxZzVQH1.js";import{S as Y,A as X}from"./SebraForm-DP6K8exJ.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="63f2edcc-673d-4ddd-a135-a64d9c5199cf",e._sentryDebugIdIdentifier="sentry-dbid-63f2edcc-673d-4ddd-a135-a64d9c5199cf")}catch{}})();const Z=F(s.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload"),ee=F(s.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload"),te=e=>p(h(`
      query GetDocuments($where: Media_where) {
        allMedia(sort: "id", where: $where) {
          docs {
            id
            filename
            mimeType
            thumbnailURL
            alt
            url
            createdAt
            updatedAt
          }
        }
      }
    `))({where:e}),ne=e=>p(h(`
      query GetDocument($id: String!) {
        Media(id: $id) {
          id
          filename
          mimeType
          thumbnailURL
          alt
          url
          createdAt
          updatedAt
        }
      }
    `))({id:e.id}),oe=e=>p(h(`
      mutation DeleteDocument($id: String!) {
        deleteMedia(id: $id) {
          id
        }
      }
    `))({id:e.id}),re=e=>p(h(`
      query GetDocumentReferences($where: DocumentReference_where) {
        DocumentReferences(sort: "id", where: $where) {
          docs {
            id
            entityId
            entityType
            createdAt
            updatedAt

            document {
              id
              alt
              filename
              mimeType
              thumbnailURL
              url
            }
          }
        }
      }
    `))({where:e}),se=e=>p(h(`
      mutation CreateDocumentReference($data: mutationDocumentReferenceInput!) {
        createDocumentReference(data: $data) {
          id
        }
      }
    `))({data:{...j(e,["entityId","entityType"]),document:e.document.id}}),ae=e=>p(h(`
      mutation UpdateDocumentReference($id: String!, $data: mutationDocumentReferenceUpdateInput!) {
        updateDocumentReference(id: $id, data: $data) {
          id
        }
      }
    `))({id:e.id,data:{...j(e,["entityId","entityType"]),document:e.document.id}}),ie=e=>p(h(`
      mutation DeleteDocumentReference($id: String!) {
        deleteDocumentReference(id: $id) {
          id
        }
      }
    `))({id:e.id}),ce=async e=>{const t=await U("document_references",G(e)),{allMedia:n}=await I({id:{in:t.map(o=>o.document)}});return{DocumentReferences:{docs:t.map(o=>({...o,document:n.docs.find(a=>a.id===o.document)}))}}},_=async e=>{K(e,["document","entityType","entityId"]);const t=j({...e,id:P(),document:e.document.id},["id","document","entityType","entityId"]);return{createDocumentReference:await H("document_references",t)}},de=async({id:e,...t})=>(await T({id:e}),{updateDocumentReference:(await _(t)).createDocumentReference}),T=async({id:e})=>({deleteDocumentReference:await O("document_references",{id:e})}),ue=async e=>{const{upload:t,alt:n}=e;if(!t)throw new Error("No file provided");const r=L(),o=new FormData;o.append("file",t),o.append("_payload",JSON.stringify({alt:n}));const a=await fetch(`${$}/media`,{method:"POST",body:o,headers:{...r&&{Authorization:`JWT ${r}`}}});if(!a.ok)throw new Error("Failed to upload document");return await a.json()},le=async e=>{const{upload:t,alt:n}=e,r=L();let o,a={};t?(o=new FormData,o.append("file",t),o.append("_payload",JSON.stringify({alt:n}))):(o=JSON.stringify({alt:n}),a={"Content-Type":"application/json"});const l=await fetch(`${$}/media/?where[id][equals]=${e.id}`,{method:"PATCH",body:o,headers:{...r&&{Authorization:`JWT ${r}`},...a}});if(!l.ok)throw new Error("Failed to update document");return await l.json()},ve=()=>{const[{isDemo:e}]=m(),t=w(),{showSnackbar:n}=x();return g({mutationFn:e?Q:ue,onSuccess:()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]}),n("Dokumentet sparat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle sparas.","error")}})},be=()=>{const[{isDemo:e}]=m(),t=w(),{showSnackbar:n}=x();return g({mutationFn:e?Q:le,onSuccess:()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]}),n("Dokumentet uppdaterat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle uppdateras.","error")}})},ke=()=>{const[{isDemo:e}]=m(),t=w(),{showSnackbar:n}=x();return g({mutationFn:({id:r})=>Promise.all([e?z({id:r}):oe({id:r})]),onSuccess:()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]}),n("Dokumentet borttaget!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},Re=()=>{const[{isDemo:e}]=m(),t=w(),{showSnackbar:n}=x();return g({mutationFn:e?_:se,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument skapat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle skapas.","error")}})},je=()=>{const[{isDemo:e}]=m(),t=w(),{showSnackbar:n}=x();return g({mutationFn:e?de:ae,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument uppdaterat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle uppdateras.","error")}})},Se=()=>{const[{isDemo:e}]=m(),t=w(),{showSnackbar:n}=x();return g({mutationFn:e?T:ie,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument borttaget!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},me=e=>{const[{isDemo:t}]=m(),n=t?I:te;return S({queryKey:["documents",e],queryFn:()=>n(e),select:r=>{var o,a;return((a=(o=r.allMedia)==null?void 0:o.docs)==null?void 0:a.filter(l=>!!l))||[]},enabled:e})},Ee=e=>{const[{isDemo:t}]=m(),n=t?B:ne;return S({queryKey:["documents",e],queryFn:e?()=>n({id:e}):void 0,select:r=>r==null?void 0:r.Media,enabled:!!e})},qe=e=>{const[{isDemo:t}]=m(),n=t?ce:re;return S({queryKey:["document_references",e],queryFn:()=>n(e),select:r=>{var o,a;return((a=(o=r.DocumentReferences)==null?void 0:o.docs)==null?void 0:a.filter(l=>!!l))||[]},enabled:e&&Object.keys(e).length>0})},fe=({onChange:e,children:t,...n})=>{const r=o=>{var l;const a=(l=o.target.files)==null?void 0:l[0];a&&(e==null||e(a))};return s.jsxs(C,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:s.jsx(ee,{}),...n,children:[t,s.jsx("input",{type:"file",style:{display:"none"},onChange:r})]})};function pe(){const[e,t]=D.useState([window.innerWidth,window.innerHeight]);return D.useEffect(()=>{const n=he(()=>{t([window.innerWidth,window.innerHeight])},200);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const he=(e,t)=>{let n;return(...r)=>{let o;return clearTimeout(n),n=setTimeout(()=>{o=e(...r)},t),o}},ye=["application/pdf","application/json","image/*","text/*","video/*","audio/*"],De=({url:e,mimeType:t})=>{const n=pe(),r=D.useRef(null),[o,a]=D.useState();if(D.useEffect(()=>{e&&t&&ye.some(c=>t.match(c))&&a(e)},[e,t]),!e||!t||!o)return;const l=()=>{if(r.current&&r.current.contentWindow){const c=r.current,d=r.current.contentWindow.document,b=c.clientHeight,u=c.clientWidth,i=d.documentElement.scrollHeight,f=d.documentElement.scrollWidth,W=u/f,A=b/i,M=Math.min(W,A);c.style.transform=`scale(${M})`,c.style.transformOrigin="top left",c.style.width=`${f}px`,c.style.height=`${i}px`}},v=()=>t.startsWith("image/")?s.jsx("img",{src:o,alt:"Preview",style:{width:"100%",height:"100%",maxHeight:"33vh",objectFit:"cover"}}):s.jsx("iframe",{ref:r,src:o,title:"Preview",onLoad:l,style:{width:"100%",height:"33vh",border:"none"}},`${n}`);return s.jsx(q,{sx:{mx:-1,overflow:"hidden"},children:s.jsx(q,{sx:{width:"100%",height:"33vh",px:1},children:v()},o)})},Fe=({formProps:e,...t})=>{const r=!J().pathname.startsWith("/documents"),{data:o=[]}=me(),{control:a,handleSubmit:l,watch:v,setValue:c,formState:{errors:E}}=N(e),d=v(),b=u=>{c("upload",u),c("alt",u.name)};return D.useEffect(()=>{if(d.id){const u=o.find(i=>i.id===d.id);u&&(c("upload",void 0),c("alt",u.alt))}else c("upload",void 0),c("alt","")},[d.id,c,o]),s.jsx(Y,{...t,handleSubmit:l,children:s.jsxs(y,{container:!0,spacing:2,children:[s.jsx(y,{item:!0,xs:12,sm:6,children:s.jsx(R,{control:a,name:"alt",rules:{required:!0},defaultValue:"",render:({field:u,fieldState:i})=>s.jsx(k,{fullWidth:!0,label:"Dokumentnamn",type:"text",margin:"none",...u,error:!!i.error})})}),s.jsx(y,{item:!0,xs:12,sm:6,children:s.jsx(R,{control:a,name:"upload",render:({field:u})=>{var i,f;return s.jsx(k,{fullWidth:!0,label:"Dokument",type:"text",margin:"none",value:((i=u.value)==null?void 0:i.name)||"",disabled:!0,error:!!E.upload,InputProps:{endAdornment:(f=d.upload)==null?void 0:f.type}})}})}),s.jsx(y,{item:!0,xs:12,children:s.jsx(De,{url:d.thumbnailURL||d.url,mimeType:d.mimeType})}),s.jsx(y,{item:!0,xs:12,children:s.jsxs(V,{spacing:2,direction:"row",children:[s.jsx(fe,{onChange:b,children:d.id?"Ersätt dokument":"Välj dokument"}),s.jsx(C,{startIcon:s.jsx(Z,{}),variant:"contained",href:d.url||"#",download:d.alt,disabled:!d.url,children:"Ladda ner"})]})}),s.jsx(y,{item:!0,xs:12,children:r&&s.jsx(R,{name:"id",control:a,render:({field:u})=>s.jsx(X,{options:o,getOptionKey:i=>i.id,getOptionLabel:i=>i.alt||"",value:o.find(i=>i.id===u.value)||null,onChange:(i,f)=>u.onChange(f?f.id:void 0),renderInput:i=>s.jsx(k,{...i,label:"Välj existerande dokument",variant:"outlined",fullWidth:!0})})})})]})})};export{Fe as D,ve as a,be as b,Re as c,Se as d,me as e,ke as f,Ee as g,je as h,qe as u};
//# sourceMappingURL=DocumentForm-CHD-qm4c.js.map
