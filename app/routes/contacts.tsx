import {ContactsModule} from "../pages/ContactsModule.tsx";
import type {MetaFunction} from "react-router";

export const meta: MetaFunction = () => [
    {title: 'Контакты стоматолога‑ортопеда в Раменском — запись на приём'},
    {
        name: 'description',
        content: 'Запись на приём к стоматологу‑ортопеду Владимиру Королёву в Раменском. Телефон +7 (925) 195‑43‑43, мессенджер, график работы и адрес клиники на Северном шоссе, 10.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'ru_RU' },
    { property: 'og:title', content: 'Контакты стоматолога‑ортопеда в Раменском — запись на приём' },
    { property: 'og:description', content: 'Запись на приём к стоматологу‑ортопеду Владимиру Королёву в Раменском. Телефон +7 (925) 195‑43‑43, мессенджер, график работы и адрес клиники на Северном шоссе, 10.' },
    { property: 'og:url', content: 'https://korolevdent.ru/contacts' },
    { property: 'og:image', content: 'https://korolevdent.ru/images/korolevdent-stomatolog-ortoped-vladimir-korolev.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Стоматолог-ортопед Владимир Королёв' },
]

export default function AboutPage() {
    return <ContactsModule />;
}