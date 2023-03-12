import {createStore} from "vuex";
import authentification from "./modules/authentification/index"


const store = createStore({
    modules: {
        authentification,
    },
});

export default store