"use strict";(self.webpackChunkFE_DACN=self.webpackChunkFE_DACN||[]).push([[996],{80881:(e,s,n)=>{n.d(s,{A:()=>o});var t=n(19464),l=n(11906),i=n(70579);function o(e){const{handleSubmit:s,handleCancel:n}=e;return(0,i.jsxs)(t.A,{display:"flex",justifyContent:"center",sx:{gap:3},children:[(0,i.jsx)(l.A,{onClick:n,variant:"outlined",color:"secondary",sx:{width:120},children:"H\u1ee7y"}),(0,i.jsx)(l.A,{color:"success",onClick:s,variant:"contained",sx:{width:120},children:"X\xe1c nh\u1eadn"})]})}},67002:(e,s,n)=>{n.d(s,{A:()=>d});var t=n(89302),l=n(28343),i=n(58390),o=n(60446),r=n.n(o),a=n(70579);function d(e){return(0,a.jsx)(i.$,{dateAdapter:t.R,children:(0,a.jsx)(l.l,{format:"DD/MM/YYYY",...e,value:e.value?r()(e.value):null,slotProps:{textField:{size:"small",fullWidth:!0}}})})}},63656:(e,s,n)=>{n.d(s,{A:()=>a});n(65043);var t=n(11906),l=n(85865),i=n(36134),o=n(7968),r=n(70579);function a(e){const{isMobile:s}=(0,o.Q)();return(0,r.jsxs)(t.A,{...e,variant:"outlined",color:"secondary",sx:{display:"flex",borderRadius:{xs:1,md:5}},size:s?"small":"medium",children:[(0,r.jsx)(i.A,{fontSize:"small"}),(0,r.jsx)(l.A,{textTransform:"none",display:s&&"none",children:"Ch\u1ec9nh s\u1eeda"})]})}},46783:(e,s,n)=>{n.d(s,{A:()=>a});var t=n(65043),l=n(16520),i=n(59454),o=n(19464),r=n(70579);function a(e){const{isFollowed:s}=e,[n,a]=(0,t.useState)(s);return(0,t.useEffect)((()=>{a(s)}),[s]),(0,r.jsx)(o.A,{onClick:e=>{a((e=>!e))},sx:{display:"flex",alignItem:"center"},children:n?(0,r.jsx)(l.A,{sx:{display:"flex",color:"red","&:hover":{color:"darkred"}}}):(0,r.jsx)(i.A,{sx:{display:"flex",color:"red","&:hover":{color:"darkred"}}})})}},15357:(e,s,n)=>{n.d(s,{A:()=>i});var t=n(9634),l=(n(81580),n(70579));const i=e=>(0,l.jsx)(t.LazyLoadImage,{alt:e.alt,effect:"blur",src:e.src,height:e.height,width:e.width,srcSet:e.srcSet,placeholderSrc:e.placeholderSrc,visibleByDefault:e.visibleByDefault,style:{backgroundColor:"#fff",...e,...e.sx,...e.style},delayMethod:e.delayMethod,delayTime:e.delayTime})},30604:(e,s,n)=>{n.d(s,{A:()=>a});var t=n(65043),l=n(51318),i=n(70579);const o={textDecoration:"none",color:"#551a8b"},r=e=>{e.currentTarget.style.color="#FF7D55"},a=(0,t.forwardRef)(((e,s)=>{const{to:n,children:t,sx:a}=e;return(0,i.jsx)(l.N_,{...e,to:n,style:{...o,...a},onMouseEnter:r,onMouseLeave:e=>((e,s)=>{e.currentTarget.style.color=s||"#551a8b"})(e,null===a||void 0===a?void 0:a.color),children:t})}))},95851:(e,s,n)=>{n.d(s,{A:()=>i});var t=n(67784),l=n(70579);const i=e=>(0,l.jsx)(t.A,{size:"small",fullWidth:!0,...e})},21430:(e,s,n)=>{n.d(s,{A:()=>m});var t=n(19464),l=n(85865),i=n(94074),o=n(6897),r=n(51726),a=n(54367),d=n(30604),c=n(70579);const u=e=>[{label:"T\xean c\xf4ng ty",value:null===e||void 0===e?void 0:e.companyName},{label:"\u0110\u1ecba ch\u1ec9 c\xf4ng ty",value:null===e||void 0===e?void 0:e.companyLocation},{label:"L\u0129nh v\u1ef1c",value:null===e||void 0===e?void 0:e.careerField},{label:"Gi\u1edbi thi\u1ec7u doanh nghi\u1ec7p",value:null===e||void 0===e?void 0:e.description}];function m(e){var s;const{sx:n,company:m,companyPage:x=!1}=e;return(0,c.jsxs)(i.A,{sx:{px:5,...n,minHeight:300},children:[(0,c.jsxs)(t.A,{sx:{display:{xs:"normal",sm:"flex"}},justifyContent:"space-between",children:[(0,c.jsxs)(t.A,{display:"flex",children:[(0,c.jsx)(r.A,{color:"primary",sx:{fontSize:{sm:56,xs:46}}}),(0,c.jsx)(l.A,{fontWeight:700,sx:{fontSize:{sm:22,xs:20}},lineHeight:3,children:"Th\xf4ng tin c\xf4ng ty"})]}),!x&&(0,c.jsx)(d.A,{to:"/company/".concat((0,a.O)(null===m||void 0===m?void 0:m.companyName),"?id=").concat(btoa(null===m||void 0===m?void 0:m.userId)),sx:{textDecoration:"none",alignContent:"center"},children:"Xem trang c\xf4ng ty"})]}),null===(s=u(m))||void 0===s?void 0:s.map(((e,s)=>(0,c.jsx)(o.F_,{item:e},s)))]})}},55517:(e,s,n)=>{n.d(s,{A:()=>h});var t=n(65043),l=n(19464),i=n(82907),o=n(36110),r=n(53679);const a=()=>{const e=(0,i.useQueryClient)(),{toast:s}=(0,o.n)(),{mutate:n,isLoading:t}=(0,i.useMutation)((e=>{let[s]=e;return r.Ew.create({jobPosting:s})}),{onSuccess:n=>{200===n.status?(e.invalidateQueries(["get-FollowJobs"]),s.success({massage:n.message})):s.error({massage:n.message})},onError:e=>{s.error({massage:e.response.data.message})}});return{onFollowJobById:n,isLoading:t}};var d=n(46783),c=n(24277),u=n(41130),m=n(2384),x=n(70579);function h(e){const{job:s,sx:n}=e,{onFollowJobById:i}=a(),{isEmployee:r}=(0,o.n)(),[h,A]=(0,t.useState)(!1),{followJobsList:v}=(0,c.A)(),{jobList:y}=(0,u.A)();(0,m.A)({jobIds:null===y||void 0===y?void 0:y.join(",")});if((0,t.useEffect)((()=>{if(!s||null===v||void 0===v||!v.length)return;(null===v||void 0===v?void 0:v.includes(null===s||void 0===s?void 0:s.postId))&&A(!0)}),[JSON.stringify(v),JSON.stringify(s)]),s&&r)return(0,x.jsx)(l.A,{onClick:()=>{return e=null===s||void 0===s?void 0:s.postId,i([e]),void A((e=>!e));var e},sx:{display:"flex",alignItem:"center",...n},children:(0,x.jsx)(d.A,{isFollowed:h})})}},24277:(e,s,n)=>{n.d(s,{A:()=>i});var t=n(9971),l=n(76743);const i=()=>{const{data:e}=(0,t.G)(l.$E),s=(0,t.j)();return{followJobsList:e,setFollowJobList:e=>{s((0,l.zH)(e))},resetFollowJobList:()=>{s((0,l.AN)())}}}},2384:(e,s,n)=>{n.d(s,{A:()=>r});var t=n(82907),l=n(53679),i=n(36110),o=n(24277);const r=e=>{var s,n,r;const{isEmployee:a}=(0,i.n)(),{setFollowJobList:d}=(0,o.A)(),{data:c,isLoading:u,refetch:m}=(0,t.useQuery)(["get-FollowJobs",e],(()=>l.Ew.get({params:e}).then((e=>{var s,n;if(null!==(s=e.data)&&void 0!==s&&null!==(n=s.meta)&&void 0!==n&&n.itemCount){var t,l;const s=null===(t=e.data)||void 0===t||null===(l=t.items)||void 0===l?void 0:l.map((e=>e.postId));d(s)}return e}))),{keepPreviousData:!0,retry:1,refetchOnWindowFocus:!1,enabled:a});return{jobFollow:null===c||void 0===c||null===(s=c.data)||void 0===s?void 0:s.items,totalPages:null===c||void 0===c||null===(n=c.data)||void 0===n||null===(r=n.meta)||void 0===r?void 0:r.totalPages,isLoading:u,refetch:m}}},70737:(e,s,n)=>{n.d(s,{A:()=>o});var t=n(82907),l=n(36110),i=n(15001);const o=()=>{const e=(0,t.useQueryClient)(),{toast:s}=(0,l.n)(),n=i.OY.create,{mutate:o,isLoading:r}=(0,t.useMutation)(n,{onSuccess:n=>{200===n.status?(e.invalidateQueries("get-Profile"),s.success({massage:n.message})):s.error({massage:n.message})},onError:e=>{s.error({massage:e.response.data.message})}});return{onSaveData:o,isLoading:r}}},6897:(e,s,n)=>{n.d(s,{F_:()=>q,Ay:()=>z});var t=n(65043),l=n(34535),i=n(68903),o=n(85865),r=n(11906),a=n(19252),d=n(19464),c=n(83462),u=n(26600),m=n(39336),x=n(35316),h=n(24858),A=n(67002),v=n(33173),y=n(49768),j=n(56902),f=n(60446),g=n.n(f),p=n(70737),b=n(82907),S=n(36110),C=n(15001);const w=()=>{const e=(0,b.useQueryClient)(),{toast:s}=(0,S.n)(),n=C.ex.create,{mutate:t,isLoading:l}=(0,b.useMutation)(n,{onSuccess:n=>{200===n.status?(e.invalidateQueries("get-Company"),s.success({massage:n.message})):s.error({massage:n.message})},onError:e=>{s.error({massage:e.response.data.message})}});return{onSaveData:t,isLoading:l}};var F=n(95851),E=n(12197),O=n(80881),W=n(65073),L=n(24524),M=n(70579);function I(e){var s;const{isEmployee:n}=(0,S.n)(),{close:t,user:l}=e,{onSaveData:o}=(0,p.A)(),{control:r,handleSubmit:a,formState:{errors:c}}=(0,h.mN)({defaultValues:{...l,dob:(0,E.vd)(l.dob,"DD-MM-YYYY"),sex:null===(s=j.im.find((e=>e.label===l.sex)))||void 0===s?void 0:s.value,isMarried:l.isMarried?"\u0110\xe3 k\u1ebft h\xf4n":"\u0110\u1ed9c th\xe2n"}});return(0,M.jsxs)(d.A,{sx:{p:3},children:[(0,M.jsxs)(i.Ay,{container:!0,spacing:3,mb:4,children:[(0,M.jsx)(i.Ay,{item:!0,xs:12,sm:6,children:(0,M.jsx)(v.A,{element:(0,M.jsx)(F.A,{}),control:r,errors:c,fullWidth:!0,id:"name",label:"H\u1ecd v\xe0 t\xean",name:"name",required:!0})}),(0,M.jsx)(i.Ay,{item:!0,xs:12,sm:6,children:(0,M.jsx)(v.A,{element:(0,M.jsx)(F.A,{}),control:r,errors:c,disabled:!0,fullWidth:!0,id:"email",label:"Email",name:"email",required:!0})}),(0,M.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,M.jsx)(v.A,{element:(0,M.jsx)(F.A,{}),control:r,errors:c,fullWidth:!0,id:"phone",label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",name:"phone",pattern:"phone",required:!0})}),(0,M.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,M.jsx)(v.A,{element:(0,M.jsx)(F.A,{}),control:r,errors:c,fullWidth:!0,id:"address",label:"\u0110\u1ecba ch\u1ec9",name:"address",multiline:!0,required:!0})}),(0,M.jsx)(i.Ay,{item:!0,xs:12,sm:6,children:(0,M.jsx)(v.A,{element:(0,M.jsx)(A.A,{maxDate:g()()}),control:r,errors:c,fullWidth:!0,id:"dob",label:"Ng\xe0y sinh",name:"dob",required:!0})}),(0,M.jsx)(i.Ay,{item:!0,xs:12,sm:6,children:(0,M.jsx)(v.A,{element:(0,M.jsx)(y.A,{}),options:j.im,control:r,errors:c,fullWidth:!0,id:"sex",label:"Gi\u1edbi t\xednh",name:"sex",required:!0})}),n&&(0,M.jsx)(i.Ay,{item:!0,xs:12,sm:6,children:(0,M.jsx)(v.A,{element:(0,M.jsx)(y.A,{}),options:j.Fg,control:r,errors:c,fullWidth:!0,id:"isMarried",label:"T\xecnh tr\u1ea1ng h\xf4n nh\xe2n",name:"isMarried",required:!0})})]}),(0,M.jsx)(O.A,{handleSubmit:a((async e=>{const s=(0,E._g)(e.dob),n="\u0110\xe3 k\u1ebft h\xf4n"===e.isMarried?"1":"0",l={...e,dob:s,isMarried:n};o(l),(0,W.gV)(l),t()})),handleCancel:()=>t()})]})}function k(e){const{close:s,user:n}=e,{onSaveData:t}=w(),{control:l,handleSubmit:o,formState:{errors:r}}=(0,h.mN)({defaultValues:{...n}});return(0,M.jsxs)(d.A,{sx:{p:3},children:[(0,M.jsxs)(i.Ay,{container:!0,spacing:3,mb:4,children:[(0,M.jsx)(i.Ay,{item:!0,xs:12,children:(0,M.jsx)(v.A,{element:(0,M.jsx)(F.A,{}),control:l,errors:r,fullWidth:!0,id:"companyName",label:"T\xean c\xf4ng ty",name:"companyName",multiline:!0,required:!0})}),(0,M.jsx)(i.Ay,{item:!0,xs:12,sm:6,children:(0,M.jsx)(v.A,{element:(0,M.jsx)(F.A,{}),control:l,errors:r,fullWidth:!0,id:"taxCode",label:"M\xe3 s\u1ed1 thu\u1ebf",name:"taxCode",required:!0})}),(0,M.jsx)(i.Ay,{item:!0,xs:12,sm:6,children:(0,M.jsx)(v.A,{element:(0,M.jsx)(F.A,{}),control:l,errors:r,fullWidth:!0,id:"companyLocation",label:"\u0110\u1ecba ch\u1ec9",name:"companyLocation",required:!0,multiline:!0})}),(0,M.jsx)(i.Ay,{item:!0,xs:12,children:(0,M.jsx)(v.A,{element:(0,M.jsx)(L.A,{size:"small",freeSolo:!0,options:j.Pd,autoComplete:!0,autoSelect:!0,autoHighlight:!0,multiple:!1,defaultValue:null===n||void 0===n?void 0:n.careerField}),control:l,errors:r,fullWidth:!0,name:"careerField",label:"L\u0129nh v\u1ef1c",required:!0})}),(0,M.jsx)(i.Ay,{item:!0,xs:12,children:(0,M.jsx)(v.A,{element:(0,M.jsx)(F.A,{}),control:l,errors:r,fullWidth:!0,multiline:!0,maxRows:6,minRows:3,id:"description",label:"M\xf4 t\u1ea3 c\xf4ng ty",name:"description"})})]}),(0,M.jsx)(O.A,{handleSubmit:o((e=>{t(e),s()})),handleCancel:()=>s()})]})}var D=n(63656),Y=n(7968);const N=(0,l.Ay)(i.Ay)((e=>{let{theme:s}=e;const{isMobile:n}=(0,Y.Q)();return{fontFamily:s.typography.fontFamily,fontWeight:700,minHeight:n?35:50,display:"flex",alignItems:"center",justifyContent:n?"center":"left"}})),U=(0,l.Ay)(i.Ay)((e=>{let{theme:s}=e;const{isMobile:n}=(0,Y.Q)();return{fontFamily:s.typography.fontFamily,display:"flex",alignItems:"center",justifyContent:n?"center":"left"}})),q=e=>{const{item:s}=e,[n,l]=(0,t.useState)(!1);return(0,M.jsxs)(i.Ay,{container:!0,sx:{borderTop:1,borderColor:"grey.300"},children:["Gi\u1edbi thi\u1ec7u doanh nghi\u1ec7p"!==s.label&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(N,{item:!0,xs:12,sm:6,md:4,children:s.label}),(0,M.jsx)(U,{item:!0,xs:12,sm:6,md:8,children:(0,M.jsx)(o.A,{sx:{textAlign:{xs:"center",md:"left"},lineHeight:{xs:1.5,md:2}},children:s.value})})]}),"Gi\u1edbi thi\u1ec7u doanh nghi\u1ec7p"===s.label&&s.value&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(N,{item:!0,xs:12,children:s.label}),(0,M.jsx)(U,{item:!0,xs:12,children:(0,M.jsx)(o.A,{sx:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:n?100:3,WebkitBoxOrient:"vertical",textAlign:{xs:"center",md:"left"},lineHeight:{xs:1.5,md:2}},children:s.value})}),(0,M.jsx)(r.A,{onClick:()=>{l((e=>!e))},sx:{mx:"auto"},color:"secondary",children:n?"Thu g\u1ecdn":"\u0110\u1ecdc th\xeam"})]})]})};function z(e){const{isMobile:s}=(0,Y.Q)(),{user:n,data:l,title:i,editIcon:r,openForm:h}=e,[A,v]=(0,t.useState)(!1),y=()=>{v(!1)},j="User"===h?(0,M.jsx)(I,{close:y,user:n}):(0,M.jsx)(k,{close:y,user:n});return(0,M.jsxs)(a.A,{sx:{paddingX:2},children:[(0,M.jsxs)(d.A,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,M.jsxs)(d.A,{display:"flex",alignItems:"end",children:[r,(0,M.jsx)(o.A,{fontWeight:700,sx:{fontSize:{md:22,xs:18},lineHeight:{md:2,xs:1.5}},children:i})]}),(0,M.jsx)(D.A,{onClick:()=>v(!0)}),(0,M.jsxs)(c.A,{open:A,onClose:y,fullWidth:!0,maxWidth:"md",fullScreen:s,children:[(0,M.jsx)(u.A,{sx:{textAlign:"center",fontWeight:700,fontSize:{md:"1.3rem",xs:"1rem"}},children:i}),(0,M.jsx)(m.A,{}),(0,M.jsx)(x.A,{children:j})]})]}),(0,M.jsx)(d.A,{sx:{mt:1},children:l.map(((e,s)=>(0,M.jsx)(q,{item:e},s)))})]})}},54367:(e,s,n)=>{function t(e){const s={"\xe0":"a","\xe1":"a","\u1ea3":"a","\xe3":"a","\u1ea1":"a","\u0103":"a","\u1eaf":"a","\u1eb1":"a","\u1eb3":"a","\u1eb5":"a","\u1eb7":"a","\xe2":"a","\u1ea5":"a","\u1ea7":"a","\u1ea9":"a","\u1eab":"a","\u1ead":"a","\u0111":"d","\xe8":"e","\xe9":"e","\u1ebb":"e","\u1ebd":"e","\u1eb9":"e","\xea":"e","\u1ebf":"e","\u1ec1":"e","\u1ec3":"e","\u1ec5":"e","\u1ec7":"e","\xec":"i","\xed":"i","\u1ec9":"i","\u0129":"i","\u1ecb":"i","\xf2":"o","\xf3":"o","\u1ecf":"o","\xf5":"o","\u1ecd":"o","\xf4":"o","\u1ed1":"o","\u1ed3":"o","\u1ed5":"o","\u1ed7":"o","\u1ed9":"o","\u01a1":"o","\u1edb":"o","\u1edd":"o","\u1edf":"o","\u1ee1":"o","\u1ee3":"o","\xf9":"u","\xfa":"u","\u1ee7":"u","\u0169":"u","\u1ee5":"u","\u01b0":"u","\u1ee9":"u","\u1eeb":"u","\u1eed":"u","\u1eef":"u","\u1ef1":"u","\u1ef3":"y","\xfd":"y","\u1ef7":"y","\u1ef9":"y","\u1ef5":"y","\xc0":"A","\xc1":"A","\u1ea2":"A","\xc3":"A","\u1ea0":"A","\u0102":"A","\u1eae":"A","\u1eb0":"A","\u1eb2":"A","\u1eb4":"A","\u1eb6":"A","\xc2":"A","\u1ea4":"A","\u1ea6":"A","\u1ea8":"A","\u1eaa":"A","\u1eac":"A","\u0110":"D","\xc8":"E","\xc9":"E","\u1eba":"E","\u1ebc":"E","\u1eb8":"E","\xca":"E","\u1ebe":"E","\u1ec0":"E","\u1ec2":"E","\u1ec4":"E","\u1ec6":"E","\xcc":"I","\xcd":"I","\u1ec8":"I","\u0128":"I","\u1eca":"I","\xd2":"O","\xd3":"O","\u1ece":"O","\xd5":"O","\u1ecc":"O","\xd4":"O","\u1ed0":"O","\u1ed2":"O","\u1ed4":"O","\u1ed6":"O","\u1ed8":"O","\u01a0":"O","\u1eda":"O","\u1edc":"O","\u1ede":"O","\u1ee0":"O","\u1ee2":"O","\xd9":"U","\xda":"U","\u1ee6":"U","\u0168":"U","\u1ee4":"U","\u01af":"U","\u1ee8":"U","\u1eea":"U","\u1eec":"U","\u1eee":"U","\u1ef0":"U","\u1ef2":"Y","\xdd":"Y","\u1ef6":"Y","\u1ef8":"Y","\u1ef4":"Y"},n=["!","@","#","$","%","^","&","*","_","-","+","=","{","}","[","]","|","\\",":",";",'"',"'","<",">",",",".","/","?"," "];let t="";for(var l=0;l<(null===e||void 0===e?void 0:e.length);l++)s[e[l]]?t+=s[e[l]]:n.includes(e[l])?t.endsWith("-")||(t+="-"):t+=e[l];return t}n.d(s,{O:()=>t})}}]);
//# sourceMappingURL=996.0de9eb49.chunk.js.map