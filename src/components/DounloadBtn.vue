<template>
<main class="drake-main">
    <div id="smooth-wrapper">
        <div id="smooth-content">

            <!-- <section class="hero-section page-section scroll-to-page" id="home">

                <div class="custom-container">
                    <div class="hero-content content-width">
                        
                    </div>
                </div>
            </section> -->
            <a to="#portfolio" class="go-to-project-btn scroll-to scroll-animation" data-animation="rotate_up" >
                            
                            <img src="/src/assets/images/round-text.png" alt="Rounded Text">
                            <i class="las la-arrow-down"></i>
                        </a>

        </div>
    </div>
</main>

</template>

  
<script>
import jsPDF from 'jspdf';
export default {
    methods: {
        download() {
            const pdf = new jsPDF();
            // const html = this.$refs.content.innerHTML
            pdf.text('Hello, this is a PDF!', 10, 10);
            // pdf.text(html, 10, 10);
            pdf.save('document.pdf');
        },
    }
};
</script>
