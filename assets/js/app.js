!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=document.querySelector(".game__fields"),s=document.querySelector(".res"),r=(document.querySelector(".player"),document.querySelector(".new-game")),c=document.querySelectorAll(".game__field"),i=!1,o=0;function l(e){e.innerHTML=window.screen.width<461?'<svg class="cross">\n\t\t\t\t<line class="first"  x1="12" y1="12" x2="97" y2="97" stroke="#EF8240" stroke-width="8" stroke-linecap="round" />\n\t\t\t\t<line class="second"  x1="97" y1="12" x2="12" y2="97" stroke="#EF8240" stroke-width="8" stroke-linecap="round" />\n\t\t\t</svg>':window.screen.width<601?'<svg class="cross">\n\t\t\t\t<line class="first" x1="25" y1="25" x2="110" y2="110" stroke="#EF8240" stroke-width="10" stroke-linecap="round" />\n\t\t\t\t<line class="second" x1="110" y1="25" x2="25" y2="110" stroke="#EF8240" stroke-width="10" stroke-linecap="round" />\n\t\t\t</svg>':window.screen.width<650?'<svg class="cross">\n\t\t\t\t<line class="first" x1="42.5" y1="42.5" x2="127.5" y2="127.5" stroke="#EF8240" stroke-width="10" stroke-linecap="round" />\n\t\t\t\t<line class="second" x1="127.5" y1="42.5" x2="42.5" y2="127.5" stroke="#EF8240" stroke-width="10" stroke-linecap="round" />\n\t\t\t</svg>':'<svg class="cross">\n\t\t\t\t<line class="first" x1="50" y1="50" x2="135" y2="135" stroke="#EF8240" stroke-width="10" stroke-linecap="round" />\n\t\t\t\t<line class="second" x1="135" y1="50" x2="50" y2="135" stroke="#EF8240" stroke-width="10" stroke-linecap="round" />\n\t\t\t</svg>',e.classList.add("x"),o++}function a(e){e.innerHTML=window.screen.width<461?'<svg class="circle">\n    <circle class="three" r="40" cx="55" cy="55" stroke="#5AA1EF" stroke-width="8" fill="none" stroke-linecap="round" />\n  </svg> ':window.screen.width<601?'<svg class="circle">\n    <circle class="three" r="45" cx="70" cy="70" stroke="#5AA1EF" stroke-width="10" fill="none" stroke-linecap="round" />\n  </svg> ':window.screen.width<650?'<svg class="circle">\n    <circle class="three" r="45" cx="85" cy="85" stroke="#5AA1EF" stroke-width="10" fill="none" stroke-linecap="round" />\n  </svg> ':'<svg class="circle">\n    <circle class="three" r="45" cx="100" cy="100" stroke="#5AA1EF" stroke-width="10" fill="none" stroke-linecap="round" />\n  </svg> ',e.classList.add("o"),o++}function d(e){i?a(e.target):l(e.target),i=!i,function(){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=function(t){c[e[t][0]].classList.contains("x")&&c[e[t][1]].classList.contains("x")&&c[e[t][2]].classList.contains("x")?(setTimeout((function(){c[e[t][0]].classList.add("active"),c[e[t][1]].classList.add("active"),c[e[t][2]].classList.add("active"),s.innerText="X"}),1500),n.removeEventListener("click",d)):c[e[t][0]].classList.contains("o")&&c[e[t][1]].classList.contains("o")&&c[e[t][2]].classList.contains("o")?(setTimeout((function(){c[e[t][0]].classList.add("active"),c[e[t][1]].classList.add("active"),c[e[t][2]].classList.add("active"),s.innerText="O"}),1500),n.removeEventListener("click",d)):9==o&&(s.innerText="Ничья",n.removeEventListener("click",d))},r=0;r<e.length;r++)t(r)}()}r.addEventListener("click",(function(){i=!1,o=0,s.innerText="",c.forEach((function(e){e.innerHTML="",e.classList.remove("x","o","active")})),n.addEventListener("click",d)})),n.addEventListener("click",d)}]);