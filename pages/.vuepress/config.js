const path = require('path')

module.exports = {
  base: '/blog/',
  title: "姜风的博客啊",
  description: "巴拉巴拉巴拉",
  themeConfig: {
    displayAllHeaders:true,
    nav: [
      { text: "主页", link: "/" },
      { text: "Github", link: "https://github.com/JFDTTTT" },
    ],
    sidebar: [
      {
        title: "TS",
        children: ['/ts/base']
      },
      {
        title: "markdown", 
        children: ["/markdown/base"],
      },
      {
        title: "linux", 
      },
      {
        title: "shell", 
      },
      {
        title: "regex", 
        children: ["/regex/1", "/regex/2", "/regex/3"],
      },
    ],
    lastUpdated: "Last Updated",
  },
};
