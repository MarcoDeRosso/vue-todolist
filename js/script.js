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
    mounted() {
        this.autofocus();
    },
    methods: {
        autofocus: function() {
            const element = document.getElementById("newTaskElement");
            element.focus()
        },
        addTask: function() {
            if (this.newTask.trim() !== "") {
                this.list.push(this.newTask);
            }
            this.newTask = "";
            this.autofocus();
        },
        deleteTask: function(index) {
            this.list.splice(index, 1)
        }
    },

});