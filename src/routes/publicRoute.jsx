import { lazy } from 'react'

const HomePage = lazy(() => import("../features/static/pages/HomePage"));
const AboutUsPage = lazy(() => import("../features/static/pages/AboutUsPage"));
const ContactUsPage = lazy(() => import("../features/static/pages/ContactUsPage"));


const publicRoute =  [
    {
        index: true,
        element: <HomePage />
    },
    {
        path: "about-us",
        element: <AboutUsPage />
    },
    {
        path: "contact-us",
        element: <ContactUsPage />
    },
    
]
export default publicRoute