import Vue from 'vue';
import createService from "/services/IndexService";
import Base from "../utils/Base";


export default ({app, $axios}, inject) => {
    let axios = $axios;
    axios.setBaseURL("/api");


    axios.onResponse(response => {
        if (response.status == 500) {
            app.$bus.$emit("api-error-alert", response.data);
            throw "";
            return;
        }
        if (response.data.hasOwnProperty("error")) {
            app.$bus.$emit("api-error-alert", response.data.mesaj);
            return;
        }
    })


    axios.onResponseError((err) => {
        app.$bus.$emit("api-error-alert", err);
        throw "";
    })


    inject('servis', createService(axios));
    inject('b', Base(app))
    const bus = new Vue;
    inject('bus', bus);
}
