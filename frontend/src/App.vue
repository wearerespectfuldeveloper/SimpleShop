<template>
  <div id="app">
    <header-view id="headerView"></header-view>
    <router-view id="bodyView"/>
    <footer-view id="footerView"></footer-view>
  </div>
</template>

<script>
  // @ is an alias to /src=
  import HeaderView from '@/components/HeaderView'
  import FooterView from '@/components/FooterView'

  export default {
    components: {
      HeaderView,
      FooterView
    }
  }

</script>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#headerView {
  position: absolute;
  top: 0;
  width: 100%;
  height: 5%;
  background-color: aliceblue;
}
#bodyView {
  position: absolute;
  top: 5%;
  width: 100%;
  height: 85%;
  background-color: white;
}
#footerView {
  position: absolute;
  top: 90%;
  width: 100%;
  height: 10%;
}
</style>
