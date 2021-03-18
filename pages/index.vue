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
    <div class="introduction">
      <img src="@/assets/images/introduction-1.png">
      <div class="content">
        <h3>專業</h3>
        <p>堅持教學回歸專業，嚴選專業師資、定期篩選</p>
      </div>
      <img src="@/assets/images/introduction-2.png">
      <div class="content">
        <h3>深入</h3>
        <p>不止步於入門，提供更深入的中高階、應用、實戰內容</p>
      </div>
      <img src="@/assets/images/introduction-3.png">
      <div class="content">
        <h3>實用</h3>
        <p>傳授工作用得到的技巧，學習實務必備的技術</p>
      </div>
    </div>
    <div class="course">
      <div class="title">
        <h3>正在募資中的課程</h3>
        <a href="https://hiskio.com/search/explore?professions=0&type=attendance&level=ALL&coursesType=courses&status=PRESALE" type="button">更多募資課程</a>
      </div>
      <div class="contents" v-for="i in 8">
        <div class="course-item">
          <img class="m-0" src="@/assets/images/courseImage.png">
          <div class="news">
            <h3>區塊鏈開發實戰｜零基礎也能打造資產管理系統</h3>
            <img src="@/assets/images/avatar.png">
            <p>KC</p>
            <div class="remaining-days">
              <p>剩37天</p>
              <p style="margin: 0px;float: right;">以募資 107%</p>
            </div>
            <div class="progress-bar"></div>
            <div class="price">
              <p class="discount">$ 1,990</p>
              <s>$ 2,390</s>
            </div>
          </div>
        </div>
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
