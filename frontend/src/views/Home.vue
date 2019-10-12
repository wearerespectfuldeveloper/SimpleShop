<template>
  <div class="home">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src=
import Header from '@/components/header'
import Body from '@/components/body'
import Footer from '@/components/footer'

export default {
  name: 'home',
  components: {
    Header,
    Body,
    Footer
  }
}
</script>
