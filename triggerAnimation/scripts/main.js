gsap.registerPlugin(ScrollTrigger);

// トップの矢印の往復アニメーション
gsap.to(".top_icon", {
  y: 20,
  yoyo: true,
  repeat: -1,
});

// パーティクル生成アニメーション
ScrollTrigger.create({
  trigger: ".likeButton",
  start: "top center",
  toggleClass: "is-active",
  once: true,
});

// カードがスクロールに合わせて出現
document.querySelectorAll(".card").forEach((el) => {
  gsap.fromTo(
    el,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        ease: "expo",
      },
    }
  );
});

// タイピングアニメーションの発火
function initTypeAnim() {
  ityped.init(document.querySelector(".ityped"), {
    strings: ["ICS MEDIA"], //表示させたい文字の設定 区切りはカンマ
    startDelay: 0, //アニメーション開始までの遅延、大きいほど遅れる
    typeSpeed: 120, //表示させるスピード、大きいほどゆっくり
    loop: false, //ループ
    backSpeed: 80, //戻るスピード
    backDelay: 150, //戻る時間指定
    showCursor: true, //カーソル表示
    cursorChar: "|", //カーソルとして表示するテキスト
  });
}
ScrollTrigger.create({
  trigger: ".ityped",
  start: "top 90%",
  onEnter: initTypeAnim,
  once: true,
});
