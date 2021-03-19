<template>
  <div>
    <core-header></core-header>
    <core-shopping-car-drawer></core-shopping-car-drawer>
    <Nuxt class="view"/>
    <login-dialog v-if="SwitchLoginDialog"></login-dialog>
    <core-footer></core-footer>
  </div>
</template>
<script>
import Header from "~/components/core/Header";
import ShoppingCarDrawer from "~/components/core/ShoppingCarDrawer";
import Footer from "~/components/core/Footer";
import LoginDialog from "~/components/dialog/LoginDialog";

export default {
  computed: {
    SwitchLoginDialog() {
      return this.$store.state.loginDialog
    }
  },
  components: {
    coreHeader: Header,
    CoreShoppingCarDrawer: ShoppingCarDrawer,
    CoreFooter: Footer,
    LoginDialog
  }
}
</script>
