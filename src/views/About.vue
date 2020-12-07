<template>
  <div>
    <router-link tag="button" to="/map">Map</router-link>
    <router-view />
    <!-- First block Start -->
    <section id="first-block">
      <div class="title-container">
        <h1>Tabilogとは？</h1>
        <h3>
          旅の記録を共有するプラットフォームで、旅の計画の参考にできるサービスです。
        </h3>
      </div>
      <p class="property-title">[Tabilogの特徴]</p>
      <div class="property-container">
        <div class="property1">
          <div class="image__box">
            <img src="/images/AdobeStock_235582356.jpeg" class="image" />
          </div>
          <span class="property1-text">
            旅の記録（エリア、日時、内容）の詳細が見れます！
          </span>
        </div>

        <div class="property2">
          <div class="image__box">
            <img src="/images/AdobeStock_259057033.jpeg" class="image" />
          </div>
          <span class="property2-text">
            旅好きの人がつながるプラットフォーム
            <br />
            （旅人を検索することができます！）
          </span>
        </div>
      </div>
    </section>
    <!-- First block End -->

    <!-- Second block Start -->
    <section id="second-block">
      <div class="vision-container">
        <div class="vision1">
          <span class="vision1-text">
            私たちは皆、旅が好きという共通点がありました。
            <br />
            旅の計画を今まで、ガイドブックや旅行代理店が提供するプランで
            <br />
            決めてきた人も多いのではないかと思いました。
            <br />
            そこで、1人1人の旅の思い出を記録し、ガイド本を作る。
            <br />
            面白い人・体験が集まったプラットフォームで次の旅の計画をワクワクして
            <br />
            決められるサービスを作ろうと思ってできたもの
            <br />
            それが「Tabi log」です。
          </span>
          <div class="image__box">
            <img src="/images/AdobeStock_159025204.jpeg" class="image" />
          </div>
        </div>

        <div class="vision2">
          <span class="vision2-text">
            私たち自身、旅をして心が動くような体験をし、
            <br />
            これからの選択肢が広がるような経験ができました。
            <br />
            この体験を一人でも多くの人に実感してもらいたい。
            <br />
            旅をもっと好きになってほしい。 それが私たちの伝えたい想いです。
          </span>
          <div class="image__box">
            <img src="/images/AdobeStock_339828492.jpeg" class="image" />
          </div>
        </div>
      </div>
    </section>
    <!-- Second block End -->

    <!-- Third block Start -->
    <section id="third-block">
      <p class="profile-title">[Member]</p>
      <div class="profile-container">
        <div class="member1">
          <div class="image__member">
            <img src="/images/profile.jpg" class="image" />
          </div>
          <span class="member1-name">Hiroshi Tsuji</span>
          <h5 class="member1-text">ぼうっとしたいです。</h5>
        </div>

        <div class="member2">
          <div class="image__member">
            <img src="/images/profile2.JPG" class="image" />
          </div>
          <span class="member2-name">Daisuke Kikukawa</span>
          <h5 class="member2-text">サッカー好きです！</h5>
        </div>

        <div class="member3">
          <div class="image__member">
            <img src="/images/profile3.JPG" class="image" />
          </div>
          <span class="member3-name">Shiro Wakabayashi</span>
          <h5 class="member3-text">晩酌が至福のひと時です。</h5>
        </div>

        <!-- <div class="member4">
          <div class="image__member">
            <img src="/images/edit5.JPG" class="image" />
          </div>
          <span class="member4-name">Takahiro Orihara</span>
          <h5 class="member4-text">message4</h5>
        </div> -->
      </div>
    </section>
    <!-- Thire block End -->
  </div>
</template>

<script>
export default {
  mounted() {
    // rootからbottom:-150pxの位置で発火
    const options = {
      root: null,
      rootMargin: "0px 0px -150px",
      threshold: 0
    }
    const vision1 = document.querySelectorAll(".vision1")
    vision1.forEach(target => this.onIntersect(target, options))
    const vision2 = document.querySelectorAll(".vision2")
    vision2.forEach(target => this.onIntersect(target, options))
  },

  methods: {
    onIntersect(target, options = {}) {
      const observer = new IntersectionObserver(this.addShowClass, options)
      // 監視したい要素をobserveする。
      observer.observe(target)
    },
    addShowClass(entries) {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("show")
        }
      }
    }
  }
}
</script>

<style scoped>
/* First block */
#first-block {
  background-color: #f5da81;
}

.title-container {
  text-align: center;
}

h1 {
  margin: 0;
  font-size: 80px;
  font-family: serif;
  color: #ffbf00;
}

h3 {
  font-size: 30px;
  font-family: serif;
  color: #000;
}

.property-title {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 30px;
}

.property-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.property1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 50%;
}

.image__box {
  height: 20rem;
  /* flex: 1 1 5rem; */
}

.image {
  object-fit: contain;
  height: 100%;
}

.property1-text {
  font-size: 20px;
  padding: 10px;
  flex: 1 0 0;
}

.property2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 50%;
}

.property2-text {
  font-size: 20px;
  padding: 10px;
  flex: 1 0 0;
}
/* First block End */

/* Second block Start  */
#second-block {
  background-color: #81f7f3;
}

.vision-container {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 100%;
}

.vision1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 100%;
  opacity: 0;
  transform: translateY(50px);
}

.vision1-text {
  font-size: 20px;
  padding: 10px;
  width: 40%;
}

.vision2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 100%;
  opacity: 0;
  transform: translateY(50px);
}

.vision2-text {
  font-size: 20px;
  padding: 10px;
  width: 40%;
}

.show {
  opacity: 1;
  transition-duration: 1000ms;
  transform: translateY(0);
}
/* Second block End */

/* Third block Start  */
#third-block {
  background-color: #6bb6f8;
}

.profile-title {
  margin: 0;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 30px;
}

.profile-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-end;
  width: 100%;
}

.member1 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 25%;
}

.image__member {
  height: 10rem;
  /* flex: 1 1 5rem; */
}

.member1-name {
  text-align: center;
}

.member1-text {
  text-align: center;
}

.member2 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 25%;
}

.member2-name {
  text-align: center;
}

.member2-text {
  text-align: center;
}

.member3 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 25%;
}

.member3-name {
  text-align: center;
}

.member3-text {
  text-align: center;
}

/* .member4 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 25%;
}

.member4-name {
  text-align: center;
}

.member4-text {
  text-align: center;
} */
/* Third block End */

/* スマートフォンの場合 */
@media (max-width: 670px) {
  /* First block */
  #first-block {
    background-color: #f5da81;
  }

  .title-container {
    text-align: center;
  }

  h1 {
    margin: 0;
    font-size: 40px;
    font-family: serif;
    color: #ffbf00;
  }

  h3 {
    font-size: 15px;
    font-family: serif;
    color: #000;
  }

  .property-title {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 30px;
  }

  .property-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  .property1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 50%;
  }

  .image__box {
    height: 10rem;
    /* flex: 1 1 5rem; */
  }

  .image {
    object-fit: contain;
    height: 100%;
  }

  .property1-text {
    font-size: 10px;
    padding: 10px;
    flex: 1 0 0;
  }

  .property2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 50%;
  }

  .property2-text {
    font-size: 10px;
    padding: 10px;
    flex: 1 0 0;
  }
  /* First block End */

  /* Second block Start  */
  #second-block {
    background-color: #81f7f3;
  }

  .vision-container {
    display: flex;
    flex-direction: column;
    align-content: space-around;
    width: 100%;
  }

  .vision1 {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 100%;
    opacity: 0;
    transform: translateY(50px);
  }

  .vision1-text {
    font-size: 10px;
    width: 100%;
  }

  .vision2 {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 100%;
    opacity: 0;
    transform: translateY(50px);
  }

  .vision2-text {
    font-size: 10px;
    width: 100%;
  }

  .show {
    opacity: 1;
    transition-duration: 1000ms;
    transform: translateY(0);
  }
  /* Second block End */

  /* Third block Start  */
  #third-block {
    background-color: #6bb6f8;
  }

  .profile-title {
    margin: 0;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 30px;
  }

  .profile-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: flex-end;
    width: 100%;
  }

  .member1 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 25%;
  }

  .image__member {
    height: 5rem;
    /* flex: 1 1 5rem; */
  }

  .member1-name {
    text-align: center;
  }

  .member1-text {
    text-align: center;
  }

  .member2 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 25%;
  }

  .member2-name {
    text-align: center;
  }

  .member2-text {
    text-align: center;
  }

  .member3 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 25%;
  }

  .member3-name {
    text-align: center;
  }

  .member3-text {
    text-align: center;
  }

  /* .member4 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 25%;
  }

  .member4-name {
    text-align: center;
  }

  .member4-text {
    text-align: center;
  } */
  /* Third block End */
}
</style>
