import {MainPage} from "../pages/MainPage.tsx";
import * as React from "react";
import {ContactsPage} from "../pages/ContactsPage.tsx";
// import {DentistPage} from "../pages/DentistPage.tsx";
import {ServicesPage} from "../pages/ServicesPage.tsx";
import InfoIcon from '@mui/icons-material/Info';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
// import PersonIcon from '@mui/icons-material/Person';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import type {SvgIconComponent} from "@mui/icons-material";
import {LegalInfoPage} from "../pages/LegalInfo.tsx";
import PolicyIcon from '@mui/icons-material/Policy';

export const TITLE: string = "Korolev dent";

export interface PageConfig {
    path: string;
    label: string;
    component: React.FC;
    additional: boolean,
    icon?: SvgIconComponent;
    hidden?: boolean;
}

export const PAGES: PageConfig[] = [
    {
        path: "/",
        label: "ПАЦИЕНТАМ",
        component: MainPage,
        additional: false,
        icon: InfoIcon,
    },
    {
        path: "/services",
        label: "КОНСТРУКЦИИ И ЦЕНЫ",
        component: ServicesPage,
        additional: false,
        icon: CurrencyRubleIcon
    },
    // {
    //     path: "/dentist",
    //     label: "О СЕБЕ",
    //     component: DentistPage,
    //     additional: false,
    //     icon: PersonIcon
    // },
    {
        path: "/contacts",
        label: "КОНТАКТЫ",
        component: ContactsPage,
        additional: true,
        icon: PermPhoneMsgIcon
    },
    {
        path: "/legal",
        label: "ПРАВОВАЯ ИНФОРМАЦИЯ",
        component: LegalInfoPage,
        additional: true,
        icon: PolicyIcon
    },
];
