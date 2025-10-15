import"./chunk-XDDWIK4Y.js";import"./chunk-CDQT25GB.js";import"./chunk-I4BARVMX.js";import"./chunk-QNVXSI5A.js";import"./chunk-V7YYLRWP.js";import"./chunk-FN34MHCV.js";import"./chunk-YIV7SWV3.js";import"./chunk-ZM5O5AWK.js";import"./chunk-62ZZMEEE.js";import"./chunk-55QJQDIL.js";import"./chunk-JEWQBEMQ.js";import{a as M,b as q}from"./chunk-GGSOECPR.js";import"./chunk-RI24VZ65.js";import"./chunk-LUW4Q4AU.js";import"./chunk-447AHIOV.js";import"./chunk-5PYGOJEJ.js";import"./chunk-MFN6PO6P.js";import{a as te}from"./chunk-6PMVZKVG.js";import{a as d,b as u}from"./chunk-YQTG6YKM.js";import{e as l,k as p,m,q as W,r as j,s as $,u as h}from"./chunk-LSDUHFNV.js";import{j as U}from"./chunk-WCPZFELE.js";import{A as Z,C as f,K as P,L as ee,Q as a,R as w,T as O,g as Q,i as C,u as v,w as X,z as B}from"./chunk-AJGGPJRP.js";import{b as J,e as H,j as G}from"./chunk-3MOYO27G.js";import"./chunk-UXCDS6QA.js";import"./chunk-7D3XAEE7.js";import"./chunk-CG2EMPLA.js";import"./chunk-CTLUDKZB.js";import"./chunk-GSTDJRCA.js";import"./chunk-YVA7YSBN.js";import"./chunk-3WGOZNFF.js";import"./chunk-QGXACWGO.js";var ie=m`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:e})=>e[5]};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: ${({tokens:e})=>e.theme.textPrimary};
    margin: 0 ${({spacing:e})=>e[2]};
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: ${({fontFamily:e})=>e.regular};
    font-style: normal;
    font-size: ${({textSize:e})=>e.large};
    font-weight: ${({fontWeight:e})=>e.regular};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    color: ${({tokens:e})=>e.theme.textSecondary};
    caret-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var I=function(e,t,r,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},A=class extends p{constructor(){super(...arguments),this.inputElementRef=M(),this.instructionElementRef=M(),this.readOnly=!1,this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=C.debounce(async t=>{if(!t.length){this.setReceiverAddress("");return}let r=w.state.activeChain;if(C.isAddress(t,r)){this.setReceiverAddress(t);return}try{let n=await P.getEnsAddress(t);if(n){a.setReceiverProfileName(t),a.setReceiverAddress(n);let i=await P.getEnsAvatar(t);a.setReceiverProfileImageUrl(i||void 0)}}catch{this.setReceiverAddress(t)}finally{a.setLoading(!1)}})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return this.readOnly?l` <wui-flex
        flexDirection="column"
        justifyContent="center"
        gap="01"
        .padding=${["8","4","5","4"]}
      >
        <textarea
          spellcheck="false"
          ?disabled=${!0}
          autocomplete="off"
          .value=${this.value??""}
        >
           ${this.value??""}</textarea
        >
      </wui-flex>`:l` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="01"
      .padding=${["8","4","5","4"]}
    >
      <wui-text
        ${q(this.instructionElementRef)}
        class="instruction"
        color="secondary"
        variant="md-medium"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral-secondary"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${q(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(t){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:t?0:1},{opacity:t?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){!this.value&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.value&&this.instructionHidden&&!this.pasting&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;let t=await navigator.clipboard.readText();a.setReceiverAddress(t),this.focusInput()}onInputChange(t){let r=t.target;this.pasting=!1,this.value=t.target?.value,r.value&&!this.instructionHidden&&this.focusInput(),a.setLoading(!0),this.onDebouncedSearch(r.value)}setReceiverAddress(t){a.setReceiverAddress(t),a.setReceiverProfileName(void 0),a.setReceiverProfileImageUrl(void 0),a.setLoading(!1)}};A.styles=ie;I([d()],A.prototype,"value",void 0);I([d({type:Boolean})],A.prototype,"readOnly",void 0);I([u()],A.prototype,"instructionHidden",void 0);I([u()],A.prototype,"pasting",void 0);A=I([h("w3m-input-address")],A);var re=m`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:e})=>e[5]};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
    transition: all ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.lg};
  }

  :host(:hover) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var D=function(e,t,r,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},S=class extends p{constructor(){super(...arguments),this.readOnly=!1,this.isInsufficientBalance=!1}render(){let t=this.readOnly||!this.token;return l` <wui-flex
      flexDirection="column"
      gap="01"
      .padding=${["5","3","4","3"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${t}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
          ?error=${!!this.isInsufficientBalance}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      ${this.bottomTemplate()}
    </wui-flex>`}buttonTemplate(){return this.token?l`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:l`<wui-button
      size="md"
      variant="neutral-secondary"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){this.readOnly||f.push("WalletSendSelectToken")}sendValueTemplate(){if(!this.readOnly&&this.token&&this.sendTokenAmount){let r=this.token.price*this.sendTokenAmount;return l`<wui-text class="totalValue" variant="sm-regular" color="secondary"
        >${r?`$${H.formatNumberToLocalString(r,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?l` <wui-text variant="sm-regular" color="secondary">
        ${$.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?l`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}bottomTemplate(){return this.readOnly?null:l`<wui-flex alignItems="center" justifyContent="space-between">
      ${this.sendValueTemplate()}
      <wui-flex alignItems="center" gap="01" justifyContent="flex-end">
        ${this.maxAmountTemplate()} ${this.actionTemplate()}
      </wui-flex>
    </wui-flex>`}onInputChange(t){a.setTokenAmount(t.detail)}onMaxClick(){if(this.token){let t=H.bigNumber(this.token.quantity.numeric);a.setTokenAmount(Number(t.toFixed(20)))}}};S.styles=re;D([d({type:Object})],S.prototype,"token",void 0);D([d({type:Boolean})],S.prototype,"readOnly",void 0);D([d({type:Number})],S.prototype,"sendTokenAmount",void 0);D([d({type:Boolean})],S.prototype,"isInsufficientBalance",void 0);S=D([h("w3m-input-token")],S);var oe=m`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[10]} !important;
    border: 4px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var k=function(e,t,r,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},x={INSUFFICIENT_FUNDS:"Insufficient Funds",INCORRECT_VALUE:"Incorrect Value",INVALID_ADDRESS:"Invalid Address",ADD_ADDRESS:"Add Address",ADD_AMOUNT:"Add Amount",SELECT_TOKEN:"Select Token",PREVIEW_SEND:"Preview Send"},g=class extends p{constructor(){super(),this.unsubscribe=[],this.isTryingToChooseDifferentWallet=!1,this.token=a.state.token,this.sendTokenAmount=a.state.sendTokenAmount,this.receiverAddress=a.state.receiverAddress,this.receiverProfileName=a.state.receiverProfileName,this.loading=a.state.loading,this.params=f.state.data?.send,this.caipAddress=w.getAccountData()?.caipAddress,this.message=x.PREVIEW_SEND,this.disconnecting=!1,this.token&&!this.params&&(this.fetchBalances(),this.fetchNetworkPrice());let t=w.subscribeKey("activeCaipAddress",r=>{!r&&this.isTryingToChooseDifferentWallet&&(this.isTryingToChooseDifferentWallet=!1,O.open({view:"Connect",data:{redirectView:"WalletSend"}}).catch(()=>null),t())});this.unsubscribe.push(w.subscribeAccountStateProp("caipAddress",r=>{this.caipAddress=r}),a.subscribe(r=>{this.token=r.token,this.sendTokenAmount=r.sendTokenAmount,this.receiverAddress=r.receiverAddress,this.receiverProfileName=r.receiverProfileName,this.loading=r.loading}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}async firstUpdated(){await this.handleSendParameters()}render(){this.getMessage();let t=!!this.params;return l` <wui-flex flexDirection="column" .padding=${["0","4","4","4"]}>
      <wui-flex class="inputContainer" gap="2" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          ?readOnly=${t}
          ?isInsufficientBalance=${this.message===x.INSUFFICIENT_FUNDS}
        ></w3m-input-token>
        <wui-icon-box size="md" variant="secondary" icon="arrowBottom"></wui-icon-box>
        <w3m-input-address
          ?readOnly=${t}
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      ${this.buttonTemplate()}
    </wui-flex>`}async fetchBalances(){await a.fetchTokenBalance(),a.fetchNetworkBalance()}async fetchNetworkPrice(){await U.getNetworkTokenPrice()}onButtonClick(){f.push("WalletSendPreview",{send:this.params})}onFundWalletClick(){f.push("FundWallet",{redirectView:"WalletSend"})}async onConnectDifferentWalletClick(){try{this.isTryingToChooseDifferentWallet=!0,this.disconnecting=!0,await P.disconnect()}finally{this.disconnecting=!1}}getMessage(){this.message=x.PREVIEW_SEND,this.receiverAddress&&!C.isAddress(this.receiverAddress,w.state.activeChain)&&(this.message=x.INVALID_ADDRESS),this.receiverAddress||(this.message=x.ADD_ADDRESS),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message=x.INSUFFICIENT_FUNDS),this.sendTokenAmount||(this.message=x.ADD_AMOUNT),this.sendTokenAmount&&this.token?.price&&(this.sendTokenAmount*this.token.price||(this.message=x.INCORRECT_VALUE)),this.token||(this.message=x.SELECT_TOKEN)}buttonTemplate(){let t=!this.message.startsWith(x.PREVIEW_SEND),r=this.message===x.INSUFFICIENT_FUNDS,o=!!this.params;return r&&!o?l`
        <wui-flex .margin=${["4","0","0","0"]} flexDirection="column" gap="4">
          <wui-button
            @click=${this.onFundWalletClick.bind(this)}
            size="lg"
            variant="accent-secondary"
            fullWidth
          >
            Fund Wallet
          </wui-button>

          <wui-separator data-testid="wui-separator" text="or"></wui-separator>

          <wui-button
            @click=${this.onConnectDifferentWalletClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
            fullWidth
            ?loading=${this.disconnecting}
          >
            Connect a different wallet
          </wui-button>
        </wui-flex>
      `:l`<wui-flex .margin=${["4","0","0","0"]}>
      <wui-button
        @click=${this.onButtonClick.bind(this)}
        ?disabled=${t}
        size="lg"
        variant="accent-primary"
        ?loading=${this.loading}
        fullWidth
      >
        ${this.message}
      </wui-button>
    </wui-flex>`}async handleSendParameters(){if(this.loading=!0,!this.params){this.loading=!1;return}let t=Number(this.params.amount);if(isNaN(t)){v.showError("Invalid amount"),this.loading=!1;return}let{namespace:r,chainId:o,assetAddress:n}=this.params;if(!Q.SEND_PARAMS_SUPPORTED_CHAINS.includes(r)){v.showError(`Chain "${r}" is not supported for send parameters`),this.loading=!1;return}let i=w.getCaipNetworkById(o,r);if(!i){v.showError(`Network with id "${o}" not found`),this.loading=!1;return}try{let{balance:s,name:c,symbol:z,decimals:Y}=await ee.fetchERC20Balance({caipAddress:this.caipAddress,assetAddress:n,caipNetwork:i});if(!c||!z||!Y||!s){v.showError("Token not found");return}a.setToken({name:c,symbol:z,chainId:i.id.toString(),address:`${i.chainNamespace}:${i.id}:${n}`,value:0,price:0,quantity:{decimals:Y.toString(),numeric:s.toString()},iconUrl:B.getTokenImage(z)??""}),a.setTokenAmount(t),a.setReceiverAddress(this.params.to)}catch(s){console.error("Failed to load token information:",s),v.showError("Failed to load token information")}finally{this.loading=!1}}};g.styles=oe;k([u()],g.prototype,"token",void 0);k([u()],g.prototype,"sendTokenAmount",void 0);k([u()],g.prototype,"receiverAddress",void 0);k([u()],g.prototype,"receiverProfileName",void 0);k([u()],g.prototype,"loading",void 0);k([u()],g.prototype,"params",void 0);k([u()],g.prototype,"caipAddress",void 0);k([u()],g.prototype,"message",void 0);k([u()],g.prototype,"disconnecting",void 0);g=k([h("w3m-wallet-send-view")],g);var ne=m`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }
`;var _=function(e,t,r,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},T=class extends p{constructor(){super(),this.unsubscribe=[],this.tokenBalances=a.state.tokenBalances,this.search="",this.onDebouncedSearch=C.debounce(t=>{this.search=t}),this.fetchBalancesAndNetworkPrice(),this.unsubscribe.push(a.subscribe(t=>{this.tokenBalances=t.tokenBalances}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}async fetchBalancesAndNetworkPrice(){(!this.tokenBalances||this.tokenBalances?.length===0)&&(await this.fetchBalances(),await this.fetchNetworkPrice())}async fetchBalances(){await a.fetchTokenBalance(),a.fetchNetworkBalance()}async fetchNetworkPrice(){await U.getNetworkTokenPrice()}templateSearchInput(){return l`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalances?.filter(t=>t.chainId===w.state.activeCaipNetwork?.caipNetworkId),this.search?this.filteredTokens=this.tokenBalances?.filter(t=>t.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,l`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(t=>l`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,t)}
                    ?clickable=${!0}
                    tokenName=${t.name}
                    tokenImageUrl=${t.iconUrl}
                    tokenAmount=${t.quantity.numeric}
                    tokenValue=${t.value}
                    tokenCurrency=${t.symbol}
                  ></wui-list-token>`):l`<wui-flex
                .padding=${["20","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                  <wui-text variant="lg-regular" align="center" color="secondary">
                    Your tokens will appear here
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){f.push("OnRampProviders")}onInputChange(t){this.onDebouncedSearch(t.detail)}handleTokenClick(t){a.setToken(t),a.setTokenAmount(void 0),f.goBack()}};T.styles=ne;_([u()],T.prototype,"tokenBalances",void 0);_([u()],T.prototype,"tokens",void 0);_([u()],T.prototype,"filteredTokens",void 0);_([u()],T.prototype,"search",void 0);T=_([h("w3m-wallet-send-select-token-view")],T);var se=m`
  :host {
    height: 32px;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[32]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[1]};
    padding-left: ${({spacing:e})=>e[2]};
  }

  wui-avatar,
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var V=function(e,t,r,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},E=class extends p{constructor(){super(...arguments),this.text=""}render(){return l`<wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.address?l`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l`<wui-icon size="lg" color="inverse" name="networkPlaceholder"></wui-icon>`}};E.styles=[W,j,se];V([d({type:String})],E.prototype,"text",void 0);V([d({type:String})],E.prototype,"address",void 0);V([d({type:String})],E.prototype,"imageSrc",void 0);E=V([h("wui-preview-item")],E);var ae=m`
  :host {
    display: flex;
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-image {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }
`;var L=function(e,t,r,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},N=class extends p{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="primary"> ${this.textTitle} </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?l` <wui-text variant="md-regular" color="secondary"> ${this.textValue} </wui-text>`:l`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};N.styles=[W,j,ae];L([d()],N.prototype,"imageSrc",void 0);L([d()],N.prototype,"textTitle",void 0);L([d()],N.prototype,"textValue",void 0);N=L([h("wui-list-content")],N);var le=m`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[5]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
  }

  wui-list-content {
    width: -webkit-fill-available !important;
  }

  wui-text {
    padding: 0 ${({spacing:e})=>e[2]};
  }

  wui-flex {
    margin-top: ${({spacing:e})=>e[2]};
  }

  .network {
    cursor: pointer;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid ${({tokens:e})=>e.core.textAccentPrimary};
    background-color: ${({tokens:e})=>e.core.glass010};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
  }

  .network:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .network:active {
    background-color: ${({tokens:e})=>e.core.glass010};
  }
`;var F=function(e,t,r,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},R=class extends p{constructor(){super(...arguments),this.params=f.state.data?.send}render(){return l` <wui-text variant="sm-regular" color="secondary">Details</wui-text>
      <wui-flex flexDirection="column" gap="1">
        <wui-list-content
          textTitle="Address"
          textValue=${$.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?l` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${te(B.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(t){t&&!this.params&&f.push("Networks",{network:t})}};R.styles=le;F([d()],R.prototype,"receiverAddress",void 0);F([d({type:Object})],R.prototype,"caipNetwork",void 0);F([u()],R.prototype,"params",void 0);R=F([h("w3m-wallet-send-details")],R);var ce=m`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[20]};
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }
`;var y=function(e,t,r,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},b=class extends p{constructor(){super(),this.unsubscribe=[],this.token=a.state.token,this.sendTokenAmount=a.state.sendTokenAmount,this.receiverAddress=a.state.receiverAddress,this.receiverProfileName=a.state.receiverProfileName,this.receiverProfileImageUrl=a.state.receiverProfileImageUrl,this.caipNetwork=w.state.activeCaipNetwork,this.loading=a.state.loading,this.params=f.state.data?.send,this.unsubscribe.push(a.subscribe(t=>{this.token=t.token,this.sendTokenAmount=t.sendTokenAmount,this.receiverAddress=t.receiverAddress,this.receiverProfileName=t.receiverProfileName,this.receiverProfileImageUrl=t.receiverProfileImageUrl,this.loading=t.loading}),w.subscribeKey("activeCaipNetwork",t=>this.caipNetwork=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l` <wui-flex flexDirection="column" .padding=${["0","4","4","4"]}>
      <wui-flex gap="2" flexDirection="column" .padding=${["0","2","0","2"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="01">
            <wui-text variant="sm-regular" color="secondary">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?$.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="default" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="sm-regular" color="secondary">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?$.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):$.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["6","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="1" .padding=${["3","0","0","0"]}>
          <wui-icon size="sm" color="default" name="warningCircle"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="3" .padding=${["4","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="accent-primary"
            .loading=${this.loading}
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(!this.params&&this.token&&this.sendTokenAmount){let r=this.token.price*this.sendTokenAmount;return l`<wui-text variant="md-regular" color="primary"
        >$${r.toFixed(2)}</wui-text
      >`}return null}async onSendClick(){if(!this.sendTokenAmount||!this.receiverAddress){v.showError("Please enter a valid amount and receiver address");return}try{await a.sendToken(),this.params?f.reset("WalletSendConfirmed"):(v.showSuccess("Transaction started"),f.replace("Account"))}catch(t){let r="Failed to send transaction. Please try again.",o=t instanceof X&&t.originalName===G.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;(w.state.activeChain===J.CHAIN.SOLANA||o)&&t instanceof Error&&(r=t.message),Z.sendEvent({type:"track",event:o?"SEND_REJECTED":"SEND_ERROR",properties:a.getSdkEventProperties(t)}),v.showError(r)}}onCancelClick(){f.goBack()}};b.styles=ce;y([u()],b.prototype,"token",void 0);y([u()],b.prototype,"sendTokenAmount",void 0);y([u()],b.prototype,"receiverAddress",void 0);y([u()],b.prototype,"receiverProfileName",void 0);y([u()],b.prototype,"receiverProfileImageUrl",void 0);y([u()],b.prototype,"caipNetwork",void 0);y([u()],b.prototype,"loading",void 0);y([u()],b.prototype,"params",void 0);b=y([h("w3m-wallet-send-preview-view")],b);var ue=m`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background-color: ${({spacing:e})=>e[16]};
    border: 8px solid ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e.round};
  }
`;var de=function(e,t,r,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},K=class extends p{constructor(){super(),this.unsubscribe=[],this.unsubscribe.push()}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="success" name="checkmark"></wui-icon>
        </wui-flex>

        <wui-text variant="h6-medium" color="primary">You successfully sent asset</wui-text>

        <wui-button
          fullWidth
          @click=${this.onCloseClick.bind(this)}
          size="lg"
          variant="neutral-secondary"
        >
          Close
        </wui-button>
      </wui-flex>
    `}onCloseClick(){O.close()}};K.styles=ue;K=de([h("w3m-send-confirmed-view")],K);export{K as W3mSendConfirmedView,T as W3mSendSelectTokenView,b as W3mWalletSendPreviewView,g as W3mWalletSendView};
