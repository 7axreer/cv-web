<script setup>
    import langData from "@/constants/lang";
    import { useLangStore } from "@/stores/langStore";
    const changeIcon = useLangStore();


</script>

<template>
    <header id="header" class="header">
        <div class="container">
            <div class="header__content">
                <div class="header__content-left">
                    <p>{{ langData.hi[changeIcon.icon ? "en" : "ru"] }}</p>
                    <h1>{{ langData.name[changeIcon.icon ? "en" : "ru"] }}</h1>
                    <p>{{ langData.info[changeIcon.icon ? "en" : "ru"] }}</p>
                </div>

                <div class="header__content-right">
                    <div class="header__content-right-img"></div>
                    <div class="header__content-right-text">
                        <span>{{ langData.cardName[changeIcon.icon ? "en" : "ru"] }}</span>
                        <span>{{ langData.cardInfo[changeIcon.icon ? "en" : "ru"] }}</span>
                        <span><i class="far fa-globe-asia"></i>{{ langData.cardCity[changeIcon.icon ? "en" : "ru"] }}</span>
                    </div>
                    <div class="header__content-right-mail">
                        <i class="fal fa-envelope"></i>
                        <span>saidaxrorpc7@gmail.com</span>
                    </div>
                    <div class="header__content-right-exp">
                        <i class="fal fa-id-card"></i>
                        <span>{{ langData.cardExperience[changeIcon.icon ? "en" : "ru"] }}</span>
                    </div>
                    <div class="header__content-right-skills">
                        <span>Nuxt</span>
                        <span>Vue.JS</span>
                        <span>VueX</span>
                        <span>Pinia</span>
                        <span>JavaScript</span>
                        <span>GIT</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>SASS</span>
                        <span>RESTful APIs</span>
                    </div>
                    <div class="header__content-right-social">
                        <a href=""><i class="fab fa-github"></i></a>
                        <a href=""><i class="fab fa-telegram"></i></a>
                        <a href=""><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
