<script setup>
    import Navbar from "@/components/Navbar/Navbar.vue";
    import { ref } from "vue";
    import { useLangStore } from "./stores/langStore";
    const changeValue = useLangStore();


    const langIcon = ref(true);
    function changeIcon() {
        langIcon.value = !langIcon.value;
        changeValue.changeValueIcon();
    }
</script>

<template>
    <Navbar :langIcon="langIcon" :changeIcon="changeIcon" />

    <RouterView v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'">
            <component :is="Component" />
        </transition>
    </RouterView>
</template>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0s;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-to,
    .fade-leave-from {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }
</style>
