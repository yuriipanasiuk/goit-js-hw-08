function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var i,r,o,u,a,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,l=t,u=e.apply(o,n)}function j(e){return l=e,a=setTimeout(w,t),c?b(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function w(){var e=v();if(h(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-f);return s?m(n,o-(e-l)):n}(e))}function O(e){return a=void 0,p&&i?b(e):(i=r=void 0,u)}function T(){var e=v(),n=h(e);if(i=arguments,r=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(w,t),b(f)}return void 0===a&&(a=setTimeout(w,t)),u}return t=y(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=f=r=a=void 0},T.flush=function(){return void 0===a?u:O(v())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");b.addEventListener("input",e(t)((function(){const e=b.email.value,t=b.message.value,n={email:e,message:t},i=JSON.stringify(n);localStorage.setItem("currentFormValue",i)}),500)),b.addEventListener("submit",(function(e){e.preventDefault();const t=b.email.value,n=b.message.value;if(""===t||""===n)return void alert("input is empty");const i={email:t,message:n};localStorage.clear(),console.log(i),b.reset()})),function(){const e=localStorage.getItem("currentFormValue"),t=JSON.parse(e);if(!t)return;b.email.value=t.email,b.message.value=t.message}();
//# sourceMappingURL=03-feedback.598771f2.js.map
