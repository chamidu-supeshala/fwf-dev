import"./chunk-3HZRSXD5.js";import"./chunk-V7YYLRWP.js";import"./chunk-55QJQDIL.js";import"./chunk-RI24VZ65.js";import"./chunk-447AHIOV.js";import"./chunk-MFN6PO6P.js";import"./chunk-6PMVZKVG.js";import"./chunk-YQTG6YKM.js";import{b as c,e as m,k as a,u as p}from"./chunk-LSDUHFNV.js";import"./chunk-WCPZFELE.js";import"./chunk-AJGGPJRP.js";import"./chunk-3MOYO27G.js";import"./chunk-UXCDS6QA.js";import"./chunk-7D3XAEE7.js";import"./chunk-CG2EMPLA.js";import"./chunk-CTLUDKZB.js";import"./chunk-GSTDJRCA.js";import"./chunk-YVA7YSBN.js";import"./chunk-3WGOZNFF.js";import"./chunk-QGXACWGO.js";var w=c`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var l=arguments.length,t=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var f=o.length-1;f>=0;f--)(n=o[f])&&(t=(l<3?n(t):l>3?n(e,i,t):n(e,i))||t);return l>3&&t&&Object.defineProperty(e,i,t),t},s=class extends a{render(){return m`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=w;s=u([p("w3m-transactions-view")],s);export{s as W3mTransactionsView};
