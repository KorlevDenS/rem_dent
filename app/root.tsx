import type { LinksFunction, MetaFunction } from 'react-router'
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from 'react-router'
import { Box } from '@mui/material'
import TopBar from './navigation/TopBar' // Убедитесь, что путь к TopBar правильный относительно папки app/
import { AppProviders } from './application/AppProviders'

import './fonts.css'

export const meta: MetaFunction = () => [
    { title: 'Стоматолог-ортопед Владимир Королёв — коронки и протезы в Раменском' },
    { name: 'yandex-verification', content: '1c7d743f15d4954f' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { charSet: 'utf-8' },
]

export const links: LinksFunction = () => [
    { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
]

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <meta charSet="utf-8" />
            <Meta />
            <Links />
        </head>
        <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        </body>
        </html>
    )
}

export default function AppRoot() {
    return (
        <AppProviders>
            <Box>
                {/* Шапка сайта теперь всегда на экране */}
                <TopBar />

                {/* Сюда React Router динамически подставит нужную страницу (Home, Services и т.д.) */}
                <Outlet />
            </Box>
        </AppProviders>
    )
}