const root = new Vue({
    el: "#root",

    data: {
        items: [{
                text: "Fare i compiti",
                done: true,
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
            this.items.splice(index, 1);
        },

        aggiungiTodo(newTodo) {
            const newObj = {
                text: newTodo,
                done: false,
            };

            this.items.push(newObj);
        },
    },
});