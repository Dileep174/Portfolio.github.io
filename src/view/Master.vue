<script>
import Header from '@/components/Header.vue';
import Home from './page/Home.vue';
import About from './page/about.vue';
import Resume from './page/resume.vue';
import Services from './page/services.vue';
import Skills from './page/skills.vue';
import Portfolio from './page/portfolio.vue';
import Testimonial from './page/testimonial.vue';
import Pricing from './page/pricing.vue';
import Footer from '@/components/Footer.vue';
import Contact from './page/contact.vue';
    export default { 
        components: { Header, Home, About, Resume, Services, Skills, Portfolio, Testimonial, Pricing, Footer, Contact },
    }
</script>


<template>
    <div>
        <Header></Header>

        <Home></Home>
        <About></About>
        <Resume></Resume>
        <Services></Services>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Testimonial></Testimonial>
        <Pricing></Pricing>
        <Contact></Contact>

        <Footer></Footer>

    </div>
</template>

                   