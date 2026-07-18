import {createTheme} from "@mui/material/styles";
import palette from "./palette.ts";
import typography from "./typography.ts";
import shape from "./shape.ts";
import breakpoints from "./breakpoints.ts";

import "@fontsource/dancing-script";


export const theme  = createTheme({
    palette,
    typography,
    shape,
    breakpoints
});