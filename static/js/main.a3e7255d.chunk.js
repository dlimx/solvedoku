(this.webpackJsonpsolvedoku=this.webpackJsonpsolvedoku||[]).push([[0],{27:function(e,n,t){"use strict";t.r(n);var r,o,i=t(3),a=t(0),c=t.n(a),l=t(12),d=t.n(l),s=t(13),u=t(2),h=t(10),f=t(4),b=(t(23),function(e){var n=e.row,t=e.col;return"".concat(n,",").concat(t)}),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;return new Array(e+1).fill(null)},p=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,t=0,r=1;r<e.length;r+=1)e[r]&&(t+=1);return t!==n},x=t(1),j=u.default.div(r||(r=Object(i.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]))),v=u.default.button(o||(o=Object(i.a)(["\n  color: ",";\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  height: 60px;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n  display: block;\n  background-color: ",";\n  cursor: pointer;\n"])),(function(e){return e.solid?"white":"palevioletred"}),(function(e){return e.solid?"palevioletred":"white"}));var m,O,w=function(e){var n=e.game,t=(e.setGame,e.setErrors),r=(e.initialGame,e.setInitialGame),o=Object(a.useState)(""),i=Object(f.a)(o,2),c=i[0],l=i[1];return Object(x.jsxs)(j,{children:[Object(x.jsx)(v,{onClick:function(e){e.preventDefault(),t({}),r([[0,0,0,4,0,0,0,0,6],[3,0,0,0,6,0,5,4,0],[0,0,0,0,0,3,0,2,7],[8,0,3,0,0,2,1,0,0],[0,7,0,3,0,1,0,9,0],[0,0,6,7,0,0,2,0,5],[5,2,0,8,0,0,0,0,0],[0,3,4,0,1,0,0,0,2],[9,0,0,0,0,7,0,0,0]])},children:"Restart"}),Object(x.jsx)(v,{onClick:function(e){e.preventDefault()},children:"Find Solution"}),Object(x.jsx)(v,{solid:!0,onClick:function(e){e.preventDefault();var r=function(e){for(var n,t,r=e.length,o={},i=!0,a=!0,c=function(n,r){var c=r.row,l=r.col;(t=e[c][l])?n[t]?(a=!1,o[n[t]]=!0,o[b({row:c,col:l})]=!0):n[t]=b({row:c,col:l}):i=!1},l=0;l<e.length;l+=1){n=g();for(var d=0;d<e[0].length;d+=1)c(n,{row:l,col:d});p(n,r)||(i=!1)}for(var s=0;s<e[0].length;s+=1){n=g();for(var u=0;u<e.length;u+=1)c(n,{row:u,col:s});p(n,r)||(i=!1)}for(var h=r/3,f=0;f<3;f+=1)for(var x=0;x<3;x+=1){n=g();for(var j=0;j<h;j+=1)for(var v=0;v<h;v+=1)c(n,{row:f*h+j,col:x*h+v});p(n,r)||(i=!1)}return{valid:a,errors:o,complete:i}}(n);t(r.errors),r.valid?r.complete?l("Congratulations, you've won!"):l("You're doing great, keep going!"):l("There was an error in your solution, try again!")},children:"Validate"}),Object(x.jsx)("p",{children:c})]})},k=u.default.div(m||(m=Object(i.a)(["\n  height: 76px;\n  width: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid black;\n  font-size: 24px;\n  cursor: default;\n  color: palevioletred;\n  border-left: ",";\n  border-top: ",";\n  background-color: #d9d9d9;\n  font-weight: bold;\n"])),(function(e){return e.highlightLeft,"80px"}),(function(e){return e.highlightLeft?"4px solid black":"2px solid black"}),(function(e){return e.highlightTop?"4px solid black":"2px solid black"})),y=u.default.input(O||(O=Object(i.a)(["\n  height: 74px;\n  width: ",";\n  border: 2px solid black;\n  text-align: center;\n  font-size: 24px;\n  border-left: ",";\n  border-top: ",";\n  background-color: ",";\n  font-weight: bold;\n"])),(function(e){return e.highlightLeft,"74px"}),(function(e){return e.highlightLeft?"4px solid black":"2px solid black"}),(function(e){return e.highlightTop?"4px solid black":"2px solid black"}),(function(e){return e.hasError?"#ff000022":"white"}));var E,S,C=function(e){var n=e.value,t=e.editable,r=e.onChange,o=e.highlightLeft,i=e.highlightTop,a=e.hasError;if(t){return Object(x.jsx)(y,{highlightLeft:o,highlightTop:i,value:n,onChange:function(e){var n=0,t=e.target.value[e.target.value.length-1];if(t)try{n=parseInt(t,10),Number.isNaN(n)&&(n=0)}catch(o){n=0}r(n)},hasError:a})}return Object(x.jsx)(k,{highlightLeft:o,highlightTop:i,hasError:a,children:n})},L=u.default.div(E||(E=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 2;\n  max-width: 724px;\n  margin-right: 40px;\n  border: 2px solid black;\n"]))),T=u.default.div(S||(S=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n"])));var G,N=function(e){var n=e.game,t=e.immutable,r=e.setPosition,o=e.errors;return Object(x.jsx)(L,{children:n.map((function(e,n){return Object(x.jsx)(T,{children:e.map((function(e,i){return Object(x.jsx)(C,{editable:!t["".concat(n,",").concat(i)],value:e,onChange:function(e){return r(e,{row:n,col:i})},highlightLeft:i%3===0&&0!==i,highlightTop:n%3===0&&0!==n,hasError:!!o[b({row:n,col:i})]},b({row:n,col:i}))}))},n)}))})},z=u.default.div(G||(G=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  @media (max-width: 767px) {\n    flex-direction: column;\n  }\n"])));var D,I=function(){var e=Object(a.useState)([[0,0,0,4,0,0,0,0,6],[3,0,0,0,6,0,5,4,0],[0,0,0,0,0,3,0,2,7],[8,0,3,0,0,2,1,0,0],[0,7,0,3,0,1,0,9,0],[0,0,6,7,0,0,2,0,5],[5,2,0,8,0,0,0,0,0],[0,3,4,0,1,0,0,0,2],[9,0,0,0,0,7,0,0,0]]),n=Object(f.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(t),i=Object(f.a)(o,2),c=i[0],l=i[1],d=Object(a.useState)({}),s=Object(f.a)(d,2),u=s[0],b=s[1],g=Object(a.useState)({}),p=Object(f.a)(g,2),j=p[0],v=p[1];Object(a.useEffect)((function(){l(t);var e={};t.forEach((function(n,t){n.forEach((function(n,r){0!==n&&(e["".concat(t,",").concat(r)]=!0)}))})),b(e)}),[t]);var m=Object(a.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.row,r=n.col;if(!u["".concat(t,",").concat(r)]){var o=Object(h.a)(c);o[t]=Object(h.a)(o[t]),o[t][r]=e,l(o)}}),[c,u]);return Object(x.jsxs)(z,{children:[Object(x.jsx)(N,{game:c,immutable:u,setPosition:m,errors:j}),Object(x.jsx)(w,{setGame:l,setInitialGame:r,game:c,initialGame:t,setErrors:v})]})},A=u.default.div(D||(D=Object(i.a)(["\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-top: 40px;\n  @media (min-width: 768px) {\n    width: 750px;\n  }\n  @media (min-width: 992px) {\n    width: 970px;\n  }\n  @media (min-width: 1200px) {\n    width: 1170px;\n  }\n"])));var M,F=function(){return Object(x.jsxs)(A,{children:[Object(x.jsx)("header",{className:"App-header",children:Object(x.jsx)("h1",{children:"Solve-doku"})}),Object(x.jsx)(I,{})]})},P=Object(u.createGlobalStyle)(M||(M=Object(i.a)(["\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n  }\n"])));d.a.render(Object(x.jsxs)(c.a.StrictMode,{children:[Object(x.jsx)(s.Normalize,{}),Object(x.jsx)(P,{}),Object(x.jsx)(u.ThemeProvider,{theme:{primary:"#275E68",secondary:"#AA3E98",background:"#fff",backgroundDark:"#282c34",grey:"#d9d9d9"},children:Object(x.jsx)(F,{})})]}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.a3e7255d.chunk.js.map