<template>
    <div>
        <div v-if="getName === null">
            <router-link to="/login" tag="button">Sign In</router-link>
        </div>
        <div v-else>
            <label>{{getName}} 님 환영합니다!</label>
            <button @click.self.prevent="tryLogout">Logout</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapMutations} from 'vuex'
    import axios from 'axios'

    export default {
        name: "GreetingUser",
        computed: {
            ...mapGetters([
                'getName'
            ])
        },
        methods: {
            ...mapMutations([
                'logout'
            ]),
            tryLogout() {
                axios.post('/auth/logout')
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err.message);
                    });

                this.$store.commit('logout');
                this.$router.push('home').catch(err => {
                    console.log(err.message);
                });
            }
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
</style>