<template>
  <div>
    <!-- First-block Start -->
    <section id="first-block">
      <div class="first-sentence">
        <h3 class="first-sub">その体験、形に残しませんか？</h3>
      </div>
    </section>
    <!-- First-block End-->

    <!-- Second-block Start -->
    <section id="second-block">
      <div class="second-sentence">
        <h3 class="second-sub">
          ガイドブックからだけでは得られない
          <br />
          新しい旅しませんか？
        </h3>
      </div>
    </section>
    <!-- Second-block End -->

    <!-- Third-block Start -->
    <section id="third-block">
      <div class="third-sentence">
        <h3 class="third-sub1">
          あなたの旅の体験、楽しみに心待ちしている人がいます。
        </h3>
        <h5 class="third-sub2">え、でも書くの難しそうだな…</h5>
      </div>
    </section>
    <!-- Third-block End -->

    <!-- Fourth-block Start -->
    <section id="fourth-block">
      <div class="fourth-sentence">
        <h3 class="fourth-sub">
          大丈夫です。環境は私たちが用意しているので必要なのは
          <br />
          あなたの貴重な旅の体験、ただそれだけです。
        </h3>
        <div class="image__box">
          <img src="/images/AdobeStock_337859550.jpeg" class="image" />
        </div>
      </div>
    </section>
    <!-- Fourth-block End -->

    <!-- Fifth-block Start -->
    <section id="fifth-block">
      <div class="fifth-sentence">
        <h3 class="fifth-sub1">さあ、はじめよう</h3>
        <span class="fifth-sub2">Tabi log</span>
        <h5 class="fifth-sub3">~あなたの旅が誰かを楽しませる~</h5>
      </div>
    </section>
    <!-- Fifth-block End -->
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
    };
    const firstSub = document.querySelectorAll(".first-sub");
    firstSub.forEach(target => this.onIntersect(target, options));
    const secondSub = document.querySelectorAll(".second-sub");
    secondSub.forEach(target => this.onIntersect(target, options));
    const thirdSub1 = document.querySelectorAll(".third-sub1");
    thirdSub1.forEach(target => this.onIntersect(target, options));
    const fourthSub = document.querySelectorAll(".fourth-sub");
    fourthSub.forEach(target => this.onIntersect(target, options));
    const fifthSub1 = document.querySelectorAll(".fifth-sub1");
    fifthSub1.forEach(target => this.onIntersect(target, options));
  },

  methods: {
    onIntersect(target, options = {}) {
      const observer = new IntersectionObserver(this.addShowClass, options);
      // 監視したい要素をobserveする。
      observer.observe(target);
    },
    addShowClass(entries) {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("show");
        }
      }
    }
  }
};
</script>

<style scoped>
/* First block Start*/
#first-block {
  background-image: url("/images/AdobeStock_337859550.jpeg");
  background-size: cover;
  width: 100%;
  height: 1500px;
}

.first-sub {
  position: absolute;
  top: 200px;
  left: 1800px;
  margin: 0;
  color: #ffffff;
  text-align: center;
  font-size: 60px;
  font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
  opacity: 0;
  transform: translateY(50px);
}

/* First block End*/

/* Second block Start*/
#second-block {
  background-image: url("/images/AdobeStock_215787551.jpeg");
  background-size: cover;
  width: 100%;
  height: 1500px;
}

.second-sub {
  position: absolute;
  top: 1700px;
  left: 100px;
  margin: 0;
  color: #606060;
  text-align: center;
  font-size: 60px;
  font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
  opacity: 0;
  transform: translateY(50px);
}
/* Second block End*/

/* Third block Start*/
#third-block {
  background-image: url("/images/AdobeStock_339044153.jpeg");
  background-size: cover;
  width: 100%;
  height: 1500px;
}

.third-sub1 {
  position: absolute;
  top: 3200px;
  left: 100px;
  margin: 0;
  color: #606060;
  text-align: center;
  font-size: 60px;
  font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
  opacity: 0;
  transform: translateY(50px);
}

.third-sub2 {
  position: absolute;
  top: 3300px;
  left: 100px;
  margin: 0;
  color: #0040ff;
  text-align: center;
  font-size: 30px;
  font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
}
/* Third block End*/

/* Fourth block Start*/
#fourth-block {
  background-image: url("/images/AdobeStock_141701394.jpeg");
  background-size: cover;
  width: 100%;
  height: 1500px;
}

.fourth-sub {
  position: absolute;
  top: 4800px;
  left: 1100px;
  margin: 0;
  color: #606060;
  text-align: left;
  font-size: 50px;
  font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
  opacity: 0;
  transform: translateY(50px);
}

.image__box {
  position: absolute;
  top: 5000px;
  left: 1100px;
  height: 25rem;
  /* flex: 1 1 5rem; */
}

.image {
  object-fit: contain;
  height: 100%;
}
/* Fourth block End*/

/* Fifth block Start */
#fifth-block {
  background-image: url("/images/AdobeStock_341153617.jpeg");
  background-size: cover;
  width: 100%;
  height: 1500px;
}

.fifth-sub1 {
  margin: 0;
  color: #606060;
  text-align: center;
  font-size: 60px;
  font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
  opacity: 0;
  transform: translateY(50px);
}

.fifth-sub2 {
  margin: 0;
  color: #0431b4;
  text-align: center;
  font-size: 60px;
  font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
}

.fifth-sub3 {
  margin: 0;
  color: #0431b4;
  text-align: center;
  font-size: 30px;
  font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
}

.show {
  opacity: 1;
  transition-duration: 1000ms;
  transform: translateY(0);
}
/* Fifth block End*/
</style>
