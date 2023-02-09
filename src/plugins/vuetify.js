import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const options = {
    icons: {
        iconfont: "fa",
    },
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            "white": "#f5f5f5"
        }
    }
}

export default new Vuetify(options);
