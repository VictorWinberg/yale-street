import{x as d,y as p,p as m,v as x,n as N,o as E,q as u,s as M,t as o,av as y,w as g,aw as Q,a2 as _,z as A,M as b}from"./index-BVUbJ7Lz.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="fea6a42a-7a1f-4b79-bf72-09434bcc0a1b",t._sentryDebugIdIdentifier="sentry-dbid-fea6a42a-7a1f-4b79-bf72-09434bcc0a1b")}catch{}})();const I=()=>d(p(`
      query GetAssignments {
        Assignments(sort: "assignmentName") {
          docs {
            id
            assignmentName
            fee
            status
            type
            createdAt
            updatedAt

            company {
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

            externalContact {
              id
              contactName
              email
              phone
              jobTitle
              address
              notes
              createdAt
              updatedAt
            }

            responsibleContacts {
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
    `))(),R=t=>d(p(`
      query GetAssignment($id: String!) {
        Assignment(id: $id) {
          id
          assignmentName
          fee
          status
          type
          createdAt
          updatedAt

          company {
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

          externalContact {
            id
            contactName
            email
            phone
            jobTitle
            address
            notes
            createdAt
            updatedAt
          }

          responsibleContacts {
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
    `))({id:t.id}),F=t=>{var e,n;return d(p(`
      mutation CreateAssignment($data: mutationAssignmentInput!) {
        createAssignment(data: $data) {
          id
        }
      }
    `))({data:m({...t,externalContact:(e=t.externalContact)==null?void 0:e.id,company:(n=t.company)==null?void 0:n.id,responsibleContacts:(t.responsibleContacts||[]).map(s=>s.id)},["assignmentName","fee","status","type","externalContact","company","responsibleContacts"])})},h=({id:t,...e})=>{var n,s;return d(p(`
      mutation UpdateAssignment($id: String!, $data: mutationAssignmentUpdateInput!) {
        updateAssignment(id: $id, data: $data) {
          id
        }
      }
    `))({id:t,data:m({...e,externalContact:(n=e.externalContact)==null?void 0:n.id,company:(s=e.company)==null?void 0:s.id,responsibleContacts:(e.responsibleContacts||[]).map(a=>a.id)},["assignmentName","fee","status","type","externalContact","company","responsibleContacts"])})},D=({id:t})=>d(p(`
      mutation DeleteAssignment($id: String!) {
        deleteAssignment(id: $id) {
          id
        }
      }
    `))({id:t}),q=async()=>{const[t,e,n,s]=await Promise.all([o("SELECT * FROM assignments ORDER BY assignment_name"),o("SELECT * FROM assignment_responsible_contacts"),o("SELECT * FROM contacts"),o("SELECT * FROM companies")]),a=y(e,"assignmentId"),i=g(n,"id"),c=g(s,"id");return{Assignments:{docs:t.map(C(a,i,c))}}},S=async({id:t})=>{const[e,n,s,a]=await Promise.all([Q("assignments",{id:t}),_("assignment_responsible_contacts",{assignmentId:t}),o("SELECT * FROM contacts"),o("SELECT * FROM companies")]),i=y(n,"assignmentId"),c=g(s,"id"),l=g(a,"id");return{Assignment:C(i,c,l)(e)}},G=async t=>{var s,a;const e=m({...t,id:x(),externalContact:(s=t.externalContact)==null?void 0:s.id,company:(a=t.company)==null?void 0:a.id},["id","assignmentName","externalContact","company","fee","type","status"]),n=await N("assignments",e);return await f({...t,id:n.id}),{createAssignment:n}},O=async t=>{var s,a;const e=m({...t,externalContact:(s=t.externalContact)==null?void 0:s.id,company:(a=t.company)==null?void 0:a.id},["assignmentName","externalContact","company","fee","type","status"]),n=await E("assignments",e,m(t,["id"]));return await T(t),{updateAssignment:n}},j=async({id:t})=>(await u("assignments",{id:t}),await w({id:t}),{deleteAssignment:{id:t}});function C(t,e,n){return s=>{const c=(t.get(s.id)||[]).map(r=>r.contactId).map(r=>e.get(r)).filter(r=>!!r),l=e.get(s.externalContact),L=n.get(s.company||"");return{...s,responsibleContacts:c,externalContact:l,company:L}}}const f=async({id:t,responsibleContacts:e})=>{!t||!e||await M("assignment_responsible_contacts",e.map(({id:n})=>({assignmentId:t,contactId:n})))},T=async t=>{await w(t),await f(t)},w=async({id:t})=>{t&&await u("assignment_responsible_contacts",{assignmentId:t})},v=()=>{const[{isDemo:t}]=A(),e=t?q:I;return b({queryKey:["assignments"],queryFn:()=>e(),select:n=>{var s,a;return((a=(s=n.Assignments)==null?void 0:s.docs)==null?void 0:a.filter(i=>!!i))||[]}})},z=t=>{const[{isDemo:e}]=A(),n=e?S:R;return b({queryKey:["assignment",t],queryFn:()=>n({id:t}),select:s=>s.Assignment,enabled:!!t})};export{z as a,F as b,G as c,O as d,h as e,j as f,D as g,v as u};
//# sourceMappingURL=useAssignmentsQueries-DKOJgyLE.js.map
