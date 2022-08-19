$(document).ready(function () {
  $(".mute-btn").click(function () {
    $("#video").prop("muted", true);
  });

  $(".burger-btn").click(function () {
    $(".nav-collapse").fadeToggle("fast").toggleClass("show");
  });

  const rowit = document.querySelector("#discover-last-cards");
  if ($(window).width() >= 1024) {
    rowit.classList.remove("row");
  } else {
    rowit.classList.add("row");
  }

  // ----------------------------

  function changeBg() {
    var navbar = document.querySelector("#change-nav");
    var colorText1 = document.querySelector(".nav");
    var colorText2 = document.querySelector(".enter-bar");
    var scrollValue = window.scrollY;
    console.log(scrollValue);
    if (scrollValue < 600) {
      navbar.classList.remove("bg-header");
      colorText1.classList.remove("bg-text-header");
      colorText2.classList.remove("bg-text-header2");
    } else {
      navbar.classList.add("bg-header");
      colorText1.classList.add("bg-text-header");
      colorText2.classList.add("bg-text-header2");
    }
  }

  window.addEventListener("scroll", changeBg);

  // ----------------------

  // $(".arrow-down-btn").click(function () {
  //   $(window).scrollTo(0, 1100);
  // });

  // ------------------------------
  const url = "https://jsonplaceholder.typicode.com/users";
  $("#fetchit").click(function () {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    async function get() {
      let res = await fetch(url);
      let data = await res.json();
      console.table(data);
    }
    get();
  });
});
