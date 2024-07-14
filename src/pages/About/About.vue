<script setup>
    import langData from "@/constants/lang";
    import { useLangStore } from "@/stores/langStore";
    const changeIcon = useLangStore();
</script>

<template>
    <section class="about">
        <div class="container">
            <h1>{{ langData.aboutPageTitle[changeIcon.icon ? "en" : "ru"] }}</h1>
            <div class="about__content">
                <div class="about__content-grid about__content-img"></div>
                <div class="about__content-grid about__content-block">
                    <p>
                        <span>{{ langData.aboutPageName[changeIcon.icon ? "en" : "ru"] }}</span>
                        {{ langData.aboutPageFirst[changeIcon.icon ? "en" : "ru"] }}
                    </p>
                    <p>
                        {{ langData.aboutPageSecond[changeIcon.icon ? "en" : "ru"] }}
                    </p>
                </div>
                <div class="about__content-grid about__content-text">
                    <span> 1+ </span>
                    <p>{{ langData.aboutPageThird[changeIcon.icon ? "en" : "ru"] }}</p>
                </div>
                <div class="about__content-grid about__content-text">
                    <span> 20 </span>
                    <p>{{ langData.aboutPageFourth[changeIcon.icon ? "en" : "ru"] }}</p>
                </div>
                <div class="about__content-grid about__content-text">
                    <span> 2 </span>
                    <p> {{ langData.aboutPageFifth[changeIcon.icon ? "en" : "ru"] }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
