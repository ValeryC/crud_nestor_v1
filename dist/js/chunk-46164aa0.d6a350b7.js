(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46164aa0"],{"0b6e":function(t,e,n){},"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),i=n("17c2"),o=n("9112");for(var s in a){var c=r[s],u=c&&c.prototype;if(u&&u.forEach!==i)try{o(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),i=n("ae40"),o=a("forEach"),s=i("forEach");t.exports=o&&s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,n){"use strict";var r=n("23e7"),a=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"65f0":function(t,e,n){var r=n("861d"),a=n("e8b5"),i=n("b622"),o=i("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"819d":function(t,e,n){"use strict";var r=n("0b6e"),a=n.n(r);a.a},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ab3a:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"col-md-12 col-lg-12 col-xs-12"},[n("h1",[t._v("List of users")]),n("table",{staticClass:"table table-striped"},[t._m(0),n("tbody",t._l(t.Users,(function(e){return n("tr",{key:e.key},[n("td",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.firstname))]),n("td",[t._v(t._s(e.lastname))]),n("td",[t._v(t._s(e.phone))]),n("td",[t._v(t._s(e.birthday))]),n("td",[t._v(t._s(e.nationality))]),n("td",{staticClass:"button"},[n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"edituser",params:{id:e.key}}}},[t._v("Edit")]),n("button",{staticClass:"btn btn-danger",on:{click:function(n){return n.preventDefault(),t.deleteUser(e.key)}}},[t._v("Delete")]),n("router-link",{staticClass:"btn btn-info",attrs:{to:{name:"detailuser",params:{id:e.key}}}},[t._v("Details")])],1)])})),0)])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Id")]),n("th",[t._v("firstname")]),n("th",[t._v("Lastname")]),n("th",[t._v("Phone")]),n("th",[t._v("Birthday")]),n("th",[t._v("Nationality")])])])}],i=(n("4160"),n("159b"),n("88b8")),o={data:function(){return{Users:[]}},created:function(){var t=this;i["a"].collection("users").onSnapshot((function(e){t.Users=[],e.forEach((function(e){t.Users.push({key:e.id,id:e.data().id,firstname:e.data().firstname,lastname:e.data().lastname,phone:e.data().phone,birthday:e.data().birthday,nationality:e.data().nationality})}))}))},methods:{deleteUser:function(t){window.confirm("Do you really want to delete?")&&i["a"].collection("users").doc(t).delete().then((function(){console.log("Document deleted!")})).catch((function(t){console.error(t)}))}}},s=o,c=(n("819d"),n("2877")),u=Object(c["a"])(s,r,a,!1,null,null,null);e["default"]=u.exports},ae40:function(t,e,n){var r=n("83ab"),a=n("d039"),i=n("5135"),o=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(i(s,t))return s[t];e||(e={});var n=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:c,f=i(e,1)?e[1]:void 0;return s[t]=!!n&&!a((function(){if(u&&!r)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,f)}))}},b727:function(t,e,n){var r=n("0366"),a=n("44ad"),i=n("7b0b"),o=n("50c4"),s=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,d=5==t||f;return function(h,v,b,p){for(var y,m,L=i(h),_=a(L),S=r(v,b,3),C=o(_.length),E=0,k=p||s,g=e?k(h,C):n?k(h,0):void 0;C>E;E++)if((d||E in _)&&(y=_[E],m=S(y,E,L),t))if(e)g[E]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return E;case 2:c.call(g,y)}else if(l)return!1;return f?-1:u||l?l:g}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-46164aa0.d6a350b7.js.map