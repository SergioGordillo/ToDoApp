(this.webpackJsonptodoappjs=this.webpackJsonptodoappjs||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(8),d=n.n(a),r=n(2),i=n(6),l=n(3),s=n(0),j=function(e){var t=e.handleAddToDo,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(r.a)(t,2),o=n[0],a=n[1];return[o,function(e){var t=e.target;a(Object(l.a)(Object(l.a)({},o),{},Object(i.a)({},t.name,t.value)))},function(){a(e)}]}({description:""}),o=Object(r.a)(n,3),a=o[0].description,d=o[1],j=o[2];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Add new to do"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(a.trim().length<=1)){var n={id:(new Date).getTime(),description:a,done:!1};t(n),j()}},children:[Object(s.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Write a new to do here",autoComplete:"off",value:a,onChange:d}),Object(s.jsx)("div",{className:"d-grid gap-2",children:Object(s.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-2",children:" Add new to do "})})]})]})},u=function(e){var t=e.todo,n=e.handleDelete,c=e.handleToggle,o=e.i;return Object(s.jsx)("div",{children:Object(s.jsxs)("li",{className:"list-group-item",children:[Object(s.jsxs)("p",{className:"".concat(t.done&&"complete"),onClick:function(){return c(t.id)},children:[" ",o+1,". ",t.description]}),Object(s.jsx)("button",{className:"btn btn-danger",onClick:function(){return n(t.id)},children:"Delete task"})]},t.id)})},b=function(e){var t=e.todos,n=e.handleToggle,c=e.handleDelete;return Object(s.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e,t){return Object(s.jsx)(u,{todo:e,handleDelete:c,handleToggle:n,i:t},e.id)}))})},h=n(9),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(h.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(l.a)(Object(l.a)({},e),{},{done:!e.done}):e}));default:return e}},O=(n(15),function(){return JSON.parse(localStorage.getItem("todos"))||[]}),f=function(){var e=Object(c.useReducer)(p,[],O),t=Object(r.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),console.log("Me renderizo");return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["ToDoApp (",n.length,")"]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-7",children:Object(s.jsx)(b,{todos:n,handleDelete:function(e){o({type:"delete",payload:e})},handleToggle:function(e){o({type:"toggle",payload:e})}})}),Object(s.jsx)("div",{className:"col-5",children:Object(s.jsx)(j,{handleAddToDo:function(e){o({type:"add",payload:e})}})})]})]})};d.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c947394f.chunk.js.map