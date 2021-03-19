export default {
  methods: {
    closeLoginDialog() {
      this.$store.commit("switch_login_Dialog", false)
    }
  }
}
