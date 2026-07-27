import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {PAGES} from "../../navigation/pages.ts";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

export function BottomInfo() {

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));

    const border = isXs
        ? 5
        : isSm
            ? 5.5
            : isMd
                ? 6
                : isLg
                    ? 7
                    : 7; // XL

    return (
        <Box sx={{ pt: 9, pb: 4, backgroundColor: "primary.main",
            borderRadius: border, borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0, color: "background.paper", boxShadow: theme.shadows[10] }}>
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