<template>
  <div>
    <core-header></core-header>
    <core-shopping-car-drawer></core-shopping-car-drawer>
    <Nuxt class="view"/>
    <core-footer></core-footer>
  </div>
</template>
<script>
import Header from "~/components/core/Header";
import ShoppingCarDrawer from "~/components/core/ShoppingCarDrawer";
import Footer from "~/components/core/Footer";

export default {
  components: {
    CoreHeader: Header,
    CoreShoppingCarDrawer: ShoppingCarDrawer,
    CoreFooter: Footer
  }
}
</script>
