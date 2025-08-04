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
    effect: "slide", // Có thể thay: "fade", "cube", "coverflow", "flip"
    speed: 1500,
  });
});


// Swiper cho mục Tin tức đào tạo
const eduNewsSwiper = new Swiper(".edu-news-swiper", {
  slidesPerView: 4,
  loop: true,
  speed: 600,
  navigation: {
    nextEl: "#slideRight",
    prevEl: "#slideLeft",
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
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
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
  }
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
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
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
  freeMode: true, // giúp trượt mượt
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
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
