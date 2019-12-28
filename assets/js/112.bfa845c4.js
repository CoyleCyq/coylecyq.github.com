(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{609:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"导读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导读","aria-hidden":"true"}},[t._v("#")]),t._v(" 导读")]),t._v(" "),s("h2",{attrs:{id:"认识数据驱动模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识数据驱动模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 认识数据驱动模式")]),t._v(" "),s("p",[t._v("开始接触前端编程的基本上都是先学习 DOM 节点操作，jQuery 在这一领域上一度成为了标准，所以在前端编程的领域中，jQuery 几乎是每个开发者的标配。随着前后端分离的成熟，产品或项目都趋于分布式部署，开发者已不满足于操作 DOM 节点， 设计模式便慢慢的被前端化。")]),t._v(" "),s("p",[t._v("数据驱动的设计模式在思维逻辑上与 DOM 节点操作完全不一样。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- html --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("div1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{message}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("br"),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM 节点操作")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'节点被动改变'")]),t._v("  \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vue 数据驱动： 当 message 发生改变的时候，span 会相应的发生改变，而不需要手动去改变 span。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我是通过映射显示的文本'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"认识-mvvm-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识-mvvm-模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 认识 MVVM 模式")]),t._v(" "),s("p",[t._v("M：Model，称之为数据模型，在前端以对象的形式表现。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我就是一个数据模型'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("V：View，视图，也就是 HTML")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("我是视图"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("VM：ViewModel，就是连接数据和视图的桥梁，当 Model 发生改变的时候，ViewModel 便将数据映射到视图。")]),t._v(" "),s("p",[t._v("那么数据驱动模式和 MVVM 模式有什么关系，换句话说，MVVM 是数据驱动模式的一种实现，Vue 是 MVVM 的一种实现。")]),t._v(" "),s("h2",{attrs:{id:"相关连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 相关连接")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue2.x官方文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-router官方文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex官方文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://ssr.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue服务器端渲染"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-CLI3.x文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress文档"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"ui框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ui框架","aria-hidden":"true"}},[t._v("#")]),t._v(" UI框架")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("element-ui"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://doc.vux.li/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vux"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-element-admin"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://vuetifyjs.com/zh-Hans/getting-started/quick-start",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuetify"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=n.exports}}]);