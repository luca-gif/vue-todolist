const root = new Vue({
    el: "#root",

    data: {
        items: [{
                text: "Fare i compiti",
                done: false,
            },
            {
                text: "Fare la spesa",
                done: false,
            },
            {
                text: "Andare in palestra",
                done: false,
            },
        ],

        newTodo: "",
    },

    methods: {
        rimuoviTodo(index) {
            if (confirm(`Vuoi davvero eliminarlo?`)) {
                this.items.splice(index, 1);
            }
        },

        aggiungiTodo(newTodo) {
            const newObj = {
                text: newTodo,
                done: false,
            };

            if (newTodo.length > 2) {
                this.items.push(newObj);
            }
        },
    },
});