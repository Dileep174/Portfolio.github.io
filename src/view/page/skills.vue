<script setup>
import { ref } from 'vue';
const cards = ref([
    {url:'/src/assets/images/figma.png', percent:'92%', name:'Figma'},
    {url:'/src/assets/images/framer.png', percent:'85%', name:'Framer'},
    {url:'/src/assets/images/webflow.png', percent:'80%', name:'Webflow'},
    {url:'/src/assets/images/react.png', percent:'90%', name:'React'},
    {url:'/src/assets/images/wordpress.png', percent:'86%', name:'Wordpress'},
    {url:'/src/assets/images/laravel.png', percent:'70%', name:'Laravel/PHP'}
])
</script>

<template>

<main class="drake-main">
        <div id="smooth-wrapper">
            <div id="smooth-content">
                
                <section class="skills-area page-section scroll-to-page" id="skills">
                    <div class="custom-container">
                        <div class="skills-content content-width">
                            <div class="section-header">
                                <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                    <i class="las la-shapes"></i> my skills
                                </h4>
                                <h1 class="scroll-animation" data-animation="fade_from_bottom">My <span>Advantages</span></h1>
                            </div>
        
                            <div class="row skills text-center">
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_left" v-for="(card,) in cards">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img :src="card.url" alt="Figma">
                                            <h1 class="percent">{{ card.percent }}</h1>
                                        </div>
                                        <p class="name">{{ card.name }}</p>
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