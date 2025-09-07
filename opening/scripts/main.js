const mvText = document.querySelectorAll(".js-mv_title-item");
mvText.forEach((item) => {
  let newText = "";
  const text = item.textContent;
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    newText += `<span>${result[i]}</span>`;
  }
  item.innerHTML = newText;
});

const jsLoaderBg = ".js-loader-bg";
const jsDot = ".js-loader-dot-wrap > span";
const jsBubble = ".js-mv-bubble [id*=item]";
const jsText = ".js-mv_title-item > span";
const jsLeadText = ".js-mv_title-lead";
const jsHeader = ".js-header";
// init
gsap.set([jsBubble, jsText, jsLeadText], {
  opacity: 0,
  y: 30,
});

gsap.set(jsDot, {
  opacity: 0,
  y: -50,
});

gsap.set(jsHeader, {
  opacity: 0,
  y: -50,
});

const tl = gsap.timeline();

tl.to(jsDot, {
  opacity: 1,
  y: 0,
  duration: 0.8,
  delay: 0.8,
  stagger: {
    amount: 0.5,
    from: "left",
    ease: "power4.inOut",
  },
})
  .to(jsDot, {
    opacity: 0,
    stagger: {
      amount: 0.5,
      from: "start",
      ease: "power4.inOut",
    },
  })
  .to(
    jsLoaderBg,
    {
      y: "100%",
    },
    "+=0.5"
    // バブルのアニメーションを3回繰り返す
  )
  .to(
    jsBubble,
    {
      opacity: 1,
      y: 0,
      duration: 0.8, // seconds
      stagger: {
        amount: 0.6,
        from: "start",
        ease: "sine.in",
      },
      repeat: -1, // 無限に再生
      yoyo: true, // アニメーションを往復させる場合はtrue
    },
    "+=0.2"
  )
  .to(
    jsText,
    {
      opacity: 1,
      y: 0,
      stagger: {
        amount: 1,
        from: "start",
        ease: "sine.in",
      },
    },
    "-=0.1"
  )
  .to(
    jsLeadText,
    {
      opacity: 1,
      y: 0,
    },
    "-=0.2"
  )
  .to(
    jsHeader,
    {
      opacity: 1,
      y: 0,
    },
    "<"
  );
