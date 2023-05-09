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
    $(".navbar-burger").hide();
    if ($(document).scrollTop() > 50) {
      if (window.innerWidth < 1024) {
        // $(".navbar-burger").show();
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
    autoplay: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".banner-div p").show();
  async function youtubeModalHandle() {
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
  }
  youtubeModalHandle();
  /*Fly In animation Starts*/
  setTimeout(() => {
    const block = document.querySelector(".fly-in-block");
    const blockOffset = block.offsetTop;
    console.log("block offset ", blockOffset);
    console.log("block offset ", blockOffset);

    const triggerAnimation = () => {
      const scrollHeight = window.pageYOffset + 200;
      //console.log("scrollHeight offset ", scrollHeight);
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

  addTestimonials();
  /*Dynamic Testimonials ends*/

  /*  Booking section starts    */

  // Initialize all input of type date

  initiateBulmaCalender();
  /*  Booking section ends    */
  $(".whatsappDiv").click(() => {
    $("html, body").animate(
      {
        scrollTop:
          $(".booking-part").offset().top - ($(".navbar ").height() + 50),
      },
      1000
    );
  });

  $(".mouse-icon").click(() => {
    $("html, body").animate(
      {
        scrollTop: $("#intro").offset().top - 77,
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

I am Intrested in booking Villa *@ Sea Nest*!

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
async function initiateBulmaCalender() {
  options = {
    isRange: "true",

    labelFrom: "Check-In",
    labelTo: "Check-Out",
    dateFormat: "dd/MM/yyyy",
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
}
async function addTestimonials() {
  testimonials = [
    {
      imageName: "Shamika.webp",
      name: "Shamika",
      Nationality: "India",
      designation: "Airbnb",
      review: `The place has amazing view.. the place where you can enjoy sea view, best sunset and star gazing at night.. huge villa within nature… beautiful beaches around to visit .. Host is really helpful and great support with continuous follow ups..`,
      date: "11 Feb 2023",
    },
    {
      imageName: "Siddharth.webp",
      name: "Siddharth",
      Nationality: "India",
      designation: "Airbnb",
      review: `I stayed at this property for 2 nights, with my senior citizen parents. <br>
      Mr. Advait, the host, is excellent and proactive. He patiently answered numerous questions, about our stay, food and travel in Konkan, before and during the stay at his beautiful property. <br>
      The place is situated on a hill, close to Ganapatipule, offering it a vantage point. It has well decorated rooms, kitchen, hall and a balcony offering a superb view of the valley and the sea. It is adorned with a garden, containing a bouquet of aromatic flowers, herbs and small water body with lotus. The entire place exudes serenity, space, and a positive vibe, as it is built keeping in mind Vastu architectural principles and local heritage. <br>
      The view of the Arabian sea and the nearby beaches from the property (bed rooms and the balcony) is absolutely stunning. It offers a spectacular sunset over the sea. Hence, most evenings we stayed back, as we did not wish to miss this mesmerising sight. <br>`,
      date: "20 Feb 2023",
    },
    {
      imageName: "vikas.webp",
      name: "Vikas",
      Nationality: "India",
      designation: "Booking.com",
      review: `Hotel Sea Nest is amazingly beautiful with a very soothing interior and also a very eco --friendly terrace with a warm hospitality. <br>
      A beautiful place to relax and makes us feel -at -home. <br>
      I had a great experience during my stay there. The rooms are very classy with all the facilities to fulfil our needs. <br>
      The food served there is very delicious. And also not forgetting to mention about the management, who are very pleasing. <br>
      As a whole, I had a very good time there and would surely like to visit there again. <br>
      Special thanks to Mr.Advait Sir who helped us in every possible way. <br>`,
      date: "16 Mar 2023",
    },

    {
      imageName: "niraj.webp",
      name: "Niraj Dodake",
      Nationality: "India",
      designation: "Booking.com",
      review: `The stay at sea nest was awesome! The property that you have built is simply perfect! Would like to mention the minute details that you have kept in mind! Be it the kitchen with all the groceries or the number of coldrinks,eggs or butter you have kept inside the refrigerator! The packs of Maggi everything was just superb!<br>

      The dinning table,sofa and the cleanliness,the ample doormats that you have kept everything was very thoughtful!<br>
      
      Lastly the carrom board along with the nicely preserved dice, carrom discs and the sadhguru book everything was great! The bicycle and view from the top was mesmerising!!<br>
      
      Everythings aside your hospitality made us feel the warmth! 👍🏻👍🏻`,
      date: "20 Mar 2023",
    },
    {
      imageName: "Aiyush.webp",
      name: "Aiyush",
      designation: "Airbnb",
      Nationality: "India",
      date: "15 Apr 2023",
      review: `I had an absolutely amazing stay at the Hilltop Villa with Panoramic Seaview and Tropical Garden! 
      This place truly exceeded all of my expectations and provided the perfect retreat for my family vacation. <br>
      The villa itself was beautiful and immaculately clean, with a spacious and comfortable living area, well-equipped kitchen, and comfortable bedrooms. <br>
      The highlight of the villa, however, was undoubtedly the breathtaking panoramic seaview that greeted me each morning from the terrace. 
      It was truly a sight to behold, and I found myself spending many hours just sitting outside and taking in the stunning scenery. <br>
      The tropical garden surrounding the villa was also a delight, and added to the overall peaceful and relaxing atmosphere of the property. 
      Throughout my stay, the owners were incredibly hospitable and attentive, always available to answer any questions or provide recommendations. <br>
      If you're looking for a peaceful and beautiful place to stay in the area, this is definitely a try.`,
    },
  ];
  var testimonialCard = "";
  testimonials.forEach((element) => {
    testimonialCard +=
      ` <div class="swiper-slide">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-96x96">
              <img loading="lazy"
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
        <div class="review"> ` +
      element.review +
      `
      </div><br><time datetime="2016-1-1">` +
      element.date +
      `</time>
        </div>
      </div>
    </div>
  </div>`;
    console.log("testimonials");
  });
  $(".testimonialsSwiper .swiper-wrapper").append(testimonialCard);
  //Initialize swiper
  let testimonialSwiper = new Swiper(".testimonialsSwiper", {
    lazy: true,
    loop: true,
    autoplay: true,
    centeredSlides: true,
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
}
