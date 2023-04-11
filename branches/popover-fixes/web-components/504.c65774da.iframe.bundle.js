/*! For license information please see 504.c65774da.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[504],{"./dist/esm/ic-search-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_search_bar:()=>SearchBar});__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.string.search.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("./dist/esm/index-90721b3c.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("./dist/esm/types-dd515332.js"),_helpers_b2b47a7d_js__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__("./dist/esm/helpers-b2b47a7d.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var inputIds=0,SearchBar=function(){function SearchBar(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,SearchBar),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.r)(this,hostRef),this.icInput=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.c)(this,"icInput",7),this.icInputBlur=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.c)(this,"icInputBlur",7),this.icInputFocus=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.c)(this,"icInputFocus",7),this.icChange=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.c)(this,"icChange",7),this.icClear=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.c)(this,"icClear",7),this.icSubmitSearch=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.c)(this,"icSubmitSearch",7),this.icOptionSelect=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.c)(this,"icOptionSelect",7),this.icMenuChange=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.c)(this,"icMenuChange",7),this.icClearBlur=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.c)(this,"icClearBlur",7),this.icSubmitSearchBlur=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.c)(this,"icSubmitSearchBlur",7),this.icSearchBarBlur=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.c)(this,"icSearchBarBlur",7),this.icSearchBarFocus=(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.c)(this,"icSearchBarFocus",7),this.inputId="ic-search-bar-input-"+inputIds++,this.menuId=this.inputId+"-menu",this.menuCloseFromMenuChangeEvent=!1,this.truncateValue=!1,this.assistiveHintEl=null,this.preventSubmit=!1,this.handleSubmitSearch=function(){_this.highlightedValue&&(_this.value=_this.highlightedValue),_this.highlightedValue=void 0,_this.icSubmitSearch.emit({value:_this.value});var form=_this.el.closest("FORM");_this.searchSubmitButton&&form&&!_this.preventSubmit&&(0,_helpers_b2b47a7d_js__WEBPACK_IMPORTED_MODULE_34__.v)(form,_this.searchSubmitButton)},this.handleSubmitSearchKeyDown=function(ev){" "===ev.key&&(ev.preventDefault(),_this.handleSubmitSearch())},this.onInput=function(ev){_this.value=ev.target.value;var noOptions=[{label:_this.emptyOptionListText,value:""}];if(_this.options.length>0&&(_this.setMenuChange(!0),!1===_this.disableFilter)){var rawFilteredOptions=(0,_helpers_b2b47a7d_js__WEBPACK_IMPORTED_MODULE_34__.w)(_this.options,!1,_this.value,"anywhere");_this.filteredOptions=rawFilteredOptions.length>0?rawFilteredOptions:noOptions}_this.showClearButton||_this.handleShowClearButton(!0),_this.debounceAriaLiveUpdate()},this.onInputBlur=function(ev){var value=ev.target.value,nextFocus=ev.relatedTarget;_this.icInputBlur.emit({value,relatedTarget:nextFocus})},this.onInputFocus=function(ev){var value=ev.target.value;_this.icInputFocus.emit({value}),_this.handleShowClearButton(!0)},this.handleClear=function(ev){var keyboardEvent=ev;"click"!==ev.type&&"Enter"!==keyboardEvent.code&&"Space"!==keyboardEvent.code||(_this.value="",_this.inputEl.value="",_this.el.setFocus(),_this.icClear.emit(),ev.preventDefault(),_this.preventSubmit=!0)},this.handleMouseDown=function(ev){ev.preventDefault()},this.handleClearBlur=function(ev){var nextFocus=ev.relatedTarget;_this.icClearBlur.emit({relatedTarget:nextFocus}),_this.clearButtonFocused=!1},this.handleSubmitSearchBlur=function(ev){var nextFocus=ev.relatedTarget;_this.icSubmitSearchBlur.emit({relatedTarget:nextFocus}),_this.searchSubmitFocused=!1},this.handleSubmitSearchFocus=function(){_this.handleMenuCloseFromMenuChange(!0),_this.searchSubmitFocused=!0},this.handleOptionSelect=function(ev){ev.detail.label!==_this.emptyOptionListText?(_this.value=ev.detail.value,_this.icOptionSelect.emit({value:_this.value})):_this.el.setFocus()},this.handleMenuOptionHighlight=function(ev){var _a,optionValue=null===(_a=ev.detail.optionId)||void 0===_a?void 0:_a.replace(_this.menuId+"-","");optionValue&&(_this.highlightedValue=optionValue),ev.detail.optionId?_this.ariaActiveDescendant=ev.detail.optionId:_this.ariaActiveDescendant=void 0},this.handleMenuChange=function(ev){_this.setMenuChange(ev.detail.open),ev.detail.open||(_this.handleMenuCloseFromMenuChange(!0),(void 0===ev.detail.focusInput||ev.detail.focusInput)&&_this.el.setFocus())},this.setMenuChange=function(open){_this.open!==open&&(_this.open=open,_this.icMenuChange.emit({open}))},this.handleHostFocus=function(){_this.options&&_this.value&&!_this.menuCloseFromMenuChangeEvent&&_this.setMenuChange(!0),_this.handleTruncateValue(!1),_this.icSearchBarFocus.emit()},this.handleHostBlur=function(ev){var nextFocus=ev.relatedTarget;_this.open&&_this.options&&nextFocus!==_this.menu&&_this.setMenuChange(!1),_this.handleShowClearButton(!1),_this.handleMenuCloseFromMenuChange(!1),_this.handleTruncateValue(!0),_this.icSearchBarBlur.emit({relatedTarget:nextFocus,value:_this.value})},this.handleShowClearButton=function(visible){_this.showClearButton=visible},this.handleFocusClearButton=function(){_this.clearButtonFocused=!0},this.handleMenuCloseFromMenuChange=function(fromEvent){_this.menuCloseFromMenuChangeEvent=fromEvent},this.handleTruncateValue=function(truncate){_this.truncateValue=truncate},this.renderAssistiveHintEl=function(){var _a,_b,input=null===(_b=null===(_a=_this.el.shadowRoot.querySelector("ic-text-field"))||void 0===_a?void 0:_a.shadowRoot)||void 0===_b?void 0:_b.querySelector("#"+_this.inputId);input&&Object.keys(input).length>0&&_this.hasOptionsOrFilterDisabled()&&(_this.assistiveHintEl=document.createElement("span"),_this.assistiveHintEl.innerText=_this.hintText,_this.assistiveHintEl.id=_this.inputId+"-assistive-hint",_this.assistiveHintEl.style.display="none",void 0!==input.after&&input.after(_this.assistiveHintEl))},this.updateSearchResultAriaLive=function(){var searchResultsStatusEl=_this.el.shadowRoot.querySelector(".search-results-status");!_this.open||""===_this.value||_this.value.length<_this.charactersUntilSuggestion?searchResultsStatusEl.innerText="":_this.hasOptionsOrFilterDisabled()&&_this.filteredOptions.length>0&&_this.open&&searchResultsStatusEl&&(_this.hadNoOptions()?searchResultsStatusEl.innerText=_this.emptyOptionListText:searchResultsStatusEl.innerText=_this.filteredOptions.length+" result"+(_this.filteredOptions.length>1?"s":"")+" available")},this.hasOptionsOrFilterDisabled=function(){return _this.options.length>0||_this.disableFilter},this.hadNoOptions=function(){return 1===_this.filteredOptions.length&&_this.filteredOptions[0].label===_this.emptyOptionListText},this.isSubmitDisabled=function(){var valueNotSet=void 0===_this.value||null===_this.value||""===_this.value,valueLengthLess=_this.value.length<_this.charactersUntilSuggestion;return valueNotSet||valueLengthLess||_this.disabled||_this.hadNoOptions()},this.highlightFirstOptionAfterNoResults=function(){_this.prevNoOption&&_this.menu&&(_this.menu.handleSetFirstOption(),_this.prevNoOption=!1),_this.filteredOptions.find((function(filteredOption){return filteredOption.label===_this.emptyOptionListText}))&&(_this.prevNoOption=!0)},this.label=void 0,this.required=!1,this.disabled=!1,this.readonly=!1,this.placeholder="Search",this.fullWidth=!1,this.disableFilter=!1,this.hideLabel=!1,this.helperText="",this.small=!1,this.value="",this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.debounce=0,this.name=this.inputId,this.spellcheck=!1,this.options=[],this.focusOnLoad=!1,this.hintText="When autocomplete results are available use the up and down arrows to choose and press enter to select",this.emptyOptionListText="No results found",this.charactersUntilSuggestion=2,this.open=!1,this.filteredOptions=[],this.ariaActiveDescendant=void 0,this.showClearButton=!1,this.clearButtonFocused=!1,this.searchSubmitFocused=!1,this.prevNoOption=!1,this.highlightedValue=void 0}var _setFocus;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(SearchBar,[{key:"watchOptionsHandler",value:function watchOptionsHandler(newOptions){if(this.disableFilter)if(newOptions.length>0)this.filteredOptions=newOptions;else{if(this.hadNoOptions())return;this.setMenuChange(!0),this.filteredOptions=[{label:this.emptyOptionListText,value:""}]}this.debounceAriaLiveUpdate()}},{key:"watchValueHandler",value:function watchValueHandler(newValue){this.inputEl&&this.options&&(0,_helpers_b2b47a7d_js__WEBPACK_IMPORTED_MODULE_34__.x)(newValue,this.options)?this.inputEl.value=(0,_helpers_b2b47a7d_js__WEBPACK_IMPORTED_MODULE_34__.x)(newValue,this.options):this.inputEl&&this.inputEl.value!==newValue&&(this.inputEl.value=newValue)}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.inputEl&&this.inputEl.setFocus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"handleKeyDown",value:function handleKeyDown(ev){var keyEv=ev.detail.event;this.menu&&this.open&&this.menu.handleKeyboardOpen(keyEv)}},{key:"handleKeyUp",value:function handleKeyUp(ev){if("Enter"===ev.key){if(this.preventSubmit||this.isSubmitDisabled())return;this.handleSubmitSearch(),this.setMenuChange(!1)}"Escape"===ev.key&&this.setMenuChange(!1),this.preventSubmit&&(this.preventSubmit=!1)}},{key:"debounceAriaLiveUpdate",value:function debounceAriaLiveUpdate(){var _this2=this;clearTimeout(this.debounceAriaLive),this.debounceAriaLive=window.setTimeout((function(){_this2.updateSearchResultAriaLive()}),500)}},{key:"componentWillRender",value:function componentWillRender(){this.highlightFirstOptionAfterNoResults()}},{key:"componentWillLoad",value:function componentWillLoad(){this.watchValueHandler(this.value)}},{key:"componentDidLoad",value:function componentDidLoad(){this.focusOnLoad&&this.el.setFocus(),this.hasOptionsOrFilterDisabled()&&(this.renderAssistiveHintEl(),this.disableFilter&&(this.filteredOptions=this.options)),(0,_helpers_b2b47a7d_js__WEBPACK_IMPORTED_MODULE_34__.a)([{prop:this.label,propName:"label"}],"Search Bar"),void 0!==this.inputEl&&(this.anchorEl=this.inputEl.shadowRoot.querySelector("ic-input-component-container"))}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.assistiveHintEl&&this.assistiveHintEl.remove()}},{key:"render",value:function render(){var _class,_class2,describedById,_this3=this,inputId=this.inputId,name=this.name,label=this.label,required=this.required,small=this.small,placeholder=this.placeholder,helperText=this.helperText,disabled=this.disabled,value=this.value,readonly=this.readonly,spellcheck=this.spellcheck,fullWidth=this.fullWidth,options=this.options,open=this.open,hideLabel=this.hideLabel,menuId=this.menuId,ariaActiveDescendant=this.ariaActiveDescendant,truncateValue=this.truncateValue,autofocus=this.autofocus,autocapitalize=this.autocapitalize,autocomplete=this.autocomplete,filteredOptions=this.filteredOptions,disabledMode=!(!readonly&&!disabled),describedBy=(0,_helpers_b2b47a7d_js__WEBPACK_IMPORTED_MODULE_34__.h)(inputId,""!==helperText,!1).trim();describedById=""!==describedBy&&this.hasOptionsOrFilterDisabled()?describedBy+" "+this.inputId+"-assistive-hint":this.hasOptionsOrFilterDisabled()?this.inputId+"-assistive-hint":""!==describedBy?describedBy:void 0;var expanded,disabledText=disabledMode&&!readonly,hasSuggestedSearch=value&&this.hasOptionsOrFilterDisabled(),menuOpen=hasSuggestedSearch&&open&&filteredOptions.length>0;return expanded=options.length>0?menuOpen?"true":"false":void 0,(0,_helpers_b2b47a7d_js__WEBPACK_IMPORTED_MODULE_34__.e)(!0,this.el,name,value,disabledMode),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.h)(_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.H,{class:(_class={},_class.search=!0,_class.fullwidth=fullWidth,_class.disabled=disabled,_class.small=small,_class),onFocus:this.handleHostFocus,onBlur:this.handleHostBlur},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.h)("ic-text-field",{ref:function ref(el){return _this3.inputEl=el},inputId,label,helperText,required,disabled:disabledText,readonly,small,hideLabel,fullWidth,name,truncateValue,value:options&&(0,_helpers_b2b47a7d_js__WEBPACK_IMPORTED_MODULE_34__.x)(value,options)?(0,_helpers_b2b47a7d_js__WEBPACK_IMPORTED_MODULE_34__.x)(value,options):value,placeholder,onInput:this.onInput,onBlur:this.onInputBlur,onFocus:this.onInputFocus,"aria-label":hideLabel?label:"","aria-describedby":describedById,"aria-owns":hasSuggestedSearch?menuId:void 0,"aria-haspopup":options.length>0?"listbox":void 0,ariaExpanded:expanded,ariaActiveDescendant,"aria-autocomplete":hasSuggestedSearch?"list":void 0,role:hasSuggestedSearch?"combobox":void 0,autocomplete,autocapitalize,autoFocus:autofocus,spellcheck,inputmode:"search",debounce:this.debounce},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.h)("div",{class:{"clear-button-container":!0,"clear-button-visible":value&&!disabledMode&&this.showClearButton},slot:"clear-button"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.h)("ic-button",{id:"clear-button",class:"clear-button","aria-label":"Clear",innerHTML:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M15.8327 5.34199L14.6577 4.16699L9.99935 8.82533L5.34102 4.16699L4.16602 5.34199L8.82435 10.0003L4.16602 14.6587L5.34102 15.8337L9.99935 11.1753L14.6577 15.8337L15.8327 14.6587L11.1743 10.0003L15.8327 5.34199Z" fill="currentColor"/>\n</svg>\n',onClick:this.handleClear,onMouseDown:this.handleMouseDown,size:small?"small":"default",onFocus:this.handleFocusClearButton,onBlur:this.handleClearBlur,onKeyDown:this.handleClear,type:"submit",variant:"icon",appearance:this.clearButtonFocused?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_33__.I.Light:_types_dd515332_js__WEBPACK_IMPORTED_MODULE_33__.I.Dark}),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.h)("div",{class:"divider"})),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.h)("div",{class:{"search-submit-button-container":!0,"search-submit-button-disabled":this.isSubmitDisabled()},slot:"search-submit-button"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.h)("ic-button",{id:"search-submit-button","aria-label":"Search",ref:function ref(el){return _this3.searchSubmitButton=el},class:(_class2={},_class2["search-submit-button"]=!0,_class2["search-submit-button-small"]=!!small,_class2),disabled:this.isSubmitDisabled(),innerHTML:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n    <path d="M13.1292 11.8792H12.4708L12.2375 11.6542C13.0542 10.7042 13.5458 9.47083 13.5458 8.12916C13.5458 5.13749 11.1208 2.71249 8.12916 2.71249C5.13749 2.71249 2.71249 5.13749 2.71249 8.12916C2.71249 11.1208 5.13749 13.5458 8.12916 13.5458C9.47083 13.5458 10.7042 13.0542 11.6542 12.2375L11.8792 12.4708V13.1292L16.0458 17.2875L17.2875 16.0458L13.1292 11.8792ZM8.12916 11.8792C6.05416 11.8792 4.37916 10.2042 4.37916 8.12916C4.37916 6.05416 6.05416 4.37916 8.12916 4.37916C10.2042 4.37916 11.8792 6.05416 11.8792 8.12916C11.8792 10.2042 10.2042 11.8792 8.12916 11.8792Z" fill="currentColor"/>\n</svg>',size:small?"small":"default",onClick:this.handleSubmitSearch,onMouseDown:this.handleMouseDown,onBlur:this.handleSubmitSearchBlur,onFocus:this.handleSubmitSearchFocus,onKeyDown:this.handleSubmitSearchKeyDown,type:"submit",variant:"icon",appearance:this.searchSubmitFocused?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_33__.I.Light:_types_dd515332_js__WEBPACK_IMPORTED_MODULE_33__.I.Default})),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.h)("div",{class:{"menu-container":!0,fullwidth:fullWidth},slot:"menu"},menuOpen&&value.length>=this.charactersUntilSuggestion&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.h)("ic-menu",{class:{"no-results":this.hadNoOptions()},activationType:"manual",anchorEl:this.anchorEl,autoFocusOnSelected:!1,inputEl:this.inputEl,inputLabel:label,ref:function ref(el){return _this3.menu=el},small,fullWidth,menuId,open:!0,options:filteredOptions,onMenuOptionSelect:this.handleOptionSelect,onMenuStateChange:this.handleMenuChange,onMenuOptionId:this.handleMenuOptionHighlight,parentEl:this.el,value}))),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.h)("div",{"aria-live":"polite",role:"status",class:"search-results-status"}))}},{key:"el",get:function get(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_32__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{options:["watchOptionsHandler"],value:["watchValueHandler"]}}}]),SearchBar}();SearchBar.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.search){--divider-height:1.5rem}:host(.search.small){--divider-height:1rem}:host(.fullwidth){width:100%}:host(.search) .disabled:hover{border-color:var(--ic-architectural-200)}:host(.search.disabled) .disabled svg{color:var(--ic-architectural-200)}:host(.search) .disabled svg{color:var(--ic-architectural-400)}.clear-button-container{align-items:center;margin-right:0.063rem;display:none;visibility:hidden}.clear-button{border-radius:var(--ic-border-radius);transition:box-shadow var(--ic-easing-transition),\n    border-radius var(--ic-easing-transition)}.clear-button:focus,.clear-button:active{background-color:var(--ic-focus-blue);box-shadow:inset 0 0 0 0.125rem var(--ic-focus-glow);border-radius:0.25rem}.clear-button:focus,.clear-button:active *{fill:white}.clear-button-visible{visibility:visible;display:flex}.search-submit-button-container{display:flex;align-items:center}.search-submit-button-disabled .ic-tooltip-container{display:none !important}.search-submit-button:focus,.search-submit-button:active{background-color:var(--ic-focus-blue) !important;box-shadow:inset 0 0 0 0.125rem var(--ic-focus-glow) !important;border-radius:var(--ic-space-xxs)}.search-submit-button:focus,.search-submit-button:active *{fill:white}.divider{width:0.063rem;background-color:var(--ic-action-dark-active);height:var(--divider-height)}:host(.dark) .divider{background-color:var(--ic-architectural-200)}.menu-container{width:var(--input-width, 20rem);position:relative;top:var(--ic-space-xxxs)}.menu-container.fullwidth{width:100%}ic-menu{transition:var(--ic-easing-transition-slow)}.no-results{cursor:not-allowed}.search-results-status{border:0;clip:rect(0, 0, 0, 0, 0);height:0.063rem;margin-bottom:-0.063rem;margin-right:-0.063rem;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:0.063rem}'}}]);