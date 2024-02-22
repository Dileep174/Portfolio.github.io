
import { createWebHistory, createRouter } from 'vue-router'
import Home from '../view/page/Home.vue'
import about from '../view/page/about.vue'
import resume from '../view/page/resume.vue'
import services from '@/view/page/services.vue'
import skills from '@/view/page/skills.vue'
import portfolio from '@/view/page/portfolio.vue'
import testimonial from '@/view/page/testimonial.vue'
import contact from '@/view/page/contact.vue'
import Design from '../view/posts/Design.vue'
import Develoment from '@/view/posts/Develoment.vue'
import Seo from '@/view/posts/Seo.vue'



const routes=[
    {
        name:'Home',
        path:'/',
        component: Home
    },

    {
        name:'about',
        path:'/about',
        component: about
    },

    {
        name:'resume',
        path:'/resume',
        component: resume
    },

    {
        name:'services',
        path:'/services',
        component: services
    },
    {
        name:'skills',
        path:'/skills',
        component: skills 
    },

    {
        name:'portfolio',
        path:'/portfolio',
        component: portfolio
    },

    {
        name:'testimonial',
        path:'/testimonial',
        component: testimonial
    },

    {
        name:'contact',
        path:'/contact',
        component: contact
    },

    {
        name:'Design',
        path:'/Design',
        component: Design,
    },

    {
        name:'Develoment',
        path:'/Develoment',
        component: Develoment,
    },

    {
        name:'Seo',
        path:'/Seo',
        component: Seo,
    },
];

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
    
});

export default router;