"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7433],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),k=o,d=f["".concat(l,".").concat(k)]||f[k]||p[k]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return i}});var n=r(2263),o=r(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,s=void 0!==i&&i,l=a.absolute,c=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(s)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+u:u}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},4048:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return k}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=r(4996),s=["components"],l={},c="Transferring Tokens using a Block Explorer",u={unversionedId:"workflow/token-transfer",id:"workflow/token-transfer",isDocsHomePage:!1,title:"Transferring Tokens using a Block Explorer",description:"You can transfer Casper tokens (CSPR) using any block explorer built to explore the Casper blockchain. The Wallet feature on these block explorers can be used to transfer tokens to another user, delegate stake, or undelegate stake. In this section, we will discuss the steps to transfer CSPR tokens.",source:"@site/source/docs/casper/workflow/token-transfer.md",sourceDirName:"workflow",slug:"/workflow/token-transfer",permalink:"/docs/workflow/token-transfer",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/workflow/token-transfer.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"Casper Signer User Guide",permalink:"/docs/workflow/signer-guide"},next:{title:"Funding Testnet Accounts",permalink:"/docs/workflow/testnet-faucet"}},p=[{value:"Transferring Tokens",id:"transferring-tokens",children:[]}],f={toc:p};function k(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transferring-tokens-using-a-block-explorer"},"Transferring Tokens using a Block Explorer"),(0,a.kt)("p",null,"You can transfer Casper tokens (CSPR) using any ",(0,a.kt)("a",{parentName:"p",href:"block-explorer"},"block explorer")," built to explore the Casper blockchain. The Wallet feature on these block explorers can be used to transfer tokens to another user, delegate stake, or undelegate stake. In this section, we will discuss the steps to transfer CSPR tokens."),(0,a.kt)("h2",{id:"transferring-tokens"},"Transferring Tokens"),(0,a.kt)("p",null,"To transfer tokens, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign in to your account with the Signer. For detailed instructions, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/workflow/signer-guide"},"Signer Guide"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Wallet")," on the top menu bar and select ",(0,a.kt)("strong",{parentName:"p"},"Transfer CSPR")," from the drop-down menu.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the recipient\u2019s wallet address, the amount you wish to transfer, and an optional Transfer ID for reference. If you do not provide an ID, the system will auto-generate one.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Next")," to proceed. The following figure shows an example transfer of 50 CSPR."),(0,a.kt)("img",{src:(0,i.Z)("/image/workflow/CSPR-first-step.png"),width:"500"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A confirmation window appears, and you may verify the recipient\u2019s wallet address and transaction amount. Click ",(0,a.kt)("strong",{parentName:"p"},"Confirm and transfer")," to proceed to the next step. In the following figure, you may observe the transaction details initiated in the previous step. The transaction fees is displayed in CSPR and USD."))),(0,a.kt)("img",{src:(0,i.Z)("/image/workflow/CSPR-second-step.png"),width:"500"}),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign the transaction by selecting the ",(0,a.kt)("strong",{parentName:"p"},"Sign with Casper Signer")," button to proceed to the next step. Here you can review the following important fields:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The Deploy hash, which uniquely identifies your transfer"),(0,a.kt)("li",{parentName:"ul"},"The Recipient public key of the person receiving your transfer"),(0,a.kt)("li",{parentName:"ul"},"The Recipient account hash used by the system to track the transaction"),(0,a.kt)("li",{parentName:"ul"},"The Transfer Amount containing the value of the transfer")))),(0,a.kt)("img",{src:(0,i.Z)("/image/workflow/CSPR-third-step.png"),width:"500"}),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, you will see a pop-up window with a Signature Request and all the various transaction details, including:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Signing key which approves the transaction"),(0,a.kt)("li",{parentName:"ul"},"Your public key"),(0,a.kt)("li",{parentName:"ul"},"Recipient's account hash"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Sign with Casper Signer")," at the bottom of the window to complete the transaction. You completed the transaction, and successfully transferred tokens."),(0,a.kt)("img",{src:(0,i.Z)("/image/workflow/transfer-confirm.png"),width:"500"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, you can view your CSPR balance, for more information, see the ",(0,a.kt)("a",{parentName:"p",href:"signer-guide#6-viewing-account-details"},"Viewing Account Details"),"."))))}k.isMDXComponent=!0}}]);