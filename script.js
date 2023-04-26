$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $("html,body").scrollTop(0);

  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  console.log("Hello");

  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $("nav").removeClass("transparent");
    } else {
      $("nav").addClass("transparent");
    }
  });

  //Initialize swiper
  let bannerSwiper = new Swiper(".bannerSwiper", {
    lazy: true,
    loop: true,
    effect: "fade",
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //Initialize swiper
  let testimonialSwiper = new Swiper(".testimonialsSwiper", {
    lazy: true,
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      767: { slidesPerView: 1 },
    },
  });

  $(".video-play-btn").click(() => {
    $(".modal iframe").attr("src", "https://www.youtube.com/embed/A-yYTkfrHR0");
    $(".modal").addClass("is-active");
    console.log("clicked");
  });

  $(".modal-close").click(() => {
    $(".modal iframe").attr("src", "");
    $(".modal ").removeClass("is-active");
  });
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      $(".modal iframe").attr("src", "");

      $(".modal").removeClass("is-active");
    }
  });

  /*Fly In animation Starts*/
  setTimeout(() => {
    const block = document.querySelector(".fly-in-block");
    const blockOffset = block.offsetTop;
    console.log("block offset ", blockOffset);
    console.log("block offset ", blockOffset);

    const triggerAnimation = () => {
      const scrollHeight = window.pageYOffset + 200;
      console.log("scrollHeight offset ", scrollHeight);
      if (scrollHeight >= blockOffset) {
        block.classList.add("flyIn");
        window.removeEventListener("scroll", triggerAnimation);
        console.log("inin");
      }
    };
    console.log("h");
    window.addEventListener("scroll", triggerAnimation);
  }, 1000);
  /*Fly In animation Endss*/
});

testimonials = [
  {
    imageName: "imageName.jpg",
    name: "ABC",
    designation: "ddd",
    review: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliasquas sequi, aut animi enim dolorum sed doloremque aliquid quosvoluptatibus pariatur similique tenetur ad, nisi magni beataetemporibus sapiente quaerat est placeat et ipsa delectus! Eosillum illo, repellendus quas facilis.iusto, ab quibusdam eaque officiis laboriosam cumque? At impedit`,
  },
  {
    imageName: "imageName.jpg",
    name: "ABC",
    designation: "ddd",
    review: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliasquas sequi, aut animi enim dolorum sed doloremque aliquid quosvoluptatibus pariatur similique tenetur ad, nisi magni beataetemporibus sapiente quaerat est placeat et ipsa delectus! Eosillum illo, repellendus quas facilis.iusto, ab quibusdam eaque officiis laboriosam cumque? At impedit`,
  },
];

testimonials.forEach((element) => {
  console.log(element.name);
});
