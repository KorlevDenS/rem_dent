import {Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {BottomInfo} from "./common/BottomInfo.tsx";
import {SEO} from "./common/SEO.tsx";

type ServiceCardProps = {
    title: string;
    description: string;
    cost: string;
    imgLeft: boolean;
    imgWidth: number;
    img: string;
    themeColor: string;
};

function ServiceCard({title, description, cost, imgLeft, imgWidth, img, themeColor}: ServiceCardProps) {

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));

    return (
        <Box sx={{
            boxShadow: theme.shadows[10],
            py: { xs: 3, md: 6},
            backgroundColor: themeColor,
            borderRadius: {xs: 5, sm: 5.5, md: 6, lg: 7, xl: 7},
            color: "background.paper"
        }}>
            <Container >

                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: imgLeft ? {xs: "column-reverse", md: "row-reverse"} : {xs: "column-reverse", md: "row"},
                }}>
                    <Stack spacing={1}>
                        {!(isXs || isSm) &&
                            <Typography
                                variant="h3"
                                sx={{
                                    pb: 1,
                                    textAlign:  {xs: "center", md: imgLeft ? "right" : "left"}
                                }}
                            >
                                {title}
                            </Typography>
                        }
                        <Typography
                            variant="body2"
                            sx={{
                                pb: 1,
                                textAlign: {xs: "justify", md: "unset"},
                                fontSize: {xs: "1.25rem", sm: "1.35rem", md: "1.45rem"},
                                lineHeight: {xs: 1.5, sm: 1.5, md: 1.5},
                            }}>
                            {description}
                        </Typography>
                        <Divider sx={{pb: 0.5, pt: 0.5}}/>
                        <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}}}>
                            {!isXs &&
                                <Typography variant="body2" >
                                    Стоимость услуги:
                                </Typography>
                            }
                            <Typography variant="body2" sx={{textAlign: {xs: "center", sm: "right"}, flexGrow: 1}}>
                                {cost}
                            </Typography>
                        </Box>
                    </Stack>
                    <Box>
                        <Box
                            component="img" src={img} alt={title}
                            sx={{
                                mt: { xs: 2.5, sm: 3, md: 0},
                                mb: { xs: 0.5, sm: 2, md: 0},
                                ml: imgLeft ? {xs: "auto", md: 0} : {xs: "auto", md: 4},
                                mr: imgLeft ? {xs: "auto", md: 4} : {xs: "auto", md: 0},
                                width: {
                                    xs: imgWidth - 120,
                                    sm: imgWidth - 80,
                                    md: imgWidth - 50,
                                    lg: imgWidth - 20,
                                    xl: imgWidth
                                },
                                height: "auto",
                                borderRadius: 3,
                            }}
                        />
                    </Box>
                    {(isXs || isSm) &&
                        <Stack>
                            <Typography
                                variant="h3"
                                sx={{
                                    mt: 2,
                                    textAlign: "center",
                                    fontSize: {xs: "1.7rem", sm: "1.75rem", md: "1.8rem"},
                                }}
                            >
                                {title}
                            </Typography>
                        </Stack>
                    }
                </Box>
            </Container>
        </Box>
    );
}

export function ServicesPage() {

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));

    const mainSpacing = isXs ? 4.5 : 6;

    return (

        <Stack sx={{ mt: {xs: 4.5, sm: 6}, alignItems: "center" }} spacing={mainSpacing}>

            <SEO
                title="Стоматологические услуги в Раменском — протезы, коронки, консультации"
                description="Съёмные и несъёмные протезы, бюгельные конструкции, металлокерамические и циркониевые
                коронки, коронки на имплантах. Консультация стоматолога‑ортопеда в Раменском."
            />

            <Container maxWidth={false} sx={{ maxWidth: { xs: '100%', md: '92%', lg: '87%', xl: '75%' } }}>
                <Stack spacing={mainSpacing}>
                    <ServiceCard
                        title={"Консультация"}
                        description={"Предварительную консультацию можно всегда получить по телефону бесплатно. " +
                            "В клинике на очной консультации Вы получите полную информацию о состоянии полости " +
                            "рта. С учётом ваших пожеланий и возможностью решения проблем мы выберем метод лечения " +
                            "и протезирования с определением стоимости работ. Оговорённая общая стоимость работ " +
                            "остаётся неизменной до финала её исполнения."}
                        cost={"500₽"}
                        imgLeft={false}
                        imgWidth={300}
                        img={"/images/korolevdent-stomatologicheskaya-konsultaciya.png"}
                        themeColor={"secondary.main"}
                    />
                    <ServiceCard
                        title={"Пластиночные съёмные протезы"}
                        description={"Пластиночные лёгкие протезы изготавливаются из гипоаллергенной пластмассы " +
                            "методом литья. Гарнитура зубов \"Primodent\" подбирается индивидуально. Достоинства: " +
                            "лёгкость, наличие слабо-видимых кламмеров крепления."}
                        cost={"от 30 000₽ до 50 000₽"}
                        imgLeft={true}
                        imgWidth={300}
                        img={"/images/korolevdent-plastinochnye-semnyie-protezy.png"}
                        themeColor={"primary.main"}
                    />
                    <ServiceCard
                        title={"Бюгельные съёмные протезы"}
                        description={"В основе имеют ажурный металлический прочный каркас, изготовленный методом " +
                            "литья с последующей установкой зубов \"Primodent\". Достоинства: равномерное " +
                            "распределение нагрузки на опорные зубы, долговечность."}
                        cost={"от 50 000₽ до 70 000₽"}
                        imgLeft={false}
                        imgWidth={300}
                        img={"/images/korolevdent-bugelnyie-semnyie-protezy.jpg"}
                        themeColor={"secondary.main"}
                    />
                    <ServiceCard
                        title={"Металлокерамические коронки"}
                        description={"Имеют в основе литьевой металлический каркас с нанесёнными слоями " +
                            "керамической массы. Моя техническая часть использует керамическую массу фирмы " +
                            "\"Shofu\" (Япония), доказавшую свою долговечность в эстетике за 20 лет использования " +
                            "в стоматологии."}
                        cost={"15 000₽"}
                        imgLeft={true}
                        imgWidth={300}
                        img={"/images/korolevdent-metallokeramicheskie-koronki.png"}
                        themeColor={"primary.main"}
                    />
                    <ServiceCard
                        title={"Циркониевые коронки"}
                        description={"Изготавливаются методом фрезерования на основе 3D-модели с возможностью " +
                            "дополнительного нанесения керамики для цветовой индивидуализации. Фиксация производится на " +
                            "цветовой цемент. Достоинства: индивидуальная эстетичность и высокая прочность."}
                        cost={"25 000₽"}
                        imgLeft={false}
                        imgWidth={300}
                        img={"/images/korolevdent-cirkonievye-koronki.png"}
                        themeColor={"secondary.main"}
                    />
                    <ServiceCard
                        title={"Коронки на имплантах"}
                        description={"Требуют изготовления основы конструкции (абатмента) и дальнейшей фиксации " +
                            "металлокерамической или циркониевой коронки на цемент или методом винтовой фиксации."}
                        cost={"30 000₽"}
                        imgLeft={true}
                        imgWidth={300}
                        img={"/images/korolevdent-koronki-na-implantah.jpg"}
                        themeColor={"primary.main"}
                    />
                </Stack>
            </Container>
            <BottomInfo/>
        </Stack>

    );
}