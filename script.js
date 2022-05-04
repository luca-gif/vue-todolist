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
    },

    methods: {
        rimuoviTodo(index) {
            console.log(index);
            this.items.splice(index, 1);
            console.log(this.items);
        },
    },
});