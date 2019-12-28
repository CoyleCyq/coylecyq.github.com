(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{571:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_15-ajax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-ajax","aria-hidden":"true"}},[t._v("#")]),t._v(" 15 Ajax")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%BA%86%E8%A7%A3AJAX"}},[t._v("了解AJAX")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#AJAX%E8%AF%B7%E6%B1%82%E6%AD%A5%E9%AA%A4"}},[t._v("AJAX请求步骤")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#XMLHttpRequest%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7%E6%96%B9%E6%B3%95"}},[t._v("XMLHttpRequest对象属性方法")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#XMLHttpRequest%E7%9A%84%E5%85%BC%E5%AE%B9%E6%80%A7"}},[t._v("XMLHttpRequest的兼容性")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#JSON%E6%95%B0%E6%8D%AE%E7%9A%84%E5%BA%94%E7%94%A8"}},[t._v("JSON数据的应用")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#ajax%E8%B7%A8%E5%9F%9F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88"}},[t._v("ajax跨域解决方案")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#JSONP"}},[t._v("JSONP")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#jsonp%E8%AF%B7%E6%B1%82%E5%8E%9F%E7%90%86"}},[t._v("jsonp请求原理")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#CORS"}},[t._v("CORS")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BB%A3%E7%90%86"}},[t._v("服务器代理")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Promise"}},[t._v("Promise")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Promise%E7%9A%84%E4%B8%89%E7%A7%8D%E7%8A%B6%E6%80%81"}},[t._v("Promise的三种状态")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%96%B9%E6%B3%95"}},[t._v("方法")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95"}},[t._v("静态方法")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%8E%9F%E5%9E%8B%E6%96%B9%E6%B3%95"}},[t._v("原型方法")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8"}},[t._v("使用")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%BA%94%E7%94%A8"}},[t._v("应用")])])])])]),t._v(" "),a("h2",{attrs:{id:"了解ajax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解ajax","aria-hidden":"true"}},[t._v("#")]),t._v(" 了解AJAX")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("AJAX")]),t._v(" : "),a("code",[t._v("Asynchronous Javascript And Xml")]),t._v("，Ajax 技术的核心是"),a("code",[t._v("XMLHttpRequest")]),t._v("对象（简称XHR），这是由微软首先引入的一个特性，其他浏览器提供商后来都提供了相同的实现")])]),t._v(" "),a("p",[a("code",[t._v("Ajax")]),t._v("起源：最早出现在2005年的google搜索建议")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Ajax")]),t._v("优点\n"),a("ul",[a("li",[t._v("增加速度：减轻服务器的负担,按需加载数据,最大程度的减少冗余请求")]),t._v(" "),a("li",[t._v("改善的用户体验：局部刷新页面,减少用户等待时间,带来更好的用户体验")]),t._v(" "),a("li",[t._v("页面和数据分离：前后端分离，操作更灵活，后期维护更方便")])])]),t._v(" "),a("li",[t._v("同步与异步？\n"),a("ul",[a("li",[a("p",[t._v("同步：按步骤顺序执行，前面的代码执行完后，后面的代码才会执行")]),t._v(" "),a("blockquote",[a("p",[t._v("做完前一件事情, 才能下一件事情（排队）")])])]),t._v(" "),a("li",[a("p",[t._v("异步：与其他操作同时执行，也叫并发（图片加载，浏览器解析代码）")])])])]),t._v(" "),a("li",[t._v("后端语言和服务器配置\n"),a("ul",[a("li",[t._v("NodeJS + MongoDB")]),t._v(" "),a("li",[t._v("Java(jdk) + tomcat + Oracle")]),t._v(" "),a("li",[t._v("php + Apache + mySQL")]),t._v(" "),a("li",[t._v(".net + IIS + SQL Server")])])])]),t._v(" "),a("h2",{attrs:{id:"ajax请求步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajax请求步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" AJAX请求步骤")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建请求对象,返回一个异步请求对象")]),t._v(" "),a("p",[a("code",[t._v("var request = new XMLHttpRequest();")])])]),t._v(" "),a("li",[a("p",[t._v("处理服务器返回数据")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("设置请求参数，建立与服务器连接")])])]),t._v(" "),a("p",[a("code",[t._v('request.open("get", "http://localhostapi/ajaxtest", true);')])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("向服务器发送请求")])]),t._v(" "),a("p",[a("code",[t._v("request.send(null);")])]),t._v(" "),a("h2",{attrs:{id:"xmlhttprequest对象属性方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xmlhttprequest对象属性方法","aria-hidden":"true"}},[t._v("#")]),t._v(" XMLHttpRequest对象属性方法")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("open(type, url, async)")]),t._v(": 建立与服务器的连接")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("type")]),t._v("：请求的类型 （’get’, ‘post’）")]),t._v(" "),a("li",[a("code",[t._v("url")]),t._v("：数据请求的地址（只能请求同域URL），一般有后端开发人员提供\n"),a("ul",[a("li",[t._v("页面请求地址，API地址两者一定要<同域>")]),t._v(" "),a("li",[t._v("同域：协议，域名，端口三者一致（同源策略）")])])]),t._v(" "),a("li",[a("code",[t._v("async")]),t._v("：是否异步发送请求（true, false）")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("send(data)")]),t._v(": 向服务器发送请求")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("data：可选参数，post请求时才生效，表示发请求时传送的数据字符串。（在某些浏览器中，如果不需要通过请求主体发送数据，则必须传入null）")]),t._v(" "),a("p",[a("code",[t._v("xhr.send('size=20&type=music');")])]),t._v(" "),a("blockquote",[a("p",[t._v("PS:get请求的数据写在api地址后")])])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("setRequestHeader(key, val)")]),t._v("：设置请求头")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("设置请求头必须在open方法调用后设置")]),t._v(" "),a("blockquote",[a("p",[t._v("利用请求投设置POST提交数据的方式：\n"),a("code",[t._v("xhr.setRequestHeader(‘content-type’,”application/x-www-form-urlencoded”);")])])])])])])]),t._v(" "),a("blockquote",[a("p",[t._v("**在请求收到服务器的响应后，响应的数据会自动填充XHR 对象的属性，相关的属性简介如下：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("readyState")]),t._v(" "),a("ul",[a("li",[t._v("0 － （未初始化）尚未调用open()方法。")]),t._v(" "),a("li",[t._v("1 － （启动）已经调用open()方法，但尚未调用send()方法。")]),t._v(" "),a("li",[t._v("2 － （发送）send()方法执行完成，但尚未接收到响应。")]),t._v(" "),a("li",[t._v("3 － （接收）已经接收到部分响应数据。")]),t._v(" "),a("li",[t._v("4 － （完成）响应内容解析完成，可以在客户端调用了")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("只要readyState 属性的值由一个值变成另一个值，都会触发一次readystatechange 事件。必须在调用open()之前指定onreadystatechange事件处理程序才能确保跨浏览器兼容性。")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("responseText")]),t._v("：保存服务器返回的数据（从服务器返回的数据是“字符串”）。")]),t._v(" "),a("li",[a("code",[t._v("status")]),t._v("：响应的HTTP 状态。\n"),a("ul",[a("li",[t._v("200（OK）：服务器成功返回了页面")]),t._v(" "),a("li",[t._v("304（Not Modified）：数据与服务器相同，不需要重服务器请求（直接使用缓存的数据）")]),t._v(" "),a("li",[t._v("400（Bad Request）：语法错误导致服务器不识别")]),t._v(" "),a("li",[t._v("401（Unauthorized）：请求需要用户认证")]),t._v(" "),a("li",[t._v("404（Not found）：请求地址不存在")]),t._v(" "),a("li",[t._v("500（Internal Server Error）：服务器出错或无响应")]),t._v(" "),a("li",[t._v("503（ServiceUnavailable）：由于服务器过载或维护导致无法完成请求")])])]),t._v(" "),a("li",[a("code",[t._v("statusText")]),t._v(": HTTP状态码的说明")])]),t._v(" "),a("h3",{attrs:{id:"xmlhttprequest的兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xmlhttprequest的兼容性","aria-hidden":"true"}},[t._v("#")]),t._v(" XMLHttpRequest的兼容性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" req "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    req "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ie低版本浏览有多种异步请求的实现")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        req "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActiveXObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Msxml2.XMLHTTP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            req "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActiveXObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft.XMLHTTP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你的浏览器太low了，这个世界不适合你'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"json数据的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json数据的应用","aria-hidden":"true"}},[t._v("#")]),t._v(" JSON数据的应用")]),t._v(" "),a("ul",[a("li",[t._v("xml数据（了解）")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("4564523626256562"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("张三"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ul",[a("li",[t._v("json数据(json字符串)")])]),t._v(" "),a("p",[a("code",[t._v('{"id" : 21465461461461, "name": "张三"},[{"id" : 21465461461461, "name": "张三"}]')])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("json数据格式要求：")]),t._v(" "),a("ul",[a("li",[t._v("属性名必须加双引号")]),t._v(" "),a("li",[t._v("字符串必须加双引号")]),t._v(" "),a("li",[t._v("不能有注释")]),t._v(" "),a("li",[t._v("最后不能有多余逗号")])])]),t._v(" "),a("li",[a("p",[t._v("eval方法的使用")]),t._v(" "),a("p",[a("code",[t._v('eval("("+json字符串+")");')])])])]),t._v(" "),a("p",[t._v("它的作用是，将一个普通的json格式的字符串，转换成Json格式的对象\n举例：")]),t._v(" "),a("p",[a("code",[t._v('var list = eval("("+request.responseText+")");')])]),t._v(" "),a("ul",[a("li",[t._v("JSON对象(ES5)\n"),a("ul",[a("li",[a("code",[t._v("JSON.parse()")]),t._v("; //把JSON字符串转成JSON对象(js对象/数组)")]),t._v(" "),a("li",[a("code",[t._v("JSON.stringify()")]),t._v("; //把JSON对象转成JSON字符串")])])]),t._v(" "),a("li",[t._v("加载json文件\n"),a("blockquote",[a("p",[t._v("前后端分离开发时模拟数据")])])])]),t._v(" "),a("h2",{attrs:{id:"ajax跨域解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajax跨域解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" ajax跨域解决方案")]),t._v(" "),a("h3",{attrs:{id:"jsonp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp","aria-hidden":"true"}},[t._v("#")]),t._v(" JSONP")]),t._v(" "),a("p",[t._v("JSONP 是JSON with padding（填充式JSON 或参数式JSON）的简写。")]),t._v(" "),a("p",[t._v("JSONP是一种可以绕过浏览器的安全限制，从不同的域请求数据的方法。使用JSONP需要服务器端提供必要的支持。")]),t._v(" "),a("p",[a("code",[t._v('callback({ "name": "Nicholas" });//此代码在服务器生成')])]),t._v(" "),a("blockquote",[a("p",[t._v("JSONP 由两部分组成：回调函数和数据。回调函数是当响应到来时应该在页面中调用的函数")])]),t._v(" "),a("h4",{attrs:{id:"jsonp请求原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp请求原理","aria-hidden":"true"}},[t._v("#")]),t._v(" jsonp请求原理")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("JSONP的原理是通过"),a("code",[t._v("script")]),t._v("标签发起一个"),a("code",[t._v("GET")]),t._v("请求来取代"),a("code",[t._v("XHR")]),t._v("请求。")]),t._v(" "),a("ul",[a("li",[t._v("JSONP生成一个script标签并插到DOM中，")]),t._v(" "),a("li",[t._v("然后浏览器会接管并向src属性所指向的地址发送请求。")]),t._v(" "),a("li",[t._v("从服务器端返回一段js代码，这段代码就是一个函数的执行（执行时把数据作为参数传入，函数为本地预定义的函数）,这个我们就间接地得到了服务器传出的数据。")])])]),t._v(" "),a("li",[a("p",[t._v("步骤如下：")]),t._v(" "),a("ul",[a("li",[t._v("预定义全局函数"),a("code",[t._v("getData")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("PS:预定义函数必须为全局函数")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("生成script标签，请求服务器地址,并附带函数名")]),t._v(" "),a("p",[a("code",[t._v('<script src="http://localhost:3000/getJSONP?callback=getData">< /script>')])])]),t._v(" "),a("li",[a("p",[t._v("服务器返回js文件（js文件里面包含我们预先定义的函数执行）请求成功后，得到的js文件的代码为")]),t._v(" "),a("p",[a("code",[t._v("getData({name: '王大锤',age: 30,sex: '男',married:false})")])])])])])]),t._v(" "),a("p",[t._v("当这个函数成功调用时，就可以执行预定义函数里的代码（处理返回的数据）")]),t._v(" "),a("blockquote",[a("p",[t._v("jsonp请求不是ajax请求，是利用script标签能加载其他域名的js文件的原理，来实现跨域数据的请求")])]),t._v(" "),a("ul",[a("li",[t._v("缺点\n"),a("ul",[a("li",[t._v("这种方法只支持GET方式，不如POST方式安全")])])])]),t._v(" "),a("h3",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors","aria-hidden":"true"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),a("p",[t._v("CORS是一个W3C标准，全称是”跨域资源共享”（Cross-origin resource sharing），它允许浏览器向跨源服务器发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制")]),t._v(" "),a("blockquote",[a("p",[t._v("CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Access-Control-Allow-Origin")]),t._v("\n该字段是必须的。需要在后端响应头添加词字段，值要么是一个*，表示接受任意域名的请求，要么指定一个域名http://localhost,如想指定若干个请使用判断语句，php代码如下")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$allow_origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.client.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.client2.com'")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("in_array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $allow_origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("Access-Control-Allow-Methods")])]),t._v(" "),a("li",[a("code",[t._v("Access-Control-Allow-Headers")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Methods:POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Headers:x-requested-with,content-type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("h3",{attrs:{id:"服务器代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器代理","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器代理")]),t._v(" "),a("p",[t._v("后端不存在跨域问题，所以可以利用后端间接获取其他网站的数据")]),t._v(" "),a("h2",{attrs:{id:"promise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise","aria-hidden":"true"}},[t._v("#")]),t._v(" Promise")]),t._v(" "),a("p",[t._v("Promise是一个构造函数，所谓的Promise对象，就是通过new Promise()实例化得到的对象，用来传递异步操作的消息。它代表了某个未来才会知道结果的事件（通常是一个异步操作），并且这个事件提供统一的 API，可供进一步处理。")]),t._v(" "),a("h3",{attrs:{id:"promise-的三种状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-的三种状态","aria-hidden":"true"}},[t._v("#")]),t._v(" Promise 的三种状态")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Pending")]),t._v("（未完成）可以理解为Promise对象实例创建时候的初始状态")]),t._v(" "),a("li",[a("code",[t._v("Resolved")]),t._v("（成功） 可以理解为成功的状态")]),t._v(" "),a("li",[a("code",[t._v("Rejected")]),t._v("（失败） 可以理解为失败的状态")])]),t._v(" "),a("h3",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("h4",{attrs:{id:"静态方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 静态方法")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Promise.resolve()")]),t._v(" 将现有对象转为Promise对象")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等价于")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("Promise.reject()")]),t._v(" 返回一个新的 "),a("code",[t._v("Promise")]),t._v(" 实例，该实例的状态为"),a("code",[t._v("rejected")])]),t._v(" "),a("li",[a("code",[t._v("Promise.all([p1,p2,p3…])")]),t._v(" 将多个Promise实例，包装成一个新的Promise实例\n"),a("ul",[a("li",[t._v("所有参数中的promise状态都为resolved是，新的promise状态才为resolved")]),t._v(" "),a("li",[t._v("只要p1、p2、p3..之中有一个被rejected，新的promise的状态就变成rejected")])])]),t._v(" "),a("li",[a("code",[t._v("Promise.race([p1,p2,p3…])")]),t._v(" // 竞速，完成一个即可")])]),t._v(" "),a("h4",{attrs:{id:"原型方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型方法")]),t._v(" "),a("p",[a("code",[t._v("Promise.prototype.then(successFn[,failFn])")]),t._v(" Promise实例生成以后，可以用then方法分别指定Resolved状态和Rejected状态的回调函数。并根据Promise对象的状态来确定执行的操作:\n- resolved时执行第一个函数successFn\n- rejected时执行第二个函数failFn。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Promise.prototype.catch(failFn)")])])]),t._v(" "),a("h4",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ajax请求")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx.php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请求失败'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定Resolved状态和Rejected状态的回调函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//一般用于处理数据")]),t._v("\np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里得到resolve传过来的数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里得到reject传过来的数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("Promise")]),t._v("的构造函数接收一个回调函数作为参数，并且传入两个参数："),a("code",[t._v("resolve，reject")]),t._v("，分别表示异步操作执行成功和失败后的回调函数\n- 调用"),a("code",[t._v("resolve")]),t._v("方法将"),a("code",[t._v("Promise")]),t._v("对象的状态从「未完成」变为「成功」（从 pending 变为 resolved）；\n- 调用"),a("code",[t._v("reject")]),t._v("方法将"),a("code",[t._v("Promise")]),t._v("对象的状态从「未完成」变为「失败」（从 pending 变为 rejected）\n- 如果调用"),a("code",[t._v("resolve")]),t._v("函数和"),a("code",[t._v("reject")]),t._v("函数时带有参数，那么它们的参数会被传递给回调函数")]),t._v(" "),a("blockquote",[a("p",[t._v("有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数")])]),t._v(" "),a("h4",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),a("ul",[a("li",[t._v("加载图片，获取图片信息（宽高）")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("preloadImage")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" image "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onerror "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preloadImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://image.baidu.com/xxx.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("img")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("ul",[a("li",[t._v("ajax请求数据依赖")])])])},[],!1,null,null,null);s.default=e.exports}}]);