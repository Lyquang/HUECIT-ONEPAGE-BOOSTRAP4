window.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  // Giữ loader trong ít nhất 3 giây
setTimeout(() => {
  loader.classList.add("fade-out");
  setTimeout(() => {
    // ẩn loader khỏi display
    loader.style.display = "none";
    // hiển thị khối mainContent như một div, block
    mainContent.style.display = "block";
  }, 500); // chờ hiệu ứng fade-out xong
}, 3000);
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

