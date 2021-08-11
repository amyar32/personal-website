import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./index.css";

import BackgroundBase from "./components/BackgroundBase.vue";
import BaseCard from "./components/BaseCard.vue";
import Player from "./components/Player.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelopeSquare,
  faHome,
  faBook,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faInstagramSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

library.add(
  faTwitterSquare,
  faInstagramSquare,
  faGithubSquare,
  faEnvelopeSquare,
  faHome,
  faBook,
  faUserGraduate
);
app.component("font-awesome-icon", FontAwesomeIcon);
app.config.productionTip = false;

app.component("background-base", BackgroundBase);
app.component("base-card", BaseCard);
app.component("player", Player);

app.use(router);

app.mount("#app");
