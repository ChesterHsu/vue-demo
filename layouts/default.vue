<template>
  <div>
    <Header></Header>
    <Nuxt class="view"/>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "~/components/core/Header";
import Footer from "~/components/core/Footer";
export default {
  components: {
    Header,
    Footer
  }
}
</script>
