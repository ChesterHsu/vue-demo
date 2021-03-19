export default {
  data: () => ({
  }),
  methods: {
    shoppingCarSwitch() {
      if (this.$store.state.shoppingCarDrawer) {
        this.$store.commit("switch_shopping_car_drawer", false)
      } else {
        this.$store.commit("switch_shopping_car_drawer", true)
      }
    },
    loginDialog() {
      this.$store.commit("switch_login_Dialog", true)
    }

  }
}
