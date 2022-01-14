"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2013],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5498:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],c={},s="Checksum Hex Encoding",l={unversionedId:"design/checksummed-hex",id:"design/checksummed-hex",isDocsHomePage:!1,title:"Checksum Hex Encoding",description:"Introduction",source:"@site/source/docs/casper/design/checksummed-hex.md",sourceDirName:"design",slug:"/design/checksummed-hex",permalink:"/docs/design/checksummed-hex",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/design/checksummed-hex.md",tags:[],version:"current",frontMatter:{},sidebar:"design",previous:{title:"Tokens",permalink:"/docs/design/tokens"},next:{title:"Appendix",permalink:"/docs/design/appendix"}},d=[{value:"Introduction",id:"introduction",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"How <code>Ed25519</code> and <code>Secp256K1</code> keys are encoded",id:"how-ed25519-and-secp256k1-keys-are-encoded",children:[]},{value:"Backward Compatibility",id:"backward-compatibility",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"checksum-hex-encoding"},"Checksum Hex Encoding"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A checksum hex encoding is a format that includes an embedded checksum to avoid copy errors when entering account addresses. While the checksum hex format protects account addresses, it also protects all hex-encoded values. For more details, look at the specification defined in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-network/ceps/blob/master/text/0057-checksummed-addresses.md"},"CEP-57"),"."),(0,i.kt)("p",null,"Checksum hex-encoded keys are safer to use than lowercase hex-encoded keys because they enforce the validity of the key. They make it easier to ensure that the system cannot process transactions with invalid or nonexistent keys. For example, suppose you accidentally change a character in a checksum hex-encoded key. In that case, it will make the key impossible to decode so that the system would not send tokens to invalid addresses. However, if someone accidentally changes a character in a regular hex-encoded key, the system would accept it, potentially stranding tokens in an inaccessible account."),(0,i.kt)("p",null,"The following ",(0,i.kt)("a",{parentName:"p",href:"../design/serialization-standard#serialization-standard-serialization-key"},"keys")," are checksum-hex encoded:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Account"),(0,i.kt)("li",{parentName:"ul"},"Hash"),(0,i.kt)("li",{parentName:"ul"},"URef"),(0,i.kt)("li",{parentName:"ul"},"Transfer"),(0,i.kt)("li",{parentName:"ul"},"DeployInfo"),(0,i.kt)("li",{parentName:"ul"},"Balance"),(0,i.kt)("li",{parentName:"ul"},"Bid"),(0,i.kt)("li",{parentName:"ul"},"Withdraw"),(0,i.kt)("li",{parentName:"ul"},"Dictionary"),(0,i.kt)("li",{parentName:"ul"},"SystemContractRegistry")),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"At a high level, the implementation in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/dev/types/src/checksummed_hex.rs"},"GitHub")," follows the steps below. The implementation was declared in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-network/ceps/blob/master/text/0057-checksummed-addresses.md"},"CEP-57")," and released in version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.4.2"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Take a blake2b hash of the input bytes."),(0,i.kt)("li",{parentName:"ol"},"Convert the hash bytes into a cyclical stream of bits."),(0,i.kt)("li",{parentName:"ol"},"Convert the input bytes into an array of nibbles."),(0,i.kt)("li",{parentName:"ol"},"For each nibble, if the nibble is greater than ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),", meaning it's an alphabetical character ",(0,i.kt)("inlineCode",{parentName:"li"},"a")," through ",(0,i.kt)("inlineCode",{parentName:"li"},"f"),", check the next bit in the stream of hash bits."),(0,i.kt)("li",{parentName:"ol"},"If the bit is ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", capitalize the character.")),(0,i.kt)("h2",{id:"how-ed25519-and-secp256k1-keys-are-encoded"},"How ",(0,i.kt)("inlineCode",{parentName:"h2"},"Ed25519")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"Secp256K1")," keys are encoded"),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"Ed25519")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Secp256K1")," public keys, the public key bytes are hex-encoded with an embedded checksum, then the hex-encoded public key tag is concatenated to the beginning of the encoded public key."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("p",null,"For the Ed25519 public key ",(0,i.kt)("inlineCode",{parentName:"p"},"01ccDBB42854759141910c134D67cfAf0E78a93AdD396d43045fAa3A567DcABd84"),", the encoded public key ",(0,i.kt)("inlineCode",{parentName:"p"},"ccDBB42854759141910c134D67cfAf0E78a93AdD396d43045fAa3A567DcABd84")," is concatenated with the key tag for ed25519 public keys ",(0,i.kt)("inlineCode",{parentName:"p"},"01"),"."),(0,i.kt)("p",null,"You can find the implementation on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/dev/types/src/checksummed_hex.rs"},"GitHub"),"."),(0,i.kt)("h2",{id:"backward-compatibility"},"Backward Compatibility"),(0,i.kt)("p",null,"Version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.4.2")," is backward-compatible with lower-hex encoded keys, so if you use a public key encoded in lowercase hex, the network will still be able to decode the public key and use it in a transaction."))}u.isMDXComponent=!0}}]);