const navILinks = document.querySelectorAll(".header__nav-link");
const header = document.querySelector(".header");
const nav = document.querySelector(".header__nav");
const burger = document.querySelector(".header__burger");
const body = document.querySelector("body");
const logo = document.querySelector(".header__logo");
const height = document.documentElement.clientHeight;

logo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function removeClasses() {
  nav.classList.remove("header__nav--active");
  burger.classList.remove("header__burger--active");
  body.classList.remove('stop-scroll');
  setTimeout(() => {
    nav.classList.remove("header__nav--block");
  }, 500);
}

burger.addEventListener("click", () => {
  if (nav.classList.contains("header__nav--active")) {
    removeClasses();
  } else {
    nav.classList.add("header__nav--block");
    setTimeout(() => {
      nav.classList.add("header__nav--active");
      burger.classList.add("header__burger--active");
      body.classList.add('stop-scroll');
    }, 100);
  }
});

navILinks.forEach(link => {
  link.addEventListener('click', (e) => {
    removeClasses();
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
  })
})
