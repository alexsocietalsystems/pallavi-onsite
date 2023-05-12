/*! For license information please see MessageMessagesPage.4a14d032.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[762],{26947:function(e,t,n){n.d(t,{$9:function(){return a},$G:function(){return l}}),n(76721),n(96085);var r=n(27378),l=(n(55102),function(e){var t,n=null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:"";return n.length>150&&(n=n.substring(0,150)+"..."),n}),a=function(e){var t="";return e&&(t=r.createElement("time",{dateTime:e,title:e},new Date(e).toUTCString())),t}},49638:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r,l=n(27378),a=n(31786),u=n(94621),i=n(98889),s=(n(95988),n(76721),n(96085),n(81006)),o=n(26947);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m,d,f,b=(0,u.ZP)(r||(m=["\n  mutation DeleteMessageMutation($id: Int!) {\n    deleteMessage(id: $id) {\n      id\n    }\n  }\n"],d||(d=m.slice(0)),r=Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(d)}})))),g=function(e){var t,n,r=e.messages,u=(t=(0,a.useMutation)(b,{onCompleted:function(){s.toast.success("Message deleted")},onError:function(e){s.toast.error(e.message)},refetchQueries:[{query:E}],awaitRefetchQueries:!0}),n=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,u,i=[],s=!0,o=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);s=!0);}catch(e){o=!0,l=e}finally{try{if(!s&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(o)throw l}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return l.createElement("div",{className:"rw-segment rw-table-wrapper-responsive"},l.createElement("table",{className:"rw-table"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Id"),l.createElement("th",null,"Message template"),l.createElement("th",null,"Time unit"),l.createElement("th",null,"Count before"),l.createElement("th",null,"Created at"),l.createElement("th",null," "))),l.createElement("tbody",null,r.map((function(e){return l.createElement("tr",{key:e.id},l.createElement("td",null,(0,o.$G)(e.id)),l.createElement("td",null,(0,o.$G)(e.messageTemplate)),l.createElement("td",null,(0,o.$G)(e.timeUnit)),l.createElement("td",null,(0,o.$G)(e.countBefore)),l.createElement("td",null,(0,o.$9)(e.createdAt)),l.createElement("td",null,l.createElement("nav",{className:"rw-table-actions"},l.createElement(i.Link,{to:i.routes.message({id:e.id}),title:"Show message "+e.id+" detail",className:"rw-button rw-button-small"},"Show"),l.createElement(i.Link,{to:i.routes.editMessage({id:e.id}),title:"Edit message "+e.id,className:"rw-button rw-button-small rw-button-blue"},"Edit"),l.createElement("button",{type:"button",title:"Delete message "+e.id,className:"rw-button rw-button-small rw-button-red",onClick:function(){return t=e.id,void(confirm("Are you sure you want to delete message "+t+"?")&&u({variables:{id:t}}));var t}},"Delete"))))})))))},E=(0,u.ZP)(f||(f=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query FindMessages {\n    messages {\n      id\n      messageTemplate\n      timeUnit\n      countBefore\n      createdAt\n    }\n  }\n"]))),w=(0,a.createCell)({QUERY:E,Loading:function(){return l.createElement("div",null,"Loading...")},Empty:function(){return l.createElement("div",{className:"rw-text-center"},"No messages yet. ",l.createElement(i.Link,{to:i.routes.newMessage(),className:"rw-link"},"Create one?"))},Failure:function(e){var t=e.error;return l.createElement("div",{className:"rw-cell-error"},null==t?void 0:t.message)},Success:function(e){var t=e.messages;return l.createElement(g,{messages:t})},displayName:"MessagesCell"}),v=function(){return l.createElement(w,null)}}}]);