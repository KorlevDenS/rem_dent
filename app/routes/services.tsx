import {ServicesModule} from "../pages/ServicesModule.tsx";
import type {MetaFunction} from "react-router";

export const meta: MetaFunction = () => [
    {title: 'Стоматологические услуги в Раменском — протезы, коронки, консультации'},
    {
        name: 'description',
        content: 'Съёмные и несъёмные протезы, бюгельные конструкции, металлокерамические и циркониевые коронки, коронки на имплантах. Консультация стоматолога‑ортопеда в Раменском.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'ru_RU' },
    { property: 'og:title', content: 'Стоматологические услуги в Раменском — протезы, коронки, консультации' },
    { property: 'og:description', content: 'Съёмные и несъёмные протезы, бюгельные конструкции, металлокерамические и циркониевые коронки, коронки на имплантах. Консультация стоматолога‑ортопеда в Раменском.' },
    { property: 'og:url', content: 'https://korolevdent.ru/services' },
    { property: 'og:image', content: 'https://korolevdent.ru/images/korolevdent-stomatolog-ortoped-vladimir-korolev.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Стоматолог-ортопед Владимир Королёв' },
]

export default function AboutPage() {
    return <ServicesModule />;
}