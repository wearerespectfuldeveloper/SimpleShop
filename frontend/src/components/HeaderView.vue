<template>
    <div>
        <router-link to="/" tag="button">Home</router-link>
        <router-link to="/login" tag="button">로그인</router-link>
    </div>
</template>

<script>
    export default {
        name: "header-view"
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