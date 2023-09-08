(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{2830:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/usage/realm",function(){return r(7882)}])},9369:function(e,s,r){"use strict";var l=r(5893);r(7294);let o={head:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("title",{children:"Llampukaq Technology"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,l.jsx)("meta",{property:"og:title",content:"Nextra"}),(0,l.jsx)("meta",{property:"og:description",content:"The next site builder"})]}),logo:(0,l.jsx)("span",{children:"@llampukaq/realm"}),project:{link:"https://github.com/LlampuKaq-Tecnology/realm"},docsRepositoryBase:"https://github.com/LlampuKaq-Tecnology/realm",footer:{text:"Developed By Llampukaq Technology"}};s.Z=o},7882:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return d},default:function(){return p}});var l=r(5893),o=r(2673),n=r(2781),i=r(9369);r(9966);var t=r(2643),a={src:"/_next/static/media/atlas.1ffb5cec.webp",height:555,width:927,blurDataURL:"data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAAAwAQCdASoIAAUAAkA4JaQAA3AA/vq59X9QgAAA",blurWidth:8,blurHeight:5},c={src:"/_next/static/media/rules.6a4fa608.webp",height:629,width:1238,blurDataURL:"data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoIAAQAAkA4JaQAA3AA/vrsZUFz7IgAAAA=",blurWidth:8,blurHeight:4},h={src:"/_next/static/media/createfunction.16ecfdbd.webp",height:758,width:1551,blurDataURL:"data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAAAwAQCdASoIAAQAAkA4JaQAA3AA/vr7MjLuYAAA",blurWidth:8,blurHeight:4};let d=[{depth:2,value:"Mongo Atlas",id:"mongo-atlas"},{depth:2,value:"App services",id:"app-services"}];function x(e){let s=Object.assign({h1:"h1",h2:"h2",p:"p",img:"img",pre:"pre",code:"code",span:"span"},(0,t.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"Realm UI"}),"\n",(0,l.jsx)(s.h2,{id:"mongo-atlas",children:"Mongo Atlas"}),"\n",(0,l.jsxs)(s.p,{children:["Se necesita configurar un base de datos llamada user y una colleccion llamada users\n",(0,l.jsx)(s.img,{alt:"Hero",placeholder:"blur",src:a})]}),"\n",(0,l.jsx)(s.h2,{id:"app-services",children:"App services"}),"\n",(0,l.jsx)(s.p,{children:"En mongo App Services, primero tienes que configurar las reglas y darle acceso de escribir y leer al servicio"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{alt:"Hero",placeholder:"blur",src:c})}),"\n",(0,l.jsx)(s.p,{children:"Despues de esto tienes que crear un funcion que se llame userUsers"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{alt:"Hero",placeholder:"blur",src:h})}),"\n",(0,l.jsx)(s.p,{children:"Ahora vas a colocar este codigo en la funcion userUsers"}),"\n",(0,l.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"exports"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (type"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" id"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" data) {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"userCollection"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"context"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".services"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"mongodb-atlas"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".db"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"user"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".collection"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"users"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"getUser"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"userCollection"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".findOne"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({ email"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" id }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { _id"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" });"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (type "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"create"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"userExist"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"getUser"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (userExist) "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" userExist;"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"userCollection"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".insertOne"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(data);"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"getUser"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (type "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"update"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"userCollection"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".findOneAndUpdate"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      { userId"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" id }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      { $set"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" data }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      { returnNewDocument"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    );"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})})]})}let k={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(x,{...e})}):x(e)},pageOpts:{filePath:"pages/usage/realm.mdx",route:"/usage/realm",pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",usage:"Usage",plugins:"Plugins",contact:{title:"About \uD83D\uDE80",type:"page",href:"https://www.llampukaq.com/company",newWindow:!0}}},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"plugins",route:"/plugins",children:[{kind:"MdxPage",name:"EmailProvider",route:"/plugins/EmailProvider"},{kind:"MdxPage",name:"GoogleProvider",route:"/plugins/GoogleProvider"},{kind:"MdxPage",name:"WriteYourPlugins",route:"/plugins/WriteYourPlugins"},{kind:"Meta",data:{EmailProvider:"Proveedor con email",GoogleProvider:"Proveedor con google auth",WriteYourPlugins:"Escribe tus plugins"}}]},{kind:"Folder",name:"usage",route:"/usage",children:[{kind:"MdxPage",name:"context",route:"/usage/context"},{kind:"MdxPage",name:"hooks",route:"/usage/hooks"},{kind:"MdxPage",name:"realm",route:"/usage/realm"},{kind:"Meta",data:{context:"Context",hooks:"Hooks",realm:"Realm"}}]}],flexsearch:{codeblocks:!0},title:"Realm UI",headings:d},pageNextRoute:"/usage/realm",nextraLayout:n.ZP,themeConfig:i.Z};var p=(0,o.j)(k)}},function(e){e.O(0,[774,403,888,179],function(){return e(e.s=2830)}),_N_E=e.O()}]);