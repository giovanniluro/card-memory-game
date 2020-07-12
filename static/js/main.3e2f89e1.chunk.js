(this["webpackJsonpcard-memory-game"]=this["webpackJsonpcard-memory-game"]||[]).push([[0],{17:function(e,n,t){e.exports=t(24)},24:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(11),i=t.n(c),l=t(3),o=t(4),s=t(5);function u(){var e=Object(o.a)(["\n  display: flex;\n  background: #CCC5B9;\n  justify-content: space-between;\n  padding: 10px 20px;\n  margin-bottom: 10px;\n\n  h1 {\n    font-size: 24px;\n  }\n\n  @media(max-width: 500px){\n    justify-content: center;\n    span {\n      display: none;\n    }\n  }\n"]);return u=function(){return e},e}function d(){var e=Object(o.a)(["\n\n  \n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    margin-top: 40px;\n  }\n\n  button {\n    margin-top: 40px;\n    cursor: pointer;\n    font-size: 22px;\n    padding: 10px 20px;\n    min-width: 150px;\n\n    &:hover {\n      opacity: 0.5s;\n    }\n\n  }\n"]);return d=function(){return e},e}function m(){var e=Object(o.a)(["\n    animation: fade 1s forwards;\n    overflow:hidden;\n  "]);return m=function(){return e},e}function f(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 40px;\n  \n  ","\n\n  @media(max-width: 730px) {\n    padding: 10px;\n    flex-direction: column-reverse;\n  }\n\n  @keyframes fade {\n    from {\n      opacity: 0;\n      transform: translatey(100vh);\n    }\n    to {\n      opacity: 1;\n      transform: translatey(0);\n    }\n  }\n  \n"]);return f=function(){return e},e}var p=s.c.div(f(),(function(e){return e.fade&&Object(s.b)(m())})),b=s.c.div(d()),E=s.c.header(u());function g(){var e=Object(o.a)(["\n  height: 100%;\n  width: 100%;\n  background: #424B54;\n  border: 5px solid #818F9C;\n  outline: 5px solid #424B54;\n  backface-visibility: hidden;\n  position: absolute;\n"]);return g=function(){return e},e}function j(){var e=Object(o.a)(["\n  height:100%;\n  width: 100%;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: 5px solid #515C67;\n  background: white;\n  backface-visibility: hidden;\n  transform: rotateY(180deg);\n\n"]);return j=function(){return e},e}function v(){var e=Object(o.a)(["\n    display: none;\n  "]);return v=function(){return e},e}function O(){var e=Object(o.a)(["\n    animation: vanish .4s forwards; \n  "]);return O=function(){return e},e}function x(){var e=Object(o.a)(["\n    transform: rotateY(180deg);\n  "]);return x=function(){return e},e}function h(){var e=Object(o.a)(["\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  transform-style: preserve-3d;\n  transition: transform .5s;\n\n  ","\n\n  ","\n\n  ","\n\n  @keyframes vanish {\n    from {\n      transform: translateY(0);\n      transform: rotateY(180deg);\n      opacity: 1;\n    } to {\n      transform: rotateY(180deg);\n      transform: translateY(-20px);\n      opacity: 0;\n    }\n  }\n"]);return h=function(){return e},e}function y(){var e=Object(o.a)(["\n  position: relative;\n  height: 120px;\n  width: 80px;\n"]);return y=function(){return e},e}var z=s.c.div(y()),w=s.c.div(h(),(function(e){return"true"===e.rotate&&Object(s.b)(x())}),(function(e){return"true"===e.hidde&&Object(s.b)(O())}),(function(e){return"false"===e.display&&Object(s.b)(v())})),k=s.c.div(j()),C=s.c.div(g()),M=t(2),S=function(e){var n=e.content,t=e.id,c=e.cardOne,i=e.cardTwo,o=e.setCardOne,s=e.setCardTwo,u=Object(a.useState)("false"),d=Object(l.a)(u,2),m=d[0],f=d[1],p=Object(a.useState)("false"),b=Object(l.a)(p,2),E=b[0],g=b[1],j=Object(a.useState)("true"),v=Object(l.a)(j,2),O=v[0],x=v[1],h=Object(a.useCallback)((function(){return 0===Object.entries(c).length?(o({id:t,content:n,setRotate:f,setHidden:g}),void f("true")):0===Object.entries(i).length&&c&&c.id!==t?(s({id:t,content:n,setRotate:f,setHidden:g}),void f("true")):void 0}),[c,i,n,t,s,o]);return r.a.createElement(z,null,r.a.createElement(w,{onClick:h,display:O,rotate:m,hidde:E,onAnimationEnd:function(e){"vanish"===e.animationName&&x("false")}},r.a.createElement(k,null,0===n&&r.a.createElement(M.b,{size:34}),1===n&&r.a.createElement(M.a,{size:34}),2===n&&r.a.createElement(M.e,{size:34}),3===n&&r.a.createElement(M.c,{size:34}),4===n&&r.a.createElement(M.d,{size:34}),5===n&&r.a.createElement(M.f,{size:34}),6===n&&r.a.createElement(M.g,{size:34}),7===n&&r.a.createElement(M.h,{size:34}),8===n&&r.a.createElement(M.i,{size:34}),9===n&&r.a.createElement(M.j,{size:34}),10===n&&r.a.createElement(M.u,{size:34}),11===n&&r.a.createElement(M.k,{size:34}),12===n&&r.a.createElement(M.l,{size:34}),13===n&&r.a.createElement(M.m,{size:34}),14===n&&r.a.createElement(M.q,{size:34}),15===n&&r.a.createElement(M.B,{size:34}),16===n&&r.a.createElement(M.r,{size:34}),17===n&&r.a.createElement(M.w,{size:34}),18===n&&r.a.createElement(M.x,{size:34}),19===n&&r.a.createElement(M.z,{size:34}),34===n&&r.a.createElement(M.G,{size:34}),21===n&&r.a.createElement(M.F,{size:34}),22===n&&r.a.createElement(M.E,{size:34}),23===n&&r.a.createElement(M.D,{size:34}),24===n&&r.a.createElement(M.C,{size:34}),25===n&&r.a.createElement(M.A,{size:34}),26===n&&r.a.createElement(M.y,{size:34}),27===n&&r.a.createElement(M.v,{size:34}),28===n&&r.a.createElement(M.t,{size:34}),29===n&&r.a.createElement(M.s,{size:34}),30===n&&r.a.createElement(M.p,{size:34}),31===n&&r.a.createElement(M.o,{size:34}),32===n&&r.a.createElement(M.n,{size:34})),r.a.createElement(C,null)))},F=function(e){var n=e.status,t=e.setTime,c=Object(a.useState)("0:00"),i=Object(l.a)(c,2),o=i[0],s=i[1];return Object(a.useEffect)((function(){"start"===n&&s("0:00");var e=setInterval((function(){s((function(e){var n=e.split(":"),t=Object(l.a)(n,2),a=t[0],r=t[1],c=Number(a),i=Number(r)+1;return 60===i&&(c+=1,i=0),c.toString()+":"+"0".concat(i).slice(-2)}))}),1e3);return"stop"===n&&"0:00"!==o&&(t(o),clearInterval(e)),function(){return clearInterval(e)}}),[n,o,t]),r.a.createElement("p",null,o)};function T(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 40px;\n"]);return T=function(){return e},e}function H(){var e=Object(o.a)(["\n\n  @media(min-width: 1300px) {\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 30px;\n  }\n\n  @media(max-width: 1299px) {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-gap: 30px;\n  }\n  \n  @media(max-width: 1050px) {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 30px;\n  }\n\n  @media(max-width: 950px) {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 20px;\n  }\n\n  @media(max-width: 850px) {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 20px;\n  }  \n\n  @media(max-width: 480px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 20px;\n  }\n\n  > div{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]);return H=function(){return e},e}function R(){var e=Object(o.a)(["\n  background: #c4cbca;\n  padding: 40px;\n  border-radius: 12px;\n  flex: 1;\n\n  @media(max-width: 830px) {\n    padding: 10px;\n  }\n\n "]);return R=function(){return e},e}var N=s.c.div(R()),B=s.c.div(H()),D=s.c.div(T()),G=t(8),Y=function(e){var n=e.numberOfCards,t=e.setCurrentMatch,c=e.restart,i=Object(a.useState)([]),o=Object(l.a)(i,2),s=o[0],u=o[1],d=Object(a.useState)({}),m=Object(l.a)(d,2),f=m[0],p=m[1],b=Object(a.useState)({}),E=Object(l.a)(b,2),g=E[0],j=E[1],v=Object(a.useState)(0),O=Object(l.a)(v,2),x=O[0],h=O[1],y=Object(a.useState)(0),z=Object(l.a)(y,2),w=z[0],k=z[1],C=Object(a.useState)(0),M=Object(l.a)(C,2),T=M[0],H=M[1],R=Object(a.useState)("0:00"),Y=Object(l.a)(R,2),I=Y[0],q=Y[1],A=Object(a.useState)("start"),J=Object(l.a)(A,2),L=J[0],P=J[1];return Object(a.useEffect)((function(){for(var e=[],a=0;a<n;a++)e.push({content:a,id:Object(G.uuid)()},{content:a,id:Object(G.uuid)()});e.sort((function(){return Math.random()-.5})),u(e),p({}),j({}),h(0),k(0),H(0),P("start"),t({})}),[c,n,t]),Object(a.useEffect)((function(){0!==Object.entries(f).length&&0!==Object.entries(g).length&&(f.content===g.content?setTimeout((function(){f.setHidden&&g.setHidden&&(h((function(e){return e+1})),f.setHidden("true"),g.setHidden("true"),p({}),j({}))}),800):setTimeout((function(){f.setRotate&&g.setRotate&&(H((function(e){return e+1})),f.setRotate("false"),g.setRotate("false"),p({}),j({}))}),800),k((function(e){return e+1})))}),[f,g]),Object(a.useEffect)((function(){x===n&&P((function(e){return"stop"}))}),[x,n]),Object(a.useEffect)((function(){if("0:00"!==I){var e=I.split(":"),a=Object(l.a)(e,2),r=a[0],c=a[1],i=50*n-3*T-2*Number(r+c)-w;i<0&&(i=50);var o={score:i,time:I.toString(),totalMoves:w,mistakenMoves:T};t(o)}}),[I,w,n,T,t]),Object(a.useEffect)((function(){"start"===L&&P("running")}),[L]),r.a.createElement(N,null,r.a.createElement(D,null,0!==n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{setTime:q,status:L}),r.a.createElement("p",null,"Jogadas: ",w))),r.a.createElement(B,null,s.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(S,{content:e.content,id:e.id,cardOne:f,cardTwo:g,setCardOne:p,setCardTwo:j}))}))))};function I(){var e=Object(o.a)(['\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 40px;\n  flex: 1;\n\n  div {\n\n    background: #CCC5B9;\n    width: 100%;\n    padding: 10px 60px 10px 10px;\n    border-radius: 8px;\n    position: relative;\n    \n    h1 {\n      font-size: 22px;\n      color: #252422;\n    }\n\n    p{\n      color: #252422;\n\n      span {\n        font-weight: bold;\n      }\n    }\n\n    svg {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n    }\n\n    &+div {\n      margin-top: 30px;\n    }\n\n  }\n\n  div[class="buttons"] {\n    background: transparent;\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n\n    button {\n      margin-top: 30px;\n      font-size: 20px;\n      padding: 10px 20px;\n      min-width: 180px;\n    }\n  }\n\n  @media(max-width: 730px) {\n    margin: 0;\n    margin-bottom: 40px;\n\n    div[class="buttons"] { \n      flex-direction: row;\n      justify-content: space-evenly;\n    }\n  }\n']);return I=function(){return e},e}var q=s.c.div(I()),A=t(15),J=t(16),L=function(e){var n=e.setFade,t=e.currentMatch,a=e.bestMatch,c=e.restart,i=e.restartGame,l=e.newRecord,o=e.setDifficulty;return r.a.createElement(q,null,r.a.createElement("div",{className:"bestMatch"},r.a.createElement("h1",null,"Melhor Partida:"),r.a.createElement("p",null,"Fez ",r.a.createElement("span",null,a.score)," pontos!"),r.a.createElement("p",null,"Tempo que demorou: ",r.a.createElement("span",null,a.time)),r.a.createElement("p",null,"Fez ",r.a.createElement("span",null,a.totalMoves)," jogadas"),r.a.createElement("p",null,"Errou de pares ",r.a.createElement("span",null,a.mistakenMoves)," vezes"),r.a.createElement(A.a,{size:22,color:"yellow"})),Object.entries(t).length>0&&r.a.createElement("div",{className:"currentMatch"},r.a.createElement("h1",null,"Dados da partida:"),r.a.createElement("p",null,"Fez ",r.a.createElement("span",null,t.score)," pontos!"),r.a.createElement("p",null,"Tempo que demorou: ",r.a.createElement("span",null,t.time)),r.a.createElement("p",null,"Fez ",r.a.createElement("span",null,t.totalMoves)," jogadas"),r.a.createElement("p",null,"Errou de pares ",r.a.createElement("span",null,t.mistakenMoves)," vezes"),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Novo Recorde!")," ",r.a.createElement(J.a,{size:22,color:"yellow"}))),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return i(!c)}},"Recome\xe7ar"),r.a.createElement("button",{onClick:function(){n(!0),o("select")}}," Mudar dificuldade ")))},P=function(){var e=Object(a.useState)({score:73,time:"1:55",totalMoves:42,mistakenMoves:23}),n=Object(l.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)({}),o=Object(l.a)(i,2),s=o[0],u=o[1],d=Object(a.useState)(!1),m=Object(l.a)(d,2),f=m[0],g=m[1],j=Object(a.useState)(!1),v=Object(l.a)(j,2),O=v[0],x=v[1],h=Object(a.useState)("select"),y=Object(l.a)(h,2),z=y[0],w=y[1],k=Object(a.useState)(0),C=Object(l.a)(k,2),M=C[0],S=C[1],F=Object(a.useState)(!1),T=Object(l.a)(F,2),H=T[0],R=T[1],N=Object(a.useCallback)((function(e){w(e),R(!0),"Casual"===e?S(8):"Easy"===e?S(16):"Medium"===e?S(24):"Hard"===e&&S(32),g((function(e){return!e}))}),[]);return Object(a.useEffect)((function(){"select"===z&&S(0)}),[z]),Object(a.useEffect)((function(){Object.entries(s).length>0?s.score>t.score&&(console.log("rc"),c(s),console.log("tesouro"),x(!0)):x(!1)}),[s,t.score]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null,r.a.createElement("h1",null,"CMG - Card Memory Game"),r.a.createElement("span",null,r.a.createElement("h1",null,"Giovanni F. Luro"))),r.a.createElement(p,{fade:H,onAnimationEnd:function(){return R(!1)}},0!==M&&r.a.createElement(Y,{numberOfCards:M,setCurrentMatch:u,restart:f}),"select"!==z&&r.a.createElement(L,{setFade:R,setDifficulty:w,currentMatch:s,bestMatch:t,restart:f,restartGame:g,newRecord:O}),"select"===z&&r.a.createElement(b,null,r.a.createElement("h1",null,"Escolha uma dificuldade"),r.a.createElement("button",{onClick:function(){return N("Casual")}},"Casual"),r.a.createElement("button",{onClick:function(){return N("Easy")}},"F\xe1cil"),r.a.createElement("button",{onClick:function(){return N("Medium")}},"M\xe9dio"),r.a.createElement("button",{onClick:function(){return N("Hard")}},"Dif\xedcil"))))};function K(){var e=Object(o.a)(["\n\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Oswald', sans-serif;\n  }\n\n  h1, p {\n    color: #040F0F;\n  }\n  \n  body {\n    background: #403D39;\n\n    /* width */\n    ::-webkit-scrollbar {\n      width: 8px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n      background: #f1f1f1;\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n      background: #888;\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n      background: #555;\n    }\n  }\n\n"]);return K=function(){return e},e}var Q=Object(s.a)(K());i.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement(P,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3e2f89e1.chunk.js.map