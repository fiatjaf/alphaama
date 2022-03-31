!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).seamless={})}(this,(function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var e=function(){return e=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},e.apply(this,arguments)};function n(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,r,l=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(o=l.next()).done;)i.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}return i}var o=function(t){return void 0===t||"auto"===t||"instant"===t||"smooth"===t};function r(t,e){this.scrollLeft=t,this.scrollTop=e}var l=function(t,e,n){return void 0===n&&(n="cannot convert to dictionary."),"Failed to execute '".concat(t,"' on '").concat(e,"': ").concat(n)},i=function(t,e,n){return l(t,e,"The provided value '".concat(n,"' is not a valid enum value of type ScrollBehavior."))},c=function(t,e,n){var o,r="__SEAMLESS.BACKUP$".concat(e);return t[r]||!t[e]||(null===(o=t[e])||void 0===o?void 0:o.__isPolyfill)||(t[r]=t[e]),t[r]||n},u=function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)},a=function(){return"scrollBehavior"in window.document.documentElement.style},f=function(t){Object.defineProperty(t,"__isPolyfill",{value:!0})},s=function(t,e){f(e),[HTMLElement.prototype,SVGElement.prototype,Element.prototype].forEach((function(n){c(n,t),n[t]=e}))},d=function(t){return t.ownerDocument.scrollingElement||t.ownerDocument.documentElement},v=function(t){return.5*(1-Math.cos(Math.PI*t))},w=function(){var t,e,n;return null!==(n=null===(e=null===(t=window.performance)||void 0===t?void 0:t.now)||void 0===e?void 0:e.call(t))&&void 0!==n?n:window.Date.now()},m=function(t){var e=(w()-t.timeStamp)/(t.duration||500);if(e>1)return t.method(t.targetX,t.targetY),void t.callback();var n=(t.timingFunc||v)(e),o=t.startX+(t.targetX-t.startX)*n,r=t.startY+(t.targetY-t.startY)*n;t.method(o,r),t.rafId=window.requestAnimationFrame((function(){m(t)}))},h=function(t){return isFinite(t)?Number(t):0},p=function(t){return function(a,f,s){var v,p=n((v=a).window===v?[d(a.document.documentElement),"Window"]:[a,"Element"],2),y=p[0],g=p[1],b=null!=f?f:{};if(!u(b))throw new TypeError(l(t,g));if(!o(b.behavior))throw new TypeError(i(t,g,b.behavior));"scrollBy"===t&&(b.left=h(b.left)+y.scrollLeft,b.top=h(b.top)+y.scrollTop),function(t,n,o){var l,i;if(function(t){var e;return null!==(e=t.isConnected)&&void 0!==e?e:!(t.ownerDocument&&1&t.ownerDocument.compareDocumentPosition(t))}(t)){var u=t.scrollLeft,a=t.scrollTop,f=h(null!==(l=n.left)&&void 0!==l?l:u),s=h(null!==(i=n.top)&&void 0!==i?i:a);if(f!==u||s!==a){var d=c(HTMLElement.prototype,"scroll",r),v=c(Object.getPrototypeOf(t),"scroll",d).bind(t);if("smooth"===n.behavior){var p=function(){window.removeEventListener("wheel",g),window.removeEventListener("touchmove",g)},y=e(e({},o),{timeStamp:w(),startX:u,startY:a,targetX:f,targetY:s,rafId:0,method:v,callback:p}),g=function(){window.cancelAnimationFrame(y.rafId),p()};window.addEventListener("wheel",g,{passive:!0,once:!0}),window.addEventListener("touchmove",g,{passive:!0,once:!0}),m(y)}else v(f,s)}}}(y,b,s)}},y=p("scroll"),g=p("scrollTo"),b=p("scrollBy"),T=y,E=g,S=b,P=y,L=g,B=b,V=function(t){switch(t){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},M=function(t,e,o,r){var l,i=0;switch(e||(i^=2),t){case 0:i=i>>1|(1&i)<<1,o=(l=n([r,o],2))[0],r=l[1];break;case 1:case 3:i^=1;break;case 4:i^=2}return[i,o,r]},D=function(t){return 1==(1&M(V(t.writingMode),"rtl"!==t.direction,void 0,void 0)[0])},I=function(t,e,n,o,r,l,i){return 0!==t?t:r<e&&l>n||r>e&&l<n?null:r<=e&&i<=o||l>=n&&i>=o?2:l>n&&i<o||r<e&&i>o?3:null},W=function(t){return"visible"!==t&&"clip"!==t},H=function(t,e){return(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth)&&(W(e.overflowY)||W(e.overflowX)||t===d(t))},k=function(t){var e=t.parentNode,n=t.parentElement;if(null===n&&null!==e){if(11===e.nodeType)return e.host;if(9===e.nodeType)return function(t){var e;try{return(null===(e=t.ownerDocument.defaultView)||void 0===e?void 0:e.frameElement)||null}catch(t){return null}}(t)}return n},x=function(t,e,n){return t<e?e:t>n?n:t},_=function(t,e,n){switch(t){case 1:return(e+n)/2;case 3:return n;case 2:case 0:return e}},j=function(t,e){var o,r,l,i=null===(o=t.ownerDocument.defaultView)||void 0===o?void 0:o.visualViewport,c=n(t===d(t)?[0,0,null!==(r=null==i?void 0:i.width)&&void 0!==r?r:t.clientWidth,null!==(l=null==i?void 0:i.height)&&void 0!==l?l:t.clientHeight]:[e.left,e.top,t.clientWidth,t.clientHeight],4),u=c[0],a=c[1],f=c[2],s=c[3],v=u+t.clientLeft,w=a+t.clientTop;return[w,v+f,w+s,v]},C=function(t,e){var o=[],r=t.ownerDocument,l=r.defaultView;if(!l)return o;for(var i=window.getComputedStyle(t),c="rtl"!==i.direction,u=n(function(t,e,o){var r=n(M(e,o,t.block||"start",t.inline||"nearest"),3),l=r[0];return[r[1],r[2]].map((function(t,e){switch(t){case"center":return 1;case"nearest":return 0;default:return"start"===t==!(l>>e&1)?2:3}}))}(e,V(i.writingMode||i.getPropertyValue("-webkit-writing-mode")||i.getPropertyValue("-ms-writing-mode")),c),2),a=u[0],f=u[1],s=n(function(t,e,n){var o,r=e.top,l=e.right,i=e.bottom,c=e.left,u=(o=t.ownerDocument,["scroll-margin","scroll-snap-margin"].filter((function(t){return t in o.documentElement.style}))[0]);if(!u)return[r,l,i,c];var a=function(t){var e=n.getPropertyValue("".concat(u,"-").concat(t));return parseInt(e,10)||0};return[r-a("top"),l+a("right"),i+a("bottom"),c-a("left")]}(t,t.getBoundingClientRect(),i),4),d=s[0],v=s[1],w=s[2],m=s[3],h=k(t);null!==h;h=k(h)){if(r!==h.ownerDocument){if(!(l=(r=h.ownerDocument).defaultView))break;var p=h.getBoundingClientRect(),y=p.left,g=p.top;d+=g,v+=y,w+=g,m+=y}var b=l.getComputedStyle(h);if("fixed"===b.position)break;if(H(h,b)){var T=h.getBoundingClientRect(),E=n(j(h,T),4),S=E[0],P=E[1],L=E[2],B=E[3],W=I(a,B,P,h.clientWidth,m,v,v-m),C=I(f,S,L,h.clientHeight,d,w,w-d),O=null===W?0:_(W,m,v)-_(W,B,P),X=null===C?0:_(C,d,w)-_(C,S,L),Y=D(b)?x(O,-h.scrollWidth+h.clientWidth-h.scrollLeft,-h.scrollLeft):x(O,-h.scrollLeft,h.scrollWidth-h.clientWidth-h.scrollLeft),F=x(X,-h.scrollTop,h.scrollHeight-h.clientHeight-h.scrollTop);o.push([h,{left:h.scrollLeft+Y,top:h.scrollTop+F,behavior:e.behavior}]),d=Math.max(d-F,S),v=Math.min(v-Y,P),w=Math.min(w-F,L),m=Math.max(m-Y,B)}}return o},O=function(t,e,r){var l=e||{};if(!o(l.behavior))throw new TypeError(i("scrollIntoView","Element",l.behavior));C(t,l).forEach((function(t){var e=n(t,2),o=e[0],l=e[1];T(o,l,r)}))},X=O,Y=function(t,e){return function(n){if(!a()){var o={scroll:y,scrollTo:g,scrollBy:b}[t];e(t,(function(){var t=arguments;if(1!==arguments.length){var e=t[0],r=t[1];o(this,{left:e,top:r})}else o(this,t[0],n)}))}}},F=Y("scroll",s),A=Y("scrollTo",s),R=Y("scrollBy",s),N=function(t,e){f(e),c(window,t),window[t]=e},q=Y("scroll",N),z=Y("scrollTo",N),G=Y("scrollBy",N);function K(t){X(this,{block:null==t||t?"start":"end",inline:"nearest"})}var U=function(t){if(!a()){var e=c(window.HTMLElement.prototype,"scrollIntoView",K);s("scrollIntoView",(function(){var n=arguments,o=n[0];1===n.length&&u(o)?X(this,o,t):e.apply(this,n)}))}};t.elementScroll=T,t.elementScrollBy=S,t.elementScrollByPolyfill=R,t.elementScrollIntoView=X,t.elementScrollIntoViewPolyfill=U,t.elementScrollPolyfill=F,t.elementScrollTo=E,t.elementScrollToPolyfill=A,t.modifyWindow=N,t.polyfill=function(t){a()||(F(t),A(t),R(t),U(t),q(t),z(t),G(t))},t.scroll=y,t.scrollBy=b,t.scrollIntoView=O,t.scrollTo=g,t.windowScroll=P,t.windowScrollBy=B,t.windowScrollByPolyfill=G,t.windowScrollPolyfill=q,t.windowScrollTo=L,t.windowScrollToPolyfill=z,Object.defineProperty(t,"__esModule",{value:!0})}));