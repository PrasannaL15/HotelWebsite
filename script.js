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
      if (window.innerWidth < 1024) {
        $(".navbar-burger").show();
      }
      $("nav").removeClass("transparent");
    } else {
      $("nav").addClass("transparent");

      $(".navbar-burger").hide();
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

  $(".video-play-btn").click(() => {
    var videoCode = "h9Rl0ChasOY";
    $(".modal iframe").attr(
      "src",
      "https://www.youtube.com/embed/" + videoCode + ""
    );
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

  /*Dynamic Testimonials starts*/
  testimonials = [
    {
      imageName: "vikas.jpeg",
      name: "Vikas",
      Nationality: "",
      designation: "ddd",
      review: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliasquas sequi, aut animi enim dolorum sed doloremque aliquid quosvoluptatibus pariatur similique tenetur ad, nisi magni beataetemporibus sapiente quaerat est placeat et ipsa delectus! Eosillum illo, repellendus quas facilis.iusto, ab quibusdam eaque officiis laboriosam cumque? At impedit`,
      date: "16 Mar 2023",
    },
    {
      imageName: "vikas.jpeg",
      name: "ABC",
      designation: "ddd",
      Nationality: "",
      date: "16 Mar 2023",
      review: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliasquas sequi, aut animi enim dolorum sed doloremque aliquid quosvoluptatibus pariatur similique tenetur ad, nisi magni beataetemporibus sapiente quaerat est placeat et ipsa delectus! Eosillum illo, repellendus quas facilis.iusto, ab quibusdam eaque officiis laboriosam cumque? At impedit`,
    },
  ];

  testimonials.forEach((element) => {
    var testimonialCard =
      ` <div class="swiper-slide">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-96x96">
              <img
                src="Images/Testimony/` +
      element.imageName +
      `"
                alt="Reviewer image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">` +
      element.name +
      `</p>
            <p class="subtitle is-6">` +
      element.designation +
      `</p>
          </div>
        </div>
  
        <div class="content">
         ` +
      element.review +
      `
          <br><br><time datetime="2016-1-1">` +
      element.date +
      `</time>
        </div>
      </div>
    </div>
  </div>`;
    console.log("testimonials");
    $(".testimonialsSwiper .swiper-wrapper").append(testimonialCard);
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
  /*Dynamic Testimonials ends*/

  /*  Booking section starts    */

  // Initialize all input of type date
  options = {
    isRange: "true",

    labelFrom: "Check-In",
    labelTo: "Check-Out",
    minDate: new Date(),
  };
  var calendars = bulmaCalendar.attach('[type="date"]', options);

  // Loop on each calendar initialized
  for (var i = 0; i < calendars.length; i++) {
    // Add listener to select event
    calendars[i].on("select", (date) => {
      console.log(date);
    });
  }

  /*  Booking section ends    */
  $(".whatsappDiv").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".contact-section").offset().top,
      },
      1000
    );
  });

  $("#bookingSubmitbtn").click(function (e) {
    whatsAppBooking();
  });
});

function whatsAppBooking() {
  //Preventing page refresh

  console.log($("#dateSelect").val());

  var adults = $("#adults").val();
  var kids = $("#kids").val();
  var rooms = $("#rooms").val();
  if (
    $("#dateSelect").val() == "" ||
    adults == "" ||
    kids == "" ||
    rooms == ""
  ) {
    alert("Please Enter All The Details To Enquire");
  } else if (isNaN(adults) || isNaN(kids) || isNaN(rooms)) {
    alert(
      "Rooms, Adults and Kids values should be a number. Please enter correct values"
    );
  } else {
    messagetext =
      `Hey...

I am Intrested in booking Villa *@SeaFans*!

*Dates* - ` +
      $("#dateSelect").val() +
      `
*Rooms* - ` +
      rooms +
      `
*Adults* -` +
      adults +
      `
*Kids* -` +
      kids +
      ``;
    htmlLink = "https://wa.me/919834069861?text=" + encodeURI(messagetext) + "";
    window.open(htmlLink, (target = "_blank"));
  }
}
