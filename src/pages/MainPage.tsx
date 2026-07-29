import {Box, Container, Typography, Stack, ImageList, ImageListItem, useTheme, useMediaQuery} from "@mui/material";
import {BottomInfo} from "./common/BottomInfo.tsx";
import {theme} from "../theme";
import {SEO} from "./common/SEO.tsx";

const itemData = [
    {
        img: '/images/korolevdent-cirkonievye-koronki.png',
        title: 'Циркониевые зубные коронки',
        rows: 4,
        cols: 2,
    },
    {
        img: '/images/korolevdent-koronki-na-implantah.jpg',
        title: 'Зубные коронки на имплантах',
        rows: 2,
        cols: 2,
    },
    {
        img: '/images/korolevdent-metallokeramicheskie-koronki.png',
        title: 'Металлокерамические зубные коронки',
        rows: 1,
        cols: 1,
    },
    {
        img: '/images/korolevdent-bugelnyie-semnyie-protezy.jpg',
        title: 'Бюгельные съемные зубные протезы',
        rows: 2,
        cols: 1,
    },
    {
        img: '/images/korolevdent-plastinochnye-semnyie-protezy.png',
        title: 'Пластиночные съемные зубные протезы',
        rows: 1,
        cols: 1,
    },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function QuiltedImageList() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));

    const rowHeight = isXs
        ? 62.5
        : isSm
            ? 67.5
            : isMd
                ? 72.5
                : isLg
                    ? 80
                    : 89.5; // XL

    return (
        <ImageList
            sx={{
                mt: { xs: 6, md: "auto"},
                mb: "auto",
                ml: "auto",
                mr: { xs: "auto", md: 0},
                width: { xs: 250, sm: 290, md: 290, lg: 320, xl: 370 },
                minWidth: { xs: 250, sm: 290, md: 290, lg: 320, xl: 370 },
                minHeight: { xs: 250, sm: 290, md: 290, lg: 320, xl: 370 },
                borderRadius: {xs: 5, sm: 5.5, md: 6, lg: 7, xl: 7},
                boxShadow: theme.shadows[7]}}
            variant="quilted"
            cols={4}
            rowHeight={rowHeight}
        >
            {itemData.map((item) => (
                <ImageListItem
                    key={item.img}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                >
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export function MainPage() {
    return (
        <Stack spacing={0}>

            <SEO
                title="Стоматологические конструкции в Раменском — Владимир Королёв"
                description="Изготовление съёмных и несъёмных протезов, коронок и ортопедических конструкций в
                Раменском. 30 лет опыта. Эстетика, комфорт и долговечность."
            />

            <Box sx={{ py: { xs: 6, md: 8, lg: 10, xl: 10 } }}>
                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row",}}>
                    <Container maxWidth={false} sx={{ maxWidth: { xs: '95%', md: '92%', lg: '87%', xl: '75%' } }}>
                        <Box sx={{ display: "flex", flexDirection: {xs: "column", md: "row"},}}>
                            <Stack>
                                <Typography variant="h2" sx={{
                                    color: "primary.main",
                                    maxWidth: "900px",
                                    fontSize: {
                                        xs: "1.8rem",
                                        sm: "2.2rem",
                                        md: "2.5rem",
                                        lg: "2.8rem",
                                        xl: "3rem",
                                    }}}>
                                    Стоматологические конструкции от Владимира Королёва
                                </Typography>
                                <Typography variant="body2"
                                            sx={{ maxWidth: "900px",
                                                textAlign: "left",
                                                mt: { xs: 6, md: 8, lg: 10, xl: 10 },
                                                fontSize: { xs: "1.5rem", md: "1.55rem", lg: "1.6rem", xl: "1.6rem" },
                                                lineHeight: { xs: 1.5, md: 1.65, lg: 1.8},
                                                fontFamily: "'Inter', sans-serif",
                                            }}>
                                    Владимир Королёв — стоматолог‑ортопед с 30‑летним опытом, специализирующийся на восстановлении
                                    улыбки и сложных ортопедических конструкциях. Мой подход сочетает точность, спокойствие и
                                    глубокое уважение к каждому пациенту.
                                </Typography>
                            </Stack>
                            <Box
                                sx={{
                                    mt: { xs: 6, md: 0},
                                    ml: "auto",
                                    mr: {xs: "auto", md: 0},
                                    minWidth: { xs: 290, sm: 370, md: 370, lg: 420, xl: 470 },
                                    minHeight: { xs: 290, sm: 370, md: 370, lg: 420, xl: 470 },
                                    maxHeight: { xs: 290, sm: 370, md: 370, lg: 420, xl: 470 },

                                    backgroundImage: "url(/images/korolevdent-stomatolog-ortoped-vladimir-korolev.jpg)",
                                    backgroundSize: "100% 100%",     // картинка всегда ровно по размеру Box
                                    backgroundPosition: "center",

                                    WebkitMaskImage: "url(/masks/blob.svg)",
                                    WebkitMaskSize: "100% 100%",     // маска всегда ровно по размеру Box
                                    WebkitMaskRepeat: "no-repeat",
                                    WebkitMaskPosition: "center",

                                    maskImage: "url(/masks/soft.svg)",
                                    maskSize: "100% 100%",           // маска не уменьшается
                                    maskRepeat: "no-repeat",
                                    maskPosition: "center",
                                }}
                            />
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Box sx={{ py: { xs: 7, md: 9, lg: 11, xl: 11 }, backgroundColor: "secondary.main",
                borderRadius: {xs: 5, sm: 5.5, md: 6, lg: 7, xl: 7}, color: "background.paper",
                boxShadow: theme.shadows[10]}}>

                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row",}}>
                    <Container  maxWidth={false} sx={{ maxWidth: { xs: '95%', md: '92%', lg: '87%', xl: '75%' } }}>
                        <Box sx={{ display: "flex", flexDirection: {xs: "column-reverse", md: "row"},}}>
                            <Box
                                component="img" src={"/images/korolevdent-siyayushchaya-ulybka-pacienta.png"}
                                alt={"Красивая улыбка пациента"}
                                sx={{
                                    mt: { xs: 6, md: 0},
                                    mr: {xs: "auto", md: 4},
                                    ml: {xs: "auto", md: 0},
                                    width: { xs: 250, sm: 290, md: 290, lg: 320, xl: 370 },
                                    height: "auto",
                                    borderRadius: {xs: 5, sm: 5.5, md: 6, lg: 7, xl: 7},
                                    boxShadow: theme.shadows[7]
                                }}
                            />
                            <Stack sx={{ml: "auto"}}>
                                <Typography variant="h2" sx={{
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
                                <Typography variant="body2" sx={{ maxWidth: "900px", mt: 6,}} >
                                    Если у Вас имплантация не может привести к желаемому результату, имеются противопоказания
                                    или негативное отношение к ней, мы достигнем отличного результата для Вас при помощи
                                    качественных съёмных или несъёмных протезов и коронок.
                                </Typography>
                            </Stack>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Box sx={{ py: { xs: 10, md: 11, lg: 14, xl: 14 } }}>
                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row",}}>
                    <Container maxWidth={false} sx={{ maxWidth: { xs: '95%', md: '92%', lg: '87%', xl: '75%' } }}>
                        <Box sx={{ display: "flex", flexDirection: {xs: "column", md: "row"},}}>
                            <Stack sx={{mr: {xs: 0, md: 4}}}>
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
                                <Typography variant="body2" sx={{ maxWidth: "900px", mt: 6  }}>
                                    Вариантов решения стоматологических проблем обычно несколько. Для Вас всегда будут
                                    предложены различные подходы в исполнении лечения и изготовления конструкций без
                                    навязывания приоритетного варианта. Комфортная цена всей работы, её эстетичность,
                                    удобство и долговечность - это правило для меня и возможность для Вас.
                                </Typography>
                            </Stack>
                            <QuiltedImageList/>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <BottomInfo/>
        </Stack>

    );
}