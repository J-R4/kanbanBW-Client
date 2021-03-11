<template>
    <div>
        <Welcome></Welcome>
        <Home></Home>
    </div>
</template>


<script>

import Welcome from "../src/components/welcome.vue"
import Home from "../src/components/home.vue"

export default {
    name: `kanbanApp`,
    components: {
        Welcome, Home
    },
    data() {
        return {
            page: `welcome-page`,
            logEmail: ``,
            logPass: ``,
            regEmail: ``,
            regPass: ``,
        }
    },
    methods: {
        changePage: function (to) {
            this.page = to;
        },
    },
};
</script>

<style>
    html {
            background-color: whitesmoke;
        }

        * {
            font-family: Arial, Helvetica, sans-serif;
        }

    body {
        background-color: whitesmoke;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }

    .theCard-sub {
        background-color: black;
        color: white;
        margin: 0;
        padding: 0;
    }

    .theCard {
        background-color: white;
        color: black;
    }
</style>
