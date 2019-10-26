<template>
    <div>
        <label>{{getName}} 님 환영합니다!</label>
        <button @click.self.prevent="tryLogout">Logout</button>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapMutations} from 'vuex'

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
                this.$store.commit('logout');
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
</style>