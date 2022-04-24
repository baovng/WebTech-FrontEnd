import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import JsonCSV from 'vue-json-csv'
const app = createApp(App);
app.component('downloadCsv', JsonCSV)

app.use(router);

app.mount("#app");
