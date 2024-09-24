// GSAP Animation for Section 1
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#main",
      //   markers: true,
      start: "top top",
      end: "200% 100%",
      scrub: 2,
      pin: true,
    },
  })
  .to(
    "#center",
    {
      height: "100vh",
    },
    "a"
  )
  .to(
    "#top",
    {
      top: "-50%",
    },
    "a"
  )
  .to(
    "#bottom",
    {
      bottom: "-50%",
    },
    "a"
  )
  .to(
    "#top-h1",
    {
      top: "60%",
    },
    "a"
  )
  .to(
    "#bottom-h1",
    {
      bottom: "-30%",
    },
    "a"
  );

// GSAP Animation for Section 2
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#MelodyOfLife",
      //   markers: true,
      start: "top center",
      end: "bottom 100%",
      scrub: 2,
      pin: true,
    },
  })
  .from(".marquee", {
    opacity: 0,
    y: 50,
    duration: 2,
  })
  .from(".melody_style", {
    opacity: 0,
    x: -100,
    duration: 2,
    stagger: 0.5,
  });

gsap.fromTo(
  ".scroll-down-text",
  {
    y: 0,
    opacity: 1,
  },
  {
    y: 20, // Bounce effect
    opacity: 0.5, // Reduce opacity on hover
    repeat: -1, // Infinite loop
    yoyo: true, // Reverse the animation
    duration: 1.5, // Control speed
    ease: "power1.inOut", // Easing effect for smooth motion
  }
);

let parallaxImage = document.getElementById("ParallaxImage");
let parallaxContent = document.getElementById("ParallaxContent");
let windowScrolled;

window.addEventListener("scroll", function () {
  windowScrolled =
    window.pageYOffset || this.document.documentElement.scrollTop;
  console.log(windowScrolled);
  parallaxImage.style.transform = `translate3d(0px, ${
    windowScrolled / 3
  }, 0px)`;
  console.log(parallaxImage.style.transform);
  parallaxContent.style.transform = `translate3d(0px, ${
    windowScrolled / 6
  }px, 0px)`;
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

document
  .querySelector('a[href="#MelodyOfLife"]')
  .addEventListener("click", function (e) {
    e.preventDefault(); // ป้องกันการกระทำตามปกติของลิงก์
    document.querySelector("#MelodyOfLife").scrollIntoView({
      behavior: "smooth", // ใช้ smooth scroll
    });
  });


  function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
  }
  loaderAnimation()
  