<template>
  <nav class="shopping-car-drawer" :class="{ 'open-shopping-car': SwitchShoppingCar }">
    <div class="shopping-car-header">
      <h3>購物車
        <button @click="closeShoppingCar">
          <img src="@/assets/images/close.svg">
        </button>
      </h3>
    </div>
    <div class="empty-no">
      <img src="@/assets/images/shopping-car.png">
      <p class="text-center text-gray-600 text-14px mt-40px">
        購物車裡是空的，
        <br/>
        去逛逛喜歡的課程吧！
      </p>
      <div class="warp">
        <a href="https://hiskio.com/search/explore" type="button">前往探索課程</a>
      </div>
    </div>
    <div class="not-empty"></div>
  </nav>
</template>

<script src="@/js/layout/ShoppingCarDrawer">
export default {
}
</script>
