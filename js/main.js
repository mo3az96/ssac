$(window).on("load", function () {
  $(".pre-loader").fadeOut("500", function () {
    $(this).remove();
    $("body").removeClass("overflow");
  });
});

$(document).ready(function () {
  $(".hero-section video").get(0).play();
  if ($(window).width() >= 991) {
    sal({
      once: true,
    });
  } else {
    sal({
      disabled: true,
    });
  }
  lazyLoad();

  mobileClick();
  $(window).on("resize", function () {
    mobileClick();
  });

  /************************************ Fixed Header ************************************/
  $(window).scroll(function () {
    $(this).scrollTop() >= 150
      ? $("header").addClass("fixed")
      : $("header").removeClass("fixed ");
  });
  /************************************ Main Slider ************************************/
  var thumbSwiper = new Swiper(".thumbs-slider .swiper", {
    direction: "vertical",
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 15,
      },
      1439: {
        slidesPerView: 3,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    thumbs: {
      swiper: thumbSwiper,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
        $("video").get(0).play();
      },
    },
  });

  /************************************ Team Slider ************************************/
  var teamSwiper = new Swiper(".team-slider .swiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: "auto",
        spaceBetween: 15,
        centeredSlides: true,
      },

      767: {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 15,
        centeredSlides: false,
      },

      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
    },
    navigation: {
      nextEl: ".team-section .swiper-btn-next,.team-slider .swiper-btn-next ",
      prevEl: ".team-section .swiper-btn-prev,.team-slider .swiper-btn-prev ",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Blog Slider ************************************/
  var blogSwiper = new Swiper(".blog-slider .swiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: "auto",
        spaceBetween: 15,
        centeredSlides: true,
      },
      767: {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
        centeredSlides: false,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
    },
    navigation: {
      nextEl: ".blog-section .swiper-btn-next",
      prevEl: ".blog-section .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ post Sliders ************************************/

  var thumbPostSwiper = new Swiper(".post-thumbs-slider .swiper", {
    // loop: true,

    breakpoints: {
      0: {
        spaceBetween: 10,
        slidesPerView: 4,
      },
      767: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 5,
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 6,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  var mainPostSwiper = new Swiper(".post-main-slider .swiper", {
    // loop: true,
    spaceBetween: 15,
    thumbs: {
      swiper: thumbPostSwiper,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
    navigation: {
      nextEl: ".post-thumbs-slider .swiper-btn-next",
      prevEl: ".post-thumbs-slider .swiper-btn-prev",
    },
  });

  /************************************ Modal Swiper ************************************/
  var modals = $(".gallery-modal");
  for (var i = 0; i < modals.length; i++) {
    var modal = "#" + $(modals[i]).attr("id");
    var thumbGallerySwiper = i;
    var mainGallerySwiper = i;
    var myvideos = i;
    thumbGallerySwiper = new Swiper(modal + " .gallery-thumbs-slider .swiper", {
      loop: true,

      breakpoints: {
        0: {
          spaceBetween: 10,
          slidesPerView: 3,
        },
        767: {
          spaceBetween: 5,
          slidesPerView: 5,
        },
        992: {
          spaceBetween: 5,
          slidesPerView: 5,
        },
        1199: {
          spaceBetween: 15,
          slidesPerView: 5,
        },
      },
      on: {
        init: function (swiper) {
          lazyLoad();
        },
      },
    });
    mainGallerySwiper = new Swiper(modal + " .gallery-main-slider .swiper", {
      loop: true,
      spaceBetween: 15,
      thumbs: {
        swiper: thumbGallerySwiper,
      },
      navigation: {
        nextEl: ".gallery-thumbs-slider .swiper-btn-next",
        prevEl: ".gallery-thumbs-slider .swiper-btn-prev",
      },
      on: {
        init: function (swiper) {
          lazyLoad();
        },
      },
    });
    mainGallerySwiper.on("slideChange", function () {
      $(".swiper video").trigger("pause");
    });

    myvideos = document.getElementById($(modals[i]).attr("id"));
    myvideos.addEventListener("hide.bs.modal", (event) => {
      $("video").trigger("pause");
    });
  }

  /************************************ Course Block ************************************/
  $(".course-block .acc-header").click(function (e) {
    $(this).toggleClass("closed").next().slideToggle();
  });

  /************************************ Video ************************************/
  $(".gallery-main-img .video-icon").click(function (e) {
    $(this).fadeOut();
    $(this).parents(".gallery-main-img").find("video").trigger("play");
  });

  $(".gallery-main-img video").on({
    play: function () {
      $(this).parent(".gallery-main-img").find(".video-icon").fadeOut();
    },
  });
  /************************************ Form ************************************/
  $(".profile-img input").change(function () {
    let input = $(this)[0];
    if (input.files[0]) {
      $(".profile-img .img-content").append("<img />");
      $(".profile-img .img-content img")[0].src = (
        window.URL ? URL : webkitURL
      ).createObjectURL(input.files[0]);
    } else {
      $(".profile-img .img-content").find("img").remove();
    }
  });

  $(".file-content input").change(function () {
    var previewParent = $(this).siblings(".file-preview");
    var preview = previewParent.find("span");
    var file = $(this)[0].files[0];
    if (file) {
      var fileName = $(this)[0].files[0].name;
      $(preview).text(fileName);
      $(previewParent).addClass("active");
    } else {
      $(preview).text("");
      $(previewParent).removeClass("active");
    }
  });

  $(".file-content .delete").click(function () {
    var el = $(this).parents(".file-content").find("input");
    el.wrap("<form>").closest("form").get(0).reset();
    el.unwrap();
    $(this).parent().removeClass("active");
  });

  $(".add-input").click(function () {
    var placeholder = $(this)
      .parents(".form-group")
      .find("input")
      .attr("placeholder");
    $(
      '<div class="additional-input"><input type="text" class="form-control" placeholder="' +
        placeholder +
        '" /><button type="button" class="delete-additional-input"><img src="images/form/delete.svg" class="svg" /></button></div>'
    ).insertBefore(this);
    toSvg();
  });
  $("body").on("click", ".delete-additional-input", function (event) {
    $(this).parents(".additional-input").remove();
  });
  if ($(window).width() >= 992) {
    $("select").select2({
      minimumResultsForSearch: Infinity,
      width: "100%",
    });
  }
  if ($("input[type='date']").length > 0) {
    var maxDate = $("input[type='date']").data("max"),
      disabledDate = $("input[type='date']").data("disabled").split(",");
    flatpickr("input[type='date']", {
      locale: document.dir == "rtl" ? "ar" : "en",
      minDate: "today",
      dateFormat: "d/m/Y",
      maxDate: maxDate,
      disable: disabledDate,
    });
  }
  // flatpickr("input[type='time']", {
  //   enableTime: true,
  //   noCalendar: true,
  //   minTime: minTime,
  //   maxTime: maxTime,
  //   dateFormat: "H:i",
  // });

  $(".password-eye").click(function (e) {
    if (e.isDefaultPrevented()) return;
    e.preventDefault();
    e.stopPropagation();
    let eye = $(this);
    let input = $(this).parents(".password-content").find("input.form-control");
    if ($(input).attr("type") == "password") {
      $(input).attr("type", "text");
      eye.addClass("active");
    } else {
      $(input).attr("type", "password");
      eye.removeClass("active");
    }
  });

  $(".forget-submit").click(function (e) {
    e.preventDefault();
    $(".otp-content").slideDown();
    $(".otp-inputs *:input:first").focus();
    startTimer($(".resend button").data("duration"));
  });
  const otpModal = document.getElementById("otpModal");
  if (otpModal) {
    otpModal.addEventListener("show.bs.modal", (event) => {
      if (!$(".resend button").hasClass("counting")) {
        $(".resend button").attr("disabled", "disabled");
        startTimer($(".resend button").data("duration"));
      }
    });
  }
  $(".resend button").click(function (e) {
    if (!$(".resend button").hasClass("counting")) {
      $(".resend button").attr("disabled", "disabled");
      startTimer($(".resend button").data("duration"));
    }
  });
  const inputElements = [...document.querySelectorAll("input.otp-field")];

  inputElements.forEach((ele, index) => {
    ele.addEventListener("input", (e) => {
      const [first] = e.target.value;
      e.target.value = first ?? "";
      const lastInputBox = index === inputElements.length - 1;
      const insertedContent = first !== undefined;
      if (insertedContent && !lastInputBox) {
        inputElements[index + 1].removeAttribute("disabled");
        inputElements[index + 1].focus();
        inputElements[index + 1].dispatchEvent(new Event("input"));
      }
      if (insertedContent && lastInputBox) {
        document.getElementById("code-submit-btn").classList.remove("disabled");
      }
    });
  });
});

function mobileClick() {
  /************************************ Side Menu ************************************/
  if ($(window).width() <= 993) {
    $(".menu-btn").on("click", (e) => {
      if (e.isDefaultPrevented()) return;
      e.preventDefault();
      e.stopPropagation();
      $(".overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });

    $(".close-menu,.overlay").on("click", (e) => {
      if (e.isDefaultPrevented()) return;
      e.preventDefault();
      e.stopPropagation();
      $(".overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });

    $(".nav-list a[role=button]").click(function (e) {
      if (e.isDefaultPrevented()) return;
      e.preventDefault();
      e.stopPropagation();
      $(".nav-list a[role=button]").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".nav-list a[role=button]").not(this).siblings().slideUp(500);
    });
  } else {
    $(".menu-btn,.close-menu,.overlay,.has-children>a,.lang-btn").off("click");
    $("body").removeClass("overflow");
  }
  /************************************ Footer ************************************/
  if ($(window).width() <= 767) {
    $(".footer-title").click(function (e) {
      if (e.isDefaultPrevented()) return;
      e.preventDefault();
      e.stopPropagation();
      $(".footer-title").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".footer-title").not(this).siblings().slideUp(500);
    });
  } else {
    $(".footer-title").off("click");
  }
}

function copyToClipboard(text) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();
}

function startTimer(duration) {
  $(".resend button").addClass("counting");
  var timeout = setTimeout(function () {
    var time = duration;
    var i = 1;
    var k = (i / duration) * 100;
    var l = 100 - k;
    i++;

    $("#c1").css({ "stroke-dasharray": [l, k], "stroke-dasharray": l });
    $("#c2").css("stroke-dasharray", [k, l]);
    $("#counterText").text(duration + 1 - i);
    var interval = setInterval(function () {
      if (i > time) {
        clearInterval(interval);
        clearTimeout(timeout);
        return;
      }
      k = (i / duration) * 100;
      l = 100 - k;
      $("#c1").css({ "stroke-dasharray": [l, k], "stroke-dasharray": l });
      $("#c2").css("stroke-dasharray", [k, l]);
      $("#counterText").text(duration + 1 - i);

      i++;
      if (duration + 1 - i == 0) {
        $(".resend button").removeAttr("disabled").removeClass("counting");
      }
    }, 1000);
  }, 0);
}
