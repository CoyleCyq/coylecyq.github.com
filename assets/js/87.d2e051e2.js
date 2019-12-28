(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{550:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"文件权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件权限","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件权限")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看etc目录信息")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l /etc\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -rw-r--r--.    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("      root      root     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1037")]),t._v("      Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":04   yum.conf\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" drwxr-xr-x.    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("      root      root     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("      Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":56   yum.repos.d\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ---权限-----链接数---所有者---所在组---容量,默认单位B--修改日期---文件名 ")]),t._v("\n")])])]),a("h2",{attrs:{id:"权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限","aria-hidden":"true"}},[t._v("#")]),t._v(" 权限")]),t._v(" "),a("ul",[a("li",[t._v("第一个代表的文件属性")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-")]),t._v(" "),a("td",[t._v("表示文件")])]),t._v(" "),a("tr",[a("td",[t._v("d")]),t._v(" "),a("td",[t._v("表示目录")])]),t._v(" "),a("tr",[a("td",[t._v("l")]),t._v(" "),a("td",[t._v("表示链接文件")])]),t._v(" "),a("tr",[a("td",[t._v("b")]),t._v(" "),a("td",[t._v("设备文件，提供储存的接口设备")])]),t._v(" "),a("tr",[a("td",[t._v("c")]),t._v(" "),a("td",[t._v("设备文件，提供串行的接口设备--键盘，鼠标")])])])]),t._v(" "),a("ul",[a("li",[t._v("文件的权限： 所有者, 所有组, 其他人")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("rwx")]),t._v(" 分别是 读，写，执行，没有权限就是-")])]),t._v(" "),a("p",[t._v("第一组rwx: 文件所有者的权限")]),t._v(" "),a("p",[t._v("第二组rwx: 文件所属组的权限")]),t._v(" "),a("p",[t._v("第三组rwx: 其他人的权限")]),t._v(" "),a("ul",[a("li",[t._v("目录的权限")])]),t._v(" "),a("p",[t._v("r: 具有读取目录结构的权限，可以查看目录下有哪些文件")]),t._v(" "),a("p",[t._v("w: 可以在目录下新建新的文件和目录，可以删除文件和目录，可以重命名文件和目录，可以移动文件和目录")]),t._v(" "),a("p",[t._v("x: 是否可以进入该目录")]),t._v(" "),a("h2",{attrs:{id:"修改权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改权限","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改权限")]),t._v(" "),a("ul",[a("li",[t._v("chown: 修改文件的所有者， -R 递归修改")])]),t._v(" "),a("p",[a("code",[t._v("语法：chown options file")])]),t._v(" "),a("ul",[a("li",[t._v("chgrp: 修改文件的所属组， -R 递归修改")])]),t._v(" "),a("p",[a("code",[t._v("语法：chgrp options file")])]),t._v(" "),a("ul",[a("li",[t._v("chmod: 修改文件的拥有者和所属组的权限， 加减法， 数字法r=4, w=2, x=1\n"),a("ul",[a("li",[t._v("u: 代表所有者")]),t._v(" "),a("li",[t._v("g: 代表所有组")]),t._v(" "),a("li",[t._v("o: 代表其他人")])])])]),t._v(" "),a("p",[t._v("rwx = 4+2+1=7")]),t._v(" "),a("p",[t._v("rw- = 4+2=6")]),t._v(" "),a("p",[t._v("r-- = 4")]),t._v(" "),a("p",[t._v("r-x = 4+1=5")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  将test.html文件的所有者改成test用户")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" test.html\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  将test.html文件的所属组改成testgroup组")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chgrp")]),t._v(" testgroup test.html\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  将test目录以及目录下的所有文件、目录的所有者改成test用户")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给test.html文件的所属组添加写权限")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" g+w test.html\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给test.html文件的所属组删除写权限")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" g-w test.html\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给test.html文件的其他人添加读，写，执行权限")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("o")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("rwx test.html\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给test.html文件的所有者，所属组，其他人添加读，写，执行权限")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),t._v(" test.html\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给test.html文件的所有者加rwx权限，所属组加rw-权限，其他人加r--权限")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("764")]),t._v(" test.html\n")])])]),a("h2",{attrs:{id:"创建一个组-groupadd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个组-groupadd","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建一个组 "),a("code",[t._v("groupadd")])]),t._v(" "),a("p",[a("code",[t._v("groupadd")])]),t._v(" "),a("h2",{attrs:{id:"给组添加用户或删除用户-gpasswd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给组添加用户或删除用户-gpasswd","aria-hidden":"true"}},[t._v("#")]),t._v(" 给组添加用户或删除用户 "),a("code",[t._v("gpasswd")])]),t._v(" "),a("p",[a("code",[t._v("gpasswd [ad] 用户 组")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把test用户添加到testgroup组里面")]),t._v("\n$ gpasswd -a "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" testgroup\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把test用户从testgroup组删除")]),t._v("\n$ gpasswd -d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" testgroup\n")])])]),a("ul",[a("li",[t._v("文件的权限特点")])]),t._v(" "),a("p",[t._v("文件的拥有者，即使没有写入权限，也可以强制写入，所属组和其他人不行")]),t._v(" "),a("ul",[a("li",[t._v("目录的权限特点")])]),t._v(" "),a("p",[t._v("如果")])])},[],!1,null,null,null);s.default=n.exports}}]);