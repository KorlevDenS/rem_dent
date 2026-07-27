import {
    Accordion, AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    List,
    ListItem,
    ListItemText,
    Paper,
    Stack,
    Typography, useMediaQuery, useTheme
} from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function LegalInfoPage() {

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));

    const mainSpacing = isXs ? 4.5 : 6;

    return (
        <Container maxWidth={false} sx={{ maxWidth: { xs: '95%', md: '92%', lg: '87%', xl: '75%' } }}>
            <Stack spacing={mainSpacing} sx={{
                my: {xs: 4.5, sm: 6}
            }}>
                <Paper elevation={3} sx={{
                    py: {xs: 4, sm: 5, md: 6},
                    pl: {xs: 4, sm: 5, md: 6},
                    pr: {xs: 0, sm: 3, md: 4},
                    borderRadius: 3
                }}>
                    <Typography variant="h3" align={"center"} sx={{mb: 3, mr: {xs: 4, sm: 2}}}>
                        Информация для пациентов
                    </Typography>
                    <List sx={{ listStyleType: "disc", pl: {xs: 0, sm: 2, md: 4} }}>
                        <ListItem sx={{ display: "list-item" }}>
                            <ListItemText primary="18+. Имеются противопоказания. Необходима консультация специалиста." />
                        </ListItem>
                        <ListItem sx={{ display: "list-item" }}>
                            <ListItemText primary="На сайте не предусмотрены формы сбора персональных данных
                     (ФИО, телефон, email и др.). Информация носит исключительно ознакомительный характер." />
                        </ListItem>
                        <ListItem sx={{ display: "list-item" }}>
                            <ListItemText primary="Информация на сайте носит исключительно информационный характер и не
                    является публичной офертой (ст. 437 ГК РФ)." />
                        </ListItem>
                        <ListItem sx={{ display: "list-item" }}>
                            <ListItemText primary="Все условия (цены, сроки, наличие материалов) уточняются при записи
                    на приём." />
                        </ListItem>
                        <ListItem sx={{ display: "list-item" }}>
                            <ListItemText primary="Перечень услуг носит ознакомительный характер. Окончательный план
                    лечения и возможность выполнения конкретной процедуры определяются врачом после консультации
                    и с учётом медицинских показаний." />
                        </ListItem>
                    </List>
                </Paper>
                <Paper elevation={3} sx={{
                    py: {xs: 4, sm: 3, md: 4},
                    pl: {xs: 4, sm: 3, md: 4},
                    pr: {xs: 4, sm: 3, md: 4},
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <Typography variant="h3" align={"center"} sx={{mb: 3 }}>
                        Сведения о специалисте
                    </Typography>
                    <List sx={{ listStyleType: "disc" }}>
                        <ListItem>
                            <ListItemText primary="ФИО: Королёв Владимир Викторович" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Уровень образования: Ординатура - высшее" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Специальность: Стоматология ортопедическая" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Окончил: Московский Медицинский Стоматологический институт (ММСИ),
                            1987 г." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Аккредитация: Уникальный номер реестровой записи об аккредитации
                            специалиста: 7726 034054336. Проведена 24.03.2026 в ФГБОУ ДПО" />
                        </ListItem>
                        <ListItem>
                            <Accordion sx={{width: "100%"}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography component="span">Выписка об аккердитации</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{  ml: "auto", mr: "auto",
                                        width: "100%",
                                        height: "700px",
                                    }}>
                                        <iframe
                                            src="/docs/accreditation.pdf"
                                            style={{ width: "100%", height: "100%", border: "none" }}
                                        />
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </ListItem>
                    </List>
                </Paper>
            </Stack>
        </Container>

    );
}