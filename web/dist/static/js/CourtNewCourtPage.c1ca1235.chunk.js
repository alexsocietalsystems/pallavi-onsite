/*! For license information please see CourtNewCourtPage.c1ca1235.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[370],{76135:function(e,r,t){var a=t(27378),n=t(74857);r.Z=function(e){var r,t;return a.createElement("div",{className:"rw-form-wrapper"},a.createElement(n.Form,{onSubmit:function(r){var t;e.onSave(r,null==e||null===(t=e.court)||void 0===t?void 0:t.id)},error:e.error},a.createElement(n.FormError,{error:e.error,wrapperClassName:"rw-form-error-wrapper",titleClassName:"rw-form-error-title",listClassName:"rw-form-error-list"}),a.createElement(n.Label,{name:"street_address",className:"rw-label",errorClassName:"rw-label rw-label-error"},"Street address"),a.createElement(n.TextField,{name:"street_address",defaultValue:null===(r=e.court)||void 0===r?void 0:r.street_address,className:"rw-input",errorClassName:"rw-input rw-input-error",validation:{required:!0}}),a.createElement(n.FieldError,{name:"street_address",className:"rw-field-error"}),a.createElement(n.Label,{name:"court_name",className:"rw-label",errorClassName:"rw-label rw-label-error"},"Court name"),a.createElement(n.TextField,{name:"court_name",defaultValue:null===(t=e.court)||void 0===t?void 0:t.court_name,className:"rw-input",errorClassName:"rw-input rw-input-error",validation:{required:!0}}),a.createElement(n.FieldError,{name:"court_name",className:"rw-field-error"}),a.createElement("div",{className:"rw-button-group"},a.createElement(n.Submit,{disabled:e.loading,className:"rw-button rw-button-blue"},"Save"))))}},29440:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});var a,n=t(27378),l=(t(95988),t(94621)),o=t(98889),u=t(31786),i=t(81006),s=t(76135);function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}var m,d,f=(0,l.ZP)(a||(m=["\n  mutation CreateCourtMutation($input: CreateCourtInput!) {\n    createCourt(input: $input) {\n      id\n    }\n  }\n"],d||(d=m.slice(0)),a=Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(d)}})))),w=function(){var e,r,t=(0,u.useMutation)(f,{onCompleted:function(){i.toast.success("Court created"),(0,o.navigate)(o.routes.courts())},onError:function(e){i.toast.error(e.message)}}),a=(r=2,function(e){if(Array.isArray(e))return e}(e=t)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,n,l,o,u=[],i=!0,s=!1;try{if(l=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;i=!1}else for(;!(i=(a=l.call(t)).done)&&(u.push(a.value),u.length!==r);i=!0);}catch(e){s=!0,n=e}finally{try{if(!i&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(s)throw n}}return u}}(e,r)||function(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=a[0],m=a[1],d=m.loading,w=m.error;return n.createElement("div",{className:"rw-segment"},n.createElement("header",{className:"rw-segment-header"},n.createElement("h2",{className:"rw-heading rw-heading-secondary"},"New Court")),n.createElement("div",{className:"rw-segment-main"},n.createElement(s.Z,{onSave:function(e){l({variables:{input:e}})},loading:d,error:w})))},b=function(){return n.createElement(w,null)}}}]);