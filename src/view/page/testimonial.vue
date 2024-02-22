<script setup>
import { ref } from 'vue'
const testimonial = ref([
    {
        title:'Testimonial',
        cardTitle:'Trusted by <span>Hundered Clients</span>',
        brandTitle:'work with 60+ brands worldwide'
    }
]);
const clients = ref([
    {url:'/src/assets/images/testimonial-1.jpg', name:'Paublo Dybala', profile:'CEO of <span>IBM Global</span>', project:'Project',
    msg:'“Drake - A Developer with the creativity, professional and master of code. Much more than what i&sbquo;m expect. High quality product & flexiable price. Recommended!.”',},
    {url:'/src/assets/images/testimonial-2.jpg', name:'Christina Morillo', profile:'Product Management of <span>Invision App Inc</span>', project:'Project',
    msg:'“Drake was a real pleasure to work with and we look forward to working with him again. He&sbquo;s definitely the kind of designer that you can trust with any project from A-Z.”'},
    {url:'/src/assets/images/testimonial-3.jpg', name:'Phil Foden', profile:'Director of <span>Envato LLC</span>', project:'Project',
    msg:'“Extremely profressional and fast service!. Drake is a master of code and he also very creative. We done 3 projects with him and certain will continue.”'}
]);
const brands = ref([
    {url:'/src/assets/images/client-1.png'},
    {url:'/src/assets/images/client-2.png'},
    {url:'/src/assets/images/client-3.png'},
    {url:'/src/assets/images/client-4.png'},
    {url:'/src/assets/images/client-5.png'},
    {url:'/src/assets/images/client-6.png'},
    {url:'/src/assets/images/client-7.png'},
    {url:'/src/assets/images/client-8.png'}
])
</script>

<template>
<main class="drake-main">
        <div id="smooth-wrapper">
            <div id="smooth-content">
                
                <section class="testimonial-area page-section scroll-to-page" id="testimonial">
                    <div class="custom-container">
                        <div class="testimonial-content content-width" v-for="testi in testimonial">
                            <div class="section-header">
                                <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                    <i class="lar la-comment"></i> {{testi.title}}
                                </h4>
                                <h1 class="scroll-animation" data-animation="fade_from_bottom" v-html="testi.cardTitle"></h1>
                            </div>
        
                            <div class="testimonial-slider-wrap scroll-animation" data-animation="fade_from_bottom">
                                <div class="owl-carousel testimonial-slider owl-theme owl-loaded owl-drag">
                                    <div class="testimonial-item" v-for="client in clients">
                                        <div class="testimonial-item-inner">
                                            <div class="author d-flex align-items-center">
                                                <img :src="client.url" alt="portfolio">
                                                <div class="right">
                                                    <h3>{{ client.name }}</h3>
                                                    <p class="designation" v-html="client.profile"></p>
                                                </div>
                                            </div>
                                            <p>{{ client.msg }}</p>
        
                                            <a href="" class="project-btn">{{ client.project }}</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-footer-nav">
                                    <div class="testimonial-nav d-flex align-items-center">
                                        <button class="prev"><i class="las la-angle-left"></i></button>
                                        <div id="testimonial-slide-count"></div>
                                        <button class="next"><i class="las la-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
        
                            <div class="clients-logos">
                                <h4 class="scroll-animation" data-animation="fade_from_bottom">{{ testi.brandTitle }}</h4>
                                <div class="row align-items-center">
                                    <div class="col-md-3 scroll-animation" data-animation="fade_from_left" v-for="brand in brands">
                                        <img :src="brand.url" alt="client">
                                    </div>
                                </div>
                            </div>
        
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
    
</template>