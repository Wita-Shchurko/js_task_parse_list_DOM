function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}var t=document.querySelector("ul"),e=document.querySelectorAll("li");function n(r){return+r.slice(1).replaceAll(",","")}var o=((function(t){if(Array.isArray(t))return r(t)})(e)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort(function(r,t){return n(t.dataset.salary)-n(r.dataset.salary)});t.textContent="",o.map(function(r){return t.append(r)});//# sourceMappingURL=index.282cef9e.js.map

//# sourceMappingURL=index.282cef9e.js.map
