var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/lookups/base/example.jsx.js"]=function(t){function e(e){for(var s,l,a=e[0],c=e[1],r=e[2],d=0,p=[];d<a.length;d++)l=a[d],o[l]&&p.push(o[l][0]),o[l]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);for(u&&u(e);p.length;)p.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(s=!1)}s&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var s={},o={122:0,6:0,7:0,13:0,14:0,20:0,30:0,36:0,40:0,43:0,51:0,54:0,55:0,59:0,60:0,63:0,66:0,70:0,72:0,75:0,79:0,81:0,82:0,87:0,92:0,93:0,97:0,98:0,106:0,109:0,110:0,114:0,116:0,117:0,118:0,119:0,120:0,121:0,125:0,130:0,136:0,143:0,153:0,157:0,159:0,160:0,161:0,168:0,171:0,172:0},i=[];function l(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=s,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},l.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/assets/scripts/bundle/";var a=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var r=0;r<a.length;r++)e(a[r]);var u=c;return i.push([178,0]),n()}({0:function(t,e){t.exports=React},178:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.states=e.Context=void 0;var s=u(n(0)),o=u(n(18)),i=u(n(17)),l=u(n(2)),a=n(6),c=n(10),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(32));function u(t){return t&&t.__esModule?t:{default:t}}e.Context=function(t){return s.default.createElement("div",{style:{height:"15rem"}},t.children)};e.default=s.default.createElement(o.default,{id:"combobox-id-1","aria-controls":"listbox-id-1",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.default.createElement(a.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),listbox:s.default.createElement(i.default,{id:"listbox-id-1",snapshot:r.EntityOptions,type:"entity",count:3}),hasInteractions:!0});e.states=[{id:"focused",label:"Focused",element:s.default.createElement(o.default,{id:"combobox-id-2","aria-controls":"listbox-id-2",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.default.createElement(a.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),listbox:s.default.createElement(i.default,{id:"listbox-id-2",snapshot:r.EntityOptions,type:"entity",count:3}),isOpen:!0,hasFocus:!0})},{id:"open-item-focused",label:"Open - Item Focused",element:s.default.createElement(o.default,{id:"combobox-id-3","aria-controls":"listbox-id-3",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.default.createElement(a.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),listbox:s.default.createElement(i.default,{id:"listbox-id-3",snapshot:r.EntityOptionsFocused,type:"entity",count:3}),"aria-activedescendant":"option1",isOpen:!0,hasFocus:!0})},{id:"displaying-options-based-on-input",label:"Displaying options based on user input",element:s.default.createElement(o.default,{id:"combobox-id-4","aria-controls":"listbox-id-4",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.default.createElement(a.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),value:"salesforce",listbox:s.default.createElement(i.default,{id:"listbox-id-4",snapshot:r.EntityOptionsTypeahead,term:"salesforce",type:"entity",count:4}),"aria-activedescendant":"option1",isOpen:!0,hasFocus:!0})},{id:"closed-option-selected",label:"Option Selected",element:s.default.createElement(o.default,{id:"combobox-id-5","aria-controls":"listbox-id-5",inputIconPosition:"left-right",leftInputIcon:s.default.createElement(c.StandardIcon,{symbol:"account",className:"slds-icon_small",containerClassName:"slds-combobox__input-entity-icon",assistiveText:"Account",title:"Account"}),rightInputIcon:s.default.createElement(l.default,{className:"slds-input__icon slds-input__icon_right",symbol:"close",title:"Remove selected option",assistiveText:"Remove selected option"}),listbox:s.default.createElement(i.default,{id:"listbox-id-5",snapshot:r.EntityOptions,type:"entity",count:2}),hasSelection:!0,value:"Salesforce.com, Inc.",readonly:!0})}]}});