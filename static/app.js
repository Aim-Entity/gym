function main() {
  if (window.innerWidth > 960) {
    HomeFade();
    experts();
    smooth();
    tabSwitch();
    navShift();
    navSlide();
    elementFadeIn([".about h2", ".about p"], 400, 0.5, -75);
    elementFadeIn([".facility-title", ".facility-par"], 1200, 0.5, -75);
    elementFadeIn(
      [".benifit-title", ".benifit-desc1", ".benifit-desc2"],
      1700,
      0.5,
      -55
    );
    elementFadeIn(
      [".feather .icon", ".feather h3", ".feather p"],
      2800,
      0.75,
      -125
    );
    elementFadeIn(
      [".dollar1 .icon", ".dollar1 h3", ".dollar1 p"],
      2800,
      0.75,
      125
    );

    elementFadeIn(
      [".trainer .icon", ".trainer h3", ".trainer p"],
      3000,
      0.75,
      -125
    );

    elementFadeIn([".diet .icon", ".diet h3", ".diet p"], 3000, 0.75, 125);

    elementFadeIn(
      [".benifit-title", ".benifit-desc1", ".benifit-desc2"],
      1700,
      0.5,
      -55
    );
    elementFadeIn(
      [".intense .icon", ".intense h3", ".intense p"],
      4500,
      0.75,
      -125
    );
    elementFadeIn(
      [".dollar2 .icon", ".dollar2 h3", ".dollar2 p"],
      4500,
      0.75,
      125
    );

    elementFadeIn(
      [".growth .icon", ".growth h3", ".growth p"],
      4800,
      0.75,
      -125
    );
    elementFadeIn(
      [".support .icon", ".support h3", ".support p"],
      4800,
      0.75,
      125
    );
  }
}

function navSlide() {
  const hamburger = document.querySelector(".hamburger");
  let navItems = document.querySelectorAll(".phone-ul ul li");
  const tl = new TimelineLite({ paused: true, reversed: true });
  const tl2 = new TimelineLite({ paused: true, reversed: true });

  tl.to(
    ".phone-ul",
    1,
    {
      x: "100%",
      ease: Power2.easeOut,
    },
    "-=4" // Does this 4 seconds earlier to gain time for tl2
  );

  for (let i = 0; i < navItems.length; i++) {
    tl2.fromTo(
      navItems[i], // Loops through the whole ul set
      0.15, // Makes its faster for UX
      {
        opacity: 0,
        y: "-30px",
        ease: Power2.easeOut,
      },
      {
        opacity: 1,
        y: "0px",
      },
      "+=0.15"
    );
  }

  hamburger.addEventListener("click", (e) => {
    toggleTween(tl);
    toggleTween(tl2);
  });
}

function navShift() {
  if (window.innerWidth > 959) {
    const tl = new TimelineLite({ paused: true, reversed: true });

    tl.to([".title", ".nav-item a"], 0.3, {
      color: "#000",
      ease: Power2.easeOut,
    }).to(
      "nav",
      0.5,
      {
        boxShadow: "-3px 4px 4px rgba(0, 0, 0, 0.06)",
        backgroundColor: "#fff",
        ease: Power2.easeOut,
      },
      "-=0.2"
    );
    let state = false;

    window.addEventListener("scroll", (e) => {
      const scrolled = window.scrollY;

      if (scrolled > 570 && state == false) {
        toggleTween(tl);
        state = true;
      } else if (scrolled < 570 && state == true) {
        toggleTween(tl);
        state = false;
      }
    });
  }
}

function tabSwitch() {
  let tl = new TimelineLite({ paused: true, reversed: true });
  let tabs = document.querySelectorAll(".tab-text");

  let current = document.querySelector(".current-text");
  let newcomer = document.querySelector(".newcomer-text");
  let athlete = document.querySelector(".athlete-text");
  let facility = document.querySelector(".facility-text");

  tabs[1].addEventListener("click", (e) => {
    let currentTab = document.querySelector(".tab-current");
    tl.to(".current-text", 0.5, {
      opacity: 0,
      display: "none",
      ease: Power2.easeOut,
    }).to(".athlete-text", 0.5, {
      opacity: 1,
      display: "block",
      ease: Power2.easeOut,
    });

    current.classList.remove("current-text");
    athlete.classList.add("current-text");

    currentTab.classList.remove("tab-current");
    tabs[1].classList.add("tab-current");
    tl.play();
  });

  tabs[2].addEventListener("click", (e) => {
    let currentTab = document.querySelector(".tab-current");
    tl.to(".current-text", 0.5, {
      opacity: 0,
      display: "none",
      ease: Power2.easeOut,
    }).to(".facility-text", 0.5, {
      opacity: 1,
      display: "block",
      ease: Power2.easeOut,
    });

    current.classList.remove("current-text");
    facility.classList.add("current-text");

    currentTab.classList.remove("tab-current");
    tabs[2].classList.add("tab-current");
    tl.play();
  });

  tabs[0].addEventListener("click", (e) => {
    let currentTab = document.querySelector(".tab-current");
    tl.to(".current-text", 0.5, {
      opacity: 0,
      display: "none",
      ease: Power2.easeOut,
    }).to(".newcomer-text", 0.5, {
      opacity: 1,
      display: "block",
      ease: Power2.easeOut,
    });

    current.classList.remove("current-text");
    newcomer.classList.add("current-text");

    currentTab.classList.remove("tab-current");
    tabs[0].classList.add("tab-current");
    tl.play();
  });
}

function smooth() {
  let nav = document.querySelectorAll(".nav-item");
  let join = document.querySelector(".facility-btn");
  let plan = document.querySelectorAll(".price-btn");

  function smoothScroll(target, duration) {
    let goTo = document.querySelector(target); // target
    let targetPosition = goTo.getBoundingClientRect().top; // The target's top div offset location
    let startPosition = window.pageYOffset; // Where the scroll begins (0)
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapse = currentTime - startTime;

      let run = ease(timeElapse, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapse < duration) requestAnimationFrame(animation); // Plugin
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b; // Mathematical easing
    }
    requestAnimationFrame(animation);
  }

  for (let i = 0; i < plan.length; i++) {
    plan[i].addEventListener("click", () => {
      smoothScroll("#expert", 1000);
    });
  }

  nav[1].addEventListener("click", () => {
    smoothScroll("#benifit", 1000);
  });

  nav[2].addEventListener("click", () => {
    smoothScroll("#ta1", 1000);
  });

  nav[3].addEventListener("click", () => {
    smoothScroll(".price", 1000);
  });

  nav[4].addEventListener("click", () => {
    smoothScroll("#expert", 1000);
  });

  nav[5].addEventListener("click", () => {
    smoothScroll("#contact", 1000);
  });
}

function HomeFade() {
  const tl = new TimelineLite();

  tl.fromTo(
    ".seperater",
    1.5,
    {
      x: "-75px",
      opacity: 0,
      ease: Power2.easeOut,
    },
    {
      x: "0px",
      opacity: 1,
    }
  );
}

function elementFadeIn(element, pixels, duration, preX) {
  const tl = new TimelineLite({ paused: true, reversed: true });

  tl.fromTo(
    element,
    duration,
    {
      x: preX,
      opacity: 0,
      ease: Power2.easeOut,
    },
    {
      x: "0px",
      opacity: 1,
    }
  );

  scrollHelperFunc(pixels, tl);
}

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}

function scrollHelperFunc(pixels, tween) {
  let state = false;
  window.addEventListener("scroll", (e) => {
    const scrolled = window.scrollY;

    if (scrolled > pixels && state == false) {
      tween.play();
      state = true;
    } else if (scrolled < pixels && state == true) {
      tween.play();
      state = false;
    }
  });
}

function experts() {
  let containers = document.querySelectorAll(".expert-container");

  for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener("mouseover", (e) => {
      anime
        .timeline({
          targets: [e.target.children[1], e.target.children[2]],
          color: "rgb(255, 255, 255)",
          easing: "easeOutSine",
          duration: 500,
        })

        .add({
          targets: e.target,
          backgroundColor: "rgb(0, 0, 0)",
          // "linear-gradient(90deg, rgb(52,203,201) 0%, rgb(208,47,205) 100%)",
          easing: "easeInSine",
          duration: 500,
        });
    });

    containers[i].addEventListener("mouseout", (e) => {
      anime
        .timeline({
          targets: [e.target.children[1], e.target.children[2]],
          color: "rgb(0, 0, 0)",
          easing: "easeOutSine",
          duration: 500,
        })
        .add({
          targets: e.target,
          backgroundColor: "rgb(255, 255, 255)",
          // "linear-gradient(90deg, rgb(52,203,201) 0%, rgb(208,47,205) 100%)",
          easing: "easeInSine",
          duration: 500,
        })

        .add({
          targets: [e.target.children[3]],
          color: "rgb(0, 0, 0)",
          easing: "easeOutSine",
          duration: 500,
        });
    });
  }
}

main();
