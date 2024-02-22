<script>
import jsPDF from 'jspdf';

export default {
    data() {
        return {
            content: {
                title: 'Introduce',
                heading: 'Say Hi from <span>Welkin</span>, Framer Designer and Developer',
                discription: 'I design and code beautifully simple things and i love what i do. Just simple like that!'
            },
            button: {
                url: 'src/assets/images/round-text.png'
            },
            enp: {
                experience: '<h1>10+</h1><p>Years of <br>Experience</p>',
                projects: '<h1>182+</h1><p>projects completed on <br>15 countries</p>'
            }
        }
    },
    methods: {
            download() {
            const pdf = new jsPDF();
            // const html = this.$refs.content.innerHTML
            pdf.text('Hello, this is a PDF!', 10, 10);
            // pdf.text(html, 10, 10);
            pdf.save('document.pdf');
            },
        }
}
        
        
    
</script>



<template>

<!-- <div class="page-loader">
        <div class="bounceball"></div>
    </div> -->    
    <main class="drake-main">
        <div id="smooth-wrapper">
            <div id="smooth-content">

                <section class="hero-section page-section scroll-to-page" id="home">
                    
                    <div class="custom-container">
                        <div class="hero-content content-width">
                            <div class="section-header">
                                <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                    <i class="las la-home"></i> {{ content.title }}
                                </h4>
                                
                                <h1 class="scroll-animation" data-animation="fade_from_bottom" v-html="content.heading"></h1>
                            </div>
                            <p class="scroll-animation" data-animation="fade_from_bottom">{{ content.discription }}</p>
                            <a to="#portfolio" 
                                class="go-to-project-btn scroll-to scroll-animation" 
                                data-animation="rotate_up" @click="download">
                                <!-- <img src="/src/assets/images/round-text.png" alt="Rounded Text"> -->
                                <img :src="button.url" alt="Rounded Text">
                                <i class="las la-arrow-down"></i>
                            </a>
        
                            <div class="facts d-flex">
                                <div class="left scroll-animation" data-animation="fade_from_left" v-html="enp.experience"></div>
                                <div class="right scroll-animation" data-animation="fade_from_right" v-html="enp.projects"></div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </main>
    <div>

    </div>
</template>


