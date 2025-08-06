window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  // Giữ loading tối thiểu 3 giây
  const MIN_LOAD_TIME = 3000;
  const startTime = Date.now();

  function hideLoader() {
    const elapsedTime = Date.now() - startTime;
    console.log("elapsedTimeeeeee", elapsedTime);
    const remainingTime = Math.max(0, MIN_LOAD_TIME - elapsedTime);

    setTimeout(() => {
      // hiện maincontent       //   // hiện khối chính

      mainContent.classList.add("fade-in");
      mainContent.style.display = "block";
      loader.classList.add("fade-out");

      AOS.init({
        once: false,
        duration: 1000,
      }); // ✅ Move this here

      setTimeout(() => {
        // tắt loader
        loader.style.display = "none";
      }, 1000);
    }, remainingTime);
  }

  hideLoader();

  // section Home
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade",
    speed: 1500,
  });

  // swiper for product
  const thumbsSwiper = new Swiper(".product-swiper-thumbs", {
    loop: true,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  const mainSwiper = new Swiper(".product-swiper-main", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: thumbsSwiper,
    },
    speed: 3000,
    autoplay: {
      delay: 5000, // không có delay giữa các lần chuyển
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Swiper cho mục Tin tức đào tạo
  const eduNewsSwiper = new Swiper(".edu-news-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    speed: 600,
    navigation: {
      nextEl: "#slideRight",
      prevEl: "#slideLeft",
    },
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  // thong tin giao duc
  new Swiper(".myCourseSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 600,
    loop: true,
    navigation: {
      nextEl: "#slideRight2",
      prevEl: "#slideLeft2",
    },
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1366: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1920: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  // section news
  new Swiper(".myNewsSwiper", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });

  // section SEpark

  new Swiper(".seParkSwiper", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0, // không có delay giữa các lần chuyển
      disableOnInteraction: false,
    },
    freeMode: true, // giúp trượt mượt 1920 1366 991 768 576 375
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1920: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
    },
  });
});

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.onscroll = () => {
  let scrollY = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        let matchingLink = document.querySelector(
          '.navbar-nav .nav-link[href="#' + id + '"]'
        );
        if (matchingLink) {
          matchingLink.classList.add("active");
        }
      });
    }
  });
};

// document.getElementById("slideLeft").addEventListener("click", function () {
//   document.getElementById("eduNewsSlider").scrollBy({
//     left: -355,
//     behavior: "smooth",
//   });
// });

// document.getElementById("slideRight").addEventListener("click", function () {
//   document.getElementById("eduNewsSlider").scrollBy({
//     left: 355,
//     behavior: "smooth",
//   });
// });

// document.getElementById("slideLeft2").addEventListener("click", function () {
//   document.getElementById("courseIT").scrollBy({
//     left: -710,
//     behavior: "smooth",
//   });
// });

// document.getElementById("slideRight2").addEventListener("click", function () {
//   document.getElementById("courseIT").scrollBy({
//     left: 710,
//     behavior: "smooth",
//   });
// });
