"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[7024],{"./dist/esm/ic-tab.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab:()=>Tab});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-1500de1f.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Tab=function(){function Tab(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Tab),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.tabClick=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"tabClick",7),this.tabFocus=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"tabFocus",7),this.isInitialRender=!0,this.focusFromClick=!1,this.handleClick=function(){_this.tabClick.emit({tabId:_this.tabId,contextId:_this.contextId,position:_this.tabPosition}),_this.focusFromClick&&(_this.tabFocus.emit({tabId:_this.tabId,contextId:_this.contextId,position:_this.tabPosition}),_this.focusFromClick=!1)},this.handleFocus=function(){_this.focusFromClick||_this.tabFocus.emit({tabId:_this.tabId,contextId:_this.contextId,position:_this.tabPosition})},this.handleMouseDown=function(){_this.focusFromClick=!0},this.contextId="default",this.disabled=!1,this.selected=!1,this.tabId=void 0,this.tabPosition=void 0,this.appearance="dark"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Tab,[{key:"componentDidUpdate",value:function componentDidUpdate(){this.isInitialRender=!1}},{key:"render",value:function render(){var _class,disabled=this.disabled,selected=this.selected,appearance=this.appearance;return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.H,{class:(_class={},_class["with-transition"]=!this.isInitialRender,_class["ic-tab-light"]=appearance===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_8__.I.Light,_class),role:"tab","aria-selected":selected?"true":"false",onClick:this.handleClick,onFocus:this.handleFocus,onMouseDown:this.handleMouseDown,"aria-disabled":disabled?"true":"false",tabindex:this.selected?0:-1},this.host.querySelector('[slot="icon"]')&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",{name:"icon"}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{class:"ic-tab-label",variant:"label"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",null,(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",null))))}},{key:"host",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}]),Tab}();Tab.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{--indicator-initial-color:rgba(23 89 188 / 0%);--indicator-color:var(--ic-action-default);--focus-indicator:var(--ic-border-focus);--label-color:var(--ic-color-primary-text);--background-color-hover:var(--ic-action-default-bg-hover);--background-color-active:var(--ic-action-default-bg-active);display:flex;align-items:center;border-radius:0;color:var(--label-color);height:2.5rem;padding:0 var(--ic-space-md);cursor:pointer;position:relative;border-bottom:var(--ic-space-xxs) solid var(--indicator-initial-color);gap:var(--ic-space-xs);transition:all var(--ic-easing-transition-fast)}:host(:focus){box-shadow:var(--focus-indicator);border-radius:var(--ic-border-radius)}:host(:focus-visible){outline:var(--ic-hc-focus-outline)}:host(:hover){background-color:var(--background-color-hover)}:host(:active){background-color:var(--background-color-active)}:host(.ic-tab-light){--indicator-initial-color:rgb(255 255 255 / 0%);--indicator-color:rgb(255 255 255 / 100%);--focus-indicator:var(--ic-border-focus);--label-color:white;--background-color-hover:var(--ic-action-dark-bg-hover);--background-color-active:var(--ic-action-dark-bg-active)}:host([selected]){border-bottom:var(--ic-space-xxs) solid var(--indicator-color)}:host([disabled]){pointer-events:none;color:var(--ic-architectural-300)}:host([selected].with-transition){transition:all var(--ic-easing-transition-slow),\n    border-color var(--ic-transition-duration-slow)}.ic-tab-label{pointer-events:none}::slotted(svg){fill:currentcolor}@media (forced-colors: active){:host{border-bottom:var(--ic-space-xxs) solid canvas}:host([disabled]){color:GrayText}}'},"./dist/esm/types-dd515332.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var IcInformationStatus,IcThemeForegroundEnum;__webpack_require__.d(__webpack_exports__,{I:()=>IcThemeForegroundEnum,a:()=>IcInformationStatus}),function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={}))}}]);