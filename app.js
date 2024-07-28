

let parallaxImage = document.getElementById("ParallaxImage");
let parallaxContent = document.getElementById("ParallaxContent");
let windowScrolled;

window.addEventListener("scroll", function () {
  windowScrolled =
    window.pageYOffset || this.document.documentElement.scrollTop;
  console.log(windowScrolled);
  parallaxImage.style.transform = `translate3d(0px, ${ windowScrolled / 3}, 0px)`;
  console.log(parallaxImage.style.transform);
  parallaxContent.style.transform = `translate3d(0px, ${ windowScrolled / 6}px, 0px)`;
});

document.addEventListener("scroll", function () {
  let windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
  let parallaxImage = document.getElementById("ParallaxBackground");
  let parallaxContent = document.getElementById("ParallaxContentt");

  if (parallaxImage) {
    parallaxImage.style.transform = `translate3d(0, ${
      windowScrolled / 20
    }px, 0)`;
  }
  if (parallaxContent) {
    parallaxContent.style.transform = `translate3d(0, ${
      windowScrolled / 7
    }px, 0)`;
  }
});
