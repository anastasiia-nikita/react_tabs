(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n.n(c),s=(n(10),n(5)),a=n(1),d=n(4),l=n.n(d),o=n(0),r=function(e){var t=e.tabs,n=e.selectedTabId,c=e.onTabSelected,i=t.find((function(e){return e.id===n}));return Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("div",{className:"tabs is-centered is-toggle is-toggle-rounded is-large",children:Object(o.jsx)("ul",{children:t.map((function(e){return Object(o.jsx)("li",{className:l()({"is-active":e.id===n}),children:Object(o.jsx)("a",{href:"#t",onClick:function(){e.id!==n&&c(e.id)},children:e.title})},e.id)}))})}),Object(o.jsx)("div",{className:"message is-link",children:Object(o.jsx)("p",{className:"message-body subtitle is-3","data-cy":"tab-content",children:null===i||void 0===i?void 0:i.content})})]})},b=(n(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),u=function(){var e=Object(a.useState)("tab-1"),t=Object(s.a)(e,2),n=t[0],c=t[1],i=b.find((function(e){return e.id===n}));return Object(o.jsxs)("div",{className:"App has-text-centered column is-half is-offset-one-quarter",children:[Object(o.jsx)("h1",{className:"title is-2",children:"Selected tab is ".concat(null===i||void 0===i?void 0:i.title)}),Object(o.jsx)(r,{tabs:b,selectedTabId:n,onTabSelected:function(e){return c(e)}})]})};i.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.902eb529.chunk.js.map