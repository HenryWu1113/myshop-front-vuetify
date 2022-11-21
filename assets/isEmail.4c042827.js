import{aJ as N}from"./index.1dc33c45.js";import{a as p}from"./assertString.31c1207f.js";var F={exports:{}};(function(s,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=x;function x(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;for(var u in n)typeof _[u]=="undefined"&&(_[u]=n[u]);return _}s.exports=t.default,s.exports.default=t.default})(F,F.exports);var q={exports:{}},E={exports:{}};(function(s,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var x=_(p.exports);function _(f){return f&&f.__esModule?f:{default:f}}function n(f){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(a){return typeof a}:n=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n(f)}function u(f,e){(0,x.default)(f);var a,i;n(e)==="object"?(a=e.min||0,i=e.max):(a=arguments[1],i=arguments[2]);var l=encodeURI(f).split(/%..|./).length-1;return l>=a&&(typeof i=="undefined"||l<=i)}s.exports=t.default,s.exports.default=t.default})(E,E.exports);var P={exports:{}};(function(s,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var x=n(p.exports),_=n(F.exports);function n(e){return e&&e.__esModule?e:{default:e}}var u={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1};function f(e,a){(0,x.default)(e),a=(0,_.default)(a,u),a.allow_trailing_dot&&e[e.length-1]==="."&&(e=e.substring(0,e.length-1)),a.allow_wildcard===!0&&e.indexOf("*.")===0&&(e=e.substring(2));var i=e.split("."),l=i[i.length-1];return a.require_tld&&(i.length<2||!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(l)||/\s/.test(l))||!a.allow_numeric_tld&&/^\d+$/.test(l)?!1:i.every(function(o){return!(o.length>63||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(o)||/[\uff01-\uff5e]/.test(o)||/^-|-$/.test(o)||!a.allow_underscores&&/_/.test(o))})}s.exports=t.default,s.exports.default=t.default})(P,P.exports);var A={exports:{}};(function(s,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var x=_(p.exports);function _(l){return l&&l.__esModule?l:{default:l}}var n="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",u="(".concat(n,"[.]){3}").concat(n),f=new RegExp("^".concat(u,"$")),e="(?:[0-9a-fA-F]{1,4})",a=new RegExp("^("+"(?:".concat(e,":){7}(?:").concat(e,"|:)|")+"(?:".concat(e,":){6}(?:").concat(u,"|:").concat(e,"|:)|")+"(?:".concat(e,":){5}(?::").concat(u,"|(:").concat(e,"){1,2}|:)|")+"(?:".concat(e,":){4}(?:(:").concat(e,"){0,1}:").concat(u,"|(:").concat(e,"){1,3}|:)|")+"(?:".concat(e,":){3}(?:(:").concat(e,"){0,2}:").concat(u,"|(:").concat(e,"){1,4}|:)|")+"(?:".concat(e,":){2}(?:(:").concat(e,"){0,3}:").concat(u,"|(:").concat(e,"){1,5}|:)|")+"(?:".concat(e,":){1}(?:(:").concat(e,"){0,4}:").concat(u,"|(:").concat(e,"){1,6}|:)|")+"(?::((?::".concat(e,"){0,5}:").concat(u,"|(?::").concat(e,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function i(l){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";if((0,x.default)(l),o=String(o),!o)return i(l,4)||i(l,6);if(o==="4"){if(!f.test(l))return!1;var h=l.split(".").sort(function(y,w){return y-w});return h[3]<=255}return o==="6"?!!a.test(l):!1}s.exports=t.default,s.exports.default=t.default})(A,A.exports);(function(s,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=L;var x=e(p.exports),_=e(F.exports),n=e(E.exports),u=e(P.exports),f=e(A.exports);function e(c){return c&&c.__esModule?c:{default:c}}var a={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[]},i=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,l=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,o=/^[a-z\d]+$/,h=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,y=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,w=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,z=254;function C(c){var r=c.replace(/^"(.+)"$/,"$1");if(!r.trim())return!1;var m=/[\.";<>]/.test(r);if(m){if(r===c)return!1;var v=r.split('"').length===r.split('\\"').length;if(!v)return!1}return!0}function L(c,r){if((0,x.default)(c),r=(0,_.default)(r,a),r.require_display_name||r.allow_display_name){var m=c.match(i);if(m){var v=m[1];if(c=c.replace(v,"").replace(/(^<|>$)/g,""),v.endsWith(" ")&&(v=v.substr(0,v.length-1)),!C(v))return!1}else if(r.require_display_name)return!1}if(!r.ignore_max_length&&c.length>z)return!1;var S=c.split("@"),g=S.pop(),D=g.toLowerCase();if(r.host_blacklist.includes(D))return!1;var d=S.join("@");if(r.domain_specific_validation&&(D==="gmail.com"||D==="googlemail.com")){d=d.toLowerCase();var M=d.split("+")[0];if(!(0,n.default)(M.replace(/\./g,""),{min:6,max:30}))return!1;for(var R=M.split("."),b=0;b<R.length;b++)if(!o.test(R[b]))return!1}if(r.ignore_max_length===!1&&(!(0,n.default)(d,{max:64})||!(0,n.default)(g,{max:254})))return!1;if(!(0,u.default)(g,{require_tld:r.require_tld})){if(!r.allow_ip_domain)return!1;if(!(0,f.default)(g)){if(!g.startsWith("[")||!g.endsWith("]"))return!1;var I=g.substr(1,g.length-2);if(I.length===0||!(0,f.default)(I))return!1}}if(d[0]==='"')return d=d.slice(1,d.length-1),r.allow_utf8_local_part?w.test(d):h.test(d);for(var O=r.allow_utf8_local_part?y:l,U=d.split("."),$=0;$<U.length;$++)if(!O.test(U[$]))return!1;return!(r.blacklisted_chars&&d.search(new RegExp("[".concat(r.blacklisted_chars,"]+"),"g"))!==-1)}s.exports=t.default,s.exports.default=t.default})(q,q.exports);var k=N(q.exports);export{A as a,q as b,E as c,k as d,P as i,F as m};