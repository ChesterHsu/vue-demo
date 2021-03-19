export default {
  data: () => ({
  }),
  methods: {
    ShoppingCarSwitch() {
      if (this.$store.state.shoppingCarDrawer) {
        this.$store.commit("switch_shopping_car_drawer", false)
      } else {
        this.$store.commit("switch_shopping_car_drawer", true)
      }
    }
  }
}
