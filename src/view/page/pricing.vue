<script setup>
import { ref } from 'vue'
const title = ref('My <span>Pricing</span>');
const cards = ref([
    {
        url:'', plan:'basic',budget:'Have design ready to build?<br>or small budget',
        cost:'$59 <span>/ hour</span>',btn:'pick this package',
        
        listOne:'Need your wireframe',
        listTwo:'Design with Figma, Framer',
        listThree:'Implement with Webflow, React, WordPress, Laravel/PHP',
        listFour:'Remote/Online',
        listFive:'Work in business days, no weekend.',
        listSix:'Support 6 months'
    },

    {
        url:'', plan:'premium',budget:'Not have any design?<br>Leave its for me',
        cost:'$129 <span>/ hour</span>',btn:'pick this package',
        
        listOne:'Don&sbquo;t need wireframe or anything',
        listTwo:'Design with Figma, Framer from scratch',
        listThree:'Implement with Webflow, React, WordPress, Laravel/PHP',
        listFour:'Remote/Online',
        listFive:'Work with both weekend',
        listSix:'Support 12 months',
        listSeven:'Your project alway be priority',
        listEight:'Customer care gifts'
    },

]);



</script>

<template>
<main class="drake-main">
        <div id="smooth-wrapper">
            <div id="smooth-content">
                
                <section class="pricing-area page-section scroll-to-page" id="pricing">
                    <div class="custom-container">
                        <div class="pricing-content content-width">
                            <div class="section-header">
                                <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                    <i class="las la-dollar-sign"></i> pricing
                                </h4>
                                <h1 class="scroll-animation" data-animation="fade_from_bottom" v-html="title"></h1>

                            </div>
        
                            <div class="pricing-table-items">
                                <div class="row">
                                    <div class="col-md-6 scroll-animation" data-animation="fade_from_left" v-for="card in cards">
                                        <div class="pricing-table">
                                            <div class="pricing-table-header">
                                                <div class="top d-flex justify-content-between align-items-start">
                                                    <h4>{{ card.plan }}</h4>
                                                    <p class="text-right" v-html="card.budget"></p>
                                                </div>
                                                <h1 v-html="card.cost"></h1>
                                            </div>
                                            <ul class="feature-lists">
                                                <li>{{card.listOne}}</li>
                                                <li>{{card.listTwo}}</li>
                                                <li>{{card.listThree}}</li>
                                                <li>{{card.listFour}}</li>
                                                <li>{{card.listFive}}</li>
                                                <li>{{card.lisSix}}</li>
                                                <li>{{card.listSeven}}</li>
                                                <li>{{ card.listEight }}</li>
                                                <li></li>
                                            </ul>
                                            <a href="" class="theme-btn">{{ card.btn }}</a>
                                        </div>
                                    </div>
                                    <!-- <div class="col-md-6 scroll-animation" data-animation="fade_from_right">
                                        <div class="pricing-table">
                                            <div class="pricing-table-header">
                                                <div class="top d-flex justify-content-between align-items-start">
                                                    <h4>premium</h4>
                                                    <p class="text-right">Not have any design?<br>
                                                        Leave its for me</p>
                                                </div>
                                                <h1>$129 <span>/ hour</span></h1>
                                            </div>
                                            <ul class="feature-lists">
                                                <li>Don't need wireframe or anything</li>
                                                <li>Design with Figma, Framer from scratch</li>
                                                <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                                                <li>Remote/Online</li>
                                                <li>Work with both weekend</li>
                                                <li>Support 12 months</li>
                                                <li>Your project alway be priority</li>
                                                <li>Customer care gifts</li>
                                            </ul>
                                            <a href="" class="theme-btn">pick this package</a>
                                        </div>
                                    </div> -->
                                </div>
                                <p class="info scroll-animation" data-animation="fade_from_bottom">
                                    Don't find any package match with your plan!<br>
                                    Want to setup a new tailor-made package for only you?. <a href="">Contact Us</a>
                                </p>
                            </div>
        
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </main>
</template>