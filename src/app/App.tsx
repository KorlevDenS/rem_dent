import { Box } from "@mui/material";
import TopBar from "../navigation/TopBar.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PAGES} from "../navigation/pages.ts";

function App() {

    return (
        <BrowserRouter>
            <Box>
                <TopBar/>
                <Routes>
                    {PAGES.map(page => (
                        <Route key={page.path} path={page.path} element={<page.component/>} />
                    ))}
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App
