webpackJsonp([1],{0:function(t,e){},"7zck":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("mvHQ"),i=s.n(n),o=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},a,!1,function(t){s("o8nZ")},null,null).exports,l=s("/ocq"),c=s("bOdI"),v=s.n(c),d={data:function(){var t;return t={drawer:null,time:"",testset:null,testtime:null,testsets:[],testing:null,result:null},v()(t,"testtime",0),v()(t,"times",[{name:"10秒",time:10},{name:"1分钟",time:60},{name:"5分钟",time:300},{name:"10分钟",time:600}]),v()(t,"datatypes",[{name:"整数",type:"int"},{name:"小数",type:"float"},{name:"身份证",type:"id"}]),v()(t,"datatype",null),v()(t,"codeFontSize",this.getStore("codeFontSize")||30),v()(t,"inputFontSize",this.getStore("inputFontSize")||20),t},methods:{ticks:function(){if(this.testing){var t=Math.floor((Date.now()-this.testing.starttime)/1e3);if(t>=this.testtime.time){var e=this.testing;e.key=new String(Math.floor(Date.now())),e.testtime=this.testtime,e.testset=this.testset,e.time=(new Date).toLocaleString(),this.result=e,this.testing=null;var s=this.getStore("results")||[];return s.push(e),void this.setStore("results",s)}var n=Math.floor(t/60),i=t%60;this.time=new String((n<10?"0":"")+n+":"+(i<10?"0":"")+i)}},keydown:function(t){if(this.testing)if(13==t.keyCode)this.onInput(this.testing.inputs.join("")),this.testing.inputs=[];else if(8==t.keyCode)this.testing.inputs.pop();else{var e=void 0===t.key?String.fromCharCode(t.keyCode):t.key;this.testing.inputs.push(e)}},startTest:function(){if(this.testing={correct:0,mistake:0,code:"",inputs:[],result:[],starttime:Date.now()},"random"==this.testset.type){for(var t=this.datatype.type,e=function(t){return(t<=10?"0":"")+t},s=function(){switch(t){case"int":return(1e5*Math.random()).toFixed(0);case"float":return(1e5*Math.random()).toFixed(2).replace(/\.0+$/,"");case"id":return""+(1e5+Math.floor(9e5*Math.random()))+(1950+Math.floor(50*Math.random()))+e(Math.floor(12*Math.random()+1-1e-4))+e(Math.floor(29*Math.random()+1))+Math.floor(9e3*Math.random()+1e3-.001)}},n=[],i=0;i<200;++i)n.push(s());this.testset.codes=n}var o={testtime:this.testtime,testset:this.testset,datatype:this.datatype};this.setStore("defaultset",o),this.nextCode()},nextCode:function(){var t=Math.floor(Math.random()*this.testset.codes.length-1e-4);this.testing.code=this.testset.codes[t]},stopTest:function(){this.testing=null},onInput:function(t){var e=this.testing.code;console.log(t),this.testing.result.push({test:e,code:t}),t==e?this.testing.correct++:this.testing.mistake++;var s=this.testing.correct?this.testing.correct/(this.testing.correct+this.testing.mistake):0;this.testing.accuracy=s,this.nextCode()}},mounted:function(){var t=this,e=this;this.ticktm=setInterval(this.ticks,1e3),this.ticks(),window.onkeydown=function(t){e.keydown(t)},this.getTestSets(function(s){e.testsets=s;var n=e.getStore("defaultset");n&&(e.testtime=e.times.find(function(t,e){return n.testtime&&t.time==n.testtime.time}),e.testset=e.testsets.find(function(t,e){return n.testset&&t.key==n.testset.key}),e.datatype=e.datatypes.find(function(t,e){return n.datatype&&t.type==n.datatype.type})),console.log(t.testset),console.log(t.testtime)})},destroyed:function(){clearInterval(this.ticktm),window.onkeydown=null},props:{}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"inspire"}},[s("v-navigation-drawer",{attrs:{fixed:!0,clipped:!0},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list",{attrs:{dense:""}},[s("v-list-tile",{on:{click:function(e){t.push("/setting")}}},[s("v-list-tile-action",[s("v-icon",[t._v("data_usage")])],1),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(t.T("应用设置")))])],1)],1),t._v(" "),s("v-list-tile",{on:{click:function(e){t.push("/history")}}},[s("v-list-tile-action",[s("v-icon",[t._v("history")])],1),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(t.T("历史记录")))])],1)],1),t._v(" "),s("v-list-tile",{on:{click:function(e){t.push("/about")}}},[s("v-list-tile-action",[s("v-icon",[t._v("info")])],1),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(t.T("关于应用")))])],1)],1)],1)],1),t._v(" "),s("v-toolbar",{attrs:{fixed:"",app:""}},[s("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),s("v-toolbar-title",[t._v(t._s(t.T("键盘练习器")))])],1),t._v(" "),s("v-content",[t.testing?s("v-container",{attrs:{fluid:"","fill-height":""}},[s("v-layout",{staticStyle:{"flex-direction":"column"},attrs:{"justify-center":"","align-center":""}},[s("div",{staticClass:"text-xl-center mx-auto"},[s("span",{style:{fontSize:t.codeFontSize+"px"}},[t._v(t._s(t.testing.code))])]),t._v(" "),s("div",{staticClass:"text-xl-center mx-auto",staticStyle:{border:"1px solid #eee","min-width":"200px","text-align":"center"}},[s("span",{staticStyle:{padding:"5px",display:"inline-block"},style:{fontSize:t.inputFontSize+"px"}},[t._v(t._s(t.testing.inputs.join("")||" "))])]),t._v(" "),s("div",{staticStyle:{height:"80px"}}),t._v(" "),s("v-btn",{attrs:{color:"secondary"},on:{click:function(e){t.stopTest()}}},[t._v(t._s(t.T("停止测试"))+"\n          "),s("v-icon",{attrs:{dark:"",right:""}},[t._v("stop")])],1)],1)],1):t._e(),t._v(" "),t.result?s("v-container",{attrs:{fluid:"","fill-height":""}},[s("v-layout",{attrs:{column:"",wrap:""}},[s("v-card",[s("v-card-title",[s("h4",[t._v(t._s(t.result.time))])]),t._v(" "),s("v-divider"),t._v(" "),s("v-list",{attrs:{dense:""}},[s("v-list-tile",[s("v-list-tile-content",[t._v("数据")]),t._v(" "),s("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(t.result.testset.name))])],1),t._v(" "),s("v-list-tile",[s("v-list-tile-content",[t._v("时间")]),t._v(" "),s("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(t.result.testtime.name))])],1),t._v(" "),s("v-list-tile",[s("v-list-tile-content",[t._v("总数量")]),t._v(" "),s("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(t.result.correct+t.result.mistake))])],1),t._v(" "),s("v-list-tile",[s("v-list-tile-content",[t._v("正确数")]),t._v(" "),s("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(t.result.correct))])],1),t._v(" "),s("v-list-tile",[s("v-list-tile-content",[t._v("错误数")]),t._v(" "),s("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(t.result.mistake))])],1),t._v(" "),s("v-list-tile",[s("v-list-tile-content",[t._v("正确率")]),t._v(" "),s("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(100*(t.result.accuracy||0))+"%")])],1)],1)],1),t._v(" "),t.testset&&t.testtime?s("div",{staticClass:"text-xs-center mx-auto"},[s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.result=null}}},[t._v(t._s(t.T("返回"))+"\n            ")])],1):t._e()],1)],1):t._e(),t._v(" "),t.testing||t.result?t._e():s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs6:""}},[s("v-subheader",[t._v(t._s(t.T("测试时间")))])],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("v-select",{attrs:{items:t.times,"item-text":"name",label:t.T("选择"),"single-line":""},model:{value:t.testtime,callback:function(e){t.testtime=e},expression:"testtime"}})],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("v-subheader",[t._v(t._s(t.T("测试数据")))])],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("v-select",{attrs:{items:t.testsets,"item-text":"name",label:t.T("选择"),"single-line":""},model:{value:t.testset,callback:function(e){t.testset=e},expression:"testset"}})],1),t._v(" "),t.testset&&"random"==t.testset.type?s("v-flex",{attrs:{xs6:""}},[s("v-subheader",[t._v(t._s(t.T("数据类型")))])],1):t._e(),t._v(" "),t.testset&&"random"==t.testset.type?s("v-flex",{attrs:{xs6:""}},[s("v-select",{attrs:{items:t.datatypes,"item-text":"name",label:t.T("选择"),"single-line":""},model:{value:t.datatype,callback:function(e){t.datatype=e},expression:"datatype"}})],1):t._e(),t._v(" "),t.testset&&t.testtime?s("div",{staticClass:"text-xs-center mx-auto"},[s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.startTest()}}},[t._v(t._s(t.T("开始测试"))+"\n            "),s("v-icon",{attrs:{dark:"",right:""}},[t._v("keyboard")])],1)],1):t._e()],1)],1)],1),t._v(" "),s("v-footer",{staticClass:"text-xs-center",attrs:{app:""}},[t.testing?s("span",{staticStyle:{padding:"0 5px"}},[t._v(t._s(t.T("时间 {0} 正确 {1} 错误 {2}",t.time,t.testing.correct,t.testing.mistake))+" ")]):t._e()])],1)},staticRenderFns:[]},p=s("VU/8")(d,u,!1,null,null,null).exports,_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"inspire"},on:{keydown:function(e){t.keydown(e)}}},[s("v-toolbar",{attrs:{fixed:"",app:""}},[s("v-btn",{attrs:{icon:""},on:{click:function(e){t.back()}}},[s("v-icon",[t._v("arrow_back")])],1),t._v(" "),s("v-toolbar-title",[t._v(t._s(t.T("数据设置")))])],1),t._v(" "),s("v-content",[s("v-card",[s("v-card-text",{staticStyle:{"text-align":"center"}},[s("span",{style:{fontSize:t.codeFontSize+"px"}},[t._v(t._s(t.T("显示字体大小:{0}",t.codeFontSize)))]),t._v(" "),s("v-slider",{attrs:{step:"1",min:"12",max:"50"},model:{value:t.codeFontSize,callback:function(e){t.codeFontSize=e},expression:"codeFontSize"}})],1)],1),t._v(" "),s("v-card",[s("v-card-text",{staticStyle:{"text-align":"center"}},[s("span",{style:{fontSize:t.inputFontSize+"px"}},[t._v(t._s(t.T("输入字体大小:{0}",t.inputFontSize)))]),t._v(" "),s("v-slider",{attrs:{step:"1",min:"12",max:"50"},model:{value:t.inputFontSize,callback:function(e){t.inputFontSize=e},expression:"inputFontSize"}})],1)],1)],1)],1)},staticRenderFns:[]},h=s("VU/8")({data:function(){return{codeFontSize:this.getStore("codeFontSize")||30,inputFontSize:this.getStore("inputFontSize")||20}},methods:{},mounted:function(){var t=this;this.getTestSets(function(e){t.testsets=e})},destroyed:function(){this.setStore("codeFontSize",this.codeFontSize),this.setStore("inputFontSize",this.inputFontSize)},props:{}},_,!1,null,null,null).exports,f={data:function(){return{time:"",tests:["1234","7348","0948"],testing:null}},methods:{ticks:function(){var t=Math.floor((Date.now()-this.starttm)/1e3),e=Math.floor(t/60),s=t%60;this.time=new String((e<10?"0":"")+e+":"+(s<10?"0":"")+s)},keydown:function(t){if(this.testing)if(console.log(t),13==t.keyCode)this.onInput(this.testing.inputs.join("")),this.testing.inputs=[];else{var e=String.fromCharCode(t.keyCode);this.testing.inputs.push(e)}},startTest:function(){this.testing={correct:0,mistake:0,code:"2323",inputs:[],result:[]}},onInput:function(t){var e=this.testing.code;console.log(t),this.testing.result.push({test:e,code:t}),t==e?this.testing.correct++:this.testing.mistake++}},mounted:function(){var t=this;this.starttm=Date.now(),this.ticktm=setInterval(this.ticks,1e3),this.ticks(),window.onkeydown=function(e){t.keydown(e)}},destroyed:function(){clearInterval(this.ticktm),window.onkeydown=null},props:{}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"inspire"},on:{keydown:function(e){t.keydown(e)}}},[s("v-toolbar",{attrs:{fixed:"",app:""}},[s("v-btn",{attrs:{icon:""},on:{click:function(e){t.back()}}},[s("v-icon",[t._v("arrow_back")])],1),t._v(" "),s("v-toolbar-title",[t._v(t._s(t.T("键盘测试")))])],1),t._v(" "),s("v-content",[t.testing?s("v-container",{attrs:{fluid:"","fill-height":""}},[s("v-layout",{staticStyle:{"flex-direction":"column"},attrs:{"justify-center":"","align-center":""}},[s("div",{staticClass:"text-xl-center mx-auto"},[s("span",{staticStyle:{"font-size":"30px"}},[t._v(t._s(t.testing.code))])]),t._v(" "),s("div",{staticClass:"text-xl-center mx-auto",staticStyle:{border:"1px solid #eee","min-width":"200px",height:"32px","text-align":"center"}},t._l(t.testing.inputs,function(e){return s("span",{staticStyle:{"font-size":"20px"}},[t._v(t._s(e))])}))])],1):t._e(),t._v(" "),t.testing?t._e():s("v-container",{attrs:{fluid:"","fill-height":""}},[s("div",{staticClass:"text-xs-center mx-auto"},[s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.startTest()}}},[t._v(t._s(t.T("开始"))+"\n                    "),s("v-icon",{attrs:{dark:"",right:""}},[t._v("keyboard")])],1)],1)])],1),t._v(" "),s("v-footer",{staticClass:"text-xs-center",attrs:{app:""}},[t.testing?s("span",[t._v(t._s(t.T("时间 {0} 正确 {1} 错误 {2}",t.time,t.testing.correct,t.testing.mistake))+" ")]):t._e()])],1)},staticRenderFns:[]},g=s("VU/8")(f,m,!1,null,null,null).exports,y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"inspire"},on:{keydown:function(e){t.keydown(e)}}},[s("v-toolbar",{attrs:{fixed:"",app:""}},[s("v-btn",{attrs:{icon:""},on:{click:function(e){t.back()}}},[s("v-icon",[t._v("arrow_back")])],1),t._v(" "),s("v-toolbar-title",[t._v(t._s(t.T("关于应用")))])],1),t._v(" "),s("v-content",[s("v-container",{attrs:{fluid:"","fill-height":""}},[s("v-layout",{staticStyle:{"flex-direction":"row"},attrs:{fluid:"","justify-center":"","align-center":""}},[s("v-card",{staticStyle:{"flex-grow":"1"},attrs:{fluid:""}},[s("v-card-media",{attrs:{src:"https://cdn-qn.huaeb.com/sellmall/20180528/FuHW6ao1hxMOPITJAaoAyIfZluBC.jpg",height:"300px"}}),t._v(" "),s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline mb-0"},[t._v("FOR 冉小娟")])])]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{flat:"",icon:"",color:"blue lighten-2"}},[s("v-icon",[t._v("thumb_up")])],1),t._v(" "),s("v-btn",{attrs:{flat:"",icon:"",color:"red lighten-2"}},[s("v-icon",[t._v("thumb_down")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},x=s("VU/8")(null,y,!1,null,null,null).exports,k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"inspire"},on:{keydown:function(e){t.keydown(e)}}},[s("v-toolbar",{attrs:{fixed:"",app:""}},[s("v-btn",{attrs:{icon:""},on:{click:function(e){t.back()}}},[s("v-icon",[t._v("arrow_back")])],1),t._v(" "),s("v-toolbar-title",[t._v(t._s(t.T("数据设置")))])],1),t._v(" "),s("v-content",[s("v-card",[s("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[s("v-layout",{attrs:{row:"",wrap:""}},t._l(t.testsets,function(e){return s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"white--text",attrs:{color:"blue darken-2"}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",{staticClass:"headline"},[t._v(t._s(e.name))])]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{flat:"",dark:""}},[t._v("\n                                    "+t._s(t.T("{0} 条数据",e.codes.length))+"\n                                ")])],1)],1)],1)}))],1)],1),t._v(" "),s("v-btn",{staticStyle:{position:"fixed",right:"10px",bottom:"10px"},attrs:{fab:"",dark:"",color:"red"},on:{click:t.addSet}},[s("v-icon",{attrs:{dark:""}},[t._v("add")])],1)],1)],1)},staticRenderFns:[]},S=s("VU/8")({data:function(){return{testsets:[]}},methods:{addSet:function(){this.testsets.push({name:"新测试",codes:[]})}},mounted:function(){var t=this;this.getTestSets(function(e){t.testsets=e})},destroyed:function(){},props:{}},k,!1,null,null,null).exports,b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"inspire"},on:{keydown:function(e){t.keydown(e)}}},[s("v-toolbar",{attrs:{fixed:"",app:""}},[s("v-btn",{attrs:{icon:""},on:{click:function(e){t.back()}}},[s("v-icon",[t._v("arrow_back")])],1),t._v(" "),s("v-toolbar-title",[t._v(t._s(t.T("历史记录")))])],1),t._v(" "),s("v-content",[s("v-layout",{attrs:{column:"",wrap:""}},t._l(t.results,function(e){return s("v-card",[s("v-card-title",[s("h4",[t._v(t._s(e.time))])]),t._v(" "),s("v-divider"),t._v(" "),s("v-list",{attrs:{dense:""}},[s("v-list-tile",[s("v-list-tile-content",[t._v("数据")]),t._v(" "),s("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.testset.name))])],1),t._v(" "),s("v-list-tile",[s("v-list-tile-content",[t._v("时间")]),t._v(" "),s("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.testtime.name))])],1),t._v(" "),s("v-list-tile",[s("v-list-tile-content",[t._v("总数量")]),t._v(" "),s("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.correct+e.mistake))])],1),t._v(" "),s("v-list-tile",[s("v-list-tile-content",[t._v("正确数")]),t._v(" "),s("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.correct))])],1),t._v(" "),s("v-list-tile",[s("v-list-tile-content",[t._v("错误数")]),t._v(" "),s("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.mistake))])],1),t._v(" "),s("v-list-tile",[s("v-list-tile-content",[t._v("正确率")]),t._v(" "),s("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(100*(e.accuracy||0))+"%")])],1)],1)],1)})),t._v(" "),s("v-btn",{staticStyle:{position:"fixed",right:"10px",bottom:"10px"},attrs:{fab:"",dark:"",color:"red"},on:{click:t.deleteAll}},[s("v-icon",{attrs:{dark:""}},[t._v("delete")])],1)],1)],1)},staticRenderFns:[]},w=s("VU/8")({data:function(){return{results:this.getStore("results")||[]}},methods:{deleteAll:function(){this.setStore("results",[]),this.results=[]}},mounted:function(){},destroyed:function(){},props:{}},b,!1,null,null,null).exports;o.a.use(l.a);var T=new l.a({routes:[{path:"/",name:"Index",component:p},{path:"/test",name:"Test",component:g},{path:"/setting",name:"Setting",component:h},{path:"/testsets",name:"TestSets",component:S},{path:"/about",name:"About",component:x},{path:"/history",name:"History",component:w}]}),C=s("3EgV"),F=s.n(C),z=(s("7zck"),s("8+8L"),s("IHMs")),M=s.n(z);o.a.prototype.T=function(t){for(var e=t,s=1;s<arguments.length;++s){var n="{"+(s-1)+"}",i=arguments[s];e=e.replace(n,i)}return e},o.a.prototype.push=function(t){":back"===t?this.back():this.$router.push(t)},o.a.prototype.back=function(){this.$router.go(-1)},o.a.prototype.getStore=function(t){var e=window.localStorage.getItem(t);if("string"!=typeof e)return e;try{return JSON.parse(e)}catch(t){return e}},o.a.prototype.setStore=function(t,e){"string"!=typeof e&&(e=i()(e)),window.localStorage.setItem(t,e)},o.a.prototype.getTestSets=function(t){var e=this.getStore("testsets");e||(e=[{key:"t1",name:"内置传票",codes:["450.64","016.75","435.19","162.58","331.20","879.60","654.07","195.83","942.16","323.10","221.39","136.84","123.50","392.35","916.23","970.18","548.73","109.26","293.76","514.23","321.53","238.12","976.04","085.73","746.29","920.15","340.89","141.86","205.38","663.58","927.16","932.90","420.87","857.09","581.37","450.64","054.73","635.19","367.84","331.20","901.34","873.29","647.18","312.69","353.14","275.86","275.08","635.34","344.19","738.22","714.20","321.58","392.35","489.27","628.79","851.34","237.59","563.10","472.85","496.13","520.19","942.96","864.73","523.04","279.63","428.46","137.60","012.84","063.15","341.29","740.32","110.41","296.57","804.21","609.12","933.25","931.82","740.66","037.58","265.47","812.93","398.47","431.04","905.47","827.50","983.69","564.07","763.89","496.37","802.64","862.24","738.52","521.48","041.92","683.07","095.18","832.16","167.91","409.53","361.82","145.06","187.52","466.71","234.18","961.03","361.28","405.36","096.87","541.90","169.34","215.32","983.70","213.07","573.08","924.57","621.97","092.38","082.47","733.65","785.31","704.12","467.05","252.43","342.01","045.78","831.50","910.05","968.78","186.90","365.19","878.40","849.38","531.24","314.52","787.64","089.64","516.40","192.85","170.96","088.08","624.87","531.78","218.70","461.97","523.10","136.05","634.69","816.72","452.38","703.24","703.12","918.65","895.32","827.94","962.78","831.83","176.85","497.53","976.38","342.60","604.13","281.10","716.80","645.39","431.54","958.10","825.67","732.41","413.91","762.93","258.79","986.10","075.63","314.90","276.58","581.41","709.31","343.10","908.79","580.75","304.72","546.10","758.69","719.63","719.26","412.42","839.40","251.79","327.46","641.25","984.85","821.59","428.19","291.87","673.89","421.38","923.76","061.43","539.08","567.39"]},{key:"t2",name:"随机数据",codes:[],type:"random"}]),t&&t(e)},o.a.prototype.setTestSets=function(t){this.setStore("testsets",t)},o.a.config.productionTip=!1,o.a.use(l.a),o.a.use(F.a,{theme:{primary:M.a.red.darken1,secondary:M.a.red.lighten4,accent:M.a.indigo.base}}),new o.a({el:"#app",router:T,components:{App:r},template:"<App/>"})},o8nZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2bed7127a19af795972d.js.map