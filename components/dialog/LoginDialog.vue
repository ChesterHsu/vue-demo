<template>
  <mark class="mask">
    <div class="popup center">
      <div class="close">
        <a class="close-login" type="button" @click="closeLoginDialog">
          <img src="@/assets/images/close-login.png">
        </a>
      </div>
      <img src="@/assets/images/login-log.png" class="login-log mx-auto w-120px h-18px">
      <img src="@/assets/images/login-tab.png" class="login-tab">
      <div class="social-login">
        <a href="#" type="button">
          <img src="@/assets/images/facebook.png">
          使用FaceBook登入
        </a>
        <a href="#" type="button">
          <img src="@/assets/images/google.png">
          使用Google登入
        </a>
        <a href="#" type="button">
          <img src="@/assets/images/github.png">
          使用Github登入
        </a>
        <a href="#" type="button">
          <img src="@/assets/images/linkedIn.png">
          使用LinkedIn登入
        </a>
      </div>
      <p>使用 HiSKIO ID 登入</p>
      <ul>
        <li>
          <form>
            <img src="@/assets/images/login-icon-1.png">
            <input type="text" placeholder="請輸入HiSKIO ID">
          </form>
        </li>
        <li>
          <form>
            <img src="@/assets/images/login-icon-2.png">
            <input type="password" placeholder="請輸入登入密碼">
          </form>
        </li>
      </ul>
      <div class="policy">
        <input type="checkbox">
        <p>登入註冊即代表您同意<a href="https://hiskio.com/user-policy">使用者</a>及<a href="https://hiskio.com/privacy-policy">隱私權</a>政策</p>
      </div>
      <a href="" class="login" type="button">登入</a>
      <br/>
      <a href="" class="forgot-password" type="button">忘記密碼</a>
    </div>
  </mark>
</template>

<script src="@/js/dialog/LoginDialog.js">
export default {
}
</script>
