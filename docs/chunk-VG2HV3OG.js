import"./chunk-QEPJ3MFN.js";import"./chunk-MFN6PO6P.js";import{a as I}from"./chunk-6PMVZKVG.js";import{a as x,b}from"./chunk-YQTG6YKM.js";import{e as l,k as w,m as h,q as R,r as A,s as S,u as f}from"./chunk-LSDUHFNV.js";import"./chunk-WCPZFELE.js";import{C as $,D as k,G as N,R as c,i as v,j as C,u,z as d}from"./chunk-AJGGPJRP.js";import"./chunk-3MOYO27G.js";import"./chunk-UXCDS6QA.js";import"./chunk-7D3XAEE7.js";import"./chunk-CG2EMPLA.js";import"./chunk-CTLUDKZB.js";import"./chunk-GSTDJRCA.js";import"./chunk-YVA7YSBN.js";import"./chunk-3WGOZNFF.js";import"./chunk-QGXACWGO.js";var E=h`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    border: none;
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:active:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-text {
    flex: 1;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-flex {
    width: auto;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e["01"]};
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .network-icon {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
    margin-left: -8px;
  }

  .network-icon:first-child {
    margin-left: 0px;
  }

  .network-icon:after {
    position: absolute;
    inset: 0;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }
`;var y=function(e,t,r,i){var n=arguments.length,o=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o},p=class extends w{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return l`
      <button>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
        <wui-flex>
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="inherit"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){let t=this.networkImages.slice(0,5);return l` <wui-flex class="networks">
      ${t?.map(r=>l` <wui-flex class="network-icon"> <wui-image src=${r}></wui-image> </wui-flex>`)}
    </wui-flex>`}};p.styles=[R,A,E];y([x({type:Array})],p.prototype,"networkImages",void 0);y([x()],p.prototype,"text",void 0);p=y([f("wui-compatible-network")],p);var T=h`
  wui-compatible-network {
    margin-top: ${({spacing:e})=>e[4]};
    width: 100%;
  }

  wui-qr-code {
    width: unset !important;
    height: unset !important;
  }

  wui-icon {
    align-items: normal;
  }
`;var g=function(e,t,r,i){var n=arguments.length,o=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o},m=class extends w{constructor(){super(),this.unsubscribe=[],this.address=c.getAccountData()?.address,this.profileName=c.getAccountData()?.profileName,this.network=c.state.activeCaipNetwork,this.unsubscribe.push(c.subscribeChainProp("accountState",t=>{t?(this.address=t.address,this.profileName=t.profileName):u.showError("Account not found")}),c.subscribeKey("activeCaipNetwork",t=>{t?.id&&(this.network=t)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");let t=d.getNetworkImage(this.network);return l` <wui-flex
      flexDirection="column"
      .padding=${["0","4","4","4"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${S.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${t||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["4","0","0","0"]}
        alignItems="center"
        gap="4"
      >
        <wui-qr-code
          size=${232}
          theme=${k.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${I(k.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="lg-regular" color="primary" align="center">
          Copy your address or scan this QR code
        </wui-text>
        <wui-button @click=${this.onCopyClick.bind(this)} size="sm" variant="neutral-secondary">
          <wui-icon slot="iconLeft" size="sm" color="inherit" name="copy"></wui-icon>
          <wui-text variant="md-regular" color="inherit">Copy address</wui-text>
        </wui-button>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let t=c.getAllRequestedCaipNetworks(),r=c.checkIfSmartAccountEnabled(),i=c.state.activeCaipNetwork,n=t.filter(a=>a?.chainNamespace===i?.chainNamespace);if(N(i?.chainNamespace)===C.ACCOUNT_TYPES.SMART_ACCOUNT&&r)return i?l`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[d.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;let s=(n?.filter(a=>a?.assets?.imageId)?.slice(0,5)).map(d.getNetworkImage).filter(Boolean);return l`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${s}
    ></wui-compatible-network>`}onReceiveClick(){$.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(v.copyToClopboard(this.address),u.showSuccess("Address copied"))}catch{u.showError("Failed to copy")}}};m.styles=T;g([b()],m.prototype,"address",void 0);g([b()],m.prototype,"profileName",void 0);g([b()],m.prototype,"network",void 0);m=g([f("w3m-wallet-receive-view")],m);export{m as W3mWalletReceiveView};
