import{aD as V,aC as L,P as A,an as K,b5 as W,aB as n,bA as M,aY as g,bB as O,bC as S,r as p,aS as E,az as F,bD as j,aL as Y,aK as J,j as f,aE as $,aG as T,b0 as z,bh as Q,b1 as D,ac as G,ad as H}from"./index-BVUbJ7Lz.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="ed70b4fa-bad2-4ede-a06e-e12a3cd3a912",e._sentryDebugIdIdentifier="sentry-dbid-ed70b4fa-bad2-4ede-a06e-e12a3cd3a912")}catch{}})();function Z(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ee(e){return parseFloat(e)}function ae(e){return L("MuiMenuItem",e)}const u=V("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),te=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],se=(e,a)=>{const{ownerState:t}=e;return[a.root,t.dense&&a.dense,t.divider&&a.divider,!t.disableGutters&&a.gutters]},oe=e=>{const{disabled:a,dense:t,divider:s,disableGutters:o,selected:r,classes:i}=e,d=T({root:["root",t&&"dense",a&&"disabled",!o&&"gutters",s&&"divider",r&&"selected"]},ae,i);return n({},i,d)},ie=A(K,{shouldForwardProp:e=>W(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:se})(({theme:e,ownerState:a})=>n({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:g(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${u.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:g(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${u.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:g(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:g(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${u.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${u.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${O.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${O.inset}`]:{marginLeft:52},[`& .${S.root}`]:{marginTop:0,marginBottom:0},[`& .${S.inset}`]:{paddingLeft:36},[`& .${M.root}`]:{minWidth:36}},!a.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&n({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${M.root} svg`]:{fontSize:"1.25rem"}}))),xe=p.forwardRef(function(a,t){const s=E({props:a,name:"MuiMenuItem"}),{autoFocus:o=!1,component:r="li",dense:i=!1,divider:l=!1,disableGutters:d=!1,focusVisibleClassName:m,role:h="menuitem",tabIndex:c,className:b}=s,y=F(s,te),_=p.useContext(j),I=p.useMemo(()=>({dense:i||_.dense||!1,disableGutters:d}),[_.dense,i,d]),C=p.useRef(null);Y(()=>{o&&C.current&&C.current.focus()},[o]);const q=n({},s,{dense:I.dense,divider:l,disableGutters:d}),x=oe(s),X=J(C,t);let R;return s.disabled||(R=c!==void 0?c:-1),f.jsx(j.Provider,{value:I,children:f.jsx(ie,n({ref:X,role:h,tabIndex:R,component:r,focusVisibleClassName:$(x.focusVisible,m),className:$(x.root,b)},y,{ownerState:q,classes:x}))})});function ne(e){return L("MuiSkeleton",e)}V("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const re=["animation","className","component","height","style","variant","width"];let v=e=>e,B,N,P,U;const de=e=>{const{classes:a,variant:t,animation:s,hasChildren:o,width:r,height:i}=e;return T({root:["root",t,s,o&&"withChildren",o&&!r&&"fitContent",o&&!i&&"heightAuto"]},ne,a)},le=z(B||(B=v`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),ce=z(N||(N=v`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),ue=A("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],t.animation!==!1&&a[t.animation],t.hasChildren&&a.withChildren,t.hasChildren&&!t.width&&a.fitContent,t.hasChildren&&!t.height&&a.heightAuto]}})(({theme:e,ownerState:a})=>{const t=Z(e.shape.borderRadius)||"px",s=ee(e.shape.borderRadius);return n({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:Q(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${t}/${Math.round(s/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&D(P||(P=v`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),le),({ownerState:e,theme:a})=>e.animation==="wave"&&D(U||(U=v`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),ce,(a.vars||a).palette.action.hover)),$e=p.forwardRef(function(a,t){const s=E({props:a,name:"MuiSkeleton"}),{animation:o="pulse",className:r,component:i="span",height:l,style:d,variant:m="text",width:h}=s,c=F(s,re),b=n({},s,{animation:o,component:i,variant:m,hasChildren:!!c.children}),y=de(b);return f.jsx(ue,n({as:i,ref:t,className:$(y.root,r),ownerState:b},c,{style:n({width:h,height:l},d)}))});var k={},pe=H;Object.defineProperty(k,"__esModule",{value:!0});var fe=k.default=void 0,be=pe(G()),ge=f;fe=k.default=(0,be.default)((0,ge.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"}),"ArrowDownward");var w={},ve=H;Object.defineProperty(w,"__esModule",{value:!0});var me=w.default=void 0,he=ve(G()),ye=f;me=w.default=(0,he.default)((0,ye.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz");export{xe as M,$e as S,fe as a,me as d};
//# sourceMappingURL=MoreHoriz-C-UoM-Lc.js.map
