import { Container, Paper, Typography, Stack, Box } from "@mui/material";


export function DentistPage() {
    return (
        <Container maxWidth="xl" sx={{mt: 3}}>
            <Paper elevation={3} sx={{p: 4}}>
                <Typography variant="h4" gutterBottom>
                    Наши услуги
                </Typography>

                <Typography variant="body1" sx={{mb: 3}}>
                    Мы предоставляем полный спектр стоматологических услуг — от профилактики до сложных хирургических
                    вмешательств.
                </Typography>

                <Stack spacing={3}>
                    <Box>
                        <Typography variant="h6">Лечение кариеса</Typography>
                        <Typography variant="body2">
                            Современные материалы, безболезненные методы, эстетичный результат.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h6">Профессиональная чистка</Typography>
                        <Typography variant="body2">
                            Удаление налёта, камня, полировка и рекомендации по уходу.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h6">Имплантация</Typography>
                        <Typography variant="body2">
                            Используем сертифицированные импланты и современные технологии.
                        </Typography>
                    </Box>
                </Stack>
            </Paper>
        </Container>
    );
}