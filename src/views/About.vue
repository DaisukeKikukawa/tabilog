<template>
 <div>
    <header class="header-nav">
      <nav><a href="#first-block">Tabi log</a></nav>
      <nav><a href="#second-block">ログイン</a></nav>
      <nav><a href="#third-block">新規登録</a></nav>
    </header>

    <!-- First block Start -->
    <section id="first-block">
      <div class="title-container">
        <h1>Tabilogとは？</h1>
        <h3>旅の記録を共有するプラットフォームで、旅の計画の参考にできるサービスです。</h3>
      </div>
    </section>
    <!-- First block End -->

    <!-- Second block Start -->
    <section id="second-block">
      <p class="property-title">[Tabilogの特徴]</p>
      <div class="property-container">
        <p class="property1">
          <img src="@/assets/AdobeStock_" class="property1-image">
          <span class="property1-text">旅の記録（エリア、日時、内容）の詳細が見れます！</span>
        </p>

        <p class="property2">
          <img src="@/assets/AdobeStock_" class="property2-image">
          <span class="property2-text">旅好きの人がつながるプラットフォーム（旅人を検索することができます！）</span>
        </p>   
      </div>
    </section>
    <!-- Second block End -->

    <!-- Third block Start --> 
    <section id="third-block">

    </section>
    <!-- Thire block End -->

    <footer>
      <span>Copyright © 旅人のあつまり All Rights Reserved.</span>
    </footer>
  </div>
</template>

<style scoped>

.header-nav {
  background-color: #A4A4A4;
  position: fixed;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

nav{
  margin-right: 5%;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #f00;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #FFBF00;
  font-size: 15px;
  color: #fff;
}

header{
  height: 60px;
  background-color:#A4A4A4;
}

.first-block {
  height: 500px;
  background-color: #ddd;
}

.second-block {
  height: 500px;
  background-color: #f0f0f0;
}

.third-block {
  height: 500px;
  background-color: #f05f40;
}

footer{
  height: 50px;
  background-color:  #FFBF00;
}

/* First block */
#first-block {
  background-color: #F5DA81;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-container {
  text-align: center;
}

h1 {
  font-size: 80px;
  font-family: serif;
  color:#FFBF00
}

h3 {
  font-size: 50px;
  font-family: serif;
  color: #000;
}
/* First block End */

/* Second block Start  */
#Second-block {
  background-color: #F5DA81;
}

.property-title {
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
}

.property-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.property1 {
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 margin-top: 30px;
 margin-bottom: 20px;
 width: 100%;
}
</style>