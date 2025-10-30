import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ros1Note",
  description: "For student learning",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Ros笔记', link: '/markdown-examples' },
      { text: 'Ros笔记', link: '/markdown-examples' },
      { text: 'Ros笔记', link: '/markdown-examples' },
      { text: 'Ros笔记', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        link: '/markdown-examples',
        items: [
          { text: 'Markdown Examples', 
            link: '/markdown-examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
           },

          { text: 'Runtime API Examples', link: '/api-examples' },

          { text: 'Ros', link: '/api-examples' }
        ]
      },


      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Ros', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SCP999CSP/ROS-WebNotes' }
    ]
  }
})
