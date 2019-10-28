<template>
    <div>
        <p>This is Sign Up View.</p>
        <form>
            <div>
                <label>ID : </label>
                <input type="text" v-model.lazy="userId">
                <p v-if="userId === ''">사용자 아이디를 입력해주세요.</p>
                <p v-else-if="isAvailableId" style="color: green">사용 가능한 아이디입니다.</p>
                <p v-else style="color: red">이미 사용중인 아이디입니다.</p>
            </div>
            <div>
                <label>PW : </label>
                <input type="password" v-model.lazy="pw_1">
            </div>
            <div>
                <label>PW 확인 : </label>
                <input type="password" v-model.lazy="pw_2">
            </div>
            <p v-if="matchingPassword !== ''">{{ matchingPassword }}</p>
            <div>
                <label>NAME : </label>
                <input type="text" v-model.lazy="name">
            </div>
            <div>
                <button @click.self.prevent="trySignUp">회원 가입</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "SignUp",
        data() {
            return {
                isAvailableId: false,
                userId: '',
                pw_1: '',
                pw_2: '',
                name: ''
            }
        },
        methods: {
            trySignUp() {
                if (this.isAvailableId && this.isMatchingPassword()) {
                    axios.post('/auth/signup',
                        {
                            userId: this.userId,
                            password_1: this.pw_1,
                            password_2: this.pw_2,
                            name: this.name
                        }
                    ).then(res => {
                        console.log(res.data);
                        this.$router.push('login');
                    }).catch(err => {
                        console.log(err.message);
                    });

                } else {
                    alert('입력 값을 올바르지 않습니다.');
                }
            },
            isMatchingPassword() {
                return this.pw_1 === this.pw_2;
            }
        },
        computed: {
            matchingPassword: function () {
                if (this.pw_1 === '' || this.pw_2 === '') {
                    return '패스워드를 입력해주세요.';
                } else if (this.pw_1 !== this.pw_2) {
                    return '패스워드가 일치하지 않습니다.';
                } else {
                    return '';
                }
            }
        },
        watch: {
            userId: function (val) {
                if (val !== '') {
                    axios.post(`/users/${val}/check`)
                        .then(res => {
                            this.isAvailableId = true;
                            console.log(res.data);
                        })
                        .catch(err => {
                            this.isAvailableId = false;
                            console.log(err.response);
                        });
                }
            }
        }
    }
</script>

<style scoped>
</style>