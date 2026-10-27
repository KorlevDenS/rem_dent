import {AboutModule} from "../pages/AboutModule.tsx";
import * as React from "react";
import {ContactsModule} from "../pages/ContactsModule.tsx";
import {ServicesModule} from "../pages/ServicesModule.tsx";
import InfoIcon from '@mui/icons-material/Info';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import type {SvgIconComponent} from "@mui/icons-material";
import {LegalInfoModule} from "../pages/LegalInfoModule.tsx";
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
        component: AboutModule,
        additional: false,
        icon: InfoIcon,
    },
    {
        path: "/services",
        label: "КОНСТРУКЦИИ И ЦЕНЫ",
        component: ServicesModule,
        additional: false,
        icon: CurrencyRubleIcon
    },
    {
        path: "/contacts",
        label: "КОНТАКТЫ",
        component: ContactsModule,
        additional: true,
        icon: PermPhoneMsgIcon
    },
    {
        path: "/legal",
        label: "ПРАВОВАЯ ИНФОРМАЦИЯ",
        component: LegalInfoModule,
        additional: true,
        icon: PolicyIcon
    },
];
