(this.webpackJsonpyhatzee=this.webpackJsonpyhatzee||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/1.b64f64ba.svg"},function(e,t,a){e.exports=a.p+"static/media/2.f2b87a0b.svg"},function(e,t,a){e.exports=a.p+"static/media/3.1e4cb8cb.svg"},function(e,t,a){e.exports=a.p+"static/media/4.847aadb1.svg"},function(e,t,a){e.exports=a.p+"static/media/5.74512224.svg"},function(e,t,a){e.exports=a.p+"static/media/6.d92b4406.svg"},function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),r=a.n(l),u=a(2),o=a(1),s=(a(18),function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),f=i[0],b=i[1];return c.a.createElement("div",{className:"Players"},c.a.createElement("p",null,"Who's playing Yhatzee?"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f.length&&(r([].concat(Object(u.a)(l),[f])),b(""))}},c.a.createElement("input",{name:"player",value:f,placeholder:"Player ".concat(l.length+1),onChange:function(e){b(e.target.value)}}),c.a.createElement("button",{type:"submit"},"Add Player")),c.a.createElement("ul",null,l.map((function(e){return c.a.createElement("li",{key:e},e)}))),c.a.createElement("button",{onClick:function(){e.startGame(l)}},"start game"))}),i=a(7),f=a.n(i),b=a(8),m=a.n(b),d=a(9),v=a.n(d),g=a(10),y=a.n(g),h=a(11),p=a.n(h),O=a(12),E=a.n(O),j=(a(19),[f.a,m.a,v.a,y.a,p.a,E.a]),k=function(e){var t=e.rolling,a=e.value,l=e.saved,r=e.onClick,u=Object(n.useState)(0),s=Object(o.a)(u,2),i=s[0],f=s[1];return Object(n.useEffect)((function(){setInterval((function(){f(Math.floor(6*Math.random()))}),30)}),[]),t&&!l?c.a.createElement("div",{className:"Die Die-Rolling"},c.a.createElement("img",{src:j[i],alt:(i+1).toString()})):c.a.createElement("div",{ref:e.refRef,className:"Die Die-".concat(a," ").concat(l?"saved":""),onClick:r},c.a.createElement("img",{src:j[a-1],alt:(a-1).toString()}))},S=(a(20),function(e){var t=e.dice,a=e.players,l=e.currentPlayerIndex,r=e.updateLog,s=e.rollIndex,i=e.turns,f=e.refs,b=Object(n.useState)(!0),m=Object(o.a)(b,2),d=m[0],v=m[1],g=t.map((function(e){return e.value}));Object(n.useEffect)((function(){r("".concat(a[l]," rolled ").concat(g.join(", "))),v(!0),setTimeout((function(){v(!1)}),500)}),[s,l,i]);return c.a.createElement("div",{className:"Dice"},t.map((function(a,n){return c.a.createElement(k,{refRef:f[n],key:n,value:a.value,saved:a.saved,rolling:d,onClick:function(){!function(a){var n=Object(u.a)(t);n[a].saved=!n[a].saved,e.setDice(n)}(n)}})})))}),N=a(3),x=(a(21),[{key:"ones",label:"Ones",assignable:!0,calculate:function(e){return e.filter((function(e){return 1===e.value})).length||0}},{key:"twos",label:"Twos",assignable:!0,calculate:function(e){return 2*e.filter((function(e){return 2===e.value})).length||0}},{key:"threes",label:"Threes",assignable:!0,calculate:function(e){return 3*e.filter((function(e){return 3===e.value})).length||0}},{key:"fours",label:"Fours",assignable:!0,calculate:function(e){return 4*e.filter((function(e){return 4===e.value})).length||0}},{key:"fives",label:"Fives",assignable:!0,calculate:function(e){return 5*e.filter((function(e){return 5===e.value})).length||0}},{key:"sixes",label:"Sixes",assignable:!0,calculate:function(e){return 6*e.filter((function(e){return 6===e.value})).length||0}},{key:"totalTop",label:"Total 1-6",assignable:!1},{key:"bonusTop",label:"Top Bonus",assignable:!1},{key:"threeOfKind",label:"3 of Kind",assignable:!0,calculate:function(e){var t=e.map((function(e){return e.value})).sort(),a={};return t.forEach((function(e){return a[e]=a[e]?a[e]+1:1})),Math.max.apply(Math,Object(u.a)(Object.keys(a).map((function(e){return a[e]}))))>=3?t.reduce((function(e,t){return e+t}),0):0}},{key:"fourOfKind",label:"4 of Kind",assignable:!0,calculate:function(e){var t=e.map((function(e){return e.value})).sort(),a={};return t.forEach((function(e){return a[e]=a[e]?a[e]+1:1})),Math.max.apply(Math,Object(u.a)(Object.keys(a).map((function(e){return a[e]}))))>=4?t.reduce((function(e,t){return e+t}),0):0}},{key:"fullHouse",label:"Full House",assignable:!0,calculate:function(e){var t=e.map((function(e){return e.value})).sort(),a=Object(u.a)(new Set(t)),n={};return t.forEach((function(e){return n[e]=n[e]?n[e]+1:1})),3===Math.max.apply(Math,Object(u.a)(Object.keys(n).map((function(e){return n[e]}))))&&2===a.length?25:0}},{key:"smallStraight",label:"Small Straight",assignable:!0,calculate:function(e){var t=e.map((function(e){return e.value})).sort(),a=Object(u.a)(new Set(t));return["1234","12345","12346","13456","2345","23456","3456"].indexOf(a.join(""))>-1?30:0}},{key:"largeStraight",label:"Large Straight",assignable:!0,calculate:function(e){var t=e.map((function(e){return e.value})).sort();return["12345","23456"].indexOf(t.join(""))>-1?40:0}},{key:"yhatzee",label:"YHATZEE",assignable:!0,calculate:function(e){var t=e.map((function(e){return e.value}));return 1===Object(u.a)(new Set(t)).length?50:0}},{key:"chance",label:"Chance",assignable:!0,calculate:function(e){return e.map((function(e){return e.value})).reduce((function(e,t){return e+t}),0)}},{key:"bonusYhatzee",label:"YHATZEE Bonus",assignable:!1},{key:"total",label:"Score",assignable:!1}]),P=function(e){var t=e.rollIndex,a=e.players,l=e.currentPlayerIndex,r=e.dice,s=e.turnPlayed,i=e.setTurnPlayed,f=e.scores,b=e.setScores,m=e.turns,d=e.gameOver,v=Object(n.useState)(null),g=Object(o.a)(v,2),y=g[0],h=g[1];Object(n.useEffect)((function(){if(!Object.keys(f).length){var e={};a.forEach((function(t){var a={};x.forEach((function(e){a[e.key]={actual:null,possible:null,assignable:e.assignable}})),e[t]=a})),b(e)}}),[a,f,b]),Object(n.useEffect)((function(){console.log("my dumb effect");var e=Object(N.a)({},f);if(Object.keys(e).length){var t=a[l];a.filter((function(e){return e!==t})).forEach((function(t){x.forEach((function(a){e[t][a.key].possible=null}))})),x.filter((function(e){return e.assignable})).forEach((function(a){e[t][a.key].possible=a.calculate(r)})),b(e),i(!1)}}),[r]);var p=function(t){e.updateLog(t)},O=function(){var e=Object(N.a)({},f),t=e[a[l]];t.totalTop.actual=t.ones.actual+t.twos.actual+t.threes.actual+t.fours.actual+t.fives.actual+t.sixes.actual,t.bonusTop.actual=t.totalTop.actual>=63?35:null,t.total.actual=t.totalTop.actual+t.threeOfKind.actual+t.fourOfKind.actual+t.fullHouse.actual+t.smallStraight.actual+t.largeStraight.actual+t.yhatzee.actual+t.chance.actual+t.bonusTop.actual+t.bonusYhatzee.actual,b(e),p("".concat(a[l]," has a total score of ").concat(t.total.actual))};return Object.keys(f).length?c.a.createElement("div",{className:"Scoreboard"},c.a.createElement("div",{className:"Scoreboard-Scores"},c.a.createElement("div",{className:"Scoreboard-Scores-RowLabels"},c.a.createElement("div",{className:"Scoreboard-Scores-RowLabels-Label"}),x.map((function(e,t){return c.a.createElement("div",{key:t,className:"Scoreboard-Scores-RowLabels-Label"},e.label)}))),a.map((function(e){return c.a.createElement("div",{key:e,className:"Scoreboard-Scores-Column ".concat(e===a[l]?"Scoreboard-Scores-Column--current":"")},c.a.createElement("div",{className:"Scoreboard-Scores-Column-Header"},e),x.map((function(n){return c.a.createElement("div",{key:n.key,player:e,className:"Scoreboard-Scores-Column-Score ".concat(n.assignable?"":"Scoreboard-Scores-Column-Score--unassignable"),onClick:function(){return function(e,n){if(0!==m&&-1!==t&&!s&&e.assignable&&n===a[l]&&null===f[n][e.key].actual){h({row:e,player:n});var c=Object(N.a)({},f),o=r.map((function(e){return e.value}));1===Object(u.a)(new Set(o)).length&&c[n].yhatzee.actual>0&&(c[n].bonusYhatzee.actual+=50),c[n][e.key].actual=c[n][e.key].possible,b(c),p("".concat(a[l]," scored ").concat(c[n][e.key].actual," points on ").concat(e.label)),i(!0),O()}}(n,e)}},null!==f[e][n.key].actual?f[e][n.key].actual:null)})))}))),c.a.createElement("div",{className:"Scoreboard-Buttons"},c.a.createElement("button",{onClick:function(){var e=Object(N.a)({},f),t=y.row;e[y.player][t.key].actual=null,p("".concat(a[l]," removed last score entry")),b(e),O(),i(!1)},disabled:!s||d},"undo last entry"))):null},w=a(4),T=a.n(w),G=(a(24),function(e){var t=function(){return{saved:!1,value:T.a.random(1,6)}},a=function(){return new Array(5).fill(null).map(t)},l=Object(n.useState)(!1),r=Object(o.a)(l,2),i=r[0],f=r[1],b=Object(n.useState)(!0),m=Object(o.a)(b,2),d=m[0],v=m[1],g=Object(n.useState)(!1),y=Object(o.a)(g,2),h=y[0],p=y[1],O=Object(n.useState)([]),E=Object(o.a)(O,2),j=E[0],k=E[1],N=Object(n.useState)(0),x=Object(o.a)(N,2),w=x[0],G=x[1],R=Object(n.useState)(0),C=Object(o.a)(R,2),D=C[0],I=C[1],L=Object(n.useState)(a()),M=Object(o.a)(L,2),z=M[0],K=M[1],A=Object(n.useState)(0),H=Object(o.a)(A,2),B=H[0],Y=H[1],F=Object(n.useState)([]),V=Object(o.a)(F,2),W=V[0],J=V[1],Z=Object(n.useState)({}),$=Object(o.a)(Z,2),q=$[0],Q=$[1],U=Object(n.useState)(null),X=Object(o.a)(U,2),_=X[0],ee=X[1],te=Object(n.useRef)(null),ae=Object(n.useRef)(null),ne=Object(n.useRef)(null),ce=Object(n.useRef)(null),le=Object(n.useRef)(null),re=Object(n.useRef)(null),ue=Object(n.useRef)(null),oe=Object(n.useRef)(null);Object(n.useEffect)((function(){j.length&&v(!0)}),[j]),Object(n.useEffect)((function(){d&&j.length&&(W.length||(ie("Keyboard commands enabled"),ie(" - Press R for 'roll again'"),ie(" - Press N for 'next turn'"),ie(" - Press 1 - 5 to toggle selected Dice"),ie("Game started with ".concat(j.length," players: ").concat(j.join(", "))),document.addEventListener("keydown",(function(e){"KeyN"===e.code?ae.current&&ae.current.click():"KeyR"===e.code?ne.current&&ne.current.click():"Digit1"===e.code?ce.current&&ce.current.click():"Digit2"===e.code?le.current&&le.current.click():"Digit3"===e.code?re.current&&re.current.click():"Digit4"===e.code?ue.current&&ue.current.click():"Digit5"===e.code&&oe.current&&oe.current.click()}))))}),[B,d,j,j.length,W]),Object(n.useEffect)((function(){te&&te.current&&(te.current.scrollTop=te.current.scrollHeight)}),[W]),Object(n.useEffect)((function(){if(j.length&&!h){for(var e=0,t=0,a=Object.keys(q);t<a.length;t++)for(var n=a[t],c=0,l=Object.keys(q[n]);c<l.length;c++){var r=l[c],u=q[n][r];e+=u.assignable&&null!==u.actual?1:0}if(e===13*j.length){ie("GAME OVER!");var o=[],s=!0,i=!1,f=void 0;try{for(var b,m=j[Symbol.iterator]();!(s=(b=m.next()).done);s=!0){var d=b.value;o.push({player:d,score:q[d].total.actual}),ie("".concat(d," has a total score of ").concat(q[d].total.actual))}}catch(v){i=!0,f=v}finally{try{s||null==m.return||m.return()}finally{if(i)throw f}}o.sort((function(e,t){return e.score>t.score?-1:1})),ie("".concat(o[0].player," wins!")),ee(o),p(!0)}}}),[q,h,j]),Object(n.useEffect)((function(){}),[]);var se=function(){G(B%j.length),Y(B+1),fe(!0)},ie=function(e){J((function(t){return[].concat(Object(u.a)(t),[e])}))},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e?a():Object(u.a)(z).map((function(e){return e.value=e.saved?e.value:T.a.random(1,6),e}));K(t),I(e?0:D+1)};return j.length?c.a.createElement("div",{className:"Game"},c.a.createElement("div",{className:"Game-Playfield"},0===B&&c.a.createElement("div",{className:"Game-Playfield-StartGame"},c.a.createElement("button",{onClick:se},"Player 1 go!")),h&&c.a.createElement("div",{className:"Game-Playfield-Fragment"},c.a.createElement("div",{className:"Game-Playfield-GameOver"},c.a.createElement("div",null,"GAME OVER!"),c.a.createElement("div",null,"".concat(_[0].player," wins!")),c.a.createElement("table",null,c.a.createElement("tbody",null,_.map((function(e,t){return c.a.createElement("tr",null,c.a.createElement("td",null,"#".concat(t+1)),c.a.createElement("td",null,e.player),c.a.createElement("td",null,"".concat(e.score," points")))})))))),!h&&D>=0&&B>0&&c.a.createElement("div",{className:"Game-Playfield-Fragment"},c.a.createElement("div",{className:"Game-Playfield-TurnIndicator ".concat(2===D?"last":"")},c.a.createElement("div",{className:"Game-Playfield-TurnIndicator-Player"},"".concat(j[w],"'s turn")),c.a.createElement("div",{className:"Game-Playfield-TurnIndicator-Roll"},"Roll # ".concat(D+1))),c.a.createElement("div",{className:"Game-Playfield-Dice"},c.a.createElement(S,{turns:B,players:j,currentPlayerIndex:w,rollIndex:D,setDice:K,dice:z,updateLog:ie,refs:[ce,le,re,ue,oe]})),c.a.createElement("div",{className:"Game-Playfield-Buttons"},c.a.createElement("button",{ref:ne,onClick:function(){return fe(!1)},disabled:D>1||i},"roll again!"),c.a.createElement("button",{ref:ae,onClick:se,disabled:!i||13*j.length===B},"next turn!"))),c.a.createElement("div",{className:"Game-Playfield-Log"},c.a.createElement("textarea",{ref:te,defaultValue:W.join("\n")}))),d&&c.a.createElement("div",{className:"Game-Scoreboard"},c.a.createElement(P,{gameOver:h,turns:B,scores:q||{},setScores:Q,turnPlayed:i,setTurnPlayed:f,setTurns:Y,rollIndex:D,players:j,currentPlayerIndex:w,dice:z,log:W,updateLog:ie}))):c.a.createElement(s,{startGame:function(e){k(e)}})}),R=(a(25),function(e){return c.a.createElement("div",{className:"App"},c.a.createElement(G,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.4747bdaf.chunk.js.map