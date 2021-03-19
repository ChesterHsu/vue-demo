export const state = () => ({
  shoppingCarDrawer: false,
})

export const getters = {

}

export const mutations = {
  switch_shopping_car_drawer: (state, payload) => {
      state.shoppingCarDrawer = payload;
  }
}

