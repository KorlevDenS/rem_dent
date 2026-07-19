import {Box, Container, Divider, Stack, Typography} from "@mui/material";
import {BottomInfo} from "./common/BottomInfo.tsx";

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
    return (
        <Box sx={{py: 6, backgroundColor: themeColor, borderRadius: 7, color: "background.paper" }}>
            <Container >

                <Box sx={{ display: "flex", alignItems: "center", flexDirection: imgLeft ? "row-reverse" : "row",}}>
                    <Stack spacing={1}>
                        <Typography sx={{pb: 1, textAlign:  imgLeft ? "right" : "left"}} variant="h3" >
                            {title}
                        </Typography>
                        <Typography variant="body2" >
                            {description}
                        </Typography>
                        <Divider sx={{pb: 0.5, pt: 0.5}}/>
                        <Box sx={{display: "flex"}}>
                            <Typography variant="body2" >
                                Стоимость услуги:
                            </Typography>
                            <Typography variant="body2" sx={{textAlign: "right", flexGrow: 1}}>
                                {cost}
                            </Typography>
                        </Box>
                    </Stack>
                    <Box>
                        <Box
                            component="img" src={img} alt={title}
                            sx={{
                                ml: imgLeft ? 0 : 4,
                                mr: imgLeft ? 4 : 0,
                                width: imgWidth,
                                height: "auto",
                                borderRadius: 3,
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export function ServicesPage() {
    return (

        <Stack sx={{ mt: 3, alignItems: "center" }} spacing={3}>
            <Container maxWidth={false} sx={{ maxWidth: { xs: '95%', md: '92%', lg: '87%', xl: '75%' } }}>
                <Stack sx={{mt : 3}} spacing={3}>
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
                        img={"/images/check_up.png"}
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
                        img={"/images/plate_denture.png"}
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
                        img={"/images/removable_clasp_dentures.jpg"}
                        themeColor={"secondary.main"}
                    />
                    <ServiceCard
                        title={"Металлокерамическеи коронки"}
                        description={"Имеют в основе литьевой металлический каркас с нанесёнными слоями" +
                            "керамической массы. Моя техническая часть использует керамическую массу фирмы " +
                            "\"Shofu\" (Япония), доказавшую свою долговечность в эстетике за 20 лет использовании " +
                            "в стоматологии."}
                        cost={"15 000₽"}
                        imgLeft={true}
                        imgWidth={300}
                        img={"/images/metal_ceramic_crowns.png"}
                        themeColor={"primary.main"}
                    />
                    <ServiceCard
                        title={"Циркониевые коронки"}
                        description={"Изготавливается методом фрезерования на основе 3D-модели с возможностью " +
                            "дополнительного нанесения керамики для цветовой индивидуализации. Фиксация проиводитя на " +
                            "цветовой цемент. Достоинства: высокая индивидуальная эстетичность и прочность."}
                        cost={"25 000₽"}
                        imgLeft={false}
                        imgWidth={300}
                        img={"/images/zirconium.png"}
                        themeColor={"secondary.main"}
                    />
                    <ServiceCard
                        title={"Коронки на имплантах"}
                        description={"Требуют изготовления основы конструкции (абатмента) и дальнейшей фиксации " +
                            "металлокерамической или циркониевой коронки на цемент или методом винтовой фиксации."}
                        cost={"30 000₽"}
                        imgLeft={true}
                        imgWidth={300}
                        img={"/images/glavnaya.png"}
                        themeColor={"primary.main"}
                    />
                </Stack>
            </Container>
            <BottomInfo/>
        </Stack>

    );
}