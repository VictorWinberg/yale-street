import{j as e,B as h,h as g}from"./index-BVUbJ7Lz.js";import{e as p,f as y,C as j}from"./SebraForm-DP6K8exJ.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new i.Error().stack;n&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[n]="4d350ab9-4749-42fe-b6da-3368be9d3b62",i._sentryDebugIdIdentifier="sentry-dbid-4d350ab9-4749-42fe-b6da-3368be9d3b62")}catch{}})();function D(i,n){const{getState:s,options:{onCreatingRowCancel:d,onCreatingRowSave:r,onEditingRowCancel:a,onEditingRowSave:t},setCreatingRow:o,setEditingRow:l}=i,{creatingRow:c,editingRow:u,isSaving:m}=s(),f=(c==null?void 0:c.id)===n.id,x=(u==null?void 0:u.id)===n.id;return{creatingRow:c,isSaving:m,handleCancel:()=>{f?(d==null||d({row:n,table:i}),o(null)):x&&(a==null||a({row:n,table:i}),l(null))},handleSubmit:b=>{f?r==null||r({exitCreatingMode:()=>o(null),row:n,table:i,values:b}):x&&(t==null||t({exitEditingMode:()=>l(null),row:n,table:i,values:b}))}}}const B=({table:i,row:n,titles:s,FormComponent:d,defaultValues:r})=>{const{creatingRow:a,isSaving:t,handleCancel:o,handleSubmit:l}=D(i,n);return e.jsxs(e.Fragment,{children:[e.jsx(p,{variant:"h4",color:"primary",children:a?s.creating:s.editing}),e.jsx(y,{children:e.jsx(d,{sx:{mt:1},formProps:{values:{...r,...n.original}},onSubmit:l,renderBottomContent:()=>e.jsxs(h,{sx:{mt:3,ml:"auto"},children:[e.jsx(g,{onClick:o,sx:{minWidth:"100px"},children:"Avbryt"}),e.jsxs(g,{disabled:t,type:"submit",sx:{minWidth:"100px"},variant:"contained",children:[t&&e.jsx(j,{color:"inherit",size:18}),"Spara"]})]})})})]})};export{B as S};
//# sourceMappingURL=SebraDialog-BySdJsEA.js.map
