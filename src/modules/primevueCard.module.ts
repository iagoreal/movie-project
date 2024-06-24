import Card from "primevue/card";
import type { App } from "vue";

export function setComponent(app: App) {
  app.component("Card", Card);
}
