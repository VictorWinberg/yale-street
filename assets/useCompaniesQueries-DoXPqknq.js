import{x as t,y as o,p as i,v as y,n as c,o as u,q as C,t as l,aw as b,z as r,M as m}from"./index-BVUbJ7Lz.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="307fb6e8-52c7-4722-821e-6ae45ffa14b7",e._sentryDebugIdIdentifier="sentry-dbid-307fb6e8-52c7-4722-821e-6ae45ffa14b7")}catch{}})();const f=()=>t(o(`
      query GetCompanies {
        Companies(sort: "companyName") {
          docs {
            id
            companyName
            address
            industry
            phone
            email
            website
            organizationNumber
            createdAt
            updatedAt
          }
        }
      }
    `))(),g=e=>t(o(`
      query GetCompany($id: String!) {
        Company(id: $id) {
          id
          companyName
          address
          industry
          phone
          email
          website
          organizationNumber
          createdAt
          updatedAt
        }
      }
    `))({id:e.id}),Q=e=>t(o(`
      mutation CreateCompany($data: mutationCompanyInput!) {
        createCompany(data: $data) {
          id
        }
      }
    `))({data:i(e,["companyName","address","industry","phone","email","website","organizationNumber"])}),q=({id:e,...a})=>t(o(`
      mutation UpdateCompany($id: String!, $data: mutationCompanyUpdateInput!) {
        updateCompany(id: $id, data: $data) {
          id
        }
      }
    `))({id:e,data:i(a,["companyName","address","industry","phone","email","website","organizationNumber"])}),$=({id:e})=>t(o(`
      mutation DeleteCompany($id: String!) {
        deleteCompany(id: $id) {
          id
        }
      }
    `))({id:e}),w=async()=>({Companies:{docs:await l("SELECT * FROM companies ORDER BY company_name")}}),N=async({id:e})=>({Company:await b("companies",{id:e})}),h=async e=>{const a=i({...e,id:y()},["id","companyName","address","industry","phone","email","website","organizationNumber"]);return{createCompany:await c("companies",a)}},D=async({id:e,...a})=>{const n=i(a,["companyName","address","industry","phone","email","website","organizationNumber"]);return{updateCompany:await u("companies",n,{id:e})}},G=async({id:e})=>({deleteCompany:await C("companies",{id:e})}),z=()=>{const[{isDemo:e}]=r(),a=e?w:f;return m({queryKey:["companies"],queryFn:()=>a(),select:n=>{var s,d;return((d=(s=n.Companies)==null?void 0:s.docs)==null?void 0:d.filter(p=>!!p))||[]}})},A=e=>{const[{isDemo:a}]=r(),n=a?N:g;return m({queryKey:["company",e],queryFn:()=>n({id:e}),select:s=>s.Company,enabled:!!e})};export{A as a,Q as b,h as c,D as d,q as e,G as f,$ as g,z as u};
//# sourceMappingURL=useCompaniesQueries-DoXPqknq.js.map
