Vue.config.devtools = true;
const app = new Vue({
    el: '#app',
    data: {
        list: [
            "Fare i compiti",
            "Fare la spesa",
            "Fare il bucato"
        ],
        newTask: "",
    },

});