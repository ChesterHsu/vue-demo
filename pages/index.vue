<template>
  <div class="index">
    <div class="carousel">
      <a href="#">
        <img src="@/assets/images/carousel.png">
      </a>
    </div>
    <div class="hot-tags">
      <div class="tags-title">
        <button>遊戲開發</button>
        <button>微軟產品</button>
        <button>電腦科學</button>
        <button>桌面應用</button>
        <button>人工智慧</button>
        <button>維運/測試</button>
        <button>雲端服務</button>
        <button>資訊安全</button>
        <button>程式交易</button>
      </div>
      <hr>
      <div class="tags-body">
        <p>熱門標籤</p>
        <button>PHP</button>
        <button>C/C++</button>
        <button>Arduino</button>
        <button>R 語言</button>
        <button>JavaScript</button>
        <button>SVG</button>
        <button>Data Visualization</button>
        <button>HTML</button>
        <button>Python</button>
        <button>Python 3</button>
      </div>
    </div>
    <div class="evaluation">
      <h3>口碑排行</h3>
      <div class="comment">
        <div class="comment-item" v-for="i in 4">
          <img src="@/assets/images/avatar1.png">
          <p>小強</p>
          <p class="date">2021/03/07</p>
          <h3><b>內容很詳細很充分很棒的課程，可以學到很多東西，整體節奏較快，有些變數或函式的用法會希望老師可以順帶提一下，幫助基礎不好的同學減少學習上的阻力。</b></h3>
          <div class="empty-stars"></div>
          <div class="course-item">
            <img src="@/assets/images/course.png">
            <p>Android UI 進階實戰 - 打造App絕佳體驗</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
