export const state = () => ({
  shoppingCarDrawer: false,
  loginDialog: false,
})

export const getters = {

}

export const mutations = {
  switch_shopping_car_drawer: (state, payload) => {
      state.shoppingCarDrawer = payload;
  },
  switch_login_Dialog: (state, payload) => {
    state.loginDialog = payload;
  }
}

