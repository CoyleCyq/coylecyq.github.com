(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{527:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"querystring模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querystring模块","aria-hidden":"true"}},[t._v("#")]),t._v(" querystring模块")]),t._v(" "),a("p",[t._v("querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具。 它可以使用以下方式访问：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" querystring "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'querystring'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("a",{attrs:{href:"parse"}},[t._v("parse")]),t._v(" : "),a("code",[t._v("querystring.parse(str[, sep[, eq[, options]]])")]),t._v(" 将 URL 查询字符串 str 解析为对象。")]),t._v(" "),a("li",[a("a",{attrs:{href:"#stringify"}},[t._v("stringify")]),t._v(" : "),a("code",[t._v("querystring.stringify(obj[, sep[, eq[, options]]])")]),t._v(" 将对象解析为字符串")])]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"escape"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#escape","aria-hidden":"true"}},[t._v("#")]),t._v(" escape")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("querystring.escape(str)")]),t._v("  对给定的 str 执行 URL 百分比编码。")])]),t._v(" "),a("p",[a("code",[t._v("querystring.escape()")]),t._v(" 方法由"),a("code",[t._v("querystring.stringify()")]),t._v(" 使用，通常不会直接使用。 它的导出主要是为了允许应用程序代码在必要时通过将 "),a("code",[t._v("querystring.escape")]),t._v(" 指定给替代函数来提供替换的百分比编码实现。")]),t._v(" "),a("h3",{attrs:{id:"parse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parse","aria-hidden":"true"}},[t._v("#")]),t._v(" parse")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("querystring.parse(str[, sep[, eq[, options]]])")]),t._v(" 将 URL 查询字符串 str 解析为对象。\n"),a("ul",[a("li",[a("code",[t._v("str <string>")]),t._v(" 要解析的 URL 查询字符串。")]),t._v(" "),a("li",[a("code",[t._v("sep <string>")]),t._v(" 用于在查询字符串中分隔键值对的子字符串。默认值: "),a("code",[t._v("'&'")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("eq <string>")]),t._v(" 用于在查询字符串中分隔键和值的子字符串。默认值: "),a("code",[t._v("'='")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("options <object>")]),t._v(" 其他配置见官方文档")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查询字符串 'foo=bar&abc=xyz&abc=123' 被解析为：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  abc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xyz'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("querystring.parse()")]),t._v("方法返回的对象不是原型继承自 JavaScript Object。 这意味着典型的 Object 方法如 "),a("code",[t._v("obj.toString()")]),t._v("、"),a("code",[t._v("obj.hasOwnProperty()")]),t._v(" 等都没有定义并且不起作用。")]),t._v(" "),a("h3",{attrs:{id:"stringify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stringify","aria-hidden":"true"}},[t._v("#")]),t._v(" stringify")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("querystring.stringify(obj[, sep[, eq[, options]]])")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("obj <Object>")]),t._v(" 要序列化为 URL 查询字符串的对象。")]),t._v(" "),a("li",[a("code",[t._v("sep <string>")]),t._v(" 用于在查询字符串中分隔键值对的子字符串。默认值: '&'。")]),t._v(" "),a("li",[a("code",[t._v("eq <string>")]),t._v(" 用于在查询字符串中分隔键和值的子字符串。默认值: '='。")]),t._v(" "),a("li",[a("code",[t._v("options <object>")]),t._v(" 其他配置见官方文档")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("querystring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qux'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quux'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" corge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 'foo=bar&baz=qux&baz=quux&corge='")]),t._v("\n\nquerystring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qux'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("';'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("':'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 'foo:bar;baz:qux'")]),t._v("\n")])])]),a("h3",{attrs:{id:"unescape"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unescape","aria-hidden":"true"}},[t._v("#")]),t._v(" unescape")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("querystring.unescape(str)")])])]),t._v(" "),a("p",[t._v("querystring.unescape() 方法在给定的 str 上执行 URL 百分比编码字符的解码。")]),t._v(" "),a("p",[a("code",[t._v("uerystring.unescape()")]),t._v(" 方法由"),a("code",[t._v("querystring.parse()")]),t._v(" 使用，通常不会直接使用它。 它的导出主要是为了允许应用程序代码在必要时通过将 querystring.unescape 分配给替代函数来提供替换的解码实现。")]),t._v(" "),a("p",[t._v("默认情况下， querystring.unescape() 方法将尝试使用 JavaScript 内置的 decodeURIComponent() 方法进行解码。 如果失败，将使用更安全的不会丢失格式错误的 URL 的等价方法。")])])},[],!1,null,null,null);s.default=e.exports}}]);