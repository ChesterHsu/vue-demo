export default {
  computed: {
    SwitchShoppingCar() {
      return this.$store.state.shoppingCarDrawer
    }
  },
  methods: {
    closeShoppingCar() {
        this.$store.commit("switch_shopping_car_drawer", false)
    }
  }
}
