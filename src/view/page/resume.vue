<script>
export default {
    data() {
        return {
            mainTitle: 'Education & <span>Experience</span>',
            twenty_Present: [
                {
                    duration:'2020 - Present',
                    TitleOne: 'Framer Desinger & Developer',
                    TitleTwo: 'Front-End WordPress Developer',
                    DiscriptionOne: 'Brunodee Agency',
                    DiscriptionTwo: 'Envato Market'
                }
            ], 
            Thirteen_Nineteen: [
                {
                    duration:'2013 - 2019',
                    TitleOne: 'Webflow Developer & Co-Founder',
                    TitleTwo: 'Web Designer',
                    TitleThree: 'Leader Team of Marketing',
                    DiscriptionOne: 'Designflow Studio',
                    DiscriptionTwo: 'Freelance',
                    DiscriptionThree: 'AHA Marketing Agency'
                }
            ],
            Ten_Thirteen: [
                {
                    duration:'2010 - 2013',
                    TitleOne: 'Bachelor Degree of Information Technology',
                    TitleTwo: '',
                    DiscriptionOne: 'US RMIT University',
                    DiscriptionTwo: ''
                }
            ],
        }
    }
}

</script>


<template>

<main class="drake-main">
        <div id="smooth-wrapper">
            <div id="smooth-content">
                
                <section class="resume-area page-section scroll-to-page" id="resume">
                    <div class="custom-container">
                        <div class="resume-content content-width">
                            <div class="section-header">
                                <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                    <i class="las la-briefcase"></i> Resume
                                </h4>
                                <h1 class="scroll-animation" data-animation="fade_from_bottom" v-html="mainTitle"></h1>
                            </div>
        
                            <div class="resume-timeline">
                                <div class="item scroll-animation" data-animation="fade_from_right" v-for="skill in twenty_Present">
                                    <span class="date">{{ skill.duration }}</span>
                                    <h2>{{ skill.TitleOne }}</h2>
                                    <p>{{ skill.DiscriptionOne }}</p>
                                    <h2>{{ skill.TitleTwo }}</h2>
                                    <p>{{ skill.DiscriptionTwo }}</p>
                                </div>
                                <div class="item scroll-animation" data-animation="fade_from_right" v-for="skills in Thirteen_Nineteen">
                                    <span class="date">{{skills.duration}}</span>
                                    <h2>{{skills.TitleOne}}</h2>
                                    <p>{{skills.DiscriptionOne}}</p>
                                    <h2>{{skills.TitleTwo}}</h2>
                                    <p>{{skills.DiscriptionTwo}}</p>
                                    <h2>{{skills.TitleThree}}</h2>
                                    <p>{{skills.DiscriptionThree}}</p>
                                </div>
                                <div class="item scroll-animation" data-animation="fade_from_right" v-for="tech in Ten_Thirteen">
                                    <span class="date">{{tech.duration}}</span>
                                    <h2>{{tech.TitleOne}}</h2>
                                    <p>{{ tech.DiscriptionOne }}</p>
                                </div>
                            </div>
        
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </main>
</template>