<template>
    <div>
        <p>This is Login View</p>
        <form>
            <div>
                <label>ID : </label>
                <input type="text" v-model.lazy="id">
            </div>
            <div>
                <label>PW : </label>
                <input type="password" v-model.lazy="pw">
            </div>
            <div>
                <button @click.self.prevent="tryLogin">로그인</button>
            </div>
        </form>
        <router-link to="/signup" tag="button">회원 가입</router-link>
    </div>
</template>

<script>
    import axios from 'axios';
    import {mapMutations} from 'vuex'

    export default {
        name: "Login",
        data() {
            return {
                id: '',
                pw: ''
            }
        },
        methods: {
            ...mapMutations([
                'login'
            ]),
            tryLogin() {
                axios.post('/auth/signin',
                    {
                        userId: this.id,
                        password: this.pw
                    }
                ).then(res => {
                    this.$store.commit('login', res.data);
                    this.$router.push('/');
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
</script>

<style scoped>

</style>