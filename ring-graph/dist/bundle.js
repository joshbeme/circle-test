!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);n.angle,n.color,n.radius,n.time,n.perimeter;this.config=n,this.selector=t,this.shouldUpdate=!1,this.next=null,this.last=null}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.setTailLength(),this.setSegment()}},{key:"setTailLength",value:function(){var e=this.config.perimeter,t=0;this.last&&(t=this.last.tailPosition);var n=this.config.angle/360*e;this.angleRadian=n,this.tailPosition=n+t,this.currentTailPosition=0}},{key:"setSegment",value:function(){var e=0;this.last&&(e=this.last.tailPosition);this.config.perimeter;var t=$(".".concat(this.selector));console.log(t,this.next),t.attr("transform-origin","50% 50%"),t.attr("stroke","".concat(this.config.color)),this.next&&this.next.init()}},{key:"relay",value:function(){var e=this;console.log(e.config.time);var t=1*this.config.time;$(".".concat(this.selector)).animate({strokeDashoffset:e.config.perimeter-e.angleRadian},{duration:t,specialEasing:{strokeDashoffset:"easeOutBounce"},complete:function(){e.next.animate()}})}},{key:"accordion",value:function(){console.log("accordion");var e=this;this.last&&this.last.currentTailPosition;var t=1*this.config.time;console.log(e.config.perimeter-e.angleRadian),$(function(){$(".".concat(e.selector)).animate({strokeDashoffset:e.config.perimeter-e.angleRadian},{duration:t,specialEasing:{strokeDashoffset:"easeOutBounce"},queue:!1,step:function(t,n){var i=0;e.last&&(i=e.last.currentTailPosition);var r=(e.config.perimeter-t)/e.config.perimeter+i;e.currentTailPosition=r,e.next&&($(".".concat(e.next.selector)).css("transform","rotate(".concat(360*r,"deg)")),e.next.updateRotation())},complete:function(){return e.shouldUpdate=!0}})}),this.next&&this.next.accordion()}},{key:"updateRotation",value:function(){if(this.shouldUpdate){var e=0;this.last&&(e=this.last.currentTailPosition);var t=this.angleRadian/this.config.perimeter+e;this.currentTailPosition=t,this.next&&($(".".concat(this.next.selector)).css("transform","rotate(".concat(360*t,"deg)")),this.next.updateRotation())}}}])&&i(t.prototype,n),r&&i(t,r),e}();function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.semiCircleSelectors=n,this.semiCircles=[],this.radius=t,console.log("something"),this.init()}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.calculatePerimeter(this.radius);for(var e=this,t=document.querySelector("#graph"),n=null,i=1;i<this.semiCircleSelectors.length;i++){var a=Array.from(this.semiCircleSelectors[i].children).reduce(function(t,n){var i=/^data-*/,r=e.recursivlyFindInput(n);return t[r.getAttributeNames().find(function(e){return i.test(e)}).replace("data-","")]=r.value,t},{}),s="circle"+i,c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("cx","50%"),c.setAttribute("cy","50%"),c.setAttribute("r",""+e.radius),c.setAttribute("stroke-width","40"),c.setAttribute("stroke-dasharray",""+e.perimeter),c.setAttribute("stroke-dashoffset",""+e.perimeter),c.setAttribute("fill","none"),c.setAttribute("class",s),t.appendChild(c);var l=new r(s,o({},a,{perimeter:e.perimeter}));this.semiCircles.push(l),n&&(n.next=l),l.last=n,n=l}this.renderLL()}},{key:"renderLL",value:function(){var e=this.semiCircles[0];e.init(),e.accordion()}},{key:"calculatePerimeter",value:function(e){this.perimeter=2*e*Math.PI}},{key:"animateAccordion",value:function(){this.animationLoop()}},{key:"animateRelay",value:function(){}},{key:"animationLoop",value:function(){console.log("first"),this.semiCircles[0].updateRotation()}},{key:"cancel",value:function(){cancelAnimationFrame()}},{key:"recursivlyFindInput",value:function(e){return e.hasChildNodes()?this.recursivlyFindInput(e.children[0]):e}}])&&s(t.prototype,n),i&&s(t,i),e}())(100,document.querySelector("#table-body").children)}]);