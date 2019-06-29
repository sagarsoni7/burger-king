import axios from "axios";

const instance=axios.create({
    baseURL: "https://burger-king-33cfa.firebaseio.com"
});

export default instance;