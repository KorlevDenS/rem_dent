import {Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {BottomInfo} from "./common/BottomInfo.tsx";
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from "@mui/material/IconButton";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function ClinicMap() {
    return (
        <Box
            sx={{
                width: "100%",
                height: { xs: 400, sm: 500, md: 550, lg: 580, xl: 600},
                borderRadius: 4,
                overflow: "hidden",
            }}
        >
            <YMaps>
                <Map
                    defaultState={{
                        center: [55.582477, 38.221878], // координаты клиники
                        zoom: 16,
                    }}
                    width="100%"
                    height="100%"
                >
                    <Placemark geometry={[55.582477, 38.221878]} />
                </Map>
            </YMaps>
        </Box>
    );
}

const TelegramChatButton = ({ username = "your_username" }) => {
    const openTelegram = () => {
        const appLink = `tg://resolve?domain=${username}`;
        const webLink = `https://t.me/${username}`;

        // Пытаемся открыть приложение Telegram
        window.location.href = appLink;

        // Если приложение не установлено — откроется веб-версия
        setTimeout(() => {
            window.open(webLink, "_blank");
        }, 300);
    };

    return (
        <IconButton
            onClick={openTelegram}
            sx={{
                mx: 2,
                width: 50,
                height: 50,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                color: "background.paper",
                "&:hover": {
                    backgroundColor: "primary.dark",
                },
            }}
        >
            <TelegramIcon sx={{ fontSize: 32 }} />
        </IconButton>
    );
};

export function ContactsPage() {

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Stack spacing={0}>
            <Box sx={{
                pt: { xs: 7, md: 10, lg: 12, xl: 14 },
                pb: { xs: 3.7, md: 5.5, lg: 6.5, xl: 8 }
            }}>
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
                        Чтобы записаться
                    </Typography>
                    <Typography variant="body2" sx={{ maxWidth: "600px", mt: 3.7  }}>
                        свяжитесь с нами удобным вам способом и приходите на приём
                    </Typography>
                </Container>
            </Box>
            <Box sx={{ pb: 11,
                backgroundColor: "secondary.main",
                background: {
                    xs: `linear-gradient(to bottom, ${theme.palette.background.default} 0%, ${theme.palette.background.default} 11%, ${theme.palette.primary.main} 11%, ${theme.palette.primary.main} 100%)`,
                    sm: `linear-gradient(to bottom, ${theme.palette.background.default} 0%, ${theme.palette.background.default} 17%, ${theme.palette.primary.main} 17%, ${theme.palette.primary.main} 100%)`
                },
                borderRadius: 0, color: "background.paper" }}>
                <Container  maxWidth={false} sx={{ maxWidth: { xs: '95%', md: '92%', lg: '87%', xl: '75%' } }}>
                    <Stack>
                        <Box sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        }}>
                            <Box sx={{
                                width: "100%",
                                mr: {xs: "auto", sm: 2},
                                ml: {xs: "auto", sm: 0},
                                mb: {xs: 4.5, sm: 0},
                                py: 4,
                                px: 4,
                                backgroundColor: "secondary.main",
                                boxShadow: theme.shadows[10],
                                display: "flex",
                                justifyContent: "center",
                                borderRadius: {xs: 5, sm: 5.5, md: 6, lg: 7, xl: 7}}}
                            >
                                <Stack spacing={2}>
                                    <Box sx={{ display: "flex"}}>
                                        <PhoneIcon sx={{
                                            flexGrow: 1,
                                            fontSize: {xs: 55, sm: 60, md: 65, lg: 70, xl: 70}
                                        }}/>
                                    </Box>
                                    <Typography sx={{pb: 1, textAlign: "center"}} variant="h4" >
                                        Звоните по телефону
                                    </Typography>
                                    <Typography sx={{pb: 1, textAlign: "center"}} variant="h4" >
                                        +7 (925) 195-43-43
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box sx={{
                                width: "100%",
                                mr: {xs: "auto", sm: 0},
                                ml: {xs: "auto", sm: 2},
                                py: 4,
                                px: 4,
                                backgroundColor: "secondary.main",
                                display: "flex",
                                justifyContent: "center",
                                borderRadius: {xs: 5, sm: 5.5, md: 6, lg: 7, xl: 7},
                                boxShadow: theme.shadows[10]
                            }}>
                                <Stack spacing={2}>
                                    <Box sx={{ display: "flex"}}>
                                        <ChatIcon sx={{
                                            flexGrow: 1,
                                            fontSize: {xs: 55, sm: 60, md: 65, lg: 70, xl: 70}
                                        }}/>
                                    </Box>
                                    <Typography sx={{pb: 1, textAlign: "center"}} variant="h4" >
                                        Или пишите в месседжер
                                    </Typography>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row",}}>
                                        <TelegramChatButton username={"DenISsim0"}/>
                                        <IconButton
                                            sx={{
                                                mx: 2,
                                                width: 50,
                                                height: 50,
                                                borderRadius: "50%",
                                                backgroundColor: "primary.main",
                                                color: "background.paper",
                                                "&:hover": {
                                                    backgroundColor: "primary.dark",
                                                },
                                            }}
                                        >
                                            <TelegramIcon sx={{ fontSize: 32 }} />
                                        </IconButton>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                        <Box sx={{mt: 7, mb: 3.5, display: "flex", flexGrow: 1, justifyContent: "center", alignItems: "center"}}>
                            {!isXs &&
                                <AccessTimeIcon sx={{
                                    mr: 2,
                                    fontSize: {xs: 55, sm: 60, md: 65, lg: 70, xl: 70}
                                }}/>
                            }
                            <Stack spacing={1.5} sx={{flexGrow: 1, }}>
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    {isXs &&
                                        <AccessTimeIcon sx={{
                                            mr: 2,
                                            fontSize: {xs: 55, sm: 60, md: 65, lg: 70, xl: 70}
                                        }}/>
                                    }
                                    <Typography variant="h4" align={"center"} sx={{mt: 0, textDecoration: "underline",}}>
                                        График работы
                                    </Typography>
                                </Box>
                                <Typography variant="h4" align={"center"} sx={{mt: 0}}>
                                    ежедневно, только по предварительной записи
                                </Typography>
                            </Stack>
                        </Box>
                        <Divider/>
                        <Box sx={{mt: 3.5, display: "flex", flexGrow: 1, justifyContent: "center", alignItems: "center"}}>
                            {!isXs &&
                                <LocationPinIcon sx={{
                                    mr: 2,
                                    fontSize: {xs: 55, sm: 60, md: 65, lg: 70, xl: 70}
                                }}/>
                            }
                            <Stack spacing={1.5} sx={{flexGrow: 1, }} >
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    {isXs &&
                                        <LocationPinIcon sx={{
                                            mr: 1,
                                            fontSize: {xs: 55, sm: 60, md: 65, lg: 70, xl: 70}
                                        }}/>
                                    }
                                    <Typography variant="h4" align={"center"} sx={{mt: 0, textDecoration: "underline",}}>
                                        Адрес приёма
                                    </Typography>
                                </Box>
                                <Typography variant="h4" align={"center"} sx={{mt: 0}}>
                                    г. Раменское, ул. Северное шоссе, д. 10, офисный центр "Плаза Рамстарс", 1-й этаж,
                                    ООО "Улыбка"
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Box sx={{ py: 10 }}>
                <Container maxWidth={false} sx={{ maxWidth: { xs: '95%', md: '92%', lg: '87%', xl: '75%' } }}>
                    <ClinicMap/>
                </Container>
            </Box>
            <BottomInfo/>
        </Stack>
    );
}