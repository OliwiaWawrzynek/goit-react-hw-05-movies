"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[45],{45:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var a=t(791),s=t(689),n=t(861),c=t(439),i=t(757),o=t.n(i),l=t(243),u=t(604),d=u[0].q1,h=u[0].FH;var f={header:"Cast_header__a+MSu",list:"Cast_list__pb9Bg",listItem:"Cast_listItem__EVYY0"},p=t(691),m=t(184);function v(){var e=function(e){var r=(0,a.useState)([]),t=(0,c.Z)(r,2),s=t[0],i=t[1],u=(0,a.useState)(!1),f=(0,c.Z)(u,2),p=f[0],m=f[1],v=(0,a.useState)(null),b=(0,c.Z)(v,2),_=b[0],g=b[1];return(0,a.useEffect)((function(){var r=function(){var r=(0,n.Z)(o().mark((function r(){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=3;break}return i([]),r.abrupt("return");case 3:return m(!0),r.prev=4,r.next=7,l.Z.get("".concat(h,"movie/").concat(e,"/credits?api_key=").concat(d,"&language=en-US"));case 7:200===(t=r.sent).status?i(t.data.cast):g("Error fetching movie actors."),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(4),g(r.t0.message);case 14:m(!1);case 15:case"end":return r.stop()}}),r,null,[[4,11]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),{actors:s,isLoading:p,error:_}}((0,s.UO)().movieId),r=e.actors,t=e.isLoading,i=e.error,u=new Set,v=r&&r.map((function(e){return u.has(e.id)&&(e.id=Math.floor(1e6*Math.random())),u.add(e.id),e}));return t?(0,m.jsx)("div",{className:f.container,children:(0,m.jsx)(p.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}):i?(0,m.jsxs)("div",{children:["Error: ",i]}):v&&0!==v.length?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h1",{className:f.header,children:"Actors"}),(0,m.jsx)("ul",{className:f.list,children:v.map((function(e){return(0,m.jsxs)("li",{className:f.listItem,children:[e.name," as ",e.character]},e.id)}))})]}):(0,m.jsx)("div",{children:"No actors found for this movie."})}}}]);
//# sourceMappingURL=45.57667b61.chunk.js.map