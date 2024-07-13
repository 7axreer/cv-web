import { defineStore } from "pinia";

export const useLangStore = defineStore("changeIcon", {
    state: () => ({
        icon: true,
    }),
    actions: {
        changeValueIcon() {
            this.icon = !this.icon;
            console.log(this.icon, "ishladi");
        },
    },
});
