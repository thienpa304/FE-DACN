"use strict";(self.webpackChunkFE_DACN=self.webpackChunkFE_DACN||[]).push([[741],{80881:(e,n,s)=>{s.d(n,{A:()=>l});var i=s(19464),t=s(11906),r=s(70579);function l(e){const{handleSubmit:n,handleCancel:s}=e;return(0,r.jsxs)(i.A,{display:"flex",justifyContent:"center",sx:{gap:3},children:[(0,r.jsx)(t.A,{onClick:s,variant:"outlined",color:"secondary",sx:{width:120},children:"H\u1ee7y"}),(0,r.jsx)(t.A,{color:"success",onClick:n,variant:"contained",sx:{width:120},children:"X\xe1c nh\u1eadn"})]})}},67002:(e,n,s)=>{s.d(n,{A:()=>d});var i=s(89302),t=s(898),r=s(58390),l=s(60446),o=s.n(l),a=s(70579);function d(e){return(0,a.jsx)(r.$,{dateAdapter:i.R,children:(0,a.jsx)(t.l,{format:"DD/MM/YYYY",...e,value:e.value?o()(e.value):null,slotProps:{textField:{size:"small",fullWidth:!0}}})})}},63656:(e,n,s)=>{s.d(n,{A:()=>o});s(65043);var i=s(11906),t=s(85865),r=s(36134),l=s(70579);function o(e){return(0,l.jsx)(i.A,{...e,variant:"outlined",color:"secondary",startIcon:(0,l.jsx)(r.A,{fontSize:"large"}),sx:{borderRadius:5},children:(0,l.jsx)(t.A,{textTransform:"none",children:"Ch\u1ec9nh s\u1eeda"})})}},58555:(e,n,s)=>{s.d(n,{A:()=>l});var i=s(65043),t=s(89577),r=s(70579);const l=i.forwardRef((function(e,n){const{onChange:s,...i}=e;return(0,r.jsx)(t.HG,{...i,getInputRef:n,onValueChange:n=>{s({target:{name:e.name,value:n.value}})},thousandSeparator:!0,valueIsNumericString:!0})}))},95851:(e,n,s)=>{s.d(n,{A:()=>r});var i=s(67784),t=s(70579);const r=e=>(0,t.jsx)(i.A,{size:"small",fullWidth:!0,...e})},52247:(e,n,s)=>{s.d(n,{ZK:()=>c,n7:()=>a,nb:()=>h,qz:()=>d,rN:()=>o});var i=s(85865),t=s(65099),r=s(70579);const l=(e,n,s,t)=>{const l=new RegExp("".concat(t,"/"),"g");return(0,r.jsxs)(i.A,{color:"error",my:1,fontWeight:700,fontSize:13,children:[e," ph\u1ea3i c\xf3 \u0111\u1ecbnh d\u1ea1ng\xa0",n.join(", ").replace(l,".")," v\xe0 dung l\u01b0\u1ee3ng"," "," <=".concat(s/1024/1024,"MB")]})},o=l("\u1ea2nh \u0111\u1ea1i di\u1ec7n",t.tR.acceptTypes,t.tR.acceptSize,"image"),a=l("\u1ea2nh b\xeca",t.YP.acceptTypes,t.YP.acceptSize,"image"),d=l("CV",t.BZ.acceptTypes,t.BZ.acceptSize,"application"),c=(0,r.jsx)(i.A,{color:"error",my:1,fontWeight:700,fontSize:13,children:"R\u1ea5t ti\u1ebfc, h\u1ec7 th\u1ed1ng ch\u1ec9 c\xf3 th\u1ec3 ph\xe2n t\xedch h\u1ed3 s\u01a1 ch\u1ee9a t\u1ed1i \u0111a 4000 t\u1eeb. Vui l\xf2ng t\u1ea3i h\u1ed3 s\u01a1 kh\xe1c !"}),h=(0,r.jsx)(i.A,{color:"error",my:1,fontWeight:700,fontSize:13,children:"Kh\xf4ng nh\u1eadn di\u1ec7n \u0111\u01b0\u1ee3c n\u1ed9i dung trong file h\u1ed3 s\u01a1 c\u1ee7a b\u1ea1n. Vui l\xf2ng t\u1ea3i h\u1ed3 s\u01a1 kh\xe1c !"})},65099:(e,n,s)=>{s.d(n,{BZ:()=>r,XS:()=>i,YP:()=>l,tR:()=>t});const i={companyAvatar:"https://th.bing.com/th/id/OIP.EK1rvrib-MWNflZRM2XiDQHaH_?pid=ImgDet&w=183&h=197&c=7&dpr=1.3",companyCover:"https://png.pngtree.com/background/20210706/original/pngtree-business-background-white-collar-jobs-picture-image_216619.jpg"},t={acceptTypes:["image/jpeg","image/png","image/gif"],acceptSize:1048576},r={acceptTypes:["application/pdf"],acceptSize:2097152},l={acceptTypes:["image/jpeg","image/png","image/gif"],acceptSize:4194304}},17945:(e,n,s)=>{s.d(n,{A:()=>S});var i=s(65043),t=s(19252),r=s(19464),l=s(85865),o=s(39336),a=s(68903),d=s(51787),c=s(33173),h=s(49768),u=s(95851),x=s(24524),m=s(24858),p=s(25650),A=s(58555),j=s(63656),g=s(80881),f=s(56743),v=s(81670),y=s(59162),b=s(70579);const S=e=>{var n;let{data:s,options:S,onSubmit:k}=e;const{control:C,reset:w,handleSubmit:W,formState:{errors:z}}=(0,m.mN)({defaultValues:{jobTitle:"",profession:"",currentPosition:"",desiredPosition:"",desiredSalary:null,degree:"",experience:"",workAddress:"",employmentType:"",careerGoal:"",skills:""}}),[T,M]=(i.useRef(null),(0,i.useState)(!1)),[I,R]=(0,i.useState)(null),q=e=>({...e,profession:(0,p.$6)(null===e||void 0===e?void 0:e.profession),workAddress:(0,p.$6)(null===e||void 0===e?void 0:e.workAddress),skills:Array.isArray(e.skills)?e.skills.map((e=>e.value||e)).join(", "):e.skills});return(0,i.useEffect)((()=>{w(s),(null===s||void 0===s?void 0:s.skills)&&R((0,p.Bn)(null===s||void 0===s?void 0:s.skills))}),[s]),(0,b.jsxs)(t.A,{id:"general",children:[(0,b.jsxs)(r.A,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,b.jsx)(r.A,{display:"flex",children:(0,b.jsx)(l.A,{fontWeight:700,fontSize:21,lineHeight:3,children:"Th\xf4ng tin chung"})}),T&&(0,b.jsx)(j.A,{onClick:()=>M(!1)})]}),(0,b.jsx)(o.A,{}),T?(0,b.jsx)(v.A,{user:{...s,degree:f.Ry[s.degree]?f.Ry[s.degree]:s.degree}}):(0,b.jsxs)(a.Ay,{sx:{mt:1},py:2,children:[(0,b.jsxs)(a.Ay,{container:!0,mb:4,spacing:3,children:[(0,b.jsx)(a.Ay,{item:!0,xs:12,children:(0,b.jsx)(c.A,{element:(0,b.jsx)(u.A,{}),control:C,errors:z,fullWidth:!0,id:"jobTitle",label:"V\u1ecb tr\xed mong mu\u1ed1n",name:"jobTitle",required:!0,disabled:T})}),(0,b.jsx)(a.Ay,{item:!0,xs:12,children:(0,b.jsx)(c.A,{element:(0,b.jsx)(x.A,{}),control:C,errors:z,fullWidth:!0,id:"profession",label:"Ngh\u1ec1 nghi\u1ec7p",name:"profession",options:S.profession,required:!0,disabled:T,defaultValue:null===s||void 0===s?void 0:s.profession})}),(0,b.jsx)(a.Ay,{item:!0,xs:12,sm:6,children:(0,b.jsx)(c.A,{element:(0,b.jsx)(h.A,{}),options:S.positionLevel,control:C,errors:z,fullWidth:!0,id:"currentPosition",label:"C\u1ea5p b\u1eadc hi\u1ec7n t\u1ea1i",name:"currentPosition",required:!0,disabled:T})}),(0,b.jsx)(a.Ay,{item:!0,xs:12,sm:6,children:(0,b.jsx)(c.A,{element:(0,b.jsx)(h.A,{}),options:S.positionLevel,control:C,errors:z,fullWidth:!0,id:"desiredPosition",label:"C\u1ea5p b\u1eadc mong mu\u1ed1n",name:"desiredPosition",required:!0,disabled:T})}),(0,b.jsx)(a.Ay,{item:!0,xs:12,sm:6,children:(0,b.jsx)(c.A,{element:(0,b.jsx)(u.A,{}),control:C,errors:z,fullWidth:!0,id:"desiredSalary",label:"M\u1ee9c l\u01b0\u01a1ng mong mu\u1ed1n",name:"desiredSalary",pattern:"integer",required:!0,disabled:T,InputProps:{inputComponent:A.A,endAdornment:(0,b.jsx)(d.A,{position:"end",children:"tri\u1ec7u VN\u0110"})}})}),(0,b.jsx)(a.Ay,{item:!0,xs:12,sm:6,children:(0,b.jsx)(c.A,{element:(0,b.jsx)(h.A,{}),options:S.degree,control:C,errors:z,fullWidth:!0,id:"degree",label:"Tr\xecnh \u0111\u1ed9 h\u1ecdc v\u1ea5n",name:"degree",required:!0,disabled:T})}),(0,b.jsx)(a.Ay,{item:!0,xs:12,sm:6,children:(0,b.jsx)(c.A,{element:(0,b.jsx)(h.A,{}),options:S.experience,control:C,errors:z,fullWidth:!0,id:"experience",label:"S\u1ed1 n\u0103m kinh nghi\u1ec7m",name:"experience",required:!0,disabled:T})}),(0,b.jsx)(a.Ay,{item:!0,xs:12,sm:6,children:(0,b.jsx)(c.A,{element:(0,b.jsx)(h.A,{}),options:S.workingForm,control:C,errors:z,fullWidth:!0,id:"employmentType",label:"H\xecnh th\u1ee9c l\xe0m vi\u1ec7c",name:"employmentType",required:!0,disabled:T})}),(0,b.jsx)(a.Ay,{item:!0,xs:12,children:(0,b.jsx)(c.A,{element:(0,b.jsx)(x.A,{}),options:S.workAddress,control:C,errors:z,defaultValue:null===s||void 0===s?void 0:s.workAddress,fullWidth:!0,id:"workAddress",label:"\u0110\u1ecba ch\u1ec9 l\xe0m vi\u1ec7c",name:"workAddress",required:!0,disabled:T})}),(0,b.jsx)(a.Ay,{item:!0,xs:12,children:(0,b.jsx)(c.A,{element:(0,b.jsx)(u.A,{}),control:C,errors:z,fullWidth:!0,id:"careerGoal",label:"M\u1ee5c ti\xeau ngh\u1ec1 nghi\u1ec7p",name:"careerGoal",required:!0,disabled:T})}),(0,b.jsxs)(a.Ay,{item:!0,xs:12,children:[(0,b.jsx)(c.A,{element:(0,b.jsx)(x.A,{freeSolo:!0,limitTags:7,options:y.J3.map((e=>e.value))}),defaultValue:null===s||void 0===s||null===(n=s.skills)||void 0===n?void 0:n.split(", "),control:C,errors:z,id:"skills",label:"K\u0129 n\u0103ng b\u1eaft bu\u1ed9c",name:"skills",required:!0}),(0,b.jsx)(l.A,{fontSize:12,color:"secondary",fontStyle:"italic",sx:{display:"flex",justifyContent:"center"},children:"H\xe3y li\u1ec7t k\xea t\u1ed1i \u0111a 10 t\u1eeb kh\xf3a. V\xed d\u1ee5: Python, ReactJS, HTML, Go... S\u1ebd gi\xfap h\u1ec7 th\u1ed1ng t\xecm ki\u1ebfm \u0111\u01b0\u1ee3c doanh nghi\u1ec7p ph\xf9 h\u1ee3p v\u1edbi h\u1ed3 s\u01a1 b\u1ea1n nh\u1ea5t"})]})]}),!T&&(0,b.jsx)(g.A,{handleSubmit:W((e=>{const n=q(e);k(n),M(!0)})),handleCancel:()=>{w(s),M(!0)}})]})]})}},52047:(e,n,s)=>{s.d(n,{A:()=>E});var i=s(65043),t=s(34535),r=s(19252),l=s(19464),o=s(85865),a=s(39336),d=s(68903),c=s(81045),h=s(11906),u=s(91281),x=s(44046),m=s(81637),p=s(33173),A=s(49768),j=s(67002),g=s(95851),f=s(63656),v=s(24858),y=s(60446),b=s.n(y),S=s(36110),k=s(70737),C=s(56902),w=s(69570),W=s(65099),z=s(25650),T=s(80881),M=s(52247),I=s(25172),R=s(40542),q=s(70579);const D=(0,t.Ay)("input")({display:"none"});function E(){var e;const[n,s]=(0,i.useState)({avatar:null,avatarError:!1,storageAvatar:null,uploadFile:null}),{user:t,setUserApp:y}=(0,S.n)(),{onSaveData:E}=(0,I.A)(),{onSaveData:V}=(0,k.A)(),{acceptTypes:P,acceptSize:N}=W.tR,[Y,_]=(0,i.useState)(!1),[H,L]=(0,i.useState)(!1);(0,i.useEffect)((()=>{K(G),F()}),[t]);const F=async()=>{const e=await(0,w.TL)(null===t||void 0===t?void 0:t.avatar).catch((()=>""));s({...n,avatar:e,storageAvatar:e})},B=e=>{const i=e.target.files[0];if(!i)return;if(!P.includes(i.type)||i.size>N)return void s({...n,avatarError:!0});const t=URL.createObjectURL(i);s({...n,avatar:t,uploadFile:i,avatarError:!1})},G={...t,dob:(0,z.vd)(t.dob,"DD-MM-YYYY"),sex:null===(e=C.im.find((e=>e.label===t.sex)))||void 0===e?void 0:e.value,isMarried:t.isMarried?"\u0110\xe3 k\u1ebft h\xf4n":"\u0110\u1ed9c th\xe2n"},{control:Z,reset:K,handleSubmit:O,formState:{errors:Q}}=(0,v.mN)({defaultValues:G});return(0,q.jsxs)(r.A,{id:"personal",children:[(0,q.jsxs)(l.A,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,q.jsx)(l.A,{display:"flex",children:(0,q.jsx)(o.A,{fontWeight:700,fontSize:21,lineHeight:3,children:"Th\xf4ng tin c\xe1 nh\xe2n"})}),Y&&(0,q.jsx)(f.A,{onClick:()=>_(!1)})]}),(0,q.jsx)(a.A,{}),(0,q.jsxs)(d.Ay,{container:!0,sx:{mt:1},py:2,children:[(0,q.jsx)(d.Ay,{item:!0,xs:3,pr:2,children:(0,q.jsxs)(l.A,{display:"flex",flexDirection:"column",alignItems:"center",rowGap:2,children:[(0,q.jsx)(c.A,{alt:t.name,src:n.avatar,sx:{borderRadius:2,width:"75%",height:180,bgcolor:"#a0b9cfc2"}}),!n.avatar&&!Y&&(0,q.jsx)("label",{htmlFor:"userAvatar",children:(0,q.jsxs)(h.A,{component:"label",size:"small",startIcon:(0,q.jsx)(u.A,{}),variant:"text",color:"secondary",children:[(0,q.jsx)(p.A,{element:(0,q.jsx)(D,{type:"file",accept:"image/*"}),control:Z,name:"userAvatar",id:"userAvatar",label:"\u1ea2nh \u0111\u1ea1i di\u1ec7n",onChange:B}),(0,q.jsx)(o.A,{sx:{fontSize:15,fontWeight:700},children:"T\u1ea3i l\xean"})]})}),n.avatar&&!Y&&(0,q.jsxs)(l.A,{display:"flex",flexDirection:"row",alignItems:"center",children:[(0,q.jsxs)(h.A,{component:"label",size:"small",startIcon:(0,q.jsx)(u.A,{}),variant:"text",color:"secondary",children:[(0,q.jsx)(p.A,{element:(0,q.jsx)(D,{type:"file",accept:"image/*"}),control:Z,name:"userAvatar",id:"userAvatar",label:"\u1ea2nh \u0111\u1ea1i di\u1ec7n",onChange:B}),(0,q.jsx)(o.A,{sx:{fontSize:15,fontWeight:700},children:"Thay \u0111\u1ed5i"})]}),(0,q.jsx)(h.A,{component:"label",onClick:()=>{s({...n,avatar:null,avatarError:!1})},size:"small",startIcon:(0,q.jsx)(x.A,{}),variant:"text",color:"secondary",children:(0,q.jsx)(o.A,{sx:{fontSize:15,fontWeight:700},children:"X\xf3a"})})]}),n.avatarError&&M.rN]})}),(0,q.jsxs)(d.Ay,{item:!0,xs:9,children:[Y?(0,q.jsx)(R.A,{user:t}):(0,q.jsxs)(d.Ay,{container:!0,mb:4,spacing:3,children:[(0,q.jsx)(d.Ay,{item:!0,xs:12,sm:6,children:(0,q.jsx)(p.A,{element:(0,q.jsx)(g.A,{}),control:Z,errors:Q,fullWidth:!0,id:"name",label:"H\u1ecd v\xe0 t\xean",name:"name",required:!0,disabled:Y})}),(0,q.jsx)(d.Ay,{item:!0,xs:12,sm:6,children:(0,q.jsx)(p.A,{element:(0,q.jsx)(g.A,{}),control:Z,errors:Q,fullWidth:!0,id:"email",label:"Email",name:"email",pattern:"email",required:!0,disabled:Y})}),(0,q.jsx)(d.Ay,{item:!0,xs:12,sm:6,children:(0,q.jsx)(p.A,{element:(0,q.jsx)(g.A,{}),control:Z,errors:Q,fullWidth:!0,id:"phone",label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",name:"phone",pattern:"phone",required:!0,disabled:Y})}),(0,q.jsx)(d.Ay,{item:!0,xs:12,sm:6,children:(0,q.jsx)(p.A,{element:(0,q.jsx)(j.A,{maxDate:b()()}),control:Z,errors:Q,fullWidth:!0,id:"dob",label:"Ng\xe0y sinh",name:"dob",required:!0,disabled:Y})}),(0,q.jsx)(d.Ay,{item:!0,xs:12,sm:6,children:(0,q.jsx)(p.A,{element:(0,q.jsx)(A.A,{}),options:C.im,control:Z,errors:Q,fullWidth:!0,id:"sex",label:"Gi\u1edbi t\xednh",name:"sex",disabled:Y})}),(0,q.jsx)(d.Ay,{item:!0,xs:12,sm:6,children:(0,q.jsx)(p.A,{element:(0,q.jsx)(A.A,{}),options:C.Fg,control:Z,errors:Q,fullWidth:!0,id:"isMarried",label:"T\xecnh tr\u1ea1ng h\xf4n nh\xe2n",name:"isMarried",disabled:Y})}),(0,q.jsx)(d.Ay,{item:!0,xs:12,children:(0,q.jsx)(p.A,{element:(0,q.jsx)(g.A,{}),control:Z,errors:Q,fullWidth:!0,id:"address",label:"\u0110\u1ecba ch\u1ec9",name:"address",required:!0,disabled:Y})})]}),!Y&&(0,q.jsx)(l.A,{display:"flex",justifyContent:"center",sx:{gap:3},children:H?(0,q.jsx)(m.A,{size:20}):(0,q.jsx)(T.A,{handleSubmit:O((async e=>{var s;L(!0);let i=t.avatar;n.uploadFile&&(i=await(0,w.QM)(n.uploadFile).catch((()=>""))),n.avatar||(await(0,w.Vr)(t.avatar),i="");const r={...e,dob:(0,z._g)(e.dob),isMarried:"\u0110\xe3 k\u1ebft h\xf4n"===e.isMarried?"1":"0",avatar:i};y({...r,isMarried:"1"===r.isMarried,sex:null===(s=C.im.find((e=>e.value===r.sex)))||void 0===s?void 0:s.label,avatar:i}),V(r),E(r),L(!1),_(!0)})),handleCancel:()=>{K(G),s({...n,avatar:n.storageAvatar}),_(!0)}})})]})]})]})}},9052:(e,n,s)=>{s.d(n,{A:()=>r});var i=s(34535),t=s(19464);const r=(0,i.Ay)(t.A)((e=>{let{theme:n}=e;return{background:"#ffff",height:70,width:"100%",boxShadow:"0px 0px 10px #aae2f7",left:0,right:0,bottom:0,zIndex:1,position:"sticky",display:"flex",justifyContent:"flex-end",alignItems:"center",gap:n.spacing(4)}}))},39045:(e,n,s)=>{s.d(n,{A:()=>d});var i=s(35721),t=s(71322),r=s(85865),l=s(11906),o=s(68903),a=s(70579);const d=e=>{let{sections:n}=e;return(0,a.jsxs)(i.A,{component:"nav",sx:{px:0},children:[(0,a.jsx)(t.Ay,{children:(0,a.jsx)(r.A,{fontSize:14,fontWeight:700,children:"H\u1ed3 s\u01a1 tr\u1ef1c tuy\u1ebfn c\u1ee7a b\u1ea1n"})}),n.map((e=>(0,a.jsx)(t.Ay,{sx:{p:0},children:(0,a.jsx)(l.A,{sx:{py:1},fullWidth:!0,onClick:()=>(e=>{const n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth"})})(e.id),color:"secondary",children:(0,a.jsxs)(o.Ay,{container:!0,children:[(0,a.jsx)(o.Ay,{item:!0,xs:2,display:"flex",alignItems:"center",justifyContent:"center",children:e.icon}),(0,a.jsx)(o.Ay,{item:!0,xs:10,display:"flex",justifyContent:"left",alignItems:"center",children:(0,a.jsx)(r.A,{fontSize:13,children:e.title})})]})})},e.id)))]})}},25172:(e,n,s)=>{s.d(n,{A:()=>l});var i=s(82907),t=s(36110),r=s(15001);const l=()=>{const{toast:e,setUserApp:n}=(0,t.n)(),s=r.nZ.create,{mutate:l,isLoading:o}=(0,i.useMutation)(s,{onSuccess:s=>{200===s.status?(e.success({massage:s.message}),n({avatar:s.data.avatar})):e.error({massage:s.message})},onError:n=>{e.error({massage:n.response.data.message})}});return{onSaveData:l,isLoading:o}}},70737:(e,n,s)=>{s.d(n,{A:()=>l});var i=s(82907),t=s(36110),r=s(15001);const l=()=>{const e=(0,i.useQueryClient)(),{toast:n}=(0,t.n)(),s=r.OY.create,{mutate:l,isLoading:o}=(0,i.useMutation)(s,{onSuccess:s=>{200===s.status?(e.invalidateQueries("get-Profile"),n.success({massage:s.message})):n.error({massage:s.message})},onError:e=>{n.error({massage:e.response.data.message})}});return{onSaveData:l,isLoading:o}}},78910:(e,n,s)=>{s.d(n,{V:()=>r,Z:()=>i});const i=(e,n)=>{if(e.length<=0&&!Boolean(e[0]))return;const s=e[0],i=s.indexOf("[");if(-1===i)return void console.log("Kh\xf4ng t\xecm th\u1ea5y k\xfd t\u1ef1 '['");const t=s.lastIndexOf("]");if(-1===t)return void console.log("Kh\xf4ng t\xecm th\u1ea5y k\xfd t\u1ef1 ']'");const r=s.substring(i+1,t).replace(/["]/g,"");console.log("extractedString: ",r);const l=r.replace(/[_!@#$%^&*;|<>'"\n\t\r]/g,"");console.log("jsonString: ",l);const o=l.split(",");console.log("keywordArray",o);const a=o.slice(0,20);return console.log("keywordList?.join(",")",null===a||void 0===a?void 0:a.join(", ")),null===a||void 0===a?void 0:a.join(", ")};const t=(e,n,s)=>{if("online"===n){var i;const n=e;return{jobTitle:null===n||void 0===n?void 0:n.jobTitle,profession:null===n||void 0===n?void 0:n.profession,work_experiences:null===n||void 0===n?void 0:n.work_experiences.map((e=>({jobTitle:e.jobTitle,jobDescription:e.jobDescription}))),education_informations:null===n||void 0===n?void 0:n.education_informations.map((e=>e.specialization)),another_degrees:null===n||void 0===n||null===(i=n.another_degrees)||void 0===i?void 0:i.map((e=>e.degreeName))}}return{jobTitle:null===e||void 0===e?void 0:e.jobTitle,profession:null===e||void 0===e?void 0:e.profession,cvContent:s}};function r(e,n,s){return t(e,n,s)}}}]);
//# sourceMappingURL=741.f0af130b.chunk.js.map