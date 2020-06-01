(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{345:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"命令说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令说明"}},[t._v("#")]),t._v(" 命令说明")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",[t._v("命令")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("command > file")]),t._v(" "),e("td",[t._v("将输出重定向到file")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("command < file")]),t._v(" "),e("td",[t._v("将输入重定向到file")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("command >> file")]),t._v(" "),e("td",[t._v("将输出以追加的方式重定向到file")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("n > file")]),t._v(" "),e("td",[t._v("将文件描述符转为 n 的文件重定向到file")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("n >> file")]),t._v(" "),e("td",[t._v("将文件描述符为 n 的文件以追加的方式重定向到 file。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("n >& m")]),t._v(" "),e("td",[t._v("将输出文件 m 和 n 合并。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("n <& m")]),t._v(" "),e("td",[t._v("将输入文件 m 和 n 合并。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("<< tag")]),t._v(" "),e("td",[t._v("将开始标记 tag 和结束标记 tag 之间的内容作为输入。")])])])]),t._v(" "),e("p",[e("strong",[t._v("注意：")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("追加的方式是将要追加的内容放置在要追加的文件末尾")])]),t._v(" "),e("li",[e("p",[t._v("单纯的重定向会将原来的文件内容覆盖")])])]),t._v(" "),e("h2",{attrs:{id:"深入了解重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深入了解重定向"}},[t._v("#")]),t._v(" 深入了解重定向")]),t._v(" "),e("p",[t._v("一般情况下，每个 Unix/Linux 命令运行时都会打开三个文件：")]),t._v(" "),e("ul",[e("li",[t._v("标准输入文件(stdin)：stdin的文件描述符为0，Unix程序默认从stdin读取数据。")]),t._v(" "),e("li",[t._v("标准输出文件(stdout)：stdout 的文件描述符为1，Unix程序默认向stdout输出数据。")]),t._v(" "),e("li",[t._v("标准错误文件(stderr)：stderr的文件描述符为2，Unix程序会向stderr流中写入错误信息。")])]),t._v(" "),e("p",[t._v("默认情况下，command > file 将 stdout 重定向到 file，command < file 将stdin 重定向到 file。")]),t._v(" "),e("p",[t._v("如果希望 stderr 重定向到 file，可以这样写：")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("如果希望 stderr 追加到 file 文件末尾，可以这样写：")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("strong",[t._v("表示标准错误文件(stderr)")])]),t._v(" "),e("p",[t._v("如果希望将 stdout 和 stderr 合并后重定向到 file，可以这样写：")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v("\n\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("如果希望对 stdin 和 stdout 都重定向，可以这样写：")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" file1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("file2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("command 命令将 stdin 重定向到 file1，将 stdout 重定向到 file2。")]),t._v(" "),e("h2",{attrs:{id:"here-document"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#here-document"}},[t._v("#")]),t._v(" Here Document")]),t._v(" "),e("p",[t._v("Here Document 是 Shell 中的一种特殊的重定向方式，用来将输入重定向到一个交互式 Shell 脚本或程序。")]),t._v(" "),e("p",[t._v("它的基本的形式如下：")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("delimiter\n    document\ndelimiter")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("它的作用是将两个 delimiter 之间的内容(document) 作为输入传递给 command。")]),t._v(" "),e("p",[e("strong",[t._v("注意：")])]),t._v(" "),e("ul",[e("li",[t._v("结尾的delimiter 一定要顶格写，前面不能有任何字符，后面也不能有任何字符，包括空格和 tab 缩进。")]),t._v(" "),e("li",[t._v("开始的delimiter前后的空格会被忽略掉。")])]),t._v(" "),e("p",[t._v("Here Document还可以用于脚本中。")]),t._v(" "),e("h2",{attrs:{id:"dev-null文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dev-null文件"}},[t._v("#")]),t._v(" /dev/null文件")]),t._v(" "),e("p",[t._v("如果希望执行某个命令，但又不希望在屏幕上显示输出结果，那么可以将输出重定向到 /dev/null：")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /dev/null\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v('/dev/null 是一个特殊的文件，写入到它的内容都会被丢弃；如果尝试从该文件读取内容，那么什么也读不到。但是 /dev/null 文件非常有用，将命令的输出重定向到它，会起到"禁止输出"的效果。')]),t._v(" "),e("p",[t._v("如果希望屏蔽 stdout 和 stderr，可以这样写：")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("本文转载自菜鸟教程：https://www.runoob.com/linux/linux-shell-io-redirections.html")])])}),[],!1,null,null,null);s.default=n.exports}}]);