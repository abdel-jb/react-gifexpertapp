(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(7),i=n.n(c),u=n(2),s=n(9),o=n(0),j=function(t){var e=t.setCategories,n=a.a.useState(""),r=Object(u.a)(n,2),c=r[0],i=r[1];return Object(o.jsx)("form",{action:"",onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return t.find((function(t){return t===c}))?t:[c].concat(Object(s.a)(t))})),i(""))},children:Object(o.jsx)("input",{type:"text",value:c,onChange:function(t){var e=t.target.value;i(e)}})})},d=n(10),l=function(t){t.id;var e=t.title,n=t.url;return Object(o.jsxs)("li",{className:"card animate__animated animate__bounce",children:[Object(o.jsx)("img",{src:n,alt:e}),Object(o.jsx)("p",{children:e})]})},p=n(6),f=n.n(p),b=n(8),h=function(){var t=Object(b.a)(f.a.mark((function t(e){var n,r,a,c,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=9TCRr4GQuLT9fYANVZVM80mWzJODHpVS&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,c=a.data,i=c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e=t.category,n=function(t){var e=a.a.useState({data:[],loading:!0}),n=Object(u.a)(e,2),r=n[0],c=n[1];return a.a.useEffect((function(){h(t).then((function(t){c({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:e}),c&&Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)("ul",{className:"card-grid",children:r.map((function(t){return Object(o.jsx)(l,Object(d.a)({},t),t.id)}))})]})},O=function(){var t=a.a.useState(["One punch"]),e=Object(u.a)(t,2),n=e[0],r=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(j,{setCategories:r}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(t){return Object(o.jsx)(m,{category:t},t)}))})]})};n(17),n(18);i.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.e3124a34.chunk.js.map