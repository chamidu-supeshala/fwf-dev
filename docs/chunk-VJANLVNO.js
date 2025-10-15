import"./chunk-HCXQUAPB.js";import{a as O}from"./chunk-I6TOXFBM.js";import"./chunk-5WTFWRCP.js";import"./chunk-O63J7XX2.js";import"./chunk-V7YYLRWP.js";import"./chunk-62ZZMEEE.js";import"./chunk-JEWQBEMQ.js";import{a as Y,b as K}from"./chunk-GGSOECPR.js";import"./chunk-RI24VZ65.js";import"./chunk-LUW4Q4AU.js";import"./chunk-447AHIOV.js";import"./chunk-5PYGOJEJ.js";import"./chunk-MFN6PO6P.js";import{a as F}from"./chunk-6PMVZKVG.js";import{a as c,b as f}from"./chunk-YQTG6YKM.js";import{b as N,e as l,k as m,m as h,q as $,r as I,u as d}from"./chunk-LSDUHFNV.js";import{d as b}from"./chunk-WCPZFELE.js";import{A,C as L,D,E as V,G as T,R as v,T as k,g as C,i as E,j as _,t as M,u as H}from"./chunk-AJGGPJRP.js";import{b as P,h as U,p as B}from"./chunk-3MOYO27G.js";import"./chunk-UXCDS6QA.js";import"./chunk-7D3XAEE7.js";import"./chunk-CG2EMPLA.js";import"./chunk-CTLUDKZB.js";import"./chunk-GSTDJRCA.js";import"./chunk-YVA7YSBN.js";import"./chunk-3WGOZNFF.js";import"./chunk-QGXACWGO.js";var G=N`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var q=function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},W=600,X=360,oe=64,z=class extends m{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(k.subscribeKey("open",t=>{t||this.onHideIframe()}),k.subscribeKey("shake",t=>{t?this.iframe.style.animation="w3m-shake 500ms var(--apkt-easings-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(t=>t()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";let t=this?.renderRoot?.querySelector("div");this.bodyObserver=new ResizeObserver(i=>{let n=i?.[0]?.contentBoxSize?.[0]?.inlineSize;this.iframe.style.height=`${W}px`,t.style.height=`${W}px`,M.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():n&&n<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset",this.onShowIframe()):(this.iframe.style.width=`${X}px`,this.iframe.style.left=`calc(50% - ${X/2}px)`,this.iframe.style.top=`calc(50% - ${W/2}px + ${oe/2}px)`,this.iframe.style.bottom="unset",this.onShowIframe())}),this.bodyObserver.observe(window.document.body)}render(){return l`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){let t=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=t?"w3m-iframe-zoom-in-mobile 200ms var(--apkt-easings-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--apkt-easings-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--apkt-easings-ease-out-power-2)"}async syncTheme(){let t=V.getAuthConnector();if(t){let i=D.getSnapshot().themeMode,r=D.getSnapshot().themeVariables;await t.provider.syncTheme({themeVariables:r,w3mThemeVariables:B(r,i)})}}async updateFrameSizeForEmbeddedMode(){let t=this?.renderRoot?.querySelector("div");await new Promise(r=>{setTimeout(r,300)});let i=this.getBoundingClientRect();t.style.width="100%",this.iframe.style.left=`${i.left}px`,this.iframe.style.top=`${i.top}px`,this.iframe.style.width=`${i.width}px`,this.iframe.style.height=`${i.height}px`,this.onShowIframe()}};z.styles=G;q([f()],z.prototype,"ready",void 0);z=q([d("w3m-approve-transaction-view")],z);var Q=h`
  a {
    border: none;
    border-radius: ${({borderRadius:e})=>e[20]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, box-shadow, border;
  }

  /* -- Variants --------------------------------------------------------------- */
  a[data-type='success'] {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  a[data-type='error'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  a[data-type='warning'] {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  /* -- Sizes --------------------------------------------------------------- */
  a[data-size='sm'] {
    height: 24px;
  }

  a[data-size='md'] {
    height: 28px;
  }

  a[data-size='lg'] {
    height: 32px;
  }

  a[data-size='sm'] > wui-image,
  a[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  a[data-size='md'] > wui-image,
  a[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  a[data-size='lg'] > wui-image,
  a[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    a[data-type='success']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderSuccess};
    }

    a[data-type='error']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderError};
    }

    a[data-type='warning']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderWarning};
    }
  }

  a[data-type='success']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='error']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='warning']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a:disabled {
    opacity: 0.5;
  }
`;var w=function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},re={sm:"md-regular",md:"lg-regular",lg:"lg-regular"},ne={success:"sealCheck",error:"warning",warning:"exclamationCircle"},p=class extends m{constructor(){super(...arguments),this.type="success",this.size="md",this.imageSrc=void 0,this.disabled=!1,this.href="",this.text=void 0}render(){return l`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-type=${this.type}
        data-size=${this.size}
      >
        ${this.imageTemplate()}
        <wui-text variant=${re[this.size]} color="inherit">${this.text}</wui-text>
      </a>
    `}imageTemplate(){return this.imageSrc?l`<wui-image src=${this.imageSrc} size="inherit"></wui-image>`:l`<wui-icon
      name=${ne[this.type]}
      weight="fill"
      color="inherit"
      size="inherit"
      class="image-icon"
    ></wui-icon>`}};p.styles=[$,I,Q];w([c()],p.prototype,"type",void 0);w([c()],p.prototype,"size",void 0);w([c()],p.prototype,"imageSrc",void 0);w([c({type:Boolean})],p.prototype,"disabled",void 0);w([c()],p.prototype,"href",void 0);w([c()],p.prototype,"text",void 0);p=w([d("wui-semantic-chip")],p);var se=function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},Z=class extends m{render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="5" padding="5">
        <wui-text variant="md-regular" color="primary">Follow the instructions on</wui-text>
        <wui-semantic-chip
          icon="externalLink"
          variant="fill"
          text=${C.SECURE_SITE_DASHBOARD}
          href=${C.SECURE_SITE_DASHBOARD}
          imageSrc=${C.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-semantic-chip>
        <wui-text variant="sm-regular" color="secondary">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};Z=se([d("w3m-upgrade-wallet-view")],Z);var J=h`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
  }

  .name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      cursor: pointer;
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
      border-radius: ${({borderRadius:e})=>e[6]};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  button:focus-visible:enabled {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`;var R=function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},y=class extends m{constructor(){super(...arguments),this.name="",this.registered=!1,this.loading=!1,this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled}>
        <wui-text class="name" color="primary" variant="md-regular">${this.name}</wui-text>
        ${this.templateRightContent()}
      </button>
    `}templateRightContent(){return this.loading?l`<wui-loading-spinner size="lg" color="primary"></wui-loading-spinner>`:this.registered?l`<wui-tag variant="info" size="sm">Registered</wui-tag>`:l`<wui-tag variant="success" size="sm">Available</wui-tag>`}};y.styles=[$,I,J];R([c()],y.prototype,"name",void 0);R([c({type:Boolean})],y.prototype,"registered",void 0);R([c({type:Boolean})],y.prototype,"loading",void 0);R([c({type:Boolean})],y.prototype,"disabled",void 0);y=R([d("wui-account-name-suggestion-item")],y);var ee=h`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .base-name {
    position: absolute;
    right: ${({spacing:e})=>e[4]};
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var S=function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},g=class extends m{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return l`
      <wui-input-text
        value=${F(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        icon="search"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      ></wui-input-text>
    `}};g.styles=[$,ee];S([c()],g.prototype,"errorMessage",void 0);S([c({type:Boolean})],g.prototype,"disabled",void 0);S([c()],g.prototype,"value",void 0);S([c({type:Boolean})],g.prototype,"loading",void 0);S([c({attribute:!1})],g.prototype,"onKeyDown",void 0);g=S([d("wui-ens-input")],g);var te=h`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .suggestion:hover:not(:disabled) {
    cursor: pointer;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[6]};
    padding: ${({spacing:e})=>e[4]};
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var x=function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},u=class extends m{constructor(){super(),this.formRef=Y(),this.usubscribe=[],this.name="",this.error="",this.loading=b.state.loading,this.suggestions=b.state.suggestions,this.profileName=v.getAccountData()?.profileName,this.onDebouncedNameInputChange=E.debounce(t=>{t.length<4?this.error="Name must be at least 4 characters long":O.isValidReownName(t)?(this.error="",b.getSuggestions(t)):this.error="The value is not a valid username"}),this.usubscribe.push(b.subscribe(t=>{this.suggestions=t.suggestions,this.loading=t.loading}),v.subscribeChainProp("accountState",t=>{this.profileName=t?.profileName,t?.profileName&&(this.error="You already own a name")}))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(t=>t()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["1","3","4","3"]}
      >
        <form ${K(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){let t=this.suggestions.find(r=>r.name?.split(".")?.[0]===this.name&&r.registered);if(this.loading)return l`<wui-loading-spinner
        class="input-loading-spinner"
        color="secondary"
      ></wui-loading-spinner>`;let i=`${this.name}${P.WC_NAME_SUFFIX}`;return l`
      <wui-icon-link
        ?disabled=${!!t}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${t?"default":"accent-primary"}
        @click=${()=>this.onSubmitName(i)}
      >
      </wui-icon-link>
    `}onNameInputChange(t){let i=O.validateReownName(t.detail||"");this.name=i,this.onDebouncedNameInputChange(i)}onKeyDown(t){t.key.length===1&&!O.isValidReownName(t.key)&&t.preventDefault()}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:l`<wui-flex flexDirection="column" gap="1" alignItems="center">
      ${this.suggestions.map(t=>l`<wui-account-name-suggestion-item
            name=${t.name}
            ?registered=${t.registered}
            ?loading=${this.loading}
            ?disabled=${t.registered||this.loading}
            data-testid="account-name-suggestion"
            @click=${()=>this.onSubmitName(t.name)}
          ></wui-account-name-suggestion-item>`)}
    </wui-flex>`}isAllowedToSubmit(t){let i=t.split(".")?.[0],r=this.suggestions.find(n=>n.name?.split(".")?.[0]===i&&n.registered);return!this.loading&&!this.error&&!this.profileName&&i&&b.validateName(i)&&!r}async onSubmitName(t){try{if(!this.isAllowedToSubmit(t))return;A.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:T(v.state.activeChain)===_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t}}),await b.registerName(t),A.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:T(v.state.activeChain)===_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t}})}catch(i){H.showError(i.message),A.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:T(v.state.activeChain)===_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t,error:E.parseError(i)}})}}onEnterKey(t){if(t.key==="Enter"&&this.name&&this.isAllowedToSubmit(this.name)){let i=`${this.name}${P.WC_NAME_SUFFIX}`;this.onSubmitName(i)}}};u.styles=te;x([c()],u.prototype,"errorMessage",void 0);x([f()],u.prototype,"name",void 0);x([f()],u.prototype,"error",void 0);x([f()],u.prototype,"loading",void 0);x([f()],u.prototype,"suggestions",void 0);x([f()],u.prototype,"profileName",void 0);u=x([d("w3m-register-account-name-view")],u);var ie=N`
  .continue-button-container {
    width: 100%;
  }
`;var ae=function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},j=class extends m{render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{E.openHref(U.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box size="xl" color="success" icon="checkmark"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="md-medium" color="primary">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","4","0","4"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){L.replace("Account")}};j.styles=ie;j=ae([d("w3m-register-account-name-success-view")],j);export{z as W3mApproveTransactionView,j as W3mRegisterAccountNameSuccess,u as W3mRegisterAccountNameView,Z as W3mUpgradeWalletView};
