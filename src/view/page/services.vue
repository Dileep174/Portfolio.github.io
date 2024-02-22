<script setup>
import { ref } from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBezierCurve  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faBezierCurve );
const cards = ref([
    {name:'Website Design', url:'', discription:'I created digital products with unique ideas use Figma & Framer', projects:'24 Projects'},
    {name:'Development', url:'las la-bezier-curve', discription:'I build website go live with Framer, Webflow or WordPress', projects:'126 PROJECTS'},
    {name:'SEO/Marketing', url:'', discription:'Increase the traffic for your website with SEO optimized', projects:'8 PROJECTS'}
])

</script>

<template>
<main class="drake-main">
        <div id="smooth-wrapper">
            <div id="smooth-content">
                
                <section class="services-area page-section scroll-to-page" id="services">
                    <div class="custom-container">
                        <div class="services-content content-width">
                            <div class="section-header">
                                <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                    <i class="las la-stream"></i> Services
                                </h4>
                                <h1 class="scroll-animation" data-animation="fade_from_bottom">My <span>Specializations</span></h1>
                            </div>  
        
                            <div class="services-items">
                                <div class="service-item scroll-animation" data-animation="fade_from_bottom" v-for="card in cards">
                                    <i class=""><font-awesome-icon :icon="['fas', 'bezier-curve']" /></i>
                                    <h2>{{ card.name }}</h2>
                                    <p>{{ card.discription }}</p>
                                    <span class="projects">{{ card.projects }}</span>
                                </div>
                                <!-- <div class="service-item scroll-animation" data-animation="fade_from_bottom">
                                    <i class="las la-code"></i>
                                    <h2>Development</h2>
                                    <p>I build website go live with Framer, Webflow or WordPress</p>
                                    <span class="projects">126 Projects</span>
                                </div>
                                <div class="service-item scroll-animation" data-animation="fade_from_bottom">
                                    <i class="las la-bezier-curve"></i>
                                    <h2>SEO/Marketing</h2>
                                    <p>Increase the traffic for your website with SEO optimized</p>
                                    <span class="projects">8 Projects</span>
                                </div> -->
                            </div>
        
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </main>
    
</template>