"use strict";(self.webpackChunkFE_DACN=self.webpackChunkFE_DACN||[]).push([[686,793],{15357:(e,o,a)=>{a.d(o,{A:()=>l});var t=a(9634),i=(a(81580),a(70579));const l=e=>(0,i.jsx)(t.LazyLoadImage,{alt:e.alt,effect:"blur",src:e.src,height:e.height,width:e.width,srcSet:e.srcSet,placeholderSrc:e.placeholderSrc,visibleByDefault:e.visibleByDefault,style:{backgroundColor:"#fff",...e,...e.sx,...e.style},delayMethod:e.delayMethod,delayTime:e.delayTime})},29773:(e,o,a)=>{a.d(o,{A:()=>s});var t=a(34535),i=(a(65043),a(51318)),l=a(70579);const n=(0,t.Ay)(i.N_)((e=>{let{theme:o}=e;return{textDecoration:"none",color:o.colors.info.dark,"&:active":{color:o.colors.primary.light},"&:visited":{color:o.colors.info.dark}}})),s=e=>(0,l.jsx)(n,{...e})},65099:(e,o,a)=>{a.d(o,{BZ:()=>l,XS:()=>t,YP:()=>n,tR:()=>i});const t={companyAvatar:"/static/images/placeholders/logo/default-company-logo.jpg",companyAvatar_md:"/static/images/placeholders/logo/default-company-logo-md.jpg",companyAvatar_sm:"/static/images/placeholders/logo/default-company-logo-sm.jpg",companyCover:"/static/images/placeholders/banner/default-company-banner.jpg",companyCover_md:"/static/images/placeholders/banner/default-company-banner-md.jpg",companyCover_sm:"/static/images/placeholders/banner/default-company-banner-sm.jpg"},i={acceptTypes:["image/jpeg","image/png","image/gif"],acceptSize:1048576},l={acceptTypes:["application/pdf"],acceptSize:2097152},n={acceptTypes:["image/jpeg","image/png","image/gif"],acceptSize:4194304}},82656:(e,o,a)=>{a.d(o,{C:()=>i,c:()=>l});var t=a(22626);const i=new t.A("get-information-company-by-user"),l=new t.A("employee/follow-company")},39513:(e,o,a)=>{a.d(o,{A:()=>S});var t=a(65043),i=a(12110),l=a(79958),n=a(19464),s=a(85865),r=a(26494),c=a(63657),d=a(22200),m=a(29773),p=a(65099),u=a(25441),y=a(11906),v=a(36110),g=a(82907),h=a(82656);const x=()=>{const e=(0,g.useQueryClient)(),{toast:o}=(0,v.n)(),{mutate:a,isLoading:t}=(0,g.useMutation)((e=>{let[o]=e;return h.c.create({employerId:o})}),{onSuccess:a=>{200===a.status?(e.invalidateQueries(["get-FollowCompany"]),o.success({massage:a.message})):o.error({massage:a.message})},onError:e=>{o.error({massage:e.response.data.message})}});return{onFollowCompanyById:a,isLoading:t}};var f=a(79182),A=a(56789),j=a(70579);function b(e){const{sx:o,employerId:a}=e,{onFollowCompanyById:i}=x(),{isEmployee:l}=(0,v.n)(),[s,r]=(0,t.useState)(!1),{companyList:c}=(0,f.A)(),{followCompanysList:d}=(0,A.A)();(0,u.A)({companyIds:null===c||void 0===c?void 0:c.join(",")});if((0,t.useEffect)((()=>{(null===d||void 0===d?void 0:d.includes(a))&&r(!0)}),[JSON.stringify(d),a]),a&&l)return(0,j.jsx)(n.A,{onClick:()=>(i([a]),void r(!s)),sx:{display:"flex",alignItem:"center",...o},children:(0,j.jsx)(y.A,{sx:{display:"flex",bgcolor:s?"#e5e7eb":"primary","&:hover":{bgcolor:s?"#c0c2c5":""},width:120},size:"small",variant:"contained",children:s?"\u0110ang theo d\xf5i":"Theo d\xf5i"})})}var C=a(54367),L=a(65499),w=a(15357),O=a(7968);const S=function(e){let{company:o,employerId:a}=e;const[u,y]=(0,t.useState)((null===o||void 0===o?void 0:o.logo)||p.XS.companyAvatar),{isMobile:v,isTablet:g,isLargeDesktop:h}=(0,O.Q)();return(0,j.jsxs)(i.A,{sx:{border:1,borderRadius:"3px",borderColor:"#98E4FF",height:"360px"},children:[(0,j.jsx)(l.A,{sx:{py:1,color:"#aa720a",overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,whiteSpace:"normal"},title:(0,j.jsxs)(n.A,{children:[(0,j.jsx)(w.A,{src:(null===o||void 0===o?void 0:o.banner)||p.XS.companyCover_sm,placeholderSrc:p.XS.companyCover,width:"100%",height:120,borderRadius:"5px",objectFit:"cover",borderColor:"#98E4FF"}),(0,j.jsxs)(n.A,{display:"flex",gap:2,children:[(0,j.jsx)(w.A,{src:(null===o||void 0===o?void 0:o.logo)||p.XS.companyAvatar_md,placeholderSrc:p.XS.companyAvatar_sm,width:g?70:100,height:g?70:100,my:g?"auto":0,borderRadius:"5px",objectFit:"cover"}),(0,j.jsxs)(n.A,{sx:{pt:2,display:"flex",flexDirection:"column"},children:[(0,j.jsx)(s.A,{component:m.A,to:"/company/".concat((0,C.O)(null===o||void 0===o?void 0:o.companyName),"?id=").concat(btoa(a.toString())),sx:{":hover":{color:"#ce8b0e"},overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:3,lineHeight:1.5,height:65},fontWeight:700,children:null===o||void 0===o?void 0:o.companyName}),(0,j.jsx)(b,{employerId:a,sx:{display:"flex",alignSelf:"end",justifySelf:"self-end"}})]})]})]})}),(0,j.jsx)(r.A,{sx:{px:2,py:1},children:(0,j.jsxs)(n.A,{display:"flex",flexDirection:"column",gap:1,children:[(0,j.jsxs)(n.A,{display:"flex",children:[(0,j.jsx)(c.A,{sx:{maxHeight:20,color:"grey.700"}}),(0,j.jsxs)(L.L,{sx:{WebkitLineClamp:1},children:["L\u0129nh v\u1ef1c: ",null===o||void 0===o?void 0:o.careerField]})]}),(0,j.jsxs)(n.A,{display:"flex",my:1,children:[(0,j.jsx)(d.A,{sx:{maxHeight:18,color:"grey.700"}}),(0,j.jsxs)(L.L,{children:["\u0110\u1ecba \u0111i\u1ec3m: ",null===o||void 0===o?void 0:o.companyLocation]})]})]})})]})}},79182:(e,o,a)=>{a.d(o,{A:()=>l});var t=a(9971),i=a(91549);const l=()=>{const{data:e}=(0,t.G)(i.IZ),o=(0,t.j)();return{companyList:e,setCompanyList:e=>{o((0,i._D)(e))},resetCompanyList:()=>{o((0,i.Xk)())}}}},56789:(e,o,a)=>{a.d(o,{A:()=>l});var t=a(9971),i=a(28808);const l=()=>{const{data:e}=(0,t.G)(i.Fj),o=(0,t.j)();return{followCompanysList:e,setFollowCompanyList:e=>{o((0,i.zJ)(e))},resetFollowCompanyList:()=>{o((0,i.U5)())}}}},86624:(e,o,a)=>{a.d(o,{A:()=>n});var t=a(82907),i=a(15001),l=a(79182);const n=e=>{var o,a,n,s,r;const{setCompanyList:c}=(0,l.A)(),{data:d,isLoading:m,refetch:p}=(0,t.useQuery)(["get-CompanyList",e],(()=>i.yb.get({params:e}).then((e=>{var o,a;if(null!==(o=e.data)&&void 0!==o&&null!==(a=o.meta)&&void 0!==a&&a.itemCount){var t,i;const o=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(i=t.items)||void 0===i?void 0:i.map((e=>e.userId));c(o)}return e}))),{retry:1,refetchOnWindowFocus:!1});return{companyList:null===d||void 0===d||null===(o=d.data)||void 0===o?void 0:o.items,totalPages:null===d||void 0===d||null===(a=d.data)||void 0===a||null===(n=a.meta)||void 0===n?void 0:n.totalPages,totalItems:null===d||void 0===d||null===(s=d.data)||void 0===s||null===(r=s.meta)||void 0===r?void 0:r.totalItems,isLoading:m,refetch:p}}},25441:(e,o,a)=>{a.d(o,{A:()=>s});var t=a(82907),i=a(82656),l=a(36110),n=a(56789);const s=e=>{var o,a,s;const{isEmployee:r}=(0,l.n)(),{setFollowCompanyList:c}=(0,n.A)(),{data:d,isLoading:m,refetch:p}=(0,t.useQuery)(["get-FollowCompany",e],(()=>i.c.get({params:e}).then((e=>{var o,a;if(null!==(o=e.data)&&void 0!==o&&null!==(a=o.meta)&&void 0!==a&&a.itemCount){var t,i;const o=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(i=t.items)||void 0===i?void 0:i.map((e=>e.employerId));c(o)}return e}))),{keepPreviousData:!0,retry:1,refetchOnWindowFocus:!1,enabled:r});return{companyFollow:null===d||void 0===d||null===(o=d.data)||void 0===o?void 0:o.items,totalPages:null===d||void 0===d||null===(a=d.data)||void 0===a||null===(s=a.meta)||void 0===s?void 0:s.totalPages,isLoading:m,refetch:p}}},8034:(e,o,a)=>{a.r(o),a.d(o,{default:()=>y});var t=a(65043),i=a(19252),l=a(19464),n=a(85865),s=a(68903),r=a(25567),c=a(39513),d=a(51726),m=a(70579);const p=function(e){const{pageTitle:o,sx:a,queryCompanys:p}=e,[u,y]=(0,t.useState)(1),{companyList:v,totalItems:g,totalPages:h}=p({num:12,page:u});return(0,m.jsxs)(i.A,{disableGutters:!0,maxWidth:"lg",sx:{py:3,...a},children:[(0,m.jsx)(l.A,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2,children:(0,m.jsxs)(l.A,{display:"flex",justifyContent:"space-between",children:[(0,m.jsx)(d.A,{color:"primary",sx:{fontSize:40,mr:1}}),(0,m.jsx)(n.A,{variant:"h3",display:"flex",alignItems:"center",children:o})]})}),(0,m.jsxs)(i.A,{sx:{mb:3,py:3,bgcolor:"#fbfeff",minHeight:1250},children:[(0,m.jsxs)(n.A,{fontSize:18,mb:2,children:["Danh s\xe1ch c\xf4ng ty",(0,m.jsxs)(l.A,{sx:{color:"#ce8b0e",display:"inline",ml:1},children:["(",g||0,")"]})]}),(0,m.jsx)(s.Ay,{container:!0,spacing:2,children:null!==v&&void 0!==v&&v.length?v.map(((e,o)=>(0,m.jsx)(s.Ay,{item:!0,xs:12,sm:6,md:3,children:(0,m.jsx)(c.A,{company:e,employerId:null===e||void 0===e?void 0:e.userId})},null===e||void 0===e?void 0:e.userId))):(0,m.jsx)(n.A,{fontStyle:"italic",margin:"auto",children:"Ch\u01b0a c\xf3 c\xf4ng ty n\xe0o"})})]}),(0,m.jsx)(r.A,{totalPages:h,currentPage:u,handlePageChange:y})]})};var u=a(86624);const y=function(){return(0,m.jsx)(p,{pageTitle:"C\xf4ng ty \u0111ang tuy\u1ec3n d\u1ee5ng",queryCompanys:u.A})}},54367:(e,o,a)=>{function t(e){const o={"\xe0":"a","\xe1":"a","\u1ea3":"a","\xe3":"a","\u1ea1":"a","\u0103":"a","\u1eaf":"a","\u1eb1":"a","\u1eb3":"a","\u1eb5":"a","\u1eb7":"a","\xe2":"a","\u1ea5":"a","\u1ea7":"a","\u1ea9":"a","\u1eab":"a","\u1ead":"a","\u0111":"d","\xe8":"e","\xe9":"e","\u1ebb":"e","\u1ebd":"e","\u1eb9":"e","\xea":"e","\u1ebf":"e","\u1ec1":"e","\u1ec3":"e","\u1ec5":"e","\u1ec7":"e","\xec":"i","\xed":"i","\u1ec9":"i","\u0129":"i","\u1ecb":"i","\xf2":"o","\xf3":"o","\u1ecf":"o","\xf5":"o","\u1ecd":"o","\xf4":"o","\u1ed1":"o","\u1ed3":"o","\u1ed5":"o","\u1ed7":"o","\u1ed9":"o","\u01a1":"o","\u1edb":"o","\u1edd":"o","\u1edf":"o","\u1ee1":"o","\u1ee3":"o","\xf9":"u","\xfa":"u","\u1ee7":"u","\u0169":"u","\u1ee5":"u","\u01b0":"u","\u1ee9":"u","\u1eeb":"u","\u1eed":"u","\u1eef":"u","\u1ef1":"u","\u1ef3":"y","\xfd":"y","\u1ef7":"y","\u1ef9":"y","\u1ef5":"y","\xc0":"A","\xc1":"A","\u1ea2":"A","\xc3":"A","\u1ea0":"A","\u0102":"A","\u1eae":"A","\u1eb0":"A","\u1eb2":"A","\u1eb4":"A","\u1eb6":"A","\xc2":"A","\u1ea4":"A","\u1ea6":"A","\u1ea8":"A","\u1eaa":"A","\u1eac":"A","\u0110":"D","\xc8":"E","\xc9":"E","\u1eba":"E","\u1ebc":"E","\u1eb8":"E","\xca":"E","\u1ebe":"E","\u1ec0":"E","\u1ec2":"E","\u1ec4":"E","\u1ec6":"E","\xcc":"I","\xcd":"I","\u1ec8":"I","\u0128":"I","\u1eca":"I","\xd2":"O","\xd3":"O","\u1ece":"O","\xd5":"O","\u1ecc":"O","\xd4":"O","\u1ed0":"O","\u1ed2":"O","\u1ed4":"O","\u1ed6":"O","\u1ed8":"O","\u01a0":"O","\u1eda":"O","\u1edc":"O","\u1ede":"O","\u1ee0":"O","\u1ee2":"O","\xd9":"U","\xda":"U","\u1ee6":"U","\u0168":"U","\u1ee4":"U","\u01af":"U","\u1ee8":"U","\u1eea":"U","\u1eec":"U","\u1eee":"U","\u1ef0":"U","\u1ef2":"Y","\xdd":"Y","\u1ef6":"Y","\u1ef8":"Y","\u1ef4":"Y"},a=["!","@","#","$","%","^","&","*","_","-","+","=","{","}","[","]","|","\\",":",";",'"',"'","<",">",",",".","/","?"," "];let t="";for(var i=0;i<(null===e||void 0===e?void 0:e.length);i++)o[e[i]]?t+=o[e[i]]:a.includes(e[i])?t.endsWith("-")||(t+="-"):t+=e[i];return t}a.d(o,{O:()=>t})},22200:(e,o,a)=>{var t=a(32392);o.A=void 0;var i=t(a(40039)),l=a(70579),n=(0,i.default)([(0,l.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"},"0"),(0,l.jsx)("circle",{cx:"12",cy:"9",r:"2.5"},"1")],"LocationOnOutlined");o.A=n},63657:(e,o,a)=>{var t=a(32392);o.A=void 0;var i=t(a(40039)),l=a(70579),n=(0,i.default)([(0,l.jsx)("path",{d:"M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68c-.43-.91-.68-1.92-.68-3 0-3.87 3.13-7 7-7zm-8-7h4v2h-4V4z"},"0"),(0,l.jsx)("path",{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85-.7.71z"},"1")],"WorkHistory");o.A=n}}]);
//# sourceMappingURL=686.16883bf0.chunk.js.map