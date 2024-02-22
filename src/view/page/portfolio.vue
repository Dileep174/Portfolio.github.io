<script>
import {ref} from 'vue'
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            port: {
                url1: '/src/assets/images/portfolio1.jpg',
                url2: '/src/assets/images/portfolio2.jpg',
                url3: '/src/assets/images/portfolio3.jpg',
                url4: '/src/assets/images/portfolio4.jpg',
                url5: '/src/assets/images/portfolio5.jpg',
                name1: 'Bureau - Architecture Studio Website',
                name2: 'Moonex WordPress Theme',
                name3: 'Taskly Dashboard',
                name4: 'Hinterland - Real Estate Site Redesign',
                name5: 'Lewis Portfolio Framer Template'
            }
        };
    },
    components: { RouterLink },
    
}
</script>

<template>
<main class="drake-main">
        <div id="smooth-wrapper">
            <div id="smooth-content">
                
                <section class="portfolio-area page-section scroll-to-page" id="portfolio"  ref="content">
                    <div class="custom-container">
                        <div class="portfolio-content content-width">
                            <div class="section-header">
                                <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                    <i class="las la-grip-vertical"></i> portfolio
                                </h4>
                                <h1 class="scroll-animation" data-animation="fade_from_bottom">Featured <span>Projects</span></h1>
                            </div>
        
                            <div class="row portfolio-items">
                                <div class="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                    
                                    <div class="portfolio-item portfolio-full">
                                        <div class="portfolio-item-inner">
                                            <a :href="port.url1" data-lightbox="example-1">
                                                <img :src="port.url1" alt="Portfolio">
                                            </a>
        
                                            <ul class="portfolio-categories">
                                                <li>
                                                    <a href="">Figma</a>
                                                </li>
                                                <li>
                                                    <a href="">Framer</a>
                                                </li>
                                                <li>
                                                    <a href="">WordPress</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h2><a href="">{{port.name1}}</a></h2>
                                    </div>
                                </div>
        
                                <div class="col-md-6 scroll-animation" data-animation="fade_from_left">
                                    <div class="portfolio-item portfolio-half">
                                        <div class="portfolio-item-inner">
                                            <a :href="port.url2" data-lightbox="example-1">
                                                <img :src="port.url2" alt="Portfolio">
                                            </a>

                                            <img :src="port.url2" alt="Portfolio">
        
                                            <ul class="portfolio-categories">
                                                <li>
                                                    <a href="">WordPress</a>
                                                </li>
                                                <li>
                                                    <a href="">Larevel/PHP</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h2><a href="">{{port.name2}}</a></h2>
                                    </div>
                                </div>
        
                                <div class="col-md-6 scroll-animation" data-animation="fade_from_right">
                                    <div class="portfolio-item portfolio-half">
                                        <div class="portfolio-item-inner">
                                            <a :href="port.url3" data-lightbox="example-1">
                                                <img :src="port.url3" alt="Portfolio">
                                            </a>
        
                                            <ul class="portfolio-categories">
                                                <li>
                                                    <a href="">Figma</a>
                                                </li>
                                                <li>
                                                    <a href="">Webflow</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h2><a href="">{{port.name3}}</a></h2>
                                    </div>
                                </div>
        
                                <div class="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                    <div class="portfolio-item portfolio-half">
                                        <div class="portfolio-item-inner">
                                            <a :href="port.url4" data-lightbox="example-1">
                                                <img :src="port.url3" alt="portfolio">
                                            </a>
        
                                            <ul class="portfolio-categories">
                                                <li>
                                                    <a href="">Figma</a>
                                                </li>
                                                <li>
                                                    <a href="">React</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h2><a href="">{{port.name4}}</a></h2>
                                    </div>
                                </div>
        
                                <div class="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                    <div class="portfolio-item portfolio-half">
                                        <div class="portfolio-item-inner">
                                            <a :href="port.url5" data-lightbox="example-1">
                                                <img :src="port.url5" alt="portfolio">
                                            </a>
        
                                            <ul class="portfolio-categories">
                                                <li>
                                                    <a href="">Framer</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h2><a href="">{{port.name5}}</a></h2>
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