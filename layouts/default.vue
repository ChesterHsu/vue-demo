<template>
  <div>
    <core-header></core-header>
    <Nuxt class="view"/>
    <core-footer></core-footer>
  </div>
</template>
<script>
import Header from "~/components/core/Header";
import Footer from "~/components/core/Footer";
export default {
  components: {
    CoreHeader: Header,
    CoreFooter: Footer
  }
}
</script>
