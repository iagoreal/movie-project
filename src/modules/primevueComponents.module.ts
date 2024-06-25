import Card from "primevue/card";
import Menubar from "primevue/menubar";
import ToggleButton from "primevue/togglebutton";
import menuBar from "@/components/menuBar.vue";

import type { App } from "vue";

export function setComponent(app: App) {
  app.component("Card", Card);
  app.component("Menubar", Menubar);
  app.component("ToggleButton", ToggleButton);
  app.component("menuBar", menuBar);
}
