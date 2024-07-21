<script setup>
    import { useFormStore } from "@/stores/formStore";
    import langData from "@/constants/lang";
    import { useLangStore } from "@/stores/langStore";
    import { ref, computed } from "vue";

    const formStore = useFormStore();
    const sendForm = () => {
        formStore.onSubmit();
    };
    const changeIcon = useLangStore();

    const contactName = computed(() => {
        return langData.contactName[changeIcon.icon ? "en" : "ru"];
    });
    const contactMessage = computed(() => {
        return langData.contactMessage[changeIcon.icon ? "en" : "ru"];
    });
</script>

<template>
    <section class="contact">
        <div class="container">
            <h1>{{ langData.contactMe[changeIcon.icon ? "en" : "ru"] }}</h1>
            <div class="contact__content">
                <div class="contact__content-left">
                    <div>
                        <i class="fal fa-envelope"></i>
                        <a href="">saidaxrorpc7@gmail.com</a>
                    </div>
                    <div>
                        <i class="fal fa-phone-rotary"></i>
                        <a href="tel:+998991228841">+998 99 122 88 41</a>
                    </div>
                    <div>
                        <i class="fal fa-folder-open"></i>
                        <a href="https://axreer.vercel.app" target="_blank">https://axreer.vercel.app</a>
                    </div>
                </div>
                <div class="contact__content-right">
                    <form action="" class="contact__content-right-form" @submit.prevent="sendForm">
                        <input v-model="formStore.formData.name" :placeholder="contactName" required />
                        <div>
                            <input
                                @input="formStore.liveCheckOut"
                                type="number"
                                v-model="formStore.formData.number"
                                placeholder="94-006-88-41"
                                required />
                            <span>+998</span>
                        </div>
                        <textarea v-model="formStore.formData.message" :placeholder="contactMessage" required></textarea>
                        <button type="submit">{{ langData.contactButton[changeIcon.icon ? "en" : "ru"] }}</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
