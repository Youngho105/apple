const search__Larger = document.querySelector(".nav__link-search");
const nav__listLarger = document.querySelector(".nav__list-larger");
const searchForm__larger = document.querySelector(".searchForm__larger");
const nav__close = document.querySelector(".nav__close");

// Search active
search__Larger.addEventListener("click", () => {
  nav__listLarger.classList.add("active");
  searchForm__larger.classList.add("active");
  nav__close.classList.add("active");
  search__Larger.classList.add("hidden");
});

nav__close.addEventListener("click", () => {
  nav__listLarger.classList.remove("active");
  searchForm__larger.classList.remove("active");
  nav__close.classList.remove("active");
  search__Larger.classList.remove("hidden");
});

// navToggleBtn active
const header = document.querySelector("header");
const nav__toggleBtn = document.querySelector(".nav__toggleBtn");

nav__toggleBtn.addEventListener("click", () => {
  header.classList.toggle("active");
});

// nav__search
const searchInput = document.querySelector(".search__input");
const searchCancel = document.querySelector(".search__cancel");

searchInput.addEventListener("click", () => {
  header.classList.add("upForSearch");
});

searchCancel.addEventListener("click", () => {
  header.classList.remove('upForSearch');
});
