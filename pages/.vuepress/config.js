const path = require('path')

module.exports = {
  base: '/blog/',
  title: "姜风的博客啊",
  description: "巴拉巴拉巴拉",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "Github", link: "https://github.com/JFDTTTT" },
    ],
    sidebar: [
      {
        title: "TS", // 必要的
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/ts/base"],
      },
    ],
    lastUpdated: "Last Updated",
  },
};
