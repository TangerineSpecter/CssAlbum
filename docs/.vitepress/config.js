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
        lastUpdated: true,
        lastUpdatedText: "最近更新时间",
        outlineTitle: "本页目录",
        outline: ['2', '3'],
        logo: '/icon.png',
        algolia: {
            appId: 'xxx',
            apiKey: 'xxxx',
            indexName: 'xxx'
        },
        footer: {
            message: 'Released under the Apache-2.0 license License.',
            copyright: 'Copyright © 2023-present Evan You'
        },
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
                    items: [
                        { text: 'flex弹性布局', link: '/basic/flex/index' },
                    ]
                }
            ],
            '/skill/': [
                {
                    items: [
                        { text: '渐变色', link: '/skill/gradientColor/index' },
                    ]
                }
            ],
            '/album/': [
                {
                    text: '字体',
                    items: [
                        { text: '涂抹效果', link: '/album/text/textSmear/index' },
                        { text: '跳动Loading', link: '/album/text/jumpLoading/index' }
                    ]
                },
                {
                    text: '按钮',
                    items: [
                        { text: '三只小鸟', link: '/album/button/bird/index' }
                    ]
                },
                {
                    text: '动画效果',
                    items: [
                        { text: '毛玻璃', link: '/album/animation/clarityGlass/index' },
                        { text: '文字雨', link: '/album/animation/wordRain/index' }
                    ]
                },
                {
                    text: '时间效果',
                    items: [
                        { text: '赛博朋克时钟', link: '/album/clock/cyberpunk/index' }
                    ]
                },
                {
                    text: '艺术',
                    items: [
                        { text: '黑猫', link: '/album/art/blackCat/index' }
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