export default{
    '/Language/ROS1/中文/':[{
        text: 'ROS1 课件'},
      {
        text: '第 1 章 ROS概述与环境搭建',
        link: '/Language/ROS1/中文/1ROS概述与环境搭建.md',
        items: [
          { text: '1.1 ROS简介', 
            link: '/Language/ROS1/中文/1.1 ROS简介',
            collapsed: true,
            items: [
              { text: '1.1.1ROS概念', link: '/Language/ROS1/中文/1.1.1ROS概念' },
              { text: '1.1.2ROS设计目标', link: '/Language/ROS1/中文/1.1.2ROS设计目标' },
              { text: '1.1.3ROS发展历程', link: '/Language/ROS1/中文/1.1.3ROS发展历程' }
            ]
           },
           { text: '1.2 ROS安装', 
            link: '/Language/ROS1/中文/1.2 ROS安装',
            collapsed: true,
            items: [
              { text: '1.2.1 安装 ROS', link: '/Language/ROS1/中文/1.2.1 安装 ROS' },
              { text: '1.2.2 测试 ROS', link: '/Language/ROS1/中文/1.2.2 测试 ROS' }
            ]
           },
           { text: '1.3 ROS快速体验', 
            link: '/Language/ROS1/中文/1.3 ROS快速体验',
            collapsed: true,
            items: [
              { text: '1.3.1 HelloWorld实现简介', link: '/Language/ROS1/中文/1.3.1 HelloWorld实现简介' },
              { text: '1.3.2 HelloWorld', link: '/Language/ROS1/中文/1.3.2 HelloWorld' }
            ]
           },
          { text: '1.4 ROS集成开发环境搭建', 
            link: '/Language/ROS1/中文/1.4 ROS集成开发环境搭建',
            collapsed: true,
            items: [
              { text: '1.4.1 安装终端', link: '/Language/ROS1/中文/1.4.1 安装终端' },
              { text: '1.4.2 安装VScode', link: '/Language/ROS1/中文/1.4.2 安装VScode' },
              { text: '1.4.3 launch文件演示', link: '/Language/ROS1/中文/1.4.3 launch文件演示' },
            ]
           },
           { text: '1.5 ROS架构', 
            link: '/Language/ROS1/中文/1.5 ROS架构',
            collapsed: true,
            items: [
              { text: '1.5.1 ROS文件系统', link: '/Language/ROS1/中文/1.5.1 ROS文件系统' },
              { text: '1.5.2 ROS文件系统相关命令', link: '/Language/ROS1/中文/1.5.2 ROS文件系统相关命令' },
              { text: '1.5.3 ROS计算图', link: '/Language/ROS1/中文/1.5.3 ROS计算图' },
            ]
           },
           { text: '1.6 本章小结', link: '/Language/ROS1/中文/1.6 本章小结'},
        ]
      },


      {
        text: '第 2 章 ROS通信机制',
        link: '/Language/ROS1/中文/2 ROS通信机制',
        items: [
          { text: '2.1 话题通信', link: '/Language/ROS1/中文/2.1 话题通信',collapsed: true,
            items: [
               { text: '2.1.1 话题通信理论模型', link: '/Language/ROS1/中文/2.1.1 话题通信理论模型' },
               { text: '2.1.2 话题通信基本操作', link: '/Language/ROS1/中文/2.1.2 话题通信基本操作' },
               { text: '2.1.3 话题通信自定义msg', link: '/Language/ROS1/中文/2.1.3 话题通信自定义msg' },
               { text: '2.1.4 话题通信自定义msg调用', link: '/Language/ROS1/中文/2.1.4 话题通信自定义msg调用' }
            ]
          },
          { text: '2.2 服务通信', link: '/Language/ROS1/中文/2.2 服务通信',collapsed: true,
            items: [
                { text: '2.2.1 服务通信理论模型', link: '/Language/ROS1/中文/2.2.1 服务通信理论模型' },
                { text: '2.2.2 服务通信自定义srv', link: '/Language/ROS1/中文/2.2.2 服务通信自定义srv' },
                { text: '2.2.3 服务通信自定义srv调用', link: '/Language/ROS1/中文/2.2.3服务通信自定义srv调用' },
            ]
           },
          { text: '2.3 参数服务器', link: '/Language/ROS1/中文/2.3 参数服务器',collapsed: true,
            items: [
                { text: '2.3.1 参数服务器理论模型', link: '/Language/ROS1/中文/2.3.1 参数服务器理论模型' },
                { text: '2.3.2 参数操作(Python)', link: '/Language/ROS1/中文/2.3.2 参数操作(Python)' },
            ]
           },
           { text: '2.4 常用命令', link: '/Language/ROS1/中文/2.4 常用命令',collapsed: true,
            items: [
                { text: '2.4.1 rosnode', link: '/Language/ROS1/中文/2.4.1 rosnode' },
                { text: '2.4.2 rostopic', link: '/Language/ROS1/中文/2.4.2 rostopic' },
                { text: '2.4.3 rosmsg', link: '/Language/ROS1/中文/2.4.3 rosmsg' },
                { text: '2.4.4 rosservice', link: '/Language/ROS1/中文/2.4.4 rosservice' },
                { text: '2.4.5 rossrv', link: '/Language/ROS1/中文/2.4.5 rossrv' },
                { text: '2.4.6 rosparam', link: '/Language/ROS1/中文/2.4.6 rosparam' },
            ]
           },
           { text: '2.5 通信机制实操', link: '/Language/ROS1/中文/2.5 通信机制实操',collapsed: true,
            items: [
                { text: '2.5.1 实操01_话题发布', link: '/Language/ROS1/中文/2.5.1 实操01_话题发布' },
                { text: '2.5.2 实操02_话题订阅', link: '/Language/ROS1/中文/2.5.2 实操02_话题订阅' },
                { text: '2.5.3 实操03_服务调用', link: '/Language/ROS1/中文/2.5.3 实操03_服务调用' },
                { text: '2.5.4 实操04_参数设置', link: '/Language/ROS1/中文/2.5.4 实操04_参数设置' },
            ]
           },
           { text: '2.6 通信机制比较', link: '/Language/ROS1/中文/2.6 通信机制比较'},
           { text: '2.7 本章小结', link: '/Language/ROS1/中文/2.7 本章小结'}
        ]
      }
    ],
    '/Language/ROS1/English/':[{
        text: 'ROS1 Note'},
      {
        text: 'Chapter 1: Introduction to ROS and Environment Setup',
        link: '/Language/ROS1/English/1 ROS Overview and Environment Setup',
        items: [
          { text: '1.1 Introduction to ROS', 
            link: '/Language/ROS1/English/1.1 Introduction to ROS',
            collapsed: true,
            items: [
              { text: '1.1.1 ROS Concepts', link: '/Language/ROS1/English/1.1.1 ROS Concepts' },
              { text: '1.1.2 ROS Design Goals', link: '/Language/ROS1/English/1.1.2 ROS Design Goals' },
              { text: '1.1.3 Evolution of ROS', link: '/Language/ROS1/English/1.1.3 Evolution of ROS' }
            ]
           },
           { text: '1.2 Installing ROS', 
            link: '/Language/ROS1/English/1.2 Installing ROS',
            collapsed: true,
            items: [
              { text: '1.2.1 Installing ROS', link: '/Language/ROS1/English/1.2.1 Installing ROS' },
              { text: '1.2.2 Testing ROS', link: '/Language/ROS1/English/1.2.2 Testing ROS' }
            ]
           },
           { text: '1.3 Quick ROS Experience', 
            link: '/Language/ROS1/English/1.3 Quick ROS Experience',
            collapsed: true,
            items: [
              { text: '1.3.1 HelloWorld Overview', link: '/Language/ROS1/English/1.3.1 HelloWorld Implementation Overview' },
              { text: '1.3.2 HelloWorld', link: '/Language/ROS1/English/1.3.2 HelloWorld' }
            ]
           },
          { text: '1.4 ROS Dev Env Setup', 
            link: '/Language/ROS1/English/1.4 ROS Integrated Development Environment Setup',
            collapsed: true,
            items: [
              { text: '1.4.1 Terminal Installation', link: '/Language/ROS1/English/1.4.1 Terminal Installation' },
              { text: '1.4.2 Installing VScode', link: '/Language/ROS1/English/1.4.2 Installing VScode' },
              { text: '1.4.3 Launch File', link: '/Language/ROS1/English/1.4.3 Launch File Demonstration' },
            ]
           },
           { text: '1.5 ROS Architecture', 
            link: '/Language/ROS1/English/1.5 ROS Architecture',
            collapsed: true,
            items: [
              { text: '1.5.1 ROS File System', link: '/Language/ROS1/English/1.5.1 ROS File System' },
              { text: '1.5.2 Filesystem Commands', link: '/Language/ROS1/English/1.5.2 ROS Filesystem Related Commands' },
              { text: '1.5.3 Computation Graph', link: '/Language/ROS1/English/1.5.3 ROS Computation Graph' },
            ]
           },
           { text: '1.6 Chapter Summary', link: '/Language/ROS1/English/1.6 Chapter Summary'},
        ]
      },


      {
        text: 'Chapter 2 ROS Communication Mechanisms',
        link: '/Language/ROS1/English/Chapter 2 ROS Communication Mechanisms',
        items: [
          { text: '2.1 Topic Communication', link: '/Language/ROS1/English/2.1 Topic Communication',collapsed: true,
            items: [
               { text: '2.1.1 Topic Communication Theoretical Model', link: '/Language/ROS1/English/2.1.1 Topic Communication Theoretical Model' },
               { text: '2.1.2 Topic Communication Basic Operations', link: '/Language/ROS1/English/2.1.2 Topic Communication Basic Operations' },
               { text: '2.1.3 Topic Communication Custom msg', link: '/Language/ROS1/English/2.1.3 Topic Communication Custom msg' },
               { text: '2.1.4 Topic Communication Custom msg Call', link: '/Language/ROS1/English/2.1.4 Topic Communication Custom msg Call' }
            ]
          },
          { text: '2.2 Service Communication', link: '/Language/ROS1/English/2.2 Service Communication',collapsed: true,
            items: [
                { text: '2.2.1 Service Communication Theoretical Model', link: '/Language/ROS1/English/2.2.1 Service Communication Theoretical Model' },
                { text: '2.2.2 Service Communication Custom srv', link: '/Language/ROS1/English/2.2.2 Service Communication Custom srv' },
                { text: '2.2.3 Service Communication Custom srv Call', link: '/Language/ROS1/English/2.2.3 Service Communication Custom srv Call' },
            ]
           },
          { text: '2.3 参数服务器', link: '/Language/中文/2.3 参数服务器',collapsed: true,
            items: [
                { text: '2.3.1 参数服务器理论模型', link: '/Language/中文/2.3.1 参数服务器理论模型' },
                { text: '2.3.2 参数操作(Python)', link: '/Language/中文/2.3.2 参数操作(Python)' },
            ]
           },
           { text: '2.4 常用命令', link: '/Language/中文/2.4 常用命令',collapsed: true,
            items: [
                { text: '2.4.1 rosnode', link: '/Language/中文/2.4.1 rosnode' },
                { text: '2.4.2 rostopic', link: '/Language/中文/2.4.2 rostopic' },
                { text: '2.4.3 rosmsg', link: '/Language/中文/2.4.3 rosmsg' },
                { text: '2.4.4 rosservice', link: '/Language/中文/2.4.4 rosservice' },
                { text: '2.4.5 rossrv', link: '/Language/中文/2.4.5 rossrv' },
                { text: '2.4.6 rosparam', link: '/Language/中文/2.4.6 rosparam' },
            ]
           },
           { text: '2.5 通信机制实操', link: '/Language/中文/2.5 通信机制实操',collapsed: true,
            items: [
                { text: '2.5.1 实操01_话题发布', link: '/Language/中文/2.5.1 实操01_话题发布' },
                { text: '2.5.2 实操02_话题订阅', link: '/Language/中文/2.5.2 实操02_话题订阅' },
                { text: '2.5.3 实操03_服务调用', link: '/Language/中文/2.5.3 实操03_服务调用' },
                { text: '2.5.4 实操04_参数设置', link: '/Language/中文/2.5.4 实操04_参数设置' },
            ]
           },
           { text: '2.6 通信机制比较', link: '/Language/中文/2.6 通信机制比较'},
           { text: '2.7 本章小结', link: '/Language/中文/2.7 本章小结'}
        ]
      }
    ]    
}