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
        <router-link to="/signin" tag="button">회원 가입</router-link>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Login",
        data() {
            return {
                id: '',
                pw: ''
            }
        },
        methods: {
            tryLogin() {
                axios.post('/auth/signin', {
                    userId: this.id,
                    password: this.pw
                }).then(res => {
                    this.$router.push('/');
                });
            }
        }
    }
</script>

<style scoped>

</style>