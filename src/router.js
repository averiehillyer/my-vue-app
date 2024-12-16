import {createRouter, createWebHistory} from 'vue-router'
import About from "./components/Portfolio/About.vue";
import PortfolioHomepage from "./components/Portfolio/Home.vue"
import PortfolioWork from "./components/Portfolio/Work.vue"
import ContactMe from "./components/Portfolio/ContactMe.vue";
import CaseStudies from "./components/Portfolio/CaseStudies.vue";
import PortfolioDetails from './components/Portfolio/Details.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // your routes go here
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/portfolio/home',
            name: 'PortfolioHome',
            component: PortfolioHomepage
        },
        {
            path: '/portfolio/work',
            name: 'PortfolioWork',
            children: [
                {
                    path: '',
                    component: PortfolioWork,
                },
                {
                    path: 'details/:portfolioItemId',
                    name: 'PortfolioDetails',
                    component: PortfolioDetails
                }
            ]
        },
        {
            path: '/contactme',
            name: 'ContactMe',
            component: ContactMe
        },
        {
            path: '/casestudies',
            name: 'CaseStudies',
            component: CaseStudies
        }
    ]
})
export default router