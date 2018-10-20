var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/form-element/base/example.jsx.js"]=function(e){function t(t){for(var a,d,o=t[0],m=t[1],r=t[2],u=0,c=[];u<o.length;u++)d=o[u],n[d]&&c.push(n[d][0]),n[d]=0;for(a in m)Object.prototype.hasOwnProperty.call(m,a)&&(e[a]=m[a]);for(s&&s(t);c.length;)c.shift()();return i.push.apply(i,r||[]),l()}function l(){for(var e,t=0;t<i.length;t++){for(var l=i[t],a=!0,o=1;o<l.length;o++){var m=l[o];0!==n[m]&&(a=!1)}a&&(i.splice(t--,1),e=d(d.s=l[0]))}return e}var a={},n={45:0,6:0,7:0,13:0,14:0,20:0,30:0,36:0,40:0,43:0,51:0,54:0,55:0,59:0,60:0,63:0,66:0,70:0,72:0,75:0,79:0,81:0,82:0,87:0,92:0,93:0,97:0,98:0,106:0,109:0,110:0,114:0,116:0,117:0,118:0,119:0,120:0,121:0,125:0,130:0,136:0,143:0,153:0,157:0,159:0,160:0,161:0,168:0,171:0,172:0},i=[];function d(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,d),l.l=!0,l.exports}d.m=e,d.c=a,d.d=function(e,t,l){d.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},d.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],m=o.push.bind(o);o.push=t,o=o.slice();for(var r=0;r<o.length;r++)t(o[r]);var s=m;return i.push([107,0]),l()}({0:function(e,t){e.exports=React},105:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ObjectFieldTypesSingleColumn=t.ObjectFieldTypes=void 0;var a=p(l(0)),n=p(l(2)),i=l(7),d=l(11),o=l(66),m=l(19),r=l(50),s=l(38),u=p(l(18)),c=p(l(17)),f=l(6);function p(e){return e&&e.__esModule?e:{default:e}}t.ObjectFieldTypes={rows:[{fields:[{type:"text",label:"Assigned To",value:"Jack Rogers",avatar:"/assets/images/avatar1.jpg",isRequired:!0,link:!0,component:a.default.createElement(i.FormElement,{inputId:"form-element-id-01",labelContent:"Assigned To",isRequired:!0,isEditing:!0},a.default.createElement(d.Input,{id:"form-element-id-01",readOnly:!0,defaultValue:"Jack Rogers",required:!0}))},{type:"lookup",label:"Team Name",value:"Salesforce Lightning Design System",link:!0,component:a.default.createElement(u.default,{id:"combobox-id-01",label:"Team Name","aria-controls":"listbox-id-01",autocomplete:!0,inputIconPosition:"right",rightInputIcon:a.default.createElement(n.default,{className:"slds-input__icon slds-input__icon_right",symbol:"clear",title:"Clear the text input",assistiveText:"Clear the text input"}),listbox:a.default.createElement(c.default,{id:"listbox-id-01",snapshot:{},type:"entity",count:2}),value:"Salesforce Lightning Design System"})}]},{fields:[{type:"checkbox",label:"Security Assessment Required?",value:"False",component:a.default.createElement(i.FormElement,{labelContent:"Security Assessment Required?",inputId:"checkbox-id-01",isEditing:!0},a.default.createElement(r.CheckboxStandalone,{id:"checkbox-id-01"}))},{type:"picklist",label:"Status",value:"In Progress",component:a.default.createElement(u.default,{id:"combobox-id-02",label:"Status",value:"In Progress","aria-controls":"listbox-id-02",readonly:!0,inputIconPosition:"right",rightInputIcon:a.default.createElement(f.UtilityIcon,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),listbox:a.default.createElement(c.default,{id:"listbox-id-02",snapshot:{},type:"plain",count:2,visualSelection:!0})})}]},{fields:[{type:"checkbox-group",label:"Personalization Settings",value:"Disable end user personalization",component:a.default.createElement(i.Fieldset,{label:"App Personalization Settings",isEditing:!0},a.default.createElement(m.Checkbox,{label:"Disable end user personalization",name:"default",checked:!0}),a.default.createElement(m.Checkbox,{label:"Don't automatically create temporary tabs",name:"default"}))},{type:"",label:"",value:""}]},{fields:[{type:"text",label:"SLA Serial Number",value:"5367",hasTooltip:!0,component:a.default.createElement(i.FormElement,{labelContent:"SLA Serial Number",inputId:"form-element-id-02",hasTooltip:!0,isEditing:!0},a.default.createElement(d.Input,{id:"form-element-id-02",defaultValue:"5367"}))},{type:"date",label:"SLA Expiration Date",value:"1/1/2018",component:a.default.createElement(i.FormElement,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"Date",inputId:"form-element-id-03",hasRightIcon:!0},a.default.createElement(d.Input,{id:"form-element-id-03",defaultValue:"1/1/2018"}),a.default.createElement(n.default,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"}))}]},{fields:[{type:"location",label:"Location",value:"10.283, 54.293",component:a.default.createElement(i.Fieldset,{label:"Location",isEditing:!0,hasCompoundFields:!0},a.default.createElement("div",{className:"slds-form-element__group"},a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_1-of-2",labelContent:"Longitude",inputId:"location-longitude-01"},a.default.createElement(d.Input,{id:"location-longitude-01",defaultValue:"10.283"})),a.default.createElement(i.FormElement,{formElementClassName:"slds-size_1-of-2",labelContent:"Latitude",inputId:"location-latitude-01"},a.default.createElement(d.Input,{id:"location-latitude-01",defaultValue:"54.293"})))))},{type:"multiselect",label:"Selected Languages",value:"Arabic, Chinese, English, German",component:a.default.createElement(s.MultiSelect,{dataSet:s.DefaultSnapShot,isResponsive:!0})}]},{fields:[{type:"address",label:"Billing Address",value:["525 S. Lexington Ave","Burlington, NC 27215","USA"],link:!0,isRequired:!0,hasTooltip:!0,component:a.default.createElement(i.Fieldset,{label:"Billing Address",isRequired:!0,isEditing:!0,isStacked:!0,hasTooltip:!0,hasCompoundFields:!0},a.default.createElement("div",{className:"slds-form-element__group"},a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_1-of-1",labelContent:"Billing Street",inputId:"form-element-id-04"},a.default.createElement(o.Textarea,{id:"form-element-id-04",defaultValue:"525 S. Lexington Ave",required:!0}))),a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_4-of-6",labelContent:"Billing City",inputId:"form-element-id-05"},a.default.createElement(d.Input,{id:"form-element-id-05",defaultValue:"Burlington",required:!0})),a.default.createElement(i.FormElement,{formElementClassName:"slds-size_2-of-6",labelContent:"Billing State/Province",inputId:"form-element-id-06"},a.default.createElement(d.Input,{id:"form-element-id-06",defaultValue:"NC",required:!0}))),a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_4-of-6",labelContent:"Billing Zip/Postal Code",inputId:"form-element-id-07"},a.default.createElement(d.Input,{id:"form-element-id-07",defaultValue:"27215",required:!0})),a.default.createElement(i.FormElement,{formElementClassName:"slds-size_2-of-6",labelContent:"Billing Country",inputId:"form-element-id-08"},a.default.createElement(d.Input,{id:"form-element-id-08",defaultValue:"USA",required:!0})))))},{type:"address",label:"Shipping Address",value:["312 Constitution Place","Austin, TX 78767","USA"],link:!0,component:a.default.createElement(i.Fieldset,{label:"Shipping Address",isEditing:!0,isStacked:!0,hasCompoundFields:!0},a.default.createElement("div",{className:"slds-form-element__group"},a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_1-of-1",labelContent:"Shipping Street",inputId:"form-element-id-09"},a.default.createElement(o.Textarea,{id:"form-element-id-09",defaultValue:"312 Constitution Place"}))),a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_4-of-6",labelContent:"Shipping City",inputId:"form-element-id-10"},a.default.createElement(d.Input,{id:"form-element-id-10",defaultValue:"Austin"})),a.default.createElement(i.FormElement,{formElementClassName:"slds-size_2-of-6",labelContent:"Shipping State/Province",inputId:"form-element-id-11"},a.default.createElement(d.Input,{id:"form-element-id-11",defaultValue:"TX"}))),a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_4-of-6",labelContent:"Shipping Zip/Postal Code",inputId:"form-element-id-12"},a.default.createElement(d.Input,{id:"form-element-id-12",defaultValue:"78767"})),a.default.createElement(i.FormElement,{formElementClassName:"slds-size_2-of-6",labelContent:"Shipping Country",inputId:"form-element-id-13"},a.default.createElement(d.Input,{id:"form-element-id-13",defaultValue:"USA"})))))}]},{fields:[{type:"textarea",label:"Description",value:["Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod."],component:a.default.createElement(i.FormElement,{labelContent:"Description",inputId:"form-element-id-14",isStacked:!0,isEditing:!0},a.default.createElement(o.Textarea,{id:"form-element-id-14",defaultValue:"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod."}))}]}]},t.ObjectFieldTypesSingleColumn={rows:[{fields:[{type:"text",label:"Assigned To",value:"Jack Rogers",avatar:"/assets/images/avatar1.jpg",isRequired:!0,link:!0,component:a.default.createElement(i.FormElement,{inputId:"form-element-id-01",labelContent:"Assigned To",isRequired:!0,isEditing:!0},a.default.createElement(d.Input,{id:"form-element-id-01",readOnly:!0,defaultValue:"Jack Rogers",required:!0}))}]},{fields:[{type:"lookup",label:"Team Name",value:"Salesforce Lightning Design System",link:!0,component:a.default.createElement(u.default,{id:"combobox-id-01",label:"Team Name","aria-controls":"listbox-id-01",autocomplete:!0,inputIconPosition:"right",rightInputIcon:a.default.createElement(n.default,{className:"slds-input__icon slds-input__icon_right",symbol:"clear",title:"Clear the text input",assistiveText:"Clear the text input"}),listbox:a.default.createElement(c.default,{id:"listbox-id-01",snapshot:{},type:"entity",count:2}),value:"Salesforce Lightning Design System"})}]},{fields:[{type:"checkbox",label:"Security Assessment Required?",value:"False",component:a.default.createElement(i.FormElement,{labelContent:"Security Assessment Required?",inputId:"checkbox-id-01",isEditing:!0},a.default.createElement(r.CheckboxStandalone,{id:"checkbox-id-01"}))}]},{fields:[{type:"picklist",label:"Status",value:"In Progress",component:a.default.createElement(u.default,{id:"combobox-id-02",label:"Status",value:"In Progress","aria-controls":"listbox-id-02",readonly:!0,inputIconPosition:"right",rightInputIcon:a.default.createElement(f.UtilityIcon,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),listbox:a.default.createElement(c.default,{id:"listbox-id-02",snapshot:{},type:"plain",count:2,visualSelection:!0})})}]},{fields:[{type:"text",label:"Reference Image",value:"The URL for the image is https://www.google.com/imgres?imgurl=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple128%2Fv4%2F50%2F98%2Fb6%2F5098b62e-b26d-6d0e-bda4-26a85c42fe1f%2FAppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-3.png%2F246x0w.jpg&imgrefurl=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fflower%2Fid1279174518%3Fmt%3D8&docid=2fZCCC_Ugr43lM&tbnid=9soMHOA780_ooM%3A&vet=10ahUKEwiJzc206-PcAhVYIjQIHcJsB3YQMwjxASgAMAA..i&w=246&h=246&bih=1320&biw=1280&q=flower&ved=0ahUKEwiJzc206-PcAhVYIjQIHcJsB3YQMwjxASgAMAA&iact=mrc&uact=8"}]},{fields:[{type:"richtext",label:"Rich Text Output",value:a.default.createElement("div",{className:"slds-rich-text-editor__output"},a.default.createElement("p",null,"Here's a big image"),a.default.createElement("p",null,a.default.createElement("img",{src:"/assets/images/themes/oneSalesforce/banner-group-public-default.png",alt:""})))}]},{fields:[{type:"text",label:"SLA Serial Number",value:"5367",hasTooltip:!0,component:a.default.createElement(i.FormElement,{labelContent:"SLA Serial Number",inputId:"form-element-id-02",hasTooltip:!0,isEditing:!0},a.default.createElement(d.Input,{id:"form-element-id-02",defaultValue:"5367"}))}]},{fields:[{type:"date",label:"SLA Expiration Date",value:"1/1/2018",component:a.default.createElement(i.FormElement,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"Date",inputId:"form-element-id-03",hasRightIcon:!0},a.default.createElement(d.Input,{id:"form-element-id-03",defaultValue:"1/1/2018"}),a.default.createElement(n.default,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"}))}]},{fields:[{type:"location",label:"Location",value:"10.283, 54.293",component:a.default.createElement(i.Fieldset,{label:"Location",isEditing:!0,hasCompoundFields:!0},a.default.createElement("div",{className:"slds-form-element__group"},a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_1-of-2",labelContent:"Longitude",inputId:"location-longitude-01"},a.default.createElement(d.Input,{id:"location-longitude-01",defaultValue:"10.283"})),a.default.createElement(i.FormElement,{formElementClassName:"slds-size_1-of-2",labelContent:"Latitude",inputId:"location-latitude-01"},a.default.createElement(d.Input,{id:"location-latitude-01",defaultValue:"54.293"})))))}]},{fields:[{type:"multiselect",label:"Selected Languages",value:"Arabic, Chinese, English, German",component:a.default.createElement(s.MultiSelect,{dataSet:s.DefaultSnapShot,isResponsive:!0})}]},{fields:[{type:"address",label:"Billing Address",value:["525 S. Lexington Ave","Burlington, NC 27215","USA"],link:!0,isRequired:!0,hasTooltip:!0,component:a.default.createElement(i.Fieldset,{label:"Billing Address",isRequired:!0,isEditing:!0,isStacked:!0,hasTooltip:!0,hasCompoundFields:!0},a.default.createElement("div",{className:"slds-form-element__group"},a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_1-of-1",labelContent:"Billing Street",inputId:"form-element-id-04"},a.default.createElement(o.Textarea,{id:"form-element-id-04",defaultValue:"525 S. Lexington Ave",required:!0}))),a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_4-of-6",labelContent:"Billing City",inputId:"form-element-id-05"},a.default.createElement(d.Input,{id:"form-element-id-05",defaultValue:"Burlington",required:!0})),a.default.createElement(i.FormElement,{formElementClassName:"slds-size_2-of-6",labelContent:"Billing State/Province",inputId:"form-element-id-06"},a.default.createElement(d.Input,{id:"form-element-id-06",defaultValue:"NC",required:!0}))),a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_4-of-6",labelContent:"Billing Zip/Postal Code",inputId:"form-element-id-07"},a.default.createElement(d.Input,{id:"form-element-id-07",defaultValue:"27215",required:!0})),a.default.createElement(i.FormElement,{formElementClassName:"slds-size_2-of-6",labelContent:"Billing Country",inputId:"form-element-id-08"},a.default.createElement(d.Input,{id:"form-element-id-08",defaultValue:"USA",required:!0})))))}]},{fields:[{type:"address",label:"Shipping Address",value:["312 Constitution Place","Austin, TX 78767","USA"],link:!0,component:a.default.createElement(i.Fieldset,{label:"Shipping Address",isEditing:!0,isStacked:!0,hasCompoundFields:!0},a.default.createElement("div",{className:"slds-form-element__group"},a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_1-of-1",labelContent:"Shipping Street",inputId:"form-element-id-09"},a.default.createElement(o.Textarea,{id:"form-element-id-09",defaultValue:"312 Constitution Place"}))),a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_4-of-6",labelContent:"Shipping City",inputId:"form-element-id-10"},a.default.createElement(d.Input,{id:"form-element-id-10",defaultValue:"Austin"})),a.default.createElement(i.FormElement,{formElementClassName:"slds-size_2-of-6",labelContent:"Shipping State/Province",inputId:"form-element-id-11"},a.default.createElement(d.Input,{id:"form-element-id-11",defaultValue:"TX"}))),a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_4-of-6",labelContent:"Shipping Zip/Postal Code",inputId:"form-element-id-12"},a.default.createElement(d.Input,{id:"form-element-id-12",defaultValue:"78767"})),a.default.createElement(i.FormElement,{formElementClassName:"slds-size_2-of-6",labelContent:"Shipping Country",inputId:"form-element-id-13"},a.default.createElement(d.Input,{id:"form-element-id-13",defaultValue:"USA"})))))}]},{fields:[{type:"textarea",label:"Description",value:["Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod."],component:a.default.createElement(i.FormElement,{labelContent:"Description",inputId:"form-element-id-14",isStacked:!0,isEditing:!0},a.default.createElement(o.Textarea,{id:"form-element-id-14",defaultValue:"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod."}))}]}]}},106:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompoundForm=void 0;var a=o(l(0)),n=o(l(4)),i=l(7),d=l(11);function o(e){return e&&e.__esModule?e:{default:e}}(t.CompoundForm=function(e){var t=e.hasTooltip,l=e.isRequired;return a.default.createElement(a.default.Fragment,null,a.default.createElement(i.Fieldset,{hasCompoundFields:!0,hasTooltip:t,isRequired:l,label:"Location"},a.default.createElement("div",{className:"slds-form-element__group"},a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_1-of-2",labelContent:"Latitude",inputId:"input-01"},a.default.createElement(d.Input,{id:"input-01"})),a.default.createElement(i.FormElement,{formElementClassName:"slds-size_1-of-2",labelContent:"Longitude",inputId:"input-02"},a.default.createElement(d.Input,{id:"input-02"}))))),a.default.createElement(i.Fieldset,{hasCompoundFields:!0,label:"Shipping Address",isAddress:!0},a.default.createElement("div",{className:"slds-form-element__group"},a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_1-of-1",labelContent:"Shipping Street",inputId:"input-03"},a.default.createElement(d.Input,{id:"input-03"}))),a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_4-of-6",labelContent:"Shipping City",inputId:"input-04"},a.default.createElement(d.Input,{id:"input-04"})),a.default.createElement(i.FormElement,{formElementClassName:"slds-size_2-of-6",labelContent:"Shipping State/Province",inputId:"input-05"},a.default.createElement(d.Input,{id:"input-05",defaultValue:"MT"}))),a.default.createElement("div",{className:"slds-form-element__row"},a.default.createElement(i.FormElement,{formElementClassName:"slds-size_4-of-6",labelContent:"Shipping Zip/Postal Code",inputId:"input-06"},a.default.createElement(d.Input,{id:"input-06"})),a.default.createElement(i.FormElement,{formElementClassName:"slds-size_2-of-6",labelContent:"Shipping Country",inputId:"input-07"},a.default.createElement(d.Input,{id:"input-07",defaultValue:"Canada"}))))))}).propTypes={hasTooltip:n.default.bool,isRequired:n.default.bool}},107:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=void 0;var a=c(l(0)),n=l(7),i=l(11),d=l(66),o=l(19),m=l(22),r=l(106),s=c(l(48)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}(l(105));function c(e){return e&&e.__esModule?e:{default:e}}var f="Form Element Label",p="input-unique-id",E="error-message-unique-id";t.default=a.default.createElement(n.FormElement,{labelContent:f,inputId:p},a.default.createElement(i.Input,{id:p}));t.states=[{id:"required",label:"Required",element:a.default.createElement(n.FormElement,{labelContent:f,inputId:p,isRequired:!0},a.default.createElement(i.Input,{id:p,required:!0}))},{id:"error",label:"Error",element:a.default.createElement(n.FormElement,{labelContent:f,inputId:p,errorId:E,isRequired:!0,hasError:!0,inlineMessage:"This field is required"},a.default.createElement(i.Input,{id:p,required:!0,"aria-describedby":E}))}],t.examples=[{id:"input",label:"Input",element:a.default.createElement(n.FormElement,{labelContent:f,inputId:p},a.default.createElement(i.Input,{id:p}))},{id:"textarea",label:"Textarea",element:a.default.createElement(n.FormElement,{labelContent:f,inputId:p},a.default.createElement(d.Textarea,{id:p}))},{id:"checkbox",label:"Checkbox",element:a.default.createElement(n.FormElement,null,a.default.createElement(o.Checkbox,{label:"Checkbox Label"}))},{id:"checkbox-required",label:"Checkbox - Required",element:a.default.createElement(n.FormElement,null,a.default.createElement(o.Checkbox,{label:"Checkbox Label",isRequired:!0}))},{id:"checkbox-required-help-text",label:"Checkbox - Required with help text icon",element:a.default.createElement(n.FormElement,null,a.default.createElement(o.Checkbox,{label:"Checkbox Label",isRequired:!0,hasTooltip:!0}))},{id:"checkbox-group",label:"Checkbox",element:a.default.createElement(n.Fieldset,{label:"Form Element Legend"},a.default.createElement(o.Checkbox,{label:"Checkbox Label"}),a.default.createElement(o.Checkbox,{label:"Checkbox Label"}))},{id:"checkbox-group-required",label:"Checkbox",element:a.default.createElement(n.Fieldset,{label:"Form Element Legend",isRequired:!0},a.default.createElement(o.Checkbox,{label:"Checkbox Label"}),a.default.createElement(o.Checkbox,{label:"Checkbox Label"}))},{id:"checkbox-group-required-help-text",label:"Checkbox",element:a.default.createElement(n.Fieldset,{id:"fieldset-with-help-text",label:"Form Element Legend",isRequired:!0,hasTooltip:!0},a.default.createElement(o.Checkbox,{label:"Checkbox Label"}),a.default.createElement(o.Checkbox,{label:"Checkbox Label"}))},{id:"radio-group",label:"Radio Group",element:a.default.createElement(n.Fieldset,{label:"Form Element Label"},a.default.createElement(m.Radio,{checked:!0,label:"Radio Label One"}),a.default.createElement(m.Radio,{label:"Radio Label Two"}))},{id:"radio-group-required",label:"Radio Group - Required",element:a.default.createElement(n.Fieldset,{label:"Form Element Label",isRequired:!0},a.default.createElement(m.Radio,{checked:!0,label:"Radio Label One"}),a.default.createElement(m.Radio,{label:"Radio Label Two"}))},{id:"radio-group-required-help-text",label:"Radio Group - Required with help text icon",element:a.default.createElement(n.Fieldset,{id:"fieldset-with-help-text",label:"Form Element Label",isRequired:!0,hasTooltip:!0},a.default.createElement(m.Radio,{checked:!0,label:"Radio Label One"}),a.default.createElement(m.Radio,{label:"Radio Label Two"}))},{id:"inline-help",label:"Inline Help",element:a.default.createElement(n.FormElement,{labelContent:f,inputId:p,inlineMessage:"ex: (415)111-2222"},a.default.createElement(i.Input,{id:p}))},{id:"tooltip-help",label:"Tooltip Help",element:a.default.createElement("div",{style:{paddingTop:"3rem",position:"relative"}},a.default.createElement(n.FormElement,{labelContent:f,inputId:p,hasTooltip:!0,showTooltip:!0},a.default.createElement(i.Input,{id:p})))},{id:"required-tooltip-help",label:"Required - Tooltip Help",element:a.default.createElement("div",{style:{paddingTop:"3rem",position:"relative"}},a.default.createElement(n.FormElement,{labelContent:f,inputId:p,hasTooltip:!0,isRequired:!0},a.default.createElement(i.Input,{id:p,required:!0})))},{id:"compound-field",label:"Compound Form Layout",element:a.default.createElement(r.CompoundForm,null)},{id:"compound-field-required",label:"Required - Compound Form Layout",element:a.default.createElement(r.CompoundForm,null)},{id:"compound-field-required-tooltip-help",label:"Required with Tooltip Help - Compound Form Layout",element:a.default.createElement(r.CompoundForm,null)},{id:"stacked",label:"Stacked form layout - View Mode",element:a.default.createElement(s.default,{direction:"stacked",snapshot:u.ObjectFieldTypes,isViewMode:!0,hasInlineEdit:!0})},{id:"stacked-single-column",label:"Stacked form layout - 1 column - Read Only Mode",element:a.default.createElement(s.default,{direction:"stacked",snapshot:u.ObjectFieldTypesSingleColumn,isViewMode:!0})},{id:"horizontal-single-column",label:"Horizontal form layout - 1 column - Read Only Mode",element:a.default.createElement(s.default,{direction:"horizontal",snapshot:u.ObjectFieldTypesSingleColumn,isViewMode:!0})},{id:"edit-stacked",label:"Stacked form layout - Edit Mode",element:a.default.createElement(s.default,{direction:"stacked",snapshot:u.ObjectFieldTypes})},{id:"horizontal",label:"Horizontal form layout - View Mode",element:a.default.createElement(s.default,{direction:"horizontal",snapshot:u.ObjectFieldTypes,isViewMode:!0,hasInlineEdit:!0})},{id:"edit-horizontal",label:"Horizontal form layout - Edit Mode",element:a.default.createElement(s.default,{direction:"horizontal",snapshot:u.ObjectFieldTypes})}]}});