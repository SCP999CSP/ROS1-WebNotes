import { defineConfig } from 'vitepress'
import nav from './nav.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ros1Note",
  description: "For student learning",
  head:[["link",{rel:"icon",href:"/favicon.ico"}]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: [
      {text: 'RoboParks主站',
        link: 'https://roboparks.com/'},
      {
        text: '第 1 章 ROS概述与环境搭建',
        link: '/第 1 章 ROS概述与环境搭建',
        items: [
          { text: '1.1 ROS简介', 
            link: '/1.1 ROS简介',
            collapsed: true,
            items: [
              { text: '1.1.1ROS概念', link: '/1.1.1ROS概念' },
              { text: '1.1.2ROS设计目标', link: '/1.1.2ROS设计目标' },
              { text: '1.1.3ROS发展历程', link: '/1.1.3ROS发展历程' }
            ]
           },
           { text: '1.2 ROS安装', 
            link: '/1.2 ROS安装',
            collapsed: true,
            items: [
              { text: '1.2.1 安装 ROS', link: '/1.2.1 安装 ROS' },
              { text: '1.2.2 测试 ROS', link: '/1.2.2 测试 ROS' }
            ]
           },
           { text: '1.3 ROS快速体验', 
            link: '/1.3 ROS快速体验',
            collapsed: true,
            items: [
              { text: '1.3.1 HelloWorld实现简介', link: '/1.3.1 HelloWorld实现简介' },
              { text: '1.3.2 HelloWorld', link: '/1.3.2 HelloWorld' }
            ]
           },
          { text: '1.4 ROS集成开发环境搭建', 
            link: '/1.4 ROS集成开发环境搭建',
            collapsed: true,
            items: [
              { text: '1.4.1 安装终端', link: '/1.4.1 安装终端' },
              { text: '1.4.2 安装VScode', link: '/1.4.2 安装VScode' },
              { text: '1.4.3 launch文件演示', link: '/1.4.3 launch文件演示' },
            ]
           },
           { text: '1.5 ROS架构', 
            link: '/1.5 ROS架构',
            collapsed: true,
            items: [
              { text: '1.5.1 ROS文件系统', link: '/1.5.1 ROS文件系统' },
              { text: '1.5.2 ROS文件系统相关命令', link: '/1.5.2 ROS文件系统相关命令' },
              { text: '1.5.3 ROS计算图', link: '/1.5.3 ROS计算图' },
            ]
           },
           { text: '1.6 本章小结', link: '/1.6 本章小结'},
        ]
      },


      {
        text: '第 2 章 ROS通信机制',
        link: '/2 ROS通信机制',
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
           { text: '2.5 通信机制实操', link: '/2.5 通信机制实操',collapsed: true,
            items: [
                { text: '2.5.1 实操01_话题发布', link: '/2.5.1 实操01_话题发布' },
                { text: '2.5.2 实操02_话题订阅', link: '/2.5.2 实操02_话题订阅' },
                { text: '2.5.3 实操03_服务调用', link: '/2.5.3 实操03_服务调用' },
                { text: '2.5.4 实操04_参数设置', link: '/2.5.4 实操04_参数设置' },
            ]
           },
           { text: '2.6 通信机制比较', link: '/2.6 通信机制比较'},
           { text: '2.7 本章小结', link: '/2.7 本章小结'}
        ]
      }
    ],

    socialLinks: [  
      { icon: 'github', link: 'https://github.com/SCP999CSP/ROS-WebNotes' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' },
      { icon: 'linkedin', link: '' }
    ]
  }
})
