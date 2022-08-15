"use strict";(self.webpackChunksocket_v2_sdk_docs=self.webpackChunksocket_v2_sdk_docs||[]).push([[4784],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=p(r),m=a,u=k["".concat(o,".").concat(m)]||k[m]||c[m]||i;return r?n.createElement(u,l(l({ref:t},d),{},{components:r})):n.createElement(u,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},250:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],s={},o="Server",p={unversionedId:"reference/api/Server",id:"reference/api/Server",title:"Server",description:"Table of contents",source:"@site/docs/reference/api/Server.md",sourceDirName:"reference/api",slug:"/reference/api/Server",permalink:"/socket-v2-sdk-docs/reference/api/Server",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/api/Server.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Routes",permalink:"/socket-v2-sdk-docs/reference/api/Routes"},next:{title:"Supported",permalink:"/socket-v2-sdk-docs/reference/api/Supported"}},d={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods-1",level:2},{value:"getBridgingStatus",id:"getbridgingstatus",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getGasPrice",id:"getgasprice",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getHealth",id:"gethealth",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getHealthRpc",id:"gethealthrpc",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getSingleTx",id:"getsingletx",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getTokenPrice",id:"gettokenprice",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"getTransactionReceipt",id:"gettransactionreceipt",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}],k={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"server"},"Server"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"constructors"},"Constructors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/socket-v2-sdk-docs/reference/api/Server#constructor"},"constructor"))),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/socket-v2-sdk-docs/reference/api/Server#getbridgingstatus"},"getBridgingStatus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/socket-v2-sdk-docs/reference/api/Server#getgasprice"},"getGasPrice")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/socket-v2-sdk-docs/reference/api/Server#gethealth"},"getHealth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/socket-v2-sdk-docs/reference/api/Server#gethealthrpc"},"getHealthRpc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/socket-v2-sdk-docs/reference/api/Server#getsingletx"},"getSingleTx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/socket-v2-sdk-docs/reference/api/Server#gettokenprice"},"getTokenPrice")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/socket-v2-sdk-docs/reference/api/Server#gettransactionreceipt"},"getTransactionReceipt"))),(0,i.kt)("h2",{id:"constructors-1"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new Server"),"()"),(0,i.kt)("h2",{id:"methods-1"},"Methods"),(0,i.kt)("h3",{id:"getbridgingstatus"},"getBridgingStatus"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"getBridgingStatus"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"__namedParameters"),"): ",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/types#bridgestatusresponsedto"},(0,i.kt)("inlineCode",{parentName:"a"},"BridgeStatusResponseDTO")),">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ApiError"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters.bridgeName?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/socket-v2-sdk-docs/reference/enums/BridgeName"},(0,i.kt)("inlineCode",{parentName:"a"},"BridgeName"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the bridge used while bridging.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters.fromChainId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"ID of source chain, e.g Ethereum Mainnet = 1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters.toChainId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"ID of destination chain, e.g Ethereum Mainnet = 1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters.transactionHash")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Transaction hash originating from the source chain while bridging assets.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/types#bridgestatusresponsedto"},(0,i.kt)("inlineCode",{parentName:"a"},"BridgeStatusResponseDTO")),">"),(0,i.kt)("p",null,"BridgeStatusResponseDTO Returns the status of the bridging transaction if completed or pending."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SocketDotTech/socket-v2-sdk/blob/91d9fe3/src/client/services/Server.ts#L105"},"socket-v2-sdk/src/client/services/Server.ts:105")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getgasprice"},"getGasPrice"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"getGasPrice"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"__namedParameters"),"): ",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/types#gaspriceresponsedto"},(0,i.kt)("inlineCode",{parentName:"a"},"GasPriceResponseDTO")),">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ApiError"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters.chainId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/socket-v2-sdk-docs/reference/enums/ChainId"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainId"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"ID of chain, e.g Ethereum Mainnet = 1")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/types#gaspriceresponsedto"},(0,i.kt)("inlineCode",{parentName:"a"},"GasPriceResponseDTO")),">"),(0,i.kt)("p",null,"GasPriceResponseDTO Current gas prices for a chain"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SocketDotTech/socket-v2-sdk/blob/91d9fe3/src/client/services/Server.ts#L42"},"socket-v2-sdk/src/client/services/Server.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gethealth"},"getHealth"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"getHealth"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/types#healthresponsedto"},(0,i.kt)("inlineCode",{parentName:"a"},"HealthResponseDTO")),">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ApiError"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/types#healthresponsedto"},(0,i.kt)("inlineCode",{parentName:"a"},"HealthResponseDTO")),">"),(0,i.kt)("p",null,"HealthResponseDTO Health Check for Fund Movr API"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SocketDotTech/socket-v2-sdk/blob/91d9fe3/src/client/services/Server.ts#L20"},"socket-v2-sdk/src/client/services/Server.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gethealthrpc"},"getHealthRpc"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"getHealthRpc"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ApiError"),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"any Health Check for Fund Movr API RPCS"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SocketDotTech/socket-v2-sdk/blob/91d9fe3/src/client/services/Server.ts#L31"},"socket-v2-sdk/src/client/services/Server.ts:31")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getsingletx"},"getSingleTx"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"getSingleTx"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"__namedParameters"),"): ",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/types#singletxoutputdto"},(0,i.kt)("inlineCode",{parentName:"a"},"SingleTxOutputDTO")),">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ApiError"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters.requestBody")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/socket-v2-sdk-docs/reference/types#singletxdto"},(0,i.kt)("inlineCode",{parentName:"a"},"SingleTxDTO")))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/types#singletxoutputdto"},(0,i.kt)("inlineCode",{parentName:"a"},"SingleTxOutputDTO")),">"),(0,i.kt)("p",null,"SingleTxOutputDTO Get the tx details for the route."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SocketDotTech/socket-v2-sdk/blob/91d9fe3/src/client/services/Server.ts#L85"},"socket-v2-sdk/src/client/services/Server.ts:85")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gettokenprice"},"getTokenPrice"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"getTokenPrice"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"__namedParameters"),"): ",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/types#tokenpriceresponsedto"},(0,i.kt)("inlineCode",{parentName:"a"},"TokenPriceResponseDTO")),">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ApiError"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters.chainId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/socket-v2-sdk-docs/reference/enums/ChainId"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainId"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"ID of chain, e.g Ethereum Mainnet = 1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters.tokenAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Token contract address on network, e.g USDC on Ethereum Mainnet")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/types#tokenpriceresponsedto"},(0,i.kt)("inlineCode",{parentName:"a"},"TokenPriceResponseDTO")),">"),(0,i.kt)("p",null,"TokenPriceResponseDTO Returns price of token for a given chain"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SocketDotTech/socket-v2-sdk/blob/91d9fe3/src/client/services/Server.ts#L61"},"socket-v2-sdk/src/client/services/Server.ts:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gettransactionreceipt"},"getTransactionReceipt"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"getTransactionReceipt"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"__namedParameters"),"): ",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/types#transactionreceiptresponsedto"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionReceiptResponseDTO")),">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ApiError"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters.chainId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/socket-v2-sdk-docs/reference/enums/ChainId"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainId"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"ID of source chain, e.g Ethereum Mainnet = 1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters.transactionHash")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Transaction hash originating from the source chain while bridging assets.")))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/client/CancelablePromise"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelablePromise")),"<",(0,i.kt)("a",{parentName:"p",href:"/socket-v2-sdk-docs/reference/types#transactionreceiptresponsedto"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionReceiptResponseDTO")),">"),(0,i.kt)("p",null,"TransactionReceiptResponseDTO Returns the receipt of the transaction."),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SocketDotTech/socket-v2-sdk/blob/91d9fe3/src/client/services/Server.ts#L139"},"socket-v2-sdk/src/client/services/Server.ts:139")))}m.isMDXComponent=!0}}]);