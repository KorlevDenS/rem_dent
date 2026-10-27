import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
    // Главная страница ( '/' )
    index('routes/about.tsx'),

    // Остальные страницы из вашего списка пререндеринга
    route('services', 'routes/services.tsx'),
    route('contacts', 'routes/contacts.tsx'),
    route('legal', 'routes/legal.tsx'),

    // Страница 404 для всех остальных несуществующих путей
    route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig