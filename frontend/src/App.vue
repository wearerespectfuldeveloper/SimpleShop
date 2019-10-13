<template>
  <div id="app">
    <Header id="header"></Header>
    <router-view id="body"/>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
  // @ is an alias to /src=
  import Header from '@/components/header'
  import Footer from '@/components/footer'

  export default {
    components: {
      Header,
      Footer
    }
  }

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header {
  position: absolute;
  top: 0;
  width: 100%;
  height: 5%;
  background-color: aliceblue;
}
#body {
  position: absolute;
  top: 5%;
  width: 100%;
  height: 85%;
  background-color: white;
}
#footer {
  position: absolute;
  top: 90%;
  width: 100%;
  height: 10%;
}
</style>
