import { Button, Typography, Box, useTheme, useMediaQuery } from "@mui/material";

function App() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  //const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));


  return (
      <Box >
        <Typography variant="h2">Приложение работает</Typography>
        <Button variant="contained">Кнопка</Button>
        { isMobile &&
            <Button variant="contained">Кнопка для телефона</Button>
        }
      </Box>
  )
}

export default App
