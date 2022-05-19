"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4553],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3066:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=n(4996),c=["components"],s={},l="Using Casper Signer",p={unversionedId:"dapp-dev-guide/casper-signer",id:"dapp-dev-guide/casper-signer",title:"Using Casper Signer",description:"This tutorial shows you how to connect the Casper Signer wallet to your website, show the balance of the account and send a transaction.",source:"@site/source/docs/casper/dapp-dev-guide/casper-signer.md",sourceDirName:"dapp-dev-guide",slug:"/dapp-dev-guide/casper-signer",permalink:"/dapp-dev-guide/casper-signer",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/casper-signer.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Monitoring and Consuming Events",permalink:"/dapp-dev-guide/monitoring-events"},next:{title:"Introduction",permalink:"/writing-contracts"}},u={},d=[{value:"Step 1. Run a Mini Webserver",id:"step-1-run-a-mini-webserver",level:2},{value:"Step 2. Create a Simple UI to Interact with the Signer",id:"step-2-create-a-simple-ui-to-interact-with-the-signer",level:2},{value:"Step 3. Implement the <code>connect/disconnect</code> Button",id:"step-3-implement-the-connectdisconnect-button",level:2},{value:"Step 4. Get the Account Balance",id:"step-4-get-the-account-balance",level:2},{value:"Step 5. Sign and Send a Transaction",id:"step-5-sign-and-send-a-transaction",level:2},{value:"External links",id:"external-links",level:2}],m={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-casper-signer"},"Using Casper Signer"),(0,r.kt)("p",null,"This tutorial shows you how to connect the ",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/casper-signer/djhndpllfiibmcdbnmaaahkhchcoijce"},"Casper Signer")," wallet to your website, show the balance of the account and send a transaction."),(0,r.kt)("h2",{id:"step-1-run-a-mini-webserver"},"Step 1. Run a Mini Webserver"),(0,r.kt)("p",null,"First, install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-js-sdk"},"Casper JavaScript SDK")," and ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/"},"ViteJS")," to run a mini webserver. You will need the Casper JavaScript SDK to connect to a Casper node, retrieve information from the blockchain, and send transactions. ViteJS is a front-end build tool that helps bundle a JavaScript library and start a webserver."),(0,r.kt)("p",null,"Run this npm command to initialize your server and configure it to use JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"   npm init vite@latest\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose a project name"),(0,r.kt)("li",{parentName:"ul"},"Select the default framework"),(0,r.kt)("li",{parentName:"ul"},"Select the default variant")),(0,r.kt)("p",null,"Go to the main folder and install the necessary dependencies and the Casper JavaScript SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    cd tutorial\n    npm install\n    npm install casper-js-sdk@next --save\n    npm run dev\n")),(0,r.kt)("h2",{id:"step-2-create-a-simple-ui-to-interact-with-the-signer"},"Step 2. Create a Simple UI to Interact with the Signer"),(0,r.kt)("p",null,"Next, create a minimal user interface (UI) to interact with the Casper Signer. Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," in the main folder and write the HTML code to create your UI elements. Here you can add buttons, fields for the user inputs needed to send transactions, and other elements. Here is the sample code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div id="app">\n    \x3c!-- The button to connect your website into Casper signer wallet. --\x3e\n    <button id="btnConnect">Connect</button>\n\n    \x3c!-- The button to disconnect your website into Casper signer wallet --\x3e\n    <button id="btnDisconnect">Disconnect</button>\n\n    \x3c!-- The place where the public key will display. --\x3e\n    <h1 id="textAddress">PublicKeyHex</h1>\n\n    \x3c!-- The place where Balance will display. --\x3e\n    <h1 id="textBalance">Balance</h1>\n    <h1>Transer</h1>\n\n    \x3c!-- The amount to send in the transaction. --\x3e\n    \x3c!-- Minimal amount is 2.5CSPR so 2.5 * 10000 (1CSPR = 10.000 motes)  --\x3e\n    <label for="Amount">Amount - min amount 25000000000</label>\n    <input id="Amount" type="number" />\n\n    \x3c!-- The address that will receive the coins. --\x3e\n    <label for="Recipient">Recipient</label>\n    <input id="Recipient" type="text" />\n\n    \x3c!--The button that when clicked will send the transaction. --\x3e\n    <button id="btnSend">Send</button>\n\n    \x3c!--The address of your transaction. --\x3e\n    <h1 id="tx"></h1>\n</div>\n')),(0,r.kt)("p",null,"Below is the UI created with the sample code above."),(0,r.kt)("img",{src:(0,o.Z)("/image/tutorials/signer/casper-signer-html.png"),alt:"Image showing a sample user interface",width:"800"}),(0,r.kt)("p",null,"After writing the HTML code, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.js")," file and write the code to import the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-js-sdk")," to create the client and the services necessary to get account information and send transactions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { CasperClient, CasperServiceByJsonRPC, CLPublicKey, DeployUtil } from "casper-js-sdk";\n\n//Create Casper client and service to interact with Casper node.\nconst apiUrl = "<your casper node>";\nconst casperService = new CasperServiceByJsonRPC(apiUrl);\nconst casperClient = new CasperClient(apiUrl);\n')),(0,r.kt)("h2",{id:"step-3-implement-the-connectdisconnect-button"},"Step 3. Implement the ",(0,r.kt)("inlineCode",{parentName:"h2"},"connect/disconnect")," Button"),(0,r.kt)("p",null,"Now that we have the UI and the imported library, it's time to interact with the Casper Signer wallet."),(0,r.kt)("p",null,"First, create the ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," functionality for the button:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const btnConnect = document.getElementById("btnConnect");\nbtnConnect.addEventListener("click", async () => {\n    window.casperlabsHelper.requestConnection();\n});\n')),(0,r.kt)("p",null,"When clicking on the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONNECT")," button, the wallet will show a pop-up asking if you want to connect this site into the wallet:"),(0,r.kt)("img",{src:(0,o.Z)("/image/tutorials/signer/casper-connect.png"),alt:"Image showing the connect button",width:"500"}),(0,r.kt)("p",null,"Next, implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"disconnect")," functionality:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const btnDisconnect = document.getElementById("btnDisconnect");\nbtnDisconnect.addEventListener("click", () => {\n    window.casperlabsHelper.disconnectFromSite();\n});\n')),(0,r.kt)("h2",{id:"step-4-get-the-account-balance"},"Step 4. Get the Account Balance"),(0,r.kt)("p",null,"In the previous section, you learned how to connect to the Signer wallet. In this part, you will learn how to retrieve account information using the public key of an account."),(0,r.kt)("p",null,"Let's write the function to get basic account information, like the account's public key and balance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function AccountInformation() {\n    const isConnected = await window.casperlabsHelper.isConnected();\n    if (isConnected) {\n        const publicKey = await window.casperlabsHelper.getActivePublicKey();\n        textAddress.textContent += publicKey;\n\n        const latestBlock = await casperService.getLatestBlockInfo();\n        const root = await casperService.getStateRootHash(latestBlock.block.hash);\n\n        const balanceUref = await casperService.getAccountBalanceUrefByPublicKey(root, CLPublicKey.fromHex(publicKey));\n\n        //account balance from the last block\n        const balance = await casperService.getAccountBalance(latestBlock.block.header.state_root_hash, balanceUref);\n        textBalance.textContent = `PublicKeyHex ${balance.toString()}`;\n    }\n}\n")),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountInformation")," function inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"btnConnect")," to display the information when connecting into an account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const btnConnect = document.getElementById("btnConnect");\nbtnConnect.addEventListener("click", async () => {\n    window.casperlabsHelper.requestConnection();\n    await AccountInformation();\n});\n')),(0,r.kt)("p",null,"The result should be like this:"),(0,r.kt)("img",{src:(0,o.Z)("/image/tutorials/signer/casper-signer-balance.png"),alt:"Image showing account balance",width:"800"}),(0,r.kt)("h2",{id:"step-5-sign-and-send-a-transaction"},"Step 5. Sign and Send a Transaction"),(0,r.kt)("p",null,"With the connected Signer wallet on your website, it is possible to sign a transaction. The Casper Signer will not send the transaction but only sign the transaction using your account keys. Your application will need to send the transaction after the wallet signs it with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'async function sendTransaction() {\n    // get address to send from input.\n    const to = document.getElementById("Recipient").value;\n    // get amount to send from input.\n    const amount = document.getElementById("Amount").value;\n    // For native-transfers the payment price is fixed.\n    const paymentAmount = 10000000000;\n\n    // transfer_id field in the request to tag the transaction and to correlate it to your back-end storage.\n    const id = 287821;\n\n    // gasPrice for native transfers can be set to 1.\n    const gasPrice = 1;\n\n    // Time that the deploy will remain valid for, in milliseconds\n    // The default value is 1800000 ms (30 minutes).\n    const ttl = 1800000;\n    const publicKeyHex = await window.casperlabsHelper.getActivePublicKey();\n    const publicKey = CLPublicKey.fromHex(publicKeyHex);\n\n    let deployParams = new DeployUtil.DeployParams(publicKey, "casper-test", gasPrice, ttl);\n\n    // We create a public key from account-address (it is the hex representation of the public-key with an added prefix).\n    const toPublicKey = CLPublicKey.fromHex(to);\n\n    const session = DeployUtil.ExecutableDeployItem.newTransfer(amount, toPublicKey, null, id);\n\n    const payment = DeployUtil.standardPayment(paymentAmount);\n    const deploy = DeployUtil.makeDeploy(deployParams, session, payment);\n\n    // Turn your transaction data to format JSON\n    const json = DeployUtil.deployToJson(deploy);\n\n    // Sign transcation using casper-signer.\n    const signature = await window.casperlabsHelper.sign(json, publicKeyHex, to);\n    const deployObject = DeployUtil.deployFromJson(signature);\n\n    // Here we are sending the signed deploy.\n    const signed = await casperClient.putDeploy(deployObject.val);\n\n    // Display transaction address\n    const tx = document.getElementById("tx");\n    tx.textContent = `tx: ${signed}`;\n}\n\nconst btnSend = document.getElementById("btnSend");\nbtnSend.addEventListener("click", async () => await sendTransaction());\n')),(0,r.kt)("p",null,"The resulting UI elements will look like this:"),(0,r.kt)("img",{src:(0,o.Z)("/image/tutorials/signer/casper-transcation-sign.png"),alt:"Image showing Casper signer pop-up with",width:"500"}),(0,r.kt)("h2",{id:"external-links"},"External links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://vitejs.dev/guide/"},"Vita JavaScript guide")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-ecosystem/casper-js-sdk"},"Casper Java SDK source code")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://docs.cspr.community/docs/user-guides/SignerGuide.html"},"Casper Signer guide"))))}h.isMDXComponent=!0}}]);