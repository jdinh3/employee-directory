(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),r=c(16),s=c.n(r),o=(c(22),c(3)),l=c(4),i=c(6),h=c(5),j=(c(23),c(24),c(0));var u=function(){return Object(j.jsx)("div",{className:"jumbotron header jumbotron-fluid",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(j.jsx)("p",{className:"lead",children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})})},p=function(e){Object(i.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={search:""},e.handleInputChange=function(t){var c=t.target.value;e.props.onSearchCallback(c),e.setState({search:c})},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"form-outline m-4",children:Object(j.jsx)("input",{value:this.state.search,onChange:this.handleInputChange,name:"employeeSearch",type:"text",id:"form1",className:"form-control",placeholder:"Search","aria-label":"Search"})})}}]),c}(a.Component),d=c(17),b=c.n(d),m={getEmployees:function(){return b.a.get("https://randomuser.me/api/?results=60&nat=us")}};var O=function(e){var t=e.employee;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:Object(j.jsx)("img",{src:t.picture.large,alt:"".concat(t.name.first," ").concat(t.name.last)})}),Object(j.jsx)("td",{children:"".concat(t.name.first," ").concat(t.name.last)}),Object(j.jsx)("td",{className:"text-justify",children:t.phone}),Object(j.jsx)("td",{children:Object(j.jsx)("a",{href:"mailto: Otto@gmail.com",children:t.email})}),Object(j.jsx)("td",{children:t.dob.date})]})},f=function(e){return Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Images"}),Object(j.jsx)("th",{scope:"col",children:"Name"}),Object(j.jsx)("th",{scope:"col",children:"Phone"}),Object(j.jsx)("th",{scope:"col",children:"Email"}),Object(j.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(j.jsx)("tbody",{children:e.employees&&e.employees.length&&e.employees.map((function(e,t){return Object(j.jsx)(O,{employee:e},"employee-".concat(t))}))})]})},y=function(e){Object(i.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={employees:[]},e.filteredEmployees=[],e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;m.getEmployees().then((function(t){console.log(t);var c=t.data.results.map((function(e){return e}));e.setState({employees:c})}))}},{key:"componentDidUpdate",value:function(){var e=this,t=this.state.employees.filter((function(t){return t.name.first.toLowerCase().includes(e.props.searchData.toLowerCase())}));this.filteredEmployees=t}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(f,{employees:this.props.searchData?this.filteredEmployees:this.state.employees}),Object(j.jsx)("p",{children:this.props.searchValue})]})}}]),c}(a.Component),x=function(e){Object(i.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={searchData:""},e.onSearchCallback=function(t){e.setState({searchData:t})},e}return Object(l.a)(c,[{key:"render",value:function(){return console.log(this.state),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{}),Object(j.jsx)(p,{onSearchCallback:this.onSearchCallback}),Object(j.jsx)(y,{searchData:this.state.searchData})]})}}]),c}(a.Component),v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};c(44);s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),v()}},[[45,1,2]]]);
//# sourceMappingURL=main.794b9627.chunk.js.map