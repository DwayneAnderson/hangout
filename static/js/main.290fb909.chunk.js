(this.webpackJsonpyhatzee=this.webpackJsonpyhatzee||[]).push([[0],{10:function(e,a,n){e.exports=n(20)},15:function(e,a,n){},18:function(e,a,n){},19:function(e,a,n){},20:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(8),c=n.n(r),l=n(2),i=n(4),s=n(3),u=n(5),d=n(6),v=n(9),m=(n(15),function(e){function a(){var e,n;Object(l.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).render=function(){var e=n.props,a=e.rolling,t=e.value,r=e.saved,c=e.onClick;return a&&!r?o.a.createElement("div",{className:"Die Die-Rolling"}):o.a.createElement("div",{className:"Die Die-".concat(t," ").concat(r?"saved":""),onClick:c},t)},n}return Object(u.a)(a,e),a}(t.Component)),f=n(1),h=n.n(f),p=(n(18),function(e){function a(){var e,n;Object(l.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={rolling:!0,rollIndex:0,dice:[{saved:!1,value:h.a.random(1,6)},{saved:!1,value:h.a.random(1,6)},{saved:!1,value:h.a.random(1,6)},{saved:!1,value:h.a.random(1,6)},{saved:!1,value:h.a.random(1,6)}]},n.render=function(){var e=n.state,a=e.rolling,t=e.rollIndex,r=e.dice;return o.a.createElement("div",{className:"DiceSet"},o.a.createElement("div",{className:"DiceSet-Roll"},"Roll ",t+1),o.a.createElement("div",{className:"DiceSet-Dice"},r.map((function(e,t){return o.a.createElement(m,{key:t,value:e.value,saved:e.saved,rolling:a,onClick:function(){n.onDieClick(t)}})}))),o.a.createElement("div",{className:"DiceSet-Buttons"},o.a.createElement("button",{onClick:n.rollDice,disabled:a||t>1},"roll again!"),2==t&&o.a.createElement("button",{onClick:n.onNextTurn},"next turn!")))},n.onNextTurn=function(){n.setState({rolling:!0,rollIndex:-1,dice:[{saved:!1,value:h.a.random(1,6)},{saved:!1,value:h.a.random(1,6)},{saved:!1,value:h.a.random(1,6)},{saved:!1,value:h.a.random(1,6)},{saved:!1,value:h.a.random(1,6)}]},(function(){n.rollDice()}))},n.onDieClick=function(e){var a=Object(d.a)(n.state.dice);a[e].saved=!a[e].saved,n.setState({dice:a})},n.rollDice=function(){var e=n.state.rollIndex,a=Object(d.a)(n.state.dice).map((function(e){return e.value=e.saved?e.value:h.a.random(1,6),e}));n.setState({rolling:!0,rollIndex:e+1,dice:a},(function(){setTimeout((function(){n.setState({rolling:!1})}),500)}))},n}return Object(u.a)(a,e),Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({rolling:!1})}),2e3)}}]),a}(t.Component)),b=(n(19),function(e){function a(){var e,n;Object(l.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).render=function(){var e=new URLSearchParams(window.location.search).get("scoreboard");return o.a.createElement("div",{className:"App"},o.a.createElement(p,null),e&&o.a.createElement("iframe",{src:e}))},n}return Object(u.a)(a,e),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.290fb909.chunk.js.map