!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("ejkSG");function a(n,t){return new Promise((function(e,o){setTimeout((function(){Math.random()>.3?e({position:n,delay:t}):o({position:n,delay:t})}),t)})).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".form");e.addEventListener("submit",(function(n){n.preventDefault();var t=parseInt(e.elements.delay.value),o=parseInt(e.elements.step.value);!function(e,n,t){for(var o=n,i=1;i<=e;i++)a(i,o),o+=t}(parseInt(e.elements.amount.value),t,o)}))}))}();
//# sourceMappingURL=03-promises.f696d39c.js.map
