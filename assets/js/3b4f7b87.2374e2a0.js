"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1215],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||i;return a?r.createElement(d,s(s({ref:t},c),{},{components:a})):r.createElement(d,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3023:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294);const n="container_T1_I",i=e=>{let{name:t,url:a}=e;return r.createElement("a",{className:n,href:a,title:"ztjhz"},r.createElement("img",{src:`${a}.png`,height:"60",width:"60"}),r.createElement("div",null,t||a))}},8515:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),i=a(3023);const s={slug:"travis",title:"TrAVis - Transformer Attention Visualiser",description:"How we created an in-browser BERT attention visualiser without a server",authors:["nixie","ayaka"],tags:["nlp","ai","deeplearning","machinelearning","pyodide","d3.js","bert","huggingface","tokeniser","jax","transformer"]},o=void 0,l={permalink:"/blog/travis",source:"@site/blog/2022-09-28-travis/index.md",title:"TrAVis - Transformer Attention Visualiser",description:"How we created an in-browser BERT attention visualiser without a server",date:"2022-09-28T00:00:00.000Z",formattedDate:"September 28, 2022",tags:[{label:"nlp",permalink:"/blog/tags/nlp"},{label:"ai",permalink:"/blog/tags/ai"},{label:"deeplearning",permalink:"/blog/tags/deeplearning"},{label:"machinelearning",permalink:"/blog/tags/machinelearning"},{label:"pyodide",permalink:"/blog/tags/pyodide"},{label:"d3.js",permalink:"/blog/tags/d-3-js"},{label:"bert",permalink:"/blog/tags/bert"},{label:"huggingface",permalink:"/blog/tags/huggingface"},{label:"tokeniser",permalink:"/blog/tags/tokeniser"},{label:"jax",permalink:"/blog/tags/jax"},{label:"transformer",permalink:"/blog/tags/transformer"}],readingTime:2.465,hasTruncateMarker:!0,authors:[{name:"Jing Hua",title:"Open source princess",url:"https://github.com/ztjhz",imageURL:"https://github.com/ztjhz.png",key:"nixie"},{name:"Ayaka",title:"NLP Scientist",url:"https://github.com/ayaka14732",imageURL:"https://github.com/ayaka14732.png",key:"ayaka"}],frontMatter:{slug:"travis",title:"TrAVis - Transformer Attention Visualiser",description:"How we created an in-browser BERT attention visualiser without a server",authors:["nixie","ayaka"],tags:["nlp","ai","deeplearning","machinelearning","pyodide","d3.js","bert","huggingface","tokeniser","jax","transformer"]},prevItem:{title:"ByteVid - Deep Learning Hackathon 1st Place",permalink:"/blog/bytevid"}},p={authorsImageUrls:[void 0,void 0]},c=[{value:"What is this?",id:"what-is-this",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"How did we do it?",id:"how-did-we-do-it",level:2},{value:"Result",id:"result",level:2},{value:"Source code",id:"source-code",level:2},{value:"The team",id:"the-team",level:2}],h={toc:c};function u(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Result",src:a(3588).Z,width:"1488",height:"991"})),(0,n.kt)("p",null,"How we created an in-browser BERT attention visualiser without a server"),(0,n.kt)("h2",{id:"what-is-this"},"What is this?"),(0,n.kt)("p",null,"TrAVis is a Transformer Attention Visualiser. The idea of visualising the attention matrices is inspired by ",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1409.0473"},"Neural Machine Translation by Jointly Learning to Align and Translate"),"."),(0,n.kt)("p",{class:"centered",style:{height:"500px"}},(0,n.kt)("img",{alt:"transformer",src:a(7185).Z})),(0,n.kt)("p",null,"The original paper of the Transformer model was named ",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1706.03762"},"Attention Is All You Need"),", demonstrating the centrality of the attention mechanism to ",(0,n.kt)("a",{parentName:"p",href:"https://huggingface.co/docs/transformers/model_summary"},"Transformer-based models"),". These models generate attention matrices during the computation of the attention mechanism, which indicate how the models process the input data, and can therefore be seen as a concrete representation of the mechanism."),(0,n.kt)("p",null,"In the ",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1810.04805"},"BERT")," Base Uncased model, for example, there are 12 transformer layers, each layer contains 12 heads, and each head generates one attention matrix. TrAVis is the tool for visualising these attention matrices."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("p",null,"Despite the popularity of Transformer-based models, people often utilise them by just simply running the training scripts, ignoring what is going on inside the model. TrAVis helps us to better understand how Transformer-based models work internally, thus enabling us to better exploit them to solve our problems and, furthermore, giving us inspirations to make improvements to the model architecture."),(0,n.kt)("h2",{id:"how-did-we-do-it"},"How did we do it?"),(0,n.kt)("p",null,"The project consists of 4 parts."),(0,n.kt)("p",null,"Firstly, we ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ayaka14732/bart-base-jax"},"implemented")," the ",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1910.13461"},"BART")," model from scratch using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/jax"},"JAX"),". We chose JAX because it is an amazing deep learning framework that enables us to write clear source code, and it can be easily converted to NumPy, which can be executed in-browser. We chose the #BART model because it is a complete encoder-decoder model, so it can be easily adapted to other models, such as BERT, by simply taking a subset of the source code."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/ayaka14732/bart-base-jax"},(0,n.kt)("img",{alt:"Bart Base Jax",width:"500px",src:a(715).Z}))),(0,n.kt)("p",null,"Secondly, we ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ztjhz/word-piece-tokenizer"},"implemented")," the ",(0,n.kt)("a",{parentName:"p",href:"https://huggingface.co/docs/transformers/model_doc/bert#transformers.BertTokenizer"},"HuggingFace BERT Tokeniser")," in pure Python, as it can be more easily executed in-browser. Moreover, we have optimised the tokenisation algorithm, which is faster than the original HuggingFace implementation."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/ztjhz/word-piece-tokenizer"},(0,n.kt)("img",{alt:"Word Piece Tokenizer",width:"500px",src:a(9865).Z}))),(0,n.kt)("p",null,"Thirdly, we use ",(0,n.kt)("a",{parentName:"p",href:"https://pyodide.org"},"Pyodide")," to run our Python code in browser. Pyodide supports all Python libraries implemented in pure Python, with ",(0,n.kt)("a",{parentName:"p",href:"https://pyodide.org/en/stable/usage/packages-in-pyodide.html"},"additional support")," for a number of other libraries such as NumPy and SciPy."),(0,n.kt)("p",null,"Fourthly, we visualise the attention matrices in our web application using ",(0,n.kt)("a",{parentName:"p",href:"https://d3js.org/"},"d3.js"),"."),(0,n.kt)("h2",{id:"result"},"Result"),(0,n.kt)("p",null,"The result is that our Transformer model can run entirely in the browser without the need of a server."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Result",src:a(3588).Z,width:"1488",height:"991"})),(0,n.kt)("p",null,"When users input sentences into our web application, the loaded model will generate the attention matrices of the sentences, which will then be visualised as a heatmap. Subsequently, users can select which Transformer layer and attention head to visualise, by utilising the range slider."),(0,n.kt)("h2",{id:"source-code"},"Source code"),(0,n.kt)("p",null,"The source code of our visualiser is published on GitHub"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/ayaka14732/TrAVis"},(0,n.kt)("img",{alt:"Word Piece Tokenizer",width:"500px",src:a(2966).Z}))),(0,n.kt)("h2",{id:"the-team"},"The team"),(0,n.kt)("p",null,(0,n.kt)(i.Z,{name:"Jing Hua",url:"https://github.com/ztjhz",mdxType:"GithubUser"}),(0,n.kt)(i.Z,{name:"Ayaka",url:"https://github.com/ayaka14732",mdxType:"GithubUser"})))}u.isMDXComponent=!0},2966:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/TrAVis-f631d2f962545c4a4c2bfb263ffdf1c0.png"},715:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bart-base-jax-63d409385bb87c172fe59eb952ff2178.png"},7185:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/transformer-30b4218690677d30fe3b34e2b964f95b.png"},9865:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/word-piece-tokenizer-2993a5e4efc62ffbf6a067dd14dcf2ff.png"},3588:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/result-d51c7e47c5c036d4ae94a4833adc2efe.png"}}]);