<script setup>
    import langData from "@/constants/lang";
    import { useLangStore } from "@/stores/langStore";
    import { ref } from "vue";
    const changeIcon = useLangStore();
    import Dev from "@/components/Dev/Dev.vue";

    const activeTab = ref("tab-1");
    function setActive(tab) {
        activeTab.value = tab;
    }
    function isActive(tab) {
        return activeTab.value === tab;
    }
</script>

<template>
    <section class="experience">
        <div class="container">
            <h1>
                {{ langData.experience[changeIcon.icon ? "en" : "ru"] }}
            </h1>
            <div class="experience__content">
                <div class="experience__content-tabs">
                    <ul class="experience__content-tabs-list">
                        <li @click="setActive('tab-1')" :class="{ active: isActive('tab-1') }" class="experience__content-tabs-list-link">
                            {{ langData.workDev[changeIcon.icon ? "en" : "ru"] }}
                            <img src="@/assets/img/dev.svg" alt="" />
                        </li>
                        <li @click="setActive('tab-2')" :class="{ active: isActive('tab-2') }" class="experience__content-tabs-list-link">
                            {{ langData.workAdm[changeIcon.icon ? "en" : "ru"] }}
                            <img src="@/assets/img/adm.svg" alt="" />
                        </li>
                        <li @click="setActive('tab-3')" :class="{ active: isActive('tab-3') }" class="experience__content-tabs-list-link">
                            {{ langData.workDes[changeIcon.icon ? "en" : "ru"] }}
                            <img src="@/assets/img/des.svg" alt="" />
                        </li>
                    </ul>
                </div>

                <div class="experience__content-window">
                    <div class="experience__content-window-panel" v-show="isActive('tab-1')">
                        <div class="dev__content-first">
                            <h2 class="dev__content-name">UPWORK</h2>
                            <p class="dev__content-job">
                                {{ langData.workDevTitle[changeIcon.icon ? "en" : "ru"] }}
                            </p>
                            <span> 2024 - <i class="fal fa-hourglass-half"></i> </span>
                            <p>
                                {{ langData.workDevDesc[changeIcon.icon ? "en" : "ru"] }}
                            </p>
                        </div>
                    </div>
                    <div class="experience__content-window-panel" v-show="isActive('tab-2')">
                        <div class="dev__content-first">
                            <h2 class="dev__content-name">ASR INNOVATION CENTER</h2>
                            <p class="dev__content-job">
                                {{ langData.workAdmTitle[changeIcon.icon ? "en" : "ru"] }}
                            </p>
                            <span> 2020 - 2021 </span>
                            <p>
                                {{ langData.workAdmDesc[changeIcon.icon ? "en" : "ru"] }}
                            </p>
                        </div>
                    </div>
                    <div class="experience__content-window-panel" v-show="isActive('tab-3')">
                        <div class="dev__content-first">
                            <h2 class="dev__content-name">ASR INNOVATION CENTER</h2>
                            <p class="dev__content-job">
                                {{ langData.workDesTitle[changeIcon.icon ? "en" : "ru"] }}
                            </p>
                            <span> 2020 - 2022 </span>
                            <p>
                                {{ langData.workDesDesc[changeIcon.icon ? "en" : "ru"] }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
