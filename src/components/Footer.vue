<script setup>
import { ref } from 'vue'

const footer = ref([
    {logo:'/src/assets/images/logo.png', 
    profile:'/src/assets/images/me.jpg',
    discription:'Framer Designer & Developer',
    email:'hello@drake.design',
    add:'Base in Los Angeles, CA',
    cpyrit:'&copy; 2022 Drake. All Rights Reserved',
    btn:'Hire Me!'}
])
</script>

<template>
    <div class="left-sidebar" v-for="foot in footer">
        <div class="sidebar-header d-flex align-items-center justify-content-between">
            <img :src="foot.logo" alt="Logo">
            <span class="designation">{{ foot.discription }}</span>
        </div>
        <img class="me" :src="foot.profile" alt="Me">
        <h2 class="email">{{ foot.email }}</h2>
        <h2 class="address">{{ foot.add }}</h2>
        <p class="copyright">{{ foot.cpyrit }}</p>
        <ul class="social-profile d-flex align-items-center flex-wrap justify-content-center">
            <li>
                <a to=""><i class="lab la-twitter"></i></a>
            </li>
            <li>
                <a to=""><i class="lab la-dribbble"></i></a>
            </li>
            <li>
                <a to=""><i class="lab la-instagram"></i></a>
            </li>
            <li>
                <a to=""><i class="lab la-github"></i></a>
            </li>
        </ul>
        <a to="#" class="theme-btn">
            <i class="las la-envelope"></i> {{ foot.btn }}
        </a>
    </div>
</template>