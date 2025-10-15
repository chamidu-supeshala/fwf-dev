import{a as R}from"./chunk-IVZKTSQE.js";import"./chunk-5WTFWRCP.js";import"./chunk-V7YYLRWP.js";import"./chunk-5PYGOJEJ.js";import{a as b,b as c}from"./chunk-YQTG6YKM.js";import{b as w,e as s,k as x,s as O,u}from"./chunk-LSDUHFNV.js";import"./chunk-WCPZFELE.js";import{b as v}from"./chunk-GUE5GYBG.js";import{C as f,R as g,t as d,u as h}from"./chunk-AJGGPJRP.js";import{l as $,n as C}from"./chunk-3MOYO27G.js";import"./chunk-UXCDS6QA.js";import"./chunk-7D3XAEE7.js";import"./chunk-CG2EMPLA.js";import"./chunk-CTLUDKZB.js";import"./chunk-GSTDJRCA.js";import"./chunk-YVA7YSBN.js";import"./chunk-3WGOZNFF.js";import"./chunk-QGXACWGO.js";var W=w`
  .email-sufixes {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-3xs);
    overflow-x: auto;
    max-width: 100%;
    margin-top: var(--wui-spacing-s);
    margin-bottom: calc(-1 * var(--wui-spacing-m));
    padding-bottom: var(--wui-spacing-m);
    margin-left: calc(-1 * var(--wui-spacing-m));
    margin-right: calc(-1 * var(--wui-spacing-m));
    padding-left: var(--wui-spacing-m);
    padding-right: var(--wui-spacing-m);

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;var A=function(o,t,i,a){var r=arguments.length,e=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(o,t,i,a);else for(var l=o.length-1;l>=0;l--)(n=o[l])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},k=["@gmail.com","@outlook.com","@yahoo.com","@hotmail.com","@aol.com","@icloud.com","@zoho.com"],E=class extends x{constructor(){super(...arguments),this.email=""}render(){let t=k.filter(this.filter.bind(this)).map(this.item.bind(this));return t.length===0?null:s`<div class="email-sufixes">${t}</div>`}filter(t){if(!this.email)return!1;let i=this.email.split("@");if(i.length<2)return!0;let a=i.pop();return t.includes(a)&&t!==`@${a}`}item(t){return s`<wui-button variant="neutral" size="sm" @click=${()=>{let a=this.email.split("@");a.length>1&&a.pop();let r=a[0]+t;this.dispatchEvent(new CustomEvent("change",{detail:r,bubbles:!0,composed:!0}))}}
      >${t}</wui-button
    >`}};E.styles=[W];A([b()],E.prototype,"email",void 0);E=A([u("w3m-email-suffixes-widget")],E);var _=w`
  .recent-emails {
    display: flex;
    flex-direction: column;
    padding: var(--wui-spacing-s) 0;
    border-top: 1px solid var(--wui-color-gray-glass-005);
    border-bottom: 1px solid var(--wui-color-gray-glass-005);
  }

  .recent-emails-heading {
    margin-bottom: var(--wui-spacing-s);
  }

  .recent-emails-list-item {
    --wui-color-gray-glass-002: transparent;
  }
`;var D=function(o,t,i,a){var r=arguments.length,e=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(o,t,i,a);else for(var l=o.length-1;l>=0;l--)(n=o[l])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},y=class extends x{constructor(){super(...arguments),this.emails=[]}render(){return this.emails.length===0?null:s`<div class="recent-emails">
      <wui-text variant="micro-600" color="fg-200" class="recent-emails-heading"
        >Recently used emails</wui-text
      >
      ${this.emails.map(this.item.bind(this))}
    </div>`}item(t){return s`<wui-list-item
      @click=${()=>{this.dispatchEvent(new CustomEvent("select",{detail:t,bubbles:!0,composed:!0}))}}
      ?chevron=${!0}
      icon="mail"
      iconVariant="overlay"
      class="recent-emails-list-item"
    >
      <wui-text variant="paragraph-500" color="fg-100">${t}</wui-text>
    </wui-list-item>`}};y.styles=[_];D([b()],y.prototype,"emails",void 0);y=D([u("w3m-recent-emails-widget")],y);var I=function(o,t,i,a){var r=arguments.length,e=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(o,t,i,a);else for(var l=o.length-1;l>=0;l--)(n=o[l])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},S=class extends R{constructor(){super(...arguments),this.siwx=d.state.siwx,this.onOtpSubmit=async t=>{await this.siwx.confirmEmailOtp({code:t}),f.replace("SIWXSignMessage")},this.onOtpResend=async t=>{let i=g.getAccountData();if(!i?.caipAddress)throw new Error("No account data found");await this.siwx.requestEmailOtp({email:t,account:i.caipAddress})}}connectedCallback(){(!this.siwx||!(this.siwx instanceof v))&&h.showError("ReownAuthentication is not initialized."),super.connectedCallback()}shouldSubmitOnOtpChange(){return this.otp.length===R.OTP_LENGTH}};I([c()],S.prototype,"siwx",void 0);S=I([u("w3m-data-capture-otp-confirm-view")],S);var j=w`
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);

    transition-property: margin, height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    margin-top: -100px;

    &[data-state='loading'] {
      margin-top: 0px;
    }

    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 252px;
      width: 360px;
      background: radial-gradient(
        96.11% 53.95% at 50% 51.28%,
        transparent 0%,
        color-mix(in srgb, var(--wui-color-bg-100) 5%, transparent) 49%,
        color-mix(in srgb, var(--wui-color-bg-100) 65%, transparent) 99.43%
      );
    }
  }

  .hero-main-icon {
    width: 176px;
    transition-property: background-color;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      width: 56px;
    }
  }

  .hero-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
    flex-wrap: nowrap;
    min-width: fit-content;

    &:nth-child(1) {
      transform: translateX(-30px);
    }

    &:nth-child(2) {
      transform: translateX(30px);
    }

    &:nth-child(4) {
      transform: translateX(40px);
    }

    transition-property: height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    height: 68px;

    &[data-state='loading'] {
      height: 0px;
    }
  }

  .hero-row-icon {
    opacity: 0.1;
    transition-property: opacity;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      opacity: 0;
    }
  }
`;var p=function(o,t,i,a){var r=arguments.length,e=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(o,t,i,a);else for(var l=o.length-1;l>=0;l--)(n=o[l])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},m=class extends x{constructor(){super(...arguments),this.email=f.state.data?.email??g.getAccountData()?.user?.email??"",this.address=g.getAccountData()?.address??"",this.loading=!1,this.appName=d.state.metadata?.name??"AppKit",this.siwx=d.state.siwx,this.isRequired=Array.isArray(d.state.remoteFeatures?.emailCapture)&&d.state.remoteFeatures?.emailCapture.includes("required"),this.recentEmails=this.getRecentEmails()}connectedCallback(){(!this.siwx||!(this.siwx instanceof v))&&h.showError("ReownAuthentication is not initialized. Please contact support."),super.connectedCallback()}firstUpdated(){this.loading=!1,this.recentEmails=this.getRecentEmails(),this.email&&this.onSubmit()}render(){return s`
      <wui-flex flexDirection="column" .padding=${["3xs","m","m","m"]} gap="l">
        ${this.hero()} ${this.paragraph()} ${this.emailInput()} ${this.recentEmailsWidget()}
        ${this.footerActions()}
      </wui-flex>
    `}hero(){return s`
      <div class="hero" data-state=${this.loading?"loading":"default"}>
        ${this.heroRow(["id","mail","wallet","x","solana","qrCode"])}
        ${this.heroRow(["mail","farcaster","wallet","discord","mobile","qrCode"])}
        <div class="hero-row">
          ${this.heroIcon("github")} ${this.heroIcon("bank")}
          <wui-icon-box
            size="xl"
            iconSize="xxl"
            iconColor=${this.loading?"fg-100":"accent-100"}
            backgroundColor=${this.loading?"fg-100":"accent-100"}
            icon=${this.loading?"id":"user"}
            isOpaque
            class="hero-main-icon"
            data-state=${this.loading?"loading":"default"}
          >
          </wui-icon-box>
          ${this.heroIcon("id")} ${this.heroIcon("card")}
        </div>
        ${this.heroRow(["google","id","github","verify","apple","mobile"])}
      </div>
    `}heroRow(t){return s`
      <div class="hero-row" data-state=${this.loading?"loading":"default"}>
        ${t.map(this.heroIcon.bind(this))}
      </div>
    `}heroIcon(t){return s`
      <wui-icon-box
        size="xl"
        iconSize="xxl"
        iconColor="fg-100"
        backgroundColor="fg-100"
        icon=${t}
        data-state=${this.loading?"loading":"default"}
        isOpaque
        class="hero-row-icon"
      >
      </wui-icon-box>
    `}paragraph(){return this.loading?s`
        <wui-text variant="paragraph-400" color="fg-200" align="center"
          >We are verifying your account with email
          <wui-text variant="paragraph-600" color="accent-100">${this.email}</wui-text> and address
          <wui-text variant="paragraph-600" color="fg-100">
            ${O.getTruncateString({string:this.address,charsEnd:4,charsStart:4,truncate:"middle"})} </wui-text
          >, please wait a moment.</wui-text
        >
      `:this.isRequired?s`
        <wui-text variant="paragraph-600" color="fg-100" align="center">
          ${this.appName} requires your email for authentication.
        </wui-text>
      `:s`
      <wui-flex flexDirection="column" gap="xs" alignItems="center">
        <wui-text variant="paragraph-600" color="fg-100" align="center" size>
          ${this.appName} would like to collect your email.
        </wui-text>

        <wui-text variant="small-400" color="fg-200" align="center">
          Don't worry, it's optional&mdash;you can skip this step.
        </wui-text>
      </wui-flex>
    `}emailInput(){if(this.loading)return null;let t=a=>{a.key==="Enter"&&this.onSubmit()},i=a=>{this.email=a.detail};return s`
      <wui-flex flexDirection="column">
        <wui-email-input
          .value=${this.email}
          .disabled=${this.loading}
          @inputChange=${i}
          @keydown=${t}
        ></wui-email-input>

        <w3m-email-suffixes-widget
          .email=${this.email}
          @change=${i}
        ></w3m-email-suffixes-widget>
      </wui-flex>
    `}recentEmailsWidget(){if(this.recentEmails.length===0||this.loading)return null;let t=i=>{this.email=i.detail,this.onSubmit()};return s`
      <w3m-recent-emails-widget
        .emails=${this.recentEmails}
        @select=${t}
      ></w3m-recent-emails-widget>
    `}footerActions(){return s`
      <wui-flex flexDirection="row" fullWidth gap="s">
        ${this.isRequired?null:s`<wui-button
              size="lg"
              variant="neutral"
              fullWidth
              .disabled=${this.loading}
              @click=${this.onSkip.bind(this)}
              >Skip this step</wui-button
            >`}

        <wui-button
          size="lg"
          variant="main"
          type="submit"
          fullWidth
          .disabled=${!this.email||!this.isValidEmail(this.email)}
          .loading=${this.loading}
          @click=${this.onSubmit.bind(this)}
        >
          Continue
        </wui-button>
      </wui-flex>
    `}async onSubmit(){if(!(this.siwx instanceof v)){h.showError("ReownAuthentication is not initialized. Please contact support.");return}let t=g.getActiveCaipAddress();if(!t)throw new Error("Account is not connected.");if(!this.isValidEmail(this.email)){h.showError("Please provide a valid email.");return}try{this.loading=!0;let i=await this.siwx.requestEmailOtp({email:this.email,account:t});this.pushRecentEmail(this.email),i.uuid===null?f.replace("SIWXSignMessage"):f.replace("DataCaptureOtpConfirm",{email:this.email})}catch{h.showError("Failed to send email OTP"),this.loading=!1}}onSkip(){f.replace("SIWXSignMessage")}getRecentEmails(){let t=C.getItem($.RECENT_EMAILS);return(t?t.split(","):[]).filter(this.isValidEmail.bind(this)).slice(0,3)}pushRecentEmail(t){let i=this.getRecentEmails(),a=Array.from(new Set([t,...i])).slice(0,3);C.setItem($.RECENT_EMAILS,a.join(","))}isValidEmail(t){return/^\S+@\S+\.\S+$/u.test(t)}};m.styles=[j];p([c()],m.prototype,"email",void 0);p([c()],m.prototype,"address",void 0);p([c()],m.prototype,"loading",void 0);p([c()],m.prototype,"appName",void 0);p([c()],m.prototype,"siwx",void 0);p([c()],m.prototype,"isRequired",void 0);p([c()],m.prototype,"recentEmails",void 0);m=p([u("w3m-data-capture-view")],m);export{S as W3mDataCaptureOtpConfirmView,m as W3mDataCaptureView,E as W3mEmailSuffixesWidget,y as W3mRecentEmailsWidget};
