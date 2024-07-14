<script setup>
    import { skills } from "../../constants/data";
    import { computed, ref } from "vue";
    import langData from "@/constants/lang";
    import { useLangStore } from "@/stores/langStore";
    const changeIcon = useLangStore();

    const activeTab = ref("tab-1");
    function setActive(tab) {
        activeTab.value = tab;
    }
    function isActive(tab) {
        return activeTab.value === tab;
    }

    const expertSkills = skills.filter((skills) => skills.lvl === "Expert");
    const proSkills = skills.filter((skills) => skills.lvl === "Proficient");
    const interSkills = skills.filter((skills) => skills.lvl === "Intermediate");
    const begSkills = skills.filter((skills) => skills.lvl === "Beginner");

    const firstText = computed(() => {
        return langData.firstText[changeIcon.icon ? "en" : "ru"];
    });
    const secondText = computed(() => {
        return langData.secondText[changeIcon.icon ? "en" : "ru"];
    });
    const thirdText = computed(() => {
        return langData.thirdText[changeIcon.icon ? "en" : "ru"];
    });
</script>

<template>
    <section class="tabs every__section">
        <div class="container">
            <div class="tabs__content">
                <div class="tabs__content-list">
                    <ul class="tabs__content-item">
                        <li @click="setActive('tab-1')" :class="{ active: isActive('tab-1') }" class="tabs__content-link">
                            {{ langData.techSkills[changeIcon.icon ? "en" : "ru"] }}
                        </li>
                        <li @click="setActive('tab-2')" :class="{ active: isActive('tab-2') }" class="tabs__content-link">
                            {{ langData.solveSkills[changeIcon.icon ? "en" : "ru"] }}
                        </li>
                        <li @click="setActive('tab-3')" :class="{ active: isActive('tab-3') }" class="tabs__content-link">
                            {{ langData.softSkills[changeIcon.icon ? "en" : "ru"] }}
                        </li>
                    </ul>
                </div>
                <div class="tabs__content-window">
                    <div class="tabs__content-window-panel">
                        <div v-show="isActive('tab-1')" class="tabs__content-window-panel-fx">
                            <h1>{{ langData.techSkills[changeIcon.icon ? "en" : "ru"] }}</h1>
                            <div class="cart">
                                <span>• {{ langData.expert[changeIcon.icon ? "en" : "ru"] }} </span>
                                <ul>
                                    <li v-for="skill in expertSkills" :key="skill.id">
                                        <img :src="skill.img" alt="" />
                                        {{ skill.name }}
                                    </li>
                                </ul>
                            </div>

                            <div class="cart">
                                <span>• {{ langData.proficient[changeIcon.icon ? "en" : "ru"] }} </span>
                                <ul>
                                    <li v-for="skill in proSkills" :key="skill.id">
                                        <img :src="skill.img" alt="" />
                                        {{ skill.name }}
                                    </li>
                                </ul>
                            </div>

                            <div class="cart">
                                <span>• {{ langData.intermediate[changeIcon.icon ? "en" : "ru"] }} </span>
                                <ul>
                                    <li v-for="skill in interSkills" :key="skill.id">
                                        <img :src="skill.img" alt="" />
                                        {{ skill.name }}
                                    </li>
                                </ul>
                            </div>

                            <div class="cart">
                                <span>• {{ langData.beginner[changeIcon.icon ? "en" : "ru"] }} </span>
                                <ul>
                                    <li v-for="skill in begSkills" :key="skill.id">
                                        <img :src="skill.img" alt="" />
                                        {{ skill.name }}
                                    </li>
                                </ul>
                            </div>

                            <div class="info">
                                <p v-html="firstText"></p>
                                <br />
                                <p v-html="secondText"></p>
                                <br />
                                <p v-html="thirdText"></p>
                            </div>
                        </div>

                        <div v-show="isActive('tab-2')" class="tabs__content-window-panel-fx">
                            <h1 class="tabs__contnt-window-panel-fx-title">{{ langData.solveSkills[changeIcon.icon ? "en" : "ru"] }}</h1>

                            <div class="tabs__content-solving">
                                <p>
                                    {{ langData.sFirst[changeIcon.icon ? "en" : "ru"] }}
                                </p>
                                <ul>
                                    <span>• {{ langData.sSecondTitle[changeIcon.icon ? "en" : "ru"] }}</span>
                                    <li>
                                        {{ langData.sSecond[changeIcon.icon ? "en" : "ru"] }}
                                    </li>
                                </ul>
                                <ul>
                                    <span>• {{ langData.sThirdTitle[changeIcon.icon ? "en" : "ru"] }}</span>
                                    <li>
                                        {{ langData.sThird[changeIcon.icon ? "en" : "ru"] }}
                                    </li>
                                </ul>
                                <ul>
                                    <span> • {{ langData.sFourthTitle[changeIcon.icon ? "en" : "ru"] }} </span>
                                    <li>
                                        {{ langData.sFourth[changeIcon.icon ? "en" : "ru"] }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div v-show="isActive('tab-3')" class="tabs__content-window-panel-fx">
                            <h1 class="tabs__contnt-window-panel-fx-title">{{ langData.softSkills[changeIcon.icon ? "en" : "ru"] }}</h1>

                            <div class="tabs__content-solving">
                                <p>
                                    {{ langData.oFirst[changeIcon.icon ? "en" : "ru"] }}
                                </p>
                                <ul>
                                    <span>• {{ langData.oSecondTitle[changeIcon.icon ? "en" : "ru"] }}</span>
                                    <li>
                                        {{ langData.oSecond[changeIcon.icon ? "en" : "ru"] }}
                                    </li>
                                </ul>
                                <ul>
                                    <span>• {{ langData.oThirdTitle[changeIcon.icon ? "en" : "ru"] }}</span>
                                    <li>
                                        {{ langData.oThird[changeIcon.icon ? "en" : "ru"] }}
                                    </li>
                                </ul>
                                <ul>
                                    <span> • {{ langData.oFourthTitle[changeIcon.icon ? "en" : "ru"] }} </span>
                                    <li>
                                        {{ langData.oFourth[changeIcon.icon ? "en" : "ru"] }}
                                    </li>
                                </ul>
                                <ul>
                                    <span> • {{ langData.oFifthTitle[changeIcon.icon ? "en" : "ru"] }} </span>
                                    <li>
                                        {{ langData.oFifth[changeIcon.icon ? "en" : "ru"] }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
