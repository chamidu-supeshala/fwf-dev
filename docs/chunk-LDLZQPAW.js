import{a as v}from"./chunk-IVZKTSQE.js";import"./chunk-BINI3U5P.js";import"./chunk-5WTFWRCP.js";import{a as R}from"./chunk-54F7A7GG.js";import"./chunk-V7YYLRWP.js";import"./chunk-62ZZMEEE.js";import{a as V,b as D}from"./chunk-GGSOECPR.js";import"./chunk-RI24VZ65.js";import"./chunk-LUW4Q4AU.js";import"./chunk-447AHIOV.js";import"./chunk-5PYGOJEJ.js";import"./chunk-6PMVZKVG.js";import{b as d}from"./chunk-YQTG6YKM.js";import{b as A,e as u,k as E,m as S,u as m}from"./chunk-LSDUHFNV.js";import"./chunk-WCPZFELE.js";import{A as c,C as l,E as p,K as O,R as I,T as b,i as f,t as w,u as h}from"./chunk-AJGGPJRP.js";import{b as x}from"./chunk-3MOYO27G.js";import"./chunk-UXCDS6QA.js";import"./chunk-7D3XAEE7.js";import"./chunk-CG2EMPLA.js";import"./chunk-CTLUDKZB.js";import"./chunk-GSTDJRCA.js";import"./chunk-YVA7YSBN.js";import"./chunk-3WGOZNFF.js";import"./chunk-QGXACWGO.js";var L=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(i=(r<3?a(i):r>3?a(e,t,i):a(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},W=class extends v{constructor(){super(...arguments),this.onOtpSubmit=async e=>{try{if(this.authConnector){let t=I.state.activeChain,o=O.getConnections(t),r=w.state.remoteFeatures?.multiWallet,i=o.length>0;if(await this.authConnector.provider.connectOtp({otp:e}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),t)await O.connectExternal(this.authConnector,t);else throw new Error("Active chain is not set on ChainControll");if(c.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown",view:l.state.view,walletRank:void 0}}),w.state.remoteFeatures?.emailCapture)return;if(w.state.siwx){b.close();return}if(i&&r){l.replace("ProfileWallets"),h.showSuccess("New Wallet Added");return}b.close()}}catch(t){throw c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:f.parseError(t)}}),t}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};W=L([m("w3m-email-verify-otp-view")],W);var N=S`
  wui-icon-box {
    height: ${({spacing:n})=>n[16]};
    width: ${({spacing:n})=>n[16]};
  }
`;var U=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(i=(r<3?a(i):r>3?a(e,t,i):a(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},y=class extends E{constructor(){super(),this.email=l.state.data?.email,this.authConnector=p.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["6","3","6","3"]}
        gap="4"
      >
        <wui-icon-box size="xl" color="accent-primary" icon="sealCheck"></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="3">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="md-regular" color="primary">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="md-regular" color="primary"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="sm-regular" color="secondary" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="2">
            <wui-text variant="sm-regular" color="primary" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),c.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),l.replace("EmailVerifyOtp",{email:this.email})}catch{l.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),h.showSuccess("Code email resent")}}catch(e){h.showError(e)}finally{this.loading=!1}}};y.styles=N;U([d()],y.prototype,"loading",void 0);y=U([m("w3m-email-verify-device-view")],y);var P=A`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var g=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(i=(r<3?a(i):r>3?a(e,t,i):a(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},C=class extends E{constructor(){super(...arguments),this.formRef=V(),this.initialEmail=l.state.data?.email??"",this.redirectView=l.state.data?.redirectView,this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{e.key==="Enter"&&this.onSubmitEmail(e)})}render(){return u`
      <wui-flex flexDirection="column" padding="4" gap="4">
        <form ${D(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=p.getAuthConnector();if(!t)throw new Error("w3m-update-email-wallet: Auth connector not found");let o=await t.provider.updateEmail({email:this.email});c.sendEvent({type:"track",event:"EMAIL_EDIT"}),o.action==="VERIFY_SECONDARY_OTP"?l.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):l.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(t){h.showError(t),this.loading=!1}}buttonsTemplate(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?u`
      <wui-flex gap="3">
        <wui-button size="md" variant="neutral" fullWidth @click=${l.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:u`
        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};C.styles=P;g([d()],C.prototype,"email",void 0);g([d()],C.prototype,"loading",void 0);C=g([m("w3m-update-email-wallet-view")],C);var j=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(i=(r<3?a(i):r>3?a(e,t,i):a(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},T=class extends v{constructor(){super(),this.email=l.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),l.replace("UpdateEmailSecondaryOtp",l.state.data))}catch(t){throw c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:f.parseError(t)}}),t}},this.onStartOver=()=>{l.replace("UpdateEmailWallet",l.state.data)}}};T=j([m("w3m-update-email-primary-otp-view")],T);var M=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(i=(r<3?a(i):r>3?a(e,t,i):a(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},$=class extends v{constructor(){super(),this.email=l.state.data?.newEmail,this.redirectView=l.state.data?.redirectView,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&l.reset(this.redirectView))}catch(t){throw c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:f.parseError(t)}}),t}},this.onStartOver=()=>{l.replace("UpdateEmailWallet",l.state.data)}}};$=M([m("w3m-update-email-secondary-otp-view")],$);var F=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(i=(r<3?a(i):r>3?a(e,t,i):a(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},_=class extends E{constructor(){super(),this.authConnector=p.getAuthConnector(),this.isEmailEnabled=w.state.remoteFeatures?.email,this.isAuthEnabled=this.checkIfAuthEnabled(p.state.connectors),this.connectors=p.state.connectors,p.subscribeKey("connectors",e=>{this.connectors=e,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw new Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw new Error("w3m-email-login-view: No auth connector provided");return u`<wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="4">
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(e){let t=e.filter(r=>r.type===R.CONNECTOR_TYPE_AUTH).map(r=>r.chain);return x.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(r=>t.includes(r))}};F([d()],_.prototype,"connectors",void 0);_=F([m("w3m-email-login-view")],_);export{_ as W3mEmailLoginView,v as W3mEmailOtpWidget,y as W3mEmailVerifyDeviceView,W as W3mEmailVerifyOtpView,T as W3mUpdateEmailPrimaryOtpView,$ as W3mUpdateEmailSecondaryOtpView,C as W3mUpdateEmailWalletView};
