(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dianzhang/add-or-update"],{"4bfe":function(e,n,a){},7343:function(e,n,a){"use strict";a.r(n);var r=a("e674"),t=a("f884");for(var i in t)"default"!==i&&function(e){a.d(n,e,(function(){return t[e]}))}(i);a("fa38");var u,o=a("f0c5"),s=Object(o["a"])(t["default"],r["b"],r["c"],!1,null,"37806eee",null,!1,r["a"],u);n["default"]=s.exports},9005:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function i(e,n,a,r,t,i,u){try{var o=e[i](u),s=o.value}catch(c){return void a(c)}o.done?n(s):Promise.resolve(s).then(r,t)}function u(e){return function(){var n=this,a=arguments;return new Promise((function(r,t){var u=e.apply(n,a);function o(e){i(u,r,t,o,s,"next",e)}function s(e){i(u,r,t,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("56b9"))}.bind(null,a)).catch(a.oe)},s={data:function(){return{cross:"",ruleForm:{dianzhangzhanghao:"",mima:"",dianpumingcheng:"",dianpudizhi:"",dianzhangxingming:"",xingbie:"",youxiang:"",lianxishouji:"",xiangpian:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{dianzhangzhanghao:!1,mima:!1,dianpumingcheng:!1,dianpudizhi:!1,dianzhangxingming:!1,xingbie:!1,youxiang:!1,lianxishouji:!1,xiangpian:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return u(r.default.mark((function t(){var i,u,o,s;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.getStorageSync("nowTable"),t.next=3,a.$api.session(i);case 3:if(u=t.sent,a.user=u.data,a.xingbieOptions="男,女".split(","),a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=14;break}return a.ruleForm.id=n.id,t.next=12,a.$api.info("dianzhang",a.ruleForm.id);case 12:u=t.sent,a.ruleForm=u.data;case 14:if(a.cross=n.cross,!n.cross){t.next=58;break}o=e.getStorageSync("crossObj"),t.t0=r.default.keys(o);case 18:if((t.t1=t.t0()).done){t.next=58;break}if(s=t.t1.value,"dianzhangzhanghao"!=s){t.next=24;break}return a.ruleForm.dianzhangzhanghao=o[s],a.ro.dianzhangzhanghao=!0,t.abrupt("continue",18);case 24:if("mima"!=s){t.next=28;break}return a.ruleForm.mima=o[s],a.ro.mima=!0,t.abrupt("continue",18);case 28:if("dianpumingcheng"!=s){t.next=32;break}return a.ruleForm.dianpumingcheng=o[s],a.ro.dianpumingcheng=!0,t.abrupt("continue",18);case 32:if("dianpudizhi"!=s){t.next=36;break}return a.ruleForm.dianpudizhi=o[s],a.ro.dianpudizhi=!0,t.abrupt("continue",18);case 36:if("dianzhangxingming"!=s){t.next=40;break}return a.ruleForm.dianzhangxingming=o[s],a.ro.dianzhangxingming=!0,t.abrupt("continue",18);case 40:if("xingbie"!=s){t.next=44;break}return a.ruleForm.xingbie=o[s],a.ro.xingbie=!0,t.abrupt("continue",18);case 44:if("youxiang"!=s){t.next=48;break}return a.ruleForm.youxiang=o[s],a.ro.youxiang=!0,t.abrupt("continue",18);case 48:if("lianxishouji"!=s){t.next=52;break}return a.ruleForm.lianxishouji=o[s],a.ro.lianxishouji=!0,t.abrupt("continue",18);case 52:if("xiangpian"!=s){t.next=56;break}return a.ruleForm.xiangpian=o[s],a.ro.xiangpian=!0,t.abrupt("continue",18);case 56:t.next=18;break;case 58:a.styleChange();case 59:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},xiangpianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.xiangpian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function a(){var t,i,u,o,s,c,g,l,d,f;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.ruleForm.dianzhangzhanghao){a.next=3;break}return n.$utils.msg("店长账号不能为空"),a.abrupt("return");case 3:if(n.ruleForm.mima){a.next=6;break}return n.$utils.msg("密码不能为空"),a.abrupt("return");case 6:if(n.ruleForm.dianpumingcheng){a.next=9;break}return n.$utils.msg("店铺名称不能为空"),a.abrupt("return");case 9:if(n.ruleForm.dianpudizhi){a.next=12;break}return n.$utils.msg("店铺地址不能为空"),a.abrupt("return");case 12:if(!n.ruleForm.youxiang||n.$validate.isEmail(n.ruleForm.youxiang)){a.next=15;break}return n.$utils.msg("邮箱应输入邮件格式"),a.abrupt("return");case 15:if(!n.ruleForm.lianxishouji||n.$validate.isMobile(n.ruleForm.lianxishouji)){a.next=18;break}return n.$utils.msg("联系手机应输入手机格式"),a.abrupt("return");case 18:if(!n.cross){a.next=34;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){a.next=34;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){a.next=30;break}for(g in c)g==o&&(c[g]=s);return l=e.getStorageSync("crossTable"),a.next=28,n.$api.update("".concat(l),c);case 28:a.next=34;break;case 30:t=Number(e.getStorageSync("userid")),i=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 34:if(!i||!t){a.next=56;break}return n.ruleForm.crossuserid=t,n.ruleForm.crossrefid=i,d={page:1,limit:10,crossuserid:t,crossrefid:i},a.next=40,n.$api.list("dianzhang",d);case 40:if(f=a.sent,!(f.data.total>=u)){a.next=46;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 46:if(!n.ruleForm.id){a.next=51;break}return a.next=49,n.$api.update("dianzhang",n.ruleForm);case 49:a.next=53;break;case 51:return a.next=53,n.$api.add("dianzhang",n.ruleForm);case 53:n.$utils.msgBack("提交成功");case 54:a.next=64;break;case 56:if(!n.ruleForm.id){a.next=61;break}return a.next=59,n.$api.update("dianzhang",n.ruleForm);case 59:a.next=63;break;case 61:return a.next=63,n.$api.add("dianzhang",n.ruleForm);case 63:n.$utils.msgBack("提交成功");case 64:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),r=n.getMonth()+1,t=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(a,"-").concat(r,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,a("543d")["default"])},cf51:function(e,n,a){"use strict";(function(e){a("7dff");r(a("66fd"));var n=r(a("7343"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},e674:function(e,n,a){"use strict";var r;a.d(n,"b",(function(){return t})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return r}));var t=function(){var e=this,n=e.$createElement;e._self._c},i=[]},f884:function(e,n,a){"use strict";a.r(n);var r=a("9005"),t=a.n(r);for(var i in r)"default"!==i&&function(e){a.d(n,e,(function(){return r[e]}))}(i);n["default"]=t.a},fa38:function(e,n,a){"use strict";var r=a("4bfe"),t=a.n(r);t.a}},[["cf51","common/runtime","common/vendor"]]]);