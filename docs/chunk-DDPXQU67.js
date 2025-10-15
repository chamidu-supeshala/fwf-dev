import{a as g,b as m,c as e,d as c,e as d,f as s}from"./chunk-IWINWK6D.js";import"./chunk-QGXACWGO.js";var w=Object.defineProperty,f=Object.getOwnPropertyDescriptor,a=(o,i,h,p)=>{for(var r=p>1?void 0:p?f(i,h):i,l=o.length-1,n;l>=0;l--)(n=o[l])&&(r=(p?n(i,h,r):n(r))||r);return p&&r&&w(i,h,r),r},t=class extends c{constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var o;return m`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${t.weightsMap.get((o=this.weight)!=null?o:"regular")}
    </svg>`}};t.weightsMap=new Map([["thin",e`<path d="M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z"/>`],["light",e`<path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"/>`],["regular",e`<path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"/>`],["bold",e`<path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"/>`],["fill",e`<path d="M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z"/>`],["duotone",e`<path d="M192,64V168L88,64Z" opacity="0.2"/><path d="M192,56H88a8,8,0,0,0-5.66,13.66L128.69,116,58.34,186.34a8,8,0,0,0,11.32,11.32L140,127.31l46.34,46.35A8,8,0,0,0,200,168V64A8,8,0,0,0,192,56Zm-8,92.69-38.34-38.34h0L107.31,72H184Z"/>`]]);t.styles=g`
    :host {
      display: contents;
    }
  `;a([s({type:String,reflect:!0})],t.prototype,"size",2);a([s({type:String,reflect:!0})],t.prototype,"weight",2);a([s({type:String,reflect:!0})],t.prototype,"color",2);a([s({type:Boolean,reflect:!0})],t.prototype,"mirrored",2);t=a([d("ph-arrow-up-right")],t);export{t as PhArrowUpRight};
