"use strict";(self.webpackChunksocket_v2_sdk_docs=self.webpackChunksocket_v2_sdk_docs||[]).push([[8155],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=i(r),f=o,k=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(k,s(s({ref:t},l),{},{components:r})):n.createElement(k,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],c={},u="Quotes",i={unversionedId:"reference/api/Quotes",id:"reference/api/Quotes",title:"Quotes",description:"Table of contents",source:"@site/docs/reference/api/Quotes.md",sourceDirName:"reference/api",slug:"/reference/api/Quotes",permalink:"/socket-v2-sdk-docs/reference/api/Quotes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/api/Quotes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Balances",permalink:"/socket-v2-sdk-docs/reference/api/Balances"},next:{title:"Routes",permalink:"/socket-v2-sdk-docs/reference/api/Routes"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods-1",level:2},{value:"getQuote",id:"getquote",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quotes"},"Quotes"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/socket-v2-sdk-docs/reference/api/Quotes#constructor"},"constructor"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/socket-v2-sdk-docs/reference/api/Quotes#getquote"},"getQuote"))),(0,a.kt)("h2",{id:"constructors-1"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new Quotes"),"()"),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"getquote"},"getQuote"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"getQuote"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"quoteRequest"),"): ",(0,a.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,a.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,a.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/types#quoteoutputdto"},(0,a.kt)("inlineCode",{parentName:"a"},"QuoteOutputDTO")),">"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"throws"))," ApiError"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"quoteRequest")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/socket-v2-sdk-docs/reference/interfaces/QuoteRequest"},(0,a.kt)("inlineCode",{parentName:"a"},"QuoteRequest")))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,a.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,a.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/types#quoteoutputdto"},(0,a.kt)("inlineCode",{parentName:"a"},"QuoteOutputDTO")),">"),(0,a.kt)("p",null,"QuoteOutputDTO Returns all the possible routes for bridging tokens from one chain to another. One of the routes can be selected and passed in to start the route."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/SocketDotTech/socket-v2-sdk/blob/91d9fe3/src/client/services/Quote.ts#L13"},"socket-v2-sdk/src/client/services/Quote.ts:13")))}f.isMDXComponent=!0}}]);