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
});