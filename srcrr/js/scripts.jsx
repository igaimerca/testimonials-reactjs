
import Swiper from "swiper";
import "swiper/css";

//   all ------------------
function initParadoxWay() {
  if (document.querySelector(".testimonials-carousel")?.length > 0) {
    let j2 = new Swiper(".testimonials-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      pagination: {
        el: ".tc-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".listing-carousel-button-next",
        prevEl: ".listing-carousel-button-prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  // bubbles -----------------

  setInterval(function () {
    var size = randomValue(sArray);
    document.querySelector(".bubbles").appendChild(
      '<div class="individual-bubble" style="left: ' +
        randomValue(bArray) +
        "px; width: " +
        size +
        "px; height:" +
        size +
        'px;"></div>'
    );
    document.querySelector(".individual-bubble").animate(
      {
        bottom: "100%",
        opacity: "-=0.7",
      },
      4000,
      function () {
        $(this).remove();
      }
    );
  }, 350);
}

//   Init All ------------------
$(document).ready(function () {
  initParadoxWay();
});
