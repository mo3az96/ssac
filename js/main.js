$(window).on("load", function () {
  $("body").removeClass("overflow");
});

$(document).ready(function () {
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
    a11y: {
      enabled: false,
    },
    direction: "vertical",
    slidesPerView: 3,
    loop: true,
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
    a11y: {
      enabled: false,
    },
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // disableOnInteraction: false,
    // },
    effect: "fade",
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

  /************************************ Form ************************************/
  $(".file-content input").change(function () {
    var previewParent = $(this).siblings(".file-preview");
    var preview = previewParent.find("span");
    var file = $(this)[0].files[0];
    console.log(file);
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
      '<input type="text" class="form-control" placeholder="' +
        placeholder +
        '" />'
    ).insertBefore(this);
  });

  if ($(window).width() >= 992) {
    $("select").select2({
      minimumResultsForSearch: Infinity,
      width: "100%",
    });
  }
  $("#dateTimePicker").DateTimePicker({
    timeFormat: "hh:mm AA",
    language: document.dir == "rtl" ? "ar" : "",
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
