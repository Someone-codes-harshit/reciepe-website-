(this["webpackJsonprecipe-website"]=this["webpackJsonprecipe-website"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(6),r=c.n(i),s=(c(12),c(4)),o=c.n(s),u=c(7),p=c(2),b=(c.p,c(14),c(5)),l=c.n(b),j=c(0),d=function(e){var t=e.title,c=e.calories,n=e.image,a=e.ingredients;return Object(j.jsxs)("div",{className:l.a.recipe,children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)("ol",{children:a.map((function(e){return Object(j.jsx)("li",{children:e.text})}))}),Object(j.jsx)("p",{children:c}),Object(j.jsx)("img",{className:l.a.image,src:n,alt:""})]})};var h=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),r=Object(p.a)(i,2),s=r[0],b=r[1],l=Object(n.useState)("chicken"),h=Object(p.a)(l,2),f=h[0],m=h[1];Object(n.useEffect)((function(){O()}),[f]);var O=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("a276c4de","&app_key=").concat("db91460df83bd656bf4144103172b55a"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(s),b("")},className:"search-form",children:[Object(j.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){b(e.target.value),console.log(s)}}),Object(j.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(j.jsx)("div",{className:"recipe",children:c.map((function(e){return Object(j.jsx)(d,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),f()},5:function(e,t,c){e.exports={recipe:"recipe_recipe__BdaUe",image:"recipe_image__BtdIE"}}},[[16,1,2]]]);
//# sourceMappingURL=main.6d24ec53.chunk.js.map