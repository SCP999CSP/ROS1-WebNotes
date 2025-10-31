import { defineConfig } from 'vitepress'
import nav from './nav.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ros1Note",
  description: "For student learning",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: [
      {
        text: 'Examples',
        link: '/markdown-examples',
        items: [
          { text: 'Markdown Examples', 
            link: '/markdown-examples',
            items: [
              { text: '2.1 话题通信', link: '/2.1 话题通信' },
              { text: 'Runtime API Examples', link: '/api-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
           },

          { text: 'Runtime API Examples', link: '/api-examples' },

          { text: 'Ros', link: '/api-examples' }
        ]
      },


      {
        text: '第 2 章 ROS通信机制',
        link: '/2 ROS通信机制',
        collapsed: false,
        items: [
          { text: '2.1 话题通信', link: '/2.1 话题通信',collapsed: true,
            items: [
               { text: '2.1.1 话题通信理论模型', link: '/2.1.1 话题通信理论模型' },
               { text: '2.1.2 话题通信基本操作', link: '/2.1.2 话题通信基本操作' },
               { text: '2.1.3 话题通信自定义msg', link: '/2.1.3 话题通信自定义msg' },
               { text: '2.1.4 话题通信自定义msg调用', link: '/2.1.4 话题通信自定义msg调用' }
            ]
          },
          { text: '2.2 服务通信', link: '/2.2 服务通信',collapsed: true,
            items: [
                { text: '2.2.1 服务通信理论模型', link: '/2.2.1 服务通信理论模型' },
                { text: '2.2.2 服务通信自定义srv', link: '/2.2.2 服务通信自定义srv' },
                { text: '2.2.3 服务通信自定义srv调用', link: '/2.2.3服务通信自定义srv调用' },
            ]
           },
          { text: '2.3 参数服务器', link: '/2.3 参数服务器',collapsed: true,
            items: [
                { text: '2.3.1 参数服务器理论模型', link: '/2.3.1 参数服务器理论模型' },
                { text: '2.3.2 参数操作(Python)', link: '/2.3.2 参数操作(Python)' },
            ]
           },
           { text: '2.4 常用命令', link: '/2.4 常用命令',collapsed: true,
            items: [
                { text: '2.4.1 rosnode', link: '/2.4.1 rosnode' },
                { text: '2.4.2 rostopic', link: '/2.4.2 rostopic' },
                { text: '2.4.3 rosmsg', link: '/2.4.3 rosmsg' },
                { text: '2.4.4 rosservice', link: '/2.4.4 rosservice' },
                { text: '2.4.5 rossrv', link: '/2.4.5 rossrv' },
                { text: '2.4.6 rosparam', link: '/2.4.6 rosparam' },
            ]
           },
        ]
      }
    ],

    socialLinks: [  
      { icon: 'github', link: 'https://github.com/SCP999CSP/ROS-WebNotes' }
    ]
  }
})
