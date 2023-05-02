(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{204:function(e,t,i){"use strict";i.d(t,"a",(function(){return Z})),i.d(t,"b",(function(){return re}));i(58);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,i=null)=>{for(;t!==i;){var r=t.nextSibling;e.removeChild(t),t=r}},a=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${a}--\x3e`,s=new RegExp(`${a}|${o}`);class l{constructor(e,t){this.parts=[],this.element=t;for(var i=[],r=[],n=document.createTreeWalker(t.content,133,null,!1),o=0,l=-1,c=0,{strings:p,values:{length:m}}=e;c<m;){var f=n.nextNode();if(null!==f){if(l++,1===f.nodeType){if(f.hasAttributes()){for(var v=f.attributes,{length:_}=v,y=0,g=0;g<_;g++)u(v[g].name,"$lit$")&&y++;for(;y-- >0;){var b=p[c],w=h.exec(b)[2],x=w.toLowerCase()+"$lit$",S=f.getAttribute(x);f.removeAttribute(x);var k=S.split(s);this.parts.push({type:"attribute",index:l,name:w,strings:k}),c+=k.length-1}}"TEMPLATE"===f.tagName&&(r.push(f),n.currentNode=f.content)}else if(3===f.nodeType){var A=f.data;if(A.indexOf(a)>=0){for(var C=f.parentNode,E=A.split(s),P=E.length-1,O=0;O<P;O++){var I=void 0,T=E[O];if(""===T)I=d();else{var D=h.exec(T);null!==D&&u(D[2],"$lit$")&&(T=T.slice(0,D.index)+D[1]+D[2].slice(0,-"$lit$".length)+D[3]),I=document.createTextNode(T)}C.insertBefore(I,f),this.parts.push({type:"node",index:++l})}""===E[P]?(C.insertBefore(d(),f),i.push(f)):f.data=E[P],c+=P}}else if(8===f.nodeType)if(f.data===a){var M=f.parentNode;null!==f.previousSibling&&l!==o||(l++,M.insertBefore(d(),f)),o=l,this.parts.push({type:"node",index:l}),null===f.nextSibling?f.data="":(i.push(f),l--),c++}else for(var B=-1;-1!==(B=f.data.indexOf(a,B+1));)this.parts.push({type:"node",index:-1}),c++}else n.currentNode=r.pop()}for(var V of i)V.parentNode.removeChild(V)}}var u=(e,t)=>{var i=e.length-t.length;return i>=0&&e.slice(i)===t},c=e=>-1!==e.index,d=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,t){for(var{element:{content:i},parts:r}=e,n=document.createTreeWalker(i,133,null,!1),a=f(r),o=r[a],s=-1,l=0,u=[],c=null;n.nextNode();){s++;var d=n.currentNode;for(d.previousSibling===c&&(c=null),t.has(d)&&(u.push(d),null===c&&(c=d)),null!==c&&l++;void 0!==o&&o.index===s;)o.index=null!==c?-1:o.index-l,o=r[a=f(r,a)]}u.forEach(e=>e.parentNode.removeChild(e))}var m=e=>{for(var t=11===e.nodeType?0:1,i=document.createTreeWalker(e,133,null,!1);i.nextNode();)t++;return t},f=(e,t=-1)=>{for(var i=t+1;i<e.length;i++){var r=e[i];if(c(r))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var v=new WeakMap,_=e=>"function"==typeof e&&v.has(e),y={},g={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){var t=0;for(var i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(var r of this.__parts)void 0!==r&&r.commit()}_clone(){for(var e,t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,a=document.createTreeWalker(t,133,null,!1),o=0,s=0,l=a.nextNode();o<n.length;)if(e=n[o],c(e)){for(;s<e.index;)s++,"TEMPLATE"===l.nodeName&&(i.push(l),a.currentNode=l.content),null===(l=a.nextNode())&&(a.currentNode=i.pop(),l=a.nextNode());if("node"===e.type){var u=this.processor.handleTextExpression(this.options);u.insertAfterNode(l.previousSibling),this.__parts.push(u)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,e.name,e.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),x=` ${a} `;class S{constructor(e,t,i,r){this.strings=e,this.values=t,this.type=i,this.processor=r}getHTML(){for(var e=this.strings.length-1,t="",i=!1,r=0;r<e;r++){var n=this.strings[r],s=n.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===n.indexOf("--\x3e",s+1);var l=h.exec(n);t+=null===l?n+(i?x:o):n.substr(0,l.index)+l[1]+l[2]+"$lit$"+l[3]+a}return t+=this.strings[e]}getTemplateElement(){var e=document.createElement("template"),t=this.getHTML();return void 0!==w&&(t=w.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var k=e=>null===e||!("object"==typeof e||"function"==typeof e),A=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(var r=0;r<i.length-1;r++)this.parts[r]=this._createPart()}_createPart(){return new E(this)}_getValue(){var e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){var r=i[0].value;if("symbol"==typeof r)return String(r);if("string"==typeof r||!A(r))return r}for(var n="",a=0;a<t;a++){n+=e[a];var o=i[a];if(void 0!==o){var s=o.value;if(k(s)||!A(s))n+="string"==typeof s?s:String(s);else for(var l of s)n+="string"==typeof l?l:String(l)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class E{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||k(e)&&e===this.value||(this.value=e,_(e)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){var e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null!==this.startNode.parentNode){for(;_(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=y,e(this)}var t=this.__pendingValue;t!==y&&(k(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):A(t)?this.__commitIterable(t):t===g?(this.value=g,this.clear()):this.__commitText(t))}}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){var t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){var t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{var i=new b(t,e.processor,this.options),r=i._clone();i.update(e.values),this.__commitNode(r),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());var t,i=this.value,r=0;for(var n of e)void 0===(t=i[r])&&(t=new P(this.options),i.push(t),0===r?t.appendIntoPart(this):t.insertAfterPart(i[r-1])),t.setValue(n),t.commit(),r++;r<i.length&&(i.length=r,this.clear(t&&t.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class O{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue!==y){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=y}}}class I extends C{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends E{}var D=!1;(()=>{try{var e={get capture(){return D=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class M{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue!==y){var t=this.__pendingValue,i=this.value,r=null==t||null!=i&&(t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive),n=null!=t&&(null==i||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=B(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=y}}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}var B=e=>e&&(D?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function V(e){var t=j.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},j.set(e.type,t));var i=t.stringsArray.get(e.strings);if(void 0!==i)return i;var r=e.strings.join(a);return void 0===(i=t.keyString.get(r))&&(i=new l(e,e.getTemplateElement()),t.keyString.set(r,i)),t.stringsArray.set(e.strings,i),i}var j=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,r){var n=t[0];return"."===n?new I(e,t.slice(1),i).parts:"@"===n?[new M(e,t.slice(1),r.eventContext)]:"?"===n?[new O(e,t.slice(1),i)]:new C(e,t,i).parts}handleTextExpression(e){return new P(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var L=(e,t)=>`${e}--${t}`,F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);var z=e=>t=>{var i=L(t.type,e),r=j.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},j.set(i,r));var n=r.stringsArray.get(t.strings);if(void 0!==n)return n;var o=t.strings.join(a);if(void 0===(n=r.keyString.get(o))){var s=t.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(s,e),n=new l(t,s),r.keyString.set(o,n)}return r.stringsArray.set(t.strings,n),n},$=["html","svg"],N=new Set,H=(e,t,i)=>{N.add(e);var r=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:a}=n;if(0!==a){for(var o=document.createElement("style"),s=0;s<a;s++){var l=n[s];l.parentNode.removeChild(l),o.textContent+=l.textContent}(e=>{$.forEach(t=>{var i=j.get(L(t,e));void 0!==i&&i.keyString.forEach(e=>{var{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),p(e,i)})})})(e);var u=r.content;i?function(e,t,i=null){var{element:{content:r},parts:n}=e;if(null!=i)for(var a=document.createTreeWalker(r,133,null,!1),o=f(n),s=0,l=-1;a.nextNode();){for(l++,a.currentNode===i&&(s=m(t),i.parentNode.insertBefore(t,i));-1!==o&&n[o].index===l;){if(s>0){for(;-1!==o;)n[o].index+=s,o=f(n,o);return}o=f(n,o)}}else r.appendChild(t)}(i,o,u.firstChild):u.insertBefore(o,u.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);var c=u.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(i){u.insertBefore(o,u.firstChild);var d=new Set;d.add(o),p(i,d)}}else window.ShadyCSS.prepareTemplateStyles(r,e)};window.JSCompiler_renameProperty=(e,t)=>e;var q={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Y=(e,t)=>t!==e&&(t==t||e==e),U={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:Y};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();var e=[];return this._classProperties.forEach((t,i)=>{var r=this._attributeNameForProperty(i,t);void 0!==r&&(this._attributeToPropertyMap.set(r,i),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=U){if(this._ensureClassProperties(),this._classProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var i="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){var n=this[e];this[t]=r,this.requestUpdateInternal(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||U}static finalize(){var e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t=this.properties,i=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(var r of i)this.createProperty(r,t[r])}}static _attributeNameForProperty(e,t){var i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=Y){return i(e,t)}static _propertyValueFromAttribute(e,t){var i=t.type,r=t.converter||q,n="function"==typeof r?r:r.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0!==t.reflect){var i=t.type,r=t.converter;return(r&&r.toAttribute||q.toAttribute)(e,i)}}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){var i=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,i)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=U){var r=this.constructor,n=r._attributeNameForProperty(e,i);if(void 0!==n){var a=r._propertyValueToAttribute(t,i);if(void 0===a)return;this._updateState=8|this._updateState,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(!(8&this._updateState)){var i=this.constructor,r=i._attributeToPropertyMap.get(e);if(void 0!==r){var n=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(t,n),this._updateState=-17&this._updateState}}}requestUpdateInternal(e,t,i){var r=!0;if(void 0!==e){var n=this.constructor;i=i||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}var e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(this._hasRequestedUpdate){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;var K=Element.prototype;K.msMatchesSelector||K.webkitMatchesSelector;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(e,t){if(t!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}var Z=(e,...t)=>{var i=t.reduce((t,i,r)=>t+(e=>{if(e instanceof X)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[r+1],e[0]);return new X(i,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");var J={};class ee extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){var e=this.getStyles();if(Array.isArray(e)){var t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),r=[];i.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!G){var t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new X(String(t),Q)}return e})}}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){var t=this.render();super.update(e),t!==J&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{var t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return J}}ee.finalized=!0,ee.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");var r=i.scopeName,a=R.has(t),o=F&&11===t.nodeType&&!!t.host,s=o&&!N.has(r),l=s?document.createDocumentFragment():t;if(((e,t,i)=>{var r=R.get(t);void 0===r&&(n(t,t.firstChild),R.set(t,r=new P(Object.assign({templateFactory:V},i))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:z(r)},i)),s){var u=R.get(l);R.delete(l);var c=u.value instanceof b?u.value.template:void 0;H(r,l,c),n(t,t.firstChild),t.appendChild(l),R.set(t,u)}!a&&o&&window.ShadyCSS.styleElement(t.host)},ee.shadowRootOptions={mode:"open"};var te=0,ie={},re=(e,t,i)=>{var r=i&&i.moduleId||"custom-style-module-"+te++;Array.isArray(t)||(t=t?[t]:[]),t.forEach(e=>{if(!(e instanceof X))throw new Error("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.");if(!ie[e]){var t=document.createElement("dom-module");t.innerHTML=`\n        <template>\n          <style>${e.toString()}</style>\n        </template>\n      `;var i="custom-style-module-"+te++;t.register(i),ie[e]=i}});var n=document.createElement("dom-module");if(e){var a=window.customElements&&window.customElements.get(e);a&&a.hasOwnProperty("__finalized")&&console.warn(`The custom element definition for "${e}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`),n.setAttribute("theme-for",e)}var o=i&&i.include||[];n.innerHTML=`\n    <template>\n      ${o.map(e=>`<style include=${e}></style>`)}\n      ${t.map(e=>`<style include=${ie[e]}></style>`)}\n    </template>\n  `,n.register(r)}},206:function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));i(40);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var r={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},n={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},a={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},o=/[a-z0-9*]/,s=/U\+/,l=/^arrow/,u=/^space(bar)?/,c=/^escape$/;function d(e,t){var i="";if(e){var r=e.toLowerCase();" "===r||u.test(r)?i="space":c.test(r)?i="esc":1==r.length?t&&!o.test(r)||(i=r):i=l.test(r)?r.replace("arrow",""):"multiply"==r?"*":r}return i}function h(e,t){return e.key?d(e.key,t):e.detail&&e.detail.key?d(e.detail.key,t):(i=e.keyIdentifier,a="",i&&(i in r?a=r[i]:s.test(i)?(i=parseInt(i.replace("U+","0x"),16),a=String.fromCharCode(i).toLowerCase()):a=i.toLowerCase()),a||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):n[e]),t}(e.keyCode)||"");var i,a}function p(e,t){return h(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function m(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var i=t.split(":"),r=i[0],n=i[1];return r in a?(e[a[r]]=!0,e.hasModifiers=!0):(e.key=r,e.event=n||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}var f={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var i=m(t),r=0;r<i.length;++r)if(p(i[r],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var i=e[0].hasModifiers;return i===t[0].hasModifiers?0:i?-1:1}))},_addKeyBinding:function(e,t){m(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],i=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,i]),this.keyEventTarget.addEventListener(e,i)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,i,r;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],i=e[1],r=e[2],t.removeEventListener(i,r)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var i=0;i<e.length;i++){var r=e[i][0],n=e[i][1];if(p(r,t)&&(this._triggerKeyHandler(r,n,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,i){var r=Object.create(e);r.keyboardEvent=i;var n=new CustomEvent(e.event,{detail:r,cancelable:!0});this[t].call(this,n),n.defaultPrevented&&i.preventDefault()}}},208:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var r=class{toString(){return""}}},209:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(40);var r=i(75),n=i(6),a=Object(r.a)({_template:n.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){a.instance||(a.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),100)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});a.instance=null,a.requestAvailability=function(){a.instance||(a.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(a.instance)}},210:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var r=class{static _getISOWeekNumber(e){var t=e.getDay();0===t&&(t=7);var i=4-t,r=new Date(e.getTime()+24*i*3600*1e3),n=new Date(0,0);n.setFullYear(r.getFullYear());var a=r.getTime()-n.getTime(),o=Math.round(a/864e5);return Math.floor(o/7+1)}static _dateEquals(e,t){return e instanceof Date&&t instanceof Date&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}static _dateAllowed(e,t,i){return(!t||e>=t)&&(!i||e<=i)}static _getClosestDate(e,t){return t.filter(e=>void 0!==e).reduce((t,i)=>i?t?Math.abs(e.getTime()-i.getTime())<Math.abs(t.getTime()-e.getTime())?i:t:i:t)}static _extractDateParts(e){return{day:e.getDate(),month:e.getMonth(),year:e.getFullYear()}}}},214:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));
/**
@license
Vaadin Login
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var r=e=>class extends e{static get properties(){return{action:{type:String,value:null,notify:!0},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1,notify:!0},i18n:{type:Object,value:function(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again."}}},notify:!0},_preventAutoEnable:{type:Boolean,value:!1}}}_retargetEvent(e){e.stopPropagation();var{detail:t,composed:i,cancelable:r,bubbles:n}=e;this.dispatchEvent(new CustomEvent(e.type,{bubbles:n,cancelable:r,composed:i,detail:t}))||e.preventDefault()}}},216:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i(9),n=i(19),a=i(21),o=(i(63),document.createElement("template"));o.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-avatar-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(o.content);var s=i(6),l=!1;
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/window.addEventListener("keydown",e=>{l=9===e.keyCode},!0),window.addEventListener("mousedown",()=>{l=!1},!0);class u extends(Object(a.a)(Object(n.a)(r.a))){static get template(){return s.a`
    <style>
      :host {
        display: inline-block;
        flex: none;
        border-radius: 50%;
        overflow: hidden;
        height: var(--vaadin-avatar-size);
        width: var(--vaadin-avatar-size);
        border: var(--vaadin-avatar-outline-width) solid transparent;
        margin: calc(var(--vaadin-avatar-outline-width) * -1);
        background-clip: content-box;
        --vaadin-avatar-outline-width: 2px;
        --vaadin-avatar-size: 64px;
      }

      img {
        height: 100%;
        width: 100%;
      }

      [part="icon"] {
        font-size: 5.6em;
      }

      [part="abbr"] {
        font-size: 2.2em;
      }

      [part="icon"] > text {
        font-family: 'vaadin-avatar-icons';
      }

      :host([hidden]) {
        display: none !important;
      }

      svg[hidden] {
        display: none !important;
      }

      :host([has-color-index]) {
        position: relative;
        background-color: var(--vaadin-avatar-user-color);
      }

      :host([has-color-index])::before {
        position: absolute;
        z-index: 1;
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
      }
    </style>
    <img hidden\$="[[!__imgVisible]]" src\$="[[img]]" aria-hidden="true">
    <svg part="icon" hidden\$="[[!__iconVisible]]" id="avatar-icon" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <text dy=".35em" text-anchor="middle"></text>
    </svg>
    <svg part="abbr" hidden\$="[[!__abbrVisible]]" id="avatar-abbr" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <text dy=".35em" text-anchor="middle">[[abbr]]</text>
    </svg>
`}static get is(){return"vaadin-avatar"}static get version(){return"1.0.4"}static get properties(){return{img:{type:String,reflectToAttribute:!0},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n.*)"]}ready(){super.ready(),this.__updateVisibility(),this.name||this.abbr||this.__setTitle(this.name),this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("focusin",()=>{this.__setFocused(!0)}),this.addEventListener("focusout",()=>{this.__setFocused(!1)})}__setFocused(e){e?(this.setAttribute("focused",""),l&&this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"))}__colorIndexChanged(e){if(null!=e){var t="--vaadin-user-color-"+e,i=window.ShadyCSS&&!window.ShadyCSS.nativeCss;if(Boolean(i?window.ShadyCSS.getComputedStyleValue(document.documentElement,t):getComputedStyle(document.documentElement).getPropertyValue(t))){var r=`var(${t})`;this.setAttribute("has-color-index",""),i?window.ShadyCSS.styleSubtree(this,{"--vaadin-avatar-user-color":r}):this.style.setProperty("--vaadin-avatar-user-color",r)}else this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${e} is not defined`)}else this.removeAttribute("has-color-index")}__imgOrAbbrOrNameChanged(e,t,i){this.__updateVisibility(),t&&t!==this.__generatedAbbr?this.__setTitle(i?`${i} (${t})`:t):(this.abbr=i?this.__generatedAbbr=i.split(" ").map(e=>e.charAt(0)).join(""):void 0,this.__setTitle(i))}__i18nChanged(e){e.base&&e.base.anonymous&&(this.__oldAnonymous&&this.getAttribute("title")===this.__oldAnonymous&&this.__setTitle(),this.__oldAnonymous=e.base.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img,this.__abbrVisible=!this.img&&!!this.abbr,this.__iconVisible=!this.img&&!this.abbr}__setTitle(e){e?this.setAttribute("title",e):this.setAttribute("title",this.i18n.anonymous)}}customElements.define(u.is,u)},218:function(e,t,i){"use strict";i(40),i(206);var r=i(73),n=i(156),a=i(176),o=i(75),s=i(44),l=i(175),u=i(11),c=i(15),d=i(42),h=i(6),p=i(17),m=(i(54),navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)),f=m&&m[1]>=8;Object(o.a)({_template:h.a`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[l.a,r.a,n.a,a.a],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _itemsParent(){return Object(s.a)(Object(s.a)(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var e=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,e-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this.grid&&(e-=e%this._itemsPerRow),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this.grid&&(e-=e%this._itemsPerRow),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var e=this._firstVisibleIndexVal;if(null==e){var t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,i){return(t+=this._getPhysicalSizeIncrement(e))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){var e=this._lastVisibleIndexVal;if(null==e){if(this.grid)e=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems((function(i,r){t<this._scrollBottom&&(e=r),t+=this._getPhysicalSizeIncrement(i)}))}this._lastVisibleIndexVal=e}return e},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,u.a),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(e){this.style.webkitOverflowScrolling=e===this?"touch":"",this.style.overflowY=e===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,u.a)},updateViewportBoundaries:function(){var e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=e-this._scrollPosition,i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var r=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+r,this._physicalStart=this._physicalStart+r,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var n=this._getReusables(i);i?(this._physicalTop=n.physicalTop,this._virtualStart=this._virtualStart+n.indexes.length,this._physicalStart=this._physicalStart+n.indexes.length):(this._virtualStart=this._virtualStart-n.indexes.length,this._physicalStart=this._physicalStart-n.indexes.length),this._update(n.indexes,i?null:n.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),u.c)}},_getReusables:function(e){var t,i,r,n=[],a=this._hiddenContentSize*this._ratio,o=this._virtualStart,s=this._virtualEnd,l=this._physicalCount,u=this._physicalTop+this._scrollOffset,c=this._physicalBottom+this._scrollOffset,d=this._scrollPosition,h=this._scrollBottom;for(e?(t=this._physicalStart,this._physicalEnd,i=d-u):(t=this._physicalEnd,this._physicalStart,i=c-h);i-=r=this._getPhysicalSizeIncrement(t),!(n.length>=l||i<=a);)if(e){if(s+n.length+1>=this._virtualCount)break;if(u+r>=d-this._scrollOffset)break;n.push(t),u+=r,t=(t+1)%l}else{if(o-n.length<=0)break;if(u+this._physicalSize-r<=h)break;n.push(t),u-=r,t=0===t?l-1:t-1}return{indexes:n,physicalTop:u-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){var i=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(e){var t,i;this._ensureTemplatized();var r=new Array(e);for(t=0;t<e;t++)i=this.stamp(null),r[t]=i.root.querySelector("*"),this._itemsParent.appendChild(i.root);return r},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){var t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart);if(t=this._convertIndexToCompleteRow(t),this.grid){var i=t%this._itemsPerRow;i&&t-i<=this._physicalCount&&(t+=this._itemsPerRow),t-=i}var r=t-this._physicalCount,n=Math.round(.5*this._physicalCount);if(!(r<0)){if(r>0){var a=window.performance.now();[].push.apply(this._physicalItems,this._createPool(r));for(var o=0;o<r;o++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+r,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+r),this._update(),this._templateCost=(window.performance.now()-a)/r,n=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===n||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,n)),u.b):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,n),u.c))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart=this._virtualStart+e.indexes.length,this._physicalStart=this._physicalStart+e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var e={__key__:!0};e[this.as]=!0,e[this.indexAs]=!0,e[this.selectedAs]=!0,e.tabIndex=!0,this._instanceProps=e,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(e,t){void 0!==t&&(this.notifyResize(),Object(d.b)(),e&&this._updateGridMetrics())},_itemsChanged:function(e){if("items"===e.path)this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,u.a);else if("items.splices"===e.path){if(this._adjustVirtualIndex(e.value.indexSplices),this._virtualCount=this.items?this.items.length:0,e.value.indexSplices.some((function(e){return e.addedCount>0||e.removed.length>0}))){var t=this._getActiveElement();this.contains(t)&&t.blur()}var i=e.value.indexSplices.some((function(e){return e.index+e.addedCount>=this._virtualStart&&e.index<=this._virtualEnd}),this);this._isClientFull()&&!i||this._debounce("_render",this._render,u.a)}else"items.length"!==e.path&&this._forwardItemPath(e.path,e.value)},_forwardItemPath:function(e,t){var i,r,n,a=(e=e.slice(6)).indexOf(".");-1===a&&(a=e.length);var o=this.modelForElement(this._offscreenFocusedItem),s=parseInt(e.substring(0,a),10);(i=this._isIndexRendered(s))?(r=this._getPhysicalIndex(s),n=this.modelForElement(this._physicalItems[r])):o&&(n=o),n&&n[this.indexAs]===s&&(e=e.substring(a+1),e=this.as+(e?"."+e:""),n._setPendingPropertyOrPath(e,t,!1,!0),n._flushProperties&&n._flushProperties(),i&&(this._updateMetrics([r]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(e){e.forEach((function(e){if(e.removed.forEach(this._removeItem,this),e.index<this._virtualStart){var t=Math.max(e.addedCount-e.removed.length,e.index-this._virtualStart);this._virtualStart=this._virtualStart+t,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+t)}}),this)},_removeItem:function(e){this.$.selector.deselect(e),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===e&&this._removeFocusedItem()},_iterateItems:function(e,t){var i,r,n,a;if(2===arguments.length&&t){for(a=0;a<t.length;a++)if(i=t[a],r=this._computeVidx(i),null!=(n=e.call(this,i,r)))return n}else{for(i=this._physicalStart,r=this._virtualStart;i<this._physicalCount;i++,r++)if(null!=(n=e.call(this,i,r)))return n;for(i=0;i<this._physicalStart;i++,r++)if(null!=(n=e.call(this,i,r)))return n}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_assignModels:function(e){this._iterateItems((function(e,t){var i=this._physicalItems[e],r=this.items&&this.items[t];if(null!=r){var n=this.modelForElement(i);n.__key__=null,this._forwardProperty(n,this.as,r),this._forwardProperty(n,this.selectedAs,this.$.selector.isSelected(r)),this._forwardProperty(n,this.indexAs,t),this._forwardProperty(n,"tabIndex",this._focusedVirtualIndex===t?0:-1),this._physicalIndexForKey[n.__key__]=e,n._flushProperties&&n._flushProperties(!0),i.removeAttribute("hidden")}else i.setAttribute("hidden","")}),e)},_updateMetrics:function(e){Object(d.b)();var t=0,i=0,r=this._physicalAverageCount,n=this._physicalAverage;this._iterateItems((function(e,r){i+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-i,this._itemsPerRow=1),this._physicalAverageCount!==r&&(this._physicalAverage=Math.round((n*r+t)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var e=this._physicalTop;if(this.grid){var t=this._itemsPerRow*this._itemWidth,i=(this._viewportWidth-t)/2;this._iterateItems((function(t,r){var n=r%this._itemsPerRow,a=Math.floor(n*this._itemWidth+i);this._isRTL&&(a*=-1),this.translate3d(a+"px",e+"px",0,this._physicalItems[t]),this._shouldRenderNextRow(r)&&(e+=this._rowHeight)}))}else{var r=[];this._iterateItems((function(t,i){var n=this._physicalItems[t];this.translate3d(0,e+"px",0,n),e+=this._physicalSizes[t];var a=n.id;a&&r.push(a)})),r.length&&this.setAttribute("aria-owns",r.join(" "))}},_getPhysicalSizeIncrement:function(e){return this.grid?this._computeVidx(e)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[e]},_shouldRenderNextRow:function(e){return e%this._itemsPerRow==this._itemsPerRow-1},_adjustScrollPosition:function(){var e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;var t=this._scrollPosition;!f&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(e){return this.scrollToIndex(this.items.indexOf(e))},scrollToIndex:function(e){if(!("number"!=typeof e||e<0||e>this.items.length-1)&&(Object(d.b)(),0!==this._physicalCount)){e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=this.grid?e-2*this._itemsPerRow:e-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,i=this._virtualStart,r=0,n=this._hiddenContentSize;i<e&&r<=n;)r+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+r),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),u.a)},selectItem:function(e){return this.selectIndex(this.items.indexOf(e))},selectIndex:function(e){if(!(e<0||e>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(e)){var t=this.modelForElement(this._physicalItems[this._getPhysicalIndex(e)]);t&&(t[this.selectedAs]=!0),this.updateSizeForIndex(e)}this.$.selector.selectIndex(e)}},deselectItem:function(e){return this.deselectIndex(this.items.indexOf(e))},deselectIndex:function(e){if(!(e<0||e>=this._virtualCount)){if(this._isIndexRendered(e))this.modelForElement(this._physicalItems[this._getPhysicalIndex(e)])[this.selectedAs]=!1,this.updateSizeForIndex(e);this.$.selector.deselectIndex(e)}},toggleSelectionForItem:function(e){return this.toggleSelectionForIndex(this.items.indexOf(e))},toggleSelectionForIndex:function(e){(this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(e):this.$.selector.isSelected(this.items[e]))?this.deselectIndex(e):this.selectIndex(e)},clearSelection:function(){this._iterateItems((function(e,t){this.modelForElement(this._physicalItems[e])[this.selectedAs]=!1})),this.$.selector.clearSelection()},_selectionEnabledChanged:function(e){(e?this.listen:this.unlisten).call(this,this,"tap","_selectionHandler")},_selectionHandler:function(e){var t=this.modelForElement(e.target);if(t){var i,r,n=Object(s.a)(e).path[0],a=this._getActiveElement(),o=this._physicalItems[this._getPhysicalIndex(t[this.indexAs])];"input"!==n.localName&&"button"!==n.localName&&"select"!==n.localName&&(i=t.tabIndex,t.tabIndex=-100,r=a?a.tabIndex:-1,t.tabIndex=i,a&&o!==a&&o.contains(a)&&-100!==r||this.toggleSelectionForItem(t[this.as]))}},_multiSelectionChanged:function(e){this.clearSelection(),this.$.selector.multi=e},updateSizeForItem:function(e){return this.updateSizeForIndex(this.items.indexOf(e))},updateSizeForIndex:function(e){return this._isIndexRendered(e)?(this._updateMetrics([this._getPhysicalIndex(e)]),this._positionItems(),null):null},_manageFocus:function(){var e=this._focusedVirtualIndex;e>=0&&e<this._virtualCount?this._isIndexRendered(e)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(e){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(e/this._itemsPerRow)*this._itemsPerRow:e},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_isIndexVisible:function(e){return e>=this.firstVisibleIndex&&e<=this.lastVisibleIndex},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},focusItem:function(e){this._focusPhysicalItem(e)},_focusPhysicalItem:function(e){if(!(e<0||e>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(e)||this.scrollToIndex(e);var t,i=this._physicalItems[this._getPhysicalIndex(e)],r=this.modelForElement(i);r.tabIndex=-100,-100===i.tabIndex&&(t=i),t||(t=Object(s.a)(i).querySelector('[tabindex="-100"]')),r.tabIndex=0,this._focusedVirtualIndex=e,t&&t.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var e=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var t=this.stamp(null);this._focusBackfillItem=t.root.querySelector("*"),this._itemsParent.appendChild(t.root)}this._offscreenFocusedItem=this._physicalItems[e],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[e]=this._focusBackfillItem,this._focusedPhysicalIndex=e,this.translate3d(0,"-10000px",0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(this._offscreenFocusedItem&&!(this._focusedVirtualIndex<0)){this._assignModels();var e=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),t=this._physicalItems[e];if(t){var i=this.modelForElement(t),r=this.modelForElement(this._offscreenFocusedItem);i[this.as]===r[this.as]?(this._focusBackfillItem=t,i.tabIndex=-1,this._physicalItems[e]=this._offscreenFocusedItem,this.translate3d(0,"-10000px",0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(e){var t=this.modelForElement(e.target),i=this.modelForElement(this._focusedItem),r=null!==this._offscreenFocusedItem,n=this._focusedVirtualIndex;t&&(i===t?this._isIndexVisible(n)||this.scrollToIndex(n):(this._restoreFocusedItem(),i&&(i.tabIndex=-1),t.tabIndex=0,n=t[this.indexAs],this._focusedVirtualIndex=n,this._focusedPhysicalIndex=this._getPhysicalIndex(n),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],r&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(e){switch(e.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&e.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&e.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(e)}},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_debounce:function(e,t,i){this._debouncers=this._debouncers||{},this._debouncers[e]=c.a.debounce(this._debouncers[e],i,t.bind(this)),Object(d.a)(this._debouncers[e])},_forwardProperty:function(e,t,i){e._setPendingProperty(t,i)},_forwardHostPropV2:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&this.modelForElement(i).forwardHostProp(e,t)}),this)},_notifyInstancePropV2:function(e,t,i){if(Object(p.e)(this.as,t)){var r=e[this.indexAs];t==this.as&&(this.items[r]=i),this.notifyPath(Object(p.i)(this.as,"items."+r,t),i)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(e,t,i){0===t.indexOf(this.as+".")&&this.notifyPath("items."+e.__key__+"."+t.slice(this.as.length+1),i)},_forwardParentPath:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&this.modelForElement(i).notifyPath(e,t)}),this)},_forwardParentProp:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&(this.modelForElement(i)[e]=t)}),this)},_getActiveElement:function(){var e=this._itemsParent.node.domHost;return Object(s.a)(e?e.root:document).activeElement}})},219:function(e,t){var i;i=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Combo Box","vaadin-combo-box-flow")},window.Vaadin.Flow.Legacy=window.Vaadin.Flow.Legacy||{},window.Vaadin.Flow.comboBoxConnector={initLazy:e=>i((function(e){if(!e.$connector){if(window.Polymer)window.Vaadin.Flow.Legacy.Debouncer=window.Vaadin.Flow.Legacy.Debouncer||Polymer.Debouncer,window.Vaadin.Flow.Legacy.timeOut=window.Vaadin.Flow.Legacy.timeOut||Polymer.Async.timeOut;else if(!window.Vaadin.Flow.Legacy.Debouncer)return void console.log("ComboBox is unable to load Polymer helpers.");var t=window.Vaadin.Flow.Legacy.Debouncer,r=window.Vaadin.Flow.Legacy.timeOut;e.$connector={};var n,a,o={},s={},l="",u=new Vaadin.ComboBoxPlaceholder,c=Math.max(2*e.pageSize,500),d=(n="",a=!1,{needsDataCommunicatorReset:()=>a=!0,getLastFilterSentToServer:()=>n,requestData:(t,i,r)=>{var o=i-t,s=r.filter;e.$server.setRequestedRange(t,o,s),n=s,a&&(e.$server.resetDataCommunicator(),a=!1)}}),h=(t=Object.keys(o))=>{t.forEach(t=>{o[t]([],e.size),delete o[t];for(var i=parseInt(t)*e.pageSize,r=i+e.pageSize,n=Math.min(r,e.filteredItems.length),a=i;a<n;a++)e.filteredItems[a]=u})};e.dataProvider=function(i,n){if(i.pageSize!=e.pageSize)throw"Invalid pageSize";if(e._clientSideFilter){if(s[0])return void y(s[0],n);i.filter=""}if(i.filter!==l)return s={},l=i.filter,void(this._debouncer=t.debounce(this._debouncer,r.after(500),()=>{if(d.getLastFilterSentToServer()===i.filter&&d.needsDataCommunicatorReset(),i.filter!==l)throw new Error("Expected params.filter to be '"+l+"' but was '"+i.filter+"'");h(),e.dataProvider(i,n)}));if(s[i.page])_(i.page,n);else{o[i.page]=n;var a=Object.keys(o).map(e=>parseInt(e)),u=Math.min(...a),p=Math.max(...a);if(a.length*i.pageSize>c)i.page===u?h([String(p)]):h([String(u)]),e.dataProvider(i,n);else if(p-u+1!==a.length)h();else{var m=i.pageSize*u,f=i.pageSize*(p+1);this._debouncer&&this._debouncer.isActive()?this._debouncer=t.debounce(this._debouncer,r.after(200),()=>d.requestData(m,f,i)):d.requestData(m,f,i)}}},e.$connector.clear=i((t,i)=>{for(var r=Math.floor(t/e.pageSize),n=Math.ceil(i/e.pageSize),a=r;a<r+n;a++)delete s[a]}),e.$connector.filter=i((function(t,i){return i=i?i.toString().toLowerCase():"",e._getItemLabel(t).toString().toLowerCase().indexOf(i)>-1})),e.$connector.set=i((function(t,i,r){if(r==d.getLastFilterSentToServer()){if(t%e.pageSize!=0)throw"Got new data to index "+t+" which is not aligned with the page size of "+e.pageSize;if(0===t&&0===i.length&&o[0])s[0]=[];else for(var n=t/e.pageSize,a=Math.ceil(i.length/e.pageSize),l=0;l<a;l++){var u=n+l,c=i.slice(l*e.pageSize,(l+1)*e.pageSize);s[u]=c}}})),e.$connector.updateData=i((function(t){for(var i=0;i<t.length;i++)for(var r=t[i],n=0;n<e.filteredItems.length;n++)if(e.filteredItems[n].key===r.key){e.set("filteredItems."+n,r);break}})),e.$connector.updateSize=i((function(t){e._clientSideFilter||(e.size=t)})),e.$connector.reset=i((function(){h(),s={},e.clearCache()})),e.$connector.confirm=i((function(t,i){if(i==d.getLastFilterSentToServer()){for(var r=Object.getOwnPropertyNames(o),n=0;n<r.length;n++){var a=r[n];s[a]&&_(a,o[a])}e.$server.confirmUpdate(t)}})),e.$connector.enableClientValidation=i((function(t){var i=null;e.$&&(i=e.$.input),i?(t?(v(e),f(i)):(p(e),m(i,e)),e.validate()):setTimeout((function(){e.$connector.enableClientValidation(t)}),10)}));var p=i((function(t){void 0===t.$checkValidity&&(t.$checkValidity=t.checkValidity,t.checkValidity=function(){return!e.invalid}),void 0===t.$validate&&(t.$validate=t.validate,t.validate=function(){return!(e.focusElement.invalid=e.invalid)})})),m=i((function(e,t){void 0===e.$checkValidity&&(e.$checkValidity=e.checkValidity,e.checkValidity=function(){return!t.invalid})})),f=i((function(e){e.$checkValidity&&(e.checkValidity=e.$checkValidity,delete e.$checkValidity)})),v=i((function(e){e.$checkValidity&&(e.checkValidity=e.$checkValidity,delete e.$checkValidity),e.$validate&&(e.validate=e.$validate,delete e.$validate)})),_=i((function(t,i){var r=s[t];e._clientSideFilter?y(r,i):(delete s[t],i(r,e.size))})),y=i((function(t,i){var r=t;e.filter&&(r=t.filter(t=>e.$connector.filter(t,e.filter))),i(r,r.length)}));e.addEventListener("opened-changed",i(t=>{t.detail.value&&(e.$.overlay._selector._manageFocus=()=>{})})),e.addEventListener("custom-value-set",i(e=>e.preventDefault()))}}))(e)}},220:function(e,t){window.Vaadin.Flow.Legacy=window.Vaadin.Flow.Legacy||{},window.Vaadin.Flow.ironListConnector={initLazy:function(e){if(!e.$connector){if(window.Polymer)window.Vaadin.Flow.Legacy.Debouncer=window.Vaadin.Flow.Legacy.Debouncer||Polymer.Debouncer,window.Vaadin.Flow.Legacy.timeOut=window.Vaadin.Flow.Legacy.timeOut||Polymer.Async.timeOut;else if(!window.Vaadin.Flow.Legacy.Debouncer)return void console.log("IronList is unable to load Polymer helpers.");var t=window.Vaadin.Flow.Legacy.Debouncer,i=window.Vaadin.Flow.Legacy.timeOut,r=[0,0];e.$connector={},e.$connector.placeholderItem={__placeholder:!0};var n,a=function(){var t=e._virtualStart,i=e._virtualEnd,n=Math.max(0,t-20),a=Math.min(i+20,e.items.length);if(r[0]!=n||r[1]!=a){r=[n,a];var o=1+a-n;e.$server.setRequestedRange(n,o)}},o=function(){n=t.debounce(n,i.after(10),a)},s=e._assignModels;e._assignModels=function(){for(var t=[],i=e._virtualStart,r=Math.min(e.items.length,e._physicalCount),n=0;n<r;n++)void 0===e.items[i+n]&&(t.push(n),e.items[i+n]=e.$connector.placeholderItem);s.apply(e,arguments);for(var a=0;a<t.length;a++)delete e.items[i+t[a]];o()},e.items=[],e.$connector.set=function(t,i){for(var r=0;r<i.length;r++){var n=t+r;e.items[n]=i[r]}e._render()},e.$connector.updateData=function(t){for(var i=e.items,r={},n=t.length,a=0;a<t.length;a++){var o=t[a];r[o.key]=o}for(var s=0;s<i.length;s++){var l=r[i[s].key];if(l&&(e.items[s]=l,e.notifyPath("items."+s),0==--n))break}},e.$connector.clear=function(t,i){for(var r=0;r<i;r++){var n=t+r;delete e.items[n],e.notifyPath("items."+n)}},e.$connector.updateSize=function(t){var i=t-e.items.length;if(i>0)e.items.length=t,e.notifySplices("items",[{index:t-i,removed:[],addedCount:i,object:e.items,type:"splice"}]);else if(i<0){var r=e.items.slice(t,e.items.length);e.items.splice(t),e.notifySplices("items",[{index:t,removed:r,addedCount:0,object:e.items,type:"splice"}])}},e.$connector.setPlaceholderItem=function(t){t||(t={}),t.__placeholder=!0,e.$connector.placeholderItem=t}}}}},221:function(e,t,i){"use strict";i(36),i(71),i(56),i(34),i(38),i(52);var r=i(6).a`<dom-module id="lumo-details" theme-for="vaadin-details">
  <template>
    <style>
      :host {
        margin: var(--lumo-space-xs) 0;
        outline: none;
      }

      [part="summary"] {
        display: flex;
        align-items: center;
        width: 100%;
        outline: none;
        padding: var(--lumo-space-s) 0;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        line-height: var(--lumo-line-height-xs);
        color: var(--lumo-secondary-text-color);
        background-color: inherit;
        border-radius: var(--lumo-border-radius-m);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([focus-ring]) [part="summary"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      [part="toggle"] {
        display: block;
        width: 1em;
        height: 1em;
        margin-left: calc(var(--lumo-space-xs) * -1);
        margin-right: var(--lumo-space-xs);
        font-size: var(--lumo-icon-size-s);
        line-height: 1;
        color: var(--lumo-contrast-60pct);
        font-family: "lumo-icons";
      }

      :host([disabled]) [part="summary"],
      :host([disabled]) [part="toggle"] {
        color: var(--lumo-disabled-text-color);
      }

      @media (hover: hover) {
        :host(:not([disabled])) [part="summary"]:hover,
        :host(:not([disabled])) [part="summary"]:hover [part="toggle"] {
          color: var(--lumo-contrast-80pct);
        }
      }

      [part="toggle"]::before {
        content: var(--lumo-icons-angle-right);
      }

      :host([opened]) [part="toggle"] {
        transform: rotate(90deg);
      }

      [part="content"] {
        padding: var(--lumo-space-xs) 0 var(--lumo-space-s);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-m);
      }

      :host([theme~="filled"]) {
        background-color: var(--lumo-contrast-5pct);
        border-radius: var(--lumo-border-radius-m);
      }

      :host([theme~="filled"]) [part="summary"] {
        padding: var(--lumo-space-s) calc(var(--lumo-space-s) + var(--lumo-space-xs) / 2);
      }

      :host([theme~="filled"]) [part="content"] {
        padding-left: var(--lumo-space-m);
        padding-right: var(--lumo-space-m);
      }

      :host([theme~="small"]) [part="summary"] {
        padding-top: var(--lumo-space-xs);
        padding-bottom: var(--lumo-space-xs);
      }

      :host([theme~="small"]) [part="toggle"] {
        margin-right: calc(var(--lumo-space-xs) / 2);
      }

      :host([theme~="small"]) [part\$="content"] {
        font-size: var(--lumo-font-size-s);
      }

      :host([theme~="reverse"]) [part="summary"] {
        justify-content: space-between;
      }

      :host([theme~="reverse"]) [part="toggle"] {
        order: 1;
        margin-right: 0;
      }

      :host([theme~="reverse"][theme~="filled"]) [part="summary"] {
        padding-left: var(--lumo-space-m);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="toggle"] {
        margin-left: var(--lumo-space-xs);
        margin-right: calc(var(--lumo-space-xs) * -1);
      }

      :host([dir="rtl"]) [part="toggle"]::before {
        content: var(--lumo-icons-angle-left);
      }

      :host([opened][dir="rtl"]) [part="toggle"] {
        transform: rotate(-90deg);
      }

      :host([theme~="small"][dir="rtl"]) [part="toggle"] {
        margin-left: calc(var(--lumo-space-xs) / 2);
      }

      :host([theme~="reverse"][dir="rtl"]) [part="toggle"] {
        margin-left: 0;
      }

      :host([theme~="reverse"][theme~="filled"][dir="rtl"]) [part="summary"] {
        padding-right: var(--lumo-space-m);
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content)},222:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var r=i(9),n=i(19),a=i(21),o=i(84),s=i(6);
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends(Object(o.a)(Object(a.a)(Object(n.a)(r.a)))){static get template(){return s.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="content"] {
        display: none;
        overflow: hidden;
      }

      [part="summary"][disabled] {
        pointer-events: none;
      }

      :host([opened]) [part="content"] {
        display: block;
        overflow: visible;
      }
    </style>
    <div role="heading">
      <div role="button" part="summary" on-click="_onToggleClick" on-keydown="_onToggleKeyDown" disabled\$="[[disabled]]" aria-expanded\$="[[_getAriaExpanded(opened)]]">
        <span part="toggle"></span>
        <span part="summary-content"><slot name="summary"></slot></span>
      </div>
    </div>
    <div part="content" aria-hidden\$="[[_getAriaHidden(opened)]]">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-details"}static get version(){return"1.2.1"}static get properties(){return{opened:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"}}}get _collapsible(){return this.shadowRoot.querySelector('[part="content"]')}get focusElement(){return this.shadowRoot.querySelector('[part="summary"]')}_focus(){this.focusElement&&!this._isShiftTabbing&&(this._keyboardActive&&this.focusElement.focus(),this._setFocused(!0))}ready(){super.ready(),this._collapsible.addEventListener("keydown",e=>{e.shiftKey&&9===e.keyCode&&e.stopPropagation()})}_getAriaExpanded(e){return e?"true":"false"}_getAriaHidden(e){return e?"false":"true"}_openedChanged(e){this._collapsible.style.maxHeight=e?"":"0px"}_onToggleClick(e){this.opened=!this.opened}_onToggleKeyDown(e){[13,32].indexOf(e.keyCode)>-1&&(e.preventDefault(),this.opened=!this.opened)}}customElements.define(l.is,l)},223:function(e,t,i){"use strict";i(224),i(216)},224:function(e,t,i){"use strict";i(36),i(56),i(34),i(38),i(52);var r=i(6).a`<dom-module id="lumo-avatar" theme-for="vaadin-avatar">
  <template>
    <style>
      :host {
        width: var(--lumo-size-m);
        height: var(--lumo-size-m);
        color: var(--lumo-secondary-text-color);
        background-color: var(--lumo-contrast-10pct);
        border-radius: 50%;
        outline: none;
        cursor: default;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([has-color-index]) {
        color: var(--lumo-base-color);
      }

      :host([focus-ring]) {
        border-color: var(--lumo-primary-color-50pct);
      }

      [part="icon"],
      [part="abbr"] {
        fill: currentColor;
      }

      [part="abbr"] {
        font-family: var(--lumo-font-family);
        font-size: 2.4375em;
        font-weight: 500;
      }

      :host([theme~="xlarge"]) [part="abbr"] {
        font-size: 2.5em;
      }

      :host([theme~="large"]) [part="abbr"] {
        font-size: 2.375em;
      }

      :host([theme~="small"]) [part="abbr"] {
        font-size: 2.75em;
      }

      :host([theme~="xsmall"]) [part="abbr"] {
        font-size: 3em;
      }

      :host([theme~="xlarge"]) {
        width: var(--lumo-size-xl);
        height: var(--lumo-size-xl);
      }

      :host([theme~="large"]) {
        width: var(--lumo-size-l);
        height: var(--lumo-size-l);
      }

      :host([theme~="small"]) {
        width: var(--lumo-size-s);
        height: var(--lumo-size-s);
      }

      :host([theme~="xsmall"]) {
        width: var(--lumo-size-xs);
        height: var(--lumo-size-xs);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content)},225:function(e,t,i){"use strict";i(36),i(34),i(38),i(282),i(137);var r=i(6).a`<dom-module id="lumo-combo-box-overlay" theme-for="vaadin-combo-box-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      [part="content"] {
        padding: 0;
      }

      :host {
        /* TODO: using a legacy mixin (unsupported) */
        --iron-list-items-container: {
          border-width: var(--lumo-space-xs);
          border-style: solid;
          border-color: transparent;
        };
      }

      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */
      :host([opened]) {
        --iron-list-items-container_-_border-width: var(--lumo-space-xs);
        --iron-list-items-container_-_border-style: solid;
        --iron-list-items-container_-_border-color: transparent;
      }

      /* Loading state */

      /* When items are empty, the sinner needs some room */
      :host(:not([closing])) [part~="content"] {
        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
      }

      [part~="overlay"] {
        position: relative;
      }

      :host([loading]) [part~="loader"] {
        box-sizing: border-box;
        width: var(--lumo-icon-size-s);
        height: var(--lumo-icon-size-s);
        position: absolute;
        z-index: 1;
        left: var(--lumo-space-s);
        right: var(--lumo-space-s);
        top: var(--lumo-space-s);
        margin-left: auto;
        margin-inline-start: auto;
        margin-inline-end: 0;
        border: 2px solid transparent;
        border-color:
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color)
          var(--lumo-primary-color);
        border-radius: calc(0.5 * var(--lumo-icon-size-s));
        opacity: 0;
        animation:
          1s linear infinite lumo-combo-box-loader-rotate,
          .3s .1s lumo-combo-box-loader-fade-in both;
        pointer-events: none;
      }

      @keyframes lumo-combo-box-loader-fade-in {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @keyframes lumo-combo-box-loader-rotate {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      /* RTL specific styles */

      :host([loading][dir="rtl"]) [part~="loader"] {
        left: auto;
        margin-left: 0;
        margin-right: auto;
        margin-inline-start: 0;
        margin-inline-end: auto;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content)},226:function(e,t,i){"use strict";i(36),i(34),i(38),i(140);var r=i(6).a`<dom-module id="lumo-combo-box-item" theme-for="vaadin-combo-box-item">
  <template>
    <style include="lumo-item">
      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */

      :host {
        cursor: default;
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        transition: background-color 100ms;
        border-radius: var(--lumo-border-radius);
        overflow: hidden;
        --_lumo-item-selected-icon-display: block;
      }

      /* ShadyCSS workaround (show the selected item checkmark) */
      :host::before {
        display: block;
      }

      :host(:hover) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([focused]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        :host(:hover) {
          background-color: transparent;
        }

        :host([focused]:not([disabled])) {
          box-shadow: none;
        }
      }

      /* RTL specific styles */
      :host([dir="rtl"]) {
        padding-right: calc(var(--lumo-border-radius) / 4);
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content)},227:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var r=i(11),n=i(15),a=i(42),o=i(54),s=i(209),l=i(206),u=i(23),c=i(208),d=e=>class extends e{static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,disabled:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},value:{type:String,observer:"_valueChanged",notify:!0,value:""},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,name:{type:String},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_toggleElement:Object,_clearElement:Object,_inputElementValue:String,_closeOnBlurIsPrevented:Boolean,_previousDocumentPointerEvents:String,_itemTemplate:Object}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_templateOrRendererChanged(_itemTemplate, renderer)","_loadingChanged(loading)","_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_toggleElementChanged(_toggleElement)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundClose=this.close.bind(this),this._boundOnOpened=this._onOpened.bind(this),this._boundOnKeyDown=this._onKeyDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}ready(){super.ready(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,s.a.requestAvailability(),this.$.overlay.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this.addEventListener("vaadin-combo-box-dropdown-closed",this._boundClose),this.addEventListener("vaadin-combo-box-dropdown-opened",this._boundOnOpened),this.addEventListener("keydown",this._boundOnKeyDown),this.addEventListener("click",this._boundOnClick),this.$.overlay.addEventListener("vaadin-overlay-touch-action",this._boundOnOverlayTouchAction),this.addEventListener("touchend",this._boundOnTouchend),this._observer=new u.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)});var e=e=>{var t=this.$.overlay,i=t&&t.$.dropdown;i&&i.$&&this.$.overlay.$.dropdown.$.overlay.bringToFront&&requestAnimationFrame(()=>{i.$.overlay.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e)}render(){this.$.overlay._selector&&this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item").forEach(e=>e._render())}_setTemplateFromNodes(e){this._itemTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._itemTemplate}_removeNewRendererOrTemplate(e,t,i,r){e!==t?this._itemTemplate=void 0:i!==r&&(this.renderer=void 0)}_templateOrRendererChanged(e,t){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for combo box items");this._oldTemplate=e,this._oldRenderer=t}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}_openedChanged(e,t){void 0!==t&&(this.opened?(this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring"),this.hasAttribute("focused")||this.$.overlay.touchDevice||this.focus()):(this._onClosed(),this._openedWithFocusRing&&this.hasAttribute("focused")&&this.focusElement.setAttribute("focus-ring","")))}_onOverlayTouchAction(e){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_onClick(e){this._closeOnBlurIsPrevented=!0;var t=e.composedPath();-1!==t.indexOf(this._clearElement)||"clear-button"===t[0].getAttribute("part")?(this._clear(),this.focus()):-1!==t.indexOf(this.inputElement)&&(t.indexOf(this._toggleElement)>-1&&this.opened?this.close():(t.indexOf(this._toggleElement)>-1||!this.autoOpenDisabled)&&this.open()),this._closeOnBlurIsPrevented=!1}_onKeyDown(e){this._isEventKey(e,"down")?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):this._isEventKey(e,"up")?(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):this._isEventKey(e,"enter")?this._onEnter(e):this._isEventKey(e,"esc")&&this._onEscape(e)}_isEventKey(e,t){return l.a.keyboardEventMatchesKeys(e,t)}_getItemLabel(e){return this.$.overlay.getItemLabel(e)}_getItemValue(e){var t=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return void 0===t&&(t=e?e.toString():""),t}_onArrowDown(){this.opened?this.$.overlay._items&&(this._focusedIndex=Math.min(this.$.overlay._items.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel()):this.open()}_onArrowUp(){this.opened?(this._focusedIndex>-1?this._focusedIndex=Math.max(0,this._focusedIndex-1):this.$.overlay._items&&(this._focusedIndex=this.$.overlay._items.length-1),this._prefillFocusedItemLabel()):this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue="",setTimeout(()=>{this._inputElementValue=this._getItemLabel(this.$.overlay._focusedItem),this._markAllSelectionRange()},1))}_setSelectionRange(e,t){var i=this._nativeInput||this.inputElement;if(this.hasAttribute("focused")&&i&&i.setSelectionRange)try{i.setSelectionRange(e,t)}catch(e){}}_markAllSelectionRange(){void 0!==this._inputElementValue&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(void 0!==this._inputElementValue){var e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){this.opened||this.loading?this.close():this._commitValue()}_onEnter(e){(this.opened||this.autoOpenDisabled)&&(this.allowCustomValue||""===this._inputElementValue||this._focusedIndex>-1)&&(this._closeOrCommit(),e.preventDefault(),e.stopPropagation())}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(this._stopPropagation(e),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(this._stopPropagation(e),this._clear()):this.opened?(this._stopPropagation(e),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(this._stopPropagation(e),this._clear())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",e=>e.preventDefault()),e.addEventListener("click",e=>{this.$.overlay.touchDevice&&!this.hasAttribute("focused")&&document.activeElement.blur()}))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){Object(a.b)(),this.$.overlay.ensureItemsRendered(),this.$.overlay._selector.toggleScrollListener(!0),this.$.overlay.updateViewportBoundaries(),this.$.overlay._selector._increasePoolIfNeeded(),setTimeout(()=>this._resizeDropdown(),1),window.requestAnimationFrame(()=>this.$.overlay.adjustScrollPosition()),this._lastCommittedValue=this.value}_onClosed(){this.opened&&this.close(),this.loading&&!this.allowCustomValue||this._commitValue()}_commitValue(){if(this.$.overlay._items&&this._focusedIndex>-1){var e=this.$.overlay._items[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||void 0===this._inputElementValue)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{var t=e=>e&&e.toLowerCase&&e.toLowerCase(),i=[...this.filteredItems||[],this.selectedItem].filter(e=>t(this._getItemLabel(e))===t(this._inputElementValue))[0];if(this.allowCustomValue&&!i){var r=new CustomEvent("custom-value-set",{detail:this._inputElementValue,composed:!0,cancelable:!0,bubbles:!0});if(this.dispatchEvent(r),!r.defaultPrevented){var n=this._inputElementValue;this._selectItemForValue(n),this.value=n}}else this.allowCustomValue||this.opened||!i?this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||"":this.value=this._getItemValue(i)}this._detectAndDispatchChange(),this._clearSelectionRange(),this.dataProvider||(this.filter="")}get _propertyForValue(){return"value"}_inputValueChanged(e){-1!==e.composedPath().indexOf(this.inputElement)&&(this._inputElementValue=this.inputElement[this._propertyForValue],this._filterFromInput(e))}_filterFromInput(e){this.opened||e.__fromClearButton||this.autoOpenDisabled||this.open(),this.filter===this._inputElementValue?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=this._inputElementValue}_itemLabelPathChanged(e,t){"string"!=typeof e&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e,t,i){void 0!==e&&(this.$.overlay.filterChanged=!0,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},t,i))}_loadingChanged(e){e&&(this._focusedIndex=-1)}_revertInputValue(){""!==this.filter?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_resizeDropdown(){this.$.overlay.$.dropdown.notifyResize()}_updateHasValue(e){e?this.setAttribute("has-value",""):this.removeAttribute("has-value")}_selectedItemChanged(e,t){if(null==e)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._updateHasValue(""!==this.value),this._inputElementValue=this.value);else{var i=this._getItemValue(e);if(this.value!==i&&(this.value=i,this.value!==i))return;this._updateHasValue(!0),this._inputElementValue=this._getItemLabel(e),this.inputElement&&(this.inputElement[this._propertyForValue]=this._inputElementValue)}this.$.overlay._selectedItem=e,this.filteredItems&&this.$.overlay._items&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,t){if(""!==e||void 0!==t){var i;if(this._isValidValue(e))this._getItemValue(this.selectedItem)!==e?this._selectItemForValue(e):i=this.selectedItem,!i&&this.allowCustomValue&&(this._inputElementValue=e),this._updateHasValue(""!==this.value);else this.selectedItem=null;this._lastCommittedValue=void 0}}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.items=t})}_itemsOrPathsChanged(e,t,i){if("items"===e.path||"items.splices"===e.path){this.items?this.filteredItems=this.items.slice(0):this.__previousItems&&(this.filteredItems=null);var r=this._indexOfValue(this.value,this.items);this._focusedIndex=r;var n=r>-1&&this.items[r];n&&(this.selectedItem=n)}this.__previousItems=e.value}_filteredItemsChanged(e,t,i){"filteredItems"!==e.path&&"filteredItems.splices"!==e.path||(this._setOverlayItems(this.filteredItems),this._focusedIndex=this.opened||this.autoOpenDisabled?this.$.overlay.indexOfLabel(this.filter):this._indexOfValue(this.value,this.filteredItems),this.opened&&this._repositionOverlay())}_filterItems(e,t){return e?e.filter(e=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(e).toString().toLowerCase().indexOf(t)>-1)):e}_selectItemForValue(e){var t=this._indexOfValue(e,this.filteredItems),i=this.selectedItem;this.selectedItem=t>=0?this.filteredItems[t]:this.dataProvider&&void 0===this.selectedItem?void 0:null,null===this.selectedItem&&null===i&&this._selectedItemChanged(this.selectedItem)}_setOverlayItems(e){this.$.overlay.set("_items",e)}_repositionOverlay(){this.__repositionOverlayDebouncer=n.a.debounce(this.__repositionOverlayDebouncer,r.d.after(500),()=>{var e=this.$.overlay._selector;e._isClientFull()||e._resetScrollPosition(e._physicalTop),this._resizeDropdown(),this.$.overlay.updateViewportBoundaries(),this.$.overlay.ensureItemsRendered(),e.notifyResize(),Object(a.b)()})}_indexOfValue(e,t){if(t&&this._isValidValue(e))for(var i=0;i<t.length;i++)if(this._getItemValue(t[i])===e)return i;return-1}_isValidValue(e){return null!=e}_overlaySelectedItemChanged(e){e.stopPropagation(),e.detail.item instanceof c.a||(this.opened?(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close()):this.selectedItem!==e.detail.item&&(this.selectedItem=e.detail.item,this._detectAndDispatchChange()))}_onFocusout(e){var t=this.$.overlay.$.dropdown;t&&t.$&&e.relatedTarget===t.$.overlay?e.composedPath()[0].focus():this.readonly||this._closeOnBlurIsPrevented||this._closeOrCommit()}_onTouchend(e){this._clearElement&&e.composedPath()[0]===this._clearElement&&(e.preventDefault(),this._clear())}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){if(this.inputElement.validate)return this.inputElement.validate()}get _instanceProps(){return{item:!0,index:!0,selected:!0,focused:!0}}_ensureTemplatized(){if(!this._TemplateClass){var e=this._itemTemplate||this._getRootTemplate();e&&(this._TemplateClass=Object(o.b)(e,this,{instanceProps:this._instanceProps,forwardHostProp:function(e,t){var i=this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item");Array.prototype.forEach.call(i,i=>{i._itemTemplateInstance&&(i._itemTemplateInstance.set(e,t),i._itemTemplateInstance.notifyPath(e,t,!0))})}}))}}_getRootTemplate(){return Array.prototype.filter.call(this.children,e=>"TEMPLATE"===e.tagName)[0]}_preventInputBlur(){this._toggleElement&&this._toggleElement.addEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.addEventListener("click",this._preventDefault)}_restoreInputBlur(){this._toggleElement&&this._toggleElement.removeEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.removeEventListener("click",this._preventDefault)}_preventDefault(e){e.preventDefault()}_stopPropagation(e){e.stopPropagation()}}},228:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(94),n=i(32),a=Object(n.a)(e=>{var t=Object(r.a)(e);return class extends t{static get observedAttributes(){return super.observedAttributes.concat("disable-upgrade")}attributeChangedCallback(e,t,i,r){"disable-upgrade"==e?!this.__dataEnabled&&null==i&&this.isConnected&&super.connectedCallback():super.attributeChangedCallback(e,t,i,r)}_initializeProperties(){}connectedCallback(){!this.__dataEnabled&&this.hasAttribute("disable-upgrade")||super.connectedCallback()}_enableProperties(){this.hasAttribute("disable-upgrade")||(this.__dataEnabled||super._initializeProperties(),super._enableProperties())}disconnectedCallback(){this.__dataEnabled&&super.disconnectedCallback()}}})},229:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i(208),n=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new r.a}}}static get observers(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}_dataProviderClearFilter(e,t,i){e&&!this.loading&&this.filter&&(this.size=void 0,this._pendingRequests={},this.filter="",this.clearCache())}ready(){super.ready(),this.clearCache(),this.$.overlay.addEventListener("index-requested",e=>{var t=e.detail.index,i=e.detail.currentScrollerPos,r=Math.floor(1.5*this.pageSize);if(!this._shouldSkipIndex(t,r,i)&&void 0!==t){var n=this._getPageForIndex(t);this._shouldLoadPage(n)&&this._loadPage(n)}})}_dataProviderFilterChanged(){this._shouldFetchData()&&(this.size=void 0,this._pendingRequests={},this.clearCache())}_shouldFetchData(){return!!this.dataProvider&&(this.opened||this.filter&&this.filter.length)}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,t,i){return 0!==i&&e>=i-t&&e<=i+t}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;var t=this.filteredItems[e*this.pageSize];return void 0!==t?t instanceof r.a:void 0===this.size}_loadPage(e){if(!this._pendingRequests[e]&&this.dataProvider){this.loading=!0;var t={page:e,pageSize:this.pageSize,filter:this.filter},i=(r,n)=>{if(this._pendingRequests[e]===i){if(this.filteredItems)this.splice("filteredItems",t.page*t.pageSize,r.length,...r);else{var a=[];a.splice(t.page*t.pageSize,r.length,...r),this.filteredItems=a}this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value&&this._selectItemForValue(this.value),this.opened||this.hasAttribute("focused")||this._commitValue(),this.size=n,delete this._pendingRequests[e],0===Object.keys(this._pendingRequests).length&&(this.loading=!1),0===e&&this.__repositionOverlayDebouncer&&r.length>(this.__maxRenderedItems||0)&&(setTimeout(()=>this.__repositionOverlayDebouncer.flush()),this.__maxRenderedItems=r.length)}};this._pendingRequests[e]||(this._pendingRequests[e]=i,this.dataProvider(t,i))}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(this.dataProvider){this._pendingRequests={};for(var e=[],t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?this._loadPage(0):this._forceNextRequest=!0}}_sizeChanged(e=0){for(var t=(this.filteredItems||[]).slice(0,e),i=0;i<e;i++)t[i]=void 0!==t[i]?t[i]:this.__placeHolder;this.filteredItems=t,this._flushPendingRequests(e)}_pageSizeChanged(e,t){if(Math.floor(e)!==e||e<1)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.dataProvider=t})}_ensureItemsOrDataProvider(e){if(void 0!==this.items&&void 0!==this.dataProvider)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,t){if(e&&""!==t&&(void 0===this.selectedItem||null===this.selectedItem)){var i=this._indexOfValue(t,this.filteredItems);(i<0||!this._getItemLabel(this.filteredItems[i]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests)for(var t=Math.ceil(e/this.pageSize),i=Object.keys(this._pendingRequests),r=0;r<i.length;r++){var n=parseInt(i[r]);n>=t&&this._pendingRequests[n]([],e)}}};
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/},230:function(e,t,i){"use strict";var r=i(102),n=document.createElement("template");
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/n.innerHTML='<dom-module id="vaadin-date-picker-text-field-styles" theme-for="vaadin-date-picker-text-field">\n  <template>\n    <style>\n      :host([dir="rtl"]) [part="input-field"] {\n        direction: ltr;\n      }\n\n      :host([dir="rtl"]) [part="value"]::placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n\n      :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n\n      :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,\n      :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content);class a extends r.a{static get is(){return"vaadin-date-picker-text-field"}}customElements.define(a.is,a)},231:function(e,t,i){"use strict";var r=i(9),n=i(19),a=i(227),o=i(229),s=(i(270),i(6)),l=i(89);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class u extends(Object(n.a)(Object(o.a)(Object(a.a)(r.a)))){static get template(){return s.a`
    <style>
      :host([opened]) {
        pointer-events: auto;
      }
    </style>

    <slot></slot>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" position-target="[[inputElement]]" renderer="[[renderer]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`}static get is(){return"vaadin-combo-box-light"}static get properties(){return{attrForValue:{type:String,value:"value"},inputElement:{type:Element,readOnly:!0}}}constructor(){super(),this._boundInputValueChanged=this._inputValueChanged.bind(this),this.__boundInputValueCommitted=this.__inputValueCommitted.bind(this)}ready(){super.ready(),this._toggleElement=this.querySelector(".toggle-button"),this._clearElement=this.querySelector(".clear-button"),this._clearElement&&this._clearElement.addEventListener("mousedown",e=>{e.preventDefault(),(this.inputElement._focusableElement||this.inputElement).focus()})}get focused(){return this.getRootNode().activeElement===this.inputElement}connectedCallback(){super.connectedCallback();this._setInputElement(this.querySelector("vaadin-text-field,iron-input,paper-input,.paper-input-input,.input")),this._revertInputValue(),this.inputElement.addEventListener("input",this._boundInputValueChanged),this.inputElement.addEventListener("change",this.__boundInputValueCommitted),this._preventInputBlur()}disconnectedCallback(){super.disconnectedCallback(),this.inputElement.removeEventListener("input",this._boundInputValueChanged),this.inputElement.removeEventListener("change",this.__boundInputValueCommitted),this._restoreInputBlur()}__inputValueCommitted(e){e.__fromClearButton&&this._clear()}get _propertyForValue(){return Object(l.b)(this.attrForValue)}get _inputElementValue(){return this.inputElement&&this.inputElement[this._propertyForValue]}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._propertyForValue]=e)}}customElements.define(u.is,u)},232:function(e,t,i){"use strict";i(36),i(34),i(52);var r=i(6).a`<dom-module id="lumo-login-form-wrapper" theme-for="vaadin-login-form-wrapper">
  <template>
    <style include="lumo-color lumo-typography">
      :host {
        max-width: calc(var(--lumo-size-m) * 10);
        background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      }

      [part="form"] {
        padding: var(--lumo-space-l);
      }

      [part="form-title"] {
        margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
      }

      #forgotPasswordButton {
        margin: var(--lumo-space-s) auto;
      }

      [part="error-message"] {
        background-color: var(--lumo-error-color-10pct);
        padding: var(--lumo-space-m);
        border-radius: var(--lumo-border-radius);
        margin-top: var(--lumo-space-m);
        margin-bottom: var(--lumo-space-s);
        color: var(--lumo-error-text-color);
      }

      :host(:not([dir="rtl"])) [part="error-message"] {
        padding-left: var(--lumo-size-m);
      }

      :host([dir="rtl"]) [part="error-message"] {
        padding-right: var(--lumo-size-m);
      }

      [part="error-message"]::before {
        content: var(--lumo-icons-error);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        position: absolute;
        width: var(--lumo-size-m);
        height: 1em;
        line-height: 1;
        text-align: center;
      }

      :host(:not([dir="rtl"])) [part="error-message"]::before {
        /* Visual centering */
        margin-left: calc(var(--lumo-size-m) * -0.95);
      }

      :host([dir="rtl"]) [part="error-message"]::before {
        /* Visual centering */
        margin-right: calc(var(--lumo-size-m) * -0.95);
      }

      [part="error-message-title"] {
        margin: 0 0 0.25em;
        color: inherit;
      }

      [part="error-message-description"] {
        font-size: var(--lumo-font-size-s);
        line-height: var(--lumo-line-height-s);
        margin: 0;
        opacity: 0.9;
      }

      [part="footer"] {
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-secondary-text-color);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content)},233:function(e,t,i){"use strict";var r=i(9),n=i(19),a=i(21),o=i(214),s=(i(134),i(6));
/**
@license
Vaadin Login
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends(Object(o.a)(Object(a.a)(Object(n.a)(r.a)))){static get template(){return s.a`
    <style>
      :host {
        overflow: hidden;
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="form"] {
        flex: 1;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
      }

      [part="form-title"] {
        margin: 0;
      }

      [part="error-message"] {
        position: relative;
      }
    </style>
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden\$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form">
        </slot>

        <vaadin-button id="forgotPasswordButton" theme="tertiary small forgot-password" on-click="_forgotPassword" hidden\$="[[noForgotPassword]]">[[i18n.form.forgotPassword]]</vaadin-button>

        <div part="footer">
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
`}static get is(){return"vaadin-login-form-wrapper"}_forgotPassword(){this.dispatchEvent(new CustomEvent("forgot-password"))}}customElements.define(l.is,l)},234:function(e,t,i){"use strict";i(233),i(102),i(178);var r=i(6),n=i(214),a=i(21),o=i(19),s=i(9);class l extends(Object(n.a)(Object(a.a)(Object(o.a)(s.a)))){static get template(){return r.a`
    <style>
      [part="vaadin-login-native-form"] * {
        width: 100%;
      }
    </style>
    <vaadin-login-form-wrapper theme\$="[[theme]]" part="vaadin-login-native-form-wrapper" action="{{action}}" disabled="{{disabled}}" error="{{error}}" no-forgot-password="{{noForgotPassword}}" i18n="{{i18n}}" on-login="_retargetEvent" on-forgot-password="_retargetEvent">

      <form part="vaadin-login-native-form" method="POST" action\$="[[action]]" slot="form">
        <vaadin-text-field name="username" label="[[i18n.form.username]]" id="vaadinLoginUsername" required="" on-keydown="_handleInputKeydown" autocapitalize="none" autocorrect="off" spellcheck="false">
          <input type="text" slot="input" on-keyup="_handleInputKeyup">
        </vaadin-text-field>

        <vaadin-password-field name="password" label="[[i18n.form.password]]" id="vaadinLoginPassword" required="" on-keydown="_handleInputKeydown" spellcheck="false">
          <input type="password" slot="input" on-keyup="_handleInputKeyup">
        </vaadin-password-field>

        <vaadin-button part="vaadin-login-submit" theme="primary contained" on-click="submit" disabled\$="[[disabled]]">[[i18n.form.submit]]</vaadin-button>
      </form>
    </vaadin-login-form-wrapper>
`}static get is(){return"vaadin-login-form"}static get version(){return"1.2.0"}connectedCallback(){super.connectedCallback(),this._handleInputKeydown=this._handleInputKeydown.bind(this)}_attachDom(e){this.appendChild(e)}static get observers(){return["_errorChanged(error)"]}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){if(!this.disabled&&this.__isValid(this.$.vaadinLoginUsername)&&this.__isValid(this.$.vaadinLoginPassword)){this.error=!1,this.disabled=!0;var e={bubbles:!0,cancelable:!0,detail:{username:this.$.vaadinLoginUsername.value,password:this.$.vaadinLoginPassword.value}},t=this.dispatchEvent(new CustomEvent("login",e));this.action&&t&&this.querySelector('[part="vaadin-login-native-form"]').submit()}}__isValid(e){return e.validate&&e.validate()||e.checkValidity&&e.checkValidity()}_isEnterKey(e){return"Enter"===e.key||13===e.keyCode}_handleInputKeydown(e){if(this._isEnterKey(e)){var{currentTarget:t}=e,i="vaadinLoginUsername"===t.id?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;this.__isValid(t)&&(this.__isValid(i)?this.submit():i.focus())}}_handleInputKeyup(e){var t="Tab"===e.key||9===e.keyCode,i=e.currentTarget;t&&i&&i.select&&(i.select(),setTimeout(()=>i.setSelectionRange(0,9999)))}}customElements.define(l.is,l)},235:function(e,t,i){"use strict";i(36),i(56),i(52);var r=i(6).a`<dom-module id="lumo-text-area" theme-for="vaadin-text-area">
  <template>
    <style include="lumo-text-field">
      [part="input-field"],
      [part="input-field"] ::slotted(textarea) {
        /* Equal to the implicit padding in vaadin-text-field */
        padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        height: auto;
        box-sizing: border-box;
        transition: background-color 0.1s;
        line-height: var(--lumo-line-height-s);
      }

      :host(:not([readonly])) [part="input-field"]::after {
        display: none;
      }

      :host([readonly]) [part="input-field"] {
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      :host([readonly]) [part="input-field"]::after {
        border: none;
      }

      :host(:hover:not([readonly]):not([focused]):not([invalid])) [part="input-field"] {
        background-color: var(--lumo-contrast-20pct);
      }

      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused]):not([invalid])) [part="input-field"] {
          background-color: var(--lumo-contrast-10pct);
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      [part="value"],
      [part="input-field"] ::slotted(textarea) {
        line-height: inherit;
        --_lumo-text-field-overflow-mask-image: none;
      }

      /* Vertically align icon prefix/suffix with the first line of text */
      [part="input-field"] ::slotted(iron-icon) {
        margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
      }

      [part="input-field"] [part="value"],
      [part="input-field"] ::slotted(textarea) {
        white-space: pre-wrap; /* override \`nowrap\` from <vaadin-text-field> */
        align-self: stretch; /* override \`baseline\` from <vaadin-text-field> */
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content)},236:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i(9),n=i(158),a=i(84),o=i(19),s=i(21),l=i(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class u extends(Object(s.a)(Object(n.a)(Object(a.a)(Object(o.a)(r.a))))){static get template(){return l.a`
    <style include="vaadin-text-field-shared-styles">
      .vaadin-text-area-container {
        flex: auto;
        max-height: inherit; /* MSIE 11 */
        min-height: inherit; /* MSIE 11 */
      }

      /* The label, helper text and the error message should neither grow nor shrink. */
      [part="label"],
      [part="helper-text"],
      [part="error-message"] {
        flex: none;
      }

      [part="input-field"] {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="value"] {
        resize: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(*) {
        align-self: flex-start;
      }

      @keyframes vaadin-text-area-appear {
        to {
          opacity: 1;
        }
      }

      :host {
        animation: 1ms vaadin-text-area-appear;
      }

      /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
      :host([disabled]) [part='value'] {
        user-select: none;
      }
    </style>

    <div class="vaadin-text-area-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]" on-scroll="__scrollPositionUpdated">

        <slot name="prefix"></slot>

        <slot name="textarea">
          <textarea part="value"></textarea>
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="helper-text" id="[[_helperTextId]]">
        <slot name="helper">[[helperText]]</slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-area"}static get version(){return"2.9.2"}static get properties(){return{pattern:{type:String}}}static get observers(){return["_textAreaValueChanged(value)"]}ready(){super.ready(),this._updateHeight(),this.addEventListener("animationend",this._onAnimationEnd),this._inputField=this.root.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",e=>{var t=this._inputField.scrollTop;this._inputField.scrollTop+=e.deltaY,t!==this._inputField.scrollTop&&(e.preventDefault(),this.__scrollPositionUpdated())}),this.__scrollPositionUpdated()}__scrollPositionUpdated(){this.updateStyles({"--_text-area-vertical-scroll-position":this._inputField.scrollTop+"px"})}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-text-area-appear")&&this._updateHeight()}get _slottedTagName(){return"textarea"}_textAreaValueChanged(e){this._updateHeight()}_updateHeight(){var e=this.root.querySelector("[part=input-field]"),t=e.scrollTop,i=this.inputElement,r=this.value?this.value.length:0;if(this._oldValueLength>=r){var n=getComputedStyle(e).height,a=getComputedStyle(i).width;e.style.display="block",e.style.height=n,i.style.maxWidth=a,i.style.height="auto"}this._oldValueLength=r;var o=i.scrollHeight;o>i.clientHeight&&(i.style.height=o+"px"),i.style.removeProperty("max-width"),e.style.removeProperty("display"),e.style.removeProperty("height"),e.scrollTop=t,this._dispatchIronResizeEventIfNeeded("InputHeight",o)}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{var e=this.inputElement.value.match(this.pattern);return!!e&&e[0]===e.input}catch(e){return!0}}}customElements.define(u.is,u)},237:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i(9),n=i(48),a=i(19),o=i(84),s=i(21),l=i(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class u extends(Object(s.a)(Object(o.a)(Object(a.a)(Object(n.a)(r.a))))){static get template(){return l.a`
    <style>
      :host {
        display: inline-block;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="radio"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="radio"] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="radio">
        <input type="radio" checked="[[checked]]" disabled\$="[[disabled]]" role="presentation" on-change="_onChange" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-radio-button"}static get version(){return"1.5.4"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},name:String,value:{type:String,value:"on"}}}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e}attributeChangedCallback(e,t,i){if((super.attributeChangedCallback(e,t,i),/^(disabled|checked)$/.test(e))&&(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&this.shadowRoot&&parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1],10))){this.shadowRoot.querySelectorAll("*").forEach(e=>{e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})}}ready(){super.ready(),this.setAttribute("role","radio"),this._addListeners();var e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){var e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty")}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.setAttribute("aria-checked",e)}_addListeners(){this._addEventListenerToNode(this,"down",e=>{this.disabled||this.setAttribute("active","")}),this._addEventListenerToNode(this,"up",e=>{this.removeAttribute("active"),this.checked||this.disabled||this.click()}),this.addEventListener("keydown",e=>{this.disabled||32!==e.keyCode||(e.preventDefault(),this.setAttribute("active",""))}),this.addEventListener("keyup",e=>{this.disabled||32!==e.keyCode||(e.preventDefault(),this.click(),this.removeAttribute("active"))})}click(){this.disabled||this.shadowRoot.querySelector("input").dispatchEvent(new MouseEvent("click"))}get focusElement(){return this.shadowRoot.querySelector("input")}_onChange(e){this.checked=e.target.checked;var t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}}customElements.define(u.is,u)},238:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i(9),i(63);var r,n=i(102),a=i(58),o=i(6).a`<dom-module id="vaadin-number-field-template">
  <template>
    <style>
      :host([readonly]) [part\$="button"] {
        pointer-events: none;
      }

      [part="decrease-button"]::before {
        content: "−";
      }

      [part="increase-button"]::before {
        content: "+";
      }

      [part="decrease-button"],
      [part="increase-button"] {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      /* Hide the native arrow icons */
      [part="value"]::-webkit-outer-spin-button,
      [part="value"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      [part="value"] {
        /* Older Firefox versions (v47.0) requires !important */
        -moz-appearance: textfield !important;
      }

      :host([dir="rtl"]) [part="input-field"] {
        direction: ltr;
      }

      :host([dir="rtl"]) [part="value"]::placeholder {
        direction: rtl;
      }

      :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {
        direction: rtl;
      }

      :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {
        direction: rtl;
      }

      :host([dir="rtl"]:not([has-controls])) [part="value"]::placeholder {
        text-align: left;
      }

      :host([dir="rtl"]:not([has-controls])) [part="input-field"] ::slotted(input)::placeholder {
        text-align: left;
      }

      :host([dir="rtl"]:not([has-controls])) [part="value"]:-ms-input-placeholder,
      :host([dir="rtl"]:not([has-controls])) [part="input-field"] ::slotted(input):-ms-input-placeholder {
        text-align: left;
      }
    </style>

    <div disabled\$="[[!_allowed(-1, value, min, max, step)]]" part="decrease-button" on-click="_decreaseValue" on-touchend="_decreaseButtonTouchend" hidden\$="[[!hasControls]]">
    </div>

    <div disabled\$="[[!_allowed(1, value, min, max, step)]]" part="increase-button" on-click="_increaseValue" on-touchend="_increaseButtonTouchend" hidden\$="[[!hasControls]]">
    </div>
  </template>

  
</dom-module>`;document.head.appendChild(o.content);class s extends n.a{static get is(){return"vaadin-number-field"}static get version(){return"2.9.2"}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number,reflectToAttribute:!0,observer:"_minChanged"},max:{type:Number,reflectToAttribute:!0,observer:"_maxChanged"},step:{type:Number,value:1,observer:"_stepChanged"}}}ready(){super.ready(),this.__previousValidInput=this.value||"",this.inputElement.type="number",this.inputElement.addEventListener("change",this.__onInputChange.bind(this))}_decreaseButtonTouchend(e){e.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(e){e.preventDefault(),this._increaseValue()}static get template(){if(!r){r=super.template.cloneNode(!0);var e=a.a.import(this.is+"-template","template"),t=e.content.querySelector('[part="decrease-button"]'),i=e.content.querySelector('[part="increase-button"]'),n=e.content.querySelector("style"),o=r.content.querySelector('[part="input-field"]'),s=r.content.querySelector('[name="prefix"]');o.insertBefore(t,s),o.appendChild(i),r.content.appendChild(n)}return r}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern, min, max, step)")}_constraintsChanged(e,t,i,r,n,a,o){if(this.invalid){var s=e=>!e&&0!==e;s(n)&&s(a)?super._constraintsChanged(e,t,i,r):this.validate()}}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(e){if(!this.disabled&&!this.readonly){var t=parseFloat(this.value);this.value?t<this.min?(e=0,t=this.min):t>this.max&&(e=0,t=this.max):0==this.min&&e<0||0==this.max&&e>0||0==this.max&&0==this.min?(e=0,t=0):(null==this.max||this.max>=0)&&(null==this.min||this.min<=0)?t=0:this.min>0?(t=this.min,this.max<0&&e<0&&(t=this.max),e=0):this.max<0&&(t=this.max,e<0?e=0:this._getIncrement(1,t-this.step)>this.max?t-=2*this.step:t-=this.step);var i=this._getIncrement(e,t);this.value&&0!=e&&!this._incrementIsInsideTheLimits(e,t)||this._setValue(i)}}_setValue(e){this.value=this.inputElement.value=String(parseFloat(e)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(e,t){var i=this.step||1,r=this.min||0,n=Math.max(this._getMultiplier(t),this._getMultiplier(i),this._getMultiplier(r));i*=n;var a=((t=Math.round(t*n))-(r*=n))%i;return e>0?(t-a+i)/n:e<0?(t-(a||i))/n:t/n}_getDecimalCount(e){var t=String(e),i=t.indexOf(".");return-1===i?1:t.length-i-1}_getMultiplier(e){if(!isNaN(e))return Math.pow(10,this._getDecimalCount(e))}_incrementIsInsideTheLimits(e,t){return e<0?null==this.min||this._getIncrement(e,t)>=this.min:e>0?null==this.max||this._getIncrement(e,t)<=this.max:this._getIncrement(e,t)<=this.max&&this._getIncrement(e,t)>=this.min}_allowed(e){var t=e*(this.step||1),i=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(t,i)}_stepChanged(e,t){this.__validateByStep=this.__stepChangedCalled||null!==this.getAttribute("step"),this.inputElement.step=this.__validateByStep?e:"any",this.__stepChangedCalled=!0,this.setAttribute("step",e)}_minChanged(e){this.inputElement.min=e}_maxChanged(e){this.inputElement.max=e}_valueChanged(e,t){e&&isNaN(parseFloat(e))?this.value="":"string"!=typeof this.value&&(this.value=String(this.value)),super._valueChanged(this.value,t)}_onKeyDown(e){38==e.keyCode?(e.preventDefault(),this._increaseValue()):40==e.keyCode&&(e.preventDefault(),this._decreaseValue()),super._onKeyDown(e)}__onInputChange(){this.validate()}checkValidity(){return void 0!==this.min||void 0!==this.max||this.__validateByStep?this.inputElement.checkValidity():super.checkValidity()}}window.customElements.define(s.is,s)},262:function(e,t,i){"use strict";i(56),i(34),i(137);var r=i(6),n=r.a`<dom-module id="lumo-date-picker-overlay" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="lumo-menu-overlay">
      [part="overlay"] {
        /*
        Width:
            date cell widths
          + month calendar side padding
          + year scroller width
        */
        width:
          calc(
              var(--lumo-size-m) * 7
            + var(--lumo-space-xs) * 2
            + 57px
          );
        height: 100%;
        max-height: calc(var(--lumo-size-m) * 14);
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
      }

      [part="overlay"] {
        flex-direction: column;
      }

      [part="content"] {
        padding: 0;
        height: 100%;
        overflow: hidden;
        -webkit-mask-image: none;
        mask-image: none;
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay"] {
          width: 100vw;
          height: 70vh;
          max-height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);i(36),i(38),i(52),i(136);var a=r.a`<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">
  <template>
    <style>
      :host {
        position: relative;
        background-color: transparent;
        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
        background-size: 57px 100%;
        background-position: top right;
        background-repeat: no-repeat;
        cursor: default;
      }

      /* Month scroller */

      [part="months"] {
        /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
        --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
        --vaadin-infinite-scroller-buffer-offset: 10%;
        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        position: relative;
        margin-right: 57px;
      }

      /* Year scroller */

      [part="years"] {
        /* TODO get rid of fixed magic number */
        --vaadin-infinite-scroller-buffer-width: 97px;
        width: 57px;
        height: auto;
        top: 0;
        bottom: 0;
        font-size: var(--lumo-font-size-s);
        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      }

      [part="year-number"],
      [part="year-separator"] {
        opacity: 0.5;
        transition: 0.2s opacity;
      }

      [part="years"]:hover [part="year-number"],
      [part="years"]:hover [part="year-separator"] {
        opacity: 1;
      }

      /* TODO unsupported selector */
      #scrollers {
        position: static;
        display: block;
      }

      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
      #scrollers[desktop] [part="months"] {
        right: auto;
      }

      /* Year scroller position indicator */
      [part="years"]::before {
        border: none;
        width: 1em;
        height: 1em;
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        transform: translate(-75%, -50%) rotate(45deg);
        border-top-right-radius: calc(var(--lumo-border-radius) / 2);
        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
        z-index: 1;
      }

      [part="year-number"],
      [part="year-separator"] {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        transform: translateY(-50%);
      }

      [part="years"] [part="year-separator"]::after {
        color: var(--lumo-disabled-text-color);
        content: "•";
      }

      /* Current year */

      [part="years"] [part="year-number"][current] {
        color: var(--lumo-primary-text-color);
      }

      /* Toolbar (footer) */

      [part="toolbar"] {
        padding: var(--lumo-space-s);
        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);
        border-bottom-left-radius: var(--lumo-border-radius);
        margin-right: 57px;
      }

      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {
        [part="toolbar"] {
          box-shadow: none;
        }
      }

      [part="toolbar"] [part\$="button"] {
        margin: 0;
      }

      /* Narrow viewport mode (fullscreen) */

      :host([fullscreen]) [part="toolbar"] {
        order: -1;
        background-color: var(--lumo-base-color);
      }

      :host([fullscreen]) [part="overlay-header"] {
        order: -2;
        height: var(--lumo-size-m);
        padding: var(--lumo-space-s);
        position: absolute;
        left: 0;
        right: 0;
        justify-content: center;
      }

      :host([fullscreen]) [part="toggle-button"],
      :host([fullscreen]) [part="clear-button"],
      [part="overlay-header"] [part="label"] {
        display: none;
      }

      /* Very narrow screen (year scroller initially hidden) */

      [part="years-toggle-button"] {
        position: relative;
        right: auto;
        display: flex;
        align-items: center;
        height: var(--lumo-size-s);
        padding: 0 0.5em;
        border-radius: var(--lumo-border-radius);
        z-index: 3;
        color: var(--lumo-primary-text-color);
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([years-visible]) [part="years-toggle-button"] {
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
      }

      [part="years-toggle-button"]::before {
        content: none;
      }

      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
      @media screen and (max-width: 374px) {
        :host {
          background-image: none;
        }

        [part="years"] {
          background-color: var(--lumo-shade-5pct);
        }

        [part="toolbar"],
        [part="months"] {
          margin-right: 0;
        }

        /* TODO make date-picker adapt to the width of the years part */
        [part="years"] {
          --vaadin-infinite-scroller-buffer-width: 90px;
          width: 50px;
        }

        :host([years-visible]) [part="months"] {
          padding-left: 50px;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(a.content);var o=r.a`<dom-module id="lumo-month-calendar" theme-for="vaadin-month-calendar">
  <template>
    <style>
      :host {
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        font-size: var(--lumo-font-size-m);
        color: var(--lumo-body-text-color);
        text-align: center;
        padding: 0 var(--lumo-space-xs);
      }

      /* Month header */

      [part="month-header"] {
        color: var(--lumo-header-text-color);
        font-size: var(--lumo-font-size-l);
        line-height: 1;
        font-weight: 500;
        margin-bottom: var(--lumo-space-m);
      }

      /* Week days and numbers */

      [part="weekdays"],
      [part="weekday"],
      [part="week-numbers"] {
        font-size: var(--lumo-font-size-xs);
        line-height: 1;
        color: var(--lumo-tertiary-text-color);
      }

      [part="weekdays"] {
        margin-bottom: var(--lumo-space-s);
      }

      /* TODO should have part="week-number" for the cell in weekdays-container */
      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: var(--lumo-size-xs);
      }

      /* Date and week number cells */

      [part="date"],
      [part="week-number"] {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: var(--lumo-size-m);
        position: relative;
      }

      [part="date"] {
        transition: color 0.1s;
      }

      /* Today date */

      [part="date"][today] {
        color: var(--lumo-primary-text-color);
      }

      /* Focused date */

      [part="date"]::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 2em;
        min-height: 2em;
        width: 80%;
        height: 80%;
        max-height: 100%;
        max-width: 100%;
        border-radius: var(--lumo-border-radius);
      }

      [part="date"][focused]::before {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      :host(:not([focused])) [part="date"][focused]::before {
        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
      }

      @keyframes vaadin-date-picker-month-calendar-focus-date {
        50% {
          box-shadow: 0 0 0 2px transparent;
        }
      }

      /* TODO should not rely on the role attribute */
      [part="date"][role="button"]:not([disabled]):not([selected]):hover::before {
        background-color: var(--lumo-primary-color-10pct);
      }

      [part="date"][selected] {
        color: var(--lumo-primary-contrast-color);
      }

      [part="date"][selected]::before {
        background-color: var(--lumo-primary-color);
      }

      [part="date"][disabled] {
        color: var(--lumo-disabled-text-color);
      }

      @media (pointer: coarse) {
        [part="date"]:hover:not([selected])::before,
        [part="date"][focused]:not([selected])::before {
          display: none;
        }

        [part="date"][role="button"]:not([disabled]):active::before {
          display: block;
        }

        [part="date"][selected]::before {
          box-shadow: none;
        }
      }

      /* Disabled */

      :host([disabled]) * {
        color: var(--lumo-disabled-text-color) !important;
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
</custom-style>`;document.head.appendChild(o.content);i(71),i(124);var s=r.a`<dom-module id="lumo-date-picker" theme-for="vaadin-date-picker">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-calendar);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay-content"] {
          height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(s.content);i(122);var l=r.a`<dom-module id="lumo-date-picker-text-field" theme-for="vaadin-date-picker-text-field">
  <template>
    <style>
      :not(*):placeholder-shown, /* to prevent broken styles on IE */
      :host([dir="rtl"]) [part="value"]:placeholder-shown,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input:placeholder-shown) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(l.content);i(230),i(264)},264:function(e,t,i){"use strict";i.d(t,"a",(function(){return O}));var r=i(9),n=i(48),a=(i(144),i(19)),o=i(84),s=i(98),l=i(228);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class u extends(Object(l.a)(s.a)){static get is(){return"vaadin-date-picker-overlay"}}customElements.define(u.is,u);var c=i(206),d=i(209),h=(i(134),i(65)),p=(i(142),i(210)),m=i(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class f extends(Object(a.a)(Object(n.a)(r.a))){static get template(){return m.a`
    <style>
      :host {
        display: block;
      }

      [part="weekdays"],
      #days {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
      }

      #days-container,
      #weekdays-container {
        display: flex;
      }

      [part="week-numbers"] {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;
      }

      [part="week-numbers"][hidden],
      [part="weekday"][hidden] {
        display: none;
      }

      [part="weekday"],
      [part="date"] {
        /* Would use calc(100% / 7) but it doesn't work nice on IE */
        width: 14.285714286%;
      }

      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: 12.5%;
        flex-shrink: 0;
      }
    </style>

    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>
    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">
      <div id="weekdays-container">
        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>
        <div part="weekdays">
          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">
            <div part="weekday" role="heading" aria-label\$="[[item.weekDay]]">[[item.weekDayShort]]</div>
          </template>
        </div>
      </div>
      <div id="days-container">
        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">
          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">
            <div part="week-number" role="heading" aria-label\$="[[i18n.week]] [[item]]">[[item]]</div>
          </template>
        </div>
        <div id="days">
          <template is="dom-repeat" items="[[_days]]">
            <div part="date" today\$="[[_isToday(item)]]" selected\$="[[_dateEquals(item, selectedDate)]]" focused\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\$="[[_getRole(item)]]" aria-label\$="[[_getAriaLabel(item)]]" aria-disabled\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>
          </template>
        </div>
      </div>
    </div>
`}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)"]}_dateEquals(e,t){return p.a._dateEquals(e,t)}_dateAllowed(e,t,i){return p.a._dateAllowed(e,t,i)}_isDisabled(e,t,i){var r=new Date(0,0);r.setFullYear(e.getFullYear()),r.setMonth(e.getMonth()),r.setDate(1);var n=new Date(0,0);return n.setFullYear(e.getFullYear()),n.setMonth(e.getMonth()+1),n.setDate(0),!(t&&i&&t.getMonth()===i.getMonth()&&t.getMonth()===e.getMonth()&&i.getDate()-t.getDate()>=0)&&(!this._dateAllowed(r,t,i)&&!this._dateAllowed(n,t,i))}_getTitle(e,t){if(void 0!==e&&void 0!==t)return this.i18n.formatTitle(t[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300)}_dateAdd(e,t){e.setDate(e.getDate()+t)}_applyFirstDayOfWeek(e,t){if(void 0!==e&&void 0!==t)return e.slice(t).concat(e.slice(0,t))}_getWeekDayNames(e,t,i,r){if(void 0!==e&&void 0!==t&&void 0!==i&&void 0!==r)return e=this._applyFirstDayOfWeek(e,r),t=this._applyFirstDayOfWeek(t,r),e=e.map((e,i)=>({weekDay:e,weekDayShort:t[i]}))}_getDate(e){return e?e.getDate():""}_showWeekNumbersChanged(e,t){e&&1===t?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(e,t){return e&&1===t}_isToday(e){return this._dateEquals(new Date,e)}_getDays(e,t){if(void 0!==e&&void 0!==t){var i=new Date(0,0);for(i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(1);i.getDay()!==t;)this._dateAdd(i,-1);for(var r=[],n=i.getMonth(),a=e.getMonth();i.getMonth()===a||i.getMonth()===n;)r.push(i.getMonth()===a?new Date(i.getTime()):null),this._dateAdd(i,1);return r}}_getWeekNumber(e,t){if(void 0!==e&&void 0!==t)return e||(e=t.reduce((e,t)=>!e&&t?t:e)),p.a._getISOWeekNumber(e)}_getWeekNumbers(e){return e.map(t=>this._getWeekNumber(t,e)).filter((e,t,i)=>i.indexOf(e)===t)}_handleTap(e){this.ignoreTaps||this._notTapping||!e.target.date||e.target.hasAttribute("disabled")||(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}_getRole(e){return e?"button":"presentation"}_getAriaLabel(e){if(!e)return"";var t=this._getDate(e)+" "+this.i18n.monthNames[e.getMonth()]+" "+e.getFullYear()+", "+this.i18n.weekdays[e.getDay()];return this._isToday(e)&&(t+=", "+this.i18n.today),t}_getAriaDisabled(e,t,i){if(void 0!==e&&void 0!==t&&void 0!==i)return this._dateAllowed(e,t,i)?"false":"true"}}customElements.define(f.is,f);var v=i(11),_=i(15),y=i(42),g=i(54),b=i(50);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class w extends r.a{static get template(){return m.a`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 500px;
      }

      #scroller {
        position: relative;
        height: 100%;
        overflow: auto;
        outline: none;
        margin-right: -40px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        overflow-x: hidden;
      }

      #scroller.notouchscroll {
        -webkit-overflow-scrolling: auto;
      }

      #scroller::-webkit-scrollbar {
        display: none;
      }

      .buffer {
        position: absolute;
        width: var(--vaadin-infinite-scroller-buffer-width, 100%);
        box-sizing: border-box;
        padding-right: 40px;
        top: var(--vaadin-infinite-scroller-buffer-offset, 0);
        animation: fadein 0.2s;
      }

      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>

    <div id="scroller" on-scroll="_scroll">
      <div class="buffer"></div>
      <div class="buffer"></div>
      <div id="fullHeight"></div>
    </div>
`}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer")),this.$.fullHeight.style.height=2*this._initialScroll+"px";var e=this.querySelector("template");this._TemplateClass=Object(g.b)(e,this,{forwardHostProp:function(e,t){"index"!==e&&this._buffers.forEach(i=>{[].forEach.call(i.children,i=>{i._itemWrapper.instance[e]=t})})}}),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(this.$.scroller.tabIndex=-1)}forceUpdate(){this._debouncerUpdateClones&&(this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(),this._debouncerUpdateClones.cancel())}_activated(e){e&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(e=>{[].forEach.call(e.children,e=>this._ensureStampedInstance(e._itemWrapper))},this),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(e){var t=e?1:0;this._buffers[t].translateY=this._buffers[t?0:1].translateY+this._bufferHeight*(t?-1:1),this._buffers[t].style.transform="translate3d(0, "+this._buffers[t].translateY+"px, 0)",this._buffers[t].updated=!1,this._buffers.reverse()}_scroll(){if(!this._scrollDisabled){var e=this.$.scroller.scrollTop;(e<this._bufferHeight||e>2*this._initialScroll-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());var t=this.itemHeight+this.bufferOffset,i=e>this._buffers[1].translateY+t,r=e<this._buffers[0].translateY+t;(i||r)&&(this._translateBuffer(r),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=_.a.debounce(this._debouncerScrollFinish,v.d.after(200),()=>{var e=this.$.scroller.getBoundingClientRect();this._isVisible(this._buffers[0],e)||this._isVisible(this._buffers[1],e)||(this.position=this.position)})}}set position(e){this._preventScrollEvent=!0,e>this._firstIndex&&e<this._firstIndex+2*this.bufferSize?this.$.scroller.scrollTop=this.itemHeight*(e-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~e,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=e%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get bufferOffset(){return this._buffers[0].offsetTop}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}get itemHeight(){if(!this._itemHeightVal){window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles();var e=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-infinite-scroller-item-height"):getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height");this.$.fullHeight.style.setProperty("background-position",e);var t=getComputedStyle(this.$.fullHeight).getPropertyValue("background-position");this.$.fullHeight.style.removeProperty("background-position"),this._itemHeightVal=parseFloat(t)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(e=>{e.style.transform="translate3d(0, "+e.translateY+"px, 0)"}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=_.a.debounce(this._debouncerUpdateClones,v.d.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){var e=this,t=this.getBoundingClientRect();this._buffers.forEach(i=>{for(var r=function(){var r=document.createElement("div");r.style.height=e.itemHeight+"px",r.instance={};var n="vaadin-infinite-scroller-item-content-"+(w._contentIndex=w._contentIndex+1||0),a=document.createElement("slot");a.setAttribute("name",n),a._itemWrapper=r,i.appendChild(a),r.setAttribute("slot",n),e.appendChild(r),Object(y.b)(),setTimeout(()=>{e._isVisible(r,t)&&e._ensureStampedInstance(r)},1)},n=0;n<this.bufferSize;n++)r()},this),setTimeout(()=>{Object(b.a)(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(e){if(!e.firstElementChild){var t=e.instance;e.instance=new this._TemplateClass({}),e.appendChild(e.instance.root),Object.keys(t).forEach(i=>{e.instance.set(i,t[i])})}}_updateClones(e){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;var t=e?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((i,r)=>{if(!i.updated){var n=this._firstIndex+this.bufferSize*r;[].forEach.call(i.children,(i,r)=>{var a=i._itemWrapper;e&&!this._isVisible(a,t)||(a.instance.index=n+r)}),i.updated=!0}},this)}_isVisible(e,t){var i=e.getBoundingClientRect();return i.bottom>t.top&&i.top<t.bottom}}customElements.define(w.is,w);i(63);var x=document.createElement("template");x.innerHTML='<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([dir="rtl"]) {\n        align-items: flex-end;\n      }\n\n      :host([dir="rtl"][right-aligned]) {\n        align-items: flex-start;\n      }\n\n      [part="overlay"] {\n        display: flex;\n        flex: auto;\n      }\n\n      [part~="content"] {\n        flex: auto;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(x.content);var S=i(30);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class k extends(Object(a.a)(Object(h.a)(Object(n.a)(r.a)))){static get template(){return m.a`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        outline: none;
        background: #fff;
      }

      [part="overlay-header"] {
        display: flex;
        flex-shrink: 0;
        flex-wrap: nowrap;
        align-items: center;
      }

      :host(:not([fullscreen])) [part="overlay-header"] {
        display: none;
      }

      [part="label"] {
        flex-grow: 1;
      }

      [part="clear-button"]:not([showclear]) {
        display: none;
      }

      [part="years-toggle-button"] {
        display: flex;
      }

      [part="years-toggle-button"][desktop] {
        display: none;
      }

      :host(:not([years-visible])) [part="years-toggle-button"]::before {
        transform: rotate(180deg);
      }

      #scrollers {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      [part="months"],
      [part="years"] {
        height: 100%;
      }

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 270px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #scrollers[desktop] [part="months"] {
        right: 50px;
        transform: none !important;
      }

      [part="years"] {
        --vaadin-infinite-scroller-item-height: 80px;
        width: 50px;
        position: absolute;
        right: 0;
        transform: translateX(100%);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /* Center the year scroller position. */
        --vaadin-infinite-scroller-buffer-offset: 50%;
      }

      #scrollers[desktop] [part="years"] {
        position: absolute;
        transform: none !important;
      }

      [part="years"]::before {
        content: '';
        display: block;
        background: transparent;
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        border-left-color: #000;
      }

      :host(.animate) [part="months"],
      :host(.animate) [part="years"] {
        transition: all 200ms;
      }

      [part="toolbar"] {
        display: flex;
        justify-content: space-between;
        z-index: 2;
        flex-shrink: 0;
      }

      [part~="overlay-header"]:not([desktop]) {
        padding-bottom: 40px;
      }

      [part~="years-toggle-button"] {
        position: absolute;
        top: auto;
        right: 8px;
        bottom: 0;
        z-index: 1;
        padding: 8px;
      }

      #announcer {
        display: inline-block;
        position: fixed;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(100%);
      }
    </style>

    <div id="announcer" role="alert" aria-live="polite">
      [[i18n.calendar]]
    </div>

    <div part="overlay-header" on-touchend="_preventDefault" desktop\$="[[_desktopMode]]" aria-hidden="true">
      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
      <div part="clear-button" on-tap="_clear" showclear\$="[[_showClear(selectedDate)]]"></div>
      <div part="toggle-button" on-tap="_cancel"></div>

      <div part="years-toggle-button" desktop\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">
        [[_yearAfterXMonths(_visibleMonthIndex)]]
      </div>
    </div>

    <div id="scrollers" desktop\$="[[_desktopMode]]" on-track="_track">
      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">
        <template>
          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\$="[[_focused]]" part="month" theme\$="[[theme]]">
          </vaadin-month-calendar>
        </template>
      </vaadin-infinite-scroller>
      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">
        <template>
          <div part="year-number" role="button" current\$="[[_isCurrentYear(index)]]" selected\$="[[_isSelectedYear(index, selectedDate)]]">
            [[_yearAfterXYears(index)]]
          </div>
          <div part="year-separator" aria-hidden="true"></div>
        </template>
      </vaadin-infinite-scroller>
    </div>

    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
      <vaadin-button id="todayButton" theme="tertiary" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">
        [[i18n.today]]
      </vaadin-button>
      <vaadin-button id="cancelButton" theme="tertiary" part="cancel-button" on-tap="_cancel">
        [[i18n.cancel]]
      </vaadin-button>
    </div>

    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>
`}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{selectedDate:{type:Date,notify:!0},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,_focused:Boolean,label:String}}get __isRTL(){return"rtl"===this.getAttribute("dir")}get __useSubMonthScrolling(){return this.$.monthScroller.clientHeight<this.$.monthScroller.itemHeight+this.$.monthScroller.bufferOffset}ready(){super.ready(),this.setAttribute("tabindex",0),this.addEventListener("keydown",this._onKeydown.bind(this)),Object(S.addListener)(this,"tap",this._stopPropagation),this.addEventListener("focus",this._onOverlayFocus.bind(this)),this.addEventListener("blur",this._onOverlayBlur.bind(this))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),Object(S.setTouchAction)(this.$.scrollers,"pan-y"),d.a.requestAvailability()}announceFocusedDate(){var e=this._currentlyFocusedDate(),t=[];p.a._dateEquals(e,new Date)&&t.push(this.i18n.today),t=t.concat([this.i18n.weekdays[e.getDay()],e.getDate(),this.i18n.monthNames[e.getMonth()],e.getFullYear()]),this.showWeekNumbers&&1===this.i18n.firstDayOfWeek&&(t.push(this.i18n.week),t.push(p.a._getISOWeekNumber(e))),this.dispatchEvent(new CustomEvent("iron-announce",{bubbles:!0,composed:!0,detail:{text:t.join(" ")}}))}focusCancel(){this.$.cancelButton.focus()}scrollToDate(e,t){var i=this.__useSubMonthScrolling?this._calculateWeekScrollOffset(e):0;this._scrollToPosition(this._differenceInMonths(e,this._originDate)+i,t),this.$.monthScroller.forceUpdate()}_focusedDateChanged(e){this.revealDate(e)}_isCurrentYear(e){return 0===e}_isSelectedYear(e,t){if(t)return t.getFullYear()===this._originDate.getFullYear()+e}revealDate(e,t=!0){if(e){var i=this._differenceInMonths(e,this._originDate);if(this.__useSubMonthScrolling){var r=this._calculateWeekScrollOffset(e);this._scrollToPosition(i+r,t)}else{var n=this.$.monthScroller.position>i,a=Math.max(this.$.monthScroller.itemHeight,this.$.monthScroller.clientHeight-2*this.$.monthScroller.bufferOffset)/this.$.monthScroller.itemHeight,o=this.$.monthScroller.position+a-1<i;n?this._scrollToPosition(i,t):o&&this._scrollToPosition(i-a+1,t)}}}_calculateWeekScrollOffset(e){var t=new Date(0,0);t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth()),t.setDate(1);for(var i=0;t.getDate()<e.getDate();)t.setDate(t.getDate()+1),t.getDay()===this.i18n.firstDayOfWeek&&(i+=1);return i/6}_onOverlayFocus(){this._focused=!0}_onOverlayBlur(){this._focused=!1}_initialPositionChanged(e){this.scrollToDate(e)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=12*this.$.yearScroller.position-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=_.a.debounce(this._debouncer,v.d.after(300),()=>this._ignoreTaps=!1)}_formatDisplayed(e,t,i){return e?t(p.a._extractDateParts(e)):i}_onTodayTap(){var e=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this.selectedDate=e,this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_showClear(e){return!!e}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){var t=(e.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+12*t,!0)}}_scrollToPosition(e,t){if(void 0===this._targetPosition){if(!t)return this.$.monthScroller.position=e,this._targetPosition=void 0,void this._repositionYearScroller();this._targetPosition=e;var i=t?300:0,r=0,n=this.$.monthScroller.position,a=e=>{var t,o,s,l=e-(r=r||e);if(l<i){var u=(t=l,o=n,s=this._targetPosition-n,(t/=i/2)<1?s/2*t*t+o:-s/2*(--t*(t-2)-1)+o);this.$.monthScroller.position=u,window.requestAnimationFrame(a)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:n}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(a)}else this._targetPosition=e}_limit(e,t){return Math.min(t.max,Math.max(t.min,e))}_handleTrack(e){if(!(Math.abs(e.detail.dx)<10||Math.abs(e.detail.ddy)>10)){Math.abs(e.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);var t=this._translateX+e.detail.ddx;this._translateX=this._limit(t,{min:0,max:this._yearScrollerWidth})}}_track(e){if(!this._desktopMode)switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller()}}_toggleAnimateClass(e){e?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(e){this._desktopMode||(this.$.monthScroller.style.transform="translateX("+(e-this._yearScrollerWidth)+"px)",this.$.yearScroller.style.transform="translateX("+e+"px)")}_yearAfterXYears(e){var t=new Date(this._originDate);return t.setFullYear(parseInt(e)+this._originDate.getFullYear()),t.getFullYear()}_yearAfterXMonths(e){return this._dateAfterXMonths(e).getFullYear()}_dateAfterXMonths(e){var t=new Date(this._originDate);return t.setDate(1),t.setMonth(parseInt(e)+this._originDate.getMonth()),t}_differenceInMonths(e,t){return 12*(e.getFullYear()-t.getFullYear())-t.getMonth()+e.getMonth()}_differenceInYears(e,t){return this._differenceInMonths(e,t)/12}_clear(){this.selectedDate=""}_close(){var e=this.getRootNode().host,t=e?e.getRootNode().host:null;t&&(t.opened=!1),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(e){e.preventDefault()}_eventKey(e){for(var t=["down","up","right","left","enter","space","home","end","pageup","pagedown","tab","esc"],i=0;i<t.length;i++){var r=t[i];if(c.a.keyboardEventMatchesKeys(e,r))return r}}_onKeydown(e){var t=this._currentlyFocusedDate(),i=e.composedPath().indexOf(this.$.todayButton)>=0,r=e.composedPath().indexOf(this.$.cancelButton)>=0,n=!i&&!r,a=this._eventKey(e);if("tab"===a){e.stopPropagation();var o=this.hasAttribute("fullscreen"),s=e.shiftKey;o?e.preventDefault():s&&n||!s&&r?(e.preventDefault(),this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))):s&&i?(this._focused=!0,setTimeout(()=>this.revealDate(this.focusedDate),1)):this._focused=!1}else if(a)switch(e.preventDefault(),e.stopPropagation(),a){case"down":this._moveFocusByDays(7),this.focus();break;case"up":this._moveFocusByDays(-7),this.focus();break;case"right":n&&this._moveFocusByDays(this.__isRTL?-1:1);break;case"left":n&&this._moveFocusByDays(this.__isRTL?1:-1);break;case"enter":n||r?this._close():i&&this._onTodayTap();break;case"space":if(r)this._close();else if(i)this._onTodayTap();else{var l=this.focusedDate;p.a._dateEquals(l,this.selectedDate)?(this.selectedDate="",this.focusedDate=l):this.selectedDate=l}break;case"home":this._moveFocusInsideMonth(t,"minDate");break;case"end":this._moveFocusInsideMonth(t,"maxDate");break;case"pagedown":this._moveFocusByMonths(e.shiftKey?12:1);break;case"pageup":this._moveFocusByMonths(e.shiftKey?-12:-1);break;case"esc":this._cancel()}}_currentlyFocusedDate(){return this.focusedDate||this.selectedDate||this.initialPosition||new Date}_focusDate(e){this.focusedDate=e,this._focusedMonthDate=e.getDate()}_focusClosestDate(e){this._focusDate(p.a._getClosestDate(e,[this.minDate,this.maxDate]))}_moveFocusByDays(e){var t=this._currentlyFocusedDate(),i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()),i.setDate(t.getDate()+e),this._dateAllowed(i,this.minDate,this.maxDate)?this._focusDate(i):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this._focusDate(this.maxDate):this._focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusByMonths(e){var t=this._currentlyFocusedDate(),i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()+e);var r=i.getMonth();i.setDate(this._focusedMonthDate||(this._focusedMonthDate=t.getDate())),i.getMonth()!==r&&i.setDate(0),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusedDate=i:this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this._focusDate(this.maxDate):this._focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusInsideMonth(e,t){var i=new Date(0,0);i.setFullYear(e.getFullYear()),"minDate"===t?(i.setMonth(e.getMonth()),i.setDate(1)):(i.setMonth(e.getMonth()+1),i.setDate(0)),this._dateAllowed(i,this.minDate,this.maxDate)?this._focusDate(i):this._dateAllowed(e,this.minDate,this.maxDate)?this._focusDate(this[t]):this._focusClosestDate(e)}_dateAllowed(e,t,i){return(!t||e>=t)&&(!i||e<=i)}_isTodayAllowed(e,t){var i=new Date,r=new Date(0,0);return r.setFullYear(i.getFullYear()),r.setMonth(i.getMonth()),r.setDate(i.getDate()),this._dateAllowed(r,e,t)}_stopPropagation(e){e.stopPropagation()}}customElements.define(k.is,k);var A=i(73),C=i(67),E=e=>class extends(Object(C.b)([A.a],e)){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,observer:"_valueChanged",notify:!0,value:""},required:{type:Boolean,value:!1},name:{type:String},initialPosition:String,label:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean},_fullscreen:{value:!1,observer:"_fullscreenChanged"},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_touchPrevented:Array,i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",clear:"Clear",today:"Today",cancel:"Cancel",formatDate:e=>{var t=String(e.year).replace(/\d+/,e=>"0000".substr(e.length)+e);return[e.month+1,e.day,t].join("/")},parseDate:e=>{var t,i=e.split("/"),r=new Date,n=r.getMonth(),a=r.getFullYear();if(3===i.length?(a=parseInt(i[2]),i[2].length<3&&a>=0&&(a+=a<50?2e3:1900),n=parseInt(i[0])-1,t=parseInt(i[1])):2===i.length?(n=parseInt(i[0])-1,t=parseInt(i[1])):1===i.length&&(t=parseInt(i[0])),void 0!==t)return{day:t,month:n,year:a}},formatTitle:(e,t)=>e+" "+t})},min:{type:String,observer:"_minChanged"},max:{type:String,observer:"_maxChanged"},_minDate:{type:Date,value:""},_maxDate:{type:Date,value:""},_noInput:{type:Boolean,computed:"_isNoInput(_fullscreen, _ios, i18n, i18n.*, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)},_webkitOverflowScroll:{type:Boolean,value:""===document.createElement("div").style.webkitOverflowScrolling},_ignoreAnnounce:{value:!0},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_updateHasValue(value)","_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)","_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)"]}ready(){super.ready(),this._boundOnScroll=this._onScroll.bind(this),this._boundFocus=this._focus.bind(this),this._boundUpdateAlignmentAndPosition=this._updateAlignmentAndPosition.bind(this);var e=e=>{var t=e.composedPath(),i=t.indexOf(this._inputElement);return 1===t.slice(0,i).filter(e=>e.getAttribute&&"clear-button"===e.getAttribute("part")).length};Object(S.addListener)(this,"tap",t=>{e(t)||this.autoOpenDisabled&&!this._noInput||this.open()}),this.addEventListener("touchend",t=>{this._noInput&&!e(t)&&t.preventDefault()}),this.addEventListener("keydown",this._onKeydown.bind(this)),this.addEventListener("input",this._onUserInput.bind(this)),this.addEventListener("focus",e=>this._noInput&&e.target.blur()),this.addEventListener("blur",e=>{if(!this.opened){if(this.autoOpenDisabled){var t=this._getParsedDate();this._isValidDate(t)&&(this._selectedDate=t)}""===this._inputElement.value&&this.__dispatchChange?(this.validate(),this.value="",this.__dispatchChange=!1):this.validate()}})}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",e=>this.opened=e.detail.value),this._overlayContent.addEventListener("close",this._close.bind(this)),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._boundFocus),this._overlayContent.addEventListener("focus",()=>this.focusElement._setFocused(!0)),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this));var e=e=>{this.$.overlay.bringToFront&&requestAnimationFrame(()=>{this.$.overlay.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e)}disconnectedCallback(){super.disconnectedCallback(),this._overlayInitialized&&this.$.overlay.removeEventListener("vaadin-overlay-escape-press",this._boundFocus),this.opened=!1}open(){this.disabled||this.readonly||(this.opened=!0)}_close(e){e&&e.stopPropagation(),this._focus(),this.close()}close(){(this._overlayInitialized||this.autoOpenDisabled)&&this.$.overlay.close()}get _inputElement(){return this._input()}get _nativeInput(){if(this._inputElement)return this._inputElement.focusElement?this._inputElement.focusElement:this._inputElement.inputElement?this._inputElement.inputElement:window.unwrap?window.unwrap(this._inputElement):this._inputElement}_parseDate(e){var t=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(e);if(t){var i=new Date(0,0);return i.setFullYear(parseInt(t[1],10)),i.setMonth(parseInt(t[2],10)-1),i.setDate(parseInt(t[3],10)),i}}_isNoInput(e,t,i,r,n,a){var o=e&&(!a||n),s=t&&n;return!this._inputElement||o||s||!i.parseDate}_formatISO(e){if(!(e instanceof Date))return"";var t=(e,t="00")=>(t+e).substr((t+e).length-t.length),i="",r="0000",n=e.getFullYear();return n<0?(n=-n,i="-",r="000000"):e.getFullYear()>=1e4&&(i="+",r="000000"),[i+t(n,r),t(e.getMonth()+1),t(e.getDate())].join("-")}_openedChanged(e){e&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=e),e&&this._updateAlignmentAndPosition()}_selectedDateChanged(e,t){if(void 0!==e&&void 0!==t){this.__userInputOccurred&&(this.__dispatchChange=!0);var i=this._formatISO(e);this.__keepInputValue||this._applyInputValue(e),i!==this.value&&(this.validate(),this.value=i),this.__userInputOccurred=!1,this.__dispatchChange=!1,this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1}}_focusedDateChanged(e,t){void 0!==e&&void 0!==t&&(this.__userInputOccurred=!0,this._ignoreFocusedDateChange||this._noInput||this._applyInputValue(e))}_updateHasValue(e){e?this.setAttribute("has-value",""):this.removeAttribute("has-value")}__getOverlayTheme(e,t){if(t)return e}_handleDateChange(e,t,i){if(t){var r=this._parseDate(t);r?p.a._dateEquals(this[e],r)||(this[e]=r,this.value&&this.validate()):this.value=i}else this[e]=""}_valueChanged(e,t){this.__dispatchChange&&this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._handleDateChange("_selectedDate",e,t)}_minChanged(e,t){this._handleDateChange("_minDate",e,t)}_maxChanged(e,t){this._handleDateChange("_maxDate",e,t)}_updateAlignmentAndPosition(){if(this._overlayInitialized){if(!this._fullscreen){var e=this._inputElement.getBoundingClientRect(),t=e.top>window.innerHeight/2;if(e.left+this.clientWidth/2>window.innerWidth/2){var i=Math.min(window.innerWidth,document.documentElement.clientWidth);this.$.overlay.setAttribute("right-aligned",""),this.$.overlay.style.removeProperty("left"),this.$.overlay.style.right=i-e.right+"px"}else this.$.overlay.removeAttribute("right-aligned"),this.$.overlay.style.removeProperty("right"),this.$.overlay.style.left=e.left+"px";if(t){var r=Math.min(window.innerHeight,document.documentElement.clientHeight);this.$.overlay.setAttribute("bottom-aligned",""),this.$.overlay.style.removeProperty("top"),this.$.overlay.style.bottom=r-e.top+"px"}else this.$.overlay.removeAttribute("bottom-aligned"),this.$.overlay.style.removeProperty("bottom"),this.$.overlay.style.top=e.bottom+"px"}this.$.overlay.setAttribute("dir",getComputedStyle(this._inputElement).getPropertyValue("direction")),this._overlayContent._repositionYearScroller()}}_fullscreenChanged(){this._overlayInitialized&&this.$.overlay.opened&&this._updateAlignmentAndPosition()}_onOverlayOpened(){this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring");var e=this._parseDate(this.initialPosition),t=this._selectedDate||this._overlayContent.initialPosition||e||new Date;e||p.a._dateAllowed(t,this._minDate,this._maxDate)?this._overlayContent.initialPosition=t:this._overlayContent.initialPosition=p.a._getClosestDate(t,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this.addEventListener("iron-resize",this._boundUpdateAlignmentAndPosition),this._webkitOverflowScroll&&(this._touchPrevented=this._preventWebkitOverflowScrollingTouch(this.parentElement)),this._focusOverlayOnOpen?(this._overlayContent.focus(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&this.focusElement.blur(),this.updateStyles(),this._ignoreAnnounce=!1}_preventWebkitOverflowScrollingTouch(e){for(var t=[];e;){if("touch"===window.getComputedStyle(e).webkitOverflowScrolling){var i=e.style.webkitOverflowScrolling;e.style.webkitOverflowScrolling="auto",t.push({element:e,oldInlineValue:i})}e=e.parentElement}return t}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){var e=this._inputValue||"",t=this._getParsedDate(e);this._isValidDate(t)?this._selectedDate=t:(this.__keepInputValue=!0,this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&(this._selectedDate=this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){this._ignoreAnnounce=!0,window.removeEventListener("scroll",this._boundOnScroll,!0),this.removeEventListener("iron-resize",this._boundUpdateAlignmentAndPosition),this._touchPrevented&&(this._touchPrevented.forEach(e=>e.element.style.webkitOverflowScrolling=e.oldInlineValue),this._touchPrevented=[]),this.updateStyles(),this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.value||this.validate()}validate(){return!(this.invalid=!this.checkValidity(this._inputValue))}checkValidity(){var e=!this._inputValue||this._selectedDate&&this._inputValue===this._getFormattedDate(this.i18n.formatDate,this._selectedDate),t=!this._selectedDate||p.a._dateAllowed(this._selectedDate,this._minDate,this._maxDate),i=!0;return this._inputElement&&(this._inputElement.checkValidity?(this._inputElement.__forceCheckValidity=!0,i=this._inputElement.checkValidity(),this._inputElement.__forceCheckValidity=!1):this._inputElement.validate&&(i=this._inputElement.validate())),e&&t&&i}_onScroll(e){e.target!==window&&this._overlayContent.contains(e.target)||this._updateAlignmentAndPosition()}_focus(){this._noInput?this._overlayInitialized&&this._overlayContent.focus():this._inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_applyInputValue(e){this._inputValue=e?this._getFormattedDate(this.i18n.formatDate,e):""}_getFormattedDate(e,t){return e(p.a._extractDateParts(t))}_setSelectionRange(e,t){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,t)}_eventKey(e){for(var t=["down","up","enter","esc","tab"],i=0;i<t.length;i++){var r=t[i];if(c.a.keyboardEventMatchesKeys(e,r))return r}}_isValidDate(e){return e&&!isNaN(e.getTime())}_onKeydown(e){if(this._noInput){-1===[9].indexOf(e.keyCode)&&e.preventDefault()}switch(this._eventKey(e)){case"down":case"up":e.preventDefault(),this.opened?(this._overlayContent.focus(),this._overlayContent._onKeydown(e)):(this._focusOverlayOnOpen=!0,this.open());break;case"enter":var t=this._getParsedDate(),i=this._isValidDate(t);if(this.opened)this._overlayInitialized&&this._overlayContent.focusedDate&&i&&(this._selectedDate=this._overlayContent.focusedDate),this.close();else if(i||""===this._inputElement.value){var r=this.value;this._selectParsedOrFocusedDate(),r===this.value&&this.validate()}else this.validate();break;case"esc":this.opened?(this._focusedDate=this._selectedDate,this._close()):this.autoOpenDisabled?(""===this._inputElement.value&&(this._selectedDate=null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate());break;case"tab":this.opened&&(e.preventDefault(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():(this._overlayContent.focus(),this._overlayContent.revealDate(this._focusedDate)))}}_getParsedDate(e=this._inputValue){var t=this.i18n.parseDate&&this.i18n.parseDate(e);return t&&this._parseDate(t.year+"-"+(t.month+1)+"-"+t.day)}_onUserInput(e){this.opened||!this._inputElement.value||this.autoOpenDisabled||this.open(),this._userInputValueChanged(),e.__fromClearButton&&(this.validate(),this.__dispatchChange=!0,this.value="",this.__dispatchChange=!1)}_userInputValueChanged(e){if(this._inputValue){var t=this._getParsedDate();this._isValidDate(t)&&(this._ignoreFocusedDateChange=!0,p.a._dateEquals(t,this._focusedDate)||(this._focusedDate=t),this._ignoreFocusedDateChange=!1)}}_announceFocusedDate(e,t,i){t&&!i&&this._overlayContent.announceFocusedDate()}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}},P=(i(230),i(21));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class O extends(Object(P.a)(Object(o.a)(Object(a.a)(E(Object(n.a)(r.a)))))){static get template(){return m.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>


    <vaadin-date-picker-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" clear-button-visible="[[clearButtonVisible]]" aria-label\$="[[label]]" part="text-field" helper-text="[[helperText]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <slot name="helper" slot="helper">[[helperText]]</slot>
      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\$="[[i18n.calendar]]" aria-expanded\$="[[_getAriaExpanded(opened)]]"></div>
    </vaadin-date-picker-text-field>

    <vaadin-date-picker-overlay id="overlay" fullscreen\$="[[_fullscreen]]" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">
      <template>
        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]">
        </vaadin-date-picker-overlay-content>
      </template>
    </vaadin-date-picker-overlay>

    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">
    </iron-media-query>
`}static get is(){return"vaadin-date-picker"}static get version(){return"4.4.5"}static get properties(){return{clearButtonVisible:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:String,placeholder:String,helperText:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_userInputValue:String}}static get observers(){return["_userInputValueChanged(_userInputValue)","_setClearButtonLabel(i18n.clear)"]}ready(){super.ready(),Object(b.a)(this,()=>this._inputElement.validate=()=>{}),this._inputElement.addEventListener("change",e=>{""!==this._inputElement.value||e.__fromClearButton||(this.__dispatchChange=!0)})}_onVaadinOverlayClose(e){this._openedWithFocusRing&&this.hasAttribute("focused")?this.focusElement.setAttribute("focus-ring",""):this.hasAttribute("focused")||this.focusElement.blur(),e.detail.sourceEvent&&-1!==e.detail.sourceEvent.composedPath().indexOf(this)&&e.preventDefault()}_toggle(e){e.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_input(){return this.$.input}set _inputValue(e){this._inputElement.value=e}get _inputValue(){return this._inputElement.value}_getAriaExpanded(e){return Boolean(e).toString()}get focusElement(){return this._input()||this}_setClearButtonLabel(e){this._inputElement.shadowRoot.querySelector('[part="clear-button"]').setAttribute("aria-label",e)}}customElements.define(O.is,O)},266:function(e,t,i){"use strict";i(225),i(226),i(231),i(124),i(71);var r=i(6),n=r.a`<dom-module id="lumo-time-picker" theme-for="vaadin-time-picker">
  <template>
    <style include="lumo-field-button">
      [part~="toggle-button"]::before {
        content: var(--lumo-icons-clock);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);i(122);var a=r.a`<dom-module id="lumo-time-picker-text-field" theme-for="vaadin-time-picker-text-field">
  <template>
    <style>
      :not(*):placeholder-shown, /* to prevent broken styles on IE */
      :host([dir="rtl"]) [part="value"]:placeholder-shown,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input:placeholder-shown) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(a.content);i(279)},268:function(e,t,i){"use strict";i(122),i(173),i(136),i(232),i(233);var r=i(6).a`<dom-module id="lumo-login-form" theme-for="vaadin-login-form">
  <template>
    <style>
      vaadin-button[part="vaadin-login-submit"] {
        margin-top: var(--lumo-space-l);
        margin-bottom: var(--lumo-space-s);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(234)},270:function(e,t,i){"use strict";var r=i(9),n=(i(218),i(19)),a=i(65),o=i(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class s extends(Object(n.a)(Object(a.a)(r.a))){static get template(){return o.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
         display: none;
      }
    </style>
    <div part="content" id="content"></div>
`}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},_itemTemplateInstance:Object,renderer:Function,_oldRenderer:Function}}static get observers(){return["_rendererOrItemChanged(renderer, index, item.*)","_updateLabel(label, _itemTemplateInstance)",'_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)','_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)','_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)','_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)']}connectedCallback(){if(super.connectedCallback(),!this._itemTemplateInstance){var e=this.getRootNode().host.getRootNode().host.__dataHost.getRootNode().host;this._comboBox=e.getRootNode().host,this._comboBox._ensureTemplatized(),this._comboBox._TemplateClass&&(this._itemTemplateInstance=new this._comboBox._TemplateClass({}),this.$.content.textContent="",this.$.content.appendChild(this._itemTemplateInstance.root))}var t=this._comboBox.getAttribute("dir");t&&this.setAttribute("dir",t)}_render(){if(this.renderer){var e={index:this.index,item:this.item};this.renderer(this.$.content,this._comboBox,e)}}_rendererOrItemChanged(e,t,i){void 0!==i&&void 0!==t&&(this._oldRenderer!==e&&(this.$.content.innerHTML=""),e&&(this._oldRenderer=e,this._render()))}_updateLabel(e,t){void 0===t&&this.$.content&&!this.renderer&&(this.$.content.textContent=e)}_updateTemplateInstanceVariable(e,t,i){void 0!==e&&void 0!==t&&void 0!==i&&(i[e]=t)}}customElements.define(s.is,s);var l,u=i(228),c=i(98),d=i(73),h=i(67),p=document.createElement("template");p.innerHTML='<dom-module id="vaadin-combo-box-overlay-styles" theme-for="vaadin-combo-box-overlay">\n  <template>\n    <style>\n      :host {\n        width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(p.content);class m extends c.a{static get is(){return"vaadin-combo-box-overlay"}static get properties(){return{positionTarget:{type:Object}}}static get template(){return l||(l=super.template.cloneNode(!0)).content.querySelector('[part~="overlay"]').removeAttribute("tabindex"),l}connectedCallback(){super.connectedCallback();var e=this.__dataHost.getRootNode().host,t=e&&e.getRootNode().host,i=t&&t.getAttribute("dir");i&&this.setAttribute("dir",i)}ready(){super.ready();var e=document.createElement("div");e.setAttribute("part","loader");var t=this.shadowRoot.querySelector('[part~="content"]');t.parentNode.insertBefore(e,t)}_outsideClickListener(e){var t=e.composedPath();t.indexOf(this.positionTarget)<0&&t.indexOf(this)<0&&this.close()}}customElements.define(m.is,m);class f extends(Object(u.a)(Object(h.b)(d.a,r.a))){static get template(){return o.a`
    <style>
      :host {
        display: block;
      }

      :host > #overlay {
        display: none;
      }
    </style>
    <vaadin-combo-box-overlay id="overlay" hidden\$="[[hidden]]" position-target="[[positionTarget]]" opened="{{opened}}" template="{{template}}" style="align-items: stretch; margin: 0;" theme\$="[[theme]]">
      <slot></slot>
    </vaadin-combo-box-overlay>
`}static get is(){return"vaadin-combo-box-dropdown"}static get properties(){return{opened:{type:Boolean,observer:"_openedChanged"},template:{type:Object,notify:!0},positionTarget:{type:Object},alignedAbove:{type:Boolean,value:!1},theme:String}}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready(),this.$.overlay.addEventListener("vaadin-overlay-outside-click",e=>{e.preventDefault()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}notifyResize(){super.notifyResize(),this.positionTarget&&this.opened&&(this._setPosition(),requestAnimationFrame(this._setPosition.bind(this)))}_openedChanged(e,t){!!e!=!!t&&(e?(this.$.overlay.style.position=this._isPositionFixed(this.positionTarget)?"fixed":"absolute",this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):this.__emptyItems||(window.removeEventListener("scroll",this._boundSetPosition,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))))}_isPositionFixed(e){var t=this._getOffsetParent(e);return"fixed"===window.getComputedStyle(e).position||t&&this._isPositionFixed(t)}_getOffsetParent(e){if(e.assignedSlot)return e.assignedSlot.parentElement;if(e.parentElement)return e.offsetParent;var t=e.parentNode;return t&&11===t.nodeType&&t.host?t.host:void 0}_verticalOffset(e,t){return this.alignedAbove?-e.height:t.height}_shouldAlignAbove(e){return(window.innerHeight-e.bottom-Math.min(document.body.scrollTop,0))/window.innerHeight<.3}_getCustomWidth(){return window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-combo-box-overlay-width"):getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-width")}_setOverlayWidth(){var e=this.positionTarget.clientWidth+"px",t=this._getCustomWidth();window.ShadyCSS&&!window.ShadyCSS.nativeCss?window.ShadyCSS.styleSubtree(this.$.overlay,{"--vaadin-combo-box-overlay-width":t,"--_vaadin-combo-box-overlay-default-width":e}):(this.$.overlay.style.setProperty("--_vaadin-combo-box-overlay-default-width",e),""===t?this.$.overlay.style.removeProperty("--vaadin-combo-box-overlay-width"):this.$.overlay.style.setProperty("--vaadin-combo-box-overlay-width",t))}_setPosition(e){if(!this.hidden){if(e&&e.target){var t=e.target===document?document.body:e.target,i=this.$.overlay.parentElement;if(!t.contains(this.$.overlay)&&!t.contains(this.positionTarget)||i!==document.body)return}var r=this.positionTarget.getBoundingClientRect();this.alignedAbove=this._shouldAlignAbove(r);var n=this.$.overlay.getBoundingClientRect();this._translateX=r.left-n.left+(this._translateX||0),this._translateY=r.top-n.top+(this._translateY||0)+this._verticalOffset(n,r);var a=window.devicePixelRatio||1;this._translateX=Math.round(this._translateX*a)/a,this._translateY=Math.round(this._translateY*a)/a,this.$.overlay.style.transform=`translate3d(${this._translateX}px, ${this._translateY}px, 0)`,this.$.overlay.style.justifyContent=this.alignedAbove?"flex-end":"flex-start",this._setOverlayWidth(),this.dispatchEvent(new CustomEvent("position-changed"))}}}customElements.define(f.is,f);var v=i(208),_=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class y extends class extends r.a{}{static get template(){return o.a`
    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">
      <template>
        <style>
          #scroller {
            overflow: auto;

            /* Fixes item background from getting on top of scrollbars on Safari */
            transform: translate3d(0, 0, 0);

            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */
            -webkit-overflow-scrolling: touch;

            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
            box-shadow: 0 0 0 white;
          }
        </style>
        <div id="scroller" on-click="_stopPropagation">
          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">
            <template>
              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index, _resetScrolling)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role\$="[[_getAriaRole(index)]]" aria-selected\$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme\$="[[theme]]">
              </vaadin-combo-box-item>
            </template>
          </iron-list>
        </div>
      </template>
    </vaadin-combo-box-dropdown>
`}static get is(){return"vaadin-combo-box-dropdown-wrapper"}static get properties(){return{touchDevice:{type:Boolean,value:_},opened:Boolean,positionTarget:{type:Object},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_setOverlayHeight"},theme:String,filterChanged:{type:Boolean,value:!1},_resetScrolling:{type:Boolean,value:!1},_selectedItem:{type:Object},_items:{type:Object},_focusedIndex:{type:Number,value:-1,observer:"_focusedIndexChanged"},_focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_selector:Object,_itemIdPath:String,_oldScrollerPosition:{type:Number,value:0}}}static get observers(){return["_selectorChanged(_selector)","_loadingChanged(loading)","_openedChanged(opened, _items, loading)","_restoreScrollerPosition(_items)"]}_fireTouchAction(e){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:e}}))}_getItems(e,t){if(e){if(this._isNotEmpty(t)&&this._selector&&!this.filterChanged){var i=this._selector.firstVisibleIndex;0!==i&&(this._oldScrollerPosition=i,this._resetScrolling=!0)}return this.filterChanged=!1,t}return[]}_restoreScrollerPosition(e){this._isNotEmpty(e)&&this._selector&&0!==this._oldScrollerPosition&&(this._scrollIntoView(Math.min(e.length-1,this._oldScrollerPosition)),this._resetScrolling=!1,this._oldScrollerPosition=0)}_isNotEmpty(e){return!this._isEmpty(e)}_isEmpty(e){return!e||!e.length}_openedChanged(e,t,i){if(this.$.dropdown.hasAttribute("disable-upgrade")){if(!e)return;this._initDropdown()}this._isEmpty(t)&&(this.$.dropdown.__emptyItems=!0),this.$.dropdown.opened=!(!e||!i&&!this._isNotEmpty(t)),this.$.dropdown.__emptyItems=!1}_initDropdown(){this.$.dropdown.removeAttribute("disable-upgrade"),this._templateChanged(),this._loadingChanged(this.loading),this.$.dropdown.$.overlay.addEventListener("touchend",e=>this._fireTouchAction(e)),this.$.dropdown.$.overlay.addEventListener("touchmove",e=>this._fireTouchAction(e)),this.$.dropdown.$.overlay.addEventListener("mousedown",e=>e.preventDefault()),/Trident/.test(navigator.userAgent)&&this._scroller.setAttribute("unselectable","on")}_templateChanged(e){this.$.dropdown.hasAttribute("disable-upgrade")||(this._selector=this.$.dropdown.$.overlay.content.querySelector("#selector"),this._scroller=this.$.dropdown.$.overlay.content.querySelector("#scroller"))}_loadingChanged(e){this.$.dropdown.hasAttribute("disable-upgrade")||(e?this.$.dropdown.$.overlay.setAttribute("loading",""):this.$.dropdown.$.overlay.removeAttribute("loading"))}_selectorChanged(e){this._patchWheelOverScrolling()}_setOverlayHeight(){if(this.opened&&this.positionTarget&&this._selector){var e=this.positionTarget.getBoundingClientRect();this._scroller.style.maxHeight=(window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-combo-box-overlay-max-height"):getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-max-height"))||"65vh";var t=this._maxOverlayHeight(e);this.$.dropdown.$.overlay.style.maxHeight=t,this._selector.style.maxHeight=t,this.updateViewportBoundaries()}}_maxOverlayHeight(e){return this.$.dropdown.alignedAbove?Math.max(e.top-8+Math.min(document.body.scrollTop,0),116)+"px":Math.max(document.documentElement.clientHeight-e.bottom-8,116)+"px"}_getFocusedItem(e){if(e>=0)return this._items[e]}_isItemSelected(e,t,i){return!(e instanceof v.a)&&(i&&void 0!==e&&void 0!==t?this.get(i,e)===this.get(i,t):e===t)}_onItemClick(e){e.detail&&e.detail.sourceEvent&&e.detail.sourceEvent.stopPropagation&&this._stopPropagation(e.detail.sourceEvent),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.model.item}}))}indexOfLabel(e){if(this._items&&e)for(var t=0;t<this._items.length;t++)if(this.getItemLabel(this._items[t]).toString().toLowerCase()===e.toString().toLowerCase())return t;return-1}__requestItemByIndex(e,t,i){return e instanceof v.a&&void 0!==t&&!i&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t,currentScrollerPos:this._oldScrollerPosition}})),t}getItemLabel(e,t){t=t||this._itemLabelPath;var i=e&&t?this.get(t,e):void 0;return null==i&&(i=e?e.toString():""),i}_isItemFocused(e,t){return e==t}_getAriaSelected(e,t){return this._isItemFocused(e,t).toString()}_getAriaRole(e){return void 0!==e&&"option"}_focusedIndexChanged(e){e>=0&&this._scrollIntoView(e)}_scrollIntoView(e){if(this.opened&&e>=0){var t=this._visibleItemsCount();if(void 0!==t){var i=e;e>this._selector.lastVisibleIndex-1?(this._selector.scrollToIndex(e),i=e-t+1):e>this._selector.firstVisibleIndex&&(i=this._selector.firstVisibleIndex),this._selector.scrollToIndex(Math.max(0,i));var r=this._selector._getPhysicalIndex(e),n=this._selector._physicalItems[r];if(n){var a=n.getBoundingClientRect(),o=this._scroller.getBoundingClientRect(),s=a.bottom-o.bottom+this._viewportTotalPaddingBottom;s>0&&(this._scroller.scrollTop+=s)}}}}ensureItemsRendered(){this._selector._render()}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}_patchWheelOverScrolling(){var e=this._selector;e.addEventListener("wheel",t=>{var i=e._scroller||e.scrollTarget,r=0===i.scrollTop,n=i.scrollHeight-i.scrollTop-i.clientHeight<=1;(r&&t.deltaY<0||n&&t.deltaY>0)&&t.preventDefault()})}updateViewportBoundaries(){this._cachedViewportTotalPaddingBottom=void 0,this._selector.updateViewportBoundaries()}get _viewportTotalPaddingBottom(){if(void 0===this._cachedViewportTotalPaddingBottom){var e=window.getComputedStyle(this._selector.$.items);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(e=>parseInt(e,10)).reduce((e,t)=>e+t)}return this._cachedViewportTotalPaddingBottom}_visibleItemsCount(){if(this._selector)return this._selector.flushDebouncer("_debounceTemplate"),this._selector.scrollToIndex(this._selector.firstVisibleIndex),this.updateViewportBoundaries(),this._selector.lastVisibleIndex-this._selector.firstVisibleIndex+1}_selectItem(e){e="number"==typeof e?this._items[e]:e,this._selector.selectedItem!==e&&this._selector.selectItem(e)}_preventDefault(e){e.cancelable&&e.preventDefault()}_stopPropagation(e){e.stopPropagation()}_hidden(e){return!this.loading&&this._isEmpty(this._items)}}customElements.define(y.is,y)},272:function(e,t,i){"use strict";i(36),i(56),i(34),i(52),i(143);var r=i(6).a`<dom-module id="lumo-custom-field" theme-for="vaadin-custom-field">
  <template>
    <style include="lumo-required-field">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        /* align with text-field height + vertical paddings */
        line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: 0;
      }

      :host::before {
        margin-top: var(--lumo-space-xs);
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      /* align with text-field label */
      :host([has-label]) [part="label"] {
        padding-bottom: calc(0.5em - var(--lumo-space-xs));
      }

      :host(:not([has-label])) [part="label"],
      :host(:not([has-label]))::before {
        display: none;
      }

      /* align with text-field error message */
      :host([invalid]) [part="error-message"]:not(:empty)::before {
        height: calc(0.4em - var(--lumo-space-xs));
      }

      :host([focused]:not([readonly]):not([disabled])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      :host(:hover:not([readonly]):not([disabled]):not([focused])) [part="label"],
      :host(:hover:not([readonly]):not([disabled]):not([focused])) [part="helper-text"],
      :host(:hover:not([readonly]):not([disabled]):not([focused])) [part="helper-text"] ::slotted(*) {
        color: var(--lumo-body-text-color);
      }

      :host([has-helper]) [part="helper-text"]::before {
        content: "";
        display: block;
        height: 0.4em;
      }

      [part="helper-text"],
      [part="helper-text"] ::slotted(*) {
        display: block;
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
      }

      /* helper-text position */

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
        display: none;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="label"] {
        order: 0;
        padding-bottom: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"] {
        order: 1;
      }

      :host([has-helper][theme~="helper-above-field"]) .inputs-wrapper {
        order: 2;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="error-message"] {
        order: 3;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([disabled]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }
      }

      /* Disabled style */

      :host([disabled]) [part="label"] {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(278)},273:function(e,t,i){"use strict";i(36),i(38);var r=i(6).a`<dom-module id="lumo-radio-button" theme-for="vaadin-radio-button">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="radio"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: 50%;
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        will-change: transform;
        line-height: 1.2;
        transform: translateZ(0); /* Workaround IE11 jumpiness */
      }

      /* Used for activation "halo" */
      [part="radio"]::before {
        /* Needed to align the radio-button nicely on the baseline */
        content: "\\2003";
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
        will-change: transform, opacity;
      }

      /* Used for the dot */
      [part="radio"]::after {
        content: "";
        width: 0;
        height: 0;
        border: 3px solid var(--lumo-primary-contrast-color);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: 0.25s transform;
        will-change: transform;
        background-clip: content-box;
      }

      :host([checked]) [part="radio"] {
        background-color: var(--lumo-primary-color);
      }

      :host([checked]) [part="radio"]::after {
        transform: translate(-50%, -50%) scale(1);
      }

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="radio"] {
        background-color: var(--lumo-contrast-30pct);
      }

      :host([active]) [part="radio"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="radio"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="radio"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }

      :host([focus-ring]) [part="radio"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="radio"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="radio"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      /* IE11 only */
      ::-ms-backdrop,
      [part="radio"] {
        line-height: 1;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="label"]:not([empty]) {
        margin: 0.1875em 0.375em 0.1875em 0.875em;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(237)},274:function(e,t,i){"use strict";i(71),i(56),i(124);var r=i(6).a`<dom-module id="lumo-number-field" theme-for="vaadin-number-field">
  <template>
    <style include="lumo-field-button">
      :host {
        width: 8em;
      }

      :host([has-controls]:not([theme~="align-right"])) [part="value"] {
        text-align: center;
      }

      [part="decrease-button"][disabled],
      [part="increase-button"][disabled] {
        opacity: 0.2;
      }

      :host([has-controls]) [part="input-field"] {
        padding: 0;
      }

      [part="decrease-button"],
      [part="increase-button"] {
        cursor: pointer;
        font-size: var(--lumo-icon-size-s);
        width: 1.6em;
        height: 1.6em;
      }

      [part="decrease-button"]::before,
      [part="increase-button"]::before {
        margin-top: 0.2em;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(122),i(238)},278:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i(9),n=i(19),a=i(21),o=i(23),s=e=>class extends e{static get properties(){return{inputs:{type:Array,readOnly:!0},i18n:{type:Object,value:()=>({parseValue:function(e){return e.split("\t")},formatValue:function(e){return e.join("\t")}})},__errorId:String,__labelId:String,__helperTextId:String,__hasSlottedHelper:Boolean}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.__setInputsFromSlot(),this.__observer=new o.a(this.$.slot,()=>{this.__setInputsFromSlot()}),this.$.helperSlot.addEventListener("slotchange",this.__onHelperSlotChange.bind(this)),this.__onHelperSlotChange();var e=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);this.addEventListener("keydown",t=>{if(9===t.keyCode){if("slot"===t.target.parentElement.localName&&!t.defaultPrevented&&e){var i=t.target.parentElement;i.setAttribute("tabindex",-1),setTimeout(()=>i.removeAttribute("tabindex"))}this.inputs.indexOf(t.target)<this.inputs.length-1&&!t.shiftKey||this.inputs.indexOf(t.target)>0&&t.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue()}}),this.addEventListener("focusin",()=>this.setAttribute("focused","")),this.addEventListener("focusout",e=>{var t=this.getRootNode().activeElement;this.inputs.some(e=>t===e||e.shadowRoot&&e.shadowRoot.contains(t))||this.removeAttribute("focused")});var t=s._uniqueId=1+s._uniqueId||1;this.__errorId=`${this.constructor.is}-error-${t}`,this.__labelId=`${this.constructor.is}-label-${t}`,this.__helperTextId=`${this.constructor.is}-helper-${t}`}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}__updateValue(e){e&&e.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0,this.value=this.i18n.formatValue.apply(this,[this.inputs.map(e=>e.value)]),this.__settingValue=!1}__queryAllAssignedElements(e){var t,i=[];return"SLOT"===e.tagName?t=e.assignedNodes({flatten:!0}).filter(e=>e.nodeType===Node.ELEMENT_NODE):(i.push(e),t=Array.from(e.children)),t.forEach(e=>i.push(...this.__queryAllAssignedElements(e))),i}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter(e=>e.validate||e.checkValidity)}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__valueChanged(e,t){if(!this.__settingValue&&this.inputs){var i=this.i18n.parseValue(e);i&&0!=i.length?(this.inputs.forEach((e,t)=>e.value=i[t]),void 0!==t&&this.validate()):console.warn("Value parser has not provided values array")}}__onHelperSlotChange(){var e=this.$.helperSlot.assignedNodes({flatten:!0});this.__hasSlottedHelper=e.filter(e=>3!==e.nodeType).length>0,this.__hasSlottedHelper?this.setAttribute("has-helper","slotted"):""!==this.helperText&&null!==this.helperText||this.removeAttribute("has-helper")}},l=i(6);
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class u extends(Object(a.a)(s(Object(n.a)(r.a)))){static get template(){return l.a`
    <style>
      :host {
        display: inline-flex;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .container {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      .inputs-wrapper {
        flex: none;
      }
    </style>

    <div class="container">
      <label part="label" on-click="focus" id="[[__labelId]]">[[label]]</label>
      <div class="inputs-wrapper" on-change="__updateValue">
        <slot id="slot"></slot>
      </div>
      <div part="helper-text" id="[[__helperTextId]]">
        <slot name="helper" id="helperSlot">[[helperText]]</slot>
      </div>
      <div part="error-message" id="[[__errorId]]" aria-live="assertive" aria-hidden\$="[[__getErrorMessageAriaHidden(invalid, errorMessage, __errorId)]]">[[errorMessage]]</div>
    </div>
`}static get is(){return"vaadin-custom-field"}static get version(){return"1.3.0"}static get properties(){return{label:{type:String,value:"",observer:"_labelChanged"},name:String,required:{type:Boolean,reflectToAttribute:!0},value:{type:String,observer:"__valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1,observer:"__invalidChanged"},errorMessage:{type:String,value:"",observer:"__errorMessageChanged"},helperText:{type:String,value:"",observer:"__helperTextChanged"}}}static get observers(){return["__getActiveErrorId(invalid, errorMessage, __errorId, helperText, __helperTextId, __hasSlottedHelper)","__getActiveLabelId(label, __labelId)","__toggleHasValue(value)"]}__invalidChanged(e){this.__setOrToggleAttribute("aria-invalid",e,this)}__errorMessageChanged(e){this.__setOrToggleAttribute("has-error-message",!!e,this)}__helperTextChanged(e){this.__setOrToggleAttribute("has-helper",!!e,this)}__toggleHasValue(e){null!==e&&""!==e.trim()?this.setAttribute("has-value",""):this.removeAttribute("has-value")}_labelChanged(e){""!==e&&null!=e?this.setAttribute("has-label",""):this.removeAttribute("has-label")}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return!(this.inputs.filter(e=>!(e.validate||e.checkValidity).call(e)).length||this.required&&!this.value.trim())}__setOrToggleAttribute(e,t,i){e&&i&&i.hasAttribute(e)===!t&&(t?i.setAttribute(e,"boolean"==typeof t?"":t):i.removeAttribute(e))}__getActiveErrorId(e,t,i,r,n,a){var o=[];(r||a)&&o.push(n),t&&e&&o.push(i),o.length>0?this.setAttribute("aria-describedby",o.join(" ")):this.removeAttribute("aria-describedby")}__getActiveLabelId(e,t){this.__setOrToggleAttribute("aria-labelledby",e?t:void 0,this)}__getErrorMessageAriaHidden(e,t,i){return(!(t&&e?i:void 0)).toString()}}customElements.define(u.is,u)},279:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var r=i(9),n=i(19),a=i(21),o=(i(231),i(206)),s=i(102),l=document.createElement("template");l.innerHTML='<dom-module id="vaadin-time-picker-text-field-styles" theme-for="vaadin-time-picker-text-field">\n  <template>\n    <style>\n      :host([dir="rtl"]) [part="input-field"] {\n        direction: ltr;\n      }\n\n      :host([dir="rtl"]) [part="value"]::placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n\n      :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n\n      :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,\n      :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(l.content);class u extends s.a{static get is(){return"vaadin-time-picker-text-field"}}customElements.define(u.is,u);var c=i(6),d=i(84);
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class h extends(Object(a.a)(Object(d.a)(Object(n.a)(r.a)))){static get template(){return c.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part~="toggle-button"] {
        cursor: pointer;
      }

      .input {
        width: 100%;
        min-width: 0;
      }
    </style>
    <vaadin-combo-box-light allow-custom-value="" item-label-path="value" filtered-items="[[__dropdownItems]]" disabled="[[disabled]]" readonly="[[readonly]]" auto-open-disabled="[[autoOpenDisabled]]" dir="ltr" theme\$="[[theme]]">
      <template>
        [[item.label]]
      </template>
      <vaadin-time-picker-text-field class="input" name="[[name]]" invalid="[[invalid]]" autocomplete="off" label="[[label]]" required="[[required]]" disabled="[[disabled]]" prevent-invalid-input="[[preventInvalidInput]]" pattern="[[pattern]]" error-message="[[errorMessage]]" autofocus="[[autofocus]]" placeholder="[[placeholder]]" readonly="[[readonly]]" role="application" aria-live="assertive" min\$="[[min]]" max\$="[[max]]" aria-label\$="[[label]]" clear-button-visible="[[clearButtonVisible]]" i18n="[[i18n]]" helper-text="[[helperText]]" theme\$="[[theme]]">
        <slot name="helper" slot="helper">[[helperText]]</slot>
        <span slot="suffix" part="toggle-button" class="toggle-button" role="button" aria-label\$="[[i18n.selector]]"></span>
      </vaadin-time-picker-text-field>
    </vaadin-combo-box-light>
`}static get is(){return"vaadin-time-picker"}static get version(){return"2.4.0"}static get properties(){return{name:{type:String},value:{type:String,observer:"__valueChanged",notify:!0,value:""},label:{type:String,reflectToAttribute:!0},required:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1},preventInvalidInput:{type:Boolean},pattern:{type:String},errorMessage:{type:String},helperText:{type:String,value:""},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},min:{type:String,value:"00:00:00.000"},max:{type:String,value:"23:59:59.999"},step:{type:Number},clearButtonVisible:{type:Boolean,value:!1},autoOpenDisabled:Boolean,__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:e=>{if(e){var t=(e=0,t="00")=>(t+e).substr((t+e).length-t.length),i=`${t(e.hours)}:${t(e.minutes)}`;return void 0!==e.seconds&&(i+=":"+t(e.seconds)),void 0!==e.milliseconds&&(i+="."+t(e.milliseconds,"000")),i}},parseTime:e=>{var t=new RegExp("^(\\d|[0-1]\\d|2[0-3])(?::(\\d|[0-5]\\d)(?::(\\d|[0-5]\\d)(?:\\.(\\d{1,3}))?)?)?$").exec(e);if(t){if(t[4])for(;t[4].length<3;)t[4]+="0";return{hours:t[1],minutes:t[2],seconds:t[3],milliseconds:t[4]}}},selector:"Time selector",clear:"Clear"})}}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}ready(){super.ready(),this.__inputElement.validate=()=>{},this.__dropdownElement.addEventListener("value-changed",e=>this.__onInputChange(e)),this.__inputElement.addEventListener("keydown",this.__onKeyDown.bind(this)),this.__dropdownElement.addEventListener("change",e=>this.validate()),this.__inputElement.addEventListener("blur",e=>this.validate()),this.__dropdownElement.addEventListener("change",e=>{e.composedPath()[0]!==this.__inputElement&&this.__dispatchChange()})}__validDayDivisor(e){return!e||86400%e==0||e<1&&e%1*1e3%1==0}__onKeyDown(e){if(!(this.readonly||this.disabled||this.__dropdownItems.length)){var t=this.__validDayDivisor(this.step)&&this.step||60;o.a.keyboardEventMatchesKeys(e,"down")?this.__onArrowPressWithStep(-t):o.a.keyboardEventMatchesKeys(e,"up")&&this.__onArrowPressWithStep(t)}}__onArrowPressWithStep(e){var t=this.__addStep(this.__getMsec(this.__memoValue),e,!0);this.__memoValue=t,this.__inputElement.value=this.i18n.formatTime(this.__validateTime(t)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(e){var t=60*(e&&e.hours||0)*60*1e3;return t+=60*(e&&e.minutes||0)*1e3,t+=1e3*(e&&e.seconds||0),t+=e&&parseInt(e.milliseconds)||0}__getSec(e){var t=60*(e&&e.hours||0)*60;return t+=60*(e&&e.minutes||0),t+=e&&e.seconds||0,t+=e&&e.milliseconds/1e3||0}__addStep(e,t,i){0===e&&t<0&&(e=864e5);var r=1e3*t,n=e%r;r<0&&n&&i?e-=n:r>0&&n&&i?e-=n-r:e+=r;var a=Math.floor(e/1e3/60/60);e-=1e3*a*60*60;var o=Math.floor(e/1e3/60);e-=1e3*o*60;var s=Math.floor(e/1e3);return{hours:a<24?a:0,minutes:o,seconds:s,milliseconds:e-=1e3*s}}__updateDropdownItems(e,t,i,r){var n=this.__validateTime(this.__parseISO(t)),a=this.__getSec(n),o=this.__validateTime(this.__parseISO(i)),s=this.__getSec(o);if(this.__adjustValue(a,s,n,o),this.__dropdownItems=this.__generateDropdownList(a,s,r),r!==this.__oldStep){this.__oldStep=r;var l=this.__validateTime(this.__parseISO(this.value));this.__updateValue(l)}this.value&&(this.__dropdownElement.value=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(e,t,i){if(i<900||!this.__validDayDivisor(i))return[];for(var r=[],n=-(i=i||3600)+e;n+i>=e&&n+i<=t;){var a=this.__validateTime(this.__addStep(1e3*n,i));n+=i;var o=this.i18n.formatTime(a);r.push({label:o,value:o})}return r}__adjustValue(e,t,i,r){if(this.__memoValue){var n=this.__getSec(this.__memoValue);n<e?this.__updateValue(i):n>t&&this.__updateValue(r)}}__valueChanged(e,t){var i=this.__memoValue=this.__parseISO(e),r=this.__formatISO(i)||"";""===this.value||null===this.value||i?this.value!==r?this.value=r:this.__updateInputValue(i):this.value=t}__onInputChange(e){var t=this.i18n.parseTime(this.__dropdownElement.value),i=this.i18n.formatTime(t)||"";t?this.__dropdownElement.value!==i?this.__dropdownElement.value=i:this.__updateValue(t):this.value=""}__updateValue(e){var t=this.__formatISO(this.__validateTime(e))||"";this.value=t}__updateInputValue(e){var t=this.i18n.formatTime(this.__validateTime(e))||"";this.__dropdownElement.value=t}__validateTime(e){return e&&(e.hours=parseInt(e.hours),e.minutes=parseInt(e.minutes||0),e.seconds=this.__stepSegment<3?void 0:parseInt(e.seconds||0),e.milliseconds=this.__stepSegment<4?void 0:parseInt(e.milliseconds||0)),e}get __stepSegment(){return this.step%3600==0?1:this.step%60!=0&&this.step?this.step%1==0?3:this.step<1?4:void 0:2}__formatISO(e){return h.properties.i18n.value().formatTime(e)}__parseISO(e){return h.properties.i18n.value().parseTime(e)}_getInputElement(){return this.shadowRoot.querySelector("vaadin-time-picker-text-field")}get __inputElement(){return this.__memoInput||(this.__memoInput=this._getInputElement())}get __dropdownElement(){return this.__memoDropdown||(this.__memoDropdown=this.shadowRoot.querySelector("vaadin-combo-box-light"))}get focusElement(){return this.__inputElement}validate(){return!(this.invalid=!this.checkValidity())}_timeAllowed(e){var t=this.i18n.parseTime(this.min),i=this.i18n.parseTime(this.max);return(!this.__getMsec(t)||this.__getMsec(e)>=this.__getMsec(t))&&(!this.__getMsec(i)||this.__getMsec(e)<=this.__getMsec(i))}checkValidity(){return!(!this.__inputElement.focusElement.checkValidity()||this.value&&!this._timeAllowed(this.i18n.parseTime(this.value))||this.__dropdownElement.value&&!this.i18n.parseTime(this.__dropdownElement.value))}}customElements.define(h.is,h)},282:function(e,t,i){"use strict";i(150);var r=i(6).a`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(98)},284:function(e,t,i){"use strict";var r=i(15),n=i(11),a=(i(219),i(208));window.Vaadin.Flow.Legacy.Debouncer=r.a,window.Vaadin.Flow.Legacy.timeOut=n.d,window.Vaadin.ComboBoxPlaceholder=a.a},285:function(e,t){!function(){"use strict";function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(i){return e(1,arguments),i instanceof Date||"object"===t(i)&&"[object Date]"===Object.prototype.toString.call(i)}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){e(1,arguments);var i=Object.prototype.toString.call(t);return t instanceof Date||"object"===r(t)&&"[object Date]"===i?new Date(t.getTime()):"number"==typeof t||"[object Number]"===i?new Date(t):("string"!=typeof t&&"[object String]"!==i||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(t){if(e(1,arguments),!i(t)&&"number"!=typeof t)return!1;var r=n(t);return!isNaN(Number(r))}function o(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function s(t,i){e(2,arguments);var r=n(t).getTime(),a=o(i);return new Date(r+a)}function l(t,i){e(2,arguments);var r=o(i);return s(t,-r)}var u=864e5;function c(t){e(1,arguments);var i=1,r=n(t),a=r.getUTCDay(),o=(a<i?7:0)+a-i;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function d(t){e(1,arguments);var i=n(t),r=i.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(r+1,0,4),a.setUTCHours(0,0,0,0);var o=c(a),s=new Date(0);s.setUTCFullYear(r,0,4),s.setUTCHours(0,0,0,0);var l=c(s);return i.getTime()>=o.getTime()?r+1:i.getTime()>=l.getTime()?r:r-1}function h(t){e(1,arguments);var i=d(t),r=new Date(0);r.setUTCFullYear(i,0,4),r.setUTCHours(0,0,0,0);var n=c(r);return n}var p=6048e5;function m(t){e(1,arguments);var i=n(t),r=c(i).getTime()-h(i).getTime();return Math.round(r/p)+1}var f={};function v(){return f}function _(t,i){var r,a,s,l,u,c,d,h;e(1,arguments);var p=v(),m=o(null!==(r=null!==(a=null!==(s=null!==(l=null==i?void 0:i.weekStartsOn)&&void 0!==l?l:null==i||null===(u=i.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==s?s:p.weekStartsOn)&&void 0!==a?a:null===(d=p.locale)||void 0===d||null===(h=d.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==r?r:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=n(t),_=f.getUTCDay(),y=(_<m?7:0)+_-m;return f.setUTCDate(f.getUTCDate()-y),f.setUTCHours(0,0,0,0),f}function y(t,i){var r,a,s,l,u,c,d,h;e(1,arguments);var p=n(t),m=p.getUTCFullYear(),f=v(),y=o(null!==(r=null!==(a=null!==(s=null!==(l=null==i?void 0:i.firstWeekContainsDate)&&void 0!==l?l:null==i||null===(u=i.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==s?s:f.firstWeekContainsDate)&&void 0!==a?a:null===(d=f.locale)||void 0===d||null===(h=d.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==r?r:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(m+1,0,y),g.setUTCHours(0,0,0,0);var b=_(g,i),w=new Date(0);w.setUTCFullYear(m,0,y),w.setUTCHours(0,0,0,0);var x=_(w,i);return p.getTime()>=b.getTime()?m+1:p.getTime()>=x.getTime()?m:m-1}function g(t,i){var r,n,a,s,l,u,c,d;e(1,arguments);var h=v(),p=o(null!==(r=null!==(n=null!==(a=null!==(s=null==i?void 0:i.firstWeekContainsDate)&&void 0!==s?s:null==i||null===(l=i.locale)||void 0===l||null===(u=l.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:h.firstWeekContainsDate)&&void 0!==n?n:null===(c=h.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==r?r:1),m=y(t,i),f=new Date(0);f.setUTCFullYear(m,0,p),f.setUTCHours(0,0,0,0);var g=_(f,i);return g}var b=6048e5;function w(t,i){e(1,arguments);var r=n(t),a=_(r,i).getTime()-g(r,i).getTime();return Math.round(a/b)+1}function x(e,t){for(var i=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return i+r}var S=function(e,t){var i=e.getUTCFullYear(),r=i>0?i:1-i;return x("yy"===t?r%100:r,t.length)},k=function(e,t){var i=e.getUTCMonth();return"M"===t?String(i+1):x(i+1,2)},A=function(e,t){return x(e.getUTCDate(),t.length)},C=function(e,t){return x(e.getUTCHours()%12||12,t.length)},E=function(e,t){return x(e.getUTCHours(),t.length)},P=function(e,t){return x(e.getUTCMinutes(),t.length)},O=function(e,t){return x(e.getUTCSeconds(),t.length)},I=function(e,t){var i=t.length,r=e.getUTCMilliseconds();return x(Math.floor(r*Math.pow(10,i-3)),t.length)};function T(e,t){var i=e>0?"-":"+",r=Math.abs(e),n=Math.floor(r/60),a=r%60;if(0===a)return i+String(n);var o=t||"";return i+String(n)+o+x(a,2)}function D(e,t){return e%60==0?(e>0?"-":"+")+x(Math.abs(e)/60,2):M(e,t)}function M(e,t){var i=t||"",r=e>0?"-":"+",n=Math.abs(e);return r+x(Math.floor(n/60),2)+i+x(n%60,2)}var B={G:function(e,t,i){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return i.era(r,{width:"abbreviated"});case"GGGGG":return i.era(r,{width:"narrow"});case"GGGG":default:return i.era(r,{width:"wide"})}},y:function(e,t,i){if("yo"===t){var r=e.getUTCFullYear(),n=r>0?r:1-r;return i.ordinalNumber(n,{unit:"year"})}return S(e,t)},Y:function(e,t,i,r){var n=y(e,r),a=n>0?n:1-n;return"YY"===t?x(a%100,2):"Yo"===t?i.ordinalNumber(a,{unit:"year"}):x(a,t.length)},R:function(e,t){return x(d(e),t.length)},u:function(e,t){return x(e.getUTCFullYear(),t.length)},Q:function(e,t,i){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return x(r,2);case"Qo":return i.ordinalNumber(r,{unit:"quarter"});case"QQQ":return i.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return i.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,i){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return x(r,2);case"qo":return i.ordinalNumber(r,{unit:"quarter"});case"qqq":return i.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return i.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,i){var r=e.getUTCMonth();switch(t){case"M":case"MM":return k(e,t);case"Mo":return i.ordinalNumber(r+1,{unit:"month"});case"MMM":return i.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return i.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,i){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return x(r+1,2);case"Lo":return i.ordinalNumber(r+1,{unit:"month"});case"LLL":return i.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return i.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,i,r){var n=w(e,r);return"wo"===t?i.ordinalNumber(n,{unit:"week"}):x(n,t.length)},I:function(e,t,i){var r=m(e);return"Io"===t?i.ordinalNumber(r,{unit:"week"}):x(r,t.length)},d:function(e,t,i){return"do"===t?i.ordinalNumber(e.getUTCDate(),{unit:"date"}):A(e,t)},D:function(t,i,r){var a=function(t){e(1,arguments);var i=n(t),r=i.getTime();i.setUTCMonth(0,1),i.setUTCHours(0,0,0,0);var a=i.getTime(),o=r-a;return Math.floor(o/u)+1}(t);return"Do"===i?r.ordinalNumber(a,{unit:"dayOfYear"}):x(a,i.length)},E:function(e,t,i){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return i.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return i.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(r,{width:"short",context:"formatting"});case"EEEE":default:return i.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,i,r){var n=e.getUTCDay(),a=(n-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return x(a,2);case"eo":return i.ordinalNumber(a,{unit:"day"});case"eee":return i.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return i.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(n,{width:"short",context:"formatting"});case"eeee":default:return i.day(n,{width:"wide",context:"formatting"})}},c:function(e,t,i,r){var n=e.getUTCDay(),a=(n-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return x(a,t.length);case"co":return i.ordinalNumber(a,{unit:"day"});case"ccc":return i.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return i.day(n,{width:"narrow",context:"standalone"});case"cccccc":return i.day(n,{width:"short",context:"standalone"});case"cccc":default:return i.day(n,{width:"wide",context:"standalone"})}},i:function(e,t,i){var r=e.getUTCDay(),n=0===r?7:r;switch(t){case"i":return String(n);case"ii":return x(n,t.length);case"io":return i.ordinalNumber(n,{unit:"day"});case"iii":return i.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return i.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return i.day(r,{width:"short",context:"formatting"});case"iiii":default:return i.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,i){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return i.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return i.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return i.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,i){var r,n=e.getUTCHours();switch(r=12===n?"noon":0===n?"midnight":n/12>=1?"pm":"am",t){case"b":case"bb":return i.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return i.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return i.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,i){var r,n=e.getUTCHours();switch(r=n>=17?"evening":n>=12?"afternoon":n>=4?"morning":"night",t){case"B":case"BB":case"BBB":return i.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return i.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,i){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),i.ordinalNumber(r,{unit:"hour"})}return C(e,t)},H:function(e,t,i){return"Ho"===t?i.ordinalNumber(e.getUTCHours(),{unit:"hour"}):E(e,t)},K:function(e,t,i){var r=e.getUTCHours()%12;return"Ko"===t?i.ordinalNumber(r,{unit:"hour"}):x(r,t.length)},k:function(e,t,i){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?i.ordinalNumber(r,{unit:"hour"}):x(r,t.length)},m:function(e,t,i){return"mo"===t?i.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):P(e,t)},s:function(e,t,i){return"so"===t?i.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):O(e,t)},S:function(e,t){return I(e,t)},X:function(e,t,i,r){var n=(r._originalDate||e).getTimezoneOffset();if(0===n)return"Z";switch(t){case"X":return D(n);case"XXXX":case"XX":return M(n);case"XXXXX":case"XXX":default:return M(n,":")}},x:function(e,t,i,r){var n=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return D(n);case"xxxx":case"xx":return M(n);case"xxxxx":case"xxx":default:return M(n,":")}},O:function(e,t,i,r){var n=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+T(n,":");case"OOOO":default:return"GMT"+M(n,":")}},z:function(e,t,i,r){var n=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+T(n,":");case"zzzz":default:return"GMT"+M(n,":")}},t:function(e,t,i,r){var n=r._originalDate||e;return x(Math.floor(n.getTime()/1e3),t.length)},T:function(e,t,i,r){return x((r._originalDate||e).getTime(),t.length)}},V=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},j=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},R={p:j,P:function(e,t){var i,r=e.match(/(P+)(p+)?/)||[],n=r[1],a=r[2];if(!a)return V(e,t);switch(n){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"})}return i.replace("{{date}}",V(n,t)).replace("{{time}}",j(a,t))}};function L(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var F=["D","DD"],z=["YY","YYYY"];function $(e){return-1!==F.indexOf(e)}function N(e){return-1!==z.indexOf(e)}function H(e,t,i){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(i,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(i,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(i,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(i,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Y(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.width?String(t.width):e.defaultWidth,r=e.formats[i]||e.formats[e.defaultWidth];return r}}var U={date:Y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},W={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function K(e){return function(t,i){var r;if("formatting"===(null!=i&&i.context?String(i.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,a=null!=i&&i.width?String(i.width):n;r=e.formattingValues[a]||e.formattingValues[n]}else{var o=e.defaultWidth,s=null!=i&&i.width?String(i.width):e.defaultWidth;r=e.values[s]||e.values[o]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function G(e){return function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.width,n=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(n);if(!a)return null;var o,s=a[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(l)?X(l,(function(e){return e.test(s)})):Q(l,(function(e){return e.test(s)}));o=e.valueCallback?e.valueCallback(u):u,o=i.valueCallback?i.valueCallback(o):o;var c=t.slice(s.length);return{value:o,rest:c}}}function Q(e,t){for(var i in e)if(e.hasOwnProperty(i)&&t(e[i]))return i}function X(e,t){for(var i=0;i<e.length;i++)if(t(e[i]))return i}var Z,J={code:"en-US",formatDistance:function(e,t,i){var r,n=q[e];return r="string"==typeof n?n:1===t?n.one:n.other.replace("{{count}}",t.toString()),null!=i&&i.addSuffix?i.comparison&&i.comparison>0?"in "+r:r+" ago":r},formatLong:U,formatRelative:function(e,t,i,r){return W[e]},localize:{ordinalNumber:function(e,t){var i=Number(e),r=i%100;if(r>20||r<10)switch(r%10){case 1:return i+"st";case 2:return i+"nd";case 3:return i+"rd"}return i+"th"},era:K({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:K({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:K({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:K({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:K({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Z={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.match(Z.matchPattern);if(!i)return null;var r=i[0],n=e.match(Z.parsePattern);if(!n)return null;var a=Z.valueCallback?Z.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;var o=e.slice(r.length);return{value:a,rest:o}}),era:G({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:G({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:G({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:G({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:G({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},ee=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,te=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ie=/^'([^]*?)'?$/,re=/''/g,ne=/[a-zA-Z]/;function ae(e){var t=e.match(ie);return t?t[1].replace(re,"'"):e}function oe(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e,t)}function ue(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=he(e);if(t){var n=he(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return ce(this,i)}}function ce(e,t){return!t||"object"!==se(t)&&"function"!=typeof t?de(e):t}function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e,t,i){return t&&me(e.prototype,t),i&&me(e,i),e}function ve(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var _e=function(){function e(){pe(this,e),ve(this,"subPriority",0)}return fe(e,[{key:"validate",value:function(e,t){return!0}}]),e}(),ye=function(e){le(i,e);var t=ue(i);function i(e,r,n,a,o){var s;return pe(this,i),(s=t.call(this)).value=e,s.validateValue=r,s.setValue=n,s.priority=a,o&&(s.subPriority=o),s}return fe(i,[{key:"validate",value:function(e,t){return this.validateValue(e,this.value,t)}},{key:"set",value:function(e,t,i){return this.setValue(e,t,this.value,i)}}]),i}(_e),ge=function(e){le(i,e);var t=ue(i);function i(){var e;pe(this,i);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return ve(de(e=t.call.apply(t,[this].concat(n))),"priority",10),ve(de(e),"subPriority",-1),e}return fe(i,[{key:"set",value:function(e,t){if(t.timestampIsSet)return e;var i=new Date(0);return i.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),i.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),i}}]),i}(_e);function be(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var we=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i;return t=e,(i=[{key:"run",value:function(e,t,i,r){var n=this.parse(e,t,i,r);return n?{setter:new ye(n.value,this.validate,this.set,this.priority,this.subPriority),rest:n.rest}:null}},{key:"validate",value:function(e,t,i){return!0}}])&&be(t.prototype,i),e}();function xe(e){return(xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Se(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ke(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ae(e,t){return(Ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ce(e,t){return!t||"object"!==xe(t)&&"function"!=typeof t?Ee(e):t}function Ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pe(e){return(Pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Oe(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var Ie=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ae(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Pe(e);if(t){var n=Pe(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Ce(this,i)}}(n);function n(){var e;Se(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return Oe(Ee(e=r.call.apply(r,[this].concat(i))),"priority",140),Oe(Ee(e),"incompatibleTokens",["R","u","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"G":case"GG":case"GGG":return i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"});case"GGGGG":return i.era(e,{width:"narrow"});case"GGGG":default:return i.era(e,{width:"wide"})||i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"})}}},{key:"set",value:function(e,t,i){return t.era=i,e.setUTCFullYear(i,0,1),e.setUTCHours(0,0,0,0),e}}])&&ke(t.prototype,i),n}(we),Te=/^(1[0-2]|0?\d)/,De=/^(3[0-1]|[0-2]?\d)/,Me=/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,Be=/^(5[0-3]|[0-4]?\d)/,Ve=/^(2[0-3]|[0-1]?\d)/,je=/^(2[0-4]|[0-1]?\d)/,Re=/^(1[0-1]|0?\d)/,Le=/^(1[0-2]|0?\d)/,Fe=/^[0-5]?\d/,ze=/^[0-5]?\d/,$e=/^\d/,Ne=/^\d{1,2}/,He=/^\d{1,3}/,qe=/^\d{1,4}/,Ye=/^-?\d+/,Ue=/^-?\d/,We=/^-?\d{1,2}/,Ke=/^-?\d{1,3}/,Ge=/^-?\d{1,4}/,Qe=/^([+-])(\d{2})(\d{2})?|Z/,Xe=/^([+-])(\d{2})(\d{2})|Z/,Ze=/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,Je=/^([+-])(\d{2}):(\d{2})|Z/,et=/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;function tt(e,t){return e?{value:t(e.value),rest:e.rest}:e}function it(e,t){var i=t.match(e);return i?{value:parseInt(i[0],10),rest:t.slice(i[0].length)}:null}function rt(e,t){var i=t.match(e);return i?"Z"===i[0]?{value:0,rest:t.slice(1)}:{value:("+"===i[1]?1:-1)*(36e5*(i[2]?parseInt(i[2],10):0)+6e4*(i[3]?parseInt(i[3],10):0)+1e3*(i[5]?parseInt(i[5],10):0)),rest:t.slice(i[0].length)}:null}function nt(e){return it(Ye,e)}function at(e,t){switch(e){case 1:return it($e,t);case 2:return it(Ne,t);case 3:return it(He,t);case 4:return it(qe,t);default:return it(new RegExp("^\\d{1,"+e+"}"),t)}}function ot(e,t){switch(e){case 1:return it(Ue,t);case 2:return it(We,t);case 3:return it(Ke,t);case 4:return it(Ge,t);default:return it(new RegExp("^-?\\d{1,"+e+"}"),t)}}function st(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function lt(e,t){var i,r=t>0,n=r?t:1-t;if(n<=50)i=e||100;else{var a=n+50;i=e+100*Math.floor(a/100)-(e>=a%100?100:0)}return r?i:1-i}function ut(e){return e%400==0||e%4==0&&e%100!=0}function ct(e){return(ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function dt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ht(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pt(e,t){return(pt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function mt(e,t){return!t||"object"!==ct(t)&&"function"!=typeof t?ft(e):t}function ft(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vt(e){return(vt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _t(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var yt=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pt(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=vt(e);if(t){var n=vt(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return mt(this,i)}}(n);function n(){var e;dt(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return _t(ft(e=r.call.apply(r,[this].concat(i))),"priority",130),_t(ft(e),"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){var r=function(e){return{year:e,isTwoDigitYear:"yy"===t}};switch(t){case"y":return tt(at(4,e),r);case"yo":return tt(i.ordinalNumber(e,{unit:"year"}),r);default:return tt(at(t.length,e),r)}}},{key:"validate",value:function(e,t){return t.isTwoDigitYear||t.year>0}},{key:"set",value:function(e,t,i){var r=e.getUTCFullYear();if(i.isTwoDigitYear){var n=lt(i.year,r);return e.setUTCFullYear(n,0,1),e.setUTCHours(0,0,0,0),e}var a="era"in t&&1!==t.era?1-i.year:i.year;return e.setUTCFullYear(a,0,1),e.setUTCHours(0,0,0,0),e}}])&&ht(t.prototype,i),n}(we);function gt(e){return(gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function bt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function wt(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function xt(e,t){return(xt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function St(e,t){return!t||"object"!==gt(t)&&"function"!=typeof t?kt(e):t}function kt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function At(e){return(At=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ct(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var Et=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&xt(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=At(e);if(t){var n=At(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return St(this,i)}}(n);function n(){var e;bt(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return Ct(kt(e=r.call.apply(r,[this].concat(i))),"priority",130),Ct(kt(e),"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){var r=function(e){return{year:e,isTwoDigitYear:"YY"===t}};switch(t){case"Y":return tt(at(4,e),r);case"Yo":return tt(i.ordinalNumber(e,{unit:"year"}),r);default:return tt(at(t.length,e),r)}}},{key:"validate",value:function(e,t){return t.isTwoDigitYear||t.year>0}},{key:"set",value:function(e,t,i,r){var n=y(e,r);if(i.isTwoDigitYear){var a=lt(i.year,n);return e.setUTCFullYear(a,0,r.firstWeekContainsDate),e.setUTCHours(0,0,0,0),_(e,r)}var o="era"in t&&1!==t.era?1-i.year:i.year;return e.setUTCFullYear(o,0,r.firstWeekContainsDate),e.setUTCHours(0,0,0,0),_(e,r)}}])&&wt(t.prototype,i),n}(we);function Pt(e){return(Pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ot(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function It(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Tt(e,t){return(Tt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Dt(e,t){return!t||"object"!==Pt(t)&&"function"!=typeof t?Mt(e):t}function Mt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Bt(e){return(Bt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Vt(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var jt=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Tt(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Bt(e);if(t){var n=Bt(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Dt(this,i)}}(n);function n(){var e;Ot(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return Vt(Mt(e=r.call.apply(r,[this].concat(i))),"priority",130),Vt(Mt(e),"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t){return ot("R"===t?4:t.length,e)}},{key:"set",value:function(e,t,i){var r=new Date(0);return r.setUTCFullYear(i,0,4),r.setUTCHours(0,0,0,0),c(r)}}])&&It(t.prototype,i),n}(we);function Rt(e){return(Rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Lt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ft(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function zt(e,t){return(zt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $t(e,t){return!t||"object"!==Rt(t)&&"function"!=typeof t?Nt(e):t}function Nt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ht(e){return(Ht=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function qt(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var Yt=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&zt(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Ht(e);if(t){var n=Ht(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return $t(this,i)}}(n);function n(){var e;Lt(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return qt(Nt(e=r.call.apply(r,[this].concat(i))),"priority",130),qt(Nt(e),"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t){return ot("u"===t?4:t.length,e)}},{key:"set",value:function(e,t,i){return e.setUTCFullYear(i,0,1),e.setUTCHours(0,0,0,0),e}}])&&Ft(t.prototype,i),n}(we);function Ut(e){return(Ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Wt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kt(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Gt(e,t){return(Gt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Qt(e,t){return!t||"object"!==Ut(t)&&"function"!=typeof t?Xt(e):t}function Xt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Zt(e){return(Zt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Jt(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var ei=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Gt(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Zt(e);if(t){var n=Zt(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Qt(this,i)}}(n);function n(){var e;Wt(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return Jt(Xt(e=r.call.apply(r,[this].concat(i))),"priority",120),Jt(Xt(e),"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"Q":case"QQ":return at(t.length,e);case"Qo":return i.ordinalNumber(e,{unit:"quarter"});case"QQQ":return i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(e,{width:"wide",context:"formatting"})||i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(e,t){return t>=1&&t<=4}},{key:"set",value:function(e,t,i){return e.setUTCMonth(3*(i-1),1),e.setUTCHours(0,0,0,0),e}}])&&Kt(t.prototype,i),n}(we);function ti(e){return(ti="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ii(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ri(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ni(e,t){return(ni=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ai(e,t){return!t||"object"!==ti(t)&&"function"!=typeof t?oi(e):t}function oi(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function si(e){return(si=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function li(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var ui=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ni(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=si(e);if(t){var n=si(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return ai(this,i)}}(n);function n(){var e;ii(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return li(oi(e=r.call.apply(r,[this].concat(i))),"priority",120),li(oi(e),"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"q":case"qq":return at(t.length,e);case"qo":return i.ordinalNumber(e,{unit:"quarter"});case"qqq":return i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return i.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(e,{width:"wide",context:"standalone"})||i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(e,t){return t>=1&&t<=4}},{key:"set",value:function(e,t,i){return e.setUTCMonth(3*(i-1),1),e.setUTCHours(0,0,0,0),e}}])&&ri(t.prototype,i),n}(we);function ci(e){return(ci="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function di(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hi(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pi(e,t){return(pi=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function mi(e,t){return!t||"object"!==ci(t)&&"function"!=typeof t?fi(e):t}function fi(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vi(e){return(vi=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var yi=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pi(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=vi(e);if(t){var n=vi(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return mi(this,i)}}(n);function n(){var e;di(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return _i(fi(e=r.call.apply(r,[this].concat(i))),"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),_i(fi(e),"priority",110),e}return t=n,(i=[{key:"parse",value:function(e,t,i){var r=function(e){return e-1};switch(t){case"M":return tt(it(Te,e),r);case"MM":return tt(at(2,e),r);case"Mo":return tt(i.ordinalNumber(e,{unit:"month"}),r);case"MMM":return i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return i.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(e,{width:"wide",context:"formatting"})||i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(e,t){return t>=0&&t<=11}},{key:"set",value:function(e,t,i){return e.setUTCMonth(i,1),e.setUTCHours(0,0,0,0),e}}])&&hi(t.prototype,i),n}(we);function gi(e){return(gi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function bi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function wi(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function xi(e,t){return(xi=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Si(e,t){return!t||"object"!==gi(t)&&"function"!=typeof t?ki(e):t}function ki(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ai(e){return(Ai=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ci(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var Ei=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&xi(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Ai(e);if(t){var n=Ai(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Si(this,i)}}(n);function n(){var e;bi(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return Ci(ki(e=r.call.apply(r,[this].concat(i))),"priority",110),Ci(ki(e),"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){var r=function(e){return e-1};switch(t){case"L":return tt(it(Te,e),r);case"LL":return tt(at(2,e),r);case"Lo":return tt(i.ordinalNumber(e,{unit:"month"}),r);case"LLL":return i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return i.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(e,{width:"wide",context:"standalone"})||i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(e,t){return t>=0&&t<=11}},{key:"set",value:function(e,t,i){return e.setUTCMonth(i,1),e.setUTCHours(0,0,0,0),e}}])&&wi(t.prototype,i),n}(we);function Pi(e){return(Pi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Oi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ii(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ti(e,t){return(Ti=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Di(e,t){return!t||"object"!==Pi(t)&&"function"!=typeof t?Mi(e):t}function Mi(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Bi(e){return(Bi=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Vi(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var ji=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ti(e,t)}(s,t);var i,r,a=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Bi(e);if(t){var n=Bi(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Di(this,i)}}(s);function s(){var e;Oi(this,s);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return Vi(Mi(e=a.call.apply(a,[this].concat(i))),"priority",100),Vi(Mi(e),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"]),e}return i=s,(r=[{key:"parse",value:function(e,t,i){switch(t){case"w":return it(Be,e);case"wo":return i.ordinalNumber(e,{unit:"week"});default:return at(t.length,e)}}},{key:"validate",value:function(e,t){return t>=1&&t<=53}},{key:"set",value:function(t,i,r,a){return _(function(t,i,r){e(2,arguments);var a=n(t),s=o(i),l=w(a,r)-s;return a.setUTCDate(a.getUTCDate()-7*l),a}(t,r,a),a)}}])&&Ii(i.prototype,r),s}(we);function Ri(e){return(Ri="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Li(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fi(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function zi(e,t){return(zi=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $i(e,t){return!t||"object"!==Ri(t)&&"function"!=typeof t?Ni(e):t}function Ni(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Hi(e){return(Hi=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function qi(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var Yi=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&zi(e,t)}(s,t);var i,r,a=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Hi(e);if(t){var n=Hi(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return $i(this,i)}}(s);function s(){var e;Li(this,s);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return qi(Ni(e=a.call.apply(a,[this].concat(i))),"priority",100),qi(Ni(e),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]),e}return i=s,(r=[{key:"parse",value:function(e,t,i){switch(t){case"I":return it(Be,e);case"Io":return i.ordinalNumber(e,{unit:"week"});default:return at(t.length,e)}}},{key:"validate",value:function(e,t){return t>=1&&t<=53}},{key:"set",value:function(t,i,r){return c(function(t,i){e(2,arguments);var r=n(t),a=o(i),s=m(r)-a;return r.setUTCDate(r.getUTCDate()-7*s),r}(t,r))}}])&&Fi(i.prototype,r),s}(we);function Ui(e){return(Ui="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Wi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ki(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Gi(e,t){return(Gi=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Qi(e,t){return!t||"object"!==Ui(t)&&"function"!=typeof t?Xi(e):t}function Xi(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Zi(e){return(Zi=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ji(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var er=[31,28,31,30,31,30,31,31,30,31,30,31],tr=[31,29,31,30,31,30,31,31,30,31,30,31],ir=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Gi(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Zi(e);if(t){var n=Zi(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Qi(this,i)}}(n);function n(){var e;Wi(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return Ji(Xi(e=r.call.apply(r,[this].concat(i))),"priority",90),Ji(Xi(e),"subPriority",1),Ji(Xi(e),"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"d":return it(De,e);case"do":return i.ordinalNumber(e,{unit:"date"});default:return at(t.length,e)}}},{key:"validate",value:function(e,t){var i=ut(e.getUTCFullYear()),r=e.getUTCMonth();return i?t>=1&&t<=tr[r]:t>=1&&t<=er[r]}},{key:"set",value:function(e,t,i){return e.setUTCDate(i),e.setUTCHours(0,0,0,0),e}}])&&Ki(t.prototype,i),n}(we);function rr(e){return(rr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function nr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ar(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function or(e,t){return(or=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function sr(e,t){return!t||"object"!==rr(t)&&"function"!=typeof t?lr(e):t}function lr(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ur(e){return(ur=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function cr(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var dr=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&or(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=ur(e);if(t){var n=ur(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return sr(this,i)}}(n);function n(){var e;nr(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return cr(lr(e=r.call.apply(r,[this].concat(i))),"priority",90),cr(lr(e),"subpriority",1),cr(lr(e),"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"D":case"DD":return it(Me,e);case"Do":return i.ordinalNumber(e,{unit:"date"});default:return at(t.length,e)}}},{key:"validate",value:function(e,t){return ut(e.getUTCFullYear())?t>=1&&t<=366:t>=1&&t<=365}},{key:"set",value:function(e,t,i){return e.setUTCMonth(0,i),e.setUTCHours(0,0,0,0),e}}])&&ar(t.prototype,i),n}(we);function hr(t,i,r){var a,s,l,u,c,d,h,p;e(2,arguments);var m=v(),f=o(null!==(a=null!==(s=null!==(l=null!==(u=null==r?void 0:r.weekStartsOn)&&void 0!==u?u:null==r||null===(c=r.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==l?l:m.weekStartsOn)&&void 0!==s?s:null===(h=m.locale)||void 0===h||null===(p=h.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==a?a:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var _=n(t),y=o(i),g=_.getUTCDay(),b=y%7,w=(b+7)%7,x=(w<f?7:0)+y-g;return _.setUTCDate(_.getUTCDate()+x),_}function pr(e){return(pr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function mr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fr(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function vr(e,t){return(vr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _r(e,t){return!t||"object"!==pr(t)&&"function"!=typeof t?yr(e):t}function yr(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function gr(e){return(gr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function br(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var wr=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&vr(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=gr(e);if(t){var n=gr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return _r(this,i)}}(n);function n(){var e;mr(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return br(yr(e=r.call.apply(r,[this].concat(i))),"priority",90),br(yr(e),"incompatibleTokens",["D","i","e","c","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"E":case"EE":case"EEE":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return i.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(e,t){return t>=0&&t<=6}},{key:"set",value:function(e,t,i,r){return(e=hr(e,i,r)).setUTCHours(0,0,0,0),e}}])&&fr(t.prototype,i),n}(we);function xr(e){return(xr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Sr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kr(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ar(e,t){return(Ar=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Cr(e,t){return!t||"object"!==xr(t)&&"function"!=typeof t?Er(e):t}function Er(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pr(e){return(Pr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Or(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var Ir=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ar(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Pr(e);if(t){var n=Pr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Cr(this,i)}}(n);function n(){var e;Sr(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return Or(Er(e=r.call.apply(r,[this].concat(i))),"priority",90),Or(Er(e),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i,r){var n=function(e){var t=7*Math.floor((e-1)/7);return(e+r.weekStartsOn+6)%7+t};switch(t){case"e":case"ee":return tt(at(t.length,e),n);case"eo":return tt(i.ordinalNumber(e,{unit:"day"}),n);case"eee":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeeee":return i.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(e,t){return t>=0&&t<=6}},{key:"set",value:function(e,t,i,r){return(e=hr(e,i,r)).setUTCHours(0,0,0,0),e}}])&&kr(t.prototype,i),n}(we);function Tr(e){return(Tr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Dr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Mr(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Br(e,t){return(Br=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Vr(e,t){return!t||"object"!==Tr(t)&&"function"!=typeof t?jr(e):t}function jr(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Rr(e){return(Rr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Lr(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var Fr=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Br(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Rr(e);if(t){var n=Rr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Vr(this,i)}}(n);function n(){var e;Dr(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return Lr(jr(e=r.call.apply(r,[this].concat(i))),"priority",90),Lr(jr(e),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i,r){var n=function(e){var t=7*Math.floor((e-1)/7);return(e+r.weekStartsOn+6)%7+t};switch(t){case"c":case"cc":return tt(at(t.length,e),n);case"co":return tt(i.ordinalNumber(e,{unit:"day"}),n);case"ccc":return i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"ccccc":return i.day(e,{width:"narrow",context:"standalone"});case"cccccc":return i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return i.day(e,{width:"wide",context:"standalone"})||i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(e,t){return t>=0&&t<=6}},{key:"set",value:function(e,t,i,r){return(e=hr(e,i,r)).setUTCHours(0,0,0,0),e}}])&&Mr(t.prototype,i),n}(we);function zr(e){return(zr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Nr(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Hr(e,t){return(Hr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function qr(e,t){return!t||"object"!==zr(t)&&"function"!=typeof t?Yr(e):t}function Yr(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ur(e){return(Ur=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Wr(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var Kr=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Hr(e,t)}(s,t);var i,r,a=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Ur(e);if(t){var n=Ur(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return qr(this,i)}}(s);function s(){var e;$r(this,s);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return Wr(Yr(e=a.call.apply(a,[this].concat(i))),"priority",90),Wr(Yr(e),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]),e}return i=s,(r=[{key:"parse",value:function(e,t,i){var r=function(e){return 0===e?7:e};switch(t){case"i":case"ii":return at(t.length,e);case"io":return i.ordinalNumber(e,{unit:"day"});case"iii":return tt(i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r);case"iiiii":return tt(i.day(e,{width:"narrow",context:"formatting"}),r);case"iiiiii":return tt(i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r);case"iiii":default:return tt(i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r)}}},{key:"validate",value:function(e,t){return t>=1&&t<=7}},{key:"set",value:function(t,i,r){return(t=function(t,i){e(2,arguments);var r=o(i);r%7==0&&(r-=7);var a=1,s=n(t),l=s.getUTCDay(),u=((r%7+7)%7<a?7:0)+r-l;return s.setUTCDate(s.getUTCDate()+u),s}(t,r)).setUTCHours(0,0,0,0),t}}])&&Nr(i.prototype,r),s}(we);function Gr(e){return(Gr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Qr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xr(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Zr(e,t){return(Zr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Jr(e,t){return!t||"object"!==Gr(t)&&"function"!=typeof t?en(e):t}function en(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tn(e){return(tn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function rn(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var nn=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Zr(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=tn(e);if(t){var n=tn(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Jr(this,i)}}(n);function n(){var e;Qr(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return rn(en(e=r.call.apply(r,[this].concat(i))),"priority",80),rn(en(e),"incompatibleTokens",["b","B","H","k","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"a":case"aa":case"aaa":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(e,t,i){return e.setUTCHours(st(i),0,0,0),e}}])&&Xr(t.prototype,i),n}(we);function an(e){return(an="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function on(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sn(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ln(e,t){return(ln=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function un(e,t){return!t||"object"!==an(t)&&"function"!=typeof t?cn(e):t}function cn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dn(e){return(dn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function hn(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var pn=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ln(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=dn(e);if(t){var n=dn(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return un(this,i)}}(n);function n(){var e;on(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return hn(cn(e=r.call.apply(r,[this].concat(i))),"priority",80),hn(cn(e),"incompatibleTokens",["a","B","H","k","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"b":case"bb":case"bbb":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(e,t,i){return e.setUTCHours(st(i),0,0,0),e}}])&&sn(t.prototype,i),n}(we);function mn(e){return(mn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vn(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _n(e,t){return(_n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function yn(e,t){return!t||"object"!==mn(t)&&"function"!=typeof t?gn(e):t}function gn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bn(e){return(bn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function wn(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var xn=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_n(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=bn(e);if(t){var n=bn(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return yn(this,i)}}(n);function n(){var e;fn(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return wn(gn(e=r.call.apply(r,[this].concat(i))),"priority",80),wn(gn(e),"incompatibleTokens",["a","b","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"B":case"BB":case"BBB":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(e,t,i){return e.setUTCHours(st(i),0,0,0),e}}])&&vn(t.prototype,i),n}(we);function Sn(e){return(Sn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function kn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function An(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Cn(e,t){return(Cn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function En(e,t){return!t||"object"!==Sn(t)&&"function"!=typeof t?Pn(e):t}function Pn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function On(e){return(On=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function In(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var Tn=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Cn(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=On(e);if(t){var n=On(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return En(this,i)}}(n);function n(){var e;kn(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return In(Pn(e=r.call.apply(r,[this].concat(i))),"priority",70),In(Pn(e),"incompatibleTokens",["H","K","k","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"h":return it(Le,e);case"ho":return i.ordinalNumber(e,{unit:"hour"});default:return at(t.length,e)}}},{key:"validate",value:function(e,t){return t>=1&&t<=12}},{key:"set",value:function(e,t,i){var r=e.getUTCHours()>=12;return r&&i<12?e.setUTCHours(i+12,0,0,0):r||12!==i?e.setUTCHours(i,0,0,0):e.setUTCHours(0,0,0,0),e}}])&&An(t.prototype,i),n}(we);function Dn(e){return(Dn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Mn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bn(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Vn(e,t){return(Vn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function jn(e,t){return!t||"object"!==Dn(t)&&"function"!=typeof t?Rn(e):t}function Rn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ln(e){return(Ln=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Fn(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var zn=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Vn(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Ln(e);if(t){var n=Ln(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return jn(this,i)}}(n);function n(){var e;Mn(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return Fn(Rn(e=r.call.apply(r,[this].concat(i))),"priority",70),Fn(Rn(e),"incompatibleTokens",["a","b","h","K","k","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"H":return it(Ve,e);case"Ho":return i.ordinalNumber(e,{unit:"hour"});default:return at(t.length,e)}}},{key:"validate",value:function(e,t){return t>=0&&t<=23}},{key:"set",value:function(e,t,i){return e.setUTCHours(i,0,0,0),e}}])&&Bn(t.prototype,i),n}(we);function $n(e){return($n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Nn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hn(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qn(e,t){return(qn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Yn(e,t){return!t||"object"!==$n(t)&&"function"!=typeof t?Un(e):t}function Un(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Wn(e){return(Wn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Kn(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var Gn=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&qn(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Wn(e);if(t){var n=Wn(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Yn(this,i)}}(n);function n(){var e;Nn(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return Kn(Un(e=r.call.apply(r,[this].concat(i))),"priority",70),Kn(Un(e),"incompatibleTokens",["h","H","k","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"K":return it(Re,e);case"Ko":return i.ordinalNumber(e,{unit:"hour"});default:return at(t.length,e)}}},{key:"validate",value:function(e,t){return t>=0&&t<=11}},{key:"set",value:function(e,t,i){return e.getUTCHours()>=12&&i<12?e.setUTCHours(i+12,0,0,0):e.setUTCHours(i,0,0,0),e}}])&&Hn(t.prototype,i),n}(we);function Qn(e){return(Qn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Xn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Zn(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Jn(e,t){return(Jn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ea(e,t){return!t||"object"!==Qn(t)&&"function"!=typeof t?ta(e):t}function ta(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ia(e){return(ia=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ra(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var na=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Jn(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=ia(e);if(t){var n=ia(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return ea(this,i)}}(n);function n(){var e;Xn(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return ra(ta(e=r.call.apply(r,[this].concat(i))),"priority",70),ra(ta(e),"incompatibleTokens",["a","b","h","H","K","t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"k":return it(je,e);case"ko":return i.ordinalNumber(e,{unit:"hour"});default:return at(t.length,e)}}},{key:"validate",value:function(e,t){return t>=1&&t<=24}},{key:"set",value:function(e,t,i){var r=i<=24?i%24:i;return e.setUTCHours(r,0,0,0),e}}])&&Zn(t.prototype,i),n}(we);function aa(e){return(aa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sa(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function la(e,t){return(la=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ua(e,t){return!t||"object"!==aa(t)&&"function"!=typeof t?ca(e):t}function ca(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function da(e){return(da=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ha(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var pa=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&la(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=da(e);if(t){var n=da(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return ua(this,i)}}(n);function n(){var e;oa(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return ha(ca(e=r.call.apply(r,[this].concat(i))),"priority",60),ha(ca(e),"incompatibleTokens",["t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"m":return it(Fe,e);case"mo":return i.ordinalNumber(e,{unit:"minute"});default:return at(t.length,e)}}},{key:"validate",value:function(e,t){return t>=0&&t<=59}},{key:"set",value:function(e,t,i){return e.setUTCMinutes(i,0,0),e}}])&&sa(t.prototype,i),n}(we);function ma(e){return(ma="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function va(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _a(e,t){return(_a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ya(e,t){return!t||"object"!==ma(t)&&"function"!=typeof t?ga(e):t}function ga(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ba(e){return(ba=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function wa(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var xa=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_a(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=ba(e);if(t){var n=ba(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return ya(this,i)}}(n);function n(){var e;fa(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return wa(ga(e=r.call.apply(r,[this].concat(i))),"priority",50),wa(ga(e),"incompatibleTokens",["t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t,i){switch(t){case"s":return it(ze,e);case"so":return i.ordinalNumber(e,{unit:"second"});default:return at(t.length,e)}}},{key:"validate",value:function(e,t){return t>=0&&t<=59}},{key:"set",value:function(e,t,i){return e.setUTCSeconds(i,0),e}}])&&va(t.prototype,i),n}(we);function Sa(e){return(Sa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ka(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Aa(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ca(e,t){return(Ca=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ea(e,t){return!t||"object"!==Sa(t)&&"function"!=typeof t?Pa(e):t}function Pa(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Oa(e){return(Oa=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ia(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var Ta=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ca(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Oa(e);if(t){var n=Oa(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Ea(this,i)}}(n);function n(){var e;ka(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return Ia(Pa(e=r.call.apply(r,[this].concat(i))),"priority",30),Ia(Pa(e),"incompatibleTokens",["t","T"]),e}return t=n,(i=[{key:"parse",value:function(e,t){return tt(at(t.length,e),(function(e){return Math.floor(e*Math.pow(10,3-t.length))}))}},{key:"set",value:function(e,t,i){return e.setUTCMilliseconds(i),e}}])&&Aa(t.prototype,i),n}(we);function Da(e){return(Da="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ma(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ba(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Va(e,t){return(Va=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ja(e,t){return!t||"object"!==Da(t)&&"function"!=typeof t?Ra(e):t}function Ra(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function La(e){return(La=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Fa(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var za=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Va(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=La(e);if(t){var n=La(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return ja(this,i)}}(n);function n(){var e;Ma(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return Fa(Ra(e=r.call.apply(r,[this].concat(i))),"priority",10),Fa(Ra(e),"incompatibleTokens",["t","T","x"]),e}return t=n,(i=[{key:"parse",value:function(e,t){switch(t){case"X":return rt(Qe,e);case"XX":return rt(Xe,e);case"XXXX":return rt(Ze,e);case"XXXXX":return rt(et,e);case"XXX":default:return rt(Je,e)}}},{key:"set",value:function(e,t,i){return t.timestampIsSet?e:new Date(e.getTime()-i)}}])&&Ba(t.prototype,i),n}(we);function $a(e){return($a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Na(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ha(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qa(e,t){return(qa=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ya(e,t){return!t||"object"!==$a(t)&&"function"!=typeof t?Ua(e):t}function Ua(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Wa(e){return(Wa=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ka(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var Ga=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&qa(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=Wa(e);if(t){var n=Wa(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Ya(this,i)}}(n);function n(){var e;Na(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return Ka(Ua(e=r.call.apply(r,[this].concat(i))),"priority",10),Ka(Ua(e),"incompatibleTokens",["t","T","X"]),e}return t=n,(i=[{key:"parse",value:function(e,t){switch(t){case"x":return rt(Qe,e);case"xx":return rt(Xe,e);case"xxxx":return rt(Ze,e);case"xxxxx":return rt(et,e);case"xxx":default:return rt(Je,e)}}},{key:"set",value:function(e,t,i){return t.timestampIsSet?e:new Date(e.getTime()-i)}}])&&Ha(t.prototype,i),n}(we);function Qa(e){return(Qa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Xa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Za(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ja(e,t){return(Ja=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function eo(e,t){return!t||"object"!==Qa(t)&&"function"!=typeof t?to(e):t}function to(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function io(e){return(io=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ro(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var no=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ja(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=io(e);if(t){var n=io(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return eo(this,i)}}(n);function n(){var e;Xa(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return ro(to(e=r.call.apply(r,[this].concat(i))),"priority",40),ro(to(e),"incompatibleTokens","*"),e}return t=n,(i=[{key:"parse",value:function(e){return nt(e)}},{key:"set",value:function(e,t,i){return[new Date(1e3*i),{timestampIsSet:!0}]}}])&&Za(t.prototype,i),n}(we);function ao(e){return(ao="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oo(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function so(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function lo(e,t){return(lo=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function uo(e,t){return!t||"object"!==ao(t)&&"function"!=typeof t?co(e):t}function co(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ho(e){return(ho=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function po(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var mo=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&lo(e,t)}(n,e);var t,i,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=ho(e);if(t){var n=ho(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return uo(this,i)}}(n);function n(){var e;oo(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return po(co(e=r.call.apply(r,[this].concat(i))),"priority",20),po(co(e),"incompatibleTokens","*"),e}return t=n,(i=[{key:"parse",value:function(e){return nt(e)}},{key:"set",value:function(e,t,i){return[new Date(i),{timestampIsSet:!0}]}}])&&so(t.prototype,i),n}(we),fo={G:new Ie,y:new yt,Y:new Et,R:new jt,u:new Yt,Q:new ei,q:new ui,M:new yi,L:new Ei,w:new ji,I:new Yi,d:new ir,D:new dr,E:new wr,e:new Ir,c:new Fr,i:new Kr,a:new nn,b:new pn,B:new xn,h:new Tn,H:new zn,K:new Gn,k:new na,m:new pa,s:new xa,S:new Ta,X:new za,x:new Ga,t:new no,T:new mo};function vo(e){return(vo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _o(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return yo(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?yo(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==i.return||i.return()}finally{if(s)throw a}}}}function yo(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var go=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,bo=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,wo=/^'([^]*?)'?$/,xo=/''/g,So=/\S/,ko=/[a-zA-Z]/;function Ao(e){return e.match(wo)[1].replace(xo,"'")}window.Vaadin=window.Vaadin||{},window.Vaadin.Flow=window.Vaadin.Flow||{},window.Vaadin.Flow.datepickerDateFns={format:function(t,i,r){var s,u,c,d,h,p,m,f,_,y,g,b,w,x,S,k,A,C;e(2,arguments);var E=String(i),P=v(),O=null!==(s=null!==(u=null==r?void 0:r.locale)&&void 0!==u?u:P.locale)&&void 0!==s?s:J,I=o(null!==(c=null!==(d=null!==(h=null!==(p=null==r?void 0:r.firstWeekContainsDate)&&void 0!==p?p:null==r||null===(m=r.locale)||void 0===m||null===(f=m.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==h?h:P.firstWeekContainsDate)&&void 0!==d?d:null===(_=P.locale)||void 0===_||null===(y=_.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==c?c:1);if(!(I>=1&&I<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var T=o(null!==(g=null!==(b=null!==(w=null!==(x=null==r?void 0:r.weekStartsOn)&&void 0!==x?x:null==r||null===(S=r.locale)||void 0===S||null===(k=S.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==w?w:P.weekStartsOn)&&void 0!==b?b:null===(A=P.locale)||void 0===A||null===(C=A.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==g?g:0);if(!(T>=0&&T<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!O.localize)throw new RangeError("locale must contain localize property");if(!O.formatLong)throw new RangeError("locale must contain formatLong property");var D=n(t);if(!a(D))throw new RangeError("Invalid time value");var M=L(D),V=l(D,M),j={firstWeekContainsDate:I,weekStartsOn:T,locale:O,_originalDate:D},F=E.match(te).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,R[t])(e,O.formatLong):e})).join("").match(ee).map((function(e){if("''"===e)return"'";var n=e[0];if("'"===n)return ae(e);var a=B[n];if(a)return null!=r&&r.useAdditionalWeekYearTokens||!N(e)||H(e,i,String(t)),null!=r&&r.useAdditionalDayOfYearTokens||!$(e)||H(e,i,String(t)),a(V,e,O.localize,j);if(n.match(ne))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return e})).join("");return F},parse:function(t,i,r,a){var s,u,c,d,h,p,m,f,_,y,g,b,w,x,S,k,A,C;e(3,arguments);var E=String(t),P=String(i),O=v(),I=null!==(s=null!==(u=null==a?void 0:a.locale)&&void 0!==u?u:O.locale)&&void 0!==s?s:J;if(!I.match)throw new RangeError("locale must contain match property");var T=o(null!==(c=null!==(d=null!==(h=null!==(p=null==a?void 0:a.firstWeekContainsDate)&&void 0!==p?p:null==a||null===(m=a.locale)||void 0===m||null===(f=m.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==h?h:O.firstWeekContainsDate)&&void 0!==d?d:null===(_=O.locale)||void 0===_||null===(y=_.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==c?c:1);if(!(T>=1&&T<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var D=o(null!==(g=null!==(b=null!==(w=null!==(x=null==a?void 0:a.weekStartsOn)&&void 0!==x?x:null==a||null===(S=a.locale)||void 0===S||null===(k=S.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==w?w:O.weekStartsOn)&&void 0!==b?b:null===(A=O.locale)||void 0===A||null===(C=A.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==g?g:0);if(!(D>=0&&D<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(""===P)return""===E?n(r):new Date(NaN);var M,B={firstWeekContainsDate:T,weekStartsOn:D,locale:I},V=[new ge],j=P.match(bo).map((function(e){var t=e[0];return t in R?(0,R[t])(e,I.formatLong):e})).join("").match(go),F=[],z=_o(j);try{var q=function(){var e=M.value;null!=a&&a.useAdditionalWeekYearTokens||!N(e)||H(e,P,t),null!=a&&a.useAdditionalDayOfYearTokens||!$(e)||H(e,P,t);var i=e[0],r=fo[i];if(r){var n=r.incompatibleTokens;if(Array.isArray(n)){var o=F.find((function(e){return n.includes(e.token)||e.token===i}));if(o)throw new RangeError("The format string mustn't contain `".concat(o.fullToken,"` and `").concat(e,"` at the same time"))}else if("*"===r.incompatibleTokens&&F.length>0)throw new RangeError("The format string mustn't contain `".concat(e,"` and any other token at the same time"));F.push({token:i,fullToken:e});var s=r.run(E,e,I.match,B);if(!s)return{v:new Date(NaN)};V.push(s.setter),E=s.rest}else{if(i.match(ko))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");if("''"===e?e="'":"'"===i&&(e=Ao(e)),0!==E.indexOf(e))return{v:new Date(NaN)};E=E.slice(e.length)}};for(z.s();!(M=z.n()).done;){var Y=q();if("object"===vo(Y))return Y.v}}catch(e){z.e(e)}finally{z.f()}if(E.length>0&&So.test(E))return new Date(NaN);var U=V.map((function(e){return e.priority})).sort((function(e,t){return t-e})).filter((function(e,t,i){return i.indexOf(e)===t})).map((function(e){return V.filter((function(t){return t.priority===e})).sort((function(e,t){return t.subPriority-e.subPriority}))})).map((function(e){return e[0]})),W=n(r);if(isNaN(W.getTime()))return new Date(NaN);var K,G=l(W,L(W)),Q={},X=_o(U);try{for(X.s();!(K=X.n()).done;){var Z=K.value;if(!Z.validate(G,B))return new Date(NaN);var ee=Z.set(G,Q,B);Array.isArray(ee)?(G=ee[0],oe(Q,ee[1])):G=ee}}catch(e){X.e(e)}finally{X.f()}return G},isValid:a}}()},286:function(e,t){!function(){var e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Date Picker","vaadin-date-picker-flow")};class t{constructor(e){this.initial=e,this.index=0,this.value=0}static compare(e,t){return e.index<t.index?-1:e.index>t.index?1:0}}window.Vaadin.Flow.datepickerConnector={initLazy:i=>e((function(i){if(!i.$connector){i.$connector={},i.$connector.dayPart=new t("22"),i.$connector.monthPart=new t("11"),i.$connector.yearPart=new t("1987"),i.$connector.parts=[i.$connector.dayPart,i.$connector.monthPart,i.$connector.yearPart],i.addEventListener("blur",e(e=>{!e.target.value&&e.target.invalid&&console.warn("Invalid value in the DatePicker.")}));var r=e((function(e){return e.replace(/[^\x00-\x7F]/g,"")})),n=(e((function(){var e="";try{e=i._inputValue}catch(t){e=i.value||""}return e})),e((function(e){try{(new Date).toLocaleDateString(e)}catch(t){e="en-US",console.warn("The locale is not supported, using default locale setting(en-US).")}var n=new Date(Date.UTC(i.$connector.yearPart.initial,i.$connector.monthPart.initial-1,i.$connector.dayPart.initial)),a=r(n.toLocaleDateString(e,{timeZone:"UTC"}));return i.$connector.parts.forEach((function(e){e.index=a.indexOf(e.initial)})),i.$connector.parts.sort(t.compare),i.$connector.regex=a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&").replace(i.$connector.dayPart.initial,"(\\d{1,2})").replace(i.$connector.monthPart.initial,"(\\d{1,2})").replace(i.$connector.yearPart.initial,"(\\d{1,4})"),{formatDate:function(t){var n=i._parseDate(`${t.year}-${t.month+1}-${t.day}`);return n.setHours(12),r(n.toLocaleDateString(e))},parseDate:function(e){if(0!=(e=r(e)).length){var t=e.match(i.$connector.regex);if(t&&4==t.length){for(var n=1;n<4;n++)i.$connector.parts[n-1].value=parseInt(t[n]);return{day:i.$connector.dayPart.value,month:i.$connector.monthPart.value-1,year:i.$connector.yearPart.value}}return!1}}}}))),a=e((function(e){if(!e||0===e.length)throw new Error("Array of custom date formats is null or empty");var t=window.Vaadin.Flow.datepickerDateFns;if(!t)throw new Error("Custom date-fns bundle for date picker is not registered at window.Vaadin.Flow.datepickerDateFns");return{formatDate:function(r){var n=e[0],a=i._parseDate(`${r.year}-${r.month+1}-${r.day}`);return t.format(a,n)},parseDate:function(i){for(var r of e){var n=t.parse(i,r,new Date);if(t.isValid(n))return{day:n.getDate(),month:n.getMonth(),year:n.getFullYear()}}return!1}}}));i.$connector.updateI18n=e((function(e,t){var r=t&&t.dateFormats&&t.dateFormats.length>0?a(t.dateFormats):e?n(e):null;i.i18n=Object.assign({},i.i18n,t,r)}))}}))(i)}}()},287:function(e,t){!function(){var e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid Pro","vaadin-grid-pro-flow")};function t(e,t){return e.__edited&&e.__edited.model.item.key===t.item.key}window.Vaadin.Flow.gridProConnector={setEditModeRenderer:(i,r)=>e((function(i,r){i.editModeRenderer=e((function(e,i,n){t(this._grid,n)?r.parentNode!==e&&(e.appendChild(r),this._grid._cancelStopEdit(),r.focus()):this._grid._stopEdit()})),i._setEditorValue=function(e,t){},i._getEditorValue=function(e){}}))(i,r),patchEditModeRenderer:i=>e((function(i){i.__editModeRenderer=e((function(e,i,r){var n=e.assignedSlot.parentNode,a=i._grid;if(t(a,r)){var o=i._getEditorTagName(n);e.firstElementChild&&e.firstElementChild.localName.toLowerCase()===o||(e.innerHTML=`<${o}></${o}>`)}else a._stopEdit()}))}))(i)}}()},288:function(e,t,i){"use strict";var r=i(15),n=i(11);i(220);window.Vaadin.Flow.Legacy.Debouncer=r.a,window.Vaadin.Flow.Legacy.timeOut=n.d},289:function(e,t,i){"use strict";i(63);var r=document.createElement("template");r.innerHTML="<style>\n/* Fixes zero width in flex layouts */\niron-list {\n  flex: auto;\n  align-self: stretch;\n}\n</style>",document.head.appendChild(r.content)},290:function(e,t){window.Vaadin.Flow.menubarConnector={initLazy:function(e){var t;e.$connector||(e.$connector={updateButtons:(t=function(){e.shadowRoot?(e.items.forEach(e=>e.disabled=e.component.disabled),e.items=e.items.filter(e=>!e.component.hidden),e._buttons.forEach(e=>{e.item&&e.item.component&&e.addEventListener("click",t=>{-1===t.composedPath().indexOf(e.item.component)&&(e.item.component.click(),t.stopPropagation())})})):setTimeout(()=>e.$connector.updateButtons())},window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Menu Bar","vaadin-menu-bar-flow"))})}}},291:function(e,t){window.Vaadin.Flow.messageListConnector={setItems:(e,t,i)=>{return(r=function(e,t,i){var r=new Intl.DateTimeFormat(i,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});e.items=t.map(e=>e.time?Object.assign(e,{time:r.format(new Date(e.time))}):e)},window.Vaadin.Flow.tryCatchWrapper(r,"Vaadin Message List","vaadin-messages"))(e,t,i);var r}}},292:function(e,t){var i;i=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Time Picker","vaadin-time-picker-flow")},window.Vaadin.Flow.timepickerConnector={initLazy:e=>i((function(e){if(!e.$connector){e.$connector={};var t=function(e,t){var i=t.toLocaleTimeString(e),r=i.match(/[^\d\u0660-\u0669]+$/g);return r||(r=i.match(/^[^\d\u0660-\u0669]+/g)),r&&(r=r[0].trim()),r},r=new Date("August 19, 1975 23:15:30"),n=new Date("August 19, 1975 05:15:30"),a={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"},o=function(e){return e.replace(/[\u0660-\u0669]/g,(function(e){var t="\\u0"+e.charCodeAt(0).toString(16);return a[t]}))},s=function(e){return parseInt(o(e))},l=/[[\.][\d\u0660-\u0669]{1,3}$/;e.$connector.setLocale=i((function(a){var u;e.value&&""!==e.value&&(u=e.i18n.parseTime(e.value));try{r.toLocaleTimeString(a)}catch(e){throw a="en-US",new Error("vaadin-time-picker: The locale "+a+" is not supported, falling back to default locale setting(en-US).")}var c=function(e){return t(e,r)}(a),d=function(e){return t(e,n)}(a),h=r.toLocaleTimeString(a);c&&h.startsWith(c)&&(h=h.replace(c,""));var p,m,f,v,_=h.match(/[^\u0660-\u0669\s\d]/),y=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+_+")?","g"),g=function(){return e.step&&e.step<1};e.i18n={formatTime:i((function(t){if(t){var i=new Date;i.setHours(t.hours),i.setMinutes(t.minutes),i.setSeconds(void 0!==t.seconds?t.seconds:0);var r=i.toLocaleTimeString(a,(m&&p===e.step||(m={hour:"numeric",minute:"numeric",second:e.step&&e.step<60?"numeric":void 0},p=e.step),m));return r=function(e,t){if(g()){var i=e;if(e.endsWith(d)?i=e.replace(" "+d,""):e.endsWith(c)&&(i=e.replace(" "+c,"")),t){var r=t<10?"0":"";r+=t<100?"0":"",i+="."+(r+=t)}else i+=".000";return e.endsWith(d)?i=i+" "+d:e.endsWith(c)&&(i=i+" "+c),i}return e}(r,t.milliseconds)}})),parseTime:i((function(e){if(e&&e===f&&v)return v;if(e){var t=e.search(c),i=e.search(d),r=e.replace(d,"").replace(c,"").trim();y.lastIndex=0;var n=y.exec(r);if(n){n=s(n[0].replace(_,"")),t!==i&&(12===n&&-1!==i?n=0:n+=-1!==t&&12!==n?12:0);var a=y.exec(r),u=a&&y.exec(r),h=u&&g()&&l.exec(r);return h&&h.index<=u.index&&(h=void 0),v=void 0!==n&&{hours:n,minutes:a?s(a[0].replace(_,"")):0,seconds:u?s(u[0].replace(_,"")):0,milliseconds:a&&u&&h?(p=h[0].replace(".",""),1===(p=o(p)).length?p+="00":2===p.length&&(p+="0"),parseInt(p)):0},f=e,v}}var p}))},u&&function e(t,i,r=0){t()?i():setTimeout(()=>e(t,i,200),r)}(()=>e.shadowRoot,()=>{var t=e.i18n.formatTime(u);e.__inputElement.value!==t&&(e.__inputElement.value=t,e.__dropdownElement.value=t,e.__onInputChange())})}))}}))(e)}},293:function(e,t){var i;customElements.whenDefined("vaadin-text-field").then(()=>{class e extends(customElements.get("vaadin-text-field")){static get template(){return i||((i=super.template.cloneNode(!0)).innerHTML+='<style>\n                  :host {\n                    width: 8em;\n                  }\n\n                  :host([dir="rtl"]) [part="input-field"] {\n                    direction: ltr;\n                  }\n\n                  :host([dir="rtl"]) [part="value"]::placeholder {\n                    direction: rtl;\n                  }\n\n                  :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {\n                    direction: rtl;\n                  }\n\n                  :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,\n                  :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {\n                    direction: rtl;\n                  }\n\n                  :host([dir="rtl"]:not([has-controls])) [part="value"]::placeholder {\n                    text-align: left;\n                  }\n\n                  :host([dir="rtl"]:not([has-controls])) [part="input-field"] ::slotted(input)::placeholder {\n                    text-align: left;\n                  }\n\n                  :host([dir="rtl"]:not([has-controls])) [part="value"]:-ms-input-placeholder,\n                  :host([dir="rtl"]:not([has-controls])) [part="input-field"] ::slotted(input):-ms-input-placeholder {\n                    text-align: left;\n                  }\n\n                  :host([dir="rtl"]) [part="value"],\n                  :host([dir="rtl"]) [part="input-field"] ::slotted(input) {\n                    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em) !important;\n                  }\n            </style>'),i}static get is(){return"vaadin-big-decimal-field"}static get properties(){return{_decimalSeparator:{type:String,value:".",observer:"__decimalSeparatorChanged"}}}ready(){super.ready(),this.inputElement.setAttribute("inputmode","decimal")}__decimalSeparatorChanged(e,t){this._enabledCharPattern="[\\d-+"+e+"]",this.value&&t&&(this.value=this.value.split(t).join(e))}}customElements.define(e.is,e)})},294:function(e,t,i){"use strict";i(221),i(222)},295:function(e,t,i){"use strict";i(235),i(122),i(236)},313:function(e,t,i){"use strict";i(171);var r=i(6),n=r.a`<dom-module id="lumo-menu-bar-button" theme-for="vaadin-menu-bar-button">
  <template>
    <style include="lumo-button">
      :host {
        margin: calc(var(--lumo-space-xs) / 2);
        margin-left: 0;
        border-radius: 0;
      }

      [part="label"] {
        width: 100%;
      }

      /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
      [part="label"] ::slotted(vaadin-context-menu-item) {
        justify-content: center;
        height: var(--lumo-button-size);
        margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius) / 2) * -1);
        padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius) / 2);
        padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius) / 2);
      }

      :host([theme~="small"]) [part="label"] ::slotted(vaadin-context-menu-item) {
        min-height: var(--lumo-size-s);
        margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius) / 2) * -1);
        padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius) / 2);
        padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius) / 2);
      }

      :host([theme~="tertiary"]) [part="label"] ::slotted(vaadin-context-menu-item) {
        margin: 0 calc((var(--lumo-button-size) / 6) * -1);
        padding-left: calc(var(--lumo-button-size) / 6);
        padding-right: calc(var(--lumo-button-size) / 6);
      }

      :host([theme~="tertiary-inline"]) {
        margin-top: calc(var(--lumo-space-xs) / 2);
        margin-bottom: calc(var(--lumo-space-xs) / 2);
        margin-right: calc(var(--lumo-space-xs) / 2);
      }

      :host([theme~="tertiary-inline"]) [part="label"] ::slotted(vaadin-context-menu-item) {
        margin: 0;
        padding: 0;
      }

      :host([expanded]) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([expanded][theme~="primary"]) {
        background-color: var(--lumo-primary-color-50pct);
      }

      :host([disabled][theme~="primary"]) {
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      :host([expanded][theme~="tertiary"]),
      :host([expanded][theme~="tertiary-inline"]) {
        background-color: var(--lumo-primary-color-10pct) !important;
      }

      :host(:first-of-type) {
        border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

        /* Needed to retain the focus-ring with border-radius */
        margin-left: calc(var(--lumo-space-xs) / 2);
      }

      :host(:nth-last-of-type(2)),
      :host([part="overflow-button"]) {
        border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
      }

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        border-radius: var(--lumo-border-radius-m);
      }

      :host([part="overflow-button"]) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([part="overflow-button"]) ::slotted(*) {
        font-size: var(--lumo-font-size-xl);
      }

      :host([part="overflow-button"]) [part="prefix"],
      :host([part="overflow-button"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL styles */
      :host([dir="rtl"]) {
        margin-left: calc(var(--lumo-space-xs) / 2);
        margin-right: 0;
        border-radius: 0;
      }

      :host([dir="rtl"]:first-of-type) {
        border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
        margin-right: calc(var(--lumo-space-xs) / 2);
      }

      :host([dir="rtl"]:nth-last-of-type(2)),
      :host([dir="rtl"][part="overflow-button"]) {
        border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);i(58);var a=i(134),o=document.createElement("template");o.innerHTML='<dom-module id="vaadin-menu-bar-button-styles" theme-for="vaadin-menu-bar-button">\n  <template>\n    <style>\n      [part="label"] ::slotted(vaadin-context-menu-item) {\n        position: relative;\n        z-index: 1;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o.content);class s extends a.a{static get is(){return"vaadin-menu-bar-button"}}customElements.define(s.is,s);i(56),i(34);var l=r.a`<dom-module id="lumo-menu-bar-item" theme-for="vaadin-context-menu-item">
  <template>
    <style>
      :host([theme="menu-bar-item"]) [part="content"] {
        display: flex;
        /* tweak to inherit centering from menu bar button */
        align-items: inherit;
        justify-content: inherit;
      }

      :host([theme="menu-bar-item"]) [part="content"] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      :host([theme="menu-bar-item"]) [part="content"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: var(--lumo-space-xs);
        box-sizing: border-box !important;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(l.content);var u=r.a`<dom-module id="lumo-menu-bar-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style>
      :host(:first-of-type) {
        padding-top: var(--lumo-space-xs);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(u.content);i(188);var c=i(9),d=i(19),h=i(21),p=i(11),m=i(15),f=i(73),v=i(67),_=e=>class extends(Object(v.b)(f.a,e)){static get properties(){return{_hasOverflow:{type:Boolean,value:!1}}}static get observers(){return["_menuItemsChanged(items, items.splices)"]}ready(){super.ready(),this.setAttribute("role","menubar"),this.addEventListener("iron-resize",e=>this.__onResize()),this._overflow.setAttribute("role","menuitem"),this._overflow.setAttribute("aria-haspopup","true"),this._overflow.setAttribute("aria-expanded","false")}get _buttons(){return Array.from(this.shadowRoot.querySelectorAll('[part$="button"]'))}get _container(){return this.shadowRoot.querySelector('[part="container"]')}get _overflow(){return this.shadowRoot.querySelector('[part="overflow-button"]')}_menuItemsChanged(e,t){e!==this._oldItems&&(this._oldItems=e,this.__renderButtons(e))}__detectOverflow(){for(var e=this._container,t=this._buttons.slice(0),i=t.pop(),r="rtl"===this.getAttribute("dir"),n=i.item&&i.item.children&&i.item.children.length||0,a=0;a<t.length;a++){var o=t[a];o.disabled=o.item.disabled,o.style.visibility="",o.style.position="";var s=o.item&&o.item.component;s instanceof HTMLElement&&s.classList.contains("vaadin-menu-item")&&(o.appendChild(s),s.classList.remove("vaadin-menu-item"))}if(i.item={children:[]},this._hasOverflow=!1,e.offsetWidth<e.scrollWidth){var l;for(this._hasOverflow=!0,l=t.length;l>0;l--){var u=t[l-1],c=getComputedStyle(u),d=u.offsetWidth;if(!r&&u.offsetLeft+d<e.offsetWidth-i.offsetWidth||r&&u.offsetLeft>=i.offsetWidth)break;u.disabled=!0,u.style.visibility="hidden",u.style.position="absolute",u.style.width=c.width}i.item={children:t.filter((e,t)=>t>=l).map(e=>e.item)}}n!==(i.item&&i.item.children&&i.item.children.length||0)&&this._subMenu.opened&&this._subMenu.close()}render(){this.shadowRoot&&this.__renderButtons(this.items)}__renderButtons(e=[]){for(var t=this._container,i=this._overflow;t.children.length>1;)t.removeChild(t.firstElementChild);e.forEach(e=>{var r=document.createElement("vaadin-menu-bar-button"),n=Object.assign({},e);r.item=n;var a=e.component;if(a){var o,s=a instanceof HTMLElement;if(s&&"vaadin-context-menu-item"===a.localName?o=a:(o=document.createElement("vaadin-context-menu-item")).appendChild(s?a:document.createElement(a)),e.text)(o.firstChild||o).textContent=e.text;n.component=o,o.item=n,o.setAttribute("theme","menu-bar-item"),r.appendChild(o)}else e.text&&(r.textContent=e.text);e.disabled?(r.disabled=!0,r.setAttribute("tabindex","-1")):r.setAttribute("tabindex","0"),r.item.children&&(r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded","false")),r.setAttribute("part","menu-bar-button"),this._setButtonTheme(r,this.theme),t.insertBefore(r,i),r.setAttribute("role","menuitem")}),this.__detectOverflow()}__onResize(){this.__debounceOverflow=m.a.debounce(this.__debounceOverflow,p.a,this.__detectOverflow.bind(this))}_setButtonTheme(e,t){var i=t,r=e.item&&e.item.theme;null!=r&&(i=Array.isArray(r)?r.join(" "):r),i?e.setAttribute("theme",i):e.removeAttribute("theme")}}
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,y=e=>class extends e{static get properties(){return{openOnHover:{type:Boolean}}}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}static get observers(){return["_itemsChanged(items, items.splices)","_themeChanged(theme)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("focusin",e=>this._onFocusin(e)),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this));var e=this._subMenu.$.overlay;e.addEventListener("keydown",this.__boundOnContextMenuKeydown),e.addEventListener("vaadin-overlay-open",this.__alignOverlayPosition.bind(this));var t=this._container;t.addEventListener("click",this.__onButtonClick.bind(this)),t.addEventListener("mouseover",e=>this._onMouseOver(e))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.__boundOutsideClickListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.__boundOutsideClickListener,!0)}notifyResize(){super.notifyResize()}get __isRTL(){return"rtl"===this.getAttribute("dir")}_themeChanged(e){this._buttons.forEach(t=>this._setButtonTheme(t,e)),e?this._subMenu.setAttribute("theme",e):this._subMenu.removeAttribute("theme")}_focusButton(e){e.focus(),e.setAttribute("focus-ring",""),this._buttons.forEach(t=>{t.setAttribute("tabindex",t===e?"0":"-1")})}_getButtonFromEvent(e){return Array.from(e.composedPath()).filter(e=>"vaadin-menu-bar-button"===e.localName)[0]}_onFocusin(e){var t=this.shadowRoot.querySelector('[part$="button"][tabindex="0"]');t&&this._buttons.forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}_onKeydown(e){var t=this._getButtonFromEvent(e);t&&(40===e.keyCode?(e.preventDefault(),t===this._expandedButton?this._focusFirstItem():this.__openSubMenu(t,e)):38===e.keyCode?(e.preventDefault(),t===this._expandedButton?this._focusLastItem():this.__openSubMenu(t,e,{focusLast:!0})):27===e.keyCode&&t===this._expandedButton?this._close(!0):this._navigateByKey(e))}_navigateByKey(e){var t,i,r=e.key.replace(/^Arrow/,""),n=this._buttons,a=this.shadowRoot.activeElement||this._expandedButton,o=n.indexOf(a),s=this.__isRTL?-1:1;switch(r){case"Left":i=-s,t=o-s;break;case"Right":i=s,t=o+s;break;case"Home":i=1,t=0;break;case"End":i=-1,t=n.length-1}if((t=this._getAvailableIndex(t,i,n))>=0){e.preventDefault();var l=n[t],u=a===this._expandedButton;u&&this._close(),this._focusButton(l),u&&l.item&&l.item.children&&this.__openSubMenu(l,e,{keepFocus:!0})}}_getAvailableIndex(e,t,i){for(var r=i.length,n=e,a=0;"number"==typeof n&&a<r;a++,n+=t||1){n<0?n=r-1:n>=r&&(n=0);var o=i[n];if(!o.disabled&&!o.hasAttribute("hidden"))return n}return-1}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}__alignOverlayPosition(e){if(this._expandedButton){var t=e.target,{width:i,height:r,left:n}=this._expandedButton.getBoundingClientRect();t.hasAttribute("bottom-aligned")&&(t.style.bottom=parseInt(getComputedStyle(t).bottom)+r+"px"),t.hasAttribute("end-aligned")&&(this.__isRTL?t.style.left=n+"px":t.style.right=parseInt(getComputedStyle(t).right)-i+"px")}}_itemsChanged(e,t){var i=this._subMenu;i&&i.opened&&i.close()}_onMouseOver(e){var t=this._getButtonFromEvent(e);if(t&&t!==this._expandedButton){var i=this._subMenu.opened;t.item.children&&(this.openOnHover||i)?this.__openSubMenu(t,e):i&&this._close()}}__onContextMenuKeydown(e){var t=Array.from(e.composedPath()).filter(e=>e._item)[0];if(t){var i=t.parentNode;if(38===e.keyCode&&t===i.items[0]&&this._close(!0),37===e.keyCode||39===e.keyCode&&!t._item.children){e.stopImmediatePropagation(),this._navigateByKey(e);var r=this.shadowRoot.activeElement;r&&r.item&&r.item.children&&this.__openSubMenu(r,e,{keepFocus:!0})}}}__fireItemSelected(e){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:e}}))}__onButtonClick(e){e.stopPropagation();var t=this._getButtonFromEvent(e);t&&this.__openSubMenu(t,e)}__openSubMenu(e,t,i={}){var r=this._subMenu,n=e.item;if(!r.opened||(this._close(),r.listenOn!==e)){var a=n&&n.children;if(a&&0!==a.length){r.items=a,r.listenOn=e,this._expandedButton=e;var o=e.getBoundingClientRect();requestAnimationFrame(()=>{e.dispatchEvent(new CustomEvent("opensubmenu",{detail:{x:this.__isRTL?o.right:o.left,y:o.bottom,children:a}})),e.setAttribute("expanded",""),e.setAttribute("aria-expanded","true")}),i.focusLast&&this.__onceOpened(()=>this._focusLastItem()),i.keepFocus&&this.__onceOpened(()=>{this._focusButton(this._expandedButton)}),"keydown"!==t.type&&this.__onceOpened(()=>{r.$.overlay.$.overlay.focus()})}else this.__fireItemSelected(n)}}_focusFirstItem(){this._subMenu.$.overlay.firstElementChild.focus()}_focusLastItem(){var e=this._subMenu.$.overlay.firstElementChild,t=e.items[e.items.length-1];t&&t.focus()}__onceOpened(e){this.style.pointerEvents="auto";var t=this._subMenu.$.overlay,i=()=>{e(),t.removeEventListener("vaadin-overlay-open",i)};t.addEventListener("vaadin-overlay-open",i)}__onItemSelected(e){e.stopPropagation(),this._close(),this.__fireItemSelected(e.detail.value)}__onEscapeClose(e){this.__deactivateButton(!0)}__deactivateButton(e){var t=this._expandedButton;t&&t.hasAttribute("expanded")&&(t.removeAttribute("expanded"),t.setAttribute("aria-expanded","false"),e&&this._focusButton(t),this._expandedButton=null)}_close(e){this.style.pointerEvents="",this.__deactivateButton(e),this._subMenu.opened&&this._subMenu.close()}},g=i(186);
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class b extends g.a{static get is(){return"vaadin-menu-bar-submenu"}constructor(){super(),this.openOn="opensubmenu"}_openedChanged(e){this.$.overlay.opened=e}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}customElements.define(b.is,b);
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class w extends(_(y(Object(h.a)(Object(d.a)(c.a))))){static get template(){return r.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="container"] {
        position: relative;
        display: flex;
        width: 100%;
        flex-wrap: nowrap;
        overflow: hidden;
      }

      [part\$="button"] {
        flex-shrink: 0;
      }

      [part="overflow-button"] {
        margin-right: 0;
      }

      .dots::before {
        display: block;
        content: "\\00B7\\00B7\\00B7";
        font-size: inherit;
        line-height: inherit;
      }
    </style>

    <div part="container">
      <vaadin-menu-bar-button part="overflow-button" hidden\$="[[!_hasOverflow]]">
        <div class="dots"></div>
      </vaadin-menu-bar-button>
    </div>
    <vaadin-menu-bar-submenu is-root=""></vaadin-menu-bar-submenu>
`}static get is(){return"vaadin-menu-bar"}static get version(){return"1.3.0"}static get properties(){return{items:{type:Array,value:()=>[]}}}}customElements.define(w.is,w)},315:function(e,t,i){"use strict";var r=i(204);i(36),i(56),i(34),i(38),i(235),i(177);Object(r.b)("vaadin-message-input-text-area",r.a`
    :host {
      margin: 0 var(--lumo-space-s) 0 0;
    }

    :host([dir='rtl']) {
      margin: 0 0 0 var(--lumo-space-s);
    }

    .vaadin-text-area-container {
      width: auto;
    }
  `,{moduleId:"lumo-message-input-text-area"});i(171);Object(r.b)("vaadin-message-input",r.a`
    :host {
      padding: var(--lumo-space-s) var(--lumo-space-m);
    }
  `,{moduleId:"lumo-message-input"});var n=i(236);
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Object(r.b)("vaadin-message-input-text-area",r.a`
    :host {
      align-self: stretch;
      flex-grow: 1;
    }
  `,{moduleId:"vaadin-message-input-text-area-styles"});class a extends n.a{static get is(){return"vaadin-message-input-text-area"}static get properties(){return{ariaLabel:{type:String,observer:"__ariaLabelChanged"}}}ready(){super.ready();var e=this.inputElement;e.removeAttribute("aria-labelledby"),e.setAttribute("rows",1),e.style.minHeight="0",e.addEventListener("keydown",e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("enter")))})}__ariaLabelChanged(e){e?this.inputElement.setAttribute("aria-label",e):this.inputElement.removeAttribute("aria-label")}}customElements.define(a.is,a),Object(r.b)("vaadin-message-input-button",r.a``,{moduleId:"lumo-message-input-button"});var o=i(134);
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Object(r.b)("vaadin-message-input-button",r.a`
    :host {
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-input-button-styles"});class s extends o.a{static get is(){return"vaadin-message-input-button"}}customElements.define(s.is,s);var l=i(9),u=i(19),c=i(21);
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class d extends(Object(c.a)(Object(u.a)(l.a))){static get properties(){return{value:{type:String},i18n:{type:Object,value:()=>({send:"Send",message:"Message"})},disabled:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get template(){return l.b`
      <style>
        :host {
          align-items: flex-start;
          box-sizing: border-box;
          display: flex;
          max-height: 50vh;
          overflow: hidden;
          flex-shrink: 0;
        }
      </style>
      <vaadin-message-input-text-area
        disabled="[[disabled]]"
        value="{{value}}"
        placeholder="[[i18n.message]]"
        aria-label="[[i18n.message]]"
        on-enter="__submit"
      ></vaadin-message-input-text-area>
      <vaadin-message-input-button disabled="[[disabled]]" theme="primary contained" on-click="__submit"
        >[[i18n.send]]</vaadin-message-input-button
      >
    `}static get is(){return"vaadin-message-input"}static get version(){return"1.0.2"}__submit(){""!==this.value&&(this.dispatchEvent(new CustomEvent("submit",{detail:{value:this.value}})),this.value=""),this.shadowRoot.querySelector("vaadin-message-input-text-area").focus()}}customElements.define(d.is,d)},317:function(e,t,i){"use strict";i(272),i(262),i(266);var r=i(6),n=r.a`<dom-module id="lumo-date-time-picker-date-text-field" theme-for="vaadin-date-time-picker-date-text-field">
  <template>
    <style>
      [part~="input-field"] {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      /* RTL specific styles */
      :host([dir="rtl"]) [part~="input-field"] {
        border-radius: var(--lumo-border-radius);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-date-time-picker-time-text-field" theme-for="vaadin-date-time-picker-time-text-field">
  <template>
    <style>
      [part~="input-field"] {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      /* RTL specific styles */
      :host([dir="rtl"]) [part~="input-field"] {
        border-radius: var(--lumo-border-radius);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-date-time-picker-date-picker" theme-for="vaadin-date-time-picker-date-picker">
  <template>
    <style>
      :host {
        margin-right: 2px;
      }

      /* RTL specific styles */
      :host([dir="rtl"]) {
        margin-right: auto;
        margin-left: 2px;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);var a=i(9),o=i(210),s=i(21),l=i(19),u=i(278);
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class c extends u.a{static get is(){return"vaadin-date-time-picker-custom-field"}connectedCallback(){this.__toggleHasValue=function(e){null!==e&&""!==e&&-1===e.split("T").indexOf("")?this.setAttribute("has-value",""):this.removeAttribute("has-value")},super.connectedCallback()}validate(){}}customElements.define(c.is,c);var d,h=i(264),p=i(102);
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class m extends p.a{static get is(){return"vaadin-date-time-picker-date-text-field"}}customElements.define(m.is,m);class f extends h.a{static get is(){return"vaadin-date-time-picker-date-picker"}static get template(){return d||((d=super.template.cloneNode(!0)).innerHTML=d.innerHTML.replace("vaadin-date-picker-text-field","vaadin-date-time-picker-date-text-field")),d}}customElements.define(f.is,f);var v,_=i(279);
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class y extends p.a{static get is(){return"vaadin-date-time-picker-time-text-field"}}customElements.define(y.is,y);class g extends _.a{static get is(){return"vaadin-date-time-picker-time-picker"}static get template(){return v||((v=super.template.cloneNode(!0)).innerHTML=v.innerHTML.replace("vaadin-time-picker-text-field","vaadin-date-time-picker-time-text-field")),v}_getInputElement(){return this.shadowRoot.querySelector("vaadin-date-time-picker-time-text-field")}}customElements.define(g.is,g);
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var b=document.createElement("template");b.innerHTML='<dom-module id="date-time-picker-custom-field" theme-for="vaadin-date-time-picker-custom-field">\n  <template>\n    <style>\n      :host,\n      .container {\n        width: 100%;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(b.content);var w=function(e,t){for(;e;){if(e.properties&&e.properties[t])return e.properties[t];e=e.__proto__}},x=customElements.get("vaadin-date-time-picker-date-picker"),S=customElements.get("vaadin-date-time-picker-time-picker"),k=w(x,"i18n").value(),A=w(S,"i18n").value(),C=Object.keys(k),E=Object.keys(A);class P extends(Object(s.a)(Object(l.a)(a.a))){static get template(){return r.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      .slot-container {
        display: flex;
      }

      [part="date"],
      .slot-container ::slotted([slot="date-picker"]) {
        pointer-events: all;
        min-width: 0;
        flex: 1 1 auto;
      }

      [part="time"],
      .slot-container ::slotted([slot="time-picker"]) {
        pointer-events: all;
        min-width: 0;
        flex: 1 1.65 auto;
      }
    </style>
    <vaadin-date-time-picker-custom-field id="customField" on-value-changed="__customFieldValueChanged" i18n="[[__customFieldValueFormat]]" label="[[label]]" theme\$="[[theme]]" invalid="[[invalid]]" required="[[required]]" disabled\$="[[disabled]]" readonly\$="[[readonly]]" error-message="[[errorMessage]]" helper-text="[[helperText]]">
      <div class="slot-container">
        <slot name="date-picker" id="dateSlot">
          <vaadin-date-time-picker-date-picker part="date" theme\$="[[theme]]"></vaadin-date-time-picker-date-picker>
        </slot>
        <slot name="time-picker" id="timeSlot">
          <vaadin-date-time-picker-time-picker part="time" theme\$="[[theme]]"></vaadin-date-time-picker-time-picker>
        </slot>
      </div>
      <slot name="helper" slot="helper">[[helperText]]</slot>
    </vaadin-date-time-picker-custom-field>
`}static get is(){return"vaadin-date-time-picker"}static get version(){return"1.4.0"}static get properties(){return{name:{type:String},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,value:!1},errorMessage:String,value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},helperText:{type:String,value:""},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},label:{type:String,value:""},autoOpenDisabled:Boolean,disabled:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},__customFieldValueFormat:{type:Object,value:()=>({parseValue:e=>e.split("T"),formatValue:e=>e.join("T")})},i18n:{type:Object,value:()=>Object.assign({},k,A)}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder)","__timePlaceholderChanged(timePlaceholder)","__stepChanged(step)","__initialPositionChanged(initialPosition)","__showWeekNumbersChanged(showWeekNumbers)","__requiredChanged(required)","__invalidChanged(invalid)","__disabledChanged(disabled)","__readonlyChanged(readonly)","__i18nChanged(i18n.*)","__autoOpenDisabledChanged(autoOpenDisabled)"]}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999"}ready(){super.ready(),this.addEventListener("focusout",e=>{e.relatedTarget!==this.__datePicker.$.overlay&&this.validate()}),this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__filterElements=e=>e.nodeType===Node.ELEMENT_NODE,this.__datePickerChanged(),this.__timePickerChanged(),this.$.dateSlot.addEventListener("slotchange",this.__datePickerChanged.bind(this)),this.$.timeSlot.addEventListener("slotchange",this.__timePickerChanged.bind(this)),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>this.focus())}focus(){this.$.customField.focus()}__syncI18n(e,t,i){(i=i||Object.keys(t.i18n)).forEach(i=>{t.i18n.hasOwnProperty(i)&&e.set("i18n."+i,t.i18n[i])})}__updateCustomFieldInputs(){var e=this.$.customField.inputs;this.__datePicker&&this.__timePicker&&(e[0]!==this.__datePicker||e[1]!==this.__timePicker)&&this.$.customField._setInputs([this.__datePicker,this.__timePicker])}__changeEventHandler(e){this.__doDispatchChange=!0}__removeChangeListener(e){e&&e.removeEventListener("change",this.__changeEventHandler,!1)}__addChangeListener(e){e.addEventListener("change",this.__changeEventHandler,!1)}__datePickerChanged(){var e=this.shadowRoot.querySelector('[part="date"]'),t=this.$.dateSlot.assignedNodes({flatten:!0}).filter(this.__filterElements)[0];this.__datePicker!==t&&(this.__removeChangeListener(this.__datePicker),this.__addChangeListener(t),this.__datePicker=t,this.__updateCustomFieldInputs(),t===e?(t.placeholder=this.datePlaceholder,t.invalid=this.invalid,t.initialPosition=this.initialPosition,t.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(t,this,C)):(this.datePlaceholder=t.placeholder,this.initialPosition=t.initialPosition,this.showWeekNumbers=t.showWeekNumbers,this.__syncI18n(this,t,C)),t.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),t.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),t.required=this.required,t.disabled=this.disabled,t.readonly=this.readonly,t.autoOpenDisabled=this.autoOpenDisabled,t.validate=()=>{},t._validateInput=()=>{})}__timePickerChanged(){var e=this.shadowRoot.querySelector('[part="time"]'),t=this.$.timeSlot.assignedNodes({flatten:!0}).filter(this.__filterElements)[0];this.__timePicker!==t&&(this.__removeChangeListener(this.__timePicker),this.__addChangeListener(t),this.__timePicker=t,this.__updateCustomFieldInputs(),t===e?(t.placeholder=this.timePlaceholder,t.step=this.step,t.invalid=this.invalid,this.__syncI18n(t,this,E)):(this.timePlaceholder=t.placeholder,this.step=t.step,this.__syncI18n(this,t,E)),this.__updateTimePickerMinMax(),t.required=this.required,t.disabled=this.disabled,t.readonly=this.readonly,t.autoOpenDisabled=this.autoOpenDisabled,t.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){var e=o.a._dateEquals,t=this.__parseDate(this.__datePicker.value),i=e(this.__minDateTime,this.__maxDateTime),r=this.__timePicker.value;this.__minDateTime&&e(t,this.__minDateTime)||i?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&e(t,this.__maxDateTime)||i?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==r&&(this.__timePicker.value=r)}}__i18nChanged(e){this.__datePicker&&this.__datePicker.set(e.path,e.value),this.__timePicker&&this.__timePicker.set(e.path,e.value)}__datePlaceholderChanged(e){this.__datePicker&&(this.__datePicker.placeholder=e)}__timePlaceholderChanged(e){this.__timePicker&&(this.__timePicker.placeholder=e)}__stepChanged(e){if(this.__timePicker&&this.__timePicker.step!==e){var t=this.__timePicker.value;this.__timePicker.step=e,this.__timePicker.value!==t&&this.__triggerCustomFieldValueUpdate()}}__triggerCustomFieldValueUpdate(){this.__timePicker&&this.__timePicker.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__initialPositionChanged(e){this.__datePicker&&(this.__datePicker.initialPosition=e)}__showWeekNumbersChanged(e){this.__datePicker&&(this.__datePicker.showWeekNumbers=e)}__invalidChanged(e){this.__datePicker&&(this.__datePicker.invalid=e),this.__timePicker&&(this.__timePicker.invalid=e)}__requiredChanged(e){this.__datePicker&&(this.__datePicker.required=e),this.__timePicker&&(this.__timePicker.required=e)}__disabledChanged(e){this.__datePicker&&(this.__datePicker.disabled=e),this.__timePicker&&(this.__timePicker.disabled=e)}__readonlyChanged(e){this.__datePicker&&(this.__datePicker.readonly=e),this.__timePicker&&(this.__timePicker.readonly=e)}__parseDate(e){return x.prototype._parseDate(e)}__formatDateISO(e,t){return e?x.prototype._formatISO(e):t}__formatTimeISO(e){return A.formatTime(e)}__parseTimeISO(e){return A.parseTime(e)}__parseDateTime(e){var[t,i]=e.split("T");if(t&&i){var r=this.__parseDate(t);if(r){var n=this.__parseTimeISO(i);if(n)return r.setHours(parseInt(n.hours)),r.setMinutes(parseInt(n.minutes||0)),r.setSeconds(parseInt(n.seconds||0)),r.setMilliseconds(parseInt(n.milliseconds||0)),r}}}__formatDateTime(e){return e?`${this.__formatDateISO(e,"")}T${this.__dateToIsoTimeString(e)}`:""}__dateToIsoTimeString(e){return this.__formatTimeISO(this.__validateTime({hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds()}))}__validateTime(e){return e&&(e.seconds=this.__stepSegment<3?void 0:e.seconds,e.milliseconds=this.__stepSegment<4?void 0:e.milliseconds),e}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){var e=this.$.customField.inputs.filter(e=>!e.checkValidity.call(e)).length>0,t=this.required&&this.$.customField.inputs.filter(e=>!e.value).length>0;return!e&&!t}get __stepSegment(){var e=null==this.step?60:parseFloat(this.step);return e%3600==0?1:e%60!=0&&e?e%1==0?3:e<1?4:void 0:2}__dateTimeEquals(e,t){return!!o.a._dateEquals(e,t)&&(e.getHours()===t.getHours()&&e.getMinutes()===t.getMinutes()&&e.getSeconds()===t.getSeconds()&&e.getMilliseconds()===t.getMilliseconds())}__handleDateTimeChange(e,t,i,r){if(!i)return this[e]="",void(this[t]="");var n=this.__parseDateTime(i);n?this.__dateTimeEquals(this[t],n)||(this[t]=n):this[e]=r}__valueChanged(e,t){this.__handleDateTimeChange("value","__selectedDateTime",e,t),this.__doDispatchChange&&(this.__dispatchChange(),this.validate())}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(e,t){this.__handleDateTimeChange("min","__minDateTime",e,t),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax()}__maxChanged(e,t){this.__handleDateTimeChange("max","__maxDateTime",e,t),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax()}__selectedDateTimeChanged(e){var t=this.__formatDateTime(e);if(this.value!==t&&(this.value=t),!!this.$.customField.inputs[0].$){var i=this.__doDispatchChange;this.$.customField.value=""!==this.value?this.value:"T",this.__doDispatchChange=i}}__customFieldValueChanged(e){var t=e.detail.value;if("T"!==t||this.__customFieldInitialValueChangeReceived){var[i,r]=t.split("T");this.__oldDateValue!==i&&(this.__oldDateValue=i,this.__updateTimePickerMinMax()),i&&r?t!==this.value&&(this.value=t):this.value="",this.__doDispatchChange=!1}else this.__customFieldInitialValueChangeReceived=!0}__autoOpenDisabledChanged(e){this.__datePicker&&(this.__datePicker.autoOpenDisabled=e),this.__timePicker&&(this.__timePicker.autoOpenDisabled=e)}}customElements.define(P.is,P)},319:function(e,t,i){"use strict";var r=i(204);i(36),i(56),i(34),i(38),i(52),i(224);Object(r.b)("vaadin-message-avatar",r.a`
    :host {
      margin-right: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-top: calc(var(--lumo-space-s) - var(--vaadin-avatar-outline-width));
    }

    :host([dir='rtl']) {
      margin-left: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-right: calc(var(--vaadin-avatar-outline-width) * -1);
    }
  `,{moduleId:"lumo-message-avatar"}),Object(r.b)("vaadin-message",r.a`
    :host {
      color: var(--lumo-body-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-m);
      padding: var(--lumo-space-s) var(--lumo-space-m);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
    }

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part='header'] {
      min-height: calc(var(--lumo-font-size-m) * var(--lumo-line-height-m));
    }

    [part='name'] {
      margin-right: var(--lumo-space-s);
    }

    [part='name']:empty {
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: var(--lumo-space-s);
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name']:empty {
      margin-left: 0;
    }

    [part='time'] {
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-s);
    }
  `,{moduleId:"lumo-message"}),Object(r.b)("vaadin-message-list",r.a``,{moduleId:"lumo-message-list"});var n=i(9),a=i(11),o=(i(142),i(19)),s=i(21),l=i(216);
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(r.b)("vaadin-message-avatar",r.a`
    :host {
      --vaadin-avatar-outline-width: 0px; /* stylelint-disable-line length-zero-no-unit */
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-avatar-styles"});class u extends l.a{static get is(){return"vaadin-message-avatar"}}customElements.define(u.is,u);
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class c extends(Object(s.a)(Object(o.a)(n.a))){static get properties(){return{time:{type:String},userName:{type:String},userAbbr:{type:String},userImg:{type:String},userColorIndex:{type:Number}}}static get template(){return n.b`
      <style>
        :host {
          display: flex;
          flex-direction: row;
          outline: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        [part='header'] {
          align-items: baseline;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        [part='name'] {
          font-weight: 500;
        }

        [part='message'] {
          white-space: pre-wrap;
        }
      </style>
      <vaadin-message-avatar
        part="avatar"
        name="[[userName]]"
        abbr="[[userAbbr]]"
        img="[[userImg]]"
        color-index="[[userColorIndex]]"
        tabindex="-1"
        aria-hidden="true"
      ></vaadin-message-avatar>
      <div part="content">
        <div part="header">
          <span part="name">[[userName]]</span>
          <span part="time">[[time]]</span>
        </div>
        <div part="message"><slot></slot></div>
      </div>
    `}static get is(){return"vaadin-message"}static get version(){return"1.0.2"}ready(){super.ready(),this.addEventListener("focus",()=>this._setFocused(!0),!0),this.addEventListener("blur",()=>this._setFocused(!1),!0),this.addEventListener("mousedown",()=>{this._mousedown=!0;var e=()=>{this._mousedown=!1,document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)})}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"))}}customElements.define(c.is,c);
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class d extends(Object(s.a)(Object(o.a)(n.a))){static get properties(){return{items:{type:Array,value:function(){return[]},observer:"_itemsChanged"}}}static get template(){return n.b`
      <style>
        :host {
          display: block;
          overflow: auto;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="list" role="list">
        <template is="dom-repeat" items="[[items]]">
          <vaadin-message
            time="[[item.time]]"
            user-name="[[item.userName]]"
            user-abbr="[[item.userAbbr]]"
            user-img="[[item.userImg]]"
            user-color-index="[[item.userColorIndex]]"
            role="listitem"
            on-focus="_handleFocusEvent"
            >[[item.text]]</vaadin-message
          >
        </template>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-relevant","additions"),this.setAttribute("role","log"),this.addEventListener("keydown",e=>this._onKeydown(e))}get _messages(){return Array.from(this.shadowRoot.querySelectorAll("vaadin-message"))}_itemsChanged(e,t){var i=this._getIndexOfFocusableElement();if(e&&e.length){var r=!t||e.length>t.length,n=this.scrollHeight<this.clientHeight+this.scrollTop+50;a.c.run(()=>{this._setTabIndexesByIndex(i),r&&n&&this._scrollToLastMessage()})}}_scrollToLastMessage(){this.items.length>0&&(this.scrollTop=this.scrollHeight-this.clientHeight)}_onKeydown(e){if(!e.metaKey&&!e.ctrlKey){var t=e.composedPath()[0],i=this._messages.indexOf(t);switch(e.key){case"ArrowUp":i--;break;case"ArrowDown":i++;break;case"Home":i=0;break;case"End":i=this._messages.length-1;break;default:return}i<0&&(i=this._messages.length-1),i>this._messages.length-1&&(i=0),this._focus(i),e.preventDefault()}}_focus(e){this._messages[e].focus()}_handleFocusEvent(e){var t=e.composedPath().filter(e=>e.nodeType===Node.ELEMENT_NODE&&"vaadin-message"===e.tagName.toLowerCase())[0];this._setTabIndexesByMessage(t)}_setTabIndexesByIndex(e){var t=this._messages[e]||this._messages[0];this._setTabIndexesByMessage(t)}_setTabIndexesByMessage(e){this._messages.forEach(t=>t.tabIndex=t===e?0:-1)}_getIndexOfFocusableElement(){var e=this._messages.findIndex(e=>0==e.tabIndex);return-1!=e?e:0}static get is(){return"vaadin-message-list"}static get version(){return"1.0.2"}}customElements.define(d.is,d)},321:function(e,t,i){"use strict";i(36),i(34),i(221);var r=i(6),n=r.a`<dom-module id="lumo-accordion-panel" theme-for="vaadin-accordion-panel">
  <template>
    <style include="lumo-details">
      :host {
        margin: 0;
        border-bottom: solid 1px var(--lumo-contrast-10pct);
      }

      :host(:last-child) {
        border-bottom: none;
      }

      :host([theme~="filled"]) {
        border-bottom: none;
      }

      :host([theme~="filled"]:not(:last-child)) {
        margin-bottom: 2px;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);var a=i(222);
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class o extends a.a{static get is(){return"vaadin-accordion-panel"}}customElements.define(o.is,o);var s=i(9),l=i(23),u=i(21),c=i(19);
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(c.a)(Object(u.a)(s.a))){static get template(){return r.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <slot></slot>
`}static get is(){return"vaadin-accordion"}static get version(){return"1.2.0"}static get properties(){return{opened:{type:Number,value:0,notify:!0,reflectToAttribute:!0},items:{type:Array,readOnly:!0,notify:!0}}}static get observers(){return["_updateItems(items, opened)"]}constructor(){super(),this._boundUpdateOpened=this._updateOpened.bind(this)}get focused(){return this.getRootNode().activeElement}focus(){this._observer&&this._observer.flush();var e=Array.isArray(this.items)&&this.items[0];e&&e.focus()}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this._observer=new l.a(this,e=>{this._setItems(this._filterItems(Array.from(this.children))),this._filterItems(e.addedNodes).forEach(e=>{e.addEventListener("opened-changed",this._boundUpdateOpened)})})}_filterItems(e){return e.filter(e=>e instanceof o)}_updateItems(e,t){if(e){var i=e[t];e.forEach(e=>{e.opened=e===i})}}_onKeydown(e){var t=e.composedPath()[0];if(this.items.some(e=>e.focusElement===t)){var i,r,n=e.key.replace(/^Arrow/,""),a=this.items.indexOf(this.focused);switch(n){case"Up":r=-1,i=a-1;break;case"Down":r=1,i=a+1;break;case"Home":r=1,i=0;break;case"End":r=-1,i=this.items.length-1}(i=this._getAvailableIndex(i,r))>=0&&(this.items[i].focus(),this.items[i].setAttribute("focus-ring",""),e.preventDefault())}}_getAvailableIndex(e,t){for(var i=this.items.length,r=e,n=0;"number"==typeof r&&n<i;n++,r+=t||1){if(r<0?r=i-1:r>=i&&(r=0),!this.items[r].disabled)return r}return-1}_updateOpened(e){var t=this._filterItems(e.composedPath())[0],i=this.items.indexOf(t);if(e.detail.value){if(t.disabled||-1===i)return;this.opened=i,this.items.forEach(e=>{e!==t&&e.opened&&(e.opened=!1)})}else this.items.some(e=>e.opened)||(this.opened=null)}}customElements.define(d.is,d)},322:function(e,t,i){"use strict";i(223),i(36),i(56),i(34),i(137);var r=i(6),n=r.a`<dom-module id="lumo-avatar-group" theme-for="vaadin-avatar-group">
  <template>
    <style>
      [part="avatar"]:not([dir="rtl"]):not(:first-child) {
        -webkit-mask-position: calc(50% - var(--lumo-size-m) + var(--vaadin-avatar-group-overlap));
        mask-position: calc(50% - var(--lumo-size-m) + var(--vaadin-avatar-group-overlap));
      }

      [part="avatar"][dir="rtl"]:not(:first-child) {
        -webkit-mask-position: calc(50% + var(--lumo-size-m) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
        mask-position: calc(50% + var(--lumo-size-m) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
      }

      :host([theme~="xlarge"]) [part="avatar"]:not([dir="rtl"]):not(:first-child) {
        -webkit-mask-position: calc(50% - var(--lumo-size-xl) + var(--vaadin-avatar-group-overlap));
        mask-position: calc(50% - var(--lumo-size-xl) + var(--vaadin-avatar-group-overlap));
      }

      :host([theme~="xlarge"]) [part="avatar"][dir="rtl"]:not(:first-child) {
        -webkit-mask-position: calc(50% + var(--lumo-size-xl) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
        mask-position: calc(50% + var(--lumo-size-xl) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
      }

      :host([theme~="large"]) [part="avatar"]:not([dir="rtl"]):not(:first-child) {
        -webkit-mask-position: calc(50% - var(--lumo-size-l) + var(--vaadin-avatar-group-overlap));
        mask-position: calc(50% - var(--lumo-size-l) + var(--vaadin-avatar-group-overlap));
      }

      :host([theme~="large"]) [part="avatar"][dir="rtl"]:not(:first-child) {
        -webkit-mask-position: calc(50% + var(--lumo-size-l) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
        mask-position: calc(50% + var(--lumo-size-l) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
      }

      :host([theme~="small"]) [part="avatar"]:not([dir="rtl"]):not(:first-child) {
        -webkit-mask-position: calc(50% - var(--lumo-size-s) + var(--vaadin-avatar-group-overlap));
        mask-position: calc(50% - var(--lumo-size-s) + var(--vaadin-avatar-group-overlap));
      }

      :host([theme~="small"]) [part="avatar"][dir="rtl"]:not(:first-child) {
        -webkit-mask-position: calc(50% + var(--lumo-size-s) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
        mask-position: calc(50% + var(--lumo-size-s) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
      }

      :host([theme~="xsmall"]) [part="avatar"]:not([dir="rtl"]):not(:first-child) {
        -webkit-mask-position: calc(50% - var(--lumo-size-xs) + var(--vaadin-avatar-group-overlap));
        mask-position: calc(50% - var(--lumo-size-xs) + var(--vaadin-avatar-group-overlap));
      }

      :host([theme~="xsmall"]) [part="avatar"][dir="rtl"]:not(:first-child) {
        -webkit-mask-position: calc(50% + var(--lumo-size-xs) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
        mask-position: calc(50% + var(--lumo-size-xs) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-avatar-group-overlay" theme-for="vaadin-avatar-group-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      :host {
        --_lumo-list-box-item-selected-icon-display: none;
        --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius) / 4);
      }

      [part="overlay"] {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-avatar-group-list-box" theme-for="vaadin-avatar-group-list-box">
  <template>
    <style>
      [part="items"] ::slotted(vaadin-item[theme="avatar-group-item"]) {
        padding: var(--lumo-space-xs);
        padding-right: var(--lumo-space-m);
      }

      :host([dir="rtl"]) [part="items"] ::slotted(vaadin-item[theme="avatar-group-item"]) {
        padding: var(--lumo-space-xs);
        padding-left: var(--lumo-space-m);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-avatar-group-item" theme-for="vaadin-item">
  <template>
    <style>
      :host([theme="avatar-group-item"]) [part="content"] {
        display: flex;
        align-items: center;
      }

      :host([theme="avatar-group-item"]) ::slotted(vaadin-avatar) {
        width: var(--lumo-size-xs);
        height: var(--lumo-size-xs);
      }

      :host([theme="avatar-group-item"]:not([dir="rtl"])) ::slotted(vaadin-avatar) {
        margin-right: var(--lumo-space-s);
      }

      :host([theme="avatar-group-item"][dir="rtl"]) ::slotted(vaadin-avatar) {
        margin-left: var(--lumo-space-s);
      }
    </style>
  </template>
</dom-module>`;if(document.head.appendChild(n.content),!!(!navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/MSIE/))){var a=document.createElement("dom-module");a.setAttribute("theme-for","vaadin-avatar-group");var o=document.createElement("template");o.innerHTML='\n    <style>\n      :host([theme~="xlarge"]) {\n        --vaadin-avatar-group-overlap: 12px;\n        --vaadin-avatar-group-overlap-border: 3px;\n      }\n\n      :host([theme~="large"]) {\n        --vaadin-avatar-group-overlap: 10px;\n        --vaadin-avatar-group-overlap-border: 3px;\n      }\n\n      :host([theme~="small"]) {\n        --vaadin-avatar-group-overlap: 6px;\n        --vaadin-avatar-group-overlap-border: 2px;\n      }\n\n      :host([theme~="xsmall"]) {\n        --vaadin-avatar-group-overlap: 4px;\n        --vaadin-avatar-group-overlap-border: 2px;\n      }\n    </style>\n  ',a.appendChild(o),a.register("lumo-avatar-group-variants")}i(140),i(148);var s=i(9),l=i(11),u=i(15),c=i(209),d=i(19),h=i(73),p=i(21),m=(i(110),i(127));class f extends m.a{static get is(){return"vaadin-avatar-group-list-box"}}customElements.define(f.is,f);i(58);var v=i(98),_=document.createElement("template");_.innerHTML='<dom-module id="vaadin-avatar-group-overlay-styles" theme-for="vaadin-avatar-group-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(_.content);class y extends v.a{static get is(){return"vaadin-avatar-group-overlay"}}customElements.define(y.is,y);i(216);var g=i(50),b=i(108),w=i(67);class x extends(Object(p.a)(Object(d.a)(Object(w.b)([h.a],s.a)))){static get template(){return r.a`
    <style>
      :host {
        display: block;
        width: 100%; /* prevent collapsing inside non-stretching column flex */
        --vaadin-avatar-group-overlap: 8px;
        --vaadin-avatar-group-overlap-border: 2px;
        --vaadin-avatar-size: 64px;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="container"] {
        display: flex;
        position: relative;
        width: 100%;
        flex-wrap: nowrap;
      }

      [part="avatar"]:not(:first-child) {
        -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDMwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwMCAwSDBWMzAwSDMwMFYwWk0xNTAgMjAwQzE3Ny42MTQgMjAwIDIwMCAxNzcuNjE0IDIwMCAxNTBDMjAwIDEyMi4zODYgMTc3LjYxNCAxMDAgMTUwIDEwMEMxMjIuMzg2IDEwMCAxMDAgMTIyLjM4NiAxMDAgMTUwQzEwMCAxNzcuNjE0IDEyMi4zODYgMjAwIDE1MCAyMDBaIiBmaWxsPSJibGFjayIvPjwvc3ZnPg==);
        mask-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAwIDMwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwMCAwSDBWMzAwSDMwMFYwWk0xNTAgMjAwQzE3Ny42MTQgMjAwIDIwMCAxNzcuNjE0IDIwMCAxNTBDMjAwIDEyMi4zODYgMTc3LjYxNCAxMDAgMTUwIDEwMEMxMjIuMzg2IDEwMCAxMDAgMTIyLjM4NiAxMDAgMTUwQzEwMCAxNzcuNjE0IDEyMi4zODYgMjAwIDE1MCAyMDBaIiBmaWxsPSJibGFjayIvPjwvc3ZnPg==);
        -webkit-mask-size: calc(300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6);
        mask-size: calc(300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6);
      }

      [part="avatar"]:not([dir="rtl"]):not(:first-child) {
        margin-left: calc(var(--vaadin-avatar-group-overlap) * -1 - var(--vaadin-avatar-outline-width));
        -webkit-mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
        mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
      }

      [part="avatar"][dir="rtl"]:not(:first-child) {
        margin-right: calc(var(--vaadin-avatar-group-overlap) * -1);
        -webkit-mask-position: calc(50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
        mask-position: calc(50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
      }
    </style>
    <div id="container" part="container">
      <template id="items" is="dom-repeat" items="[[__computeItems(items.*, __itemsInView, maxItemsVisible)]]">
        <vaadin-avatar name="[[item.name]]" abbr="[[item.abbr]]" img="[[item.img]]" part="avatar" theme\$="[[theme]]" i18n="[[i18n]]" color-index="[[item.colorIndex]]"></vaadin-avatar>
      </template>
      <vaadin-avatar id="overflow" part="avatar" hidden\$="[[__computeMoreHidden(items.length, __itemsInView, __maxReached)]]" abbr="[[__computeMore(items.length, __itemsInView, maxItemsVisible)]]" theme\$="[[theme]]" on-click="_onOverflowClick" on-keydown="_onOverflowKeyDown" aria-haspopup="listbox"></vaadin-avatar>
    </div>
    <vaadin-avatar-group-overlay id="overlay" opened="{{_opened}}" on-vaadin-overlay-close="_onVaadinOverlayClose">
      <template>
        <vaadin-avatar-group-list-box on-keydown="_onListKeyDown">
          <template is="dom-repeat" items="[[__computeExtraItems(items.*, __itemsInView, maxItemsVisible)]]">
            <vaadin-item theme="avatar-group-item" role="option">
              <vaadin-avatar name="[[item.name]]" abbr="[[item.abbr]]" img="[[item.img]]" i18n="[[i18n]]" part="avatar" theme\$="[[theme]]" color-index="[[item.colorIndex]]" tabindex="-1" aria-hidden="true"></vaadin-avatar>
              [[item.name]]
            </vaadin-item>
          </template>
        </vaadin-avatar-group-list-box>
      </template>
    </vaadin-avatar-group-overlay>
`}static get is(){return"vaadin-avatar-group"}static get version(){return"1.0.4"}static get properties(){return{items:{type:Array},maxItemsVisible:{type:Number},i18n:{type:Object,value:()=>({anonymous:"anonymous",activeUsers:{one:"Currently one active user",many:"Currently {count} active users"},joined:"{user} joined",left:"{user} left"})},__maxReached:{type:Boolean,computed:"__computeMaxReached(items.length, maxItemsVisible)"},__itemsInView:{type:Number,value:null},_opened:{type:Boolean,observer:"__openedChanged",value:!1}}}static get observers(){return["__computeMoreTitle(items.length, __itemsInView, maxItemsVisible)","__itemsChanged(items.splices, items.*)","__i18nItemsChanged(i18n.*, items.length)"]}ready(){super.ready(),c.a.requestAvailability(),this.__boundSetPosition=this.__setPosition.bind(this),this.addEventListener("iron-resize",this._onResize.bind(this)),this._overlayElement=this.shadowRoot.querySelector("vaadin-avatar-group-overlay"),Object(g.a)(this,()=>{this.__setItemsInView()})}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"dir"===e&&this.__setPosition()}get _avatars(){return this.shadowRoot.querySelectorAll("vaadin-avatar")}__announce(e){this.dispatchEvent(new CustomEvent("iron-announce",{bubbles:!0,composed:!0,detail:{text:e}}))}__getMessage(e,t){return t.replace("{user}",e.name||e.abbr||this.i18n.anonymous)}_onOverflowClick(e){e.stopPropagation(),this._opened?this.$.overlay.close():e.defaultPrevented||(this._opened=!0)}_onOverflowKeyDown(e){this._opened||/^(Enter|SpaceBar|\s)$/.test(e.key)&&(e.preventDefault(),this._opened=!0)}_onListKeyDown(e){("Escape"===e.key||"Esc"===e.key||/^(Tab)$/.test(e.key))&&(this._opened=!1)}_onResize(){this.__debounceResize=u.a.debounce(this.__debounceResize,l.d.after(0),()=>{this.__setItemsInView(),this.__setPosition()})}_onVaadinOverlayClose(e){e.detail.sourceEvent&&-1!==e.detail.sourceEvent.composedPath().indexOf(this)&&e.preventDefault()}__computeItems(e,t,i){var r=e.base||[],n=this.__getLimit(r.length,t,i);return n?r.slice(0,n):r}__computeExtraItems(e,t,i){var r=e.base||[],n=this.__getLimit(r.length,t,i);return n?r.slice(n):r}__computeMaxReached(e,t){return null!=t&&e>this.__getMax(t)}__computeMore(e,t,i){return"+"+(e-this.__getLimit(e,t,i))}__computeMoreHidden(e,t,i){return!(i||t&&t<e)}__computeMoreTitle(e,t,i){var r=this.__getLimit(e,t,i);if(null!=r){for(var n=[],a=r;a<e;a++){var o=this.items[a];n.push(o.name||o.abbr||"anonymous")}this.$.overflow.setAttribute("title",n.join("\n"))}}__getLimit(e,t,i){var r=null,n=this.__getMax(i);return null!=i&&n<e?r=n-1:t&&t<e&&(r=t),Math.min(r,this.__calculateAvatarsFitWidth())}__getMax(e){return Math.max(e,2)}__itemsChanged(e,t){var i=t.base;if(this.$.items.render(),this.__setItemsInView(),e&&Array.isArray(e.indexSplices))e.indexSplices.forEach(e=>{this.__announceItemsChange(i,e)});else if(Array.isArray(i)&&Array.isArray(this.__oldItems)){Object(b.a)(i,this.__oldItems).forEach(e=>{this.__announceItemsChange(i,e)})}this.__oldItems=i}__announceItemsChange(e,t){var{addedCount:i,index:r,removed:n}=t,a=[],o=[];i&&(a=e.slice(r,r+i).map(e=>this.__getMessage(e,this.i18n.joined||"{user} joined"))),n&&(o=n.map(e=>this.__getMessage(e,this.i18n.left||"{user} left")));var s=o.concat(a);s.length>0&&this.__announce(s.join(", "))}__i18nItemsChanged(e,t){var{base:i}=e;if(i&&i.activeUsers){var r=1===t?"one":"many";i.activeUsers[r]&&this.setAttribute("aria-label",i.activeUsers[r].replace("{count}",t||0))}}__openedChanged(e,t){e?(this._menuElement||(this._menuElement=this._overlayElement.content.querySelector("vaadin-avatar-group-list-box"),this._menuElement.setAttribute("role","listbox")),this._openedWithFocusRing=this.$.overflow.hasAttribute("focus-ring"),this._menuElement.querySelectorAll("vaadin-avatar").forEach(e=>e.removeAttribute("title")),this._menuElement.focus(),this.__setPosition(),window.addEventListener("scroll",this.__boundSetPosition,!0)):t&&(this.$.overflow.focus(),this._openedWithFocusRing&&this.$.overflow.setAttribute("focus-ring",""),window.removeEventListener("scroll",this.__boundSetPosition,!0));this.$.overflow.setAttribute("aria-expanded",!0===e)}__setItemsInView(){var e=this._avatars,t=this.items;if(t&&e&&!(e.length<3)){var i=this.__calculateAvatarsFitWidth();i===t.length-1&&(i=t.length),i>=t.length&&this._opened&&(this.$.overlay.close(),this.$.overlay._flushAnimation("closing")),this.__itemsInView=i}}__calculateAvatarsFitWidth(){if(!this.shadowRoot||this._avatars.length<2)return 2;var e=this._avatars,t=e[0].clientWidth,{marginLeft:i,marginRight:r}=getComputedStyle(e[1]),n="rtl"==this.getAttribute("dir")?parseInt(r,0)-parseInt(i,0):parseInt(i,0)-parseInt(r,0);return Math.floor((this.$.container.offsetWidth-t)/(t+n))}__setPosition(){if(this._opened){var e=this.$.overflow.getBoundingClientRect(),t=Math.min(window.innerHeight,document.documentElement.clientHeight),i=e.top>(t-e.height)/2;"rtl"===this.getAttribute("dir")?this._overlayElement.style.right=document.documentElement.clientWidth-e.right+"px":this._overlayElement.style.left=e.left+"px",i?(this._overlayElement.setAttribute("bottom-aligned",""),this._overlayElement.style.removeProperty("top"),this._overlayElement.style.bottom=t-e.top+"px"):(this._overlayElement.removeAttribute("bottom-aligned"),this._overlayElement.style.removeProperty("bottom"),this._overlayElement.style.top=e.bottom+"px")}}}customElements.define(x.is,x)},323:function(e,t,i){"use strict";i(122),i(173),i(136),i(268),i(36),i(34),i(52),i(282);var r=i(98),n=(i(232),i(6)),a=n.a`<dom-module id="vaadin-login-overlay-wrapper-lumo-styles" theme-for="vaadin-login-overlay-wrapper">
  <template>
    <style include="lumo-color lumo-typography">
      :host {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      [part="backdrop"] {
        background: var(--lumo-base-color) linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      }

      [part="content"] {
        padding: 0;
      }

      [part="overlay"] {
        background: none;
        border-radius: 0;
        box-shadow: none;
        width: 100%;
        height: 100%;
      }

      [part="card"] {
        width: calc(var(--lumo-size-m) * 10);
        background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      }

      [part="brand"] {
        padding: var(--lumo-space-l) var(--lumo-space-xl) var(--lumo-space-l) var(--lumo-space-l);
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
        min-height: calc(var(--lumo-size-m) * 5);
      }

      [part="description"] {
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-tint-70pct);
        margin-bottom: 0;
      }

      [part="content"] {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      [part="card"] {
        border-radius: var(--lumo-border-radius);
        box-shadow: var(--lumo-box-shadow-s);
        margin: var(--lumo-space-s);
        height: auto;
      }

      /* Small screen */
      @media only screen
      and (max-width: 500px) {
        [part="overlay"],
        [part="content"] {
          height: 100%;
        }

        [part="content"] {
          min-height: 100%;
          background: var(--lumo-base-color);
          align-items: flex-start;
        }

        [part="card"],
        [part="overlay"] {
          width: 100%;
          border-radius: 0;
          box-shadow: none;
          margin: 0;
        }

        /* RTL styles */
        :host([dir="rtl"]) [part="brand"] {
          padding: var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-xl);
        }
      }

      /* Landscape small screen */
      @media only screen
      and (max-height: 600px)
      and (min-width: 600px)
      and (orientation: landscape) {
        [part="card"] {
          flex-direction: row;
          align-items: stretch;
          max-width: calc(var(--lumo-size-m) * 16);
          width: 100%;
        }

        [part="brand"],
        [part="form"] {
          flex: auto;
          flex-basis: 0;
          box-sizing: border-box;
        }

        [part="brand"] {
          justify-content: flex-start;
        }

        [part="form"] {
          padding: var(--lumo-space-l);
          overflow: auto;
        }
      }

      /* Landscape really small screen */
      @media only screen
      and (max-height: 500px)
      and (min-width: 600px)
      and (orientation: landscape),
      only screen
      and (max-width: 600px)
      and (min-width: 600px)
      and (orientation: landscape) {
        [part="content"] {
          height: 100vh;
        }

        [part="card"] {
          margin: 0;
          width: 100%;
          max-width: none;
          height: 100%;
          flex: auto;
          border-radius: 0;
          box-shadow: none;
        }

        [part="form"] {
          height: 100%;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }
      }

      /* Handle iPhone X notch */
      @media only screen
      and (device-width: 375px)
      and (device-height: 812px)
      and (-webkit-device-pixel-ratio: 3) {
        [part="card"] {
          padding-right: constant(safe-area-inset-right);
          padding-right: env(safe-area-inset-right);

          padding-left: constant(safe-area-inset-left);
          padding-left: env(safe-area-inset-left);
        }

        [part="brand"] {
          margin-left: calc(constant(safe-area-inset-left) * -1);
          margin-left: calc(env(safe-area-inset-left) * -1);

          padding-left: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
          padding-left: calc(var(--lumo-space-l) + env(safe-area-inset-left));
        }

        /* RTL styles */
        :host([dir="rtl"]) [part="card"] {
          padding-left: constant(safe-area-inset-right);
          padding-left: env(safe-area-inset-right);
          padding-right: constant(safe-area-inset-left);
          padding-right: env(safe-area-inset-left);
        }

        :host([dir="rtl"]) [part="brand"] {
          margin-right: calc(constant(safe-area-inset-left) * -1);
          margin-right: calc(env(safe-area-inset-left) * -1);
          padding-right: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
          padding-right: calc(var(--lumo-space-l) + env(safe-area-inset-left));
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-login-overlay" theme-for="vaadin-login-form-wrapper">
  <template>
    <style include="lumo-color lumo-typography">
      :host([theme~="with-overlay"]) {
        min-height: 100%;
        display: flex;
        justify-content: center;
        max-width: 100%;
      }

      /* Landscape small screen */
      @media only screen
      and (max-height: 600px)
      and (min-width: 600px)
      and (orientation: landscape) {
        :host([theme~="with-overlay"]) [part="form"] {
          height: 100%;
          -webkit-overflow-scrolling: touch;
          flex: 1;
          padding: 2px;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(a.content);var o,s=i(9),l=i(19),u=i(21),c=(i(234),i(214)),d=i(58),h=document.createElement("template");h.innerHTML='<dom-module id="vaadin-login-overlay-wrapper-template">\n  <template>\n    <style>\n      [part="overlay"] {\n        outline: none;\n      }\n\n      [part="card"] {\n        max-width: 100%;\n        box-sizing: border-box;\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n      }\n\n      [part="brand"] {\n        box-sizing: border-box;\n        overflow: hidden;\n        flex-grow: 1;\n        flex-shrink: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n      }\n\n      [part="brand"] h1 {\n        color: inherit;\n        margin: 0;\n      }\n    </style>\n    <section part="card">\n      <div part="brand">\n        <slot name="title">\n          <h1 part="title">[[title]]</h1>\n        </slot>\n        <p part="description">[[description]]</p>\n      </div>\n      <div part="form">\n        <slot></slot>\n      </div>\n    </section>\n  </template>\n\n  \n</dom-module>',document.head.appendChild(h.content);class p extends r.a{static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){if(!o){o=super.template.cloneNode(!0);var e=d.a.import(this.is+"-template","template"),t=e.content.querySelector("[part=card]"),i=e.content.querySelector("style"),r=o.content.querySelector("#content");r.replaceChild(t,r.children[0]),r.appendChild(i)}return o}}customElements.define(p.is,p);
/**
@license
Vaadin Login
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class m extends(Object(c.a)(Object(u.a)(Object(l.a)(s.a)))){static get template(){return n.a`
    <vaadin-login-overlay-wrapper id="vaadinLoginOverlayWrapper" opened="{{opened}}" focus-trap="" with-backdrop="" title="[[title]]" description="[[description]]" theme\$="[[theme]]">

      <vaadin-login-form theme="with-overlay" id="vaadinLoginForm" action="{{action}}" disabled="{{disabled}}" error="{{error}}" no-forgot-password="{{noForgotPassword}}" i18n="{{i18n}}" on-login="_retargetEvent" on-forgot-password="_retargetEvent">

      </vaadin-login-form>

    </vaadin-login-overlay-wrapper>
`}static get is(){return"vaadin-login-overlay"}static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"}}}static get observers(){return["__i18nChanged(i18n.header.*)"]}ready(){super.ready(),this._preventClosingLogin=this._preventClosingLogin.bind(this)}connectedCallback(){super.connectedCallback(),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-escape-press",this._preventClosingLogin)}disconnectedCallback(){super.disconnectedCallback(),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.opened=!1}__i18nChanged(e){var t=e.base;t&&(this.title=t.title,this.description=t.description)}_preventClosingLogin(e){e.preventDefault()}_onOpenedChange(){this.opened?(this._undoTeleport=this._teleport(this._getElementsToTeleport()),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(this.$.vaadinLoginForm.$.vaadinLoginUsername.value="",this.$.vaadinLoginForm.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTeleport&&this._undoTeleport())}_teleport(e){var t=Array.from(e).map(e=>this.$.vaadinLoginOverlayWrapper.appendChild(e));return()=>{for(;t.length>0;)this.appendChild(t.shift())}}_getElementsToTeleport(){return this.querySelectorAll("[slot=title]")}}customElements.define(m.is,m)},327:function(e,t,i){"use strict";i(171),i(71);var r=i(6),n=r.a`<dom-module id="lumo-drawer-toggle" theme-for="vaadin-drawer-toggle">
  <template>
    <style include="lumo-button">
      :host {
        width: var(--lumo-size-l);
        height: var(--lumo-size-l);
        min-width: auto;
        margin: 0 var(--lumo-space-s);
        padding: 0;
        background: transparent;
      }

      [part="icon"],
      [part="icon"]::after,
      [part="icon"]::before {
        position: inherit;
        height: auto;
        width: auto;
        background: transparent;
        top: auto;
      }

      [part=icon]::before {
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        content: var(--lumo-icons-menu);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);var a=i(134);
/**
@license
Vaadin Drawer Toggle
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class o extends a.a{static get template(){return r.a`
    <style>
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: default;
        position: relative;
        outline: none;
        height: 24px;
        width: 24px;
        padding: 4px;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }

      [part="icon"],
      [part="icon"]::after,
      [part="icon"]::before {
        position: absolute;
        top: 8px;
        height: 3px;
        width: 24px;
        background-color: #000;
      }

      [part="icon"]::after,
      [part="icon"]::before {
        content: "";
      }

      [part="icon"]::after {
        top: 6px;
      }

      [part="icon"]::before {
        top: 12px;
      }
    </style>
    <slot>
      <div part="icon"></div>
    </slot>
    <button id="button" type="button" aria-label\$="[[ariaLabel]]"></button>
`}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:String}}constructor(){super(),this.addEventListener("click",e=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}}customElements.define(o.is,o)},328:function(e,t,i){"use strict";i(225),i(226),i(71),i(124),i(122);var r=i(6),n=r.a`<dom-module id="lumo-combo-box" theme-for="vaadin-combo-box">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);var a=i(9),o=(i(102),i(84)),s=i(19),l=i(227),u=(i(270),i(229)),c=i(21);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(c.a)(Object(o.a)(Object(s.a)(Object(u.a)(Object(l.a)(a.a)))))){static get template(){return r.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>

    <vaadin-text-field part="text-field" id="input" pattern="[[pattern]]" prevent-invalid-input="[[preventInvalidInput]]" value="{{_inputElementValue}}" autocomplete="off" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" helper-text="[[helperText]]" error-message="[[errorMessage]]" autocapitalize="none" autofocus="[[autofocus]]" on-change="_stopPropagation" on-input="_inputValueChanged" clear-button-visible="[[clearButtonVisible]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <slot name="helper" slot="helper">[[helperText]]</slot>

      <div part="toggle-button" id="toggleButton" slot="suffix" role="button" aria-label="Toggle"></div>

    </vaadin-text-field>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" renderer="[[renderer]]" position-target="[[_getPositionTarget()]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`}constructor(){super(),this.theme}static get is(){return"vaadin-combo-box"}static get version(){return"5.4.12"}static get properties(){return{label:{type:String,reflectToAttribute:!0},required:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1},preventInvalidInput:{type:Boolean},pattern:{type:String},errorMessage:{type:String},autofocus:{type:Boolean},placeholder:{type:String,value:""},helperText:{type:String,value:""},readonly:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1}}}static get observers(){return["_updateAriaExpanded(opened)"]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root&&Array.prototype.forEach.call(this.root.querySelectorAll("*"),e=>{e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})}ready(){super.ready(),this._nativeInput=this.inputElement.focusElement,this._toggleElement=this.$.toggleButton,this._clearElement=this.inputElement.shadowRoot.querySelector('[part="clear-button"]'),this.addEventListener("keydown",e=>{this._isEventKey(e,"esc")&&this._onEscape(e)},!0),this._nativeInput.setAttribute("role","combobox"),this._nativeInput.setAttribute("aria-autocomplete","list"),this._updateAriaExpanded()}connectedCallback(){super.connectedCallback(),this._preventInputBlur()}disconnectedCallback(){super.disconnectedCallback(),this._restoreInputBlur()}_getPositionTarget(){return this.$.input}_updateAriaExpanded(){this._nativeInput&&(this._nativeInput.setAttribute("aria-expanded",this.opened),this._toggleElement.setAttribute("aria-expanded",this.opened))}get inputElement(){return this.$.input}get focusElement(){return this.inputElement||this}}customElements.define(d.is,d)},329:function(e,t,i){"use strict";i(36),i(34);var r=i(6),n=r.a`<dom-module id="lumo-grid-tree-toggle" theme-for="vaadin-grid-tree-toggle">
  <template>
    <style>
      :host {
        --vaadin-grid-tree-toggle-level-offset: 2em;
        align-items: center;
        vertical-align: middle;
        margin-left: calc(var(--lumo-space-s) * -1);
        -webkit-tap-highlight-color: transparent;
      }

      :host(:not([leaf])) {
        cursor: default;
      }

      [part="toggle"] {
        display: inline-block;
        font-size: 1.5em;
        line-height: 1;
        width: 1em;
        height: 1em;
        text-align: center;
        color: var(--lumo-contrast-50pct);
        /* Increase touch target area */
        padding: calc(1em / 3);
        margin: calc(1em / -3);
      }

      :host(:not([dir="rtl"])) [part="toggle"] {
        margin-right: 0;
      }

      @media (hover: hover) {
        :host(:hover) [part="toggle"] {
          color: var(--lumo-contrast-80pct);
        }
      }

      [part="toggle"]::before {
        font-family: "lumo-icons";
        display: inline-block;
        height: 100%;
      }

      :host(:not([expanded])) [part="toggle"]::before {
        content: var(--lumo-icons-angle-right);
      }

      :host([expanded]) [part="toggle"]::before {
        content: var(--lumo-icons-angle-right);
        transform: rotate(90deg);
      }

      /* Experimental support for hierarchy connectors, using an unsupported selector */
      :host([theme~="connectors"]) #level-spacer {
        position: relative;
        z-index: -1;
        font-size: 1em;
        height: 1.5em;
      }

      :host([theme~="connectors"]) #level-spacer::before {
        display: block;
        content: "";
        margin-top: calc(var(--lumo-space-m) * -1);
        height: calc(var(--lumo-space-m) + 3em);
        background-image: linear-gradient(to right, transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px), var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px));
        background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
        background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) {
        margin-left: 0;
        margin-right: calc(var(--lumo-space-s) * -1);
      }

      :host([dir="rtl"]) [part="toggle"] {
        margin-left: 0;
      }

      :host([dir="rtl"][expanded]) [part="toggle"]::before {
        transform: rotate(-90deg);
      }

      :host([dir="rtl"][theme~="connectors"]) #level-spacer::before {
        background-image: linear-gradient(to left, transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px), var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px));
        background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
      }

      :host([dir="rtl"]:not([expanded])) [part="toggle"]::before,
      :host([dir="rtl"][expanded]) [part="toggle"]::before {
        content: var(--lumo-icons-angle-left);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);var a=i(9),o=(i(63),i(15)),s=i(19),l=i(65),u=i(109),c=i(11),d=document.createElement("template");d.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: \"vaadin-grid-tree-icons\";\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(d.content);class h extends(Object(s.a)(Object(l.a)(a.a))){static get template(){return r.a`
    <style>
      :host {
        display: inline-flex;
        align-items: baseline;

        /* CSS API for :host */
        --vaadin-grid-tree-toggle-level-offset: 1em;

        /*
          ShadyCSS seems to polyfill :dir(rtl) only for :host, thus using
          a host custom CSS property for ltr/rtl toggle icon choice.
         */
        ---collapsed-icon: "\\e7be\\00a0";
      }

      :host(:dir(rtl)) {
        ---collapsed-icon: "\\e7bd\\00a0";
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:not([leaf])) {
        cursor: pointer;
      }

      #level-spacer,
      [part="toggle"] {
        flex: none;
      }

      #level-spacer {
        display: inline-block;
        width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
      }

      [part="toggle"]::before {
        font-family: "vaadin-grid-tree-icons";
        line-height: 1em; /* make icon font metrics not affect baseline */
      }

      :host(:not([expanded])) [part="toggle"]::before {
        content: var(---collapsed-icon);
      }

      :host([expanded]) [part="toggle"]::before {
        content: "\\e7bc\\00a0"; /* icon glyph + single non-breaking space */
      }

      :host([leaf]) [part="toggle"] {
        visibility: hidden;
      }
    </style>

    <span id="level-spacer"></span>
    <span part="toggle"></span>
    <slot></slot>
`}static get is(){return"vaadin-grid-tree-toggle"}static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged"},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}}}ready(){super.ready(),this.addEventListener("click",e=>this._onClick(e))}_onClick(e){this.leaf||Object(u.b)(e.target)||(e.preventDefault(),this.expanded=!this.expanded)}_levelChanged(e){var t=Number(e).toString();this.updateStyles({"---level":t}),this._debouncerUpdateLevel=o.a.debounce(this._debouncerUpdateLevel,c.c,()=>this.updateStyles({"---level":t}))}}customElements.define(h.is,h)},330:function(e,t,i){"use strict";var r=i(9),n=i(19),a=i(21),o=i(6);
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class s extends(Object(a.a)(Object(n.a)(r.a))){static get template(){return o.a`
    <style>
      :host([hidden]) {
        display: none !important;
      }

      :host {
        display: block;
        overflow: auto;
      }

      :host([scroll-direction='vertical']) {
        overflow-x: hidden;
      }

      :host([scroll-direction='horizontal']) {
        overflow-y: hidden;
      }

      :host([scroll-direction='none']) {
        overflow: hidden;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0}}}static get version(){return"1.4.0"}}customElements.define(s.is,s)},331:function(e,t,i){"use strict";i(273),i(36),i(143);var r=i(6),n=r.a`<dom-module id="lumo-radio-group" theme-for="vaadin-radio-group">
  <template>
    <style include="lumo-required-field">
      :host {
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-size-m);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([theme~="vertical"]) [part="group-field"] {
        display: flex;
        flex-direction: column;
      }

      [part="label"] {
        padding-bottom: 0.7em;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="label"],
      :host(:hover:not([readonly])) [part="helper-text"],
      :host(:hover:not([readonly])) [part="helper-text"] ::slotted(*) {
        color: var(--lumo-body-text-color);
      }

      :host([has-helper]) [part="helper-text"]::before {
        content: "";
        display: block;
        height: 0.4em;
      }

      [part="helper-text"],
      [part="helper-text"] ::slotted(*) {
        display: block;
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
      }

      /* helper-text position */

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
        display: none;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="label"] {
        order: 0;
        padding-bottom: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"] {
        order: 1;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="group-field"] {
        order: 2;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="error-message"] {
        order: 3;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);var a=i(9),o=i(23),s=i(19),l=i(65),u=i(237);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class c extends(Object(s.a)(Object(l.a)(a.a))){static get template(){return r.a`
    <style>
      :host {
        display: inline-flex;

        /* Prevent horizontal overflow in IE 11 instead of wrapping radios */
        max-width: 100%;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-group-field-container {
        display: flex;
        flex-direction: column;

        /* Prevent horizontal overflow in IE 11 instead of wrapping radios */
        width: 100%;
      }

      [part="label"]:empty {
        display: none;
      }
    </style>

    <div class="vaadin-group-field-container">
      <label part="label">[[label]]</label>

      <div part="group-field">
        <slot id="slot"></slot>
      </div>

      <div part="helper-text" id="[[_helperTextId]]" aria-live="assertive" aria-hidden\$="[[_getHelperTextAriaHidden(helperText, _helperTextId, _hasSlottedHelper)]]">
        <slot name="helper">[[helperText]]</slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>
    </div>
`}static get is(){return"vaadin-radio-group"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0,observer:"_disabledChanged"},readonly:{type:Boolean,reflectToAttribute:!0,observer:"_readonlyChanged"},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},_errorId:{type:String},_helperTextId:{type:String},_hasSlottedHelper:Boolean,_checkedButton:{type:Object},label:{type:String,value:"",observer:"_labelChanged"},helperText:{type:String,value:"",observer:"_helperTextChanged"},value:{type:String,notify:!0,observer:"_valueChanged"}}}ready(){super.ready(),this._addListeners(),this._observer=new o.a(this,e=>{var t=e=>{e.target.checked&&this._changeSelectedButton(e.target)};this._filterRadioButtons(e.addedNodes).reverse().forEach(e=>{e.addEventListener("checked-changed",t),this.disabled&&(e.disabled=!0),e.checked&&this._changeSelectedButton(e)}),this._filterRadioButtons(e.removedNodes).forEach(e=>{e.removeEventListener("checked-changed",t),e==this._checkedButton&&(this.value=void 0)}),this._setOrToggleHasHelperAttribute()}),this._radioButtons.length&&this._setFocusable(0),this.setAttribute("role","radiogroup");var e=c._uniqueId=1+c._uniqueId||0;this._errorId=`${this.constructor.is}-error-${e}`,this._helperTextId=`${this.constructor.is}-helper-${e}`}get _radioButtons(){return this._filterRadioButtons(this.querySelectorAll("*"))}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused")}_filterRadioButtons(e){return Array.from(e).filter(e=>e instanceof u.a)}_disabledChanged(e){this.setAttribute("aria-disabled",e),this._updateDisableButtons()}_updateDisableButtons(){this._radioButtons.forEach(e=>{this.disabled?e.disabled=!0:this.readonly?e.disabled=e!==this._checkedButton&&this.readonly:e.disabled=!1})}_readonlyChanged(e,t){(e||t)&&this._updateDisableButtons()}_addListeners(){this.addEventListener("keydown",e=>{var t=e.target==this?this._checkedButton:e.target,i="rtl"===this.getAttribute("dir")&&"vertical"!==this.theme;37!==e.keyCode&&38!==e.keyCode||(e.preventDefault(),this._selectIncButton(i,t)),39!==e.keyCode&&40!==e.keyCode||(e.preventDefault(),this._selectIncButton(!i,t))}),this.addEventListener("focusin",()=>this._setFocused(this._containsFocus())),this.addEventListener("focusout",e=>{e.composed&&this.validate(),this._setFocused(!1)})}_selectIncButton(e,t){e?this._selectNextButton(t):this._selectPreviousButton(t)}_selectButton(e,t){this._containsFocus()&&(e.focus(),t&&e.setAttribute("focus-ring","")),this._changeSelectedButton(e,t)}_containsFocus(){var e=this.getRootNode(),t=void 0!==e._activeElement?e._activeElement:e.activeElement;return this.contains(t)}_hasEnabledButtons(){return!this._radioButtons.every(e=>e.disabled)}_selectNextButton(e){if(this._hasEnabledButtons()){var t=e.nextElementSibling||this.firstElementChild;t.disabled?this._selectNextButton(t):this._selectButton(t,!0)}}_selectPreviousButton(e){if(this._hasEnabledButtons()){var t=e.previousElementSibling||this.lastElementChild;t.disabled?this._selectPreviousButton(t):this._selectButton(t,!0)}}_changeSelectedButton(e,t){this._checkedButton!==e&&(this._checkedButton=e,this._checkedButton&&(this.value=this._checkedButton.value),this._radioButtons.forEach(e=>{e===this._checkedButton?t?e.click():e.checked=!0:e.checked=!1}),this.validate(),this.readonly&&this._updateDisableButtons(),e&&this._setFocusable(this._radioButtons.indexOf(e)))}_valueChanged(e,t){if(t&&(""===e||null==e))return this._changeSelectedButton(null),void this.removeAttribute("has-value");if(!this._checkedButton||e!=this._checkedButton.value){var i=this._radioButtons.filter(t=>t.value==e)[0];this._selectButton(i)}this._checkedButton?this.setAttribute("has-value",""):console.warn(`No <vaadin-radio-button> with value ${e} found.`)}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return!this.required||!!this.value}_setFocusable(e){var t=this._radioButtons;t.forEach(i=>i.tabindex=i===t[e]?0:-1)}_labelChanged(e){this._setOrToggleAttribute("has-label",!!e)}_errorMessageChanged(e){this._setOrToggleAttribute("has-error-message",!!e)}_helperTextChanged(e){this._setOrToggleAttribute("has-helper",!!e)}_setOrToggleAttribute(e,t){e&&(t?this.setAttribute(e,"boolean"==typeof t?"":t):this.removeAttribute(e))}_setOrToggleHasHelperAttribute(){var e=this.shadowRoot.querySelector('[name="helper"]').assignedNodes();this._hasSlottedHelper=e.filter(e=>3!==e.nodeType).length>0,this._setOrToggleAttribute("has-helper",this._hasSlottedHelper?"slotted":!!this.helperText)}_getActiveErrorId(e,t,i){return t&&e?i:void 0}_getErrorMessageAriaHidden(e,t,i){return(!this._getActiveErrorId(e,t,i)).toString()}_getHelperTextAriaHidden(e,t,i){return(!(e||i)).toString()}}customElements.define(c.is,c)},332:function(e,t,i){"use strict";i(36),i(56),i(34),i(38);var r=i(6),n=r.a`<dom-module id="lumo-split-layout" theme-for="vaadin-split-layout">
  <template>
    <style>
      [part="splitter"] {
        min-width: var(--lumo-space-s);
        min-height: var(--lumo-space-s);
        background-color: var(--lumo-contrast-5pct);
        transition: 0.1s background-color;
      }

      [part="handle"] {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--lumo-size-m);
        height: var(--lumo-size-m);
      }

      [part="handle"]::after {
        content: "";
        display: block;
        width: 4px;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-30pct);
        transition: 0.1s opacity, 0.1s background-color;
      }

      :host([orientation="vertical"]) [part="handle"]::after {
        width: 100%;
        height: 4px;
      }

      /* Hover style */

      [part="splitter"]:hover [part="handle"]::after {
        background-color: var(--lumo-contrast-40pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        [part="splitter"]:hover [part="handle"]::after {
          background-color: var(--lumo-contrast-30pct);
        }
      }

      /* Active style */

      [part="splitter"]:active [part="handle"]::after {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Small/minimal */

      :host([theme~="small"]) > [part="splitter"] {
        border-left: 1px solid var(--lumo-contrast-10pct);
        border-top: 1px solid var(--lumo-contrast-10pct);
      }

      :host([theme~="small"]) > [part="splitter"],
      :host([theme~="minimal"]) > [part="splitter"] {
        min-width: 0;
        min-height: 0;
        background-color: transparent;
      }

      :host([theme~="small"]) > [part="splitter"]::after,
      :host([theme~="minimal"]) > [part="splitter"]::after {
        content: "";
        position: absolute;
        top: -4px;
        right: -4px;
        bottom: -4px;
        left: -4px;
      }

      :host([theme~="small"]) > [part="splitter"] > [part="handle"]::after,
      :host([theme~="minimal"]) > [part="splitter"] > [part="handle"]::after {
        opacity: 0;
      }

      :host([theme~="small"]) > [part="splitter"]:hover > [part="handle"]::after,
      :host([theme~="small"]) > [part="splitter"]:active > [part="handle"]::after,
      :host([theme~="minimal"]) > [part="splitter"]:hover > [part="handle"]::after,
      :host([theme~="minimal"]) > [part="splitter"]:active > [part="handle"]::after {
        opacity: 1;
      }

      /* RTL specific styles */

      :host([theme~="small"][dir="rtl"]) > [part="splitter"] {
        border-left: auto;
        border-right: 1px solid var(--lumo-contrast-10pct);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);var a=i(9),o=i(48),s=i(23),l=i(73),u=i(19),c=i(21),d=i(67);
/**
@license
Copyright (c) 2016 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class h extends(Object(c.a)(Object(u.a)(Object(o.a)(Object(d.b)([l.a],a.a))))){static get template(){return r.a`
    <style>
      :host {
        display: flex;
        overflow: hidden !important;
        transform: translateZ(0);
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([orientation="vertical"]) {
        flex-direction: column;
      }

      :host ::slotted(*) {
        flex: 1 1 auto;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="splitter"] {
        flex: none;
        position: relative;
        z-index: 1;
        overflow: visible;
        min-width: 8px;
        min-height: 8px;
      }

      :host(:not([orientation="vertical"])) > [part="splitter"] {
        cursor: ew-resize;
      }

      :host([orientation="vertical"]) > [part="splitter"] {
        cursor: ns-resize;
      }

      [part="handle"] {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
      }
    </style>
    <slot id="primary" name="primary"></slot>
    <div part="splitter" id="splitter" on-track="_onHandleTrack" on-down="_setPointerEventsNone" on-up="_restorePointerEvents">
      <div part="handle"></div>
    </div>
    <slot id="secondary" name="secondary"></slot>

    <div hidden="">
      <!-- Workaround to fix a Shady style scoping issue caused by dynamic slot naming of the child elements (primary/secondary) -->
      <slot></slot>
    </div>
`}static get is(){return"vaadin-split-layout"}static get version(){return"4.3.1"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),new s.a(this,e=>{this._cleanupNodes(e.removedNodes),this._processChildren()})}_cleanupNodes(e){e.forEach(e=>{e.removeAttribute("slot")})}_processChildren(){this.getEffectiveChildren().forEach((e,t)=>{0===t?(this._primaryChild=e,e.setAttribute("slot","primary")):1==t?(this._secondaryChild=e,e.setAttribute("slot","secondary")):e.removeAttribute("slot")})}_setFlexBasis(e,t,i){0===(t=Math.max(0,Math.min(t,i)))&&(t=1e-6),e.style.flex="1 1 "+t+"px"}_setPointerEventsNone(e){this._primaryChild&&this._secondaryChild&&(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",e.preventDefault())}_restorePointerEvents(){this._primaryChild&&this._secondaryChild&&(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(e){if(this._primaryChild&&this._secondaryChild){var t="vertical"===this.orientation?"height":"width";if("start"!==e.detail.state){var i="vertical"===this.orientation?e.detail.dy:e.detail.dx,r="vertical"!==this.orientation&&"rtl"===this.getAttribute("dir")?-i:i;this._setFlexBasis(this._primaryChild,this._startSize.primary+r,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-r,this._startSize.container),this.notifyResize(),"end"===e.detail.state&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}else this._startSize={container:this.getBoundingClientRect()[t]-this.$.splitter.getBoundingClientRect()[t],primary:this._primaryChild.getBoundingClientRect()[t],secondary:this._secondaryChild.getBoundingClientRect()[t]}}}notifyResize(){super.notifyResize()}}customElements.define(h.is,h)},333:function(e,t,i){"use strict";var r=i(6),n=r.a`<dom-module id="lumo-email-field" theme-for="vaadin-email-field">
  <template>
    <style>
      :not(*):placeholder-shown, /* to prevent broken styles on IE */
      :host([dir="rtl"]) [part="value"]:placeholder-shown,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input:placeholder-shown) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);i(122),i(9),i(63);var a,o=i(102),s=i(58),l=r.a`<dom-module id="vaadin-email-field-template">
  <template>
    <style>
      :host([dir="rtl"]) [part="input-field"] {
        direction: ltr;
      }

      :host([dir="rtl"]) [part="value"]::placeholder {
        direction: rtl;
        text-align: left;
      }

      :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {
        direction: rtl;
        text-align: left;
      }

      :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {
        direction: rtl;
        text-align: left;
      }
    </style>
  </template>
  
</dom-module>`;document.head.appendChild(l.content);class u extends o.a{static get is(){return"vaadin-email-field"}static get version(){return"2.9.2"}static get template(){if(!a){a=super.template.cloneNode(!0);var e=s.a.import(this.is+"-template","template").content.querySelector("style");a.content.appendChild(e)}return a}ready(){super.ready(),this.inputElement.type="email",this.inputElement.autocapitalize="off"}_createConstraintsObserver(){this.pattern=this.pattern||"^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9-.]+\\.[a-zA-Z0-9-]{2,}$",super._createConstraintsObserver()}}customElements.define(u.is,u)},341:function(e,t,i){"use strict";i(274),i(9),i(63);var r=i(238),n=i(6).a`<dom-module id="vaadin-integer-field-template">

  
</dom-module>`;document.head.appendChild(n.content);class a extends r.a{static get is(){return"vaadin-integer-field"}static get version(){return"2.9.2"}static get properties(){return{pattern:String,preventInvalidInput:Boolean,minlength:Number,maxlength:Number}}ready(){super.ready(),this._enabledCharPattern="[-+\\d]"}_valueChanged(e,t){if(""!==e&&!this.__isInteger(e))return console.warn(`Trying to set non-integer value "${e}" to <vaadin-integer-field>. Clearing the value.`),void(this.value="");super._valueChanged(e,t)}_stepChanged(e,t){if(!this.__hasOnlyDigits(e))return console.warn(`Trying to set invalid step size "${e}", which is not a positive integer, to <vaadin-integer-field>. Resetting the default value 1.`),void(this.step=1);super._stepChanged(e,t)}__isInteger(e){return/^(-\d)?\d*$/.test(String(e))}__hasOnlyDigits(e){return/^\d*$/.test(String(e))}}window.customElements.define(a.is,a)}}]);