"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[1593],{"../canary-web-components/dist/esm/ic-accordion-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_accordion_group:()=>AccordionGroup});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_helpers_d41662f3_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-d41662f3.js");__webpack_require__("../canary-web-components/dist/esm/types-f605c21c.js");let accordionGroupIds=0;const AccordionGroup=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.accordionGroupId="ic-accordion-group-"+accordionGroupIds++,this.handleExpanded=()=>{this.areAllAccordionsOpen?(this.expanded=!1,this.accordions.forEach((acc=>{acc.expanded=this.expanded}))):(this.expanded=!0,this.accordions.forEach((acc=>{acc.expanded=this.expanded}))),this.setExpandedToAreAllAccordionsOpen()},this.linkAccordions=()=>{this.accordions.forEach((accordion=>{accordion.setAttribute("context-id",this.accordionGroupId)}))},this.setExpandedToAreAllAccordionsOpen=()=>{this.areAllAccordionsOpen=this.accordions.every((accordion=>!!accordion.expanded))},this.accordionOpenBtnText=()=>this.areAllAccordionsOpen?"Hide all":"See all",this.accordions=void 0,this.areAllAccordionsOpen=void 0,this.accessibleButtonLabel="accordions",this.appearance="default",this.expanded=!1,this.groupTitle="",this.singleExpansion=!1,this.size="default"}watchAppearanceHandler(){this.accordions.forEach((acc=>{acc.appearance=this.appearance}))}watchExpandedHandler(){this.handleExpanded()}componentDidLoad(){const accordionDirectChildren=this.el.children;this.accordions=Array.from(accordionDirectChildren).filter((child=>"IC-ACCORDION"===child.tagName)),this.linkAccordions(),this.accordions.forEach((acc=>{acc.appearance=this.appearance})),this.accordions.forEach((acc=>{acc.size=this.size})),this.expanded?(this.accordions.forEach((acc=>{acc.expanded=!0})),this.setExpandedToAreAllAccordionsOpen()):(this.setExpandedToAreAllAccordionsOpen(),this.expanded=this.areAllAccordionsOpen)}handleAccordionClicked(event){this.singleExpansion?this.accordions.forEach((acc=>{acc.expanded&&event.detail.id!==acc.id&&(acc.expanded=!1)})):this.setExpandedToAreAllAccordionsOpen()}async setFocus(){(this.singleExpansion?this.accordions[0]:this.allButtonEl).setFocus()}render(){const{appearance,size,groupTitle,singleExpansion,accessibleButtonLabel}=this;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{"context-id":this.accordionGroupId,class:{[`${appearance}`]:!0,[`${size}`]:!0,"accordion-group":!0}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"group-title-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"h4"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3",null,(0,_helpers_d41662f3_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"group-title")?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"group-title"}):groupTitle)),!singleExpansion&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{ref:el=>this.allButtonEl=el,appearance:"light"===appearance?"light":"default",onClick:this.handleExpanded,variant:"tertiary","aria-label":`${this.accordionOpenBtnText()} ${accessibleButtonLabel}`},this.accordionOpenBtnText())),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{appearance:["watchAppearanceHandler"],expanded:["watchExpandedHandler"]}}};AccordionGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}.group-title-container{padding:var(--ic-space-xs);display:flex;justify-content:space-between;align-items:center}:host(.small) .group-title-container{padding:var(--ic-space-xxs) var(--ic-space-xs)}:host(.large) .group-title-container{padding:var(--ic-space-sm) var(--ic-space-xs)}:host(.light){color:var(--ic-color-white-text)}:host(.accordion-group.dark) ::slotted(ic-accordion){color:var(--ic-color-white-text)}'}}]);