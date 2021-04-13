(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{187:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(11),a=c.n(n),r=c(10),i=c(37),o=c(7),l=c(2);function j(){return Object(l.jsxs)("div",{className:"logo-display",children:[Object(l.jsx)("img",{className:"logo-img",alt:"logo",src:"./logo.png"}),Object(l.jsx)("h1",{children:"WatchIt"})]})}var u=c(67),d=c.n(u);function b(e){var t=Object(s.useState)(),c=Object(r.a)(t,2),n=(c[0],c[1]),a=Object(s.useState)(),o=Object(r.a)(a,2),j=o[0],u=o[1],b=Object(s.useState)(),O=Object(r.a)(b,2),m=O[0],h=O[1],x=Object(s.useState)(!1),p=Object(r.a)(x,2),g=p[0],v=p[1],f=Object(s.useState)(),N=Object(r.a)(f,2),y=N[0],k=N[1],S=Object(s.useRef)(),C=Object(s.useRef)(),E=Object(s.useRef)();return Object(l.jsx)("div",{className:"searchlayer",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{ref:S,id:"username",placeholder:"Enter your name:",onChange:function(e){u(S.current.value)},required:!0}),Object(l.jsx)("input",{ref:C,id:"roomId",placeholder:"Enter the room ID:",onChange:function(){h(C.current.value)},required:!0}),Object(l.jsx)("input",{ref:E,id:"videoLink",placeholder:"Enter the youtube video URL:",onChange:function(){n(E.current.value),k(d()(E.current.value)),console.log(d()(E.current.value))},required:!0}),Object(l.jsx)(i.b,{style:{pointerEvents:g?"none":"initial"},onClick:(e.getTheVideolink(y),function(){""===E.current.value||""===S.current.value||""===C.current.value?(alert("Please enter the details."),v(!0)):v(!1)}),to:"/play?videoId=".concat(y,"&name=").concat(j,"&roomId=").concat(m),children:"Play"})]})})}var O=function(e){return Object(l.jsxs)("main",{children:[Object(l.jsxs)("section",{className:"homeLayout",children:[Object(l.jsx)(j,{}),Object(l.jsx)(b,{id:e.id,getTheVideolink:e.getTheVideolink})]}),Object(l.jsxs)("div",{className:"grid-layout",children:[Object(l.jsx)("div",{className:"box-design",children:Object(l.jsx)("img",{src:"./pattern.png",alt:"backgroundimage"})}),Object(l.jsx)("div",{className:"headphones-design",children:Object(l.jsx)("img",{src:"./headphonestra.png",alt:"backgroundimage"})})]})]})},m=c(105),h=c(95),x=c(104),p=c.n(x),g=c(103),v=c.n(g),f=(c(220),c(219),c(218),c(216),c(217),c(215),c(98)),N=c.n(f),y=c(99),k=c.n(y),S=c(100),C=c(102),E=c.n(C),I=c(101),V=c.n(I);function T(e){return Object(l.jsx)("header",{className:"chat-infobar",children:Object(l.jsx)("p",{children:"Room Code: ".concat(e.roomName)})})}function w(e){var t=!1,c=e.message,s=c.text,n=c.user,a=e.name.trim().toLowerCase();return console.log(s),console.log(n),a===n&&(t=!0),t?Object(l.jsxs)("div",{className:"displayChatUser",children:[Object(l.jsx)("p",{className:"name",children:n}),Object(l.jsx)("div",{className:"chat-display",children:Object(l.jsx)("p",{children:s})})]}):Object(l.jsxs)("div",{className:"displayChatAno",children:[Object(l.jsx)("div",{className:"chat-display-ano",children:Object(l.jsx)("p",{children:s})}),Object(l.jsx)("p",{className:"name",children:n})]})}function M(e){return Object(l.jsx)("section",{className:"chat-layout",children:Object(l.jsxs)("div",{className:"chat-area",children:[Object(l.jsx)(T,{roomName:e.roomName}),Object(l.jsx)(V.a,{className:"messages",children:e.messages.map((function(t,c){return Object(l.jsx)("div",{children:Object(l.jsx)(w,{message:t,name:e.currentUser})},c)}))}),Object(l.jsxs)("div",{className:"chat-input",children:[Object(l.jsx)("input",{className:"chathere",placeholder:"Type your message here...",value:e.message,onChange:function(t){var c=t.target.value;return e.setMessage(c)},onKeyPress:function(t){return"Enter"===t.key?e.sendMessage(t,e.message):null}}),Object(l.jsx)("button",{className:"chatSubmitBtn",onClick:function(t){return e.sendMessage(t)},type:"submit",children:Object(l.jsx)(E.a,{})})]})]})})}var P,R=function(e){return Object(l.jsxs)("footer",{className:"currently-online",children:[Object(l.jsx)("p",{children:"Currently online: "}),Object(l.jsx)("div",{className:"usersList",children:e.users.map((function(e){return Object(l.jsxs)("div",{className:"username-card",children:[Object(l.jsx)("span",{className:"online"}),Object(l.jsx)("p",{children:e.name})]},e.id)}))})]})};var D=function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(),i=Object(r.a)(a,2),j=i[0],u=i[1],d=Object(s.useState)(),b=Object(r.a)(d,2),O=b[0],x=b[1],g=Object(s.useState)(),f=Object(r.a)(g,2),y=f[0],C=f[1],E=Object(s.useState)(),I=Object(r.a)(E,2),V=I[0],T=I[1],w=Object(s.useState)([]),D=Object(r.a)(w,2),L=D[0],U=D[1],q=Object(s.useState)(),B=Object(r.a)(q,2),A=B[0],J=B[1],K=Object(s.useState)([]),W=Object(r.a)(K,2),X=W[0],z=W[1],F=Object(o.f)();return Object(s.useEffect)((function(){var e=N.a.parse(F.search),t=e.name,c=e.roomId,s=e.videoId;x(s),C(t),T(c),(P=Object(S.io)("https://youtubeapi-watchit.herokuapp.com")).emit("join",t,c,s),console.log(P)}),[]),Object(s.useEffect)((function(){P.on("message",(function(e){U((function(t){return[].concat(Object(m.a)(t),[e])})),console.log(e.user),console.log(y),e.user!==y&&void 0!==y&&document.querySelector("#audio").play()})),P.on("roomData",(function(e){var t=e.users;z(t)}))}),[]),Object(s.useEffect)((function(){return function(){P.emit("deleteUser")}}),[]),Object(l.jsxs)("main",{className:"App",children:[Object(l.jsx)("audio",{id:"audio",children:Object(l.jsx)("source",{src:"./message.mp3"})}),Object(l.jsxs)("section",{className:"iframe-embedded",children:[Object(l.jsx)(h.a,{videoId:O,opts:{height:"390",width:"640",playerVars:{autoplay:1,origin:"https://watch-it-youtube.netlify.app"}},onReady:function(e){n(e.target),P.emit("event","startVideo"),P.on("event",(function(t){"startVideo"===t&&e.target.pauseVideo()})),setInterval((function(){var t=e.target.getCurrentTime()/e.target.getDuration()*100;u(t.toString())}),200)}}),Object(l.jsxs)("div",{className:"controlPanels",children:[Object(l.jsxs)("div",{className:"videoPPC",children:[Object(l.jsx)("button",{className:"pauseBtn",onClick:function(){P.emit("event","pause"),P.on("event",(function(e){"pause"===e&&c.pauseVideo()}))},children:Object(l.jsx)(v.a,{})}),Object(l.jsx)("button",{className:"playBtn",onClick:function(){console.log(P),P.emit("event","play"),P.on("event",(function(e){"play"===e&&c.playVideo()}))},children:Object(l.jsx)(p.a,{})})]}),Object(l.jsxs)("div",{className:"timeline",children:[Object(l.jsx)("div",{draggable:!0,className:"pointer",style:{left:"".concat(j,"%")}}),Object(l.jsx)("div",{onClick:function(e){var t=k()(".timeline").offset(),s=(e.pageX-t.left)/500*c.getDuration();P.emit("seektoEvent",s),P.on("seektoEvent",(function(e){c.seekTo(e)}))},className:"timeline-bar"})]})]})]}),Object(l.jsx)(M,{messages:L,message:A,roomName:V,currentUser:y,sendMessage:function(e){e.preventDefault(),J(""),A&&P.emit("sendMessage",A)},setMessage:J}),Object(l.jsx)(R,{users:X})]})};var L=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(l.jsx)(i.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(O,{getTheVideolink:function(e){n(e),console.log(c)},id:c})}),Object(l.jsx)(o.a,{exact:!0,path:"/play",children:Object(l.jsx)(D,{videoId:c})})]})})};a.a.render(Object(l.jsx)(L,{}),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.53241b29.chunk.js.map