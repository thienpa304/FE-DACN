"use strict";(self.webpackChunkFE_DACN=self.webpackChunkFE_DACN||[]).push([[228,793],{14701:(e,l,i)=>{i.d(l,{A:()=>d,p:()=>r});var o=i(65043),n=i(24688),s=i(1306),t=i(70579);const r=e=>{const{employee:l,another_degrees:i,education_informations:o,work_experiences:n,CV:s,applicationType:t,userId:r,...d}=e,a=i?{...d,another_degrees:i,education_informations:o,work_experiences:n}:null,c=null!==e&&void 0!==e&&e.CV?{...d,CV:s}:null;return{userId:r,applicationType:t,personal_information:{...null===l||void 0===l?void 0:l.user,isMarried:null===l||void 0===l?void 0:l.isMarried},online_profile:a,attached_document:c}};const d=function(e){var l,i,d;let{profile:a}=e;const[c,x]=(0,o.useState)(null),[u,h]=(0,o.useState)(null),v={...a,avatar:null===a||void 0===a||null===(l=a.employee)||void 0===l||null===(i=l.user)||void 0===i?void 0:i.avatar,...null===a||void 0===a||null===(d=a.employee)||void 0===d?void 0:d.user},{profile:p}=(0,s.A)(null===c||void 0===c?void 0:c.userId,{type:null===c||void 0===c?void 0:c.applicationType});return(0,o.useEffect)((()=>{if(null!==c&&void 0!==c&&c.userId){const e=r({...p});h((()=>e))}}),[null===c||void 0===c?void 0:c.userId,null===c||void 0===c?void 0:c.applicationType,p]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.z,{profile:v,setSelectedProfile:x}),(0,t.jsx)(n.g,{selectedProfile:u,setSelectedProfile:()=>{x(null),h(null)}})]})}},24688:(e,l,i)=>{i.d(l,{z:()=>I,g:()=>M});var o=i(12110),n=i(79958),s=i(19464),t=i(26494),r=i(85865),d=i(83462),a=i(26600),c=i(17392),x=i(39336),u=i(35316),h=i(74802),v=i(65043),p=i(82907),m=i(36110),f=i(36228);const g=()=>{const e=(0,p.useQueryClient)(),{toast:l}=(0,m.n)(),{mutate:i,isLoading:o}=(0,p.useMutation)((e=>{let[l,i]=e;return f._U.create({employeeId:l,isOnlineProfile:i})}),{onSuccess:i=>{200===i.status?(e.invalidateQueries(["get-FollowEmployees"]),l.success({massage:i.message})):l.error({massage:i.message})},onError:e=>{l.error({massage:e.response.data.message})}});return{onFollowEmployeeById:i,isLoading:o}};var y=i(46783),A=i(70579);function j(e){const{employeeProfile:l,sx:i}=e,{onFollowEmployeeById:o}=g(),{isEmployer:n}=(0,m.n)(),[t,r]=(0,v.useState)(null===l||void 0===l?void 0:l.isFollowed);if((0,v.useEffect)((()=>{l&&r(null===l||void 0===l?void 0:l.isFollowed)}),[JSON.stringify(l)]),l&&n)return(0,A.jsx)(s.A,{onClick:()=>{return e=null===l||void 0===l?void 0:l.userId,i=null!==l&&void 0!==l&&l.CV||void 0!==(null===l||void 0===l?void 0:l.isOnlineProfile)&&!(null===l||void 0===l?void 0:l.isOnlineProfile)?"0":"1",o([e,i]),void r((e=>!e));var e,i},sx:{display:"flex",alignItem:"center",...i},children:(0,A.jsx)(y.A,{isFollowed:t})})}var b=i(19193),C=i(63657),L=i(52177),w=i(76300),k=i(39423),S=i(58729),F=i(15505),W=i(65499),z=i(7968),P=i(15357),T=i(17555);const I=e=>{var l;let{profile:i,setSelectedProfile:d}=e;const a=(0,v.useMemo)((()=>Boolean(!(null!==i&&void 0!==i&&i.jobTitle))),[i]),c=(0,v.useMemo)((()=>null===i||void 0===i?void 0:i.isApplied),[i]);return(0,A.jsxs)(o.A,{sx:{border:1,borderRadius:"3px",borderColor:"#98E4FF",height:"430px",width:"100%"},children:[(0,A.jsx)(n.A,{sx:{py:1,color:"#aa720a",overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,whiteSpace:"normal"},title:(0,A.jsxs)(s.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",height:55},children:[(0,A.jsx)(W.L,{sx:{":hover":{color:!a&&"#ce8b0e",cursor:"pointer"},flex:1,color:a&&"text.disabled"},fontWeight:700,fontSize:18,onClick:()=>{!a&&d(i)},fontStyle:a&&"italic",children:!a&&(null===i||void 0===i?void 0:i.jobTitle)}),(0,A.jsx)(j,{employeeProfile:i})]})}),a?(0,A.jsxs)(r.A,{sx:{display:"flex",bgcolor:"#DDDDDD",height:40,width:"100%",color:"black",justifyContent:"center",alignItems:"center",fontWeight:700,my:"50%"},children:[(0,A.jsx)(T.A,{}),"H\u1ed3 s\u01a1 \u0111\xe3 \u1ea9n"]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(t.A,{sx:{px:2,py:1},children:[(0,A.jsxs)(s.A,{display:"flex",gap:2,mb:2,children:[(0,A.jsx)(P.A,{src:!a&&(null===i||void 0===i?void 0:i.avatar),width:100,height:100,objectFit:"cover",borderColor:"#98E4FF",effect:"blur",style:{borderRadius:"5px"}}),(0,A.jsxs)(s.A,{sx:{display:"flex",flexDirection:"column",pt:2},children:[(0,A.jsx)(W.L,{sx:{height:52},fontWeight:700,fontSize:15,children:!a&&(null===i||void 0===i?void 0:i.name)}),(0,A.jsxs)(s.A,{display:"flex",children:[(0,A.jsx)(F.A,{sx:{maxHeight:20,color:"grey.700"}}),(0,A.jsxs)(W.L,{sx:{WebkitLineClamp:1,fontWeight:700},children:[null===i||void 0===i?void 0:i.desiredSalary," Tri\u1ec7u"]})]})]})]}),(0,A.jsxs)(s.A,{display:"flex",flexDirection:"column",gap:2,children:[(0,A.jsxs)(s.A,{display:"flex",children:[(0,A.jsx)(C.A,{sx:{maxHeight:20,color:"grey.700"}}),(0,A.jsx)(W.L,{sx:{WebkitLineClamp:1},children:null===i||void 0===i?void 0:i.profession})]}),(0,A.jsxs)(s.A,{display:"flex",children:[(0,A.jsx)(L.A,{sx:{maxHeight:20,color:"grey.700"}}),(0,A.jsx)(W.L,{sx:{WebkitLineClamp:1},children:null===i||void 0===i?void 0:i.currentPosition})]}),(0,A.jsxs)(s.A,{display:"flex",children:[(0,A.jsx)(k.A,{sx:{maxHeight:18,color:"grey.700"}}),(0,A.jsxs)(W.L,{sx:{WebkitLineClamp:1},children:["Kinh nghi\u1ec7m: ",null===i||void 0===i?void 0:i.experience]})]}),(0,A.jsxs)(s.A,{display:"flex",children:[(0,A.jsx)(w.A,{sx:{maxHeight:18,color:"grey.700"}}),(0,A.jsxs)(W.L,{sx:{WebkitLineClamp:1},children:["Tr\xecnh \u0111\u1ed9: ",null===i||void 0===i?void 0:i.degree]})]}),(0,A.jsxs)(s.A,{display:"flex",children:[(0,A.jsx)(S.A,{sx:{maxHeight:18,color:"grey.700"}}),(0,A.jsxs)(W.L,{children:["K\u1ef9 n\u0103ng: ",null===i||void 0===i||null===(l=i.skills)||void 0===l?void 0:l.split(",").join(", ")]})]})]})]}),(0,A.jsx)(r.A,{sx:{display:c?"flex":"none",position:"relative",transform:"rotate(-45deg)",bgcolor:"#FFBF00",height:40,width:200,float:"right",color:"black",right:-50,top:-40,justifyContent:"center",alignItems:"center",fontWeight:700},children:"\u0110\xe3 n\u1ed9p h\u1ed3 s\u01a1"})]})]})},M=e=>{let{selectedProfile:l,setSelectedProfile:i}=e;const{isMobile:o}=(0,z.Q)();return(0,A.jsxs)(d.A,{open:Boolean(null===l||void 0===l?void 0:l.userId),fullWidth:!0,maxWidth:"md",fullScreen:o,children:[(0,A.jsxs)(a.A,{sx:{textAlign:"center",fontWeight:700,fontSize:"1.3rem"},children:["H\u1ed3 s\u01a1",(0,A.jsx)(c.A,{"aria-label":"close",onClick:()=>{i(null)},sx:{position:"absolute",right:14,top:14,color:e=>e.palette.grey[500]},children:(0,A.jsx)(h.A,{})})]}),(0,A.jsx)(x.A,{sx:{bgcolor:"#B6FFFA",height:2}}),(0,A.jsx)(u.A,{children:(0,A.jsx)(b.A,{user:l,bgcolor:"none",showTitle:!1})})]})}},36228:(e,l,i)=>{i.d(l,{G9:()=>n,_U:()=>t,cm:()=>d,tH:()=>r,wF:()=>s});var o=i(22626);const n=new o.A("employer/employees"),s=(new o.A("employer/employees/totalResults"),new o.A("employer/employees/sortbykeywords")),t=new o.A("employer/save-employee"),r=new o.A("employer/employees/applied"),d=new o.A("employer/employees/saved")},79967:(e,l,i)=>{i.d(l,{A:()=>t});var o=i(82907),n=i(36228),s=i(36110);const t=e=>{const{isEmployer:l}=(0,s.n)(),{data:i,isLoading:t}=(0,o.useQuery)(["get-AllEmployees",e],(()=>n.tH.get({params:e})),{keepPreviousData:!0,retry:1,refetchOnWindowFocus:!1,enabled:l&&Boolean(null===e||void 0===e?void 0:e.employeeIds)});return{isApplied:null===i||void 0===i?void 0:i.data,isLoading:t}}},1306:(e,l,i)=>{i.d(l,{A:()=>t});var o=i(82907),n=i(36228),s=i(36110);const t=(e,l)=>{const{isEmployer:i}=(0,s.n)(),{data:t,isLoading:r,refetch:d}=(0,o.useQuery)(["get-EmployeeById",e,null===l||void 0===l?void 0:l.type],(()=>n.G9.getById(e,{params:l})),{keepPreviousData:!0,retry:1,refetchOnWindowFocus:!1,enabled:i&&Boolean(e)&&null!==(null===l||void 0===l?void 0:l.type)&&void 0!==(null===l||void 0===l?void 0:l.type)});return{profile:null===t||void 0===t?void 0:t.data,isLoading:r,refetch:d}}},98785:(e,l,i)=>{i.d(l,{A:()=>C});var o=i(65043),n=i(68903),s=i(83462),t=i(26600),r=i(39336),d=i(35316),a=i(29347),c=i(11906),x=i(19464),u=i(49768),h=i(33173),v=i(24858),p=i(59162),m=i(93635),f=i(70579);const g=e=>[{value:"T\u1ea5t c\u1ea3",label:"T\u1ea5t c\u1ea3"},...e],y={experience:g(p.P7),positionLevel:g(p.F1),degree:g(p.$P),employmentType:g(p.pX),sex:p.eW},A={experience:"",positionLevel:"",degree:"",employmentType:"",sex:""},j=["experience","positionLevel","degree","employmentType","sex"],b=e=>"employmentType"===e?"H\xecnh th\u1ee9c":"sex"===e?"Gi\u1edbi t\xednh":"positionLevel"===e?"C\u1ea5p b\u1eadc":"degree"===e?"Tr\xecnh \u0111\u1ed9":"Kinh nghi\u1ec7m";function C(e){const{handleFilter:l,sx:i}=e,{control:p,reset:g,handleSubmit:C,formState:{errors:L}}=(0,v.mN)({defaultValues:A}),[w,k]=(0,o.useState)({}),[S,F]=(0,o.useState)(!1),W=e=>{l(e),F(!1)},z=e=>{let{openFilterModal:l,setOpenFilterModal:i}=e;return(0,f.jsxs)(s.A,{open:l,fullWidth:!0,maxWidth:"lg",children:[(0,f.jsx)(t.A,{sx:{fontWeight:"bold",fontSize:16,textAlign:"center"},children:"L\u1ecdc n\xe2ng cao"}),(0,f.jsx)(r.A,{}),(0,f.jsx)(d.A,{children:(0,f.jsx)(n.Ay,{container:!0,gap:2,children:j.map((e=>(0,f.jsx)(n.Ay,{item:!0,xs:12,children:(0,f.jsx)(h.A,{element:(0,f.jsx)(u.A,{}),options:y[e],control:p,errors:L,fullWidth:!0,id:e,label:b(e),name:e,sx:{bgcolor:"#ffff",borderRadius:"5px"}})},e)))})}),(0,f.jsxs)(a.A,{children:[(0,f.jsx)(c.A,{onClick:()=>i(!1),size:"small",variant:"contained",color:"secondary",children:"Hu\u1ef7"}),(0,f.jsx)(c.A,{onClick:C(W),size:"small",variant:"contained",color:"primary",children:"X\xe1c nh\u1eadn"})]})]})};return(0,f.jsxs)(x.A,{sx:{display:"flex",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",boxShadow:"2px 2px 6px #d2d7db",height:80,bgcolor:"#fee9f7",alignItems:"center",pl:2,...i},children:[(0,f.jsxs)(n.Ay,{container:!0,spacing:.3,alignItems:"center",children:[(0,f.jsx)(n.Ay,{item:!0,xs:1,sm:.5,children:(0,f.jsx)(m.A,{})}),j.map((e=>((e,l)=>(0,f.jsx)(n.Ay,{item:!0,xs:1.9,sx:{display:{xs:"none",sm:"flex"}},children:(0,f.jsx)(h.A,{element:(0,f.jsx)(u.A,{}),options:y[e],control:p,errors:L,fullWidth:!0,id:e,label:l,name:e,onChange:l=>{W({[e]:l.target.value});const i={...w,[e]:l.target.value};k((()=>i)),g(i)},sx:{bgcolor:"#ffff",borderRadius:"5px"}})},e))(e,b(e)))),(0,f.jsx)(n.Ay,{item:!0,xs:.9,sx:{display:{xs:"none",sm:"flex"}},children:(0,f.jsx)(c.A,{onClick:C(W),variant:"text",sx:{height:30,color:"#042a8f"},children:"L\u1ecdc"})}),(0,f.jsx)(n.Ay,{item:!0,xs:.9,sx:{display:{xs:"none",sm:"flex"}},children:(0,f.jsx)(c.A,{onClick:()=>{k({}),g(A),l(A),F(!1)},variant:"text",sx:{height:30,color:"#646464",display:{xs:"none",sm:"flex"}},children:"Hu\u1ef7"})}),(0,f.jsx)(c.A,{onClick:()=>F(!0),variant:"contained",color:"info",size:"small",sx:{mr:2,ml:"auto",display:{xs:"flex",sm:"none"}},children:"L\u1ecdc n\xe2ng cao"})]}),(0,f.jsx)(z,{openFilterModal:S,setOpenFilterModal:F})]})}},55116:(e,l,i)=>{i.r(l),i.d(l,{default:()=>H});var o=i(11906),n=i(19252),s=i(85865),t=i(68903),r=i(12110),d=i(79958),a=i(39336),c=i(26494),x=i(24056),u=i(19464),h=i(81637),v=i(65043),p=i(14701),m=i(62237),f=i(1676),g=i(28800),y=i(7696),A=i(82907),j=i(36228),b=i(36110),C=i(79967);const L=e=>{var l,i,o,n,s,t;const{isEmployer:r}=(0,b.n)(),{data:d,isLoading:a,refetch:c}=(0,A.useQuery)(["get-ProfileByKeywords",e],(()=>{for(const i in e)"T\u1ea5t c\u1ea3"!==e[i]&&void 0!==e[i]||(e[i]="");const l={...e,currentPosition:null===e||void 0===e?void 0:e.positionLevel};return delete l.positionLevel,j.wF.get({params:l})}),{retry:1,refetchOnWindowFocus:!1,enabled:r&&Boolean(null===e||void 0===e?void 0:e.keywords)}),[x,u]=(0,v.useState)(""),{isApplied:h}=(0,C.A)({employeeIds:x});return(0,v.useEffect)((()=>{var e,l,i;null!==d&&void 0!==d&&null!==(e=d.data)&&void 0!==e&&null!==(l=e.meta)&&void 0!==l&&l.itemCount&&u(null===d||void 0===d||null===(i=d.data)||void 0===i?void 0:i.items.map((e=>e.userId)).join(","))}),[null===d||void 0===d||null===(l=d.data)||void 0===l?void 0:l.items]),{profile:(null===d||void 0===d||null===(i=d.data)||void 0===i?void 0:i.items.map((e=>({...e,isApplied:null===h||void 0===h?void 0:h.includes(e.userId)}))))||[],totalResults:null===d||void 0===d||null===(o=d.data)||void 0===o||null===(n=o.meta)||void 0===n?void 0:n.totalItems,totalPages:null===d||void 0===d||null===(s=d.data)||void 0===s||null===(t=s.meta)||void 0===t?void 0:t.totalPages,isLoading:a,refetch:c}};var w=i(25567),k=i(98785),S=i(71525),F=i(67902),W=i(26586),z=i(65498),P=i(7968),T=i(65499),I=i(70579);function M(){const{isMobile:e}=(0,P.Q)(),[l,i]=(0,v.useState)(1),[A,j]=(0,v.useState)(""),[b,C]=(0,v.useState)(1),[M,H]=(0,v.useState)(""),[V,E]=(0,v.useState)(null),[B,_]=(0,v.useState)(null),[D,O]=(0,v.useState)({orderBy:"",sort:""}),{jobs:R,totalResults:N,totalPages:K,isLoading:Q}=(0,f.A)({page:l,num:9,status:A,...D}),{profile:G,totalResults:U,totalPages:X,isLoading:q}=L({page:b,num:8,keywords:M,...V,...B}),J=[{field:"jobTitle",headerName:"T\xean tin \u0111\u0103ng",minWidth:e?160:500,headerAlign:"center",renderCell:y.O1,sortable:!0},{field:"status",headerName:"Tr\u1ea1ng th\xe1i",minWidth:100,headerAlign:"center",align:"center",renderCell:y.LG},{field:"keywords",headerName:"T\u1eeb kh\xf3a",minWidth:400,headerAlign:"center",renderCell:e=>{var l;return(0,I.jsx)(T.L,{sx:{WebkitLineClamp:1},children:null===e||void 0===e||null===(l=e.value)||void 0===l?void 0:l.split(",").join(", ")})}},{field:"action",headerName:"T\xecm h\u1ed3 s\u01a1",minWidth:e?110:150,headerAlign:"center",align:"center",renderCell:l=>(0,I.jsx)(o.A,{onClick:()=>{var e,i;H(null===l||void 0===l||null===(e=l.row)||void 0===e?void 0:e.keywords),i=null===l||void 0===l?void 0:l.row,E({profession:null===i||void 0===i?void 0:i.profession})},variant:"contained",size:e?"small":"medium",children:"T\xecm ki\u1ebfm"})}];return(0,v.useEffect)((()=>{if(U)if(U<=0)(0,S.A)({title:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm",message:"Kh\xf4ng t\xecm th\u1ea5y h\u1ed3 s\u01a1 ph\xf9 h\u1ee3p",hideCancelButton:!0});else{const e=document.getElementById("recommend-profile");null===e||void 0===e||e.scrollIntoView({behavior:"smooth"})}}),[G]),Q?(0,I.jsx)(m.A,{}):(0,I.jsxs)(n.A,{maxWidth:"xl",sx:{p:3},children:[(0,I.jsx)(s.A,{fontSize:22,fontWeight:700,children:"G\u1ee3i \xfd h\u1ed3 s\u01a1 ti\u1ec1m n\u0103ng"}),(0,I.jsx)(t.Ay,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,marginTop:0,children:(0,I.jsx)(t.Ay,{item:!0,xs:12,children:(0,I.jsxs)(r.A,{children:[(0,I.jsx)(d.A,{title:"T\xecm ki\u1ebfm theo tin tuy\u1ec3n d\u1ee5ng"}),(0,I.jsx)(a.A,{}),(0,I.jsxs)(c.A,{children:[(0,I.jsx)(F.A,{onChange:(e,l)=>{j(l),i(1)},value:A,variant:"scrollable",scrollButtons:!1,sx:{display:{md:"inline-block"},borderBottom:1,borderColor:"divider"},children:W.tabs.map((e=>(0,I.jsx)(x.A,{label:e.label,value:e.value},e.value)))}),(0,I.jsx)(g.A,{rows:R,columns:J,initialState:{pagination:{paginationModel:{pageSize:9}},columns:{columnVisibilityModel:{keywords:!e,status:!e}}},sx:{height:"74vh",justifySelf:"center",mx:"auto"},hideFooter:!0,onSortModelChange:e=>{(0,z.V)(e,O)}}),(0,I.jsx)(w.A,{currentPage:l,totalPages:K,handlePageChange:i})]})]})})}),(0,I.jsxs)(u.A,{id:"recommend-profile",display:!V&&"none",children:[(0,I.jsx)(s.A,{fontWeight:700,fontSize:22,my:3,children:"H\u1ed3 s\u01a1 g\u1ee3i \xfd"}),(0,I.jsx)(k.A,{handleFilter:e=>{_((l=>({...l,...e})))}}),(0,I.jsx)(t.Ay,{container:!0,sx:{width:"100%"},children:(0,I.jsx)(t.Ay,{item:!0,xs:12,children:(0,I.jsxs)(n.A,{sx:{mb:3,p:3,bgcolor:"#fbfeff",minHeight:"72vh"},children:[q&&(0,I.jsx)(h.A,{}),(0,I.jsx)(t.Ay,{container:!0,spacing:1,mb:2,children:null===G||void 0===G?void 0:G.map(((e,l)=>(0,I.jsx)(t.Ay,{item:!0,xs:12,sm:6,md:3,children:(0,I.jsx)(u.A,{sx:{display:"flex",justifyContent:"center"},children:(0,I.jsx)(p.A,{profile:e})})},l)))}),U?(0,I.jsx)(w.A,{currentPage:b,totalPages:X,handlePageChange:C}):(0,I.jsx)(u.A,{sx:{display:"flex",justifyContent:"center"},children:(0,I.jsx)(s.A,{mt:10,textAlign:"center",fontStyle:"italic",color:"#9999",children:"Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c h\u1ed3 s\u01a1 ph\xf9 h\u1ee3p"})})]})})})]})]})}function H(){return(0,I.jsx)(M,{})}},39423:(e,l,i)=>{var o=i(32392);l.A=void 0;var n=o(i(40039)),s=i(70579),t=(0,n.default)([(0,s.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,s.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");l.A=t},93635:(e,l,i)=>{var o=i(32392);l.A=void 0;var n=o(i(40039)),s=i(70579),t=(0,n.default)((0,s.jsx)("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"}),"FilterAlt");l.A=t},15505:(e,l,i)=>{var o=i(32392);l.A=void 0;var n=o(i(40039)),s=i(70579),t=(0,n.default)((0,s.jsx)("path",{d:"M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"}),"LocalAtm");l.A=t},17555:(e,l,i)=>{var o=i(32392);l.A=void 0;var n=o(i(40039)),s=i(70579),t=(0,n.default)((0,s.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");l.A=t},52177:(e,l,i)=>{var o=i(32392);l.A=void 0;var n=o(i(40039)),s=i(70579),t=(0,n.default)((0,s.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");l.A=t},76300:(e,l,i)=>{var o=i(32392);l.A=void 0;var n=o(i(40039)),s=i(70579),t=(0,n.default)((0,s.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"}),"School");l.A=t},63657:(e,l,i)=>{var o=i(32392);l.A=void 0;var n=o(i(40039)),s=i(70579),t=(0,n.default)([(0,s.jsx)("path",{d:"M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68c-.43-.91-.68-1.92-.68-3 0-3.87 3.13-7 7-7zm-8-7h4v2h-4V4z"},"0"),(0,s.jsx)("path",{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85-.7.71z"},"1")],"WorkHistory");l.A=t}}]);
//# sourceMappingURL=228.cf6e707b.chunk.js.map