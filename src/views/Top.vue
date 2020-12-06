<template>
  <div>
    <!-- First-block Start -->
    <section id="first-block">
      <h3 class="first-sentence">その体験、形に残しませんか？</h3>
    </section>
    <!-- First-block End-->

    <!-- Second-block Start -->
    <section id="second-block">
      <h3 class="second-sentence">
        ガイドブックからだけでは得られない
        <br />
        新しい旅しませんか？
      </h3>
    </section>
    <!-- Second-block End -->

    <!-- Third-block Start -->
    <section id="third-block">
      <h3 class="third-sentence">
        あなたの旅の体験、楽しみに心待ちしている人がいます。
      </h3>
    </section>
    <!-- Third-block End -->

    <!-- Fourth-block Start -->
    <section id="fourth-block">
      <h3 class="fourth-sentence">
        書く上での心配はいりません。
        <br />
        環境は私たちが用意しているので必要なのは
        <br />
        あなたの貴重な旅の体験、ただそれだけです。
      </h3>
      <div class="image__box">
        <img src="/images/AdobeStock_337859550.jpeg" class="image" />
      </div>
    </section>
    <!-- Fourth-block End -->

    <!-- Fifth-block Start -->
    <section id="fifth-block">
      <h3 class="fifth-sentence1">さあ、はじめよう</h3>
      <span class="fifth-sentence2">Tabi log</span>
      <h5 class="fifth-sentence3">~あなたの旅が誰かを楽しませる~</h5>
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
    const firstSentence = document.querySelectorAll(".first-sentence");
    firstSentence.forEach(target => this.onIntersect(target, options));
    const secondSentence = document.querySelectorAll(".second-sentence");
    secondSentence.forEach(target => this.onIntersect(target, options));
    const thirdSentence = document.querySelectorAll(".third-sentence");
    thirdSentence.forEach(target => this.onIntersect(target, options));
    const fourthSentence = document.querySelectorAll(".fourth-sentence");
    fourthSentence.forEach(target => this.onIntersect(target, options));
    const fifthSentence1 = document.querySelectorAll(".fifth-sentence1");
    fifthSentence1.forEach(target => this.onIntersect(target, options));
    const fifthSentence2 = document.querySelectorAll(".fifth-sentence2");
    fifthSentence2.forEach(target => this.onIntersect(target, options));
    const fifthSentence3 = document.querySelectorAll(".fifth-sentence3");
    fifthSentence3.forEach(target => this.onIntersect(target, options));
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
/* PCの場合 */

/* First block Start*/
#first-block {
  /* position: relative; */
  background-image: url("/images/AdobeStock_337859550.jpeg");
  background-size: cover;
  background-position-y: center;
  width: 100%;
  height: 1200px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.first-sentence {
  /* position: absolute;
  top: 10%;
  left: 50%; */
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
  /* position: relative; */
  background-image: url("/images/AdobeStock_215787551.jpeg");
  background-size: cover;
  background-position-y: bottom;
  width: 100%;
  height: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.second-sentence {
  /* position: absolute;
  top: 10%;
  left: 10%; */
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
  /* position: relative; */
  background-image: url("/images/AdobeStock_339044153.jpeg");
  background-size: cover;
  background-position-y: center;
  width: 100%;
  height: 1200px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.third-sentence {
  /* position: absolute;
  top: 10%;
  left: 10%; */
  color: #606060;
  text-align: center;
  font-size: 60px;
  font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
  opacity: 0;
  transform: translateY(50px);
}
/* Third block End*/

/* Fourth block Start*/
#fourth-block {
  /* position: relative; */
  background-image: url("/images/AdobeStock_141701394.jpeg");
  background-size: cover;
  background-position-y: center;
  width: 100%;
  height: 1200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}

.fourth-sentence {
  /* position: absolute;
  top: 5%;
  left: 41%; */
  color: #606060;
  text-align: left;
  font-size: 50px;
  font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
  opacity: 0;
  transform: translateY(50px);
}

.image__box {
  /* position: absolute;
  top: 28%;
  left: 65%; */
  height: 20rem;
  transform: skew(-1deg, 3deg);
  /* flex: 1 1 5rem; */
}

.image {
  object-fit: contain;
  height: 100%;
}
/* Fourth block End*/

/* Fifth block Start */
#fifth-block {
  position: relative;
  background-image: url("/images/AdobeStock_341153617.jpeg");
  background-size: cover;
  background-position-y: center;
  width: 100%;
  height: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.fifth-sentence1 {
  /* position: absolute;
  top: 0;
  left: 42%; */
  color: #ffffff;
  text-align: center;
  font-size: 60px;
  font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
  opacity: 0;
  transform: translateY(50px);
}

.fifth-sentence2 {
  /* position: absolute;
  top: 40%;
  left: 45%; */
  color: #ffbf00;
  text-align: center;
  font-size: 60px;
  font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
  opacity: 0;
  transform: translateY(50px);
}

.fifth-sentence3 {
  /* position: absolute;
  top: 45%;
  left: 42%; */
  color: #0431b4;
  text-align: center;
  font-size: 30px;
  font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
  opacity: 0;
  transform: translateY(50px);
}

.show {
  opacity: 1;
  transition-duration: 1000ms;
  transform: translateY(0);
}
/* Fifth block End*/

/* タブレットの場合 */
/* @media (max-width: 1000px) { */
/* First block Start*/
/* #first-block {
    position: relative;
    background-image: url("/images/AdobeStock_337859550.jpeg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 1000px;
  }

  .first-sentence {
    position: absolute;
    top: 10%;
    left: 50%;
    color: #ffffff;
    text-align: center;
    font-size: 30px;
    font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
    opacity: 0;
    transform: translateY(50px);
  } */

/* First block End*/

/* Second block Start*/
/* #second-block {
    position: relative;
    background-image: url("/images/AdobeStock_215787551.jpeg");
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 1000px;
  }

  .second-sentence {
    position: absolute;
    top: 10%;
    left: 10%;
    color: #606060;
    text-align: center;
    font-size: 30px;
    font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
    opacity: 0;
    transform: translateY(50px);
  } */
/* Second block End*/

/* Third block Start*/
/* #third-block {
    position: relative;
    background-image: url("/images/AdobeStock_339044153.jpeg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 1000px;
  }

  .third-sentence {
    position: absolute;
    top: 10%;
    left: 5%;
    color: #606060;
    text-align: center;
    font-size: 30px;
    font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
    opacity: 0;
    transform: translateY(50px);
  } */
/* Third block End*/

/* Fourth block Start*/
/* #fourth-block {
    position: relative;
    background-image: url("/images/AdobeStock_141701394.jpeg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 600px;
  }

  .fourth-sentence {
    position: absolute;
    top: 10%;
    left: 40%;
    color: #606060;
    text-align: left;
    font-size: 20px;
    font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
    opacity: 0;
    transform: translateY(50px);
  }

  .image__box {
    position: absolute;
    top: 30%;
    left: 70%;
    height: 8rem;
    transform: skew(-1deg, 3deg); */
/* flex: 1 1 5rem; */
/* } */

/* .image {
    object-fit: contain;
    height: 100%;
  } */
/* Fourth block End*/

/* Fifth block Start */
/* #fifth-block {
    position: relative;
    background-image: url("/images/AdobeStock_341153617.jpeg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 1000px;
  }

  .fifth-sentence1 {
    position: absolute;
    top: 0;
    left: 42%;
    color: #ffffff;
    text-align: center;
    font-size: 30px;
    font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
    opacity: 0;
    transform: translateY(50px);
  }

  .fifth-sentence2 {
    position: absolute;
    top: 40%;
    left: 40%;
    color: #0431b4;
    text-align: center;
    font-size: 50px;
    font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
    opacity: 0;
    transform: translateY(50px);
  } */

/* .fifth-sentence3 {
    position: absolute;
    top: 45%;
    left: 30%;
    color: #0431b4;
    text-align: center;
    font-size: 30px;
    font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
    opacity: 0;
    transform: translateY(50px);
  }

  .show {
    opacity: 1;
    transition-duration: 1000ms;
    transform: translateY(0);
  } */
/* Fifth block End*/
/* } */

/* スマートフォンの場合 */
@media (max-width: 670px) {
  /* First block Start*/
  #first-block {
    background-image: url("/images/AdobeStock_337859550.jpeg");
    background-size: cover;
    background-position-y: center;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }

  .first-sentence {
    /* position: absolute;
    top: 10%;
    left: 30%; */
    color: #ffffff;
    text-align: center;
    font-size: 15px;
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
    background-position: bottom;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .second-sentence {
    /* position: absolute;
    top: 10%;
    left: 10%; */
    color: #606060;
    text-align: left;
    font-size: 15px;
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
    background-position: center;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .third-sentence {
    /* position: absolute;
    top: 10%;
    left: 0%; */
    color: #606060;
    text-align: center;
    font-size: 12px;
    font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
    opacity: 0;
    transform: translateY(50px);
  }
  /* Third block End*/

  /* Fourth block Start*/
  #fourth-block {
    /* position: relative; */
    background-image: url("/images/AdobeStock_141701394.jpeg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .fourth-sentence {
    /* position: absolute;
    top: 10%;
    left: 41%; */
    color: #606060;
    text-align: left;
    font-size: 10px;
    font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
    opacity: 0;
    transform: translateY(50px);
  }

  .image__box {
    /* position: absolute;
    top: 33%;
    left: 62%; */
    height: 3.5rem;
    transform: skew(-1deg, 3deg);
    /* flex: 1 1 5rem; */
  }

  .image {
    object-fit: contain;
    height: 100%;
  }
  /* Fourth block End*/

  /* Fifth block Start */
  #fifth-block {
    /* position: relative; */
    background-image: url("/images/AdobeStock_341153617.jpeg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .fifth-sentence1 {
    /* position: absolute;
    top: 0;
    left: 35%; */
    color: #ffffff;
    text-align: center;
    font-size: 15px;
    font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;

    opacity: 0;
    transform: translateY(50px);
  }

  .fifth-sentence2 {
    /* position: absolute;
    top: 40%;
    left: 35%; */
    color: #ffbf00;
    text-align: center;
    font-size: 25px;
    font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
    opacity: 0;
    transform: translateY(50px);
  }

  .fifth-sentence3 {
    color: #0431b4;
    text-align: left;
    font-size: 5px;
    font-family: "Meiryo UI", "Meiryo", "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "Osaka", sans-serif;
    padding: 10px;
    /* opacity: 0;
    transform: translateY(50px); */
  }

  .show {
    opacity: 1;
    transition-duration: 1000ms;
    transform: translateY(0);
  }
  /* Fifth block End*/
}
</style>
