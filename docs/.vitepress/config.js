/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
    base: '/CssAlbum/',
    lang: 'zh-CN',
    title: 'CSS画册',
    description: '记录好玩好看的CSS效果',
    themeConfig: {
        siteTitle: 'CSS画册',
        search: true,
        searchMaxSuggestions: 10,
        docFooter: { prev: '上一篇', next: '下一篇' },
        lastUpdatedText: "最近更新时间",
        logo: '/icon.png',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/TangerineSpecter' }
        ],
        nav: [
            { text: '首页', link: '/' },
            { text: '基础', link: '/basic/index' },
            { text: '技巧', link: '/skill/index' },
            { text: '画册', link: '/album/index' }
        ],
        sidebar: {
            '/basic/': [
                {
                    text: 'CSS语法',
                    items: [
                        { text: 'Text(文本)', link: '/text' },
                    ]
                }
            ],
            '/album/': [
                {
                    text: '字体',
                    items: [
                        { text: '涂抹效果', link: '/album/text/TextSmear' }
                    ]
                },
                {
                    text: '动画效果',
                    items: [
                        // { text: '向日葵', link: '/album/animation/SunFlower' }
                    ]
                }
            ]
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': '.vitepress/public/'
            }
        }
    }
}

export default config