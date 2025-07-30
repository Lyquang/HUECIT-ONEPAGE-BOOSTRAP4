// window.addEventListener("DOMContentLoaded", function () {
//   const loader = document.getElementById("loader");

//   // Giữ loader trong ít nhất 3 giây
// setTimeout(() => {
//   loader.classList.add("fade-out");
//   setTimeout(() => {
//     // ẩn loader khỏi display
//     loader.style.display = "none";
//     // hiển thị khối mainContent như một div, block
//     const mainContent = document.getElementById("main-content");
//     mainContent.style.display = "block";
//   }, 500); // chờ hiệu ứng fade-out xong
// }, 3000);
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
