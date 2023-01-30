new Swiper(".swiper", {
  loop: false,
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  loopedSlides: 0,
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      centeredSlides: false,
      coverflowEffect: {
        depth: 0,

        rotate: 0,

        stretch: -10,
      },
    },
  },
  autoplay: {
    delay: 3000,
  },
  coverflowEffect: {
    depth: 80,
    rotate: 50,
    stretch: 20,
  },
});

new Swiper(".swiper2", {
  loop: false,
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  loopedSlides: 0,
  speed: 500,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },

  breakpoints: {
    768: {
      centeredSlides: false,
      coverflowEffect: {
        depth: 0,

        rotate: 0,

        stretch: -10,
      },
    },
  },
  autoplay: {
    delay: 3000,
  },
  coverflowEffect: {
    depth: 80,
    rotate: 50,
    stretch: 20,
  },
});
