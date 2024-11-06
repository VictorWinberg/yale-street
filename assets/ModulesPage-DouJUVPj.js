import{r as l,ae as g,j as e,B as c,G as i,_ as y,$ as b,a0 as j,I as p,af as v,D as k}from"./index-BVUbJ7Lz.js";import{m as u,M as w}from"./Module-xMzhWDZ3.js";import{M as f}from"./MoreHoriz-C-UoM-Lc.js";import{T as B}from"./Tooltip-J_AUa-Nw.js";import"./useQueryParam-l5aIZG_2.js";import"./SebraForm-DP6K8exJ.js";import"./index.esm-DxZzVQH1.js";import"./FormControlLabel-COqTmJqP.js";import"./Tabs-4NuharT2.js";import"./useAssignmentsMutations-BOqk_WLL.js";import"./useCompaniesQueries-DoXPqknq.js";import"./useContactsQueries-BOXpJhoa.js";import"./useAssignmentsQueries-DKOJgyLE.js";import"./AssignmentConfig-CEkmZ75x.js";import"./date-CmwPcWLy.js";import"./Link-DIQczB-t.js";import"./useCompaniesMutations-Ciu6v55t.js";import"./CompanyConfig-DUd--Uuh.js";import"./useContactsMutations-Docl9ZxR.js";import"./ContactConfig-DgWwCC-1.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="2f300a1e-7915-4ed9-bdfa-fb853cce0118",t._sentryDebugIdIdentifier="sentry-dbid-2f300a1e-7915-4ed9-bdfa-fb853cce0118")}catch{}})();const C=(t,{label:a,height:s,disabled:o})=>`
<a
  style="${o?"color: gray; cursor: default;":"color: #5969cf;"}"
  tabindex="${o?"-1":"0"}"
  tabindex="0"
  ${o?"href='#'":""}
  href='
    javascript:(function () {
      var messageBox = document.createElement("div");
      messageBox.innerHTML = "Klicka var som helst för att klistra in på webbplatsen.<br/><em>Obs: Fungerar inte på alla webbplatser.</em>";
      messageBox.style.position = "fixed";
      messageBox.style.top = "10px";
      messageBox.style.right = "10px";
      messageBox.style.color = "#5969cf";
      messageBox.style.border = "2px dashed #5969cf";
      messageBox.style.backgroundColor = "#fff";
      messageBox.style.padding = "10px";
      messageBox.style.zIndex = "10000";
      document.body.appendChild(messageBox);

      function handleClick(event) {
        var iframe = document.createElement("iframe");
        iframe.src = "${t}";
        iframe.scrolling = "no";
        iframe.style.width = "100%";
        iframe.style.height = "${s}px";
        iframe.style.border = "none";
        iframe.style.outline = "none";
        iframe.style.margin = "0";
        iframe.style.padding = "0";
        iframe.style.overflow = "hidden";
        var targetElement = event.target;
        targetElement.parentNode.insertBefore(iframe, targetElement);
        document.body.removeChild(messageBox);
        document.removeEventListener("click", handleClick);
      }
      document.addEventListener("click", handleClick);
    })();
  '
  aria-label="${a}"
  aria-disabled="${o}"
>
  <svg
    style="fill: currentColor; font-size: 1.5rem; width: 1em; height: 1em;"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
  >
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"></path>
  </svg>
  <span style="display: none">Infoga - ${a}</span>
</a>
`,I=t=>{const[a,s]=l.useState("");return l.useEffect(()=>{setTimeout(()=>s(`${location.origin}${g}module${location.search}`),0)},[t]),e.jsx("div",{dangerouslySetInnerHTML:{__html:C(a,t)}})},O=()=>{const[t,a]=l.useState(()=>{const n=new URLSearchParams(window.location.search),r=u.find(m=>m.key===n.get("module"));return r&&(r.props={...r.props,...r.configProps}),r}),[s,o]=l.useState(t==null?void 0:t.label),[d,x]=l.useState(500),h=n=>{const r=u.find(m=>m.key===n.target.value);r&&(r.props={...r.props,...r.configProps}),window.history.replaceState(null,"",window.location.pathname),a(r),o(r==null?void 0:r.title)};return e.jsxs(c,{children:[e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:!0,children:e.jsxs(y,{variant:"outlined",fullWidth:!0,sx:{my:2},children:[e.jsx(b,{children:"Välj modul"}),e.jsxs(j,{value:(t==null?void 0:t.key)??"",onChange:h,label:"Välj modul",children:[e.jsx(f,{value:"",children:e.jsx("em",{children:"Välj modul"})}),u.map(n=>e.jsx(f,{value:n.key,children:n.label},n.key))]})]})}),e.jsx(i,{item:!0,sx:{alignContent:"center",textAlign:"center"},children:e.jsx(B,{title:"Dra bokmärket till bokmärkesfältet",arrow:!0,children:e.jsx(c,{sx:{width:24,display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(I,{label:(t==null?void 0:t.title)??"",height:d,disabled:!t})})})})]}),e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:8,children:e.jsx(p,{fullWidth:!0,label:"Titel",value:s??"",onChange:n=>o(n.target.value),variant:"outlined"})}),e.jsx(i,{item:!0,xs:4,children:e.jsx(p,{fullWidth:!0,label:"Höjd",type:"number",value:d,onChange:n=>x(parseInt(n.target.value)),variant:"outlined",InputProps:{endAdornment:e.jsx(v,{position:"end",children:"px"})}})})]}),e.jsx(k,{sx:{my:2}}),e.jsx(c,{sx:{height:d,border:"2px dashed",borderColor:"primary.main",overflow:"hidden"},children:e.jsx(w,{title:s??null,selectedModule:t??null})})]})};export{O as default};
//# sourceMappingURL=ModulesPage-DouJUVPj.js.map
