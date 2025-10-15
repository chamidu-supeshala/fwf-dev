import"./chunk-3CXUD3G6.js";import"./chunk-6NSDJIBP.js";import"./chunk-2QI3G6E5.js";import"./chunk-YXNZZM7N.js";import"./chunk-FI7UHYM6.js";import"./chunk-HCXQUAPB.js";import"./chunk-5WTFWRCP.js";import"./chunk-Z2XXFZG6.js";import"./chunk-QNVXSI5A.js";import"./chunk-JEWQBEMQ.js";import"./chunk-LUW4Q4AU.js";import"./chunk-447AHIOV.js";import"./chunk-5PYGOJEJ.js";import"./chunk-MFN6PO6P.js";import{a as V}from"./chunk-6PMVZKVG.js";import{b as h}from"./chunk-YQTG6YKM.js";import{b as k,e as m,k as v,u as R}from"./chunk-LSDUHFNV.js";import"./chunk-WCPZFELE.js";import{A as _,C as Y,D as Q,E as G,K as y,N as U,R as p,T as N,a as q,b as z,d as X,i as E,t as M,u as A,z as Z}from"./chunk-AJGGPJRP.js";import{b as w,g as J,i as C}from"./chunk-3MOYO27G.js";import"./chunk-UXCDS6QA.js";import"./chunk-7D3XAEE7.js";import"./chunk-CG2EMPLA.js";import"./chunk-CTLUDKZB.js";import"./chunk-GSTDJRCA.js";import"./chunk-YVA7YSBN.js";import"./chunk-3WGOZNFF.js";import{a as K,b as j}from"./chunk-QGXACWGO.js";var s={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS"},I={[s.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[s.INVALID_RECIPIENT]:"Invalid recipient address",[s.INVALID_ASSET]:"Invalid asset specified",[s.INVALID_AMOUNT]:"Invalid payment amount",[s.UNKNOWN_ERROR]:"Unknown payment error occurred",[s.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[s.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[s.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[s.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[s.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[s.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[s.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status"},i=class n extends Error{get message(){return I[this.code]}constructor(e,r){super(I[e]),this.name="AppKitPayError",this.code=e,this.details=r,Error.captureStackTrace&&Error.captureStackTrace(this,n)}};var ee="https://rpc.walletconnect.org/v1/json-rpc";var $=class extends Error{};function de(){let n=M.getSnapshot().projectId;return`${ee}?projectId=${n}`}async function W(n,e){let r=de(),{sdkType:a,sdkVersion:o,projectId:c}=M.getSnapshot(),u={jsonrpc:"2.0",id:1,method:n,params:j(K({},e||{}),{st:a,sv:o,projectId:c})},P=await(await fetch(r,{method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json"}})).json();if(P.error)throw new $(P.error.message);return P}async function B(n){return(await W("reown_getExchanges",n)).result}async function te(n){return(await W("reown_getExchangePayUrl",n)).result}async function ne(n){return(await W("reown_getExchangeBuyStatus",n)).result}var ye=["eip155","solana"],he={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function D(n,e){let{chainNamespace:r,chainId:a}=C.parseCaipNetworkId(n),o=he[r];if(!o)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${r}`);let c=o.native.assetNamespace,u=o.native.assetReference;return e!=="native"&&(c=o.defaultTokenNamespace,u=e),`${`${r}:${a}`}/${c}:${u}`}function re(n){let{chainNamespace:e}=C.parseCaipNetworkId(n);return ye.includes(e)}async function ae(n){let{paymentAssetNetwork:e,activeCaipNetwork:r,approvedCaipNetworkIds:a,requestedCaipNetworks:o}=n,u=E.sortRequestedNetworks(a,o).find(S=>S.caipNetworkId===e);if(!u)throw new i(s.INVALID_PAYMENT_CONFIG);if(u.caipNetworkId===r.caipNetworkId)return;let d=p.getNetworkProp("supportsAllNetworks",u.chainNamespace);if(!(a?.includes(u.caipNetworkId)||d))throw new i(s.INVALID_PAYMENT_CONFIG);try{await p.switchActiveNetwork(u)}catch(S){throw new i(s.GENERIC_PAYMENT_ERROR,S)}}async function se(n,e,r){if(e!==w.CHAIN.EVM)throw new i(s.INVALID_CHAIN_NAMESPACE);if(!r.fromAddress)throw new i(s.INVALID_PAYMENT_CONFIG,"fromAddress is required for native EVM payments.");let a=typeof r.amount=="string"?parseFloat(r.amount):r.amount;if(isNaN(a))throw new i(s.INVALID_PAYMENT_CONFIG);let o=n.metadata?.decimals??18,c=y.parseUnits(a.toString(),o);if(typeof c!="bigint")throw new i(s.GENERIC_PAYMENT_ERROR);return await y.sendTransaction({chainNamespace:e,to:r.recipient,address:r.fromAddress,value:c,data:"0x"})??void 0}async function oe(n,e){if(!e.fromAddress)throw new i(s.INVALID_PAYMENT_CONFIG,"fromAddress is required for ERC20 EVM payments.");let r=n.asset,a=e.recipient,o=Number(n.metadata.decimals),c=y.parseUnits(e.amount.toString(),o);if(c===void 0)throw new i(s.GENERIC_PAYMENT_ERROR);return await y.writeContract({fromAddress:e.fromAddress,tokenAddress:r,args:[a,c],method:"transfer",abi:J.getERC20Abi(r),chainNamespace:w.CHAIN.EVM})??void 0}async function ie(n,e){if(n!==w.CHAIN.SOLANA)throw new i(s.INVALID_CHAIN_NAMESPACE);if(!e.fromAddress)throw new i(s.INVALID_PAYMENT_CONFIG,"fromAddress is required for Solana payments.");let r=typeof e.amount=="string"?parseFloat(e.amount):e.amount;if(isNaN(r)||r<=0)throw new i(s.INVALID_PAYMENT_CONFIG,"Invalid payment amount.");try{if(!U.getProvider(n))throw new i(s.GENERIC_PAYMENT_ERROR,"No Solana provider available.");let o=await y.sendTransaction({chainNamespace:w.CHAIN.SOLANA,to:e.recipient,value:r,tokenMint:e.tokenMint});if(!o)throw new i(s.GENERIC_PAYMENT_ERROR,"Transaction failed.");return o}catch(a){throw a instanceof i?a:new i(s.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${a}`)}}var ce=0,F="unknown",t=q({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0}),l={state:t,subscribe(n){return z(t,()=>n(t))},subscribeKey(n,e){return X(t,n,e)},async handleOpenPay(n){this.resetState(),this.setPaymentConfig(n),this.subscribeEvents(),this.initializeAnalytics(),t.isConfigured=!0,_.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:t.exchanges,configuration:{network:t.paymentAsset.network,asset:t.paymentAsset.asset,recipient:t.recipient,amount:t.amount}}}),await N.open({view:"Pay"})},resetState(){t.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},t.recipient="0x0",t.amount=0,t.isConfigured=!1,t.error=null,t.isPaymentInProgress=!1,t.isLoading=!1,t.currentPayment=void 0},setPaymentConfig(n){if(!n.paymentAsset)throw new i(s.INVALID_PAYMENT_CONFIG);try{t.paymentAsset=n.paymentAsset,t.recipient=n.recipient,t.amount=n.amount,t.openInNewTab=n.openInNewTab??!0,t.redirectUrl=n.redirectUrl,t.payWithExchange=n.payWithExchange,t.error=null}catch(e){throw new i(s.INVALID_PAYMENT_CONFIG,e.message)}},getPaymentAsset(){return t.paymentAsset},getExchanges(){return t.exchanges},async fetchExchanges(){try{t.isLoading=!0;let n=await B({page:ce,asset:D(t.paymentAsset.network,t.paymentAsset.asset),amount:t.amount.toString()});t.exchanges=n.exchanges.slice(0,2)}catch{throw A.showError(I.UNABLE_TO_GET_EXCHANGES),new i(s.UNABLE_TO_GET_EXCHANGES)}finally{t.isLoading=!1}},async getAvailableExchanges(n){try{let e=n?.asset&&n?.network?D(n.network,n.asset):void 0;return await B({page:n?.page??ce,asset:e,amount:n?.amount?.toString()})}catch{throw new i(s.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(n,e,r=!1){try{let a=Number(e.amount),o=await te({exchangeId:n,asset:D(e.network,e.asset),amount:a.toString(),recipient:`${e.network}:${e.recipient}`});return _.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:n},configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:n},headless:r}}),r&&(this.initiatePayment(),_.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:t.paymentId||F,configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:n}}})),o}catch(a){throw a instanceof Error&&a.message.includes("is not supported")?new i(s.ASSET_NOT_SUPPORTED):new Error(a.message)}},async openPayUrl(n,e,r=!1){try{let a=await this.getPayUrl(n.exchangeId,e,r);if(!a)throw new i(s.UNABLE_TO_GET_PAY_URL);let c=n.openInNewTab??!0?"_blank":"_self";return E.openHref(a.url,c),a}catch(a){throw a instanceof i?t.error=a.message:t.error=I.GENERIC_PAYMENT_ERROR,new i(s.UNABLE_TO_GET_PAY_URL)}},subscribeEvents(){t.isConfigured||(y.subscribeKey("connections",n=>{n.size>0&&this.handlePayment()}),p.subscribeChainProp("accountState",n=>{let e=y.hasAnyConnection(w.CONNECTOR_ID.WALLET_CONNECT);n?.caipAddress&&(e?setTimeout(()=>{this.handlePayment()},100):this.handlePayment())}))},async handlePayment(){t.currentPayment={type:"wallet",status:"IN_PROGRESS"};let n=p.getActiveCaipAddress();if(!n)return;let{chainId:e,address:r}=C.parseCaipAddress(n),a=p.state.activeChain;if(!r||!e||!a||!U.getProvider(a))return;let c=p.state.activeCaipNetwork;if(c&&!t.isPaymentInProgress)try{this.initiatePayment();let u=p.getAllRequestedCaipNetworks(),d=p.getAllApprovedCaipNetworkIds();switch(await ae({paymentAssetNetwork:t.paymentAsset.network,activeCaipNetwork:c,approvedCaipNetworkIds:d,requestedCaipNetworks:u}),await N.open({view:"PayLoading"}),a){case w.CHAIN.EVM:t.paymentAsset.asset==="native"&&(t.currentPayment.result=await se(t.paymentAsset,a,{recipient:t.recipient,amount:t.amount,fromAddress:r})),t.paymentAsset.asset.startsWith("0x")&&(t.currentPayment.result=await oe(t.paymentAsset,{recipient:t.recipient,amount:t.amount,fromAddress:r})),t.currentPayment.status="SUCCESS";break;case w.CHAIN.SOLANA:t.currentPayment.result=await ie(a,{recipient:t.recipient,amount:t.amount,fromAddress:r,tokenMint:t.paymentAsset.asset==="native"?void 0:t.paymentAsset.asset}),t.currentPayment.status="SUCCESS";break;default:throw new i(s.INVALID_CHAIN_NAMESPACE)}}catch(u){u instanceof i?t.error=u.message:t.error=I.GENERIC_PAYMENT_ERROR,t.currentPayment.status="FAILED",A.showError(t.error)}finally{t.isPaymentInProgress=!1}},getExchangeById(n){return t.exchanges.find(e=>e.id===n)},validatePayConfig(n){let{paymentAsset:e,recipient:r,amount:a}=n;if(!e)throw new i(s.INVALID_PAYMENT_CONFIG);if(!r)throw new i(s.INVALID_RECIPIENT);if(!e.asset)throw new i(s.INVALID_ASSET);if(a==null||a<=0)throw new i(s.INVALID_AMOUNT)},handlePayWithWallet(){let n=p.getActiveCaipAddress();if(!n){Y.push("Connect");return}let{chainId:e,address:r}=C.parseCaipAddress(n),a=p.state.activeChain;if(!r||!e||!a){Y.push("Connect");return}this.handlePayment()},async handlePayWithExchange(n){try{t.currentPayment={type:"exchange",exchangeId:n};let{network:e,asset:r}=t.paymentAsset,a={network:e,asset:r,amount:t.amount,recipient:t.recipient},o=await this.getPayUrl(n,a);if(!o)throw new i(s.UNABLE_TO_INITIATE_PAYMENT);return t.currentPayment.sessionId=o.sessionId,t.currentPayment.status="IN_PROGRESS",t.currentPayment.exchangeId=n,this.initiatePayment(),{url:o.url,openInNewTab:t.openInNewTab}}catch(e){return e instanceof i?t.error=e.message:t.error=I.GENERIC_PAYMENT_ERROR,t.isPaymentInProgress=!1,A.showError(t.error),null}},async getBuyStatus(n,e){try{let r=await ne({sessionId:e,exchangeId:n});return(r.status==="SUCCESS"||r.status==="FAILED")&&_.sendEvent({type:"track",event:r.status==="SUCCESS"?"PAY_SUCCESS":"PAY_ERROR",properties:{message:r.status==="FAILED"?E.parseError(t.error):void 0,source:"pay",paymentId:t.paymentId||F,configuration:{network:t.paymentAsset.network,asset:t.paymentAsset.asset,recipient:t.recipient,amount:t.amount},currentPayment:{type:"exchange",exchangeId:t.currentPayment?.exchangeId,sessionId:t.currentPayment?.sessionId,result:r.txHash}}}),r}catch{throw new i(s.UNABLE_TO_GET_BUY_STATUS)}},async updateBuyStatus(n,e){try{let r=await this.getBuyStatus(n,e);t.currentPayment&&(t.currentPayment.status=r.status,t.currentPayment.result=r.txHash),(r.status==="SUCCESS"||r.status==="FAILED")&&(t.isPaymentInProgress=!1)}catch{throw new i(s.UNABLE_TO_GET_BUY_STATUS)}},initiatePayment(){t.isPaymentInProgress=!0,t.paymentId=crypto.randomUUID()},initializeAnalytics(){t.analyticsSet||(t.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",n=>{if(t.currentPayment?.status&&t.currentPayment.status!=="UNKNOWN"){let e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[t.currentPayment.status];_.sendEvent({type:"track",event:e,properties:{message:t.currentPayment.status==="FAILED"?E.parseError(t.error):void 0,source:"pay",paymentId:t.paymentId||F,configuration:{network:t.paymentAsset.network,asset:t.paymentAsset.asset,recipient:t.recipient,amount:t.amount},currentPayment:{type:t.currentPayment.type,exchangeId:t.currentPayment.exchangeId,sessionId:t.currentPayment.sessionId,result:t.currentPayment.result}}})}}))}};var le=k`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }
`;var g=function(n,e,r,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,r):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(n,e,r,a);else for(var d=n.length-1;d>=0;d--)(u=n[d])&&(c=(o<3?u(c):o>3?u(e,r,c):u(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},f=class extends v{constructor(){super(),this.unsubscribe=[],this.amount="",this.tokenSymbol="",this.networkName="",this.exchanges=l.state.exchanges,this.isLoading=l.state.isLoading,this.loadingExchangeId=null,this.connectedWalletInfo=p.getAccountData()?.connectedWalletInfo,this.initializePaymentDetails(),this.unsubscribe.push(l.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(l.subscribeKey("isLoading",e=>this.isLoading=e)),this.unsubscribe.push(p.subscribeChainProp("accountState",e=>{this.connectedWalletInfo=e?.connectedWalletInfo})),l.fetchExchanges()}get isWalletConnected(){return p.getAccountData()?.status==="connected"}render(){return m`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="3">
            ${this.renderPayWithWallet()} ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){let e=l.getPaymentAsset();this.networkName=e.network,this.tokenSymbol=e.metadata.symbol,this.amount=l.state.amount.toString()}renderPayWithWallet(){return re(this.networkName)?m`<wui-flex flexDirection="column" gap="3">
        ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
      </wui-flex>
      <wui-separator text="or"></wui-separator>`:m``}renderPaymentHeader(){let e=this.networkName;if(this.networkName){let a=p.getAllRequestedCaipNetworks().find(o=>o.caipNetworkId===this.networkName);a&&(e=a.name)}return m`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="2">
          <wui-text variant="h1-regular" color="primary">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="1">
            <wui-text variant="md-medium" color="primary">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${e?m`
                  <wui-text variant="sm-medium" color="secondary">
                    on ${e}
                  </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){let e=this.connectedWalletInfo?.name||"connected wallet";return m`
      <wui-list-item
        @click=${this.onWalletPayment}
        ?chevron=${!0}
        ?fullSize=${!0}
        ?rounded=${!0}
        data-testid="wallet-payment-option"
        imageSrc=${V(this.connectedWalletInfo?.icon)}
      >
        <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
      </wui-list-item>

      <wui-list-item
        icon="power"
        ?rounded=${!0}
        iconColor="error"
        @click=${this.onDisconnect}
        data-testid="disconnect-button"
        ?chevron=${!1}
      >
        <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
      </wui-list-item>
    `}renderDisconnectedView(){return m`<wui-list-item
      variant="icon"
      iconVariant="overlay"
      icon="wallet"
      ?rounded=${!0}
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay from wallet</wui-text>
    </wui-list-item>`}renderExchangeOptions(){return this.isLoading?m`<wui-flex justifyContent="center" alignItems="center">
        <wui-spinner size="md"></wui-spinner>
      </wui-flex>`:this.exchanges.length===0?m`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:this.exchanges.map(e=>m`
        <wui-list-item
          @click=${()=>this.onExchangePayment(e.id)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          ?disabled=${this.loadingExchangeId!==null}
          ?loading=${this.loadingExchangeId===e.id}
          imageSrc=${V(e.imageUrl)}
        >
          <wui-flex alignItems="center" gap="3">
            <wui-text flexGrow="1" variant="md-medium" color="primary"
              >Pay with ${e.name} <wui-spinner size="sm" color="secondary"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `)}onWalletPayment(){l.handlePayWithWallet()}async onExchangePayment(e){try{this.loadingExchangeId=e;let r=await l.handlePayWithExchange(e);r&&(await N.open({view:"PayLoading"}),E.openHref(r.url,r.openInNewTab?"_blank":"_self"))}catch(r){console.error("Failed to pay with exchange",r),A.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(e){e.stopPropagation();try{await y.disconnect()}catch{console.error("Failed to disconnect"),A.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}};f.styles=le;g([h()],f.prototype,"amount",void 0);g([h()],f.prototype,"tokenSymbol",void 0);g([h()],f.prototype,"networkName",void 0);g([h()],f.prototype,"exchanges",void 0);g([h()],f.prototype,"isLoading",void 0);g([h()],f.prototype,"loadingExchangeId",void 0);g([h()],f.prototype,"connectedWalletInfo",void 0);f=g([R("w3m-pay-view")],f);var ue=k`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }
`;var O=function(n,e,r,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,r):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(n,e,r,a);else for(var d=n.length-1;d>=0;d--)(u=n[d])&&(c=(o<3?u(c):o>3?u(e,r,c):u(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},fe=4e3,x=class extends v{constructor(){super(),this.loadingMessage="",this.subMessage="",this.paymentState="in-progress",this.paymentState=l.state.isPaymentInProgress?"in-progress":"completed",this.updateMessages(),this.setupSubscription(),this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return m`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["7","5","5","5"]}
        gap="9"
      >
        <wui-flex justifyContent="center" alignItems="center"> ${this.getStateIcon()} </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary">
            ${this.loadingMessage}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">
            ${this.subMessage}
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}updateMessages(){switch(this.paymentState){case"completed":this.loadingMessage="Payment completed",this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed",this.subMessage="There was an error processing your transaction";break;case"in-progress":default:l.state.currentPayment?.type==="exchange"?(this.loadingMessage="Payment initiated",this.subMessage="Please complete the payment on the exchange"):(this.loadingMessage="Awaiting payment confirmation",this.subMessage="Please confirm the payment transaction in your wallet");break}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();case"in-progress":default:return this.loaderTemplate()}}setupExchangeSubscription(){l.state.currentPayment?.type==="exchange"&&(this.exchangeSubscription=setInterval(async()=>{let e=l.state.currentPayment?.exchangeId,r=l.state.currentPayment?.sessionId;e&&r&&(await l.updateBuyStatus(e,r),l.state.currentPayment?.status==="SUCCESS"&&clearInterval(this.exchangeSubscription))},fe))}setupSubscription(){l.subscribeKey("isPaymentInProgress",e=>{!e&&this.paymentState==="in-progress"&&(l.state.error||!l.state.currentPayment?.result?this.paymentState="error":this.paymentState="completed",this.updateMessages(),setTimeout(()=>{y.state.status!=="disconnected"&&N.close()},3e3))}),l.subscribeKey("error",e=>{e&&this.paymentState==="in-progress"&&(this.paymentState="error",this.updateMessages())})}loaderTemplate(){let e=Q.state.themeVariables["--w3m-border-radius-master"],r=e?parseInt(e.replace("px",""),10):4,a=this.getPaymentIcon();return m`
      <wui-flex justifyContent="center" alignItems="center" style="position: relative;">
        ${a?m`<wui-wallet-image size="lg" imageSrc=${a}></wui-wallet-image>`:null}
        <wui-loading-thumbnail radius=${r*9}></wui-loading-thumbnail>
      </wui-flex>
    `}getPaymentIcon(){let e=l.state.currentPayment;if(e){if(e.type==="exchange"){let r=e.exchangeId;if(r)return l.getExchangeById(r)?.imageUrl}if(e.type==="wallet"){let r=p.getAccountData()?.connectedWalletInfo?.icon;if(r)return r;let a=p.state.activeChain;if(!a)return;let o=G.getConnectorId(a);if(!o)return;let c=G.getConnectorById(o);return c?Z.getConnectorImage(c):void 0}}}successTemplate(){return m`<wui-icon size="xl" color="success" name="checkmark"></wui-icon>`}errorTemplate(){return m`<wui-icon size="xl" color="error" name="close"></wui-icon>`}};x.styles=ue;O([h()],x.prototype,"loadingMessage",void 0);O([h()],x.prototype,"subMessage",void 0);O([h()],x.prototype,"paymentState",void 0);x=O([R("w3m-pay-loading-view")],x);var we=3e5;async function pe(n){return l.handleOpenPay(n)}async function Ee(n,e=we){if(e<=0)throw new i(s.INVALID_PAYMENT_CONFIG,"Timeout must be greater than 0");try{await pe(n)}catch(r){throw r instanceof i?r:new i(s.UNABLE_TO_INITIATE_PAYMENT,r.message)}return new Promise((r,a)=>{let o=!1,c=setTimeout(()=>{o||(o=!0,T(),a(new i(s.GENERIC_PAYMENT_ERROR,"Payment timeout")))},e);function u(){if(o)return;let b=l.state.currentPayment,L=l.state.error,me=l.state.isPaymentInProgress;if(b?.status==="SUCCESS"){o=!0,T(),clearTimeout(c),r({success:!0,result:b.result});return}if(b?.status==="FAILED"){o=!0,T(),clearTimeout(c),r({success:!1,error:L||"Payment failed"});return}L&&!me&&!b&&(o=!0,T(),clearTimeout(c),r({success:!1,error:L}))}let d=H("currentPayment",u),P=H("error",u),S=H("isPaymentInProgress",u),T=Pe([d,P,S]);u()})}function ge(){return l.getExchanges()}function Ae(){return l.state.currentPayment?.result}function Ne(){return l.state.error}function Ie(){return l.state.isPaymentInProgress}function H(n,e){return l.subscribeKey(n,e)}function Pe(n){return()=>{n.forEach(e=>{try{e()}catch{}})}}var Ot={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},Lt={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Mt={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},Yt={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Gt={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Vt={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},$t={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Wt={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Bt={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Ft={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Ht={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Kt={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},jt={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},qt={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}};export{x as W3mPayLoadingView,f as W3mPayView,Vt as arbitrumUSDC,Ht as arbitrumUSDT,Ot as baseETH,Mt as baseSepoliaETH,Lt as baseUSDC,Yt as ethereumUSDC,Bt as ethereumUSDT,ge as getExchanges,Ie as getIsPaymentInProgress,Ne as getPayError,Ae as getPayResult,pe as openPay,Gt as optimismUSDC,Ft as optimismUSDT,Ee as pay,$t as polygonUSDC,Kt as polygonUSDT,qt as solanaSOL,Wt as solanaUSDC,jt as solanaUSDT};
