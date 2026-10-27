import type { Config } from '@react-router/dev/config'

export default {
    // Отключаем сервер (бэкенда нет, сайт собирается в чистую статику)
    ssr: false,

    // Прямая замена vite-plugin-prerender: те же самые роуты
    prerender: [
        '/',
        '/services',
        '/contacts',
        '/legal'
    ],
} satisfies Config