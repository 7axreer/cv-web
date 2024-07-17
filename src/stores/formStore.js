// src/stores/formStore.js
import apiTelegram from "@/helpers/telegramApi";
import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
    state: () => ({
        formData: {
            name: "",
            number: "",
            message: "",
        },
    }),
    actions: {
        async onSubmit() {
            let phoneNumber = String(this.formData.number).trim();

            if (!phoneNumber.startsWith("+998")) {
                phoneNumber = "+998" + phoneNumber;
            }

            try {
                const response = await apiTelegram.sendMessage(this.formData.name, phoneNumber, this.formData.message);
                if (response.ok) {
                    alert("Message sent successfully!");
                    this.formData.name = "";
                    this.formData.number = "";
                    this.formData.message = "";
                } else {
                    alert("Error sending message.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Error sending message.");
            }
        },
        liveCheckOut() {
            this.formData.number = String(this.formData.number).replace(/[^\d+]/g, "");
            const regEX = /^\+998[0-9]{0,9}$/;
            if (!regEX.test(this.formData.number)) {
                this.formData.number = this.formData.number.slice(0, 9);
            }
        },
    },
});
