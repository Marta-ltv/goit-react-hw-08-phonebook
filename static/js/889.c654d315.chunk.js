"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[889],{4889:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,a,o,i,c,s,l,d,u,p=t(2791),x=t(9439),h=t(168),f=t(8789),m=f.ZP.form(r||(r=(0,h.Z)(["\nmargin:7px;\nborder: 1px solid black;\nborder-radius: 8px;\nwidth:500px;\nbackground-color: #f1ecea;\n"]))),b=f.ZP.label(a||(a=(0,h.Z)(["\nmargin-left: 10px;\nfont-size: 20px;\nfont-weight: 600;\n"]))),g=f.ZP.input(o||(o=(0,h.Z)(["\ndisplay: flex;\npadding: 10px;\nalign-items: center;\nmargin-left: 10px;\nborder-radius: 8px;\n"]))),Z=f.ZP.button(i||(i=(0,h.Z)(["\nmargin:10px;\npadding:5px;\nborder-radius: 10px;\nborder:none;\nbackground-color: lightblue;\ncolor: white;\n&:hover,&:focus{\n    background-color: black;\n}\n"]))),v=t(9434),j=t(3634),k=function(n){return n.contacts},w=function(n){return n.filter.text},y=t(184);function P(){var n=(0,p.useState)(""),e=(0,x.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(""),o=(0,x.Z)(a,2),i=o[0],c=o[1],s=(0,v.I0)(),l=(0,v.v9)(k).contacts,d=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":c(a);break;default:return}},u=function(){r(""),c("")};return(0,y.jsxs)(m,{onSubmit:function(n){n.preventDefault();var e=!0;l.forEach((function(n){n.name===t&&(alert("".concat(t," is already exist.")),u(),e=!1)})),e&&(s((0,j.uK)({name:t,number:i})),u())},children:[(0,y.jsxs)(b,{htmlFor:"name",children:["Name",(0,y.jsx)(g,{value:t,onChange:d,type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)(b,{htmlFor:"tel",children:["Number",(0,y.jsx)(g,{value:i,onChange:d,name:"number",placeholder:"Number",type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,y.jsx)(Z,{type:"submit",children:"Add contact"})]})}var C,z,A=f.ZP.ul(c||(c=(0,h.Z)(["\nfont-size: 30px;\nfont-weight: 400;\n"]))),F=f.ZP.li(s||(s=(0,h.Z)(["\npadding: 5px;\nfont-size: 30px;\nfont-weight: 400;\ndisplay:flex;\nalign-items:center;\n\n"]))),N=(f.ZP.button(l||(l=(0,h.Z)(["\nalign-items:center;\nfont-size: 20px;\nfont-weight: 400;\nmargin-left:10px;\nborder-radius:10px;\n"]))),f.ZP.li(d||(d=(0,h.Z)(["\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),f.ZP.button(u||(u=(0,h.Z)(["\n  height: 26px;\n  padding: 5px 10px;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 5px;\n  border: none;\n  background-color: #eee;\n  color: #ff6c00;\n  cursor: pointer;\n  transition: background-color 300ms linear, color 300ms linear;\n  &:hover {\n    background-color: #ff6c00;\n    color: #eee;\n  }\n"]))));function L(){var n=(0,v.I0)(),e=(0,v.v9)(k),t=e.contacts,r=e.isLoading,a=e.error,o=(0,v.v9)(w);(0,p.useEffect)((function(){n((0,j.yF)())}),[n]);var i=function(){var n=o.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,y.jsxs)(A,{children:[r&&(0,y.jsx)("b",{children:"Loading contacts..."}),a&&(0,y.jsx)("b",{children:a}),t.length>0&&i.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,y.jsxs)(F,{children:[(0,y.jsxs)("p",{children:[r,": ",a]}),(0,y.jsx)(N,{type:"button",onClick:function(){return n((0,j.GK)(t))},children:"Delete"})]},t)}))]})}var S=f.ZP.label(C||(C=(0,h.Z)(["\npadding: 20px;\nfont-weight: 600;\n"]))),_=f.ZP.input(z||(z=(0,h.Z)(["\npadding: 10px;\nborder-radius: 8px;\nmargin-left: 10px;\n"]))),I=t(4808);function T(){var n=(0,v.v9)(w),e=(0,v.I0)();return(0,y.jsxs)(S,{children:["Find contacts by Name",(0,y.jsx)(_,{type:"text",value:n,placeholder:"Search contact",onChange:function(n){e((0,I.zT)(n.currentTarget.value))}})]})}function q(){var n=(0,v.v9)(k).contacts;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h1",{children:"Phonebook"}),(0,y.jsx)(P,{}),(0,y.jsx)("h2",{children:"Contacts"}),n.length>0&&(0,y.jsx)(T,{}),(0,y.jsx)(L,{})]})}}}]);
//# sourceMappingURL=889.c654d315.chunk.js.map