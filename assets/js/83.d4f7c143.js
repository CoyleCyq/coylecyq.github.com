(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{556:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"用户的基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户的基本操作","aria-hidden":"true"}},[s._v("#")]),s._v(" 用户的基本操作")]),s._v(" "),t("h3",{attrs:{id:"查看当前登录的用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前登录的用户","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看当前登录的用户")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("whoami")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 案例")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whoami")]),s._v("\ncoyle\n")])])]),t("h3",{attrs:{id:"添加用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加用户","aria-hidden":"true"}},[s._v("#")]),s._v(" 添加用户")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("useradd")])])]),s._v(" "),t("p",[s._v("备注：只有在root管理员权限下才能创建用户，在其他用户下会提示权限不足")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个用户：coyle")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" coyle\n")])])]),t("h3",{attrs:{id:"设置用户的登入密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置用户的登入密码","aria-hidden":"true"}},[s._v("#")]),s._v(" 设置用户的登入密码")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("passwd")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置coyle的登录密码")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" coyle\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会出现提示: ")]),s._v("\nChanging password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user coyle.\nNew password:\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在New Password: 后输入密码，然后回车，提示需要重复输入")]),s._v("\nRetype new password:\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入后提示成功")]),s._v("\npasswd: all authentication tokens updated successfully.\n")])])]),t("h3",{attrs:{id:"切换用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换用户","aria-hidden":"true"}},[s._v("#")]),s._v(" 切换用户")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("su")])])]),s._v(" "),t("p",[s._v("备注： root切换到普通用户不需要输入密码，普通用户切换到root用户，需要输入密码")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到用户: coyle")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" coyle\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到用户：root")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方法一：")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" root\nPassword:\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方法二：直接输入su")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v("\nPassword:\n")])])]),t("h3",{attrs:{id:"常用的shell快捷键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的shell快捷键","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用的Shell快捷键")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("Ctrl+a")]),s._v(" : 调到命令行的开头")]),s._v(" "),t("li",[t("code",[s._v("Ctrl+e")]),s._v(" : 调到命令行的末尾")]),s._v(" "),t("li",[t("code",[s._v("Ctrl+u")]),s._v(" : 将光标处到命令行开头的内容清除")]),s._v(" "),t("li",[t("code",[s._v("Ctrl+k")]),s._v(" : 将光标处到命令行结尾的内容清除")]),s._v(" "),t("li",[t("code",[s._v("Ctrl+r")]),s._v(" : 在历史记录列表中搜索某一命令")]),s._v(" "),t("li",[t("code",[s._v("Ctrl+l")]),s._v(" : 清屏")]),s._v(" "),t("li",[t("code",[s._v("history")]),s._v(": 显示历史命令")]),s._v(" "),t("li",[t("code",[s._v("![number]")]),s._v(": 直接执行曾经执行过的命令")]),s._v(" "),t("li",[s._v("上下箭头： 快速浏览上一个/下一个曾经执行的命令")])])])},[],!1,null,null,null);a.default=r.exports}}]);