var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/expression/base/example.jsx.js"]=function(e){function t(t){for(var o,l,s=t[0],a=t[1],u=t[2],d=0,c=[];d<s.length;d++)l=s[d],r[l]&&c.push(r[l][0]),r[l]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(p&&p(t);c.length;)c.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={15:0,6:0,7:0,13:0,14:0,20:0,30:0,36:0,40:0,43:0,51:0,54:0,55:0,59:0,60:0,63:0,66:0,70:0,72:0,75:0,79:0,81:0,82:0,87:0,92:0,93:0,97:0,98:0,106:0,109:0,110:0,114:0,116:0,117:0,118:0,119:0,120:0,121:0,125:0,130:0,136:0,143:0,153:0,157:0,159:0,160:0,161:0,168:0,171:0,172:0},i=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=a;return i.push([77,0]),n()}({0:function(e,t){e.exports=React},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),r=n(34);t.default=o.default.createElement(r.Expression,null);t.examples=[{id:"initial-state",label:"Initial State",element:o.default.createElement(r.Expression,{inputIsDisabled:!0,buttonIsDisabled:!0})},{id:"with-expression-group",label:"With Expression Group",element:o.default.createElement(r.Expression,{optionSelected:"all",resourceIsSelected:!0},o.default.createElement(r.ExpressionGroup,{legendText:"AND",assistiveText:"Condition Group 1"},o.default.createElement(r.ExpressionRow,{conditionName:"Condition 1",isGroup:!0,groupName:"Condition Group 1"}),o.default.createElement(r.ExpressionRow,{conditionName:"Condition 2",legendText:"AND",isGroup:!0,groupName:"Condition Group 1"})))},{id:"with-multiple-conditions",label:"With Multiple Conditions",element:o.default.createElement(r.Expression,null,o.default.createElement(r.ExpressionRow,{legendText:"AND",conditionName:"Condition 2"}))},{id:"with-disabled-inputs",label:"With Disabled Inputs",element:o.default.createElement(r.Expression,null,o.default.createElement(r.ExpressionRow,{legendText:"AND",conditionName:"Condition 2",inputIsDisabled:!0}))},{id:"with-error",label:"With an Error",element:o.default.createElement(r.Expression,null,o.default.createElement(r.ExpressionRow,{legendText:"AND",conditionName:"Condition 2",errorMessage:"Input has error",hasError:!0}))}]}});