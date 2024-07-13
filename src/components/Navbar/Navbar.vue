<script setup>
    import { defineProps } from "vue";
    import langData from "@/constants/lang";

    defineProps({
        langIcon: Boolean,
        changeIcon: Function,
    });
</script>

<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__content">
                <a class="nav__content-logo" href="/">
                    <img src="@/assets/img/logo.svg" alt="" />
                </a>
                <ul class="nav__content-list">
                    <li class="nav__content-list-link">
                        <RouterLink class="nav__content-list-link-router" to="/">
                            {{ langData.home[langIcon ? "en" : "ru"] }}
                        </RouterLink>
                    </li>
                    <li class="nav__content-list-link">
                        <RouterLink class="nav__content-list-link-router" to="/skills">
                            {{ langData.skills[langIcon ? "en" : "ru"] }}
                        </RouterLink>
                    </li>
                    <li class="nav__content-list-link">
                        <RouterLink class="nav__content-list-link-router" to="/experience">
                            {{ langData.experience[langIcon ? "en" : "ru"] }}
                        </RouterLink>
                    </li>
                    <li class="nav__content-list-link">
                        <RouterLink class="nav__content-list-link-router" to="/about">
                            {{ langData.about[langIcon ? "en" : "ru"] }}
                        </RouterLink>
                    </li>
                    <li class="nav__content-list-link">
                        <RouterLink class="nav__content-list-link-router" to="/contact">
                            {{ langData.contact[langIcon ? "en" : "ru"] }}
                        </RouterLink>
                    </li>
                </ul>
                <button @click="changeIcon">
                    <img src="@/assets/img/us.svg" alt="" v-if="langIcon" />
                    <img src="@/assets/img/ru.svg" alt="" v-else />
                </button>
            </div>
        </div>
    </nav>
</template>
