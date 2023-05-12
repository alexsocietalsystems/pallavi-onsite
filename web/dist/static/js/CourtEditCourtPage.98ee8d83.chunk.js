/*! For license information please see CourtEditCourtPage.98ee8d83.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[607],{76135:function(e,r,t){var n=t(27378),a=t(74857);r.Z=function(e){var r,t;return n.createElement("div",{className:"rw-form-wrapper"},n.createElement(a.Form,{onSubmit:function(r){var t;e.onSave(r,null==e||null===(t=e.court)||void 0===t?void 0:t.id)},error:e.error},n.createElement(a.FormError,{error:e.error,wrapperClassName:"rw-form-error-wrapper",titleClassName:"rw-form-error-title",listClassName:"rw-form-error-list"}),n.createElement(a.Label,{name:"street_address",className:"rw-label",errorClassName:"rw-label rw-label-error"},"Street address"),n.createElement(a.TextField,{name:"street_address",defaultValue:null===(r=e.court)||void 0===r?void 0:r.street_address,className:"rw-input",errorClassName:"rw-input rw-input-error",validation:{required:!0}}),n.createElement(a.FieldError,{name:"street_address",className:"rw-field-error"}),n.createElement(a.Label,{name:"court_name",className:"rw-label",errorClassName:"rw-label rw-label-error"},"Court name"),n.createElement(a.TextField,{name:"court_name",defaultValue:null===(t=e.court)||void 0===t?void 0:t.court_name,className:"rw-input",errorClassName:"rw-input rw-input-error",validation:{required:!0}}),n.createElement(a.FieldError,{name:"court_name",className:"rw-field-error"}),n.createElement("div",{className:"rw-button-group"},n.createElement(a.Submit,{disabled:e.loading,className:"rw-button rw-button-blue"},"Save"))))}},86717:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var n,a,l=t(27378),o=(t(95988),t(31786)),i=t(94621),u=t(98889),s=t(81006),c=t(76135);function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function m(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var f=(0,i.ZP)(n||(n=m(["\n  query EditCourtById($id: Int!) {\n    court: court(id: $id) {\n      id\n      street_address\n      court_name\n      createdAt\n    }\n  }\n"]))),w=(0,i.ZP)(a||(a=m(["\n  mutation UpdateCourtMutation($id: Int!, $input: UpdateCourtInput!) {\n    updateCourt(id: $id, input: $input) {\n      id\n      street_address\n      court_name\n      createdAt\n    }\n  }\n"]))),v=(0,o.createCell)({QUERY:f,Loading:function(){return l.createElement("div",null,"Loading...")},Failure:function(e){var r=e.error;return l.createElement("div",{className:"rw-cell-error"},null==r?void 0:r.message)},Success:function(e){var r,t,n=e.court,a=(0,o.useMutation)(w,{onCompleted:function(){s.toast.success("Court updated"),(0,u.navigate)(u.routes.courts())},onError:function(e){s.toast.error(e.message)}}),i=(t=2,function(e){if(Array.isArray(e))return e}(r=a)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,l,o,i=[],u=!0,s=!1;try{if(l=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;u=!1}else for(;!(u=(n=l.call(t)).done)&&(i.push(n.value),i.length!==r);u=!0);}catch(e){s=!0,a=e}finally{try{if(!u&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(s)throw a}}return i}}(r,t)||function(e,r){if(e){if("string"==typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=i[0],f=i[1],v=f.loading,p=f.error;return l.createElement("div",{className:"rw-segment"},l.createElement("header",{className:"rw-segment-header"},l.createElement("h2",{className:"rw-heading rw-heading-secondary"},"Edit Court ",null==n?void 0:n.id)),l.createElement("div",{className:"rw-segment-main"},l.createElement(c.Z,{court:n,onSave:function(e,r){m({variables:{id:r,input:e}})},error:p,loading:v})))},displayName:"EditCourtCell"}),p=function(e){var r=e.id;return l.createElement(v,{id:r})}}}]);