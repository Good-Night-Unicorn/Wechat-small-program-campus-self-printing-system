(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0203":function(e,n,t){"use strict";var a=t("5a86"),r=t.n(a);r.a},"2bdb":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,a,r,i,u){try{var o=e[i](u),s=o.value}catch(l){return void t(l)}o.done?n(s):Promise.resolve(s).then(a,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var u=e.apply(n,t);function o(e){i(u,a,r,o,s,"next",e)}function s(e){i(u,a,r,o,s,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,dianzhangxingbieOptions:[],dianzhangxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var n=this;return u(a.default.mark((function t(){var r;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],r=e.getStorageSync("loginTable"),n.tableName=r,"yonghu"==n.tableName&&(n.yonghuxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.yonghuxingbieOptions[0]),"dianzhang"==n.tableName&&(n.dianzhangxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.dianzhangxingbieOptions[0]),n.styleChange();case 6:case"end":return t.stop()}}),t)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},dianzhangxingbieChange:function(e){this.dianzhangxingbieIndex=e.target.value,this.ruleForm.xingbie=this.dianzhangxingbieOptions[this.dianzhangxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.zhanghao||"yonghu"!=e.tableName){n.next=3;break}return e.$utils.msg("账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if("yonghu"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=9;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 9:if(e.ruleForm.xingming||"yonghu"!=e.tableName){n.next=12;break}return e.$utils.msg("姓名不能为空"),n.abrupt("return");case 12:if("yonghu"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=15;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 15:if("yonghu"!=e.tableName||!e.ruleForm.shoujihaoma||e.$validate.isMobile(e.ruleForm.shoujihaoma)){n.next=18;break}return e.$utils.msg("手机号码应输入手机格式"),n.abrupt("return");case 18:if(e.ruleForm.dianzhangzhanghao||"dianzhang"!=e.tableName){n.next=21;break}return e.$utils.msg("店长账号不能为空"),n.abrupt("return");case 21:if(e.ruleForm.mima||"dianzhang"!=e.tableName){n.next=24;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 24:if("dianzhang"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=27;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 27:if(e.ruleForm.dianpumingcheng||"dianzhang"!=e.tableName){n.next=30;break}return e.$utils.msg("店铺名称不能为空"),n.abrupt("return");case 30:if(e.ruleForm.dianpudizhi||"dianzhang"!=e.tableName){n.next=33;break}return e.$utils.msg("店铺地址不能为空"),n.abrupt("return");case 33:if("dianzhang"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=36;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 36:if("dianzhang"!=e.tableName||!e.ruleForm.lianxishouji||e.$validate.isMobile(e.ruleForm.lianxishouji)){n.next=39;break}return e.$utils.msg("联系手机应输入手机格式"),n.abrupt("return");case 39:return n.next=41,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 41:e.$utils.msgBack("注册成功");case 43:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,t("543d")["default"])},"402a":function(e,n,t){"use strict";(function(e){t("7dff");a(t("66fd"));var n=a(t("42a8"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"42a8":function(e,n,t){"use strict";t.r(n);var a=t("e116"),r=t("ff66");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("d4e8"),t("0203");var u,o=t("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"64357c0e",null,!1,a["a"],u);n["default"]=s.exports},"5a86":function(e,n,t){},b190:function(e,n,t){},d4e8:function(e,n,t){"use strict";var a=t("b190"),r=t.n(a);r.a},e116:function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement;e._self._c},i=[]},ff66:function(e,n,t){"use strict";t.r(n);var a=t("2bdb"),r=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=r.a}},[["402a","common/runtime","common/vendor"]]]);