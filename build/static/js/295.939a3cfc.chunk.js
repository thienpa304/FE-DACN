"use strict";(self.webpackChunkFE_DACN=self.webpackChunkFE_DACN||[]).push([[295,793],{67902:(e,l,t)=>{t.d(l,{A:()=>o});var i=t(34535),n=t(69869);const o=(0,i.Ay)(n.A)((()=>"\n    .MuiTabs-scrollableX {\n    overflow-x: auto !important;\n      }\n  "))},31668:(e,l,t)=>{t.d(l,{A:()=>r,V:()=>d});var i=t(82907),n=t(53679),o=t(36110),a=t(65043),s=t(89138);function r(e){if(!e)return{};const{isEmployer:l}=(0,o.n)(),{setItemDetail:t,itemDetail:r}=(0,s.A)(),{data:d,isLoading:c,isFetching:u}=(0,i.useQuery)(["job-getByIdByEmmployer",e],(async()=>n.L8.getById(e)),{retry:1,refetchOnWindowFocus:!1,enabled:l});return(0,a.useEffect)((()=>{if(null!==d&&void 0!==d&&d.data){var e,l;const i={...null===d||void 0===d?void 0:d.data,sex:null===(null===d||void 0===d||null===(e=d.data)||void 0===e?void 0:e.sex)?"T\u1ea5t c\u1ea3":null===d||void 0===d||null===(l=d.data)||void 0===l?void 0:l.sex};t(i)}}),[JSON.stringify(d)]),{data:r,isLoading:c,isFetching:u}}function d(e){const{isEmployer:l}=(0,o.n)(),[t,s]=(0,a.useState)([]),{data:r,isLoading:d}=(0,i.useQuery)(["jobs-getByIdListByOwner",JSON.stringify(e)],(async()=>{if(!e.length)return[];Promise.allSettled(e.map((e=>n.L8.getById(e)))).then((e=>{const l=e.filter((e=>"fulfilled"===e.status)).map((e=>e.value));s(l)})).catch((e=>console.error(e)))}),{retry:1,refetchOnWindowFocus:!1,keepPreviousData:!0,enabled:l});return{jobs:(null===t||void 0===t?void 0:t.map((e=>{var l,t,i;return{...null===e||void 0===e?void 0:e.data,id:null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.postId,sex:null===(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.sex)?"T\u1ea5t c\u1ea3":null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.sex}})))||[],isLoading:d}}},25373:(e,l,t)=>{t.d(l,{c:()=>G,A:()=>$});var i=t(19464),n=t(28800),o=t(83462),a=t(26600),s=t(17392),r=t(39336),d=t(35316),c=t(19252),u=t(28883),h=t(68903),v=t(77739),p=t(85865),m=t(11906),g=t(81637),x=t(59162),y=t(82907),f=t(36110),A=t(52404);const j=()=>{const e=(0,y.useQueryClient)(),{toast:l}=(0,f.n)(),{isLoading:t,mutateAsync:i}=(0,y.useMutation)((e=>{let[l,t]=e;return A.zP.update(l,t)}),{onSuccess:t=>{200===t.status?(e.invalidateQueries(["application-getList"]),l.success({massage:t.message})):l.error({massage:t.message})},onError:e=>{l.error({massage:e.response.data.message})}});return{onSaveApplicationStatus:i,isLoading:t}};var S=t(65043),b=t(49768),C=t(42445),P=t(62237),_=t(25567),T=t(84391),I=t(74802),w=t(19193),L=t(60427),z=t(51597),F=t(70579);const W=function(e){let{profile:l}=e;const t=document.createElement("div"),i=(0,T.H)(t);document.body.appendChild(t),i.render((0,F.jsx)(L.A,{children:(0,F.jsxs)(o.A,{open:!0,fullWidth:!0,maxWidth:"md",fullScreen:z.Fr,children:[(0,F.jsxs)(a.A,{sx:{textAlign:"center",fontWeight:700,fontSize:"1.3rem"},children:["H\u1ed3 s\u01a1 ng\u01b0\u1eddi d\xf9ng",(0,F.jsx)(s.A,{"aria-label":"close",onClick:()=>{i.unmount()},sx:{position:"absolute",right:14,top:14,color:e=>e.palette.grey[500]},children:(0,F.jsx)(I.A,{})})]}),(0,F.jsx)(r.A,{sx:{bgcolor:"#B6FFFA",height:2}}),(0,F.jsx)(d.A,{children:(0,F.jsx)(w.A,{user:l,bgcolor:"none",showTitle:!1})})]})}))};var k=t(95382),D=t(71525),M=t(56743),B=t(65499),E=t(77326),N=t(65072),O=t(21430),Q=t(50135),V=t(67597),J=t(31668),R=t(65498),Y=t(60446),H=t.n(Y),q=t(7968);const G=e=>{const{postId:l,setSelectedId:t}=e;if(!l)return;const i=J.A,{isMobile:n}=(0,q.Q)(),{data:u,isLoading:h}=i(l);return h?(0,F.jsx)(P.A,{}):(0,F.jsxs)(o.A,{open:Boolean(l),onClose:()=>{t(null)},fullWidth:!0,maxWidth:"lg",fullScreen:n,children:[(0,F.jsxs)(a.A,{sx:{textAlign:"center",fontWeight:700,fontSize:"1.3rem"},children:["Vi\u1ec7c l\xe0m \u1ee9ng tuy\u1ec3n",(0,F.jsx)(s.A,{"aria-label":"close",onClick:()=>t(null),sx:{position:"absolute",right:14,top:14,color:e=>e.palette.grey[500]},children:(0,F.jsx)(I.A,{})})]}),(0,F.jsx)(r.A,{sx:{bgcolor:"#B6FFFA",height:2}}),(0,F.jsx)(d.A,{children:(0,F.jsxs)(c.A,{sx:{paddingY:2},children:[(0,F.jsx)(E.A,{data:u}),(0,F.jsx)(N.A,{}),(0,F.jsx)(O.A,{sx:{mt:2},company:null===u||void 0===u?void 0:u.employer})]})})]})},X=e=>{const{employee_Profile:{application:l},employer_Requirement:t}=null===e||void 0===e?void 0:e.row,[i,n]=(0,S.useState)(null);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(B.L,{sx:{color:"#319fce",":hover":{textDecoration:"none",cursor:"pointer"},textDecoration:"none"},onClick:()=>{n(null===t||void 0===t?void 0:t.postId)},children:l.jobTitle}),(0,F.jsx)(G,{postId:i,setSelectedId:n})]})},K=e=>{const{employee_Profile:l}=null===e||void 0===e?void 0:e.row,{application:t}=l;return(0,F.jsxs)(h.Ay,{container:!0,alignItems:"center",children:[(0,F.jsx)(h.Ay,{item:!0,xs:10.5,sm:12,children:(0,F.jsx)(B.L,{sx:{color:"#319fce",":hover":{textDecoration:"none",cursor:"pointer"},textDecoration:"none"},onClick:()=>{W({profile:l})},children:t.name})}),(0,F.jsx)(h.Ay,{item:!0,xs:1.5,sm:0,sx:{display:{sm:"none",xs:"inline"}},children:(0,F.jsx)(v.A,{title:"Chi ti\u1ebft",children:(0,F.jsx)(s.A,{size:"small",onClick:()=>{const e=(0,C.SE)(t.matchingScore),l={"T\xean h\u1ed3 s\u01a1":t.name,"V\u1ecb tr\xed \u1ee9ng tuy\u1ec3n":t.jobTitle,"Lo\u1ea1i h\u1ed3 s\u01a1":t.applicationType,"Tr\u1ea1ng th\xe1i":t.status,"\u0110\u1ed9 ph\xf9 h\u1ee3p":(0,F.jsx)(u.A,{value:e,max:3,size:"small",readOnly:!0,sx:{position:"relative",bottom:-5}})};(0,Q.A)(l)},children:(0,F.jsx)(V.A,{fontSize:"small"})})})})]})},U=e=>{var l;const{employee_Profile:{application:t}}=null===e||void 0===e?void 0:e.row,{onSaveApplicationStatus:i}=j(),[n,o]=(0,S.useState)(null),{isMobile:a}=(0,q.Q)();(0,S.useEffect)((()=>{var e;if(!t.status||!x.J2)return;const l=null===(e=x.J2.find((e=>e.label===t.status)))||void 0===e?void 0:e.value;o(l)}),[t.status]);return(0,F.jsx)(b.A,{value:n,options:x.J2,onChange:e=>{i([t.id,{status:e.target.value}]).then((()=>{o(e.target.value)}))},sx:{color:null===(l=x.J2.find((e=>e.value===n)))||void 0===l?void 0:l.optionColor,fontSize:a&&"10px"}})},Z=e=>{const{employee_Profile:{application:l}}=null===e||void 0===e?void 0:e.row,t=(0,C.SE)(l.matchingScore);return void 0===l.matchingScore||null===l.matchingScore?(0,F.jsx)(p.A,{sx:{color:"text.disabled",fontStyle:"italic"},children:"Ch\u01b0a ph\xe2n t\xedch"}):(0,F.jsx)(u.A,{value:t,max:3,readOnly:!0})};function $(e){var l;const{pageSize:t,data:o,currentPage:a,totalPages:s,handlePageChange:r,loading:d,setSortModel:c}=e,[u,v]=(0,S.useState)([]),[y,f]=(0,S.useState)(!1),[A,P]=(0,S.useState)([]),[T,I]=(0,S.useState)(!1),[w,L]=(0,S.useState)(!1),[z,W]=(0,S.useState)(!1),[B,E]=(0,S.useState)([]),[N,O]=(0,S.useState)(!1),[Q,V]=(0,S.useState)({signal:!1,resultData:null}),[J,Y]=(0,S.useState)([]),[G,$]=(0,S.useState)(null),{isMobile:ee}=(0,q.Q)(),le=[{field:"name",headerName:"T\xean h\u1ed3 s\u01a1",minWidth:ee?110:180,renderCell:K,sortable:!0},{field:"jobTitle",headerName:"V\u1ecb tr\xed \u1ee9ng tuy\u1ec3n",minWidth:300,renderCell:X,sortable:!0},{field:"createAt",headerName:"Ng\xe0y n\u1ed9p",minWidth:150,headerAlign:"center",align:"center",sortable:!0,renderCell:e=>H()(null===e||void 0===e?void 0:e.value).format("DD/MM/YYYY")},{field:"applicationType",headerName:"Lo\u1ea1i h\u1ed3 s\u01a1",minWidth:150,headerAlign:"center",align:"center",renderCell:e=>{var l,t,i;return null===e||void 0===e||null===(l=e.row)||void 0===l||null===(t=l.employee_Profile)||void 0===t||null===(i=t.application)||void 0===i?void 0:i.applicationType}},{field:"status",headerName:"Tr\u1ea1ng th\xe1i",minWidth:ee?120:180,renderCell:U,headerAlign:"center",align:"center"},{field:"matchingScore",headerName:"\u0110\u1ed9 ph\xf9 h\u1ee3p",minWidth:140,align:"center",headerAlign:"center",renderCell:Z,sortable:!0}],{onSaveApplicationStatus:te}=j(),ie=()=>{O(!1),I(!1),L(!1),W(!1),f(!1),E([]),V({signal:!1,resultData:null}),console.log("Finished All")},ne=async e=>{v(e)},oe=e=>{f(e)},ae=(e,l)=>{V({signal:e,resultData:l})},se=async e=>{const l=await(0,C.d8)(e),t=re(l);de(t)},re=e=>u.map((l=>{var t;const i=(0,C.AQ)(l,e,T);return console.log("matchingScore",i),{...l,employee_Profile:{...null===l||void 0===l?void 0:l.employee_Profile,application:{...null===l||void 0===l||null===(t=l.employee_Profile)||void 0===t?void 0:t.application,matchingScore:i}}}})),de=e=>{if(!T){const l=e.filter((e=>{var l;return(null===e||void 0===e||null===(l=e.employee_Profile.application)||void 0===l?void 0:l.matchingScore)>=C.ay}));E(l)}v(e),P((l=>l.map((l=>e.find((e=>(null===e||void 0===e?void 0:e.id)===(null===l||void 0===l?void 0:l.id)))||l)))),N&&(T?w?z||W(!0):L(!0):I(!0))},ce=e=>{const l=u.filter((e=>J.includes(e.id))).map(ue);v(l),(0,C.NQ)({round:e,handleAnalyzeResult:se,setIsAnalyzing:oe,resetMatchingScoreList:l,setAnalyzedProfile:ne,handleGoToAnalyzeResult:ae,passRoundProfiles:1!==e?B:void 0})},ue=e=>({...e,employee_Profile:{...e.employee_Profile,application:{...e.employee_Profile.application,matchingScore:null}}}),he=()=>{Promise.all(A.filter((e=>J.includes(e.id))).map((e=>{var l,t;return te([e.id,{matchingScore:null===e||void 0===e||null===(l=e.employee_Profile)||void 0===l||null===(t=l.application)||void 0===t?void 0:t.matchingScore}])}))).then(ie)},ve=()=>{Promise.all(J.map((e=>te([e,{status:G}]))))};return(0,S.useEffect)((()=>{Q.signal&&se(Q.resultData)}),[Q.signal]),(0,S.useEffect)((()=>{P(o),v(o)}),[o]),(0,S.useEffect)((()=>{N&&(T?!w&&B.length>0?ce(2):z?he():ce(3):ce(1))}),[N,T,w,z]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(i.A,{sx:{display:"block",float:{md:"right"},minWidth:{md:500},maxWidth:500},children:(0,F.jsxs)(h.Ay,{container:!0,sx:{alignItems:"center"},spacing:1,children:[(0,F.jsx)(h.Ay,{item:!0,md:3,xs:12,children:(0,F.jsxs)(p.A,{fontWeight:700,textAlign:"center",sx:{mt:{xs:2,md:0}},children:["\u0110\xe3 ch\u1ecdn: ",J.length]})}),(0,F.jsxs)(h.Ay,{item:!0,md:5,xs:12,display:"flex",children:[(0,F.jsx)(b.A,{options:x.J2,onChange:e=>{$(e.target.value)},value:J.length>0?G:"",sx:{color:null===(l=x.J2.find((e=>e.value===G)))||void 0===l?void 0:l.optionColor},disabled:!J.length,label:"Duy\u1ec7t nhanh"}),(0,F.jsx)(m.A,{variant:"contained",size:"small",color:"info",sx:{py:1,px:0},onClick:()=>{(0,D.A)({handleConfirm:ve,message:"Chuy\u1ec3n c\xe1c h\u1ed3 s\u01a1 \u0111\xe3 ch\u1ecdn sang tr\u1ea1ng th\xe1i ".concat(M.q0[G],"?")})},disabled:!J.length||!G,children:(0,F.jsx)(k.A,{sx:{fontSize:15}})})]}),(0,F.jsx)(h.Ay,{item:!0,container:!0,md:4,xs:12,sx:{display:"flex",alignItems:"center"},children:(0,F.jsxs)(m.A,{onClick:()=>O(J.length>0),variant:"contained",size:"small",disabled:N||!J.length,fullWidth:!0,sx:{py:1,px:0},children:[(0,F.jsx)(h.Ay,{item:!0,xs:y?9:12,children:J.length&&N?"\u0110ang ph\xe2n t\xedch":"Ph\xe2n t\xedch h\u1ed3 s\u01a1"}),(0,F.jsx)(h.Ay,{item:!0,xs:y?3:0,children:y&&(0,F.jsx)(g.A,{size:18,color:"secondary"})})]})})]})}),(0,F.jsx)(n.A,{rows:A,columns:le,initialState:{pagination:{paginationModel:{pageSize:t}},columns:{columnVisibilityModel:{jobTitle:!ee,applicationType:!ee,matchingScore:!ee}}},hideFooter:!0,sx:{height:"74vh",width:"100%"},checkboxSelection:!0,disableRowSelectionOnClick:ee,rowSelection:!0,onRowSelectionModelChange:e=>{Y(e)},loading:d,onSortModelChange:e=>(0,R.V)(e,c)}),(0,F.jsx)(_.A,{currentPage:a,totalPages:s,handlePageChange:r,disabled:N||d})]})}},58955:(e,l,t)=>{t.r(l),t.d(l,{default:()=>j});var i=t(19252),n=t(68903),o=t(12110),a=t(79958),s=t(39336),r=t(26494),d=t(24056),c=t(82907),u=t(52404),h=t(36110);const v=e=>{var l,t,i,n,o,a,s,r,d,v,p,m;const{isEmployer:g}=(0,h.n)(),{data:x,isLoading:y,refetch:f,isFetching:A}=(0,c.useQuery)(["application-getList",e],(()=>u.DG.get({params:e})),{keepPreviousData:!0,retry:1,refetchOnWindowFocus:!1,enabled:g});return{data:(null===x||void 0===x||null===(l=x.data)||void 0===l||null===(t=l.items)||void 0===t?void 0:t.map((e=>({...e,id:e.application_id}))))||[],totalItems:null===x||void 0===x||null===(i=x.data)||void 0===i||null===(n=i.meta)||void 0===n?void 0:n.totalItems,itemCount:null===x||void 0===x||null===(o=x.data)||void 0===o||null===(a=o.meta)||void 0===a?void 0:a.itemCount,itemPerPage:null===x||void 0===x||null===(s=x.data)||void 0===s||null===(r=s.meta)||void 0===r?void 0:r.itemPerPage,totalPages:null===x||void 0===x||null===(d=x.data)||void 0===d||null===(v=d.meta)||void 0===v?void 0:v.totalPages,currentPage:null===x||void 0===x||null===(p=x.data)||void 0===p||null===(m=p.meta)||void 0===m?void 0:m.currentPage,isLoading:y,refetch:f,isFetching:A}};var p=t(25373),m=t(65043),g=t(67902),x=t(42445),y=t(31668),f=t(70579);const A=[{label:"T\u1ea5t c\u1ea3",value:""},{label:"\u0110\xe3 duy\u1ec7t",value:"\u0110\xe3 duy\u1ec7t"},{label:"Ch\u1edd duy\u1ec7t",value:"Ch\u1edd duy\u1ec7t"},{label:"T\u1eeb ch\u1ed1i",value:"T\u1eeb ch\u1ed1i"},{label:"H\u1ebft h\u1ea1n",value:"H\u1ebft h\u1ea1n"}],j=()=>{const[e,l]=(0,m.useState)(""),[t,c]=(0,m.useState)(1),[u,h]=(0,m.useState)({orderBy:"",sort:""}),{data:j,isLoading:S,totalPages:b}=v({page:t,num:9,status:e,orderBy:u.orderBy,sort:u.sort}),C=(0,m.useMemo)((()=>[...new Set(null===j||void 0===j?void 0:j.map((e=>null===e||void 0===e?void 0:e.postId)))]),[j]),{jobs:P,isLoading:_}=(0,y.V)(C),T=(0,m.useMemo)((()=>((e,l)=>null===l||void 0===l?void 0:l.map((l=>{const t=null===e||void 0===e?void 0:e.find((e=>(null===e||void 0===e?void 0:e.postId)===(null===l||void 0===l?void 0:l.postId)));if(!t)return null;const{application_id:i,name:n,email:o,phone:a,applicationType:s,status:r,matchingScore:d,employee:c,CV:u,id:h,createAt:v}=l,{postId:p,jobTitle:m}=t,g=(0,x.z0)(l);return{id:i,createAt:v,employer_Requirement:(0,x.MO)(t),employee_Profile:{online_profile:null===c||void 0===c?void 0:c.online_profile,attached_document:null===c||void 0===c?void 0:c.attached_document,personal_information:{...null===c||void 0===c?void 0:c.user,name:n,email:o,phone:a},application:{id:h,application_id:i,postId:p,CV:u,applicationType:s,jobTitle:m,keywords:g,name:n,status:r,matchingScore:d}}}})).filter(Boolean))(P,j)),[j,P]);return(0,f.jsx)(i.A,{maxWidth:"xl",children:(0,f.jsx)(n.Ay,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,marginTop:0,children:(0,f.jsx)(n.Ay,{item:!0,xs:12,children:(0,f.jsxs)(o.A,{children:[(0,f.jsx)(a.A,{title:"Danh S\xe1ch \u1ee9ng vi\xean"}),(0,f.jsx)(s.A,{}),(0,f.jsxs)(r.A,{children:[(0,f.jsx)(g.A,{onChange:(e,t)=>{c(1),l(t)},value:e,variant:"scrollable",scrollButtons:!1,sx:{display:{md:"inline-block"},borderBottom:1,borderColor:"divider"},children:A.map((e=>(0,f.jsx)(d.A,{label:e.label,value:e.value},e.value)))}),(0,f.jsx)(p.A,{data:T,pageSize:9,currentPage:t,totalPages:b,handlePageChange:c,loading:S||_,setSortModel:h})]})]})})})})}},95382:(e,l,t)=>{var i=t(32392);l.A=void 0;var n=i(t(40039)),o=t(70579),a=(0,n.default)((0,o.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");l.A=a}}]);
//# sourceMappingURL=295.939a3cfc.chunk.js.map