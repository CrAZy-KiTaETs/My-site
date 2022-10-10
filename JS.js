$(function () {
  $(".examples-of-works").slick({
    slidesToShow: 3,
    swipe: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: true,
          slidesToShow: 2,
          arrows: false,
          swipe: true,
        },
      },
      {
        breakpoint: 426,
        settings: {
          dots: true,
          slidesToShow: 1,
          swipe: true,
          arrows: false,
        },
      },
    ],
  });
  $(".burger").click(function () {
    $(".burger, #nav, body").toggleClass("active");
  });
  $(document).click(function (e) {
    if (!$(e.target).closest("#nav").length) {
      $(".burger, #nav, body").removeClass("active");
    }
  });
  $("#closeBtn").click(function () {
    $(".popup").toggleClass("opened");
    $("body").removeClass("hide");
  });
  $(".callme, #callme-png-btn").click(function () {
    $(".popup").toggleClass("opened");
    $("body").toggleClass("hide");
  });
  $(".callme-in-popup").click(function () {
    $(this).css("display", "none");
    $(".thx").toggleClass("opened");
    $("#popup-inp").val("");
  });
  $(".popup").click(function (event) {
    if (event.target == this) {
      $(this).toggleClass("opened");
      $("body").removeClass("hide");
    }
  });
});
