$(function() {
    "use strict";
    $(window).on("load", function(a) {

      $('.setLang').on('click',function(e){
         e.preventDefault();
         let lang = $(this).data('id');
         $.ajax({
            method: "POST",
            url: "main.php",
            data: { lang: lang}
         })
         .done(function() {
            location.reload();
         });

      })

            $(".preloader").delay(500).fadeOut(500)
        }), $(".navbar-toggler").on("click", function() {
            $(this).toggleClass("active")
        }), $(".navbar-nav a").on("click", function() {
            $(".navbar-toggler").removeClass("active")
        }), $(".navbar-nav a").on("click", function() {
            $(".navbar-collapse").removeClass("show")
        }), $(window).on("scroll", function(a) {
            $(window).scrollTop() < 10 ? $(".header-area").removeClass("sticky") : $(".header-area").addClass("sticky")
        }), $("#nav").onePageNav({
            filter: ":not(.external)",
            currentClass: "active"
        }),
        function() {
            var a = $(".slider-active");

            function s(a) {
                a.each(function() {
                    var a = $(this),
                        s = a.data("delay"),
                        i = "animated " + a.data("animation");
                    a.css({
                        "animation-delay": s,
                        "-webkit-animation-delay": s
                    }), a.addClass(i).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        a.removeClass(i)
                    })
                })
            }
            a.on("init", function(a, i) {
                s($(".single-slider:first-child").find("[data-animation]"))
            }), a.on("beforeChange", function(a, i, n, e) {
                s($('.single-slider[data-slick-index="' + e + '"]').find("[data-animation]"))
            }), a.slick({
                autoplay: !0,
                autoplaySpeed: 5e3,
                dots: !0,
                fade: !0,
                arrows: !1,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        dots: !1,
                        arrows: !1
                    }
                }]
            })
        }(), $(".product-items-active").slick({
            dots: !1,
            infinite: !0,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: !0,
            arrows: !0,
            prevArrow: '<span class="prev"><i class="fas fa-arrow-left"></i></span>',
            nextArrow: '<span class="next"><i class="fas fa-arrow-right"></i></span>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: !1
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: !1
                }
            }]
        }), $(".showcase-active").slick({
            dots: !1,
            infinite: !0,
            speed: 600,
            slidesToShow: 1,
            arrows: !0,
            prevArrow: '<span class="prev"><i class="fas fa-arrow-left"></i></span>',
            nextArrow: '<span class="next"><i class="fas fa-arrow-right"></i></span>',
            adaptiveHeight: !0,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: !1
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: !1
                }
            }]
        }), $(".testimonial-active").slick({
            dots: !1,
            autoplay: !0,
            autoplaySpeed: 2e3,
            infinite: !0,
            speed: 600,
            slidesToShow: 1,
            arrows: !1,
            adaptiveHeight: !0
        }), $(window).on("scroll", function(a) {
            $(this).scrollTop() > 600 ? $(".back-to-top").fadeIn(200) : $(".back-to-top").fadeOut(200)
        }), $(".back-to-top").on("click", function(a) {
            a.preventDefault(), $("html, body").animate({
                scrollTop: 0
            }, 1500)
        }), $(".product-image").slick({
            infinite: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            prevArrow: '<span class="prev"><i class="lni-chevron-left"></i></span>',
            nextArrow: '<span class="next"><i class="lni-chevron-right"></i></i></span>',
            dots: !1
        })
   
});