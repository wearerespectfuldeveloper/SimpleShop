<template>
    <div>
        <p>This is Sign In View.</p>
        <form>
            <div>
                <label>ID : </label>
                <input type="text" v-model.lazy="userId">
            </div>
            <div>
                <label>PW : </label>
                <input type="password" v-model.lazy="pw_1">
            </div>
            <div>
                <label>PW 확인 : </label>
                <input type="password" v-model.lazy="pw_2">
            </div>
            <div>
                <label>NAME : </label>
                <input type="text" v-model.lazy="name">
            </div>
            <div>
                <button @click.self.prevent="trySignIn">회원 가입</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "SignIn",
        data() {
            return {
                isAvailableId: false,
                isAvailablePassword: false,
                userId: '',
                pw_1: '',
                pw_2: '',
                name: ''
            }
        },
        methods: {
            trySignIn() {
                console.log('to do something...');
            },
        },
        watch: {
            userId: function(val) {
                axios.post('/users/' + val + '/check')
                    .then(res => {
                        self.isAvailableId = true;
                        console.log(res.data);
                    })
                    .catch(err => {
                        self.isAvailableId = false;
                        console.log(err.response);
                    });
            }
        }
    }
</script>

<style scoped>

</style>