<script>
    export default {
        data() {
            return {
                name: "",
                email: "",
                phone: "",
                subject: "",
                budget: "",
                message: "",
            }
        },
        
        methods: {
            
            sendEmail() {
                Email.send({
                    SecureToken: "7491c686-9c64-4222-b3e7-6cdf530de9eb", 
                    To: "spider64837@gmail.com",
                    From: "spider64837@gmail.com",
                    name: this.name,
                    Email: this.email,
                    Phone: this.phone,
                    Subject: this.subject,
                    Budget: this.budget,
                    Body: this.message,
                }).then((message)=>alert(message)); 
            },
        },
    }
</script>

<template>
    
<main class="drake-main">
        <div id="smooth-wrapper">
            <div id="smooth-content">
                
                <section class="contact-area page-section scroll-content" id="contact">
                    <div class="custom-container">
                        <div class="contact-content content-width">
                            <div class="section-header">
                                <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                                    <i class="las la-dollar-sign"></i> contact
                                </h4>
                                <h1 class="scroll-animation" data-animation="fade_from_bottom">Let's Work <span>Together!</span></h1>
                            </div>
                            <h3 class="scroll-animation" data-animation="fade_from_bottom">hello@drake.design</h3>
                            <p id="required-msg">* Marked fields are required to fill.</p>
                            <!-- <p>{{ formData }}</p> -->
                            <form class="contact-form scroll-animation" data-animation="fade_from_bottom" method="POST" @submit.prevent="sendEmail">
                                <div class="alert alert-success messenger-box-contact__msg" style="display: none" role="alert">
                                    Your message was sent successfully.
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <label for="full-name">full Name <sup>*</sup></label>
                                            <input type="text" name="name" id="full-name" placeholder="Your Full Name" v-model="name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <label for="email">Email <sup>*</sup></label>
                                            <input type="email" name="email" id="email" placeholder="Your email adress" v-model="email" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <label for="phone-number">phone <span>(optional)</span></label>
                                            <input type="text" name="phone" id="phone-number" placeholder="Your number phone" v-model="phone" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <label for="subject">subject <sup>*</sup></label>
                                            <select name="subject" id="subject" v-model="subject">
                                                <option desabled value="" >Select a subject</option>
                                                <option value="javascript">javascript</option>
                                                <option value="css">css</option>
                                                <option value="html">html</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group">
                                            <label for="budget">your budget <span>(optional)</span></label>
                                            <input type="number" name="budget" id="budget" placeholder="A range budget for your project" v-model="budget">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group">
                                            <label for="message">message</label>
                                            <textarea name="message" id="message" placeholder="Wrire your message here ..." v-model="message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group upload-attachment">
                                            <div>
                                                <label for="upload-attachment">
                                                    <i class="las la-cloud-upload-alt"></i> add an attachment
                                                    <input type="file" name="file" id="upload-attachment">
                                                </label>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group submit-btn-wrap">
                                            <button class="theme-btn" name="submit" type="submit" id="submit-form">send message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    </main>

</template>