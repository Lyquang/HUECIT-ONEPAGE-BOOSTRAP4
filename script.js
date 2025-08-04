
window.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("newsSlider");

  if (!slider) return;

  const scrollStep = 355; // scroll by 300px (roughly 1 card width)
  const scrollInterval = 4000; // 2 seconds

  setInterval(() => {
    // Scroll right
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      // If reached the end, scroll back to start
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: scrollStep, behavior: "smooth" });
    }
  }, scrollInterval);
});

// window.addEventListener("DOMContentLoaded", () => {
//   const slider = document.getElementById("newsSlider");

//   if (!slider) return;

//   // Lấy 1 card bất kỳ
//   const card = slider.querySelector(".col-md-3  card h-100 border-0");
//   if (!card) return;

//   // Đảm bảo DOM đã render hoàn chỉnh (bắt buộc)
//   setTimeout(() => {
//     const style = window.getComputedStyle(card);
//     const marginRight = parseInt(style.marginRight) || 0;
//     const cardWidth = card.offsetWidth + marginRight;
//     console.log("card width", cardWidth);

//     const scrollInterval = 2000; // 2 giây

//     setInterval(() => {
//       const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

//       if (slider.scrollLeft + cardWidth >= maxScrollLeft) {
//         // Nếu tới cuối, quay về đầu
//         slider.scrollTo({ left: 0, behavior: "smooth" });
//       } else {
//         // Scroll đúng 1 card
//         slider.scrollBy({ left: cardWidth, behavior: "smooth" });
//       }
//     }, scrollInterval);
//   }, 100); // Đợi 100ms cho chắc chắn layout đã tính xong
// });


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

document.getElementById("slideLeft").addEventListener("click", function () {
  document.getElementById("eduNewsSlider").scrollBy({
    left: -300, // scroll về trái 300px
    behavior: "smooth",
  });
});

document.getElementById("slideRight").addEventListener("click", function () {
  document.getElementById("eduNewsSlider").scrollBy({
    left: 300, // scroll qua phải 300px
    behavior: "smooth",
  });
});

document.getElementById("slideLeft2").addEventListener("click", function () {
  document.getElementById("courseIT").scrollBy({
    left: -300, // scroll về trái 300px
    behavior: "smooth",
  });
});

document.getElementById("slideRight2").addEventListener("click", function () {
  document.getElementById("courseIT").scrollBy({
    left: 300, // scroll qua phải 300px
    behavior: "smooth",
  });
});
