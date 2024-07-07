import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "lss.vip",
  description: "Link sharing service",
  themeConfig: {
    logo:"logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://lss.vip' },
      { text: 'Lss.vip', link: 'https://lss.vip' }
    ],

    sidebar: [
      {
        text: 'Link sharing service',
        items: [
          { text: '🌎China', link: '/China' },
          { text: '🌎全球', link: '/Global' },
          { text: '🌎更新日志', link: '/Changelog' },
          { text: '🌎申请收录', link: '/about' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'lss.vip Link sharing service.',
      copyright: 'Copyright © 2024'
    }
  }
})
