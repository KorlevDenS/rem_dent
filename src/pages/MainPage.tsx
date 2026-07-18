import { Box, Container, Typography, Stack } from "@mui/material";
import {BottomInfo} from "./common/BottomInfo.tsx";

//primary.contrastText

export function MainPage() {
    return (
        <Stack spacing={0}>
            <Box sx={{ py: 14 }}>
                <Container maxWidth={false} sx={{ maxWidth: { xs: '95%', md: '92%', lg: '87%', xl: '75%' } }}>
                    <Typography variant="h2" sx={{
                        color: "primary.main",
                        maxWidth: "900px",
                            fontSize: {
                                xs: "2rem",
                                sm: "2.2rem",
                                md: "2.5rem",
                                lg: "2.8rem",
                                xl: "3rem",
                            }}}>
                        Стоматологические конструкции от Владимира Королёва
                    </Typography>
                    <Typography variant="body2" sx={{ maxWidth: "900px", mt: 3  }}>
                        Владимир Королёв — стоматолог‑ортопед с 30‑летним опытом, специализирующийся на восстановлении
                        улыбки и сложных ортопедических конструкциях. Мой подход сочетает точность, спокойствие и
                        глубокое уважение к каждому пациенту.
                    </Typography>
                </Container>
            </Box>
            <Box sx={{ py: 11, backgroundColor: "secondary.main", borderRadius: 7, color: "background.paper" }}>
                <Container  maxWidth={false} sx={{ maxWidth: { xs: '95%', md: '92%', lg: '87%', xl: '75%' } }}>
                    <Typography variant="h2" sx={{
                        //color: "primary.main",
                        ml: "auto",
                        maxWidth: "900px",
                        fontSize: {
                            xs: "2rem",
                            sm: "2.2rem",
                            md: "2.5rem",
                            lg: "2.8rem",
                            xl: "3rem",
                        }}}>
                        Альтернатива имплантации
                    </Typography>
                    <Typography variant="body2" sx={{ maxWidth: "900px", mt: 3, ml: "auto" }} >
                        Если у Вас имплантация не может привести к желаемому результату, имеются противопоказания
                        или негативное отношение к ней, мы достигнем отличного результата для Вас при помощи
                        качественных съёмных или несъёмных протезов и коронок.
                    </Typography>
                </Container>
            </Box>
            <Box sx={{ py: 14 }}>
                <Container maxWidth={false} sx={{ maxWidth: { xs: '95%', md: '92%', lg: '87%', xl: '75%' } }}>
                    <Typography variant="h2" sx={{
                        color: "primary.main",
                        maxWidth: "900px",
                        fontSize: {
                            xs: "2rem",
                            sm: "2.2rem",
                            md: "2.5rem",
                            lg: "2.8rem",
                            xl: "3rem",
                        }}}>
                        Выбор, который остаётся за вами
                    </Typography>
                    <Typography variant="body2" sx={{ maxWidth: "900px", mt: 3  }}>
                        Вариантов решения стоматологических проблем обычно несколько. Для Вас всегда будут
                        предложены различные подходы в исполнении лечения и изготовления конструкций без
                        навязывания приоритетного варианта. Комфортная цена всей работы, её эстетичность,
                        удобство и долговечность - это правило для меня и возможность для Вас.
                    </Typography>
                </Container>
            </Box>
            <BottomInfo/>
        </Stack>

    );
}