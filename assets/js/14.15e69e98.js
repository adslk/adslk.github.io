(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{343:function(s,n,t){"use strict";t.r(n);var e=t(0),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-查看pip默认安装路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看pip默认安装路径"}},[s._v("#")]),s._v(" 1.查看pip默认安装路径")]),s._v(" "),t("p",[s._v("使用 'python -m site' 命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("C:\\Users\\******>python -m site\nsys.path = [\n    'C:\\\\Users\\\\*****',\n    'D:\\\\Code\\\\Python\\\\Python36\\\\python36.zip',\n    'D:\\\\Code\\\\Python\\\\Python36\\\\DLLs',\n    'D:\\\\Code\\\\Python\\\\Python36\\\\lib',\n    'D:\\\\Code\\\\Python\\\\Python36',\n    'D:\\\\Code\\\\Python\\\\Python36\\\\lib\\\\site-packages',\n]\nUSER_BASE: 'C:\\\\Users\\\\******\\\\AppData\\\\Roaming\\\\Python' (doesn't exist)\nUSER_SITE: 'C:\\\\Users\\\\******\\\\AppData\\\\Roaming\\\\Python\\\\Python36\\\\site-packages' (doesn't exist)\nENABLE_USER_SITE: True\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("其中这里有几点说明：")]),s._v(" "),t("p",[s._v("①我们看见这里的USER_BASE 和USER_SITE其实就是用户自定义的启用Python脚本和依赖安装包的基础路径。")]),s._v(" "),t("p",[s._v("②其中USER_BASE表示就是在C盘这个目录下的Python.exe启动程序路径以及pip,esay-install,markdown等脚本，（我们已经是安装好了Anaconda Python，这个C盘又是什么鬼，不想用它啊），而这个C盘的Python.exe启动程序路径其实就是我们在安装Anaconda的时候一个分身，更准确的说，其实就是简单的Python程序，并不是什么IDE这种级别的可以类似Eclipse这样去操作编译丰富的功能窗口，只是简单类似shell的一样的存在。")]),s._v(" "),t("p",[s._v("所以要改。")]),s._v(" "),t("p",[s._v("③其中的USER_SITE其实就是用户如果调用C盘路径下的python.exe中的脚本pip文件去下载，就会将site-package的默认安装到这个C盘路径下。")]),s._v(" "),t("h2",{attrs:{id:"_2-修改默认pip安装路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改默认pip安装路径"}},[s._v("#")]),s._v(" 2.修改默认pip安装路径")]),s._v(" "),t("p",[s._v("使用cmd命令：python -m site -help")]),s._v(" "),t("p",[s._v("就会出现")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("C:\\Users\\*****>python -m site -help\nD:\\Code\\Python\\Python36\\lib\\site.py [--user-base] [--user-site]\n\nWithout arguments print some useful information\nWith arguments print the value of USER_BASE and/or USER_SITE separated\nby ';'.\n\nExit codes with --user-base or --user-site:\n  0 - user site directory is enabled\n  1 - user site directory is disabled by user\n  2 - uses site directory is disabled by super user\n      or for security reasons\n >2 - unknown e\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("打开查询得到的.py文件找到如下内容")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sys\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" builtins\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" _sitebuiltins\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Prefixes for site-packages; add additional prefixes like /usr/local here")]),s._v("\nPREFIXES "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prefix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exec_prefix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Enable per user site-packages directory")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# set it to False to disable the feature or True to force the feature")]),s._v("\nENABLE_USER_SITE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for distutils.commands.install")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# These values are initialized by the getuserbase() and getusersitepackages()")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# functions, through the main() function when Python starts.")]),s._v("\nUSER_SITE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\nUSER_BASE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("修改其中84、85行内容，即“USER_SITE = None”，“USER_BASE = None”的内容。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意")]),s._v(" "),t("p",[s._v('USER_SITE = "F:\\Anaconda\\lib\\site-packages"\n这个是你要安装下载的site-packages的路径。')]),s._v(" "),t("p",[s._v("而执行下载的pip等脚本路径是由USER_BASE决定，并且一定一定要换到同样的有pip脚本的路径下，哪怕你路径也请写到")]),s._v(" "),t("p",[s._v("F:\\Anaconda\n当然这里最好写成")]),s._v(" "),t("p",[s._v('USER_BASE = "F:\\Anaconda\\Scripts"')]),s._v(" "),t("p",[s._v("版权声明：本文为CSDN博主「JustinXTT」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。")]),s._v(" "),t("p",[s._v("原文链接：https://blog.csdn.net/mukvintt/article/details/80908951")])]),s._v(" "),t("h2",{attrs:{id:"_3-windows中pip换源的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-windows中pip换源的方法"}},[s._v("#")]),s._v(" 3.windows中pip换源的方法")]),s._v(" "),t("p",[s._v("在C盘用户文件夹的根目录下新建名为pip的文件夹")]),s._v(" "),t("p",[s._v("在pip文件夹下新建pip.ini文件，并在其中添加如下代码：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[global]\ntimeout = 6000\nindex-url = https://pypi.tuna.tsinghua.edu.cn/simple\ntrusted-host = pypi.tuna.tsinghua.edu.cn\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("其中镜像源可以替换，常见的国内镜像源有：")]),s._v(" "),t("p",[s._v("V2EX："),t("a",{attrs:{href:"https://link.jianshu.com/?t=http:/pypi.v2ex.com/simple",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://pypi.v2ex.com/simple"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("豆瓣："),t("a",{attrs:{href:"https://link.jianshu.com/?t=http:/pypi.douban.com/simple",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://pypi.douban.com/simple"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("中国科学技术大学："),t("a",{attrs:{href:"https://link.jianshu.com/?t=http:/pypi.mirrors.ustc.edu.cn/simple/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://pypi.mirrors.ustc.edu.cn/simple"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("清华：https://pypi.tuna.tsinghua.edu.cn/simple")])])}),[],!1,null,null,null);n.default=a.exports}}]);