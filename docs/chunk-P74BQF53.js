import{a as g,b as m,c as r,d as c,e as d,f as l}from"./chunk-IWINWK6D.js";import"./chunk-QGXACWGO.js";var w=Object.defineProperty,f=Object.getOwnPropertyDescriptor,a=(o,i,p,s)=>{for(var e=s>1?void 0:s?f(i,p):i,h=o.length-1,n;h>=0;h--)(n=o[h])&&(e=(s?n(i,p,e):n(e))||e);return s&&e&&w(i,p,e),e},t=class extends c{constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var o;return m`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${t.weightsMap.get((o=this.weight)!=null?o:"regular")}
    </svg>`}};t.weightsMap=new Map([["thin",r`<path d="M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"/>`],["light",r`<path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"/>`],["regular",r`<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/>`],["bold",r`<path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"/>`],["fill",r`<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"/>`],["duotone",r`<path d="M208,96l-80,80L48,96Z" opacity="0.2"/><path d="M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"/>`]]);t.styles=g`
    :host {
      display: contents;
    }
  `;a([l({type:String,reflect:!0})],t.prototype,"size",2);a([l({type:String,reflect:!0})],t.prototype,"weight",2);a([l({type:String,reflect:!0})],t.prototype,"color",2);a([l({type:Boolean,reflect:!0})],t.prototype,"mirrored",2);t=a([d("ph-caret-down")],t);export{t as PhCaretDown};
