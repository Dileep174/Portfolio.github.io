<script>
export default {
    data() {
       return {
        title:'About',
        heading: 'Every great design begin with<br> an even <span>better story</span>',
        discription: 'Since beginning my journey as a freelance designer nearly 8 years ago,I &apos; ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I &apos; m quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.'
       } 
    }
}

</script>


<template>
    
    <main class="drake-main">
        <div id="smooth-wrapper">
            <div id="smooth-content">
                
                <section class="about-area page-section scroll-to-page" id="about">     
                    <div class="custom-container">
                        <div class="about-content content-width">
                            <div class="section-header">
                                <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                    <i class="lar la-user"></i> {{ title }}
                                </h4>
                                <h1 class="scroll-animation" data-animation="fade_from_bottom" v-html="heading"></h1>
                            </div>
                            <p class="scroll-animation" data-animation="fade_from_bottom">{{ discription }}</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </main>
</template>