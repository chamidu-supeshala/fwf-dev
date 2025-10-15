import{a as S}from"./chunk-I6TOXFBM.js";import{a as f}from"./chunk-6PMVZKVG.js";import{a as w,b as h}from"./chunk-YQTG6YKM.js";import{e,k as p,m as d,q as b,r as P,u as v}from"./chunk-LSDUHFNV.js";import{A as C,C as u}from"./chunk-AJGGPJRP.js";var A=d`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var W=function(t,i,a,o){var n=arguments.length,r=n<3?i:o===null?o=Object.getOwnPropertyDescriptor(i,a):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,i,a,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(i,a,r):s(i,a))||r);return n>3&&r&&Object.defineProperty(i,a,r),r},g=class extends p{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=u.state.view}firstUpdated(){this.status=S.hasFooter()?"show":"hide",this.unsubscribe.push(u.subscribeKey("view",i=>{this.view=i,this.status=S.hasFooter()?"show":"hide",this.status==="hide"&&document.documentElement.style.setProperty("--apkt-footer-height","0px")})),this.resizeObserver=new ResizeObserver(i=>{for(let a of i)if(a.target===this.getWrapper()){let o=`${a.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",o)}}),this.resizeObserver.observe(this.getWrapper())}render(){return e`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return S.hasFooter()?e` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return e`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return e`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return e` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){C.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),u.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};g.styles=[A];W([h()],g.prototype,"status",void 0);W([h()],g.prototype,"view",void 0);g=W([v("w3m-footer")],g);var R=d`
  :host {
    display: block;
    width: inherit;
  }
`;var $=function(t,i,a,o){var n=arguments.length,r=n<3?i:o===null?o=Object.getOwnPropertyDescriptor(i,a):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,i,a,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(i,a,r):s(i,a))||r);return n>3&&r&&Object.defineProperty(i,a,r),r},y=class extends p{constructor(){super(),this.unsubscribe=[],this.viewState=u.state.view,this.history=u.state.history.join(","),this.unsubscribe.push(u.subscribeKey("view",()=>{this.history=u.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(i=>i()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return e`${this.templatePageContainer()}`}templatePageContainer(){return e`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=u.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(i){switch(i){case"AccountSettings":return e`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return e`<w3m-account-view></w3m-account-view>`;case"AllWallets":return e`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return e`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return e`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return e`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return e`<w3m-connect-view></w3m-connect-view>`;case"Create":return e`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return e`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return e`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return e`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return e`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return e`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return e`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return e`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return e`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return e`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return e`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return e`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return e`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return e`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return e`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return e`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return e`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return e`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return e`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return e`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return e`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return e`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return e`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return e`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return e`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return e`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return e`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return e`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return e`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return e`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return e`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return e`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return e`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return e`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return e`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return e`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return e`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return e`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return e`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return e`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return e`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return e`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return e`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return e`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return e`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return e`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return e`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return e`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return e`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"FundWallet":return e`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return e`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return e`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;default:return e`<w3m-connect-view></w3m-connect-view>`}}};y.styles=[R];$([h()],y.prototype,"viewState",void 0);$([h()],y.prototype,"history",void 0);y=$([v("w3m-router")],y);var E=d`
  :host {
    position: relative;
    border-radius: ${({borderRadius:t})=>t[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:t})=>t[1]};
    padding: ${({spacing:t})=>t[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var O=function(t,i,a,o){var n=arguments.length,r=n<3?i:o===null?o=Object.getOwnPropertyDescriptor(i,a):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,i,a,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(i,a,r):s(i,a))||r);return n>3&&r&&Object.defineProperty(i,a,r),r},k=4,x=class extends p{constructor(){super(...arguments),this.walletImages=[]}render(){let i=this.walletImages.length<k;return e`${this.walletImages.slice(0,k).map(({src:a,walletName:o})=>e`
          <wui-wallet-image
            size="sm"
            imageSrc=${a}
            name=${f(o)}
          ></wui-wallet-image>
        `)}
    ${i?[...Array(k-this.walletImages.length)].map(()=>e` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};x.styles=[b,E];O([w({type:Array})],x.prototype,"walletImages",void 0);x=O([v("wui-all-wallets-image")],x);var I=d`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:t})=>t[4]};
    color: ${({tokens:t})=>t.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:t})=>t.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:t})=>t.core.glass010};
    color: ${({tokens:t})=>t.theme.foregroundTertiary};
  }
`;var m=function(t,i,a,o){var n=arguments.length,r=n<3?i:o===null?o=Object.getOwnPropertyDescriptor(i,a):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,i,a,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(i,a,r):s(i,a))||r);return n>3&&r&&Object.defineProperty(i,a,r),r},c=class extends p{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,e`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${f(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?e` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?e` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?e`<wui-wallet-image
        size=${f(this.size==="sm"?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?e`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?e`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?e`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};c.styles=[b,P,I];m([w({type:Array})],c.prototype,"walletImages",void 0);m([w()],c.prototype,"imageSrc",void 0);m([w()],c.prototype,"name",void 0);m([w()],c.prototype,"size",void 0);m([w()],c.prototype,"tagLabel",void 0);m([w()],c.prototype,"tagVariant",void 0);m([w()],c.prototype,"walletIcon",void 0);m([w()],c.prototype,"tabIdx",void 0);m([w({type:Boolean})],c.prototype,"disabled",void 0);m([w({type:Boolean})],c.prototype,"showAllWallets",void 0);m([w({type:Boolean})],c.prototype,"loading",void 0);m([w({type:String})],c.prototype,"loadingSpinnerColor",void 0);c=m([v("wui-list-wallet")],c);export{g as a,y as b};
