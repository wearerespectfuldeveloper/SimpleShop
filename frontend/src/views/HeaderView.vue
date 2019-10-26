<template>
    <div>
        <router-link to="/" tag="button" class="home">Home</router-link>
        <greeting-user class="userInfo"></greeting-user>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import GreetingUser from "@/components/GreetingUser";

    export default {
        name: "header-view",
        computed: {
            ...mapGetters([
                'getName'
            ])
        },
        components: {
            GreetingUser
        }
    }
</script>

<style scoped>

    button {
        background-color: white; /* Green */
        border: none;
        color: black;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 8px;
        font-size: 16px;
        cursor: pointer;
        margin: 4px 5px;
    }

    button.router-link-exact-active {
        color: #42b983;
    }

    .home {
        float: left;
    }

    .userInfo {
        float: left;
    }
</style>