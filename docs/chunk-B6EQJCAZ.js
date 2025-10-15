import"./chunk-265ZBUN2.js";import"./chunk-M4XSFFAX.js";import"./chunk-Z2XXFZG6.js";import{a as F}from"./chunk-O63J7XX2.js";import{e as T}from"./chunk-54F7A7GG.js";import"./chunk-GECKKE5G.js";import{a as N}from"./chunk-FN34MHCV.js";import"./chunk-55QJQDIL.js";import"./chunk-JEWQBEMQ.js";import"./chunk-GGSOECPR.js";import"./chunk-RI24VZ65.js";import"./chunk-LUW4Q4AU.js";import"./chunk-447AHIOV.js";import"./chunk-5PYGOJEJ.js";import"./chunk-QEPJ3MFN.js";import"./chunk-MFN6PO6P.js";import{a as v}from"./chunk-6PMVZKVG.js";import{a as D,b as l}from"./chunk-YQTG6YKM.js";import{e as a,k as g,m as C,u as b}from"./chunk-LSDUHFNV.js";import{i as W,l as R}from"./chunk-WCPZFELE.js";import{A as p,C as h,D as P,E as $,K as S,R as c,T as _,g as k,h as I,i as m,r as U,t as u,u as w}from"./chunk-AJGGPJRP.js";import"./chunk-3MOYO27G.js";import"./chunk-UXCDS6QA.js";import"./chunk-7D3XAEE7.js";import"./chunk-CG2EMPLA.js";import"./chunk-CTLUDKZB.js";import"./chunk-GSTDJRCA.js";import"./chunk-YVA7YSBN.js";import"./chunk-3WGOZNFF.js";import"./chunk-QGXACWGO.js";var j=C`
  :host {
    margin-top: ${({spacing:t})=>t[1]};
  }
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1)
      ${({spacing:t})=>t[2]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var L=function(t,e,i,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var d=t.length-1;d>=0;d--)(s=t[d])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},x=class extends g{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=$.state.connectors,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.remoteFeatures=u.state.remoteFeatures,this.isPwaLoading=!1,this.unsubscribe.push($.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(i=>i.type==="AUTH")}),u.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.remoteFeatures?.socials||[],i=!!this.authConnector,r=e?.length,n=h.state.view==="ConnectSocials";return(!i||!r)&&!n?null:(n&&!r&&(e=k.DEFAULT_SOCIALS),a` <wui-flex flexDirection="column" gap="2">
      ${e.map(o=>a`<wui-list-social
            @click=${()=>{this.onSocialClick(o)}}
            data-testid=${`social-selector-${o}`}
            name=${o}
            logo=${o}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`)}async onSocialClick(e){e&&await N(e)}async handlePwaFrameLoad(){if(m.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof U&&await this.authConnector.provider.init()}catch(e){W.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}};x.styles=j;L([D()],x.prototype,"tabIdx",void 0);L([l()],x.prototype,"connectors",void 0);L([l()],x.prototype,"authConnector",void 0);L([l()],x.prototype,"remoteFeatures",void 0);L([l()],x.prototype,"isPwaLoading",void 0);x=L([b("w3m-social-login-list")],x);var M=C`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:t})=>t.md}
      ${({easings:t})=>t["ease-out-power-1"]};
    will-change: opacity;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var z=function(t,e,i,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var d=t.length-1;d>=0;d--)(s=t[d])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},A=class extends g{constructor(){super(),this.unsubscribe=[],this.checked=R.state.isLegalCheckboxChecked,this.unsubscribe.push(R.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:i}=u.state,r=u.state.features?.legalCheckbox,s=!!(e||i)&&!!r&&!this.checked,d=s?-1:void 0;return a`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="01"
        class=${v(s?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${v(d)}></w3m-social-login-list>
      </wui-flex>
    `}};A.styles=M;z([l()],A.prototype,"checked",void 0);A=z([b("w3m-connect-socials-view")],A);var q=C`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:t})=>t[8]};
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({easings:t})=>t["ease-out-power-2"]}
      ${({durations:t})=>t.lg};
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:t})=>t[4]};
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:t})=>t["ease-out-power-2"]} both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var E=function(t,e,i,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var d=t.length-1;d>=0;d--)(s=t[d])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},f=class extends g{constructor(){super(),this.unsubscribe=[],this.socialProvider=c.getAccountData()?.socialProvider,this.socialWindow=c.getAccountData()?.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.remoteFeatures=u.state.remoteFeatures,this.address=c.getAccountData()?.address,this.connectionsByNamespace=S.getConnections(c.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=$.getAuthConnector(),this.handleSocialConnection=async i=>{if(i.data?.resultUri)if(i.origin===F.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),c.setAccountProp("socialWindow",void 0,c.state.activeChain)),this.connecting=!0,this.updateMessage();let r=i.data.resultUri;this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await S.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:r},this.authConnector.chain),this.socialProvider&&(I.setConnectedSocialProvider(this.socialProvider),p.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(r){this.error=!0,this.updateMessage(),this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:m.parseError(r)}})}}else h.goBack(),w.showError("Untrusted Origin"),this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:"Untrusted Origin"}})},T.EmbeddedWalletAbortController.signal.addEventListener("abort",()=>{this.socialWindow&&(this.socialWindow.close(),c.setAccountProp("socialWindow",void 0,c.state.activeChain))}),this.unsubscribe.push(c.subscribeChainProp("accountState",i=>{if(i&&(this.socialProvider=i.socialProvider,i.socialWindow&&(this.socialWindow=i.socialWindow),i.address)){let r=this.remoteFeatures?.multiWallet;i.address!==this.address&&(this.hasMultipleConnections&&r?(h.replace("ProfileWallets"),w.showSuccess("New Wallet Added"),this.address=i.address):(_.state.open||u.state.enableEmbedded)&&_.close())}}),u.subscribeKey("remoteFeatures",i=>{this.remoteFeatures=i})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(i=>i()),window.removeEventListener("message",this.handleSocialConnection,!1),!c.state.activeCaipAddress&&this.socialProvider&&!this.connecting&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),this.socialWindow?.close(),c.setAccountProp("socialWindow",void 0,c.state.activeChain)}render(){return a`
      <wui-flex
        data-error=${v(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${v(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error?"error":"secondary"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){let e=P.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return a`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}connectSocial(){let e=setInterval(()=>{this.socialWindow?.closed&&(!this.connecting&&h.state.view==="ConnectingSocial"&&h.goBack(),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};f.styles=q;E([l()],f.prototype,"socialProvider",void 0);E([l()],f.prototype,"socialWindow",void 0);E([l()],f.prototype,"error",void 0);E([l()],f.prototype,"connecting",void 0);E([l()],f.prototype,"message",void 0);E([l()],f.prototype,"remoteFeatures",void 0);f=E([b("w3m-connecting-social-view")],f);var B=C`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:t})=>t[8]};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var O=function(t,e,i,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var d=t.length-1;d>=0;d--)(s=t[d])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},y=class extends g{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=c.getAccountData()?.socialProvider,this.uri=c.getAccountData()?.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=u.state.remoteFeatures,this.authConnector=$.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(c.subscribeChainProp("accountState",e=>{this.socialProvider=e?.socialProvider,this.uri=e?.farcasterUrl,this.connectFarcaster()}),u.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate),!c.state.activeCaipAddress&&this.socialProvider&&(this.uri||this.loading)&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}})}render(){return this.onRenderProxy(),a`${this.platformTemplate()}`}platformTemplate(){return m.isMobile()?a`${this.mobileTemplate()}`:a`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?a`${this.loadingTemplate()}`:a`${this.qrTemplate()}`}qrTemplate(){return a` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","5","5","5"]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return a`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["5","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return a` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["10","5","5","5"]}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){let e=P.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return a`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await this.authConnector?.provider.connectFarcaster(),this.socialProvider&&(I.setConnectedSocialProvider(this.socialProvider),p.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0;let i=S.getConnections(this.authConnector.chain).length>0;await S.connectExternal(this.authConnector,this.authConnector.chain);let r=this.remoteFeatures?.multiWallet;this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,i&&r?(h.replace("ProfileWallets"),w.showSuccess("New Wallet Added")):_.close()}catch(e){this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:m.parseError(e)}}),h.goBack(),w.showError(e)}}mobileLinkTemplate(){return a`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&m.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40;return a` <wui-qr-code
      size=${e}
      theme=${P.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${v(P.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return a`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&(m.copyToClopboard(this.uri),w.showSuccess("Link copied"))}catch{w.showError("Failed to copy")}}};y.styles=B;O([l()],y.prototype,"socialProvider",void 0);O([l()],y.prototype,"uri",void 0);O([l()],y.prototype,"ready",void 0);O([l()],y.prototype,"loading",void 0);O([l()],y.prototype,"remoteFeatures",void 0);y=O([b("w3m-connecting-farcaster-view")],y);export{A as W3mConnectSocialsView,y as W3mConnectingFarcasterView,f as W3mConnectingSocialView};
