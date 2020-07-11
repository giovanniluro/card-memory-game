(this["webpackJsonpcard-memory-game"]=this["webpackJsonpcard-memory-game"]||[]).push([[0],{16:function(e,n,t){e.exports=t(23)},23:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(11),c=t.n(i),o=t(5),l=t(3),s=t(4);function u(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  min-height: 100vh;\n  padding: 40px;\n  border-radius: 12px;\n  background: #403D39;\n"]);return u=function(){return e},e}var d=s.c.div(u());function m(){var e=Object(l.a)(["\n  height: 100%;\n  width: 100%;\n  background: #424B54;\n  border: 5px solid #818F9C;\n  outline: 5px solid #424B54;\n  backface-visibility: hidden;\n  position: absolute;\n"]);return m=function(){return e},e}function p(){var e=Object(l.a)(["\n  height:100%;\n  width: 100%;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: 5px solid #515C67;\n  background: white;\n  backface-visibility: hidden;\n  transform: rotateY(180deg);\n\n"]);return p=function(){return e},e}function f(){var e=Object(l.a)(["\n    display: none;\n  "]);return f=function(){return e},e}function b(){var e=Object(l.a)(["\n    animation: vanish .4s forwards; \n  "]);return b=function(){return e},e}function g(){var e=Object(l.a)(["\n    transform: rotateY(180deg);\n  "]);return g=function(){return e},e}function E(){var e=Object(l.a)(["\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform-style: preserve-3d;\n  transition: transform .5s;\n\n  ","\n\n  ","\n\n  ","\n\n  @keyframes vanish {\n    from {\n      transform: translateY(0);\n      transform: rotateY(180deg);\n      opacity: 1;\n    } to {\n      transform: rotateY(180deg);\n      transform: translateY(-10px);\n      opacity: 0;\n    }\n  }\n"]);return E=function(){return e},e}function v(){var e=Object(l.a)(["\n  position: relative;\n  height: 120px;\n  width: 80px;\n"]);return v=function(){return e},e}var O=s.c.div(v()),j=s.c.div(E(),(function(e){return"true"===e.rotate&&Object(s.b)(g())}),(function(e){return"true"===e.hidde&&Object(s.b)(b())}),(function(e){return"false"===e.display&&Object(s.b)(f())})),h=s.c.div(p()),x=s.c.div(m()),y=t(2),z=function(e){var n=e.content,t=e.id,i=e.cardOne,c=e.cardTwo,l=e.setCardOne,s=e.setCardTwo,u=Object(a.useState)("false"),d=Object(o.a)(u,2),m=d[0],p=d[1],f=Object(a.useState)("false"),b=Object(o.a)(f,2),g=b[0],E=b[1],v=Object(a.useState)("true"),z=Object(o.a)(v,2),w=z[0],k=z[1],C=Object(a.useCallback)((function(){return 0===Object.entries(i).length?(l({id:t,content:n,setRotate:p,setHidden:E}),void p("true")):0===Object.entries(c).length&&i&&i.id!==t?(s({id:t,content:n,setRotate:p,setHidden:E}),void p("true")):void 0}),[i,c,n,t,s,l]);return r.a.createElement(O,null,r.a.createElement(j,{onClick:C,display:w,rotate:m,hidde:g,onAnimationEnd:function(e){"vanish"===e.animationName&&k("false")}},r.a.createElement(h,null,0===n&&r.a.createElement(y.b,{size:20}),1===n&&r.a.createElement(y.a,{size:20}),2===n&&r.a.createElement(y.e,{size:20}),3===n&&r.a.createElement(y.c,{size:20}),4===n&&r.a.createElement(y.d,{size:20}),5===n&&r.a.createElement(y.f,{size:20}),6===n&&r.a.createElement(y.g,{size:20}),7===n&&r.a.createElement(y.h,{size:20}),8===n&&r.a.createElement(y.i,{size:20}),9===n&&r.a.createElement(y.j,{size:20}),10===n&&r.a.createElement(y.p,{size:20}),11===n&&r.a.createElement(y.k,{size:20}),12===n&&r.a.createElement(y.l,{size:20}),13===n&&r.a.createElement(y.m,{size:20}),14===n&&r.a.createElement(y.n,{size:20}),15===n&&r.a.createElement(y.t,{size:20}),16===n&&r.a.createElement(y.o,{size:20}),17===n&&r.a.createElement(y.q,{size:20}),18===n&&r.a.createElement(y.r,{size:20}),19===n&&r.a.createElement(y.s,{size:20})),r.a.createElement(x,null)))};function w(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 40px;\n"]);return w=function(){return e},e}function k(){var e=Object(l.a)(["\n  @media(min-width: 1200px) {\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 20px;\n  }\n\n  @media(max-width: 1199px) {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-gap: 20px;\n  }\n  \n  @media(max-width: 900px) {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 20px;\n  }\n\n  @media(max-width: 700px) {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 20px;\n  }\n\n  @media(max-width: 599px) {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 20px;\n  }  \n  \n"]);return k=function(){return e},e}function C(){var e=Object(l.a)(["\n  background: #c4cbca;\n  padding: 40px;\n  border-radius: 12px;\n "]);return C=function(){return e},e}var M=s.c.div(C()),S=s.c.div(k()),T=s.c.div(w()),H=t(8),R=function(e){var n=e.numberOfCards,t=e.setCurrentMatch,i=Object(a.useState)([]),c=Object(o.a)(i,2),l=c[0],s=c[1],u=Object(a.useState)({}),d=Object(o.a)(u,2),m=d[0],p=d[1],f=Object(a.useState)({}),b=Object(o.a)(f,2),g=b[0],E=b[1],v=Object(a.useState)(0),O=Object(o.a)(v,2),j=O[0],h=O[1],x=Object(a.useState)(0),y=Object(o.a)(x,2),w=y[0],k=y[1],C=Object(a.useState)(0),R=Object(o.a)(C,2),Y=R[0],N=R[1],B=Object(a.useState)("0:00"),F=Object(o.a)(B,2),q=F[0],J=F[1];return Object(a.useEffect)((function(){for(var e=[],t=0;t<n;t++)e.push({content:t,id:Object(H.uuid)()},{content:t,id:Object(H.uuid)()});s(e)}),[]),Object(a.useEffect)((function(){setTimeout((function(){var e=q.split(":"),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Number(r)+1,c=Number(a);60===i&&(i=0,c+=1),j!==n&&J("".concat(c,":").concat(("0"+i).slice(-2)))}),1e3)}),[q,j]),Object(a.useEffect)((function(){0!==Object.entries(m).length&&0!==Object.entries(g).length&&(m.content===g.content?setTimeout((function(){console.log("Cartas iguais...!"),m.setHidden&&g.setHidden&&(h((function(e){return e+1})),m.setHidden("true"),g.setHidden("true"),p({}),E({}))}),800):setTimeout((function(){m.setRotate&&g.setRotate&&(console.log("Cartas diferentes..."),N((function(e){return e+1})),m.setRotate("false"),g.setRotate("false"),p({}),E({}))}),800),k((function(e){return e+1})))}),[m,g]),Object(a.useEffect)((function(){j===n&&t({time:q,totalMoves:w,mistakenMoves:Y})}),[j]),r.a.createElement(M,null,r.a.createElement(T,null,r.a.createElement("p",null,q),r.a.createElement("p",null,"Jogadas: ",w)),r.a.createElement(S,null,l.map((function(e){return r.a.createElement(z,{key:e.id,content:e.content,id:e.id,cardOne:m,cardTwo:g,setCardOne:p,setCardTwo:E})}))))};function Y(){var e=Object(l.a)(["\n\n  display: flex;\n  flex-direction: column;\n  margin-left: 40px;\n\n  div {\n\n    background: #CCC5B9;\n    width: 100%;\n    padding: 10px 60px 10px 10px;\n    border-radius: 8px;\n    position: relative;\n    \n    h1 {\n      font-size: 22px;\n      color: #252422;\n    }\n\n    p{\n      color: #252422;\n\n      span {\n        font-weight: bold;\n      }\n    }\n\n    svg {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n    }\n\n    &+div {\n      margin-top: 30px;\n    }\n\n  }\n\n"]);return Y=function(){return e},e}var N=s.c.div(Y()),B=t(15),F=function(e){var n=e.currentMatch,t=e.bestMatch;return r.a.createElement(N,null,r.a.createElement("div",{className:"bestMatch"},r.a.createElement("h1",null,"Melhor Partida:"),r.a.createElement("p",null,"Tempo que demorou: ",r.a.createElement("span",null,t.time)),r.a.createElement("p",null,"Fez ",r.a.createElement("span",null,t.totalMoves)," jogadas"),r.a.createElement("p",null,"Errou de pares ",r.a.createElement("span",null,t.mistakenMoves)," vezes"),r.a.createElement(B.a,{size:22,color:"yellow"})),Object.entries(n).length>0&&r.a.createElement("div",{className:"currentMatch"},r.a.createElement("h1",null,"Dados da partida:"),r.a.createElement("p",null,"Tempo que demorou: ",r.a.createElement("span",null,n.time)),r.a.createElement("p",null,"Fez ",r.a.createElement("span",null,n.totalMoves)," jogadas"),r.a.createElement("p",null,"Errou de pares ",r.a.createElement("span",null,n.mistakenMoves)," vezes")))},q=function(){var e=Object(a.useState)({time:"1:55",totalMoves:42,mistakenMoves:23}),n=Object(o.a)(e,2),t=n[0],i=(n[1],Object(a.useState)({})),c=Object(o.a)(i,2),l=c[0],s=c[1];return r.a.createElement(d,null,r.a.createElement(R,{numberOfCards:2,setCurrentMatch:s}),r.a.createElement(F,{currentMatch:l,bestMatch:t}))};function J(){var e=Object(l.a)(["\n\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Oswald', sans-serif;\n  }\n\n  body {\n    margin: 40px;\n    background: #252422;\n  }\n\n"]);return J=function(){return e},e}var D=Object(s.a)(J());c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(q,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9aa3f82c.chunk.js.map