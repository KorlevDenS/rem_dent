import {LegalInfoModule} from "../pages/LegalInfoModule.tsx";
import type {MetaFunction} from "react-router";

export const meta: MetaFunction = () => [
    {title: 'Информация для пациентов и сведения о стоматологе‑ортопеде — Раменское'},
    {
        name: 'description',
        content: 'Юридическая информация для пациентов, возрастные ограничения, условия оказания услуг, сведения о стоматологе‑ортопеде Владимире Королёве, образование и аккредитация. Раменское.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'ru_RU' },
    { property: 'og:title', content: 'Информация для пациентов и сведения о стоматологе‑ортопеде — Раменское' },
    { property: 'og:description', content: 'Юридическая информация для пациентов, возрастные ограничения, условия оказания услуг, сведения о стоматологе‑ортопеде Владимире Королёве, образование и аккредитация. Раменское.' },
    { property: 'og:url', content: 'https://korolevdent.ru/legal' },
    { property: 'og:image', content: 'https://korolevdent.ru/images/korolevdent-stomatolog-ortoped-vladimir-korolev.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Стоматолог-ортопед Владимир Королёв' },
]

export default function AboutPage() {
    return <LegalInfoModule />;
}