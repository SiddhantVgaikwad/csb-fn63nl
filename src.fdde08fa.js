parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=0,n=0,t=0,m=0,c=!1;function d(){c=!0,u()}function i(){c=!1}function o(){c=!1,e=0,n=0,t=0,m=0,document.getElementById("hr").innerHTML=e,document.getElementById("min").innerHTML=n,document.getElementById("sec").innerHTML=t,document.getElementById("count").innerHTML=m}function u(){if(1==c){99==(m+=1)&&(t+=1,m=0),60==t&&(n+=1,t=0),60==n&&(e+=1,n=0,t=0);var d=e,i=n,o=t,u=m;e<10&&(d="0"+d),n<10&&(i="0"+i),t<10&&(o="0"+o),m<10&&(u="0"+u),document.getElementById("hr").innerHTML=d,document.getElementById("min").innerHTML=i,document.getElementById("sec").innerHTML=o,document.getElementById("count").innerHTML=u,setTimeout("stopwatch()",10)}}
},{}]},{},["H99C"], null)
//# sourceMappingURL=/csb-fn63nl/src.fdde08fa.js.map