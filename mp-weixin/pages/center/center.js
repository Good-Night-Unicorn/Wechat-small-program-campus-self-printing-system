(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/center"],{2589:function(n,e,t){"use strict";var c;t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return c}));var u=function(){var n=this,e=n.$createElement;n._self._c},o=[]},"298e":function(n,e,t){"use strict";var c=t("d690"),u=t.n(c);u.a},"35e9":function(n,e,t){"use strict";t.r(e);var c=t("7e02"),u=t.n(c);for(var o in c)"default"!==o&&function(n){t.d(e,n,(function(){return c[n]}))}(o);e["default"]=u.a},4575:function(n,e,t){"use strict";t.r(e);var c=t("2589"),u=t("35e9");for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);t("298e");var r,a=t("f0c5"),i=Object(a["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],r);e["default"]=i.exports},"7e02":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=o(t("a34a")),u=o(t("dd2a"));function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,c,u,o,r){try{var a=n[o](r),i=a.value}catch(s){return void t(s)}a.done?e(i):Promise.resolve(i).then(c,u)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(c,u){var o=n.apply(e,t);function a(n){r(o,c,u,a,i,"next",n)}function i(n){r(o,c,u,a,i,"throw",n)}a(void 0)}))}}var i={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[],iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=this;return a(c.default.mark((function t(){var o,r,a;return c.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.role=n.getStorageSync("role"),o=n.getStorageSync("nowTable"),t.next=4,e.$api.session(o);case 4:r=t.sent,e.user=r.data,e.tableName=o,a=u.default.list(),e.menuList=a;case 9:case"end":return t.stop()}}),t)})))()},onShow:function(){var e=this;return a(c.default.mark((function t(){var o,r,a;return c.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.removeStorageSync("useridTag"),e.role=n.getStorageSync("role"),o=n.getStorageSync("nowTable"),t.next=5,e.$api.session(o);case 5:r=t.sent,e.user=r.data,e.tableName=o,a=u.default.list(),e.menuList=a;case 10:case"end":return t.stop()}}),t)})))()},methods:{onPageTap:function(e){n.setStorageSync("useridTag",1),n.navigateTo({url:e,fail:function(){n.switchTab({url:e})}})}}};e.default=i}).call(this,t("543d")["default"])},b581:function(n,e,t){"use strict";(function(n){t("7dff");c(t("66fd"));var e=c(t("4575"));function c(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},d690:function(n,e,t){}},[["b581","common/runtime","common/vendor"]]]);