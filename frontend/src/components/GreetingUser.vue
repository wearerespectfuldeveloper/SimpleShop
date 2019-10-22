<template>
    <div>
        <label>{{getName}} 님 환영합니다!</label>
        <button @click.self.prevent="logout">Logout</button>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "GreetingUser",
        computed: {
            ...mapGetters([
                'getName'
            ])
        },
        methods: {
            logout() {

                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
</style>