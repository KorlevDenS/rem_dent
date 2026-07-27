import type {PaletteMode} from "@mui/material";

export default {
    mode: "light" as PaletteMode,

    primary: {
        main: "#432d16",
        light: "#c8925f",
        dark: "#7f5329",
        contrastText: "#F2E8D5",
    },

    secondary: {
        main: "#8FAF8F",      // теплый зелёный (sage warm)
        light: "#AFC8AF",
        dark: "#6F8F6F",
        contrastText: "#ffffff",
    },

    error: {
        light: "#ef5350",
        main: "#d32f2f",
        dark: "#c62828",
        contrastText: "#fff",
    },

    warning: {
        light: "#ffb74d",
        main: "#f57c00",
        dark: "#e65100",
        contrastText: "#fff",
    },

    info: {
        light: "#64b5f6",
        main: "#2196f3",
        dark: "#1565c0",
        contrastText: "#fff",
    },

    success: {
        light: "#81c784",
        main: "#4caf50",
        dark: "#2e7d32",
        contrastText: "#fff",
    },

    background: {
        default: "#F2E8D5",   // песочный фон
        contrast: "#CBB08E",   // песочный фон
        paper: "#ffffff",     // чистые панели
    },

    text: {
        primary: "#2F2F2F",   // графитовый — современный контраст
        secondary: "#555555",
        disabled: "#9e9e9e",
    },

    divider: "#e0e0e0",

    action: {
        active: "#6d6d6d",
        hover: "rgba(0,0,0,0.04)",
        selected: "rgba(0,0,0,0.08)",
        disabled: "rgba(0,0,0,0.26)",
        disabledBackground: "rgba(0,0,0,0.12)",
        focus: "rgba(0,0,0,0.12)",
    },
};

