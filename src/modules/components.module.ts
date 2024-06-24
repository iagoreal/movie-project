import navBar from "../components/navBar.vue";
import type { App } from "vue";

export function setComponent(app: App) {
  app.component("NavBar", navBar);
}
