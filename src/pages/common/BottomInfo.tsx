import {Box, Container, Typography} from "@mui/material";
import {PAGES} from "../../navigation/pages.ts";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

export function BottomInfo() {

    return (
        <Box sx={{ pt: 9, pb: 4, backgroundColor: "primary.main", borderRadius: 7, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, color: "background.paper" }}>
            <Container  maxWidth={false} sx={{ maxWidth: { xs: '95%', md: '92%', lg: '87%', xl: '75%' } }}>
                <Typography variant="body1" >
                    18+. Имеются противопоказания. Необходима консультация специалиста. Информация на данном сайте
                    не является публичной офертой. Уникальный номер реестровой записи об аккредитации специалиста:
                    7726 034054336. Последняя аккредитация проведена 24.03.2026.
                </Typography>
                {PAGES.filter((p) => p.path == "/legal").map((page) => (
                    <Button
                        key={page.path}
                        to={page.path}
                        component={Link}
                        variant="contained"
                        sx={{
                            mt: 2,
                            borderRadius: 2,
                            fontWeight: 600,
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: "primary.light",
                            "&:hover": {
                                backgroundColor: "primary.dark",
                            },
                        }}
                    >
                        Правовая информация
                    </Button>
                ))}
            </Container>
        </Box>
    );
}