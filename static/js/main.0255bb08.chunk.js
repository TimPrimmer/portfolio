(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i.n(c),n=i(6),r=i.n(n),a=(i(5),i(2)),o=i(3),l=i.n(o),d=i.p+"static/media/background1.16ad37f1.jpg",j=i.p+"static/media/background2.f69799db.jpg",b=(i.p,i.p,i(0));var m=function(e){var t,i,c,s,n=e.categories,r=void 0===n?[]:n,a=e.setCurrentCategory;function o(){document.getElementById("mySidenav").style.width="0",document.getElementById("react-root").style.marginLeft="0",document.getElementById("dim-controller").classList.remove("dim"),document.body.style.backgroundColor="white"}return function(e){switch(e.name){default:t=!0;break;case"portfolio":i=!0;break;case"contact":c=!0;break;case"resume":s=!0}}(e.currentCategory),Object(b.jsxs)("header",{id:"header-ref",children:[Object(b.jsxs)("nav",{id:"dropdown",children:[Object(b.jsx)("div",{className:"dropbtn",onClick:function(){document.getElementById("mySidenav").style.width="250px",document.getElementById("react-root").style.marginLeft="250px",document.getElementById("dim-controller").classList.add("dim"),document.body.style.backgroundColor="rgba(0,0,0,0.4)"},children:Object(b.jsxs)("svg",{viewBox:"0 0 100 80",width:"54",height:"54",children:[Object(b.jsx)("rect",{width:"100",height:"20",rx:"10"}),Object(b.jsx)("rect",{y:"30",width:"100",height:"20",rx:"10"}),Object(b.jsx)("rect",{y:"60",width:"100",height:"20",rx:"10"})]})}),Object(b.jsxs)("ul",{className:"sidenav",id:"mySidenav",children:[Object(b.jsx)("a",{className:"closebtn",onClick:o,children:"\xd7"}),Object(b.jsx)("li",{children:Object(b.jsx)("h2",{children:Object(b.jsx)("a",{href:"#",id:"about-link",className:"".concat(t?"active-tab":"non-active-tab"),onClick:function(){a(r[0]),o()},children:"About"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("h2",{children:Object(b.jsx)("a",{href:"#",id:"portfolio-link",className:"".concat(i?"active-tab":"non-active-tab"),onClick:function(){a(r[1]),o()},children:"Portfolio"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("h2",{children:Object(b.jsx)("a",{href:"#",id:"contact-link",className:"".concat(c?"active-tab":"non-active-tab"),onClick:function(){a(r[2]),o()},children:"Contact"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("h2",{children:Object(b.jsx)("a",{href:"#",id:"resume-link",className:"".concat(s?"active-tab":"non-active-tab"),onClick:function(){a(r[3]),o()},children:"Resume"})})})]})]}),Object(b.jsx)("div",{id:"dim-controller",className:"seethrough"}),Object(b.jsx)("h1",{id:"header-name",children:Object(b.jsx)("a",{href:"./",children:"TPrimmer"})})]})},h=i.p+"static/media/github.2458173d.svg";var u=function(e){var t=e.details,i=t.title,c=t.link,s=t.github,n=t.image,r=t.description,a=!1;return""!=s&&(a=!0),Object(b.jsx)("div",{className:"project-box",children:Object(b.jsxs)("div",{className:"proj-details",children:[Object(b.jsx)("div",{className:"project-image-box",style:{backgroundImage:"url("+n+")"},children:Object(b.jsx)("a",{href:c,target:"_blank"})}),Object(b.jsxs)("div",{className:"project-title-box",children:[Object(b.jsx)("h3",{children:Object(b.jsx)("a",{href:c,target:"_blank",className:"project-title-text",children:i})}),a?Object(b.jsx)("a",{href:s,target:"_blank",className:"project-icon-link",children:Object(b.jsx)("img",{className:"icon project-icon",src:h,title:"Github Logo",alt:"Link to Project GitHub"})}):null]}),Object(b.jsx)("div",{className:"proj-info-box",children:Object(b.jsx)("p",{className:"project-text",children:r})})]})})};var x=function(e){var t=e.imgs,i=[{title:"Pet Plan-it",link:"https://enigmatic-temple-75821.herokuapp.com/",github:"https://github.com/dpbam/pet-social-network",image:t[0],description:"Final group project for the UT coding course. Pet themed social network using React, GraphQL, MongoDB, and JQuery"},{title:"Parktime 2.0",link:"https://parktime-2.herokuapp.com/",github:"https://github.com/TimPrimmer/parktime-app",image:t[1],description:"National park finder with social aspects using Handlebars, MySQL, and various APIs (National Park, Geoapify, OpenWeather)"},{title:"Budget Tracker",link:"https://boiling-springs-96272.herokuapp.com/",github:"https://github.com/TimPrimmer/budget-tracker",image:t[2],description:"Budget tracker PWA that allows for both online and offline usage using noSQL, Mongoose, Heroku, and Express"},{title:"Horde Sandbox",link:"https://mordhau.mod.io/hordesandbox",github:"",image:t[3],description:"Custom level created for the video game 'Mordhau'. Made using Unreal 4, 3ds Max, Photoshop"},{title:"Javascript Quiz",link:"https://timprimmer.github.io/web-quiz/",github:"https://github.com/TimPrimmer/web-quiz",image:t[4],description:"A web quiz based on Javascript. Includes a scoring system and tracks submitted highscores using Javascript, HTML, CSS"},{title:"Book Search",link:"https://timprimmer.github.io/run-buddy/",github:"https://github.com/TimPrimmer/run-buddy",image:t[5],description:"A book finding website where users can create accounts and save books. Created using React, GraphQL, MongoDB"}];return Object(b.jsx)("div",{id:"portfolio-section",children:Object(b.jsx)("div",{id:"project-holder",children:i.map((function(e,t){return Object(b.jsx)(u,{details:e},t)}))})})},p=i.p+"static/media/linkedin.e936db21.svg";var O=function(e){return Object(b.jsx)("footer",{children:Object(b.jsxs)("section",{id:"footer-info",children:[Object(b.jsx)("a",{href:"https://github.com/TimPrimmer",target:"_blank",children:Object(b.jsx)("img",{className:"icon",src:h,title:"Tim's GitHub",alt:"Link to Tim's GitHub"})}),Object(b.jsx)("a",{id:"email",href:"mailto:timprimmer@gmail.com",children:"timprimmer@gmail.com"}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/timprimmer/",target:"_blank",children:Object(b.jsx)("img",{className:"icon",src:p,title:"Tim's LinkedIn",alt:"Link to Tim's LinkedIn"})})]})})},g=i.p+"static/media/me.bba9026e.png";var f=function(e){return Object(b.jsxs)("div",{id:"about-section",children:[Object(b.jsx)("div",{id:"about-picture-frame",children:Object(b.jsx)("img",{id:"about-picture",src:g,alt:"Tim Primmer"})}),Object(b.jsx)("section",{id:"about-text-section",children:Object(b.jsxs)("p",{id:"about-text",children:["My name is ",Object(b.jsx)("span",{className:"bold-text",children:"Tim Primmer"}),", I'm a 25 year old geek living in Austin and a recent graduate from the ",Object(b.jsx)("span",{className:"bold-text",children:"UT Full-Stack"})," coding bootcamp.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"I\u2019m ",Object(b.jsx)("span",{className:"bold-text",children:"looking for a job"})," to harness my new ",Object(b.jsx)("span",{className:"bold-text",children:"front-end"})," and ",Object(b.jsx)("span",{className:"bold-text",children:"back-end"})," knowledge!",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"I\u2019ve always been ",Object(b.jsx)("span",{className:"bold-text",children:"passionate"})," about anything computer related, and have a lot of ",Object(b.jsx)("span",{className:"bold-text",children:"other skills"})," in the field.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Check out my ",Object(b.jsx)("span",{className:"bold-text",children:"resume"})," and some of my ",Object(b.jsx)("span",{className:"bold-text",children:"projects"}),", let me know what you think and don\u2019t hesitate to ",Object(b.jsx)("span",{className:"bold-text",children:"contact me!"})]})})]})};var k=function(e){return Object(b.jsx)("div",{id:"contact-section",children:Object(b.jsxs)("div",{id:"contact-box",children:[Object(b.jsx)("h2",{children:"Contact me"}),Object(b.jsxs)("form",{id:"contact-form",action:"mailto:timprimmer@gmail.com?subject=Reaching out to you via your portfolio site",method:"post",encType:"text/plain",children:[Object(b.jsxs)("div",{className:"form-block",children:[Object(b.jsx)("label",{htmlFor:"Name",className:"form-text",children:"Name"}),Object(b.jsx)("div",{className:"form-field",children:Object(b.jsx)("input",{type:"text",id:"Name",name:"Name",required:!0})})]}),Object(b.jsxs)("div",{className:"form-block",children:[Object(b.jsx)("label",{htmlFor:"Email",className:"form-text",children:"Email"}),Object(b.jsx)("div",{className:"form-field",children:Object(b.jsx)("input",{type:"email",id:"Email",name:"Email",required:!0})})]}),Object(b.jsxs)("div",{className:"form-block",children:[Object(b.jsx)("label",{htmlFor:"Message",className:"form-text",children:"Message"}),Object(b.jsx)("div",{className:"form-field",children:Object(b.jsx)("textarea",{id:"Message",name:"Message",rows:"6",maxLength:"3000",required:!0})})]}),Object(b.jsx)("div",{className:"form-block",children:Object(b.jsx)("button",{type:"submit",id:"contact-button",children:"Send Message"})})]})]})})},v=i.p+"static/media/TimPrimmer-Resume.e7c005ae.pdf";var y=function(e){return Object(b.jsxs)("div",{id:"resume-section",children:[Object(b.jsxs)("div",{id:"resume-qual",children:[Object(b.jsx)("h2",{children:"My Qualifications"}),Object(b.jsxs)("section",{id:"qual-info",children:[Object(b.jsxs)("div",{className:"qual-container",children:[Object(b.jsx)("h4",{children:"Front-End Proficiences"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"Html"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"CSS"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"JavaScript"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"jQuery"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"Responsive Design"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"React"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"Bootstrap"})})]})]}),Object(b.jsxs)("div",{className:"qual-container",children:[Object(b.jsx)("h4",{children:"Back-End Proficiences"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"APIs"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"Node"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"Express"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"MySQL, Sequelize"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"MongoDV, Mongoose"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"REST"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"GraphQL"})})]})]}),Object(b.jsxs)("div",{className:"qual-container",id:"other-quals",children:[Object(b.jsx)("h4",{children:"Other Proficiences"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"Adobe Premiere, Photoshop"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"Unity, Unreal 4"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"C++, C#, Python"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"3ds Max"})})]})]})]}),Object(b.jsx)("div",{id:"resume-link",children:Object(b.jsx)("a",{href:v,download:!0,children:Object(b.jsx)("h2",{children:" Download Resume "})})})]}),Object(b.jsxs)("div",{id:"resume-holder",children:[Object(b.jsx)("h2",{children:"My Resume"}),Object(b.jsx)("iframe",{id:"resume-iframe",src:"".concat(v,"#toolbar=0"),title:"My resume in pdf format",height:"650px",width:"100%"})]})]})};var N=function(e){var t=Object(c.useState)("preload.jpg"),i=Object(a.a)(t,2),s=i[0],n=i[1];return Object(c.useEffect)((function(){var t=new Image;t.src=e,t.onload=function(){return n(e)}}),[e]),Object(b.jsx)("div",{style:{backgroundImage:"url(".concat(s,")")}})},w=i.p+"static/media/parktime.8346a4fb.png",P=i.p+"static/media/petplanit.c32ace0d.png",C=i.p+"static/media/budget.c5926e0e.png",S=i.p+"static/media/webquiz.a08fc3fa.png",M=i.p+"static/media/mordhau.429c1854.png",T=i.p+"static/media/book.f52ebbd4.png";var I=function(){var e=[P,w,C,M,S,T],t=Object(c.useState)([{name:"about me",description:"Description about who I am and what I do"},{name:"portfolio",description:"Showcase of my work"},{name:"contact",description:"How to contact me"},{name:"resume",description:"Work experience and skillsets"}]),i=Object(a.a)(t,1)[0],s=Object(c.useState)(i[0]),n=Object(a.a)(s,2),r=n[0],o=n[1];return Object(c.useEffect)((function(){var e="Tim Primmer - ";e+=r.name[0].toUpperCase(),e+=r.name.substring(1),document.title=e,l()("body").css("background-image","url("+j+")")}),[r]),Object(b.jsxs)("div",{id:"react-root",children:[Object(b.jsx)(m,{categories:i,setCurrentCategory:o,currentCategory:r}),Object(b.jsx)("div",{id:"spacer"}),Object(b.jsx)(N,{src:d}),Object(b.jsx)("section",{id:"main-section",children:function(){switch(r.name){default:return Object(b.jsx)(f,{});case"portfolio":return Object(b.jsx)(x,{imgs:e});case"contact":return Object(b.jsx)(k,{});case"resume":return Object(b.jsx)(y,{})}}()}),Object(b.jsx)(O,{})]})},L=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,13)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;i(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),L()},5:function(e,t,i){}},[[12,1,2]]]);
//# sourceMappingURL=main.0255bb08.chunk.js.map