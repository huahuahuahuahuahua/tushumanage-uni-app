(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"13e5":function(t,e,n){"use strict";n.r(e);var i=n("7cec"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"30b7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{showBackButton:!1,showHomeButton:!1}},props:{hasHomeButton:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#fff"},titleColor:{type:String,default:"#000"},hasBottomLine:{type:Boolean,default:!0},bottomlineColor:{type:String,default:"#F2F2F2"}},methods:{btnBack:function(){uni.navigateBack({})},btnHome:function(){uni.navigateBack({delta:999})}},mounted:function(){var t=getCurrentPages();uni.getSystemInfoSync();t.length>1&&(this.showBackButton=!0),t.length>2&&(this.showHomeButton=!0)}};e.default=i},"3a61":function(t,e,n){"use strict";n.r(e);var i=n("462b"),o=n("b16c");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("d5b5");var u,s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"d332863e",null,!1,i["a"],u);e["default"]=r.exports},"3d24":function(t,e,n){"use strict";n.r(e);var i=n("a1c6"),o=n("13e5");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var u,s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"03e1f401",null,!1,i["a"],u);e["default"]=r.exports},"462b":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{height:"44px","line-height":"44px",width:"100%",transition:"background .4s,color .4s"},style:{background:t.backgroundColor,color:t.titleColor}},[n("v-uni-view",{staticStyle:{display:"flex",width:"100%","vertical-align":"middle"}},[n("v-uni-view",{staticStyle:{width:"94px",height:"44px","line-height":"44px","padding-left":"15px","font-size":"18px"}},[t._t("leftItems",[t.showBackButton?n("v-uni-text",{staticClass:"iconfont icon-back leftitem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnBack.apply(void 0,arguments)}}}):t._e(),t.showHomeButton&&t.hasHomeButton?n("v-uni-text",{staticClass:"iconfont icon-homefill leftitem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnHome.apply(void 0,arguments)}}}):t._e()])],2),n("v-uni-view",{staticClass:"navTitle"},[t._t("title")],2),n("v-uni-view",{staticStyle:{width:"94px",height:"44px"}})],1),n("v-uni-view",{staticStyle:{height:"1px",width:"100%"},style:{background:t.bottomlineColor,display:t.hasBottomLine?"":"none"}})],1)},a=[]},4816:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ezpage",{attrs:{title:"标题"}},[n("v-uni-view",{attrs:{slot:"contentSection"},slot:"contentSection"},[n("div",[t._v("关于此项目："),n("p",[t._v("路径源地址：")])])])],1)},a=[]},5924:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("3d24")),a={components:{ezpage:o.default},data:function(){return{}},methods:{}};e.default=a},"7cec":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("3a61")),a={components:{eznavigationbar:o.default},data:function(){return{paddingTop:0,paddingBottom:0,height:"100%",statusBarHeight:22}},props:{title:{type:String,default:""},showNavigation:{type:Boolean,default:!0},navigationHasBottomLine:{type:Boolean,default:!0},statusBackground:{type:String,default:"#fff"}},computed:{},methods:{autoPaddingTop:function(){return this.showNavigation?44+this.sysInfo.statusBarHeight:this.sysInfo.statusBarHeight},autoPaddingBottom:function(){return this.$slots.tabSection?50+(this.sysInfo.safeArea?34:0):0}},mounted:function(){this.sysInfo=uni.getSystemInfoSync(),this.height=this.sysInfo.screenHeight+"px",this.paddingTop=this.autoPaddingTop(),this.paddingBottom=this.autoPaddingBottom(),this.statusBarHeight=this.sysInfo.statusBarHeight}};e.default=a},a199:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".leftitem[data-v-d332863e]{margin-right:20px}.navTitle[data-v-d332863e]{flex:1;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:44px;line-height:44px}",""]),t.exports=e},a1c6:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{position:"relative",height:"100%"}},[n("v-uni-view",{staticStyle:{width:"100%",position:"fixed",transition:"all .4s","z-index":"999999"},style:{height:t.statusBarHeight+"px",background:t.statusBackground}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showNavigation,expression:"showNavigation"}],staticStyle:{width:"100%",position:"fixed",top:"0px",left:"0px","z-index":"999998"},style:{paddingTop:t.statusBarHeight+"px"}},[t._t("navigationSection",[n("eznavigationbar",{attrs:{hasBottomLine:t.navigationHasBottomLine}},[n("v-uni-view",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.title))])],1)])],2),n("v-uni-view",{staticStyle:{width:"100%",height:"100%",position:"relative"},style:{paddingTop:t.paddingTop+"px",paddingBottom:t.paddingBottom+"px"}},[t._t("contentSection")],2),n("v-uni-view",{staticStyle:{width:"100%",position:"fixed","z-index":"998",bottom:"0"}},[t._t("tabSection")],2)],1)},a=[]},b16c:function(t,e,n){"use strict";n.r(e);var i=n("30b7"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},c18b:function(t,e,n){"use strict";n.r(e);var i=n("5924"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},d5b5:function(t,e,n){"use strict";var i=n("ebe3"),o=n.n(i);o.a},ebe3:function(t,e,n){var i=n("a199");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("1442bc3e",i,!0,{sourceMap:!1,shadowMode:!1})},f4fb:function(t,e,n){"use strict";n.r(e);var i=n("4816"),o=n("c18b");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var u,s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"332eb32a",null,!1,i["a"],u);e["default"]=r.exports}}]);