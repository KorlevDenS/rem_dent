import { Link } from 'react-router'
import { Box, Typography, Button } from '@mui/material'
import type { MetaFunction } from 'react-router'

// Мета-теги для страницы 404 (важно для SEO)
export const meta: MetaFunction = () => [
    { title: 'Страница не найдена (404) — Стоматолог Владимир Королёв' },
    { name: 'robots', content: 'noindex, follow' },
]

export default function NotFound() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '70vh',
                textAlign: 'center',
                px: 3,
            }}
        >
            <Typography variant="h1" component="h1" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '4rem', md: '6rem' } }}>
                404
            </Typography>

            <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 500 }}>
                Опс! Такой страницы не существует.
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, maxWidth: 500, color: 'text.secondary' }}>
                Возможно, адрес был введен с ошибкой или страница была перемещена. Вы можете вернуться на главную.
            </Typography>

            <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                size="large"
                sx={{ textTransform: 'none', px: 4, py: 1.5 }}
            >
                На главную страницу
            </Button>
        </Box>
    )
}