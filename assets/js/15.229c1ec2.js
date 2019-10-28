(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{152:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"配置项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项目"}},[t._v("#")]),t._v(" 配置项目")]),t._v(" "),a("p",[a("strong",[a("font",{attrs:{color:"#CD2626",face:"楷体"}},[t._v("1.安装eslint-plugin-prettier")])],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" eslint-plugin-prettier --save-dev\n")])])]),a("p",[a("strong",[a("font",{attrs:{color:"#CD2626",face:"楷体"}},[t._v("2.安装@vue/eslint-config-prettier")])],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @vue/eslint-config-prettier --save-dev\n")])])]),a("p",[a("font",{attrs:{face:"楷体"}},[t._v("然后在package.json或.eslintrc.js或者其它设置eslint的地方，加上：@vue/prettier")])],1),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:vue/essential"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint:recommended"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vue/prettier"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[a("strong",[a("font",{attrs:{color:"#CD2626",face:"楷体"}},[t._v("3.配置prettier")])],1),a("br"),t._v(" "),a("font",{attrs:{face:"楷体"}},[t._v("在项目的根目录下创建一个.prettierrc.js文件，然后在其中加入：")])],1),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("module.exports = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  semi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  singleQuote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[a("font",{attrs:{color:"#CD2626",face:"楷体"}},[t._v("4.npm run lint")])],1)]),t._v(" "),a("h2",{attrs:{id:"配置vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置vscode"}},[t._v("#")]),t._v(" 配置VsCode")]),t._v(" "),a("blockquote",[a("p",[t._v("在VsCode中实时看到对错误的标注，实现Ctlr+S"),a("font",{attrs:{color:"#07c160"}},[t._v("(autoFixOnSave)")]),t._v("自动格式化保存"),a("font",{attrs:{color:"#07c160"}},[t._v("(避免重复npm run lint)")]),t._v("，配置如下。")],1)]),t._v(" "),a("p",[a("strong",[a("font",{attrs:{color:"#CD2626",face:"楷体"}},[t._v("1.安装插件eslint")])],1)]),t._v(" "),a("p",[a("strong",[a("font",{attrs:{color:"#CD2626",face:"楷体"}},[t._v("2.在项目的根目录下创建一个.vscode文件夹，在.vscode文件夹新建settings.json。代码如下：")])],1)]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslint.autoFixOnSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslint.validate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascriptreact"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"language"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"autoFix"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("p",[a("strong",[a("font",{attrs:{color:"#bbb",face:"楷体"}},[t._v("摘自:https://juejin.im/entry/5cca6b376fb9a032106bdbe9")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);