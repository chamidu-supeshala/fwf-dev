import{a as l}from"./chunk-YQTG6YKM.js";import{e as m,k as h,m as v,q as f,s as p,u}from"./chunk-LSDUHFNV.js";var x=v`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:r})=>r[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var i=function(r,t,o,s){var c=arguments.length,e=c<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,o):s,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,o,s);else for(var n=r.length-1;n>=0;n--)(d=r[n])&&(e=(c<3?d(e):c>3?d(t,o,e):d(t,o))||e);return c>3&&e&&Object.defineProperty(t,o,e),e},a=class extends h{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){let t={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${t[this.size??"xl"]});
    --local-height: var(--apkt-spacing-${t[this.size??"xl"]});
    `,m`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",m`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let t=p.generateAvatarColors(this.address);return this.style.cssText+=`
 ${t}`,null}return this.dataset.variant="default",null}};a.styles=[f,x];i([l()],a.prototype,"imageSrc",void 0);i([l()],a.prototype,"alt",void 0);i([l()],a.prototype,"address",void 0);i([l()],a.prototype,"size",void 0);a=i([u("wui-avatar")],a);
