module.exports = {
    base: '/',
    title: 'PurgeTeam',
    description: 'PurgeTeam blog docs',
    head: [["link", {rel: "icon", href: `/favicon.ico`}]],
    markdown: {
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/zh/': {
            lang: '简体中文',
            title: 'PurgeTeam',
            description: '中文'
        },
        '/': {
            lang: 'English', // 将会被设置为 <html> 的 lang 属性
            title: 'PurgeTeam',
            description: '英文'
        }
    },
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/purgeteam/',
        // 自定义仓库链接文字。
        repoLabel: 'PurgeTeam GitHub',
        nav: [
            {
                text: '首页', link: '/zh/'
            },
            {
                text: '指南', link: '/zh/guide/unified-dispose-springboot-starter/'
            },
            {
                text: '生态',
                items: [
                    {
                        text: "全局处理(异常+返回)",
                        link: "https://github.com/purgeteam/unified-dispose-springboot"
                    }, {
                        text: "swagger集成",
                        link: "https://github.com/purgeteam/swagger-spring-boot"
                    }, {
                        text: "ElasticJob Starter",
                        link: "https://github.com/purgeteam/elastic-job-spring-boot"
                    }, {
                        text: "动态配置监听",
                        link: "https://github.com/purgeteam/dynamic-config-spring-boot"
                    }, {
                        text: "Mysql多数据源",
                        link: "https://github.com/purgeteam/data-source-spring-boot"
                    }, {
                        text: "日志链路追踪",
                        link: "https://github.com/purgeteam/log-trace-spring-boot"
                    },
                ]
            },
            {text: '个人博客', link: 'https://github.com/purgeyao.github.io'}
        ],
        sidebar: [
            ['/zh/', '首页'],
            ['/zh/guide/unified-dispose-springboot-starter/', '全局处理'],
            ['/zh/guide/swagger-spring-boot/', 'Swagger集成'],
            ['/zh/guide/elastic-job-spring-boot/', 'ElasticJob Plus'],
            ['/zh/guide/dynamic-config-spring-boot/', '动态配置监听'],
            ['/zh/guide/data-source-spring-boot/', 'Mysql多数据源'],
            ['/zh/guide/log-trace-spring-boot/', '日志链路追踪']
        ]
    }
}