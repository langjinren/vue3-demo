(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chatpage"],{1114:function(t,e,r){},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"6b41":function(t,e,r){"use strict";var n=r("7a23"),o=r("d282"),i=r("b1d2"),a=r("f9ae"),c=r("ad06"),u=Object(o["a"])("nav-bar"),l=u[0],s=u[1];e["a"]=l({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,border:{type:Boolean,default:!0}},emits:["click-left","click-right"],setup:function(t,e){var r=e.emit,o=e.slots,u=Object(n["A"])(),l=Object(a["a"])(u,s),f=function(t){r("click-left",t)},h=function(t){r("click-right",t)},d=function(){return o.left?o.left():[t.leftArrow&&Object(n["h"])(c["a"],{class:s("arrow"),name:"arrow-left"},null),t.leftText&&Object(n["h"])("span",{class:s("text")},[t.leftText])]},p=function(){return o.right?o.right():Object(n["h"])("span",{class:s("text")},[t.rightText])},v=function(){var e,r=t.title,a=t.fixed,c=t.border,l=t.zIndex,v={zIndex:void 0!==l?+l:void 0},g=t.leftArrow||t.leftText||o.left,m=t.rightText||o.right;return Object(n["h"])("div",{ref:u,style:v,class:[s({fixed:a,"safe-area-inset-top":t.safeAreaInsetTop}),(e={},e[i["b"]]=c,e)]},[Object(n["h"])("div",{class:s("content")},[g&&Object(n["h"])("div",{class:s("left"),onClick:f},[d()]),Object(n["h"])("div",{class:[s("title"),"van-ellipsis"]},[o.title?o.title():r]),m&&Object(n["h"])("div",{class:s("right"),onClick:h},[p()])])])};return function(){return t.fixed&&t.placeholder?l(v):v()}}})},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=Q(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function g(){}function m(){}function y(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(_([])));x&&x!==r&&n.call(x,i)&&(b=x);var j=y.prototype=g.prototype=Object.create(b);function A(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function Q(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return B()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:B}}function B(){return{value:e,done:!0}}return m.prototype=j.constructor=y,y.constructor=m,m.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},A(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(j),u(j,c,"Generator"),j[i]=function(){return this},j.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},a11f:function(t,e,r){"use strict";r.r(e);r("d81d"),r("b64b"),r("da02");var n=r("6b41"),o=r("7a23"),i=(r("96cf"),r("1da1")),a=r("6c02"),c={Q1:'<p>这是第1个问题<span class="cred">哈哈</span>自定义html</p>',Q2:'<img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="图片"/><img src="https://img.yzcdn.cn/vant/leaf.jpg" alt="图片" onload="scroll2Bottom()"/>',Q3:"这是第3个问题这是第3个问题这是第3个问题",Q4:"这是第4个这这是第4个问题题问题",Q5:'<p>这是第5个问题</p><img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="ipad" onload="scroll2Bottom()"/>',Q6:"这是第6个问第7个题",Q7:"这是第7个问题第7个第7个",Q8:"问题结束",Q9:"结束语"},u={A1:"这是第1个回答选项",A2:"这是第2个答选项回答选项",A3:"这是第3个回答选项",A4:"这是第4个回答选项答",A5:"这答选项是第5个回答选项答选项",A6:"这是第6个回答选项",A7:"这是第7个回答选项这是第7个回答选项",A8:"这是第8个回答选项",A9:"这是第9个回答选项答选项",A10:"这是第10个回答选项",A11:"这是第11个回答选项答选项答选项",A12:"这是第12个回答选项",A13:"这是第13个回答选项答选项答选项答选项",A14:"这是第14个回答选项",A15:"这是第15个回答选项答选项",A16:"这是第16个回答选项"},l={Q1:{A1:"Q6",A2:"Q3",A3:"Q7",A4:"Q5"},Q2:{A5:"Q4",A6:"Q3",A7:"Q8",A8:"Q1"},Q3:{A9:"Q2",A10:"Q4",A11:"Q8"},Q4:{A5:"Q1",A7:"Q8",A2:"Q3",A8:"Q4"},Q5:{A1:"Q5",A3:"Q6",A9:"Q7",A11:"Q8"},Q6:{A4:"Q2",A6:"Q6",A10:"Q4",A12:"Q7"},Q7:"Q8",Q8:"Q9"};function s(){var t=window.pageYOffset,e=document.documentElement.offsetHeight-document.documentElement.clientHeight;function r(){t+=(e-t)/8,Math.abs(e-t)<2?window.scrollTo(0,e):(window.scrollTo(0,t),requestAnimationFrame(r))}window.requestAnimationFrame||(window.requestAnimationFrame=function(t){return setTimeout(t,17)}),r()}var f=function(t){var e;return null===(e=Object(o["I"])(t))||void 0===e?void 0:e.getBoundingClientRect()},h=function(t){var e,r=Object(o["A"])();return r.value=(null===(e=f(t))||void 0===e?void 0:e.height)||0,r};r("cde2"),e["default"]=Object(o["i"])((function(){var t=Object(a["c"])(),e=Object(o["A"])(),r=Object(o["z"])([]),f=h(e),d=Object(o["A"])(!0),p=Object(o["A"])("对方正在输入中..."),v=0,g=0,m=Object(o["z"])([]),y=l.Q1;window.scroll2Bottom=function(){return s()};var b=function(){return Math.ceil(1e3*(2*Math.random()+1.5))},w=function(){return Math.ceil(Math.random()+500)},x=function(){t.back()},j=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["o"])();case 2:f.value=h(e).value,window.scroll2Bottom();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(){console.log("聊天结束"),d.value=!1},O=function(t,e){r.push({message:t,direction:e})},Q=function t(e){if(O(c[e],"left"),y=l[e],!y)return A();"string"===typeof y?v=setTimeout((function(){t(y),j()}),b()):m=Object.keys(y)},L=function(t){O(u[t],"right"),m=[],p.value="请稍等...",g=setTimeout((function(){p.value="对方正在输入中..."}),w()),v=setTimeout((function(){Q("string"===typeof y?y:y[t]),j()}),b())},E=function(){return r.length>0&&Object(o["h"])("div",{class:"chat-wrapper",style:{marginBottom:f.value+50+"px"}},[r.map((function(t){return Object(o["h"])("li",{class:["flex pd10 align-start","left"===t.direction?"justify-start":"justify-end"]},["left"===t.direction?Object(o["h"])("div",{class:"avatar"},null):null,Object(o["h"])("div",{class:["mg-l10 bubble","left"===t.direction?"bubble-left":"bubble-right"]},[Object(o["h"])("p",{class:"bgfff lh20 fs12",innerHTML:t.message},null)]),"right"===t.direction?Object(o["h"])("div",{class:"avatar"},null):null])}))])},T=function(){return m.length>0?Object(o["h"])("div",{class:"answers-wrapper flex flex-wrap max640",ref:e},[m.map((function(t){return Object(o["h"])("div",{class:"btnbox col-6 flex"},[Object(o["h"])("div",{class:"flex flex-center btn",onClick:function(){return L(t)}},[u[t]])])}))]):Object(o["h"])("div",{class:"answers-wrapper max640"},[Object(o["N"])(Object(o["h"])("div",{class:"loadingtxt fs12 lh20  mg10 text-center"},[p.value]),[[o["K"],d.value]])])};return Object(o["t"])((function(){Q("Q1")})),Object(o["u"])((function(){clearTimeout(v),clearTimeout(g)})),function(){return Object(o["h"])("div",{class:"pd-nav"},[Object(o["h"])(n["a"],{fixed:!0,title:"聊天室","left-arrow":!0,"onClick-left":x},null),E(),T()])}}))},cde2:function(t,e,r){},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,i=r("1dde"),a=r("ae40"),c=i("map"),u=a("map");n({target:"Array",proto:!0,forced:!c||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},da02:function(t,e,r){"use strict";r("3cd0"),r("0af7"),r("acc2"),r("1114")}}]);