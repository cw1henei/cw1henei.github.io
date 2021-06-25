(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{372:function(e,a,t){"use strict";t.r(a);var s=t(44),v=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue-cli-3-项目构建基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-3-项目构建基础"}},[e._v("#")]),e._v(" Vue CLI 3 项目构建基础")]),e._v(" "),t("p",[e._v("大家好，当你点进这个标题，开始阅读本章的时候，说明你对 "),t("code",[e._v("Vue.js")]),e._v(" 是充满好奇心和求知欲的。我之前写过一篇文章，这样评价 Vue.js，称它是“简单却不失优雅，小巧而不乏大匠”的作品，正如其官网介绍的“易用，灵活和高效”那样。其实框架是 Vue.js 的本质，而真正了解它的人则会把它当成一件作品来欣赏。")]),e._v(" "),t("p",[e._v("Vue.js 作为一门轻量级、易上手的前端框架，从入门难度和学习曲线上相对其他框架来说算是占据优势的，越来越多的人开始投入 Vue.js 的怀抱，走进 Vue.js 的世界。那么接下来屏幕前的你不妨一起来和我从零开始构建一个 Vue 项目，体会一下 Vue.js 的精彩绝伦。")]),e._v(" "),t("h2",{attrs:{id:"依赖工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖工具"}},[e._v("#")]),e._v(" 依赖工具")]),e._v(" "),t("p",[e._v("在构建一个 Vue 项目前，我们先要确保你本地安装了 "),t("code",[e._v("Node")]),e._v(" 环境以及包管理工具 "),t("code",[e._v("npm")]),e._v("，打开终端运行：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 查看 node 版本\nnode -v\n\n# 查看 npm 版本\nnpm -v\n\n")])])]),t("p",[e._v("如果成功打印出版本号，说明你本地具备了 node 的运行环境，我们可以使用 npm 来安装管理项目的依赖，而如果没有或报错，则你需要去 "),t("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("node 官网"),t("OutboundLink")],1),e._v("进行 node 的下载及安装，如图：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/31/166c5eb2c6f04593?w=575&h=197&f=png&s=29269",alt:""}})]),e._v(" "),t("p",[e._v("左边的版本是推荐安装的稳定版本，也就是目前已经被正式列入标准的版本，而右边的版本是当前最新的版本，该版本包含了一些新的特性，还未被完全列入标准，可能以后会有所变动。这里建议大家安装最新的 node 稳定版进行开发。")]),e._v(" "),t("h2",{attrs:{id:"脚手架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚手架"}},[e._v("#")]),e._v(" 脚手架")]),e._v(" "),t("p",[e._v("当我们安装完 node 后便可以开始进行后续的构建工作了，那么这里我主要给大家介绍下最便捷的脚手架构建。")]),e._v(" "),t("h3",{attrs:{id:"_1-什么是脚手架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是脚手架"}},[e._v("#")]),e._v(" 1. 什么是脚手架")]),e._v(" "),t("p",[e._v("很多人可能经常会听到“脚手架”三个字，无论是前端还是后台，其实它在生活中的含义是为了保证各施工过程顺利进行而搭设的工作平台。因此作为一个工作平台，前端的脚手架可以理解为能够帮助我们快速构建前端项目的一个工具或平台。")]),e._v(" "),t("h3",{attrs:{id:"_2-vue-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-cli"}},[e._v("#")]),e._v(" 2. vue-cli")]),e._v(" "),t("p",[e._v("其实说到脚手架，目前很多主流的前端框架都提供了各自官方的脚手架工具，以帮助开发者快速构建起自己的项目，比如 "),t("code",[e._v("Vue")]),e._v("、"),t("code",[e._v("React")]),e._v(" 等，这里我们就来介绍下 Vue 的脚手架工具 "),t("code",[e._v("vue-cli")]),e._v("。")]),e._v(" "),t("p",[e._v("vue-cli 经历了几个版本的迭代，目前最新的版本是 3.x，也是本小册构建项目所使用的版本，我们一起来看下其人性化的构建流程：")]),e._v(" "),t("h4",{attrs:{id:"a-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-安装"}},[e._v("#")]),e._v(" a. 安装")]),e._v(" "),t("p",[e._v("我们可以在终端通过以下命令全局安装 vue-cli：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 安装 Vue CLI 3.x\nnpm i -g @vue/cli\n\n")])])]),t("p",[e._v("如果你习惯使用 "),t("code",[e._v("yarn")]),e._v("，你也可以：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 没有全局安装yarn需执行此命令\nnpm i -g yarn\nyarn global add @vue/cli\n\n")])])]),t("p",[e._v("注意因为是全局安装，所以 vue-cli 是全局的包，它和我们所处的项目没有关系。同时我们这里介绍的 CLI 版本是最新的 3.x，它和 2.x 版本存在着很大的区别，具体的讲解会在后续章节中进行介绍。")]),e._v(" "),t("h4",{attrs:{id:"b-构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-构建"}},[e._v("#")]),e._v(" b. 构建")]),e._v(" "),t("p",[e._v("安装完 vue-cli 后，我们在你想要创建的项目目录地址下执行构建命令：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# my-project 是你的项目名称\nvue create my-project\n\n")])])]),t("p",[e._v("执行完上述命令后，会出现一系列的选择项，我们可以根据自己的需要进行选择，流程图如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/6/18/16412343fab2e351?w=980&h=634&f=png&s=57073",alt:""}})]),e._v(" "),t("p",[e._v("如果你只想构建一个基础的 Vue 项目，那么使用 "),t("code",[e._v("Babel")]),e._v("、"),t("code",[e._v("Router")]),e._v("、"),t("code",[e._v("Vuex")]),e._v("、"),t("code",[e._v("CSS Pre-processors")]),e._v(" 就足够了，最后选择你喜欢的包管理工具 npm or yarn。")]),e._v(" "),t("h4",{attrs:{id:"c-启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-启动"}},[e._v("#")]),e._v(" c. 启动")]),e._v(" "),t("p",[e._v("等待构建完成后你便可以运行命令来启动你的 Vue 项目：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 打开项目目录\ncd vue-project\n\n# 启动项目\nyarn serve\n\n# or\nnpm run serve\n\n")])])]),t("p",[e._v("需要注意的是如果启动的时候出现报错或者包丢失等情况，最好将 node 或者 yarn （如果使用）的版本更新到最新重新构建。")]),e._v(" "),t("p",[e._v("成功后打开浏览器地址："),t("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080/"),t("OutboundLink")],1),e._v(" 可以看到如下界面：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/6/18/164125dcfb6fa7d5",alt:""}})]),e._v(" "),t("h4",{attrs:{id:"d-目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#d-目录结构"}},[e._v("#")]),e._v(" d. 目录结构")]),e._v(" "),t("p",[e._v("最后脚手架生成的目录结构如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("├── node_modules     # 项目依赖包目录\n├── public\n│   ├── favicon.ico  # ico图标\n│   └── index.html   # 首页模板\n├── src \n│   ├── assets       # 样式图片目录\n│   ├── components   # 组件目录\n│   ├── views        # 页面目录\n│   ├── App.vue      # 父组件\n│   ├── main.js      # 入口文件\n│   ├── router.js    # 路由配置文件\n│   └── store.js     # vuex状态管理文件\n├── .gitignore       # git忽略文件\n├── .postcssrc.js    # postcss配置文件\n├── babel.config.js  # babel配置文件\n├── package.json     # 包管理文件\n└── yarn.lock        # yarn依赖信息文件\n\n")])])]),t("p",[e._v("根据你安装时选择的依赖不同，最后生成的目录结构也会有所差异。")]),e._v(" "),t("h3",{attrs:{id:"_3-可视化界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-可视化界面"}},[e._v("#")]),e._v(" 3. 可视化界面")]),e._v(" "),t("p",[e._v("当然，除了使用上述命令行构建外，"),t("code",[e._v("vue-cli 3.x")]),e._v(" 还提供了可视化的操作界面，在项目目录下我们运行如下命令开启图形化界面：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("vue ui\n\n")])])]),t("p",[e._v("之后浏览器会自动打开本地 "),t("code",[e._v("8000")]),e._v(" 端口，页面如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/6/26/1643ca037f818a81?w=805&h=396&f=png&s=18543",alt:""}})]),e._v(" "),t("p",[e._v("如果你还没有任何项目，那么可以点击创建或者直接导入现有的项目。创建项目和我们使用命令行的步骤基本相同，完全可视化操作，一定程度上降低了构建和使用的难度。项目创建或导入成功后你便可以进入项目进行可视化管理了。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/6/26/1643ca8799bb4491?w=819&h=397&f=png&s=71058",alt:""}})]),e._v(" "),t("p",[e._v("在整个管理界面中，我们可以为自己的项目安装 CLI 提供的插件，比如安装 "),t("code",[e._v("@vue/cli-plugin-babel")]),e._v(" 插件，同时我们也可以配置相应插件的配置项，进行代码的编译、热更新、检查等。详细的操作大家可以自己进行手动尝试，相信你会发现意想不到的惊喜。")]),e._v(" "),t("h2",{attrs:{id:"你还需要了解什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你还需要了解什么"}},[e._v("#")]),e._v(" 你还需要了解什么")]),e._v(" "),t("p",[e._v("上方我们用 vue-cli 成功生成了一个最基础的 Vue 项目，麻雀虽小，五脏俱全，但是想要让麻雀飞起来，我们还要不断的给它进行拓展训练，那么我们还需要了解什么呢？")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/20/165f2c3a9c4f640c?w=665&h=251&f=png&s=21583",alt:""}})]),e._v(" "),t("p",[e._v("以上这些内容（包含但不限于）将会在本小册的接下来几章进行详细的讲解，你准备好了吗？")]),e._v(" "),t("h2",{attrs:{id:"结语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[e._v("#")]),e._v(" 结语")]),e._v(" "),t("p",[e._v("本文主要讲述了使用 vue-cli 脚手架进行 Vue 项目构建的基本知识，从构建的流程中我们不难发现 Vue 提供给了我们一套非常灵活可配置的工具，其小巧而不乏大匠的魅力不言而喻。希望大家能够从构建开始，逐渐领略 Vue.js 的匠心，激发自己的对 Vue 的兴趣。")])])}),[],!1,null,null,null);a.default=v.exports}}]);