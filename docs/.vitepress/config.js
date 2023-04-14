/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
    lang: 'en-ZN',
    title: 'CSS画册',
    description: '记录好玩好看的CSS效果',
    themeConfig: {
        siteTitle: 'CSS画册',
        // logo: '/my-logo.svg' logo配置
        nav: [
            { text: '首页', link: '/' },
            { text: '基础', link: '/guide' },
            { text: '技巧', link: '/configs' },
            { text: '画册', link: '/config' }
        ],
        sidebar: [
            {
              text: 'Guide',
              items: [
                { text: 'Introduction', link: '/introduction' },
                { text: 'Getting Started', link: '/getting-started' },
              ]
            }
          ]
    }
}

export default config