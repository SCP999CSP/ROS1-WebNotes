import { defineConfig } from 'vitepress'
import nav from './nav.mts'
import sidebar from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RoboParks Note",
  description: "For student learning",
  head:[["link",{rel:"icon",href:"/2.ico"}]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar:sidebar ,

    socialLinks: [  
      { icon: 'github', link: 'https://github.com/SCP999CSP/ROS-WebNotes' },
      { icon: 'youtube', link: 'https://twitter.com/youyuxi' },
      { icon: 'linkedin', link: '' }
    ]
  }
})
