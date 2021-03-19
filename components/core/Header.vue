<template>
  <header class="header">
    <div class="wrap">
      <div class="logo float-left">
        <a href="#" type="button">
          <img src="@/assets/images/logo.png">
        </a>
      </div>
      <div class="search float-left">
        <form class="float-left">
          <input class="search-button float-left" type="submit" value="">
          <input class="text float-left" type="text" placeholder="搜尋">
        </form>
      </div>
      <button class="registered float-right" type="button" >註冊</button>
      <button class="login-btn float-right" type="button" >登入</button>
      <a href="https://help.hiskio.com/zh-TW/" class="question-circle-btn float-right" type="button"></a>
      <a href="#" class="shopping-car-btn float-right" type="button" @click="ShoppingCarSwitch"></a>
      <div class="teach float-right">
        <a href="https://hiskio.com/teach" type="button">我想開課</a>
      </div>
    </div>
  </header>
</template>
<script src="@/js/layout/Header.js">

export default {

}
</script>
