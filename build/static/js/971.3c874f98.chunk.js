"use strict";(self.webpackChunkFE_DACN=self.webpackChunkFE_DACN||[]).push([[971],{59497:(e,t,s)=>{s.d(t,{A:()=>r});var n=s(82907),i=s(36110),a=s(52105);const r=()=>{const e=(0,n.useQueryClient)(),{toast:t}=(0,i.n)(),{mutate:s,isLoading:r,isSuccess:o}=(0,n.useMutation)((e=>a.w0.updateWithoutId(e)),{onSuccess:s=>{200===s.status?(e.invalidateQueries("get-OnlineProfile"),t.success({massage:s.message})):t.error({massage:s.message})},onError:e=>{t.error({massage:e.response.data.message})}});return{onUpdateData:s,isSuccess:o}}},54262:(e,t,s)=>{s.d(t,{A:()=>d});var n=s(82907),i=s(52105),a=s(65043),r=s(75614),o=s(36110),l=s(35644);const d=()=>{const{isEmployee:e}=(0,o.n)(),{setProfile:t}=(0,l.A)(),s=Boolean((0,r.getAccessToken)()),{data:d,isLoading:c,isSuccess:u,refetch:h}=(0,n.useQuery)(["get-OnlineProfile"],i.w0.get,{retry:(e,t)=>400!==t.response.status&&e<2,refetchOnWindowFocus:!1,enabled:s&&e});return(0,a.useEffect)((()=>{d&&u&&t(null===d||void 0===d?void 0:d.data)}),[u]),{onlineProfile:null===d||void 0===d?void 0:d.data,isLoading:c,refetch:h}}},65971:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Qe});var n=s(65043),i=s(19464),a=s(26240),r=s(19252),o=s(85865),l=s(68903),d=s(11906),c=s(47304),u=s(67254),h=s(40490),g=s(12220),m=s(52047),x=s(17945),f=s(82907),p=s(36110),j=s(52105);const v=()=>{const e=(0,f.useQueryClient)(),{toast:t}=(0,p.n)(),s=j.w0.create,{mutate:n,isSuccess:i}=(0,f.useMutation)(s,{onSuccess:s=>{200===s.status?(e.invalidateQueries("get-OnlineProfile"),t.success({massage:s.message})):t.error({massage:s.message})},onError:e=>{t.error({massage:e.response.data.message})}});return{onSaveData:n,isSuccess:i}};var A=s(59497),y=s(56902),D=s(25650),S=s(35644),w=s(56743),b=s(70579);function C(){const{profile:e,setProfile:t}=(0,S.A)(),{onSaveData:s}=v(),{onUpdateData:i}=(0,A.A)(),[a,r]=(0,n.useState)(null),o={profession:y.VL,workAddress:y.mo,positionLevel:y.F1,degree:y.$P,experience:y.P7,workingForm:y.pX};return(0,n.useEffect)((()=>{var t;r((t=e,{...t,profession:(0,D.NX)(null===t||void 0===t?void 0:t.profession,o.profession),workAddress:(0,D.NX)(null===t||void 0===t?void 0:t.workAddress,o.workAddress)}))}),[e]),(0,b.jsx)(x.A,{data:a,options:o,onSubmit:t=>{(0,D.Oi)(t.degree,w.Ry);const n=t;null!==e&&void 0!==e&&e.userId?i(n):s(n)}})}var M=s(39336),k=s(81045),I=s(17392),N=s(36134),E=s(10697),_=s(91577),P=s(51726),L=s(65099),T=s(51962),z=s(79190),O=s(2306),Q=s(33173),F=s(95851),Y=s(24858);const B=()=>{const e=(0,f.useQueryClient)(),{toast:t}=(0,p.n)(),s=j.V9.create,{mutate:n,isLoading:i}=(0,f.useMutation)(s,{onSuccess:s=>{200===s.status?(t.success({massage:s.message}),e.invalidateQueries("get-OnlineProfile")):t.error({massage:s.message})},onError:e=>{t.error({massage:e.response.data.message})}});return{onSaveData:n,isLoading:i}},V=()=>{const e=(0,f.useQueryClient)(),{toast:t}=(0,p.n)(),{mutate:s,isLoading:n}=(0,f.useMutation)((e=>{let[t,s]=e;return j.y.update(t,s)}),{onSuccess:s=>{200===s.status?(t.success({massage:s.message}),e.invalidateQueries("get-OnlineProfile")):t.error({massage:s.message})},onError:e=>{t.error({massage:e.response.data.message})}});return{onSaveDataById:s,isLoading:n}};var W=s(67002),R=s(60446),G=s.n(R),H=s(80881),U=s(9971),X=s(95007);const q=()=>{const{work_experiences:e}=(0,U.G)(X.W6),t=(0,U.j)();return{work_experiences:e,setWorkExperience:e=>{t((0,X.E_)(e))}}};function Z(e){const{onSaveData:t}=B(),{onSaveDataById:s}=V(),{onClose:a,workId:r}=e,{profile:d,setProfile:c}=(0,S.A)(),{work_experiences:g,setWorkExperience:m}=q(),[x,f]=(0,n.useState)({state:!1,message:""}),{control:p,watch:j,reset:v,handleSubmit:A,formState:{errors:y}}=(0,Y.mN)({defaultValues:{jobTitle:"",companyName:"",startDate:null,endDate:null,isDoing:!1,jobDescription:""}}),w=j("isDoing",!1),C=j("startDate"),k=j("endDate");(0,n.useEffect)((()=>{C&&k&&(G()(C).isAfter(k)?f({state:!0,message:"Ng\xe0y k\u1ebft th\xfac ph\u1ea3i sau ng\xe0y b\u1eaft \u0111\u1ea7u"}):f({state:!1,message:""})),w&&f({state:!1,message:""})}),[C,k,w]);return(0,n.useEffect)((()=>{var e;const t=(null===d||void 0===d||null===(e=d.work_experiences)||void 0===e?void 0:e.find((e=>e.id===r)))||(null===g||void 0===g?void 0:g.find((e=>e.id===r)));if(t){const e=(s=t).isDoing?{...s,startDate:(0,D.vd)(s.startDate),endDate:null}:{...s,startDate:(0,D.vd)(s.startDate),endDate:(0,D.vd)(s.endDate)};v(e)}var s}),[r,d]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(M.A,{}),(0,b.jsxs)(i.A,{py:3,children:[(0,b.jsxs)(l.Ay,{container:!0,mb:4,spacing:3,children:[(0,b.jsx)(l.Ay,{item:!0,xs:12,sm:6,children:(0,b.jsx)(Q.A,{element:(0,b.jsx)(F.A,{}),control:p,errors:y,fullWidth:!0,id:"jobTitle",label:"Ch\u1ee9c danh",name:"jobTitle",required:!0})}),(0,b.jsx)(l.Ay,{item:!0,xs:12,sm:6,children:(0,b.jsx)(Q.A,{element:(0,b.jsx)(F.A,{}),control:p,errors:y,fullWidth:!0,id:"companyName",label:"C\xf4ng ty",name:"companyName",required:!0})}),(0,b.jsxs)(l.Ay,{item:!0,container:!0,xs:12,columnSpacing:3,children:[(0,b.jsxs)(l.Ay,{item:!0,xs:12,display:"flex",height:30,children:[(0,b.jsx)(Q.A,{element:(0,b.jsx)(T.A,{checked:w}),control:p,errors:y,fullWidth:!0,id:"isDoing",label:"T\xf4i \u0111ang l\xe0m \u1edf \u0111\xe2y",name:"isDoing",sx:{width:10,height:10,mr:1}}),(0,b.jsx)(z.A,{htmlFor:"isDoing",children:"T\xf4i \u0111ang l\xe0m \u1edf \u0111\xe2y"})]}),(0,b.jsx)(l.Ay,{item:!0,xs:12,sm:6,children:(0,b.jsx)(Q.A,{element:(0,b.jsx)(W.A,{}),control:p,errors:y,fullWidth:!0,id:"startDate",label:"Th\u1eddi gian b\u1eaft \u0111\u1ea7u",name:"startDate",maxDate:G()()})}),!w&&(0,b.jsx)(l.Ay,{item:!0,xs:12,sm:6,children:(0,b.jsx)(Q.A,{element:(0,b.jsx)(W.A,{}),control:p,errors:y,fullWidth:!0,id:"endDate",label:"Th\u1eddi gian k\u1ebft th\xfac",name:"endDate",maxDate:G()()})}),w&&(0,b.jsxs)(l.Ay,{item:!0,xs:12,sm:6,display:"flex",alignContent:"center",alignItems:"center",children:[(0,b.jsx)(O.A,{}),(0,b.jsx)(o.A,{fontSize:20,children:"Hi\u1ec7n t\u1ea1i"})]})]}),x.state&&(0,b.jsx)(l.Ay,{item:!0,xs:12,children:(0,b.jsx)(u.A,{severity:"error",children:(0,b.jsx)(h.A,{children:x.message})})}),(0,b.jsx)(l.Ay,{item:!0,xs:12,children:(0,b.jsx)(Q.A,{element:(0,b.jsx)(F.A,{}),control:p,errors:y,fullWidth:!0,id:"jobDescription",label:"M\xf4 t\u1ea3 c\xf4ng vi\u1ec7c",name:"jobDescription",minRows:3,required:!0,multiline:!0})})]}),(0,b.jsx)(H.A,{handleSubmit:A((async e=>{if(x.state)return;const n=(e=>e.isDoing?{...e,startDate:(0,D._g)(e.startDate),endDate:null}:{...e,startDate:(0,D._g)(e.startDate),endDate:(0,D._g)(e.endDate)})(e);e.id?s([e.id,n]):t(n),a()})),handleCancel:a})]})]})}const J=()=>{const e=(0,f.useQueryClient)(),{toast:t}=(0,p.n)(),{mutate:s,isLoading:n}=(0,f.useMutation)((e=>j.y.remove(e)),{onSuccess:s=>{200===s.status?(t.success({massage:s.message}),e.invalidateQueries("get-OnlineProfile")):t.error({massage:s.message})},onError:e=>{t.error({massage:e.response.data.message})}});return{onDeleteDataById:s,isLoading:n}};var K=s(94006);function $(e){const{onDeleteDataById:t}=J(),{profile:s}=(0,S.A)(),{work_experiences:a,setWorkExperience:r}=q(),[l,g]=(0,n.useState)([]),[m,x]=(0,n.useState)(null),[f,p]=(0,n.useState)(!1),[j,v]=(0,n.useState)(!1),A=e=>{t(e)};return(0,n.useEffect)((()=>{null===s||void 0===s||!s.work_experiences||g(null===s||void 0===s?void 0:s.work_experiences)}),[s,a]),(0,b.jsxs)(b.Fragment,{children:[null===l||void 0===l?void 0:l.map((e=>(0,b.jsxs)(i.A,{display:"flex",columnGap:2,my:2,children:[(0,b.jsx)(i.A,{children:(0,b.jsx)(k.A,{src:L.XS.companyAvatar,variant:"rounded",sx:{bgcolor:"#a0b9cfc2",height:80,width:80},children:(0,b.jsx)(P.A,{})})}),(0,b.jsxs)(i.A,{display:"flex",flexDirection:"column",rowGap:"3px",flex:1,children:[(0,b.jsx)(o.A,{fontWeight:700,children:e.jobTitle}),(0,b.jsx)(o.A,{fontSize:12,children:e.companyName}),(0,b.jsxs)(o.A,{fontSize:12,children:[(0,D._g)(e.startDate)," -"," ",e.endDate&&"1899-11-30"!==e.endDate?(0,D._g)(e.endDate):"Hi\u1ec7n t\u1ea1i"]}),(0,b.jsxs)(i.A,{display:"flex",children:[(0,b.jsx)(o.A,{fontSize:12,children:"M\xf4 t\u1ea3 c\xf4ng vi\u1ec7c:\xa0"}),(0,b.jsx)(i.A,{children:(0,b.jsx)(o.A,{fontSize:12,children:e.jobDescription})})]})]}),(0,b.jsxs)(i.A,{children:[(0,b.jsx)(I.A,{onClick:()=>{return(t=e.id)&&x(t),void p(!0);var t},children:(0,b.jsx)(_.A,{})}),(0,b.jsx)(I.A,{onClick:()=>{return t=e.id,void(0,K.A)({selectedId:t,handleConfirm:A});var t},children:(0,b.jsx)(E.A,{})})]})]},e.id))),f&&(0,b.jsx)(Z,{workId:m,onClose:()=>p(!1),onlineProfile:s}),(!f||0===(null===l||void 0===l?void 0:l.length))&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.A,{fontSize:12,color:"grey.600",children:(0,b.jsxs)("em",{children:["M\xf4 t\u1ea3 kinh nghi\u1ec7m l\xe0m vi\u1ec7c c\u1ee7a b\u1ea1n c\xe0ng chi ti\u1ebft c\xe0ng t\u1ed1t, \u0111i\u1ec1u \u0111\xf3 gi\xfap b\u1ea1n c\xf3 c\u01a1 h\u1ed9i \u0111\u01b0\u1ee3c tuy\u1ec3n d\u1ee5ng cao h\u01a1n"," "]})}),(0,b.jsx)(M.A,{}),(0,b.jsx)(d.A,{variant:"text",color:"secondary",onClick:()=>{null!==s&&void 0!==s&&s.work_experiences?(x(null),p(!0)):v(!0)},startIcon:(0,b.jsx)(N.A,{fontSize:"large"}),sx:{my:1},children:(0,b.jsx)(o.A,{children:"Th\xeam kinh nghi\u1ec7m l\xe0m vi\u1ec7c"})}),(0,b.jsx)(c.A,{open:j,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,onClose:()=>v(!1),children:(0,b.jsx)(u.A,{severity:"error",children:(0,b.jsx)(h.A,{children:(0,b.jsx)("strong",{children:j&&"Vui l\xf2ng ho\xe0n th\xe0nh tr\u01b0\u1edbc ph\u1ea7n Th\xf4ng tin chung!"})})})})]})]})}function ee(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(r.A,{id:"work_experience",children:[(0,b.jsx)(i.A,{display:"flex",justifyContent:"space-between",alignItems:"center",children:(0,b.jsx)(i.A,{display:"flex",children:(0,b.jsx)(o.A,{fontWeight:700,fontSize:21,lineHeight:3,children:"Kinh nghi\u1ec7m ngh\u1ec1 nghi\u1ec7p"})})}),(0,b.jsx)(M.A,{}),(0,b.jsx)($,{})]})})}const te=()=>{const e=(0,f.useQueryClient)(),{toast:t}=(0,p.n)(),s=j.IV.create,{mutate:n,isLoading:i}=(0,f.useMutation)(s,{onSuccess:s=>{200===s.status?(t.success({massage:s.message}),e.invalidateQueries("get-OnlineProfile")):t.error({massage:s.message})},onError:e=>{t.error({massage:e.response.data.message})}});return{onSaveData:n,isLoading:i}},se=()=>{const e=(0,f.useQueryClient)(),{toast:t}=(0,p.n)(),{mutate:s,isLoading:n}=(0,f.useMutation)((e=>{let[t,s]=e;return j.IV.update(t,s)}),{onSuccess:s=>{200===s.status?(t.success({massage:s.message}),e.invalidateQueries("get-OnlineProfile")):t.error({massage:s.message})},onError:e=>{t.error({massage:e.response.data.message})}});return{onSaveDataById:s,isLoading:n}},ne=()=>{const e=(0,f.useQueryClient)(),{toast:t}=(0,p.n)(),{mutate:s,isLoading:n}=(0,f.useMutation)((e=>j.IV.remove(e)),{onSuccess:s=>{200===s.status?(t.success({massage:s.message}),e.invalidateQueries("get-OnlineProfile")):t.error({massage:s.message})},onError:e=>{t.error({massage:e.response.data.message})}});return{onDeleteDataById:s,isLoading:n}};var ie=s(83242),ae=s(96094),re=s(48220),oe=s(94918),le=s(70058),de=s(95540),ce=s(22505),ue=s(93513),he=s(94329),ge=s(74802);const me=e=>{const{columns:t,rows:s,handleSave:i,handleUpdate:a,handleDelete:r,profile:l}=e,[g,m]=(0,n.useState)([]),[x,f]=(0,n.useState)([]),[p,j]=(0,n.useState)({}),[v,A]=(0,n.useState)({type:null,errorField:null});(0,n.useEffect)((()=>{m((null===s||void 0===s?void 0:s.length)>0?s:[]),f((null===s||void 0===s?void 0:s.length)>0?s:[])}),[s]);const y=e=>{m(g.filter((t=>t.id!==e))),r(e)},D=[{field:"actions",type:"actions",headerName:"Ch\u1ec9nh s\u1eeda",width:100,cellClassName:"actions",getActions:e=>{var t;let{id:s}=e;return(null===(t=p[s])||void 0===t?void 0:t.mode)===ie.V_.Edit?[(0,b.jsx)(oe.Z,{icon:(0,b.jsx)(he.A,{}),label:"Save",sx:{color:"primary.main"},onClick:()=>(e=>{j({...p,[e]:{mode:ie.V_.View}})})(s)},"save"),(0,b.jsx)(oe.Z,{icon:(0,b.jsx)(ge.A,{}),label:"Cancel",className:"textPrimary",onClick:()=>(e=>{j({...p,[e]:{mode:ie.V_.View,ignoreModifications:!0}}),g.find((t=>t.id===e)).isNew&&m(g.filter((t=>t.id!==e)))})(s),color:"inherit"},"cancel")]:[(0,b.jsx)(oe.Z,{icon:(0,b.jsx)(de.A,{}),label:"Edit",className:"textPrimary",onClick:()=>(e=>{j({...p,[e]:{mode:ie.V_.Edit}})})(s),color:"inherit"},"edit"),(0,b.jsx)(oe.Z,{icon:(0,b.jsx)(ue.A,{}),label:"Delete",onClick:()=>(e=>{(0,K.A)({selectedId:e,handleConfirm:y})})(s),color:"inherit"},"delete")]}}],S=[...t,...D];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(le.zh,{rows:g,columns:S,editMode:"row",rowModesModel:p,onRowModesModelChange:e=>{j(e)},onRowEditStop:(e,t)=>{e.reason===re.q.rowFocusOut&&(t.defaultMuiPrevented=!0)},processRowUpdate:e=>{let s;const n=x.find((t=>t.id===e.id)),r=t.filter((t=>"date"===t.type&&(!G()(e[t.field]).isValid()||null===e[t.field]))).map((e=>e.headerName)),o=t.filter((t=>""===e[t.field])).map((e=>e.headerName));for(const i of t)"date"===i.type&&(e[i.field]=G()(e[i.field]).format("DD/MM/YYYY"));if(o.length>0)return void A({type:"missing",errorField:"".concat(o.join(", "))});if(r.length>0)return void A({type:"invalid",errorField:"".concat(r.join(", "))});n?(s={...e,isNew:!1},a(e.id,s)):(s={...e,isNew:!1},i({...e}));const l=g.map((t=>t.id===e.id?s:t));return m(l),s},disableColumnMenu:!0,hideFooterSelectedRowCount:!0,initialState:{pagination:{paginationModel:{pageSize:5}}},slots:{toolbar:function(e){const{setCurrentRows:s,setRowModesModel:n}=e;return(0,b.jsx)(ae.b,{children:(0,b.jsx)(d.A,{color:"secondary",startIcon:(0,b.jsx)(ce.A,{}),onClick:()=>{var e;if(null===l||void 0===l||!l.userId)return void A({type:"noProfile",errorField:null});if(null!==(e=g[0])&&void 0!==e&&e.isNew)return;const i="".concat(Math.floor(1e4*Math.random())).concat(Math.random().toString(36).substring(2,7)),a={id:i,isNew:!0},r=t.reduce(((e,t)=>({...e,[t.field]:""})),a);s((e=>[r,...e])),n((e=>({...e,[i]:{mode:ie.V_.Edit,fieldToFocus:t[0].field}})))},children:(0,b.jsx)(o.A,{sx:{fontWeight:700,fontSize:16},children:"Th\xeam m\u1edbi"})})})}},slotProps:{toolbar:{setCurrentRows:m,setRowModesModel:j}},getRowHeight:()=>"auto",sx:{minHeight:208,"&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell":{py:"8px"},"&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell":{py:"15px"},"&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell":{py:"22px"},".MuiDataGrid-columnHeaderTitle":{fontWeight:700}}}),(0,b.jsx)(c.A,{open:null===v||void 0===v?void 0:v.type,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,onClose:()=>A({type:null,errorField:null}),children:(0,b.jsxs)(u.A,{severity:"error",children:[(0,b.jsxs)(h.A,{children:["missing"===(null===v||void 0===v?void 0:v.type)&&"Ch\u01b0a nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin","invalid"===(null===v||void 0===v?void 0:v.type)&&"Th\u1eddi gian kh\xf4ng h\u1ee3p l\u1ec7",(0,b.jsx)("strong",{children:"noProfile"===(null===v||void 0===v?void 0:v.type)&&"Vui l\xf2ng ho\xe0n th\xe0nh tr\u01b0\u1edbc ph\u1ea7n Th\xf4ng tin chung!"})]}),(0,b.jsx)("strong",{children:null===v||void 0===v?void 0:v.errorField})]})})]})},xe={".css-i4bv87-MuiSvgIcon-root":{height:"14px",width:"14px"},".css-1qrfzum-MuiButtonBase-root-MuiIconButton-root":{paddingX:"0px",marginRight:"-5px"},".css-yykmq0-MuiInputBase-input-MuiOutlinedInput-input":{paddingX:0,marginX:0},".css-33lv7h-MuiInputBase-root-MuiOutlinedInput-root":{fontSize:"12px",paddingRight:0,paddingLeft:"-100px"}};function fe(){const{profile:e,setProfile:t}=(0,S.A)(),{onSaveData:s}=te(),{onSaveDataById:a}=se(),{onDeleteDataById:l}=ne(),[d,g]=(0,n.useState)([]),[m,x]=(0,n.useState)({state:!1,message:""});(0,n.useEffect)((()=>{var t;const s=null===e||void 0===e?void 0:e.education_informations,n=s?JSON.parse(JSON.stringify(s)):[];n&&(e=>{e.map((e=>{e.startDate=(0,D._g)(e.startDate),e.endDate=(0,D._g)(e.endDate)}))})(n),g((null===e||void 0===e||null===(t=e.education_informations)||void 0===t?void 0:t.length)>0?n:[])}),[e]);const f=e=>!G()(e.startDate,"DD/MM/YYYY").isAfter(G()(e.endDate,"DD/MM/YYYY"))||(x({state:!0,message:"Ng\xe0y k\u1ebft th\xfac ph\u1ea3i sau ng\xe0y b\u1eaft \u0111\u1ea7u"}),!1),p=(e,t)=>{e.api.setEditCellValue({...e,value:t})},j=[{field:"schoolName",headerName:"Tr\u01b0\u1eddng/ Trung t\xe2m \u0111\xe0o t\u1ea1o",width:240,editable:!0},{field:"specialization",headerName:"Chuy\xean ng\xe0nh",width:220,editable:!0},{field:"degreeName",headerName:"T\xean ch\u1ee9ng ch\u1ec9",width:150,editable:!0},{field:"startDate",headerName:"B\u1eaft \u0111\u1ea7u",type:"date",width:110,editable:!0,valueGetter:e=>G()(e.value,"DD/MM/YYYY").toDate(),valueFormatter:e=>(0,D._g)(e.value),renderEditCell:e=>(0,b.jsx)(W.A,{sx:xe,onChange:t=>p(e,t),value:e.value})},{field:"endDate",headerName:"K\u1ebft th\xfac",type:"date",width:110,editable:!0,valueGetter:e=>G()(e.value,"DD-MM-YYYY").toDate(),valueFormatter:e=>(0,D._g)(e.value),renderEditCell:e=>(0,b.jsx)(W.A,{sx:xe,onChange:t=>p(e,t),value:e.value})}];return(0,b.jsxs)(r.A,{id:"education",children:[(0,b.jsx)(i.A,{display:"flex",justifyContent:"space-between",alignItems:"center",children:(0,b.jsx)(i.A,{display:"flex",children:(0,b.jsx)(o.A,{fontWeight:700,fontSize:21,lineHeight:3,children:"Th\xf4ng tin h\u1ecdc v\u1ea5n"})})}),(0,b.jsx)(M.A,{}),(0,b.jsx)(i.A,{pt:3,pb:6,children:(0,b.jsx)(me,{profile:e,rows:d,columns:j,handleSave:e=>{f(e)&&s(e)},handleUpdate:(e,t)=>{f(t)&&a([e,t])},handleDelete:e=>{l(e)}})}),(0,b.jsx)(c.A,{open:null===m||void 0===m?void 0:m.state,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,onClose:()=>x({state:!1,message:""}),children:(0,b.jsxs)(u.A,{severity:"error",children:[(0,b.jsx)(h.A,{children:(0,b.jsx)("strong",{children:null===m||void 0===m?void 0:m.message})}),"D\u1eef li\u1ec7u c\u1ee7a b\u1ea1n s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c l\u01b0u l\u1ea1i"]})})]})}var pe=s(10611);const je=()=>{const e=(0,f.useQueryClient)(),{toast:t}=(0,p.n)(),s=j.ae.create,{mutate:n,isLoading:i}=(0,f.useMutation)(s,{onSuccess:s=>{200===s.status?(t.success({massage:s.message}),e.invalidateQueries("get-OnlineProfile")):t.error({massage:s.message})},onError:e=>{t.error({massage:e.response.data.message})}});return{onSaveData:n,isLoading:i}},ve=()=>{const e=(0,f.useQueryClient)(),{toast:t}=(0,p.n)(),{mutate:s,isLoading:n}=(0,f.useMutation)((e=>{let[t,s]=e;return j.ae.update(t,s)}),{onSuccess:s=>{200===s.status?(t.success({massage:s.message}),e.invalidateQueries("get-OnlineProfile")):t.error({massage:s.message})},onError:e=>{t.error({massage:e.response.data.message})}});return{onSaveDataById:s,isLoading:n}},Ae=()=>{const e=(0,f.useQueryClient)(),{toast:t}=(0,p.n)(),{mutate:s,isLoading:n}=(0,f.useMutation)((e=>j.ae.remove(e)),{onSuccess:s=>{200===s.status?(t.success({massage:s.message}),e.invalidateQueries("get-OnlineProfile")):t.error({massage:s.message})},onError:e=>{t.error({massage:e.response.data.message})}});return{onDeleteDataById:s,isLoading:n}};const ye=function(){const{profile:e}=(0,S.A)(),{onSaveData:t}=je(),{onSaveDataById:s}=ve(),{onDeleteDataById:a}=Ae(),[l,d]=(0,n.useState)(!1),[c,u]=(0,n.useState)([]);return(0,n.useEffect)((()=>{null!==e&&void 0!==e&&e.another_degrees&&e.another_degrees.length>0&&u(e.another_degrees)}),[e]),l?(0,b.jsx)(i.A,{sx:{width:"100%"},children:(0,b.jsx)(pe.A,{})}):(0,b.jsxs)(r.A,{id:"other_degree",children:[(0,b.jsx)(i.A,{display:"flex",justifyContent:"space-between",alignItems:"center",children:(0,b.jsx)(i.A,{display:"flex",children:(0,b.jsx)(o.A,{fontWeight:700,fontSize:21,lineHeight:3,children:"Nh\u1eefng ch\u1ee9ng ch\u1ec9 kh\xe1c"})})}),(0,b.jsx)(M.A,{}),(0,b.jsx)(i.A,{pt:3,pb:6,children:(0,b.jsx)(me,{rows:c,columns:[{field:"degreeName",headerName:"Ch\u1ee9ng ch\u1ec9",width:420,editable:!0},{field:"level",headerName:"M\u1ee9c \u0111\u1ed9 th\xe0nh th\u1ea1o",width:410,editable:!0}],handleSave:async e=>{d(!0);const s={...e};t(s),d(!1)},handleUpdate:async(e,t)=>{d(!0);const n={...t};s([e,n]),d(!1)},handleDelete:async e=>{d(!0),a(e),d(!1)},profile:e})})]})};var De=s(39045),Se=s(47298),we=s(76391),be=s(54983),Ce=s(83510),Me=s(17916),ke=s(54262),Ie=s(62237),Ne=s(9052),Ee=s(86971),_e=s(78910),Pe=s(91401),Le=s(19290),Te=s(7968);const ze=e=>{let{children:t}=e;return(0,b.jsx)(i.A,{bgcolor:"#ffff",sx:{mb:4,boxShadow:"2px 2px 6px #aae2f7"},children:t})},Oe=[{icon:(0,b.jsx)(Se.A,{sx:{width:20}}),title:"Th\xf4ng tin c\xe1 nh\xe2n",id:"personal"},{icon:(0,b.jsx)(we.A,{sx:{width:20}}),title:"Th\xf4ng tin chung",id:"general"},{icon:(0,b.jsx)(be.A,{sx:{width:20}}),title:"Th\xf4ng tin ngh\u1ec1 nghi\u1ec7p",id:"work_experience"},{icon:(0,b.jsx)(Ce.A,{sx:{width:20}}),title:"Th\xf4ng tin h\u1ecdc v\u1ea5n",id:"education"},{icon:(0,b.jsx)(Me.A,{sx:{width:20}}),title:"Nh\u1eefng ch\u1ee9ng ch\u1ec9 kh\xe1c",id:"other_degree"}];function Qe(){const[e,t]=(0,n.useState)(!1),[s,x]=(0,n.useState)(!1),[f,p]=(0,n.useState)(!1),{onlineProfile:j,isLoading:v}=(0,ke.A)(),{profile:y,setProfile:D}=(0,S.A)(),{onUpdateData:w}=(0,A.A)(),M=(0,Ee.Zp)(),k=(0,a.A)(),I=(0,Te.f)(k);return(0,n.useEffect)((()=>{s&&M("/employee/recruitment-profile")}),[s]),(0,n.useEffect)((()=>{D(j)}),[j]),v?(0,b.jsx)(Ie.A,{}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(r.A,{children:[(0,b.jsx)(o.A,{mt:3,fontSize:22,fontWeight:700,children:"T\u1ea1o h\u1ed3 s\u01a1 tr\u1ef1c tuy\u1ebfn"}),(0,b.jsxs)(l.Ay,{container:!0,columnSpacing:2,mt:2,children:[(0,b.jsx)(l.Ay,{item:!0,xs:I?12:10,children:Oe.map((e=>(0,b.jsxs)(ze,{children:["personal"===e.id&&(0,b.jsx)(m.A,{}),"general"===e.id&&(0,b.jsx)(C,{}),"work_experience"===e.id&&(0,b.jsx)(ee,{}),"education"===e.id&&(0,b.jsx)(fe,{}),"other_degree"===e.id&&(0,b.jsx)(ye,{})]},e.id)))}),(0,b.jsx)(l.Ay,{item:!0,xs:I?0:2,sx:{display:{xs:"none",sm:"inline"}},children:(0,b.jsx)(i.A,{bgcolor:"#ffff",sx:{boxShadow:"2px 2px 6px #aae2f7"},width:200,position:"sticky",top:60,children:(0,b.jsx)(De.A,{sections:Oe})})})]})]},"online"),(0,b.jsxs)(Ne.A,{children:[(0,b.jsx)(d.A,{onClick:async()=>{x(!0)},variant:"outlined",color:"secondary",sx:{width:200},children:"Quay l\u1ea1i"}),(0,b.jsx)(d.A,{variant:"contained",sx:{width:200},onClick:async()=>{if(p(!0),null!==y&&void 0!==y&&y.userId){const e=(0,_e.V)(y,"online");(0,Pe.A)(Le.uz,[e],null,{58:5,60:5}).then((t=>{const s=(0,_e.Z)(t,JSON.stringify(e));w({...y,keywords:(null===y||void 0===y?void 0:y.skills)+", "+s}),x(!0),p(!1)}))}else t(!0),p(!1)},children:"L\u01b0u h\u1ed3 s\u01a1"})]}),(0,b.jsx)(c.A,{open:e,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:3e3,onClose:()=>t(!1),children:(0,b.jsx)(u.A,{severity:"error",children:(0,b.jsx)(h.A,{children:e&&"Vui l\xf2ng cung c\u1ea5p th\xf4ng tin chung"})})}),(0,b.jsx)(g.A,{sx:{color:"#fff",zIndex:e=>e.zIndex.drawer+1},open:f,children:(0,b.jsx)(Ie.A,{})})]})}}}]);
//# sourceMappingURL=971.3c874f98.chunk.js.map