// NativeMain js file

//Мой нативный код
window.addEventListener('load',function () {
  document.querySelector('.menu-burger').onclick = function (event) {
    event.preventDefault();
    document.querySelector(".menu-burger__body").classList.toggle("fade-in");
    //stop-scroll
    document.querySelector(".overlay").classList.toggle("fade-in-overlay");
    document.querySelector("body").classList.toggle("stop-scroll");
    //delete open class
    document.querySelector(".lk__menu-dropdown").classList.remove("fade-in");
  };

  document.querySelector('.login__user-arrow').onclick = function (event) {
    event.preventDefault();
    document.querySelector(".login__user-arrow").classList.toggle("fade-in");
    document.querySelector(".login__user-dropdown").classList.toggle("fade-in");
  };

  document.querySelector('.overlay').onclick = function (event) {
    event.preventDefault();
    document.querySelector(".menu-burger__body").classList.toggle("fade-in");
    //stop-scroll
    document.querySelector(".overlay").classList.toggle("fade-in-overlay");
    document.querySelector("body").classList.toggle("stop-scroll");
  };

  document.querySelector('.lk__menu-arrow').onclick = function (event) {
    event.preventDefault();
    document.querySelector(".lk__menu-arrow").classList.toggle("fade-in");
    document.querySelector(".lk__menu-dropdown").classList.toggle("fade-in");
  };
});
