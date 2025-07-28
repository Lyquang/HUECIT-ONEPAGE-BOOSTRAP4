

window.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  // Hiển thị loader trong 3 giây rồi ẩn đi
  setTimeout(() => {
    loader.style.display = "none";
    mainContent.style.display = "block";
  }, 3000); // 3 giây = 3000ms
});

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.onscroll = () => {
  let scrollY = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        let matchingLink = document.querySelector('.navbar-nav .nav-link[href="#' + id + '"]');
        if (matchingLink) {
          matchingLink.classList.add("active");
        }
      });
    }
  });
};

