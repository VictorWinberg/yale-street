import{j as s,L as r,i as t}from"./index-BVUbJ7Lz.js";import{f as n,t as d}from"./date-CmwPcWLy.js";import{L as o}from"./Link-DIQczB-t.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="2916cf1b-82b5-42da-8f20-ec35f2677463",e._sentryDebugIdIdentifier="sentry-dbid-2916cf1b-82b5-42da-8f20-ec35f2677463")}catch{}})();const u=[{accessorKey:"companyName",header:"Bolagsnamn",Cell:({cell:e,row:a})=>s.jsx(o,{component:r,to:`/home/companies/${a.original.id}`,children:e.getValue()})},{accessorKey:"address",header:"Address"},{accessorKey:"industry",header:"Industri",filterVariant:"multi-select"},{accessorKey:"website",header:"Website"},{accessorKey:"organizationNumber",header:"Org.nr"},{accessorKey:"updatedAt",accessorFn:e=>t.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>n(d(e.getValue()))}];export{u as c};
//# sourceMappingURL=CompanyConfig-DUd--Uuh.js.map
