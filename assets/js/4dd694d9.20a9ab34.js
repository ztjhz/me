"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1548],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,b=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={slug:"travis",title:"TrAVis - Transformer Attention Visualiser",description:"How we created an in-browser BERT attention visualiser without a server",authors:["nixie","ayaka"],tags:["nlp","ai","deeplearning","machinelearning","pyodide","d3.js","bert","huggingface","tokeniser","jax","transformer"]},o=void 0,l={permalink:"/blog/travis",source:"@site/blog/2022-09-28-travis/index.md",title:"TrAVis - Transformer Attention Visualiser",description:"How we created an in-browser BERT attention visualiser without a server",date:"2022-09-28T00:00:00.000Z",formattedDate:"September 28, 2022",tags:[{label:"nlp",permalink:"/blog/tags/nlp"},{label:"ai",permalink:"/blog/tags/ai"},{label:"deeplearning",permalink:"/blog/tags/deeplearning"},{label:"machinelearning",permalink:"/blog/tags/machinelearning"},{label:"pyodide",permalink:"/blog/tags/pyodide"},{label:"d3.js",permalink:"/blog/tags/d-3-js"},{label:"bert",permalink:"/blog/tags/bert"},{label:"huggingface",permalink:"/blog/tags/huggingface"},{label:"tokeniser",permalink:"/blog/tags/tokeniser"},{label:"jax",permalink:"/blog/tags/jax"},{label:"transformer",permalink:"/blog/tags/transformer"}],readingTime:2.465,hasTruncateMarker:!0,authors:[{name:"Jing Hua",title:"Open source princess",url:"https://github.com/ztjhz",imageURL:"https://github.com/ztjhz.png",key:"nixie"},{name:"Ayaka",title:"NLP Scientist",url:"https://github.com/ayaka14732",imageURL:"https://github.com/ayaka14732.png",key:"ayaka"}],frontMatter:{slug:"travis",title:"TrAVis - Transformer Attention Visualiser",description:"How we created an in-browser BERT attention visualiser without a server",authors:["nixie","ayaka"],tags:["nlp","ai","deeplearning","machinelearning","pyodide","d3.js","bert","huggingface","tokeniser","jax","transformer"]},prevItem:{title:"ByteVid - Deep Learning Hackathon 1st Place",permalink:"/blog/bytevid"}},s={authorsImageUrls:[void 0,void 0]},p=[{value:"What is this?",id:"what-is-this",level:2}],c={toc:p};function g(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Result",src:r(3588).Z,width:"1488",height:"991"})),(0,a.kt)("p",null,"How we created an in-browser BERT attention visualiser without a server"),(0,a.kt)("h2",{id:"what-is-this"},"What is this?"),(0,a.kt)("p",null,"TrAVis is a Transformer Attention Visualiser. The idea of visualising the attention matrices is inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1409.0473"},"Neural Machine Translation by Jointly Learning to Align and Translate"),"."))}g.isMDXComponent=!0},3588:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/result-d51c7e47c5c036d4ae94a4833adc2efe.png"}}]);