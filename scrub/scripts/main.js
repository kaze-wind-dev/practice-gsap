gsap.registerPlugin(ScrollTrigger);

// 上のスクロールインジケーター
const barTl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});
barTl.fromTo(".header-line_inner", { width: 0 }, { width: "100%" });

//トップの画像パララックス
const topTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".top",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
});
// ラベルについて https://greensock.com/docs/v3/GSAP/Timeline/addLabel()
// アニメーションの実行タイミングの基準点になります
topTl.addLabel("topLabel");
document.querySelectorAll(".top_title span").forEach((el, index) => {
  console.log(el);
  topTl.to(
    el,
    {
      y: -50,
      duration: 0.1,
    },
    `topLabel+=${index / 20}`
  );
});
topTl.to(
  ".top_image",
  {
    backgroundPositionY: 50,
    duration: 1,
  },
  "topLabel"
);

// カード
document.querySelectorAll(".card").forEach((el) => {
  const img = el.querySelector(".card_figure img");
  const title = el.querySelector(".card_title");
  const text = el.querySelector(".card_text");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 80p%",
      end: `+=${window.innerHeight / 2}`,
      // end: `top 50%`,
      scrub: 1,
      markers: true,
    },
  });
  tl.fromTo(
    title,
    { y: 50 },
    {
      y: 0,
      ease: "none",
      duration: 1,
    }
  );
  tl.fromTo(
    text,
    { y: 50 },
    {
      y: 0,
      ease: "none",
      duration: 1,
    },
    "<"
  );
  tl.to(img, { scale: 1.2, ease: "none", duration: 2 }, "-=0.5");
});

// 下部

ScrollTrigger.create({
  trigger: ".bottom",
  start: "top 50%",
  toggleClass: "is-crossed",
});
const bottomTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".bottom",
    start: "top bottom",
    end: "center center",
    scrub: 1,
  },
});
bottomTl
  .fromTo(
    ".js-bottom_left",
    {
      xPercent: -100,
    },
    { xPercent: 0 }
  )
  .fromTo(
    ".js-bottom_right",
    {
      xPercent: 100,
    },
    { xPercent: 0 },
    "<"
  );
