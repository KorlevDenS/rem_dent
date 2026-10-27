import {AboutModule} from "../pages/AboutModule.tsx";
import type {MetaFunction} from "react-router";

export const meta: MetaFunction = () => [
    {title: 'Стоматологические конструкции в Раменском — Владимир Королёв'},
    {
        name: 'description',
        content: 'Изготовление съёмных и несъёмных протезов, коронок и ортопедических конструкций в Раменском. 30 лет опыта. Эстетика, комфорт и долговечность.'
    },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'ru_RU' },
    { property: 'og:title', content: 'Стоматолог-ортопед Владимир Королёв в Раменском' },
    { property: 'og:description', content: 'Изготовление съёмных и несъёмных протезов, коронок и ортопедических конструкций в Раменском. 30 лет опыта. Эстетика, комфорт и долговечность.' },
    { property: 'og:url', content: 'https://korolevdent.ru/' },
    { property: 'og:image', content: 'https://korolevdent.ru/images/korolevdent-stomatolog-ortoped-vladimir-korolev.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Стоматолог-ортопед Владимир Королёв' },
    {
        'script:ld+json': {
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            'name': 'Стоматологические конструкции Владимира Королёва',
            'image': 'https://korolevdent.ru/logo.svg', // Путь к вашему логотипу
            'telephone': '+79251954343',
            'priceRange': '₽₽',
            'hasMap': 'https://yandex.ru/maps/-/CXbyfU52',
            'sameAs': [
                'https://prodoctorov.ru/kursk/vrach/1042830-korolev/',
                'https://zoon.ru/msk/p-doctor/vladimir_viktorovich_korolev/'
            ],
            'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Северное шоссе, 10',
                'addressLocality': 'Раменское',
                'addressRegion': 'Московская область',
                'postalCode': '140105',
                'addressCountry': 'RU',
            },
            'geo': {
                '@type': 'GeoCoordinates',
                'latitude': '55.582477', // Замените на точные координаты вашей точки
                'longitude': '38.221878',
            },
            'url': 'https://korolevdent.ru',
            'openingHoursSpecification': [
                {
                    '@type': 'OpeningHoursSpecification',
                    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    'opens': '09:00',
                    'closes': '22:00',
                },
            ]
        },
    },
]

export default function AboutPage() {
    return <AboutModule/>;
}