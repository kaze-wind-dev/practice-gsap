gsap.registerPlugin(ScrollTrigger);

// キービジュアル
const topTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".top",
    start: "top top",
    end: "+=900",
    scrub: true,
    pin: true,
    markers: true,
  },
});
topTl.fromTo(
  ".top_title",
  {
    opacity: 0,
    scale: 0.2,
  },
  { opacity: 1, scale: 1, ease: "Power4.out" }
);
topTl.to(".top_title_innerLeft", {
  x: -innerWidth / 2,
});
topTl.to(
  ".top_title_innerRight",
  {
    x: innerWidth / 2,
  },
  "<"
);

// 説明コンテンツ

ScrollTrigger.create({
  trigger: ".article_image",
  start: "top 80",
  endTrigger: ".article_text",
  end: `center 40%`,
  pin: true,
  pinSpacing: false,
  markers: true,
});

// カード
const cardTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".cardSection",
    start: "top top",
    pin: true,
    end: `+=${innerHeight}`,
    scrub: 0.5,
  },
});

const target = document.querySelector(".cards");
cardTl.to(target, {
  delay: 0.1,
  x: -target.clientWidth + innerWidth - 120,
  ease: "none",
});

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
